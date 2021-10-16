"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockADProofs = _interopRequireDefault(require("./BlockADProofs"));

var _BlockHeader = _interopRequireDefault(require("./BlockHeader"));

var _BlockTransactions = _interopRequireDefault(require("./BlockTransactions"));

var _Extension = _interopRequireDefault(require("./Extension"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FullBlock model module.
 * @module model/FullBlock
 * @version 4.0.14
 */
var FullBlock = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FullBlock</code>.
   * Block with header and transactions
   * @alias module:model/FullBlock
   * @param header {module:model/BlockHeader} 
   * @param blockTransactions {module:model/BlockTransactions} 
   * @param adProofs {module:model/BlockADProofs} 
   * @param extension {module:model/Extension} 
   * @param size {Number} Size in bytes
   */
  function FullBlock(header, blockTransactions, adProofs, extension, size) {
    _classCallCheck(this, FullBlock);

    FullBlock.initialize(this, header, blockTransactions, adProofs, extension, size);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FullBlock, null, [{
    key: "initialize",
    value: function initialize(obj, header, blockTransactions, adProofs, extension, size) {
      obj['header'] = header;
      obj['blockTransactions'] = blockTransactions;
      obj['adProofs'] = adProofs;
      obj['extension'] = extension;
      obj['size'] = size;
    }
    /**
     * Constructs a <code>FullBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FullBlock} obj Optional instance to populate.
     * @return {module:model/FullBlock} The populated <code>FullBlock</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FullBlock();

        if (data.hasOwnProperty('header')) {
          obj['header'] = _BlockHeader["default"].constructFromObject(data['header']);
        }

        if (data.hasOwnProperty('blockTransactions')) {
          obj['blockTransactions'] = _BlockTransactions["default"].constructFromObject(data['blockTransactions']);
        }

        if (data.hasOwnProperty('adProofs')) {
          obj['adProofs'] = _BlockADProofs["default"].constructFromObject(data['adProofs']);
        }

        if (data.hasOwnProperty('extension')) {
          obj['extension'] = _Extension["default"].constructFromObject(data['extension']);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FullBlock;
}();
/**
 * @member {module:model/BlockHeader} header
 */


FullBlock.prototype['header'] = undefined;
/**
 * @member {module:model/BlockTransactions} blockTransactions
 */

FullBlock.prototype['blockTransactions'] = undefined;
/**
 * @member {module:model/BlockADProofs} adProofs
 */

FullBlock.prototype['adProofs'] = undefined;
/**
 * @member {module:model/Extension} extension
 */

FullBlock.prototype['extension'] = undefined;
/**
 * Size in bytes
 * @member {Number} size
 */

FullBlock.prototype['size'] = undefined;
var _default = FullBlock;
exports["default"] = _default;