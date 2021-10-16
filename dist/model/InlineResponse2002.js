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
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 4.0.14
 */
var InlineResponse2002 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @param isInitialized {Boolean} true if wallet is initialized, false otherwise
   * @param isUnlocked {Boolean} true if wallet is unlocked, false otherwise
   * @param changeAddress {String} address to send change to. Empty when wallet is not initialized or locked. By default change address correponds to root key address, could be set via /wallet/updateChangeAddress method.
   * @param walletHeight {Number} last scanned height for the wallet (and external scans)
   * @param error {String} last wallet error caught
   */
  function InlineResponse2002(isInitialized, isUnlocked, changeAddress, walletHeight, error) {
    _classCallCheck(this, InlineResponse2002);

    InlineResponse2002.initialize(this, isInitialized, isUnlocked, changeAddress, walletHeight, error);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2002, null, [{
    key: "initialize",
    value: function initialize(obj, isInitialized, isUnlocked, changeAddress, walletHeight, error) {
      obj['isInitialized'] = isInitialized;
      obj['isUnlocked'] = isUnlocked;
      obj['changeAddress'] = changeAddress;
      obj['walletHeight'] = walletHeight;
      obj['error'] = error;
    }
    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2002();

        if (data.hasOwnProperty('isInitialized')) {
          obj['isInitialized'] = _ApiClient["default"].convertToType(data['isInitialized'], 'Boolean');
        }

        if (data.hasOwnProperty('isUnlocked')) {
          obj['isUnlocked'] = _ApiClient["default"].convertToType(data['isUnlocked'], 'Boolean');
        }

        if (data.hasOwnProperty('changeAddress')) {
          obj['changeAddress'] = _ApiClient["default"].convertToType(data['changeAddress'], 'String');
        }

        if (data.hasOwnProperty('walletHeight')) {
          obj['walletHeight'] = _ApiClient["default"].convertToType(data['walletHeight'], 'Number');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2002;
}();
/**
 * true if wallet is initialized, false otherwise
 * @member {Boolean} isInitialized
 */


InlineResponse2002.prototype['isInitialized'] = undefined;
/**
 * true if wallet is unlocked, false otherwise
 * @member {Boolean} isUnlocked
 */

InlineResponse2002.prototype['isUnlocked'] = undefined;
/**
 * address to send change to. Empty when wallet is not initialized or locked. By default change address correponds to root key address, could be set via /wallet/updateChangeAddress method.
 * @member {String} changeAddress
 */

InlineResponse2002.prototype['changeAddress'] = undefined;
/**
 * last scanned height for the wallet (and external scans)
 * @member {Number} walletHeight
 */

InlineResponse2002.prototype['walletHeight'] = undefined;
/**
 * last wallet error caught
 * @member {String} error
 */

InlineResponse2002.prototype['error'] = undefined;
var _default = InlineResponse2002;
exports["default"] = _default;