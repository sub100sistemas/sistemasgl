<template>
    <div class="position-relative pt-0 mt-5 mt-md-0 pb-5">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 align-items-center pt-2 pt-xl-0">
                <div class="col">
                    <div class="faq-content-area">
                        <div class="section-title text-left mb-50" data-aos="fade-up">
                            <span class="sub-title mb"><strong>Clientes</strong> </span>
                            <h4 class="title fz-30 max-mb-30">Onde nossos <span>clientes estão</span></h4>
                            <p class="max-mb-30">Nossos clientes estão distribuídos em todas as regiões do Brasil e diante desta realidade, aprimoramos nosso Sistema de Gestão de Loteamento o SGL, adequando-o à várias situações, desde a sua usabilidade até o desempenho do programa frente a baixa qualidade de sinal da internet em determinadas regiões.</p>
                            <h4 class="title fz-30 max-mb-30">Com o que <span>eles atuam</span></h4>
                            <p class="max-mb-30">Atendemos clientes que fazem toda a incorporação do empreendimento, clientes que utilizam o Sistema de Gestão de Loteamento SGL para vender seus próprios empreendimentos ou de parceiros e clientes que apenas administram os recebíveis.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="faq-right-image mapaSub100 d-table mt-3 mt-xl-0 mb-0 mb-xl-3">
                        <img src="/images/sub100/mapa.svg?20230705" width="515" height="520" alt="Nossos clientes">
                    </div>
                </div>
            </div>
        </div>
        <div class="sub100-shape d-none d-md-block">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="2498px" height="216px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 2498 215.97">
            <metadata id="CorelCorpID_0Corel-Layer"/>
                <g id="curvaBackgroundBottom">
                    <path class="fil0" d="M2498 27.23c-169.56,-35.82 -526.9,-66.28 -1057.41,114.83 -353.07,120.56 -794.58,34.94 -794.58,34.94 0,0 -348.98,-73.15 -495.36,-38.79 -60.57,14.22 -110.63,37.34 -150.65,62.1l0 14.93 2498 0 0 -188.01 0 0z"/>
                    <path class="fil1" d="M2498 56.71c-174.44,-37.7 -527.25,-68.32 -1048.16,99.83 -355.92,114.9 -796.94,21.15 -796.94,21.15 0,0 -348.49,-79.6 -495.79,-47.66 -63.51,13.78 -115.75,36.63 -157.11,61.97l0 23.97 2498 0 0 -159.26 0 0z"/>
                </g>
            </svg>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .sub100-shape {
        position: absolute;
        z-index: 1;
        bottom: -1px;
        left: 0;
        width: 100%;
        overflow: hidden;

    }
    #curvaBackgroundBottom {
        .fil0 {fill:#03D29C}
        .fil1 {fill:#F7F8FF}
    }
    .section-bottom-shape-three.sub100-shape {transform: none}
    .mapaSub100 { margin-top: -20px; margin-bottom: 20px; max-height: 490px; z-index: 9;  position: inherit;}
    .dark-mode {
        #curvaBackgroundBottom {
            .fil1 {fill:$bg-dark-secondary}
        }
    }
</style>