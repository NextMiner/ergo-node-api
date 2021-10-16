"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _BlockHeader = _interopRequireDefault(require("../model/BlockHeader"));

var _BlockTransactions = _interopRequireDefault(require("../model/BlockTransactions"));

var _FullBlock = _interopRequireDefault(require("../model/FullBlock"));

var _MerkleProof = _interopRequireDefault(require("../model/MerkleProof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Blocks service.
* @module api/BlocksApi
* @version 4.0.14
*/
var BlocksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BlocksApi. 
  * @alias module:api/BlocksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BlocksApi(apiClient) {
    _classCallCheck(this, BlocksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getBlockHeaderById operation.
   * @callback module:api/BlocksApi~getBlockHeaderByIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BlockHeader} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the block header info by a given signature
   * @param {String} headerId ID of a wanted block header
   * @param {module:api/BlocksApi~getBlockHeaderByIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BlockHeader}
   */


  _createClass(BlocksApi, [{
    key: "getBlockHeaderById",
    value: function getBlockHeaderById(headerId, callback) {
      var postBody = null; // verify the required parameter 'headerId' is set

      if (headerId === undefined || headerId === null) {
        throw new Error("Missing the required parameter 'headerId' when calling getBlockHeaderById");
      }

      var pathParams = {
        'headerId': headerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BlockHeader["default"];
      return this.apiClient.callApi('/blocks/{headerId}/header', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getBlockTransactionsById operation.
     * @callback module:api/BlocksApi~getBlockTransactionsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlockTransactions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the block transactions info by a given signature
     * @param {String} headerId ID of a wanted block transactions
     * @param {module:api/BlocksApi~getBlockTransactionsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlockTransactions}
     */

  }, {
    key: "getBlockTransactionsById",
    value: function getBlockTransactionsById(headerId, callback) {
      var postBody = null; // verify the required parameter 'headerId' is set

      if (headerId === undefined || headerId === null) {
        throw new Error("Missing the required parameter 'headerId' when calling getBlockTransactionsById");
      }

      var pathParams = {
        'headerId': headerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BlockTransactions["default"];
      return this.apiClient.callApi('/blocks/{headerId}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getChainSlice operation.
     * @callback module:api/BlocksApi~getChainSliceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BlockHeader>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get headers in a specified range
     * @param {Object} opts Optional parameters
     * @param {Number} opts.fromHeight Min header height (default to 0)
     * @param {Number} opts.toHeight Max header height (best header height by default) (default to -1)
     * @param {module:api/BlocksApi~getChainSliceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BlockHeader>}
     */

  }, {
    key: "getChainSlice",
    value: function getChainSlice(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'fromHeight': opts['fromHeight'],
        'toHeight': opts['toHeight']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BlockHeader["default"]];
      return this.apiClient.callApi('/blocks/chainSlice', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFullBlockAt operation.
     * @callback module:api/BlocksApi~getFullBlockAtCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the header ids at a given height
     * @param {Number} blockHeight Height of a wanted block
     * @param {module:api/BlocksApi~getFullBlockAtCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "getFullBlockAt",
    value: function getFullBlockAt(blockHeight, callback) {
      var postBody = null; // verify the required parameter 'blockHeight' is set

      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getFullBlockAt");
      }

      var pathParams = {
        'blockHeight': blockHeight
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/blocks/at/{blockHeight}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFullBlockById operation.
     * @callback module:api/BlocksApi~getFullBlockByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FullBlock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the full block info by a given signature
     * @param {String} headerId ID of a wanted block
     * @param {module:api/BlocksApi~getFullBlockByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FullBlock}
     */

  }, {
    key: "getFullBlockById",
    value: function getFullBlockById(headerId, callback) {
      var postBody = null; // verify the required parameter 'headerId' is set

      if (headerId === undefined || headerId === null) {
        throw new Error("Missing the required parameter 'headerId' when calling getFullBlockById");
      }

      var pathParams = {
        'headerId': headerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FullBlock["default"];
      return this.apiClient.callApi('/blocks/{headerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getHeaderIds operation.
     * @callback module:api/BlocksApi~getHeaderIdsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Array of header ids
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items in list to return (default to 50)
     * @param {Number} opts.offset The number of items in list to skip (default to 0)
     * @param {module:api/BlocksApi~getHeaderIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "getHeaderIds",
    value: function getHeaderIds(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/blocks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getLastHeaders operation.
     * @callback module:api/BlocksApi~getLastHeadersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BlockHeader>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the last headers objects
     * @param {Number} count count of a wanted block headers
     * @param {module:api/BlocksApi~getLastHeadersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BlockHeader>}
     */

  }, {
    key: "getLastHeaders",
    value: function getLastHeaders(count, callback) {
      var postBody = null; // verify the required parameter 'count' is set

      if (count === undefined || count === null) {
        throw new Error("Missing the required parameter 'count' when calling getLastHeaders");
      }

      var pathParams = {
        'count': count
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BlockHeader["default"]];
      return this.apiClient.callApi('/blocks/lastHeaders/{count}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getModifierById operation.
     * @callback module:api/BlocksApi~getModifierByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the persistent modifier by its id
     * @param {String} modifierId ID of a wanted modifier
     * @param {module:api/BlocksApi~getModifierByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getModifierById",
    value: function getModifierById(modifierId, callback) {
      var postBody = null; // verify the required parameter 'modifierId' is set

      if (modifierId === undefined || modifierId === null) {
        throw new Error("Missing the required parameter 'modifierId' when calling getModifierById");
      }

      var pathParams = {
        'modifierId': modifierId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/blocks/modifier/{modifierId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProofForTx operation.
     * @callback module:api/BlocksApi~getProofForTxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MerkleProof} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Merkle proof for transaction
     * @param {String} headerId ID of a wanted block transactions
     * @param {String} txId ID of a wanted transaction
     * @param {module:api/BlocksApi~getProofForTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MerkleProof}
     */

  }, {
    key: "getProofForTx",
    value: function getProofForTx(headerId, txId, callback) {
      var postBody = null; // verify the required parameter 'headerId' is set

      if (headerId === undefined || headerId === null) {
        throw new Error("Missing the required parameter 'headerId' when calling getProofForTx");
      } // verify the required parameter 'txId' is set


      if (txId === undefined || txId === null) {
        throw new Error("Missing the required parameter 'txId' when calling getProofForTx");
      }

      var pathParams = {
        'headerId': headerId,
        'txId': txId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MerkleProof["default"];
      return this.apiClient.callApi('/blocks/{headerId}/proofFor/{txId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sendMinedBlock operation.
     * @callback module:api/BlocksApi~sendMinedBlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a mined block
     * @param {module:model/FullBlock} fullBlock 
     * @param {module:api/BlocksApi~sendMinedBlockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sendMinedBlock",
    value: function sendMinedBlock(fullBlock, callback) {
      var postBody = fullBlock; // verify the required parameter 'fullBlock' is set

      if (fullBlock === undefined || fullBlock === null) {
        throw new Error("Missing the required parameter 'fullBlock' when calling sendMinedBlock");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/blocks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BlocksApi;
}();

exports["default"] = BlocksApi;