//모두가 잘 아는 계싼기 만들기
//codepen.io
const num1 = prompt("첫번째 숫자를 입력하세요");
const operator = prompt("연산자를 입력하세요 (+, -, *, /");
const num2 = prompt("두번째 숫자를 입력하세요");
switch (operator) {
    case "+":
        console.log(parseInt(num1) + parseInt(num2));
        break;
    case "-":
        console.log(parseInt(num1) - parseInt(num2));
        break;
    case "*":
        console.log(parseInt(num1) * parseInt(num2));
        break;
    case "/":
        console.log(parseInt(num1) / parseInt(num2));
        break;
    default:
        alert("NO OPERATOR!");
} 

