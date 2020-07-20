$(() => {
    let myMap;
    ymaps.ready(init);
    function init(){
        myMap = new ymaps.Map("map", {
            center: [53.190699, 50.187959],
            globalPixelCenter: [56,34],
            zoom: 16,
            scrollZoom: false,
            controls: [],
        }, {suppressMapOpenBlock: true});

        // myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');
        var placemarks = [
            {
                coords: [53.190699, 50.187959],
                icon: 'assets/img/marker.svg',
                icon_size: [50, 50],
                icon_offset: [-25, -25], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
            },
        ];

        placemarks.forEach(function(item){
            var obj = new ymaps.Placemark(
                item.coords,
                {},
                {
                    iconLayout: 'default#image',
                    iconImageHref: item.icon,
                    iconImageSize: item.icon_size,
                    iconImageOffset: item.icon_offset,
                }
            );
            myMap.geoObjects.add(obj);
        });
    };
});