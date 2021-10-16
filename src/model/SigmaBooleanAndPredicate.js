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
import SigmaBoolean from './SigmaBoolean';
import SigmaBooleanAndPredicateAllOf from './SigmaBooleanAndPredicateAllOf';

/**
 * The SigmaBooleanAndPredicate model module.
 * @module model/SigmaBooleanAndPredicate
 * @version 4.0.14
 */
class SigmaBooleanAndPredicate {
    /**
     * Constructs a new <code>SigmaBooleanAndPredicate</code>.
     * @alias module:model/SigmaBooleanAndPredicate
     * @implements module:model/SigmaBoolean
     * @implements module:model/SigmaBooleanAndPredicateAllOf
     * @param op {Number} Sigma opCode
     */
    constructor(op) { 
        SigmaBoolean.initialize(this, op);SigmaBooleanAndPredicateAllOf.initialize(this);
        SigmaBooleanAndPredicate.initialize(this, op);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, op) { 
        obj['op'] = op;
    }

    /**
     * Constructs a <code>SigmaBooleanAndPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SigmaBooleanAndPredicate} obj Optional instance to populate.
     * @return {module:model/SigmaBooleanAndPredicate} The populated <code>SigmaBooleanAndPredicate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SigmaBooleanAndPredicate();
            SigmaBoolean.constructFromObject(data, obj);
            SigmaBooleanAndPredicateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'Number');
            }
            if (data.hasOwnProperty('h')) {
                obj['h'] = ApiClient.convertToType(data['h'], 'String');
            }
            if (data.hasOwnProperty('g')) {
                obj['g'] = ApiClient.convertToType(data['g'], 'String');
            }
            if (data.hasOwnProperty('u')) {
                obj['u'] = ApiClient.convertToType(data['u'], 'String');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'Boolean');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [SigmaBoolean]);
            }
        }
        return obj;
    }


}

/**
 * Sigma opCode
 * @member {Number} op
 */
SigmaBooleanAndPredicate.prototype['op'] = undefined;

/**
 * Base16-encoded bytes
 * @member {String} h
 */
SigmaBooleanAndPredicate.prototype['h'] = undefined;

/**
 * Base16-encoded bytes
 * @member {String} g
 */
SigmaBooleanAndPredicate.prototype['g'] = undefined;

/**
 * Base16-encoded bytes
 * @member {String} u
 */
SigmaBooleanAndPredicate.prototype['u'] = undefined;

/**
 * Base16-encoded bytes
 * @member {String} v
 */
SigmaBooleanAndPredicate.prototype['v'] = undefined;

/**
 * @member {Boolean} condition
 */
SigmaBooleanAndPredicate.prototype['condition'] = undefined;

/**
 * @member {Array.<module:model/SigmaBoolean>} args
 */
SigmaBooleanAndPredicate.prototype['args'] = undefined;


// Implement SigmaBoolean interface:
/**
 * Sigma opCode
 * @member {Number} op
 */
SigmaBoolean.prototype['op'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} h
 */
SigmaBoolean.prototype['h'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} g
 */
SigmaBoolean.prototype['g'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} u
 */
SigmaBoolean.prototype['u'] = undefined;
/**
 * Base16-encoded bytes
 * @member {String} v
 */
SigmaBoolean.prototype['v'] = undefined;
/**
 * @member {Boolean} condition
 */
SigmaBoolean.prototype['condition'] = undefined;
// Implement SigmaBooleanAndPredicateAllOf interface:
/**
 * @member {Array.<module:model/SigmaBoolean>} args
 */
SigmaBooleanAndPredicateAllOf.prototype['args'] = undefined;




export default SigmaBooleanAndPredicate;

