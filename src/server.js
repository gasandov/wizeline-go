const express = require('express');

const { port, env } = require('./config/config.json');

const requestLogger = require('./middlewares/requestLogger');

const helloWorldRouter = require('./routes/webapp/helloWorld');
const apiRouter = require('./routes/api');

const app = express();

app.use(requestLogger);

app.use('', helloWorldRouter);
app.use('/api', apiRouter);

console.log('env: ', env);
if (env !== 'test') {
  app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
  });
}

module.exports = app;
