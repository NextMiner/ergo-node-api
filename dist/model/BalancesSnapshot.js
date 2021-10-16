"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Asset = _interopRequireDefault(require("./Asset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BalancesSnapshot model module.
 * @module model/BalancesSnapshot
 * @version 4.0.14
 */
var BalancesSnapshot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BalancesSnapshot</code>.
   * Amount of Ergo tokens and assets
   * @alias module:model/BalancesSnapshot
   * @param height {Number} 
   * @param balance {Number} 
   */
  function BalancesSnapshot(height, balance) {
    _classCallCheck(this, BalancesSnapshot);

    BalancesSnapshot.initialize(this, height, balance);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BalancesSnapshot, null, [{
    key: "initialize",
    value: function initialize(obj, height, balance) {
      obj['height'] = height;
      obj['balance'] = balance;
    }
    /**
     * Constructs a <code>BalancesSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalancesSnapshot} obj Optional instance to populate.
     * @return {module:model/BalancesSnapshot} The populated <code>BalancesSnapshot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BalancesSnapshot();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('assets')) {
          obj['assets'] = _ApiClient["default"].convertToType(data['assets'], [_Asset["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BalancesSnapshot;
}();
/**
 * @member {Number} height
 */


BalancesSnapshot.prototype['height'] = undefined;
/**
 * @member {Number} balance
 */

BalancesSnapshot.prototype['balance'] = undefined;
/**
 * @member {Array.<module:model/Asset>} assets
 */

BalancesSnapshot.prototype['assets'] = undefined;
var _default = BalancesSnapshot;
exports["default"] = _default;