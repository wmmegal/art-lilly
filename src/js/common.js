import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

document.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-menu')) {
        return;
    }

    const btn = e.target.closest('.btn-menu');

    btn.classList.toggle('active');

    const menu = btn.nextElementSibling;

    menu.classList.toggle('open');
});

document.addEventListener('change', (e) => {
    if (!e.target.closest('[name=rule]')) {
        return;
    }

    const checkbox = e.target.closest('[name=rule]'),
        form = checkbox.closest('form'),
        btn = form.querySelector('[type=submit]');

    btn.disabled = !checkbox.checked;
});

document.addEventListener('DOMContentLoaded', function () {
    const mainCarouselDiv = document.getElementById('main-carousel');

    if (mainCarouselDiv == null) {
        return;
    }

    const main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
    });



    const thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 277,
        fixedHeight: 166,
        gap: 20,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
            600: {
                fixedWidth: 100,
                fixedHeight: 60,
                gap: 10,
            },
        },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});

Fancybox.bind("[data-fancybox]");
