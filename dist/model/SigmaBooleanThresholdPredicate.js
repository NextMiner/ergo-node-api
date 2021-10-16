"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SigmaBoolean = _interopRequireDefault(require("./SigmaBoolean"));

var _SigmaBooleanAndPredicateAllOf = _interopRequireDefault(require("./SigmaBooleanAndPredicateAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SigmaBooleanThresholdPredicate model module.
 * @module model/SigmaBooleanThresholdPredicate
 * @version 4.0.14
 */
var SigmaBooleanThresholdPredicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SigmaBooleanThresholdPredicate</code>.
   * @alias module:model/SigmaBooleanThresholdPredicate
   * @implements module:model/SigmaBoolean
   * @implements module:model/SigmaBooleanAndPredicateAllOf
   * @param op {Number} Sigma opCode
   */
  function SigmaBooleanThresholdPredicate(op) {
    _classCallCheck(this, SigmaBooleanThresholdPredicate);

    _SigmaBoolean["default"].initialize(this, op);

    _SigmaBooleanAndPredicateAllOf["default"].initialize(this);

    SigmaBooleanThresholdPredicate.initialize(this, op);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SigmaBooleanThresholdPredicate, null, [{
    key: "initialize",
    value: function initialize(obj, op) {
      obj['op'] = op;
    }
    /**
     * Constructs a <code>SigmaBooleanThresholdPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigmaBooleanThresholdPredicate} obj Optional instance to populate.
     * @return {module:model/SigmaBooleanThresholdPredicate} The populated <code>SigmaBooleanThresholdPredicate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SigmaBooleanThresholdPredicate();

        _SigmaBoolean["default"].constructFromObject(data, obj);

        _SigmaBooleanAndPredicateAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('op')) {
          obj['op'] = _ApiClient["default"].convertToType(data['op'], 'Number');
        }

        if (data.hasOwnProperty('h')) {
          obj['h'] = _ApiClient["default"].convertToType(data['h'], 'String');
        }

        if (data.hasOwnProperty('g')) {
          obj['g'] = _ApiClient["default"].convertToType(data['g'], 'String');
        }

        if (data.hasOwnProperty('u')) {
          obj['u'] = _ApiClient["default"].convertToType(data['u'], 'String');
        }

        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], 'String');
        }

        if (data.hasOwnProperty('condition')) {
          obj['condition'] = _ApiClient["default"].convertToType(data['condition'], 'Boolean');
        }

        if (data.hasOwnProperty('args')) {
          obj['args'] = _ApiClient["default"].convertToType(data['args'], [_SigmaBoolean["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SigmaBooleanThresholdPredicate;
}();
/**
 * Sigma opCode
 * @member {Number} op
 */


SigmaBooleanThresholdPredicate.prototype['op'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} h
 */

SigmaBooleanThresholdPredicate.prototype['h'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} g
 */

SigmaBooleanThresholdPredicate.prototype['g'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} u
 */

SigmaBooleanThresholdPredicate.prototype['u'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} v
 */

SigmaBooleanThresholdPredicate.prototype['v'] = undefined;
/**
 * @member {Boolean} condition
 */

SigmaBooleanThresholdPredicate.prototype['condition'] = undefined;
/**
 * @member {Array.<module:model/SigmaBoolean>} args
 */

SigmaBooleanThresholdPredicate.prototype['args'] = undefined; // Implement SigmaBoolean interface:

/**
 * Sigma opCode
 * @member {Number} op
 */

_SigmaBoolean["default"].prototype['op'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} h
 */

_SigmaBoolean["default"].prototype['h'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} g
 */

_SigmaBoolean["default"].prototype['g'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} u
 */

_SigmaBoolean["default"].prototype['u'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} v
 */

_SigmaBoolean["default"].prototype['v'] = undefined;
/**
 * @member {Boolean} condition
 */

_SigmaBoolean["default"].prototype['condition'] = undefined; // Implement SigmaBooleanAndPredicateAllOf interface:

/**
 * @member {Array.<module:model/SigmaBoolean>} args
 */

_SigmaBooleanAndPredicateAllOf["default"].prototype['args'] = undefined;
var _default = SigmaBooleanThresholdPredicate;
exports["default"] = _default;