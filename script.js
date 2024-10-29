// let array = [1,2,3,4,5,6];
// let newArray = [];

// for(let i = 0 ; i < array.length ; i++)
// {
//     newArray.push(array[i] + array[i]);
// }

// for (let index = 0; index < newArray.length; index++) {
//     console.log(newArray[index]);
    
// }

// same idea with map


// let newarray = array.map((element , index , array)=>
// {
//     // console.log(`Current element ${element}`);
//     // console.log(`Current index ${index}`);
//     // console.log(`Current array ${array}`);
    
//     return element + element;
// }
// );
// let newarray = array.map((e)=> element + element);

// console.log(newarray);


// function addition(ele)
// {
//     return ele + ele;
// }

// let add = array.map(addition);

// console.log(add);



// swap cases;


let swappingCases = "MaRouAne";
let invertNumbers = [1,-10,20,-30];


let changeUpperCase =swappingCases.split('').map((e)=>
{
    return e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
}
).join('');
console.log(changeUpperCase);

let invert = invertNumbers.map((e)=>
{
    return -e;
}
);
console.log(invert);


