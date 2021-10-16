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
 * The ScanRequest model module.
 * @module model/ScanRequest
 * @version 4.0.14
 */
class ScanRequest {
    /**
     * Constructs a new <code>ScanRequest</code>.
     * @alias module:model/ScanRequest
     */
    constructor() { 
        
        ScanRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScanRequest} obj Optional instance to populate.
     * @return {module:model/ScanRequest} The populated <code>ScanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScanRequest();

            if (data.hasOwnProperty('scanName')) {
                obj['scanName'] = ApiClient.convertToType(data['scanName'], 'String');
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
ScanRequest.prototype['scanName'] = undefined;

/**
 * @member {module:model/ScanningPredicate} trackingRule
 */
ScanRequest.prototype['trackingRule'] = undefined;






export default ScanRequest;

