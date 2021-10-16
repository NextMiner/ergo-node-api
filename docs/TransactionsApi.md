# ErgoNodeApi.TransactionsApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkTransaction**](TransactionsApi.md#checkTransaction) | **POST** /transactions/check | Checks an Ergo transaction without sending it over the network. Checks that transaction is valid and its inputs are in the UTXO set. Returns transaction identifier if the transaction is passing the checks.
[**getExpectedWaitTime**](TransactionsApi.md#getExpectedWaitTime) | **GET** /transactions/waitTime | Get expected wait time for the transaction with specified fee and size
[**getFeeHistogram**](TransactionsApi.md#getFeeHistogram) | **GET** /transactions/poolHistogram | Get histogram (waittime, (n_trans, sum(fee)) for transactions in mempool. It contains \&quot;bins\&quot;+1 bins, where i-th elements corresponds to transaction with wait time [i*maxtime/bins, (i+1)*maxtime/bins), and last bin corresponds to the transactions with wait time &gt;&#x3D; maxtime.
[**getRecommendedFee**](TransactionsApi.md#getRecommendedFee) | **GET** /transactions/getFee | Get recommended fee (in nanoErgs) for a transaction with specified size (in bytes) to be proceeded in specified time (in minutes)
[**getUnconfirmedTransactions**](TransactionsApi.md#getUnconfirmedTransactions) | **GET** /transactions/unconfirmed | Get current pool of the unconfirmed transactions pool
[**sendTransaction**](TransactionsApi.md#sendTransaction) | **POST** /transactions | Submit an Ergo transaction to unconfirmed pool to send it over the network



## checkTransaction

> String checkTransaction(ergoTransaction)

Checks an Ergo transaction without sending it over the network. Checks that transaction is valid and its inputs are in the UTXO set. Returns transaction identifier if the transaction is passing the checks.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.TransactionsApi();
let ergoTransaction = new ErgoNodeApi.ErgoTransaction(); // ErgoTransaction | 
apiInstance.checkTransaction(ergoTransaction, (error, data, response) => {
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
 **ergoTransaction** | [**ErgoTransaction**](ErgoTransaction.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExpectedWaitTime

> Number getExpectedWaitTime(fee, txSize)

Get expected wait time for the transaction with specified fee and size

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.TransactionsApi();
let fee = 1; // Number | Transaction fee (in nanoErgs)
let txSize = 100; // Number | Transaction size
apiInstance.getExpectedWaitTime(fee, txSize, (error, data, response) => {
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
 **fee** | **Number**| Transaction fee (in nanoErgs) | [default to 1]
 **txSize** | **Number**| Transaction size | [default to 100]

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeeHistogram

> [FeeHistogramBin] getFeeHistogram(opts)

Get histogram (waittime, (n_trans, sum(fee)) for transactions in mempool. It contains \&quot;bins\&quot;+1 bins, where i-th elements corresponds to transaction with wait time [i*maxtime/bins, (i+1)*maxtime/bins), and last bin corresponds to the transactions with wait time &gt;&#x3D; maxtime.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.TransactionsApi();
let opts = {
  'bins': 10, // Number | The number of bins in histogram
  'maxtime': 60000 // Number | Maximal wait time in milliseconds
};
apiInstance.getFeeHistogram(opts, (error, data, response) => {
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
 **bins** | **Number**| The number of bins in histogram | [optional] [default to 10]
 **maxtime** | **Number**| Maximal wait time in milliseconds | [optional] [default to 60000]

### Return type

[**[FeeHistogramBin]**](FeeHistogramBin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRecommendedFee

> Number getRecommendedFee(waitTime, txSize)

Get recommended fee (in nanoErgs) for a transaction with specified size (in bytes) to be proceeded in specified time (in minutes)

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.TransactionsApi();
let waitTime = 1; // Number | Maximum transaction wait time in minutes
let txSize = 100; // Number | Transaction size
apiInstance.getRecommendedFee(waitTime, txSize, (error, data, response) => {
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
 **waitTime** | **Number**| Maximum transaction wait time in minutes | [default to 1]
 **txSize** | **Number**| Transaction size | [default to 100]

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnconfirmedTransactions

> [ErgoTransaction] getUnconfirmedTransactions(opts)

Get current pool of the unconfirmed transactions pool

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.TransactionsApi();
let opts = {
  'limit': 50, // Number | The number of items in list to return
  'offset': 0 // Number | The number of items in list to skip
};
apiInstance.getUnconfirmedTransactions(opts, (error, data, response) => {
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

[**[ErgoTransaction]**](ErgoTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendTransaction

> String sendTransaction(ergoTransaction)

Submit an Ergo transaction to unconfirmed pool to send it over the network

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.TransactionsApi();
let ergoTransaction = new ErgoNodeApi.ErgoTransaction(); // ErgoTransaction | 
apiInstance.sendTransaction(ergoTransaction, (error, data, response) => {
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
 **ergoTransaction** | [**ErgoTransaction**](ErgoTransaction.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

