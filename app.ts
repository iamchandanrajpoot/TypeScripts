const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

buttonElement.addEventListener('click', () => {
  const num1 = +num1Element.value; // Convert to number
  const num2 = +num2Element.value; // Convert to number

  const result = add(num1, num2);
  console.log(result);
});
