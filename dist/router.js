import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

import _634cb06c from '..\\pages\\fale-conosco.vue'
import _d3739724 from '..\\pages\\loteamentos.vue'
import _599546de from '..\\pages\\planos.vue'
import _59b7680c from '..\\pages\\quero-uma-demonstracao.vue'
import _1b7b470a from '..\\pages\\sobre-o-setup.vue'
import _4fa2ef4c from '..\\pages\\conteudo\\base-de-conhecimento.vue'
import _1ee6f0c0 from '..\\pages\\conteudo\\eventos-online.vue'
import _9f200ba0 from '..\\pages\\conteudo\\eventos.vue'
import _3b1fe60b from '..\\pages\\conteudo\\fique-por-dentro.vue'
import _7ed3335a from '..\\pages\\conteudo\\politica-de-privacidade.vue'
import _403a5bd8 from '..\\pages\\conteudo\\termos-de-uso.vue'
import _065eecb4 from '..\\pages\\modulos\\administrativo.vue'
import _e82afa74 from '..\\pages\\modulos\\controle-de-atendimentos.vue'
import _1b17d5c8 from '..\\pages\\modulos\\financeiro.vue'
import _7d5b963a from '..\\pages\\modulos\\fiscal.vue'
import _82e5d25c from '..\\pages\\modulos\\gestao-de-inadimplencia.vue'
import _40054883 from '..\\pages\\modulos\\integrador.vue'
import _067f756f from '..\\pages\\modulos\\mapa-interativo.vue'
import _500ee063 from '..\\pages\\modulos\\portal-de-cliente.vue'
import _69fabefe from '..\\pages\\modulos\\simulador-de-vendas.vue'
import _33766f51 from '..\\pages\\index.vue'

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fale-conosco/",
    component: _634cb06c,
    pathToRegexpOptions: {"strict":true},
    name: "fale-conosco"
  }, {
    path: "/loteamentos/",
    component: _d3739724,
    pathToRegexpOptions: {"strict":true},
    name: "loteamentos"
  }, {
    path: "/planos/",
    component: _599546de,
    pathToRegexpOptions: {"strict":true},
    name: "planos"
  }, {
    path: "/quero-uma-demonstracao/",
    component: _59b7680c,
    pathToRegexpOptions: {"strict":true},
    name: "quero-uma-demonstracao"
  }, {
    path: "/sobre-o-setup/",
    component: _1b7b470a,
    pathToRegexpOptions: {"strict":true},
    name: "sobre-o-setup"
  }, {
    path: "/conteudo/base-de-conhecimento/",
    component: _4fa2ef4c,
    pathToRegexpOptions: {"strict":true},
    name: "conteudo-base-de-conhecimento"
  }, {
    path: "/conteudo/eventos-online/",
    component: _1ee6f0c0,
    pathToRegexpOptions: {"strict":true},
    name: "conteudo-eventos-online"
  }, {
    path: "/conteudo/eventos/",
    component: _9f200ba0,
    pathToRegexpOptions: {"strict":true},
    name: "conteudo-eventos"
  }, {
    path: "/conteudo/fique-por-dentro/",
    component: _3b1fe60b,
    pathToRegexpOptions: {"strict":true},
    name: "conteudo-fique-por-dentro"
  }, {
    path: "/conteudo/politica-de-privacidade/",
    component: _7ed3335a,
    pathToRegexpOptions: {"strict":true},
    name: "conteudo-politica-de-privacidade"
  }, {
    path: "/conteudo/termos-de-uso/",
    component: _403a5bd8,
    pathToRegexpOptions: {"strict":true},
    name: "conteudo-termos-de-uso"
  }, {
    path: "/modulos/administrativo/",
    component: _065eecb4,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-administrativo"
  }, {
    path: "/modulos/controle-de-atendimentos/",
    component: _e82afa74,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-controle-de-atendimentos"
  }, {
    path: "/modulos/financeiro/",
    component: _1b17d5c8,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-financeiro"
  }, {
    path: "/modulos/fiscal/",
    component: _7d5b963a,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-fiscal"
  }, {
    path: "/modulos/gestao-de-inadimplencia/",
    component: _82e5d25c,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-gestao-de-inadimplencia"
  }, {
    path: "/modulos/integrador/",
    component: _40054883,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-integrador"
  }, {
    path: "/modulos/mapa-interativo/",
    component: _067f756f,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-mapa-interativo"
  }, {
    path: "/modulos/portal-de-cliente/",
    component: _500ee063,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-portal-de-cliente"
  }, {
    path: "/modulos/simulador-de-vendas/",
    component: _69fabefe,
    pathToRegexpOptions: {"strict":true},
    name: "modulos-simulador-de-vendas"
  }, {
    path: "/",
    component: _33766f51,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
