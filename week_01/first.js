// Write the program to greeta erson iven their first and last name
// const firstName="Sandeep"
// const secondName="Chakraborty"
// console.log(`Hello ${firstName} ${secondName}!`);
// Write a program that greets a person based on their gender 
// const gender="female"
// if(gender=="male") {
//     console.log("Hello Sir!");
// }
// else{
//     console.log("Hello Madam!");
// }
// write a program that counts from 0-100 and prints
//for(let i=0;i<=1000;i++){
  //  console.log(i);
//}
// write a code which prints all the even numbers in an array
// let arr=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }
// for (let i of arr){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// let as=[]
// for(let i=arr.length-1;i>=0;i--){
//    as.push(arr[i]);
// }
// console.log(as);
// function sum (num1,num2,fntoUse){
//     const sum=num1+num2;
//     fntoUse(sum)
// }
// function displayResult(data){
//   console.log("sum's result is "+data);
// }
// function displayResultPassive(data){
//     console.log("sum's result is "+data);
//   }
//  sum(2,3,displayResultPassive);
// function calculateArithmetic (a,b,func){
//   const ans=func(a,b)
//   console.log(ans);
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// // calculateArithmetic(1,2,add)
// function saysSoemthing(){
//     console.log("Hello");
// }
// setTimeout(saysSoemthing,1000)
/*
1. Create a counter in Javascript (counts down from 30 to 0)
2. Calculate the time it takes between a setTrmeout call and the inner function actually running
3. Create a terminal clock
*/
// //counter in JS
// let counter =30
// const interval=setInterval(()=>{
//   console.log(counter);
//   counter--;
//   if(counter<0){
//     clearInterval(interval)
//   }})

//time it takes between a setTimeout call and the inner function actually running
// setTimeout(()=>{
//   function saysSoemthing(){
//     console.log("Hello");
//   }
// },2000)
 //make a full fleged terminal clock
// let time=new Date();
// let hours=time.getHours();
// let minutes=time.getMinutes();
// let seconds=time.getSeconds();

// function clock(){
//   setInterval(()=>{

//   console.log(`${hours}:${minutes}:${seconds}`);
//   seconds++
//   if(seconds==60){
//     minutes++;
//     seconds=0;
//   }
//   if(minutes==60){
//     hours++;
//     minutes=0;
//   }
//   if(hours==12){
//     hours=1;
//   }
// },1000)
// }
// clock();
// class Animal{
//   constructor (name,legCount,speaks){
//     this.name=name;
//     this.legCount=legCount;
//     this.speaks=speaks;
//   }
//   static speak(){
//     console.log("I am an animal "+ this.speaks);
//   }
// }
// let dog=new Animal("dog",2,"meowww");
// console.log(dog.speaks);
// const currentDate=new Date()
// console.log(currentDate);
// console.log("date: ",currentDate.getDate());
// console.log("month: ",currentDate.getMonth()+1);//Mon ths are always zero indexed so we had to add a one  
// console.log("year: ",currentDate.getFullYear());
// console.log("hours: ",currentDate.getHours());
// console.log("minutes: ",currentDate.getMinutes());
// console.log("seconds: ",currentDate.getSeconds());
// console.log("Time in milliseconds since 1970:", currentDate.getTime());

// const users = {
//   name: "Sandeep",
//   age: 26,
//   address: {
//     city: "Kolkata",
//     state: "West Bengal",
//     country: "India",a
//   },
// };
// const final=JSON.stringify(users);
// console.log(typeof(final));
// const parsed=JSON.parse(final);
// console.log(parsed);
// function sas (item, index) {
//    console.log(`The item at index ${index} is ${item}`);
//  }u
// const final=JSON.stringify(users);
// console.log(typeof(final));
// const parsed=JSON.parse(final);
// console.log(parsed);
// function sas (item, index) {
//    console.log(`The item at index ${index} is ${item}`);
//  }u
// const arr=[1,2,3,4,5,6,7,8,9,10];
//  arr.forEach(sas);
// let a=0;
// for (let index = 0; index < 1000000000; index++) {
//   a=a+1;
  
// }
// console.log(a);
function sasa(fn){
  settimeout(function(){
    fn("hi from settimneout")
  },3000)
}
function sandsasyncfunc(){
  let p=new Promise(sasa)
  return p;
}

async function main(){
  sandsasyncfunc.then(function(val){
    console.log("value");
  })
}
