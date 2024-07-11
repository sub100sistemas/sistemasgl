<template>
    <div class="demo-section section-padding">
        <div class="container">
            <div class="row max-mb-n30">
                <!-- Content Start -->
                <div class="col">
                    <div class="demo-content pt-0 pt-xl-5 pl-2 pl-xl-5">
                        <ShapeWithAnimation addClassName="corner d-none d-xl-block" imgSrc="/images/sub100/corner.svg?20220404" dataWidth="143" dataHeight="120"/>
                        <h1 class="title max-mb-50">Fale <span>conosco</span></h1>
                        <div>
                                <div class="max-mb-30">
                                <div class="contact-info">
                                    <div class="icon">
                                        <i class="fal fa-clock"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title">Horário de funcionamento</h4>
                                        <span class="info-text">
                                            <p>De segunda-feira a sexta-feira</p>
                                            <p>08:30 ás 12:00 - 13:00 ás 17:30</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="max-mb-30">
                                <div class="contact-info">
                                    <div class="icon">
                                        <i class="fab fa-whatsapp"></i>
                                        <img src="/images/icons/whatsapp.svg?20220407" width="28" height="32" alt="Whatsapp" style="margin-top: -30px;" />
                                    </div>
                                    <div class="info">
                                        <h4 class="title">Atendimento</h4>
                                        <span class="info-text">
                                            44 3032-5200 <br>
                                            <a href="https://web.whatsapp.com/send?phone=554430325208&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20do%20Sistema%C2%A0SGL" target="_blank" class="col-xs-12 btn btn-outline-secondary btn-hover-secondary-two mt-3  mx-w-100 d-none d-xl-table">(44) 3032-5208</a>
                                            <a href="https://api.whatsapp.com/send?phone=554430325208&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20do%20Sistema%C2%A0SGL" target="_blank" class="col-xs-12 btn btn-outline-secondary btn-hover-secondary-two mt-3  mx-w-100 d-block d-xl-none">(44) 3032-5208</a>
                                            <p class="mt-2">Inicie o atendimento pelo WhatsApp <br>ou ligue para entrar em contato</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!--
                            <div class="max-mb-30">
                                <div class="contact-info">
                                    <div class="icon">
                                        <i class="fal fa-phone"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title">Telefone</h4>
                                        <span class="info-text"> 
                                            <a href="tel:+04430325200" class="col-xs-12 btn btn-outline-secondary btn-hover-secondary-two mt-4 mt-md-0 mx-w-100">(44) 3032-5200</a>
                                            <p class="mt-2">Ligue para entrar em contato</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            -->
                            <div class="max-mb-30">
                                <div class="contact-info">
                                    <div class="icon">
                                        <i class="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div class="info">
                                        <h4 class="title">Endereço</h4>
                                        <span class="info-text">Rua Machado de Assis, 621<br/>Zona 05 - CEP 87015-580<br/>Maringá - PR</span>
                                        <a data-fancybox="map2" href="https://www.google.com/maps/search/?api=1&query=rua+machado+de+assis+621+maringa+pr" class="col-xs-12 btn btn-outline-secondary btn-hover-secondary-two mt-3  mx-w-100">Como chegar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <!-- Content End -->
                <!-- Demo Form Start -->
                 <div class="col instructor-register-from ml-0 ml-xl-5">
                    <div class="contact-form pl-90 pl-md-0 pl-sm-0 pl-xs-0">
                        <ContactForm />
                    </div>
                </div>
                <!-- Demo Form End -->
            </div>
        </div>
        <!-- Curva Shape Start -->
        <div class="sub100-demo d-none d-md-block">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2500px" height="282px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 25000 2814.1">
                <g id="curvaBackgroundBottom">
                <rect class="fil0" y="189.1" width="25000" height="2625"/>
                <path class="fil1" d="M0 0l25000 0 0 785.3c-1706,-198.3 -5122.9,-299.9 -10454.2,822.1 -3662.1,770.7 -7974.2,250.5 -7974.2,250.5 0,0 -2877.2,-134 -4960.7,-541.9 -601.7,-117.8 -1135.4,-209.2 -1610.9,-278.8l0 -1037.2z"/>
                <path class="fil2" d="M25000 623c-1706,-190.6 -5122.9,-280.8 -10454.2,841.2 -3012.5,634 -6464.3,500.2 -7594.3,432.7 1130,105 4581.8,344.5 7594.3,-289.5 5331.3,-1122 8748.2,-1020.4 10454.2,-822.1l0 -162.3z"/>
                </g>
            </svg>
        </div>
        <!-- Curva Shape End -->
    </div>
</template>
<style lang="scss">
    .dark-mode {
        #curvaBackgroundBottom .fil0 {
            fill: $bg-dark !important;
        }
    }
</style>
<script>
    export default {
        components: {
            ContactForm: () => import('@/components/sub100/partials/ContactForm'),
        }
    };
</script>
