"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressHolder = _interopRequireDefault(require("../model/AddressHolder"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _CryptoResult = _interopRequireDefault(require("../model/CryptoResult"));

var _ExecuteScript = _interopRequireDefault(require("../model/ExecuteScript"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2007"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2008"));

var _SourceHolder = _interopRequireDefault(require("../model/SourceHolder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Script service.
* @module api/ScriptApi
* @version 4.0.14
*/
var ScriptApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScriptApi. 
  * @alias module:api/ScriptApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScriptApi(apiClient) {
    _classCallCheck(this, ScriptApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addressToBytes operation.
   * @callback module:api/ScriptApi~addressToBytesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2008} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Convert an address to hex-encoded Sigma byte array constant which contains script bytes
   * @param {String} address address to get a script from
   * @param {module:api/ScriptApi~addressToBytesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2008}
   */


  _createClass(ScriptApi, [{
    key: "addressToBytes",
    value: function addressToBytes(address, callback) {
      var postBody = null; // verify the required parameter 'address' is set

      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling addressToBytes");
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/script/addressToBytes/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addressToTree operation.
     * @callback module:api/ScriptApi~addressToTreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert an address to hex-encoded serialized ErgoTree (script)
     * @param {String} address address to get a script from
     * @param {module:api/ScriptApi~addressToTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */

  }, {
    key: "addressToTree",
    value: function addressToTree(address, callback) {
      var postBody = null; // verify the required parameter 'address' is set

      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling addressToTree");
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/script/addressToTree/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the executeWithContext operation.
     * @callback module:api/ScriptApi~executeWithContextCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CryptoResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute script with context
     * @param {module:model/ExecuteScript} executeScript 
     * @param {module:api/ScriptApi~executeWithContextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CryptoResult}
     */

  }, {
    key: "executeWithContext",
    value: function executeWithContext(executeScript, callback) {
      var postBody = executeScript; // verify the required parameter 'executeScript' is set

      if (executeScript === undefined || executeScript === null) {
        throw new Error("Missing the required parameter 'executeScript' when calling executeWithContext");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CryptoResult["default"];
      return this.apiClient.callApi('/script/executeWithContext', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scriptP2SAddress operation.
     * @callback module:api/ScriptApi~scriptP2SAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressHolder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create P2SAddress from Sigma source
     * @param {module:model/SourceHolder} sourceHolder 
     * @param {module:api/ScriptApi~scriptP2SAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressHolder}
     */

  }, {
    key: "scriptP2SAddress",
    value: function scriptP2SAddress(sourceHolder, callback) {
      var postBody = sourceHolder; // verify the required parameter 'sourceHolder' is set

      if (sourceHolder === undefined || sourceHolder === null) {
        throw new Error("Missing the required parameter 'sourceHolder' when calling scriptP2SAddress");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddressHolder["default"];
      return this.apiClient.callApi('/script/p2sAddress', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scriptP2SHAddress operation.
     * @callback module:api/ScriptApi~scriptP2SHAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddressHolder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create P2SHAddress from Sigma source
     * @param {module:model/SourceHolder} sourceHolder 
     * @param {module:api/ScriptApi~scriptP2SHAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddressHolder}
     */

  }, {
    key: "scriptP2SHAddress",
    value: function scriptP2SHAddress(sourceHolder, callback) {
      var postBody = sourceHolder; // verify the required parameter 'sourceHolder' is set

      if (sourceHolder === undefined || sourceHolder === null) {
        throw new Error("Missing the required parameter 'sourceHolder' when calling scriptP2SHAddress");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddressHolder["default"];
      return this.apiClient.callApi('/script/p2shAddress', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScriptApi;
}();

exports["default"] = ScriptApi;