exports.ids = [16,5];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=template&id=263c9c3e
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"shape scene",class:_vm.addClassName},[_vm._ssrNode("<span"+_vm._ssrAttr("data-depth",_vm.dataDepth)+"><img"+_vm._ssrAttr("src",_vm.imgSrc)+" alt=\"shape image\""+_vm._ssrAttr("width",_vm.dataWidth)+_vm._ssrAttr("height",_vm.dataHeight)+"></span>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=template&id=263c9c3e

// EXTERNAL MODULE: external "parallax-js"
var external_parallax_js_ = __webpack_require__(133);
var external_parallax_js_default = /*#__PURE__*/__webpack_require__.n(external_parallax_js_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShapeWithAnimation.vue?vue&type=script&lang=js
/* harmony default export */ var ShapeWithAnimationvue_type_script_lang_js = ({props:['addClassName','imgSrc','dataDepth','dataWidth','dataHeight'],mounted(){var scene=document.querySelectorAll('.scene');if(scene){scene.forEach((el,i)=>{new external_parallax_js_default.a(el);});};}});
// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ShapeWithAnimationvue_type_script_lang_js = (ShapeWithAnimationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ShapeWithAnimation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShapeWithAnimationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "284aac64"
  
)

/* harmony default export */ var ShapeWithAnimation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var _fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_ui_dist_fancybox_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["a"] = ({props:['addClassName','imgSrc','dataDepth'],mounted(){_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__["Fancybox"].bind('[data-fancybox]',{Thumbs:false,infinite:false,click:null,Toolbar:{display:["close"]}});}});

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("5c1f6919", content, true)

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel{box-sizing:border-box;position:relative}.carousel *,.carousel :after,.carousel :before{box-sizing:inherit}.carousel.is-draggable{cursor:move;cursor:grab}.carousel.is-dragging{cursor:move;cursor:grabbing}.carousel__viewport{max-height:100%;max-width:100%;overflow:hidden;position:relative}.carousel__track{display:flex}.carousel__slide{flex:0 0 auto;max-width:100%;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;padding:1rem;position:relative;width:60%;width:var(--carousel-slide-width,60%)}.has-dots{margin-bottom:calc(.5rem + 22px)}.carousel__dots{display:flex;justify-content:center;left:0;list-style:none;margin:0 auto;padding:0;position:absolute;right:0;top:calc(100% + .5rem);-webkit-user-select:none;user-select:none}.carousel__dots .carousel__dot{cursor:pointer;display:block;height:22px;margin:0;padding:0;position:relative;width:22px}.carousel__dots .carousel__dot:after{background-color:currentColor;border-radius:50%;content:\"\";height:8px;left:50%;opacity:.25;position:absolute;top:50%;transform:translate(-50%,-50%);transition:opacity .15s ease-in-out;width:8px}.carousel__dots .carousel__dot.is-selected:after{opacity:1}.carousel__button{align-items:center;background:#0000;background:var(--carousel-button-bg,#0000);border:0;border-radius:50%;border-radius:var(--carousel-button-border-radius,50%);box-shadow:none;box-shadow:var(--carousel-button-shadow,none);color:currentColor;color:var(--carousel-button-color,currentColor);cursor:pointer;display:flex;height:48px;height:var(--carousel-button-height,48px);justify-content:center;padding:0;pointer-events:all;transition:opacity .15s ease;width:48px;width:var(--carousel-button-width,48px)}.carousel__button.is-next,.carousel__button.is-prev{position:absolute;top:50%;transform:translateY(-50%)}.carousel__button.is-prev{left:10px}.carousel__button.is-next{right:10px}.carousel__button[disabled]{cursor:default;opacity:.3}.carousel__button svg{height:50%;height:var(--carousel-button-svg-height,50%);width:50%;width:var(--carousel-button-svg-width,50%);fill:none;stroke:currentColor;stroke-width:1.5;stroke-width:var(--carousel-button-svg-stroke-width,1.5);stroke-linejoin:bevel;stroke-linecap:round;filter:none;filter:var(--carousel-button-svg-filter,none);pointer-events:none}html.with-fancybox{scroll-behavior:auto}body.compensate-for-scrollbar{overflow:hidden!important;touch-action:none}.fancybox__container{bottom:0;box-sizing:border-box;color:#fff;color:var(--fancybox-color,#fff);direction:ltr;display:flex;flex-direction:column;left:0;margin:0;padding:env(safe-area-inset-top,0) env(safe-area-inset-right,0) env(safe-area-inset-bottom,0) env(safe-area-inset-left,0);position:fixed;right:0;top:0;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:none;overflow:hidden;transform-origin:top left;z-index:1050;--carousel-button-width:48px;--carousel-button-height:48px;--carousel-button-svg-width:24px;--carousel-button-svg-height:24px;--carousel-button-svg-stroke-width:2.5;--carousel-button-svg-filter:drop-shadow(1px 1px 1px #0006)}.fancybox__container *,.fancybox__container :after,.fancybox__container :before{box-sizing:inherit}.fancybox__container :focus{outline:none}body:not(.is-using-mouse) .fancybox__container :focus{box-shadow:0 0 0 1px #fff,0 0 0 2px #01d2e8f0;box-shadow:0 0 0 1px #fff,0 0 0 2px var(--fancybox-accent-color,#01d2e8f0)}@media (min-width:1024px){.fancybox__container{--carousel-button-width:48px;--carousel-button-height:48px;--carousel-button-svg-width:27px;--carousel-button-svg-height:27px}}.fancybox__backdrop{background:#18181beb;background:var(--fancybox-bg,#18181beb);bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1}.fancybox__carousel{flex:1 1 auto;height:100%;min-height:0;position:relative;z-index:10}.fancybox__carousel.has-dots{margin-bottom:calc(.5rem + 22px)}.fancybox__viewport{cursor:default;height:100%;overflow:visible;position:relative;width:100%}.fancybox__track{display:flex;height:100%}.fancybox__slide{display:flex;flex:0 0 auto;flex-direction:column;margin:0;max-width:100%;outline:0;overflow:auto;overscroll-behavior:contain;padding:48px 8px 8px;position:relative;width:100%;--carousel-button-width:36px;--carousel-button-height:36px;--carousel-button-svg-width:22px;--carousel-button-svg-height:22px}.fancybox__slide:after,.fancybox__slide:before{content:\"\";flex:0 0 0;margin:auto}@media (min-width:1024px){.fancybox__slide{padding:64px 100px}}.fancybox__content{align-self:center;background:#fff;background:var(--fancybox-content-bg,#fff);color:#374151;color:var(--fancybox-content-color,#374151);display:flex;flex-direction:column;margin:0 env(safe-area-inset-right,0) 0 env(safe-area-inset-left,0);padding:36px;position:relative;z-index:20}.fancybox__content :focus:not(.carousel__button.is-close){box-shadow:none;outline:thin dotted}.fancybox__caption{align-self:center;color:currentColor;color:var(--fancybox-color,currentColor);cursor:auto;flex-shrink:0;line-height:1.375;margin:0;max-width:100%;padding:1rem 0 0;visibility:visible;word-wrap:anywhere}.is-loading .fancybox__caption{visibility:hidden}.fancybox__container>.carousel__dots{color:#fff;color:var(--fancybox-color,#fff);top:100%}.fancybox__nav .carousel__button{z-index:40}.fancybox__nav .carousel__button.is-next{right:8px}@media (min-width:1024px){.fancybox__nav .carousel__button.is-next{right:40px}}.fancybox__nav .carousel__button.is-prev{left:8px}@media (min-width:1024px){.fancybox__nav .carousel__button.is-prev{left:40px}}.carousel__button.is-close{position:absolute;right:8px;right:calc(env(safe-area-inset-right, 0px) + 8px);top:8px;top:calc(env(safe-area-inset-top, 0px) + 8px);z-index:40}@media (min-width:1024px){.carousel__button.is-close{right:40px}}.fancybox__content>.carousel__button.is-close{color:#fff;color:var(--fancybox-color,#fff);position:absolute;right:0;top:-40px}.fancybox__no-click,.fancybox__no-click button{pointer-events:none}.fancybox__spinner{color:currentColor;color:var(--fancybox-color,currentColor);height:50px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:50px}.fancybox__slide .fancybox__spinner{cursor:pointer;z-index:1053}.fancybox__spinner svg{animation:fancybox-rotate 2s linear infinite;bottom:0;height:100%;left:0;margin:auto;position:absolute;right:0;top:0;transform-origin:center center;width:100%}.fancybox__spinner svg circle{fill:none;stroke-width:2.75;stroke-miterlimit:10;stroke-dasharray:1,200;stroke-dashoffset:0;animation:fancybox-dash 1.5s ease-in-out infinite;stroke-linecap:round;stroke:currentColor}@keyframes fancybox-rotate{to{transform:rotate(1turn)}}@keyframes fancybox-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.carousel__button.is-close,.carousel__dots,.fancybox__backdrop,.fancybox__caption,.fancybox__nav{opacity:1;opacity:var(--fancybox-opacity,1)}.fancybox__container.is-animated[aria-hidden=false] .carousel__button.is-close,.fancybox__container.is-animated[aria-hidden=false] .carousel__dots,.fancybox__container.is-animated[aria-hidden=false] .fancybox__backdrop,.fancybox__container.is-animated[aria-hidden=false] .fancybox__caption,.fancybox__container.is-animated[aria-hidden=false] .fancybox__nav{animation:fancybox-fadeIn .15s ease backwards}.fancybox__container.is-animated.is-closing .carousel__button.is-close,.fancybox__container.is-animated.is-closing .carousel__dots,.fancybox__container.is-animated.is-closing .fancybox__backdrop,.fancybox__container.is-animated.is-closing .fancybox__caption,.fancybox__container.is-animated.is-closing .fancybox__nav{animation:fancybox-fadeOut .15s ease both}.fancybox-fadeIn{animation:fancybox-fadeIn .15s ease both}.fancybox-fadeOut{animation:fancybox-fadeOut .1s ease both}.fancybox-zoomInUp{animation:fancybox-zoomInUp .2s ease both}.fancybox-zoomOutDown{animation:fancybox-zoomOutDown .15s ease both}.fancybox-throwOutUp{animation:fancybox-throwOutUp .15s ease both}.fancybox-throwOutDown{animation:fancybox-throwOutDown .15s ease both}@keyframes fancybox-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fancybox-fadeOut{to{opacity:0}}@keyframes fancybox-zoomInUp{0%{opacity:0;transform:scale(.97) translate3d(0,16px,0)}to{opacity:1;transform:scale(1) translateZ(0)}}@keyframes fancybox-zoomOutDown{to{opacity:0;transform:scale(.97) translate3d(0,16px,0)}}@keyframes fancybox-throwOutUp{to{opacity:0;transform:translate3d(0,-30%,0)}}@keyframes fancybox-throwOutDown{to{opacity:0;transform:translate3d(0,30%,0)}}.fancybox__carousel .carousel__slide{scrollbar-color:#ccc #ffffff1a;scrollbar-width:thin}.fancybox__carousel .carousel__slide::-webkit-scrollbar{height:8px;width:8px}.fancybox__carousel .carousel__slide::-webkit-scrollbar-track{background-color:#ffffff1a}.fancybox__carousel .carousel__slide::-webkit-scrollbar-thumb{background-color:#ccc;border-radius:2px;box-shadow:inset 0 0 4px #0003}.fancybox__carousel.is-draggable .fancybox__slide,.fancybox__carousel.is-draggable .fancybox__slide .fancybox__content{cursor:move;cursor:grab}.fancybox__carousel.is-dragging .fancybox__slide,.fancybox__carousel.is-dragging .fancybox__slide .fancybox__content{cursor:move;cursor:grabbing}.fancybox__carousel .fancybox__slide .fancybox__content{cursor:auto}.fancybox__carousel .fancybox__slide.can-zoom_in .fancybox__content{cursor:zoom-in}.fancybox__carousel .fancybox__slide.can-zoom_out .fancybox__content{cursor:zoom-out}.fancybox__carousel .fancybox__slide.is-draggable .fancybox__content{cursor:move;cursor:grab}.fancybox__carousel .fancybox__slide.is-dragging .fancybox__content{cursor:move;cursor:grabbing}.fancybox__image{transform-origin:0 0;transition:none;-webkit-user-select:none;user-select:none}.has-image .fancybox__content{background:#0000;min-height:1px;padding:0}.is-closing .has-image .fancybox__content{overflow:visible}.has-image[data-image-fit=contain]{overflow:visible;touch-action:none}.has-image[data-image-fit=contain] .fancybox__content{flex-direction:row;flex-wrap:wrap}.has-image[data-image-fit=contain] .fancybox__image{max-height:100%;max-width:100%;object-fit:contain}.has-image[data-image-fit=contain-w]{overflow-x:hidden;overflow-y:auto}.has-image[data-image-fit=contain-w] .fancybox__content{min-height:auto}.has-image[data-image-fit=contain-w] .fancybox__image{height:auto;max-width:100%}.has-image[data-image-fit=cover]{overflow:visible;touch-action:none}.has-image[data-image-fit=cover] .fancybox__content{height:100%;width:100%}.has-image[data-image-fit=cover] .fancybox__image{height:100%;object-fit:cover;width:100%}.fancybox__carousel .fancybox__slide.has-html5video .fancybox__content,.fancybox__carousel .fancybox__slide.has-iframe .fancybox__content,.fancybox__carousel .fancybox__slide.has-map .fancybox__content,.fancybox__carousel .fancybox__slide.has-pdf .fancybox__content,.fancybox__carousel .fancybox__slide.has-video .fancybox__content{flex-shrink:1;max-width:100%;min-height:1px;overflow:visible}.fancybox__carousel .fancybox__slide.has-iframe .fancybox__content,.fancybox__carousel .fancybox__slide.has-map .fancybox__content,.fancybox__carousel .fancybox__slide.has-pdf .fancybox__content{height:80%;width:100%}.fancybox__carousel .fancybox__slide.has-html5video .fancybox__content,.fancybox__carousel .fancybox__slide.has-video .fancybox__content{height:540px;max-height:100%;max-width:100%;width:960px}.fancybox__carousel .fancybox__slide.has-html5video .fancybox__content,.fancybox__carousel .fancybox__slide.has-map .fancybox__content,.fancybox__carousel .fancybox__slide.has-pdf .fancybox__content,.fancybox__carousel .fancybox__slide.has-video .fancybox__content{background:#18181be6;color:#fff;padding:0}.fancybox__carousel .fancybox__slide.has-map .fancybox__content{background:#e5e3df}.fancybox__html5video,.fancybox__iframe{background:#0000;border:0;display:block;height:100%;width:100%}.fancybox-placeholder{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.fancybox__thumbs{flex:0 0 auto;opacity:1;opacity:var(--fancybox-opacity,1);padding:0 3px;position:relative}.fancybox__container.is-animated[aria-hidden=false] .fancybox__thumbs{animation:fancybox-fadeIn .15s ease-in backwards}.fancybox__container.is-animated.is-closing .fancybox__thumbs{opacity:0}.fancybox__thumbs .carousel__slide{align-items:center;box-sizing:initial;cursor:pointer;display:flex;flex:0 0 auto;justify-content:center;margin:0;overflow:visible;padding:8px 3px;width:96px;width:var(--fancybox-thumbs-width,96px)}.fancybox__thumbs .carousel__slide .fancybox__thumb:after{border:5px solid #22d5e9f5;border-color:var(--fancybox-accent-color,#22d5e9f5);border-radius:4px;border-radius:var(--fancybox-thumbs-border-radius,4px);bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .15s ease}.fancybox__thumbs .carousel__slide.is-nav-selected .fancybox__thumb:after{opacity:.92}.fancybox__thumbs .carousel__slide>*{pointer-events:none;-webkit-user-select:none;user-select:none}.fancybox__thumb{background-color:#ffffff1a;background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:4px;border-radius:var(--fancybox-thumbs-border-radius,4px);padding-top:66.66667%;padding-top:calc(100%/(var(--fancybox-thumbs-ratio, 1.5)));position:relative;width:100%}.fancybox__toolbar{background:linear-gradient(0deg,#0000 0,rgba(0,0,0,.006) 8.1%,rgba(0,0,0,.021) 15.5%,rgba(0,0,0,.046) 22.5%,rgba(0,0,0,.077) 29%,rgba(0,0,0,.114) 35.3%,rgba(0,0,0,.155) 41.2%,rgba(0,0,0,.198) 47.1%,rgba(0,0,0,.242) 52.9%,rgba(0,0,0,.285) 58.8%,rgba(0,0,0,.326) 64.7%,rgba(0,0,0,.363) 71%,rgba(0,0,0,.394) 77.5%,rgba(0,0,0,.419) 84.5%,rgba(0,0,0,.434) 91.9%,#00000070);display:flex;justify-content:space-between;left:0;padding:0;position:absolute;right:0;top:0;touch-action:none;z-index:20;--carousel-button-svg-width:20px;--carousel-button-svg-height:20px;opacity:1;opacity:var(--fancybox-opacity,1);text-shadow:1px 1px 1px #0006;text-shadow:var(--fancybox-toolbar-text-shadow,1px 1px 1px #0006)}@media (min-width:1024px){.fancybox__toolbar{padding:8px}}.fancybox__container.is-animated[aria-hidden=false] .fancybox__toolbar{animation:fancybox-fadeIn .15s ease-in backwards}.fancybox__container.is-animated.is-closing .fancybox__toolbar{opacity:0}.fancybox__toolbar__items{display:flex}.fancybox__toolbar__items--left{margin-right:auto}.fancybox__toolbar__items--center{left:50%;position:absolute;transform:translateX(-50%)}.fancybox__toolbar__items--right{margin-left:auto}@media(max-width:640px){.fancybox__toolbar__items--center:not(:last-child){display:none}}.fancybox__counter{font-feature-settings:\"tnum\";font-size:17px;font-variant-numeric:tabular-nums;line-height:48px;line-height:var(--carousel-button-height,48px);min-width:72px;padding:0 10px;text-align:center;-webkit-font-smoothing:subpixel-antialiased}.fancybox__progress{background:#22d5e9f5;background:var(--fancybox-accent-color,#22d5e9f5);height:3px;left:0;position:absolute;right:0;top:0;transform:scaleX(0);transform-origin:0;transition-property:transform;transition-timing-function:linear;-webkit-user-select:none;user-select:none;z-index:30}.fancybox__container:-webkit-full-screen::backdrop{opacity:0}.fancybox__container:fullscreen::backdrop{opacity:0}.fancybox__button--fullscreen g:nth-child(2){display:none}.fancybox__container:-webkit-full-screen .fancybox__button--fullscreen g:first-child{display:none}.fancybox__container:fullscreen .fancybox__button--fullscreen g:first-child{display:none}.fancybox__container:-webkit-full-screen .fancybox__button--fullscreen g:nth-child(2){display:block}.fancybox__container:fullscreen .fancybox__button--fullscreen g:nth-child(2){display:block}.fancybox__button--slideshow g:nth-child(2),.fancybox__container.has-slideshow .fancybox__button--slideshow g:first-child{display:none}.fancybox__container.has-slideshow .fancybox__button--slideshow g:nth-child(2){display:block}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/contents/EventsVideo.vue?vue&type=template&id=24ab78ac
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"about-video-section pt-4 section-padding-bottom-80",class:_vm.addClassName},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8\">","</div>",[_vm._ssrNode("<div class=\"about-me-video-wrapper about-us-one-video pr-55 pr-sm-0 pr-xs-0\">","</div>",[_vm._ssrNode("<div class=\"about-me-video\"><img src=\"/images/sub100/apresenta_zoo-25.png?855886\" width=\"715\" height=\"400\" alt=\"Próximo evento\"></div> "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-2","dataDepth":"-3","imgSrc":"/images/shape-animation/shape-3.png?20220404"}}),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-3","dataDepth":"-3"}}),_vm._ssrNode(" "),_c('ShapeWithAnimation',{attrs:{"addClassName":"shape-4","dataDepth":"-3","imgSrc":"/images/shape-animation/shape-1.png?20220404"}})],2)]),_vm._ssrNode(" <div class=\"col-lg-4\"><div class=\"about-content mt-sm-50 mt-xs-50\"><span class=\"sub-title mb-3\">Próximo evento</span> <h2 class=\"title fz-24\">Configurações, pastas de documentos, aprovação, reservas e propostas. O que melhoramos no Sistema SGL.</h2></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/sub100/contents/EventsVideo.vue?vue&type=template&id=24ab78ac

// EXTERNAL MODULE: ./mixins/fancybox.js
var fancybox = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/contents/EventsVideo.vue?vue&type=script&lang=js
/* harmony default export */ var EventsVideovue_type_script_lang_js = ({mixins:[fancybox["a" /* default */]]});
// CONCATENATED MODULE: ./components/sub100/contents/EventsVideo.vue?vue&type=script&lang=js
 /* harmony default export */ var contents_EventsVideovue_type_script_lang_js = (EventsVideovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sub100/contents/EventsVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contents_EventsVideovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b76c01ac"
  
)

/* harmony default export */ var EventsVideo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShapeWithAnimation: __webpack_require__(141).default})


/***/ })

};;
//# sourceMappingURL=sub100-contents-events-video.js.map