# ErgoNodeApi.WalletApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBox**](WalletApi.md#addBox) | **POST** /scan/addBox | Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.
[**checkSeed**](WalletApi.md#checkSeed) | **POST** /wallet/check | Check whether mnemonic phrase is corresponding to the wallet seed
[**extractHints**](WalletApi.md#extractHints) | **POST** /wallet/extractHints | Extract hints from a transaction
[**generateCommitments**](WalletApi.md#generateCommitments) | **POST** /wallet/generateCommitments | Generate signature commitments for inputs of an unsigned transaction
[**getWalletStatus**](WalletApi.md#getWalletStatus) | **GET** /wallet/status | Get wallet status
[**walletAddresses**](WalletApi.md#walletAddresses) | **GET** /wallet/addresses | Get wallet addresses
[**walletBalances**](WalletApi.md#walletBalances) | **GET** /wallet/balances | Get total amount of confirmed Ergo tokens and assets
[**walletBalancesUnconfirmed**](WalletApi.md#walletBalancesUnconfirmed) | **GET** /wallet/balances/withUnconfirmed | Get summary amount of confirmed plus unconfirmed Ergo tokens and assets
[**walletBoxes**](WalletApi.md#walletBoxes) | **GET** /wallet/boxes | Get a list of all wallet-related boxes, both spent and unspent. Set minConfirmations to -1 to get mempool boxes included.
[**walletBoxesCollect**](WalletApi.md#walletBoxesCollect) | **GET** /wallet/boxes/collect | Get a list of collected boxes.
[**walletDeriveKey**](WalletApi.md#walletDeriveKey) | **POST** /wallet/deriveKey | Derive new key according to a provided path
[**walletDeriveNextKey**](WalletApi.md#walletDeriveNextKey) | **GET** /wallet/deriveNextKey | Derive next key
[**walletGetTransaction**](WalletApi.md#walletGetTransaction) | **GET** /wallet/transactionById | Get wallet-related transaction by id
[**walletInit**](WalletApi.md#walletInit) | **POST** /wallet/init | Initialize new wallet with randomly generated seed
[**walletLock**](WalletApi.md#walletLock) | **GET** /wallet/lock | Lock wallet
[**walletPaymentTransactionGenerateAndSend**](WalletApi.md#walletPaymentTransactionGenerateAndSend) | **POST** /wallet/payment/send | Generate and send payment transaction (default fee of 0.001 Erg is used)
[**walletRescan**](WalletApi.md#walletRescan) | **GET** /wallet/rescan | Rescan wallet (all the available full blocks)
[**walletRestore**](WalletApi.md#walletRestore) | **POST** /wallet/restore | Create new wallet from existing mnemonic seed
[**walletTransactionGenerate**](WalletApi.md#walletTransactionGenerate) | **POST** /wallet/transaction/generate | Generate arbitrary transaction from array of requests.
[**walletTransactionGenerateAndSend**](WalletApi.md#walletTransactionGenerateAndSend) | **POST** /wallet/transaction/send | Generate and send arbitrary transaction
[**walletTransactionSign**](WalletApi.md#walletTransactionSign) | **POST** /wallet/transaction/sign | Sign arbitrary unsigned transaction with wallet secrets and also secrets provided.
[**walletTransactions**](WalletApi.md#walletTransactions) | **GET** /wallet/transactions | Get a list of all wallet-related transactions
[**walletTransactionsByScanId**](WalletApi.md#walletTransactionsByScanId) | **GET** /wallet/transactionsByScanId | Get scan-related transactions by scan id
[**walletUnlock**](WalletApi.md#walletUnlock) | **POST** /wallet/unlock | Unlock wallet
[**walletUnsignedTransactionGenerate**](WalletApi.md#walletUnsignedTransactionGenerate) | **POST** /wallet/transaction/generateUnsigned | Generate unsigned transaction from array of requests.
[**walletUnspentBoxes**](WalletApi.md#walletUnspentBoxes) | **GET** /wallet/boxes/unspent | Get a list of unspent boxes. Set minConfirmations to -1 to have mempool boxes considered.
[**walletUpdateChangeAddress**](WalletApi.md#walletUpdateChangeAddress) | **POST** /wallet/updateChangeAddress | Update address to be used to send change to



## addBox

> String addBox(scanIdsBox)

Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
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


## checkSeed

> InlineResponse2001 checkSeed(walletCheckBody)

Check whether mnemonic phrase is corresponding to the wallet seed

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let walletCheckBody = new ErgoNodeApi.WalletCheckBody(); // WalletCheckBody | 
apiInstance.checkSeed(walletCheckBody, (error, data, response) => {
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
 **walletCheckBody** | [**WalletCheckBody**](WalletCheckBody.md)|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## extractHints

> TransactionHintsBag extractHints(hintExtractionRequest)

Extract hints from a transaction

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let hintExtractionRequest = new ErgoNodeApi.HintExtractionRequest(); // HintExtractionRequest | 
apiInstance.extractHints(hintExtractionRequest, (error, data, response) => {
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
 **hintExtractionRequest** | [**HintExtractionRequest**](HintExtractionRequest.md)|  | 

### Return type

[**TransactionHintsBag**](TransactionHintsBag.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateCommitments

> TransactionHintsBag generateCommitments(generateCommitmentsRequest)

Generate signature commitments for inputs of an unsigned transaction

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let generateCommitmentsRequest = new ErgoNodeApi.GenerateCommitmentsRequest(); // GenerateCommitmentsRequest | 
apiInstance.generateCommitments(generateCommitmentsRequest, (error, data, response) => {
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
 **generateCommitmentsRequest** | [**GenerateCommitmentsRequest**](GenerateCommitmentsRequest.md)|  | 

### Return type

[**TransactionHintsBag**](TransactionHintsBag.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWalletStatus

> InlineResponse2002 getWalletStatus()

Get wallet status

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.getWalletStatus((error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletAddresses

> [String] walletAddresses()

Get wallet addresses

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletAddresses((error, data, response) => {
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

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletBalances

> BalancesSnapshot walletBalances()

Get total amount of confirmed Ergo tokens and assets

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletBalances((error, data, response) => {
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

[**BalancesSnapshot**](BalancesSnapshot.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletBalancesUnconfirmed

> BalancesSnapshot walletBalancesUnconfirmed()

Get summary amount of confirmed plus unconfirmed Ergo tokens and assets

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletBalancesUnconfirmed((error, data, response) => {
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

[**BalancesSnapshot**](BalancesSnapshot.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletBoxes

> [WalletBox] walletBoxes(opts)

Get a list of all wallet-related boxes, both spent and unspent. Set minConfirmations to -1 to get mempool boxes included.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let opts = {
  'minConfirmations': 0, // Number | Minimal number of confirmations
  'minInclusionHeight': 0 // Number | Minimal box inclusion height
};
apiInstance.walletBoxes(opts, (error, data, response) => {
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
 **minConfirmations** | **Number**| Minimal number of confirmations | [optional] [default to 0]
 **minInclusionHeight** | **Number**| Minimal box inclusion height | [optional] [default to 0]

### Return type

[**[WalletBox]**](WalletBox.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletBoxesCollect

> [WalletBox] walletBoxesCollect()

Get a list of collected boxes.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletBoxesCollect((error, data, response) => {
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

[**[WalletBox]**](WalletBox.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletDeriveKey

> InlineResponse2003 walletDeriveKey(walletDeriveKeyBody)

Derive new key according to a provided path

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let walletDeriveKeyBody = new ErgoNodeApi.WalletDeriveKeyBody(); // WalletDeriveKeyBody | 
apiInstance.walletDeriveKey(walletDeriveKeyBody, (error, data, response) => {
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
 **walletDeriveKeyBody** | [**WalletDeriveKeyBody**](WalletDeriveKeyBody.md)|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletDeriveNextKey

> InlineResponse2004 walletDeriveNextKey()

Derive next key

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletDeriveNextKey((error, data, response) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletGetTransaction

> [WalletTransaction] walletGetTransaction(id)

Get wallet-related transaction by id

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let id = "id_example"; // String | Transaction id
apiInstance.walletGetTransaction(id, (error, data, response) => {
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
 **id** | **String**| Transaction id | 

### Return type

[**[WalletTransaction]**](WalletTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletInit

> InlineResponse200 walletInit(walletInitBody)

Initialize new wallet with randomly generated seed

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let walletInitBody = new ErgoNodeApi.WalletInitBody(); // WalletInitBody | 
apiInstance.walletInit(walletInitBody, (error, data, response) => {
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
 **walletInitBody** | [**WalletInitBody**](WalletInitBody.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletLock

> walletLock()

Lock wallet

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletLock((error, data, response) => {
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


## walletPaymentTransactionGenerateAndSend

> String walletPaymentTransactionGenerateAndSend(paymentRequest)

Generate and send payment transaction (default fee of 0.001 Erg is used)

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let paymentRequest = [new ErgoNodeApi.PaymentRequest()]; // [PaymentRequest] | 
apiInstance.walletPaymentTransactionGenerateAndSend(paymentRequest, (error, data, response) => {
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
 **paymentRequest** | [**[PaymentRequest]**](PaymentRequest.md)|  | 

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletRescan

> walletRescan()

Rescan wallet (all the available full blocks)

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
apiInstance.walletRescan((error, data, response) => {
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


## walletRestore

> walletRestore(walletRestoreBody)

Create new wallet from existing mnemonic seed

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let walletRestoreBody = new ErgoNodeApi.WalletRestoreBody(); // WalletRestoreBody | 
apiInstance.walletRestore(walletRestoreBody, (error, data, response) => {
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
 **walletRestoreBody** | [**WalletRestoreBody**](WalletRestoreBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletTransactionGenerate

> ErgoTransaction walletTransactionGenerate(requestsHolder)

Generate arbitrary transaction from array of requests.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let requestsHolder = new ErgoNodeApi.RequestsHolder(); // RequestsHolder | This API method receives a sequence of requests as an input. Each request will produce an output of the resulting transaction (with fee output created automatically). Currently supported types of requests are payment and asset issuance requests. An example for a transaction with requests of both kinds is provided below. Please note that for the payment request \"assets\" and \"registers\" fields are not needed. For asset issuance request, \"registers\" field is not needed. You may specify boxes to spend by providing them in \"inputsRaw\". Please note you need to have strict equality between input and output total amounts of Ergs in this case. If you want wallet to pick up the boxes, leave \"inputsRaw\" empty.
apiInstance.walletTransactionGenerate(requestsHolder, (error, data, response) => {
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
 **requestsHolder** | [**RequestsHolder**](RequestsHolder.md)| This API method receives a sequence of requests as an input. Each request will produce an output of the resulting transaction (with fee output created automatically). Currently supported types of requests are payment and asset issuance requests. An example for a transaction with requests of both kinds is provided below. Please note that for the payment request \&quot;assets\&quot; and \&quot;registers\&quot; fields are not needed. For asset issuance request, \&quot;registers\&quot; field is not needed. You may specify boxes to spend by providing them in \&quot;inputsRaw\&quot;. Please note you need to have strict equality between input and output total amounts of Ergs in this case. If you want wallet to pick up the boxes, leave \&quot;inputsRaw\&quot; empty. | 

### Return type

[**ErgoTransaction**](ErgoTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletTransactionGenerateAndSend

> String walletTransactionGenerateAndSend(requestsHolder)

Generate and send arbitrary transaction

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let requestsHolder = new ErgoNodeApi.RequestsHolder(); // RequestsHolder | See description of /wallet/transaction/generate
apiInstance.walletTransactionGenerateAndSend(requestsHolder, (error, data, response) => {
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
 **requestsHolder** | [**RequestsHolder**](RequestsHolder.md)| See description of /wallet/transaction/generate | 

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletTransactionSign

> ErgoTransaction walletTransactionSign(transactionSigningRequest)

Sign arbitrary unsigned transaction with wallet secrets and also secrets provided.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let transactionSigningRequest = new ErgoNodeApi.TransactionSigningRequest(); // TransactionSigningRequest | With this API method an arbitrary unsigned transaction can be signed with secrets provided or stored in the wallet. Both DLOG and Diffie-Hellman tuple secrets are supported. Please note that the unsigned transaction contains only identifiers of inputs and data inputs. If the node holds UTXO set, it is able to extract boxes needed. Otherwise, input (and data-input) boxes can be provided in \"inputsRaw\" and \"dataInputsRaw\" fields.
apiInstance.walletTransactionSign(transactionSigningRequest, (error, data, response) => {
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
 **transactionSigningRequest** | [**TransactionSigningRequest**](TransactionSigningRequest.md)| With this API method an arbitrary unsigned transaction can be signed with secrets provided or stored in the wallet. Both DLOG and Diffie-Hellman tuple secrets are supported. Please note that the unsigned transaction contains only identifiers of inputs and data inputs. If the node holds UTXO set, it is able to extract boxes needed. Otherwise, input (and data-input) boxes can be provided in \&quot;inputsRaw\&quot; and \&quot;dataInputsRaw\&quot; fields. | 

### Return type

[**ErgoTransaction**](ErgoTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletTransactions

> [WalletTransaction] walletTransactions(opts)

Get a list of all wallet-related transactions

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let opts = {
  'minInclusionHeight': 56, // Number | Minimal tx inclusion height
  'maxInclusionHeight': 56, // Number | Maximal tx inclusion height
  'minConfirmations': 56, // Number | Minimal confirmations number
  'maxConfirmations': 56 // Number | Maximal confirmations number
};
apiInstance.walletTransactions(opts, (error, data, response) => {
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
 **minInclusionHeight** | **Number**| Minimal tx inclusion height | [optional] 
 **maxInclusionHeight** | **Number**| Maximal tx inclusion height | [optional] 
 **minConfirmations** | **Number**| Minimal confirmations number | [optional] 
 **maxConfirmations** | **Number**| Maximal confirmations number | [optional] 

### Return type

[**[WalletTransaction]**](WalletTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletTransactionsByScanId

> [WalletTransaction] walletTransactionsByScanId(scanId)

Get scan-related transactions by scan id

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let scanId = "scanId_example"; // String | Scan id
apiInstance.walletTransactionsByScanId(scanId, (error, data, response) => {
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
 **scanId** | **String**| Scan id | 

### Return type

[**[WalletTransaction]**](WalletTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletUnlock

> walletUnlock(walletUnlockBody)

Unlock wallet

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let walletUnlockBody = new ErgoNodeApi.WalletUnlockBody(); // WalletUnlockBody | 
apiInstance.walletUnlock(walletUnlockBody, (error, data, response) => {
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
 **walletUnlockBody** | [**WalletUnlockBody**](WalletUnlockBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletUnsignedTransactionGenerate

> UnsignedErgoTransaction walletUnsignedTransactionGenerate(requestsHolder)

Generate unsigned transaction from array of requests.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let requestsHolder = new ErgoNodeApi.RequestsHolder(); // RequestsHolder | The same as /wallet/transaction/generate but generates unsigned transaction.
apiInstance.walletUnsignedTransactionGenerate(requestsHolder, (error, data, response) => {
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
 **requestsHolder** | [**RequestsHolder**](RequestsHolder.md)| The same as /wallet/transaction/generate but generates unsigned transaction. | 

### Return type

[**UnsignedErgoTransaction**](UnsignedErgoTransaction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletUnspentBoxes

> [WalletBox] walletUnspentBoxes(opts)

Get a list of unspent boxes. Set minConfirmations to -1 to have mempool boxes considered.

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let opts = {
  'minConfirmations': 0, // Number | Minimal number of confirmations
  'minInclusionHeight': 0 // Number | Minimal box inclusion height
};
apiInstance.walletUnspentBoxes(opts, (error, data, response) => {
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
 **minConfirmations** | **Number**| Minimal number of confirmations | [optional] [default to 0]
 **minInclusionHeight** | **Number**| Minimal box inclusion height | [optional] [default to 0]

### Return type

[**[WalletBox]**](WalletBox.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletUpdateChangeAddress

> walletUpdateChangeAddress(walletUpdateChangeAddressBody)

Update address to be used to send change to

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';
let defaultClient = ErgoNodeApi.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ErgoNodeApi.WalletApi();
let walletUpdateChangeAddressBody = new ErgoNodeApi.WalletUpdateChangeAddressBody(); // WalletUpdateChangeAddressBody | 
apiInstance.walletUpdateChangeAddress(walletUpdateChangeAddressBody, (error, data, response) => {
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
 **walletUpdateChangeAddressBody** | [**WalletUpdateChangeAddressBody**](WalletUpdateChangeAddressBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

