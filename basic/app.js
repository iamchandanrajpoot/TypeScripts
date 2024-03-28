"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numArray = [];
const textArray = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num1;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
    numArray.push(result);
    textArray.push(stringResult);
    console.log(numArray, textArray);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hi i am xyz");
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split(""));
}).catch(error => console.log(error));
