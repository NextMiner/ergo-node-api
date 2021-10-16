# ErgoNodeApi.CandidateBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **Number** |  | [optional] 
**extensionHash** | **String** | Base16-encoded 32 byte digest | 
**timestamp** | **Number** | Basic timestamp definition | [optional] 
**stateRoot** | **String** | Base16-encoded 33 byte digest - digest with extra byte with tree height | [optional] 
**nBits** | **Number** |  | [optional] 
**adProofBytes** | **String** | Base16-encoded ad proofs | [optional] 
**parentId** | **String** | Base16-encoded 32 byte modifier id | 
**transactionsNumber** | **Number** |  | [optional] 
**transactions** | [**[ErgoTransaction]**](ErgoTransaction.md) | Ergo transaction objects | [optional] 
**votes** | **String** | Base16-encoded votes for a soft-fork and parameters | [optional] 


