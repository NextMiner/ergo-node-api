"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PowSolutions = _interopRequireDefault(require("./PowSolutions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BlockHeader model module.
 * @module model/BlockHeader
 * @version 4.0.14
 */
var BlockHeader = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockHeader</code>.
   * @alias module:model/BlockHeader
   * @param id {String} Base16-encoded 32 byte modifier id
   * @param timestamp {Number} Basic timestamp definition
   * @param version {Number} Ergo blockchain protocol version
   * @param adProofsRoot {String} Base16-encoded 32 byte digest
   * @param stateRoot {String} Base16-encoded 33 byte digest - digest with extra byte with tree height
   * @param transactionsRoot {String} Base16-encoded 32 byte digest
   * @param nBits {Number} 
   * @param extensionHash {String} Base16-encoded 32 byte digest
   * @param powSolutions {module:model/PowSolutions} 
   * @param height {Number} 
   * @param difficulty {Number} 
   * @param parentId {String} Base16-encoded 32 byte modifier id
   * @param votes {String} Base16-encoded votes for a soft-fork and parameters
   */
  function BlockHeader(id, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, powSolutions, height, difficulty, parentId, votes) {
    _classCallCheck(this, BlockHeader);

    BlockHeader.initialize(this, id, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, powSolutions, height, difficulty, parentId, votes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockHeader, null, [{
    key: "initialize",
    value: function initialize(obj, id, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, powSolutions, height, difficulty, parentId, votes) {
      obj['id'] = id;
      obj['timestamp'] = timestamp;
      obj['version'] = version;
      obj['adProofsRoot'] = adProofsRoot;
      obj['stateRoot'] = stateRoot;
      obj['transactionsRoot'] = transactionsRoot;
      obj['nBits'] = nBits;
      obj['extensionHash'] = extensionHash;
      obj['powSolutions'] = powSolutions;
      obj['height'] = height;
      obj['difficulty'] = difficulty;
      obj['parentId'] = parentId;
      obj['votes'] = votes;
    }
    /**
     * Constructs a <code>BlockHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeader} obj Optional instance to populate.
     * @return {module:model/BlockHeader} The populated <code>BlockHeader</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockHeader();

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

        if (data.hasOwnProperty('powSolutions')) {
          obj['powSolutions'] = _PowSolutions["default"].constructFromObject(data['powSolutions']);
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

  return BlockHeader;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} id
 */


BlockHeader.prototype['id'] = undefined;
/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */

BlockHeader.prototype['timestamp'] = undefined;
/**
 * Ergo blockchain protocol version
 * @member {Number} version
 */

BlockHeader.prototype['version'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} adProofsRoot
 */

BlockHeader.prototype['adProofsRoot'] = undefined;
/**
 * Base16-encoded 33 byte digest - digest with extra byte with tree height
 * @member {String} stateRoot
 */

BlockHeader.prototype['stateRoot'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} transactionsRoot
 */

BlockHeader.prototype['transactionsRoot'] = undefined;
/**
 * @member {Number} nBits
 */

BlockHeader.prototype['nBits'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} extensionHash
 */

BlockHeader.prototype['extensionHash'] = undefined;
/**
 * @member {module:model/PowSolutions} powSolutions
 */

BlockHeader.prototype['powSolutions'] = undefined;
/**
 * @member {Number} height
 */

BlockHeader.prototype['height'] = undefined;
/**
 * @member {Number} difficulty
 */

BlockHeader.prototype['difficulty'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */

BlockHeader.prototype['parentId'] = undefined;
/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */

BlockHeader.prototype['votes'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

BlockHeader.prototype['size'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} extensionId
 */

BlockHeader.prototype['extensionId'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} transactionsId
 */

BlockHeader.prototype['transactionsId'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} adProofsId
 */

BlockHeader.prototype['adProofsId'] = undefined;
var _default = BlockHeader;
exports["default"] = _default;