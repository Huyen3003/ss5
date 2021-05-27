//Bai 1
/*
function check (str) { 
    if (str.indexOf("Java") == 0) { 
        return result = true; 
    } else { return result = false}
}; 
const str = prompt("Enter sentence"); 
check(str);
console.log(`Chuoi bat dau bang "Java" ${result}`); 
*/ 

//Bài 2 
/*
function findmaxdiff(array) { 
   max = Math.abs(array[1]- array[0]); 
if (array.length==1 || array.length == 0) { 
      max =  0; 
} else { 
    for (let i=1; i<array.length; i++) {
        let temp = Math.abs(array[i+1]-array[i]);
    if (temp>max) {
        max = temp; 
            }
    }
}
return max; 
}
const squence=prompt("Enter a squence of Number, separate by commas (,)"); 
let arr = squence.split(",").map(Number); 
findmaxdiff(arr); 
console.log(max);
*/ 
//Bài 3

function first (arr,n) { 
    if (n<=0) {
        arr = []; 
        return console.log(arr)
    } else if (n<arr.length) {
        let newarr = arr.splice(0,n); 
        return console.log(newarr);
    } else { 
        return console.log(arr); 
    }
}; 
const squence=prompt("Enter a squence, separate by commas (,)"); 
let arr = squence.split(",");
const n = Number(prompt("Enter numberic element return")); 
first (arr,n); 
 
//Bài 4
/*
const number1 = parseInt(prompt("Input number 1")); 
const number2 = parseInt(prompt("Input Number 2")); 
function checkInt(x,y) {
    if ( (x> 0 && y<0) || (x<0 && y > 0)) { 
        return result = true; 
    } else { return result =  false;}
}; 
checkInt(number1, number2); 
console.log(result); 
*/
//Bài 5
/*
function javascript (n) { 
    if (Number(n) <= 13) { 
        return result = Math.abs(n - 13); 
    } else { 
        return result = Math.abs(n-13) * 2; 
    }
}; 
const n = Number(prompt(" Enter n")); 
javascript(n); 
console.log(result); 
*/ 
//Bài 6
/*
function findoutput (arr) {
const max = Math.max.apply(Math,arr); //Tìm số lớn nhất của mảng
const min = Math.min.apply(Math,arr); //Tìm số nhỏ nhất của mảng
const output = max - min;
return console.log("Hieu lon nhat la " + output);  
}
const squence=prompt("Enter a squence of Number, separate by commas (,)"); 
let arr = squence.split(",").map(Number); 
console.log(arr); 
findoutput(arr); 
*/ 