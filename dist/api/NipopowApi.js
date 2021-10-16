"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _NipopowProof = _interopRequireDefault(require("../model/NipopowProof"));

var _PopowHeader = _interopRequireDefault(require("../model/PopowHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Nipopow service.
* @module api/NipopowApi
* @version 4.0.14
*/
var NipopowApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NipopowApi. 
  * @alias module:api/NipopowApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NipopowApi(apiClient) {
    _classCallCheck(this, NipopowApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getPopowHeaderByHeight operation.
   * @callback module:api/NipopowApi~getPopowHeaderByHeightCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PopowHeader} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Construct PoPow header for best header at given height
   * @param {Number} height Height of a wanted header
   * @param {module:api/NipopowApi~getPopowHeaderByHeightCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PopowHeader}
   */


  _createClass(NipopowApi, [{
    key: "getPopowHeaderByHeight",
    value: function getPopowHeaderByHeight(height, callback) {
      var postBody = null; // verify the required parameter 'height' is set

      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getPopowHeaderByHeight");
      }

      var pathParams = {
        'height': height
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PopowHeader["default"];
      return this.apiClient.callApi('/nipopow/popowHeaderByHeight/{height}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPopowHeaderById operation.
     * @callback module:api/NipopowApi~getPopowHeaderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PopowHeader} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Construct PoPow header according to given header id
     * @param {String} headerId ID of wanted header
     * @param {module:api/NipopowApi~getPopowHeaderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PopowHeader}
     */

  }, {
    key: "getPopowHeaderById",
    value: function getPopowHeaderById(headerId, callback) {
      var postBody = null; // verify the required parameter 'headerId' is set

      if (headerId === undefined || headerId === null) {
        throw new Error("Missing the required parameter 'headerId' when calling getPopowHeaderById");
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
      var returnType = _PopowHeader["default"];
      return this.apiClient.callApi('/nipopow/popowHeaderById/{headerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPopowProof operation.
     * @callback module:api/NipopowApi~getPopowProofCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NipopowProof} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Construct PoPoW proof for given min superchain length and suffix length
     * @param {Number} minChainLength Minimal superchain length
     * @param {Number} suffixLength Suffix length
     * @param {module:api/NipopowApi~getPopowProofCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NipopowProof}
     */

  }, {
    key: "getPopowProof",
    value: function getPopowProof(minChainLength, suffixLength, callback) {
      var postBody = null; // verify the required parameter 'minChainLength' is set

      if (minChainLength === undefined || minChainLength === null) {
        throw new Error("Missing the required parameter 'minChainLength' when calling getPopowProof");
      } // verify the required parameter 'suffixLength' is set


      if (suffixLength === undefined || suffixLength === null) {
        throw new Error("Missing the required parameter 'suffixLength' when calling getPopowProof");
      }

      var pathParams = {
        'minChainLength': minChainLength,
        'suffixLength': suffixLength
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NipopowProof["default"];
      return this.apiClient.callApi('/nipopow/proof/{minChainLength}/{suffixLength}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPopowProofByHeaderId operation.
     * @callback module:api/NipopowApi~getPopowProofByHeaderIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NipopowProof} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Construct PoPoW proof for given min superchain length, suffix length and header ID
     * @param {Number} minChainLength Minimal superchain length
     * @param {Number} suffixLength Suffix length
     * @param {String} headerId ID of wanted header
     * @param {module:api/NipopowApi~getPopowProofByHeaderIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NipopowProof}
     */

  }, {
    key: "getPopowProofByHeaderId",
    value: function getPopowProofByHeaderId(minChainLength, suffixLength, headerId, callback) {
      var postBody = null; // verify the required parameter 'minChainLength' is set

      if (minChainLength === undefined || minChainLength === null) {
        throw new Error("Missing the required parameter 'minChainLength' when calling getPopowProofByHeaderId");
      } // verify the required parameter 'suffixLength' is set


      if (suffixLength === undefined || suffixLength === null) {
        throw new Error("Missing the required parameter 'suffixLength' when calling getPopowProofByHeaderId");
      } // verify the required parameter 'headerId' is set


      if (headerId === undefined || headerId === null) {
        throw new Error("Missing the required parameter 'headerId' when calling getPopowProofByHeaderId");
      }

      var pathParams = {
        'minChainLength': minChainLength,
        'suffixLength': suffixLength,
        'headerId': headerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NipopowProof["default"];
      return this.apiClient.callApi('/nipopow/proof/{minChainLength}/{suffixLength}/{headerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NipopowApi;
}();

exports["default"] = NipopowApi;