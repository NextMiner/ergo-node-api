"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvlTreeData = _interopRequireDefault(require("./AvlTreeData"));

var _PowSolutions = _interopRequireDefault(require("./PowSolutions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SigmaHeader model module.
 * @module model/SigmaHeader
 * @version 4.0.14
 */
var SigmaHeader = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SigmaHeader</code>.
   * Block header format used for sigma ErgoLikeContext
   * @alias module:model/SigmaHeader
   * @param timestamp {Number} Basic timestamp definition
   * @param version {Number} Ergo blockchain protocol version
   * @param adProofsRoot {String} Base16-encoded 32 byte digest
   * @param stateRoot {module:model/AvlTreeData} 
   * @param transactionsRoot {String} Base16-encoded 32 byte digest
   * @param nBits {Number} 
   * @param extensionHash {String} Base16-encoded 32 byte digest
   * @param height {Number} 
   * @param parentId {String} Base16-encoded 32 byte modifier id
   * @param votes {String} Base16-encoded votes for a soft-fork and parameters
   */
  function SigmaHeader(timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, height, parentId, votes) {
    _classCallCheck(this, SigmaHeader);

    SigmaHeader.initialize(this, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, height, parentId, votes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SigmaHeader, null, [{
    key: "initialize",
    value: function initialize(obj, timestamp, version, adProofsRoot, stateRoot, transactionsRoot, nBits, extensionHash, height, parentId, votes) {
      obj['timestamp'] = timestamp;
      obj['version'] = version;
      obj['adProofsRoot'] = adProofsRoot;
      obj['stateRoot'] = stateRoot;
      obj['transactionsRoot'] = transactionsRoot;
      obj['nBits'] = nBits;
      obj['extensionHash'] = extensionHash;
      obj['height'] = height;
      obj['parentId'] = parentId;
      obj['votes'] = votes;
    }
    /**
     * Constructs a <code>SigmaHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigmaHeader} obj Optional instance to populate.
     * @return {module:model/SigmaHeader} The populated <code>SigmaHeader</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SigmaHeader();

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

        if (data.hasOwnProperty('adProofsId')) {
          obj['adProofsId'] = _ApiClient["default"].convertToType(data['adProofsId'], 'String');
        }

        if (data.hasOwnProperty('stateRoot')) {
          obj['stateRoot'] = _AvlTreeData["default"].constructFromObject(data['stateRoot']);
        }

        if (data.hasOwnProperty('transactionsRoot')) {
          obj['transactionsRoot'] = _ApiClient["default"].convertToType(data['transactionsRoot'], 'String');
        }

        if (data.hasOwnProperty('transactionsId')) {
          obj['transactionsId'] = _ApiClient["default"].convertToType(data['transactionsId'], 'String');
        }

        if (data.hasOwnProperty('nBits')) {
          obj['nBits'] = _ApiClient["default"].convertToType(data['nBits'], 'Number');
        }

        if (data.hasOwnProperty('extensionHash')) {
          obj['extensionHash'] = _ApiClient["default"].convertToType(data['extensionHash'], 'String');
        }

        if (data.hasOwnProperty('extensionRoot')) {
          obj['extensionRoot'] = _ApiClient["default"].convertToType(data['extensionRoot'], 'String');
        }

        if (data.hasOwnProperty('extensionId')) {
          obj['extensionId'] = _ApiClient["default"].convertToType(data['extensionId'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('parentId')) {
          obj['parentId'] = _ApiClient["default"].convertToType(data['parentId'], 'String');
        }

        if (data.hasOwnProperty('powSolutions')) {
          obj['powSolutions'] = _PowSolutions["default"].constructFromObject(data['powSolutions']);
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'String');
        }

        if (data.hasOwnProperty('minerPk')) {
          obj['minerPk'] = _ApiClient["default"].convertToType(data['minerPk'], 'String');
        }

        if (data.hasOwnProperty('powOnetimePk')) {
          obj['powOnetimePk'] = _ApiClient["default"].convertToType(data['powOnetimePk'], 'String');
        }

        if (data.hasOwnProperty('powNonce')) {
          obj['powNonce'] = _ApiClient["default"].convertToType(data['powNonce'], 'String');
        }

        if (data.hasOwnProperty('powDistance')) {
          obj['powDistance'] = _ApiClient["default"].convertToType(data['powDistance'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SigmaHeader;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} id
 */


SigmaHeader.prototype['id'] = undefined;
/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */

SigmaHeader.prototype['timestamp'] = undefined;
/**
 * Ergo blockchain protocol version
 * @member {Number} version
 */

SigmaHeader.prototype['version'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} adProofsRoot
 */

SigmaHeader.prototype['adProofsRoot'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} adProofsId
 */

SigmaHeader.prototype['adProofsId'] = undefined;
/**
 * @member {module:model/AvlTreeData} stateRoot
 */

SigmaHeader.prototype['stateRoot'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} transactionsRoot
 */

SigmaHeader.prototype['transactionsRoot'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} transactionsId
 */

SigmaHeader.prototype['transactionsId'] = undefined;
/**
 * @member {Number} nBits
 */

SigmaHeader.prototype['nBits'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} extensionHash
 */

SigmaHeader.prototype['extensionHash'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} extensionRoot
 */

SigmaHeader.prototype['extensionRoot'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} extensionId
 */

SigmaHeader.prototype['extensionId'] = undefined;
/**
 * @member {Number} height
 */

SigmaHeader.prototype['height'] = undefined;
/**
 * @member {Number} size
 */

SigmaHeader.prototype['size'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */

SigmaHeader.prototype['parentId'] = undefined;
/**
 * @member {module:model/PowSolutions} powSolutions
 */

SigmaHeader.prototype['powSolutions'] = undefined;
/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */

SigmaHeader.prototype['votes'] = undefined;
/**
 * @member {String} minerPk
 */

SigmaHeader.prototype['minerPk'] = undefined;
/**
 * @member {String} powOnetimePk
 */

SigmaHeader.prototype['powOnetimePk'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} powNonce
 */

SigmaHeader.prototype['powNonce'] = undefined;
/**
 * sigma.BigInt
 * @member {Number} powDistance
 */

SigmaHeader.prototype['powDistance'] = undefined;
var _default = SigmaHeader;
exports["default"] = _default;