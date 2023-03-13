// function hello() {
//     console.log('hello');
// }
// hello(); // hello
// console.log('Dojo'); // Dojo

// function hello() {
//     console.log('hello');
//     return 15; // 15
// }
// var result = hello();
// console.log('result is', result); // result is 15

// function numPlus(num) {
//     console.log('num is', num); 
//     return num+15; 
// }
// var result = numPlus(3);
// console.log('result is', result); //result is 3


// var num = 15;
// console.log(num); // 15
// function logAndReturn(num){
//    console.log(num);   
//    return num; //15
// }
// var result = logAndReturn(10);
// console.log(result); // 10
// console.log(num); // 15


// var num = 15;
// console.log(num);
// function timesTwo(num){
//    console.log(num);   
//    return num*2; // 30
// }
// var result = timesTwo(10);
// console.log(result);
// console.log(num); //


// function timesTwoAgain(num) {
//     console.log('num is', num);
//     y = num*2; 
//     return y; //20
// }
// var result = timesTwoAgain(3) + timesTwoAgain(5);
// console.log('result is', result);// result is 16


// function sumNums(num1, num2) {  
//    return num1+num2; // 
// }
// console.log(sumNums(2,3)) //5
// console.log(sumNums(3,5))//8


// function printSumNums(num1, num2) {
//    console.log(num1);   
//    return num1+num2;
// }
// console.log(printSumNums(2,3)) // 5
// console.log(printSumNums(3,5))// 8


// function sumNums(num1, num2) {
//     var sum = num1 + num2;
//     console.log('sum is', sum);
//     return sum;
// }
// var result = sumNums(2,3) + sumNums(3,5); //
// console.log('result is', result);copy //result is 13 


// function sumNums(num1, num2) {
//     var sum = num1 + num2;
//     console.log('sum is', sum);
//     return sum;
// }

// var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
// console.log('result is', result) // result is 16



function findLargest(arr) {
var max = 0;
 for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {

        max = arr[i];

      
        return max
    }
 }
           
} 