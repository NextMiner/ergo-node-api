# ErgoNodeApi.ScriptApi

All URIs are relative to *https://api.jsonbin.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressToBytes**](ScriptApi.md#addressToBytes) | **GET** /script/addressToBytes/{address} | Convert an address to hex-encoded Sigma byte array constant which contains script bytes
[**addressToTree**](ScriptApi.md#addressToTree) | **GET** /script/addressToTree/{address} | Convert an address to hex-encoded serialized ErgoTree (script)
[**executeWithContext**](ScriptApi.md#executeWithContext) | **POST** /script/executeWithContext | Execute script with context
[**scriptP2SAddress**](ScriptApi.md#scriptP2SAddress) | **POST** /script/p2sAddress | Create P2SAddress from Sigma source
[**scriptP2SHAddress**](ScriptApi.md#scriptP2SHAddress) | **POST** /script/p2shAddress | Create P2SHAddress from Sigma source



## addressToBytes

> InlineResponse2008 addressToBytes(address)

Convert an address to hex-encoded Sigma byte array constant which contains script bytes

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.ScriptApi();
let address = "address_example"; // String | address to get a script from
apiInstance.addressToBytes(address, (error, data, response) => {
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
 **address** | **String**| address to get a script from | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addressToTree

> InlineResponse2007 addressToTree(address)

Convert an address to hex-encoded serialized ErgoTree (script)

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.ScriptApi();
let address = "address_example"; // String | address to get a script from
apiInstance.addressToTree(address, (error, data, response) => {
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
 **address** | **String**| address to get a script from | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## executeWithContext

> CryptoResult executeWithContext(executeScript)

Execute script with context

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScriptApi();
let executeScript = new ErgoNodeApi.ExecuteScript(); // ExecuteScript | 
apiInstance.executeWithContext(executeScript, (error, data, response) => {
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
 **executeScript** | [**ExecuteScript**](ExecuteScript.md)|  | 

### Return type

[**CryptoResult**](CryptoResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scriptP2SAddress

> AddressHolder scriptP2SAddress(sourceHolder)

Create P2SAddress from Sigma source

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScriptApi();
let sourceHolder = new ErgoNodeApi.SourceHolder(); // SourceHolder | 
apiInstance.scriptP2SAddress(sourceHolder, (error, data, response) => {
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
 **sourceHolder** | [**SourceHolder**](SourceHolder.md)|  | 

### Return type

[**AddressHolder**](AddressHolder.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scriptP2SHAddress

> AddressHolder scriptP2SHAddress(sourceHolder)

Create P2SHAddress from Sigma source

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.ScriptApi();
let sourceHolder = new ErgoNodeApi.SourceHolder(); // SourceHolder | 
apiInstance.scriptP2SHAddress(sourceHolder, (error, data, response) => {
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
 **sourceHolder** | [**SourceHolder**](SourceHolder.md)|  | 

### Return type

[**AddressHolder**](AddressHolder.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

