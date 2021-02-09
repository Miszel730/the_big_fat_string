const getResult = document.querySelector("#getResult");
const input = document.querySelector("#firstinput");
const output = document.querySelector("#secondinput");
const operations = document.querySelector("#operator");

let operation = "";
let inputText = "";

const getOption = () => {
  operation = operations.options[operations.selectedIndex].value;
};

const modifyString = (option, value) => {
  console.log(option, value);
  switch (option) {
    case "1":
      return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    case "2":
      return value.split(" ")[0];
    case "3":
      return value.split(" ")[0].length;
    case "4":
      return;
    case "5":
      return (result += operationNumber);
    case "6":
      return (result -= operationNumber);
    case "7":
      return (result *= operationNumber);
    case "8":
      return (result /= operationNumber);
    default:
      console.log("Wrong operator");
      break;
  }
};

const takeAction = () => {
  getOption();
  inputText = input.value;
  console.log(input);
  const formatedText = modifyString(operation, inputText);
  console.log(formatedText);
  output.value = formatedText;
};

const start = () => {
  getResult.addEventListener("click", takeAction);
};

document.addEventListener("DOMContentLoaded", start);
