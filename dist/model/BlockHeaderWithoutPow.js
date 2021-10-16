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
 * The BlockHeaderWithoutPow model module.
 * @module model/BlockHeaderWithoutPow
 * @version 4.0.14
 */
var BlockHeaderWithoutPow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockHeaderWithoutPow</code>.
   * @alias module:model/BlockHeaderWithoutPow
   * @param id {String} Base16-encoded 32 byte modifier id
   * @param timestamp {Number} Basic timestamp definition
   * @param version {Number} Ergo blockchain protocol version
   * @param adProofsRoot {String} Base16-encoded 32 byte digest
   * @param stateRoot {String} Base16-encoded 33 byte digest - digest with extra byte with tree height
   * @param transactionsRoot {String} Base16-encoded 32 byte digest
   * @param nBits {Number} 
   * @param extensionHash {String} Base16-encoded 32 byte digest
   * @param height {Number} 
   * @param difficulty {Number} 
   * @param parentId {String} Base16-encoded 32 byte modifier id
   * @param votes {String} Base16-encoded votes for a soft-fork and parameters
   */
  function BlockHeaderWithoutPow(id, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, height, difficulty, parentId, votes) {
    _classCallCheck(this, BlockHeaderWithoutPow);

    BlockHeaderWithoutPow.initialize(this, id, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, height, difficulty, parentId, votes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockHeaderWithoutPow, null, [{
    key: "initialize",
    value: function initialize(obj, id, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, height, difficulty, parentId, votes) {
      obj['id'] = id;
      obj['timestamp'] = timestamp;
      obj['version'] = version;
      obj['adProofsRoot'] = adProofsRoot;
      obj['stateRoot'] = stateRoot;
      obj['transactionsRoot'] = transactionsRoot;
      obj['nBits'] = nBits;
      obj['extensionHash'] = extensionHash;
      obj['height'] = height;
      obj['difficulty'] = difficulty;
      obj['parentId'] = parentId;
      obj['votes'] = votes;
    }
    /**
     * Constructs a <code>BlockHeaderWithoutPow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeaderWithoutPow} obj Optional instance to populate.
     * @return {module:model/BlockHeaderWithoutPow} The populated <code>BlockHeaderWithoutPow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockHeaderWithoutPow();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('adProofsRoot')) {
          obj['adProofsRoot'] = _ApiClient["default"].convertToType(data['adProofsRoot'], 'String');
        }

        if (data.hasOwnProperty('stateRoot')) {
          obj['stateRoot'] = _ApiClient["default"].convertToType(data['stateRoot'], 'String');
        }

        if (data.hasOwnProperty('transactionsRoot')) {
          obj['transactionsRoot'] = _ApiClient["default"].convertToType(data['transactionsRoot'], 'String');
        }

        if (data.hasOwnProperty('nBits')) {
          obj['nBits'] = _ApiClient["default"].convertToType(data['nBits'], 'Number');
        }

        if (data.hasOwnProperty('extensionHash')) {
          obj['extensionHash'] = _ApiClient["default"].convertToType(data['extensionHash'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'Number');
        }

        if (data.hasOwnProperty('parentId')) {
          obj['parentId'] = _ApiClient["default"].convertToType(data['parentId'], 'String');
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('extensionId')) {
          obj['extensionId'] = _ApiClient["default"].convertToType(data['extensionId'], 'String');
        }

        if (data.hasOwnProperty('transactionsId')) {
          obj['transactionsId'] = _ApiClient["default"].convertToType(data['transactionsId'], 'String');
        }

        if (data.hasOwnProperty('adProofsId')) {
          obj['adProofsId'] = _ApiClient["default"].convertToType(data['adProofsId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BlockHeaderWithoutPow;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} id
 */


BlockHeaderWithoutPow.prototype['id'] = undefined;
/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */

BlockHeaderWithoutPow.prototype['timestamp'] = undefined;
/**
 * Ergo blockchain protocol version
 * @member {Number} version
 */

BlockHeaderWithoutPow.prototype['version'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} adProofsRoot
 */

BlockHeaderWithoutPow.prototype['adProofsRoot'] = undefined;
/**
 * Base16-encoded 33 byte digest - digest with extra byte with tree height
 * @member {String} stateRoot
 */

BlockHeaderWithoutPow.prototype['stateRoot'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} transactionsRoot
 */

BlockHeaderWithoutPow.prototype['transactionsRoot'] = undefined;
/**
 * @member {Number} nBits
 */

BlockHeaderWithoutPow.prototype['nBits'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} extensionHash
 */

BlockHeaderWithoutPow.prototype['extensionHash'] = undefined;
/**
 * @member {Number} height
 */

BlockHeaderWithoutPow.prototype['height'] = undefined;
/**
 * @member {Number} difficulty
 */

BlockHeaderWithoutPow.prototype['difficulty'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */

BlockHeaderWithoutPow.prototype['parentId'] = undefined;
/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */

BlockHeaderWithoutPow.prototype['votes'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

BlockHeaderWithoutPow.prototype['size'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} extensionId
 */

BlockHeaderWithoutPow.prototype['extensionId'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} transactionsId
 */

BlockHeaderWithoutPow.prototype['transactionsId'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} adProofsId
 */

BlockHeaderWithoutPow.prototype['adProofsId'] = undefined;
var _default = BlockHeaderWithoutPow;
exports["default"] = _default;