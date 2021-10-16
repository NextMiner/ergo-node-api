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
 * The AddressValidity model module.
 * @module model/AddressValidity
 * @version 4.0.14
 */
var AddressValidity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressValidity</code>.
   * Validity status of Ergo address
   * @alias module:model/AddressValidity
   * @param address {String} Encoded Ergo Address
   * @param isValid {Boolean} 
   */
  function AddressValidity(address, isValid) {
    _classCallCheck(this, AddressValidity);

    AddressValidity.initialize(this, address, isValid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressValidity, null, [{
    key: "initialize",
    value: function initialize(obj, address, isValid) {
      obj['address'] = address;
      obj['isValid'] = isValid;
    }
    /**
     * Constructs a <code>AddressValidity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressValidity} obj Optional instance to populate.
     * @return {module:model/AddressValidity} The populated <code>AddressValidity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressValidity();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('isValid')) {
          obj['isValid'] = _ApiClient["default"].convertToType(data['isValid'], 'Boolean');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddressValidity;
}();
/**
 * Encoded Ergo Address
 * @member {String} address
 */


AddressValidity.prototype['address'] = undefined;
/**
 * @member {Boolean} isValid
 */

AddressValidity.prototype['isValid'] = undefined;
/**
 * @member {String} error
 */

AddressValidity.prototype['error'] = undefined;
var _default = AddressValidity;
exports["default"] = _default;