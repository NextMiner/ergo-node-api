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
 * The Asset model module.
 * @module model/Asset
 * @version 4.0.14
 */
var Asset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Asset</code>.
   * Token detail in the transaction
   * @alias module:model/Asset
   * @param tokenId {String} Base16-encoded 32 byte digest
   * @param amount {Number} Amount of the token
   */
  function Asset(tokenId, amount) {
    _classCallCheck(this, Asset);

    Asset.initialize(this, tokenId, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Asset, null, [{
    key: "initialize",
    value: function initialize(obj, tokenId, amount) {
      obj['tokenId'] = tokenId;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>Asset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset} obj Optional instance to populate.
     * @return {module:model/Asset} The populated <code>Asset</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Asset();

        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Asset;
}();
/**
 * Base16-encoded 32 byte digest
 * @member {String} tokenId
 */


Asset.prototype['tokenId'] = undefined;
/**
 * Amount of the token
 * @member {Number} amount
 */

Asset.prototype['amount'] = undefined;
var _default = Asset;
exports["default"] = _default;