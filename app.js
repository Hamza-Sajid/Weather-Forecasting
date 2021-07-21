//Global Variables

var title=document.getElementById("title");
var now=document.getElementById("now");
now.className+="now";
var currenth1=document.createElement("h1");
var img=document.getElementById("img");
var query="London";
var minmax=document.getElementById("minmax");
var smoke=document.getElementById("smoke");
var time=0;

//API
const api={
  key: "44accf250d3fc23b6aef7cd5b8b5952d",
  base: "https://api.openweathermap.org/data/2.5"
}

//MAIN FUNTION

function done()
{

//GetValue
  var search=document.getElementById("search");
  search=search.value;

//Function to referesh page

  if(time>0)
  {
    window.location.reload();
    return 1;
  }



  //ES-6((  fetch('${api.base}weather?q=${query}&units=metrics&APPID=${api.key}').then(weather=> ))
  fetch(api.base+"/weather?q="+search+"&units=metric&appid="+api.key).then(weather=>
    {
      return weather.json();
    }).then(output);

    function output(weather) {
      var status=(weather.main)
      var findNow=(weather.main.temp);
      var nowint=(weather.main.temp);
      var nowIntPar=parseInt(nowint);
      now.innerHTML=nowIntPar+"°";
      var minweather=(weather.main.temp_min);
      minweather=parseInt(minweather);
      var maxweather=(weather.main.temp_max);
      maxweather=parseInt(maxweather);
      smoke.innerHTML=(weather.weather[0].main);
      var stat=(weather.weather[0].main);


//to craete an img

      if(stat=="Clouds")
      {
        var img1=document.createElement("img");
        img1.className+="weather";
        img1.src = "src/clouds.png ";
        img.appendChild(img1);
      }

      else if(stat=="Smoke")
      {
        var img1=document.createElement("img");
        img1.className+="weather";
        img1.src = "src/smoke.png ";
        img.appendChild(img1);
      }
      else
      {
        var img1=document.createElement("img");
        img1.className+="weather";
        img1.src = "src/sun.png ";
        img.appendChild(img1);
      }

      //Min & Max + Title Output


      minmax.innerHTML="Min -   "+minweather +"&#119240;"+ "&#127777; "+ "Max -   "+maxweather+"&#119240;";
      minmax.className+="minmax";
      title.innerHTML+=" ( "+"<u>"+(weather.name)+"</u>"+" )";

      time++;
    }

  }
