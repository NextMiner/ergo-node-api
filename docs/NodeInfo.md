# ErgoNodeApi.NodeInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**appVersion** | **String** |  | 
**fullHeight** | **Number** | Can be &#39;null&#39; if state is empty (no full block is applied since node launch) | 
**headersHeight** | **Number** | Can be &#39;null&#39; if state is empty (no header applied since node launch) | 
**bestFullHeaderId** | **String** | Can be &#39;null&#39; if no full block is applied since node launch | 
**previousFullHeaderId** | **String** | Can be &#39;null&#39; if no full block is applied since node launch | 
**bestHeaderId** | **String** | Can be &#39;null&#39; if no header applied since node launch | 
**stateRoot** | **String** | Can be &#39;null&#39; if state is empty (no full block is applied since node launch) | 
**stateType** | **String** |  | 
**stateVersion** | **String** | Can be &#39;null&#39; if no full block is applied since node launch | 
**isMining** | **Boolean** |  | 
**peersCount** | **Number** | Number of connected peers | 
**unconfirmedCount** | **Number** | Current unconfirmed transactions count | 
**difficulty** | **Number** | Difficulty on current bestFullHeaderId. Can be &#39;null&#39; if no full block is applied since node launch | 
**currentTime** | **Number** | Current internal node time | 
**launchTime** | **Number** | Time when the node was started | 
**headersScore** | **Number** | Can be &#39;null&#39; if no headers is applied since node launch | 
**fullBlocksScore** | **Number** | Can be &#39;null&#39; if no full block is applied since node launch | 
**genesisBlockId** | **String** | Can be &#39;null&#39; if genesis blocks is not produced yet | 
**parameters** | [**Parameters**](Parameters.md) |  | 



## Enum: StateTypeEnum


* `digest` (value: `"digest"`)

* `utxo` (value: `"utxo"`)




