const express = require('express');
const port = 300;

const indexRouter = require('./routes/index');  // 导入 index 路由

const app = express();
app.use('/index', indexRouter);


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/about', (req, res) => res.send('关于'));


app.listen(port, () => console.log(`Example app listening on port ${port}`));

