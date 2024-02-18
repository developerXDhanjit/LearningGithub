console.log("Yay ! My script is running !");
console.log(
  " just creating a simple sum , substract , multiply and divide functions"
);

const sum = (num1, num2) => {
  console.log(` The sum of ${num1} and ${num2} is ${num1 + num2} `);
};
const substract = (num1, num2) => {
  console.log(` The substraction of ${num2} from ${num1}  is ${num1 - num2}`);
};
const multiply = (num1, num2) => {
  console.log(` The multiplication of  ${num1} and ${num2} is ${num1 * num2}`);
};
const divide = (num1, num2) => {
  console.log(` The division of ${num1} and ${num2} is ${num1 / num2}`);
};

const alldev = (num1, num2) => {
    sum(num1,num2);
    substract(num1,num2);
    multiply(num1,num2);
    divide(num1,num2);
};

alldev(8, 2 );