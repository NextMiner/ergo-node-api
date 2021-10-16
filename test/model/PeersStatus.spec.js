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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ErgoNodeApi);
  }
}(this, function(expect, ErgoNodeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ErgoNodeApi.PeersStatus();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PeersStatus', function() {
    it('should create an instance of PeersStatus', function() {
      // uncomment below and update the code to test PeersStatus
      //var instane = new ErgoNodeApi.PeersStatus();
      //expect(instance).to.be.a(ErgoNodeApi.PeersStatus);
    });

    it('should have the property lastIncomingMessage (base name: "lastIncomingMessage")', function() {
      // uncomment below and update the code to test the property lastIncomingMessage
      //var instance = new ErgoNodeApi.PeersStatus();
      //expect(instance).to.be();
    });

    it('should have the property currentNetworkTime (base name: "currentNetworkTime")', function() {
      // uncomment below and update the code to test the property currentNetworkTime
      //var instance = new ErgoNodeApi.PeersStatus();
      //expect(instance).to.be();
    });

  });

}));
