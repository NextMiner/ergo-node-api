"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErgoLikeContext = _interopRequireDefault(require("./ErgoLikeContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExecuteScript model module.
 * @module model/ExecuteScript
 * @version 4.0.14
 */
var ExecuteScript = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExecuteScript</code>.
   * @alias module:model/ExecuteScript
   * @param script {String} Sigma script to be executed
   * @param namedConstants {Object} Environment for compiler
   * @param context {module:model/ErgoLikeContext} 
   */
  function ExecuteScript(script, namedConstants, context) {
    _classCallCheck(this, ExecuteScript);

    ExecuteScript.initialize(this, script, namedConstants, context);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExecuteScript, null, [{
    key: "initialize",
    value: function initialize(obj, script, namedConstants, context) {
      obj['script'] = script;
      obj['namedConstants'] = namedConstants;
      obj['context'] = context;
    }
    /**
     * Constructs a <code>ExecuteScript</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteScript} obj Optional instance to populate.
     * @return {module:model/ExecuteScript} The populated <code>ExecuteScript</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExecuteScript();

        if (data.hasOwnProperty('script')) {
          obj['script'] = _ApiClient["default"].convertToType(data['script'], 'String');
        }

        if (data.hasOwnProperty('namedConstants')) {
          obj['namedConstants'] = _ApiClient["default"].convertToType(data['namedConstants'], Object);
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ErgoLikeContext["default"].constructFromObject(data['context']);
        }
      }

      return obj;
    }
  }]);

  return ExecuteScript;
}();
/**
 * Sigma script to be executed
 * @member {String} script
 */


ExecuteScript.prototype['script'] = undefined;
/**
 * Environment for compiler
 * @member {Object} namedConstants
 */

ExecuteScript.prototype['namedConstants'] = undefined;
/**
 * @member {module:model/ErgoLikeContext} context
 */

ExecuteScript.prototype['context'] = undefined;
var _default = ExecuteScript;
exports["default"] = _default;