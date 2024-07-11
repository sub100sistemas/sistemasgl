<template>
    <div class="section-padding pb-3">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 align-items-center">
                <div class="col">
                    <div class="faq-left-image notebook text-center">
                        <img src="/images/sub100/notebook.svg?20220404" width="391" height="530" alt="Programa de loteamento completo">
                        <!-- Animation Shape Start -->
                        <div class="shape shape-1 scene">
                            <span data-depth="3">
                                <img src="/images/shape-animation/shape-2.svg?20220404" width="392" height="394" alt="Notebook" class="svgInject">
                            </span>
                        </div>
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <div class="col">
                    <div class="faq-content-area">
                        <!-- Section Title Start -->
                        <div class="section-title text-left mb-50" data-aos="fade-up">
                            <span class="sub-title mb"><strong>Sub100</strong> Loteamentos</span>
                            <h2 class="title fz-30 max-mb-30">A jornada de recebíveis, contas a pagar, aditivos, cessões, rescisões, cobranças <span>entre outras, são tarefas de muitos anos, na gestão de seus loteamentos.</span></h2>
                            <p class="max-mb-30 fz-18 pb-5"> A sua decisão em usar um programa de loteamento completo, moderno, fácil e eficiente como o SGL, são fundamentais para gerar rapidez nos ganhos de resultados.</p>
                            <a href="/quero-uma-demonstracao/" aria-label="Quero uma demonstração" class="btn btn-secondary mr-0 mr-md-3 mb-0 mb-md-3 mx-w-100">
                                Quero uma demonstração
                            </a>
                            <a data-fancybox="videoSgl" href="https://youtu.be/-VNMWEzQLlo" aria-label="Assista o vídeo do SGL" data-width="100%" data-height="100%" class="col-xs-12 btn btn-outline-secondary btn-hover-secondary-two mt-4 mt-md-0 mb-0 mb-md-3 mx-w-100">
                                Assista o vídeo do SGL
                            </a>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
        .faq-left-image img{
            max-height: 530px;
        }
        @media #{$large-mobile}{
            .faq-left-image img, .shape.shape-1.scene img {
                max-width: 75%;
            }
        }
</style>>
<script>
    import fancybox from "@/mixins/fancybox.js"
    export default{
        mixins:[fancybox]
    }
</script>