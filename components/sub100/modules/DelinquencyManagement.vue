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
                                            <img class="rounded" data-fancybox="inadimplencia" data-src="/images/modulos/inadimplencia/cobranca_1.png?20220404" src="/images/modulos/inadimplencia/thumbnail/cobranca_1.png?20220404" width="512" height="288" alt="Controle de cobrança" />                                           
                                        </slide> 
                                        <slide>                                           
                                            <img class="rounded" data-fancybox="inadimplencia" data-src="/images/modulos/inadimplencia/cobranca_2.png?20220404" src="/images/modulos/inadimplencia/thumbnail/cobranca_2.png?20220404" width="512" height="288" alt="Controle de cobrança" />                                           
                                        </slide>
                                        <slide>                                           
                                            <img class="rounded" data-fancybox="inadimplencia" data-src="/images/modulos/inadimplencia/cobranca_3.png?20220404" src="/images/modulos/inadimplencia/thumbnail/cobranca_3.png?20220404" width="512" height="288" alt="Controle de cobrança" />                                            
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="inadimplencia" data-src="/images/modulos/inadimplencia/cobranca_4.png?20220404" src="/images/modulos/inadimplencia/thumbnail/cobranca_4.png?20220404" width="512" height="288" alt="Controle de cobrança" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="inadimplencia" data-src="/images/modulos/inadimplencia/cobranca_5.png?20220404" src="/images/modulos/inadimplencia/thumbnail/cobranca_5.png?20220404" width="512" height="288" alt="Controle de cobrança" />                                           
                                        </slide> 
                                        <slide>                                           
                                            <img class="rounded" data-fancybox="inadimplencia" data-src="/images/modulos/inadimplencia/cobranca_6.png?20220404" src="/images/modulos/inadimplencia/thumbnail/cobranca_6.png?20220404" width="512" height="288" alt="Controle de cobrança" />                                           
                                        </slide> 
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Controle de cobrança</h2>
                            <div class="desc">
                                <p>Diminua os índices de inadimplência através do “Controle de Cobrança”, tendo uma gestão completa onde os inadimplentes poderão ser classificados e então receberem as devidas notificações, por meio de um completo controle de atendimento, que garantirá a continuidade e gerenciamento das cobranças.</p>
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
                            <h2 class="title fz-30">Notificações de cobrança</h2>
                            <div class="desc">
                                <p>As notificações de cobranças podem ser enviadas por E-mail, SMS e Whatsapp, de forma rápida e intuitiva. </p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide v-for="i in 3" :key="i">                                          
                                            <img class="rounded" data-fancybox="inadimplencia2" :data-src="`/images/modulos/inadimplencia/notificacoes_${i}.png?20220404`" :src="`/images/modulos/inadimplencia/thumbnail/notificacoes_${i}.png?20220404`" width="512" height="288" alt="Controle de cobrança" />                                            
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
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="inadimplencia3" data-src="/images/modulos/inadimplencia/reguasCobranca.png?20220404" src="/images/modulos/inadimplencia/thumbnail/reguasCobranca.png?20220404" width="512" height="288" alt="Régua de cobrança"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Régua de cobrança</h2>
                            <div class="desc">
                                <p>A régua de cobrança é um mecanismo que permite enviar avisos de vencimentos de boletos com antecedência e posterior ao vencimento. O envio é feito por e-mail com link para impressão de boleto. A régua pode ser personalizada para cada empreendimento.</p>
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