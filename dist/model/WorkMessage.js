"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProofOfUpcomingTransactions = _interopRequireDefault(require("./ProofOfUpcomingTransactions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkMessage model module.
 * @module model/WorkMessage
 * @version 4.0.14
 */
var WorkMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkMessage</code>.
   * Block candidate related data for external miner to perform work
   * @alias module:model/WorkMessage
   * @param msg {String} Base16-encoded block header bytes without PoW solution
   * @param b {Number} Work target value
   * @param h {Number} Work height value
   * @param pk {String} Base16-encoded miner public key
   */
  function WorkMessage(msg, b, h, pk) {
    _classCallCheck(this, WorkMessage);

    WorkMessage.initialize(this, msg, b, h, pk);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkMessage, null, [{
    key: "initialize",
    value: function initialize(obj, msg, b, pk) {
      obj['msg'] = msg;
      obj['b'] = b;
      obj['h'] = h;
      obj['pk'] = pk;
    }
    /**
     * Constructs a <code>WorkMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkMessage} obj Optional instance to populate.
     * @return {module:model/WorkMessage} The populated <code>WorkMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkMessage();

        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'String');
        }

        if (data.hasOwnProperty('b')) {
          obj['b'] = _ApiClient["default"].convertToType(data['b'], 'Number');
        }

        if (data.hasOwnProperty('h')) {
          obj['h'] = _ApiClient["default"].convertToType(data['h'], 'Number');
        }

        if (data.hasOwnProperty('pk')) {
          obj['pk'] = _ApiClient["default"].convertToType(data['pk'], 'String');
        }

        if (data.hasOwnProperty('proof')) {
          obj['proof'] = _ProofOfUpcomingTransactions["default"].constructFromObject(data['proof']);
        }
      }

      return obj;
    }
  }]);

  return WorkMessage;
}();
/**
 * Base16-encoded block header bytes without PoW solution
 * @member {String} msg
 */


WorkMessage.prototype['msg'] = undefined;
/**
 * Work target value
 * @member {Number} b
 */

WorkMessage.prototype['b'] = undefined;
/**
 * Work target value
 * @member {Number} h
 */

WorkMessage.prototype['h'] = undefined;
/**
 * Base16-encoded miner public key
 * @member {String} pk
 */

WorkMessage.prototype['pk'] = undefined;
/**
 * @member {module:model/ProofOfUpcomingTransactions} proof
 */

WorkMessage.prototype['proof'] = undefined;
var _default = WorkMessage;
exports["default"] = _default;