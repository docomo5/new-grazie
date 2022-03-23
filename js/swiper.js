// swiper 
const swiper = new Swiper('.swiper', {
  // 옵션 설정
  direction: 'horizontal', // 슬라이더 방향
  effect: 'fade',
  loop: true, // 순환 여부
  autoplay: {
    delay: 5000
  },
  speed:1000, //전환효과 시간
  // 하단 버튼 UI 
  pagination: {
    el: '.swiper-pagination',
  },

  // 방향 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});