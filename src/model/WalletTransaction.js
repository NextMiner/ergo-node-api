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
 * The WalletTransaction model module.
 * @module model/WalletTransaction
 * @version 4.0.14
 */
class WalletTransaction {
    /**
     * Constructs a new <code>WalletTransaction</code>.
     * Transaction augmented with some useful information
     * @alias module:model/WalletTransaction
     * @param inputs {Array.<module:model/ErgoTransactionInput>} Transaction inputs
     * @param dataInputs {Array.<module:model/ErgoTransactionDataInput>} Transaction data inputs
     * @param outputs {Array.<module:model/ErgoTransactionOutput>} Transaction outputs
     * @param inclusionHeight {Number} Height of a block the transaction was included in
     * @param numConfirmations {Number} Number of transaction confirmations
     * @param scans {Array.<Number>} Scan identifiers the transaction relates to
     */
    constructor(inputs, dataInputs, outputs, inclusionHeight, numConfirmations, scans) { 
        
        WalletTransaction.initialize(this, inputs, dataInputs, outputs, inclusionHeight, numConfirmations, scans);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, inputs, dataInputs, outputs, inclusionHeight, numConfirmations, scans) { 
        obj['inputs'] = inputs;
        obj['dataInputs'] = dataInputs;
        obj['outputs'] = outputs;
        obj['inclusionHeight'] = inclusionHeight;
        obj['numConfirmations'] = numConfirmations;
        obj['scans'] = scans;
    }

    /**
     * Constructs a <code>WalletTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletTransaction} obj Optional instance to populate.
     * @return {module:model/WalletTransaction} The populated <code>WalletTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletTransaction();

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
            if (data.hasOwnProperty('inclusionHeight')) {
                obj['inclusionHeight'] = ApiClient.convertToType(data['inclusionHeight'], 'Number');
            }
            if (data.hasOwnProperty('numConfirmations')) {
                obj['numConfirmations'] = ApiClient.convertToType(data['numConfirmations'], 'Number');
            }
            if (data.hasOwnProperty('scans')) {
                obj['scans'] = ApiClient.convertToType(data['scans'], ['Number']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Base16-encoded transaction id bytes
 * @member {String} id
 */
WalletTransaction.prototype['id'] = undefined;

/**
 * Transaction inputs
 * @member {Array.<module:model/ErgoTransactionInput>} inputs
 */
WalletTransaction.prototype['inputs'] = undefined;

/**
 * Transaction data inputs
 * @member {Array.<module:model/ErgoTransactionDataInput>} dataInputs
 */
WalletTransaction.prototype['dataInputs'] = undefined;

/**
 * Transaction outputs
 * @member {Array.<module:model/ErgoTransactionOutput>} outputs
 */
WalletTransaction.prototype['outputs'] = undefined;

/**
 * Height of a block the transaction was included in
 * @member {Number} inclusionHeight
 */
WalletTransaction.prototype['inclusionHeight'] = undefined;

/**
 * Number of transaction confirmations
 * @member {Number} numConfirmations
 */
WalletTransaction.prototype['numConfirmations'] = undefined;

/**
 * Scan identifiers the transaction relates to
 * @member {Array.<Number>} scans
 */
WalletTransaction.prototype['scans'] = undefined;

/**
 * Size in bytes
 * @member {Number} size
 */
WalletTransaction.prototype['size'] = undefined;






export default WalletTransaction;

