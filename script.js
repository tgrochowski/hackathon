$(document).ready(function(){
    var radioselect = null;
    var multiselect = [];
    var cash = 0;

    $("#sticky-header").fadeOut(0);
    $(".radio").on("click",function(){
        id = $(this).data("type");
        $(".radio").css("background-color","white");
        if(id == radioselect){
            radioselect = null;
        }else{
            $(this).css("background-color","#FD8A55");
            radioselect = id;
        }
        console.log(radioselect)
    });

    $("#cash").on("input",function(){
        $("#val").text("Chce wydać: " + $("#cash").val() + " PLN");
        cash = $("#cash").val();
    });

    $(".multi").on("click",function(){
        var id = $(this).attr("id").substr(1,2);
        var val = $(this).data("val");

        key = multiselect.indexOf(val);
        if(multiselect[key] != null){
            $(this).css("background-color","white");
            multiselect.splice(key, 1);

        }else{
            $(this).css("background-color","#FD8A55");
            multiselect.push(val);
        }
        console.log(multiselect);
    });

    var myLatLng;
    var map;
    navigator.geolocation.getCurrentPosition(function (position) {
        myLatLng = [ position.coords.latitude,  position.coords.longitude];
        map = $('#map').gmap3({
            center:myLatLng,
            zoom:13,
            disabledDefaultUi: true,
        });

        map.marker([
            {position:myLatLng,icon: "http://maps.google.com/mapfiles/marker_orange.png"},
        
        ])
    },
    function (error) {
        console.log("problem z lokalizacją")
    },
    {
        maximumAge: 10000,    // czas dostępu do danych
        timeout: 15000     // po tym czasie error jeśli brak danych
    });

    setTimeout(function(){
        $("#start").fadeOut(500, function(){
            $("#main").fadeOut(0).fadeIn(500);
            $("#sticky-header").fadeOut(0).fadeIn(500)
            
        })
    }, 2000);

    $("#search").on("click",function(){
        // console.log("search");
        $("#list").show();
        $('html, body').animate({
            scrollTop: $("#list").offset().top
        }, 300);


        // $("#main").hide();
    });

    $("#backToMain").on("click",function(){

    });

    $("#getData").on("click",function(){
        var data = {
            lat: 50.0259406,
            lng: 19.9177201
        }
        
        var data = [data.lat ,data.lng]
        console.log(data)
        tab.push(data)

        for(var i=0; i<tab.length; i++){
            var myLatLng = {lat: tab[i][0], lng: tab[i][1]};
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });
        }

        /*
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(map);

var flightPlanCoordinates = [
          {lat: tab[0][0], lng: tab[0][1]},
          {lat: tab[1][0], lng: tab[1][1]},
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map)
        */
    })
})
