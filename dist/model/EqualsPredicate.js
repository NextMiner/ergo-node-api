"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainsPredicateAllOf = _interopRequireDefault(require("./ContainsPredicateAllOf"));

var _ScanningPredicate = _interopRequireDefault(require("./ScanningPredicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EqualsPredicate model module.
 * @module model/EqualsPredicate
 * @version 4.0.14
 */
var EqualsPredicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EqualsPredicate</code>.
   * @alias module:model/EqualsPredicate
   * @implements module:model/ScanningPredicate
   * @implements module:model/ContainsPredicateAllOf
   * @param predicate {String} 
   */
  function EqualsPredicate(predicate) {
    _classCallCheck(this, EqualsPredicate);

    _ScanningPredicate["default"].initialize(this, predicate);

    _ContainsPredicateAllOf["default"].initialize(this);

    EqualsPredicate.initialize(this, predicate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EqualsPredicate, null, [{
    key: "initialize",
    value: function initialize(obj, predicate) {
      obj['predicate'] = predicate;
    }
    /**
     * Constructs a <code>EqualsPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EqualsPredicate} obj Optional instance to populate.
     * @return {module:model/EqualsPredicate} The populated <code>EqualsPredicate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EqualsPredicate();

        _ScanningPredicate["default"].constructFromObject(data, obj);

        _ContainsPredicateAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('predicate')) {
          obj['predicate'] = _ApiClient["default"].convertToType(data['predicate'], 'String');
        }

        if (data.hasOwnProperty('register')) {
          obj['register'] = _ApiClient["default"].convertToType(data['register'], 'String');
        }

        if (data.hasOwnProperty('bytes')) {
          obj['bytes'] = _ApiClient["default"].convertToType(data['bytes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EqualsPredicate;
}();
/**
 * @member {String} predicate
 */


EqualsPredicate.prototype['predicate'] = undefined;
/**
 * @member {String} register
 */

EqualsPredicate.prototype['register'] = undefined;
/**
 * @member {String} bytes
 */

EqualsPredicate.prototype['bytes'] = undefined; // Implement ScanningPredicate interface:

/**
 * @member {String} predicate
 */

_ScanningPredicate["default"].prototype['predicate'] = undefined; // Implement ContainsPredicateAllOf interface:

/**
 * @member {String} register
 */

_ContainsPredicateAllOf["default"].prototype['register'] = undefined;
/**
 * @member {String} bytes
 */

_ContainsPredicateAllOf["default"].prototype['bytes'] = undefined;
var _default = EqualsPredicate;
exports["default"] = _default;