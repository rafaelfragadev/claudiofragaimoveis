/* global google */ 
export default function googleMaps(){
  function initMap() {
    const capivari = { lat: -30.1406104, lng: -50.5147393 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: capivari,
    });
    map.setTilt(45);
    const marker = new google.maps.Marker({
      position: capivari,
      map,
    });
    return marker;
  }
  window.initMap = initMap;
}


