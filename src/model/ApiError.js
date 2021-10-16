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
 * The ApiError model module.
 * @module model/ApiError
 * @version 4.0.14
 */
class ApiError {
    /**
     * Constructs a new <code>ApiError</code>.
     * @alias module:model/ApiError
     * @param error {Number} Error code
     * @param reason {String} String error code
     * @param detail {String} Detailed error description
     */
    constructor(error, reason, detail) { 
        
        ApiError.initialize(this, error, reason, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error, reason, detail) { 
        obj['error'] = error;
        obj['reason'] = reason;
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError} obj Optional instance to populate.
     * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Error code
 * @member {Number} error
 */
ApiError.prototype['error'] = undefined;

/**
 * String error code
 * @member {String} reason
 */
ApiError.prototype['reason'] = undefined;

/**
 * Detailed error description
 * @member {String} detail
 */
ApiError.prototype['detail'] = undefined;






export default ApiError;

