# ErgoNodeApi.SigmaHeader

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Base16-encoded 32 byte modifier id | [optional] 
**timestamp** | **Number** | Basic timestamp definition | 
**version** | **Number** | Ergo blockchain protocol version | 
**adProofsRoot** | **String** | Base16-encoded 32 byte digest | 
**adProofsId** | **String** | Base16-encoded 32 byte modifier id | [optional] 
**stateRoot** | [**AvlTreeData**](AvlTreeData.md) |  | 
**transactionsRoot** | **String** | Base16-encoded 32 byte digest | 
**transactionsId** | **String** | Base16-encoded 32 byte modifier id | [optional] 
**nBits** | **Number** |  | 
**extensionHash** | **String** | Base16-encoded 32 byte digest | 
**extensionRoot** | **String** | Base16-encoded 32 byte digest | [optional] 
**extensionId** | **String** | Base16-encoded 32 byte modifier id | [optional] 
**height** | **Number** |  | 
**size** | **Number** |  | [optional] 
**parentId** | **String** | Base16-encoded 32 byte modifier id | 
**powSolutions** | [**PowSolutions**](PowSolutions.md) |  | [optional] 
**votes** | **String** | Base16-encoded votes for a soft-fork and parameters | 
**minerPk** | **String** |  | [optional] 
**powOnetimePk** | **String** |  | [optional] 
**powNonce** | **String** | Base16-encoded 32 byte digest | [optional] 
**powDistance** | **Number** | sigma.BigInt | [optional] 


