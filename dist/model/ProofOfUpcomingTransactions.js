"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MerkleProof = _interopRequireDefault(require("./MerkleProof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProofOfUpcomingTransactions model module.
 * @module model/ProofOfUpcomingTransactions
 * @version 4.0.14
 */
var ProofOfUpcomingTransactions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProofOfUpcomingTransactions</code>.
   * Proof that a block corresponding to given header without PoW contains some transactions
   * @alias module:model/ProofOfUpcomingTransactions
   * @param msgPreimage {String} Base16-encoded serialized header without Proof-of-Work
   * @param txProofs {Array.<module:model/MerkleProof>} Merkle proofs of transactions included into blocks (not necessarily all the block transactions)
   */
  function ProofOfUpcomingTransactions(msgPreimage, txProofs) {
    _classCallCheck(this, ProofOfUpcomingTransactions);

    ProofOfUpcomingTransactions.initialize(this, msgPreimage, txProofs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProofOfUpcomingTransactions, null, [{
    key: "initialize",
    value: function initialize(obj, msgPreimage, txProofs) {
      obj['msgPreimage'] = msgPreimage;
      obj['txProofs'] = txProofs;
    }
    /**
     * Constructs a <code>ProofOfUpcomingTransactions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProofOfUpcomingTransactions} obj Optional instance to populate.
     * @return {module:model/ProofOfUpcomingTransactions} The populated <code>ProofOfUpcomingTransactions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProofOfUpcomingTransactions();

        if (data.hasOwnProperty('msgPreimage')) {
          obj['msgPreimage'] = _ApiClient["default"].convertToType(data['msgPreimage'], 'String');
        }

        if (data.hasOwnProperty('txProofs')) {
          obj['txProofs'] = _ApiClient["default"].convertToType(data['txProofs'], [_MerkleProof["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ProofOfUpcomingTransactions;
}();
/**
 * Base16-encoded serialized header without Proof-of-Work
 * @member {String} msgPreimage
 */


ProofOfUpcomingTransactions.prototype['msgPreimage'] = undefined;
/**
 * Merkle proofs of transactions included into blocks (not necessarily all the block transactions)
 * @member {Array.<module:model/MerkleProof>} txProofs
 */

ProofOfUpcomingTransactions.prototype['txProofs'] = undefined;
var _default = ProofOfUpcomingTransactions;
exports["default"] = _default;