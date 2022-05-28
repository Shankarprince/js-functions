// Print Odd numbers using anonymous function.
var arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = function () {
    var temp = "";
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 != 0) {
            temp += arrNum[i] + " ";
        }
    }
    return temp;
}
console.log(result(arrNum).trim());


//Print Odd numbers using IIFE function.
(function () {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var temp = "";
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0) {
            temp += num[i] + " ";
        }
    }
    console.log(temp.trim());
})()


//Change into uppercase string values using anonymous function.
var word = "Shankar";
var upperCase = function () {
    word = word.split("");
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase();
    }
    return word.join("");
}
console.log(upperCase(word));


// Change into uppercase string values using IIFE function.
(function () {
    var letters = "Shankar Mylsamy";
    letters = letters.split("");
    for (var i = 0; i < letters.length; i++) {
        letters[i] = letters[i].charAt(0).toUpperCase();
    }
    console.log(letters.join(""));
})()


// sum of array numbers using anonymous function.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var add = 0;
var sum = function () {
    for (var i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    return add;
}
console.log(sum(arr));


// sum of array numbers using IIFE function.
(function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var add = 0;
    for (var i = 0; i < arr.length; i++) {
        add += arr[i];
    }
    console.log(add);
})()


// Return all the prime numbers in an array using anonymous function.
var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var prime = function () {
    var temp = "";
    for (var i = 0; i < a1.length; i++) {
        var count = 0;
        for (var j = 1; j <= a1[i]; j++) {
            if (a1[i] % j == 0) {
                count++;
            }
        }
        if (count <= 2) {
            temp = temp + a1[i] + " ";
        }
    }
    return temp;
}
console.log(prime(a1));


//Return all the prime numbers in an array using IIFE function.
(function () {
    var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var temp = "";
    for (var i = 0; i < a1.length; i++) {
        var count = 0;
        for (var j = 1; j <= a1[i]; j++) {
            if (a1[i] % j == 0) {
                count++;
            }
        }
        if (count <= 2) {
            temp = temp + a1[i] + " ";
        }
    }
    console.log(temp);
})()


//palindrome program using anonymous function.
var a = "madam";
a = a.split("");
var length = a.length;
var palindrome = function () {
    for (var i = 0; i < length / 2; i++) {
        if (a[i] !== a[length - 1 - [i]]) {
            return "Its not a palindrome";
        }
    }
    return "Its a palindrome";
}
console.log(palindrome(a));


//palindrome program using IIFE program.
(function () {
    var a1 = "madam";
    a1 = a1.split("");
    var length = a1.length;
    for (var i = 0; i < length / 2; i++) {
        if (a1[i] !== a1[length - 1 - [i]]) {
            console.log("Its not a palindrome");
            return;
        }
    }
    console.log("Its a palindrome");
})();

// Return median of two sorted arrays of same size.
function median(){  
    var ar1 = [1,2,3,4,5];
    var ar2 = [6,7,8,9,10];
    var n1 = ar1.length;
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n1; count++) {    
        if (i == n1) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n1) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }       
        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }      
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
console.log(median());

// Return median of two sorted arrays of same size using IIFE.
(function() {  
    var ar1 = [1,2,3,4,5];
    var ar2 = [6,7,8,9,10];
    var n1 = ar1.length;
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n1; count++) {    
        if (i == n1) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n1) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }       
        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }      
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    var result = (m1 + m2)/2;
    console.log(result);
})();

// remove duplicate array values using anonymous function 
var duplicates = function () {
    var dupArr = [1, 2, 3, 4, 3, 6, 2, 4, 4, 7];
    var newArr = new Set(dupArr);
    return result = [...newArr];
}
console.log(duplicates());


// remove duplicate aarray values using IIFE.
(function () {
    var dupArr = [1, 2, 3, 4, 3, 6, 2, 4, 4, 7];
    var newArr = new Set(dupArr);
    console.log([...newArr]);
})();


// Rotate an array by k times using anonymous function.
var rotate = function () {
    var rotateArr = [1, 2, 3, 4, 5];
    var n = rotateArr.length;
    var k = 2;
    var newArr = [];
    for (var i = 0; i < n; i++) {
        if (i < k) {
            newArr.push(rotateArr[n + i - k]);
        }
        else {
            newArr.push(rotateArr[i - k]);
        }
    }
    console.log(newArr);
}
rotate();


// Rotate an array by k times using IIFE.
(function () {
    var rotateArr = [1, 2, 3, 4, 5];
    var n = rotateArr.length;
    var k = 2;
    var newArr = [];
    for (var i = 0; i < n; i++) {
        if (i < k) {
            newArr.push(rotateArr[n + i - k]);
        }
        else {
            newArr.push(rotateArr[i - k]);
        }
    }
    console.log(newArr);
})();


// Arrow Functions

// Print odd numbers in an array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = (...num) => {
    var temp = "";
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0) {
            temp += num[i] + " ";
        }
    }
    return temp;
}
console.log(result(...number));


//Convert all the strings to title caps in a string array
var words = "Shankar";
var upperCase = (word) => {
    word = word.split("");
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase();
    }
    return word.join("");
}
console.log(upperCase(words));


//Sum of all numbers in an array
var arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var addValue = 0;
var sum = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        addValue += arr[i];
    }
    return addValue;
}
console.log(sum(arrNumbers));


//Return all the prime numbers in an array
var arrElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var prime = (a1) => {
    var temp = "";
    for (var i = 0; i < a1.length; i++) {
        var count = 0;
        for (var j = 1; j <= a1[i]; j++) {
            if (a1[i] % j == 0) {
                count++;
            }
        }
        if (count <= 2) {
            temp = temp + a1[i] + " ";
        }
    }
    return temp;
}
console.log(prime(arrElement));


//Return all the palindromes in an array
var arrowString = "madam";
var palindromeArrow = (a1) => {
    a1 = a1.split("");
    var length = a1.length;
    for (var i = 0; i < length / 2; i++) {
        if (a1[i] !== a1[length - 1 - [i]]) {
            console.log("Its not a palindrome");
            return;
        }
    }
    console.log("Its a palindrome");
}
palindromeArrow(arrowString);