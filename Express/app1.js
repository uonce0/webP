const express = require('express');
const app = express();

app.use(function(req,res,next) { //req: 요청이 들어온 객체 , res: 응답 함수, next: 바로 다음에 사용할 함수 ...?
    res.status(200).send(`<h1>Hi ! Welcome ~ ~</h1>
                          <h1>Hello World!!!!</h1>`);
    res.end();
});

app.listen(500);