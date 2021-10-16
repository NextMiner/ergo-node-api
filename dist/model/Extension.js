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
 * The Extension model module.
 * @module model/Extension
 * @version 4.0.14
 */
var Extension = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Extension</code>.
   * @alias module:model/Extension
   * @param headerId {String} Base16-encoded 32 byte modifier id
   * @param digest {String} Base16-encoded 32 byte digest
   * @param fields {Array.<Array.<String>>} List of key-value records
   */
  function Extension(headerId, digest, fields) {
    _classCallCheck(this, Extension);

    Extension.initialize(this, headerId, digest, fields);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Extension, null, [{
    key: "initialize",
    value: function initialize(obj, headerId, digest, fields) {
      obj['headerId'] = headerId;
      obj['digest'] = digest;
      obj['fields'] = fields;
    }
    /**
     * Constructs a <code>Extension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extension} obj Optional instance to populate.
     * @return {module:model/Extension} The populated <code>Extension</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Extension();

        if (data.hasOwnProperty('headerId')) {
          obj['headerId'] = _ApiClient["default"].convertToType(data['headerId'], 'String');
        }

        if (data.hasOwnProperty('digest')) {
          obj['digest'] = _ApiClient["default"].convertToType(data['digest'], 'String');
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], [Array]);
        }
      }

      return obj;
    }
  }]);

  return Extension;
}();
/**
 * Base16-encoded 32 byte modifier id
 * @member {String} headerId
 */


Extension.prototype['headerId'] = undefined;
/**
 * Base16-encoded 32 byte digest
 * @member {String} digest
 */

Extension.prototype['digest'] = undefined;
/**
 * List of key-value records
 * @member {Array.<Array.<String>>} fields
 */

Extension.prototype['fields'] = undefined;
var _default = Extension;
exports["default"] = _default;