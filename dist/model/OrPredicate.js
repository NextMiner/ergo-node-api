"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AndPredicateAllOf = _interopRequireDefault(require("./AndPredicateAllOf"));

var _ScanningPredicate = _interopRequireDefault(require("./ScanningPredicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrPredicate model module.
 * @module model/OrPredicate
 * @version 4.0.14
 */
var OrPredicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrPredicate</code>.
   * @alias module:model/OrPredicate
   * @implements module:model/ScanningPredicate
   * @implements module:model/AndPredicateAllOf
   * @param predicate {String} 
   */
  function OrPredicate(predicate) {
    _classCallCheck(this, OrPredicate);

    _ScanningPredicate["default"].initialize(this, predicate);

    _AndPredicateAllOf["default"].initialize(this);

    OrPredicate.initialize(this, predicate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrPredicate, null, [{
    key: "initialize",
    value: function initialize(obj, predicate) {
      obj['predicate'] = predicate;
    }
    /**
     * Constructs a <code>OrPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrPredicate} obj Optional instance to populate.
     * @return {module:model/OrPredicate} The populated <code>OrPredicate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrPredicate();

        _ScanningPredicate["default"].constructFromObject(data, obj);

        _AndPredicateAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('predicate')) {
          obj['predicate'] = _ApiClient["default"].convertToType(data['predicate'], 'String');
        }

        if (data.hasOwnProperty('args')) {
          obj['args'] = _ApiClient["default"].convertToType(data['args'], [_ScanningPredicate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return OrPredicate;
}();
/**
 * @member {String} predicate
 */


OrPredicate.prototype['predicate'] = undefined;
/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */

OrPredicate.prototype['args'] = undefined; // Implement ScanningPredicate interface:

/**
 * @member {String} predicate
 */

_ScanningPredicate["default"].prototype['predicate'] = undefined; // Implement AndPredicateAllOf interface:

/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */

_AndPredicateAllOf["default"].prototype['args'] = undefined;
var _default = OrPredicate;
exports["default"] = _default;