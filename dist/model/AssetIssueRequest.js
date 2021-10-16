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
 * The AssetIssueRequest model module.
 * @module model/AssetIssueRequest
 * @version 4.0.14
 */
var AssetIssueRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AssetIssueRequest</code>.
   * Request for generation of asset issue transaction
   * @alias module:model/AssetIssueRequest
   * @param amount {Number} Supply amount
   * @param name {String} Assets name
   * @param description {String} Assets description
   * @param decimals {Number} Number of decimal places
   */
  function AssetIssueRequest(amount, name, description, decimals) {
    _classCallCheck(this, AssetIssueRequest);

    AssetIssueRequest.initialize(this, amount, name, description, decimals);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssetIssueRequest, null, [{
    key: "initialize",
    value: function initialize(obj, amount, name, description, decimals) {
      obj['amount'] = amount;
      obj['name'] = name;
      obj['description'] = description;
      obj['decimals'] = decimals;
    }
    /**
     * Constructs a <code>AssetIssueRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetIssueRequest} obj Optional instance to populate.
     * @return {module:model/AssetIssueRequest} The populated <code>AssetIssueRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssetIssueRequest();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('ergValue')) {
          obj['ergValue'] = _ApiClient["default"].convertToType(data['ergValue'], 'Number');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'Number');
        }

        if (data.hasOwnProperty('registers')) {
          obj['registers'] = _ApiClient["default"].convertToType(data['registers'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return AssetIssueRequest;
}();
/**
 * Encoded Ergo Address
 * @member {String} address
 */


AssetIssueRequest.prototype['address'] = undefined;
/**
 * Optional, amount of ergs to be put into box with issued assets
 * @member {Number} ergValue
 */

AssetIssueRequest.prototype['ergValue'] = undefined;
/**
 * Supply amount
 * @member {Number} amount
 */

AssetIssueRequest.prototype['amount'] = undefined;
/**
 * Assets name
 * @member {String} name
 */

AssetIssueRequest.prototype['name'] = undefined;
/**
 * Assets description
 * @member {String} description
 */

AssetIssueRequest.prototype['description'] = undefined;
/**
 * Number of decimal places
 * @member {Number} decimals
 */

AssetIssueRequest.prototype['decimals'] = undefined;
/**
 * Ergo box registers
 * @member {Object.<String, String>} registers
 */

AssetIssueRequest.prototype['registers'] = undefined;
var _default = AssetIssueRequest;
exports["default"] = _default;