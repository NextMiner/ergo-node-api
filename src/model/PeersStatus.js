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
 * The PeersStatus model module.
 * @module model/PeersStatus
 * @version 4.0.14
 */
class PeersStatus {
    /**
     * Constructs a new <code>PeersStatus</code>.
     * @alias module:model/PeersStatus
     * @param currentNetworkTime {Number} 
     */
    constructor(currentNetworkTime) { 
        
        PeersStatus.initialize(this, currentNetworkTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currentNetworkTime) { 
        obj['currentNetworkTime'] = currentNetworkTime;
    }

    /**
     * Constructs a <code>PeersStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeersStatus} obj Optional instance to populate.
     * @return {module:model/PeersStatus} The populated <code>PeersStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeersStatus();

            if (data.hasOwnProperty('lastIncomingMessage')) {
                obj['lastIncomingMessage'] = ApiClient.convertToType(data['lastIncomingMessage'], 'Number');
            }
            if (data.hasOwnProperty('currentNetworkTime')) {
                obj['currentNetworkTime'] = ApiClient.convertToType(data['currentNetworkTime'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lastIncomingMessage
 */
PeersStatus.prototype['lastIncomingMessage'] = undefined;

/**
 * @member {Number} currentNetworkTime
 */
PeersStatus.prototype['currentNetworkTime'] = undefined;






export default PeersStatus;
