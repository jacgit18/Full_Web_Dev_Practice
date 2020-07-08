console.log('Hello');
//var
// The var statement declares a 
// function-scoped or globally-scoped variable, 
// optionally initializing it to a value.

// Comment out crtl + k + c

let age = 22; // javascript vairiable
// if age wasnt equal to anything it would be consisdered
// undifined because nothing would be intiallized 
// if value was null then it would explicitly clear the 
// variable value

// let allows you to declare variables that are limited 
// to the scope of a block statement, or expression on
// which it is used, unlike the var keyword, which 
// defines a variable globally, or locally to an 
// entire function regardless of block scope. 
// The other difference between var and let is
// that the latter is initialized to a value
// only when a parser evaluates it (see below).

// Just like const the let does not create properties 
// of the window object when declared
// globally (in the top-most scope).

console.log(age);

const birthday = '01/16/2020'; 
//birthday = '01/16/2019'; // wont change
// fixed value vairiable like final datatype varname in java
console.log(birthday);

let ary = [];
ary =['1','2','3','5','7','4','6'];
console.log(ary);
console.log(ary[1] + ary[6]); // doesnt add right datatype
// issue
console.log(ary.sort());
console.log(ary.push(10));
console.log(ary.sort());

ary =['1','2','3','five',7,4,6];
console.log(ary.sort());
console.log(ary.push(10));
console.log(ary.sort());


// Create object 
let my_pen_obj={
    type:'ballpoint',
    color:'red',
    cost:1.34
};

console.log(my_pen_obj.color);

let new_student={
    age:45,
    race:'White',
    school:'john jay',
    subjects_required:['math','reading','bio']
};

console.log(new_student.subjects_required[1]);


function hellno(){
    console.log(new_student.subjects_required[2]);

}
hellno();

function product(a,b){
    return a*b;
}
console.log(product(12,4));
// or
let x = product(432,2);
console.log(x);

let newray=[];
newray=['1','2','1','2','3','2','3','1'];

if(newray[0]==newray[2] || newray[2]==newray[6]){
    console.log('Correct');
}else{
    console.log('Wrong');

}

let i=0;
 while(i<5){
   console.log("number is " + i);
   i++;
 }

// or

// do{
//     console.log("number is " + i)
//     i++;

// }
// while(i>5);

console.log("For loop ");

for(let i =0;i<5;i++) {
    console.log("number is " + i);

}

for(i=0;i<50;i++) {
    console.log("im sorry " + i);

}

let games='baseball';
switch(games) {
    case "football":
    console.log("I hate football");
    break;
    case "baseball":
    console.log("I hate baseball");
    break;
    case "basketball":
    console.log("I hate basketball");
    break;
    default:
    console.log("I like other things");
    break;

}