var ymaps;
ymaps && ymaps.ready(injectMap);

function injectMap() {
  var latitude = 59.938631;
  var longitude = 30.323055;

  var mapWrapper = document.querySelector(".location");
  mapWrapper.innerHTML = "<div id='map' style='width: 100%; height: 457px'></div>";

  var map = new ymaps.Map("map", {
    center: [latitude, longitude],
    zoom: 17,
    controls: []
  });

  var placemark = new ymaps.Placemark([latitude, longitude], {
    hintContent: "Cat Energy"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/map-pin.png",
    iconImageSize: [114, 100],
    iconImageOffset: [-60, -140]
  });

  map.geoObjects.add(placemark);
}
