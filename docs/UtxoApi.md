# ErgoNodeApi.UtxoApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**genesisBoxes**](UtxoApi.md#genesisBoxes) | **GET** /utxo/genesis | Get genesis boxes (boxes existed before the very first block)
[**getBoxById**](UtxoApi.md#getBoxById) | **GET** /utxo/byId/{boxId} | Get box contents for a box by a unique identifier.
[**getBoxByIdBinary**](UtxoApi.md#getBoxByIdBinary) | **GET** /utxo/byIdBinary/{boxId} | Get serialized box from UTXO pool in Base16 encoding by an identifier.
[**getBoxWithPoolById**](UtxoApi.md#getBoxWithPoolById) | **GET** /utxo/withPool/byId/{boxId} | Get box contents for a box by a unique identifier, from UTXO set and also the mempool.
[**getBoxWithPoolByIdBinary**](UtxoApi.md#getBoxWithPoolByIdBinary) | **GET** /utxo/withPool/byIdBinary/{boxId} | Get serialized box in Base16 encoding by an identifier, considering also the mempool.



## genesisBoxes

> [ErgoTransactionOutput] genesisBoxes()

Get genesis boxes (boxes existed before the very first block)

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtxoApi();
apiInstance.genesisBoxes((error, data, response) => {
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

[**[ErgoTransactionOutput]**](ErgoTransactionOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoxById

> ErgoTransactionOutput getBoxById(boxId)

Get box contents for a box by a unique identifier.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtxoApi();
let boxId = "boxId_example"; // String | ID of a wanted box
apiInstance.getBoxById(boxId, (error, data, response) => {
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
 **boxId** | **String**| ID of a wanted box | 

### Return type

[**ErgoTransactionOutput**](ErgoTransactionOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoxByIdBinary

> SerializedBox getBoxByIdBinary(boxId)

Get serialized box from UTXO pool in Base16 encoding by an identifier.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtxoApi();
let boxId = "boxId_example"; // String | ID of a wanted box
apiInstance.getBoxByIdBinary(boxId, (error, data, response) => {
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
 **boxId** | **String**| ID of a wanted box | 

### Return type

[**SerializedBox**](SerializedBox.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoxWithPoolById

> ErgoTransactionOutput getBoxWithPoolById(boxId)

Get box contents for a box by a unique identifier, from UTXO set and also the mempool.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtxoApi();
let boxId = "boxId_example"; // String | ID of a box to obtain
apiInstance.getBoxWithPoolById(boxId, (error, data, response) => {
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
 **boxId** | **String**| ID of a box to obtain | 

### Return type

[**ErgoTransactionOutput**](ErgoTransactionOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBoxWithPoolByIdBinary

> SerializedBox getBoxWithPoolByIdBinary(boxId)

Get serialized box in Base16 encoding by an identifier, considering also the mempool.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtxoApi();
let boxId = "boxId_example"; // String | ID of a wanted box
apiInstance.getBoxWithPoolByIdBinary(boxId, (error, data, response) => {
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
 **boxId** | **String**| ID of a wanted box | 

### Return type

[**SerializedBox**](SerializedBox.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

