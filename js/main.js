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
    $('.sitemap-modal').mouseleave(function(){
      $('.sitemap-modal').removeClass('on');
    });

    let num = 0;
    let num2 = 0;

    $('.btn-group1 .next').on('click', function(){
        num++;
        if(num > 3) {
            return
        }
        $('.gallery1  img').removeClass('on');
        $('.gallery1  img').eq(num).addClass('on');
    })


    $('.btn-group1 .prev').on('click', function(){
        num--;
        if(num < 0) {
            return
        }
        $('.gallery1  img').removeClass('on');
        $('.gallery1  img').eq(num).addClass('on');
    })

    
    $('.btn-group2 .next').on('click', function(){
        num2++;
        if(num2 > 3) {
            return
        }
        $('.gallery2  img').removeClass('on');
        $('.gallery2  img').eq(num2).addClass('on');
    })


    $('.btn-group2 .prev').on('click', function(){
        num2--;
        if(num2 < 0) {
            return
        }
        $('.gallery2  img').removeClass('on');
        $('.gallery2  img').eq(num2).addClass('on');
    })
  
    //tap 버튼
    $('#guide-bar-01').click(function(){
        $(this).addClass('on');
        $('#win-now').removeClass('on');
        $('#notice-event').addClass('on');
    })

    $('#guide-bar-02').click(function(){
        $(this).addClass('on');
        $('#notice-event').removeClass('on');
        $('#win-now').addClass('on');
    })


    
  })

  function changeVisual(num) {
    $('.tab-group a').removeClass('on');

    if(num == 1) {
        $('.tab-group a').eq(num - 1).addClass('on');
    } else if(num == 2) {
        $('.tab-group a').eq(num - 1).addClass('on');
    } else if(num == 3) {
        $('.tab-group a').eq(num - 1).addClass('on');
    }
    else if(num == 4) {
        $('.tab-group a').eq(num - 1).addClass('on');
    }
    };