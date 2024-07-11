<template>
    <div>
        <div class="section-padding mt-0 mt-xl-4">
            <div class="container">
                <div class="row position-relative d-flex align-items-center flex-column-reverse flex-xl-row">
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide v-for="i in 3" :key="i">
                                            <img class="rounded" data-fancybox="simulador1" :data-src="`/images/modulos/simulador/empreendimentos_${i}.png?20220418`" :src="`/images/modulos/simulador/thumbnail/empreendimentos_${i}.png?20220418`" width="512" height="288" alt="Empreendimentos" />
                                        </slide> 
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Empreendimentos</h2>
                            <div class="desc">
                                <p>Layout com todos os empreendimentos à venda que são classificados segundo o grau de importância de cada parceria e com recursos como: mapa de vendas, simulador de vendas, tabelas de preço com formatações que atendem as necessidades do cliente e se encaixam ao estilo de comercialização de cada empreendimento.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-padding bg-F5F5F5">
            <div class="container">
                <div class="row position-relative d-flex align-items-center">
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center mr-0 mr-xl-5">
                            <h2 class="title fz-30">Reserva</h2>
                            <div class="desc">
                                <p>A ‘Reserva” de unidade se integra a gestão de leads, controle de metas, mapa interativo e controle de duplicidade de maneira rápida e dinâmica. Parametrizando as configurações para emissão de documentos juntamente com o Poderosos Simulador de Vendas.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0">
                        <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen">
                                <div class="app">
                                    <div class="box">
                                        <carousel :navigationEnabled="true" :per-page="1">
                                            <slide>
                                                <img class="rounded" data-fancybox="simulador2" data-src="/images/modulos/simulador/reserva_1.png?20220404" src="/images/modulos/simulador/thumbnail/reserva_1.png?20220404" width="512" height="288" alt="Reserva" />
                                            </slide> 
                                            <slide>
                                                <img class="rounded" data-fancybox="simulador2" data-src="/images/modulos/simulador/reserva_2.png?20220404" src="/images/modulos/simulador/thumbnail/reserva_2.png?20220404" width="512" height="288" alt="Reserva" />
                                            </slide>
                                            <slide>
                                                <img class="rounded" data-fancybox="simulador2" data-src="/images/modulos/simulador/reserva_3.png?20220404" src="/images/modulos/simulador/thumbnail/reserva_3.png?20220404" width="512" height="288" alt="Reserva" />
                                            </slide> 
                                            <slide>
                                                <img class="rounded" data-fancybox="simulador2" data-src="/images/modulos/simulador/reserva_4.png?20220404" src="/images/modulos/simulador/thumbnail/reserva_4.png?20220404" width="512" height="288" alt="Reserva" />
                                            </slide> 
                                        </carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-padding">
            <div class="container">
                <div class="row position-relative d-flex align-items-center flex-column-reverse flex-xl-row">
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador31" data-src="/images/modulos/simulador/proposta_1.png?20220404" src="/images/modulos/simulador/thumbnail/proposta_1.png?20220404" width="512" height="288" alt="Proposta" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador31" data-src="/images/modulos/simulador/proposta_2.png?20220404" src="/images/modulos/simulador/thumbnail/proposta_2.png?20220404" width="512" height="288" alt="Proposta" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Proposta</h2>
                            <div class="desc">
                                <p>A proposta possui as mesmas características da reserva,  sendo totalmente integrada ao financeiro gerando entradas e comissões, além de possuir um completo controle de rescisão e um amplo controle de checklist.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-padding  bg-F5F5F5">
            <div class="container">
                <div class="row position-relative d-flex align-items-center">
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center mr-0 mr-xl-5">
                            <h2 class="title fz-30">Venda</h2>
                            <div class="desc">
                                <p>A “Venda” por sua vez também possui todas as etapas da proposta, tendo integração completa com os módulos de gerenciamento administrativo e financeiro da loteadora. </p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide v-for="i in 3" :key="i">
                                            <img class="rounded" data-fancybox="simulador3" :data-src="`/images/modulos/simulador/venda_${i}.png?20220404`" :src="`/images/modulos/simulador/thumbnail/venda_${i}.png?20220404`" width="512" height="288" alt="Venda" />
                                        </slide> 
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-padding">
            <div class="container">
                <div class="row position-relative d-flex align-items-center flex-column-reverse flex-xl-row">
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador4" data-src="/images/modulos/simulador/comissao_1.png?20220404" src="/images/modulos/simulador/thumbnail/comissao_1.png?20220404" width="512" height="288" alt="Gestão de comissões" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador4" data-src="/images/modulos/simulador/comissao_2.png?20220404" src="/images/modulos/simulador/thumbnail/comissao_2.png?20220404" width="512" height="288" alt="Gestão de comissões" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Gestão de comissões</h2>
                            <div class="desc">
                                <p>A “Gestão de Comissões” pode se iniciar nas etapas de proposta ou vendas de maneira parametrizada através do: controle de liberação de pagamentos, agrupamentos de comissionados com distribuição de valores pré-configurados, regras de bônus e descontos, lançamentos automáticos de contas a pagar e a receber totalmente integrados ao centro de custos e plano de contas.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="section-padding bg-F5F5F5">
            <div class="container">
               <div class="row position-relative d-flex align-items-center">
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center mr-0 mr-xl-5">
                            <h2 class="title fz-30">Tabela de preço</h2>
                            <div class="desc">
                                <p>O módulo de gerenciamento de preços do SGL é extremante eficiente e de fácil uso. Com controles parametrizados para vendas, reajustes, centro de custos, forma de pagamentos entre outros. A criação da “Tabela de Preços” é simples e pode ser parametrizada através de valores já cadastrados para o empreendimento ou para conjuntos de lotes com condições exclusivas em que os mesmos se enquadram.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador5" data-src="/images/modulos/simulador/tabela_1.png?20220404" src="/images/modulos/simulador/thumbnail/tabela_1.png?20220404" width="512" height="288" alt="Tabela de preço" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador5" data-src="/images/modulos/simulador/tabela_2.png?20220404" src="/images/modulos/simulador/thumbnail/tabela_2.png?20220404" width="512" height="288" alt="Tabela de preço" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-padding">
            <div class="container">
                <div class="row position-relative d-flex align-items-center flex-column-reverse flex-xl-row">
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide v-for="i in 3" :key="i">
                                            <img class="rounded" data-fancybox="simulador6" :data-src="`/images/modulos/simulador/documentos_${i}.png?20220404`" :src="`/images/modulos/simulador/thumbnail/documentos_${i}.png?20220404`" width="512" height="288" alt="Modelos de documentos" />
                                        </slide> 
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Modelos de documentos</h2>
                            <div class="desc">
                                <p>O SGL disponibiliza modelos de documentos para todas as etapas de seu empreendimento, tais como: proposta, modelo de contrato, venda, cessão, rescisão, carta cobrança e aditivos, que podem ser parametrizados de acordo com a necessidade de cada unidade.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-padding bg-F5F5F5">
            <div class="container">
                <div class="row position-relative d-flex align-items-center">
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center mr-0 mr-xl-5">
                            <h2 class="title fz-30">Metas</h2>
                            <div class="desc">
                                <p>O módulo simulador de vendas fica mais completo com a gestão de “Metas” integradas. Sua equipe comercial e de marketing poderão definir metas e acompanhá-las através do dashboard ou de relatórios dia a dia.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador7" data-src="/images/modulos/simulador/metas_1.png?20220404" src="/images/modulos/simulador/thumbnail/metas_1.png?20220404" width="512" height="288" alt="Metas" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="simulador7" data-src="/images/modulos/simulador/metas_2.png?20220404" src="/images/modulos/simulador/thumbnail/metas_2.png?20220404" width="512" height="288" alt="Metas" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </div>
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