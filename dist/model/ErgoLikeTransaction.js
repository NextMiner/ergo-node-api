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
 * The ErgoLikeTransaction model module.
 * @module model/ErgoLikeTransaction
 * @version 4.0.14
 */
var ErgoLikeTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErgoLikeTransaction</code>.
   * @alias module:model/ErgoLikeTransaction
   * @param id {String} Base16-encoded 32 byte modifier id
   * @param inputs {Array.<module:model/ErgoTransactionInput>} 
   * @param dataInputs {Array.<module:model/ErgoTransactionDataInput>} 
   * @param outputs {Array.<module:model/ErgoTransactionOutput>} 
   */
  function ErgoLikeTransaction(id, inputs, dataInputs, outputs) {
    _classCallCheck(this, ErgoLikeTransaction);

    ErgoLikeTransaction.initialize(this, id, inputs, dataInputs, outputs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErgoLikeTransaction, null, [{
    key: "initialize",
    value: function initialize(obj, id, inputs, dataInputs, outputs) {
      obj['id'] = id;
      obj['inputs'] = inputs;
      obj['dataInputs'] = dataInputs;
      obj['outputs'] = outputs;
    }
    /**
     * Constructs a <code>ErgoLikeTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoLikeTransaction} obj Optional instance to populate.
     * @return {module:model/ErgoLikeTransaction} The populated <code>ErgoLikeTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErgoLikeTransaction();

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
      }

      return obj;
    }
  }]);

  return ErgoLikeTransaction;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} id
 */


ErgoLikeTransaction.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/ErgoTransactionInput>} inputs
 */

ErgoLikeTransaction.prototype['inputs'] = undefined;
/**
 * @member {Array.<module:model/ErgoTransactionDataInput>} dataInputs
 */

ErgoLikeTransaction.prototype['dataInputs'] = undefined;
/**
 * @member {Array.<module:model/ErgoTransactionOutput>} outputs
 */

ErgoLikeTransaction.prototype['outputs'] = undefined;
var _default = ErgoLikeTransaction;
exports["default"] = _default;