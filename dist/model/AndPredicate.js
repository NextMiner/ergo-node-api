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
 * The AndPredicate model module.
 * @module model/AndPredicate
 * @version 4.0.14
 */
var AndPredicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AndPredicate</code>.
   * @alias module:model/AndPredicate
   * @implements module:model/ScanningPredicate
   * @implements module:model/AndPredicateAllOf
   * @param predicate {String} 
   */
  function AndPredicate(predicate) {
    _classCallCheck(this, AndPredicate);

    _ScanningPredicate["default"].initialize(this, predicate);

    _AndPredicateAllOf["default"].initialize(this);

    AndPredicate.initialize(this, predicate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AndPredicate, null, [{
    key: "initialize",
    value: function initialize(obj, predicate) {
      obj['predicate'] = predicate;
    }
    /**
     * Constructs a <code>AndPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AndPredicate} obj Optional instance to populate.
     * @return {module:model/AndPredicate} The populated <code>AndPredicate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AndPredicate();

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

  return AndPredicate;
}();
/**
 * @member {String} predicate
 */


AndPredicate.prototype['predicate'] = undefined;
/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */

AndPredicate.prototype['args'] = undefined; // Implement ScanningPredicate interface:

/**
 * @member {String} predicate
 */

_ScanningPredicate["default"].prototype['predicate'] = undefined; // Implement AndPredicateAllOf interface:

/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */

_AndPredicateAllOf["default"].prototype['args'] = undefined;
var _default = AndPredicate;
exports["default"] = _default;