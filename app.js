// packages
const express = require('express');
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

var app = express();

// // data table
// const jsonTab = [];
//
// // write json
// function writeFile() {
//   fs.writeFile("data.json", JSON.stringify(jsonTab, null, 4), (err) => {
//     console.log("Write file success");
//   });
// };

// server
app.get('/scrape', function (req, res) {

  // data url
  const url = 'https://en.wikipedia.org/wiki/List_of_largest_cities';

  request(url, function(err, res, html) {

    // error check
    if (!err) {

      // load HTML through cheerio, replicate jQuery functionality
      var $ = cheerio.load(html);

      var city, country, population, cityProper, metro, urban;
      var json = [
        {
          city: "",
          country: "",
          population: {
            cityProper: 0,
            metro: 0,
            urban: 0
          }
        }
      ];

      $('.wikitable').filter(function() {
        var data = $(this);

        // console.log(data.children().children().children().children().text());
        // console.log(data.children().children().children().text());
        console.log(data.children().children().contents());
      })

    };
  });

});

app.listen('8081')
console.log('Port 8081 for scraping');

exports = module.exports = app;
