(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Appbar"),a("v-container",[a("v-row",{staticStyle:{"margin-bottom":"8px"}},[a("v-col",{attrs:{cols:"9",sm:"12",height:"350"}},[a("Carousel",{staticStyle:{height:"100% !important"}})],1),a("v-col",{attrs:{cols:"3",sm:"12",height:"350"}},[a("SideBanner",{staticStyle:{height:"100% !important"}})],1)],1),a("div",{staticStyle:{"margin-bottom":"24px"}},[a("p",{staticClass:"text-h5"},[t._v("精选作品")]),a("ProjectCard"),a("ProjectCard"),a("ProjectCard"),a("ProjectCard"),a("ProjectCard"),a("ProjectCard")],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:""}},[a("v-btn",{staticClass:"ml-2",attrs:{icon:"",href:"/"}},[t.dark_theme?t._e():a("img",{attrs:{src:"/GitScratch-icon-black.svg",width:"36"}}),t.dark_theme?a("img",{attrs:{src:"/GitScratch-icon-white.svg",width:"36"}}):t._e()]),a("v-app-bar-title",{staticClass:"pl-1"},[t._v("GitScratch")]),a("v-text-field",{staticClass:"mx-2 mx-md-4",staticStyle:{"max-width":"250px"},attrs:{"prepend-inner-icon":"mdi-magnify",label:"搜索",autocomplete:"off",dense:"","hide-details":"",outlined:"","single-line":""}}),a("v-btn",{attrs:{text:"",href:"/explore"}},[t._v("发现")]),a("v-btn",{attrs:{text:"",href:"/about"}},[t._v("关于")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",href:"/scratch-gui"}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-plus")])],1)]}}])},[a("span",[t._v("创建")])]),a("v-btn",{attrs:{text:"",href:"/auth"}},[t._v("登录 / 注册")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.toggle_theme}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-brightness-6")])],1)]}}])},[a("span",[t._v("切换主题")])])],1)},c=[],s={name:"Appbar",data:function(){return{dark_theme:!1}},methods:{toggle_theme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.dark_theme=!this.dark_theme}}},l=s,d=a("2877"),u=a("6544"),p=a.n(u),v=a("40dc"),h=a("bb78"),f=a("8336"),b=a("132d"),g=a("2fa4"),m=a("8654"),_=a("3a2f"),y=Object(d["a"])(l,i,c,!1,null,null,null),x=y.exports;p()(y,{VAppBar:v["a"],VAppBarTitle:h["a"],VBtn:f["a"],VIcon:b["a"],VSpacer:g["a"],VTextField:m["a"],VTooltip:_["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return a("v-window-item",{key:"card-"+e},[a("v-card",{attrs:{color:"grey",height:"300"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("h1",{staticClass:"white--text",staticStyle:{"font-size":"5rem"}},[t._v("Slide "+t._s(e))])])],1)],1)})),1),a("v-card-actions",[a("v-item-group",{attrs:{mandatory:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return a("v-item",{key:"btn-"+e,scopedSlots:t._u([{key:"default",fn:function(t){var e=t.active,r=t.toggle;return[a("v-btn",e?{staticClass:"ml-2",staticStyle:{width:"32px",height:"16px",padding:"0px"},attrs:{depressed:"",rounded:"",color:"accent"},on:{click:r}}:{staticClass:"ml-2",staticStyle:{"min-width":"16px",width:"16px",height:"16px",padding:"0px"},attrs:{active:"",depressed:"",rounded:"",color:"grey_background"},on:{click:r}})]}}],null,!0)})})),1),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.prev}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-chevron-left")])],1)]}}])},[a("span",[t._v("上一个")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.next}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-chevron-right")])],1)]}}])},[a("span",[t._v("下一个")])])],1)],1)},V=[],S={data:function(){return{length:10,onboarding:0}},methods:{next:function(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1},prev:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}}},j=S,w=a("b0af"),C=a("99d9"),O=a("d903"),P=a("604c"),A=a("0fd9"),T=a("f665"),$=a("1e6c"),B=Object(d["a"])(j,k,V,!1,null,null,null),F=B.exports;p()(B,{VBtn:f["a"],VCard:w["a"],VCardActions:C["a"],VIcon:b["a"],VItem:O["a"],VItemGroup:P["b"],VRow:A["a"],VSpacer:g["a"],VTooltip:_["a"],VWindow:T["a"],VWindowItem:$["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"text-center",staticStyle:{position:"relative"}},[a("v-card-title",{staticClass:"text-h5",staticStyle:{display:"block"}},[t._v("欢迎")]),a("v-card-text",[a("v-container",{staticStyle:{margin:"auto",left:"0",right:"0",top:"0",bottom:"0"}},[t._v(" 美好的一天，从咕咕咕开始 ")])],1),a("v-card-actions",{staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0"}},[a("v-btn",{attrs:{block:"",depressed:"",color:"accent",href:"/scratch-gui"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("创建 ")],1)],1)],1)},E=[],G=a("a523"),M={},z=Object(d["a"])(M,I,E,!1,null,null,null),J=z.exports;p()(z,{VBtn:f["a"],VCard:w["a"],VCardActions:C["a"],VCardText:C["b"],VCardTitle:C["c"],VContainer:G["a"],VIcon:b["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{margin:"0 8px",width:"calc(100% / 6 - 16px)",display:"inline-block"}},[a("v-img",{staticStyle:{width:"100%"},attrs:{"lazy-src":"/GitScratch-icon-white.svg",src:t.project_thumbnail}}),a("v-card-title",{staticStyle:{"padding-bottom":"0"}},[t._v(t._s(t.project_title))]),a("v-card-actions",[a("v-btn",{attrs:{text:"",href:"/user/"+t.project_author}},[a("v-avatar",{attrs:{size:"32"}},[a("img",{attrs:{src:t.project_author_avatar}})]),a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.project_author))])],1)],1)],1)},W=[],q={name:"ProjectCard",data:function(){return{project_title:"标题",project_author:"作者",project_author_avatar:"/favicon.ico",project_thumbnail:"https://sdfsdf.dev/480x360.jpg,FFFFFF,000000"}},methods:{toggle_theme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.dark_theme=!this.dark_theme}}},D=q,H=a("8212"),K=a("adda"),L=Object(d["a"])(D,R,W,!1,null,null,null),N=L.exports;p()(L,{VAvatar:H["a"],VBtn:f["a"],VCard:w["a"],VCardActions:C["a"],VCardTitle:C["c"],VImg:K["a"]});var Q={name:"App",components:{Appbar:x,Carousel:F,SideBanner:J,ProjectCard:N},data:function(){return{}}},U=Q,X=a("7496"),Y=a("62ad"),Z=a("f6c4"),tt=Object(d["a"])(U,n,o,!1,null,null,null),et=tt.exports;p()(tt,{VApp:X["a"],VCol:Y["a"],VContainer:G["a"],VMain:Z["a"],VRow:A["a"]});var at=a("f309"),rt=a("fcf4");r["a"].use(at["a"]);var nt=new at["a"]({theme:{themes:{light:{primary:rt["a"].blue.base,secondary:rt["a"].blue.darken4,accent:rt["a"].blue.accent2,grey_background:rt["a"].grey.lighten2},dark:{primary:rt["a"].blue.lighten1,secondary:rt["a"].blue.darken4,accent:rt["a"].blue.accent3,grey_background:rt["a"].grey.darken3}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:nt,render:function(t){return t(et)}}).$mount("#app")}});
//# sourceMappingURL=app.65b41231.js.map