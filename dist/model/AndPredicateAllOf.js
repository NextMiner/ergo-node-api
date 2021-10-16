"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScanningPredicate = _interopRequireDefault(require("./ScanningPredicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AndPredicateAllOf model module.
 * @module model/AndPredicateAllOf
 * @version 4.0.14
 */
var AndPredicateAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AndPredicateAllOf</code>.
   * @alias module:model/AndPredicateAllOf
   */
  function AndPredicateAllOf() {
    _classCallCheck(this, AndPredicateAllOf);

    AndPredicateAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AndPredicateAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AndPredicateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AndPredicateAllOf} obj Optional instance to populate.
     * @return {module:model/AndPredicateAllOf} The populated <code>AndPredicateAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AndPredicateAllOf();

        if (data.hasOwnProperty('args')) {
          obj['args'] = _ApiClient["default"].convertToType(data['args'], [_ScanningPredicate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AndPredicateAllOf;
}();
/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */


AndPredicateAllOf.prototype['args'] = undefined;
var _default = AndPredicateAllOf;
exports["default"] = _default;