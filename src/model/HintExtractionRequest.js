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
import ErgoTransaction from './ErgoTransaction';
import SigmaBoolean from './SigmaBoolean';

/**
 * The HintExtractionRequest model module.
 * @module model/HintExtractionRequest
 * @version 4.0.14
 */
class HintExtractionRequest {
    /**
     * Constructs a new <code>HintExtractionRequest</code>.
     * request to extract prover hints from a transaction
     * @alias module:model/HintExtractionRequest
     * @param tx {module:model/ErgoTransaction} 
     * @param real {Array.<module:model/SigmaBoolean>} Real signers of the transaction
     * @param simulated {Array.<module:model/SigmaBoolean>} Simulated signers of the transaction
     */
    constructor(tx, real, simulated) { 
        
        HintExtractionRequest.initialize(this, tx, real, simulated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tx, real, simulated) { 
        obj['tx'] = tx;
        obj['real'] = real;
        obj['simulated'] = simulated;
    }

    /**
     * Constructs a <code>HintExtractionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HintExtractionRequest} obj Optional instance to populate.
     * @return {module:model/HintExtractionRequest} The populated <code>HintExtractionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HintExtractionRequest();

            if (data.hasOwnProperty('tx')) {
                obj['tx'] = ErgoTransaction.constructFromObject(data['tx']);
            }
            if (data.hasOwnProperty('real')) {
                obj['real'] = ApiClient.convertToType(data['real'], [SigmaBoolean]);
            }
            if (data.hasOwnProperty('simulated')) {
                obj['simulated'] = ApiClient.convertToType(data['simulated'], [SigmaBoolean]);
            }
            if (data.hasOwnProperty('inputsRaw')) {
                obj['inputsRaw'] = ApiClient.convertToType(data['inputsRaw'], ['String']);
            }
            if (data.hasOwnProperty('dataInputsRaw')) {
                obj['dataInputsRaw'] = ApiClient.convertToType(data['dataInputsRaw'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ErgoTransaction} tx
 */
HintExtractionRequest.prototype['tx'] = undefined;

/**
 * Real signers of the transaction
 * @member {Array.<module:model/SigmaBoolean>} real
 */
HintExtractionRequest.prototype['real'] = undefined;

/**
 * Simulated signers of the transaction
 * @member {Array.<module:model/SigmaBoolean>} simulated
 */
HintExtractionRequest.prototype['simulated'] = undefined;

/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} inputsRaw
 */
HintExtractionRequest.prototype['inputsRaw'] = undefined;

/**
 * Optional list of inputs to be used in serialized form
 * @member {Array.<String>} dataInputsRaw
 */
HintExtractionRequest.prototype['dataInputsRaw'] = undefined;






export default HintExtractionRequest;

