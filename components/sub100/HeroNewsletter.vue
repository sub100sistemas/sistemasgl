<template>
    <div class="section-padding position-relative pb-0 pb-md-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="newsletter-content">
                        <EventForm />
                        <ShapeWithAnimation addClassName="shape-1 d-none d-xl-block" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2 d-none d-xl-block" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-1.png" />
                        <ShapeWithAnimation addClassName="shape-3 d-none d-xl-block" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            EventForm: () => import('@/components/sub100/partials/EventForm'),
        }
    };
</script>