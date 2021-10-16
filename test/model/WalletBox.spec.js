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
    instance = new ErgoNodeApi.WalletBox();
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

  describe('WalletBox', function() {
    it('should create an instance of WalletBox', function() {
      // uncomment below and update the code to test WalletBox
      //var instane = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be.a(ErgoNodeApi.WalletBox);
    });

    it('should have the property box (base name: "box")', function() {
      // uncomment below and update the code to test the property box
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property confirmationsNum (base name: "confirmationsNum")', function() {
      // uncomment below and update the code to test the property confirmationsNum
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property creationTransaction (base name: "creationTransaction")', function() {
      // uncomment below and update the code to test the property creationTransaction
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property spendingTransaction (base name: "spendingTransaction")', function() {
      // uncomment below and update the code to test the property spendingTransaction
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property spendingHeight (base name: "spendingHeight")', function() {
      // uncomment below and update the code to test the property spendingHeight
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property inclusionHeight (base name: "inclusionHeight")', function() {
      // uncomment below and update the code to test the property inclusionHeight
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property onchain (base name: "onchain")', function() {
      // uncomment below and update the code to test the property onchain
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property spent (base name: "spent")', function() {
      // uncomment below and update the code to test the property spent
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property creationOutIndex (base name: "creationOutIndex")', function() {
      // uncomment below and update the code to test the property creationOutIndex
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

    it('should have the property scans (base name: "scans")', function() {
      // uncomment below and update the code to test the property scans
      //var instance = new ErgoNodeApi.WalletBox();
      //expect(instance).to.be();
    });

  });

}));