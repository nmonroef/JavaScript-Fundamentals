/*
Rewrite it, to perform the same, but without if,
 in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||


*/
function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
    return(age > 18) || confirm("Did parents allow you");
}


//Write a function min(a,b) which returns the least of two numbers a and b.

function minNumber(a,b) {
    return Math.min(a,b);
}

//Replace Function Expressions with arrow functions in the code below:

/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You canceled the execution")
);

