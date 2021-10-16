"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestsHolder model module.
 * @module model/RequestsHolder
 * @version 4.0.14
 */
var RequestsHolder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestsHolder</code>.
   * Holds many transaction requests and transaction fee
   * @alias module:model/RequestsHolder
   * @param requests {Array.<module:model/AnyOfPaymentRequestAssetIssueRequest>} Sequence of transaction requests
   */
  function RequestsHolder(requests) {
    _classCallCheck(this, RequestsHolder);

    RequestsHolder.initialize(this, requests);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestsHolder, null, [{
    key: "initialize",
    value: function initialize(obj, requests) {
      obj['requests'] = requests;
    }
    /**
     * Constructs a <code>RequestsHolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestsHolder} obj Optional instance to populate.
     * @return {module:model/RequestsHolder} The populated <code>RequestsHolder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestsHolder();

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], ['String']);
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'Number');
        }

        if (data.hasOwnProperty('inputsRaw')) {
          obj['inputsRaw'] = _ApiClient["default"].convertToType(data['inputsRaw'], ['String']);
        }

        if (data.hasOwnProperty('dataInputsRaw')) {
          obj['dataInputsRaw'] = _ApiClient["default"].convertToType(data['dataInputsRaw'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return RequestsHolder;
}();
/**
 * Sequence of transaction requests
 * @member {Array.<String>} requests
 */


RequestsHolder.prototype['requests'] = undefined;
/**
 * Transaction fee
 * @member {Number} fee
 */

RequestsHolder.prototype['fee'] = undefined;
/**
 * List of inputs to be used in serialized form
 * @member {Array.<String>} inputsRaw
 */

RequestsHolder.prototype['inputsRaw'] = undefined;
/**
 * List of data inputs to be used in serialized form
 * @member {Array.<String>} dataInputsRaw
 */

RequestsHolder.prototype['dataInputsRaw'] = undefined;
var _default = RequestsHolder;
exports["default"] = _default;