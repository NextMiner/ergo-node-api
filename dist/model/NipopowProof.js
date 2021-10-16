"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockHeader = _interopRequireDefault(require("./BlockHeader"));

var _PopowHeader = _interopRequireDefault(require("./PopowHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NipopowProof model module.
 * @module model/NipopowProof
 * @version 4.0.14
 */
var NipopowProof = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NipopowProof</code>.
   * @alias module:model/NipopowProof
   * @param m {Number} security parameter (min μ-level superchain length)
   * @param k {Number} security parameter (min suffix length, >= 1)
   * @param prefix {Array.<module:model/PopowHeader>} proof prefix headers
   * @param suffixHead {module:model/PopowHeader} 
   * @param suffixTail {Array.<module:model/BlockHeader>} tail of the proof suffix headers
   */
  function NipopowProof(m, k, prefix, suffixHead, suffixTail) {
    _classCallCheck(this, NipopowProof);

    NipopowProof.initialize(this, m, k, prefix, suffixHead, suffixTail);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NipopowProof, null, [{
    key: "initialize",
    value: function initialize(obj, m, k, prefix, suffixHead, suffixTail) {
      obj['m'] = m;
      obj['k'] = k;
      obj['prefix'] = prefix;
      obj['suffixHead'] = suffixHead;
      obj['suffixTail'] = suffixTail;
    }
    /**
     * Constructs a <code>NipopowProof</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NipopowProof} obj Optional instance to populate.
     * @return {module:model/NipopowProof} The populated <code>NipopowProof</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NipopowProof();

        if (data.hasOwnProperty('m')) {
          obj['m'] = _ApiClient["default"].convertToType(data['m'], 'Number');
        }

        if (data.hasOwnProperty('k')) {
          obj['k'] = _ApiClient["default"].convertToType(data['k'], 'Number');
        }

        if (data.hasOwnProperty('prefix')) {
          obj['prefix'] = _ApiClient["default"].convertToType(data['prefix'], [_PopowHeader["default"]]);
        }

        if (data.hasOwnProperty('suffixHead')) {
          obj['suffixHead'] = _PopowHeader["default"].constructFromObject(data['suffixHead']);
        }

        if (data.hasOwnProperty('suffixTail')) {
          obj['suffixTail'] = _ApiClient["default"].convertToType(data['suffixTail'], [_BlockHeader["default"]]);
        }
      }

      return obj;
    }
  }]);

  return NipopowProof;
}();
/**
 * security parameter (min μ-level superchain length)
 * @member {Number} m
 */


NipopowProof.prototype['m'] = undefined;
/**
 * security parameter (min suffix length, >= 1)
 * @member {Number} k
 */

NipopowProof.prototype['k'] = undefined;
/**
 * proof prefix headers
 * @member {Array.<module:model/PopowHeader>} prefix
 */

NipopowProof.prototype['prefix'] = undefined;
/**
 * @member {module:model/PopowHeader} suffixHead
 */

NipopowProof.prototype['suffixHead'] = undefined;
/**
 * tail of the proof suffix headers
 * @member {Array.<module:model/BlockHeader>} suffixTail
 */

NipopowProof.prototype['suffixTail'] = undefined;
var _default = NipopowProof;
exports["default"] = _default;