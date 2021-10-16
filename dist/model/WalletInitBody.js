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
 * The WalletInitBody model module.
 * @module model/WalletInitBody
 * @version 4.0.14
 */
var WalletInitBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletInitBody</code>.
   * @alias module:model/WalletInitBody
   * @param pass {String} Password to encrypt wallet file with
   */
  function WalletInitBody(pass) {
    _classCallCheck(this, WalletInitBody);

    WalletInitBody.initialize(this, pass);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletInitBody, null, [{
    key: "initialize",
    value: function initialize(obj, pass) {
      obj['pass'] = pass;
    }
    /**
     * Constructs a <code>WalletInitBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletInitBody} obj Optional instance to populate.
     * @return {module:model/WalletInitBody} The populated <code>WalletInitBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletInitBody();

        if (data.hasOwnProperty('pass')) {
          obj['pass'] = _ApiClient["default"].convertToType(data['pass'], 'String');
        }

        if (data.hasOwnProperty('mnemonicPass')) {
          obj['mnemonicPass'] = _ApiClient["default"].convertToType(data['mnemonicPass'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WalletInitBody;
}();
/**
 * Password to encrypt wallet file with
 * @member {String} pass
 */


WalletInitBody.prototype['pass'] = undefined;
/**
 * Optional pass to password-protect mnemonic seed
 * @member {String} mnemonicPass
 */

WalletInitBody.prototype['mnemonicPass'] = undefined;
var _default = WalletInitBody;
exports["default"] = _default;