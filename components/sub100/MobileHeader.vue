<template>
    <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
        <div class="mobile-menu-overlay" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="inner custom-scrollbar">
            <div class="mobile-header">
                <div class="logo">
                    <a href="https://sistemasgl.com.br" aria-label="SUB100 Loteamentos">
                        <inline-svg class="light-logo" src="/images/logo/dark-logo.svg?20220404" width="120" height="31" alt="SUB100 Loteamentos"/>
                    </a>
                </div>
                <button class="mobile-close-btn" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            MobileNavigation: () => import('@/components/sub100/MobileNavigation'),
        },
        
        methods: {
            // offcanvas menu close
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>