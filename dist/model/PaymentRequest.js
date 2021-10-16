"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Asset = _interopRequireDefault(require("./Asset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaymentRequest model module.
 * @module model/PaymentRequest
 * @version 4.0.14
 */
var PaymentRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentRequest</code>.
   * Request for generation of payment transaction to a given address
   * @alias module:model/PaymentRequest
   * @param address {String} Encoded Ergo Address
   * @param value {Number} Payment amount
   */
  function PaymentRequest(address, value) {
    _classCallCheck(this, PaymentRequest);

    PaymentRequest.initialize(this, address, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaymentRequest, null, [{
    key: "initialize",
    value: function initialize(obj, address, value) {
      obj['address'] = address;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>PaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentRequest} obj Optional instance to populate.
     * @return {module:model/PaymentRequest} The populated <code>PaymentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentRequest();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('assets')) {
          obj['assets'] = _ApiClient["default"].convertToType(data['assets'], [_Asset["default"]]);
        }

        if (data.hasOwnProperty('registers')) {
          obj['registers'] = _ApiClient["default"].convertToType(data['registers'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return PaymentRequest;
}();
/**
 * Encoded Ergo Address
 * @member {String} address
 */


PaymentRequest.prototype['address'] = undefined;
/**
 * Payment amount
 * @member {Number} value
 */

PaymentRequest.prototype['value'] = undefined;
/**
 * Assets list in the transaction
 * @member {Array.<module:model/Asset>} assets
 */

PaymentRequest.prototype['assets'] = undefined;
/**
 * Ergo box registers
 * @member {Object.<String, String>} registers
 */

PaymentRequest.prototype['registers'] = undefined;
var _default = PaymentRequest;
exports["default"] = _default;