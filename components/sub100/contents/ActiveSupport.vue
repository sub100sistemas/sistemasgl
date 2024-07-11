<template>
    <div class="learners-section section">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">Suporte Ativo</span>
                <h2 class="title">Atendimento preventivo e <span>sem fronteiras</span></h2>
            </div>
            <!-- Section Title End -->

            <!-- Feature Wrapper Start -->
            <div class="row row-30 row-cols-xl-3 row-cols-sm-2 row-cols-1 max-mb-n30">
                <div class="col max-mb-30" data-aos="fade-up" v-for="learner in learners" :key="learner.id">
                    <div class="icon-box icon-box-center text-center">
                        <div class="icon">
                            <img :src="learner.imgSrc" :alt="learner.icon">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ learner.title }}</h3>
                            <div class="desc">
                                <p>{{ learner.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Feature Wrapper End -->
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                learners: [
                    {
                        id: 1,
                        imgSrc: "/images/icons/learner-01.png?20220404",
                        icon: "icon",
                        title: "Suporte pró-ativo",
                        text: "Nossa equipe realiza contato com os clientes de maneira preventiva para esclarescer dúvidas e ouvir suas solicitações.",
                    },
                    {
                        id: 2,
                        imgSrc: "/images/icons/learner-03.png?20220404",
                        icon: "icon",
                        title: "Suporte em todo o Brasil",
                        text: "Receba um atendimento rápido e eficiente independente da sua localização geográfica.",
                    },
                    {
                        id: 3,
                        imgSrc: "/images/icons/learner-02.png?20220404",
                        icon: "icon",
                        title: "Atendimento online",
                        text: "Tire suas dúvidas através do atendimento online por chat, sem custos de ligações telefônicas.",
                    }
                ]
            }
        }
    };
</script>