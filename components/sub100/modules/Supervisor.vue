<template>
    <div>
        <div class="section-padding mt-0 mt-xl-4">
            <div class="container">
                <div class="row position-relative d-flex align-items-center flex-column-reverse flex-xl-row">
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="supervisor" data-src="/images/modulos/fiscal/sped.png?20220404" src="/images/modulos/fiscal/thumbnail/sped.png?20220404" width="512" height="288" alt="Sped"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Sped</h2>
                            <div class="desc">
                                <p>O SGL permite a exportação do EFD-Contribuições de maneia ágil para sua contabilidade.</p>
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
                            <h2 class="title fz-30">Dimob</h2>
                            <div class="desc">
                                <p>O SGL  respeita a estrutura de cada empreendimento e organiza de forma correta e segura os dados a serem  exportados para a geração do DIMOB.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                            <div class="modules-screen d-inline-block">
                            <div class="app">
                                <img class="rounded box" data-fancybox="supervisor2" data-src="/images/modulos/fiscal/dimob.png?20220404" src="/images/modulos/fiscal/thumbnail/dimob.png?20220404" width="512" height="288" alt="Dimob"/>
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
                                            <img class="rounded" data-fancybox="supervisor3" data-src="/images/modulos/fiscal/dfc_1.png?20220404" src="/images/modulos/fiscal/thumbnail/dfc_1.png?20220404" width="512" height="288" alt="Estruturação DFC" />            
                                        </slide> 
                                        <slide>            
                                            <img class="rounded" data-fancybox="supervisor3" data-src="/images/modulos/fiscal/dfc_2.png?20220404" src="/images/modulos/fiscal/thumbnail/dfc_2.png?20220404" width="512" height="288" alt="Estruturação DFC" />            
                                        </slide>
                                        <slide>            
                                            <img class="rounded" data-fancybox="supervisor3" data-src="/images/modulos/fiscal/dfc_3.png?20220404" src="/images/modulos/fiscal/thumbnail/dfc_3.png?20220404" width="512" height="288" alt="Estruturação DFC" />            
                                        </slide> 
                                        <slide>        
                                            <img class="rounded" data-fancybox="supervisor3" data-src="/images/modulos/fiscal/dfc_3.png?20220404" src="/images/modulos/fiscal/thumbnail/dfc_3.png?20220404" width="512" height="288" alt="Estruturação DFC" />            
                                        </slide>
                                        <slide>            
                                            <img class="rounded" data-fancybox="supervisor3" data-src="/images/modulos/fiscal/dfc_4.png?20220404" src="/images/modulos/fiscal/thumbnail/dfc_4.png?20220404" width="512" height="288" alt="Estruturação DFC" />            
                                        </slide> 
                                        <slide>          
                                            <img class="rounded" data-fancybox="supervisor3" data-src="/images/modulos/fiscal/dfc_5.png?20220404" src="/images/modulos/fiscal/thumbnail/dfc_5.png?20220404" width="512" height="288" alt="Estruturação DFC" />           
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Estruturação DFC</h2>
                            <div class="desc">
                                <p>O demonstrativo de fluxo de caixa é um relatório contábil totalmente parametrizado no SGL.</p>
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
                                <img class="rounded box" data-fancybox="supervisor4" data-src="/images/modulos/fiscal/exportacao.png?20220404" src="/images/modulos/fiscal/thumbnail/exportacao.png?20220404" width="512" height="288" alt="Integração Contábil"/>
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