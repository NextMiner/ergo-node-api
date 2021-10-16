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
 * The ScanningPredicate model module.
 * @module model/ScanningPredicate
 * @version 4.0.14
 */
class ScanningPredicate {
    /**
     * Constructs a new <code>ScanningPredicate</code>.
     * @alias module:model/ScanningPredicate
     * @param predicate {String} 
     */
    constructor(predicate) { 
        
        ScanningPredicate.initialize(this, predicate);
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
     * Constructs a <code>ScanningPredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScanningPredicate} obj Optional instance to populate.
     * @return {module:model/ScanningPredicate} The populated <code>ScanningPredicate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScanningPredicate();

            if (data.hasOwnProperty('predicate')) {
                obj['predicate'] = ApiClient.convertToType(data['predicate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} predicate
 */
ScanningPredicate.prototype['predicate'] = undefined;






export default ScanningPredicate;
