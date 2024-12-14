function foo(a, b) {
  if (a === null || b === null) {
    return null; // Correct handling of null values
  }
  return a + b; 
}