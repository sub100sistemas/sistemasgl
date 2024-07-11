<template>
    <div class="demo-section section-padding pb-5">
        <div class="container">
            <div class="row">
                <!-- Content Start -->
                <div class="col align-self-center max-mb-30">
                    <div class="demo-content pt-5 pl-5">
                        <ShapeWithAnimation addClassName="corner" imgSrc="/images/sub100/corner.svg?20220404" dataWidth="143" dataHeight="120"/>
                        <h1 class="title max-mb-30">Sobre a <span>Sub100</span></h1>
                        <div class="desc w-100">
                            <p class="pr-3">Texto</p>
                        </div> 
                    </div>
                </div> 
                <!-- Content End -->
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
<script>
    export default {
        props: ['addClassName', 'imgSrc', 'dataDepth'],
    };
</script>