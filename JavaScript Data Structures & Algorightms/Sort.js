class myshoplist{
    constructor(){
       
    }
        saylist() {
            let mixedCaseAnimals = [
                'Cat', 'dog', 'Elephant', 'bee', 'ant'
            ];
            
            mixedCaseAnimals.sort(function (a, b) {
                let x = a.toUpperCase(),
                    y = b.toUpperCase();
                return x == y ? 0 : x > y ? 1 : -1;
                // JavaScript ternary operator '?' means boolean true : false
            });
            
            console.log(mixedCaseAnimals);
            
            
            let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];
            
            rivers.sort(function (a, b) {
                console.log(a, b);
                return a.length - b.length;
            });
            
            
            console.log(rivers);
            
            
            console.log(`this is my first param ${this.mystuff}  and second param ${this.myk}`);
        }
    
    }
    
    //const mycon = new myshoplist(["hell","no" ], 3);
    //console.log(mycon);
    //inheritance
    
    class myshoplist2 extends myshoplist{
        constructor(){
            super (mystuff, myk); // bind things from other class
         
        }
        
    }
    const mycon2 = new myshoplist2();
    console.log(mycon2);
    mycon2.saylist();

    let isCorrect = false;

    isCorrect ? console.log('Correct!') : console.log('Incorrect!');
        





let myray = ['r', 'a', 'n', 'd' ];
console.log(myray);

console.log(myray.reverse()); // only available for arrays

function revString1(str){
    let strArr = str.split(""); // turn string to an array 
    let revStrArr = strArr.reverse(); // reverse that array
    let revStringer = revStrArr.join(""); // turns back to string
    console.log(revStrArr);
}


function revString2(str){
    
    return str.split("").reverse().join("");
}

// try building logic of available javascript methods
function revString3(str){
    let final = "";
    for (let i =str.length - 1; i >= 0; i--){
        final += str[i];
    }
    return final;


}


console.log(revString3("hell"));

console.log("hell");



