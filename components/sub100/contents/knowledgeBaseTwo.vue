<template>
    <div class="about-section section-padding">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title-two text-center " data-aos="fade-up">
                <h2 class="title fz-28">Vantagens que a "Base de Conhecimento" oferece</h2>
                <p class="fz-20 mt-3 mb-5">Uma “Base de Conhecimento” sólida e bem estruturada traz inúmeros benefícios <span class="w-0 w-xl-100 d-initial d-xl-block">ao seu negócio. Abaixo elencamos os principais</span></p>
            </div>
            <!-- Section Title End -->

            <!-- Feature Wrapper Start -->
            <div class="row row-cols-xl-3 row-cols-md-2 row-cols-1 max-mb-n60">
                <div class="section-title-two col max-mb-60" data-aos="fade-up" v-for="feature in features" :key="feature.index">
                    <div class="icon-box text-center">
                        <div class="icon">
                            <inline-svg :src="feature.icon" alt="icon" />
                        </div>
                        <div class="content Base">
                            <h3 class="title Base color-secondary">{{ feature.title }}</h3>
                            <div class="desc">
                                <p>{{ feature.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Feature Wrapper End -->
        </div>
    </div>
</template>
<style lang="scss">
    .fz-18{
        font-size: 18px;
    }
</style>
<script>
    export default {
        data () {
            return {
                features: [
                    {
                        icon: "/images/icons/atendimento.svg?20220404",
                        title: "Agilidade no atendimento",
                        desc: "O próprio cliente tem a possibilidade de solucionar sozinho as dúvidas em relação ao produto ou serviço prestado por sua empresa. É comum disponibilizar a “Base de Conhecimento” em formato FAQ (perguntas frequentes), para o cliente externo."
                    },

                    {
                        icon: "/images/icons/maos.svg?20220404",
                        title: "Maior engajamento das equipes",
                        desc: "Para elaboração de uma “base de Conhecimento” sólida e eficiente, necessário se faz o engajamento das equipes dos diversos setores da empresa, desta forma aumentando e fortalecendo a sinergia dos colaboradores."
                    },
                    {
                        icon: "/images/icons/instrutor.svg?20220404",
                        title: "Melhoria no treinamento de novos colaboradores",
                        desc: "O treinamento interno (colaboradores e novos colaboradores) é potencializado através do “PAP” já existente na “Base de Conhecimento”, pois o colaborador tem acesso rápido, fácil e no momento que se fizer necessário,  às soluções e vantagens que o sistema oferece. "
                    },
                    {
                        icon: "/images/icons/financeiro.svg?20220404",
                        title: "Redução de custos com pessoal",
                        desc: "Em virtude da baixa complexibilidade e de que geralmente as dúvidas dos clientes são as mesmas, a contratação de profissionais para atender as demandas do “atendimento ao cliente” se tornam desnecessárias."
                    },
                    {
                        icon: "/images/icons/usuario.svg?20220404",
                        title: "Aumenta a satisfação dos clientes",
                        desc: 'O grau de satisfação de seus clientes cresce, ao verem que suas duvidas foram sanadas de maneira simples e eficiente, através das informações e soluções existentes na “Base de conhecimento".'
                    },
                    {
                        icon: "/images/icons/administrativo.svg?20220404",
                        title: "Diminuição de retrabalhos",
                        desc: "Com a melhora na capacitação dos colaboradores, será visível a diminuição das falhas e retrabalhos , impactando positivamente na redução de custos."
                    }
                ]
            }
        }
    };
</script>