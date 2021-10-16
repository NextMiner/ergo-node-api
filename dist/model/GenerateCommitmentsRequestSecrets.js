"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DhtSecret = _interopRequireDefault(require("./DhtSecret"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GenerateCommitmentsRequestSecrets model module.
 * @module model/GenerateCommitmentsRequestSecrets
 * @version 4.0.14
 */
var GenerateCommitmentsRequestSecrets = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateCommitmentsRequestSecrets</code>.
   * Optionally, external secrets used for signing
   * @alias module:model/GenerateCommitmentsRequestSecrets
   */
  function GenerateCommitmentsRequestSecrets() {
    _classCallCheck(this, GenerateCommitmentsRequestSecrets);

    GenerateCommitmentsRequestSecrets.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateCommitmentsRequestSecrets, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GenerateCommitmentsRequestSecrets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateCommitmentsRequestSecrets} obj Optional instance to populate.
     * @return {module:model/GenerateCommitmentsRequestSecrets} The populated <code>GenerateCommitmentsRequestSecrets</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateCommitmentsRequestSecrets();

        if (data.hasOwnProperty('dlog')) {
          obj['dlog'] = _ApiClient["default"].convertToType(data['dlog'], ['String']);
        }

        if (data.hasOwnProperty('dht')) {
          obj['dht'] = _ApiClient["default"].convertToType(data['dht'], [_DhtSecret["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GenerateCommitmentsRequestSecrets;
}();
/**
 * Sequence of secret exponents (DLOG secrets)
 * @member {Array.<String>} dlog
 */


GenerateCommitmentsRequestSecrets.prototype['dlog'] = undefined;
/**
 * Sequence of secret Diffie-Hellman tuple exponents (DHT secrets)
 * @member {Array.<module:model/DhtSecret>} dht
 */

GenerateCommitmentsRequestSecrets.prototype['dht'] = undefined;
var _default = GenerateCommitmentsRequestSecrets;
exports["default"] = _default;