"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _ErgoTransactionOutput = _interopRequireDefault(require("../model/ErgoTransactionOutput"));

var _SerializedBox = _interopRequireDefault(require("../model/SerializedBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Utxo service.
* @module api/UtxoApi
* @version 4.0.14
*/
var UtxoApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UtxoApi. 
  * @alias module:api/UtxoApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UtxoApi(apiClient) {
    _classCallCheck(this, UtxoApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the genesisBoxes operation.
   * @callback module:api/UtxoApi~genesisBoxesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ErgoTransactionOutput>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get genesis boxes (boxes existed before the very first block)
   * @param {module:api/UtxoApi~genesisBoxesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ErgoTransactionOutput>}
   */


  _createClass(UtxoApi, [{
    key: "genesisBoxes",
    value: function genesisBoxes(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ErgoTransactionOutput["default"]];
      return this.apiClient.callApi('/utxo/genesis', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBoxById operation.
     * @callback module:api/UtxoApi~getBoxByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ErgoTransactionOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get box contents for a box by a unique identifier.
     * @param {String} boxId ID of a wanted box
     * @param {module:api/UtxoApi~getBoxByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ErgoTransactionOutput}
     */

  }, {
    key: "getBoxById",
    value: function getBoxById(boxId, callback) {
      var postBody = null; // verify the required parameter 'boxId' is set

      if (boxId === undefined || boxId === null) {
        throw new Error("Missing the required parameter 'boxId' when calling getBoxById");
      }

      var pathParams = {
        'boxId': boxId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ErgoTransactionOutput["default"];
      return this.apiClient.callApi('/utxo/byId/{boxId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBoxByIdBinary operation.
     * @callback module:api/UtxoApi~getBoxByIdBinaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SerializedBox} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get serialized box from UTXO pool in Base16 encoding by an identifier.
     * @param {String} boxId ID of a wanted box
     * @param {module:api/UtxoApi~getBoxByIdBinaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SerializedBox}
     */

  }, {
    key: "getBoxByIdBinary",
    value: function getBoxByIdBinary(boxId, callback) {
      var postBody = null; // verify the required parameter 'boxId' is set

      if (boxId === undefined || boxId === null) {
        throw new Error("Missing the required parameter 'boxId' when calling getBoxByIdBinary");
      }

      var pathParams = {
        'boxId': boxId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SerializedBox["default"];
      return this.apiClient.callApi('/utxo/byIdBinary/{boxId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBoxWithPoolById operation.
     * @callback module:api/UtxoApi~getBoxWithPoolByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ErgoTransactionOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get box contents for a box by a unique identifier, from UTXO set and also the mempool.
     * @param {String} boxId ID of a box to obtain
     * @param {module:api/UtxoApi~getBoxWithPoolByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ErgoTransactionOutput}
     */

  }, {
    key: "getBoxWithPoolById",
    value: function getBoxWithPoolById(boxId, callback) {
      var postBody = null; // verify the required parameter 'boxId' is set

      if (boxId === undefined || boxId === null) {
        throw new Error("Missing the required parameter 'boxId' when calling getBoxWithPoolById");
      }

      var pathParams = {
        'boxId': boxId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ErgoTransactionOutput["default"];
      return this.apiClient.callApi('/utxo/withPool/byId/{boxId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBoxWithPoolByIdBinary operation.
     * @callback module:api/UtxoApi~getBoxWithPoolByIdBinaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SerializedBox} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get serialized box in Base16 encoding by an identifier, considering also the mempool.
     * @param {String} boxId ID of a wanted box
     * @param {module:api/UtxoApi~getBoxWithPoolByIdBinaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SerializedBox}
     */

  }, {
    key: "getBoxWithPoolByIdBinary",
    value: function getBoxWithPoolByIdBinary(boxId, callback) {
      var postBody = null; // verify the required parameter 'boxId' is set

      if (boxId === undefined || boxId === null) {
        throw new Error("Missing the required parameter 'boxId' when calling getBoxWithPoolByIdBinary");
      }

      var pathParams = {
        'boxId': boxId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SerializedBox["default"];
      return this.apiClient.callApi('/utxo/withPool/byIdBinary/{boxId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UtxoApi;
}();

exports["default"] = UtxoApi;