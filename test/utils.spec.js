var chai = require('chai'),
    assert = chai.assert,
    _ = require('../src/utils'),
    sinon = require('sinon');

describe("the utils object",function(){
    describe("the listenToMany function",function(){
    	var listenables = { foo: "FOO", bar: "BAR", baz: "BAZ", missing: "MISSING"},
            context = {
                onFoo:"onFoo",
                bar:"bar",
                onBaz:"onBaz",
                onBazDefault:"onBazDefault",
                listenTo:sinon.spy()
            };
        _.listenToMany.call(context,listenables);
        it("should listenTo all listenables with corresponding callbacks",function(){
        	assert.equal(context.listenTo.callCount,3);
        	assert.deepEqual(context.listenTo.firstCall.args,[listenables.foo,"onFoo","onFoo"]);
        	assert.deepEqual(context.listenTo.secondCall.args,[listenables.bar,"bar","bar"]);
        	assert.deepEqual(context.listenTo.thirdCall.args,[listenables.baz,"onBaz","onBazDefault"]);
        });
    });
});