
var apiKey = "AIzaSyD-suI9h90w9KXnNIcMxqpB9s6f4q2L3-I";

function initMap() {
        var chVenue = {lat: 35.158513, lng: -80.888407};
        var mapCenter = {lat: 35.158031, lng: -80.884076};
        var pin = 'img/Wayfairer.png';
        var infoAddress = 'img/address-callout.png';
        var map = new  google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: mapCenter,
          disableDefaultUI: true
        });
        var marker = new google.maps.Marker({
          position: chVenue,
          map: map,
          icon: pin
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
