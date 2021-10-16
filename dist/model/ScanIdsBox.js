"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoTransactionOutput = _interopRequireDefault(require("./ErgoTransactionOutput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScanIdsBox model module.
 * @module model/ScanIdsBox
 * @version 4.0.14
 */
var ScanIdsBox = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScanIdsBox</code>.
   * Ergo box with associated scans (their respective identifiers)
   * @alias module:model/ScanIdsBox
   * @param scanIds {Array.<Number>} 
   * @param box {module:model/ErgoTransactionOutput} 
   */
  function ScanIdsBox(scanIds, box) {
    _classCallCheck(this, ScanIdsBox);

    ScanIdsBox.initialize(this, scanIds, box);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScanIdsBox, null, [{
    key: "initialize",
    value: function initialize(obj, scanIds, box) {
      obj['scanIds'] = scanIds;
      obj['box'] = box;
    }
    /**
     * Constructs a <code>ScanIdsBox</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScanIdsBox} obj Optional instance to populate.
     * @return {module:model/ScanIdsBox} The populated <code>ScanIdsBox</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScanIdsBox();

        if (data.hasOwnProperty('scanIds')) {
          obj['scanIds'] = _ApiClient["default"].convertToType(data['scanIds'], ['Number']);
        }

        if (data.hasOwnProperty('box')) {
          obj['box'] = _ErgoTransactionOutput["default"].constructFromObject(data['box']);
        }
      }

      return obj;
    }
  }]);

  return ScanIdsBox;
}();
/**
 * @member {Array.<Number>} scanIds
 */


ScanIdsBox.prototype['scanIds'] = undefined;
/**
 * @member {module:model/ErgoTransactionOutput} box
 */

ScanIdsBox.prototype['box'] = undefined;
var _default = ScanIdsBox;
exports["default"] = _default;