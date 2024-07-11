<template>
    <div class="cta-section section-padding pb-0 bg-f5f5f5">
        <div class="container animation-shape">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content-area">
                        <div class="section-title text-center mb-0" data-aos="fade-up">
                            <h1 class="sub-title max-mb-30">Base de conhecimento</h1>
                            <h2 class="title max-mb-30 pb-4 fz-26">O manual através de vídeos com o passo a passo de cadastramentos de empreendimentos, gestão de vendas, administrativo, financeiro, geração de relatórios, integrações fiscais e todas as outras funcionalidades do sistema SGL, encontra-se dentro da "Base de conhecimento".</h2>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation addClassName="shape-1 d-none d-xl-block" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-3 d-none d-xl-block" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-4 d-none d-xl-block" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-5 d-none d-xl-block" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-6 d-none d-xl-block" dataDepth="4" />
            <!-- Animation Shape End -->
        </div>

        <!-- Hero Image Section Start -->
        <div class="hero-image-section position-relative bg-f5f5f5">
            <div class="container">
                <div class="hero-image-wrapper">
                    <img class="base" src="/images/svg/conhecimento.svg?20220404" width="750" height="469" alt="Base de conhecimento">
                </div>
            </div>

            <!-- Section Bottom Shape Start -->
            <div class="section-bottom-shape d-md-block d-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                    <path class="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                </svg>
            </div>
            <!-- Section Bottom Shape End -->
        </div>
        <!-- Hero Image Section End -->
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>