<template>
    <div class="demo-section section-padding">
        <div class="container">
            <div class="row max-mb-n30">
                <!-- Content Start -->
                <div class="col align-self-center max-mb-30">
                    <div class="demo-content pt-0 pt-xl-5 pl-2 pl-xl-5">
                        <ShapeWithAnimation addClassName="corner d-none d-xl-block" imgSrc="/images/sub100/corner.svg?20220404" dataWidth="143" dataHeight="120"/>
                        <h1 class="title max-mb-30">Eventos</h1>
                        <div class="desc">
                            <p class="pr-3">O seu interesse é muito importante para nós. Você será avisado sobre os próximos eventos.</p>
                        </div> 
                        <!-- Demo Animation Start -->
                        <div class="pt-5 text-right">
                            <ShapeWithAnimation dataDepth="0" imgSrc="/images/sub100/personDemo.svg?20220404" dataWidth="240" dataHeight="460" />
                            <ShapeWithAnimation addClassName="backgroundDemo" dataDepth="1" imgSrc="/images/sub100/mais.svg?20220404" dataWidth="385" dataHeight="245" />
                        </div>
                        <!-- Demo Animation End -->
                    </div>
                </div> 
                <!-- Content End -->
                <!-- Demo Form Start -->
                 <div class="col instructor-register-from ml-0 ml-xl-5">
                    <div class="contact-form pl-90 pl-md-0 pl-sm-0 pl-xs-0">
                        <EventForm />
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
    @media only screen and (max-width: 479px){
        .demo-content .desc p {
            font-size: 24px;
        }
    }
    .dark-mode {
        #curvaBackgroundBottom .fil0 {
            fill: $bg-dark !important;
        }
    }
</style>
<script>
    export default {
        components: {
            EventForm: () => import('@/components/sub100/partials/EventForm'),
        }
    };
</script>