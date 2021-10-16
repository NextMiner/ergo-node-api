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
 * The SigmaBoolean model module.
 * @module model/SigmaBoolean
 * @version 4.0.14
 */
var SigmaBoolean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SigmaBoolean</code>.
   * Algebraic data type of sigma proposition expressions
   * @alias module:model/SigmaBoolean
   * @param op {Number} Sigma opCode
   */
  function SigmaBoolean(op) {
    _classCallCheck(this, SigmaBoolean);

    SigmaBoolean.initialize(this, op);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SigmaBoolean, null, [{
    key: "initialize",
    value: function initialize(obj, op) {
      obj['op'] = op;
    }
    /**
     * Constructs a <code>SigmaBoolean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigmaBoolean} obj Optional instance to populate.
     * @return {module:model/SigmaBoolean} The populated <code>SigmaBoolean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SigmaBoolean();

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
      }

      return obj;
    }
  }]);

  return SigmaBoolean;
}();
/**
 * Sigma opCode
 * @member {Number} op
 */


SigmaBoolean.prototype['op'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} h
 */

SigmaBoolean.prototype['h'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} g
 */

SigmaBoolean.prototype['g'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} u
 */

SigmaBoolean.prototype['u'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} v
 */

SigmaBoolean.prototype['v'] = undefined;
/**
 * @member {Boolean} condition
 */

SigmaBoolean.prototype['condition'] = undefined;
var _default = SigmaBoolean;
exports["default"] = _default;