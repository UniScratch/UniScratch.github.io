!function(t){function e(e){for(var n,i,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(e);p.length;)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),a()}({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=a("2877"),o=a("6544"),i=a.n(o),c=a("40dc"),s=a("bb78"),l=a("8336"),u=a("132d"),d=a("8860"),p=a("da13"),v=a("5d23"),h=a("e449"),f=a("2fa4"),m=a("8654"),b=a("3a2f"),_=Object(r.a)({name:"Appbar",data:function(){return{dark_theme:!1}},methods:{toggle_theme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.dark_theme=!this.dark_theme}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:""}},[a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"hidden-sm-and-up",attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-menu")])],1)]}}])},[a("v-list",{attrs:{"min-width":"200"}},[a("v-list-item",[a("router-link",{attrs:{to:"/explore"}},[a("v-list-item-title",[t._v("发现")])],1)],1),a("v-list-item",[a("router-link",{attrs:{to:"/about"}},[a("v-list-item-title",[t._v("关于")])],1)],1)],1)],1),a("v-btn",{staticClass:"ml-2",attrs:{icon:"",href:"/"}},[t.dark_theme?t._e():a("img",{attrs:{src:"/GitScratch-icon-black.svg",width:"36"}}),t.dark_theme?a("img",{attrs:{src:"/GitScratch-icon-white.svg",width:"36"}}):t._e()]),a("v-app-bar-title",{staticClass:"pl-1 hidden-sm-and-down"},[t._v("GitScratch")]),a("v-text-field",{staticClass:"mx-2 mx-md-4 hidden-xs-only",staticStyle:{"max-width":"250px"},attrs:{"prepend-inner-icon":"mdi-magnify",label:"搜索",autocomplete:"off",dense:"","hide-details":"",outlined:"","single-line":""}}),a("v-btn",{staticClass:"hidden-xs-only",attrs:{text:"",href:"/explore"}},[t._v("发现")]),a("v-btn",{staticClass:"hidden-xs-only",attrs:{text:"",href:"/about"}},[t._v("关于")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",href:"/scratch-gui"}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-plus")])],1)]}}])},[a("span",[t._v("创建")])]),a("v-btn",{attrs:{text:"",href:"/auth"}},[t._v("登录 / 注册")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.toggle_theme}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-brightness-6")])],1)]}}])},[a("span",[t._v("切换主题")])])],1)}),[],!1,null,null,null),g=_.exports;i()(_,{VAppBar:c.a,VAppBarTitle:s.a,VBtn:l.a,VIcon:u.a,VList:d.a,VListItem:p.a,VListItemTitle:v.a,VMenu:h.a,VSpacer:f.a,VTextField:m.a,VTooltip:b.a});var y=a("b0af"),x=a("99d9"),V=a("d903"),w=a("604c"),k=a("0fd9"),j=a("f665"),C=a("1e6c"),S=Object(r.a)({data:function(){return{length:5,onboarding:0}},methods:{next:function(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1},prev:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{"min-height":"350"}},[a("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return a("v-window-item",{key:"card-"+e},[a("v-card",{attrs:{color:"grey",height:"300"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("h1",{staticClass:"white--text",staticStyle:{"font-size":"5rem"}},[t._v("Slide "+t._s(e))])])],1)],1)})),1),a("v-card-actions",[a("v-item-group",{attrs:{mandatory:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return a("v-item",{key:"btn-"+e,scopedSlots:t._u([{key:"default",fn:function(t){var e=t.active,n=t.toggle;return[a("v-btn",{staticClass:"ml-2",style:e?"width: 32px; height: 16px; padding: 0px; transition: all 0.15s ease;":"min-width: 16px; width: 16px; height: 16px; padding: 0px;transition: all 0.15s ease;",attrs:{color:e?"accent":"grey_background",depressed:"",rounded:""},on:{click:n}})]}}],null,!0)})})),1),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.prev}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-chevron-left")])],1)]}}])},[a("span",[t._v("上一个")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.next}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-chevron-right")])],1)]}}])},[a("span",[t._v("下一个")])])],1)],1)}),[],!1,null,null,null),O=S.exports;i()(S,{VBtn:l.a,VCard:y.a,VCardActions:x.a,VIcon:u.a,VItem:V.a,VItemGroup:w.b,VRow:k.a,VSpacer:f.a,VTooltip:b.a,VWindow:j.a,VWindowItem:C.a});var A=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"text-center",attrs:{"min-height":"350"}},[a("v-card-title",{staticStyle:{display:"block"}},[t._v("欢迎")]),a("v-card-text",{staticClass:"text--primary",attrs:{align:"center"}},[a("div",{staticClass:"text-h2"},[t._v(t._s((new Date).getDate()))]),t._v(" "+t._s((new Date).getFullYear())+" / "+t._s((new Date).getMonth())+" "),a("br"),t._v(" 美好的一天，从咕咕咕开始 ")]),a("v-card-actions",{staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0"}},[a("v-btn",{attrs:{block:"",depressed:"",color:"accent",href:"/scratch-gui"}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("创建 ")],1)],1)],1)}),[],!1,null,null,null),P=A.exports;i()(A,{VBtn:l.a,VCard:y.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VIcon:u.a});var T=a("8212"),M=a("adda"),G=Object(r.a)({name:"ProjectCard",data:function(){return{project_title:"标题",project_author:"作者",project_author_avatar:"/favicon.ico",project_thumbnail:"https://sdfsdf.dev/480x360.jpg,FFFFFF,000000",project_id:1}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{href:"/project/"+t.project_id}},[a("v-img",{staticStyle:{width:"100%"},attrs:{"lazy-src":"/GitScratch-icon-white.svg",src:t.project_thumbnail}}),a("v-card-title",{staticStyle:{"padding-bottom":"0"}},[t._v(t._s(t.project_title))]),a("v-card-actions",[a("v-btn",{attrs:{text:"",href:"/user/"+t.project_author}},[a("v-avatar",{attrs:{size:"32"}},[a("img",{attrs:{src:t.project_author_avatar}})]),a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(t.project_author))])],1)],1)],1)}),[],!1,null,null,null),$=G.exports;i()(G,{VAvatar:T.a,VBtn:l.a,VCard:y.a,VCardActions:x.a,VCardTitle:x.c,VImg:M.a});var I={name:"ProjectGroup",props:["title"],components:{ProjectCard:$}},B=a("62ad"),F=Object(r.a)(I,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"24px"}},[a("p",{staticClass:"text-h5"},[t._v(t._s(t.title))]),a("v-row",t._l(6,(function(t){return a("v-col",{key:t,attrs:{cols:"6",md:"2",sm:"4"}},[a("ProjectCard")],1)})),1)],1)}),[],!1,null,null,null),E=F.exports;i()(F,{VCol:B.a,VRow:k.a});var R={name:"App",components:{Appbar:g,Carousel:O,SideBanner:P,ProjectGroup:E},data:function(){return{}}},D=a("7496"),L=a("a523"),z=a("f6c4"),J=Object(r.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-main",[e("Appbar"),e("v-container",[e("v-row",{staticStyle:{"margin-bottom":"8px"}},[e("v-col",{attrs:{cols:"12",sm:"9"}},[e("Carousel")],1),e("v-col",{attrs:{cols:"12",sm:"3"}},[e("SideBanner")],1)],1),e("ProjectGroup",{attrs:{title:"精选作品"}}),e("ProjectGroup",{attrs:{title:"热门作品"}})],1)],1)],1)}),[],!1,null,null,null),W=J.exports;i()(J,{VApp:D.a,VCol:B.a,VContainer:L.a,VMain:z.a,VRow:k.a});var H=a("7c5c").marked,Y={name:"App",components:{Appbar:g},data:function(){return{}},methods:{renderMd:function(){return H.parse("# About GitScratch")}}},q=Object(r.a)(Y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Appbar"),a("v-container",{domProps:{innerHTML:t._s(t.renderMd())}})],1)],1)}),[],!1,null,null,null),K=q.exports;i()(q,{VApp:D.a,VContainer:L.a,VMain:z.a});var N=a("f309"),Q=a("fcf4");n.a.use(N.a);var U=new N.a({theme:{themes:{light:{primary:Q.a.blue.base,secondary:Q.a.blue.darken4,accent:Q.a.blue.accent2,grey_background:Q.a.grey.lighten2},dark:{primary:Q.a.blue.lighten1,secondary:Q.a.blue.darken4,accent:Q.a.blue.accent3,grey_background:Q.a.grey.darken3}}}});n.a.config.productionTip=!1;var X={template:"<p>Page not found</p>"},Z={"/":W,"/about":K};new n.a({el:"#app",data:{currentRoute:window.location.pathname},computed:{ViewComponent:function(){return Z[this.currentRoute]||X}},vuetify:U,render:function(t){return t(this.ViewComponent)}}).$mount("#app")}});