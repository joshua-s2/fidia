(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{258:function(t,e,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0b540531",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,navLinks:[{linkText:"Home"},{linkText:"Dashboard",class:"active"},{linkText:"Projects"},{linkText:"Tasks"},{linkText:"Reporting"},{linkText:"Users"}],miniVariant:!1,right:!0,rightDrawer:!1}}},o=n(75),l=n(87),c=n.n(l),d=n(397),v=n(402),f=n(384),x=n(388),m=n(403),h=n(194),w=n(385),_=n(400),k=n(404),y=n(401),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{staticClass:"d-flex d-sm-none",attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(t.navLinks,(function(e,i){return n("v-list",{key:i,attrs:{router:"",exact:""}},[n("v-btn",{staticClass:"text-capitalize",attrs:{text:""}},[t._v(t._s(e.linkText))])],1)})),1),t._v(" "),n("v-app-bar",{staticClass:"px-0 px-md-15",attrs:{color:"primary","elevate-on-scroll":"","clipped-left":t.clipped,fixed:"",app:""}},[n("v-container",{staticClass:"d-flex justify-space-between align-center"},[n("div",{staticClass:"d-flex align-center"},[n("img",{attrs:{src:"/images/Logo.svg"}}),t._v(" "),t._l(t.navLinks,(function(e){return n("div",{key:e.id,staticClass:"d-none d-md-flex d--none"},[n("v-btn",{staticClass:"Gray700--text",class:e.class,attrs:{text:""}},[t._v(t._s(e.linkText))])],1)}))],2),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"d-none d-md-flex align-center justify-endn"},[n("v-btn",{staticClass:"Gray700--text button mx-4",attrs:{outlined:"",text:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-lightning-bolt-outline")]),t._v("Upgrade now")],1),t._v(" "),n("div",{staticClass:"mx-4 d-none d-md-flex"},[n("v-btn",{attrs:{text:"",icon:"",left:""}},[n("v-icon",[t._v("mdi-cog-outline")])],1),t._v(" "),n("v-btn",{attrs:{text:"",icon:"",left:""}},[n("v-icon",[t._v(" mdi-bell-outline")])],1)],1),t._v(" "),n("v-avatar",{staticClass:"d-none d-md-flex"},[n("img",{attrs:{src:"/images/admin-avatar.svg",alt:"avatar"}})])],1)],1),t._v(" "),n("v-btn",{staticClass:"d-flex d-sm-none",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("img",{attrs:{src:"/images/menu-icon.svg"}})])],1),t._v(" "),n("v-main",[n("NavTwo",{staticClass:"d-none d-md-flex"}),t._v(" "),n("hr",{staticClass:"nav__two"}),t._v(" "),n("Nuxt",{staticClass:"px-0 px-md-15"})],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{NavTwo:n(383).default}),c()(component,{VApp:d.a,VAppBar:v.a,VAvatar:f.a,VBtn:x.a,VContainer:m.a,VIcon:h.a,VList:w.a,VMain:_.a,VNavigationDrawer:k.a,VSpacer:y.a})},281:function(t,e,n){n(282),t.exports=n(283)},312:function(t,e,n){"use strict";n(258)},313:function(t,e,n){var r=n(19)(!1);r.push([t.i,"h1[data-v-8d4ee7ec]{font-size:20px}",""]),t.exports=r},318:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0456c6f6",content,!0,{sourceMap:!1})},319:function(t,e,n){var r=n(19)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),r.push([t.i,'.v-application{font-family:"Inter",sans-serif!important}input:-internal-autofill-selected,input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{-webkit-transition:background-color 5000s;transition:background-color 5000s}.button,.search-field,.v-sheet.v-card{border-radius:.5rem!important}.v-btn{text-transform:none!important}.nav__two{border:1px solid #eaecf0!important;background:#fff!important}.search-field{color:#667085!important}.active{background:#f9fafb!important}.constraint{max-width:1280px}.container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1904px){.container{max-width:1785px}}@media(min-width:1264px){.container{max-width:1185px}}.v-application .text--h2,.v-application .text-h3,.v-application .text-h4,.v-application .text-h5,.v-application .text-h6{font-size:2.25em!important;font-weight:400!important;line-height:2.375em!important;letter-spacing:normal!important;font-family:"Inter",sans-serif!important}.v-application .subtitle-2{size:.875rem;font-weight:600;line-height:1.7em}',""]),t.exports=r},383:function(t,e,n){"use strict";n.r(e);var r={name:"NavTwo",data:function(){return{bottomNav:[{linkText:"Overview",class:"active"},{linkText:"Notifications"},{linkText:"Analytics"},{linkText:"Saved reports"},{linkText:"Trade history"},{linkText:"User reports"}]}}},o=n(75),l=n(87),c=n.n(l),d=n(402),v=n(388),f=n(398),x=n(399),m=n(389),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav__two px-0 px-md-15"},[n("v-app-bar",{staticClass:"primary",attrs:{outlined:"",elevation:"0"}},[n("v-row",{staticClass:"align-center"},[n("v-col",{attrs:{cols:"7"}},[n("div",{staticClass:"d-flex"},t._l(t.bottomNav,(function(e){return n("div",{key:e.id},[n("v-btn",{staticClass:"Gray700--text",class:e.class,attrs:{text:""}},[t._v(t._s(e.linkText))])],1)})),0)]),t._v(" "),n("v-col",{staticClass:"d-flex justify-start",attrs:{cols:"5",align:"top"}},[n("div",{staticClass:"justify-end"},[n("v-text-field",{staticClass:"search-field d-non",attrs:{outlined:"",dense:"","single-line":"","hide-details":"",label:"Search",color:"accent","prepend-inner-icon":"mdi-magnify"}})],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:d.a,VBtn:v.a,VCol:f.a,VRow:x.a,VTextField:m.a})},83:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(312),n(75)),l=n(87),c=n.n(l),d=n(397),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"8d4ee7ec",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[281,7,2,8]]]);