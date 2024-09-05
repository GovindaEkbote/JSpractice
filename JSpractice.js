// const arr = [1,2,3,4,5,6,7,8,9]
// const arr1 = [1,2,3,4,5,6,7,8,9]
// const newArr = arr.find((num) => num%2==0)
// console.log(newArr)

// const newFilter = arr.filter((num) => num%2==0)
// console.log(newFilter)

// console.log(arr.indexOf(5))
// console.log(arr.slice(0,5));
 
// console.log(arr.push(55))
// console.log(arr.concat(arr1))
// console.log(arr.pop())
// console.log(arr.shift())

// console.log(arr.reverse())
// console.log(arr.sort())
// console.log(arr.length)
// console.log(arr.join(arr1))

// const person = {};
// person.name="Govinda";
// person.age = 30

// person.age = 25
// console.log(person.age)

// delete person.age
// console.log(person.age)

// hoisting();
// function hoisting()
// {
//     console.log("Hoisting")
// }

// a = 5
// console.log(a)
// var a;

// try {
//     let result = sum+10
//     console.log(result)
// } catch (error) {
//     console.log("Sum is not defined")
// }

// let asd= null
// asd = "Govinda"
// console.log(asd)

// let co1 = 10;  // Number
// let co2 = "10" // String 
// let z = co1+co2
// console.log(z)  // String 
// console.log(typeof(z))


// console.log(...arr)

// function restOp(first,second,...rest)
// {
//     console.log(first)
//     console.log(second)
//     console.log(rest)
// }
// restOp(1,2,3,4,5,6,7,8,9)


// const modify = [1,2,3]
// const mp = modify.map((num) => num*2)
// console.log(modify)
// console.log(mp)

// modify.forEach((num) => 
//  {
//     console.log( num*2)
//  })

// const arrDest = [11,12,13,14,15]
// const[first,second,third,forth,fifth] = arrDest
// console.log(first)
// console.log(second)
// console.log(forth)
// console.log(fifth)
// console.log(third)


// console.log("------------")
// function sum(x,y)
// {
//     return x+y;
// }
// const x=1,y=2;
// console.log(sum(x,y));

// function display(x,y,operation)
// {
//     var result = operation(x,y);
//     console.log(result)
// }
// display(10,12,sum)

// console.log("------------")

// function pure(x,y)
// {
//     console.log(x+y);
// }
// pure(5,5);
// pure(5,5);
// pure(5,5);

// console.log("------------")

// var result = 0;
// function impure(value)
// {
//    return result += value;
// }
// console.log(impure(5))
// console.log(impure(5))
// console.log(impure(5))

// var string = `Govinda
// Balaji
// Ekbote`
// console.log(string)

// var name = "Govinda"
// var lname = "Ekbote"
// var fullNmae = `${name} ${lname}`
// console.log(fullNmae)


// const p2 = {
//     name : 'Govinda',
//     location : {
//         city:"Solapur",
//         country:"India"
//     }
// }
// const shallowCopy = Object.assign({},p2)

// shallowCopy.location.city = "Pune";
// console.log(shallowCopy.location.city)
// console.log(p2.location.city)

// const deepCopy = JSON.parse(JSON.stringify(p2))
// deepCopy.location.city = "Solapur";
// console.log(deepCopy.location.city)
// console.log(p2.location.city)

// // console.log("------------")
// // console.log("Start")
// // setTimeout(function(){
// //     console.log("Running 1")
// // },1000)
// // console.log("End")

// // console.log("------------")
// // console.log("Start")
// // setInterval(function(){
// //     console.log("Running")
// // },1000)
// // console.log("End")


// console.log("------------")
// function dealy(ms)
// {
//     return new Promise ((resolve)=>
//     setTimeout(()=>{
//         console.log("Running...")
//         resolve();
//     },ms)
//     );
// }
// async function dis(){
//     console.log("Start")
//     dealy(2000)
//     console.log("Blocked");
//     await dealy(1000)
//     console.log("Not Blocked")
// }
// dis();


// const fs = require("fs")
// fs.readFile('./simple.txt','utf-8',(err,data) =>{
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })

const p1 = {
    name : "Govinda",
    loca :{
        city:"Solapur"
    }
}

const shallowCopy = JSON.parse(JSON.stringify(p1))
shallowCopy.loca.city = "Pune"

console.log(shallowCopy.loca.city)
console.log(p1.loca.city)


console.log("start")

setInterval(()=>{
    console.log("Runn")
},1000)