const getResult = document.querySelector("#getResult");
const input = document.querySelector("#firstinput");
const output = document.querySelector("#secondinput");
const operations = document.querySelector("#operator");

let operation = "";

const getValue = () => {
  operation = operations.options[operations.selectedIndex].text;
};

const modifyString = (value) => {
  switch (value) {
    case "1":
      return (result += operationNumber);
    case "2":
      return (result -= operationNumber);
    case "3":
      return (result *= operationNumber);
    case "4":
      return (result /= operationNumber);
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

const start = () => {
  getResult.addEventListener("click", checkBox);
};

document.addEventListener("DOMContentLoaded", start);
