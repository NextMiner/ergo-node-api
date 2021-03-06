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
 * The ErgoTransactionDataInput model module.
 * @module model/ErgoTransactionDataInput
 * @version 4.0.14
 */
class ErgoTransactionDataInput {
    /**
     * Constructs a new <code>ErgoTransactionDataInput</code>.
     * @alias module:model/ErgoTransactionDataInput
     * @param boxId {String} Base16-encoded transaction box id bytes. Should be 32 bytes long
     */
    constructor(boxId) { 
        
        ErgoTransactionDataInput.initialize(this, boxId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boxId) { 
        obj['boxId'] = boxId;
    }

    /**
     * Constructs a <code>ErgoTransactionDataInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoTransactionDataInput} obj Optional instance to populate.
     * @return {module:model/ErgoTransactionDataInput} The populated <code>ErgoTransactionDataInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErgoTransactionDataInput();

            if (data.hasOwnProperty('boxId')) {
                obj['boxId'] = ApiClient.convertToType(data['boxId'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Base16-encoded transaction box id bytes. Should be 32 bytes long
 * @member {String} boxId
 */
ErgoTransactionDataInput.prototype['boxId'] = undefined;

/**
 * @member {Object.<String, String>} extension
 */
ErgoTransactionDataInput.prototype['extension'] = undefined;






export default ErgoTransactionDataInput;

