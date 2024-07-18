exports.ids = [43];
exports.modules = {

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7c362898", content, true, context)
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doubtForm_vue_vue_type_style_index_0_id_3b0bae4e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doubtForm_vue_vue_type_style_index_0_id_3b0bae4e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doubtForm_vue_vue_type_style_index_0_id_3b0bae4e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doubtForm_vue_vue_type_style_index_0_id_3b0bae4e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_doubtForm_vue_vue_type_style_index_0_id_3b0bae4e_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "textarea{min-height:140px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/partials/doubtForm.vue?vue&type=template&id=3b0bae4e
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"contact-info d-block"},[!_vm.success&&!_vm.loading?_vm._ssrNode("<form id=\"app\" method=\"post\" class=\"become-teacher-form\">","</form>",[_vm._ssrNode("<input type=\"hidden\" name=\"tipo_mail\" id=\"tipo_mail\" value=\"Tira dúvidas sobre produtos\"> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<h4 class=\"title\">Tira dúvidas sobre produtos oferecidos.</h4> <div class=\"col-md-12 max-mb-30\"><input type=\"text\" placeholder=\"Empresa \" name=\"empresa\" id=\"empresa\""+_vm._ssrAttr("value",_vm.empresa)+"></div> <div class=\"col-md-12 max-mb-30\"><input type=\"email\" placeholder=\"Email *\" name=\"email\" id=\"email\""+_vm._ssrAttr("value",_vm.email)+"></div> <div class=\"col-md-6 max-mb-30\"><input type=\"text\" placeholder=\"Nome *\" name=\"nome\" id=\"nome\""+_vm._ssrAttr("value",_vm.nome)+"></div> "),_vm._ssrNode("<div class=\"col-md-6 max-mb-30\">","</div>",[_c('input',{directives:[{name:"mask",rawName:"v-mask",value:['(##) ####-####','(##) #####-####'],expression:"['(##) ####-####', '(##) #####-####']"},{name:"model",rawName:"v-model",value:_vm.phone,expression:"phone"}],attrs:{"type":"text","placeholder":"Telefone ","name":"phone","id":"phone"},domProps:{"value":_vm.phone},on:{"input":function($event){if($event.target.composing)return;_vm.phone=$event.target.value;}}},[])]),_vm._ssrNode(" <h4 class=\"col-md-12 max-mb-10 text-left\">Mensagem</h4> <div class=\"col-12 max-mb-30\"><textarea placeholder=\"Deixa sua mensagem e como deseja ser contatado. *\" name=\"message\" id=\"message\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea> "+(_vm.errors.length?"<p class=\"info pt-3\"><b class=\"title\">Por favor, corrija o(s) seguinte(s) erro(s):</b> <ul class=\"pt-2\">"+_vm._ssrList(_vm.errors,function(error){return"<li>"+_vm._ssrEscape(_vm._s(error))+"</li>";})+"</ul></p>":"<!---->")+"</div> <div class=\"col-12\"><input type=\"submit\" value=\"Enviar\" class=\"btn btn-primary btn-hover-secondary\"></div>")],2)],2):_vm._e(),_vm._ssrNode(" "+(_vm.loading?"<div class=\"col-12 section-padding text-center d-block info\"><div class=\"loadingio-spinner-dual-ring-zo5azsgap1m\"><div class=\"ldio-a8you79c3x6\"><div></div> <div><div></div></div></div></div></div>":_vm.obrigado?"<div class=\"col-12 section-padding mt=4 mb-4 text-center d-block info\"><img src=\"/images/svg/visto.svg\"> <h4 class=\"title mb-2 mt-4 fz-30\">Obrigado!</h4> <p class=\"fz-20\">Seu formulário foi enviado com sucesso.</p></div>":"<!---->"))],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/sub100/partials/doubtForm.vue?vue&type=template&id=3b0bae4e

// EXTERNAL MODULE: external "vue-the-mask"
var external_vue_the_mask_ = __webpack_require__(135);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(136);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/partials/doubtForm.vue?vue&type=script&lang=js
/* harmony default export */ var doubtFormvue_type_script_lang_js = ({directives:{mask: external_vue_the_mask_["mask"]},data(){return{errors:[],empresa:null,email:null,nome:null,phone:null,message:null,success:false,loading:false,obrigado:false};},async mounted(){try{await this.$recaptcha.init();}catch(e){console.log(e);}},methods:{checkForm:async function(e){e.preventDefault();try{const token=await this.$recaptcha.execute('login');console.log('ReCaptcha token:',token);this.errors=[];if(!this.nome){this.errors.push('O nome é obrigatório.');}if(!this.email){this.errors.push('O email é obrigatório.');}if(!this.message){this.errors.push('A mensagem é obrigatória.');}if(!this.errors.length){await external_axios_default.a.post('https://email.sub100.com.br/sub100sistemas/form.php',{'token':token,'tipo_mail':"Tira dúvidas sobre produtos oferecidos",'site':"SUB100 Loteamentos",'empresa':this.empresa,'contato':this.nome,'email':this.email,'phone':this.phone,'message':this.message}).then(response=>{console.log('success',response.data);this.success=true;this.loading=true;setTimeout(()=>{this.loading=false;this.obrigado=true;},1000);}).catch(error=>{console.log(error.response);});return true;}}catch(error){console.log('Login error:',error);}}}});
// CONCATENATED MODULE: ./components/sub100/partials/doubtForm.vue?vue&type=script&lang=js
 /* harmony default export */ var partials_doubtFormvue_type_script_lang_js = (doubtFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sub100/partials/doubtForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partials_doubtFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "25f2a560"
  
)

/* harmony default export */ var doubtForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sub100-partials-doubt-form.js.map