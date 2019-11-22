
function initMap() {

  var place = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: place});
    var marker = new google.maps.Marker({position: place, map: map});
  }
  </script>
  <script async defer
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
  </script>
