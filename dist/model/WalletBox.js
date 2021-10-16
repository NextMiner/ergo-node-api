"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoTransactionOutput = _interopRequireDefault(require("./ErgoTransactionOutput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WalletBox model module.
 * @module model/WalletBox
 * @version 4.0.14
 */
var WalletBox = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletBox</code>.
   * @alias module:model/WalletBox
   * @param box {module:model/ErgoTransactionOutput} 
   * @param confirmationsNum {Number} Number of confirmations, if the box is included into the blockchain
   * @param address {String} Encoded Ergo Address
   * @param creationTransaction {String} Base16-encoded 32 byte modifier id
   * @param spendingTransaction {String} Base16-encoded 32 byte modifier id
   * @param spendingHeight {Number} The height the box was spent at
   * @param inclusionHeight {Number} The height the transaction containing the box was included in a block at
   * @param onchain {Boolean} A flag signalling whether the box is created on main chain
   * @param spent {Boolean} A flag signalling whether the box was spent
   * @param creationOutIndex {Number} An index of a box in the creating transaction
   * @param scans {Array.<Number>} Scan identifiers the box relates to
   */
  function WalletBox(box, confirmationsNum, address, creationTransaction, spendingTransaction, spendingHeight, inclusionHeight, onchain, spent, creationOutIndex, scans) {
    _classCallCheck(this, WalletBox);

    WalletBox.initialize(this, box, confirmationsNum, address, creationTransaction, spendingTransaction, spendingHeight, inclusionHeight, onchain, spent, creationOutIndex, scans);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletBox, null, [{
    key: "initialize",
    value: function initialize(obj, box, confirmationsNum, address, creationTransaction, spendingTransaction, spendingHeight, inclusionHeight, onchain, spent, creationOutIndex, scans) {
      obj['box'] = box;
      obj['confirmationsNum'] = confirmationsNum;
      obj['address'] = address;
      obj['creationTransaction'] = creationTransaction;
      obj['spendingTransaction'] = spendingTransaction;
      obj['spendingHeight'] = spendingHeight;
      obj['inclusionHeight'] = inclusionHeight;
      obj['onchain'] = onchain;
      obj['spent'] = spent;
      obj['creationOutIndex'] = creationOutIndex;
      obj['scans'] = scans;
    }
    /**
     * Constructs a <code>WalletBox</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletBox} obj Optional instance to populate.
     * @return {module:model/WalletBox} The populated <code>WalletBox</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletBox();

        if (data.hasOwnProperty('box')) {
          obj['box'] = _ErgoTransactionOutput["default"].constructFromObject(data['box']);
        }

        if (data.hasOwnProperty('confirmationsNum')) {
          obj['confirmationsNum'] = _ApiClient["default"].convertToType(data['confirmationsNum'], 'Number');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('creationTransaction')) {
          obj['creationTransaction'] = _ApiClient["default"].convertToType(data['creationTransaction'], 'String');
        }

        if (data.hasOwnProperty('spendingTransaction')) {
          obj['spendingTransaction'] = _ApiClient["default"].convertToType(data['spendingTransaction'], 'String');
        }

        if (data.hasOwnProperty('spendingHeight')) {
          obj['spendingHeight'] = _ApiClient["default"].convertToType(data['spendingHeight'], 'Number');
        }

        if (data.hasOwnProperty('inclusionHeight')) {
          obj['inclusionHeight'] = _ApiClient["default"].convertToType(data['inclusionHeight'], 'Number');
        }

        if (data.hasOwnProperty('onchain')) {
          obj['onchain'] = _ApiClient["default"].convertToType(data['onchain'], 'Boolean');
        }

        if (data.hasOwnProperty('spent')) {
          obj['spent'] = _ApiClient["default"].convertToType(data['spent'], 'Boolean');
        }

        if (data.hasOwnProperty('creationOutIndex')) {
          obj['creationOutIndex'] = _ApiClient["default"].convertToType(data['creationOutIndex'], 'Number');
        }

        if (data.hasOwnProperty('scans')) {
          obj['scans'] = _ApiClient["default"].convertToType(data['scans'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return WalletBox;
}();
/**
 * @member {module:model/ErgoTransactionOutput} box
 */


WalletBox.prototype['box'] = undefined;
/**
 * Number of confirmations, if the box is included into the blockchain
 * @member {Number} confirmationsNum
 */

WalletBox.prototype['confirmationsNum'] = undefined;
/**
 * Encoded Ergo Address
 * @member {String} address
 */

WalletBox.prototype['address'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} creationTransaction
 */

WalletBox.prototype['creationTransaction'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} spendingTransaction
 */

WalletBox.prototype['spendingTransaction'] = undefined;
/**
 * The height the box was spent at
 * @member {Number} spendingHeight
 */

WalletBox.prototype['spendingHeight'] = undefined;
/**
 * The height the transaction containing the box was included in a block at
 * @member {Number} inclusionHeight
 */

WalletBox.prototype['inclusionHeight'] = undefined;
/**
 * A flag signalling whether the box is created on main chain
 * @member {Boolean} onchain
 */

WalletBox.prototype['onchain'] = undefined;
/**
 * A flag signalling whether the box was spent
 * @member {Boolean} spent
 */

WalletBox.prototype['spent'] = undefined;
/**
 * An index of a box in the creating transaction
 * @member {Number} creationOutIndex
 */

WalletBox.prototype['creationOutIndex'] = undefined;
/**
 * Scan identifiers the box relates to
 * @member {Array.<Number>} scans
 */

WalletBox.prototype['scans'] = undefined;
var _default = WalletBox;
exports["default"] = _default;