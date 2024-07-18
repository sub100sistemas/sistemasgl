import Vue from 'vue';
import CookieControl from "D:\\Trabalho\\Git\\sistemasgl\\node_modules\\nuxt-cookie-control\\components\\CookieControl.vue";
import CookieIframe from "D:\\Trabalho\\Git\\sistemasgl\\node_modules\\nuxt-cookie-control\\components\\CookieIframe.vue";
export default(context, inject) =>{
  let cookies = {
    modal: false,
    consent: false,
    enabled: [],
    enabledList: [],
    optional: []
  }

  Object.assign(cookies, {"colors":{"barTextColor":"#333","modalOverlay":"#fff","barBackground":"none","barButtonColor":"#fff","modalTextColor":"blue","modalBackground":"#fff","modalOverlayOpacity":0.8,"modalButtonColor":"#000","modalUnsavedColor":"#000","barButtonHoverColor":"#ffff","barButtonBackground":"#5d5fef","modalButtonHoverColor":"#000","modalButtonBackground":"#fff","controlButtonIconColor":"#fff","controlButtonBackground":"#000","barButtonHoverBackground":"#4447ed","checkboxActiveBackground":"#fff","checkboxInactiveBackground":"#fff","modalButtonHoverBackground":"#333","checkboxDisabledBackground":"#ddd","controlButtonIconHoverColor":"#fff","controlButtonHoverBackground":"#fff","checkboxActiveCircleBackground":"#000","checkboxInactiveCircleBackground":"#000","checkboxDisabledCircleBackground":"#000"},"css":true,"cssPolyfill":true,"controlButton":false,"acceptNecessary":false,"barPosition":"bottom-right","iframe":"D:\\Trabalho\\Git\\sistemasgl\\node_modules\\nuxt-cookie-control\\components\\CookieIframe.vue","component":"D:\\Trabalho\\Git\\sistemasgl\\node_modules\\nuxt-cookie-control\\components\\CookieControl.vue","globalName":"nuxt"});
  if({"barTextColor":"#333","modalOverlay":"#fff","barBackground":"none","barButtonColor":"#fff","modalTextColor":"blue","modalBackground":"#fff","modalOverlayOpacity":0.8,"modalButtonColor":"#000","modalUnsavedColor":"#000","barButtonHoverColor":"#ffff","barButtonBackground":"#5d5fef","modalButtonHoverColor":"#000","modalButtonBackground":"#fff","controlButtonIconColor":"#fff","controlButtonBackground":"#000","barButtonHoverBackground":"#4447ed","checkboxActiveBackground":"#fff","checkboxInactiveBackground":"#fff","modalButtonHoverBackground":"#333","checkboxDisabledBackground":"#ddd","controlButtonIconHoverColor":"#fff","controlButtonHoverBackground":"#fff","checkboxActiveCircleBackground":"#000","checkboxInactiveCircleBackground":"#000","checkboxDisabledCircleBackground":"#000"} !== false){
    cookies.colors = {
      barTextColor: '#fff',
      modalOverlay: '#000',
      barBackground: '#000',
      barButtonColor: '#000',
      modalTextColor: '#000',
      modalBackground: '#fff',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#fff',
      modalUnsavedColor: '#fff',
      barButtonHoverColor: '#fff',
      barButtonBackground: '#fff',
      modalButtonHoverColor: '#fff',
      controlButtonIconColor: '#000',
      modalButtonBackground: '#000',
      controlButtonBackground: '#fff',
      barButtonHoverBackground: '#333',
      checkboxActiveBackground: '#000',
      controlButtonIconHoverColor: '#fff',
      checkboxInactiveBackground: '#000',
      modalButtonHoverBackground: '#333',
      checkboxDisabledBackground: '#ddd',
      controlButtonHoverBackground: '#000',
      checkboxActiveCircleBackground: '#fff',
      checkboxInactiveCircleBackground: '#fff',
      checkboxDisabledCircleBackground: '#fff',
    };
    Object.assign(cookies.colors, {"barTextColor":"#333","modalOverlay":"#fff","barBackground":"none","barButtonColor":"#fff","modalTextColor":"blue","modalBackground":"#fff","modalOverlayOpacity":0.8,"modalButtonColor":"#000","modalUnsavedColor":"#000","barButtonHoverColor":"#ffff","barButtonBackground":"#5d5fef","modalButtonHoverColor":"#000","modalButtonBackground":"#fff","controlButtonIconColor":"#fff","controlButtonBackground":"#000","barButtonHoverBackground":"#4447ed","checkboxActiveBackground":"#fff","checkboxInactiveBackground":"#fff","modalButtonHoverBackground":"#333","checkboxDisabledBackground":"#ddd","controlButtonIconHoverColor":"#fff","controlButtonHoverBackground":"#fff","checkboxActiveCircleBackground":"#000","checkboxInactiveCircleBackground":"#000","checkboxDisabledCircleBackground":"#000"});
  }

  let methods = {
    get: (cookie) => {
      if(process.browser){
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        let name = `${cookie}=`;
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
      }
      return '';
    },

    set: ({name, value='', expires='', path='/', domain}) => {
      let domainName = domain ? domain : cookies.domain ? `.${cookies.domain}` : domain;
      if(process.browser){
        document.cookie = `${name}=${value};expires=${expires};path=${path}${domainName !== undefined ? `;domain=${domainName}` : ';'}`;
      } else if(process.server){
        context.res.setHeader('Set-Cookie', [`${name}=${value}; Expires=${expires}; Path=${path}${domainName !== undefined ? `; Domain=${domainName}` : ';'}`]);
      }
    },

    isEnabled: (identifier) => {
      return cookies.enabledList.includes(identifier) || cookies.enabledList.includes(cookies.slugify(identifier))
    },

    setBlockedIframes: (content) =>{
      let type = (typeof(content)).toLowerCase();
      let c = type !== 'string' ? JSON.stringify(content) : content;
      c = c.replace(/&lt;/g, '<');
      c = c.replace(/&gt;/g, '>');
      if(context.app.$cookies.enabled.filter(c =>{return c.name === 'functional'}).length === 0){
        c = c.replace(/<iframe/g, `<div class='cookieControl__BlockedIframe '`);
        c = c.replace(/<\/iframe/g, `<p>${context.app.$cookies.text.blockedIframe !== undefined ? context.app.$cookies.text.blockedIframe : ''} <a href='#' onclick='event.preventDefault(); $${cookies.globalName}.$cookies.modal = true'>${context.app.$cookies.text.here !== undefined ? context.app.$cookies.text.here: ''}</a></p></div`);
      }
      return type !== 'string' ? JSON.parse(c) : c
    },

    slugify: (str) =>{
      str = str.replace(/^\s+|\s+$/g, '');
      str = str.toLowerCase();
      let from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
      let to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
      for (let i = 0, l = from.length; i < l ; i++){
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

      return str;
    },

    remove: (name) =>{
      if(process.browser){
        let domain = window.location.hostname;
        cookies.set({name, expires: 'Thu, 01 Jan 1970 00:00:00 GMT', domain });
        for (let j = domain.split('.'); j.length;) {
          let o = j.join('.');
          cookies.set({name, expires: 'Thu, 01 Jan 1970 00:00:00 GMT', domain: `.${o}` });
          j.shift();
        }
      }
    },

    acceptNecessary: () => {
      let expires = new Date();
      expires.setFullYear(expires.getFullYear()+1);
      expires = expires.toUTCString();
      const value = cookies.necessary.map(c => c.identifier || cookies.slugify(getName(c.name)))
      cookies.set({name: 'cookie_control_enabled_cookies', value, expires});
      cookies.set({name: 'cookie_control_consent', value: true, expires});
      cookies.consent = true;
      if(process.client){
        setHead();
        callAcceptedFunctions();
      }
    },

    getName: (name) => {
      return typeof(name) === 'string' ? name : name[Object.keys(name)[0]]
    },

    setConsent: (isInit=false) =>{
      cookies.consent = cookies.get('cookie_control_consent') === 'true' ? true : false;
      cookies.enabled = [];
      cookies.enabledList = [];
      if(cookies.consent === true){
        let enabledFromCookie = cookies.get('cookie_control_enabled_cookies');
        cookies.enabled.push(...cookies.optional.filter(c => {
          let cookieName = typeof(c.name) === 'string' ? c.name : c.name[Object.keys(c.name)[0]]
          return enabledFromCookie.includes(c.identifier || cookies.slugify(cookieName))
        }));
        cookies.enabledList = cookies.enabled.length > 0 ? cookies.enabled.map(c => {
          let cookieName = typeof(c.name) === 'string' ? c.name : c.name[Object.keys(c.name)[0]]
          return c.identifier || cookies.slugify(cookieName)
        }) : [];
      }

      if(cookies.necessary) cookies.enabled.push(...cookies.necessary.filter(c => {return c.src || c.accepted}))

      if(process.client && !isInit){
        setHead();
        clearCookies();
        callAcceptedFunctions();
      }
    }
  }

  Object.assign(cookies, methods);

  const clearCookies = () =>{
    let disabled = cookies.optional.filter(c => {
      let cookieName = typeof(c.name) === 'string' ? c.name : c.name[Object.keys(c.name)[0]]
      return !cookies.enabledList.includes(c.identifier || cookies.slugify(cookieName))
    });
    if(disabled.length > 0){
      disabled.forEach(c => {
        if(c.declined) c.declined();
        if(c.cookies && c.cookies.length > 0){
          c.cookies.forEach(i => {
            cookies.remove(i);
          })
        }
        // if(c.src){
        //   for(let s of [...document.head.querySelectorAll(`script[src="${c.src}"]`)]){
        //     s.parentNode.removeChild(s)
        //   }
        // }
      })
    }
  }

  const setHead = () =>{
    if(cookies.enabled.length > 0){
      let head = document.getElementsByTagName('head')[0];
      cookies.enabled.forEach(c =>{
        if(c.src){
          let script = document.createElement('script');
          script.src = c.src;
          head.appendChild(script);
          script.addEventListener('load', () =>{
            if(c.accepted) c.accepted();
          })
        }
      })
    }
  }

  const callAcceptedFunctions = () =>{
    if(cookies.enabled.length > 0){
      cookies.enabled.forEach(c =>{
        if(c.accepted) c.accepted();
      })
    }
  }

  const capitalize = (s) =>{
    if(typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  cookies.setConsent(true)

  if(process.client){
    let globalName = capitalize(cookies.globalName) || 'Nuxt';
    window[`on${globalName}Ready`](() => {
      cookies.setConsent()
    })
  }

  inject('cookies', cookies);
  if(cookies.blockIframe) Vue.component('CookieIframe', CookieIframe);
  Vue.component('CookieControl', CookieControl);
}