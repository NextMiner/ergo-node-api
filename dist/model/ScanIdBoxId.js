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
 * The ScanIdBoxId model module.
 * @module model/ScanIdBoxId
 * @version 4.0.14
 */
var ScanIdBoxId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScanIdBoxId</code>.
   * @alias module:model/ScanIdBoxId
   * @param scanId {Number} 
   * @param boxId {String} Base16-encoded transaction box id bytes. Should be 32 bytes long
   */
  function ScanIdBoxId(scanId, boxId) {
    _classCallCheck(this, ScanIdBoxId);

    ScanIdBoxId.initialize(this, scanId, boxId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScanIdBoxId, null, [{
    key: "initialize",
    value: function initialize(obj, scanId, boxId) {
      obj['scanId'] = scanId;
      obj['boxId'] = boxId;
    }
    /**
     * Constructs a <code>ScanIdBoxId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScanIdBoxId} obj Optional instance to populate.
     * @return {module:model/ScanIdBoxId} The populated <code>ScanIdBoxId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScanIdBoxId();

        if (data.hasOwnProperty('scanId')) {
          obj['scanId'] = _ApiClient["default"].convertToType(data['scanId'], 'Number');
        }

        if (data.hasOwnProperty('boxId')) {
          obj['boxId'] = _ApiClient["default"].convertToType(data['boxId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScanIdBoxId;
}();
/**
 * @member {Number} scanId
 */


ScanIdBoxId.prototype['scanId'] = undefined;
/**
 * Base16-encoded transaction box id bytes. Should be 32 bytes long
 * @member {String} boxId
 */

ScanIdBoxId.prototype['boxId'] = undefined;
var _default = ScanIdBoxId;
exports["default"] = _default;