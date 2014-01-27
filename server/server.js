var config = require('./server-config'),
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  mockFileRoot = config.data_location,
  fs = require('fs');

// CONFIG SERVER
//allows us to write cookies
app.use(express.cookieParser());

//allows server to run as proxy
app.enable('trust proxy');
app.use(express.bodyParser());
app.use(express.static(config.static_site_root));

app.get(config.rest_base_url, function (req, res) {
  var endpoint,
    splitPath = req.params[0].split("/"),
    mockPath = mockFileRoot + req.params[0] + '/' + splitPath[splitPath.length-1] + '.json',
    mockResponse;

  if (splitPath.length > 2)
    endpoint = splitPath[splitPath.length - 2];

  console.log(endpoint, req.params[0], mockPath)

  try {
    mockResponse = JSON.parse(fs.readFileSync(mockPath));
    res.send(200, mockResponse)
  } catch (err) {
    console.log(err);
    res.send(500);
  }
});

// FIRE IT UP

server.listen(config.port, function () {
  console.log("Express server listening on port %d", config.port);
});
