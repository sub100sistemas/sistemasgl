import { run, hasSufficientPerformance, hasSufficientDownloadPerformance, setup } from '#speedkit/utils/performance';
import { isSupportedBrowser } from '#speedkit/utils/browser';

let initialized = false
const layerEl = window.document.getElementById('nuxt-speedkit-layer');

const forceInit = ('__NUXT_SPEEDKIT_FORCE_INIT__' in window && window.__NUXT_SPEEDKIT_FORCE_INIT__);

const triggerRunCallback = sufficient => window.dispatchEvent(new CustomEvent('nuxt-speedkit:run', { detail: { sufficient } }))

async function initApp(force) {
  if (initialized) {
    return;
  }

  document.documentElement.classList.remove('nuxt-speedkit-reduced-view');

  try {
    if (!force) {
      await run();
    }

    initialized = true;

    triggerRunCallback(true);

    return import('../client');
  } catch (error) {
    triggerRunCallback(false);

    if (!!layerEl) {
      // User must interact via the layer.
      updateSpeedkitLayerMessage('nuxt-speedkit-message-weak-hardware');
      return null;
    }
  }

  return null;
};

function observeSpeedkitButton (id, callback) {
  Array.from(document.querySelectorAll(`#${id}`)).forEach(el => {
    el.addEventListener('click', callback, { capture: true, once: true, passive: true })
  })
}

function updateSpeedkitLayerMessage(id) {
  const el = window.document.getElementById(id)
  if (!el) {
    throw new Error(`Can\'t update speedkit-layer, message ${id} missing.`);
  } else {
    el.style.display = 'block'
    layerEl.className += ' nuxt-speedkit-layer-visible';
  }
}

function initReducedView () {
  document.documentElement.classList.add('nuxt-speedkit-reduced-view');

  // activate fonts
  window.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })

  // transform noscript>picture to picture
  Array.from(document.querySelectorAll('noscript.nuxt-speedkit-picture-noscript')).forEach(el => {
    const tmp = document.createElement('div');
    tmp.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(tmp.children[0], el);
    tmp.remove();
  })
}

function setupSpeedkitLayer(supportedBrowser) {
  if(!supportedBrowser) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-unsupported-browser');
  }
  if(!hasSufficientDownloadPerformance()) {
    updateSpeedkitLayerMessage('nuxt-speedkit-message-reduced-bandwidth');
  }
}

const supportedBrowser = isSupportedBrowser({regex: new RegExp("Edge?\u005C\u002F(12[4-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Firefox\u005C\u002F(1{2}[5-9]|1[2-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Chrom(ium|e)\u005C\u002F(109|1[1-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|(Maci|X1{2}).+ Version\u005C\u002F(17\u005C.([4-9]|\u005Cd{2,})|(1[89]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+)([,.]\u005Cd+|)( \u005C(\u005Cw+\u005C)|)( Mobile\u005C\u002F\u005Cw+|) Safari\u005C\u002F|Chrome.+OPR\u005C\u002F(109|1[1-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+\u005C.\u005Cd+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})[._]\u005Cd+)([._]\u005Cd+|)|Opera Mini|Android:?[ \u002F-](12[6-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})(\u005C.\u005Cd+|)(\u005C.\u005Cd+|)|Mobile Safari.+OPR\u005C\u002F([89]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+\u005C.\u005Cd+|Android.+Firefox\u005C\u002F(12[7-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Android.+Chrom(ium|e)\u005C\u002F(12[6-9]|1[3-9]\u005Cd|[2-9]\u005Cd{2}|\u005Cd{4,})\u005C.\u005Cd+(\u005C.\u005Cd+|)|Android.+(UC? ?Browser|UCWEB|U3)[ \u002F]?(15\u005C.([5-9]|\u005Cd{2,})|(1[6-9]|[2-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+)\u005C.\u005Cd+|SamsungBrowser\u005C\u002F(2[4-9]|[3-9]\u005Cd|\u005Cd{3,})\u005C.\u005Cd+|Android.+MQ{2}Browser\u005C\u002F(14(\u005C.(9|\u005Cd{2,})|)|(1[5-9]|[2-9]\u005Cd|\u005Cd{3,})(\u005C.\u005Cd+|))(\u005C.\u005Cd+|)|K[Aa][Ii]OS\u005C\u002F(2\u005C.([5-9]|\u005Cd{2,})|([3-9]|\u005Cd{2,})\u005C.\u005Cd+)(\u005C.\u005Cd+|)", "")});

window.addEventListener('load', function () {
  if (!document.getElementById('nuxt-speedkit-layer')) {
    initApp(forceInit);
  } else {
    observeSpeedkitButton('nuxt-speedkit-button-init-reduced-view', initReducedView);
    observeSpeedkitButton('nuxt-speedkit-button-init-app', () => initApp(true));

    setup({"timing":{"fcp":800,"dcl":1200},"device":{"hardwareConcurrency":{"min":2,"max":48},"deviceMemory":{"min":2}}});

    if(('__NUXT_SPEEDKIT_AUTO_INIT__' in window && window.__NUXT_SPEEDKIT_AUTO_INIT__) || ((true && hasSufficientPerformance()) && supportedBrowser)) {
      initApp();
    } else {
      setupSpeedkitLayer(supportedBrowser)
    }
  }
});
