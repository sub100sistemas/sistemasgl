(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{280:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));n(136),n(80),n(138),n(139),n(137),n(57),n(58);var c=n(81),r=(n(82),n(228),n(232)),o=n(205),l=n(559),f=n(208),O=n(207),d=n(240),j=n(210),h=n(206),v=n(227),m=n(249),y=n(464);function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _=function t(e,n){if(!e)return r.default.component(n);var c=(e.$options||{}).components;return c&&c[n]||t(e.$parent,n)},k=Object(j.j)(y.b,["content"]),P=Object(h.d)(Object(j.m)(w(w({},k),{},{icon:Object(h.c)(O.u)})),f.lb),E=Object(o.c)({name:f.lb,functional:!0,props:P,render:function(t,e){var data=e.data,n=e.props,c=e.parent,r=Object(v.e)(Object(v.h)(n.icon||"")).replace(d.q,"");return t(r&&_(c,"BIcon".concat(r))||m.Rc,Object(l.a)(data,{props:Object(h.e)(k,n)}))}})},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var c=n(43),r=n(44),o=(n(57),n(82),n(58),n(240)),l=n(215),f=n(211),O=n(239),d=n(210),j=n(205),h="__bv__visibility_observer",v=function(){return Object(r.a)((function t(e,n){Object(c.a)(this,t),this.el=e,this.callback=n.callback,this.margin=n.margin||0,this.once=n.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}),[{key:"createObserver",value:function(){var t=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(f.f)(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(t){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}Object(j.e)((function(){Object(l.D)((function(){t.observer&&t.observer.observe(t.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},n=Boolean(e.isIntersecting||e.intersectionRatio>0);n!==this.visible&&(this.visible=n,this.callback(n),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}])}(),m=function(t){var e=t[h];e&&e.stop&&e.stop(),delete t[h]},y=function(t,e){var n=e.value,c=e.modifiers,r={margin:"0px",once:!1,callback:n};Object(d.h)(c).forEach((function(t){o.h.test(t)?r.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(r.once=!0)})),m(t),t[h]=new v(t,r),t[h]._prevModifiers=Object(d.b)(c)},$={bind:y,componentUpdated:function(t,e,n){var c=e.value,r=e.oldValue,o=e.modifiers;o=Object(d.b)(o),!t||c===r&&t[h]&&Object(O.a)(o,t[h]._prevModifiers)||y(t,{value:c,modifiers:o})},unbind:function(t){m(t)}}},317:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(318),r=n(212),o=Object(r.b)({directives:{VBToggle:c.a}})},318:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));n(80),n(224),n(57),n(82),n(228),n(250),n(58);var c=n(208),r=n(234),o=n(213),l=n(243),f=n(240),O=n(220),d=n(319),j=n(215),h=n(223),v=n(211),m=n(239),y=n(210),$=n(289),w="collapsed",_="not-collapsed",k="__BV_toggle",P="".concat(k,"_HANDLER__"),E="".concat(k,"_CLICK__"),S="".concat(k,"_STATE__"),T="".concat(k,"_TARGETS__"),D="aria-controls",V="aria-expanded",B="role",C="tabindex",A="overflow-anchor",H=Object(h.d)(c.A,"toggle"),x=Object(h.e)(c.A,"state"),z=Object(h.e)(c.A,"sync-state"),N=Object(h.d)(c.A,"request-state"),L=[l.e,l.l],U=function(t){return!Object(O.a)(["button","a"],t.tagName.toLowerCase())},G=function(t){var e=t[E];e&&(Object(h.a)(t,"click",e,o.eb),Object(h.a)(t,"keydown",e,o.eb)),t[E]=null},F=function(t,e){t[P]&&e&&Object($.a)(e).$off([x,z],t[P]),t[P]=null},I=function(t,e){e?(Object(j.A)(t,w),Object(j.b)(t,_),Object(j.G)(t,V,"true")):(Object(j.A)(t,_),Object(j.b)(t,w),Object(j.G)(t,V,"false"))},M=function(t,e){t[e]=null,delete t[e]},Q=function(t,e,n){if(r.i&&Object(d.a)(n,e)){U(t)&&(Object(j.o)(t,B)||Object(j.G)(t,B,"button"),Object(j.o)(t,C)||Object(j.G)(t,C,"0")),I(t,t[S]);var c=function(t,e){var n=t.modifiers,c=t.arg,r=t.value,o=Object(y.h)(n||{});if(r=Object(v.n)(r)?r.split(f.x):r,Object(j.t)(e.tagName,"a")){var l=Object(j.h)(e,"href")||"";f.m.test(l)&&o.push(l.replace(f.l,""))}return Object(O.b)(c,r).forEach((function(t){return Object(v.n)(t)&&o.push(t)})),o.filter((function(t,e,n){return t&&n.indexOf(t)===e}))}(e,t);c.length>0?(Object(j.G)(t,D,c.join(" ")),Object(j.H)(t,A,"none")):(Object(j.z)(t,D),Object(j.C)(t,A)),Object(j.D)((function(){!function(t,e){if(G(t),e){var n=function(n){"keydown"===n.type&&!Object(O.a)(L,n.keyCode)||Object(j.r)(t)||(t[T]||[]).forEach((function(t){Object($.a)(e).$emit(H,t)}))};t[E]=n,Object(h.b)(t,"click",n,o.eb),U(t)&&Object(h.b)(t,"keydown",n,o.eb)}}(t,Object(d.a)(n,e))})),Object(m.a)(c,t[T])||(t[T]=c,c.forEach((function(t){Object($.a)(Object(d.a)(n,e)).$emit(N,t)})))}},R={bind:function(t,e,n){t[S]=!1,t[T]=[],function(t,e){if(F(t,e),e){var n=function(e,n){Object(O.a)(t[T]||[],e)&&(t[S]=n,I(t,n))};t[P]=n,Object($.a)(e).$on([x,z],n)}}(t,Object(d.a)(n,e)),Q(t,e,n)},componentUpdated:Q,updated:Q,unbind:function(t,e,n){G(t),F(t,Object(d.a)(n,e)),M(t,P),M(t,E),M(t,S),M(t,T),Object(j.A)(t,w),Object(j.A)(t,_),Object(j.z)(t,V),Object(j.z)(t,D),Object(j.z)(t,B),Object(j.C)(t,A)}}},325:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var c=n(234),r=n(213),o=n(223),l=n(211),f="__BV_hover_handler__",O="mouseenter",d=function(t,e,n){Object(o.c)(t,e,O,n,r.db),Object(o.c)(t,e,"mouseleave",n,r.db)},j=function(t,e){var n=e.value,r=void 0===n?null:n;if(c.i){var o=t[f],j=Object(l.f)(o),h=!(j&&o.fn===r);j&&h&&(d(!1,t,o),delete t[f]),Object(l.f)(r)&&h&&(t[f]=function(t){var e=function(e){t(e.type===O,e)};return e.fn=t,e}(r),d(!0,t,t[f]))}},h={bind:j,componentUpdated:j,unbind:function(t){j(t,{value:null})}}},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var c=n(208),r=n(213),o=n(243),l=n(215),f=n(223),O=n(211),d=n(210),j=n(289),h=n(319),v=Object(f.d)(c.Cb,r.U),m="__bv_modal_directive__",y=function(t){var e=t.modifiers,n=void 0===e?{}:e,c=t.arg,r=t.value;return Object(O.n)(r)?r:Object(O.n)(c)?c:Object(d.h)(n).reverse()[0]},$=function(t){return t&&Object(l.v)(t,".dropdown-menu > li, li.nav-item")&&Object(l.E)("a, button",t)||t},w=function(t){t&&"BUTTON"!==t.tagName&&(Object(l.o)(t,"role")||Object(l.G)(t,"role","button"),"A"===t.tagName||Object(l.o)(t,"tabindex")||Object(l.G)(t,"tabindex","0"))},_=function(t){var e=t[m]||{},n=e.trigger,c=e.handler;n&&c&&(Object(f.a)(n,"click",c,r.eb),Object(f.a)(n,"keydown",c,r.eb),Object(f.a)(t,"click",c,r.eb),Object(f.a)(t,"keydown",c,r.eb)),delete t[m]},k=function(t,e,n){var c=t[m]||{},O=y(e),d=$(t);O===c.target&&d===c.trigger||(_(t),function(t,e,n){var c=y(e),O=$(t);if(c&&O){var d=function(t){var r=t.currentTarget;if(!Object(l.r)(r)){var f=t.type,O=t.keyCode;"click"!==f&&("keydown"!==f||O!==o.e&&O!==o.l)||Object(j.a)(Object(h.a)(n,e)).$emit(v,c,r)}};t[m]={handler:d,target:c,trigger:O},w(O),Object(f.b)(O,"click",d,r.eb),"BUTTON"!==O.tagName&&"button"===Object(l.h)(O,"role")&&Object(f.b)(O,"keydown",d,r.eb)}}(t,e,n)),w(d)},P={inserted:k,updated:function(){},componentUpdated:k,unbind:_}},342:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var c=n(205),r=n(559),o=n(208),l=n(210),f=n(206),O=n(464),d=Object(f.d)(Object(l.j)(O.b,["content","stacked"]),o.mb),j=Object(c.c)({name:o.mb,functional:!0,props:d,render:function(t,e){var data=e.data,n=e.props,c=e.children;return t(O.a,Object(r.a)(data,{staticClass:"b-iconstack",props:n}),c)}})},412:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(413),r=n(212),o=Object(r.b)({directives:{VBPopover:c.a}})},413:function(t,e,n){"use strict";n.d(e,"a",(function(){return G}));n(136),n(138),n(139),n(137);var c=n(81),r=(n(80),n(224),n(226),n(57),n(82),n(250),n(245),n(58),n(208)),o=n(234),l=n(213),f=n(220),O=n(267),d=n(336),j=n(229),h=n(319),v=n(211),m=n(239),y=n(225),$=n(210),w=n(273),_=n(642),k=n(205);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S="__BV_Popover__",T={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},D=/^html$/i,V=/^nofade$/i,B=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,C=/^(window|viewport|scrollParent)$/i,A=/^d\d+$/i,H=/^ds\d+$/i,x=/^dh\d+$/i,z=/^o-?\d+$/i,N=/^v-.+$/i,L=/\s+/,U=function(t,e,n){if(o.i){var c=function(t,e){var n={title:void 0,content:void 0,trigger:"",placement:"right",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,disabled:!1,id:null,html:!1,delay:Object(O.c)(r.Qb,"delay",50),boundary:String(Object(O.c)(r.Qb,"boundary","scrollParent")),boundaryPadding:Object(y.c)(Object(O.c)(r.Qb,"boundaryPadding",5),0),variant:Object(O.c)(r.Qb,"variant"),customClass:Object(O.c)(r.Qb,"customClass")};if(Object(v.n)(t.value)||Object(v.h)(t.value)||Object(v.f)(t.value)?n.content=t.value:Object(v.k)(t.value)&&(n=E(E({},n),t.value)),t.arg&&(n.container="#".concat(t.arg)),Object(v.o)(n.title)){var data=e.data||{};n.title=data.attrs&&!Object(v.p)(data.attrs.title)?data.attrs.title:void 0}Object(v.k)(n.delay)||(n.delay={show:Object(y.c)(n.delay,0),hide:Object(y.c)(n.delay,0)}),Object($.h)(t.modifiers).forEach((function(t){if(D.test(t))n.html=!0;else if(V.test(t))n.animation=!1;else if(B.test(t))n.placement=t;else if(C.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(A.test(t)){var e=Object(y.c)(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else H.test(t)?n.delay.show=Object(y.c)(t.slice(2),0):x.test(t)?n.delay.hide=Object(y.c)(t.slice(2),0):z.test(t)?n.offset=Object(y.c)(t.slice(1),0):N.test(t)&&(n.variant=t.slice(2)||null)}));var c={};return Object(f.b)(n.trigger||"").filter(j.a).join(" ").trim().toLowerCase().split(L).forEach((function(t){T[t]&&(c[t]=!0)})),Object($.h)(t.modifiers).forEach((function(t){t=t.toLowerCase(),T[t]&&(c[t]=!0)})),n.trigger=Object($.h)(c).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger="click"),n}(e,n);if(!t[S]){var k=Object(h.a)(n,e);t[S]=Object(w.a)(k,_.a,{_scopeId:Object(d.a)(k,void 0)}),t[S].__bv_prev_data__={},t[S].$on(l.U,(function(){var data={};Object(v.f)(c.title)&&(data.title=c.title(t)),Object(v.f)(c.content)&&(data.content=c.content(t)),Object($.h)(data).length>0&&t[S].updateData(data)}))}var data={title:c.title,content:c.content,triggers:c.trigger,placement:c.placement,fallbackPlacement:c.fallbackPlacement,variant:c.variant,customClass:c.customClass,container:c.container,boundary:c.boundary,delay:c.delay,offset:c.offset,noFade:!c.animation,id:c.id,disabled:c.disabled,html:c.html},P=t[S].__bv_prev_data__;if(t[S].__bv_prev_data__=data,!Object(m.a)(data,P)){var U={target:t};Object($.h)(data).forEach((function(e){data[e]!==P[e]&&(U[e]="title"!==e&&"content"!==e||!Object(v.f)(data[e])?data[e]:data[e](t))})),t[S].updateData(U)}}},G={bind:function(t,e,n){U(t,e,n)},componentUpdated:function(t,e,n){Object(k.e)((function(){U(t,e,n)}))},unbind:function(t){!function(t){t[S]&&(t[S].$destroy(),t[S]=null),delete t[S]}(t)}}},426:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(427),r=n(212),o=Object(r.b)({directives:{VBTooltip:c.a}})},427:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));n(136),n(138),n(139),n(137);var c=n(81),r=(n(80),n(224),n(226),n(57),n(82),n(250),n(245),n(58),n(208)),o=n(234),l=n(213),f=n(220),O=n(205),d=n(267),j=n(336),h=n(229),v=n(319),m=n(211),y=n(239),$=n(225),w=n(210),_=n(273),k=n(508);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S="__BV_Tooltip__",T={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},D=/^html$/i,V=/^noninteractive$/i,B=/^nofade$/i,C=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,A=/^(window|viewport|scrollParent)$/i,H=/^d\d+$/i,x=/^ds\d+$/i,z=/^dh\d+$/i,N=/^o-?\d+$/i,L=/^v-.+$/i,U=/\s+/,G=function(t,e,n){if(o.i){var c=function(t,e){var n={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:Object(d.c)(r.tc,"delay",50),boundary:String(Object(d.c)(r.tc,"boundary","scrollParent")),boundaryPadding:Object($.c)(Object(d.c)(r.tc,"boundaryPadding",5),0),variant:Object(d.c)(r.tc,"variant"),customClass:Object(d.c)(r.tc,"customClass")};if(Object(m.n)(t.value)||Object(m.h)(t.value)||Object(m.f)(t.value)?n.title=t.value:Object(m.k)(t.value)&&(n=E(E({},n),t.value)),Object(m.o)(n.title)){var c=O.d?e.props:(e.data||{}).attrs;n.title=c&&!Object(m.p)(c.title)?c.title:void 0}Object(m.k)(n.delay)||(n.delay={show:Object($.c)(n.delay,0),hide:Object($.c)(n.delay,0)}),t.arg&&(n.container="#".concat(t.arg)),Object(w.h)(t.modifiers).forEach((function(t){if(D.test(t))n.html=!0;else if(V.test(t))n.interactive=!1;else if(B.test(t))n.animation=!1;else if(C.test(t))n.placement=t;else if(A.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(H.test(t)){var e=Object($.c)(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else x.test(t)?n.delay.show=Object($.c)(t.slice(2),0):z.test(t)?n.delay.hide=Object($.c)(t.slice(2),0):N.test(t)?n.offset=Object($.c)(t.slice(1),0):L.test(t)&&(n.variant=t.slice(2)||null)}));var o={};return Object(f.b)(n.trigger||"").filter(h.a).join(" ").trim().toLowerCase().split(U).forEach((function(t){T[t]&&(o[t]=!0)})),Object(w.h)(t.modifiers).forEach((function(t){t=t.toLowerCase(),T[t]&&(o[t]=!0)})),n.trigger=Object(w.h)(o).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger="hover focus"),n}(e,n);if(!t[S]){var P=Object(v.a)(n,e);t[S]=Object(_.a)(P,k.a,{_scopeId:Object(j.a)(P,void 0)}),t[S].__bv_prev_data__={},t[S].$on(l.U,(function(){Object(m.f)(c.title)&&t[S].updateData({title:c.title(t)})}))}var data={title:c.title,triggers:c.trigger,placement:c.placement,fallbackPlacement:c.fallbackPlacement,variant:c.variant,customClass:c.customClass,container:c.container,boundary:c.boundary,delay:c.delay,offset:c.offset,noFade:!c.animation,id:c.id,interactive:c.interactive,disabled:c.disabled,html:c.html},G=t[S].__bv_prev_data__;if(t[S].__bv_prev_data__=data,!Object(y.a)(data,G)){var F={target:t};Object(w.h)(data).forEach((function(e){data[e]!==G[e]&&(F[e]="title"===e&&Object(m.f)(data[e])?data[e](t):data[e])})),t[S].updateData(F)}}},F={bind:function(t,e,n){G(t,e,n)},componentUpdated:function(t,e,n){Object(O.e)((function(){G(t,e,n)}))},unbind:function(t){!function(t){t[S]&&(t[S].$destroy(),t[S]=null),delete t[S]}(t)}}},446:function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));n(80),n(57),n(82),n(58);var c=n(234),r=n(211),o=n(237),l=n(225),object=n(210),f=n(289),O=n(319),d=n(81),j=n(43),h=n(44),v=(n(136),n(214),n(224),n(217),n(287),n(138),n(139),n(137),n(86),n(83),n(456),n(228),n(245),n(244),n(213)),m=n(240),y=n(215),$=n(223),w=n(229),_=n(368),k=n(248);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S="active",T=".nav-link",D=".nav-item",V=".list-group-item",B=".dropdown-item",C=Object($.e)("BVScrollspy","activate"),A="position",H={element:"body",offset:10,method:"auto",throttle:75},x={element:"(string|element|component)",offset:"number",method:"string",throttle:"number"},z=["webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd"],N=function(){return Object(h.a)((function t(element,e,n){Object(j.a)(this,t),this.$el=element,this.$scroller=null,this.$selector=[T,V,B].join(","),this.$offsets=[],this.$targets=[],this.$activeTarget=null,this.$scrollHeight=0,this.$resizeTimeout=null,this.$scrollerObserver=null,this.$targetsObserver=null,this.$root=n||null,this.$config=null,this.updateConfig(e)}),[{key:"updateConfig",value:function(t,e){this.$scroller&&(this.unlisten(),this.$scroller=null);var n=E(E({},this.constructor.Default),t);if(e&&(this.$root=e),function(t,e,n){for(var c in n)if(Object(object.g)(n,c)){var r=n[c],o=e[c],l=o&&Object(y.s)(o)?"element":(f=o,Object(object.n)(f).match(/\s([a-zA-Z]+)/)[1].toLowerCase());l=o&&o._isVue?"component":l,new RegExp(r).test(l)||Object(k.a)("".concat(t,': Option "').concat(c,'" provided type "').concat(l,'" but expected type "').concat(r,'"'))}var f}(this.constructor.Name,n,this.constructor.DefaultType),this.$config=n,this.$root){var c=this;this.$root.$nextTick((function(){c.listen()}))}else this.listen()}},{key:"dispose",value:function(){this.unlisten(),clearTimeout(this.$resizeTimeout),this.$resizeTimeout=null,this.$el=null,this.$config=null,this.$scroller=null,this.$selector=null,this.$offsets=null,this.$targets=null,this.$activeTarget=null,this.$scrollHeight=null}},{key:"listen",value:function(){var t=this,e=this.getScroller();e&&"BODY"!==e.tagName&&Object($.b)(e,"scroll",this,v.db),Object($.b)(window,"scroll",this,v.db),Object($.b)(window,"resize",this,v.db),Object($.b)(window,"orientationchange",this,v.db),z.forEach((function(e){Object($.b)(window,e,t,v.db)})),this.setObservers(!0),this.handleEvent("refresh")}},{key:"unlisten",value:function(){var t=this,e=this.getScroller();this.setObservers(!1),e&&"BODY"!==e.tagName&&Object($.a)(e,"scroll",this,v.db),Object($.a)(window,"scroll",this,v.db),Object($.a)(window,"resize",this,v.db),Object($.a)(window,"orientationchange",this,v.db),z.forEach((function(e){Object($.a)(window,e,t,v.db)}))}},{key:"setObservers",value:function(t){var e=this;this.$scrollerObserver&&this.$scrollerObserver.disconnect(),this.$targetsObserver&&this.$targetsObserver.disconnect(),this.$scrollerObserver=null,this.$targetsObserver=null,t&&(this.$targetsObserver=Object(_.a)(this.$el,(function(){e.handleEvent("mutation")}),{subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]}),this.$scrollerObserver=Object(_.a)(this.getScroller(),(function(){e.handleEvent("mutation")}),{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["id","style","class"]}))}},{key:"handleEvent",value:function(t){var e=Object(r.n)(t)?t:t.type,n=this;"scroll"===e?(this.$scrollerObserver||this.listen(),this.process()):/(resize|orientationchange|mutation|refresh)/.test(e)&&(n.$resizeTimeout||(n.$resizeTimeout=setTimeout((function(){n.refresh(),n.process(),n.$resizeTimeout=null}),n.$config.throttle)))}},{key:"refresh",value:function(){var t=this,e=this.getScroller();if(e){var n=e!==e.window?A:"offset",c="auto"===this.$config.method?n:this.$config.method,r=c===A?y.x:y.w,o=c===A?this.getScrollTop():0;return this.$offsets=[],this.$targets=[],this.$scrollHeight=this.getScrollHeight(),Object(y.F)(this.$selector,this.$el).map((function(link){return Object(y.h)(link,"href")})).filter((function(t){return t&&m.n.test(t||"")})).map((function(t){var n=t.replace(m.n,"$1").trim();if(!n)return null;var c=Object(y.E)(n,e);return c&&Object(y.u)(c)?{offset:Object(l.c)(r(c).top,0)+o,target:n}:null})).filter(w.a).sort((function(a,b){return a.offset-b.offset})).reduce((function(e,n){return e[n.target]||(t.$offsets.push(n.offset),t.$targets.push(n.target),e[n.target]=!0),e}),{}),this}}},{key:"process",value:function(){var t=this.getScrollTop()+this.$config.offset,e=this.getScrollHeight(),n=this.$config.offset+e-this.getOffsetHeight();if(this.$scrollHeight!==e&&this.refresh(),t>=n){var c=this.$targets[this.$targets.length-1];this.$activeTarget!==c&&this.activate(c)}else{if(this.$activeTarget&&t<this.$offsets[0]&&this.$offsets[0]>0)return this.$activeTarget=null,void this.clear();for(var i=this.$offsets.length;i--;){this.$activeTarget!==this.$targets[i]&&t>=this.$offsets[i]&&(Object(r.o)(this.$offsets[i+1])||t<this.$offsets[i+1])&&this.activate(this.$targets[i])}}}},{key:"getScroller",value:function(){if(this.$scroller)return this.$scroller;var t=this.$config.element;return t?(Object(y.s)(t.$el)?t=t.$el:Object(r.n)(t)&&(t=Object(y.E)(t)),t?(this.$scroller="BODY"===t.tagName?window:t,this.$scroller):null):null}},{key:"getScrollTop",value:function(){var t=this.getScroller();return t===window?t.pageYOffset:t.scrollTop}},{key:"getScrollHeight",value:function(){return this.getScroller().scrollHeight||Object(o.d)(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getOffsetHeight",value:function(){var t=this.getScroller();return t===window?window.innerHeight:Object(y.i)(t).height}},{key:"activate",value:function(t){var e=this;this.$activeTarget=t,this.clear();var n=Object(y.F)(this.$selector.split(",").map((function(e){return"".concat(e,'[href$="').concat(t,'"]')})).join(","),this.$el);n.forEach((function(link){if(Object(y.p)(link,"dropdown-item")){var t=Object(y.e)(".dropdown, .dropup",link);t&&e.setActiveState(Object(y.E)(".dropdown-toggle",t),!0),e.setActiveState(link,!0)}else{e.setActiveState(link,!0),Object(y.v)(link.parentElement,D)&&e.setActiveState(link.parentElement,!0);for(var n=link;n;){var c=(n=Object(y.e)(".nav, .list-group",n))?n.previousElementSibling:null;c&&Object(y.v)(c,"".concat(T,", ").concat(V))&&e.setActiveState(c,!0),c&&Object(y.v)(c,D)&&(e.setActiveState(Object(y.E)(T,c),!0),e.setActiveState(c,!0))}}})),n&&n.length>0&&this.$root&&this.$root.$emit(C,t,n)}},{key:"clear",value:function(){var t=this;Object(y.F)("".concat(this.$selector,", ").concat(D),this.$el).filter((function(t){return Object(y.p)(t,S)})).forEach((function(e){return t.setActiveState(e,!1)}))}},{key:"setActiveState",value:function(t,e){t&&(e?Object(y.b)(t,S):Object(y.A)(t,S))}}],[{key:"Name",get:function(){return"v-b-scrollspy"}},{key:"Default",get:function(){return H}},{key:"DefaultType",get:function(){return x}}])}(),L="__BV_Scrollspy__",U=/^\d+$/,G=/^(auto|position|offset)$/,F=function(t,e,n){if(c.i){var d=function(t){var e={};return t.arg&&(e.element="#".concat(t.arg)),Object(object.h)(t.modifiers).forEach((function(t){U.test(t)?e.offset=Object(l.c)(t,0):G.test(t)&&(e.method=t)})),Object(r.n)(t.value)?e.element=t.value:Object(r.h)(t.value)?e.offset=Object(o.g)(t.value):Object(r.j)(t.value)&&Object(object.h)(t.value).filter((function(t){return!!N.DefaultType[t]})).forEach((function(n){e[n]=t.value[n]})),e}(e);t[L]?t[L].updateConfig(d,Object(f.a)(Object(O.a)(n,e))):t[L]=new N(t,d,Object(f.a)(Object(O.a)(n,e)))}},I={bind:function(t,e,n){F(t,e,n)},inserted:function(t,e,n){F(t,e,n)},update:function(t,e,n){e.value!==e.oldValue&&F(t,e,n)},componentUpdated:function(t,e,n){e.value!==e.oldValue&&F(t,e,n)},unbind:function(t){!function(t){t[L]&&(t[L].dispose(),t[L]=null,delete t[L])}(t)}}},464:function(t,e,n){"use strict";n.d(e,"b",(function(){return $})),n.d(e,"a",(function(){return w}));var c=n(81),r=(n(214),n(80),n(224),n(57),n(205)),o=n(559),l=n(208),f=n(207),O=n(229),d=n(211),j=n(237),h=n(225),v=n(206),m={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},y={width:null,height:null,focusable:null,role:null,"aria-label":null},$={animation:Object(v.c)(f.u),content:Object(v.c)(f.u),flipH:Object(v.c)(f.g,!1),flipV:Object(v.c)(f.g,!1),fontScale:Object(v.c)(f.p,1),rotate:Object(v.c)(f.p,0),scale:Object(v.c)(f.p,1),shiftH:Object(v.c)(f.p,0),shiftV:Object(v.c)(f.p,0),stacked:Object(v.c)(f.g,!1),title:Object(v.c)(f.u),variant:Object(v.c)(f.u)},w=Object(r.c)({name:l.nb,functional:!0,props:$,render:function(t,e){var data=e.data,n=e.props,r=e.children,l=n.animation,content=n.content,f=n.flipH,v=n.flipV,$=n.stacked,title=n.title,w=n.variant,_=Object(j.d)(Object(h.b)(n.fontScale,1),0)||1,k=Object(j.d)(Object(h.b)(n.scale,1),0)||1,P=Object(h.b)(n.rotate,0),E=Object(h.b)(n.shiftH,0),S=Object(h.b)(n.shiftV,0),T=f||v||1!==k,D=T||P,V=E||S,B=!Object(d.p)(content),C=t("g",{attrs:{transform:[D?"translate(8 8)":null,T?"scale(".concat((f?-1:1)*k," ").concat((v?-1:1)*k,")"):null,P?"rotate(".concat(P,")"):null,D?"translate(-8 -8)":null].filter(O.a).join(" ")||null},domProps:B?{innerHTML:content||""}:{}},r);V&&(C=t("g",{attrs:{transform:"translate(".concat(16*E/16," ").concat(-16*S/16,")")}},[C])),$&&(C=t("g",[C]));var A=[title?t("title",title):null,C].filter(O.a);return t("svg",Object(o.a)({staticClass:"b-icon bi",class:Object(c.a)(Object(c.a)({},"text-".concat(w),w),"b-icon-animation-".concat(l),l),attrs:m,style:$?{}:{fontSize:1===_?null:"".concat(100*_,"%")}},data,$?{attrs:y}:{},{attrs:{xmlns:$?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),A)}})},521:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(325),r=n(212),o=Object(r.b)({directives:{VBHover:c.a}})},522:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(446),r=n(212),o=Object(r.b)({directives:{VBScrollspy:c.a}})},523:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(291),r=n(212),o=Object(r.b)({directives:{VBVisible:c.a}})},524:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(337),r=n(212),o=Object(r.b)({directives:{VBModal:c.a}})},720:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var c=n(81),r=(n(82),n(136),n(80),n(138),n(139),n(137),n(57),n(228),n(58),n(205)),o=n(559),l=n(210),f=n(227),O=n(464);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=Object(l.j)(O.b,["content"]),v=function(t,content){var e=Object(f.b)(t),n="BIcon".concat(Object(f.e)(t)),c="bi-".concat(e),l=e.replace(/-/g," "),d=Object(f.h)(content||"");return Object(r.c)({name:n,functional:!0,props:h,render:function(t,e){var data=e.data,n=e.props;return t(O.a,Object(o.a)({props:{title:l},attrs:{"aria-label":l}},data,{staticClass:c,props:j(j({},n),{},{content:d})}))}})}},728:function(t,e,n){"use strict";n(249);var c=n(280);n.d(e,"a",(function(){return c.a}));n(342),n(284)},737:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var c=n(212),r=n(521),o=n(524),l=n(412),f=n(522),O=n(317),d=n(426),j=n(523),h=Object(c.b)({plugins:{VBHoverPlugin:r.a,VBModalPlugin:o.a,VBPopoverPlugin:l.a,VBScrollspyPlugin:f.a,VBTogglePlugin:O.a,VBTooltipPlugin:d.a,VBVisiblePlugin:j.a}})}}]);