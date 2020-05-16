<template>
    <body>
    <header class= "top-header">
        <div class="header__top">
            <div class="header__column">
                <i class="fas fa-plane"></i>
                <i class="fas fa-wifi"></i>
            </div>
            <div class="header__column">
                <span class="header_time">11:24</span>
            </div>
            <div class="header__column">
                <i class="fas fa-moon"></i>
                <i class="fab fa-bluetooth-b"></i>
                <span class="header_bettery">111% <i class="fas fa-battery-full"></i> </span>
            </div>
        </div>
        <div class="header__bottom">
            <div class="header__column">
                <span class="header__text">편집</span>
            </div>
            <div class="header__column">
                <span class="header__text">친구</span><span class="header__number">21</span>
            </div>
            <div class="header__column">
                <i class="fa fa-cog fa-lg"></i>
            </div>
        </div> <!-- 상단 헤더 섹션 -->
    </header>

    <main class="friends">
        <div class="search-bar">

            <input type="text" placeholder="검색">
        </div> <!-- 검색 섹션 -->

        <section class="friends__section">
            <header class="frindes__section-header">
                <h6 class="friends__section-title">내 프로필</h6>
            </header>
            <div class="friends__section-rows">
                <div class="friends__section-row">

                    <img src="images/kakao_friends.png">
                    <a href="profile.html" class="friends__section-name">
                        건상
                    </a>
                </div>

            </div>
        </section> <!-- 내 프로필 섹션 -->

        <section class="friends__section">
            <header class="frindes__section-header">
                <h6 class="friends__section-title">친구</h6>
            </header>
            <div class="friends__section-rows">
                <div class="friends__section-row with-tagline">
                    <div class="friends__section-column">
                        <img src="images/kakao_friends.png">
                        <span class="friends__section-name">유정</span>
                    </div>
                    <span class="friends__section-tagline">유정유정해</span>
                </div>
            </div>
        </section> <!-- 친구 섹션 -->
    </main>

    <nav class="tab-bar">
        <a href="main" class="tab-bar__tab tab-bar__tab--selected">
            <i class="fa fa-user"></i>
            <span class="tab-bar__title">친구</span>
        </a>

        <a href="roomList" class="tab-bar__tab">
            <i class="fas fa-comment"></i>
            <span class="tab-bar__title">채팅</span>
        </a>

        <a href="channel.html" class="tab-bar__tab">
            <i class="fa fa-search"></i>
            <span class="tab-bar__title">채널</span>
        </a>

        <a href="more.html" class="tab-bar__tab">
            <i class="fa fa-ellipsis-h"></i>
            <span class="tab-bar__title">더보기</span>
        </a>
    </nav> <!-- 하단 푸터 네비게이션 바 -->
    </body>
</template>