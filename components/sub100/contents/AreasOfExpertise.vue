<template>
    <div class="section pt-2 pb-5">
        <div class="container">
            <div class="section-title text-center">
                <span class="sub-title">Áreas de Atuação</span>
                <h2 class="title">A SUB100 Sistemas atua em <span>3 principais</span> áreas</h2>
            </div>

            <div class="row row-cols-xl-3 row-cols-sm-2 row-cols-1 no-gutters">
                <div class="col" v-for="item in items" :key="item.id">
                    <div class="icon-box text-center" data-vivus-hover>
                        <div class="icon">
                            <inline-svg :src="item.icon" :alt="item.alt" />
                        </div>
                        <div class="content">
                            <h4 class="title">{{ item.title }}</h4>
                            <div class="desc">
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .icon{
        & .fil0 {
            fill: #00d39b!important;
            fill-rule: nonzero;
        }
    } 
    .dark-mode {
        & .icon-box {
            background-color: $bg-dark !important;
        }
    }
</style>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        id: 1,
                        icon: "/images/icons/administrativo.svg?20220404",
                        alt: "icon",
                        title: "Sistemas",
                        desc: "Sistemas inteligentes para gestão de vendas e administração de loteamentos que permitem otimizar e agilizar os processos administrativos e financeiros da sua empresa."
                    },
                    {
                        id: 2,
                        icon: "/images/icons/portal.svg?20220404",
                        alt: "icon",
                        title: "Portal de imóveis",
                        desc: "O maior portal do Paraná, com mais de 50 mil imóveis anunciados e todos com informações completas tais como fotos, mapas e vídeos, distribuídos em mais de 445 cidades e 22 estados."
                    },
                    {
                        id: 3,
                        icon: "/images/icons/sites.svg?20220404",
                        alt: "icon",
                        title: "Sites",
                        desc: "Desenvolvimento de sites para o mercado imobiliário, loteadoras e setor da construção civil."
                    }
                ]
            }
        }
    };
</script>