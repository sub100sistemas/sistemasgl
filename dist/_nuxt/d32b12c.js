(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{968:function(e,t,r){"use strict";r.r(t);var n,o=r(42),c=(r(57),r(84),r(277)),l=r(285),m=r.n(l),d={directives:{mask:c.mask},data:function(){return{errors:[],email:null,success:!1,loading:!1,obrigado:!1,subtitle:!0}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.init();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},methods:{checkForm:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,this.$recaptcha.execute("login");case 4:if(r=e.sent,console.log("ReCaptcha token:",r),this.errors=[],this.email||this.errors.push("Email"),this.errors.length){e.next=13;break}return this.loading=!0,e.next=12,m.a.post("https://email.sub100.com.br/sub100sistemas/form.php",{token:r,tipo_mail:"Newsletter",site:"SUB100 Loteamentos",email:this.email}).then((function(e){console.log("success",e.data),n.success=!0})).catch((function(e){console.log(e.response)})).finally((function(){n.loading=!1,n.obrigado=!0}));case 12:return e.abrupt("return",!0);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("Login error:",e.t0);case 18:case"end":return e.stop()}}),e,this,[[1,15]])}))),function(e){return n.apply(this,arguments)})}},v=d,f=r(209),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"newsletter-form"},[e.success||e.loading?e._e():t("form",{staticClass:"become-teacher-form",attrs:{id:"app",method:"post"},on:{submit:function(t){return t.preventDefault(),e.checkForm.apply(null,arguments)}}},[t("input",{attrs:{type:"hidden",name:"tipo_mail",id:"tipo_mail",value:"Newsletter"}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Seu e-mail",name:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),t("button",{staticClass:"botao btn btn-primary btn-hover-secondary",attrs:{type:"submit",disabled:e.loading}},[e._v("Enviar")])]),e._v(" "),e.loading?t("div",{staticClass:"col-12 text-center d-block info"},[e._m(2)]):e.obrigado?t("div",{staticClass:"col-12 mt=4 text-center d-block info"},[t("h4",{staticClass:"title mb-2 mt-4 fz-20"},[e._v("Obrigado!")]),e._v(" "),t("p",{staticClass:"fz-16 mt-2"},[e._v("Seu email foi cadastrado com sucesso.")])]):e.errors.length?t("div",{staticClass:"mt-4"},[t("b",{staticClass:"title fz-20"},[e._v("Por favor, corrija o seguinte erro:")]),e._v(" "),e._l(e.errors,(function(r){return t("p",{key:r,staticClass:"mt-0 fz-16"},[e._v(e._s(r))])}))],2):e._e()])])}),[function(){var e=this,t=e._self._c;return t("h2",{staticClass:"title"},[e._v("Inscreva-se no nosso "),t("span",[e._v("newsletter")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"subtitle"},[e._v("Digite seu endereço de e-mail para se registrar"),t("br",{staticClass:"d-none d-md-block"}),e._v("em nossa assinatura de newsletter")])},function(){var e=this._self._c;return e("div",{staticClass:"loadingio-spinner-dual-ring-zo5azsgap1m"},[e("div",{staticClass:"ldio-a8you79c3x6"},[e("div"),this._v(" "),e("div",[e("div")])])])}],!1,null,null,null);t.default=component.exports}}]);