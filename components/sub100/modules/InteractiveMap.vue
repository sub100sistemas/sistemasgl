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
                                            <img class="rounded" data-fancybox="mapa1" data-src="/images/modulos/mapa/reservasInterativas_1.png?20220404" src="/images/modulos/mapa/thumbnail/reservasInterativas_1.png?20220404" width="512" height="288" alt="Reserva interativa" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="mapa1" data-src="/images/modulos/mapa/reservasInterativas_2.png?20220404" src="/images/modulos/mapa/thumbnail/reservasInterativas_2.png?20220404" width="512" height="288" alt="Reserva interativa" />
                                        </slide>
                                    </carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl ml-0 ml-xl-5">
                        <div class="modules-content text-center ml-0 ml-xl-5">
                            <h2 class="title fz-30">Reserva interativa</h2>
                            <div class="desc">
                                <p>O mapa interativo permite reservar, fazer propostas ou vender diretamente na planta do empreendimento, de forma intuitiva e rápida.</p>
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
                            <h2 class="title fz-30">Marcações simplificadas</h2>
                            <div class="desc">
                                <p>As marcações para montar o mapa interativo são dinâmicas e rápidas. O mapa interativo possui recursos de reserva técnica e situação de pré-venda, onde seus lotes poderão ser sinalizados e bloqueados dentro do mapa de vendas.</p>
                            </div> 
                        </div>
                    </div>
                    <div class="col-12 col-xl mt-4 mt-xl-0 text-center">
                        <div class="modules-screen">
                            <div class="app">
                                <div class="box">
                                    <carousel :navigationEnabled="true" :per-page="1">
                                        <slide>
                                            <img class="rounded" data-fancybox="mapa2" data-src="/images/modulos/mapa/marcacoes_1.png?20220404" src="/images/modulos/mapa/thumbnail/marcacoes_1.png?20220404" width="512" height="288" alt="Marcações simplificadas" />
                                        </slide> 
                                        <slide>
                                            <img class="rounded" data-fancybox="mapa2" data-src="/images/modulos/mapa/marcacoes_2.png?20220404" src="/images/modulos/mapa/thumbnail/marcacoes_2.png?20220404" width="512" height="288" alt="Marcações simplificadas" />
                                        </slide>
                                        <slide>
                                            <img class="rounded" data-fancybox="mapa2" data-src="/images/modulos/mapa/marcacoes_3.png?20220404" src="/images/modulos/mapa/thumbnail/marcacoes_3.png?20220404" width="512" height="288" alt="Marcações simplificadas" />
                                        </slide>
                                        <slide>
                                            <img class="rounded" data-fancybox="mapa2" data-src="/images/modulos/mapa/marcacoes_4.png?20220404" src="/images/modulos/mapa/thumbnail/marcacoes_4.png?20220404" width="512" height="288" alt="Marcações simplificadas" />
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