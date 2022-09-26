# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @muhammad-usama12/lotide`

**Require it:**

`const _ = require('@muhammad-usama12/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head([array])`: Scans the array in question and <strong> returns the first element </strong> of the array.
- `tail([array])`: Scans the array in question and <strong> returns the last element </strong> of the array.
- `middle[(array)]`: Scans the array in question and <strong> returns the middle element(s) </strong> of the array.
- `countLetters('string')`: Scans the string in question and returns an object with the individual characters in the string and their frequency.
- `countOnly([array1, arguement)]`: Scans the array in question and returns <strong> only </strong> the matching elements.
- `findKey({object)}, callback)`: Scans the object(s) in question and returns the specific key(s) being passed as the argument.
- `findKeyByValue({object}, key)`: Scans the object(s) in question and returns the key value passed as the arguement
- `map([array], callback`): Scans the array in question and <strong> returns a new array </strong> that has passed the callback arguement.
- `letterPosition(["string"])`: Scans the data in question and returns the position of the string by indexing the characters involved.
- `takeUntil([array], callback)`: Scans the array in question and returns selected elements which were <strong> restricted </strong> by the callback arguement.
- `without([array], argument)`: Scans the array and returns a new array, with the argument removing the selected elements.
