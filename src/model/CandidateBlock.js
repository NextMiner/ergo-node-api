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

/**
 * The CandidateBlock model module.
 * @module model/CandidateBlock
 * @version 4.0.14
 */
class CandidateBlock {
    /**
     * Constructs a new <code>CandidateBlock</code>.
     * Can be null if node is not mining or candidate block is not ready
     * @alias module:model/CandidateBlock
     * @param extensionHash {String} Base16-encoded 32 byte digest
     * @param parentId {String} Base16-encoded 32 byte modifier id
     */
    constructor(extensionHash, parentId) { 
        
        CandidateBlock.initialize(this, extensionHash, parentId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, extensionHash, parentId) { 
        obj['extensionHash'] = extensionHash;
        obj['parentId'] = parentId;
    }

    /**
     * Constructs a <code>CandidateBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidateBlock} obj Optional instance to populate.
     * @return {module:model/CandidateBlock} The populated <code>CandidateBlock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CandidateBlock();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('extensionHash')) {
                obj['extensionHash'] = ApiClient.convertToType(data['extensionHash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('stateRoot')) {
                obj['stateRoot'] = ApiClient.convertToType(data['stateRoot'], 'String');
            }
            if (data.hasOwnProperty('nBits')) {
                obj['nBits'] = ApiClient.convertToType(data['nBits'], 'Number');
            }
            if (data.hasOwnProperty('adProofBytes')) {
                obj['adProofBytes'] = ApiClient.convertToType(data['adProofBytes'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('transactionsNumber')) {
                obj['transactionsNumber'] = ApiClient.convertToType(data['transactionsNumber'], 'Number');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [ErgoTransaction]);
            }
            if (data.hasOwnProperty('votes')) {
                obj['votes'] = ApiClient.convertToType(data['votes'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} version
 */
CandidateBlock.prototype['version'] = undefined;

/**
 * Base16-encoded 32 byte digest
 * @member {String} extensionHash
 */
CandidateBlock.prototype['extensionHash'] = undefined;

/**
 * Basic timestamp definition
 * @member {Number} timestamp
 */
CandidateBlock.prototype['timestamp'] = undefined;

/**
 * Base16-encoded 33 byte digest - digest with extra byte with tree height
 * @member {String} stateRoot
 */
CandidateBlock.prototype['stateRoot'] = undefined;

/**
 * @member {Number} nBits
 */
CandidateBlock.prototype['nBits'] = undefined;

/**
 * Base16-encoded ad proofs
 * @member {String} adProofBytes
 */
CandidateBlock.prototype['adProofBytes'] = undefined;

/**
 * Base16-encoded 32 byte modifier id
 * @member {String} parentId
 */
CandidateBlock.prototype['parentId'] = undefined;

/**
 * @member {Number} transactionsNumber
 */
CandidateBlock.prototype['transactionsNumber'] = undefined;

/**
 * Ergo transaction objects
 * @member {Array.<module:model/ErgoTransaction>} transactions
 */
CandidateBlock.prototype['transactions'] = undefined;

/**
 * Base16-encoded votes for a soft-fork and parameters
 * @member {String} votes
 */
CandidateBlock.prototype['votes'] = undefined;






export default CandidateBlock;

