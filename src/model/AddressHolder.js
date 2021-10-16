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
 * The AddressHolder model module.
 * @module model/AddressHolder
 * @version 4.0.14
 */
class AddressHolder {
    /**
     * Constructs a new <code>AddressHolder</code>.
     * Holds encoded ErgoAddress
     * @alias module:model/AddressHolder
     * @param address {String} Encoded Ergo Address
     */
    constructor(address) { 
        
        AddressHolder.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>AddressHolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressHolder} obj Optional instance to populate.
     * @return {module:model/AddressHolder} The populated <code>AddressHolder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressHolder();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Encoded Ergo Address
 * @member {String} address
 */
AddressHolder.prototype['address'] = undefined;






export default AddressHolder;
