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
 * The TransactionHintsBag model module.
 * @module model/TransactionHintsBag
 * @version 4.0.14
 */
var TransactionHintsBag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionHintsBag</code>.
   * prover hints extracted from a transaction
   * @alias module:model/TransactionHintsBag
   */
  function TransactionHintsBag() {
    _classCallCheck(this, TransactionHintsBag);

    TransactionHintsBag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionHintsBag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionHintsBag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionHintsBag} obj Optional instance to populate.
     * @return {module:model/TransactionHintsBag} The populated <code>TransactionHintsBag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionHintsBag();

        if (data.hasOwnProperty('secretHints')) {
          obj['secretHints'] = _ApiClient["default"].convertToType(data['secretHints'], [Object]);
        }

        if (data.hasOwnProperty('publicHints')) {
          obj['publicHints'] = _ApiClient["default"].convertToType(data['publicHints'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return TransactionHintsBag;
}();
/**
 * Hints which contain secrets, do not share them!
 * @member {Array.<Object.<String, Array.<String>>>>} secretHints
 */


TransactionHintsBag.prototype['secretHints'] = undefined;
/**
 * Hints which contain public data only, share them freely!
 * @member {Array.<Object.<String, Array.<String>>>>} publicHints
 */

TransactionHintsBag.prototype['publicHints'] = undefined;
var _default = TransactionHintsBag;
exports["default"] = _default;