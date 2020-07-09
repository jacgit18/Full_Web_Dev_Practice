console.log('Hello');
// javascroptt jas 3 ways to make
// a vairiable const, let, and var
// var is the orignal then const and
// let came out let isnt really used
// in mobile browsers may change

// The var statement declares is scoped to current
// execution context meaning there scoped to there
// enclosing function like if you had a function with a 
// fot loop containing var it would scoped to the function 
// not just the for loop block but is limited to function
// otherwise it,s global. it can be reasign whenever 
// and intialized with or without value and can be 
// redeclared at any point

// var redeclare this cant be done with others
var x = 1;
var x = "bdbnd3";


let age = 22; 
// if age wasnt equal to anything it would be consisdered
// undifined because nothing would be intiallized 
// if value was null then the variable value is
//  explicitly clear  

// let allows you to declare variables that are limited 
// to the scope of a block statement like a for loop or 
// if statement if you try to print let i outside the 
// scope it will be undefined same for const,
//  unlike var , which defines a variable globally, 
// or locally to an entire function regardless of 
// block scope. let also can be reassigned but cannot
// be redeclared in the same scope


console.log(age);

const birthday = '01/16/2020'; 
// birthday = '01/16/2019'; // wont change
// fixed value vairiable like final datatype varname 
// in java also const isnt immutable(unchanging over time)
// but the variable references cannot be change in memory
// and must be initialized with a value. besides that it is 
// blocked scoped, isnt global, and cannot be redeclared
// in same scope like let also let and const arent in the 
// window object
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