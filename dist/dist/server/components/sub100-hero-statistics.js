exports.ids = [30];
exports.modules = {

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("31b831c9", content, true, context)
};

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroStatistics_vue_vue_type_style_index_0_id_17e941f7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroStatistics_vue_vue_type_style_index_0_id_17e941f7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroStatistics_vue_vue_type_style_index_0_id_17e941f7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroStatistics_vue_vue_type_style_index_0_id_17e941f7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroStatistics_vue_vue_type_style_index_0_id_17e941f7_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bg-f7f8ff[data-v-17e941f7]{background-color:#f7f8ff!important}.dark-mode .bg-f7f8ff[data-v-17e941f7]{background:#111!important}@media only screen and (max-width:767px){.FontStatistics[data-v-17e941f7]{font-size:22px;line-height:1.4}.FontStatistics .sub-title span[data-v-17e941f7]{font-weight:700}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/HeroStatistics.vue?vue&type=template&id=17e941f7&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"funfact-section section-padding pt-5 bg-f7f8ff",class:_vm.addClassName,style:_vm.bgImg},[_vm._ssrNode("<div class=\"container\" data-v-17e941f7>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-17e941f7>","</div>",[_vm._ssrNode("<div class=\"col-lg-12 mx-auto\" data-v-17e941f7>","</div>",[_vm._ssrNode("<div class=\"cta-content text-center\" data-v-17e941f7><h4 class=\"FontStatistics mb-1 mb-xl-5\" data-v-17e941f7><span class=\"d-inline d-md-block sub-title mb-0 mb-md-1\" data-v-17e941f7><span data-v-17e941f7>Durante esses</span> 12 anos de SGL - Sistema de Gestão de Loteamentos, <span data-v-17e941f7> ajudamos nossos </span></span> <span class=\"title fz-36\" data-v-17e941f7>clientes a expandirem as fronteiras urbanas brasileiras.</span></h4></div> "),_vm._ssrNode("<div class=\"row row-cols-lg-4 row-cols-md-2 row-cols-1 max-mb-n30\" data-v-17e941f7>","</div>",_vm._l(_vm.funfacts,function(funfact){return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col max-mb-30\" data-v-17e941f7>","</div>",[_vm._ssrNode("<div class=\"funfact\" data-v-17e941f7>","</div>",[_vm._ssrNode("<div class=\"icon\" data-v-17e941f7>","</div>",[_c('inline-svg',{attrs:{"src":funfact.icon,"alt":funfact.alt}})],1),_vm._ssrNode(" <div class=\"number\" data-v-17e941f7><span class=\"counter\" data-v-17e941f7>"+_vm._ssrEscape(_vm._s(funfact.digit))+"</span></div> <div class=\"text mt-1 mt-xl-3 d-block fw-bold fs-6\" data-v-17e941f7>"+_vm._ssrEscape(_vm._s(funfact.text))+"</div>")],2)]);}),0)],2)])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/sub100/HeroStatistics.vue?vue&type=template&id=17e941f7&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sub100/HeroStatistics.vue?vue&type=script&lang=js
/* harmony default export */ var HeroStatisticsvue_type_script_lang_js = ({props:['addClassName','bgImg'],data(){return{funfacts:[{id:1,icon:"/images/icons/vgv2.svg?20220404",alt:"icon",digit:"+12 bilhões",text:"VGV"},{id:2,icon:"/images/icons/empreendimentos.svg?20220404",alt:"icon",digit:"+1,8 mil",text:"Empreendimentos"},{id:3,icon:"/images/icons/unidades.svg?20220404",alt:"icon",digit:"+284 mil",text:"Unidades"},{id:4,icon:"/images/icons/usuarios.svg?20220404",alt:"icon",digit:"+11,6 mil",text:"Usuários"}]};}});
// CONCATENATED MODULE: ./components/sub100/HeroStatistics.vue?vue&type=script&lang=js
 /* harmony default export */ var sub100_HeroStatisticsvue_type_script_lang_js = (HeroStatisticsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/sub100/HeroStatistics.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(202)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sub100_HeroStatisticsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17e941f7",
  "7e88b207"
  
)

/* harmony default export */ var HeroStatistics = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sub100-hero-statistics.js.map