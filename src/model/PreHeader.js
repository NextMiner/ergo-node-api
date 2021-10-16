/**
 * Ergo Node API
 * API docs for Ergo Node. Models are shared between all Ergo products
 *
 * The version of the OpenAPI document: 4.0.14
 * Contact: ergoplatform@protonmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PreHeader model module.
 * @module model/PreHeader
 * @version 4.0.14
 */
class PreHeader {
    /**
     * Constructs a new <code>PreHeader</code>.
     * @alias module:model/PreHeader
     * @param timestamp {Number} Basic timestamp definition
     * @param version {Number} Ergo blockchain protocol version
     * @param nBits {Number} 
     * @param height {Number} 
     * @param parentId {String} Base16-encoded 32 byte modifier id
     * @param votes {String} Base16-encoded votes for a soft-fork and parameters
     */
    constructor(timestamp, version, nBits, height, parentId, votes) { 
        
        PreHeader.initialize(this, timestamp, version, nBits, height, parentId, votes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, timestamp, version, nBits, height, parentId, votes) { 
        obj['timestamp'] = timestamp;
        obj['version'] = version;
        obj['nBits'] = nBits;
        obj['height'] = height;
        obj['parentId'] = parentId;
        obj['votes'] = votes;
    }

    /**
     * Constructs a <code>PreHeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PreHeader} obj Optional instance to populate.
     * @return {module:model/PreHeader} The populated <code>PreHeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PreHeader();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('nBits')) {
                obj['nBits'] = ApiClient.convertToType(data['nBits'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('votes')) {
                obj['votes'] = ApiClient.convertToType(data['votes'], 'String');
            }
            if (data.hasOwnProperty('minerPk')) {
                obj['minerPk'] = ApiClient.convertToType(data['minerPk'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */
PreHeader.prototype['timestamp'] = undefined;

/**
 * Ergo blockchain protocol version
 * @member {Number} version
 */
PreHeader.prototype['version'] = undefined;

/**
 * @member {Number} nBits
 */
PreHeader.prototype['nBits'] = undefined;

/**
 * @member {Number} height
 */
PreHeader.prototype['height'] = undefined;

/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */
PreHeader.prototype['parentId'] = undefined;

/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */
PreHeader.prototype['votes'] = undefined;

/**
 * @member {String} minerPk
 */
PreHeader.prototype['minerPk'] = undefined;






export default PreHeader;
