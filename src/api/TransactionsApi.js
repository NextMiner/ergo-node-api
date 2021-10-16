/**
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 *
 * The version of the OpenAPI document: 4.0.14
 * Contact: ergoplatform@protonmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import ErgoTransaction from '../model/ErgoTransaction';
import FeeHistogramBin from '../model/FeeHistogramBin';

/**
* Transactions service.
* @module api/TransactionsApi
* @version 4.0.14
*/
export default class TransactionsApi {

    /**
    * Constructs a new TransactionsApi. 
    * @alias module:api/TransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    checkTransaction(ergoTransaction, callback) {
      let postBody = ergoTransaction;
      // verify the required parameter 'ergoTransaction' is set
      if (ergoTransaction === undefined || ergoTransaction === null) {
        throw new Error("Missing the required parameter 'ergoTransaction' when calling checkTransaction");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/transactions/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getExpectedWaitTime(fee, txSize, callback) {
      let postBody = null;
      // verify the required parameter 'fee' is set
      if (fee === undefined || fee === null) {
        throw new Error("Missing the required parameter 'fee' when calling getExpectedWaitTime");
      }
      // verify the required parameter 'txSize' is set
      if (txSize === undefined || txSize === null) {
        throw new Error("Missing the required parameter 'txSize' when calling getExpectedWaitTime");
      }

      let pathParams = {
      };
      let queryParams = {
        'fee': fee,
        'txSize': txSize
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/transactions/waitTime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getFeeHistogram(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'bins': opts['bins'],
        'maxtime': opts['maxtime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [FeeHistogramBin];
      return this.apiClient.callApi(
        '/transactions/poolHistogram', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getRecommendedFee(waitTime, txSize, callback) {
      let postBody = null;
      // verify the required parameter 'waitTime' is set
      if (waitTime === undefined || waitTime === null) {
        throw new Error("Missing the required parameter 'waitTime' when calling getRecommendedFee");
      }
      // verify the required parameter 'txSize' is set
      if (txSize === undefined || txSize === null) {
        throw new Error("Missing the required parameter 'txSize' when calling getRecommendedFee");
      }

      let pathParams = {
      };
      let queryParams = {
        'waitTime': waitTime,
        'txSize': txSize
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/transactions/getFee', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getUnconfirmedTransactions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ErgoTransaction];
      return this.apiClient.callApi(
        '/transactions/unconfirmed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    sendTransaction(ergoTransaction, callback) {
      let postBody = ergoTransaction;
      // verify the required parameter 'ergoTransaction' is set
      if (ergoTransaction === undefined || ergoTransaction === null) {
        throw new Error("Missing the required parameter 'ergoTransaction' when calling sendTransaction");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}