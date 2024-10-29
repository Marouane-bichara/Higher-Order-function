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


// let swappingCases = "MaRouAne";
// let invertNumbers = [1,-10,20,-30];


// let changeUpperCase =swappingCases.split('').map((e)=>
// {
//     return e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
// }
// ).join('');
// console.log(changeUpperCase);

// let invert = invertNumbers.map((e)=>
// {
//     return -e;
// }
// );
// console.log(invert);



//  test map v filer

// let nums = [2,1,4,57,8,4,5,6];

// let evenNums = nums.filter((e)=>
// {
//     return e % 2 == 0;
// }
// )

// console.log(evenNums);



// let friends = ["marouane" , "ahmed" , "ali" , "khalid" , "said"];


// let filterdfriends = friends.filter((e)=>
// {
//     return e.toLowerCase().startsWith('a');
// }
// )

// console.log(filterdfriends);



//  practice filter

// let sentence = "I Love Foood Code Too Playing Mush"

// let smallWords = sentence.split(" ").filter((e)=>
// {
//     return e.length <= 4;
// }
// ).join(" ");

// console.log(smallWords);

// Reduce 

// let nums = [10,20,40,50];

// let add = nums.reduce((acc , current , index  , array)=>
// {
//     console.log(`ACC => ${acc}`); 
//     console.log(`CURRENT => ${current}`); 
//     console.log(`INDEX => ${index}`); 
//     console.log(`ARRAY => ${array}`); 
    
//     return acc + current;
// }
// );

// console.log(add);



// ForEach;