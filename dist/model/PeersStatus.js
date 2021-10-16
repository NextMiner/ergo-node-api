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
 * The PeersStatus model module.
 * @module model/PeersStatus
 * @version 4.0.14
 */
var PeersStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PeersStatus</code>.
   * @alias module:model/PeersStatus
   * @param currentNetworkTime {Number} 
   */
  function PeersStatus(currentNetworkTime) {
    _classCallCheck(this, PeersStatus);

    PeersStatus.initialize(this, currentNetworkTime);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PeersStatus, null, [{
    key: "initialize",
    value: function initialize(obj, currentNetworkTime) {
      obj['currentNetworkTime'] = currentNetworkTime;
    }
    /**
     * Constructs a <code>PeersStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeersStatus} obj Optional instance to populate.
     * @return {module:model/PeersStatus} The populated <code>PeersStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeersStatus();

        if (data.hasOwnProperty('lastIncomingMessage')) {
          obj['lastIncomingMessage'] = _ApiClient["default"].convertToType(data['lastIncomingMessage'], 'Number');
        }

        if (data.hasOwnProperty('currentNetworkTime')) {
          obj['currentNetworkTime'] = _ApiClient["default"].convertToType(data['currentNetworkTime'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PeersStatus;
}();
/**
 * @member {Number} lastIncomingMessage
 */


PeersStatus.prototype['lastIncomingMessage'] = undefined;
/**
 * @member {Number} currentNetworkTime
 */

PeersStatus.prototype['currentNetworkTime'] = undefined;
var _default = PeersStatus;
exports["default"] = _default;