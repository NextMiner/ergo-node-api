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
    instance = new ErgoNodeApi.AssetIssueRequest();
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

  describe('AssetIssueRequest', function() {
    it('should create an instance of AssetIssueRequest', function() {
      // uncomment below and update the code to test AssetIssueRequest
      //var instane = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be.a(ErgoNodeApi.AssetIssueRequest);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

    it('should have the property ergValue (base name: "ergValue")', function() {
      // uncomment below and update the code to test the property ergValue
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

    it('should have the property decimals (base name: "decimals")', function() {
      // uncomment below and update the code to test the property decimals
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

    it('should have the property registers (base name: "registers")', function() {
      // uncomment below and update the code to test the property registers
      //var instance = new ErgoNodeApi.AssetIssueRequest();
      //expect(instance).to.be();
    });

  });

}));
