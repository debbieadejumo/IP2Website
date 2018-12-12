console.log("open");
var lat;
var lng; 
var label;
var values;
var currentTemp;
var place; 
var label;
var values;
var currentPlace;
var currentRegion;
var currentCountry;
var currentTime;
var currentCondition;
var currentWind;
var currentWindDir;
var currentWindDegree;
var currentHumidity;
var currentPrecip;
var currentCloud;
var q;

$(document).ready(function(){
   $("button").click(function (){
    console.log("I clicked");
    console.log(this.id)
       document.getElementById("container").style.display="block";
    if (this.id == "coords") {
      lat = document.getElementById("lat").value;
      lng = document.getElementById("lng").value;
      q= lat + "," + lng;
      console.log("q is "+q)
    } else{
      q= document.getElementById("placeName").value;
    }
      var req = $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.apixu.com/v1/current.json?key=78dec8f7d78b4348b5840653181212&&q="+ q,
            dataType: "json",
          async: false,
          success: function(data){
          console.log("This is the JSON file ");
          console.log(data);
          currentTemp = data.current.temp_c;
          console.log("This is the current Temperature "+currentTemp);
          $("#temperature").html("Current temperature: "+currentTemp + "degrees celcius");
          currentPlace = data.location.name;
          $("#place").html("Name of location: "+currentPlace);
         currentRegion = data.location.region;
          $("#region").html("Region: "+currentRegion);
         currentCountry = data.location.country;
          $("#country").html("Country: "+currentCountry);
         currentTime = data.location.localtime;
          $("#time").html("Date and Time: "+currentTime);
         currentCondition = data.current.condition.text;
          $("#condition").html("Skies: "+currentCondition);
         currentWind = data.current.wind_kph;
          $("#windSpeed").html("Wind Speed Kph: "+currentWind);
         currentWindDir = data.current.wind_dir;
          $("#windDirection").html("Wind Direction: "+currentWindDir);
         currentWindDegree = data.current.wind_degree;
          $("#windDegree").html("Wind Degree: "+currentWindDegree);
         currentHumidity = data.current.humidity;
          $("#humidity").html("Humidity: "+currentHumidity);
         currentPrecip = data.current.precip_mm;
          $("#precipitation").html("Precipitation mm: "+currentPrecip);
         currentCloud = data.current.cloud;
          $("#cloud").html("Cloud cover: "+currentCloud);
           }
       })
   });
});