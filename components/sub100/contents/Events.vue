<template>
    <div class="about-section pt-5 pb-3" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col order-2">
                    <div class="about-content max-w-100 text-center">
                        <h1 class="title">Eventos online</h1>
                        <p class="fz-18">
                            Com palestras que trazem grandes novidades e inovações tecnológicas sobre o setor, além de apresentar as melhorias realizadas nos produtos da SUB100 Sistemas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['addClassName'],
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>