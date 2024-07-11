<template>
    <div class="funfact-section section-padding pt-5 bg-f7f8ff" :class="addClassName" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <div class="cta-content text-center">
                        <h4 class="FontStatistics mb-1 mb-xl-5">
                        <span class="d-inline d-md-block sub-title mb-0 mb-md-1"><span>Durante esses</span> 12 anos de SGL - Sistema de Gestão de Loteamentos, <span> ajudamos nossos </span></span>
                        <span class="title fz-36">clientes a expandirem as fronteiras urbanas brasileiras.</span>
                        </h4>
                    </div>
                    <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 max-mb-n30">
                        <div class="col max-mb-30" data-aos="fade-up" v-for="funfact in funfacts" :key="funfact.id">
                            <div class="funfact">
                                <div class="icon">
                                    <inline-svg :src="funfact.icon" :alt="funfact.alt" />
                                </div>
                                <div class="number"><span class="counter">{{ funfact.digit }}</span></div>
                                <div class="text mt-1 mt-xl-3 d-block fw-bold fs-6">{{ funfact.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .bg-f7f8ff {
        background-color: #f7f8ff !important;
    }
    .dark-mode {
        .bg-f7f8ff { background:$bg-dark-secondary!important }
    }
    @media #{$large-mobile} {
        .FontStatistics {
            line-height: 1.4;
            font-size: 22px;
            & .sub-title span {
                font-weight:700;
            }    
        }

    }
</style>

<script>
    export default {
        props: ['addClassName', 'bgImg'],

        data () {
            return {
                funfacts: [
                    {
                        id: 1,
                        icon: "/images/icons/vgv2.svg?20220404",
                        alt: "icon",
                        digit: "+12 bilhões",
                        text: "VGV"
                    },
                    {
                        id: 2,
                        icon: "/images/icons/empreendimentos.svg?20220404",
                        alt: "icon",
                        digit: "+1,8 mil",
                        text: "Empreendimentos"
                    },
                    {
                        id: 3,
                        icon: "/images/icons/unidades.svg?20220404",
                        alt: "icon",
                        digit: "+284 mil",
                        text: "Unidades"
                    },
                    {
                        id: 4,
                        icon: "/images/icons/usuarios.svg?20220404",
                        alt: "icon",
                        digit: "+11,6 mil",
                        text: "Usuários"
                    }
                ]
            }
        }
    };
</script>