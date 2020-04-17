// Initialize and add the map
function initMap() {
  // The location of Bratislava
  var bratislava = {lat: 48.149254, lng: 17.116159};
  // The map, centered at Bratislava
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: bratislava});
  // The marker, positioned at Bratislava
  var marker = new google.maps.Marker({position: bratislava, map: map});
}