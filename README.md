# Durablefunction
Durable function app learning demo
//Install durable function - console
npm install durable-function

<!-- Create three function
Client function: Http start
Orchestrator function: OrchFunction
Activity function: Approval -->


//Function URL
https://learndurablefunction.azurewebsites.net/api/orchestrators/{functionName}?code=uLpurQGReslDsTcLrgwseVGULOLCR67INc4ii2abLISK6/R4u1TskQ==

//Orchestrator call - The response message contains a set of URI endpoints that you can use to monitor and manage the execution.
https://learndurablefunction.azurewebsites.net/api/orchestrators/OrchFunction?code=uLpurQGReslDsTcLrgwseVGULOLCR67INc4ii2abLISK6/R4u1TskQ==

Response:
{
  "id": "0de13d526dd34c069361850c7d6a3627",
  "statusQueryGetUri": "https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627?taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q==",
  "sendEventPostUri": "https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627/raiseEvent/{eventName}?taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q==",
  "terminatePostUri": "https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627/terminate?reason={text}&taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q==",
  "rewindPostUri": "https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627/rewind?reason={text}&taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q==",
  "purgeHistoryDeleteUri": "https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627?taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q==",
  "restartPostUri": "https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627/restart?taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q=="
}

//Status - The first time, the activity function indicates that the project proposal has been accepted. The second time, the proposal is rejected. The messages from both function calls are combined by the orchestration function and returned to the client function.

https://learndurablefunction.azurewebsites.net/runtime/webhooks/durabletask/instances/0de13d526dd34c069361850c7d6a3627?taskHub=learndurablefunction&connection=Storage&code=ccrYZi10wKfAtmywo5uTWMklWwSdRLZxa7jIvqa/HTgMEeRUAe0e8Q==

{"name":"OrchFunction","instanceId":"0de13d526dd34c069361850c7d6a3627","runtimeStatus":"Completed","input":null,"customStatus":null,"output":["Your project design proposal has been -  Approved!","Your project design proposal has been -  Rejected!"],"createdTime":"2022-02-11T04:42:49Z","lastUpdatedTime":"2022-02-11T04:42:50Z"}
