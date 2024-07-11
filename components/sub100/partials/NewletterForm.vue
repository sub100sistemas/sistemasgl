<template>
    <div>
        <h2 class="title">Inscreva-se no nosso <span>newsletter</span></h2>
        <p class="subtitle">Digite seu endereço de e-mail para se registrar<br class="d-none d-md-block">em nossa assinatura de newsletter</p>
        <div class="newsletter-form">
            <form id="app" class="become-teacher-form" @submit.prevent="checkForm" method="post" v-if="!success && !loading">
                <input type="hidden" name="tipo_mail" id="tipo_mail" value="Newsletter"/>
                <input type="email" placeholder="Seu e-mail" name="email" id="email"  v-model="email">
                <button type="submit" class="botao btn btn-primary btn-hover-secondary" :disabled="loading">Enviar</button>
            </form>
            
            <div class="col-12 text-center d-block info" v-if="loading">
                <div class="loadingio-spinner-dual-ring-zo5azsgap1m">
                    <div class="ldio-a8you79c3x6">
                        <div></div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt=4 text-center d-block info" v-else-if="obrigado">
                <h4 class="title mb-2 mt-4 fz-20">Obrigado!</h4>
                <p class="fz-16 mt-2">Seu email foi cadastrado com sucesso.</p>
            </div>
            <div v-else-if="errors.length" class="mt-4">
                <b class="title fz-20">Por favor, corrija o seguinte erro:</b>
                <p class="mt-0 fz-16" v-for="error in errors" :key="error">{{ error }}</p>
            </div>
        </div>
    </div>
</template>
<script> 
import {mask} from 'vue-the-mask'
import axios from 'axios'

export default {
        directives: {mask},
        data() {
            return{
                errors: [],
                email: null,
                success: false,
                loading: false,
                obrigado: false,
                subtitle: true
            }
        },
        async mounted() {
            try {
                await this.$recaptcha.init()
            } catch (e) {
                console.log(e);
            }
        },
        methods:{
            checkForm: async function (e) {
                e.preventDefault();

                try {
                    const token = await this.$recaptcha.execute('login')
                    console.log('ReCaptcha token:', token)

                    this.errors = [];
                    if (!this.email) {
                        this.errors.push('Email');
                    }
                    if (!this.errors.length) {
                        this.loading = true;
                        await axios.post('https://email.sub100.com.br/sub100sistemas/form.php', {
                        'token': token,
                        'tipo_mail': "Newsletter",
                        'site': "SUB100 Loteamentos",
                        'email': this.email
                        }).then(response => {
                            console.log('success', response.data);
                            this.success = true;
                        }).catch(error => {
                            console.log(error.response)
                        }).finally(() => {
                            this.loading = false;
                            this.obrigado = true;
                        });
                        return true;
                    }
                } catch (error) {
                    console.log('Login error:', error)
                }                
            }
        }
    }
</script>