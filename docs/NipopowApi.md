# ErgoNodeApi.NipopowApi

All URIs are relative to *https://api.jsonbin.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPopowHeaderByHeight**](NipopowApi.md#getPopowHeaderByHeight) | **GET** /nipopow/popowHeaderByHeight/{height} | Construct PoPow header for best header at given height
[**getPopowHeaderById**](NipopowApi.md#getPopowHeaderById) | **GET** /nipopow/popowHeaderById/{headerId} | Construct PoPow header according to given header id
[**getPopowProof**](NipopowApi.md#getPopowProof) | **GET** /nipopow/proof/{minChainLength}/{suffixLength} | Construct PoPoW proof for given min superchain length and suffix length
[**getPopowProofByHeaderId**](NipopowApi.md#getPopowProofByHeaderId) | **GET** /nipopow/proof/{minChainLength}/{suffixLength}/{headerId} | Construct PoPoW proof for given min superchain length, suffix length and header ID



## getPopowHeaderByHeight

> PopowHeader getPopowHeaderByHeight(height)

Construct PoPow header for best header at given height

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.NipopowApi();
let height = 56; // Number | Height of a wanted header
apiInstance.getPopowHeaderByHeight(height, (error, data, response) => {
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
 **height** | **Number**| Height of a wanted header | 

### Return type

[**PopowHeader**](PopowHeader.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPopowHeaderById

> PopowHeader getPopowHeaderById(headerId)

Construct PoPow header according to given header id

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.NipopowApi();
let headerId = "headerId_example"; // String | ID of wanted header
apiInstance.getPopowHeaderById(headerId, (error, data, response) => {
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
 **headerId** | **String**| ID of wanted header | 

### Return type

[**PopowHeader**](PopowHeader.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPopowProof

> NipopowProof getPopowProof(minChainLength, suffixLength)

Construct PoPoW proof for given min superchain length and suffix length

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.NipopowApi();
let minChainLength = 3.4; // Number | Minimal superchain length
let suffixLength = 3.4; // Number | Suffix length
apiInstance.getPopowProof(minChainLength, suffixLength, (error, data, response) => {
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
 **minChainLength** | **Number**| Minimal superchain length | 
 **suffixLength** | **Number**| Suffix length | 

### Return type

[**NipopowProof**](NipopowProof.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPopowProofByHeaderId

> NipopowProof getPopowProofByHeaderId(minChainLength, suffixLength, headerId)

Construct PoPoW proof for given min superchain length, suffix length and header ID

### Example

```javascript
import ErgoNodeApi from 'ergo_node_api';

let apiInstance = new ErgoNodeApi.NipopowApi();
let minChainLength = 3.4; // Number | Minimal superchain length
let suffixLength = 3.4; // Number | Suffix length
let headerId = "headerId_example"; // String | ID of wanted header
apiInstance.getPopowProofByHeaderId(minChainLength, suffixLength, headerId, (error, data, response) => {
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
 **minChainLength** | **Number**| Minimal superchain length | 
 **suffixLength** | **Number**| Suffix length | 
 **headerId** | **String**| ID of wanted header | 

### Return type

[**NipopowProof**](NipopowProof.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

