export default [
  {
    method: "charAt",
    description:
    "charAt( index ) => takes an index and returns the character at that index.",
    type: "string"
  },
  {
    method: "charCodeAt",
    description:
      "charCodeAt( index ) => takes an index and returns the Unicode of the character at that index.",
    type: "string"
  },
  {
    method: "concat",
    description:
      "str1.concat( str2, str3 ) => merges any number of string values and returns the result.",
    type: "string"
  },
  {
    method: "endsWith",
    description:
      "str.endsWith( 'hello' ) => takes a string value andreturns true if the string ends with the given argument and false if not.",
    type: "string"
  },
  {
    method: "fromCharCode",
    description:
      "String.fromCharCode( 50 ) => takes a numeric value and converts it to Unicode.",
    type: "string"
  },
  {
    method: "includes",
    description:
      "str1.includes( 'hello' ) => takes a string value and returns true if it is present in the parent string and false if not.",
    type: "string"
  },
  {
    method: "indexOf",
    description:
      "str1.indexOf( 'hello' ) => takes a string value and returns its index, if the given string is not present the method returns -1.",
    type: "string"
  },
  {
    method: "lastIndexOf",
    description:
      "str1.lastIndexOf( 'hello' ) => takes a string and returns the index of its last occurance in the parent string. Returns -1 if the string is not found.",
    type: "string"
  },
  {
    method: "localeCompare",
    description:
      "str1.localeCompare( 'hello' ) => takes a string and returns a comparision of the two strings, in the browsers locale. It will return 1 if the given string is greater in the sort order, 0 if the strings are equal and -1 if the string is lesser in the sort order.",
    type: "string"
  },
  {
    method: "match",
    description:
      "str1.match( /regex/ gi) => takes a regular expression and returns any matches made within the string.",
    type: "string"
  },
  {
    method: "repeat",
    description:
      "str1.repeat( 2 ) => takes a number and returns the parent string repeated ( number ) => of times.",
    type: "string"
  },
  {
    method: "replace",
    description:
      "str1.replace( 'replace this', 'with this' ) => replaces occurances of the first argument with the second argument then returns the result as a new string.",
    type: "string"
  },
  {
    method: "search",
    description:
      "str1.search( str2 ) => takes a string and returns its index within the parent string. Returns -1 if the given string doesnt match its parent.",
    type: "string"
  },
  {
    method: "slice",
    description:
      "str1.slice( 0, 5 ) => takes in 2 index values (start and finish) and returns all the characters between those indicies.",
    type: "string"
  },
  {
    method: "split",
    description:
      "str1.split( separator ) => takes a separator and then returns an array of substrings.",
    type: "string"
  },
  {
    method: "startsWith",
    description:
      "str1.startsWith( 'hello' ) => takes a string and returns true if the parent string starts with the given string and false if it does not.",
    type: "string"
  },
  {
    method: "substr",
    description:
      "str1.substr( index, duration ) => takes an index and a duration and then returns a string which starts at the index and includes (duration) number of characters after that. ",
    type: "string"
  },
  {
    method: "substring",
    description:
      "str1.substring( startIndex, endIndex ) => takes in 2 index values (start and finish) and returns all the characters between those indicies.",
    type: "string"
  },
  {
    method: "toLocaleLowerCase",
    description:
      "str1.toLocaleLowerCase( 'HELLO' ) => takes in a string and returns that string in all lowercase, based on browsers locale.",
    type: "string"
  },
  {
    method: "toLocaleUpperCase",
    description:
      "str1.toLocaleLowerCase( 'hello' ) => takes in a string and returns that string in all uppercase, based on browsers locale.",
    type: "string"
  },
  {
    method: "toLowerCase",
    description:
      "str1.toLowerCase( 'HELLO' ) => takes in a string and returns that string in all lowercase.",
    type: "string"
  },
  {
    method: "toUpperCase",
    description:
      "str1.toUpperCase( 'hello' ) => takes in a string and returns that string in all uppercase.",
    type: "string"
  },
  {
    method: "toString",
    description:
      "str1.toString() takes in an argument and attempts to return the value converted to a string.",
    type: "string"
  },
  {
    method: "trim",
    description:
      "str1.trim() removes whitespace from the beginning and end of the string. Returns a new string.",
    type: "string"
  },
  {
    method: "valueOf",
    description: "str1.valueOf() returns the primitive value of the string.",
    type: "string"
  },
  {
    method: "concat",
    description:
      "array1.concat( item ) => takes a argument of any type and returns an array that is merged with the arguments.",
    type: "array"
  },
  {
    method: "copyWithin",
    description:
      "array1.copyWithin( targetIndex, startIndex, endIndex ) => takes 3 indicies and returns a new array. The first is the position in the array that you want to copy to, the second is the start index to copy from and the 3rd is the index to end the copying on.",
    type: "array"
  },
  {
    method: "entries",
    description:
      "array1.entries() returns an array iterator object eg [0, 'foo'] [1, 'bar'] etc.",
    type: "array"
  },
  {
    method: "every",
    description:
      "array1.every( () => condition) takes a callback function and returns true if every item in the array conforms to the callbacks condition or false if any of the items fail.",
    type: "array"
  },
  {
    method: "fill",
    description:
      "array1.fill( value, startIndex, endIndex ) => takes a value, start index and end index. Changes all entries between the start and end indicies, replacing them with the value. Mutates original array.",
    type: "array"
  },
  {
    method: "filter",
    description:
      "array1.filter( () => condition ) => takes a callback function. All items in the array with conform to the callbacks condition are returned in a new array.",
    type: "array"
  },
  {
    method: "find",
    description:
      "array1.find( () => condition ) => takes a callback function. Returns the first item in the array that passes the callbacks condition.",
    type: "array"
  },
  {
    method: "findIndex",
    description:
      "array1.findIndex( () => condition ) => takes a callback function. Returns the index of the first item in the array that passes the callbacks condition.",
    type: "array"
  },
  {
    method: "forEach",
    description:
      "array1.forEach( () => operation ) => takes a callback function. Performs the callbacks operation on each item in the array. Does not return any values.",
    type: "array"
  },
  {
    method: "from",
    description:
      "Array.from( '123456' ) => accepts any argument which either has a length property, or is iterable. Returns a new array from the argument.",
    type: "array"
  },
  {
    method: "includes",
    description:
      "array1.includes( 'hello' ) => takes a value and returns true if that value exists in the array and false if not.",
    type: "array"
  },
  {
    method: "indexOf",
    description:
      "array1.indexOf( 'hello' ) => takes a value and returns the values index. If the value does not exist in the array the method returns -1.",
    type: "array"
  },
  {
    method: "isArray",
    description:
      "Array.isArray( argument ) => returns true if the argument is an array and false if not.",
    type: "array"
  },
  {
    method: "join",
    description:
      "array1.join( separator ) => returns a string containing all the arrays elements joined by the 'separator'.",
    type: "array"
  },
  {
    method: "keys",
    description:
      "array1.keys() returns an array iterator object containing the keys of the array.",
    type: "array"
  },
  {
    method: "lastIndexOf",
    description:
      "array1.lastIndexOf( item ) => takes a string or variable and returns the index of its last occurance in the array. If the item does not exist within the array it returns -1.",
    type: "array"
  },
  {
    method: "map",
    description:
      "array1.map( () => operation ) => takes a callback function and performs that operation on all items in the array. Returns a new array.",
    type: "array"
  },
  {
    method: "pop",
    description:
      "array1.pop() removes the last element from the array and returns it. Mutates original array.",
    type: "array"
  },
  {
    method: "push",
    description:
      "array1.push( item ) => adds an item to the end of the array and returns the arrays length. Mutates original array.",
    type: "array"
  },
  {
    method: "reduce",
    description:
      "array1.reduce(( accumulator, currentValue ) => => { operation }, initialValue ) => takes a callback function and an initial value as arguments. Performs an operation on each item in the array and returns the accumulated results as a new array.",
    type: "array"
  },
  {
    method: "reduceRight",
    description:
      "array1.reduceRight(( accumulator, currentValue ) => => { operation }, initialValue ) => takes a callback function and an initial value as arguments. Performs an operation on each item in the array (from right to left) and returns the accumulated results as a new array.",
    type: "array"
  },
  {
    method: "reverse",
    description:
      "array1.reverse() reverses the order of the array. Mutates original array.",
    type: "array"
  },
  {
    method: "shift",
    description:
      "array1.shift() removes the first item from the array. Mutates original array.",
    type: "array"
  },
  {
    method: "slice",
    description:
      "array1.slice( startIndex, endIndex ) => takes start and end indicies and returns the elements inbetween those indicies.",
    type: "array"
  },
  {
    method: "some",
    description:
      "array1.some( item ) => takes a value and searches the array for that value. Returns true if it finds a match and false if there is no match.",
    type: "array"
  },
  {
    method: "sort",
    description:
      "array1.sort( ( firstItem, secondItem ) => => compare ) => takes a compare callback function. The compare function sorts by applying the comparision rule. Mutates original array.",
    type: "array"
  },
  {
    method: "splice",
    description:
      "array1.splice( index, numberOfItems, newItem, newItem.... ) => removes 'numberOfItems' from the array, starting at the index. Optionally replaces those items with new items. Mutates original array.",
    type: "array"
  },
  {
    method: "toString",
    description:
      "array1.toString() returns a string of comma separated values.",
    type: "array"
  },
  {
    method: "unshift",
    description:
      "array1.unshift( item ) => adds an item to the start of the array. Mutates original array.",
    type: "array"
  },
  {
    method: "valueOf",
    description:
      "array1.valueOf() returns the array.",
    type: "array"
  },
  {
    method: "isFinite",
    description:
      "Number.isFinite( value ) => takes a value and returns true if the value is a number and is finite. returns false otherwise.",
    type: "number"
  },
  {
    method: "isInteger",
    description:
      "Number.isInteger( value ) => takes a value and returns true if the value is a number and is an integer. returns false otherwise.",
    type: "number"
  },
  {
    method: "isNaN",
    description:
      "Number.isNaN( value ) => takes a value and returns true if the type of the value is a number and is also NaN. returns false otherwis.",
    type: "number"
  },
  {
    method: "isSafeInteger",
    description:
      "Number.isSafeInteger( value ) => takes a value and returns true if the value is a number and a safeInteger. returns false otherwise.",
    type: "number"
  },
  {
    method: "toExponential",
    description:
      "Number.toExponential( value ) => takes a number and converts it into an exponential number. The returned value is a string.",
    type: "number"
  },
  {
    method: "toFixed",
    description:
      "num.toFixed( number ) => takes a number and returns a string value which has the required number of decimal places.",
    type: "number"
  },
  {
    method: "toLocaleString",
    description:
      "num.toLocaleString( locale ) => returns the value as a string specific to the given locale.",
    type: "number"
  },
  {
    method: "toString",
    description:
      "num.toString() returns the number as a string.",
    type: "number"
  },
  {
    method: "toPrecision",
    description:
      "num.toPrecision( length ) => returns the numeber formatted to the specified length.",
    type: "number"
  },
];
