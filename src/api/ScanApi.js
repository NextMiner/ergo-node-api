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
import Scan from '../model/Scan';
import ScanId from '../model/ScanId';
import ScanIdBoxId from '../model/ScanIdBoxId';
import ScanIdsBox from '../model/ScanIdsBox';
import ScanRequest from '../model/ScanRequest';
import WalletBox from '../model/WalletBox';

/**
* Scan service.
* @module api/ScanApi
* @version 4.0.14
*/
export default class ScanApi {

    /**
    * Constructs a new ScanApi. 
    * @alias module:api/ScanApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    addBox(scanIdsBox, callback) {
      let postBody = scanIdsBox;
      // verify the required parameter 'scanIdsBox' is set
      if (scanIdsBox === undefined || scanIdsBox === null) {
        throw new Error("Missing the required parameter 'scanIdsBox' when calling addBox");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/scan/addBox', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deregisterScan(scanId, callback) {
      let postBody = scanId;
      // verify the required parameter 'scanId' is set
      if (scanId === undefined || scanId === null) {
        throw new Error("Missing the required parameter 'scanId' when calling deregisterScan");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScanId;
      return this.apiClient.callApi(
        '/scan/deregister', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    listAllScans(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Scan];
      return this.apiClient.callApi(
        '/scan/listAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    listUnspentScans(scanId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'scanId' is set
      if (scanId === undefined || scanId === null) {
        throw new Error("Missing the required parameter 'scanId' when calling listUnspentScans");
      }

      let pathParams = {
        'scanId': scanId
      };
      let queryParams = {
        'minConfirmations': opts['minConfirmations'],
        'minInclusionHeight': opts['minInclusionHeight']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WalletBox];
      return this.apiClient.callApi(
        '/scan/unspentBoxes/{scanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    registerScan(scanRequest, callback) {
      let postBody = scanRequest;
      // verify the required parameter 'scanRequest' is set
      if (scanRequest === undefined || scanRequest === null) {
        throw new Error("Missing the required parameter 'scanRequest' when calling registerScan");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScanId;
      return this.apiClient.callApi(
        '/scan/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    scanStopTracking(scanIdBoxId, callback) {
      let postBody = scanIdBoxId;
      // verify the required parameter 'scanIdBoxId' is set
      if (scanIdBoxId === undefined || scanIdBoxId === null) {
        throw new Error("Missing the required parameter 'scanIdBoxId' when calling scanStopTracking");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScanIdBoxId;
      return this.apiClient.callApi(
        '/scan/stopTracking', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
