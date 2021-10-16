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
 * The ApiError model module.
 * @module model/ApiError
 * @version 4.0.14
 */
var ApiError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiError</code>.
   * @alias module:model/ApiError
   * @param error {Number} Error code
   * @param reason {String} String error code
   * @param detail {String} Detailed error description
   */
  function ApiError(error, reason, detail) {
    _classCallCheck(this, ApiError);

    ApiError.initialize(this, error, reason, detail);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApiError, null, [{
    key: "initialize",
    value: function initialize(obj, error, reason, detail) {
      obj['error'] = error;
      obj['reason'] = reason;
      obj['detail'] = detail;
    }
    /**
     * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError} obj Optional instance to populate.
     * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiError();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'Number');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApiError;
}();
/**
 * Error code
 * @member {Number} error
 */


ApiError.prototype['error'] = undefined;
/**
 * String error code
 * @member {String} reason
 */

ApiError.prototype['reason'] = undefined;
/**
 * Detailed error description
 * @member {String} detail
 */

ApiError.prototype['detail'] = undefined;
var _default = ApiError;
exports["default"] = _default;