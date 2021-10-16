# ErgoNodeApi.ScanApi

All URIs are relative to *https://api.jsonbin.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBox**](ScanApi.md#addBox) | **POST** /scan/addBox | Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.
[**deregisterScan**](ScanApi.md#deregisterScan) | **POST** /scan/deregister | Stop tracking and deregister scan
[**listAllScans**](ScanApi.md#listAllScans) | **GET** /scan/listAll | List all the registered scans
[**listUnspentScans**](ScanApi.md#listUnspentScans) | **GET** /scan/unspentBoxes/{scanId} | List boxes which are not spent.
[**registerScan**](ScanApi.md#registerScan) | **POST** /scan/register | Register a scan
[**scanStopTracking**](ScanApi.md#scanStopTracking) | **POST** /scan/stopTracking | Stop scan-related box tracking



## addBox

> String addBox(scanIdsBox)

Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScanApi();
let scanIdsBox = new ErgoNodeApi.ScanIdsBox(); // ScanIdsBox | 
apiInstance.addBox(scanIdsBox, (error, data, response) => {
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
 **scanIdsBox** | [**ScanIdsBox**](ScanIdsBox.md)|  | 

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deregisterScan

> ScanId deregisterScan(scanId)

Stop tracking and deregister scan

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScanApi();
let scanId = new ErgoNodeApi.ScanId(); // ScanId | 
apiInstance.deregisterScan(scanId, (error, data, response) => {
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
 **scanId** | [**ScanId**](ScanId.md)|  | 

### Return type

[**ScanId**](ScanId.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listAllScans

> [Scan] listAllScans()

List all the registered scans

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScanApi();
apiInstance.listAllScans((error, data, response) => {
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

[**[Scan]**](Scan.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUnspentScans

> [WalletBox] listUnspentScans(scanId, opts)

List boxes which are not spent.

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScanApi();
let scanId = 56; // Number | identifier of a scan
let opts = {
  'minConfirmations': 0, // Number | Minimal number of confirmations
  'minInclusionHeight': 0 // Number | Minimal box inclusion height
};
apiInstance.listUnspentScans(scanId, opts, (error, data, response) => {
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
 **scanId** | **Number**| identifier of a scan | 
 **minConfirmations** | **Number**| Minimal number of confirmations | [optional] [default to 0]
 **minInclusionHeight** | **Number**| Minimal box inclusion height | [optional] [default to 0]

### Return type

[**[WalletBox]**](WalletBox.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerScan

> ScanId registerScan(scanRequest)

Register a scan

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScanApi();
let scanRequest = new ErgoNodeApi.ScanRequest(); // ScanRequest | 
apiInstance.registerScan(scanRequest, (error, data, response) => {
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
 **scanRequest** | [**ScanRequest**](ScanRequest.md)|  | 

### Return type

[**ScanId**](ScanId.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scanStopTracking

> ScanIdBoxId scanStopTracking(scanIdBoxId)

Stop scan-related box tracking

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScanApi();
let scanIdBoxId = new ErgoNodeApi.ScanIdBoxId(); // ScanIdBoxId | 
apiInstance.scanStopTracking(scanIdBoxId, (error, data, response) => {
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
 **scanIdBoxId** | [**ScanIdBoxId**](ScanIdBoxId.md)|  | 

### Return type

[**ScanIdBoxId**](ScanIdBoxId.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

