"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiError = _interopRequireDefault(require("../model/ApiError"));

var _NodeInfo = _interopRequireDefault(require("../model/NodeInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Info service.
* @module api/InfoApi
* @version 4.0.14
*/
var InfoApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InfoApi. 
  * @alias module:api/InfoApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InfoApi(apiClient) {
    _classCallCheck(this, InfoApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(InfoApi, [{
    key: "getNodeInfo",
    value: function getNodeInfo(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NodeInfo["default"];
      return this.apiClient.callApi('/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InfoApi;
}();

exports["default"] = InfoApi;