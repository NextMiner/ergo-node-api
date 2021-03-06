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
import SpendingProof from './SpendingProof';

/**
 * The ErgoTransactionInput model module.
 * @module model/ErgoTransactionInput
 * @version 4.0.14
 */
class ErgoTransactionInput {
    /**
     * Constructs a new <code>ErgoTransactionInput</code>.
     * @alias module:model/ErgoTransactionInput
     * @param boxId {String} Base16-encoded transaction box id bytes. Should be 32 bytes long
     * @param spendingProof {module:model/SpendingProof} 
     */
    constructor(boxId, spendingProof) { 
        
        ErgoTransactionInput.initialize(this, boxId, spendingProof);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boxId, spendingProof) { 
        obj['boxId'] = boxId;
        obj['spendingProof'] = spendingProof;
    }

    /**
     * Constructs a <code>ErgoTransactionInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoTransactionInput} obj Optional instance to populate.
     * @return {module:model/ErgoTransactionInput} The populated <code>ErgoTransactionInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErgoTransactionInput();

            if (data.hasOwnProperty('boxId')) {
                obj['boxId'] = ApiClient.convertToType(data['boxId'], 'String');
            }
            if (data.hasOwnProperty('spendingProof')) {
                obj['spendingProof'] = SpendingProof.constructFromObject(data['spendingProof']);
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
ErgoTransactionInput.prototype['boxId'] = undefined;

/**
 * @member {module:model/SpendingProof} spendingProof
 */
ErgoTransactionInput.prototype['spendingProof'] = undefined;

/**
 * @member {Object.<String, String>} extension
 */
ErgoTransactionInput.prototype['extension'] = undefined;






export default ErgoTransactionInput;

