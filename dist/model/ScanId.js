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
 * The ScanId model module.
 * @module model/ScanId
 * @version 4.0.14
 */
var ScanId = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScanId</code>.
   * @alias module:model/ScanId
   */
  function ScanId() {
    _classCallCheck(this, ScanId);

    ScanId.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScanId, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScanId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScanId} obj Optional instance to populate.
     * @return {module:model/ScanId} The populated <code>ScanId</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScanId();

        if (data.hasOwnProperty('scanId')) {
          obj['scanId'] = _ApiClient["default"].convertToType(data['scanId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScanId;
}();
/**
 * @member {Number} scanId
 */


ScanId.prototype['scanId'] = undefined;
var _default = ScanId;
exports["default"] = _default;