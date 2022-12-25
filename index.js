// Question -- 1

// function func(sum) {
//     console.log(`Sum of two number is ${sum}`)
// }

// function callBackfn(a, b) {
//     return a + b
// }

// func(callBackfn(2, 5))

// Question -- 2
// function callBack(){
//     let num = 0;

//     setTimeout(() => {
//         num++
//         console.log(num);
//         setTimeout(() => {
//             num++
//             console.log(num);
//             setTimeout(() => {
//                 num++
//                 console.log(num);
//                 setTimeout(() => {
//                     num++
//                     console.log(num);
//                     setTimeout(() => {
//                         num++
//                         console.log(num);
//                         setTimeout(() => {
//                             num++
//                             console.log(num);
//                             setTimeout(() => {
//                                 num++
//                                 console.log(num);
//                             }, 7000);
//                         }, 6000);
//                     }, 5000);
//                 }, 4000);

//             }, 3000);
//         }, 2000);
//     }, 1000);
// }

// callBack();

// Question --3

// let promise = new Promise((resolve, reject)=>{
//     let num = 0
//     resolve(num);

// })

// promise
//     .then((res)=>{
//         setTimeout(() => {
//             res++;
//             console.log(res);
//         }, 1000);

//         setTimeout(() => {
//             res++;
//             console.log(res);
//         }, 2000);

//         setTimeout(() => {
//             res++;
//             console.log(res);
//         }, 3000);

//         setTimeout(() => {
//              res++;
//              console.log(res);
//         }, 4000);

//         setTimeout(() => {
//               res++
//               console.log(res);
//         }, 5000);

//         setTimeout(() => {
//             res++;
//             console.log(res);
//         }, 6000);

//         setTimeout(() => {
//         res++;
//         console.log(res);
//         }, 7000);
//     })

// Question -- 4

// let promise = new Promise((resolve, reject) =>{
//     let a = 20;

//     if(a === 20){
//         resolve("Promise Resolved")
//     }
//     else{
//         reject("Promise Rejected")
//     }
// })

// promise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })

// Question -- 5

// function first(fName){
//     console.log(`My name is ${fName}`)
// }

// function callBack(x){
//     return x
// }
// first(callBack("Faizan"))

// Question -- 6

// function callBack(){
//     setTimeout(() => {
//         console.log("I am from first call");
//         setTimeout(() => {
//             console.log("I am from second nested");
//             setTimeout(() => {
//                 console.log("I am from third nested")
//                 setTimeout(() => {
//                     console.log("I am from fourth nested")
//                 }, 4000);
//             }, 3000);
//         }, 2000);
//     }, 1000);
// }
// callBack()

// Question -- 7

// function promise(){
//     return new Promise((resolve, reject)=>{

//         resolve("I am Resolving a problem");
//         reject("I am rejecting a problem")
//     })
// }

// promise()
//     .then((res)=>{
//         console.log(res);;
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// Question -- 8
async function func() {
    let promise = new Promise(function (resolve, reject) {
        resolve("I am inside async await function");
    });
    let result = await promise;
    console.log(result);
}
func()