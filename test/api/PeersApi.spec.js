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
    instance = new ErgoNodeApi.PeersApi();
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

  describe('PeersApi', function() {
    describe('connectToPeer', function() {
      it('should call connectToPeer successfully', function(done) {
        //uncomment below and update the code to test connectToPeer
        //instance.connectToPeer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllPeers', function() {
      it('should call getAllPeers successfully', function(done) {
        //uncomment below and update the code to test getAllPeers
        //instance.getAllPeers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBlacklistedPeers', function() {
      it('should call getBlacklistedPeers successfully', function(done) {
        //uncomment below and update the code to test getBlacklistedPeers
        //instance.getBlacklistedPeers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConnectedPeers', function() {
      it('should call getConnectedPeers successfully', function(done) {
        //uncomment below and update the code to test getConnectedPeers
        //instance.getConnectedPeers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPeersStatus', function() {
      it('should call getPeersStatus successfully', function(done) {
        //uncomment below and update the code to test getPeersStatus
        //instance.getPeersStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
