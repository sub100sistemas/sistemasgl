<template>
    <div class="intro5-section section">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 flex-column-reverse flex-lg-row max-mb-n30">
                <div class="col align-self-center max-mb-30">
                    <div class="intro5-content  pt-0 pt-md-4">
                        <h1 class="title fz-26 text-white max-mb-30">O <span>Sistema de Gestão de Loteamentos SGL</span> possui soluções inovadoras para quem incorpora e administra loteamentos além de outros empreendimentos.</h1>
                        <div class="desc">
                            <p class="text-white">Um programa desenvolvido para atender todas as áreas de administração do loteamento, que se iniciam no primeiro atendimento e vão até o último recebível.</p>
                            <p class="text-white">O Sistema de Gestão de Loteamento SGL oferece módulos de controle de atendimento, simulador de vendas, controle e administração financeira e fiscal do empreendimento.</p>
                        </div>
                        <n-link to="/quero-uma-demonstracao/" aria-label="Quero uma demonstração" class="btn btn-primary mr-0 mr-md-3 mb-0 mb-md-3 mx-w-100">
                            Quero uma demonstração
                        </n-link>
                        <a data-fancybox="videoSgl4" href="https://youtu.be/-VNMWEzQLlo" aria-label="Assista o vídeo do SGL"  data-width="100%" data-height="100%" class="btn btn-outline-primary btn-hover-primary-two text-white mb-0 mb-md-3 mx-w-100">
                            Assista o vídeo do SGL
                        </a>
                    </div>
                </div> 
                <div class="col scene pt-5 pt-xl-0">
                    <div class="intro5-image" data-depth="0.1">
                        <img class="homeSistema" src="/images/sub100/home.svg?20220407" width="540" height="485" alt="Sistema de Gestão de Loteamentos SGL" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .homeSistema {
        width: 100%;
        height: auto;
    }
    @media only screen and (max-width: 767px){
        .intro5-content {
            padding: 40px 15px 40px;
        }
    }
</style>
<script>
    export default {
        props: ['addClassName', 'imgSrc', 'dataDepth'],
    };
</script>