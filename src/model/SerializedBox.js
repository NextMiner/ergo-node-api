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
 * The SerializedBox model module.
 * @module model/SerializedBox
 * @version 4.0.14
 */
class SerializedBox {
    /**
     * Constructs a new <code>SerializedBox</code>.
     * @alias module:model/SerializedBox
     * @param boxId {String} Base16-encoded transaction box id bytes. Should be 32 bytes long
     * @param bytes {String} Base16-encoded bytes
     */
    constructor(boxId, bytes) { 
        
        SerializedBox.initialize(this, boxId, bytes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boxId, bytes) { 
        obj['boxId'] = boxId;
        obj['bytes'] = bytes;
    }

    /**
     * Constructs a <code>SerializedBox</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SerializedBox} obj Optional instance to populate.
     * @return {module:model/SerializedBox} The populated <code>SerializedBox</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SerializedBox();

            if (data.hasOwnProperty('boxId')) {
                obj['boxId'] = ApiClient.convertToType(data['boxId'], 'String');
            }
            if (data.hasOwnProperty('bytes')) {
                obj['bytes'] = ApiClient.convertToType(data['bytes'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Base16-encoded transaction box id bytes. Should be 32 bytes long
 * @member {String} boxId
 */
SerializedBox.prototype['boxId'] = undefined;

/**
 * Base16-encoded bytes
 * @member {String} bytes
 */
SerializedBox.prototype['bytes'] = undefined;






export default SerializedBox;
