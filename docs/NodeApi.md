# ErgoNodeApi.NodeApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeShutdown**](NodeApi.md#nodeShutdown) | **POST** /node/shutdown | Shuts down the node



## nodeShutdown

> nodeShutdown()

Shuts down the node

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.NodeApi();
apiInstance.nodeShutdown((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

