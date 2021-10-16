"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _ErgoTransaction = _interopRequireDefault(require("../model/ErgoTransaction"));

var _FeeHistogramBin = _interopRequireDefault(require("../model/FeeHistogramBin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Transactions service.
* @module api/TransactionsApi
* @version 4.0.14
*/
var TransactionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransactionsApi. 
  * @alias module:api/TransactionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionsApi(apiClient) {
    _classCallCheck(this, TransactionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the checkTransaction operation.
   * @callback module:api/TransactionsApi~checkTransactionCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Checks an Ergo transaction without sending it over the network. Checks that transaction is valid and its inputs are in the UTXO set. Returns transaction identifier if the transaction is passing the checks.
   * @param {module:model/ErgoTransaction} ergoTransaction 
   * @param {module:api/TransactionsApi~checkTransactionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(TransactionsApi, [{
    key: "checkTransaction",
    value: function checkTransaction(ergoTransaction, callback) {
      var postBody = ergoTransaction; // verify the required parameter 'ergoTransaction' is set

      if (ergoTransaction === undefined || ergoTransaction === null) {
        throw new Error("Missing the required parameter 'ergoTransaction' when calling checkTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/transactions/check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getExpectedWaitTime operation.
     * @callback module:api/TransactionsApi~getExpectedWaitTimeCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get expected wait time for the transaction with specified fee and size
     * @param {Number} fee Transaction fee (in nanoErgs)
     * @param {Number} txSize Transaction size
     * @param {module:api/TransactionsApi~getExpectedWaitTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */

  }, {
    key: "getExpectedWaitTime",
    value: function getExpectedWaitTime(fee, txSize, callback) {
      var postBody = null; // verify the required parameter 'fee' is set

      if (fee === undefined || fee === null) {
        throw new Error("Missing the required parameter 'fee' when calling getExpectedWaitTime");
      } // verify the required parameter 'txSize' is set


      if (txSize === undefined || txSize === null) {
        throw new Error("Missing the required parameter 'txSize' when calling getExpectedWaitTime");
      }

      var pathParams = {};
      var queryParams = {
        'fee': fee,
        'txSize': txSize
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Number';
      return this.apiClient.callApi('/transactions/waitTime', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFeeHistogram operation.
     * @callback module:api/TransactionsApi~getFeeHistogramCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FeeHistogramBin>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get histogram (waittime, (n_trans, sum(fee)) for transactions in mempool. It contains \"bins\"+1 bins, where i-th elements corresponds to transaction with wait time [i*maxtime/bins, (i+1)*maxtime/bins), and last bin corresponds to the transactions with wait time >= maxtime.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.bins The number of bins in histogram (default to 10)
     * @param {Number} opts.maxtime Maximal wait time in milliseconds (default to 60000)
     * @param {module:api/TransactionsApi~getFeeHistogramCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FeeHistogramBin>}
     */

  }, {
    key: "getFeeHistogram",
    value: function getFeeHistogram(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'bins': opts['bins'],
        'maxtime': opts['maxtime']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_FeeHistogramBin["default"]];
      return this.apiClient.callApi('/transactions/poolHistogram', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRecommendedFee operation.
     * @callback module:api/TransactionsApi~getRecommendedFeeCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get recommended fee (in nanoErgs) for a transaction with specified size (in bytes) to be proceeded in specified time (in minutes)
     * @param {Number} waitTime Maximum transaction wait time in minutes
     * @param {Number} txSize Transaction size
     * @param {module:api/TransactionsApi~getRecommendedFeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */

  }, {
    key: "getRecommendedFee",
    value: function getRecommendedFee(waitTime, txSize, callback) {
      var postBody = null; // verify the required parameter 'waitTime' is set

      if (waitTime === undefined || waitTime === null) {
        throw new Error("Missing the required parameter 'waitTime' when calling getRecommendedFee");
      } // verify the required parameter 'txSize' is set


      if (txSize === undefined || txSize === null) {
        throw new Error("Missing the required parameter 'txSize' when calling getRecommendedFee");
      }

      var pathParams = {};
      var queryParams = {
        'waitTime': waitTime,
        'txSize': txSize
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'Number';
      return this.apiClient.callApi('/transactions/getFee', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUnconfirmedTransactions operation.
     * @callback module:api/TransactionsApi~getUnconfirmedTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ErgoTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current pool of the unconfirmed transactions pool
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items in list to return (default to 50)
     * @param {Number} opts.offset The number of items in list to skip (default to 0)
     * @param {module:api/TransactionsApi~getUnconfirmedTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ErgoTransaction>}
     */

  }, {
    key: "getUnconfirmedTransactions",
    value: function getUnconfirmedTransactions(opts, callback) {
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
      var returnType = [_ErgoTransaction["default"]];
      return this.apiClient.callApi('/transactions/unconfirmed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sendTransaction operation.
     * @callback module:api/TransactionsApi~sendTransactionCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit an Ergo transaction to unconfirmed pool to send it over the network
     * @param {module:model/ErgoTransaction} ergoTransaction 
     * @param {module:api/TransactionsApi~sendTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "sendTransaction",
    value: function sendTransaction(ergoTransaction, callback) {
      var postBody = ergoTransaction; // verify the required parameter 'ergoTransaction' is set

      if (ergoTransaction === undefined || ergoTransaction === null) {
        throw new Error("Missing the required parameter 'ergoTransaction' when calling sendTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/transactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TransactionsApi;
}();

exports["default"] = TransactionsApi;