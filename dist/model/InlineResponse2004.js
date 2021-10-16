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
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 4.0.14
 */
var InlineResponse2004 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @param derivationPath {String} Derivation path of the resulted secret
   * @param address {String} Encoded Ergo Address
   */
  function InlineResponse2004(derivationPath, address) {
    _classCallCheck(this, InlineResponse2004);

    InlineResponse2004.initialize(this, derivationPath, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004, null, [{
    key: "initialize",
    value: function initialize(obj, derivationPath, address) {
      obj['derivationPath'] = derivationPath;
      obj['address'] = address;
    }
    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004();

        if (data.hasOwnProperty('derivationPath')) {
          obj['derivationPath'] = _ApiClient["default"].convertToType(data['derivationPath'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004;
}();
/**
 * Derivation path of the resulted secret
 * @member {String} derivationPath
 */


InlineResponse2004.prototype['derivationPath'] = undefined;
/**
 * Encoded Ergo Address
 * @member {String} address
 */

InlineResponse2004.prototype['address'] = undefined;
var _default = InlineResponse2004;
exports["default"] = _default;