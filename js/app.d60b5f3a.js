(function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-298a82d3":"ac96e8ff","chunk-8e911d70":"e2298ee9","chunk-b854ab6e":"c68b6b03","chunk-2c106a16":"2be17dee","chunk-2d0dd7c3":"379ebae3","chunk-2d0dd9a6":"2790e8a2","chunk-2d222005":"21134af3"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-298a82d3":1,"chunk-8e911d70":1,"chunk-2c106a16":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-298a82d3":"af7030d6","chunk-8e911d70":"4a0adff5","chunk-b854ab6e":"31d6cfe0","chunk-2c106a16":"0af34958","chunk-2d0dd7c3":"31d6cfe0","chunk-2d0dd9a6":"31d6cfe0","chunk-2d222005":"31d6cfe0"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("64a9")},"269a":function(e,t,n){e.exports=n.p+"img/banner.76215ff8.png"},"2a73":function(e,t,n){"use strict";n("d981")},3592:function(e,t,n){e.exports=n.p+"img/add.7c98fdf4.svg"},3881:function(e,t,n){"use strict";n("dbf9")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("navBar"),n("router-view"),n("loginPopup",{attrs:{showDialog:e.showLoginPopup},on:{"update:showDialog":function(t){e.showLoginPopup=t},"update:show-dialog":function(t){e.showLoginPopup=t}}})],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"navbar-wrapper"},[o("div",{staticClass:"nav-bar",class:{"home-style":"/home"===e.curPath}},[o("div",{staticClass:"logo",on:{click:function(t){return e.toPage("home")}}},[o("img",{attrs:{src:n("b018"),alt:""}})]),o("div",{staticClass:"nav-item-group"},[o("div",{staticClass:"nav-item",class:{active:"/socialmedia"===e.curPath},on:{click:function(t){return e.toPage("socialmedia")}}},[e._v("社 群")]),o("div",{staticClass:"nav-item",class:{active:"/video"===e.curPath},on:{click:function(t){return e.toPage("video")}}},[e._v("影 片")]),o("div",{staticClass:"nav-item",class:{active:"/shop"===e.curPath},on:{click:function(t){return e.toPage("shop")}}},[e._v("購 物")]),o("div",{staticClass:"nav-item",class:{active:"/exchange"===e.curPath},on:{click:function(t){return e.toPage("exchange")}}},[e._v("交 換")]),o("div",{staticClass:"nav-item",class:{active:"/together"===e.curPath},on:{click:function(t){return e.toPage("together")}}},[e._v("湊 團")])]),o("div",{staticClass:"user-btn-group"},[e._m(0),o("div",{staticClass:"btn user",on:{click:function(t){return e.toMyPage()}}},[o("img",{attrs:{src:n("d710"),alt:""}})]),e._m(1),e._m(2)])])])},u=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"btn add"},[o("img",{attrs:{src:n("3592"),alt:""}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"btn message"},[o("img",{attrs:{src:n("ebe4"),alt:""}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"btn setting"},[o("img",{attrs:{src:n("afae"),alt:""}})])}],l={computed:{curPath:function(){return this.$route.path},isLogin:function(){return!!this.$store.state.user.loginAccount}},methods:{toPage:function(e){this.$router.push(e)},toMyPage:function(){this.isLogin?this.toPage("/mine"):this.$showLoginPopup()}}},p=l,d=(n("3881"),n("2877")),f=Object(d["a"])(p,c,u,!1,null,"17eb7ba5",null),h=f.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"login-popup",attrs:{visible:e.showDialog},on:{close:function(t){return e.onClose()}}},[n("el-form",[n("el-form-item",{attrs:{label:"帳號"}},[n("el-input")],1),n("el-form-item",{attrs:{label:"密碼"}},[n("el-input")],1)],1),n("button",{staticClass:"btn btn-large btn-primary",attrs:{id:"FB_login"},on:{click:e.checkLoginState}},[e._v("FB 登入")]),n("button",{staticClass:"btn btn-large btn-warning",attrs:{id:"FB_logout"}},[e._v("FB 登出")]),n("div",{attrs:{id:"status"}})],1)},m=[],b=(n("7f7f"),{props:{showDialog:{type:Boolean,require:!0}},mounted:function(){},methods:{checkLoginState:function(){var e=this;FB.getLoginStatus((function(t){e.statusChangeCallback(t)}))},statusChangeCallback:function(e){var t=this;console.log("statusChangeCallback"),console.log(e),"connected"===e.status?this.testAPI():"not_authorized"===e.status?(FB.login((function(e){console.log(e),t.testAPI()})),document.getElementById("status").innerHTML="Please log into this app."):(document.getElementById("status").innerHTML="Please log into Facebook.",FB.login((function(e){console.log(e),t.testAPI()})))},testAPI:function(){console.log("Welcome!  Fetching your information.... "),FB.api("/me",(function(e){console.log(e),console.log("Successful login for: "+e.name),document.getElementById("status").innerHTML="Thanks for logging in, "+e.name+"!"}))},onClose:function(){this.$hideLoginPopup()}}}),v=b,P=Object(d["a"])(v,g,m,!1,null,null,null),y=P.exports;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={components:{navBar:h,loginPopup:y},data:function(){return{}},computed:w({},Object(s["b"])({showLoginPopup:function(e){return e.user.showLoginPopup}}))},O=C,L=(n("034f"),Object(d["a"])(O,a,r,!1,null,null,null)),_=L.exports,E=n("8c4f"),j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("swiper",{ref:"mySwiper",attrs:{options:e.swiperOptions}},[o("swiper-slide",[o("img",{attrs:{src:n("269a"),alt:""}})]),o("swiper-slide",[o("img",{attrs:{src:n("269a"),alt:""}})]),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},T=[],S={name:"Home",data:function(){return{swiperOptions:{loop:!0,autoplay:{delay:1e3,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:".swiper-pagination"}}}}},x=S,A=(n("2a73"),Object(d["a"])(x,j,T,!1,null,"03b842ef",null)),B=A.exports;o["default"].use(E["a"]);var M=new E["a"]({routes:[{path:"/",name:"Home",component:B},{path:"/home",name:"Home",component:B},{path:"/socialmedia",name:"Socialmedia",component:function(){return Promise.all([n.e("chunk-b854ab6e"),n.e("chunk-2d222005")]).then(n.bind(null,"cd6d"))}},{path:"/shop",name:"Shop",component:function(){return Promise.all([n.e("chunk-b854ab6e"),n.e("chunk-2d0dd7c3")]).then(n.bind(null,"821d"))}},{path:"/video",name:"Video",component:function(){return Promise.all([n.e("chunk-b854ab6e"),n.e("chunk-2d0dd9a6")]).then(n.bind(null,"81a8"))}},{path:"/exchange",name:"Exchange",component:function(){return Promise.all([n.e("chunk-b854ab6e"),n.e("chunk-2c106a16")]).then(n.bind(null,"e9f1"))}},{path:"/together",name:"Together",component:function(){return n.e("chunk-8e911d70").then(n.bind(null,"ee8c"))}},{path:"/mine",name:"Mine",component:function(){return n.e("chunk-298a82d3").then(n.bind(null,"a1c4"))}}]}),N=function(){return{userAccount:"",userName:"",userImg:"",ownExchangeItemList:[],followingItemList:[],showLoginPopup:!1}},$={},I={},F={openLoginPopup:function(e){e.showLoginPopup=!0},hideLoginPopup:function(e){e.showLoginPopup=!1}},D={namespaced:!0,state:N,getters:$,actions:I,mutations:F},H=function(){return{groups:["NCT","NCT127","NCT Dream","WayV"],nct127Members:["泰一","Johnny","泰容","悠太","道英","在玹","廷祐","Mark","楷燦"],nctdreamMembers:["Mark","仁俊","Jeno","楷燦","渽民","辰樂","志晟"],wayvMembers:["錕","Ten","昀昀","Lucas","肖俊","Hendery","揚揚"],nctMembers:["泰一","Johnny","泰容","悠太","道英","在玹","廷祐","Mark","楷燦","仁俊","Jeno","渽民","辰樂","志晟","錕","Ten","昀昀","Lucas","肖俊","Hendery","揚揚","將太郎","成燦"],nctAlbums:["NCT 2018 Empathy","NCT 2020 : RESONANCE Pt. 1","NCT 2020 : RESONANCE Pt. 2"],nct127Albums:["NCT #127","Limitless","Cherry Bomb","Chain","Regular-Irregular","Regulate","Neo Zone","We Are Superhuman","Awaken","The Final Round","LOVEHOLIC"],nctdreamAlbums:["The First","We Young","We Go Up","WE BOOM","Reload"],wayvAlbums:["Awaken The World","Take Off","Take Over the Moon"]}},W={},J={},R={},q={namespaced:!0,state:H,getters:W,actions:J,mutations:R};o["default"].use(s["a"]);var V=new s["a"].Store({modules:{basic:q,user:D}}),U=n("5c96"),z=n.n(U),G=(n("0fae"),n("7212")),K=n.n(G);n("bbe3");o["default"].use(z.a),o["default"].use(K.a),o["default"].config.productionTip=!1,o["default"].prototype.$showLoginPopup=function(){V.commit("user/openLoginPopup")},o["default"].prototype.$hideLoginPopup=function(){V.commit("user/hideLoginPopup")},new o["default"]({router:M,store:V,render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,n){},afae:function(e,t,n){e.exports=n.p+"img/setting.0a4df66f.svg"},b018:function(e,t,n){e.exports=n.p+"img/logog.8c1f6ef9.png"},d710:function(e,t,n){e.exports=n.p+"img/user.cb482c2a.svg"},d981:function(e,t,n){},dbf9:function(e,t,n){},ebe4:function(e,t,n){e.exports=n.p+"img/message.20471bc4.svg"}});
//# sourceMappingURL=app.d60b5f3a.js.map