"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _BlacklistedPeers = _interopRequireDefault(require("../model/BlacklistedPeers"));

var _Peer = _interopRequireDefault(require("../model/Peer"));

var _PeersStatus = _interopRequireDefault(require("../model/PeersStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Peers service.
* @module api/PeersApi
* @version 4.0.14
*/
var PeersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PeersApi. 
  * @alias module:api/PeersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PeersApi(apiClient) {
    _classCallCheck(this, PeersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the connectToPeer operation.
   * @callback module:api/PeersApi~connectToPeerCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add address to peers list
   * @param {String} body 
   * @param {module:api/PeersApi~connectToPeerCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PeersApi, [{
    key: "connectToPeer",
    value: function connectToPeer(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling connectToPeer");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/peers/connect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAllPeers operation.
     * @callback module:api/PeersApi~getAllPeersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Peer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all known peers
     * @param {module:api/PeersApi~getAllPeersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Peer>}
     */

  }, {
    key: "getAllPeers",
    value: function getAllPeers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Peer["default"]];
      return this.apiClient.callApi('/peers/all', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBlacklistedPeers operation.
     * @callback module:api/PeersApi~getBlacklistedPeersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlacklistedPeers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get blacklisted peers
     * @param {module:api/PeersApi~getBlacklistedPeersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlacklistedPeers}
     */

  }, {
    key: "getBlacklistedPeers",
    value: function getBlacklistedPeers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BlacklistedPeers["default"];
      return this.apiClient.callApi('/peers/blacklisted', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getConnectedPeers operation.
     * @callback module:api/PeersApi~getConnectedPeersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Peer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current connected peers
     * @param {module:api/PeersApi~getConnectedPeersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Peer>}
     */

  }, {
    key: "getConnectedPeers",
    value: function getConnectedPeers(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Peer["default"]];
      return this.apiClient.callApi('/peers/connected', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPeersStatus operation.
     * @callback module:api/PeersApi~getPeersStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PeersStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get last incomming message timestamp and current network time
     * @param {module:api/PeersApi~getPeersStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PeersStatus}
     */

  }, {
    key: "getPeersStatus",
    value: function getPeersStatus(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PeersStatus["default"];
      return this.apiClient.callApi('/peers/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PeersApi;
}();

exports["default"] = PeersApi;