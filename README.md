# Typecheck predicate functions for enjoy.js

This is a collection of type checkers. It also checks for some types that only exist
in enjoy.js projects, but it's useful even for non-enjoy projects as well.

The following general type checkers are part of the module:

 * **isArgumentsObject(a):** Checks if `a` is an arguments object.
 * **isArray(a):** Checks if `a` is a real array.
 * **isArrayLike(a):** Checks if `a` is iterable like an array, e.g. a DOMElement or Arguments.
 * **isBoolean(a):** Checks if `a` is a boolean.
 * **isChar(a):** Checks if `a` is a string containing only one character.
 * **isCollection(a):** Checks if `a` is a collection of values (array or object).
 * **isDate(a):** Checks if `a` is a Date object.
 * **isError(a):** Checks if `a` is an Error object.
 * **isFiniteNumber(a):** Checks if `a` is an actual number (not NaN or +/-Infinity).
 * **isFloat(a):** Checks if `a` is a real number (but not an integer).
 * **isFunction(a):** Checks if `a` is a function.
 * **isInfiniteNumber(a):** Checks if `a` is an infinite number like NaN or Infinity.
 * **isInfinity(a):** Checks if `a` is positive or negative infinity.
 * **isInteger(a):** Checks if `a` is an integer.
 * **isMathObject(a):** Checks if `a` is the JavaScript built-in Math object.
 * **isNegativeInfinity(a):** Checks if `a` is -Infinity.
 * **isNull(a):** Checks if `a` is null.
 * **isNumber(a):** Checks if `a` is a number (including NaN or +/-Infinity).
 * **isPositiveInfinity(a):** Checks if `a` is Infinity.
 * **isPrimitive(a):** Checks if `a` is a primitive type (everything but an object/array).
 * **isRegExp(a):** Checks if `a` is a regular expression object.
 * **isString(a):** Checks if `a` is a string.
 * **isUndefined(a):** Checks if `a` is undefined.

The module also contains these enjoy-specific type checkers:

 * **isDerivable(a):** Checks if `a` is an enjoy.js derivable object.
 * **isMethod(a):** Checks if `a` is an enjoy.js multimethod.
 * **isType(a):** Checks if `a` is an enjoy.js type object.
