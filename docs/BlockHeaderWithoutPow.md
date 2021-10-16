# ErgoNodeApi.BlockHeaderWithoutPow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Base16-encoded 32 byte modifier id | 
**timestamp** | **Number** | Basic timestamp definition | 
**version** | **Number** | Ergo blockchain protocol version | 
**adProofsRoot** | **String** | Base16-encoded 32 byte digest | 
**stateRoot** | **String** | Base16-encoded 33 byte digest - digest with extra byte with tree height | 
**transactionsRoot** | **String** | Base16-encoded 32 byte digest | 
**nBits** | **Number** |  | 
**extensionHash** | **String** | Base16-encoded 32 byte digest | 
**height** | **Number** |  | 
**difficulty** | **Number** |  | 
**parentId** | **String** | Base16-encoded 32 byte modifier id | 
**votes** | **String** | Base16-encoded votes for a soft-fork and parameters | 
**size** | **Number** | Size in bytes | [optional] 
**extensionId** | **String** | Base16-encoded 32 byte modifier id | [optional] 
**transactionsId** | **String** | Base16-encoded 32 byte modifier id | [optional] 
**adProofsId** | **String** | Base16-encoded 32 byte modifier id | [optional] 


