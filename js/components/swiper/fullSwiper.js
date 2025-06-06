export function initFullSwiper() {
  const swiper = new Swiper(".main-slider__swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    a11y: {
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드',
      containerMessage: '슬라이드 목록',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const pauseButton = document.querySelector('.swiper-button-pause');
  let isPlaying = true;

  pauseButton.addEventListener('click', () => {
    if (isPlaying) {
      swiper.autoplay.stop();
      pauseButton.classList.add('paused');
      pauseButton.setAttribute('aria-label', '재생');
    } else {
      swiper.autoplay.start();
      pauseButton.classList.remove('paused');
      pauseButton.setAttribute('aria-label', '일시 정지');
    }
    isPlaying = !isPlaying;
  });
}

export function initTodayRecommendSwiper() {
  const swiper = new Swiper(".today-recommend__swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    a11y: {
      prevSlideMessage: '이전 도서',
      nextSlideMessage: '다음 도서',
      firstSlideMessage: '첫번째 도서',
      lastSlideMessage: '마지막 도서',
      slideLabelMessage: '총 {{slidesLength}}권의 도서 중 {{index}}번째 도서',
      containerMessage: '추천 도서 슬라이더',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

export function initSpecialBookSwiper() {
  const swiper = new Swiper(".special-book__swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesOffsetAfter: 20,  // 마지막 슬라이드 후 여백
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });
}

export function initBestSellerSwiper() {
  const swiper = new Swiper(".best-seller__swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
  });
}

