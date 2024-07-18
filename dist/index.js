import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_2c4bb633 from 'nuxt_plugin_plugin_2c4bb633' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_78a44705 from 'nuxt_plugin_bootstrapvue_78a44705' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_gtm_ef09b9a8 from 'nuxt_plugin_gtm_ef09b9a8' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_nuxtcookiecontrol_a4e632e4 from 'nuxt_plugin_nuxtcookiecontrol_a4e632e4' // Source: .\\nuxt-cookie-control.js (mode: 'all')
import nuxt_plugin_recaptcha_7ee9d245 from 'nuxt_plugin_recaptcha_7ee9d245' // Source: .\\recaptcha.js (mode: 'all')
import nuxt_plugin_pluginserver_0f0c91d3 from 'nuxt_plugin_pluginserver_0f0c91d3' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_ad59bf6a from 'nuxt_plugin_pluginclient_ad59bf6a' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_2129baf1 from 'nuxt_plugin_pluginserver_2129baf1' // Source: .\\nuxt-speedkit\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_891f6d2e from 'nuxt_plugin_pluginclient_891f6d2e' // Source: .\\nuxt-speedkit\\plugin.client.js (mode: 'client')
import nuxt_plugin_image_bb48c85e from 'nuxt_plugin_image_bb48c85e' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_vueawesomeswiper_5ce03f58 from 'nuxt_plugin_vueawesomeswiper_5ce03f58' // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'all')
import nuxt_plugin_silentbox_80b78152 from 'nuxt_plugin_silentbox_80b78152' // Source: ..\\plugins\\silentbox.js (mode: 'all')
import nuxt_plugin_vue2googlemaps_51da65b7 from 'nuxt_plugin_vue2googlemaps_51da65b7' // Source: ..\\plugins\\vue2-google-maps.js (mode: 'all')
import nuxt_plugin_vueinlinesvg_56f4a20a from 'nuxt_plugin_vueinlinesvg_56f4a20a' // Source: ..\\plugins\\vue-inline-svg.js (mode: 'all')
import nuxt_plugin_vuecarousel_e4202ecc from 'nuxt_plugin_vuecarousel_e4202ecc' // Source: ..\\plugins\\vue-carousel.js (mode: 'client')
import nuxt_plugin_vuebacktotop_ad80613c from 'nuxt_plugin_vuebacktotop_ad80613c' // Source: ..\\plugins\\vue-backtotop.js (mode: 'client')
import nuxt_plugin_mascara_4339b0a2 from 'nuxt_plugin_mascara_4339b0a2' // Source: ..\\plugins\\mascara.js (mode: 'client')
import nuxt_plugin_gtag_1aa4c8e6 from 'nuxt_plugin_gtag_1aa4c8e6' // Source: ..\\plugins\\gtag.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"SUB100 Loteamentos","titleTemplate":"%s","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"google-site-verification","content":"cmtFEPH16LOxgUMi4dE44ZsSvXXBl48XHW-Kw6g1Xqg"},{"hid":"description","name":"description","content":""},{"http-equiv":"Content-Security-Policy","content":"upgrade-insecure-requests"},{"hid":"fb:app_id","property":"fb:app_id","content":"2744542915835221"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.png"},{"rel":"preconnect","href":"https:\u002F\u002Fconnect.facebook.net"},{"rel":"dns-prefetch","href":"https:\u002F\u002Fconnect.facebook.net"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.googletagmanager.com"},{"rel":"dns-prefetch","href":"https:\u002F\u002Fwww.googletagmanager.com"}],"htmlAttrs":{"lang":"pt-br"},"style":[],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-MZK3BN5')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":"\u003Ciframe src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fns.html?id=GTM-MZK3BN5&\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\" title=\"gtm\"\u003E\u003C\u002Fiframe\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      errPageReady: false,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        nuxt.errPageReady = false
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2c4bb633 === 'function') {
    await nuxt_plugin_plugin_2c4bb633(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_78a44705 === 'function') {
    await nuxt_plugin_bootstrapvue_78a44705(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_ef09b9a8 === 'function') {
    await nuxt_plugin_gtm_ef09b9a8(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtcookiecontrol_a4e632e4 === 'function') {
    await nuxt_plugin_nuxtcookiecontrol_a4e632e4(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_7ee9d245 === 'function') {
    await nuxt_plugin_recaptcha_7ee9d245(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_0f0c91d3 === 'function') {
    await nuxt_plugin_pluginserver_0f0c91d3(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_ad59bf6a === 'function') {
    await nuxt_plugin_pluginclient_ad59bf6a(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_2129baf1 === 'function') {
    await nuxt_plugin_pluginserver_2129baf1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_891f6d2e === 'function') {
    await nuxt_plugin_pluginclient_891f6d2e(app.context, inject)
  }

  if (typeof nuxt_plugin_image_bb48c85e === 'function') {
    await nuxt_plugin_image_bb48c85e(app.context, inject)
  }

  if (typeof nuxt_plugin_vueawesomeswiper_5ce03f58 === 'function') {
    await nuxt_plugin_vueawesomeswiper_5ce03f58(app.context, inject)
  }

  if (typeof nuxt_plugin_silentbox_80b78152 === 'function') {
    await nuxt_plugin_silentbox_80b78152(app.context, inject)
  }

  if (typeof nuxt_plugin_vue2googlemaps_51da65b7 === 'function') {
    await nuxt_plugin_vue2googlemaps_51da65b7(app.context, inject)
  }

  if (typeof nuxt_plugin_vueinlinesvg_56f4a20a === 'function') {
    await nuxt_plugin_vueinlinesvg_56f4a20a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecarousel_e4202ecc === 'function') {
    await nuxt_plugin_vuecarousel_e4202ecc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuebacktotop_ad80613c === 'function') {
    await nuxt_plugin_vuebacktotop_ad80613c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_mascara_4339b0a2 === 'function') {
    await nuxt_plugin_mascara_4339b0a2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gtag_1aa4c8e6 === 'function') {
    await nuxt_plugin_gtag_1aa4c8e6(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
