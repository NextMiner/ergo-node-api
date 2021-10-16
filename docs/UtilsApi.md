# ErgoNodeApi.UtilsApi

All URIs are relative to *http://127.0.0.1:9053*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressToRaw**](UtilsApi.md#addressToRaw) | **GET** /utils/addressToRaw/{address} | Convert Pay-To-Public-Key Address to raw representation (hex-encoded serialized curve point)
[**checkAddressValidity**](UtilsApi.md#checkAddressValidity) | **GET** /utils/address/{address} | Check address validity
[**ergoTreeToAddress**](UtilsApi.md#ergoTreeToAddress) | **GET** /utils/ergoTreeToAddress/{ergoTreeHex} | Generate Ergo address from hex-encoded ErgoTree
[**getRandomSeed**](UtilsApi.md#getRandomSeed) | **GET** /utils/seed | Get random seed of 32 bytes
[**getRandomSeedWithLength**](UtilsApi.md#getRandomSeedWithLength) | **GET** /utils/seed/{length} | Generate random seed of specified length in bytes
[**hashBlake2b**](UtilsApi.md#hashBlake2b) | **POST** /utils/hash/blake2b | Return Blake2b hash of specified message
[**rawToAddress**](UtilsApi.md#rawToAddress) | **GET** /utils/rawToAddress/{pubkeyHex} | Generate Pay-To-Public-Key address from hex-encoded raw pubkey (secp256k1 serialized point)



## addressToRaw

> String addressToRaw(address)

Convert Pay-To-Public-Key Address to raw representation (hex-encoded serialized curve point)

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
let address = "address_example"; // String | address to extract public key from
apiInstance.addressToRaw(address, (error, data, response) => {
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
 **address** | **String**| address to extract public key from | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkAddressValidity

> AddressValidity checkAddressValidity(address)

Check address validity

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
let address = "address_example"; // String | address to check
apiInstance.checkAddressValidity(address, (error, data, response) => {
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
 **address** | **String**| address to check | 

### Return type

[**AddressValidity**](AddressValidity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ergoTreeToAddress

> String ergoTreeToAddress(ergoTreeHex)

Generate Ergo address from hex-encoded ErgoTree

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
let ergoTreeHex = 100204a00b08cd021cf943317b0fdb50f60892a46b9132b9ced337c7de79248b104b293d9f1f078eea02d192a39a8cc7a70173007301; // String | ErgoTree to derive an address from
apiInstance.ergoTreeToAddress(ergoTreeHex, (error, data, response) => {
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
 **ergoTreeHex** | **String**| ErgoTree to derive an address from | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRandomSeed

> String getRandomSeed()

Get random seed of 32 bytes

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
apiInstance.getRandomSeed((error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRandomSeedWithLength

> String getRandomSeedWithLength(length)

Generate random seed of specified length in bytes

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
let length = "length_example"; // String | seed length in bytes
apiInstance.getRandomSeedWithLength(length, (error, data, response) => {
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
 **length** | **String**| seed length in bytes | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## hashBlake2b

> String hashBlake2b(body)

Return Blake2b hash of specified message

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
let body = "body_example"; // String | 
apiInstance.hashBlake2b(body, (error, data, response) => {
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
 **body** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rawToAddress

> String rawToAddress(pubkeyHex)

Generate Pay-To-Public-Key address from hex-encoded raw pubkey (secp256k1 serialized point)

### Example

```javascript
import ErgoNodeApi from 'ergo-node-api';

let apiInstance = new ErgoNodeApi.UtilsApi();
let pubkeyHex = 02a7955281885bf0f0ca4a48678848cad8dc5b328ce8bc1d4481d041c98e891ff3; // String | public key to get address from
apiInstance.rawToAddress(pubkeyHex, (error, data, response) => {
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
 **pubkeyHex** | **String**| public key to get address from | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

