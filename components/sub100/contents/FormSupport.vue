<template>
    <div class="contact-us-page-wrapper section-padding-top-60">
        <div class="contact-form-section pt-5 text-center">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="contact-title">
                            <h2 class="sub-title">Envie uma mensagem utilizando o formulário abaixo:</h2>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            ContactForm: () => import('@/components/sub100/partials/ContactForm'),
        }
    };
</script>