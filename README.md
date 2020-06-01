# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dave4174/lotide`

**Require it:**

`const _ = require('@dave4174/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual([],[])`: Assertion utility to check for equivalence between two arrays.
* `assertEqual(x,y)`: Assertion utility to check if two primitive types are equal.
* `assertObjectsEqual({},{})`: Assertion utility to check for equivalence between two arrays.
* `countLetters('')`: Counts the number of occurrences of each letter in a string.
* `countOnly([],{})`: Counts the occurrences of items in an array of strings. The strings to count are determined by the second object paramter.
* `eqArrays([],[])`: Returns true or false depending on whether two arrays are equivalent.
* `eqObjects({},{})`: Returns true or false depending on whether two objects are equivalent.
* `findKey({},func())`: Returns the first key from an object that satisfies a callback function.
* `findKeyByValue({},'')`: Returns a key from an object based on the value associated with that key.
* `head([])`: Returns the first item from an array.
* `letterPositions('')`: Returns all the zero-based index positions of all letters in a string.
* `map([],func())`: Returns an array of transformed items based on a callback function.
* `middle([])`: Returns the middle item of an array with an odd number of items, or the middle two items from an array with an even number of items.
* `tail([])`: Removes the first item from an array and returns the remaining items as an array.
* `takeUntil([],func())`: Returns an array that consists of all the first items of an array up until the item which satisfies a callback function.
* `without([],[])`: Returns an array with items removed which exist in a second array.