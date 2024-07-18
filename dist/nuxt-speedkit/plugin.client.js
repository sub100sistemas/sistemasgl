import Vue from 'vue'

import './fonts.css'

import { head } from '#speedkit/plugins/vFont/head'
import vFont from '#speedkit/plugins/vFont'
import FontList from '#speedkit/classes/FontList'
import { isSupportedBrowser } from '#speedkit/utils/browser';
import globals from '#speedkit/utils/globals';
import LoadingSpinner from '#speedkit/components/SpeedkitImage/classes/LoadingSpinner';

Vue.use(vFont)

const speedkit = Object.freeze({
  head: () => console.error('$speedkit.head() is not available in context'),
  crossorigin: "anonymous",
  isBrowserSupported: () => isSupportedBrowser({regex: new RegExp("Edge?\u005C\u002F(12[4-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Firefox\u005C\u002F(1{2}[5-9]|1[2-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Chrom(ium|e)\u005C\u002F(109|1[1-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|(Maci|X1{2}).+ Version\u005C\u002F(17\u005C.([4-9]|\u005Cd{2,})|(1[89]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+)([,.]\u005Cd+|)( \u005C(\u005Cw+\u005C)|)( Mobile\u005C\u002F\u005Cw+|) Safari\u005C\u002F|Chrome.+OPR\u005C\u002F(109|1[1-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+\u005C.\u005Cd+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})[._]\u005Cd+)([._]\u005Cd+|)|Opera Mini|Android:?[ \u002F-](12[6-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})(\u005C.\u005Cd+|)(\u005C.\u005Cd+|)|Mobile Safari.+OPR\u005C\u002F([89]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+\u005C.\u005Cd+|Android.+Firefox\u005C\u002F(12[7-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Android.+Chrom(ium|e)\u005C\u002F(12[6-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Android.+(UC? ?Browser|UCWEB|U3)[ \u002F]?(15\u005C.([5-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+)\u005C.\u005Cd+|SamsungBrowser\u005C\u002F(2[4-9]|[3-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+|Android.+MQ{2}Browser\u005C\u002F(14(\u005C.(9|\u005Cd{2,})|)|(1[5-9]|[2-9]\u005Cd|\u005Cd{3,})(\u005C.\u005Cd+|))(\u005C.\u005Cd+|)|K[Aa][Ii]OS\u005C\u002F(2\u005C.([5-9]|\u005Cd{2,})|([3-9]|\u005Cd{2,})\u005C.\u005Cd+)(\u005C.\u005Cd+|)", "")}),
  loader: () => undefined,
  targetFormats: ["webp","avif","jpg|jpeg|png|gif"]
});

const fontList = new FontList([]);

globals.getImageSize = async (src) => {
  const { width, height } =await new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve({width: img.naturalWidth, height: img.naturalHeight});
    img.src = src;
  });

  return {width, height};
};

export default (context, inject) => {
  inject('getFont', fontList.getFont.bind(fontList));
  inject('speedkit', speedkit);

  // For each render an own critical font style map is generated, which is used initially during page loading.
  const criticalFontStyles = {};
  inject('addCriticalFontStyle', (style) => {
    criticalFontStyles[style.hid] = style;
  });
  if (process.static && process.server) {
    context.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._criticalFontStyles = criticalFontStyles
    })
  }
}

!('$speedkit' in Vue.prototype) && Object.defineProperty(Vue.prototype, '$speedkit', {
  get () {
    return Object.freeze(Object.assign({}, speedkit, {head: head.bind(this)}));
  }
});
