const userList = [
    { name: 'ksd', age: 31, score: 86},
    { name: 'kjh', age: 13, score: 95},
    { name: 'pch', age: 35, score: 76}
];

for (const user of userList) {
    console.log('user:',user);
}

userList.forEach(function(user) { //userList 각각에 대해서 다음 function을 실행시켜라. user를 매개변수로 받음.
    console.log('user:',user);
});

//화살표 함수를 통해 매개변수 a를 쓰고, 실행할 함수 내부의 코드 작성
userList.forEach(a => { console.log('user',a) });