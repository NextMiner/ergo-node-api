# ErgoNodeApi.InfoApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodeInfo**](InfoApi.md#getNodeInfo) | **GET** /info | Get the information about the Node



## getNodeInfo

> NodeInfo getNodeInfo()

Get the information about the Node

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.InfoApi();
apiInstance.getNodeInfo((error, data, response) => {
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

[**NodeInfo**](NodeInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

