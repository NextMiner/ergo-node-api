"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commitment = _interopRequireDefault(require("./Commitment"));

var _SigmaBoolean = _interopRequireDefault(require("./SigmaBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitmentWithSecret model module.
 * @module model/CommitmentWithSecret
 * @version 4.0.14
 */
var CommitmentWithSecret = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitmentWithSecret</code>.
   * commitment to secret along with secret (!) randomness
   * @alias module:model/CommitmentWithSecret
   * @implements module:model/Commitment
   * @param hint {module:model/CommitmentWithSecret.HintEnum} 
   * @param pubkey {module:model/SigmaBoolean} 
   * @param position {String} 
   * @param a {String} a group element of the commitment
   */
  function CommitmentWithSecret(hint, pubkey, position, a) {
    _classCallCheck(this, CommitmentWithSecret);

    _Commitment["default"].initialize(this, hint, pubkey, position, a);

    CommitmentWithSecret.initialize(this, hint, pubkey, position, a);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitmentWithSecret, null, [{
    key: "initialize",
    value: function initialize(obj, hint, pubkey, position, a) {
      obj['hint'] = hint;
      obj['pubkey'] = pubkey;
      obj['position'] = position;
      obj['a'] = a;
    }
    /**
     * Constructs a <code>CommitmentWithSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitmentWithSecret} obj Optional instance to populate.
     * @return {module:model/CommitmentWithSecret} The populated <code>CommitmentWithSecret</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitmentWithSecret();

        _Commitment["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('hint')) {
          obj['hint'] = _ApiClient["default"].convertToType(data['hint'], 'String');
        }

        if (data.hasOwnProperty('pubkey')) {
          obj['pubkey'] = _SigmaBoolean["default"].constructFromObject(data['pubkey']);
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('a')) {
          obj['a'] = _ApiClient["default"].convertToType(data['a'], 'String');
        }

        if (data.hasOwnProperty('b')) {
          obj['b'] = _ApiClient["default"].convertToType(data['b'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitmentWithSecret;
}();
/**
 * @member {module:model/CommitmentWithSecret.HintEnum} hint
 */


CommitmentWithSecret.prototype['hint'] = undefined;
/**
 * @member {module:model/SigmaBoolean} pubkey
 */

CommitmentWithSecret.prototype['pubkey'] = undefined;
/**
 * @member {String} position
 */

CommitmentWithSecret.prototype['position'] = undefined;
/**
 * @member {module:model/CommitmentWithSecret.TypeEnum} type
 */

CommitmentWithSecret.prototype['type'] = undefined;
/**
 * a group element of the commitment
 * @member {String} a
 */

CommitmentWithSecret.prototype['a'] = undefined;
/**
 * b group element of the commitment (needed for DHT protocol only)
 * @member {String} b
 */

CommitmentWithSecret.prototype['b'] = undefined; // Implement Commitment interface:

/**
 * @member {module:model/Commitment.HintEnum} hint
 */

_Commitment["default"].prototype['hint'] = undefined;
/**
 * @member {module:model/SigmaBoolean} pubkey
 */

_Commitment["default"].prototype['pubkey'] = undefined;
/**
 * @member {String} position
 */

_Commitment["default"].prototype['position'] = undefined;
/**
 * @member {module:model/Commitment.TypeEnum} type
 */

_Commitment["default"].prototype['type'] = undefined;
/**
 * a group element of the commitment
 * @member {String} a
 */

_Commitment["default"].prototype['a'] = undefined;
/**
 * b group element of the commitment (needed for DHT protocol only)
 * @member {String} b
 */

_Commitment["default"].prototype['b'] = undefined;
/**
 * Allowed values for the <code>hint</code> property.
 * @enum {String}
 * @readonly
 */

CommitmentWithSecret['HintEnum'] = {
  /**
   * value: "cmtWithSecret"
   * @const
   */
  "cmtWithSecret": "cmtWithSecret",

  /**
   * value: "cmtReal"
   * @const
   */
  "cmtReal": "cmtReal",

  /**
   * value: "cmtSimulated"
   * @const
   */
  "cmtSimulated": "cmtSimulated"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CommitmentWithSecret['TypeEnum'] = {
  /**
   * value: "dlog"
   * @const
   */
  "dlog": "dlog",

  /**
   * value: "dht"
   * @const
   */
  "dht": "dht"
};
var _default = CommitmentWithSecret;
exports["default"] = _default;