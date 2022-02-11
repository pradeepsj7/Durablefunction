const df = require("durable-functions");
const moment = require("moment");
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    const deadline = moment.utc(context.df.currentUtcDateTime).add(20, "s");
    const activityTask = context.df.waitForExternalEvent("Approval");
    const timeoutTask = context.df.createTimer(deadline.toDate());

    const winner = yield context.df.Task.any([activityTask, timeoutTask]);
    if (winner === activityTask) {
        outputs.push(yield context.df.callActivity("Approval", "Approved"));
    }
    else
    {
        outputs.push(yield context.df.callActivity("Escalation", "Head of department"));
    }

    if (!timeoutTask.isCompleted) {
        // All pending timers must be complete or canceled before the function exits.
        timeoutTask.cancel();
    }

    return outputs;
});

//This code calls an Activity function named Approval, which you'll create shortly. The code in the orchestrator function invokes the Approval function twice. The first time simulates accepting the proposal, and the second time tests the proposal rejection logic.
//If the Approval function doesn't respond within 20 seconds, the Escalation function is called. The code also changes the call to Approval to wait for an external input. This way we can control when the response comes back for testing purposes.
