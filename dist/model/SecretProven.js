"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SigmaBoolean = _interopRequireDefault(require("./SigmaBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SecretProven model module.
 * @module model/SecretProven
 * @version 4.0.14
 */
var SecretProven = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecretProven</code>.
   * @alias module:model/SecretProven
   * @param hint {module:model/SecretProven.HintEnum} 
   * @param challenge {String} 
   * @param pubkey {module:model/SigmaBoolean} 
   * @param proof {String} 
   * @param position {String} 
   */
  function SecretProven(hint, challenge, pubkey, proof, position) {
    _classCallCheck(this, SecretProven);

    SecretProven.initialize(this, hint, challenge, pubkey, proof, position);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecretProven, null, [{
    key: "initialize",
    value: function initialize(obj, hint, challenge, pubkey, proof, position) {
      obj['hint'] = hint;
      obj['challenge'] = challenge;
      obj['pubkey'] = pubkey;
      obj['proof'] = proof;
      obj['position'] = position;
    }
    /**
     * Constructs a <code>SecretProven</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretProven} obj Optional instance to populate.
     * @return {module:model/SecretProven} The populated <code>SecretProven</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecretProven();

        if (data.hasOwnProperty('hint')) {
          obj['hint'] = _ApiClient["default"].convertToType(data['hint'], 'String');
        }

        if (data.hasOwnProperty('challenge')) {
          obj['challenge'] = _ApiClient["default"].convertToType(data['challenge'], 'String');
        }

        if (data.hasOwnProperty('pubkey')) {
          obj['pubkey'] = _SigmaBoolean["default"].constructFromObject(data['pubkey']);
        }

        if (data.hasOwnProperty('proof')) {
          obj['proof'] = _ApiClient["default"].convertToType(data['proof'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecretProven;
}();
/**
 * @member {module:model/SecretProven.HintEnum} hint
 */


SecretProven.prototype['hint'] = undefined;
/**
 * @member {String} challenge
 */

SecretProven.prototype['challenge'] = undefined;
/**
 * @member {module:model/SigmaBoolean} pubkey
 */

SecretProven.prototype['pubkey'] = undefined;
/**
 * @member {String} proof
 */

SecretProven.prototype['proof'] = undefined;
/**
 * @member {String} position
 */

SecretProven.prototype['position'] = undefined;
/**
 * Allowed values for the <code>hint</code> property.
 * @enum {String}
 * @readonly
 */

SecretProven['HintEnum'] = {
  /**
   * value: "proofReal"
   * @const
   */
  "proofReal": "proofReal",

  /**
   * value: "proofSimulated"
   * @const
   */
  "proofSimulated": "proofSimulated"
};
var _default = SecretProven;
exports["default"] = _default;