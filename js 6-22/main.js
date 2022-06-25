// Define a method hello that returns "Hello,Name!" to a given name, or says Hello, World! if name is not given(or passed as an empty String)

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter(Xxxxx).Xxxxx

function hello(name){
  if (name){ 
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else { 
    return "Hello, World!"; } 
  }

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct Number.
// The numbering starts a 1. The format is n:String. Notice the colon and space in between.

// example:(Input --> Output)

// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}