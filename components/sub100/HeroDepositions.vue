<template>
    <div class="testimonial-section section-padding bg-e9eefd">
        <div class="container-fluid pl-80 pl-lg-15 pl-md-15 pl-sm-15 pl-xs-15 pr-80 pr-lg-15 pr-md-15 pr-sm-15 pr-xs-15">
            <SectionHeader subTitle="Depoimentos" title="O que <span> nossos clientes </span> dizem sobre nossos produtos e serviços" alignment="text-center section-title" />
            <div class="testimonial-slider-two" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.index">
                        <div class="testimonial-two testimonial-three max-mb-30 text-center">
                            <div class="author-info mb-30">
                                <div class="mr-3">
                                    <img :src="testimonial.imgSrc" :width="testimonial.width" :height="testimonial.height" :alt="testimonial.name">
                                </div>
                                <div class="cite">
                                    <p class="position">{{ testimonial.city }}</p>
                                </div>
                            </div>
                            <div class="content">
                                <h4 class="title">{{ testimonial.title }}</h4>
                                <p>{{ testimonial.desc }}</p>
                            </div>
                            <div class="author-info">
                                <div class="cite">
                                    <h5 class="name">{{ testimonial.name }}</h5>
                                    <span class="position">{{ testimonial.position }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 50,
                    loop: true,
                    speed: 1000,
                    centeredSlides: true,
                    autoHeight: true, 
                    autoplay: { delay: 10000,  disableOnInteraction: false, pauseOnMouseEnter: true },
                    pagination: {
                        el: '.testimonial-slider-two .swiper-pagination',
                        type: "bullets",
                        clickable: true,
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },
                        992:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1
                        }
                    }
                },

                testimonials: [
                    {
                        title: "",
                        desc: "A parceria entre Campo Incorporadora e a SUB100 Sistemas acontece de maneira proativa e madura, pois temos um canal de interação direto que sempre nos direciona às melhorias e evoluções no sistema SGL.",
                        name: "Lucian Alves Moreira",
                        position: "Contador",
                        city: "Primavera do Leste, MT",
                        imgSrc: "/images/depositions/campo.png",
                        width: "117",
                        height: "55"
                    },
                    {
                        title: "",
                        desc: "O fácil acesso aos diretores da SUB100 Sistemas, nos dá confiança e a certeza de sempre termos nossas necessidades e objetivos em relação ao SGL atendidas.",
                        name: "Indira Mendes Maia",
                        position: "Coordenadora de vendas",
                        city: "Montes Claros, MG",
                        imgSrc: "/images/depositions/viaubanismo.png",
                        width: "149",
                        height: "85"
                    },
                    {
                        title: "",
                        desc: "Lançamos o maior condomínio de lazer do sul do Brasil, e convidamos a SUB100 Sistemas a desenvolver um programa inovador que nos auxiliasse na comercialização do empreendimento, assim surgiu o SGL.",
                        name: "André Ricardo dos Reis Buzzo",
                        position: "Diretor",
                        city: "Maringá, PR",
                        imgSrc: "/images/depositions/greenfish.png",
                        width: "173",
                        height: "55"
                    }
                ]
            }
        }
    };
</script>
<style lang="scss" scoped>
    .bg-e9eefd { background:#e9eefd }
    .dark-mode {
        .author-info img {filter: brightness(0) invert(1)}
        .bg-e9eefd { background:$bg-dark-secondary }
    }
</style>