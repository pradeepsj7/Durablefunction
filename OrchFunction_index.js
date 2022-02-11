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
