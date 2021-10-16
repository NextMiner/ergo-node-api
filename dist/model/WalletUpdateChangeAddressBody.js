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
 * The WalletUpdateChangeAddressBody model module.
 * @module model/WalletUpdateChangeAddressBody
 * @version 4.0.14
 */
var WalletUpdateChangeAddressBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletUpdateChangeAddressBody</code>.
   * @alias module:model/WalletUpdateChangeAddressBody
   * @param address {String} Pay2PubKey address
   */
  function WalletUpdateChangeAddressBody(address) {
    _classCallCheck(this, WalletUpdateChangeAddressBody);

    WalletUpdateChangeAddressBody.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletUpdateChangeAddressBody, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>WalletUpdateChangeAddressBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletUpdateChangeAddressBody} obj Optional instance to populate.
     * @return {module:model/WalletUpdateChangeAddressBody} The populated <code>WalletUpdateChangeAddressBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletUpdateChangeAddressBody();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WalletUpdateChangeAddressBody;
}();
/**
 * Pay2PubKey address
 * @member {String} address
 */


WalletUpdateChangeAddressBody.prototype['address'] = undefined;
var _default = WalletUpdateChangeAddressBody;
exports["default"] = _default;