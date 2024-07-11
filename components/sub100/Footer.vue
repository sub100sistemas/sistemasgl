<template>
    <div class="footer-section" >
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-6 max-mb-50">
                    <div class="footer-widget footer-logo" :class="addClassName">
                        <a href="https://sistemasgl.com.br" aria-label="SUB100 Loteamentos" class="pb-3">
                            <inline-svg class="light-logo" src="/images/logo/dark-logo.svg?20220404" alt="SUB100 Loteamentos"/>
                         </a>
                        <h6 class="footer-widget-title mb-0">Localização</h6>
                        <div class="footer-widget-content">
                            <div class="content">
                                <p class="endereco">Rua Machado de Assis, 621<br/>
                                Zona 06 - CEP 87015-580<br/>
                                Maringá - PR</p>
                            </div>
                        </div>
                    </div>
                    <a data-fancybox="map" href="https://www.google.com/maps/search/?api=1&query=rua+machado+de+assis+621+maringa+pr" class="col-xs-12 btn btn-outline-secondary btn-hover-secondary-two mt-4 mt-md-0 mx-w-100">Como chegar</a>
                </div>
                
                <div class="col-xl-6 col-md-6 col-sm-7 max-mb-50">
                    <div class="footer-widget text-left text-xl-center" :class="addClassName">
                        <h6 class="footer-widget-title">Siga nas redes sociais</h6>
                        <div class="footer-social-inline d-block">
                            <a href="https://www.facebook.com/sub100brasil" target="_blank">
                                <img src="/images/icons/facebook.svg?20220407" width="30" height="34" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/sub100brasil/" target="_blank">
                                <img src="/images/icons/instagram.svg?20220407" width="30" height="34" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/sub100/" target="_blank">
                                <img src="/images/icons/linkedin.svg?2020407" width="34" height="34" alt="Linkedin" />
                            </a>
                            <a href="https://blog.sub100sistemas.com.br/"  target="_blank">
                                <img src="/images/icons/blog.svg?2022047" width="34" height="34" alt="Blog" />
                            </a>
                        </div>
                    </div>
                    <div class="max-mt-70 text-md-left text-xl-center pr-4 fz-14">
                        Há 24 anos, a SUB100 Sistemas ajuda a realizar os sonhos de milhões de pessoas, conectando através do seu Sistema de Gestão de Loteamentos - SGL a corretores, imobiliárias, loteadoras, incorporadoras e construtoras às pessoas que procuram um novo lugar para morar ou investir. 
                    </div>
                </div>

                <div class="col-xl-3 col-md-5 max-mb-50 text-left text-xl-right">
                    <h6 class="footer-widget-title mb-0">Comercial</h6>
                    <div class="footer-widget" :class="addClassName">
                        <div class="content">
                            <p class="comercial">
                                <a href="tel://04430325200" aria-label="ligar" title="Clique aqui para ligar agora" target="_blank">44 3032-5200</a><br/>
                                <a href="mailto:contato@sub100.com.br" aria-label="email" title="Clique aqui para enviar email"  target="_blank">contato@sub100.com.br</a>
                            </p>
                        </div>
                        <a href="https://web.whatsapp.com/send?phone=554430325208&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20do%20Sistema%C2%A0SGL" aria-label="whatsApp" title="Quero contato via WhatsApp" target="_blank" class="btn btn-primary mx-w-100 mb-3 d-none d-xl-block pl-0 pr-0">Quero contato via WhatsApp</a>
                        <a href="https://api.whatsapp.com/send?phone=554430325208&text=Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20do%20Sistema%C2%A0SGL" aria-label="whatsApp" title="Quero contato via WhatsApp" target="_blank" class="btn btn-primary mx-w-100 mb-3 d-block d-xl-none  pl-0 pr-0">Quero contato via WhatsApp</a>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <n-link to="/conteudo/termos-de-uso/" aria-label="Termos de uso">Termos de uso</n-link>
                                </li>
                                <li>
                                    <n-link to="/conteudo/politica-de-privacidade/" aria-label="Política de privacidade">Política de privacidade</n-link>
                                </li>
                                <li>
                                    <ColorMode />
                                </li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Copyright Start -->
            <div class="row max-mt-20">
                <div class="col">
                    <p class="copyright text-left text-xl-center"><span class="d-block d-md-inline">&copy; {{ new Date().getFullYear() }} <b>SUB100</b> Loteamentos</span> <img src="/images/icons/heart.svg?20220407" width="14" height="14" alt="Heart" /> by <a href="https://sub100sistemas.com.br/" aria-label="SUB100 Sistemas" target="_blank"><b>SUB100</b> Sistemas</a></p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top fal fa-long-arrow-up"></i>
                <i class="arrow-bottom fal fa-long-arrow-up"></i>
            </back-to-top>
        </client-only>
    </div>
</template>
<style lang="scss" scoped>
    .footer-logo img {
        width: 160px;
    }
    .footer-widget-content .endereco, .footer-widget .comercial {
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 20px;
    }
    .footer-social-inline a img {
        height: 34px;
        color: #5d5fef;
    }
</style>
<script>
    export default {
        props: [
            'addClassName', 
            'addBackgroundColor' 
        ],
        components: {
            ColorMode: () => import('@/components/sub100/ColorMode'),
        },
    }
</script>