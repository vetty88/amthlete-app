const app = require('../server/server');
const port = 3000;
app.listen(port, function() {
 console.log('running at localhost: ' + port);
});