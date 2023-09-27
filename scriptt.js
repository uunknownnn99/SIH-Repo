
function loadMapScenario() {
  var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
  var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(),);
  var layer = new Microsoft.Maps.Layer();
  layer.add(pushpin);
  map.layers.insert(layer);

  for(let i=1; i<=4; i++){
    let url = `readings/readings${i}.json`;
  let response = fetch(url);
  console.log(url)
  response.then((v) => {
    return v.json();
  }).then((arr) => {
    console.log(arr);
    updateMarker(arr,i);
  })
  }

  const updateMarker = (arr, i) => {
    let sensorRead1 = arr.feeds[0].field1;
    if (sensorRead1 == "0") {
      Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
        Microsoft.Maps.GeoJson.readFromUrl(`locations/locations${i}a.json`,
          function(shapes) {
            map.entities.push(shapes,);
          });
      });
    }
    else if (sensorRead1 == "1") {
      Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
        Microsoft.Maps.GeoJson.readFromUrl(`locations/locations${i}c.json`,
          function(shapes) {
            map.entities.push(shapes,);
          });
      });
    }
    else {
      Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
        Microsoft.Maps.GeoJson.readFromUrl(`locations/locations${i}b.json`,
          function(shapes) {
            map.entities.push(shapes,);
          });
      });
    }
  }

  // let url2 = "./readings2.json";
  // let response2 = fetch(url2);
  // console.log(url2)
  // response.then((v2) => {
  //   return v2.json();
  // }).then((arr2) => {
  //   console.log(arr2);
  //   updateMarker(arr2);
  // })
  // const updateMarker = (arr) => {
  //   let sensorRead = arr.feeds[0].field1;
  //   if (sensorRead == "0") {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations1.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  //   else if (sensorRead == "1") {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations3.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  //   else {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations2.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  // }

  // let url = "./readings.json";
  // let response = fetch(url);
  // console.log(url)
  // response.then((v) => {
  //   return v.json();
  // }).then((arr) => {
  //   console.log(arr);
  //   updateMarker(arr);
  // })
  // const updateMarker = (arr) => {
  //   let sensorRead = arr.feeds[0].field1;
  //   if (sensorRead == "0") {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations1.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  //   else if (sensorRead == "1") {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations3.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  //   else {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations2.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  // }

  // let url = "./readings.json";
  // let response = fetch(url);
  // console.log(url)
  // response.then((v) => {
  //   return v.json();
  // }).then((arr) => {
  //   console.log(arr);
  //   updateMarker(arr);
  // })
  // const updateMarker = (arr) => {
  //   let sensorRead = arr.feeds[0].field1;
  //   if (sensorRead == "0") {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations1.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  //   else if (sensorRead == "1") {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations3.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  //   else {
  //     Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
  //       Microsoft.Maps.GeoJson.readFromUrl('locations2.json',
  //         function(shapes) {
  //           map.entities.push(shapes,);
  //         });
  //     });
  //   }
  // }
}

// var fs = 'browserify-fs';
// require([fs], function(result){
//     fs = result;
// });
//const fs = require(['fs-extra']);
// const fileName = './locations.json';
// const file = require(['fileName']);

// file.color = "red";

// fs.(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
//   if (err) return console.log(err);
//   console.log(JSON.stringify(file, null, 2));
//   console.log('writing to ' + fileName);
// });
// import fs from 'fs';
// var fs = 'browserify-fs';
// require([fs], function(result){
//     fs = result;
// });

// // Storing the JSON format data in myObject
// var data = fs.readFileSync("./locations.json");
// var myObject = JSON.parse(data);

// // Defining new data to be added
// let newData = {
// country: "England",
// };

// // Adding the new data to our object
// myObject.push(newData);

// // Writing to our JSON file
// var newData2 = JSON.stringify(myObject);
// fs.writeFile("data2.json", newData2, (err) => {
// // Error checking
// if (err) throw err;
// console.log("New data added");
// });

// Microsoft.Maps.loadModule('Microsoft.Maps.GeoJson', function() {
//   Microsoft.Maps.GeoJson.readFromUrl('locations3.json',
//     function(shapes) {
//       map.entities.push(shapes,);
//     });
// });