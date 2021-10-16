# ErgoNodeApi.ErgoTransactionOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxId** | **String** | Base16-encoded transaction box id bytes. Should be 32 bytes long | [optional] 
**value** | **Number** | Amount of Ergo token | 
**ergoTree** | **String** | Base16-encoded ergo tree bytes | 
**creationHeight** | **Number** | Height the output was created at | 
**assets** | [**[Asset]**](Asset.md) | Assets list in the transaction | [optional] 
**additionalRegisters** | **{String: String}** | Ergo box registers | 
**transactionId** | **String** | Base16-encoded transaction id bytes | [optional] 
**index** | **Number** | Index in the transaction outputs | [optional] 


