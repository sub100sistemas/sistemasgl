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
                                        <slide>        
                                            <img class="rounded" data-fancybox="integrator1" data-src="/images/modulos/integrator/importacao_1.png?20220404" src="/images/modulos/integrator/thumbnail/importacao_1.png?20220404" width="512" height="288" alt="Integração de leads" />            
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="integrator1" data-src="/images/modulos/integrator/importacao_2.png?20220404" src="/images/modulos/integrator/thumbnail/importacao_2.png?20220404" width="512" height="288" alt="Integração de leads" />
                                        </slide> 
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Integração de Leads</h2>
                            <div class="desc">
                                <p>Os leads podem ser importados através de planilhas externas pré-existentes e também por integração das captações em campanhas realizadas através do Facebook.</p>
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
                            <h2 class="title fz-30">Integração WhatsApp</h2>
                            <div class="desc">
                                <p>A integração é feita com empresas que fornecem o serviço de mensageria do WhatsApp via API, onde é possível realizar o envio de notificações, boleto e informações referentes a vencimento dos boletos em aberto/vencidos dos clientes.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator2" data-src="/images/modulos/integrator/whatsapp.png?20220404" src="/images/modulos/integrator/thumbnail/whatsapp.png?20220404" width="512" height="288" alt="Integração WhatsApp"/>
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
                        <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator3" data-src="/images/modulos/integrator/plugsgin.png?20220404" src="/images/modulos/integrator/thumbnail/plugsgin.png?20220404" width="512" height="288" alt="Integração SMS"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Integração Assinatura Eletrônica</h2>
                            <div class="desc">
                                <p>A assinatura eletrônica nativa do Sistema SGL é uma funcionalidade incorporada ao sistema que tem como objetivo simplificar e agilizar o processo de assinatura de documentos importantes. Com essa funcionalidade, é possível assinar digitalmente documentos como contratos, propostas, reservas, aditivos, cessão e rescisão de forma segura e legalmente válida.</p>
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
                            <h2 class="title fz-30">Integração SMS</h2>
                            <div class="desc">
                                <p>A integração é feita com empresas que fornecem o serviço de mensageria  SMS via API, onde é possível realizar o envio de notificações, boleto e informações referentes a vencimento dos boletos em aberto/vencidos dos clientes.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator3" data-src="/images/modulos/integrator/sms.png?20220404" src="/images/modulos/integrator/thumbnail/sms.png?20220404" width="512" height="288" alt="Integração SMS"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---
        <div class="section-padding bg-F5F5F5">
            <div class="container">
                <div class="row position-relative d-flex align-items-center">
                    <div class="col-12 col-xl mr-0 mr-xl-5">
                        <div class="modules-content text-center mr-0 mr-xl-5">
                            <h2 class="title fz-30">Integração Gmail</h2>
                            <div class="desc">
                                <p>Toda sua agenda de compromissos criada no SGL, se integra à sua agenda do Gmail.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator4" data-src="/images/modulos/integrator/gmail.png?20220404" src="/images/modulos/integrator/thumbnail/gmail.png?20220404" width="512" height="288" alt="Integração Gmail"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
        <div class="section-padding">
            <div class="container">
                <div class="row position-relative d-flex align-items-center flex-column-reverse flex-xl-row">
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator7" data-src="/images/modulos/integrator/spc.png?20220404" src="/images/modulos/integrator/thumbnail/spc.png?20220404" width="512" height="288" alt="Integração SPC"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Integração SPC</h2>
                            <div class="desc">
                                <p>A gestão de inadimplência e aprovação de crédito do SGL tem integração com empresas que fornecem serviços de consulta de crédito.</p>
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
                             <h2 class="title fz-30">Integração Contábil</h2>
                            <div class="desc">
                                <p>O SGL permite integrar suas receitas e despesas à sua contabilidade.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator6" data-src="/images/modulos/integrator/contabil.png?20220404" src="/images/modulos/integrator/thumbnail/contabil.png?20220404" width="512" height="288" alt="Integração Contábil"/>
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
                        <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator7" data-src="/images/modulos/integrator/sped.png?20220404" src="/images/modulos/integrator/thumbnail/sped.png?20220404" width="512" height="288" alt="Integração SPED"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Integração SPED</h2>
                            <div class="desc">
                                <p>A integração e realizada com a exportação do EFD-Contribuições de maneira ágil para sua contabilidade.</p>
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
                            <h2 class="title fz-30">Integração Dimob</h2>
                            <div class="desc">
                                <p>A integração é realizada através da captura de informações disponíveis no sistema, desta forma processando e gerando um arquivo Dimob.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator4" data-src="/images/modulos/integrator/dimob.png?20220404" src="/images/modulos/integrator/thumbnail/dimob.png?20220404" width="512" height="288" alt="Integração DIMOB"/>
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
                        <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="integrator5" data-src="/images/modulos/integrator/site.png?20220404" src="/images/modulos/integrator/thumbnail/site.png?20220404" width="512" height="288" alt="Integração Site"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Integração Site</h2>
                            <div class="desc">
                                <p>Inicie a comercialização de seu empreendimento com seu futuro cliente através do Simulador de Vendas disponível no SGL, e ofereça acesso direto ao seu site pelo Portal do cliente.</p>
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