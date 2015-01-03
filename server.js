var
  app_port = 8080,
  app_dir = 'public';

var
  express = require("express"),
  app = express();

app.use(express.static(app_dir));

app.listen(app_port, function() {
  console.log("Listening on " + app_port);
});