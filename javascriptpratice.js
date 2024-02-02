// variables

let a="hello";
console.log(typeof a);
let b=8;
console.log(typeof b);
a=true;
console.log(true);
a=b+89;
console.log(a);
a=4;
console.log(a==4);
let ans=a==4;
console.log(ans);
console.log("boolean: ",true+true);
console.log("boolean: "+true+true);

// strings and methods
let str="helloworld";
console.log(typeof(str));
//length
console.log(str.length);
console.log("hello world".length);
//string methods 
a="helloworld";
console.log("First character: ",a.charAt(0));
console.log("last character: ",a.charAt(a.length-1));

console.log("index of l: ",a.indexOf("l"));
console.log("index of llo: ",a.indexOf("llo"));

console.log("lost index of: ",a.lastIndexOf("l"))
console.log("last index of o: ",a.lastIndexOf("o"));

console.log("slice  method of first 4 characters:",a.slice(0,4));
console.log("slice method of last 4 characters: ",a.slice(6,a.length));

console.log("Upper case: ",a.toUpperCase());
console.log("Lower case: ",a.toLowerCase());

console.log("includes method :",a.includes("world"));
console.log("includes method :",a.includes("asus"));

console.log("split method : ",a.split(" "));
console.log("split method: ",a.split('l'))
console.log("split method :",a.split(""));
a='hello      ';
console.log("trim method :", a.trim());
//numbers

let num=87;
let floatnum=87.0;
console.log("numbers: ",num===floatnum);
floatnum=87.02;
console.log("numbers: (",floatnum,"===",num,") ",num===floatnum);
//string to numbers
let mynum="55";//string type
console.log("mynum adding 2 value before changing to number: ",mynum+2);
console.log("after changing it to number(): ",Number(mynum)+2);
console.log(Number("hello"));//output=> NAN(not a number)
console.log("true value :"+Number(true)+" "+"False value :"+Number(false))
// numbers methods
console.log("..number methods..")
console.log(Number.isInteger(345));//true
console.log(Number.isInteger("helloworld"));//false
//parse
num="123hello";
console.log("Number",Number.parseInt(num));
num=123.34454
console.log("number :",Number.parseInt(num));
floatnum="87.23023slkmld";
console.log("Float number",Number.parseFloat(floatnum));
console.log("number fixed for digits after point",Number.parseFloat(floatnum).toFixed(2));//it return s string number;
num=20;
console.log(num.toString()+" checking the type of string: "+typeof num.toString());
//chaining
console.log(Number.parseInt(floatnum).toFixed(2).toString());//continues usage of function is called chaining
// Number.isNaN(),isNaN
console.log("Number.isNaN in number ",Number.isNaN(23));
console.log("Number.isNan in string ",Number.isNaN("hello"));
console.log("is NaN in number "+isNaN(3));
console.log("is NaN in string "+isNaN("hello"));
// Math*
num=4.3;
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(num));
num=4.1;
console.log(Math.ceil(num));//5
num=4.9
console.log(Math.floor(num));//4

console.log("min value :",Math.min(2,3,4,5,5,6,3,7,8,9));
console.log("max value :",Math.max(1,2,3,4,5,5,6,7,8,9));

//random
console.log(Math.random());//generates random num in 0-1
console.log(Math.round(Math.random()*10));//generates random num in 0-10


//challenge 1:random letters printing in a string
str="helloworld";
let rand=Math.floor(Math.random()*str.length);
console.log(str.charAt(rand)+" position:",rand+1);
// conditional 
num=10;
if(num<10){
    console.log("number is lesser than ten")
}
else{
    console.log("number is greater than ten ");
}
num="10";
if(num===10){
    console.loh("num is pure integer");
}
else{
    console.log("num is not a pure number");
}
//switch case

num=5;
switch(num){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log('2');
        break;    
    case 5:
        console.log("5");
        break;
    default:
       console.log("no values are presented")
    }

    //ternary operation
    let mark=97;
    let grade= mark>=90? "A grade": mark>79 ? "B grade" : mark >59 ? "C grade":"d grade";
    console.log(grade);
    //prompt and inputs

    // a=alert("hello");
    // console.log("alert data type:"+a);
    // a=confirm("hello");
    // console.log("confirm data type"+a);
    // a=prompt("hello");
    // console.log('prompt data types',a);
    //loops

    //while
    num=1;
    while(num<=5){
        console.log(num);
   num++;
    }
    //do while
    num=3;
    do{
  console.log(num);
  num++;
    }
    while(num<3);
    // for loop
    for( num=0;num<3;num++){
     console.log(num);
    }
    //for in loop
    arraynew=["h",'e','l','l','o'];
   for(num in arraynew){
     console.log('for in loop ex: ',arraynew[num]);//num is index value
   }
   //for of loop
   for(num of arraynew){
  console.log("for of loop Ex ",num);//num is object/data 
   }
   //for each loop
arraynew.forEach(func);
function func(item){
    console.log("for each :",item);
}

   //break;
    for(num=0;num<10;num++){
        if(num===3)
        break;
    }
    //continue
    for(num=0;num<5;num++){
        if(num===3)
        continue;
    }
// functions
function sum(num1,num2){
    console.log(num1+" "+num2);
   return num1+num2;
}
console.log(sum(10,23));
const mul=(num1,num2)=>{
    console.log(num1+" "+num2);
   return num1*num2;
}
console.log(mul(12,23));
//scopes

//global
// used at any where in the code
var a1=1;
let b1=2;
const c1=3;

function fun(){
    //local scope inside function
    var a1=3;
    console.log("function local scope: ",a1);
    console.log("function local scope: ",b1);
    console.log("function local scope: ",c1);

    if(true){
        let b1=3;
        //block scope only used inside the block
        console.log("block scope: ",a1);
        console.log("block scope: ",b1);
        console.log("block scope: ",c1);
    }
}
fun();
console.log("outside: ",a1);
console.log("outside: ",b1);
console.log("outside: ",c1);

//array

const array=[]
array[0]="hello";
array[1]="world";
array[2]="87878";
array[3]=true;
//pop
array.pop()
console.log(array);
//push
array.push(true);
console.log(array);
//shift
array.shift();
console.log(array);
//unshift
array.unshift("value1");
console.log(array)
//using splice delete a particular 
array.splice(2,1);
console.log(array)
//adding values using splice
array.splice(2,0,"splice");
console.log(array)
//replacing a value using splice
array.splice(2,1,"replaced value");
console.log(array);
//copy an array

  const newarray2=array.slice(0);
  console.log("copy array :",newarray2);
//concat array

//creating new array
const array1=[1,2,3,4,5];
console.log(array1);
//using concat method to join an array
// 1 st way to concat a array
const newarray1=[].concat(array,array1);
console.log(newarray1);
//spread area
// 2nd way to concat a array
const newarray=[...array,...array1];
console.log(newarray);

//array dimensions

// 1st dimension
const a11=[1,2,3,4];
console.log(a11[1]);//1st dimension

// 2nd dimension
const a2=[5,6,7,8];
const aa=[a11,a2];//
console.log(aa[0][1]);

//object
const object={
    cars:3,
    nissan:"gtr",
    ford:["mustang","gt","ecosport"],
    toyota:function(){
        return "supra"
    }
}
console.log(object.cars);
console.log(object.ford[0]);
console.log(object.toyota);
const newnissan=Object.create(object);
newnissan.nissan="gtr-r34";
console.log(newnissan);
// cloning object
console.log("obj cloning")
const clone={...object};
console.log(clone);
const clone1=Object.assign({},object);
console.log(clone1);

//delete a object
delete object.cars;
console.log(object);
 const object1={
    car:2,
    bike:10,
    train:20,
    bus:23,
};
//destructuring objects

// 1st way
const {bike:k,train:t}=object1;
console.log("number of bikes in K var and train in t var:",k,",",t);
// 2nd way
let {car,bike,train,bus}=object1;
console.log(car," ",bike," ",train," ",bus)

function fu({car}){//it takes only car key in the object using {}-destructing object concept
    return car;
}
console.log(fu(object1))//calling total object
//class 
class sample{

    constructor(val1,val2){
         this.val1=val1;
         this.val2=val2;
    }
    printmethod(){
        console.log("value1 :",this.val1)
        console.log("value2 :",this.val2);
    }
    adding(){
        console.log(this.val1+this.val2);
    }
    sub(number1,number2){
        return number1-number2;
    }
}
 obj=new sample(3,5);
 obj.printmethod();
 obj.adding();
 console.log(obj.sub(10,5));
//inheritance
class A{
   constructor(){
    this.number1=10;
    this.number2=20;
   }
    sum(val1,val2){
        console.log("sum :",val1 + val2);
    }
}
class B extends A{
    sub(val1,val2){
        console.log("subtraction",Math.abs(val1-val2));
    }
    div(){
        console.log("Divide :",this.number2/this.number1);
    }
}
B=new B();
B.sub(2,4);
B.sum(10,10);
B.div();
//private ,public variables
class C{
    #A=5;//private value
    B=2;//public value    
}
C=new C();
console.log(C.A);//undefined
console.log(C.B);//2

// *JSON
const myobj={
    key1:"value1",
    key2:["val1","val2","val3"],
    func: function(){
        return console.log("function called");
    }
}
console.log(myobj)// out as a object type
const sendjson=JSON.stringify(myobj);
console.log(sendjson);//output as a string and json not taken a function
//string to object
const objmy=JSON.parse(sendjson);
console.log(objmy);
//error handling

try{
    const a=8;
    a=90; throw error("custom error in throw");
}
catch(err){
  console.log(err);
  console.log("cathch block custom error");

}
finally{
    console.log("finally");
}
// API

//session storage
const myobject={
    name:"hello",
    skills:["ll","ss","aa"],
    fun: ()=>{
        console.log("function called");
    }
}
//session storage
sessionStorage.setItem("sessionvar",JSON.stringify(myobject));
const getsessiondata=JSON.parse(sessionStorage.getItem("sessionvar"));
console.log(getsessiondata);
//localstorage
// localStorageStorage.setItem("sessionvar",JSON.stringify(myobject));
// const getsessiondata1=JSON.parse(sessionStorage.getItem("sessionvar"));
// console.log(getsessiondata1);

// find occurance
console.log("finding occ");
const occ=[
    {
        name:"hello"
    },
    {
        name:"world"
    },
    {
        name:"hello"
    },
]
let count=1;
for(let i=0;i<occ.length;i++){
    count=1;
    for(let j=i+1;j<occ.length;j++){
    if(occ[i].name==occ[j].name){
         count++;
    }
}
console.log(occ[i].name+":"+count);
}

//asynchoronous 

// console.log("one");
// setTimeout(() => {
//     console.log("two");
// }, 1);
// console.log("three");
//promise
//1.pending 2.fulfilled 3.rejected
const promise=new Promise ((Resolve,Reject)=>{
    const err=false;
if(!err){
    Resolve("not a error");
}
else{
    Reject("error")
}
})

promise.then(()=>{
 console.log("promise resolved");   
}).catch(()=>{
    console.log("error promise not resolved");
})
// Fetch
const data=fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
    return response.json();
}).then(res=>{
    console.log(res);
})
//async ,await

const user =async()=>{
    const userdata=await fetch("https://jsonplaceholder.typicode.com/users")
    console.log("asunc,await");
    const userdatas=await userdata.json();
    console.log(userdatas);
}
user();