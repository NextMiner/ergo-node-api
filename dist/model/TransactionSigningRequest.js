"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionHintsBag = _interopRequireDefault(require("./TransactionHintsBag"));

var _TransactionSigningRequestSecrets = _interopRequireDefault(require("./TransactionSigningRequestSecrets"));

var _UnsignedErgoTransaction = _interopRequireDefault(require("./UnsignedErgoTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransactionSigningRequest model module.
 * @module model/TransactionSigningRequest
 * @version 4.0.14
 */
var TransactionSigningRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionSigningRequest</code>.
   * A request to sign a transaction with secrets provided
   * @alias module:model/TransactionSigningRequest
   * @param tx {module:model/UnsignedErgoTransaction} 
   * @param secrets {module:model/TransactionSigningRequestSecrets} 
   */
  function TransactionSigningRequest(tx, secrets) {
    _classCallCheck(this, TransactionSigningRequest);

    TransactionSigningRequest.initialize(this, tx, secrets);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionSigningRequest, null, [{
    key: "initialize",
    value: function initialize(obj, tx, secrets) {
      obj['tx'] = tx;
      obj['secrets'] = secrets;
    }
    /**
     * Constructs a <code>TransactionSigningRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSigningRequest} obj Optional instance to populate.
     * @return {module:model/TransactionSigningRequest} The populated <code>TransactionSigningRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionSigningRequest();

        if (data.hasOwnProperty('tx')) {
          obj['tx'] = _UnsignedErgoTransaction["default"].constructFromObject(data['tx']);
        }

        if (data.hasOwnProperty('inputsRaw')) {
          obj['inputsRaw'] = _ApiClient["default"].convertToType(data['inputsRaw'], ['String']);
        }

        if (data.hasOwnProperty('dataInputsRaw')) {
          obj['dataInputsRaw'] = _ApiClient["default"].convertToType(data['dataInputsRaw'], ['String']);
        }

        if (data.hasOwnProperty('hints')) {
          obj['hints'] = _TransactionHintsBag["default"].constructFromObject(data['hints']);
        }

        if (data.hasOwnProperty('secrets')) {
          obj['secrets'] = _TransactionSigningRequestSecrets["default"].constructFromObject(data['secrets']);
        }
      }

      return obj;
    }
  }]);

  return TransactionSigningRequest;
}();
/**
 * @member {module:model/UnsignedErgoTransaction} tx
 */


TransactionSigningRequest.prototype['tx'] = undefined;
/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} inputsRaw
 */

TransactionSigningRequest.prototype['inputsRaw'] = undefined;
/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} dataInputsRaw
 */

TransactionSigningRequest.prototype['dataInputsRaw'] = undefined;
/**
 * @member {module:model/TransactionHintsBag} hints
 */

TransactionSigningRequest.prototype['hints'] = undefined;
/**
 * @member {module:model/TransactionSigningRequestSecrets} secrets
 */

TransactionSigningRequest.prototype['secrets'] = undefined;
var _default = TransactionSigningRequest;
exports["default"] = _default;