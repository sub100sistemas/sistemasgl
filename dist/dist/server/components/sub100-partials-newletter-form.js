exports.ids = [62];
exports.modules = {

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/partials/NewletterForm.vue?vue&type=template&id=2530e319
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<h2 class=\"title\">Inscreva-se no nosso <span>newsletter</span></h2> <p class=\"subtitle\">Digite seu endereço de e-mail para se registrar<br class=\"d-none d-md-block\">em nossa assinatura de newsletter</p> <div class=\"newsletter-form\">"+(!_vm.success&&!_vm.loading?"<form id=\"app\" method=\"post\" class=\"become-teacher-form\"><input type=\"hidden\" name=\"tipo_mail\" id=\"tipo_mail\" value=\"Newsletter\"> <input type=\"email\" placeholder=\"Seu e-mail\" name=\"email\" id=\"email\""+_vm._ssrAttr("value",_vm.email)+"> <button type=\"submit\""+_vm._ssrAttr("disabled",_vm.loading)+" class=\"botao btn btn-primary btn-hover-secondary\">Enviar</button></form>":"<!---->")+" "+(_vm.loading?"<div class=\"col-12 text-center d-block info\"><div class=\"loadingio-spinner-dual-ring-zo5azsgap1m\"><div class=\"ldio-a8you79c3x6\"><div></div> <div><div></div></div></div></div></div>":_vm.obrigado?"<div class=\"col-12 mt=4 text-center d-block info\"><h4 class=\"title mb-2 mt-4 fz-20\">Obrigado!</h4> <p class=\"fz-16 mt-2\">Seu email foi cadastrado com sucesso.</p></div>":_vm.errors.length?"<div class=\"mt-4\"><b class=\"title fz-20\">Por favor, corrija o seguinte erro:</b> "+_vm._ssrList(_vm.errors,function(error){return"<p class=\"mt-0 fz-16\">"+_vm._ssrEscape(_vm._s(error))+"</p>";})+"</div>":"<!---->")+"</div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/sub100/partials/NewletterForm.vue?vue&type=template&id=2530e319

// EXTERNAL MODULE: external "vue-the-mask"
var external_vue_the_mask_ = __webpack_require__(135);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(136);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/partials/NewletterForm.vue?vue&type=script&lang=js
/* harmony default export */ var NewletterFormvue_type_script_lang_js = ({directives:{mask: external_vue_the_mask_["mask"]},data(){return{errors:[],email:null,success:false,loading:false,obrigado:false,subtitle:true};},async mounted(){try{await this.$recaptcha.init();}catch(e){console.log(e);}},methods:{checkForm:async function(e){e.preventDefault();try{const token=await this.$recaptcha.execute('login');console.log('ReCaptcha token:',token);this.errors=[];if(!this.email){this.errors.push('Email');}if(!this.errors.length){this.loading=true;await external_axios_default.a.post('https://email.sub100.com.br/sub100sistemas/form.php',{'token':token,'tipo_mail':"Newsletter",'site':"SUB100 Loteamentos",'email':this.email}).then(response=>{console.log('success',response.data);this.success=true;}).catch(error=>{console.log(error.response);}).finally(()=>{this.loading=false;this.obrigado=true;});return true;}}catch(error){console.log('Login error:',error);}}}});
// CONCATENATED MODULE: ./components/sub100/partials/NewletterForm.vue?vue&type=script&lang=js
 /* harmony default export */ var partials_NewletterFormvue_type_script_lang_js = (NewletterFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sub100/partials/NewletterForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partials_NewletterFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "57feb42c"
  
)

/* harmony default export */ var NewletterForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sub100-partials-newletter-form.js.map