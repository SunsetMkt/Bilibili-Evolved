!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/custom-navbar-channel"]=t():e["style/custom-navbar-channel"]=t()}(globalThis,(()=>(()=>{"use strict";var e={371:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"navbar-channel",attrs:{"data-channel-id":e.channelId}},[e._v("频道")])};o._withStripped=!0;const a=coreApis.ajax;var r=function(e,t,n,o,a,r,i,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:l}}(Vue.extend({data:()=>({channelId:null}),async created(){const{channel_id:e}=await(0,a.bilibiliApi)((0,a.getJsonWithCredentials)("https://api.bilibili.com/x/web-interface/web/channel/red"));e&&(this.channelId=e)}}),o,[],!1,null,null,null);r.options.__file="registry/lib/plugins/style/custom-navbar-channel/NavbarChannel.vue";const i=r.exports}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.d(o,{plugin:()=>t});const e=coreApis.settings,t={name:"customNavbar.items.channel",displayName:"自定义顶栏 - 频道",description:"为自定义顶栏添加一个频道入口.",async setup(t){let{addData:o}=t;o("customNavbar.items",(t=>{const o="https://www.bilibili.com/v/channel/",a="channel";t.push({name:"channel",displayName:"频道",content:()=>Promise.resolve().then(n.bind(n,371)),clickAction:()=>{const t=dq(".navbar-channel").getAttribute("data-channel-id");window.open(t?`${o}${t}`:o,(()=>{const{options:t}=(0,e.getComponentSettings)("customNavbar");return a in t.openInNewTabOverrides?t.openInNewTabOverrides[a]:t.openInNewTab})()?"_blank":"_self")}})}))},commitHash:"e79632da1bf48a4838880a7436eed0a498432bc6",coreVersion:"2.7.2"}})(),o=o.plugin})()));