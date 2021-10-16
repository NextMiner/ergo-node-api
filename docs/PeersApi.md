# ErgoNodeApi.PeersApi

All URIs are relative to *https://api.jsonbin.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectToPeer**](PeersApi.md#connectToPeer) | **POST** /peers/connect | Add address to peers list
[**getAllPeers**](PeersApi.md#getAllPeers) | **GET** /peers/all | Get all known peers
[**getBlacklistedPeers**](PeersApi.md#getBlacklistedPeers) | **GET** /peers/blacklisted | Get blacklisted peers
[**getConnectedPeers**](PeersApi.md#getConnectedPeers) | **GET** /peers/connected | Get current connected peers
[**getPeersStatus**](PeersApi.md#getPeersStatus) | **GET** /peers/status | Get last incomming message timestamp and current network time



## connectToPeer

> connectToPeer(body)

Add address to peers list

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.PeersApi();
let body = "body_example"; // String | 
apiInstance.connectToPeer(body, (error, data, response) => {
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
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllPeers

> [Peer] getAllPeers()

Get all known peers

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.PeersApi();
apiInstance.getAllPeers((error, data, response) => {
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

[**[Peer]**](Peer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBlacklistedPeers

> BlacklistedPeers getBlacklistedPeers()

Get blacklisted peers

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.PeersApi();
apiInstance.getBlacklistedPeers((error, data, response) => {
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

[**BlacklistedPeers**](BlacklistedPeers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectedPeers

> [Peer] getConnectedPeers()

Get current connected peers

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.PeersApi();
apiInstance.getConnectedPeers((error, data, response) => {
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

[**[Peer]**](Peer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPeersStatus

> PeersStatus getPeersStatus()

Get last incomming message timestamp and current network time

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.PeersApi();
apiInstance.getPeersStatus((error, data, response) => {
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

[**PeersStatus**](PeersStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

