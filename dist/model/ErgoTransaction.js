"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoTransactionDataInput = _interopRequireDefault(require("./ErgoTransactionDataInput"));

var _ErgoTransactionInput = _interopRequireDefault(require("./ErgoTransactionInput"));

var _ErgoTransactionOutput = _interopRequireDefault(require("./ErgoTransactionOutput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErgoTransaction model module.
 * @module model/ErgoTransaction
 * @version 4.0.14
 */
var ErgoTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErgoTransaction</code>.
   * Ergo transaction
   * @alias module:model/ErgoTransaction
   * @param inputs {Array.<module:model/ErgoTransactionInput>} Inputs of the transaction
   * @param dataInputs {Array.<module:model/ErgoTransactionDataInput>} Data inputs of the transaction
   * @param outputs {Array.<module:model/ErgoTransactionOutput>} Outputs of the transaction
   */
  function ErgoTransaction(inputs, dataInputs, outputs) {
    _classCallCheck(this, ErgoTransaction);

    ErgoTransaction.initialize(this, inputs, dataInputs, outputs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErgoTransaction, null, [{
    key: "initialize",
    value: function initialize(obj, inputs, dataInputs, outputs) {
      obj['inputs'] = inputs;
      obj['dataInputs'] = dataInputs;
      obj['outputs'] = outputs;
    }
    /**
     * Constructs a <code>ErgoTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoTransaction} obj Optional instance to populate.
     * @return {module:model/ErgoTransaction} The populated <code>ErgoTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErgoTransaction();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('inputs')) {
          obj['inputs'] = _ApiClient["default"].convertToType(data['inputs'], [_ErgoTransactionInput["default"]]);
        }

        if (data.hasOwnProperty('dataInputs')) {
          obj['dataInputs'] = _ApiClient["default"].convertToType(data['dataInputs'], [_ErgoTransactionDataInput["default"]]);
        }

        if (data.hasOwnProperty('outputs')) {
          obj['outputs'] = _ApiClient["default"].convertToType(data['outputs'], [_ErgoTransactionOutput["default"]]);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ErgoTransaction;
}();
/**
 * Base16-encoded transaction id bytes
 * @member {String} id
 */


ErgoTransaction.prototype['id'] = undefined;
/**
 * Inputs of the transaction
 * @member {Array.<module:model/ErgoTransactionInput>} inputs
 */

ErgoTransaction.prototype['inputs'] = undefined;
/**
 * Data inputs of the transaction
 * @member {Array.<module:model/ErgoTransactionDataInput>} dataInputs
 */

ErgoTransaction.prototype['dataInputs'] = undefined;
/**
 * Outputs of the transaction
 * @member {Array.<module:model/ErgoTransactionOutput>} outputs
 */

ErgoTransaction.prototype['outputs'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

ErgoTransaction.prototype['size'] = undefined;
var _default = ErgoTransaction;
exports["default"] = _default;