"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainsAssetPredicateAllOf = _interopRequireDefault(require("./ContainsAssetPredicateAllOf"));

var _ScanningPredicate = _interopRequireDefault(require("./ScanningPredicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainsAssetPredicate model module.
 * @module model/ContainsAssetPredicate
 * @version 4.0.14
 */
var ContainsAssetPredicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainsAssetPredicate</code>.
   * @alias module:model/ContainsAssetPredicate
   * @implements module:model/ScanningPredicate
   * @implements module:model/ContainsAssetPredicateAllOf
   * @param predicate {String} 
   */
  function ContainsAssetPredicate(predicate) {
    _classCallCheck(this, ContainsAssetPredicate);

    _ScanningPredicate["default"].initialize(this, predicate);

    _ContainsAssetPredicateAllOf["default"].initialize(this);

    ContainsAssetPredicate.initialize(this, predicate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainsAssetPredicate, null, [{
    key: "initialize",
    value: function initialize(obj, predicate) {
      obj['predicate'] = predicate;
    }
    /**
     * Constructs a <code>ContainsAssetPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainsAssetPredicate} obj Optional instance to populate.
     * @return {module:model/ContainsAssetPredicate} The populated <code>ContainsAssetPredicate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainsAssetPredicate();

        _ScanningPredicate["default"].constructFromObject(data, obj);

        _ContainsAssetPredicateAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('predicate')) {
          obj['predicate'] = _ApiClient["default"].convertToType(data['predicate'], 'String');
        }

        if (data.hasOwnProperty('assetId')) {
          obj['assetId'] = _ApiClient["default"].convertToType(data['assetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContainsAssetPredicate;
}();
/**
 * @member {String} predicate
 */


ContainsAssetPredicate.prototype['predicate'] = undefined;
/**
 * @member {String} assetId
 */

ContainsAssetPredicate.prototype['assetId'] = undefined; // Implement ScanningPredicate interface:

/**
 * @member {String} predicate
 */

_ScanningPredicate["default"].prototype['predicate'] = undefined; // Implement ContainsAssetPredicateAllOf interface:

/**
 * @member {String} assetId
 */

_ContainsAssetPredicateAllOf["default"].prototype['assetId'] = undefined;
var _default = ContainsAssetPredicate;
exports["default"] = _default;