import Swiper, { Pagination, EffectFade, Thumbs } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import "swiper/css/bundle";
import $ from "jquery";
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

const filterItem = document.querySelectorAll(".wrapper__item");
filterItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
const galleryThumb = new Swiper(".gallery__thumbs", {
  spaceBetween: 10,
  direction: "vertical",
  freeMode: true,
  slidesPerView: 6,
});
const galleryMain = new Swiper(".gallery__main", {
  spaceBetween: 10,
  slidesPerView: 1,
  modules: [Thumbs],
  thumbs: {
    swiper: galleryThumb,
  },
});

$(".tovar__cart label span:first-child").click(function () {
  var $input = $(this).parent().find("input");
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$(".tovar__cart label span:last-child").click(function () {
  var $input = $(this).parent().find("input");
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});
