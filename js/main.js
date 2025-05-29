import { dialog } from "./components/dialog.js";
import { initFullSwiper,initTodayRecommendSwiper,initSpecialBookSwiper,initBestSellerSwiper } from "./components/swiper/fullSwiper.js";

$(document).ready(function () {
  dialog();
  initFullSwiper();
  initTodayRecommendSwiper();
  initSpecialBookSwiper();
  initBestSellerSwiper();
});