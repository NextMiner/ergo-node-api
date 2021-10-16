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
 * The Commitment model module.
 * @module model/Commitment
 * @version 4.0.14
 */
var Commitment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Commitment</code>.
   * basic trait for prover commitments
   * @alias module:model/Commitment
   * @param hint {module:model/Commitment.HintEnum} 
   * @param pubkey {module:model/SigmaBoolean} 
   * @param position {String} 
   * @param a {String} a group element of the commitment
   */
  function Commitment(hint, pubkey, position, a) {
    _classCallCheck(this, Commitment);

    Commitment.initialize(this, hint, pubkey, position, a);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Commitment, null, [{
    key: "initialize",
    value: function initialize(obj, hint, pubkey, position, a) {
      obj['hint'] = hint;
      obj['pubkey'] = pubkey;
      obj['position'] = position;
      obj['a'] = a;
    }
    /**
     * Constructs a <code>Commitment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commitment} obj Optional instance to populate.
     * @return {module:model/Commitment} The populated <code>Commitment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Commitment();

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

  return Commitment;
}();
/**
 * @member {module:model/Commitment.HintEnum} hint
 */


Commitment.prototype['hint'] = undefined;
/**
 * @member {module:model/SigmaBoolean} pubkey
 */

Commitment.prototype['pubkey'] = undefined;
/**
 * @member {String} position
 */

Commitment.prototype['position'] = undefined;
/**
 * @member {module:model/Commitment.TypeEnum} type
 */

Commitment.prototype['type'] = undefined;
/**
 * a group element of the commitment
 * @member {String} a
 */

Commitment.prototype['a'] = undefined;
/**
 * b group element of the commitment (needed for DHT protocol only)
 * @member {String} b
 */

Commitment.prototype['b'] = undefined;
/**
 * Allowed values for the <code>hint</code> property.
 * @enum {String}
 * @readonly
 */

Commitment['HintEnum'] = {
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

Commitment['TypeEnum'] = {
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
var _default = Commitment;
exports["default"] = _default;