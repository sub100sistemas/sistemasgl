<template>
    <div class="section-padding position-relative pb-0 pb-md-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="newsletter-content">
                        <h5 class="title mb-5">Receba conteúdo <span>exclusivos sobre</span></h5>   
                        <div class="row justify-content-center">
                            <div class="col-md-5 box fz-20">
                               Mercado de incorporações 
                            </div>
                            <div class="col-md-5 box fz-20 text-center">
                               Inovação tecnológica
                            </div>
                            <div class="col-md-5 box fz-20 text-center">
                                Feiras e eventos on-line
                            </div>
                            <div class="col-md-5 box fz-20 text-center">
                                Novidades do Sistema SGL
                            </div>
                        </div>
                        <n-link to="/conteudo/fique-por-dentro/" aria-label="Inscreva-se!!!" class="col-xs-12 mt-5 fz-20 btn btn-outline-secondary btn-hover-secondary-two mt-4 mx-w-100 max-mb-30 d-block d-xl-inline-block">
                            Inscreva-se!!!
                        </n-link>
                        <ShapeWithAnimation addClassName="shape-1 z-n1 d-none d-xl-block" dataDepth="4" dataWidth="56" dataHeight="56" />
                        <ShapeWithAnimation addClassName="shape-2 z-n1 d-none d-xl-block" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-1.png" dataWidth="204" dataHeight="193"/>
                        <ShapeWithAnimation addClassName="shape-3 z-n1 d-none d-xl-block" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" dataWidth="127" dataHeight="123"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>