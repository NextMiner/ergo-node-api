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
 * The WalletUnlockBody model module.
 * @module model/WalletUnlockBody
 * @version 4.0.14
 */
var WalletUnlockBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletUnlockBody</code>.
   * @alias module:model/WalletUnlockBody
   * @param pass {String} Password to decrypt wallet file with
   */
  function WalletUnlockBody(pass) {
    _classCallCheck(this, WalletUnlockBody);

    WalletUnlockBody.initialize(this, pass);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletUnlockBody, null, [{
    key: "initialize",
    value: function initialize(obj, pass) {
      obj['pass'] = pass;
    }
    /**
     * Constructs a <code>WalletUnlockBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletUnlockBody} obj Optional instance to populate.
     * @return {module:model/WalletUnlockBody} The populated <code>WalletUnlockBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletUnlockBody();

        if (data.hasOwnProperty('pass')) {
          obj['pass'] = _ApiClient["default"].convertToType(data['pass'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WalletUnlockBody;
}();
/**
 * Password to decrypt wallet file with
 * @member {String} pass
 */


WalletUnlockBody.prototype['pass'] = undefined;
var _default = WalletUnlockBody;
exports["default"] = _default;