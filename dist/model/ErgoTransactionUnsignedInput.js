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
 * The ErgoTransactionUnsignedInput model module.
 * @module model/ErgoTransactionUnsignedInput
 * @version 4.0.14
 */
var ErgoTransactionUnsignedInput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErgoTransactionUnsignedInput</code>.
   * @alias module:model/ErgoTransactionUnsignedInput
   * @param boxId {String} Base16-encoded transaction box id bytes. Should be 32 bytes long
   */
  function ErgoTransactionUnsignedInput(boxId) {
    _classCallCheck(this, ErgoTransactionUnsignedInput);

    ErgoTransactionUnsignedInput.initialize(this, boxId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErgoTransactionUnsignedInput, null, [{
    key: "initialize",
    value: function initialize(obj, boxId) {
      obj['boxId'] = boxId;
    }
    /**
     * Constructs a <code>ErgoTransactionUnsignedInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoTransactionUnsignedInput} obj Optional instance to populate.
     * @return {module:model/ErgoTransactionUnsignedInput} The populated <code>ErgoTransactionUnsignedInput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErgoTransactionUnsignedInput();

        if (data.hasOwnProperty('boxId')) {
          obj['boxId'] = _ApiClient["default"].convertToType(data['boxId'], 'String');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return ErgoTransactionUnsignedInput;
}();
/**
 * Base16-encoded transaction box id bytes. Should be 32 bytes long
 * @member {String} boxId
 */


ErgoTransactionUnsignedInput.prototype['boxId'] = undefined;
/**
 * @member {Object.<String, String>} extension
 */

ErgoTransactionUnsignedInput.prototype['extension'] = undefined;
var _default = ErgoTransactionUnsignedInput;
exports["default"] = _default;