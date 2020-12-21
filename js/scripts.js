$(document).ready(function(){

    $('input').change(function(){

        let fecha= document.getElementById("date");
        let d= new Date();
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        fecha.innerHTML= days[d.getDay()];
        let appKey = 'a8ccc282a565a9d27ffa0a0813703efe';
        let ciudad = $("input").val();
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${appKey}&units=metric`;
    
        $.ajax({
            url: url,
            type:'GET',
            dataType: 'json',
            success: function(info){
               let icon=document.getElementById("imagen");
               icon.src=`icons/${info.weather[0].icon}.png`;
               console.log(info);
               
               $('#city-name').html(info.name);
               $('#description').html(info.weather[0].description);
               $('#temp').html(parseInt(info.main.temp )+ "c");
               $('#wind').html(" Wind "+ parseInt(info.wind.speed)+ " km/h ");
               $('#max-temp').html( parseInt(info.main.temp_max));
               $('#min-temp').html( parseInt(info.main.temp_min));

          
               
            }
        });
        $.ajax({
            url: url,
            type:'GET',
            dataType: 'json',
            success: function(info){
               let icon=document.getElementById("imagen");
               icon.src=`icons/${info.weather[0].icon}.png`;
               console.log(info);
               
               $('#city-name').html(info.name);
               $('#description').html(info.weather[0].description);
               $('#temp').html(parseInt(info.main.temp )+ "c");
               $('#wind').html(" Wind "+ parseInt(info.wind.speed)+ " km/h ");
               $('#max-temp').html( parseInt(info.main.temp_max));
               $('#min-temp').html( parseInt(info.main.temp_min));

          
               
            }
        });
        
    
    }); 

});