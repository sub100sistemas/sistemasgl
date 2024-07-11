<template>
    <div class="course-section pt-5 mt-5 position-relative bg-E9EEFD">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title">Últimos <span>eventos</span></h2>
            </div>
            <!-- Section Title End -->

            <div class="row row-25 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 max-mb-n30 section-padding-bottom-80">
                <div class="col max-mb-30" data-aos="fade-up" v-for="course in courses" :key="course.index">
                    <div class="course-5">
                        <div class="thumbnail">
                            <a data-fancybox="listavideo2" class="image" :href="course.link">
                                <img class="icon" src="/images/icons/icon-youtube-play.png?20220404" alt="icon">
                                <img :src="course.imgSrc" :alt="course.title">
                            </a>
                        </div>
                        <div class="info pr-4 pl-4">
                            <h3 class="title">
                                <div>
                                    {{ course.title }}
                                </div>
                            </h3>
                            <span class="video">{{ course.video }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.thumbnail .icon {
    position: absolute;
    z-index: 9;
    top: 50%!important;
    left: 50%!important;
    transform: translate(-50%, -50%)!important;
    width: 70px!important;
}
</style>

<script>
    import fancybox from "@/mixins/fancybox.js"
    export default {
        mixins:[fancybox],
        data () {
             return {
                courses: [
                    {
                        imgSrc: "/images/others/course-1.jpg",
                        title: " Feirão com mais de 250 anunciantes de Maringá e Região",
                        video: "Assista o vídeo",
                        link: "https://youtu.be/lGjqn6d_fJc"
                    },
                    {
                        imgSrc: "/images/others/course-2.jpg",
                        title: "Esta na busca de imóveis para comprar, alugar ou investir?",
                        video: "Assista o vídeo",
                        link: "https://youtu.be/1TEwQQ2H7jg"
                    },
                    {
                        imgSrc: "/images/others/course-3.jpg",
                        title: "Encontre o imóvel dos seus sonhos",
                        video: "Assista o vídeo",
                        link: "https://youtu.be/hUkD4IhxWsg"
                    }
                ]
            }
        }
    };
</script>