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
 * The PreHeader model module.
 * @module model/PreHeader
 * @version 4.0.14
 */
var PreHeader = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PreHeader</code>.
   * @alias module:model/PreHeader
   * @param timestamp {Number} Basic timestamp definition
   * @param version {Number} Ergo blockchain protocol version
   * @param nBits {Number} 
   * @param height {Number} 
   * @param parentId {String} Base16-encoded 32 byte modifier id
   * @param votes {String} Base16-encoded votes for a soft-fork and parameters
   */
  function PreHeader(timestamp, version, nBits, height, parentId, votes) {
    _classCallCheck(this, PreHeader);

    PreHeader.initialize(this, timestamp, version, nBits, height, parentId, votes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PreHeader, null, [{
    key: "initialize",
    value: function initialize(obj, timestamp, version, nBits, height, parentId, votes) {
      obj['timestamp'] = timestamp;
      obj['version'] = version;
      obj['nBits'] = nBits;
      obj['height'] = height;
      obj['parentId'] = parentId;
      obj['votes'] = votes;
    }
    /**
     * Constructs a <code>PreHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PreHeader} obj Optional instance to populate.
     * @return {module:model/PreHeader} The populated <code>PreHeader</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PreHeader();

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('nBits')) {
          obj['nBits'] = _ApiClient["default"].convertToType(data['nBits'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('parentId')) {
          obj['parentId'] = _ApiClient["default"].convertToType(data['parentId'], 'String');
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'String');
        }

        if (data.hasOwnProperty('minerPk')) {
          obj['minerPk'] = _ApiClient["default"].convertToType(data['minerPk'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PreHeader;
}();
/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */


PreHeader.prototype['timestamp'] = undefined;
/**
 * Ergo blockchain protocol version
 * @member {Number} version
 */

PreHeader.prototype['version'] = undefined;
/**
 * @member {Number} nBits
 */

PreHeader.prototype['nBits'] = undefined;
/**
 * @member {Number} height
 */

PreHeader.prototype['height'] = undefined;
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */

PreHeader.prototype['parentId'] = undefined;
/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */

PreHeader.prototype['votes'] = undefined;
/**
 * @member {String} minerPk
 */

PreHeader.prototype['minerPk'] = undefined;
var _default = PreHeader;
exports["default"] = _default;