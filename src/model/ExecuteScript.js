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
import ErgoLikeContext from './ErgoLikeContext';

/**
 * The ExecuteScript model module.
 * @module model/ExecuteScript
 * @version 4.0.14
 */
class ExecuteScript {
    /**
     * Constructs a new <code>ExecuteScript</code>.
     * @alias module:model/ExecuteScript
     * @param script {String} Sigma script to be executed
     * @param namedConstants {Object} Environment for compiler
     * @param context {module:model/ErgoLikeContext} 
     */
    constructor(script, namedConstants, context) { 
        
        ExecuteScript.initialize(this, script, namedConstants, context);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, script, namedConstants, context) { 
        obj['script'] = script;
        obj['namedConstants'] = namedConstants;
        obj['context'] = context;
    }

    /**
     * Constructs a <code>ExecuteScript</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecuteScript} obj Optional instance to populate.
     * @return {module:model/ExecuteScript} The populated <code>ExecuteScript</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExecuteScript();

            if (data.hasOwnProperty('script')) {
                obj['script'] = ApiClient.convertToType(data['script'], 'String');
            }
            if (data.hasOwnProperty('namedConstants')) {
                obj['namedConstants'] = ApiClient.convertToType(data['namedConstants'], Object);
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ErgoLikeContext.constructFromObject(data['context']);
            }
        }
        return obj;
    }


}

/**
 * Sigma script to be executed
 * @member {String} script
 */
ExecuteScript.prototype['script'] = undefined;

/**
 * Environment for compiler
 * @member {Object} namedConstants
 */
ExecuteScript.prototype['namedConstants'] = undefined;

/**
 * @member {module:model/ErgoLikeContext} context
 */
ExecuteScript.prototype['context'] = undefined;






export default ExecuteScript;

