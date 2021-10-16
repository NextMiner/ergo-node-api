"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoTransaction = _interopRequireDefault(require("./ErgoTransaction"));

var _SigmaBoolean = _interopRequireDefault(require("./SigmaBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HintExtractionRequest model module.
 * @module model/HintExtractionRequest
 * @version 4.0.14
 */
var HintExtractionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HintExtractionRequest</code>.
   * request to extract prover hints from a transaction
   * @alias module:model/HintExtractionRequest
   * @param tx {module:model/ErgoTransaction} 
   * @param real {Array.<module:model/SigmaBoolean>} Real signers of the transaction
   * @param simulated {Array.<module:model/SigmaBoolean>} Simulated signers of the transaction
   */
  function HintExtractionRequest(tx, real, simulated) {
    _classCallCheck(this, HintExtractionRequest);

    HintExtractionRequest.initialize(this, tx, real, simulated);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HintExtractionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, tx, real, simulated) {
      obj['tx'] = tx;
      obj['real'] = real;
      obj['simulated'] = simulated;
    }
    /**
     * Constructs a <code>HintExtractionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HintExtractionRequest} obj Optional instance to populate.
     * @return {module:model/HintExtractionRequest} The populated <code>HintExtractionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HintExtractionRequest();

        if (data.hasOwnProperty('tx')) {
          obj['tx'] = _ErgoTransaction["default"].constructFromObject(data['tx']);
        }

        if (data.hasOwnProperty('real')) {
          obj['real'] = _ApiClient["default"].convertToType(data['real'], [_SigmaBoolean["default"]]);
        }

        if (data.hasOwnProperty('simulated')) {
          obj['simulated'] = _ApiClient["default"].convertToType(data['simulated'], [_SigmaBoolean["default"]]);
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

  return HintExtractionRequest;
}();
/**
 * @member {module:model/ErgoTransaction} tx
 */


HintExtractionRequest.prototype['tx'] = undefined;
/**
 * Real signers of the transaction
 * @member {Array.<module:model/SigmaBoolean>} real
 */

HintExtractionRequest.prototype['real'] = undefined;
/**
 * Simulated signers of the transaction
 * @member {Array.<module:model/SigmaBoolean>} simulated
 */

HintExtractionRequest.prototype['simulated'] = undefined;
/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} inputsRaw
 */

HintExtractionRequest.prototype['inputsRaw'] = undefined;
/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} dataInputsRaw
 */

HintExtractionRequest.prototype['dataInputsRaw'] = undefined;
var _default = HintExtractionRequest;
exports["default"] = _default;