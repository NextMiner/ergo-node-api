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
 * The WalletDeriveKeyBody model module.
 * @module model/WalletDeriveKeyBody
 * @version 4.0.14
 */
var WalletDeriveKeyBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletDeriveKeyBody</code>.
   * @alias module:model/WalletDeriveKeyBody
   * @param derivationPath {String} Derivation path for a new secret to derive
   */
  function WalletDeriveKeyBody(derivationPath) {
    _classCallCheck(this, WalletDeriveKeyBody);

    WalletDeriveKeyBody.initialize(this, derivationPath);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletDeriveKeyBody, null, [{
    key: "initialize",
    value: function initialize(obj, derivationPath) {
      obj['derivationPath'] = derivationPath;
    }
    /**
     * Constructs a <code>WalletDeriveKeyBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletDeriveKeyBody} obj Optional instance to populate.
     * @return {module:model/WalletDeriveKeyBody} The populated <code>WalletDeriveKeyBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletDeriveKeyBody();

        if (data.hasOwnProperty('derivationPath')) {
          obj['derivationPath'] = _ApiClient["default"].convertToType(data['derivationPath'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WalletDeriveKeyBody;
}();
/**
 * Derivation path for a new secret to derive
 * @member {String} derivationPath
 */


WalletDeriveKeyBody.prototype['derivationPath'] = undefined;
var _default = WalletDeriveKeyBody;
exports["default"] = _default;