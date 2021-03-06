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
import NodeInfo from '../model/NodeInfo';

/**
* Info service.
* @module api/InfoApi
* @version 4.0.14
*/
export default class InfoApi {

    /**
    * Constructs a new InfoApi. 
    * @alias module:api/InfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getNodeInfo operation.
     * @callback module:api/InfoApi~getNodeInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the information about the Node
     * @param {module:api/InfoApi~getNodeInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NodeInfo}
     */
    getNodeInfo(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NodeInfo;
      return this.apiClient.callApi(
        '/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
