<template>
    <section class="personal-cabinet">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="personal-cab-wrap">
                        <h1 class="h1">Вход или регистрация</h1>
                        <label class="personal-cab-label">Номер телефона</label>
                        <input type="tel" name="" id="" placeholder="+7" autocomplete="on" class="personal-cab-input">
                        <p class="personal-cab-under-input">
                            Введите номер телефона для доступа к личному кабинету
                        </p>
                        <button type="submit" class="personal-cab-button" disabled>Продолжить</button>

                        <form class="form auth-form" @submit.prevent="sendForm">
                            <div class="form-group">
                                <label class="personal-cab-label" for="iin">ИИН</label>
                                <TheMask 
                                    :mask="['#### #### ####']" 
                                    v-model.trim="form.iin" 
                                    id="iin" class="input" 
                                    type="text" 
                                    placeholder="ИИН"
                                    
                                    />
                            </div>
                            <div class="form-group">
                                <label class="personal-cab-label" for="pass">ПАРОЛЬ</label>
                                <PasswordField
                                    ids="pass"
                                    v-model.trim="form.pass"
                                    classes="input"
                                    placeholder="ПАРОЛЬ"
                                    
                                    
                                />
                                <!-- <input 
                                    v-model.trim="form.pass" 
                                    id="pass" class="input" 
                                    type="password" 
                                    placeholder="Введите пароль"
                                    :disabled="ux.loading"
                                    > -->
                                <div class="restore-pass">
                                    <nuxt-link 
                                        class="link" 
                                        :to="$i18n.path('auth/restore/step-1')">
                                       Забыли пароль?
                                    </nuxt-link>
                                </div>
                            </div>
                            <div class="form-group">
                                <Alert 
                                    v-show="ux.alertShow" 
                                    :show.sync="ux.alertShow" 
                                    :text="ux.alertText" 
                                    :type="ux.alertType"/>
                            </div>
                            <div class="form-group form-controls justify-content-center justify-content-sm-between">
                                <button 
                                    class="btn btn-lean btn-m-right" 
                                    :disabled="ux.loading">
                                    Войти
                                </button>
                                <nuxt-link 
                                    :to="$i18n.path('auth/signup/step-1')" 
                                    class="btn btn-lean btn-unimportant" 
                                    :disabled="ux.loading">
                                    Регистрация
                                    
                                </nuxt-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mask, TheMask} from 'vue-the-mask'
export default {
components: {WelcomeUser, TheMask, Alert},
directives: {mask}
}

</script>

<style lang="scss" src="@/assets/style/styles.scss"></style>