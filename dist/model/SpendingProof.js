"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpendingProof model module.
 * @module model/SpendingProof
 * @version 4.0.14
 */
var SpendingProof = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SpendingProof</code>.
   * Spending proof for transaction input
   * @alias module:model/SpendingProof
   * @param proofBytes {String} Base16-encoded spending proofs
   * @param extension {Object.<String, String>} Variables to be put into context
   */
  function SpendingProof(proofBytes, extension) {
    _classCallCheck(this, SpendingProof);

    SpendingProof.initialize(this, proofBytes, extension);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpendingProof, null, [{
    key: "initialize",
    value: function initialize(obj, proofBytes, extension) {
      obj['proofBytes'] = proofBytes;
      obj['extension'] = extension;
    }
    /**
     * Constructs a <code>SpendingProof</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpendingProof} obj Optional instance to populate.
     * @return {module:model/SpendingProof} The populated <code>SpendingProof</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpendingProof();

        if (data.hasOwnProperty('proofBytes')) {
          obj['proofBytes'] = _ApiClient["default"].convertToType(data['proofBytes'], 'String');
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _ApiClient["default"].convertToType(data['extension'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return SpendingProof;
}();
/**
 * Base16-encoded spending proofs
 * @member {String} proofBytes
 */


SpendingProof.prototype['proofBytes'] = undefined;
/**
 * Variables to be put into context
 * @member {Object.<String, String>} extension
 */

SpendingProof.prototype['extension'] = undefined;
var _default = SpendingProof;
exports["default"] = _default;