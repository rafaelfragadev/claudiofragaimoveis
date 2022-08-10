/* global google */ 
function initialize() {
  function initMap() {
    const posicao = { lat: -30.1406104, lng: -50.5147393 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: posicao,
     });
    const marker = new google.maps.Marker({
      position: posicao,
      map,
    });
    return marker;
  }
  initMap();

  let mapLocal = document.getElementById('map-visao');
  let panorama = document.getElementById("map-localizacao");

  function mapaLocaliza() {
    if(mapLocal && panorama) {
     const localizacao = { lat: -30.1453112, lng: -50.514772 };
      mapLocal = new google.maps.Map(mapLocal, {
        center: localizacao,
        zoom: 15,
      });
      panorama = new google.maps.StreetViewPanorama(
        panorama,
      {
        position: localizacao,
        pov: {
        heading: 12,
        pitch: 10,
        },
      }
    );
      mapLocal.setStreetView(panorama);
    }
  }
  mapaLocaliza();
} 
window.initialize = initialize;