<template>
<div>
    <div v-if="is_empty">
        <section class="cart-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="cart-h1">В вашей корзине 2 товарa</h1>
                    </div>
                </div>
            <div class="row">
            <div class="col-md-9">
                <div class="cart-subtitle-wrap">
                <h2 class="cart-sutitle">
                    Товары доступные для заказа
                </h2>
                </div>
                <div class="cart-items-wrap">
                <a href="" class="cart-item-img">
                    <img src="/images/watch-1.jpeg" alt="Часы наручные Talant 122.03.01.13.05" class="cart-item-img">
                </a>
                <div class="cart-item-art-n-name-wrap">
                    <div class="cart-item-art">
                        Арт. 4438228
                    </div>
                    <a href="" class="cart-item-name">
                        Часы наручные Talant 122.03.01.13.05
                    </a>
                </div>
                <div class="cart-item-quantity-wrap">
                    <a href="" class="cart-item-quantity-minus-wrap">
                    <i class="fas fa-minus"></i>
                    </a> 
                    1 шт.
                    <a href="" class="cart-item-quantity-plus-wrap">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
                <div class="cart-item-size">
                    Один размер
                </div>
                <div class="cart-item-price">
                    13 890 тг.
                </div>
                <div class="cart-item-delete">
                    <a href="" class="cart-item-delete-a-wrap">
                    <i class="fas fa-times"></i>
                    </a>
                </div>
                </div>
                <div class="cart-items-wrap">
                <a href="" class="cart-item-img">
                    <img src="/images/earring-2.jpeg" alt="Серьги из золота с бриллиантами" class="cart-item-img">
                </a>
                <div class="cart-item-art-n-name-wrap">
                    <div class="cart-item-art">
                        Арт. 8046042
                    </div>
                    <a href="" class="cart-item-name">
                        Серьги из золота с бриллиантами
                    </a>
                </div>
                <div class="cart-item-quantity-wrap">
                    <a href="" class="cart-item-quantity-minus-wrap">
                    <i class="fas fa-minus"></i>
                    </a> 
                    1 шт.
                    <a href="" class="cart-item-quantity-plus-wrap">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
                <div class="cart-item-size">
                    Один размер
                </div>
                <div class="cart-item-price">
                    43 890 тг.
                    <strike class="cart-item-discon-price">
                    87 780 тг.
                    </strike>
                </div>
                <div class="cart-item-delete">
                    <a href="" class="cart-item-delete-a-wrap">
                    <i class="fas fa-times"></i>
                    </a>
                </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="cart-sidebar-wrap">
                <div class="cart-sidebar">
                    <h4 class="cart-title">
                    Стоимость заказа
                    </h4>
                    <div class="cart-sidebar-price-wrap">
                    <span class="cart-sidebar-preprice">
                        Цена за 2 товарa
                    </span>
                    <span class="cart-sidebar-preprice-2">
                        68 900 тг
                    </span>
                    </div>
                    <div class="cart-sidebar-discount-wrap">
                    <span class="cart-sidebar-prediscount">
                        Скидка на товары
                    </span>
                    <span class="cart-sidebar-prediscount-2">
                        -18 900 тг
                    </span>
                    </div>
                    <hr>
                    <div class="cart-sidebar-full-cost">
                    <span class="cart-sidebar-precost">
                        Итого
                    </span>
                    <span class="cart-sidebar-precost-2">
                        50 000 тг
                    </span>
                    </div>
                    <button class="cart-siebar-order e-button">Оформить заказ</button>
                    <div class="cart-sidebar-order-wrap">
                    Итоговая стоимость указана без учета стоимости доставки, промокодов, бонусных баллов и дополнительных скидок.
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    <div v-else>
        <section class="e-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="e-wrap">
                            <h1 class="e-h1">Ваша корзина пуста</h1>
                            <p class="e-p">Здесь хранятся товары, которые вы добавили в корзину. Сейчас ваша корзина пуста. Загляните в каталог или посмотрите ваши избранные товары.</p>
                            <button class="e-button">В каталог</button>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            is_empty:true
        }
    }
}
</script>

<style>

</style>