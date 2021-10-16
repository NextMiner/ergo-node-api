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
 * The WalletDeriveKeyBody model module.
 * @module model/WalletDeriveKeyBody
 * @version 4.0.14
 */
class WalletDeriveKeyBody {
    /**
     * Constructs a new <code>WalletDeriveKeyBody</code>.
     * @alias module:model/WalletDeriveKeyBody
     * @param derivationPath {String} Derivation path for a new secret to derive
     */
    constructor(derivationPath) { 
        
        WalletDeriveKeyBody.initialize(this, derivationPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, derivationPath) { 
        obj['derivationPath'] = derivationPath;
    }

    /**
     * Constructs a <code>WalletDeriveKeyBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletDeriveKeyBody} obj Optional instance to populate.
     * @return {module:model/WalletDeriveKeyBody} The populated <code>WalletDeriveKeyBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletDeriveKeyBody();

            if (data.hasOwnProperty('derivationPath')) {
                obj['derivationPath'] = ApiClient.convertToType(data['derivationPath'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Derivation path for a new secret to derive
 * @member {String} derivationPath
 */
WalletDeriveKeyBody.prototype['derivationPath'] = undefined;






export default WalletDeriveKeyBody;

