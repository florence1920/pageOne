import { dialog } from "./components/dialog.js";
import { initMainPage, initListPage } from './components/swiper/fullSwiper.js';

$(document).ready(function () {
  dialog();
  // 현재 페이지 URL에 따라 다른 초기화 함수 호출
  const currentPath = window.location.pathname;
  
  if (currentPath.includes('list.html')) {
    initListPage();
  } else {
    initMainPage();
  }
});