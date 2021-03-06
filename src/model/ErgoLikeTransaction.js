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
import ErgoTransactionDataInput from './ErgoTransactionDataInput';
import ErgoTransactionInput from './ErgoTransactionInput';
import ErgoTransactionOutput from './ErgoTransactionOutput';

/**
 * The ErgoLikeTransaction model module.
 * @module model/ErgoLikeTransaction
 * @version 4.0.14
 */
class ErgoLikeTransaction {
    /**
     * Constructs a new <code>ErgoLikeTransaction</code>.
     * @alias module:model/ErgoLikeTransaction
     * @param id {String} Base16-encoded 32 byte modifier id
     * @param inputs {Array.<module:model/ErgoTransactionInput>} 
     * @param dataInputs {Array.<module:model/ErgoTransactionDataInput>} 
     * @param outputs {Array.<module:model/ErgoTransactionOutput>} 
     */
    constructor(id, inputs, dataInputs, outputs) { 
        
        ErgoLikeTransaction.initialize(this, id, inputs, dataInputs, outputs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, inputs, dataInputs, outputs) { 
        obj['id'] = id;
        obj['inputs'] = inputs;
        obj['dataInputs'] = dataInputs;
        obj['outputs'] = outputs;
    }

    /**
     * Constructs a <code>ErgoLikeTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErgoLikeTransaction} obj Optional instance to populate.
     * @return {module:model/ErgoLikeTransaction} The populated <code>ErgoLikeTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErgoLikeTransaction();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], [ErgoTransactionInput]);
            }
            if (data.hasOwnProperty('dataInputs')) {
                obj['dataInputs'] = ApiClient.convertToType(data['dataInputs'], [ErgoTransactionDataInput]);
            }
            if (data.hasOwnProperty('outputs')) {
                obj['outputs'] = ApiClient.convertToType(data['outputs'], [ErgoTransactionOutput]);
            }
        }
        return obj;
    }


}

/**
 * Base16-encoded 32 byte modifier id
 * @member {String} id
 */
ErgoLikeTransaction.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/ErgoTransactionInput>} inputs
 */
ErgoLikeTransaction.prototype['inputs'] = undefined;

/**
 * @member {Array.<module:model/ErgoTransactionDataInput>} dataInputs
 */
ErgoLikeTransaction.prototype['dataInputs'] = undefined;

/**
 * @member {Array.<module:model/ErgoTransactionOutput>} outputs
 */
ErgoLikeTransaction.prototype['outputs'] = undefined;






export default ErgoLikeTransaction;

