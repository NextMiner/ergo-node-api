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
    instance = new ErgoNodeApi.BlockADProofs();
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

  describe('BlockADProofs', function() {
    it('should create an instance of BlockADProofs', function() {
      // uncomment below and update the code to test BlockADProofs
      //var instane = new ErgoNodeApi.BlockADProofs();
      //expect(instance).to.be.a(ErgoNodeApi.BlockADProofs);
    });

    it('should have the property headerId (base name: "headerId")', function() {
      // uncomment below and update the code to test the property headerId
      //var instance = new ErgoNodeApi.BlockADProofs();
      //expect(instance).to.be();
    });

    it('should have the property proofBytes (base name: "proofBytes")', function() {
      // uncomment below and update the code to test the property proofBytes
      //var instance = new ErgoNodeApi.BlockADProofs();
      //expect(instance).to.be();
    });

    it('should have the property digest (base name: "digest")', function() {
      // uncomment below and update the code to test the property digest
      //var instance = new ErgoNodeApi.BlockADProofs();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new ErgoNodeApi.BlockADProofs();
      //expect(instance).to.be();
    });

  });

}));
