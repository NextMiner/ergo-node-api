"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoTransactionDataInput = _interopRequireDefault(require("./ErgoTransactionDataInput"));

var _ErgoTransactionOutput = _interopRequireDefault(require("./ErgoTransactionOutput"));

var _ErgoTransactionUnsignedInput = _interopRequireDefault(require("./ErgoTransactionUnsignedInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UnsignedErgoTransaction model module.
 * @module model/UnsignedErgoTransaction
 * @version 4.0.14
 */
var UnsignedErgoTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnsignedErgoTransaction</code>.
   * Unsigned Ergo transaction
   * @alias module:model/UnsignedErgoTransaction
   * @param inputs {Array.<module:model/ErgoTransactionUnsignedInput>} Unsigned inputs of the transaction
   * @param dataInputs {Array.<module:model/ErgoTransactionDataInput>} Data inputs of the transaction
   * @param outputs {Array.<module:model/ErgoTransactionOutput>} Outputs of the transaction
   */
  function UnsignedErgoTransaction(inputs, dataInputs, outputs) {
    _classCallCheck(this, UnsignedErgoTransaction);

    UnsignedErgoTransaction.initialize(this, inputs, dataInputs, outputs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnsignedErgoTransaction, null, [{
    key: "initialize",
    value: function initialize(obj, inputs, dataInputs, outputs) {
      obj['inputs'] = inputs;
      obj['dataInputs'] = dataInputs;
      obj['outputs'] = outputs;
    }
    /**
     * Constructs a <code>UnsignedErgoTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnsignedErgoTransaction} obj Optional instance to populate.
     * @return {module:model/UnsignedErgoTransaction} The populated <code>UnsignedErgoTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsignedErgoTransaction();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('inputs')) {
          obj['inputs'] = _ApiClient["default"].convertToType(data['inputs'], [_ErgoTransactionUnsignedInput["default"]]);
        }

        if (data.hasOwnProperty('dataInputs')) {
          obj['dataInputs'] = _ApiClient["default"].convertToType(data['dataInputs'], [_ErgoTransactionDataInput["default"]]);
        }

        if (data.hasOwnProperty('outputs')) {
          obj['outputs'] = _ApiClient["default"].convertToType(data['outputs'], [_ErgoTransactionOutput["default"]]);
        }
      }

      return obj;
    }
  }]);

  return UnsignedErgoTransaction;
}();
/**
 * Base16-encoded transaction id bytes
 * @member {String} id
 */


UnsignedErgoTransaction.prototype['id'] = undefined;
/**
 * Unsigned inputs of the transaction
 * @member {Array.<module:model/ErgoTransactionUnsignedInput>} inputs
 */

UnsignedErgoTransaction.prototype['inputs'] = undefined;
/**
 * Data inputs of the transaction
 * @member {Array.<module:model/ErgoTransactionDataInput>} dataInputs
 */

UnsignedErgoTransaction.prototype['dataInputs'] = undefined;
/**
 * Outputs of the transaction
 * @member {Array.<module:model/ErgoTransactionOutput>} outputs
 */

UnsignedErgoTransaction.prototype['outputs'] = undefined;
var _default = UnsignedErgoTransaction;
exports["default"] = _default;