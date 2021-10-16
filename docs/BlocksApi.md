# ErgoNodeApi.BlocksApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockHeaderById**](BlocksApi.md#getBlockHeaderById) | **GET** /blocks/{headerId}/header | Get the block header info by a given signature
[**getBlockTransactionsById**](BlocksApi.md#getBlockTransactionsById) | **GET** /blocks/{headerId}/transactions | Get the block transactions info by a given signature
[**getChainSlice**](BlocksApi.md#getChainSlice) | **GET** /blocks/chainSlice | Get headers in a specified range
[**getFullBlockAt**](BlocksApi.md#getFullBlockAt) | **GET** /blocks/at/{blockHeight} | Get the header ids at a given height
[**getFullBlockById**](BlocksApi.md#getFullBlockById) | **GET** /blocks/{headerId} | Get the full block info by a given signature
[**getHeaderIds**](BlocksApi.md#getHeaderIds) | **GET** /blocks | Get the Array of header ids
[**getLastHeaders**](BlocksApi.md#getLastHeaders) | **GET** /blocks/lastHeaders/{count} | Get the last headers objects
[**getModifierById**](BlocksApi.md#getModifierById) | **GET** /blocks/modifier/{modifierId} | Get the persistent modifier by its id
[**getProofForTx**](BlocksApi.md#getProofForTx) | **GET** /blocks/{headerId}/proofFor/{txId} | Get Merkle proof for transaction
[**sendMinedBlock**](BlocksApi.md#sendMinedBlock) | **POST** /blocks | Send a mined block



## getBlockHeaderById

> BlockHeader getBlockHeaderById(headerId)

Get the block header info by a given signature

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let headerId = "headerId_example"; // String | ID of a wanted block header
apiInstance.getBlockHeaderById(headerId, (error, data, response) => {
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
 **headerId** | **String**| ID of a wanted block header | 

### Return type

[**BlockHeader**](BlockHeader.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBlockTransactionsById

> BlockTransactions getBlockTransactionsById(headerId)

Get the block transactions info by a given signature

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let headerId = "headerId_example"; // String | ID of a wanted block transactions
apiInstance.getBlockTransactionsById(headerId, (error, data, response) => {
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
 **headerId** | **String**| ID of a wanted block transactions | 

### Return type

[**BlockTransactions**](BlockTransactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChainSlice

> [BlockHeader] getChainSlice(opts)

Get headers in a specified range

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let opts = {
  'fromHeight': 0, // Number | Min header height
  'toHeight': -1 // Number | Max header height (best header height by default)
};
apiInstance.getChainSlice(opts, (error, data, response) => {
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
 **fromHeight** | **Number**| Min header height | [optional] [default to 0]
 **toHeight** | **Number**| Max header height (best header height by default) | [optional] [default to -1]

### Return type

[**[BlockHeader]**](BlockHeader.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullBlockAt

> [String] getFullBlockAt(blockHeight)

Get the header ids at a given height

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let blockHeight = 56; // Number | Height of a wanted block
apiInstance.getFullBlockAt(blockHeight, (error, data, response) => {
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
 **blockHeight** | **Number**| Height of a wanted block | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFullBlockById

> FullBlock getFullBlockById(headerId)

Get the full block info by a given signature

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let headerId = "headerId_example"; // String | ID of a wanted block
apiInstance.getFullBlockById(headerId, (error, data, response) => {
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
 **headerId** | **String**| ID of a wanted block | 

### Return type

[**FullBlock**](FullBlock.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHeaderIds

> [String] getHeaderIds(opts)

Get the Array of header ids

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let opts = {
  'limit': 50, // Number | The number of items in list to return
  'offset': 0 // Number | The number of items in list to skip
};
apiInstance.getHeaderIds(opts, (error, data, response) => {
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
 **limit** | **Number**| The number of items in list to return | [optional] [default to 50]
 **offset** | **Number**| The number of items in list to skip | [optional] [default to 0]

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLastHeaders

> [BlockHeader] getLastHeaders(count)

Get the last headers objects

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let count = 3.4; // Number | count of a wanted block headers
apiInstance.getLastHeaders(count, (error, data, response) => {
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
 **count** | **Number**| count of a wanted block headers | 

### Return type

[**[BlockHeader]**](BlockHeader.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModifierById

> getModifierById(modifierId)

Get the persistent modifier by its id

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let modifierId = "modifierId_example"; // String | ID of a wanted modifier
apiInstance.getModifierById(modifierId, (error, data, response) => {
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
 **modifierId** | **String**| ID of a wanted modifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProofForTx

> MerkleProof getProofForTx(headerId, txId)

Get Merkle proof for transaction

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let headerId = "headerId_example"; // String | ID of a wanted block transactions
let txId = "txId_example"; // String | ID of a wanted transaction
apiInstance.getProofForTx(headerId, txId, (error, data, response) => {
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
 **headerId** | **String**| ID of a wanted block transactions | 
 **txId** | **String**| ID of a wanted transaction | 

### Return type

[**MerkleProof**](MerkleProof.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendMinedBlock

> sendMinedBlock(fullBlock)

Send a mined block

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.BlocksApi();
let fullBlock = new ErgoNodeApi.FullBlock(); // FullBlock | 
apiInstance.sendMinedBlock(fullBlock, (error, data, response) => {
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
 **fullBlock** | [**FullBlock**](FullBlock.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

