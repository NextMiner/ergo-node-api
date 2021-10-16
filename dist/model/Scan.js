"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScanningPredicate = _interopRequireDefault(require("./ScanningPredicate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Scan model module.
 * @module model/Scan
 * @version 4.0.14
 */
var Scan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scan</code>.
   * @alias module:model/Scan
   */
  function Scan() {
    _classCallCheck(this, Scan);

    Scan.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scan, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Scan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scan} obj Optional instance to populate.
     * @return {module:model/Scan} The populated <code>Scan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scan();

        if (data.hasOwnProperty('scanName')) {
          obj['scanName'] = _ApiClient["default"].convertToType(data['scanName'], 'String');
        }

        if (data.hasOwnProperty('scanId')) {
          obj['scanId'] = _ApiClient["default"].convertToType(data['scanId'], 'Number');
        }

        if (data.hasOwnProperty('trackingRule')) {
          obj['trackingRule'] = _ScanningPredicate["default"].constructFromObject(data['trackingRule']);
        }
      }

      return obj;
    }
  }]);

  return Scan;
}();
/**
 * @member {String} scanName
 */


Scan.prototype['scanName'] = undefined;
/**
 * @member {Number} scanId
 */

Scan.prototype['scanId'] = undefined;
/**
 * @member {module:model/ScanningPredicate} trackingRule
 */

Scan.prototype['trackingRule'] = undefined;
var _default = Scan;
exports["default"] = _default;