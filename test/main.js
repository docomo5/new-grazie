$(function(){

    let num = 0; 

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
        num++;
        if(num > 3) {
            return
        }
        $('.gallery2  img').removeClass('on');
        $('.gallery2  img').eq(num).addClass('on');
    })


    $('.btn-group2 .prev').on('click', function(){
        num--;
        if(num < 0) {
            return
        }
        $('.gallery2  img').removeClass('on');
        $('.gallery2  img').eq(num).addClass('on');
    })

});
