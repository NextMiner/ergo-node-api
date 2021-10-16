"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateCommitmentsRequestSecrets = _interopRequireDefault(require("./GenerateCommitmentsRequestSecrets"));

var _UnsignedErgoTransaction = _interopRequireDefault(require("./UnsignedErgoTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GenerateCommitmentsRequest model module.
 * @module model/GenerateCommitmentsRequest
 * @version 4.0.14
 */
var GenerateCommitmentsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateCommitmentsRequest</code>.
   * request to generate commitments to sign a transaction
   * @alias module:model/GenerateCommitmentsRequest
   * @param tx {module:model/UnsignedErgoTransaction} 
   */
  function GenerateCommitmentsRequest(tx) {
    _classCallCheck(this, GenerateCommitmentsRequest);

    GenerateCommitmentsRequest.initialize(this, tx);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateCommitmentsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, tx) {
      obj['tx'] = tx;
    }
    /**
     * Constructs a <code>GenerateCommitmentsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateCommitmentsRequest} obj Optional instance to populate.
     * @return {module:model/GenerateCommitmentsRequest} The populated <code>GenerateCommitmentsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateCommitmentsRequest();

        if (data.hasOwnProperty('tx')) {
          obj['tx'] = _UnsignedErgoTransaction["default"].constructFromObject(data['tx']);
        }

        if (data.hasOwnProperty('secrets')) {
          obj['secrets'] = _GenerateCommitmentsRequestSecrets["default"].constructFromObject(data['secrets']);
        }

        if (data.hasOwnProperty('inputsRaw')) {
          obj['inputsRaw'] = _ApiClient["default"].convertToType(data['inputsRaw'], ['String']);
        }

        if (data.hasOwnProperty('dataInputsRaw')) {
          obj['dataInputsRaw'] = _ApiClient["default"].convertToType(data['dataInputsRaw'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return GenerateCommitmentsRequest;
}();
/**
 * @member {module:model/UnsignedErgoTransaction} tx
 */


GenerateCommitmentsRequest.prototype['tx'] = undefined;
/**
 * @member {module:model/GenerateCommitmentsRequestSecrets} secrets
 */

GenerateCommitmentsRequest.prototype['secrets'] = undefined;
/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} inputsRaw
 */

GenerateCommitmentsRequest.prototype['inputsRaw'] = undefined;
/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} dataInputsRaw
 */

GenerateCommitmentsRequest.prototype['dataInputsRaw'] = undefined;
var _default = GenerateCommitmentsRequest;
exports["default"] = _default;