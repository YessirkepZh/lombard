<template>
<footer>
  <div class="container-md">
    <div class="row">
      <div class="col-md-12 mobile-footer">
        <button class="collapsible">Покупателям</button>
        <div class="footer-content">
          <ul>
            <li><nuxt-link to="cabinet">Личный кабинет</nuxt-link></li>
            <li><nuxt-link to="delivery">Доставка и оплата</nuxt-link></li>
            <li><nuxt-link to="return-exchange">Возврат и обмен</nuxt-link></li>
            <li><nuxt-link to="">Акции</nuxt-link></li>
            <li><nuxt-link to="">Клуб привелегий</nuxt-link></li>
            <li><nuxt-link to="">Рассрочка и кредит</nuxt-link></li>
            <li><nuxt-link to="faq">Частые вопросы</nuxt-link></li>
            <li><nuxt-link to="">Журнал</nuxt-link></li>
            <li><nuxt-link to="">Карта сайта</nuxt-link></li>
          </ul>
        </div>
        <button class="collapsible">О компании</button>
        <div class="footer-content">
          <ul>
            <li><nuxt-link to="about" class="footer-list-title">О компании</nuxt-link></li>
            <li><nuxt-link to="">Работа у нас</nuxt-link></li>
            <li><nuxt-link to="">Корпоративная культура</nuxt-link></li>
            <li><nuxt-link to="">Ломбарды</nuxt-link></li>
            <li><nuxt-link to="">Социальные проекты</nuxt-link></li>
            <li><nuxt-link to="">Франчайзинг</nuxt-link></li>
            <li><nuxt-link to="">Займы до зарплаты</nuxt-link></li>
            <li><nuxt-link to="">Контакты</nuxt-link></li>
            <li><nuxt-link to="contact">Правовая информация</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 desktop-footer">
        <div class="footer-list-wrap">
          <ul>
            <li><nuxt-link to="/" class="footer-list-title">Покупателям</nuxt-link></li>
            <li><nuxt-link to="cabinet">Личный кабинет</nuxt-link></li>
            <li><nuxt-link to="delivery">Доставка и оплата</nuxt-link></li>
            <li><nuxt-link to="return-exchange">Возврат и обмен</nuxt-link></li>
            <li><nuxt-link to="">Акции</nuxt-link></li>
            <li><nuxt-link to="">Клуб привелегий</nuxt-link></li>
            <li><nuxt-link to="">Рассрочка и кредит</nuxt-link></li>
            <li><nuxt-link to="faq">Частые вопросы</nuxt-link></li>
            <li><nuxt-link to="">Журнал</nuxt-link></li>
            <li><nuxt-link to="">Карта сайта</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-2 desktop-footer">
        <div class="footer-list-wrap">
          <ul>
            <li><nuxt-link to="about" class="footer-list-title">О компании</nuxt-link></li>
            <li><nuxt-link to="">Работа у нас</nuxt-link></li>
            <li><nuxt-link to="">Корпоративная культура</nuxt-link></li>
            <li><nuxt-link to="">Ломбарды</nuxt-link></li>
            <li><nuxt-link to="">Социальные проекты</nuxt-link></li>
            <li><nuxt-link to="">Франчайзинг</nuxt-link></li>
            <li><nuxt-link to="">Займы до зарплаты</nuxt-link></li>
            <li><nuxt-link to="">Контакты</nuxt-link></li>
            <li><nuxt-link to="contact">Правовая информация</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-5">

      </div>
      <div class="col-md-3">
        <div class="footer-right-wrap">
          <div class="footer-phone-wrap">
            <nuxt-link to="tel:">8 (***) *** ****</nuxt-link>
          </div>
          <div class="footer-social-wrap">
            <nuxt-link to="#" target="_blank"><img src="../../static/images/instagram.svg" alt=""></nuxt-link>
            <nuxt-link to="#" target="_blank"><img src="../../static/images/facebook.svg" alt=""></nuxt-link>
            <nuxt-link to="#" target="_blank"><img src="../../static/images/whatsapp.svg" alt=""></nuxt-link>
          </div>
          <div class="copyright">
            2020, © 
            Все права защищены. Информация, размещенная на данной странице, не является публичной офертой.
          </div>
        </div>
      </div>
    </div>
  </div>
  </footer>
</template>

<script type="text/javascript">
export default {
    data: function () {
        return {
           
        }
    }
}
</script>