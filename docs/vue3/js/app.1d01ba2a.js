(function(e){function r(r){for(var t,l,u=r[0],c=r[1],p=r[2],i=0,s=[];i<u.length;i++)l=u[i],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&s.push(n[l][0]),n[l]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);d&&d(r);while(s.length)s.shift()();return o.push.apply(o,p||[]),a()}function a(){for(var e,r=0;r<o.length;r++){for(var a=o[r],t=!0,u=1;u<a.length;u++){var c=a[u];0!==n[c]&&(t=!1)}t&&(o.splice(r--,1),e=l(l.s=a[0]))}return e}var t={},n={app:0},o=[];function l(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=t,l.d=function(e,r,a){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)l.d(a,t,function(r){return e[r]}.bind(null,t));return a},l.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/vh-player-demo/vue3/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var p=0;p<u.length;p++)r(u[p]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,r,a){e.exports=a("56d7")},"56d7":function(e,r,a){"use strict";a.r(r);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("7a23"),n=a("0eb4");a("4eb4");function o(e,r,a,n,o,l){var u=Object(t["u"])("Player"),c=Object(t["u"])("w-app");return Object(t["q"])(),Object(t["f"])(c,null,{default:Object(t["C"])((function(){return[Object(t["l"])(u)]})),_:1})}var l=Object(t["i"])("div",{id:"vh-player"},null,-1),u={id:"form"},c={class:"mb2"},p={class:"mb2"},d=Object(t["k"])("init");function i(e,r,a,n,o,i){var s=Object(t["u"])("w-input"),b=Object(t["u"])("w-radios"),y=Object(t["u"])("w-button");return Object(t["q"])(),Object(t["h"])(t["a"],null,[l,Object(t["i"])("div",u,[Object(t["l"])(s,{class:"mb2",label:"appId",shadow:"",outline:"",modelValue:e.playerParams.appId,"onUpdate:modelValue":r[0]||(r[0]=function(r){return e.playerParams.appId=r})},null,8,["modelValue"]),Object(t["l"])(s,{class:"mb2",label:"roomId",shadow:"",outline:"",modelValue:e.playerParams.roomId,"onUpdate:modelValue":r[1]||(r[1]=function(r){return e.playerParams.roomId=r})},null,8,["modelValue"]),Object(t["l"])(s,{class:"mb2",label:"recordId",shadow:"",outline:"",modelValue:e.playerParams.recordId,"onUpdate:modelValue":r[2]||(r[2]=function(r){return e.playerParams.recordId=r})},null,8,["modelValue"]),Object(t["i"])("div",c,[Object(t["l"])(b,{items:e.radiosType,inline:"",modelValue:e.playerParams.type,"onUpdate:modelValue":r[3]||(r[3]=function(r){return e.playerParams.type=r})},null,8,["items","modelValue"])]),Object(t["i"])("div",p,[Object(t["l"])(b,{items:e.radiosPlayerType,inline:"",modelValue:e.playerParams.playerType,"onUpdate:modelValue":r[4]||(r[4]=function(r){return e.playerParams.playerType=r})},null,8,["items","modelValue"])]),Object(t["l"])(y,{lg:"","bg-color":"info",onClick:e.createPlayer},{default:Object(t["C"])((function(){return[d]})),_:1},8,["onClick"])])],64)}a("d3b7"),a("159b"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861");function s(){var e={};return new window.URL(location.href).searchParams.forEach((function(r,a){e[a]=r})),e}function b(){var e=s();console.log("ana querystring",e);var r=Object(t["r"])({appId:e.appId,type:e.type||"live",roomId:e.roomId,playerType:e.playerType||"auto",recordId:e.recordId,autoplay:!0,controls:!1,muted:!1,poster:""});function a(){var e={videoNode:"vh-player",type:r.type,autoplay:r.autoplay,controls:r.controls,muted:r.muted,poster:r.poster,debug:!0,appId:r.appId,accountId:405,token:"vhall",liveOption:{roomId:r.roomId,type:r.playerType},vodOption:{recordId:r.recordId},scheduleOption:{enable:!0,debugCDN:r.cdn||"tx",isNativePlayer:"hlsnative"===r.playerType}};console.log("options:",e),window.VhPlayer.createInstance(e,(function(e){console.log("createInstance success",e)}),(function(e){console.warn("createInstance fail",e)}))}return{playerParams:r,createPlayer:a}}var y=Object(t["m"])({name:"Player",setup:function(e){var r=b(e),a=r.playerParams,t=r.createPlayer;return{playerParams:a,createPlayer:t,radiosType:[{label:"live"},{label:"vod"}],radiosPlayerType:[{label:"auto"},{label:"flv"},{label:"hls"}]}}}),f=(a("90f2"),a("6b0d")),m=a.n(f);const v=m()(y,[["render",i]]);var O=v,j={name:"App",components:{Player:O}};const P=m()(j,[["render",o]]);var h=P,I=Object(t["e"])(h);new n["a"](I,{}),I.mount("#app")},"90f2":function(e,r,a){"use strict";a("ba17")},ba17:function(e,r,a){}});
//# sourceMappingURL=app.1d01ba2a.js.map