<template>
    <div class="become-an-instructor-section section-padding" :style="{ backgroundImage: `url('/images/bg/become-a-teache-bg.png')` }">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-6">
                    <div class="instructor-register-from">
                        <doubtForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            doubtForm: () => import('@/components/sub100/partials/doubtForm'),
        }
    };
</script>