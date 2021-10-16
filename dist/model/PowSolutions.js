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
 * The PowSolutions model module.
 * @module model/PowSolutions
 * @version 4.0.14
 */
var PowSolutions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PowSolutions</code>.
   * An object containing all components of pow solution
   * @alias module:model/PowSolutions
   * @param pk {String} Base16-encoded public key
   * @param w {String} 
   * @param n {String} 
   * @param d {Number} 
   */
  function PowSolutions(pk, w, n, d) {
    _classCallCheck(this, PowSolutions);

    PowSolutions.initialize(this, pk, w, n, d);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PowSolutions, null, [{
    key: "initialize",
    value: function initialize(obj, pk, w, n, d) {
      obj['pk'] = pk;
      obj['w'] = w;
      obj['n'] = n;
      obj['d'] = d;
    }
    /**
     * Constructs a <code>PowSolutions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PowSolutions} obj Optional instance to populate.
     * @return {module:model/PowSolutions} The populated <code>PowSolutions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PowSolutions();

        if (data.hasOwnProperty('pk')) {
          obj['pk'] = _ApiClient["default"].convertToType(data['pk'], 'String');
        }

        if (data.hasOwnProperty('w')) {
          obj['w'] = _ApiClient["default"].convertToType(data['w'], 'String');
        }

        if (data.hasOwnProperty('n')) {
          obj['n'] = _ApiClient["default"].convertToType(data['n'], 'String');
        }

        if (data.hasOwnProperty('d')) {
          obj['d'] = _ApiClient["default"].convertToType(data['d'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PowSolutions;
}();
/**
 * Base16-encoded public key
 * @member {String} pk
 */


PowSolutions.prototype['pk'] = undefined;
/**
 * @member {String} w
 */

PowSolutions.prototype['w'] = undefined;
/**
 * @member {String} n
 */

PowSolutions.prototype['n'] = undefined;
/**
 * @member {Number} d
 */

PowSolutions.prototype['d'] = undefined;
var _default = PowSolutions;
exports["default"] = _default;