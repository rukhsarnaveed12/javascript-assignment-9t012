//if statement//

var check-odd-even(number);
if number%2 === 0;{
console.log("{number} is even");
}else{
    console.log("{number} is odd");
}

let assign-grade(score);
if score>=90;
return "A"
if score>=80;
return "B"
if score>=70;
return "C"
if score>=60;
return "D"
else:
return"f
let score=prompt(Enter the score 0-100);
if 0<=score <=100;
grade=assign-grade(score);
console.log("the grade is :{grade}");
else{
    console.log("score must be btween 0 and 100");
}

const user=prompt ("Enter a year");
if (user%4==0){
    console.log("this is a leap year");
}elseif(user%400===0){
    console.log("this is a leap year");
}else{
    console.log("this is not a leap year")
}

const num1 =prompt("Enter the first number: ");
const num2 =prompt("Enter the second number: ");
const num3 =prompt("Enter the third number: ");
let find-largest(num1,num2,num3);
if(num1>=num2 and num1>=num3) return num1;
elseif(num2>=num1 and num2>=num3) return num2;
else{
    return num3
    largest=find-largest(num1,num2,num3)
    console.log("the largest number is:{largesr}")
}

let calculate=final-price(original-price);
if original-price<50;
discount=0;
elif 50<=originalprice<=100;
discount=0.10;
else{
    discount0.20
}
final-price=original-price*(1-discount) ;
return final-price
let originalprice =prompt("Enter the original price of the item:$");
if original-price <0;
console.log("price cannot be negative");
else:
console.log("the final price after discount is:$"{final price 2});

//function//

function add(num1,num2){
console.log("num1+num2");
}
add(4,5)

function celsius to fahrenheit(celsius){
console.log("this is a celsius formula");
return celsius *9/5+32
}
celsius to fahrenheit()

function primeNumber(n){
    if n<=1:
    return false
    if n % 1==0
    return false
    return true
}
primeNumber()

function reverse string(s){
return s[-1]
}
reverse string ()

function factorial (n){
    if n == 0 or n==1:
    return 1
}else{
    return n*factorial(n-1)
}
factorial()

function user(){
    console.log("hello world")
}
user()

function greet(name){
    console.log("hello, {name}")
}
greet(name)


function add(num1,num2){
console.log("num1+num2");
return num1+num2
}
add(9,6)


function generate random number(){
console.log("0,100");
return random(0,100)
}
generate random number(0,100)

function eligible to vote(age){
console.log("this is age");
return age>=18
}
eligible to vote(13)

//arrow function//

const square=(num)=>num*num;
console.log(square(5));

const getEvenNumbers=(arr)=>arr.filter(num=>num%2 ==0);
const numbers=[1,2,3,4,5,6];
const evennumbers=getEvenNumbers(numbers);
conole.log(evennumbers);

const divide=(a,b)=>a/b;
console.log(divide(10/2));

const findMax=(arr)=>Math.max(...arr);
const numbers=[1,5,3,9,2];
const maxValue=findMax(numbers);
conole.log(maxValue);

const sumNumbers=(arr)=>acc+num,0;
const numbers=[1,2,3,4,5];
const totalSum=sumNumbers(numbers);
conole.log(totalSum);

const greet=()=>console.log("Hello world");
greet();

const square=(num)=>num*num;
console.log(square(4));

const isPositive=(num)=>num>0;
console.log(isPositive(5));

const randomNumber=(n)=>1and50;
console.log(randomNumber());

const minutesToseconds=(minutes)=>minutes*60;
console.log(minutesToseconds(5));

//Annoymous function//

(function (){
    conole.log("Hello");
})();

const sum=function(num1,num2){
    return num1 +num2;
};
console.log(sum(3,5));

 const numbers=[5,3,8,1,2] numbers.sort (function(a,b){
    return a-b;
});
console.log(number);

(function (name){
    conole.log("Hello,${name}");
})(ali);

const checkEvenOrOdd=function(num){
    if(num%2===0){
        console.log("${num} is odd");
    }
};
checkEvenOrOdd(7);
checkEvenOrOdd(10);
checkEvenOrOdd(4);

const numbers=[1,2,3,4,5,6,7,8,9];
const oddNumbers=numbers.filter(function(num){
    return num%2==0;
})
conole.log(oddNumbers;)

const factorail=function(num){
if(num===0 or num===1)
return 1;
return num*factorail(num-1);
};
console.log(factorail(5));
console.log(factorail(0));

const numbers=[1,2,3,4,5];
const totalSum=numbers.reduce(function(num1,num2){
    return num1+num2;
},0);
console.log(totalSum);

(function?(age){
    if (age>=18){
        console.log("age %{age} eligible to vote");
    }else{
        console.log("age %{age}  not eligible to vote")
    }
})(20);
