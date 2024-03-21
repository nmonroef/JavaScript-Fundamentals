/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/


let user = {};
user.name = "John";
user.surname = "Smith"
user.surname = "pete"
delete user.name
console.log(user);


/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


// sum the values in the object
 let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
 }


function sumIt(salaries) {
    let sum = 0;
    for (let key in salaries) {
     sum += salaries[key];
    
    }
    alert(sum);
}

/*Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
*/


menu = {
    width: 200,
    height: 300,
    title: "My Menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}

multiplyNumeric(menu);
