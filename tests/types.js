/* global require, describe, it */

var assert = require("assert");
var enjoy = require("../index");

var isNull = enjoy.isNull;
var isUndefined = enjoy.isUndefined;
var isBoolean = enjoy.isBoolean;
var isNumber = enjoy.isNumber;
var isInteger = enjoy.isInteger;
var isFloat = enjoy.isFloat;
var isString = enjoy.isString;
var isChar = enjoy.isChar;
var isCollection = enjoy.isCollection;
var isDate = enjoy.isDate;
var isError = enjoy.isError;
var isFunction = enjoy.isFunction;
var isMathObject = enjoy.isMathObject;
var isRegExp = enjoy.isRegExp;
var isArray = enjoy.isArray;
var isArrayLike = enjoy.isArrayLike;
var isPrimitive = enjoy.isPrimitive;
var isArgumentsObject = enjoy.isArgumentsObject;
var isDerivable = enjoy.isDerivable;
var isType = enjoy.isType;
var isMethod = enjoy.isMethod;
var isNaN = enjoy.isNaN;
var isFiniteNumber = enjoy.isFiniteNumber;
var isInfiniteNumber = enjoy.isInfiniteNumber;
var isInfinity = enjoy.isInfinity;
var isNegativeInfinity = enjoy.isNegativeInfinity;
var isPositiveInfinity = enjoy.isPositiveInfinity;

describe("enjoy-typechecks", function () {
    
    describe("predicates", function () {
        
        it("isArgumentsObject(a)", function () {
            
            assert(isArgumentsObject(arguments) === true, "isArgumentsObject(" + arguments + ")");
            
            [
                null, true, false, {}, {a: 1, b: 2}, /^abc/,
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isArgumentsObject(value) === false, "!isArgumentsObject(" + value + ")");
            });
        });
        
        it("isArray(a)", function () {
            
            [
               [], [1, 2, 3], [{}], ["foo", "bar"], [1, "foo", [], {}]
            ].forEach(function (value) {
                assert(isArray(value) === true, "isArray(" + value + ")");
            });
            
            [
                null, true, false, {}, {a: 1, b: 2}, /^abc/, arguments, {length: 2},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isArray(value) === false, "!isArray(" + value + ")");
            });
        });
        
        it("isArrayLike(a)", function () {
            
            [
               [], [1, 2, 3], [{}], ["foo", "bar"], [1, "foo", [], {}],
               arguments, {0: 1, 1: 2, length: 2}, "foo"
            ].forEach(function (value) {
                assert(isArrayLike(value) === true, "isArrayLike(" + value + ")");
            });
            
            [
                null, true, false, {}, {a: 1, b: 2}, /^abc/, {length: 5},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isArrayLike(value) === false, "!isArrayLike(" + value + ")");
            });
        });
        
        it("isBoolean(a)", function () {
            
            assert(isBoolean(true), "isBoolean(true)");
            assert(isBoolean(false), "isBoolean(false)");
            
            [
                NaN, null, undefined, -10, -1.1, -1, 0, 1, 1.2, 10, "foo", "bar",
                {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], Infinity, -Infinity, /^abc/
            ].forEach(function (value) {
                assert(isBoolean(value) === false, "isBoolean(" + value + ")");
            });
        });
        
        it("isChar(a)", function () {
            
            [
               "f", "b", "0", "["
            ].forEach(function (value) {
                assert(isChar(value) === true, "isChar(" + value + ")");
            });
            
            [
                null, true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/,
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined,
                "foo", "bar", "23rj023rj902j390", ""
            ].forEach(function (value) {
                assert(isChar(value) === false, "!isChar(" + value + ")");
            });
        });
        
        it("isCollection(a)", function () {
            
            [
                [], {}, [1, 2, 3], {foo: "bar"}, /foo/, new Date()
            ].forEach(function (value) {
                assert(isCollection(value) === true, "isCollection(" + value + ")");
            });
            
            [
                null, true, false, "foo", "",
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isCollection(value) === false, "!isCollection(" + value + ")");
            });
        });
        
        it("isDate(a)", function () {
            
            [
                new Date(), new Date(2016, 8, 12), new Date("foo")
            ].forEach(function (value) {
                assert(isDate(value) === true, "isDate(" + value + ")");
            });
            
            [
                null, true, false, "foo", "",
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isDate(value) === false, "!isDate(" + value + ")");
            });
        });
        
        it("isDerivable(a)", function () {
            
            function makeMockDerivable () {
                return {
                    $__children__: []
                };
            }
            
            assert(isDerivable(makeMockDerivable()) === true, "isDerivable(makeMockDerivable())");
            
            [
                null, true, false, "foo", "", {foo: "bar"}, [], {$__children__: {}},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined, function () {}
            ].forEach(function (value) {
                assert(isDerivable(value) === false, "!isDerivable(" + value + ")");
            });
        });
        
        it("isError(a)", function () {
            
            [
                new Error(), new EvalError(), new RangeError(), new ReferenceError(),
                new SyntaxError(), new TypeError()
            ].forEach(function (value) {
                assert(isError(value) === true, "isError(" + value + ")");
            });
            
            [
                null, true, false, "foo", "", [], {}, [2], {foo: 23},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isError(value) === false, "!isError(" + value + ")");
            });
        });
        
        it("isFiniteNumber(a)", function () {
            
            [
                -5e13, -20, -10, -5, -1, 0, 1, 2, 3, 10, 20, 5e10, 0x0888,
                0.0003, -2.22, -1.11111111111111, -0
            ].forEach(function (value) {
                assert(isFiniteNumber(value) === true, "isFiniteNumber(" + value + ")");
            });
            
            [
                [], {}, /foo/, NaN, Infinity, -Infinity, null, undefined
            ].forEach(function (value) {
                assert(isFiniteNumber(value) === false, "isFiniteNumber(" + value + ")");
            });
        });
        
        it("isFloat(a)", function () {
            
            [
                null, "foo", "bar", true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/,
                -5e13, -20, -10, -5, -1, 0, 1, 2, 3, 10, 20, 5e10, 0x0888
            ].forEach(function (value) {
                assert(isFloat(value) === false, "!isFloat(" + value + ")");
            });
            
            [
                0.23, 0.000000000001, 22.222, -123.123213
            ].forEach(function (value) {
                assert(isFloat(value) === true, "isFloat(" + value + ")");
            });
        });
        
        it("isFunction(a)", function () {
            
            [
                function () {}, parseInt, function (a, b) { return a + b; }, Date
            ].forEach(function (value) {
                assert(isFunction(value) === true, "isFunction(" + value + ")");
            });
            
            [
                null, true, false, "foo", "", [], {}, [2], {foo: 23},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isFunction(value) === false, "!isFunction(" + value + ")");
            });
        });
        
        it("isInfiniteNumber(a)", function () {
            
            [
                Number.NaN, Infinity, -Infinity
            ].forEach(function (value) {
                assert(isInfiniteNumber(value) === true, "isInfiniteNumber(" + value + ")");
            });
            
            [
                null, "foo", "bar", true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/,
                0.23, 0.000000000001, 22.222, -123.123213, undefined
            ].forEach(function (value) {
                assert(isInfiniteNumber(value) === false, "!isInfiniteNumber(" + value + ")");
            });
        });
        
        it("isInfinity(a)", function () {
            
            [
                Infinity, -Infinity
            ].forEach(function (value) {
                assert(isInfinity(value) === true, "isInfinity(" + value + ")");
            });
            
            [
                null, "foo", "bar", true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/,
                0.23, 0.000000000001, 22.222, -123.123213, undefined, NaN, 1, 2, 3, 0, -0
            ].forEach(function (value) {
                assert(isInfinity(value) === false, "!isInfinity(" + value + ")");
            });
        });
        
        it("isInteger(a)", function () {
            
            [
                -5e13, -20, -10, -5, -1, 0, 1, 2, 3, 10, 20, 5e10, 0x0888
            ].forEach(function (value) {
                assert(isInteger(value) === true, "isInteger(" + value + ")");
            });
            
            [
                null, "foo", "bar", true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/,
                0.23, 0.000000000001, 22.222, -123.123213
            ].forEach(function (value) {
                assert(isInteger(value) === false, "!isInteger(" + value + ")");
            });
        });
        
        it("isMathObject(a)", function () {
            
            assert(isMathObject(Math) === true, "isMathObject(" + Math + ")");
            
            [
                null, true, false, "foo", "", [], {}, [2], {foo: 23},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isMathObject(value) === false, "!isMathObject(" + value + ")");
            });
        });
        
        it("isMethod(a)", function () {
            
            function makeMockMethod () {
                
                function fn () {}
                
                fn.$__type__ = "method";
                fn.$__default__ = function () {};
                fn.$__implementations__ = [];
                fn.$__dispatchers__ = [];
                
                return fn;
            }
            
            assert(isMethod(makeMockMethod()) === true, "isMethod(makeMockMethod())");
            
            [
                null, true, false, "foo", "", [], {}, [2], {foo: 23},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined,
                {
                    $__type__: "method",
                    $__default__: function () {},
                    $__implementations__: [],
                    $__dispatchers__: []
                }
            ].forEach(function (value) {
                assert(isMethod(value) === false, "!isMethod(" + value + ")");
            });
        });
        
        it("isNaN(a)", function () {
            
            assert(isNaN(Number.NaN), "isNaN(Number.NaN)");
            
            [
                undefined, -10, -1.1, -1, 0, 1, 1.2, 10, "foo", "bar",
                {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], false, true, Infinity, -Infinity, /^abc/
            ].
            forEach(function (value) {
                assert(isNaN(value) === false, "!isNaN(" + value + ")");
            });
        });
        
        it("isNegativeInfinity(a)", function () {
            
            assert(isNegativeInfinity(-Infinity), "isNegativeInfinity(-Infinity)");
            
            [
                undefined, -10, -1.1, -1, 0, 1, 1.2, 10, "foo", "bar",
                {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], false, true, Infinity, /^abc/
            ].
            forEach(function (value) {
                assert(isNegativeInfinity(value) === false, "!isNegativeInfinity(" + value + ")");
            });
        });
        
        it("isNull(a)", function () {
            
            assert(isNull(null), "isNull(null)");
            
            [
                NaN, undefined, -10, -1.1, -1, 0, 1, 1.2, 10, "foo", "bar",
                {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], false, true, Infinity, -Infinity, /^abc/
            ].
            forEach(function (value) {
                assert(isNull(value) === false, "!isNull(" + value + ")");
            });
        });
        
        it("isNumber(a)", function () {
            
            [
                -5e13, -20, -10, -5, -1, 0, 1, 2, 3, 10, 20, 5e10, 0x0888, NaN,
                -10.223, -5.4, -1.111, -1.000, 0.000, 0.002, Math.PI, Infinity, -Infinity
            ].forEach(function (value) {
                assert(isNumber(value) === true, "isNumber(" + value + ")");
            });
            
            [
                null, "foo", "bar", true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/
            ].forEach(function (value) {
                assert(isNumber(value) === false, "!isNumber(" + value + ")");
            });
        });
        
        it("isPositiveInfinity(a)", function () {
            
            assert(isPositiveInfinity(Infinity), "isPositiveInfinity(Infinity)");
            
            [
                undefined, -10, -1.1, -1, 0, 1, 1.2, 10, "foo", "bar",
                {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], false, true, -Infinity, /^abc/
            ].
            forEach(function (value) {
                assert(isPositiveInfinity(value) === false, "!isPositiveInfinity(" + value + ")");
            });
        });
        
        it("isPrimitive(a)", function () {
            
            [
                0, 1, 2, -1, -2, 100, "foo", "bar", null, true, false, undefined, NaN,
                Infinity, -Infinity, -0, 0.0034
            ].forEach(function (value) {
                assert(isPrimitive(value) === true, "isPrimitive(" + value + ")");
            });
            
            [
                [], {}, [2], {foo: 23}, new Date(), /foo/, [1, "foo", 3]
            ].forEach(function (value) {
                assert(isPrimitive(value) === false, "!isPrimitive(" + value + ")");
            });
        });
        
        it("isRegExp(a)", function () {
            
            [
                /\s/, /foo/, /^bazbar[0-9]+$/, /foo/gi, new RegExp("foo")
            ].forEach(function (value) {
                assert(isRegExp(value) === true, "isRegExp(" + value + ")");
            });
            
            [
                null, true, false, "foo", "", [], {}, [2], {foo: 23},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isRegExp(value) === false, "!isRegExp(" + value + ")");
            });
        });
        
        it("isString(a)", function () {
            
            [
               "foo", "bar", "0.002", "[]", "", "{}", "NaN", "undefined", "null", "true", "false"
            ].forEach(function (value) {
                assert(isString(value) === true, "isString(" + value + ")");
            });
            
            [
                null, true, false, {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], /^abc/,
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined
            ].forEach(function (value) {
                assert(isString(value) === false, "!isString(" + value + ")");
            });
        });
        
        it("isType(a)", function () {
            
            function makeMockType () {
                return {
                    $__type__: "type",
                    $__checker__: function () {},
                    $__children__: []
                };
            }
            
            assert(isType(makeMockType()) === true, "isType(makeMockType())");
            
            [
                null, true, false, "foo", "", {foo: "bar"}, [], {$__children__: {}},
                {$__type__: "type"}, {$__type__: "type", $__checker__: function () {}},
                0.23, 0.000000000001, 22.222, -123.123213, NaN, undefined, function () {}
            ].forEach(function (value) {
                assert(isType(value) === false, "!isType(" + value + ")");
            });
        });
        
        it("isUndefined(a)", function () {
            
            assert(isUndefined(undefined), "isUndefined(undefined)");
            
            [
                NaN, null, -10, -1.1, -1, 0, 1, 1.2, 10, "foo", "bar",
                {}, {a: 1, b: 2}, [], [1, 2, 3, "foo"], false, true, Infinity, -Infinity, /^abc/
            ].forEach(function (value) {
                assert(isUndefined(value) === false, "isUndefined(" + value + ")");
            });
        });
        
    });
    
});
