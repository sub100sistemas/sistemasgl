<template>
    <div class="about-section pt-5 pb-3" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col order-2">
                    <div class="about-content max-w-100 text-center">
                        <h1 class="sub-title">SUB100<strong>Sistemas</strong></h1>
                        <h3 class="title">23 anos <span> de experiência</span></h3>
                        <p class="fz-18">
                            Nesse período adquirimos conhecimento sobre o setor de loteamentos e incorporações, o que nos proporcionou desenvolver sistemas que realmente ajudam nossos clientes a serem mais eficientes e competitivos diante de seus concorrentes.<br>A SUB100 Sistemas foi fundada em 2000, na cidade de Maringá estado do Paraná.
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