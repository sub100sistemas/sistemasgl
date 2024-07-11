<template>
    <div class="cta-section section-padding cta-banner" :class="addClassName">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content">
                        <a href="/quero-uma-demonstracao/">
                            <picture>
                                <source srcset="/images/sub100/bannerSistermaSGL_1160.svg?20220404" width="100%" height="100%" alt="Sisterma SGL" media="(min-width: 1200px)">
                                <source srcset="/images/sub100/bannerSistermaSGL_770.svg?20220404" width="100%" height="100%" alt="Sisterma SGL" media="(min-width: 768px)">
                                <source srcset="/images/sub100/bannerSistermaSGL_412.svg?20220404" width="100%" height="100%" alt="Sisterma SGL" media="(min-width: 540px)">
                                <img src="/images/sub100/bannerSistermaSGL_412.svg" width="100%" height="100%" alt="Sisterma SGL">
                            </picture>   
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['addClassName'],
    }
</script>
<style lang="scss" scoped>
    .cta-banner { background: linear-gradient(180deg, #FFFFFF 65%, #F8F8F8 35%)}
    .section-padding {  padding-top:60px;  padding-bottom:10px }
    .dark-mode {
        .cta-banner { background: linear-gradient(180deg, transparent  65%, $bg-dark-secondary 35%)
    }
}
</style>