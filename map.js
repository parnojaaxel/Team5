var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: { lat: 58.26659964738753, lng: 22.536134881926614 } // ametikool
  });
  
  // add marker
  var marker1 = new google.maps.Marker({
    position: { lat: 58.26659964738753, lng: 22.536134881926614 },
    map: map,
    title: 'Kudjape jäätmejaam'
  });
  
  var marker2 = new google.maps.Marker({
    position: { lat: 58.5582415707529, lng: 23.0827982972879 },
    map: map,
    title: 'Marker 2'
  });

window.initMap = initMap;