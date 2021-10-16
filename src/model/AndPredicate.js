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
 * The AndPredicate model module.
 * @module model/AndPredicate
 * @version 4.0.14
 */
class AndPredicate {
    /**
     * Constructs a new <code>AndPredicate</code>.
     * @alias module:model/AndPredicate
     * @implements module:model/ScanningPredicate
     * @implements module:model/AndPredicateAllOf
     * @param predicate {String} 
     */
    constructor(predicate) { 
        ScanningPredicate.initialize(this, predicate);AndPredicateAllOf.initialize(this);
        AndPredicate.initialize(this, predicate);
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
     * Constructs a <code>AndPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AndPredicate} obj Optional instance to populate.
     * @return {module:model/AndPredicate} The populated <code>AndPredicate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AndPredicate();
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
AndPredicate.prototype['predicate'] = undefined;

/**
 * @member {Array.<module:model/ScanningPredicate>} args
 */
AndPredicate.prototype['args'] = undefined;


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




export default AndPredicate;

