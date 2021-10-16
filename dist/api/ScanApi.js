"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _Scan = _interopRequireDefault(require("../model/Scan"));

var _ScanId = _interopRequireDefault(require("../model/ScanId"));

var _ScanIdBoxId = _interopRequireDefault(require("../model/ScanIdBoxId"));

var _ScanIdsBox = _interopRequireDefault(require("../model/ScanIdsBox"));

var _ScanRequest = _interopRequireDefault(require("../model/ScanRequest"));

var _WalletBox = _interopRequireDefault(require("../model/WalletBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Scan service.
* @module api/ScanApi
* @version 4.0.14
*/
var ScanApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScanApi. 
  * @alias module:api/ScanApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScanApi(apiClient) {
    _classCallCheck(this, ScanApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addBox operation.
   * @callback module:api/ScanApi~addBoxCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Adds a box to scans, writes box to database if it is not there. You can use scan number 10 to add a box to the wallet.
   * @param {module:model/ScanIdsBox} scanIdsBox 
   * @param {module:api/ScanApi~addBoxCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(ScanApi, [{
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
     * Callback function to receive the result of the deregisterScan operation.
     * @callback module:api/ScanApi~deregisterScanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScanId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop tracking and deregister scan
     * @param {module:model/ScanId} scanId 
     * @param {module:api/ScanApi~deregisterScanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScanId}
     */

  }, {
    key: "deregisterScan",
    value: function deregisterScan(scanId, callback) {
      var postBody = scanId; // verify the required parameter 'scanId' is set

      if (scanId === undefined || scanId === null) {
        throw new Error("Missing the required parameter 'scanId' when calling deregisterScan");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScanId["default"];
      return this.apiClient.callApi('/scan/deregister', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listAllScans operation.
     * @callback module:api/ScanApi~listAllScansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Scan>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all the registered scans
     * @param {module:api/ScanApi~listAllScansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Scan>}
     */

  }, {
    key: "listAllScans",
    value: function listAllScans(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Scan["default"]];
      return this.apiClient.callApi('/scan/listAll', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listUnspentScans operation.
     * @callback module:api/ScanApi~listUnspentScansCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WalletBox>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List boxes which are not spent.
     * @param {Number} scanId identifier of a scan
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minConfirmations Minimal number of confirmations (default to 0)
     * @param {Number} opts.minInclusionHeight Minimal box inclusion height (default to 0)
     * @param {module:api/ScanApi~listUnspentScansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WalletBox>}
     */

  }, {
    key: "listUnspentScans",
    value: function listUnspentScans(scanId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'scanId' is set

      if (scanId === undefined || scanId === null) {
        throw new Error("Missing the required parameter 'scanId' when calling listUnspentScans");
      }

      var pathParams = {
        'scanId': scanId
      };
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
      return this.apiClient.callApi('/scan/unspentBoxes/{scanId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerScan operation.
     * @callback module:api/ScanApi~registerScanCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScanId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a scan
     * @param {module:model/ScanRequest} scanRequest 
     * @param {module:api/ScanApi~registerScanCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScanId}
     */

  }, {
    key: "registerScan",
    value: function registerScan(scanRequest, callback) {
      var postBody = scanRequest; // verify the required parameter 'scanRequest' is set

      if (scanRequest === undefined || scanRequest === null) {
        throw new Error("Missing the required parameter 'scanRequest' when calling registerScan");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScanId["default"];
      return this.apiClient.callApi('/scan/register', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scanStopTracking operation.
     * @callback module:api/ScanApi~scanStopTrackingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScanIdBoxId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop scan-related box tracking
     * @param {module:model/ScanIdBoxId} scanIdBoxId 
     * @param {module:api/ScanApi~scanStopTrackingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScanIdBoxId}
     */

  }, {
    key: "scanStopTracking",
    value: function scanStopTracking(scanIdBoxId, callback) {
      var postBody = scanIdBoxId; // verify the required parameter 'scanIdBoxId' is set

      if (scanIdBoxId === undefined || scanIdBoxId === null) {
        throw new Error("Missing the required parameter 'scanIdBoxId' when calling scanStopTracking");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScanIdBoxId["default"];
      return this.apiClient.callApi('/scan/stopTracking', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScanApi;
}();

exports["default"] = ScanApi;