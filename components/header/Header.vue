<template>
      <header>
      <div class="h-top">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-lg-7 col-sm-2 col-xs-2">
              <div id="burg">
                <a href="#">
                  <span class="bar" id="top"></span>
                  <span class="bar" id="middle"></span>
                  <span class="bar" id="bottom"></span>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
              <div class="hl-lg-w">
                <nuxt-link to="/" class="hl-lg-a">
                  <img src="/images/8jsg-_2k1.png" alt="логотип">
                </nuxt-link>
              </div>
            </div>
            <div class="col-md-6 col-sm-4 col-xs-4">
              <div class="hr-w">
                <div class="hr-w-left">
                  <div class="hr-lc-w">
                    <a href="#" class="hr-lc-a">
                      <img src="/images/location.svg" alt="локация">
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
                      <button id="yes_city" class="hr-lc-dropdown-yes-btn hr-lc-dropdown-btns" @click.prevent="closeCityModal()" >Да, верно</button>
                      <button class="hr-lc-dropdown-no-btn hr-lc-dropdown-btns" @click.prevent="nextCityModal()" >Нет, другой</button>
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
                    <nuxt-link to="/shop" class="hr-sh-a">
                      Магазины
                    </nuxt-link>
                  </div>
                  <div class="hr-lb-w">
                    <a href="#" class="hr-lb-a">
                      Ломбарды
                    </a>
                  </div>
                </div>
                <div class="hr-w-right">
                  <nuxt-link to="#" class="hr-w-ic-search">
                    <img src="/images/search.svg" alt="поиск">
                  </nuxt-link>
                  <nuxt-link to="favorites" class="hr-w-ic-like">
                    <img src="/images/like.svg" alt="избранные">
                  </nuxt-link>
                  <nuxt-link to="cart" class="hr-w-ic-cart">
                    <img src="/images/cart.svg" alt="корзина">
                  </nuxt-link>
                  <nuxt-link to="cabinet" class="hr-w-ic-login">
                    <img src="/images/user.svg" alt="пользователь">
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-bot">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <nav>
                <ul class="first-ul">
                  <li>
                    <a href="category.html" class="header-first-list-a">Бриллианты</a>
                  </li>
                  <li class="header-first-list">
                    <a href="category.html" class="header-first-list-a">Кольца</a>
                    <div class="dropdown">
                      <ul class="dropdown-menu">
                        <li class="header-second-list">
                          <a href="category.html">Все кольца</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Золотые кольца</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Серебрянные кольца</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Без вставок</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Обручальные кольца</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Помолвочные кольца</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Кольца с бриллиантами</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Кольца с цветными камнями</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Кольца с фианитами</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Кольца с эмалью</a>
                        </li>
                        <li class="header-second-list">
                          <a href="category.html">Печатки</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Обручальные кольца</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Комплекты</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Серьги</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Цепи и колье</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Национальные украшения</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Браслеты</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Подвески</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Мужчинам</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Часы</a>
                  </li>
                  <li>
                    <a href="category.html" class="header-first-list-a">Милые мелочи красотульки</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-tab">

        <div class="hr-lc-w-mob">
          <div class="hr-lc-w">
            <a href="#" class="hr-lc-a">
              <img src="/images/location.svg" alt="локация">
              <span>Алматы</span>
            </a>

            <div class="hr-lc-dropdown-mob" id="city_dropdown_mob">
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
                <button class="hr-lc-dropdown-no-btn hr-lc-dropdown-btns">Нет, другой</button>
              </div>
            </div>
          </div>
          <div class="hr-sh-w">
            <a href="shops.html" class="hr-sh-a">
              Магазины
            </a>
          </div>
        </div>
        <div class="hr-lb-w-mob">
          <a href="#" class="hr-lb-a">
            Ломбарды
          </a>
        </div>
        <div class="hr-lg-w-mob">
          <a href="personal-cabinet.html" class="hr-w-ic-login">
            <img src="/images/user.svg" alt="пользователь">
            Войти
          </a>
        </div>

        <nav id="mobile">
          <ul class="mobile-ul">

            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Бриллианты</a>
            </li>
            <li class="mobile-li">
              <a href="#" class="mobile-a dropdown-toggle" data-toggle="dropdown">Кольца</a>
              <div class="dropdown-content">
                <ul class="dropdown-menu">
                  <li class="header-second-list">
                    <a href="category.html">Все кольца</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Золотые кольца</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Серебрянные кольца</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Без вставок</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Обручальные кольца</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Помолвочные кольца</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Кольца с бриллиантами</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Кольца с цветными камнями</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Кольца с фианитами</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Кольца с эмалью</a>
                  </li>
                  <li class="header-second-list">
                    <a href="category.html">Печатки</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="category.html" class="header-first-list-a">Обручальные кольца</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Комплекты</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Серьги</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Цепи и колье</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Национальные украшения</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Браслеты</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Подвески</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Мужчинам</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Часы</a>
            </li>
            <li class="header-second-list">
              <a href="category.html" class="header-first-list-a">Милые мелочи красотульки</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
export default {
    data: function(){
        return{

        }
    },
    components: {
    
    },
    methods:{
        closeCityModal: function(){
            document.getElementById('city_dropdown').style.display = "none";
        },
        nextCityModal: function(){
            document.getElementById('city_dropdown').style.display = "none";
            document.getElementById('city_dropdown_2').style.display = "block";
        }
    }
}
</script>

<style lang="scss" src="@/assets/style/styles.scss"></style>
