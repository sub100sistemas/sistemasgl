<template>
    <div class="plan-section pb-5 pt-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col order-2">
                    <div class="about-content max-w-100 text-center">
                        <h1 class="sub-title mb-0">Planos - <strong>Sistema de Gestão de loteamentos SGL</strong></h1>
                        <h3 class="title fz-30 p-4">
                            Elaboramos planos que se encaixam ao perfil de seus
                            <div class="d-inline d-xl-block"> empreendimentos e suprem as necessidades de sua Loteadora</div>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row max-mb-n30">
                <div class="col box-plan text-center">
                    <p class="sub-title fz-22 mb-0 titlePlano"> Plano</p>
                    <h3 class="mb-0">Paraná</h3>
                    <p class="mt-4 mb-4 fz-16"><strong>Início da expansão imobiliária,<br/>1 empreendimento</strong></p>
                    <hr>
                    <p class="mb-0 fz-16"><strong>Setup inicial</strong></p>
                    <p class="mais mb-0"> +</p>
                    <h4>Mensalidade</h4>
                    <a href="/sobre-o-setup/" class="btn btn-outline-primary mb-3 d-block mt-4">Sobre o setup</a>
                    <a href="/fale-conosco/" class="btn btn-secondary btn-hover-secondary-two mb-0 d-block">Fale conosco</a>
                </div>
                <div class="col box-plan text-center">
                    <p class="sub-title fz-22 mb-0 titlePlano"> Plano</p>
                    <h3 class="mb-0">Minas Gerais</h3>
                    <p class="mt-4 mb-4 fz-16"><strong>Em plena expansão imobiliária,<br/> com até 4 empreendimentos</strong></p>
                    <hr>
                    <p class="mb-0 fz-16"><strong>Setup inicial</strong></p>
                    <p class="mais mb-0"> +</p>
                    <h4>Mensalidade</h4>
                    <a href="/sobre-o-setup/" class="btn btn-outline-primary mb-3 d-block mt-4">Sobre o setup</a>
                    <a href="/fale-conosco/" class="btn btn-secondary btn-hover-secondary-two mb-0 d-block">Fale conosco</a>
                </div>
                <div class="col box-plan text-center">
                    <p class="sub-title fz-22 mb-0 titlePlano"> Plano</p>
                    <h3 class="mb-0">Mato Grosso</h3>
                    <p class="mt-4 mb-4 fz-16"><strong>Quer e precisa mais? O SGL se<br/>adapta às suas necessidades</strong></p>
                    <hr>
                    <h4 class="espaco">Quero personalizar<div class="d-block d-xl-initial">meu plano</div></h4>
                    <a href="/fale-conosco/" class="btn btn-secondary btn-hover-secondary-two mb-0 d-block">Fale conosco</a>
                </div>
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
