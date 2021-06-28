const express = require("express");
const app = express();
const env = require('dotenv')

env.config()

const mapbox_auth = {
    'mapbox_token':process.env.mapbox_token,
    'mapbox_username':process.env.mapbox_username,
    'mapbox_dataset_id':process.env.mapbox_dataset_id,
}

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/map-api", (request, response) => {
  response.json(mapbox_auth);
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 8000)
