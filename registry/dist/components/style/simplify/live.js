!function(i,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/simplify/live"]=t():i["style/simplify/live"]=t()}(globalThis,(()=>(()=>{var i,t,e={913:(i,t,e)=>{"use strict";e.r(t),e.d(t,{setupSkinSimplify:()=>r});const n=coreApis.settings,o=coreApis.spinQuery,r=async()=>{(0,n.addComponentListener)("simplifyLiveroom.switch-skin",(async i=>{const t=await(0,o.select)("#skin-css");t&&(t.media=i?"none":"all")}),!0)}},946:(i,t,e)=>{var n=e(355)((function(i){return i[1]}));n.push([i.id,".simplifyLiveroom-switch-vip .vip-icon, .simplifyLiveroom-switch-fansMedal .fans-medal-item-ctnr, .simplifyLiveroom-switch-title .title-label, .simplifyLiveroom-switch-userLevel .user-level-icon, .simplifyLiveroom-switch-guard .chat-history-panel .guard-icon, .simplifyLiveroom-switch-systemMessage .system-msg, .simplifyLiveroom-switch-systemMessage .announcement-wrapper, .simplifyLiveroom-switch-welcomeMessage .welcome-guard, .simplifyLiveroom-switch-welcomeMessage .welcome-msg, .simplifyLiveroom-switch-popup .chat-popups-section, .simplifyLiveroom-switch-popup #chat-draw-area-vm, .simplifyLiveroom-switch-giftMessage .chat-item.gift-item, .simplifyLiveroom-switch-giftMessage .chat-history-panel .penury-gift-msg, .simplifyLiveroom-switch-guardPurchase .chat-item.guard-buy, .simplifyLiveroom-switch-eventsBanner .z-section-blocks .left-container .flip-view, .simplifyLiveroom-switch-eventsBanner .activity-pushing-out, .simplifyLiveroom-switch-userEffect .live-room-app .aside-area .activity-welcome-section, .simplifyLiveroom-switch-kanban .live-haruna-ctnr, .simplifyLiveroom-switch-enterPrompt .chat-item.important-prompt-item, .simplifyLiveroom-switch-enterPrompt .chat-history-panel .brush-prompt, .simplifyLiveroom-switch-enterPrompt .chat-item.convention-msg, .simplifyLiveroom-switch-pk .chaos-pk, .simplifyLiveroom-switch-topRank .chat-item.top3-notice, .simplifyLiveroom-switch-topRank .chat-item .rank-icon {\n  display: none !important;\n}\n\n.simplifyLiveroom-switch-headerPanel .control-panel-ctnr .dialog-ctnr {\n  z-index: 800 !important;\n}\n.simplifyLiveroom-switch-headerPanel .player-ctnr .room-info-ctnr {\n  display: inline-flex !important;\n  flex: 1 0 auto;\n  align-items: center !important;\n  margin-left: 12px !important;\n}\n.simplifyLiveroom-switch-headerPanel .head-info-section {\n  height: 52px !important;\n  box-sizing: content-box !important;\n}\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr {\n  display: flex !important;\n  padding: 10px 24px 10px 12px !important;\n  height: auto !important;\n}\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr .blive-avatar-icons,\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr .face-pendants {\n  display: none !important;\n}\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr .blive-avatar-pendant {\n  width: 48px !important;\n  height: 48px !important;\n}\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr .blive-avatar-face,\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr .blive-avatar,\n.simplifyLiveroom-switch-headerPanel .header-info-ctnr .avatar {\n  height: 32px !important;\n  width: 32px !important;\n}\n.simplifyLiveroom-switch-headerPanel .room-cover {\n  width: 32px !important;\n  height: 32px !important;\n  border-radius: 50% !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr {\n  display: flex !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row {\n  display: flex !important;\n  align-items: center !important;\n  flex: 1 0 auto !important;\n  flex-direction: row-reverse !important;\n  position: static !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .left-ctnr,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .normal-mode,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .left-ctnr,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .normal-mode {\n  position: absolute !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .live-area,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .area-text,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .live-area,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .area-text {\n  display: inline-flex !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .right-ctnr,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .upper-right-ctnr,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .right-ctnr,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .upper-right-ctnr {\n  position: static !important;\n  transform: none !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .live-title,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .room-title,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .live-title,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .room-title {\n  display: flex !important;\n  align-items: center !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .live-title .text,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .room-title .text,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .live-title .text,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .room-title .text {\n  line-height: normal !important;\n}\n@media screen and (max-width: 1750px) {\n  .simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .live-title .title-length-limit,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .room-title .title-length-limit,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .live-title .title-length-limit,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .room-title .title-length-limit {\n    max-width: 250px !important;\n  }\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .upper-row .info-section,\n.simplifyLiveroom-switch-headerPanel .room-info-upper-row .info-section {\n  display: none !important;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .lower-row,\n.simplifyLiveroom-switch-headerPanel .room-info-down-row {\n  margin: 0 !important;\n  order: -1;\n}\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .lower-row .right-ctnr,\n.simplifyLiveroom-switch-headerPanel .rows-ctnr .lower-row .left-ctnr > :nth-child(n+3),\n.simplifyLiveroom-switch-headerPanel .room-info-down-row .right-ctnr,\n.simplifyLiveroom-switch-headerPanel .room-info-down-row .left-ctnr > :nth-child(n+3) {\n  display: none !important;\n}\n.simplifyLiveroom-switch-headerPanel .room-owner-username {\n  max-width: 150px !important;\n}\n.simplifyLiveroom-switch-headerPanel .live-status,\n.simplifyLiveroom-switch-headerPanel .live-status-label {\n  display: none !important;\n}\n\n.simplifyLiveroom-switch-giftMessage:not(.simplifyLiveroom-switch-enterPrompt) .chat-history-list.with-penury-gift:not(.with-brush-prompt) {\n  height: 100% !important;\n}\n.simplifyLiveroom-switch-giftMessage:not(.simplifyLiveroom-switch-enterPrompt) .chat-history-list.with-penury-gift.with-brush-prompt {\n  height: calc(100% - 32px) !important;\n}\n\n.simplifyLiveroom-switch-enterPrompt:not(.simplifyLiveroom-switch-giftMessage) .chat-history-list.with-brush-prompt:not(.with-penury-gift) {\n  height: 100% !important;\n}\n.simplifyLiveroom-switch-enterPrompt:not(.simplifyLiveroom-switch-giftMessage) .chat-history-list.with-brush-prompt.with-penury-gift {\n  height: calc(100% - 32px) !important;\n}\n\n.simplifyLiveroom-switch-enterPrompt.simplifyLiveroom-switch-giftMessage .chat-history-list {\n  height: 100% !important;\n}\n\n.simplifyLiveroom-switch-rankList .live-room-app .rank-list-section {\n  display: none !important;\n}\n.simplifyLiveroom-switch-rankList .live-room-app .chat-history-panel {\n  height: calc(100% - 145px) !important;\n}\n.simplifyLiveroom-switch-rankList .live-room-app .chat-history-panel .chat-history-list::-webkit-scrollbar-track {\n  background: transparent !important;\n}\n.simplifyLiveroom-switch-rankList .live-room-app .chat-history-panel,\n.simplifyLiveroom-switch-rankList .live-room-app #pay-note-panel-vm .pay-note-panel,\n.simplifyLiveroom-switch-rankList .live-room-app #pay-note-panel-vm .pay-note-panel .detail-info .mask {\n  border-radius: 11px 11px 0 0 !important;\n}\n.simplifyLiveroom-switch-rankList.player-full-win .chat-history-panel,\n.simplifyLiveroom-switch-rankList.player-full-win #pay-note-panel-vm .pay-note-panel,\n.simplifyLiveroom-switch-rankList.player-full-win #pay-note-panel-vm .pay-note-panel .detail-info .mask {\n  border-radius: 0 !important;\n}\n\n.simplifyLiveroom-switch-giftPanel .gift-panel,\n.simplifyLiveroom-switch-giftPanel .gift-panel-switch,\n.simplifyLiveroom-switch-giftPanel .gift-section.guard-ent,\n.simplifyLiveroom-switch-giftPanel .seeds-wrap > .dp-i-block > .item:not(.seeds),\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .wish-icon,\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .wish-tip {\n  display: none !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-section,\n.simplifyLiveroom-switch-giftPanel .gift-control-panel {\n  height: 48px !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-left-part {\n  display: flex !important;\n  align-items: center !important;\n  gap: 6px !important;\n  width: auto !important;\n  height: auto !important;\n  padding: 10px 0 0 16px !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-left-part .entry-icon {\n  margin: 0 !important;\n  width: 24px !important;\n  height: 24px !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-left-part .wait-num {\n  display: none !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-left-part .time-span {\n  margin: 1px 0 0 0 !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry,\n.simplifyLiveroom-switch-giftPanel .treasure-box {\n  display: flex !important;\n  align-items: center !important;\n  padding: 10px 0 0 16px !important;\n  max-height: 36px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .draw-box .anchor-lot-icon,\n.simplifyLiveroom-switch-giftPanel .draw-box .box-icon,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .anchor-lot-icon,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .box-icon,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .treasure-box .anchor-lot-icon,\n.simplifyLiveroom-switch-giftPanel .treasure-box .box-icon {\n  margin: 0 !important;\n  width: 24px !important;\n  height: 24px !important;\n  background-position: 0 -2.5px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-pic.open,\n.simplifyLiveroom-switch-giftPanel .draw-box .anchor-lot-icon.open,\n.simplifyLiveroom-switch-giftPanel .draw-box .box-icon.open,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-pic.open,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .anchor-lot-icon.open,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .box-icon.open,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-pic.open,\n.simplifyLiveroom-switch-giftPanel .treasure-box .anchor-lot-icon.open,\n.simplifyLiveroom-switch-giftPanel .treasure-box .box-icon.open {\n  background-position: 0 -1px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-pic,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-pic {\n  transform: scale(1.1);\n}\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div_tip br,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div_tip br,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div_tip br {\n  display: none !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div img,\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div canvas,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div img,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div canvas,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div img,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div canvas {\n  max-height: 24px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .draw-box-text,\n.simplifyLiveroom-switch-giftPanel .draw-box .anchor-lot-text,\n.simplifyLiveroom-switch-giftPanel .draw-box .count-down,\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div_tip,\n.simplifyLiveroom-switch-giftPanel .draw-box #BLRHH_treasure_div_timer,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .draw-box-text,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .anchor-lot-text,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .count-down,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div_tip,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry #BLRHH_treasure_div_timer,\n.simplifyLiveroom-switch-giftPanel .treasure-box .draw-box-text,\n.simplifyLiveroom-switch-giftPanel .treasure-box .anchor-lot-text,\n.simplifyLiveroom-switch-giftPanel .treasure-box .count-down,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div_tip,\n.simplifyLiveroom-switch-giftPanel .treasure-box #BLRHH_treasure_div_timer {\n  margin-left: 12px !important;\n  padding: 4px 8px !important;\n  max-width: unset !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box .awarding-panel,\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry .awarding-panel,\n.simplifyLiveroom-switch-giftPanel .treasure-box .awarding-panel {\n  bottom: 42px !important;\n}\n.simplifyLiveroom-switch-giftPanel .draw-box {\n  padding-top: 11px !important;\n}\n.simplifyLiveroom-switch-giftPanel .anchor-lottery-entry {\n  padding-top: 12px !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .right-part {\n  height: 48px !important;\n  display: flex !important;\n  justify-content: flex-end !important;\n  min-width: unset !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .right-part > .dp-table-cell {\n  display: flex !important;\n  align-items: center !important;\n}\n.simplifyLiveroom-switch-giftPanel .gift-control-panel .right-part > .dp-table-cell .supporting-info {\n  transform: translateY(-2px) !important;\n}\n\n.simplifyLiveroom-switch-guard .guard-danmaku::before {\n  border-image: none !important;\n  background-color: transparent !important;\n}\n.simplifyLiveroom-switch-guard .guard-danmaku::before .guard-danmaku {\n  margin: 0 !important;\n  padding: 4px 5px !important;\n}\n.simplifyLiveroom-switch-guard .guard-danmaku::before .guard-danmaku::after {\n  background-image: none !important;\n}\n.simplifyLiveroom-switch-guard .chat-history-panel [class*=guard-level-] {\n  padding: 4px 5px !important;\n  margin: 0 !important;\n}\n.simplifyLiveroom-switch-guard .chat-history-panel [class*=guard-level-]::after {\n  display: none !important;\n}\n.simplifyLiveroom-switch-guard .chat-history-panel .chat-colorful-bubble {\n  margin: 0 !important;\n  display: block !important;\n  border-radius: 0 !important;\n  background-color: transparent !important;\n}\n.simplifyLiveroom-switch-guard .fans-medal-item.medal-guard {\n  margin-left: 0 !important;\n}\n\n.simplifyLiveroom-switch-emoticons .control-panel-icon-row .emoticons-panel {\n  display: none !important;\n}\n.simplifyLiveroom-switch-emoticons .chat-history-list .chat-item .emoticon img {\n  display: none !important;\n}\n.simplifyLiveroom-switch-emoticons .chat-history-list .chat-item .emoticon span {\n  display: inline-flex !important;\n}\n.simplifyLiveroom-switch-emoticons .danmaku-item-container .bilibili-danmaku img {\n  display: none !important;\n}",""]),i.exports=n},355:i=>{"use strict";
// eslint-disable-next-line func-names
i.exports=function(i){var t=[];return t.toString=function(){return this.map((function(t){var e=i(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(i,e,n){"string"==typeof i&&(
// eslint-disable-next-line no-param-reassign
i=[[null,i,""]]);var o={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<i.length;s++){var l=[].concat(i[s]);n&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},330:(i,t,e)=>{var n=e(946);n&&n.__esModule&&(n=n.default),i.exports="string"==typeof n?n:n.toString()}},n={};function o(i){var t=n[i];if(void 0!==t)return t.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,o),r.exports}t=Object.getPrototypeOf?i=>Object.getPrototypeOf(i):i=>i.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var a={};i=i||[null,t({}),t([]),t(t)];for(var s=2&n&&e;"object"==typeof s&&!~i.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((i=>a[i]=()=>e[i]));return a.default=()=>e,o.d(r,a),r},o.d=(i,t)=>{for(var e in t)o.o(t,e)&&!o.o(i,e)&&Object.defineProperty(i,e,{enumerable:!0,get:t[e]})},o.o=(i,t)=>Object.prototype.hasOwnProperty.call(i,t),o.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};return(()=>{"use strict";o.d(r,{component:()=>n});const i=coreApis.componentApis.switchOptions,t=coreApis.componentApis.styledComponent,e=coreApis.utils.urls,n=(0,i.newSwitchComponentWrapper)({name:"simplifyOptions",dimAt:"checked",switchProps:{checkedIcon:"mdi-eye-off-outline",notCheckedIcon:"mdi-eye-outline"},switches:{vip:{defaultValue:!0,displayName:"老爷图标"},enterPrompt:{defaultValue:!0,displayName:"入场通知"},fansMedal:{defaultValue:!0,displayName:"粉丝勋章"},title:{defaultValue:!0,displayName:"活动头衔"},guard:{defaultValue:!0,displayName:"舰长图标"},systemMessage:{defaultValue:!0,displayName:"全区广播"},welcomeMessage:{defaultValue:!0,displayName:"欢迎信息"},giftMessage:{defaultValue:!0,displayName:"礼物弹幕"},emoticons:{defaultValue:!0,displayName:"表情特效"},guardPurchase:{defaultValue:!0,displayName:"上舰提示"},giftPanel:{defaultValue:!0,displayName:"付费礼物"},headerPanel:{defaultValue:!1,displayName:"标题栏活动"},userEffect:{defaultValue:!0,displayName:"入场特效"},kanban:{defaultValue:!0,displayName:"看板娘"},eventsBanner:{defaultValue:!1,displayName:"活动横幅"},rankList:{defaultValue:!1,displayName:"排行榜"},popup:{defaultValue:!1,displayName:"抽奖提示"},pk:{defaultValue:!1,displayName:"PK浮窗"},topRank:{defaultValue:!1,displayName:"高能榜提示"},skin:{defaultValue:!1,displayName:"房间皮肤"}}})({name:"simplifyLiveroom",displayName:"简化直播间",entry:(0,t.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,330,23))),(async()=>{const{setupSkinSimplify:i}=await Promise.resolve().then(o.bind(o,913));i()})),description:{"zh-CN":"隐藏直播间中各种不需要的内容."},tags:[componentsTags.live,componentsTags.style],urlInclude:e.liveUrls,commitHash:"b9a1a89d88351f394f66ff8f973c3ba6f55464e0",coreVersion:"2.6.1"})})(),r=r.component})()));