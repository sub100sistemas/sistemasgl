<template>
    <div class="modules-section pt-5 pb-5" :style="bgImg">
        <div class="container">
            <div class="row max-mb-n30 position-relative">
                <!-- Modules One Content Start -->
                <div class="col-12 col-xl-6 align-self-center mb-0 mb-xl-5">
                    <div class="modules-content pt-0 pt-xl-5  pl-xl-5">
                        <ShapeWithAnimation addClassName="corner d-none d-xl-block" imgSrc="/images/sub100/corner.svg" dataWidth="143" dataHeight="120"/>
                        <h1 class="title max-mb-30">{{ title }}</h1>
                        <div class="desc">
                            <p class="mr-0 mr-xl-3">{{ subtitle }}</p>
                            <a href="/quero-uma-demonstracao/" class="btn btn-secondary mt-4 mr-3 mb-3 d-none d-xl-inline-block">
                                Quero uma demonstração
                            </a>
                        </div> 
                    </div>
                </div> 
                <!-- Modules One Content End -->
                <!-- Modules Tela Start -->
                <div class="col-12 col-xl ml-0 ml-xl-5 max-mb-60 text-center d-block d-xl-none">              
                    <div class="modules-screen pt-0 pt-xl-5 d-inline-block">
                        <div class="app mt-3 mt-xl-0">
                            <img class="box" :src="Img" width="512" height="288" alt="Controle de atendimentos"> 
                        </div>
                        <a href to="/quero-uma-demonstracao/" class="btn btn-secondary mt-5 mx-w-100 d-block d-xl-none">
                            Quero uma demonstração
                        </a>
                    </div>
                </div>
                <!-- Modules Tela End -->
                <ShapeWithAnimation addClassName="sub100-seta" imgSrc="/images/sub100/setaModules.svg" />
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="539" height="75" class="sub100-modules" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd" viewBox="0 0 5390 751.4"><path d="M0 652C1835 652 1450 0 2709 0c1218 0 835 652 2681 652v99H0v-99z" style="fill:#fff"/></svg>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .dark-mode {
        & .sub100-modules{
            path{
                fill: $bg-dark !important;
            }
        }
    }
</style>
<script>
    export default{
        props: ['bgImg', 'Img', 'title', 'subtitle']
    }
</script>