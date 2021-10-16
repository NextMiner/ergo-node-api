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
 * The DhtSecret model module.
 * @module model/DhtSecret
 * @version 4.0.14
 */
class DhtSecret {
    /**
     * Constructs a new <code>DhtSecret</code>.
     * Hex-encoded big-endian 256-bits secret exponent \&quot;w\&quot; along with generators \&quot;g\&quot;, \&quot;h\&quot;, and group elements \&quot;u\&quot;, \&quot;v\&quot;, such as g^w &#x3D; u, h^w &#x3D; v
     * @alias module:model/DhtSecret
     * @param secret {String} Hex-encoded big-endian 256-bits secret exponent
     * @param g {String} Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
     * @param h {String} Hex-encoded \"h\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
     * @param u {String} Hex-encoded \"u\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
     * @param v {String} Hex-encoded \"v\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
     */
    constructor(secret, g, h, u, v) { 
        
        DhtSecret.initialize(this, secret, g, h, u, v);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secret, g, h, u, v) { 
        obj['secret'] = secret;
        obj['g'] = g;
        obj['h'] = h;
        obj['u'] = u;
        obj['v'] = v;
    }

    /**
     * Constructs a <code>DhtSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DhtSecret} obj Optional instance to populate.
     * @return {module:model/DhtSecret} The populated <code>DhtSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DhtSecret();

            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('g')) {
                obj['g'] = ApiClient.convertToType(data['g'], 'String');
            }
            if (data.hasOwnProperty('h')) {
                obj['h'] = ApiClient.convertToType(data['h'], 'String');
            }
            if (data.hasOwnProperty('u')) {
                obj['u'] = ApiClient.convertToType(data['u'], 'String');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Hex-encoded big-endian 256-bits secret exponent
 * @member {String} secret
 */
DhtSecret.prototype['secret'] = undefined;

/**
 * Hex-encoded \"g\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} g
 */
DhtSecret.prototype['g'] = undefined;

/**
 * Hex-encoded \"h\" generator for the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} h
 */
DhtSecret.prototype['h'] = undefined;

/**
 * Hex-encoded \"u\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} u
 */
DhtSecret.prototype['u'] = undefined;

/**
 * Hex-encoded \"v\" group element of the Diffie-Hellman tuple (secp256k1 curve point)
 * @member {String} v
 */
DhtSecret.prototype['v'] = undefined;






export default DhtSecret;
