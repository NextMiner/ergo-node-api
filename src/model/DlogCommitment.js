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
 * The DlogCommitment model module.
 * @module model/DlogCommitment
 * @version 4.0.14
 */
class DlogCommitment {
    /**
     * Constructs a new <code>DlogCommitment</code>.
     * Randomness and commitment for the first step of the Schnorr protocol
     * @alias module:model/DlogCommitment
     * @param r {String} Hex-encoded big-endian 256-bits secret exponent
     * @param a {String} Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
     */
    constructor(r, a) { 
        
        DlogCommitment.initialize(this, r, a);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, r, a) { 
        obj['r'] = r;
        obj['a'] = a;
    }

    /**
     * Constructs a <code>DlogCommitment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DlogCommitment} obj Optional instance to populate.
     * @return {module:model/DlogCommitment} The populated <code>DlogCommitment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DlogCommitment();

            if (data.hasOwnProperty('r')) {
                obj['r'] = ApiClient.convertToType(data['r'], 'String');
            }
            if (data.hasOwnProperty('a')) {
                obj['a'] = ApiClient.convertToType(data['a'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Hex-encoded big-endian 256-bits secret exponent
 * @member {String} r
 */
DlogCommitment.prototype['r'] = undefined;

/**
 * Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} a
 */
DlogCommitment.prototype['a'] = undefined;






export default DlogCommitment;
