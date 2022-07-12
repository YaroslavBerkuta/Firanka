import Swiper, { Pagination, EffectFade } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import "swiper/css/bundle";

new Swiper(".hero__right", {
  modules: [Pagination, EffectFade],
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  spaceBetween: 15,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
new Swiper(".catalog__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
});

Fancybox.bind("[data-fancybox]", {});
