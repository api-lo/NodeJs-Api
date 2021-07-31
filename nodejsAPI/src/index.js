const express = require('express');
const app = express();
var cors = require('cors')
// cors

app.options('*', cors()) 
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use();

// Routes
app.use(require('./routes/employees'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
