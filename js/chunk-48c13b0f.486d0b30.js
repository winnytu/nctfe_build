(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48c13b0f"],{"49ce":function(e,t,s){"use strict";s("b5e8")},a502:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-center"},[s("div",{staticClass:"msg-list"},[s("div",{staticClass:"title"},[e._v("\n            訊息列表\n            "),s("div",{staticClass:"btn-group"},[s("span",{class:{active:"my"===e.curMessageType},on:{click:function(t){return e.toggleType("my")}}},[e._v("發起")]),e._v("\n                ｜\n                "),s("span",{class:{active:"apply"===e.curMessageType},on:{click:function(t){return e.toggleType("apply")}}},[e._v("參與")])])]),e._v("\n        \b"),e._l(e.curMessageTypeList,(function(t,n){return s("div",{key:n,staticClass:"msg-list-item"},["my"==e.curMessageType?s("div",{staticClass:"my",class:{active:e.curItem.itemId==t.itemId},on:{click:function(s){return e.selectItem(t)}}},[s("div",{staticClass:"item-name"},[e._l(t.ownMember,(function(t){return s("span",{key:t,staticClass:"member"},[e._v(e._s(t))])})),e._v("\n                    換\n                    "),e._l(t.targetMember,(function(t,n){return s("span",{key:n,staticClass:"member"},[e._v(e._s(t)+" ")])}))],2),t.desc?s("p",{staticClass:"summary"},[e._v(e._s(t.desc.length>20?t.desc.slice(0,30)+"...":t.desc))]):e._e(),s("div",{staticClass:"user"},[e._v("建立者 "+e._s(t.creator))])]):s("div",{staticClass:"apply",class:{active:e.curItem.itemId==t.exchangeInfo.itemId},on:{click:function(s){return e.selectItem(t.exchangeInfo)}}},[s("div",{staticClass:"item-name"},[e._l(t.exchangeInfo.ownMember,(function(t){return s("span",{key:t,staticClass:"member"},[e._v(e._s(t))])})),e._v("\n                    換\n                    "),e._l(t.exchangeInfo.targetMember,(function(t,n){return s("span",{key:n,staticClass:"member"},[e._v(e._s(t)+" ")])}))],2),t.exchangeInfo.desc?s("p",{staticClass:"summary"},[e._v(e._s(t.exchangeInfo.desc.length>20?t.exchangeInfo.desc.slice(0,30)+"...":t.exchangeInfo.desc))]):e._e(),s("div",{staticClass:"user"},[e._v("建立者 "+e._s(t.exchangeInfo.creator))])])])}))],2),s("div",{staticClass:"msg-box"},[e.curMessageList.length>0?s("div",{staticClass:"title"},[e._v("\n            "+e._s(e.curMessageList[0].fromUser==e.userName?e.curMessageList[0].toUser:e.curMessageList[0].fromUser)+"\n        ")]):e._e(),s("div",{staticClass:"msg-detail-container"},e._l(e.curMessageList,(function(t,n){return s("div",{key:n,staticClass:"msg-detail",class:{self:t.fromUser==e.userName}},[s("div",{staticClass:"text"},[e._v(e._s(t.postMessage))]),s("div",{staticClass:"date"},[e._v(e._s(t.create_time))])])})),0),s("div",{staticClass:"msg-send"},[s("el-input",{staticClass:"type-box",attrs:{autosize:"",maxlength:"100",type:"textarea","show-word-limit":"",placeholder:"輸入訊息"},model:{value:e.msgText,callback:function(t){e.msgText=t},expression:"msgText"}}),s("el-button",{staticClass:"btn-send",on:{click:function(t){return e.doSendMessage()}}},[e._v("送出")])],1)]),e._m(0)])},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"msg-info"},[s("div",{staticClass:"item-img"})])}],r=(s("8e6e"),s("ac6a"),s("456d"),s("96cf"),s("3b8d")),a=s("bd86"),i=s("2f62"),o=s("c24f"),u=s("c443");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(a["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var g={data:function(){return{myApplyList:[],myExchangeList:[],curItemId:"",curItem:{},msgText:"",curMessageType:"my",curMessageList:[],curMessageTypeList:[]}},computed:m({},Object(i["c"])({userImg:function(e){return e.user.userImg},userName:function(e){return e.user.userName}})),watch:{},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getUserItemList();case 2:this.toggleType("my");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getUserItemList:function(){var e=this,t={userName:this.$store.state.user.userName,type:"exchange"};return new Promise((function(s,n){Object(o["a"])(t).then((function(t){console.log(t),e.myApplyList=t.body.myApplyList,e.myExchangeList=t.body.myExchangeList,s()})).catch((function(e){console.log(e)}))}))},selectItem:function(e){this.curItemId=e.itemId,this.curItem=e,this.getItemMessage()},toggleType:function(e){this.curMessageType=e,"my"==e?(this.curMessageTypeList=this.myExchangeList,this.selectItem(this.curMessageTypeList[0])):(this.curMessageTypeList=this.myApplyList,this.selectItem(this.curMessageTypeList[0].exchangeInfo))},getItemMessage:function(){var e=this,t={itemId:this.curItemId};Object(u["getExchangeMessagList"])(t).then((function(t){console.log(t),e.curMessageList=t.messageList})).catch((function(e){console.log(e)}))},doSendMessage:function(){var e=this,t=this.curMessageList[0],s={postMessage:this.msgText,fromUser:this.userName,toUser:t.fromUser!==this.userName?t.fromUser:t.toUser,relatedItem:t.relatedItem};console.log(s),Object(u["d"])(s).then((function(t){e.getItemMessage(),e.msgText=""})).catch((function(e){console.log(e)}))}}},f=g,d=(s("49ce"),s("2877")),p=Object(d["a"])(f,n,c,!1,null,"4f828f6e",null);t["default"]=p.exports},b5e8:function(e,t,s){},c443:function(e,t,s){"use strict";s.d(t,"d",(function(){return c})),s.d(t,"b",(function(){return r})),s.d(t,"c",(function(){return a}));var n=s("a13e");function c(e){return Object(n["a"])({url:"/message/send",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/exchange/messageList",method:"post",data:e})}function a(e){return Object(n["a"])({url:"/together/messageList",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-48c13b0f.486d0b30.js.map