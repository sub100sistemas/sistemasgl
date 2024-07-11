<template>
    <div class="section-padding pb-5 position-relative bg-f8f8f8" :class="addClassName">
        <div class="section-top-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
        <div class="container">
            <div class="section-title module text-center mb-3 mb-md-5 p-3 p-xl-0">
                <span class="sub-title" v-if="mostrarTitulo">Módulos</span>
                <h1 class="sub-title" v-else>Loteamentos</h1>
                <h2 class="title">Conheça os principais módulos do <span>Sistema de Gestão de loteamentos SGL</span></h2>
            </div>
            <div class="row row-cols-xl-3 row-cols-sm-2 row-cols-1 no-gutters">
                <div class="col" v-for="item in items" :key="item.id">
                    <a :href="item.link" class="icon-box text-center" >
                        <div class="icon">
                            <inline-svg :src="item.icone" :alt="item.alt" />
                        </div>
                        <div class="content">
                            <h3 class="title">{{ item.title }}</h3>
                            <div class="desc">
                                <p>{{ item.desc }}</p>
                            </div>
                            <span class="link">Saiba mais <i class="far fa-long-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    a:hover .desc, a:focus .desc, a:visited .desc {
        color: #696969!important;
    }
    .section-top-shape {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
    }
    .section-top-shape svg path {
        fill: #fff;
    }
    .section-top-shape svg {
        width: 100%;
        height: 50px;
        @media #{$large-mobile}{
            height: 29px !important;
        }
    }
    .section-title {
        & span{
            font-weight: 700 !important;
        }
        @media #{$large-mobile}{
            &.module{
                background:#e9eefd;
            }
        }
    }
    .dark-mode {
        .section-top-shape svg path{
            fill: $bg-dark;
        }
        .icon-box {
            background-color: #111111 !important;
        } 
        .section-title {
            &.module{
                background:$bg-dark !important;
            }
        }
    }  
</style>
<script>
    export default {

        props: ['addClassName','mostrarTitulo'],

        data () {
            return {
                items: [
                    {
                        id: 1,
                        icone: "/images/icons/atendimento.svg",
                        alt: "Controle de atendimentos",
                        title: "Controle de atendimentos",
                        desc: "Gestão de interessados com importação e distribuição de leads automatizados. Etapa do funil de vendas personalizada e histórico de atendimento. Represamento de vendas de forma simples e intuitiva. Integração com Facebook e outros.",
                        link: "/modulos/controle-de-atendimentos/"
                    },
                    {
                        id: 2,
                        icone: "/images/icons/simulador.svg?20220404",
                        alt: "Simulador de vendas",
                        title: "Simulador de vendas",
                        desc: "Poderoso espelho de vendas com um workflow personalizado para reservas, propostas e vendas. Oferecemos controle de alçadas e uma gestão completa de honorários. Além disso, nossa plataforma possui integração nativa com assinatura eletrônica, garantindo segurança e validade jurídica aos documentos assinados.",
                        link: "/modulos/simulador-de-vendas/"
                    },
                    {
                        id: 3,
                        icone: "/images/icons/mapaInterativo.svg?20220404",
                        alt: "Loteamentos",
                        title: "Mapa interativo",
                        desc: "Desenvolva seu espelho de venda através do mapa interativo. Controle a quantidade de reservas por parceiros e corretores. Elimine duplicidades de reservas e propostas em cada unidade.",
                        link: "/modulos/mapa-interativo/"
                    },
                    {
                        id: 4,
                        icone: "/images/icons/administrativo.svg?20220404",
                        alt: "Administrativo",
                        title: "Administrativo",
                        desc: "Gerencie de forma RÁPIDA, SIMPLES e EFICAZ as atividades cotidianas de cada unidade, tais como: aditivo, cessão de direito, rescisão, quitação de contrato, remessa, retorno, conciliação bancária e cálculos automáticos de antecipação.",
                        link: "/modulos/administrativo/"
                    },
                    {
                        id: 5,
                        icone: "/images/icons/financeiro.svg?20220404",
                        alt: "Financeiro",
                        title: "Financeiro",
                        desc: "Total controle da Gestão Financeira. Contas a pagar e receber, reajuste de cobrança, emissão de alerta de vencimento e integração bancária.",
                        link: "/modulos/financeiro/"
                    },
                    {
                        id: 6,
                        icone: "/images/icons/agenda.svg?20220404",
                        alt: "Gestão de inadimplência",
                        title: "Gestão de inadimplência",
                        desc: "Controle toda a situação financeira e diminua o risco de inadimplência de sua carteira de recebíveis através das etapas de cobrança que o sistema de gestão de loteamento SGL disponibiliza. Utilize a régua de cobrança para estreitar a relação com seus clientes por meio de comunicados e alertas de pré e pós vencimentos.",
                        link: "/modulos/gestao-de-inadimplencia/"
                    },
                    {
                        id: 7,
                        icone: "/images/icons/fiscal.svg?20220404",
                        alt: "Fiscal",
                        title: "Fiscal",
                        desc: "Preparado para exportação de arquivos SPED e DIMOB para o fisco, além de fornecer aos clientes extratos para declaração do Imposto de Renda.",
                        link: "/modulos/fiscal/"
                    },
                    {
                        id: 8,
                        icone: "/images/icons/integracao.svg?20220404",
                        alt: "Integrador",
                        title: "Integrador",
                        desc: "O programa SGL permite integrações que vão desde à captação de leads, comunicadores, consultas de crédito até sistemas contábeis e fiscais.",
                        link: "/modulos/integrador/"
                    },
                    {
                        id: 9,
                        icone: "/images/icons/usuario.svg?20220404",
                        alt: "Portal do cliente",
                        title: "Portal do cliente",
                        desc: "Solicitação de 2ª via de boletos, extratos para declaração do imposto de renda, atualização cadastral  e acompanhamento de obras entre outras funcionalidades.",
                        link: "/modulos/portal-de-cliente/"
                    }
                ]
            }
        }
    };
</script>
<style lang="scss" scoped>
.no-gutters polygon {
    stroke: blue;
}
</style>