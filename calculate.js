const sum = (a,b) => a+b;
const printResult = (result) => {
    console.log(`결과는 ${result}입니다.`);
};

//매개변수로 함수 호출도 가능!
const calculationAndPrint = (calculationResult, callback) => callback(calculationResult);

calculationAndPrint(sum(10,20),printResult);