function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error: throw new Error('Invalid input: null or undefined values provided.');
  }
  return a + b; 
}