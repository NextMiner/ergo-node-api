# ErgoNodeApi.Parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **Number** | Height when current parameters were considered(not actual height). Can be &#39;0&#39; if state is empty | 
**storageFeeFactor** | **Number** | Storage fee coefficient (per byte per storage period ~4 years) | 
**minValuePerByte** | **Number** | Minimum value per byte of an output | 
**maxBlockSize** | **Number** | Maximum block size (in bytes) | 
**maxBlockCost** | **Number** | Maximum cumulative computational cost of input scripts in block transactions | 
**blockVersion** | **Number** | Ergo blockchain protocol version | 
**tokenAccessCost** | **Number** | Validation cost of a single token | 
**inputCost** | **Number** | Validation cost per one transaction input | 
**dataInputCost** | **Number** | Validation cost per one data input | 
**outputCost** | **Number** | Validation cost per one transaction output | 


