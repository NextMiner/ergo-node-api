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
    instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
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

  describe('SigmaBooleanThresholdPredicate', function() {
    it('should create an instance of SigmaBooleanThresholdPredicate', function() {
      // uncomment below and update the code to test SigmaBooleanThresholdPredicate
      //var instane = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be.a(ErgoNodeApi.SigmaBooleanThresholdPredicate);
    });

    it('should have the property op (base name: "op")', function() {
      // uncomment below and update the code to test the property op
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

    it('should have the property h (base name: "h")', function() {
      // uncomment below and update the code to test the property h
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

    it('should have the property g (base name: "g")', function() {
      // uncomment below and update the code to test the property g
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

    it('should have the property u (base name: "u")', function() {
      // uncomment below and update the code to test the property u
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

    it('should have the property v (base name: "v")', function() {
      // uncomment below and update the code to test the property v
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

    it('should have the property args (base name: "args")', function() {
      // uncomment below and update the code to test the property args
      //var instance = new ErgoNodeApi.SigmaBooleanThresholdPredicate();
      //expect(instance).to.be();
    });

  });

}));