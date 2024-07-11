<template>
    <div class="about-video-section section-padding-top section-padding-bottom" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="about-me-video-wrapper about-us-one-video pr-55 pr-sm-0 pr-xs-0">
                        <!-- About Me Video Start -->
                        <div class="about-me-video video-popup">
                            <a >
                                <img class="rounded image" data-fancybox="videoempresa" data-src="/images/sub100/sala2-bg.jpg?20220404" src="/images/sub100/sala2-md.png?20220404" width="710" height="480" alt="SUB100 Sistemas" />
                            </a>
                         </div>
                        <!-- About Me Video End -->

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="-3" imgSrc="/images/shape-animation/shape-2.svg?20220404" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png?20220404" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="-3" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="-3" imgSrc="/images/shape-animation/shape-1.png?20220404" />
                        <!-- Animation Shape End -->
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title pb-4">Missão e Valores</span>
                        <h2 class="title fz-24">Missão</h2>
                        <p>Oferecer soluções tecnológicas, inovadoras e criativas, que facilitem negócios pela internet entre nossos clientes e seus consumidores.</p>
                        <h2 class="title  fz-24">Valores</h2>
                        <p>Os valores como: responsabilidade, inovação, competência, profissionalismo e transparência, orientam a sub100 e balizam todas as suas ações. Nossos valores não são apenas ilustrativos mais sim exercitados no dia a dia, por toda a direção e colaboradores da Sub100.</p>
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