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
 * The WalletUpdateChangeAddressBody model module.
 * @module model/WalletUpdateChangeAddressBody
 * @version 4.0.14
 */
class WalletUpdateChangeAddressBody {
    /**
     * Constructs a new <code>WalletUpdateChangeAddressBody</code>.
     * @alias module:model/WalletUpdateChangeAddressBody
     * @param address {String} Pay2PubKey address
     */
    constructor(address) { 
        
        WalletUpdateChangeAddressBody.initialize(this, address);
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
     * Constructs a <code>WalletUpdateChangeAddressBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletUpdateChangeAddressBody} obj Optional instance to populate.
     * @return {module:model/WalletUpdateChangeAddressBody} The populated <code>WalletUpdateChangeAddressBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletUpdateChangeAddressBody();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Pay2PubKey address
 * @member {String} address
 */
WalletUpdateChangeAddressBody.prototype['address'] = undefined;






export default WalletUpdateChangeAddressBody;
