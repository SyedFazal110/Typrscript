// ALIASES + ANNOTATION



// type all = string ;
// let cars:all = "BMW"
// console.log(cars) 


// type all = number;
// var sum:number = 20
// console.log(sum);


// type check = boolean;
// var logged:boolean = false
// console.log(logged);


// type info = {
//     firstname : string,
//     lastname : string,
//     age : number,
//     isLoggedIn : boolean,
// }

// let data:info = {
//     firstname: "Fazal",
//     lastname: "Ali",
//     age : 22,
//     isLoggedIn: true
// }
// console.log(data);


// type data = string[];
// let cars:data = ["BMW" , "MERCEDES" , "AUDI" , "BUGGATI"]
// console.log(cars);



// ----------------INTERFACE-----------------




interface data {
    firstname : string,
    lastname : string,
    age : number,
    isLoggedIn : boolean,
}

// interface data {
//     dob : string;
// }
// let dates:data = {
//     firstname: "Fazal",
//     lastname: "Ali",
//     age : 22,
//     isLoggedIn: true,
// }
// console.log(dates);


interface add extends data {
    dob : string;
}

let db:add = {
        dob: "19-Oct-2001"

}
console.log(db);




