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
 * The BlockADProofs model module.
 * @module model/BlockADProofs
 * @version 4.0.14
 */
var BlockADProofs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockADProofs</code>.
   * @alias module:model/BlockADProofs
   * @param headerId {String} Base16-encoded 32 byte modifier id
   * @param proofBytes {String} Base16-encoded ad proofs
   * @param digest {String} Base16-encoded 32 byte digest
   * @param size {Number} Size in bytes
   */
  function BlockADProofs(headerId, proofBytes, digest, size) {
    _classCallCheck(this, BlockADProofs);

    BlockADProofs.initialize(this, headerId, proofBytes, digest, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockADProofs, null, [{
    key: "initialize",
    value: function initialize(obj, headerId, proofBytes, digest, size) {
      obj['headerId'] = headerId;
      obj['proofBytes'] = proofBytes;
      obj['digest'] = digest;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>BlockADProofs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockADProofs} obj Optional instance to populate.
     * @return {module:model/BlockADProofs} The populated <code>BlockADProofs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockADProofs();

        if (data.hasOwnProperty('headerId')) {
          obj['headerId'] = _ApiClient["default"].convertToType(data['headerId'], 'String');
        }

        if (data.hasOwnProperty('proofBytes')) {
          obj['proofBytes'] = _ApiClient["default"].convertToType(data['proofBytes'], 'String');
        }

        if (data.hasOwnProperty('digest')) {
          obj['digest'] = _ApiClient["default"].convertToType(data['digest'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BlockADProofs;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} headerId
 */


BlockADProofs.prototype['headerId'] = undefined;
/**
 * Base16-encoded ad proofs
 * @member {String} proofBytes
 */

BlockADProofs.prototype['proofBytes'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} digest
 */

BlockADProofs.prototype['digest'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

BlockADProofs.prototype['size'] = undefined;
var _default = BlockADProofs;
exports["default"] = _default;