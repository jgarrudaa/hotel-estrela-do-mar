var swiper = new Swiper(".swiper_quartos", {
    slidesPerView: 3,
    spaceBetween: 18,
    loop: true,
    grabCursor: true,

    navigation: {
        nextEl: ".btn-quartos-next",
        prevEl: ".btn-quartos-prev",
    },
    pagination: {
        el: ".pag-quartos",
        clickable: true
    },
});

var swiper = new Swiper(".swiper_restaurant", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 3000, // Tempo entre os slides (3 segundos)
        disableOnInteraction: false, // Continua mesmo após interação
    },
    navigation: {
        nextEl: ".btn-rest-next",
        prevEl: ".btn-rest-prev",
    },
    pagination: {
        el: ".pag-rest",
        clickable: true
    },
});
