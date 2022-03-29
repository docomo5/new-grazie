// 자바스크립트로 생성된 html components
function header () {
    return `
    <header id="main-header">
    <div class="container">
      <h1>
        <a href="./">
          <img src="./images/logo.png" alt="그라찌에 로고">
        </a>
      </h1>

      <nav id="gnb">
        <ul>
          <li><a href="./about.html">About us</a></li>
          <li><a href="./menu.html">Menu</a></li>
          <li><a href="./sub-03.html">Event</a></li>
          <li><a href="#">Franchise</a></li>
          <li><a href="#">Service</a></li>
        </ul>
      </nav>

      <div class="right-menu">
        <!-- PC용 메뉴 버튼 -->
        <div id="finder" class="pc-only">
          <a href="#"><img src="./images/finder.png" alt="검색"></a>
        </div>
        <div id="login">
          <a href="#"><img src="./images/login.png" alt="로그인"></a>
        </div><!-- 모바일용 토글 버튼 -->
        <button id="toggle_btn" class="mobile-only">
          <img src="images/toggle.png" alt="사이트맵 버튼">
        </button>
      </div>
    </div>



  </header>

    `
  }
  
  // 문서에 html 생성
  const headerName = '.header-component'; // class 요소명
  document.querySelector(headerName).innerHTML = header();