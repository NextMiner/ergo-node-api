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
import ScanningPredicate from './ScanningPredicate';

/**
 * The Scan model module.
 * @module model/Scan
 * @version 4.0.14
 */
class Scan {
    /**
     * Constructs a new <code>Scan</code>.
     * @alias module:model/Scan
     */
    constructor() { 
        
        Scan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Scan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scan} obj Optional instance to populate.
     * @return {module:model/Scan} The populated <code>Scan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Scan();

            if (data.hasOwnProperty('scanName')) {
                obj['scanName'] = ApiClient.convertToType(data['scanName'], 'String');
            }
            if (data.hasOwnProperty('scanId')) {
                obj['scanId'] = ApiClient.convertToType(data['scanId'], 'Number');
            }
            if (data.hasOwnProperty('trackingRule')) {
                obj['trackingRule'] = ScanningPredicate.constructFromObject(data['trackingRule']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} scanName
 */
Scan.prototype['scanName'] = undefined;

/**
 * @member {Number} scanId
 */
Scan.prototype['scanId'] = undefined;

/**
 * @member {module:model/ScanningPredicate} trackingRule
 */
Scan.prototype['trackingRule'] = undefined;






export default Scan;

