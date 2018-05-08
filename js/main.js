
var apiKey = "AIzaSyD-suI9h90w9KXnNIcMxqpB9s6f4q2L3-I";

var infoWindowContent = '<div id="infoContent">'+
    '<h3 class="infoHeading">CH Venue</h3>'+ '<p class="infoAddress">5727 Westpark Drive. <br> Suite 108 <br> Charlotte, NC 28217</p>';


function initMap() {
        var chVenue = {lat: 35.158513, lng: -80.888407};
        var mapCenter = {lat: 35.158851, lng: -80.875860}
        var map = new  google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: mapCenter,
          disableDefaultUI: true
        });
        var infowindow = new google.maps.InfoWindow({
          content: infoWindowContent,
          pixelOffset: new google.maps.Size(110,130)
        });
        var marker = new google.maps.Marker({
          position: chVenue,
          map: map,
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }


function scrollL() {
  var left = document.getElementById('left');
  left.onclick = function() {
    document.getElementById('scroll').scrollLeft -= 250;
  }
}

function scrollR() {
  var right = document.getElementById('right');
  right.onclick = function() {
    document.getElementById('scroll').scrollLeft += 250;
  }
}
