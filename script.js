// Инициализация карты
function initMap() {
    const location = { lat: 47.216950, lng: 39.720153 }; // Координаты клуба Голицын
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        styles: [
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ saturation: 36 }, { color: "#5a3e3e" }, { lightness: 40 }]
            },
            {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{ visibility: "on" }, { color: "#f9f3e9" }, { lightness: 16 }]
            },
            {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ color: "#f9f3e9" }, { lightness: 20 }]
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#f9f3e9" }, { lightness: 17 }, { weight: 1.2 }]
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f9f3e9" }, { lightness: 20 }]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#f3e5e5" }, { lightness: 21 }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#e8c4c4" }, { lightness: 17 }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#e8c4c4" }, { lightness: 29 }, { weight: 0.2 }]
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#f3e5e5" }, { lightness: 18 }]
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#f9f3e9" }, { lightness: 16 }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#d2a6a6" }, { lightness: 17 }]
            }
        ]
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Загородный клуб Голицын"
    });
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Обратный отсчет до свадьбы
var weddingDate = new Date("October 15, 2025 16:20:00").getTime();

// Обновление отсчета каждую секунду
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML = days + "д " + hours + "ч "
    + minutes + "м " + seconds + "с ";

    // Если отсчет закончится
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "Свадьба состоялась!";
    }
}, 1000);

// Инициализация Яндекс карты
function initMap() {
    // Указываем координаты места проведения свадьбы
    var weddingLocation = [47.216950, 39.720153]; // Например, Москва

    // Создаем объект карты
    var map = new ymaps.Map("map", {
        center: weddingLocation, // Центр карты
        zoom: 15, // Уровень масштабирования
        controls: ['zoomControl', 'typeSelector', 'searchControl'] // Добавляем элементы управления
    });

    // Добавляем метку на карту
    var placemark = new ymaps.Placemark(weddingLocation, {
        hintContent: 'Место проведения свадьбы',
        balloonContent: 'Здесь мы будем отмечать важный день!'
    });

    map.geoObjects.add(placemark); // Добавляем метку на карту
}


// Обработка кнопки "присоединиться"
document.querySelector('.btn-telegram').addEventListener('click', function(e) {
    e.preventDefault();
    // Здесь можно добавить ссылку на Telegram-группу
    alert('Ссылка на Telegram-группу будет доступна ближе к дате свадьбы');
    
    // Или для реального использования:
    // window.open('https://t.me/yourgroup', '_blank');
});