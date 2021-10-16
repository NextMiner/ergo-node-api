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
 * The Parameters model module.
 * @module model/Parameters
 * @version 4.0.14
 */
var Parameters = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Parameters</code>.
   * @alias module:model/Parameters
   * @param height {Number} Height when current parameters were considered(not actual height). Can be '0' if state is empty
   * @param storageFeeFactor {Number} Storage fee coefficient (per byte per storage period ~4 years)
   * @param minValuePerByte {Number} Minimum value per byte of an output
   * @param maxBlockSize {Number} Maximum block size (in bytes)
   * @param maxBlockCost {Number} Maximum cumulative computational cost of input scripts in block transactions
   * @param blockVersion {Number} Ergo blockchain protocol version
   * @param tokenAccessCost {Number} Validation cost of a single token
   * @param inputCost {Number} Validation cost per one transaction input
   * @param dataInputCost {Number} Validation cost per one data input
   * @param outputCost {Number} Validation cost per one transaction output
   */
  function Parameters(height, storageFeeFactor, minValuePerByte, maxBlockSize, maxBlockCost, blockVersion, tokenAccessCost, inputCost, dataInputCost, outputCost) {
    _classCallCheck(this, Parameters);

    Parameters.initialize(this, height, storageFeeFactor, minValuePerByte, maxBlockSize, maxBlockCost, blockVersion, tokenAccessCost, inputCost, dataInputCost, outputCost);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Parameters, null, [{
    key: "initialize",
    value: function initialize(obj, height, storageFeeFactor, minValuePerByte, maxBlockSize, maxBlockCost, blockVersion, tokenAccessCost, inputCost, dataInputCost, outputCost) {
      obj['height'] = height;
      obj['storageFeeFactor'] = storageFeeFactor;
      obj['minValuePerByte'] = minValuePerByte;
      obj['maxBlockSize'] = maxBlockSize;
      obj['maxBlockCost'] = maxBlockCost;
      obj['blockVersion'] = blockVersion;
      obj['tokenAccessCost'] = tokenAccessCost;
      obj['inputCost'] = inputCost;
      obj['dataInputCost'] = dataInputCost;
      obj['outputCost'] = outputCost;
    }
    /**
     * Constructs a <code>Parameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Parameters} obj Optional instance to populate.
     * @return {module:model/Parameters} The populated <code>Parameters</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Parameters();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('storageFeeFactor')) {
          obj['storageFeeFactor'] = _ApiClient["default"].convertToType(data['storageFeeFactor'], 'Number');
        }

        if (data.hasOwnProperty('minValuePerByte')) {
          obj['minValuePerByte'] = _ApiClient["default"].convertToType(data['minValuePerByte'], 'Number');
        }

        if (data.hasOwnProperty('maxBlockSize')) {
          obj['maxBlockSize'] = _ApiClient["default"].convertToType(data['maxBlockSize'], 'Number');
        }

        if (data.hasOwnProperty('maxBlockCost')) {
          obj['maxBlockCost'] = _ApiClient["default"].convertToType(data['maxBlockCost'], 'Number');
        }

        if (data.hasOwnProperty('blockVersion')) {
          obj['blockVersion'] = _ApiClient["default"].convertToType(data['blockVersion'], 'Number');
        }

        if (data.hasOwnProperty('tokenAccessCost')) {
          obj['tokenAccessCost'] = _ApiClient["default"].convertToType(data['tokenAccessCost'], 'Number');
        }

        if (data.hasOwnProperty('inputCost')) {
          obj['inputCost'] = _ApiClient["default"].convertToType(data['inputCost'], 'Number');
        }

        if (data.hasOwnProperty('dataInputCost')) {
          obj['dataInputCost'] = _ApiClient["default"].convertToType(data['dataInputCost'], 'Number');
        }

        if (data.hasOwnProperty('outputCost')) {
          obj['outputCost'] = _ApiClient["default"].convertToType(data['outputCost'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Parameters;
}();
/**
 * Height when current parameters were considered(not actual height). Can be '0' if state is empty
 * @member {Number} height
 */


Parameters.prototype['height'] = undefined;
/**
 * Storage fee coefficient (per byte per storage period ~4 years)
 * @member {Number} storageFeeFactor
 */

Parameters.prototype['storageFeeFactor'] = undefined;
/**
 * Minimum value per byte of an output
 * @member {Number} minValuePerByte
 */

Parameters.prototype['minValuePerByte'] = undefined;
/**
 * Maximum block size (in bytes)
 * @member {Number} maxBlockSize
 */

Parameters.prototype['maxBlockSize'] = undefined;
/**
 * Maximum cumulative computational cost of input scripts in block transactions
 * @member {Number} maxBlockCost
 */

Parameters.prototype['maxBlockCost'] = undefined;
/**
 * Ergo blockchain protocol version
 * @member {Number} blockVersion
 */

Parameters.prototype['blockVersion'] = undefined;
/**
 * Validation cost of a single token
 * @member {Number} tokenAccessCost
 */

Parameters.prototype['tokenAccessCost'] = undefined;
/**
 * Validation cost per one transaction input
 * @member {Number} inputCost
 */

Parameters.prototype['inputCost'] = undefined;
/**
 * Validation cost per one data input
 * @member {Number} dataInputCost
 */

Parameters.prototype['dataInputCost'] = undefined;
/**
 * Validation cost per one transaction output
 * @member {Number} outputCost
 */

Parameters.prototype['outputCost'] = undefined;
var _default = Parameters;
exports["default"] = _default;