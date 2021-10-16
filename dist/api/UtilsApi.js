"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressValidity = _interopRequireDefault(require("../model/AddressValidity"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Utils service.
* @module api/UtilsApi
* @version 4.0.14
*/
var UtilsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UtilsApi. 
  * @alias module:api/UtilsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UtilsApi(apiClient) {
    _classCallCheck(this, UtilsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addressToRaw operation.
   * @callback module:api/UtilsApi~addressToRawCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Convert Pay-To-Public-Key Address to raw representation (hex-encoded serialized curve point)
   * @param {String} address address to extract public key from
   * @param {module:api/UtilsApi~addressToRawCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(UtilsApi, [{
    key: "addressToRaw",
    value: function addressToRaw(address, callback) {
      var postBody = null; // verify the required parameter 'address' is set

      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling addressToRaw");
      }

      var pathParams = {
        'address': address
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/utils/addressToRaw/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checkAddressValidity operation.
     * @callback module:api/UtilsApi~checkAddressValidityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressValidity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check address validity
     * @param {String} address address to check
     * @param {module:api/UtilsApi~checkAddressValidityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressValidity}
     */

  }, {
    key: "checkAddressValidity",
    value: function checkAddressValidity(address, callback) {
      var postBody = null; // verify the required parameter 'address' is set

      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling checkAddressValidity");
      }

      var pathParams = {
        'address': address
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AddressValidity["default"];
      return this.apiClient.callApi('/utils/address/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ergoTreeToAddress operation.
     * @callback module:api/UtilsApi~ergoTreeToAddressCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Ergo address from hex-encoded ErgoTree
     * @param {String} ergoTreeHex ErgoTree to derive an address from
     * @param {module:api/UtilsApi~ergoTreeToAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "ergoTreeToAddress",
    value: function ergoTreeToAddress(ergoTreeHex, callback) {
      var postBody = null; // verify the required parameter 'ergoTreeHex' is set

      if (ergoTreeHex === undefined || ergoTreeHex === null) {
        throw new Error("Missing the required parameter 'ergoTreeHex' when calling ergoTreeToAddress");
      }

      var pathParams = {
        'ergoTreeHex': ergoTreeHex
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/utils/ergoTreeToAddress/{ergoTreeHex}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRandomSeed operation.
     * @callback module:api/UtilsApi~getRandomSeedCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get random seed of 32 bytes
     * @param {module:api/UtilsApi~getRandomSeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "getRandomSeed",
    value: function getRandomSeed(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/utils/seed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRandomSeedWithLength operation.
     * @callback module:api/UtilsApi~getRandomSeedWithLengthCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate random seed of specified length in bytes
     * @param {String} length seed length in bytes
     * @param {module:api/UtilsApi~getRandomSeedWithLengthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "getRandomSeedWithLength",
    value: function getRandomSeedWithLength(length, callback) {
      var postBody = null; // verify the required parameter 'length' is set

      if (length === undefined || length === null) {
        throw new Error("Missing the required parameter 'length' when calling getRandomSeedWithLength");
      }

      var pathParams = {
        'length': length
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/utils/seed/{length}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the hashBlake2b operation.
     * @callback module:api/UtilsApi~hashBlake2bCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return Blake2b hash of specified message
     * @param {String} body 
     * @param {module:api/UtilsApi~hashBlake2bCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "hashBlake2b",
    value: function hashBlake2b(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling hashBlake2b");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/utils/hash/blake2b', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rawToAddress operation.
     * @callback module:api/UtilsApi~rawToAddressCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate Pay-To-Public-Key address from hex-encoded raw pubkey (secp256k1 serialized point)
     * @param {String} pubkeyHex public key to get address from
     * @param {module:api/UtilsApi~rawToAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "rawToAddress",
    value: function rawToAddress(pubkeyHex, callback) {
      var postBody = null; // verify the required parameter 'pubkeyHex' is set

      if (pubkeyHex === undefined || pubkeyHex === null) {
        throw new Error("Missing the required parameter 'pubkeyHex' when calling rawToAddress");
      }

      var pathParams = {
        'pubkeyHex': pubkeyHex
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/utils/rawToAddress/{pubkeyHex}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UtilsApi;
}();

exports["default"] = UtilsApi;