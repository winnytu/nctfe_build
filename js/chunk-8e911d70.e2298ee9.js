(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e911d70"],{"55da":function(e,t,r){},"816d":function(e,t,r){"use strict";r("55da")},a582:function(e,t,r){},b32a:function(e,t,r){"use strict";r("d2f8")},d2f8:function(e,t,r){},ee8c:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"together"},[r("div",{staticClass:"add-together",on:{click:function(t){return e.openAddTogether()}}},[e._v("+新增")]),r("searchTogether"),r("togetherItem",{attrs:{itemList:e.allItems}}),r("addTogether",{attrs:{showDialog:e.showAddTogether},on:{"update:showDialog":function(t){e.showAddTogether=t},"update:show-dialog":function(t){e.showAddTogether=t}}}),r("togetherDetail",{attrs:{showDialog:e.showTogetherDetail},on:{"update:showDialog":function(t){e.showTogetherDetail=t},"update:show-dialog":function(t){e.showTogetherDetail=t}}})],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"searchExchange"},[r("el-form",{attrs:{model:e.form,"label-position":"left","label-width":"100px",inline:!0}},[r("el-form-item",{attrs:{label:"組合"}},[r("el-select",{attrs:{placeholder:"请選擇組合"},model:{value:e.form.groupName,callback:function(t){e.$set(e.form,"groupName",t)},expression:"form.groupName"}},e._l(e.groups,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{label:"物品類型"}},[r("el-select",{attrs:{placeholder:"请選擇物品類型"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},e._l(e.categories,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1)],1)},a=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),l=r("2f62");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={data:function(){return{form:{groupName:"",album:"",category:"",itemType:"",exchangeWay:[],ownMember:"",targetMember:[]},members:[],albums:[],categories:["官方","飯製"]}},computed:m({},Object(l["b"])({groups:function(e){return e.basic.groups},nctMembers:function(e){return e.basic.nctMembers},nct127Members:function(e){return e.basic.nct127Members},nctdreamMembers:function(e){return e.basic.nctdreamMembers},wayvMembers:function(e){return e.basic.wayvMembers},nctAlbums:function(e){return e.basic.nctAlbums},nct127Albums:function(e){return e.basic.nct127Albums},nctdreamAlbums:function(e){return e.basic.nctdreamAlbums},wayvAlbums:function(e){return e.basic.wayvAlbums}})),watch:{"form.groupName":{handler:function(e){switch(console.log(e),e){case"NCT":this.members=this.nctMembers,this.albums=this.nctAlbums;break;case"NCT127":this.members=this.nct127Members,this.albums=this.nct127Albums;break;case"NCT Dream":this.members=this.nctdreamMembers,this.albums=this.nctdreamAlbums;break;case"WayV":this.members=this.wayvMembers,this.albums=this.wayvAlbums;break}}}}},p=u,f=r("2877"),d=Object(f["a"])(p,s,a,!1,null,null,null),h=d.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"together-detail-popup",attrs:{title:e.TMPitem.title,visible:e.showDialog,width:"1000"},on:{close:function(t){return e.onClose()}}},[1==e.step?r("div",[r("img",{attrs:{src:e.TMPitem.img,alt:""}}),r("p",[e._v("主揪人 "+e._s(e.TMPitem.leader))]),r("p",[e._v("建立日期 "+e._s(e.TMPitem.createdDate))]),r("p",[e._v("截止日期 "+e._s(e.TMPitem.expiredDate))]),r("p",[e._v("這是一段描述一段描述")]),r("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.TMPitem.itemList,(function(t,i){return r("el-checkbox",{key:i,attrs:{label:t}},[r("p",[e._v("名稱"+e._s(t.itemName)+"單價"+e._s(t.itemPrice)+"剩餘數量"+e._s(t.itemNum))]),e.checkList.find((function(e){return e===i+1}))?r("el-select",{attrs:{placeholder:"请選擇數量"},on:{change:function(t){return e.selectNum()}},model:{value:e.curNum[i],callback:function(t){e.$set(e.curNum,i,t)},expression:"curNum[i]"}},e._l(t.itemNum,(function(e,t){return r("el-option",{key:t,attrs:{value:e}})})),1):e._e()],1)})),1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.onClose()}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("確 認")])],1)],1):e._e(),2==e.step?r("div",[r("p",[e._v("跟團內容")]),r("p"),r("p",[e._v("填寫訊息")]),r("el-input",{attrs:{type:"textarea",placeholder:"請填入訊息"},model:{value:e.form.msg,callback:function(t){e.$set(e.form,"msg",t)},expression:"form.msg"}})],1):e._e()])},g=[],v={props:{showDialog:{type:Boolean,require:!0}},data:function(){return{step:1,TMPitem:{img:r("fe6c"),leader:"angela lee",title:"夢夢娃",desc:"夢夢娃",createdDate:"2021/09/09",expiredDate:"2021/10/10",itemList:[{itemName:"仁俊",itemNum:5,itemPrice:123},{itemName:"馬克",itemNum:1,itemPrice:123},{itemName:"馬克",itemNum:1,itemPrice:123}]},checkList:[],curNum:[],form:{msg:""}}},methods:{onClose:function(){this.$emit("update:showDialog",!1)},selectNum:function(e){console.log(e)},submit:function(){console.log(this.checkList),console.log(this.curNum),1!=this.step?this.$emit("update:showDialog",!1):this.step=2}}},_=v,w=Object(f["a"])(_,b,g,!1,null,null,null),y=w.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"add-together-popup",attrs:{title:"新增",visible:e.showDialog,width:"1000"},on:{close:function(t){return e.onClose()}}},[1==e.step?r("div",[r("el-form",{attrs:{"label-position":"left"}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"請輸入湊團物品名稱"},model:{value:e.formItem.title,callback:function(t){e.$set(e.formItem,"title",t)},expression:"formItem.title"}})],1),r("el-form-item",{attrs:{label:"組合"}},[r("el-select",{attrs:{placeholder:"请選擇組合"},model:{value:e.formItem.groupName,callback:function(t){e.$set(e.formItem,"groupName",t)},expression:"formItem.groupName"}},e._l(e.groups,(function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"描述"},model:{value:e.formItem.desc,callback:function(t){e.$set(e.formItem,"desc",t)},expression:"formItem.desc"}})],1),r("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card"}},[r("i",{staticClass:"el-icon-plus"})]),r("el-form-item",[r("el-date-picker",{attrs:{type:"date",placeholder:"选择截止日期"},model:{value:e.formItem.expiredDate,callback:function(t){e.$set(e.formItem,"expiredDate",t)},expression:"formItem.expiredDate"}})],1),e._l(e.formItem.itemList,(function(t,i){return r("div",{key:i,staticClass:"item-detail"},[r("el-form-item",[r("el-input",{attrs:{placeholder:"请輸入項目名稱"},model:{value:t.itemName,callback:function(r){e.$set(t,"itemName",r)},expression:"item.itemName"}})],1),r("el-form-item",{staticClass:"item-detail"},[r("el-select",{attrs:{placeholder:"请選擇數量"},model:{value:t.itemNum,callback:function(r){e.$set(t,"itemNum",r)},expression:"item.itemNum"}},e._l(20,(function(e,t){return r("el-option",{key:t,attrs:{value:e}})})),1)],1),r("el-form-item",{staticClass:"item-detail"},[r("el-input",{attrs:{placeholder:"请輸入單項價錢"},model:{value:t.price,callback:function(r){e.$set(t,"price",r)},expression:"item.price"}})],1),r("el-button",{on:{click:function(t){return e.removeItem(i)}}},[e._v("刪除")])],1)})),r("el-button",{on:{click:function(t){return e.addItem()}}},[e._v("新增")])],2)],1):r("div",{staticClass:"itemList"},[r("p",[e._v("確認")]),r("p",[e._v(e._s(e.formItem.title))]),r("p",[e._v(e._s(e.formItem.GroupName))]),r("p",[e._v(e._s(e.formItem.desc))]),r("p",[e._v(e._s(e.formItem.expiredDate))]),e._l(e.formItem.itemList,(function(t,i){return r("p",{key:i},[e._v(e._s(t.itemName)+e._s(t.itemNum)+" "+e._s(t.itemPrice))])}))],2),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.onClose()}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit()}}},[e._v("确 定")])],1)])},D=[];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T={props:{showDialog:{type:Boolean,require:!0}},data:function(){return{step:1,formItem:{title:"",groupName:"",desc:"",expiredDate:"",itemList:[{itemName:"",itemNum:null,price:null}]}}},computed:O({},Object(l["b"])({groups:function(e){return e.basic.groups}})),methods:{onClose:function(){this.$emit("update:showDialog",!1)},removeItem:function(e){this.formItem.itemList.splice(e,1)},onSubmit:function(){1==this.step?this.step=2:this.$emit("update:showDialog",!1)},addItem:function(){this.formItem.itemList.push({itemName:"",itemNum:0,key:Date.now()}),console.log(this.formItem)}}},P=T,x=(r("f50b"),Object(f["a"])(P,N,D,!1,null,"3e5a9f1d",null)),j=x.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"together-item-container"},e._l(e.TMPitemList,(function(t,i){return r("div",{key:i,staticClass:"together-item-wrapper",on:{click:function(t){return e.openTogetherDetail()}}},[r("div",{staticClass:"together-item"},[r("img",{attrs:{src:t.img,alt:""}}),r("p",{staticClass:"group"},[e._v(e._s(t.groupName))]),r("p",{staticClass:"type"},[e._v(e._s(t.type))]),r("div",{staticClass:"title"},[r("p",[e._v(e._s(t.title))]),r("p",[e._v("期限 "+e._s(t.expiredDate))]),r("p",[e._v("缺 "),e._l(t.itemList,(function(t,i){return r("span",{key:i},[e._v(e._s(t.itemName)+" ")])}))],2)]),e._m(0,!0)])])})),0),r("togetherDetail",{attrs:{showDialog:e.showTogetherDetail},on:{"update:showDialog":function(t){e.showTogetherDetail=t},"update:show-dialog":function(t){e.showTogetherDetail=t}}})],1)},C=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mask"},[r("div",[e._v("查看詳情")])])}],M={name:"togetherItem",components:{togetherDetail:y},props:{itemList:{type:Array,default:[]}},data:function(){return{TMPitemList:[{img:r("fe6c"),leader:"angela lee",groupName:"NCT DREAM",type:"飯製",title:"夢夢娃",desc:"夢夢娃",createdDate:"2021/09/09",expiredDate:"2021/10/10",itemList:[{itemName:"仁俊",itemNum:1,itemPrice:123},{itemName:"馬克",itemNum:1,itemPrice:123}]},{img:r("fe6c"),leader:"angela lee",groupName:"NCT DREAM",type:"飯製",title:"夢夢娃",desc:"夢夢娃",createdDate:"2021/09/09",expiredDate:"2021/10/10",itemList:[{itemName:"仁俊",itemNum:1,itemPrice:123},{itemName:"馬克",itemNum:1,itemPrice:123}]},{img:r("fe6c"),leader:"angela lee",groupName:"NCT DREAM",type:"飯製",title:"夢夢娃",desc:"夢夢娃",createdDate:"2021/09/09",expiredDate:"2021/10/10",itemList:[{itemName:"仁俊",itemNum:1,itemPrice:123},{itemName:"馬克",itemNum:1,itemPrice:123}]}],showTogetherDetail:!1}},methods:{openTogetherDetail:function(){this.showTogetherDetail=!0}}},A=M,L=(r("816d"),Object(f["a"])(A,I,C,!1,null,"376cebea",null)),$=L.exports,E={components:{searchTogether:h,addTogether:j,togetherItem:$,togetherDetail:y},data:function(){return{showAddTogether:!1,showTogetherDetail:!1,allItems:[],curItem:{}}},methods:{openAddTogether:function(){this.showAddTogether=!0},openTogetherDetail:function(){this.showTogetherDetail=!0}}},S=E,R=(r("b32a"),Object(f["a"])(S,i,o,!1,null,"3f159a15",null));t["default"]=R.exports},f50b:function(e,t,r){"use strict";r("a582")},fe6c:function(e,t,r){e.exports=r.p+"img/doll.eb3758db.jpeg"}}]);
//# sourceMappingURL=chunk-8e911d70.e2298ee9.js.map