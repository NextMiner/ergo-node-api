"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _BalancesSnapshot = _interopRequireDefault(require("../model/BalancesSnapshot"));

var _ErgoTransaction = _interopRequireDefault(require("../model/ErgoTransaction"));

var _GenerateCommitmentsRequest = _interopRequireDefault(require("../model/GenerateCommitmentsRequest"));

var _HintExtractionRequest = _interopRequireDefault(require("../model/HintExtractionRequest"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _PaymentRequest = _interopRequireDefault(require("../model/PaymentRequest"));

var _RequestsHolder = _interopRequireDefault(require("../model/RequestsHolder"));

var _ScanIdsBox = _interopRequireDefault(require("../model/ScanIdsBox"));

var _TransactionHintsBag = _interopRequireDefault(require("../model/TransactionHintsBag"));

var _TransactionSigningRequest = _interopRequireDefault(require("../model/TransactionSigningRequest"));

var _UnsignedErgoTransaction = _interopRequireDefault(require("../model/UnsignedErgoTransaction"));

var _WalletBox = _interopRequireDefault(require("../model/WalletBox"));

var _WalletCheckBody = _interopRequireDefault(require("../model/WalletCheckBody"));

var _WalletDeriveKeyBody = _interopRequireDefault(require("../model/WalletDeriveKeyBody"));

var _WalletInitBody = _interopRequireDefault(require("../model/WalletInitBody"));

var _WalletRestoreBody = _interopRequireDefault(require("../model/WalletRestoreBody"));

var _WalletTransaction = _interopRequireDefault(require("../model/WalletTransaction"));

var _WalletUnlockBody = _interopRequireDefault(require("../model/WalletUnlockBody"));

var _WalletUpdateChangeAddressBody = _interopRequireDefault(require("../model/WalletUpdateChangeAddressBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Wallet service.
* @module api/WalletApi
* @version 4.0.14
*/
var WalletApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WalletApi. 
  * @alias module:api/WalletApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WalletApi(apiClient) {
    _classCallCheck(this, WalletApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addBox operation.
   * @callback module:api/WalletApi~addBoxCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.
   * @param {module:model/ScanIdsBox} scanIdsBox 
   * @param {module:api/WalletApi~addBoxCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(WalletApi, [{
    key: "addBox",
    value: function addBox(scanIdsBox, callback) {
      var postBody = scanIdsBox; // verify the required parameter 'scanIdsBox' is set

      if (scanIdsBox === undefined || scanIdsBox === null) {
        throw new Error("Missing the required parameter 'scanIdsBox' when calling addBox");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/scan/addBox', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the checkSeed operation.
     * @callback module:api/WalletApi~checkSeedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check whether mnemonic phrase is corresponding to the wallet seed
     * @param {module:model/WalletCheckBody} walletCheckBody 
     * @param {module:api/WalletApi~checkSeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "checkSeed",
    value: function checkSeed(walletCheckBody, callback) {
      var postBody = walletCheckBody; // verify the required parameter 'walletCheckBody' is set

      if (walletCheckBody === undefined || walletCheckBody === null) {
        throw new Error("Missing the required parameter 'walletCheckBody' when calling checkSeed");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/wallet/check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the extractHints operation.
     * @callback module:api/WalletApi~extractHintsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionHintsBag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract hints from a transaction
     * @param {module:model/HintExtractionRequest} hintExtractionRequest 
     * @param {module:api/WalletApi~extractHintsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionHintsBag}
     */

  }, {
    key: "extractHints",
    value: function extractHints(hintExtractionRequest, callback) {
      var postBody = hintExtractionRequest; // verify the required parameter 'hintExtractionRequest' is set

      if (hintExtractionRequest === undefined || hintExtractionRequest === null) {
        throw new Error("Missing the required parameter 'hintExtractionRequest' when calling extractHints");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionHintsBag["default"];
      return this.apiClient.callApi('/wallet/extractHints', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateCommitments operation.
     * @callback module:api/WalletApi~generateCommitmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionHintsBag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate signature commitments for inputs of an unsigned transaction
     * @param {module:model/GenerateCommitmentsRequest} generateCommitmentsRequest 
     * @param {module:api/WalletApi~generateCommitmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionHintsBag}
     */

  }, {
    key: "generateCommitments",
    value: function generateCommitments(generateCommitmentsRequest, callback) {
      var postBody = generateCommitmentsRequest; // verify the required parameter 'generateCommitmentsRequest' is set

      if (generateCommitmentsRequest === undefined || generateCommitmentsRequest === null) {
        throw new Error("Missing the required parameter 'generateCommitmentsRequest' when calling generateCommitments");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionHintsBag["default"];
      return this.apiClient.callApi('/wallet/generateCommitments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getWalletStatus operation.
     * @callback module:api/WalletApi~getWalletStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get wallet status
     * @param {module:api/WalletApi~getWalletStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "getWalletStatus",
    value: function getWalletStatus(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/wallet/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletAddresses operation.
     * @callback module:api/WalletApi~walletAddressesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get wallet addresses
     * @param {module:api/WalletApi~walletAddressesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "walletAddresses",
    value: function walletAddresses(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/wallet/addresses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletBalances operation.
     * @callback module:api/WalletApi~walletBalancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BalancesSnapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get total amount of confirmed Ergo tokens and assets
     * @param {module:api/WalletApi~walletBalancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BalancesSnapshot}
     */

  }, {
    key: "walletBalances",
    value: function walletBalances(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BalancesSnapshot["default"];
      return this.apiClient.callApi('/wallet/balances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletBalancesUnconfirmed operation.
     * @callback module:api/WalletApi~walletBalancesUnconfirmedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BalancesSnapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get summary amount of confirmed plus unconfirmed Ergo tokens and assets
     * @param {module:api/WalletApi~walletBalancesUnconfirmedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BalancesSnapshot}
     */

  }, {
    key: "walletBalancesUnconfirmed",
    value: function walletBalancesUnconfirmed(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BalancesSnapshot["default"];
      return this.apiClient.callApi('/wallet/balances/withUnconfirmed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletBoxes operation.
     * @callback module:api/WalletApi~walletBoxesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletBox>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all wallet-related boxes, both spent and unspent. Set minConfirmations to -1 to get mempool boxes included.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minConfirmations Minimal number of confirmations (default to 0)
     * @param {Number} opts.minInclusionHeight Minimal box inclusion height (default to 0)
     * @param {module:api/WalletApi~walletBoxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletBox>}
     */

  }, {
    key: "walletBoxes",
    value: function walletBoxes(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'minConfirmations': opts['minConfirmations'],
        'minInclusionHeight': opts['minInclusionHeight']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WalletBox["default"]];
      return this.apiClient.callApi('/wallet/boxes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletBoxesCollect operation.
     * @callback module:api/WalletApi~walletBoxesCollectCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletBox>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of collected boxes.
     * @param {module:api/WalletApi~walletBoxesCollectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletBox>}
     */

  }, {
    key: "walletBoxesCollect",
    value: function walletBoxesCollect(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WalletBox["default"]];
      return this.apiClient.callApi('/wallet/boxes/collect', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletDeriveKey operation.
     * @callback module:api/WalletApi~walletDeriveKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Derive new key according to a provided path
     * @param {module:model/WalletDeriveKeyBody} walletDeriveKeyBody 
     * @param {module:api/WalletApi~walletDeriveKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "walletDeriveKey",
    value: function walletDeriveKey(walletDeriveKeyBody, callback) {
      var postBody = walletDeriveKeyBody; // verify the required parameter 'walletDeriveKeyBody' is set

      if (walletDeriveKeyBody === undefined || walletDeriveKeyBody === null) {
        throw new Error("Missing the required parameter 'walletDeriveKeyBody' when calling walletDeriveKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/wallet/deriveKey', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletDeriveNextKey operation.
     * @callback module:api/WalletApi~walletDeriveNextKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Derive next key
     * @param {module:api/WalletApi~walletDeriveNextKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "walletDeriveNextKey",
    value: function walletDeriveNextKey(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/wallet/deriveNextKey', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletGetTransaction operation.
     * @callback module:api/WalletApi~walletGetTransactionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get wallet-related transaction by id
     * @param {String} id Transaction id
     * @param {module:api/WalletApi~walletGetTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletTransaction>}
     */

  }, {
    key: "walletGetTransaction",
    value: function walletGetTransaction(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling walletGetTransaction");
      }

      var pathParams = {};
      var queryParams = {
        'id': id
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WalletTransaction["default"]];
      return this.apiClient.callApi('/wallet/transactionById', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletInit operation.
     * @callback module:api/WalletApi~walletInitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initialize new wallet with randomly generated seed
     * @param {module:model/WalletInitBody} walletInitBody 
     * @param {module:api/WalletApi~walletInitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "walletInit",
    value: function walletInit(walletInitBody, callback) {
      var postBody = walletInitBody; // verify the required parameter 'walletInitBody' is set

      if (walletInitBody === undefined || walletInitBody === null) {
        throw new Error("Missing the required parameter 'walletInitBody' when calling walletInit");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/wallet/init', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletLock operation.
     * @callback module:api/WalletApi~walletLockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock wallet
     * @param {module:api/WalletApi~walletLockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "walletLock",
    value: function walletLock(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/wallet/lock', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletPaymentTransactionGenerateAndSend operation.
     * @callback module:api/WalletApi~walletPaymentTransactionGenerateAndSendCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate and send payment transaction (default fee of 0.001 Erg is used)
     * @param {Array.<module:model/PaymentRequest>} paymentRequest 
     * @param {module:api/WalletApi~walletPaymentTransactionGenerateAndSendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "walletPaymentTransactionGenerateAndSend",
    value: function walletPaymentTransactionGenerateAndSend(paymentRequest, callback) {
      var postBody = paymentRequest; // verify the required parameter 'paymentRequest' is set

      if (paymentRequest === undefined || paymentRequest === null) {
        throw new Error("Missing the required parameter 'paymentRequest' when calling walletPaymentTransactionGenerateAndSend");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/wallet/payment/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletRescan operation.
     * @callback module:api/WalletApi~walletRescanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rescan wallet (all the available full blocks)
     * @param {module:api/WalletApi~walletRescanCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "walletRescan",
    value: function walletRescan(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/wallet/rescan', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletRestore operation.
     * @callback module:api/WalletApi~walletRestoreCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new wallet from existing mnemonic seed
     * @param {module:model/WalletRestoreBody} walletRestoreBody 
     * @param {module:api/WalletApi~walletRestoreCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "walletRestore",
    value: function walletRestore(walletRestoreBody, callback) {
      var postBody = walletRestoreBody; // verify the required parameter 'walletRestoreBody' is set

      if (walletRestoreBody === undefined || walletRestoreBody === null) {
        throw new Error("Missing the required parameter 'walletRestoreBody' when calling walletRestore");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/wallet/restore', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletTransactionGenerate operation.
     * @callback module:api/WalletApi~walletTransactionGenerateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ErgoTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate arbitrary transaction from array of requests.
     * @param {module:model/RequestsHolder} requestsHolder This API method receives a sequence of requests as an input. Each request will produce an output of the resulting transaction (with fee output created automatically). Currently supported types of requests are payment and asset issuance requests. An example for a transaction with requests of both kinds is provided below. Please note that for the payment request \"assets\" and \"registers\" fields are not needed. For asset issuance request, \"registers\" field is not needed. You may specify boxes to spend by providing them in \"inputsRaw\". Please note you need to have strict equality between input and output total amounts of Ergs in this case. If you want wallet to pick up the boxes, leave \"inputsRaw\" empty.
     * @param {module:api/WalletApi~walletTransactionGenerateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ErgoTransaction}
     */

  }, {
    key: "walletTransactionGenerate",
    value: function walletTransactionGenerate(requestsHolder, callback) {
      var postBody = requestsHolder; // verify the required parameter 'requestsHolder' is set

      if (requestsHolder === undefined || requestsHolder === null) {
        throw new Error("Missing the required parameter 'requestsHolder' when calling walletTransactionGenerate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ErgoTransaction["default"];
      return this.apiClient.callApi('/wallet/transaction/generate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletTransactionGenerateAndSend operation.
     * @callback module:api/WalletApi~walletTransactionGenerateAndSendCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate and send arbitrary transaction
     * @param {module:model/RequestsHolder} requestsHolder See description of /wallet/transaction/generate
     * @param {module:api/WalletApi~walletTransactionGenerateAndSendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "walletTransactionGenerateAndSend",
    value: function walletTransactionGenerateAndSend(requestsHolder, callback) {
      var postBody = requestsHolder; // verify the required parameter 'requestsHolder' is set

      if (requestsHolder === undefined || requestsHolder === null) {
        throw new Error("Missing the required parameter 'requestsHolder' when calling walletTransactionGenerateAndSend");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/wallet/transaction/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletTransactionSign operation.
     * @callback module:api/WalletApi~walletTransactionSignCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ErgoTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign arbitrary unsigned transaction with wallet secrets and also secrets provided.
     * @param {module:model/TransactionSigningRequest} transactionSigningRequest With this API method an arbitrary unsigned transaction can be signed with secrets provided or stored in the wallet. Both DLOG and Diffie-Hellman tuple secrets are supported. Please note that the unsigned transaction contains only identifiers of inputs and data inputs. If the node holds UTXO set, it is able to extract boxes needed. Otherwise, input (and data-input) boxes can be provided in \"inputsRaw\" and \"dataInputsRaw\" fields.
     * @param {module:api/WalletApi~walletTransactionSignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ErgoTransaction}
     */

  }, {
    key: "walletTransactionSign",
    value: function walletTransactionSign(transactionSigningRequest, callback) {
      var postBody = transactionSigningRequest; // verify the required parameter 'transactionSigningRequest' is set

      if (transactionSigningRequest === undefined || transactionSigningRequest === null) {
        throw new Error("Missing the required parameter 'transactionSigningRequest' when calling walletTransactionSign");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ErgoTransaction["default"];
      return this.apiClient.callApi('/wallet/transaction/sign', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletTransactions operation.
     * @callback module:api/WalletApi~walletTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all wallet-related transactions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minInclusionHeight Minimal tx inclusion height
     * @param {Number} opts.maxInclusionHeight Maximal tx inclusion height
     * @param {Number} opts.minConfirmations Minimal confirmations number
     * @param {Number} opts.maxConfirmations Maximal confirmations number
     * @param {module:api/WalletApi~walletTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletTransaction>}
     */

  }, {
    key: "walletTransactions",
    value: function walletTransactions(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'minInclusionHeight': opts['minInclusionHeight'],
        'maxInclusionHeight': opts['maxInclusionHeight'],
        'minConfirmations': opts['minConfirmations'],
        'maxConfirmations': opts['maxConfirmations']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WalletTransaction["default"]];
      return this.apiClient.callApi('/wallet/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletTransactionsByScanId operation.
     * @callback module:api/WalletApi~walletTransactionsByScanIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get scan-related transactions by scan id
     * @param {String} scanId Scan id
     * @param {module:api/WalletApi~walletTransactionsByScanIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletTransaction>}
     */

  }, {
    key: "walletTransactionsByScanId",
    value: function walletTransactionsByScanId(scanId, callback) {
      var postBody = null; // verify the required parameter 'scanId' is set

      if (scanId === undefined || scanId === null) {
        throw new Error("Missing the required parameter 'scanId' when calling walletTransactionsByScanId");
      }

      var pathParams = {};
      var queryParams = {
        'scanId': scanId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WalletTransaction["default"]];
      return this.apiClient.callApi('/wallet/transactionsByScanId', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletUnlock operation.
     * @callback module:api/WalletApi~walletUnlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock wallet
     * @param {module:model/WalletUnlockBody} walletUnlockBody 
     * @param {module:api/WalletApi~walletUnlockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "walletUnlock",
    value: function walletUnlock(walletUnlockBody, callback) {
      var postBody = walletUnlockBody; // verify the required parameter 'walletUnlockBody' is set

      if (walletUnlockBody === undefined || walletUnlockBody === null) {
        throw new Error("Missing the required parameter 'walletUnlockBody' when calling walletUnlock");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/wallet/unlock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletUnsignedTransactionGenerate operation.
     * @callback module:api/WalletApi~walletUnsignedTransactionGenerateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnsignedErgoTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate unsigned transaction from array of requests.
     * @param {module:model/RequestsHolder} requestsHolder The same as /wallet/transaction/generate but generates unsigned transaction.
     * @param {module:api/WalletApi~walletUnsignedTransactionGenerateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnsignedErgoTransaction}
     */

  }, {
    key: "walletUnsignedTransactionGenerate",
    value: function walletUnsignedTransactionGenerate(requestsHolder, callback) {
      var postBody = requestsHolder; // verify the required parameter 'requestsHolder' is set

      if (requestsHolder === undefined || requestsHolder === null) {
        throw new Error("Missing the required parameter 'requestsHolder' when calling walletUnsignedTransactionGenerate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UnsignedErgoTransaction["default"];
      return this.apiClient.callApi('/wallet/transaction/generateUnsigned', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletUnspentBoxes operation.
     * @callback module:api/WalletApi~walletUnspentBoxesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletBox>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of unspent boxes. Set minConfirmations to -1 to have mempool boxes considered.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minConfirmations Minimal number of confirmations (default to 0)
     * @param {Number} opts.minInclusionHeight Minimal box inclusion height (default to 0)
     * @param {module:api/WalletApi~walletUnspentBoxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletBox>}
     */

  }, {
    key: "walletUnspentBoxes",
    value: function walletUnspentBoxes(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'minConfirmations': opts['minConfirmations'],
        'minInclusionHeight': opts['minInclusionHeight']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WalletBox["default"]];
      return this.apiClient.callApi('/wallet/boxes/unspent', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the walletUpdateChangeAddress operation.
     * @callback module:api/WalletApi~walletUpdateChangeAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update address to be used to send change to
     * @param {module:model/WalletUpdateChangeAddressBody} walletUpdateChangeAddressBody 
     * @param {module:api/WalletApi~walletUpdateChangeAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "walletUpdateChangeAddress",
    value: function walletUpdateChangeAddress(walletUpdateChangeAddressBody, callback) {
      var postBody = walletUpdateChangeAddressBody; // verify the required parameter 'walletUpdateChangeAddressBody' is set

      if (walletUpdateChangeAddressBody === undefined || walletUpdateChangeAddressBody === null) {
        throw new Error("Missing the required parameter 'walletUpdateChangeAddressBody' when calling walletUpdateChangeAddress");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/wallet/updateChangeAddress', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WalletApi;
}();

exports["default"] = WalletApi;