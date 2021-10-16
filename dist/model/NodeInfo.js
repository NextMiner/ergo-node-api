"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Parameters = _interopRequireDefault(require("./Parameters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NodeInfo model module.
 * @module model/NodeInfo
 * @version 4.0.14
 */
var NodeInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeInfo</code>.
   * @alias module:model/NodeInfo
   * @param name {String} 
   * @param appVersion {String} 
   * @param fullHeight {Number} Can be 'null' if state is empty (no full block is applied since node launch)
   * @param headersHeight {Number} Can be 'null' if state is empty (no header applied since node launch)
   * @param bestFullHeaderId {String} Can be 'null' if no full block is applied since node launch
   * @param previousFullHeaderId {String} Can be 'null' if no full block is applied since node launch
   * @param bestHeaderId {String} Can be 'null' if no header applied since node launch
   * @param stateRoot {String} Can be 'null' if state is empty (no full block is applied since node launch)
   * @param stateType {module:model/NodeInfo.StateTypeEnum} 
   * @param stateVersion {String} Can be 'null' if no full block is applied since node launch
   * @param isMining {Boolean} 
   * @param peersCount {Number} Number of connected peers
   * @param unconfirmedCount {Number} Current unconfirmed transactions count
   * @param difficulty {Number} Difficulty on current bestFullHeaderId. Can be 'null' if no full block is applied since node launch
   * @param currentTime {Number} Current internal node time
   * @param launchTime {Number} Time when the node was started
   * @param headersScore {Number} Can be 'null' if no headers is applied since node launch
   * @param fullBlocksScore {Number} Can be 'null' if no full block is applied since node launch
   * @param genesisBlockId {String} Can be 'null' if genesis blocks is not produced yet
   * @param parameters {module:model/Parameters} 
   */
  function NodeInfo(name, appVersion, fullHeight, headersHeight, bestFullHeaderId, previousFullHeaderId, bestHeaderId, stateRoot, stateType, stateVersion, isMining, peersCount, unconfirmedCount, difficulty, currentTime, launchTime, headersScore, fullBlocksScore, genesisBlockId, parameters) {
    _classCallCheck(this, NodeInfo);

    NodeInfo.initialize(this, name, appVersion, fullHeight, headersHeight, bestFullHeaderId, previousFullHeaderId, bestHeaderId, stateRoot, stateType, stateVersion, isMining, peersCount, unconfirmedCount, difficulty, currentTime, launchTime, headersScore, fullBlocksScore, genesisBlockId, parameters);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeInfo, null, [{
    key: "initialize",
    value: function initialize(obj, name, appVersion, fullHeight, headersHeight, bestFullHeaderId, previousFullHeaderId, bestHeaderId, stateRoot, stateType, stateVersion, isMining, peersCount, unconfirmedCount, difficulty, currentTime, launchTime, headersScore, fullBlocksScore, genesisBlockId, parameters) {
      obj['name'] = name;
      obj['appVersion'] = appVersion;
      obj['fullHeight'] = fullHeight;
      obj['headersHeight'] = headersHeight;
      obj['bestFullHeaderId'] = bestFullHeaderId;
      obj['previousFullHeaderId'] = previousFullHeaderId;
      obj['bestHeaderId'] = bestHeaderId;
      obj['stateRoot'] = stateRoot;
      obj['stateType'] = stateType;
      obj['stateVersion'] = stateVersion;
      obj['isMining'] = isMining;
      obj['peersCount'] = peersCount;
      obj['unconfirmedCount'] = unconfirmedCount;
      obj['difficulty'] = difficulty;
      obj['currentTime'] = currentTime;
      obj['launchTime'] = launchTime;
      obj['headersScore'] = headersScore;
      obj['fullBlocksScore'] = fullBlocksScore;
      obj['genesisBlockId'] = genesisBlockId;
      obj['parameters'] = parameters;
    }
    /**
     * Constructs a <code>NodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeInfo} obj Optional instance to populate.
     * @return {module:model/NodeInfo} The populated <code>NodeInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeInfo();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('appVersion')) {
          obj['appVersion'] = _ApiClient["default"].convertToType(data['appVersion'], 'String');
        }

        if (data.hasOwnProperty('fullHeight')) {
          obj['fullHeight'] = _ApiClient["default"].convertToType(data['fullHeight'], 'Number');
        }

        if (data.hasOwnProperty('headersHeight')) {
          obj['headersHeight'] = _ApiClient["default"].convertToType(data['headersHeight'], 'Number');
        }

        if (data.hasOwnProperty('bestFullHeaderId')) {
          obj['bestFullHeaderId'] = _ApiClient["default"].convertToType(data['bestFullHeaderId'], 'String');
        }

        if (data.hasOwnProperty('previousFullHeaderId')) {
          obj['previousFullHeaderId'] = _ApiClient["default"].convertToType(data['previousFullHeaderId'], 'String');
        }

        if (data.hasOwnProperty('bestHeaderId')) {
          obj['bestHeaderId'] = _ApiClient["default"].convertToType(data['bestHeaderId'], 'String');
        }

        if (data.hasOwnProperty('stateRoot')) {
          obj['stateRoot'] = _ApiClient["default"].convertToType(data['stateRoot'], 'String');
        }

        if (data.hasOwnProperty('stateType')) {
          obj['stateType'] = _ApiClient["default"].convertToType(data['stateType'], 'String');
        }

        if (data.hasOwnProperty('stateVersion')) {
          obj['stateVersion'] = _ApiClient["default"].convertToType(data['stateVersion'], 'String');
        }

        if (data.hasOwnProperty('isMining')) {
          obj['isMining'] = _ApiClient["default"].convertToType(data['isMining'], 'Boolean');
        }

        if (data.hasOwnProperty('peersCount')) {
          obj['peersCount'] = _ApiClient["default"].convertToType(data['peersCount'], 'Number');
        }

        if (data.hasOwnProperty('unconfirmedCount')) {
          obj['unconfirmedCount'] = _ApiClient["default"].convertToType(data['unconfirmedCount'], 'Number');
        }

        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'Number');
        }

        if (data.hasOwnProperty('currentTime')) {
          obj['currentTime'] = _ApiClient["default"].convertToType(data['currentTime'], 'Number');
        }

        if (data.hasOwnProperty('launchTime')) {
          obj['launchTime'] = _ApiClient["default"].convertToType(data['launchTime'], 'Number');
        }

        if (data.hasOwnProperty('headersScore')) {
          obj['headersScore'] = _ApiClient["default"].convertToType(data['headersScore'], 'Number');
        }

        if (data.hasOwnProperty('fullBlocksScore')) {
          obj['fullBlocksScore'] = _ApiClient["default"].convertToType(data['fullBlocksScore'], 'Number');
        }

        if (data.hasOwnProperty('genesisBlockId')) {
          obj['genesisBlockId'] = _ApiClient["default"].convertToType(data['genesisBlockId'], 'String');
        }

        if (data.hasOwnProperty('parameters')) {
          obj['parameters'] = _Parameters["default"].constructFromObject(data['parameters']);
        }
      }

      return obj;
    }
  }]);

  return NodeInfo;
}();
/**
 * @member {String} name
 */


NodeInfo.prototype['name'] = undefined;
/**
 * @member {String} appVersion
 */

NodeInfo.prototype['appVersion'] = undefined;
/**
 * Can be 'null' if state is empty (no full block is applied since node launch)
 * @member {Number} fullHeight
 */

NodeInfo.prototype['fullHeight'] = undefined;
/**
 * Can be 'null' if state is empty (no header applied since node launch)
 * @member {Number} headersHeight
 */

NodeInfo.prototype['headersHeight'] = undefined;
/**
 * Can be 'null' if no full block is applied since node launch
 * @member {String} bestFullHeaderId
 */

NodeInfo.prototype['bestFullHeaderId'] = undefined;
/**
 * Can be 'null' if no full block is applied since node launch
 * @member {String} previousFullHeaderId
 */

NodeInfo.prototype['previousFullHeaderId'] = undefined;
/**
 * Can be 'null' if no header applied since node launch
 * @member {String} bestHeaderId
 */

NodeInfo.prototype['bestHeaderId'] = undefined;
/**
 * Can be 'null' if state is empty (no full block is applied since node launch)
 * @member {String} stateRoot
 */

NodeInfo.prototype['stateRoot'] = undefined;
/**
 * @member {module:model/NodeInfo.StateTypeEnum} stateType
 */

NodeInfo.prototype['stateType'] = undefined;
/**
 * Can be 'null' if no full block is applied since node launch
 * @member {String} stateVersion
 */

NodeInfo.prototype['stateVersion'] = undefined;
/**
 * @member {Boolean} isMining
 */

NodeInfo.prototype['isMining'] = undefined;
/**
 * Number of connected peers
 * @member {Number} peersCount
 */

NodeInfo.prototype['peersCount'] = undefined;
/**
 * Current unconfirmed transactions count
 * @member {Number} unconfirmedCount
 */

NodeInfo.prototype['unconfirmedCount'] = undefined;
/**
 * Difficulty on current bestFullHeaderId. Can be 'null' if no full block is applied since node launch
 * @member {Number} difficulty
 */

NodeInfo.prototype['difficulty'] = undefined;
/**
 * Current internal node time
 * @member {Number} currentTime
 */

NodeInfo.prototype['currentTime'] = undefined;
/**
 * Time when the node was started
 * @member {Number} launchTime
 */

NodeInfo.prototype['launchTime'] = undefined;
/**
 * Can be 'null' if no headers is applied since node launch
 * @member {Number} headersScore
 */

NodeInfo.prototype['headersScore'] = undefined;
/**
 * Can be 'null' if no full block is applied since node launch
 * @member {Number} fullBlocksScore
 */

NodeInfo.prototype['fullBlocksScore'] = undefined;
/**
 * Can be 'null' if genesis blocks is not produced yet
 * @member {String} genesisBlockId
 */

NodeInfo.prototype['genesisBlockId'] = undefined;
/**
 * @member {module:model/Parameters} parameters
 */

NodeInfo.prototype['parameters'] = undefined;
/**
 * Allowed values for the <code>stateType</code> property.
 * @enum {String}
 * @readonly
 */

NodeInfo['StateTypeEnum'] = {
  /**
   * value: "digest"
   * @const
   */
  "digest": "digest",

  /**
   * value: "utxo"
   * @const
   */
  "utxo": "utxo"
};
var _default = NodeInfo;
exports["default"] = _default;