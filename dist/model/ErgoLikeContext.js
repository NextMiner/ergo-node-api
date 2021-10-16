"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvlTreeData = _interopRequireDefault(require("./AvlTreeData"));

var _ErgoLikeTransaction = _interopRequireDefault(require("./ErgoLikeTransaction"));

var _ErgoTransactionOutput = _interopRequireDefault(require("./ErgoTransactionOutput"));

var _PreHeader = _interopRequireDefault(require("./PreHeader"));

var _SigmaHeader = _interopRequireDefault(require("./SigmaHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErgoLikeContext model module.
 * @module model/ErgoLikeContext
 * @version 4.0.14
 */
var ErgoLikeContext = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErgoLikeContext</code>.
   * @alias module:model/ErgoLikeContext
   * @param lastBlockUtxoRoot {module:model/AvlTreeData} 
   * @param headers {Array.<module:model/SigmaHeader>} fixed number of last block headers in descending order (first header is the newest one)
   * @param preHeader {module:model/PreHeader} 
   * @param dataBoxes {Array.<module:model/ErgoTransactionOutput>} boxes, that corresponds to id's of `spendingTransaction.dataInputs`
   * @param boxesToSpend {Array.<module:model/ErgoTransactionOutput>} boxes, that corresponds to id's of `spendingTransaction.inputs`
   * @param spendingTransaction {module:model/ErgoLikeTransaction} 
   * @param selfIndex {Number} index of the box in `boxesToSpend` that contains the script we're evaluating
   * @param extension {Object} prover-defined key-value pairs, that may be used inside a script
   * @param validationSettings {String} validation parameters passed to Interpreter.verify to detect soft-fork conditions
   * @param costLimit {Number} hard limit on accumulated execution cost, if exceeded lead to CostLimitException to be thrown
   * @param initCost {Number} initial value of execution cost already accumulated before Interpreter.verify is called
   */
  function ErgoLikeContext(lastBlockUtxoRoot, headers, preHeader, dataBoxes, boxesToSpend, spendingTransaction, selfIndex, extension, validationSettings, costLimit, initCost) {
    _classCallCheck(this, ErgoLikeContext);

    ErgoLikeContext.initialize(this, lastBlockUtxoRoot, headers, preHeader, dataBoxes, boxesToSpend, spendingTransaction, selfIndex, extension, validationSettings, costLimit, initCost);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErgoLikeContext, null, [{
    key: "initialize",
    value: function initialize(obj, lastBlockUtxoRoot, headers, preHeader, dataBoxes, boxesToSpend, spendingTransaction, selfIndex, extension, validationSettings, costLimit, initCost) {
      obj['lastBlockUtxoRoot'] = lastBlockUtxoRoot;
      obj['headers'] = headers;
      obj['preHeader'] = preHeader;
      obj['dataBoxes'] = dataBoxes;
      obj['boxesToSpend'] = boxesToSpend;
      obj['spendingTransaction'] = spendingTransaction;
      obj['selfIndex'] = selfIndex;
      obj['extension'] = extension;
      obj['validationSettings'] = validationSettings;
      obj['costLimit'] = costLimit;
      obj['initCost'] = initCost;
    }
    /**
     * Constructs a <code>ErgoLikeContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoLikeContext} obj Optional instance to populate.
     * @return {module:model/ErgoLikeContext} The populated <code>ErgoLikeContext</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErgoLikeContext();

        if (data.hasOwnProperty('lastBlockUtxoRoot')) {
          obj['lastBlockUtxoRoot'] = _AvlTreeData["default"].constructFromObject(data['lastBlockUtxoRoot']);
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], [_SigmaHeader["default"]]);
        }

        if (data.hasOwnProperty('preHeader')) {
          obj['preHeader'] = _PreHeader["default"].constructFromObject(data['preHeader']);
        }

        if (data.hasOwnProperty('dataBoxes')) {
          obj['dataBoxes'] = _ApiClient["default"].convertToType(data['dataBoxes'], [_ErgoTransactionOutput["default"]]);
        }

        if (data.hasOwnProperty('boxesToSpend')) {
          obj['boxesToSpend'] = _ApiClient["default"].convertToType(data['boxesToSpend'], [_ErgoTransactionOutput["default"]]);
        }

        if (data.hasOwnProperty('spendingTransaction')) {
          obj['spendingTransaction'] = _ErgoLikeTransaction["default"].constructFromObject(data['spendingTransaction']);
        }

        if (data.hasOwnProperty('selfIndex')) {
          obj['selfIndex'] = _ApiClient["default"].convertToType(data['selfIndex'], 'Number');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], Object);
        }

        if (data.hasOwnProperty('validationSettings')) {
          obj['validationSettings'] = _ApiClient["default"].convertToType(data['validationSettings'], 'String');
        }

        if (data.hasOwnProperty('costLimit')) {
          obj['costLimit'] = _ApiClient["default"].convertToType(data['costLimit'], 'Number');
        }

        if (data.hasOwnProperty('initCost')) {
          obj['initCost'] = _ApiClient["default"].convertToType(data['initCost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ErgoLikeContext;
}();
/**
 * @member {module:model/AvlTreeData} lastBlockUtxoRoot
 */


ErgoLikeContext.prototype['lastBlockUtxoRoot'] = undefined;
/**
 * fixed number of last block headers in descending order (first header is the newest one)
 * @member {Array.<module:model/SigmaHeader>} headers
 */

ErgoLikeContext.prototype['headers'] = undefined;
/**
 * @member {module:model/PreHeader} preHeader
 */

ErgoLikeContext.prototype['preHeader'] = undefined;
/**
 * boxes, that corresponds to id's of `spendingTransaction.dataInputs`
 * @member {Array.<module:model/ErgoTransactionOutput>} dataBoxes
 */

ErgoLikeContext.prototype['dataBoxes'] = undefined;
/**
 * boxes, that corresponds to id's of `spendingTransaction.inputs`
 * @member {Array.<module:model/ErgoTransactionOutput>} boxesToSpend
 */

ErgoLikeContext.prototype['boxesToSpend'] = undefined;
/**
 * @member {module:model/ErgoLikeTransaction} spendingTransaction
 */

ErgoLikeContext.prototype['spendingTransaction'] = undefined;
/**
 * index of the box in `boxesToSpend` that contains the script we're evaluating
 * @member {Number} selfIndex
 */

ErgoLikeContext.prototype['selfIndex'] = undefined;
/**
 * prover-defined key-value pairs, that may be used inside a script
 * @member {Object} extension
 */

ErgoLikeContext.prototype['extension'] = undefined;
/**
 * validation parameters passed to Interpreter.verify to detect soft-fork conditions
 * @member {String} validationSettings
 */

ErgoLikeContext.prototype['validationSettings'] = undefined;
/**
 * hard limit on accumulated execution cost, if exceeded lead to CostLimitException to be thrown
 * @member {Number} costLimit
 */

ErgoLikeContext.prototype['costLimit'] = undefined;
/**
 * initial value of execution cost already accumulated before Interpreter.verify is called
 * @member {Number} initCost
 */

ErgoLikeContext.prototype['initCost'] = undefined;
var _default = ErgoLikeContext;
exports["default"] = _default;