"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _ErgoTransaction = _interopRequireDefault(require("../model/ErgoTransaction"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2006"));

var _PowSolutions = _interopRequireDefault(require("../model/PowSolutions"));

var _WorkMessage = _interopRequireDefault(require("../model/WorkMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Mining service.
* @module api/MiningApi
* @version 4.0.14
*/
var MiningApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MiningApi. 
  * @alias module:api/MiningApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MiningApi(apiClient) {
    _classCallCheck(this, MiningApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the miningReadMinerRewardAddress operation.
   * @callback module:api/MiningApi~miningReadMinerRewardAddressCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2005} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Read miner reward address
   * @param {module:api/MiningApi~miningReadMinerRewardAddressCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2005}
   */


  _createClass(MiningApi, [{
    key: "miningReadMinerRewardAddress",
    value: function miningReadMinerRewardAddress(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/mining/rewardAddress', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the miningReadMinerRewardPubkey operation.
     * @callback module:api/MiningApi~miningReadMinerRewardPubkeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read public key associated with miner rewards
     * @param {module:api/MiningApi~miningReadMinerRewardPubkeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "miningReadMinerRewardPubkey",
    value: function miningReadMinerRewardPubkey(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/mining/rewardPublicKey', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the miningRequestBlockCandidate operation.
     * @callback module:api/MiningApi~miningRequestBlockCandidateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request block candidate
     * @param {module:api/MiningApi~miningRequestBlockCandidateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkMessage}
     */

  }, {
    key: "miningRequestBlockCandidate",
    value: function miningRequestBlockCandidate(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkMessage["default"];
      return this.apiClient.callApi('/mining/candidate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the miningRequestBlockCandidateWithMandatoryTransactions operation.
     * @callback module:api/MiningApi~miningRequestBlockCandidateWithMandatoryTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request block candidate
     * @param {Array.<module:model/ErgoTransaction>} ergoTransaction 
     * @param {module:api/MiningApi~miningRequestBlockCandidateWithMandatoryTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkMessage}
     */

  }, {
    key: "miningRequestBlockCandidateWithMandatoryTransactions",
    value: function miningRequestBlockCandidateWithMandatoryTransactions(ergoTransaction, callback) {
      var postBody = ergoTransaction; // verify the required parameter 'ergoTransaction' is set

      if (ergoTransaction === undefined || ergoTransaction === null) {
        throw new Error("Missing the required parameter 'ergoTransaction' when calling miningRequestBlockCandidateWithMandatoryTransactions");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkMessage["default"];
      return this.apiClient.callApi('/mining/candidateWithTxs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the miningSubmitSolution operation.
     * @callback module:api/MiningApi~miningSubmitSolutionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit solution for current candidate
     * @param {module:model/PowSolutions} powSolutions 
     * @param {module:api/MiningApi~miningSubmitSolutionCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "miningSubmitSolution",
    value: function miningSubmitSolution(powSolutions, callback) {
      var postBody = powSolutions; // verify the required parameter 'powSolutions' is set

      if (powSolutions === undefined || powSolutions === null) {
        throw new Error("Missing the required parameter 'powSolutions' when calling miningSubmitSolution");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/mining/solution', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MiningApi;
}();

exports["default"] = MiningApi;