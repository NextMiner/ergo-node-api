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
 * The BlacklistedPeers model module.
 * @module model/BlacklistedPeers
 * @version 4.0.14
 */
var BlacklistedPeers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlacklistedPeers</code>.
   * @alias module:model/BlacklistedPeers
   * @param addresses {Array.<String>} 
   */
  function BlacklistedPeers(addresses) {
    _classCallCheck(this, BlacklistedPeers);

    BlacklistedPeers.initialize(this, addresses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlacklistedPeers, null, [{
    key: "initialize",
    value: function initialize(obj, addresses) {
      obj['addresses'] = addresses;
    }
    /**
     * Constructs a <code>BlacklistedPeers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlacklistedPeers} obj Optional instance to populate.
     * @return {module:model/BlacklistedPeers} The populated <code>BlacklistedPeers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlacklistedPeers();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return BlacklistedPeers;
}();
/**
 * @member {Array.<String>} addresses
 */


BlacklistedPeers.prototype['addresses'] = undefined;
var _default = BlacklistedPeers;
exports["default"] = _default;