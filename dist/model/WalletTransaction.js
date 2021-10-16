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
 * The WalletTransaction model module.
 * @module model/WalletTransaction
 * @version 4.0.14
 */
var WalletTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletTransaction</code>.
   * Transaction augmented with some useful information
   * @alias module:model/WalletTransaction
   * @param inputs {Array.<module:model/ErgoTransactionInput>} Transaction inputs
   * @param dataInputs {Array.<module:model/ErgoTransactionDataInput>} Transaction data inputs
   * @param outputs {Array.<module:model/ErgoTransactionOutput>} Transaction outputs
   * @param inclusionHeight {Number} Height of a block the transaction was included in
   * @param numConfirmations {Number} Number of transaction confirmations
   * @param scans {Array.<Number>} Scan identifiers the transaction relates to
   */
  function WalletTransaction(inputs, dataInputs, outputs, inclusionHeight, numConfirmations, scans) {
    _classCallCheck(this, WalletTransaction);

    WalletTransaction.initialize(this, inputs, dataInputs, outputs, inclusionHeight, numConfirmations, scans);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletTransaction, null, [{
    key: "initialize",
    value: function initialize(obj, inputs, dataInputs, outputs, inclusionHeight, numConfirmations, scans) {
      obj['inputs'] = inputs;
      obj['dataInputs'] = dataInputs;
      obj['outputs'] = outputs;
      obj['inclusionHeight'] = inclusionHeight;
      obj['numConfirmations'] = numConfirmations;
      obj['scans'] = scans;
    }
    /**
     * Constructs a <code>WalletTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletTransaction} obj Optional instance to populate.
     * @return {module:model/WalletTransaction} The populated <code>WalletTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletTransaction();

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

        if (data.hasOwnProperty('inclusionHeight')) {
          obj['inclusionHeight'] = _ApiClient["default"].convertToType(data['inclusionHeight'], 'Number');
        }

        if (data.hasOwnProperty('numConfirmations')) {
          obj['numConfirmations'] = _ApiClient["default"].convertToType(data['numConfirmations'], 'Number');
        }

        if (data.hasOwnProperty('scans')) {
          obj['scans'] = _ApiClient["default"].convertToType(data['scans'], ['Number']);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WalletTransaction;
}();
/**
 * Base16-encoded transaction id bytes
 * @member {String} id
 */


WalletTransaction.prototype['id'] = undefined;
/**
 * Transaction inputs
 * @member {Array.<module:model/ErgoTransactionInput>} inputs
 */

WalletTransaction.prototype['inputs'] = undefined;
/**
 * Transaction data inputs
 * @member {Array.<module:model/ErgoTransactionDataInput>} dataInputs
 */

WalletTransaction.prototype['dataInputs'] = undefined;
/**
 * Transaction outputs
 * @member {Array.<module:model/ErgoTransactionOutput>} outputs
 */

WalletTransaction.prototype['outputs'] = undefined;
/**
 * Height of a block the transaction was included in
 * @member {Number} inclusionHeight
 */

WalletTransaction.prototype['inclusionHeight'] = undefined;
/**
 * Number of transaction confirmations
 * @member {Number} numConfirmations
 */

WalletTransaction.prototype['numConfirmations'] = undefined;
/**
 * Scan identifiers the transaction relates to
 * @member {Array.<Number>} scans
 */

WalletTransaction.prototype['scans'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

WalletTransaction.prototype['size'] = undefined;
var _default = WalletTransaction;
exports["default"] = _default;