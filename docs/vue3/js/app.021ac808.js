(function(e){function t(t){for(var r,l,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vh-player-demo/vue3/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3974:function(e,t,n){"use strict";n("f8b7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("0eb4");n("4eb4");function a(e,t,n,o,a,l){var i=Object(r["u"])("Player"),c=Object(r["u"])("w-app");return Object(r["q"])(),Object(r["f"])(c,null,{default:Object(r["C"])((function(){return[Object(r["l"])(i)]})),_:1})}var l=Object(r["i"])("div",{id:"vh-player"},null,-1),i={id:"form",class:"mb4"},c={class:"mb2"},u={class:"mb2"},s={class:"mb2"},d=Object(r["k"])(),p=Object(r["i"])("span",{class:"ml2"},"(控制栏)",-1),b={class:"mb2"},m=Object(r["k"])("自动播放"),y={class:"mb2"},f=Object(r["k"])("静音"),v=Object(r["k"])("init"),h=Object(r["i"])("p",null,"自定义操作",-1),P={id:"custom-controls"},O=Object(r["k"])("PIP");function j(e,t,n,o,a,j){var g=Object(r["u"])("w-input"),w=Object(r["u"])("w-radios"),I=Object(r["u"])("w-checkbox"),V=Object(r["u"])("w-button");return Object(r["q"])(),Object(r["h"])(r["a"],null,[l,Object(r["i"])("div",i,[Object(r["l"])(g,{class:"mb2",label:"appId",shadow:"",outline:"",modelValue:e.playerParams.appId,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.playerParams.appId=t})},null,8,["modelValue"]),Object(r["l"])(g,{class:"mb2",label:"roomId",shadow:"",outline:"",modelValue:e.playerParams.roomId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.playerParams.roomId=t})},null,8,["modelValue"]),Object(r["l"])(g,{class:"mb2",label:"recordId",shadow:"",outline:"",modelValue:e.playerParams.recordId,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.playerParams.recordId=t})},null,8,["modelValue"]),Object(r["i"])("div",c,[Object(r["l"])(w,{items:e.radiosType,inline:"",modelValue:e.playerParams.type,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.playerParams.type=t})},null,8,["items","modelValue"])]),Object(r["i"])("div",u,[Object(r["l"])(w,{items:e.radiosPlayerType,inline:"",modelValue:e.playerParams.playerType,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.playerParams.playerType=t})},null,8,["items","modelValue"])]),Object(r["i"])("div",s,[Object(r["l"])(w,{items:e.radiosControls,inline:"",modelValue:e.playerParams.controls,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.playerParams.controls=t})},null,8,["items","modelValue"]),d,p]),Object(r["i"])("div",b,[Object(r["l"])(I,{modelValue:e.playerParams.autoplay,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.playerParams.autoplay=t})},{default:Object(r["C"])((function(){return[m]})),_:1},8,["modelValue"])]),Object(r["i"])("div",y,[Object(r["l"])(I,{modelValue:e.playerParams.muted,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.playerParams.muted=t})},{default:Object(r["C"])((function(){return[f]})),_:1},8,["modelValue"])]),Object(r["l"])(V,{lg:"","bg-color":"info",onClick:e.createPlayer},{default:Object(r["C"])((function(){return[v]})),_:1},8,["onClick"])]),h,Object(r["i"])("div",P,[Object(r["l"])(V,{lg:"","bg-color":"info",onClick:e.togglePIP},{default:Object(r["C"])((function(){return[O]})),_:1},8,["onClick"])])],64)}var g=n("1da1");n("96cf"),n("d3b7"),n("159b"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");function w(){var e={};return new window.URL(location.href).searchParams.forEach((function(t,n){e[n]=t})),e}var I=n("d4ec"),V=n("bee2"),k=n("ade3"),T=function(){function e(t){if(Object(I["a"])(this,e),document.pictureInPictureEnabled){this.player=t,this.video=t.video;var n=this.video.getBoundingClientRect(),r=document.documentElement.scrollTop||document.body.scrollTop;this.video2Top=n.bottom+r,this.scrollHandler=this._handleScrollPip.bind(this),this.init()}else console.warn("PIP not enabled")}return Object(V["a"])(e,[{key:"init",value:function(){var e=this;window.addEventListener("scroll",this.scrollHandler),this.video.addEventListener("enterpictureinpicture",(function(){e.isPip=!0})),this.video.addEventListener("leavepictureinpicture",(function(){e.isPip=!1})),this.player.togglePIP=this._togglePip.bind(this)}},{key:"_handleScrollPip",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;(e>=this.video2Top&&!this.isPip||e<this.video2Top&&this.isPip&&this.autoHide)&&this._togglePip()}},{key:"_togglePip",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.video===document.pictureInPictureElement){e.next=6;break}return e.next=4,this.video.requestPictureInPicture();case 4:e.next=8;break;case 6:return e.next=8,document.exitPictureInPicture();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.warn(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"destroy",value:function(){window.removeEventListener("scroll",this.scrollHandler)}}]),e}();Object(k["a"])(T,"pluginName","pluginPIP");var x=function(){function e(t){Object(I["a"])(this,e),this.player=t,this.register()}return Object(V["a"])(e,[{key:"register",value:function(){var e=this;this.player.on(window.VhPlayer.Events.SCHEDULER_COMPLETE,(function(e){console.log("sdk调度完成 =>",e)})),this.player.on(window.VhPlayer.Events.Ended,(function(t){console.log("播放结束 =>",t),e.player.exitFullscreen()}))}},{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();function E(){var e=w();console.log("ana querystring",e);var t=Object(r["r"])({appId:e.appId,type:e.type||"live",roomId:e.roomId,playerType:e.playerType||"auto",recordId:e.recordId,autoplay:!0,controls:"custom",muted:!1,poster:""});function n(){window.vhPlayer&&window.vhPlayer.destroy();var e={videoNode:"vh-player",type:t.type,autoplay:t.autoplay,controls:t.controls,muted:t.muted,poster:t.poster,debug:!0,appId:t.appId,accountId:405,token:"vhall",liveOption:{roomId:t.roomId,type:t.playerType},vodOption:{recordId:t.recordId},scheduleOption:{enable:!0,debugCDN:t.cdn||"tx",debugPlayer:t.playerType}};console.log("options:",e),window.VhPlayer.use(x),window.VhPlayer.use(T),window.VhPlayer.createInstance(e,(function(e){console.log("createInstance success",e),window.vhPlayer=e}),(function(e){console.warn("createInstance fail",e)}))}function o(){return a.apply(this,arguments)}function a(){return a=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",window.vhPlayer.togglePIP());case 1:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}return{playerParams:t,createPlayer:n,togglePIP:o}}Object(k["a"])(x,"pluginName","pluginEvents");var _=Object(r["m"])({name:"Player",setup:function(e){var t=E(e),n=t.playerParams,r=t.createPlayer,o=t.togglePIP;return{playerParams:n,createPlayer:r,togglePIP:o,radiosType:[{label:"live"},{label:"vod"}],radiosPlayerType:[{label:"auto"},{label:"flv"},{label:"hls"}],radiosControls:[{label:"自定义",value:"custom"},{label:"原生",value:"native"},{label:"不显示",value:"none"}]}}}),C=(n("3974"),n("6b0d")),U=n.n(C);const S=U()(_,[["render",j]]);var L=S,R={name:"App",components:{Player:L}};const H=U()(R,[["render",a]]);var M=H,q=Object(r["e"])(M);new o["a"](q,{}),q.mount("#app")},f8b7:function(e,t,n){}});
//# sourceMappingURL=app.021ac808.js.map