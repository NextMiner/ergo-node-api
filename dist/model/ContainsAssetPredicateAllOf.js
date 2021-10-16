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
 * The ContainsAssetPredicateAllOf model module.
 * @module model/ContainsAssetPredicateAllOf
 * @version 4.0.14
 */
var ContainsAssetPredicateAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainsAssetPredicateAllOf</code>.
   * @alias module:model/ContainsAssetPredicateAllOf
   */
  function ContainsAssetPredicateAllOf() {
    _classCallCheck(this, ContainsAssetPredicateAllOf);

    ContainsAssetPredicateAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainsAssetPredicateAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainsAssetPredicateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainsAssetPredicateAllOf} obj Optional instance to populate.
     * @return {module:model/ContainsAssetPredicateAllOf} The populated <code>ContainsAssetPredicateAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainsAssetPredicateAllOf();

        if (data.hasOwnProperty('assetId')) {
          obj['assetId'] = _ApiClient["default"].convertToType(data['assetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContainsAssetPredicateAllOf;
}();
/**
 * @member {String} assetId
 */


ContainsAssetPredicateAllOf.prototype['assetId'] = undefined;
var _default = ContainsAssetPredicateAllOf;
exports["default"] = _default;