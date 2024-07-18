import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$6300 from 'D:/Trabalho/Git/sistemasgl/node_modules/@nuxt/image/dist/runtime/providers/static.js'

const imageOptions = {
  "screens": {
    "xs": 576,
    "sm": 768,
    "md": 996,
    "lg": 1200,
    "xl": 1367,
    "xxl": 1600,
    "2xl": 1536,
    "default": 320,
    "xxs": 480,
    "4k": 1921
  },
  "presets": {},
  "provider": "static",
  "domains": [
    "img.youtube.com",
    "i.vimeocdn.com"
  ],
  "alias": {
    "/youtube": "https://img.youtube.com",
    "/vimeo": "https://i.vimeocdn.com"
  }
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$6300, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
