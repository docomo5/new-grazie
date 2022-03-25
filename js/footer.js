function footer() {
    return `
    <footer id="main-footer">
    <div class="footer-info pc-only">
      <img src="./images/logo.svg" alt="logo">
      <div class="footer-text">
        <p>
          주식회사 풍전 F&B <br>
          서울특별시 영등포구 양평로 21다길 22 그라찌에 빌딩 8층 <br>
          전화 : 02-336-7241 <span>|</span> 팩스: 02-338-7242
        </p>
      </div>
      <div class="footer-text2">
        <p><a href="#"><strong>개인정보처리방침</strong></a></p>
        <p><a href="#">이메일주소 무단수집 거부</a></p>
        <p><a href="#">위치기반서비스 이용약관</a></p>
        <p><a href="#">고객문의</a></p>
      </div>
      <div class="sns-group">
        <a href="#"><img src="./images/instagram.svg" alt="instagram"></a>
        <a href="#"><img src="./images/facebook.svg" alt="facebook"></a>
        <a href="#"><img src="./images/twitter.svg" alt="twitter"></a>
      </div>
      <a href="#" class="top-btn"><img src="./images/arrow-up.svg" alt="위로가기"></a>
      <hr>
      <p class="copy">Copyright ⓒ 2014 GRAZIE Co.,Ltd All Rights Reserved.</p>
    </div>
    <div class="footer-info mobile-only">
      <img src="./images/logo.svg" alt="logo">
      <div class="footer-text">
        <div class="sns-group">
          <a href="#"><img src="./images/instagram.svg" alt="instagram"></a>
          <a href="#"><img src="./images/facebook.svg" alt="facebook"></a>
          <a href="#"><img src="./images/twitter.svg" alt="twitter"></a>
        </div>
        <div class="footer-text">
          <p>주식회사 풍전 F&B</p>
          <p>서울특별시 영등포구 양평로 21다길 22 <br>
            그라찌에 빌딩 8층</p>
          <p>전화 : 02-336-7241 <br>
            팩스: 02-338-7242</p>
        </div>
        <p class="copy">Copyright ⓒ 2014 GRAZIE Co.,Ltd All Rights Reserved.</p>
        <a href="#" class="top-btn"><img src="./images/arrow-up.svg" alt="위로가기"></a>
      </div>
  </footer>    `
  }
  
  const footerName = '.footer-component'; // class 요소명
  document.querySelector(footerName).innerHTML = footer();