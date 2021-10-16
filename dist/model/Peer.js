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
 * The Peer model module.
 * @module model/Peer
 * @version 4.0.14
 */
var Peer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Peer</code>.
   * @alias module:model/Peer
   * @param address {String} 
   */
  function Peer(address) {
    _classCallCheck(this, Peer);

    Peer.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Peer, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>Peer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Peer} obj Optional instance to populate.
     * @return {module:model/Peer} The populated <code>Peer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Peer();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('lastSeen')) {
          obj['lastSeen'] = _ApiClient["default"].convertToType(data['lastSeen'], 'Number');
        }

        if (data.hasOwnProperty('connectionType')) {
          obj['connectionType'] = _ApiClient["default"].convertToType(data['connectionType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Peer;
}();
/**
 * @member {String} address
 */


Peer.prototype['address'] = undefined;
/**
 * @member {String} name
 */

Peer.prototype['name'] = undefined;
/**
 * Basic timestamp definition
 * @member {Number} lastSeen
 */

Peer.prototype['lastSeen'] = undefined;
/**
 * @member {module:model/Peer.ConnectionTypeEnum} connectionType
 */

Peer.prototype['connectionType'] = undefined;
/**
 * Allowed values for the <code>connectionType</code> property.
 * @enum {String}
 * @readonly
 */

Peer['ConnectionTypeEnum'] = {
  /**
   * value: "Incoming"
   * @const
   */
  "Incoming": "Incoming",

  /**
   * value: "Outgoing"
   * @const
   */
  "Outgoing": "Outgoing"
};
var _default = Peer;
exports["default"] = _default;