# ErgoNodeApi.MiningApi

All URIs are relative to *https://api.jsonbin.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**miningReadMinerRewardAddress**](MiningApi.md#miningReadMinerRewardAddress) | **GET** /mining/rewardAddress | Read miner reward address
[**miningReadMinerRewardPubkey**](MiningApi.md#miningReadMinerRewardPubkey) | **GET** /mining/rewardPublicKey | Read public key associated with miner rewards
[**miningRequestBlockCandidate**](MiningApi.md#miningRequestBlockCandidate) | **GET** /mining/candidate | Request block candidate
[**miningRequestBlockCandidateWithMandatoryTransactions**](MiningApi.md#miningRequestBlockCandidateWithMandatoryTransactions) | **POST** /mining/candidateWithTxs | Request block candidate
[**miningSubmitSolution**](MiningApi.md#miningSubmitSolution) | **POST** /mining/solution | Submit solution for current candidate



## miningReadMinerRewardAddress

> InlineResponse2005 miningReadMinerRewardAddress()

Read miner reward address

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.MiningApi();
apiInstance.miningReadMinerRewardAddress((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## miningReadMinerRewardPubkey

> InlineResponse2006 miningReadMinerRewardPubkey()

Read public key associated with miner rewards

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.MiningApi();
apiInstance.miningReadMinerRewardPubkey((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## miningRequestBlockCandidate

> WorkMessage miningRequestBlockCandidate()

Request block candidate

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.MiningApi();
apiInstance.miningRequestBlockCandidate((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**WorkMessage**](WorkMessage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## miningRequestBlockCandidateWithMandatoryTransactions

> WorkMessage miningRequestBlockCandidateWithMandatoryTransactions(ergoTransaction)

Request block candidate

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.MiningApi();
let ergoTransaction = [new ErgoNodeApi.ErgoTransaction()]; // [ErgoTransaction] | 
apiInstance.miningRequestBlockCandidateWithMandatoryTransactions(ergoTransaction, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ergoTransaction** | [**[ErgoTransaction]**](ErgoTransaction.md)|  | 

### Return type

[**WorkMessage**](WorkMessage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## miningSubmitSolution

> miningSubmitSolution(powSolutions)

Submit solution for current candidate

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.MiningApi();
let powSolutions = new ErgoNodeApi.PowSolutions(); // PowSolutions | 
apiInstance.miningSubmitSolution(powSolutions, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **powSolutions** | [**PowSolutions**](PowSolutions.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

