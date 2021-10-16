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
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 4.0.14
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     * @param derivationPath {String} Derivation path of the resulted secret
     * @param address {String} Encoded Ergo Address
     */
    constructor(derivationPath, address) { 
        
        InlineResponse2004.initialize(this, derivationPath, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, derivationPath, address) { 
        obj['derivationPath'] = derivationPath;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('derivationPath')) {
                obj['derivationPath'] = ApiClient.convertToType(data['derivationPath'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Derivation path of the resulted secret
 * @member {String} derivationPath
 */
InlineResponse2004.prototype['derivationPath'] = undefined;

/**
 * Encoded Ergo Address
 * @member {String} address
 */
InlineResponse2004.prototype['address'] = undefined;






export default InlineResponse2004;

