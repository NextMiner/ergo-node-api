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
 * The CryptoResult model module.
 * @module model/CryptoResult
 * @version 4.0.14
 */
var CryptoResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CryptoResult</code>.
   * Result of executeWithContext request (reduceToCrypto)
   * @alias module:model/CryptoResult
   * @param value {module:model/SigmaBoolean} 
   * @param cost {Number} Estimated cost of contract execution
   */
  function CryptoResult(value, cost) {
    _classCallCheck(this, CryptoResult);

    CryptoResult.initialize(this, value, cost);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CryptoResult, null, [{
    key: "initialize",
    value: function initialize(obj, value, cost) {
      obj['value'] = value;
      obj['cost'] = cost;
    }
    /**
     * Constructs a <code>CryptoResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CryptoResult} obj Optional instance to populate.
     * @return {module:model/CryptoResult} The populated <code>CryptoResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CryptoResult();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _SigmaBoolean["default"].constructFromObject(data['value']);
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CryptoResult;
}();
/**
 * @member {module:model/SigmaBoolean} value
 */


CryptoResult.prototype['value'] = undefined;
/**
 * Estimated cost of contract execution
 * @member {Number} cost
 */

CryptoResult.prototype['cost'] = undefined;
var _default = CryptoResult;
exports["default"] = _default;