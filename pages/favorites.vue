<template>
    <div>  
        <div v-if="!is_empty">
            <section class="fav-head-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="fav-head-wrap">
                                <h1 class="h1">У вас 3 товарa в избранном</h1>
                                <p class="fav-head-p">Здесь хранятся все товары, которые вы отметили сердечком в каталоге или на странице товара</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="fav-body-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                            <div class="fav-item-wrap">
                            <div class="fav-item-sale-percent">-40%</div>
                            <div class="fav-item-heart-wrap">
                                <div class="fav-item-heart-a-wrap">
                                <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                                </div>
                            </div>
                            <a href="" class="fav-item-a-wrap">
                                <div class="fav-item-goods-img-wrap">
                                <img src="/images/accessories-4.jpeg" alt="Цепочка, плетение Бисмарк, из серебра" class="fav-item-goods-img">
                                </div>
                                <div class="fav-item-price-wrap">
                                <span class="fav-item-price-actual">от 11 805 тг</span>
                                <strike class="fav-item-price-old">17 610 тг</strike>
                                </div>
                                <h2 class="fav-item-h2">Цепочка, плетение Бисмарк, из серебра</h2>
                            </a>
                            </div>
                        </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                            <div class="fav-item-sale-percent">-50%</div>
                            <div class="fav-item-heart-wrap">
                                <div class="fav-item-heart-a-wrap">
                                <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                                </div>
                            </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                                <img src="/images/earring-3.jpeg" alt="Серьги TALANT из золота с изумрудами и бриллиантами" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                                <span class="fav-item-price-actual">40 500 тг</span>
                                <strike class="fav-item-price-old">81 000 тг</strike>
                            </div>
                            <h2 class="fav-item-h2">Серьги TALANT из золота с изумрудами и бриллиантами</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent">-10%</div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/ring-1.jpeg" alt="Кольцо обручальное" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">от 25 320 тг</span>
                            <strike class="fav-item-price-old">29 809 тг</strike>
                            </div>
                            <h2 class="fav-item-h2">Кольцо обручальное гладкое из золота, 2 мм</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent">-20%</div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/accessories-3.jpeg" alt="Браслет, плетение Ромб тройной, из золота" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">от 36 100 тг</span>
                            <strike class="fav-item-price-old">41 900 тг</strike>
                            </div>
                            <h2 class="fav-item-h2">Браслет, плетение Ромб тройной, из золота</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent"></div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/earring-2.jpeg" alt="Серьги-пусеты с фианитом из серебра" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">4 900 тг</span>
                            <strike class="fav-item-price-old"></strike>
                            </div>
                            <h2 class="fav-item-h2">Серьги-пусеты с фианитом из серебра</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent"></div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/watch-1.jpeg" alt="Часы наручные Talant" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">13 665 тг</span>
                            <strike class="fav-item-price-old"></strike>
                            </div>
                            <h2 class="fav-item-h2">Часы наручные Talant 122.03.01.13.05</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent">-50%</div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/earring-1.jpeg" alt="Серьга-пусета из золота с бриллиантом" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">21 608 тг</span>
                            <strike class="fav-item-price-old">43 216 тг</strike>
                            </div>
                            <h2 class="fav-item-h2">Серьга-пусета из золота с бриллиантом</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent">-40%</div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/accessories-2.jpeg" alt="Подвеска TALANT из золота с фианитом" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">9 999 тг</span>
                            <strike class="fav-item-price-old">15 200 тг</strike>
                            </div>
                            <h2 class="fav-item-h2">Подвеска TALANT из золота с фианитом</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap">
                        <div class="fav-item-sale-percent"></div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/silver-1.jpeg" alt="Подвеска из серебра с фианитом" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">3600 тг</span>
                            <strike class="fav-item-price-old"></strike>
                            </div>
                            <h2 class="fav-item-h2">Подвеска из серебра с фианитом</h2>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-6 col-xs-6">
                        <div class="fav-item-wrap anymore-chosen">
                        <div class="fav-item-sale-percent">-40%</div>
                        <div class="fav-item-heart-wrap">
                            <div class="fav-item-heart-a-wrap">
                            <i class="fas fa-heart far" onclick="myFunction2(this)"></i>
                            </div>
                        </div>
                        <a href="" class="fav-item-a-wrap">
                            <div class="fav-item-goods-img-wrap">
                            <img src="/images/accessories-1.jpeg" alt="Зажим для галстука из серебра" class="fav-item-goods-img">
                            </div>
                            <div class="fav-item-price-wrap">
                            <span class="fav-item-price-actual">от 12 858 тг</span>
                            <strike class="fav-item-price-old">18 699 тг</strike>
                            </div>
                            <h2 class="fav-item-h2">При клике на сердце больше не избранное</h2>
                        </a>
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
                                <h1 class="e-h1">Сейчас у вас ничего нет в избранном</h1>
                                <p class="e-p">Список избранных товаров сохраняется в вашем аккаунте, что удобно, когда вы пользуетесь несколькоими устройствами. Войдите в свой аккаунт, чтобы увидеть сохраненные товары.</p>
                                <button class="e-button">Войти</button>
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
            is_empty:false
        }
    }
}
</script>

<style>

</style>