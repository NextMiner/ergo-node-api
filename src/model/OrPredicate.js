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
import AndPredicateAllOf from './AndPredicateAllOf';
import ScanningPredicate from './ScanningPredicate';

/**
 * The OrPredicate model module.
 * @module model/OrPredicate
 * @version 4.0.14
 */
class OrPredicate {
    /**
     * Constructs a new <code>OrPredicate</code>.
     * @alias module:model/OrPredicate
     * @implements module:model/ScanningPredicate
     * @implements module:model/AndPredicateAllOf
     * @param predicate {String} 
     */
    constructor(predicate) { 
        ScanningPredicate.initialize(this, predicate);AndPredicateAllOf.initialize(this);
        OrPredicate.initialize(this, predicate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, predicate) { 
        obj['predicate'] = predicate;
    }

    /**
     * Constructs a <code>OrPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrPredicate} obj Optional instance to populate.
     * @return {module:model/OrPredicate} The populated <code>OrPredicate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrPredicate();
            ScanningPredicate.constructFromObject(data, obj);
            AndPredicateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('predicate')) {
                obj['predicate'] = ApiClient.convertToType(data['predicate'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [ScanningPredicate]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} predicate
 */
OrPredicate.prototype['predicate'] = undefined;

/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */
OrPredicate.prototype['args'] = undefined;


// Implement ScanningPredicate interface:
/**
 * @member {String} predicate
 */
ScanningPredicate.prototype['predicate'] = undefined;
// Implement AndPredicateAllOf interface:
/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */
AndPredicateAllOf.prototype['args'] = undefined;




export default OrPredicate;

