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
 * The WalletCheckBody model module.
 * @module model/WalletCheckBody
 * @version 4.0.14
 */
var WalletCheckBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletCheckBody</code>.
   * @alias module:model/WalletCheckBody
   * @param mnemonic {String} Mnemonic seed (optional)
   */
  function WalletCheckBody(mnemonic) {
    _classCallCheck(this, WalletCheckBody);

    WalletCheckBody.initialize(this, mnemonic);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletCheckBody, null, [{
    key: "initialize",
    value: function initialize(obj, mnemonic) {
      obj['mnemonic'] = mnemonic;
    }
    /**
     * Constructs a <code>WalletCheckBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletCheckBody} obj Optional instance to populate.
     * @return {module:model/WalletCheckBody} The populated <code>WalletCheckBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletCheckBody();

        if (data.hasOwnProperty('mnemonic')) {
          obj['mnemonic'] = _ApiClient["default"].convertToType(data['mnemonic'], 'String');
        }

        if (data.hasOwnProperty('mnemonicPass')) {
          obj['mnemonicPass'] = _ApiClient["default"].convertToType(data['mnemonicPass'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WalletCheckBody;
}();
/**
 * Mnemonic seed (optional)
 * @member {String} mnemonic
 */


WalletCheckBody.prototype['mnemonic'] = undefined;
/**
 * Optional pass to password-protect mnemonic seed
 * @member {String} mnemonicPass
 */

WalletCheckBody.prototype['mnemonicPass'] = undefined;
var _default = WalletCheckBody;
exports["default"] = _default;