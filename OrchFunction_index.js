const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
    const outputs = [];

    /*
    * We will call the approval activity with a reject and an approved to simulate both
    */

    outputs.push(yield context.df.callActivity("Approval", "Approved"));
    outputs.push(yield context.df.callActivity("Approval", "Rejected"));

    return outputs;
});
//This code calls an Activity function named Approval, which you'll create shortly. The code in the orchestrator function invokes the Approval function twice. The first time simulates accepting the proposal, and the second time tests the proposal rejection logic.
