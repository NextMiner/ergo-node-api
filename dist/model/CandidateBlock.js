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
 * The CandidateBlock model module.
 * @module model/CandidateBlock
 * @version 4.0.14
 */
var CandidateBlock = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandidateBlock</code>.
   * Can be null if node is not mining or candidate block is not ready
   * @alias module:model/CandidateBlock
   * @param extensionHash {String} Base16-encoded 32 byte digest
   * @param parentId {String} Base16-encoded 32 byte modifier id
   */
  function CandidateBlock(extensionHash, parentId) {
    _classCallCheck(this, CandidateBlock);

    CandidateBlock.initialize(this, extensionHash, parentId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandidateBlock, null, [{
    key: "initialize",
    value: function initialize(obj, extensionHash, parentId) {
      obj['extensionHash'] = extensionHash;
      obj['parentId'] = parentId;
    }
    /**
     * Constructs a <code>CandidateBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidateBlock} obj Optional instance to populate.
     * @return {module:model/CandidateBlock} The populated <code>CandidateBlock</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandidateBlock();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('extensionHash')) {
          obj['extensionHash'] = _ApiClient["default"].convertToType(data['extensionHash'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('stateRoot')) {
          obj['stateRoot'] = _ApiClient["default"].convertToType(data['stateRoot'], 'String');
        }

        if (data.hasOwnProperty('nBits')) {
          obj['nBits'] = _ApiClient["default"].convertToType(data['nBits'], 'Number');
        }

        if (data.hasOwnProperty('adProofBytes')) {
          obj['adProofBytes'] = _ApiClient["default"].convertToType(data['adProofBytes'], 'String');
        }

        if (data.hasOwnProperty('parentId')) {
          obj['parentId'] = _ApiClient["default"].convertToType(data['parentId'], 'String');
        }

        if (data.hasOwnProperty('transactionsNumber')) {
          obj['transactionsNumber'] = _ApiClient["default"].convertToType(data['transactionsNumber'], 'Number');
        }

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_ErgoTransaction["default"]]);
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CandidateBlock;
}();
/**
 * @member {Number} version
 */


CandidateBlock.prototype['version'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} extensionHash
 */

CandidateBlock.prototype['extensionHash'] = undefined;
/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */

CandidateBlock.prototype['timestamp'] = undefined;
/**
 * Base16-encoded 33 byte digest - digest with extra byte with tree height
 * @member {String} stateRoot
 */

CandidateBlock.prototype['stateRoot'] = undefined;
/**
 * @member {Number} nBits
 */

CandidateBlock.prototype['nBits'] = undefined;
/**
 * Base16-encoded ad proofs
 * @member {String} adProofBytes
 */

CandidateBlock.prototype['adProofBytes'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */

CandidateBlock.prototype['parentId'] = undefined;
/**
 * @member {Number} transactionsNumber
 */

CandidateBlock.prototype['transactionsNumber'] = undefined;
/**
 * Ergo transaction objects
 * @member {Array.<module:model/ErgoTransaction>} transactions
 */

CandidateBlock.prototype['transactions'] = undefined;
/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */

CandidateBlock.prototype['votes'] = undefined;
var _default = CandidateBlock;
exports["default"] = _default;