<template>
    <header>
        <div class="h-top">
            <div class="container-fuild">
            <div class="row ml-5 mt-2">
                <div class="col-md-7 col-lg-7 col-sm-2 col-xs-2">
                <div id="burg">
                    <a href="#">
                    <span class="bar" id="top"></span>
                    <span class="bar" id="middle"></span>
                    <span class="bar" id="bottom"></span>
                    </a>
                </div>
                </div>
                <div class="col-md-7 col-lg-7 col-sm-6 col-xs-6">
                <div class="hl-lg-w">
                    <a href="#" class="hl-lg-a">
                    <img src="../../static/images/8jsg-_2k1.png" alt="логотип">
                    </a>
                </div>
                </div>
                <div class="col-md-5 col-sm-4 col-xs-4">
                <div class="hr-w">
                    <div class="hr-w-left">
                    <div class="hr-lc-w">
                        <a href="#" class="hr-lc-a">
                        <img src="../../static/images/location.svg" alt="локация">
                        <span>Алматы</span>
                        </a>
                    </div>

                    <!-- Модальное окно открывается при первом входе на сайт и спрашивает ваш ли это город -->
                    <div class="hr-lc-dropdown" id="city_dropdown">
                        <div class="hr-lc-dropdown-body">
                        <div class="hr-lc-dropdown-city-name">
                        Алматы
                        </div>
                        <div class="hr-lc-dropdown-ask">
                            Это ваш город?
                        </div>
                        </div>
                        <div class="hr-lc-dropdown-btns-wrap">
                        <button id="yes_city" class="hr-lc-dropdown-yes-btn hr-lc-dropdown-btns" onclick="closeCityModal()" >Да, верно</button>
                        <button class="hr-lc-dropdown-no-btn hr-lc-dropdown-btns" onclick="nextCityModal()" >Нет, другой</button>
                        </div>
                    </div>
                    <!-- / Модальное окно открывается при первом входе на сайт и спрашивает ваш ли это город -->

    <!-- Модальное окно открывается после того что выше если пользователь нажмет кнопку нет, в модальном окне будет предложено выбрать его город -->
                    <div class="hr-lc-dropdown-2" id="city_dropdown_2">
                        <div class="hr-lc-dropdown-2-input-wrap">
                        <p class="hr-lc-dropdown-2-city-input-p">
                            Введите название города
                        </p>
                        <input type="text" class="hr-lc-dropdown-2-city-input" value="">
                        </div>
                        <div class="hr-lc-dropdown-2-cities-list-wrap">
                        <ul>
                            <li><a href="">Алматы</a></li>
                            <li><a href="">Нур-Султан</a></li>
                            <li><a href="">Талдыкорган</a></li>
                            <li><a href="">Караганда</a></li>
                            <li><a href="">Актау</a></li>
                            <li><a href="">Атырау</a></li>
                            <li><a href="">Актобе</a></li>
                            <li><a href="">Шымкент</a></li>
                            <li><a href="">Тараз</a></li>
                            <li><a href="">Павлодар</a></li>
                            <li><a href="">Петропавлск</a></li>
                            <li><a href="">Уральск</a></li>
                            <li><a href="">Усть-Каменогорск</a></li>
                            <li><a href="">Кокшетау</a></li>
                        </ul>
                        </div>
                        <div class="hr-lc-dropdown-2-find-city-auto-wrap">
                        <i class="far fa-dot-circle"></i>
                        <a href="" class="hr-lc-dropdown-2-find-city-auto-p">Определить автоматически</a>
                        </div>  
                    </div>
    <!-- / Модальное окно открывается после того что выше если пользователь нажмет кнопку нет, в модальном окне будет предложено выбрать его город -->

                    <div class="hr-sh-w">
                        <a href="shops.html" class="hr-sh-a">
                        Магазины
                        </a>
                    </div>
                    <div class="hr-lb-w">
                        <a href="#" class="hr-lb-a">
                        Ломбарды
                        </a>
                    </div>
                    </div>
                    <div class="hr-w-right">
                    <a href="#" class="hr-w-ic-search">
                        <img src="images/search.svg" alt="поиск">
                    </a>
                    <a href="favorites.html" class="hr-w-ic-like">
                        <img src="images/like.svg" alt="избранные">
                    </a>
                    <a href="#" class="hr-w-ic-cart">
                        <img src="images/cart.svg" alt="корзина">
                    </a>
                    <a href="personal-cabinet.html" class="hr-w-ic-login">
                        <img src="images/user.svg" alt="пользователь">
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="css" src="@/assets/style/styles.css"></style>
