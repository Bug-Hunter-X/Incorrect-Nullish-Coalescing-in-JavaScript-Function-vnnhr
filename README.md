# Incorrect Nullish Coalescing in JavaScript Function

This repository demonstrates a common error in JavaScript involving the incorrect handling of nullish values (null and undefined). The `foo` function, in `bug.js`, does not properly handle cases where either input (`a` or `b`) is null or undefined, leading to potential errors or unexpected behavior. The corrected version, `bugSolution.js`, demonstrates proper handling of these values.

## Bug Description

The original `foo` function lacks a comprehensive check for nullish values.  If either `a` or `b` is null or undefined, the addition operation (`a + b`) will likely result in unexpected behavior, including `NaN` or type coercion issues. This can lead to runtime errors or incorrect calculations in applications.

## Solution

The `bugSolution.js` file provides a corrected implementation of the `foo` function. It explicitly checks for null or undefined values using strict equality (`===`) and returns a more appropriate value, such as null, or throws an error indicating invalid input. This ensures that the function handles edge cases gracefully and prevents unexpected errors.