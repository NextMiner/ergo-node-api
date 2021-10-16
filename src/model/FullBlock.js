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
import BlockADProofs from './BlockADProofs';
import BlockHeader from './BlockHeader';
import BlockTransactions from './BlockTransactions';
import Extension from './Extension';

/**
 * The FullBlock model module.
 * @module model/FullBlock
 * @version 4.0.14
 */
class FullBlock {
    /**
     * Constructs a new <code>FullBlock</code>.
     * Block with header and transactions
     * @alias module:model/FullBlock
     * @param header {module:model/BlockHeader} 
     * @param blockTransactions {module:model/BlockTransactions} 
     * @param adProofs {module:model/BlockADProofs} 
     * @param extension {module:model/Extension} 
     * @param size {Number} Size in bytes
     */
    constructor(header, blockTransactions, adProofs, extension, size) { 
        
        FullBlock.initialize(this, header, blockTransactions, adProofs, extension, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, header, blockTransactions, adProofs, extension, size) { 
        obj['header'] = header;
        obj['blockTransactions'] = blockTransactions;
        obj['adProofs'] = adProofs;
        obj['extension'] = extension;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>FullBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FullBlock} obj Optional instance to populate.
     * @return {module:model/FullBlock} The populated <code>FullBlock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FullBlock();

            if (data.hasOwnProperty('header')) {
                obj['header'] = BlockHeader.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('blockTransactions')) {
                obj['blockTransactions'] = BlockTransactions.constructFromObject(data['blockTransactions']);
            }
            if (data.hasOwnProperty('adProofs')) {
                obj['adProofs'] = BlockADProofs.constructFromObject(data['adProofs']);
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = Extension.constructFromObject(data['extension']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlockHeader} header
 */
FullBlock.prototype['header'] = undefined;

/**
 * @member {module:model/BlockTransactions} blockTransactions
 */
FullBlock.prototype['blockTransactions'] = undefined;

/**
 * @member {module:model/BlockADProofs} adProofs
 */
FullBlock.prototype['adProofs'] = undefined;

/**
 * @member {module:model/Extension} extension
 */
FullBlock.prototype['extension'] = undefined;

/**
 * Size in bytes
 * @member {Number} size
 */
FullBlock.prototype['size'] = undefined;






export default FullBlock;
