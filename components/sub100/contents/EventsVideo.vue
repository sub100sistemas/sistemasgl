<template>
    <div class="about-video-section pt-4 section-padding-bottom-80" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="about-me-video-wrapper about-us-one-video pr-55 pr-sm-0 pr-xs-0">
                        <div class="about-me-video">
                            <img src="/images/sub100/apresenta_zoo-25.png?855886" width="715" height="400" alt="Próximo evento" >
                        </div>
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png?20220404" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="-3" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="-3" imgSrc="/images/shape-animation/shape-1.png?20220404" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title mb-3">Próximo evento</span>
                        <!--<h2 class="title fz-24">Tema: Configurando modelos de documento e check list no Sistema SGL</h2>
                        <p>Acompanhe as etapas de reserva, proposta e venda do empreendimento, através do "Check List" parametrizado de acordo com sua necessidade.</p>
                        <p>Documentos como: propostas, contrato de venda, cessão, rescisão, carta cobrança e aditivos, que podem ser parametrizados de acordo com a necessidade de cada empreendimento.</p>
                        -->
                        <h2 class="title fz-24">Configurações, pastas de documentos, aprovação, reservas e propostas. O que melhoramos no Sistema SGL.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import fancybox from "@/mixins/fancybox.js"
    export default{
        mixins:[fancybox]
    }
</script>