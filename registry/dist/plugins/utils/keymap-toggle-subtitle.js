!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-subtitle"]=t():e["utils/keymap-toggle-subtitle"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>i});const o=coreApis.componentApis.video.playerAgent,i={name:"keymap.actions.toggleSubtitle",displayName:"快捷键扩展 - 开关 CC 字幕",description:'在快捷键的动作列表里添加一个 "开关 CC 字幕".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.toggleSubtitle={displayName:"开关 CC 字幕",run:async()=>{const e=o.playerAgent.query.control.buttons.subtitle.sync();return e?.click(),e}}})),t("keymap.presets",(e=>{e.toggleSubtitle="shift c"}))},commitHash:"b9a1a89d88351f394f66ff8f973c3ba6f55464e0",coreVersion:"2.6.1"};return t=t.plugin})()));