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

new Swiper('.swiper-container', {

	slidesPerView : 4, 
	spaceBetween : -4, 
	slidesPerGroup : 4, 

	
	loopFillGroupWithBlank : true,

	loop : true,
  autoplay: {
    delay: 1000
  },
  speed:8000,
	pagination : { 
		el : '.swiper-pagination',
		clickable : true,
	},
	navigation : { 
		nextEl : '.swiper-button-next', 
		prevEl : '.swiper-button-prev', 
	},
});