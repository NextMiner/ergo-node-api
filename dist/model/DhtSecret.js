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
 * The DhtSecret model module.
 * @module model/DhtSecret
 * @version 4.0.14
 */
var DhtSecret = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DhtSecret</code>.
   * Hex-encoded big-endian 256-bits secret exponent \&quot;w\&quot; along with generators \&quot;g\&quot;, \&quot;h\&quot;, and group elements \&quot;u\&quot;, \&quot;v\&quot;, such as g^w &#x3D; u, h^w &#x3D; v
   * @alias module:model/DhtSecret
   * @param secret {String} Hex-encoded big-endian 256-bits secret exponent
   * @param g {String} Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
   * @param h {String} Hex-encoded \"h\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
   * @param u {String} Hex-encoded \"u\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
   * @param v {String} Hex-encoded \"v\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
   */
  function DhtSecret(secret, g, h, u, v) {
    _classCallCheck(this, DhtSecret);

    DhtSecret.initialize(this, secret, g, h, u, v);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DhtSecret, null, [{
    key: "initialize",
    value: function initialize(obj, secret, g, h, u, v) {
      obj['secret'] = secret;
      obj['g'] = g;
      obj['h'] = h;
      obj['u'] = u;
      obj['v'] = v;
    }
    /**
     * Constructs a <code>DhtSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DhtSecret} obj Optional instance to populate.
     * @return {module:model/DhtSecret} The populated <code>DhtSecret</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DhtSecret();

        if (data.hasOwnProperty('secret')) {
          obj['secret'] = _ApiClient["default"].convertToType(data['secret'], 'String');
        }

        if (data.hasOwnProperty('g')) {
          obj['g'] = _ApiClient["default"].convertToType(data['g'], 'String');
        }

        if (data.hasOwnProperty('h')) {
          obj['h'] = _ApiClient["default"].convertToType(data['h'], 'String');
        }

        if (data.hasOwnProperty('u')) {
          obj['u'] = _ApiClient["default"].convertToType(data['u'], 'String');
        }

        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DhtSecret;
}();
/**
 * Hex-encoded big-endian 256-bits secret exponent
 * @member {String} secret
 */


DhtSecret.prototype['secret'] = undefined;
/**
 * Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} g
 */

DhtSecret.prototype['g'] = undefined;
/**
 * Hex-encoded \"h\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} h
 */

DhtSecret.prototype['h'] = undefined;
/**
 * Hex-encoded \"u\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} u
 */

DhtSecret.prototype['u'] = undefined;
/**
 * Hex-encoded \"v\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} v
 */

DhtSecret.prototype['v'] = undefined;
var _default = DhtSecret;
exports["default"] = _default;