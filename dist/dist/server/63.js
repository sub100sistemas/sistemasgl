exports.ids = [63];
exports.modules = {

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./dist/recaptcha.vue?vue&type=template&id=323e610e
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"g-recaptcha",attrs:{"data-sitekey":_vm.siteKey||_vm.$recaptcha.siteKey,"data-size":_vm.computedDataSize,"data-theme":_vm.dataTheme,"data-badge":_vm.dataBadge,"data-tabindex":_vm.dataTabindex,"data-callback":"recaptchaSuccessCallback","data-expired-callback":"recaptchaExpiredCallback","data-error-callback":"recaptchaErrorCallback"}},[]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./dist/recaptcha.vue?vue&type=template&id=323e610e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./dist/recaptcha.vue?vue&type=script&lang=js
/* harmony default export */ var recaptchavue_type_script_lang_js = ({props:{siteKey:{type:String,default:''},dataTheme:{default:'light',type:String,validator:value=>{return['dark','light'].includes(value);}},dataSize:{default:null,type:String,validator:value=>{return['compact','normal','invisible'].includes(value);}},dataBadge:{default:'bottomright',type:String,validator:value=>{return['bottomright','bottomleft','inline'].includes(value);}},dataTabindex:{default:0,type:Number}},beforeDestroy(){this.$recaptcha.destroy();},mounted(){this.$recaptcha.init();this.$recaptcha.on('recaptcha-error',this.onError);this.$recaptcha.on('recaptcha-success',this.onSuccess);this.$recaptcha.on('recaptcha-expired',this.onExpired);},computed:{computedDataSize(){return this.dataSize||this.$recaptcha.size||'normal';}},methods:{onError(message){return this.$emit('error',message);},onSuccess(token){return this.$emit('success',token);},onExpired(){return this.$emit('expired');}}});
// CONCATENATED MODULE: ./dist/recaptcha.vue?vue&type=script&lang=js
 /* harmony default export */ var dist_recaptchavue_type_script_lang_js = (recaptchavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./dist/recaptcha.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dist_recaptchavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f798b454"
  
)

/* harmony default export */ var recaptcha = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=63.js.map