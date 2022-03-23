// main.js

$(function(){
    // 모바일 토글 메뉴
    $('#toggle_btn').click(function(){
       
      $('#gnb').toggleClass('on'); 
      log.write('on');
    })
  
    // 사이트맵 버튼 열기
    $('#gnb').hover(function(){
      $('.sitemap-modal').addClass('on');
    });
    
    
    // 사이트맵 닫기
    $('.container').mouseleave(function(){
      $('.sitemap-modal').removeClass('on');
    });
  
  })