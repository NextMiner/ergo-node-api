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
 * The DlogCommitment model module.
 * @module model/DlogCommitment
 * @version 4.0.14
 */
var DlogCommitment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DlogCommitment</code>.
   * Randomness and commitment for the first step of the Schnorr protocol
   * @alias module:model/DlogCommitment
   * @param r {String} Hex-encoded big-endian 256-bits secret exponent
   * @param a {String} Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
   */
  function DlogCommitment(r, a) {
    _classCallCheck(this, DlogCommitment);

    DlogCommitment.initialize(this, r, a);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DlogCommitment, null, [{
    key: "initialize",
    value: function initialize(obj, r, a) {
      obj['r'] = r;
      obj['a'] = a;
    }
    /**
     * Constructs a <code>DlogCommitment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DlogCommitment} obj Optional instance to populate.
     * @return {module:model/DlogCommitment} The populated <code>DlogCommitment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DlogCommitment();

        if (data.hasOwnProperty('r')) {
          obj['r'] = _ApiClient["default"].convertToType(data['r'], 'String');
        }

        if (data.hasOwnProperty('a')) {
          obj['a'] = _ApiClient["default"].convertToType(data['a'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DlogCommitment;
}();
/**
 * Hex-encoded big-endian 256-bits secret exponent
 * @member {String} r
 */


DlogCommitment.prototype['r'] = undefined;
/**
 * Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} a
 */

DlogCommitment.prototype['a'] = undefined;
var _default = DlogCommitment;
exports["default"] = _default;