<template>
    <div class="contact-info d-block">
        <form id="app" class="become-teacher-form" @submit.prevent="checkForm" method="post" v-if="!success && !loading">
            <input type="hidden" name="tipo_mail" id="tipo_mail" value="Tira dúvidas sobre produtos" v-model="tipo_mail"/>
            <div class="row">
            <h4 class="title">Tira dúvidas sobre produtos oferecidos.</h4>
            <div class="col-md-12 max-mb-30">
                <input type="text" placeholder="Empresa " name="empresa" id="empresa"  v-model="empresa">
            </div>
            <div class="col-md-12 max-mb-30">
                <input type="email" placeholder="Email *" name="email" id="email"  v-model="email">
            </div>
            <div class="col-md-6 max-mb-30">
                <input type="text" placeholder="Nome *" name="nome" id="nome"  v-model="nome">
                
            </div>
            <div class="col-md-6 max-mb-30">
                <input type="text" placeholder="Telefone " name="phone"  id="phone" v-mask="['(##) ####-####', '(##) #####-####']"  v-model="phone">
            </div>
            <h4 class="col-md-12 max-mb-10 text-left">Mensagem</h4>
            <div class="col-12 max-mb-30">
                <textarea placeholder="Deixa sua mensagem e como deseja ser contatado. *" name="message" id="message"  v-model="message"></textarea>
                <p v-if="errors.length" class="info pt-3">
                    <b class="title">Por favor, corrija o(s) seguinte(s) erro(s):</b>
                    <ul class="pt-2">
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </p>
            </div>

            <div class="col-12">
                <input type="submit" class="btn btn-primary btn-hover-secondary" value="Enviar">
            </div>
            </div>
        </form>
        <div class="col-12 section-padding text-center d-block info" v-if="loading">
            <div class="loadingio-spinner-dual-ring-zo5azsgap1m">
                <div class="ldio-a8you79c3x6">
                    <div></div>
                    <div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 section-padding mt=4 mb-4 text-center d-block info" v-else-if="obrigado">
            <img src="/images/svg/visto.svg">
            <h4 class="title mb-2 mt-4 fz-30">Obrigado!</h4>
            <p class="fz-20">Seu formulário foi enviado com sucesso.</p>
        </div>
    </div>
</template>

<style lang="scss">
    textarea {
        min-height: 140px;
    }
</style>

<script> 

import {mask} from 'vue-the-mask'
import axios from 'axios'

export default {
        directives: {mask},
        data() {
            return{
                errors: [],
                empresa: null,
                email: null,
                nome: null,
                phone: null,
                message: null,
                success: false,
                loading: false,
                obrigado: false
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
                    if (!this.nome) {
                        this.errors.push('O nome é obrigatório.');
                    }
                    if (!this.email) {
                        this.errors.push('O email é obrigatório.');
                    }
                    if (!this.message) {
                        this.errors.push('A mensagem é obrigatória.');
                    }
                    if (!this.errors.length) {
                        await axios.post('https://email.sub100.com.br/sub100sistemas/form.php', {
                        'token': token,
                        'tipo_mail': "Tira dúvidas sobre produtos oferecidos",
                        'site': "SUB100 Loteamentos",
                        'empresa': this.empresa,
                        'contato': this.nome,
                        'email': this.email,
                        'phone': this.phone,
                        'message': this.message,
                        }).then(response => {
                            console.log('success', response.data);
                            this.success = true;
                            this.loading = true;
                            setTimeout(()=>{
                                this.loading = false;
                                this.obrigado = true;
                            },1000);
                        }).catch(error => {
                            console.log(error.response)
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