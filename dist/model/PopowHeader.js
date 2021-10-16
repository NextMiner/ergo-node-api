"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockHeader = _interopRequireDefault(require("./BlockHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PopowHeader model module.
 * @module model/PopowHeader
 * @version 4.0.14
 */
var PopowHeader = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PopowHeader</code>.
   * @alias module:model/PopowHeader
   * @param header {module:model/BlockHeader} 
   * @param interlinks {Array.<String>} Array of header interlinks
   */
  function PopowHeader(header, interlinks) {
    _classCallCheck(this, PopowHeader);

    PopowHeader.initialize(this, header, interlinks);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PopowHeader, null, [{
    key: "initialize",
    value: function initialize(obj, header, interlinks) {
      obj['header'] = header;
      obj['interlinks'] = interlinks;
    }
    /**
     * Constructs a <code>PopowHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PopowHeader} obj Optional instance to populate.
     * @return {module:model/PopowHeader} The populated <code>PopowHeader</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PopowHeader();

        if (data.hasOwnProperty('header')) {
          obj['header'] = _BlockHeader["default"].constructFromObject(data['header']);
        }

        if (data.hasOwnProperty('interlinks')) {
          obj['interlinks'] = _ApiClient["default"].convertToType(data['interlinks'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PopowHeader;
}();
/**
 * @member {module:model/BlockHeader} header
 */


PopowHeader.prototype['header'] = undefined;
/**
 * Array of header interlinks
 * @member {Array.<String>} interlinks
 */

PopowHeader.prototype['interlinks'] = undefined;
var _default = PopowHeader;
exports["default"] = _default;