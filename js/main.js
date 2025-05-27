import { dialog } from "./components/dialog.js";
import { initFullSwiper,initTodayRecommendSwiper,initSpecialBookSwiper } from "./components/swiper/fullSwiper.js";

$(document).ready(function () {
  dialog();
  initFullSwiper();
  initTodayRecommendSwiper();
  initSpecialBookSwiper();
});