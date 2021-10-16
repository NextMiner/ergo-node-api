"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoTransaction = _interopRequireDefault(require("./ErgoTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BlockTransactions model module.
 * @module model/BlockTransactions
 * @version 4.0.14
 */
var BlockTransactions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockTransactions</code>.
   * @alias module:model/BlockTransactions
   * @param headerId {String} Base16-encoded 32 byte modifier id
   * @param transactions {Array.<module:model/ErgoTransaction>} Ergo transaction objects
   * @param size {Number} Size in bytes
   */
  function BlockTransactions(headerId, transactions, size) {
    _classCallCheck(this, BlockTransactions);

    BlockTransactions.initialize(this, headerId, transactions, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockTransactions, null, [{
    key: "initialize",
    value: function initialize(obj, headerId, transactions, size) {
      obj['headerId'] = headerId;
      obj['transactions'] = transactions;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>BlockTransactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransactions} obj Optional instance to populate.
     * @return {module:model/BlockTransactions} The populated <code>BlockTransactions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockTransactions();

        if (data.hasOwnProperty('headerId')) {
          obj['headerId'] = _ApiClient["default"].convertToType(data['headerId'], 'String');
        }

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_ErgoTransaction["default"]]);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BlockTransactions;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} headerId
 */


BlockTransactions.prototype['headerId'] = undefined;
/**
 * Ergo transaction objects
 * @member {Array.<module:model/ErgoTransaction>} transactions
 */

BlockTransactions.prototype['transactions'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

BlockTransactions.prototype['size'] = undefined;
var _default = BlockTransactions;
exports["default"] = _default;