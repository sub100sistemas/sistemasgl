<template>
    <div class="about-section section-padding-top section-padding-bottom" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-lg-1 order-2">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title">Estrutura  <strong>Física</strong></span>
                        <h2 class="title pb-4">Sede <span> própria</span></h2>
                        <h4 class="title fz-24">Amplos espaços</h4>
                        <p>Nossa empresa esta localizada em sua sede própria no Le Monde o edifício comercial mais moderno de Maringá. O Le Monde possui vários recursos entre eles um grande auditório para eventos e heliporto.</p>
                        <h4 class="title fz-24">Treinamentos</h4>
                        <p>Temos um espaço exclusivo para treinamento de clientes e colaboradores, com disponibilidade para a criação de vídeos educacionais sobre nossos produtos e a inserção dos mesmo em nossos canais de suporte e comunicação.</p>
                        <h4 class="title fz-24">Ambiente colaborativo</h4>
                        <p>Nossos ambientes de trabalho foram criados para serem ambientes colaborativos.</p>
                    </div>
                </div>

                <div class="col-lg-6 order-lg-1 order-1">
                    <div class="about-image">
                        <div class="about-image-one">
                            <img src="/images/sub100/edificio-md.jpg" width="570" height="360" alt="Le Monde">
                        </div>
                        <div class="about-image-two">
                            <img src="/images/sub100/entrada.jpg" width="190" height="190" alt="Entrada">
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="4" imgSrc="/images/shape-animation/about-shape-1.png?20220404" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png?20220404" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png?20220404" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    #silentbox-overlay {
        &__background {
                background: rgb(255 255 255 / 5%) !important;
        }
        &__embed {
            & img {
                box-shadow: none !important;
            }
        }
    }
</style>

<script>
    export default {
        props: ['addClassName'],

        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>