const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numArray: Array<number> = [];
const textArray: string[] = [];

type NumOrString = number | string;

type Result = { val: number; timestamp: Date };

interface ResultObj {
  val: number;
  timestamp: Date;
}

function add(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num1;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  } else {
    return +num1 + +num2;
  }
}

function printResult(resultObj: Result) {
  console.log(resultObj.val);
}

buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  console.log(result);
  console.log(stringResult);
  printResult({ val: result as number, timestamp: new Date() });
  numArray.push(result as number);
  textArray.push(stringResult as string);
  console.log(numArray, textArray);
});


const myPromise = new Promise<string> ((resolve, reject)=>{
  setTimeout(()=>{
    resolve("hi i am xyz");
  }, 1000)
})

myPromise.then(result => {
  console.log(result.split(""))
}).catch(error => console.log(error))