"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Asset = _interopRequireDefault(require("./Asset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErgoTransactionOutput model module.
 * @module model/ErgoTransactionOutput
 * @version 4.0.14
 */
var ErgoTransactionOutput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErgoTransactionOutput</code>.
   * @alias module:model/ErgoTransactionOutput
   * @param value {Number} Amount of Ergo token
   * @param ergoTree {String} Base16-encoded ergo tree bytes
   * @param creationHeight {Number} Height the output was created at
   * @param additionalRegisters {Object.<String, String>} Ergo box registers
   */
  function ErgoTransactionOutput(value, ergoTree, creationHeight, additionalRegisters) {
    _classCallCheck(this, ErgoTransactionOutput);

    ErgoTransactionOutput.initialize(this, value, ergoTree, creationHeight, additionalRegisters);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErgoTransactionOutput, null, [{
    key: "initialize",
    value: function initialize(obj, value, ergoTree, creationHeight, additionalRegisters) {
      obj['value'] = value;
      obj['ergoTree'] = ergoTree;
      obj['creationHeight'] = creationHeight;
      obj['additionalRegisters'] = additionalRegisters;
    }
    /**
     * Constructs a <code>ErgoTransactionOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoTransactionOutput} obj Optional instance to populate.
     * @return {module:model/ErgoTransactionOutput} The populated <code>ErgoTransactionOutput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErgoTransactionOutput();

        if (data.hasOwnProperty('boxId')) {
          obj['boxId'] = _ApiClient["default"].convertToType(data['boxId'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('ergoTree')) {
          obj['ergoTree'] = _ApiClient["default"].convertToType(data['ergoTree'], 'String');
        }

        if (data.hasOwnProperty('creationHeight')) {
          obj['creationHeight'] = _ApiClient["default"].convertToType(data['creationHeight'], 'Number');
        }

        if (data.hasOwnProperty('assets')) {
          obj['assets'] = _ApiClient["default"].convertToType(data['assets'], [_Asset["default"]]);
        }

        if (data.hasOwnProperty('additionalRegisters')) {
          obj['additionalRegisters'] = _ApiClient["default"].convertToType(data['additionalRegisters'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ErgoTransactionOutput;
}();
/**
 * Base16-encoded transaction box id bytes. Should be 32 bytes long
 * @member {String} boxId
 */


ErgoTransactionOutput.prototype['boxId'] = undefined;
/**
 * Amount of Ergo token
 * @member {Number} value
 */

ErgoTransactionOutput.prototype['value'] = undefined;
/**
 * Base16-encoded ergo tree bytes
 * @member {String} ergoTree
 */

ErgoTransactionOutput.prototype['ergoTree'] = undefined;
/**
 * Height the output was created at
 * @member {Number} creationHeight
 */

ErgoTransactionOutput.prototype['creationHeight'] = undefined;
/**
 * Assets list in the transaction
 * @member {Array.<module:model/Asset>} assets
 */

ErgoTransactionOutput.prototype['assets'] = undefined;
/**
 * Ergo box registers
 * @member {Object.<String, String>} additionalRegisters
 */

ErgoTransactionOutput.prototype['additionalRegisters'] = undefined;
/**
 * Base16-encoded transaction id bytes
 * @member {String} transactionId
 */

ErgoTransactionOutput.prototype['transactionId'] = undefined;
/**
 * Index in the transaction outputs
 * @member {Number} index
 */

ErgoTransactionOutput.prototype['index'] = undefined;
var _default = ErgoTransactionOutput;
exports["default"] = _default;