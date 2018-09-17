var latitude,longitude;
var temp,far_temp;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
 latitude=Math.round(position.coords.latitude);
    longitude=Math.round(position.coords.longitude);
 
$('#button1').click(function()
                  {
   
  $('#h').text(Math.round(temp));
$('#button1').css("background-color","blue");
    $('#button1').css("color","white");
    
  $('#button2').css("background-color","#AAAAAA");
    $('#button2').css("color","black");
}
);
   
  $('#button2').click(function()
                     {
    $('#h').text(Math.round(far_temp));
    $('#button2').css("background-color","blue");
    $('#button2').css("color","white");
    
    $('#button1').css("background-color","#AAAAAA");
    $('#button1').css("color","black");
    
  });
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=228b6b1d7bcb94bec1e409319718080e",function(data)
             {
      temp=data.main.temp-273;
      far_temp=((9/5)*temp) + 32;
      $("#p1").append(data.name+", "+data.sys.country);
          $("#p2").append(data.weather[0].description);
      $("#h").append(Math.round(temp));
//$("#p3").append("<p>&#8451 | &#8457</p>");
      
       $("#p2").append("<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'"+">");
      $("#p3").append(data.main.humidity+"%");
$("#p4").append(Math.round(data.wind.speed*(18/5))+" km/h");

    });
  });
}