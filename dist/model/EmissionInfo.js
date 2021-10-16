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
 * The EmissionInfo model module.
 * @module model/EmissionInfo
 * @version 4.0.14
 */
var EmissionInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmissionInfo</code>.
   * Emission info for height
   * @alias module:model/EmissionInfo
   */
  function EmissionInfo() {
    _classCallCheck(this, EmissionInfo);

    EmissionInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmissionInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmissionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmissionInfo} obj Optional instance to populate.
     * @return {module:model/EmissionInfo} The populated <code>EmissionInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmissionInfo();

        if (data.hasOwnProperty('minerReward')) {
          obj['minerReward'] = _ApiClient["default"].convertToType(data['minerReward'], 'Number');
        }

        if (data.hasOwnProperty('totalCoinsIssued')) {
          obj['totalCoinsIssued'] = _ApiClient["default"].convertToType(data['totalCoinsIssued'], 'Number');
        }

        if (data.hasOwnProperty('totalRemainCoins')) {
          obj['totalRemainCoins'] = _ApiClient["default"].convertToType(data['totalRemainCoins'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EmissionInfo;
}();
/**
 * @member {Number} minerReward
 */


EmissionInfo.prototype['minerReward'] = undefined;
/**
 * @member {Number} totalCoinsIssued
 */

EmissionInfo.prototype['totalCoinsIssued'] = undefined;
/**
 * @member {Number} totalRemainCoins
 */

EmissionInfo.prototype['totalRemainCoins'] = undefined;
var _default = EmissionInfo;
exports["default"] = _default;