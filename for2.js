const studentList = [
    { name: 'ksd', age: 31, math: 86, science: 75},
    { name: 'kjh', age: 13, math: 95, science: 83},
    { name: 'pch', age: 35, math: 76, science: 98}
];

//일급 함수(일급 객체)
//어떤 값에 함수를 넣을 수도 있음. 예를 들어,
//const calc = plus;
const plus = function(a,b){ //기본 함수
    return a+b;
}
const plus1 = (a,b) => { //function 생략.
    return a+b;
}
const plus2 = (a,b) => a + b; //한줄이니까 대부분 생략한 것. a,b는 매개변수
studentList.forEach(student => console.log(
    `${student.name} total: ${plus(student.math, student.science)}`
))