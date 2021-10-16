# ErgoNodeApi.ErgoLikeContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastBlockUtxoRoot** | [**AvlTreeData**](AvlTreeData.md) |  | 
**headers** | [**[SigmaHeader]**](SigmaHeader.md) | fixed number of last block headers in descending order (first header is the newest one) | 
**preHeader** | [**PreHeader**](PreHeader.md) |  | 
**dataBoxes** | [**[ErgoTransactionOutput]**](ErgoTransactionOutput.md) | boxes, that corresponds to id&#39;s of &#x60;spendingTransaction.dataInputs&#x60; | 
**boxesToSpend** | [**[ErgoTransactionOutput]**](ErgoTransactionOutput.md) | boxes, that corresponds to id&#39;s of &#x60;spendingTransaction.inputs&#x60; | 
**spendingTransaction** | [**ErgoLikeTransaction**](ErgoLikeTransaction.md) |  | 
**selfIndex** | **Number** | index of the box in &#x60;boxesToSpend&#x60; that contains the script we&#39;re evaluating | 
**extension** | **Object** | prover-defined key-value pairs, that may be used inside a script | 
**validationSettings** | **String** | validation parameters passed to Interpreter.verify to detect soft-fork conditions | 
**costLimit** | **Number** | hard limit on accumulated execution cost, if exceeded lead to CostLimitException to be thrown | 
**initCost** | **Number** | initial value of execution cost already accumulated before Interpreter.verify is called | 


