
// incerrment /decerment

//1, incerment
// // pre incerment

// let x = 19;
// // x=x + 1;
// ++x
// console.log(x);  //20

//  post incerment
// // again declaer ma incerment kary ga 

// let x = 19;
// // x=x + 1;
// x++
// console.log(x); //19

// let x = 19;
// // x=x + 1;
// x++
// console.log(x); // 20 agin declaer



// let x = 200;
// console.log(x++); //200
// console.log(x++); //201
// console.log(x); //202



// let x = 200;
// console.log(++x); //200
// console.log(++x); //201
// console.log(x); //202

// let x = 400
// let  num1 = x++;  //400
// num1 = x;        // 401
// console.log(num1);


// decerment 
//pre decerment

// let y = 10; 
// // y =y-1;  //9
// --y; // 9
// console.log(y);

// let y = 10; 
// // y =y-1;  //9
// y--;  //9
// console.log(y);

// let y = 10; 

// console.log(y--); //10

// console.log(y); // 9

// let number = 20;
// console.log(( ++number) + (++number)  )
//               41    +   42           = 43



// let number = 20;
// console.log(( number++) + (number++) +  number)  ;
// //                 20     +   21  + 22 =63

// let number = 20;
// console.log((++number) + (number++) + (number)  );
let number = 20;
let var1 = number++; //20
let var2 = --number //21
let var3 = ++number //22
console.log(var1+var2-var3);
            // 20+21=41-22=19