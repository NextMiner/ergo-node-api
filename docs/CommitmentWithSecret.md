# ErgoNodeApi.CommitmentWithSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hint** | **String** |  | 
**pubkey** | [**SigmaBoolean**](SigmaBoolean.md) |  | 
**position** | **String** |  | 
**type** | **String** |  | [optional] 
**a** | **String** | a group element of the commitment | 
**b** | **String** | b group element of the commitment (needed for DHT protocol only) | [optional] 



## Enum: HintEnum


* `cmtWithSecret` (value: `"cmtWithSecret"`)

* `cmtReal` (value: `"cmtReal"`)

* `cmtSimulated` (value: `"cmtSimulated"`)





## Enum: TypeEnum


* `dlog` (value: `"dlog"`)

* `dht` (value: `"dht"`)




