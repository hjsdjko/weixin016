(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shejirenwuwancheng-list"],{"06a4":function(e,t,n){"use strict";n.r(t);var i=n("41a3"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},3429:function(e,t,n){"use strict";var i=n("b875"),r=n.n(i);r.a},3936:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-31237433]{min-height:calc(100vh - 44px);box-sizing:border-box}.category-one .tab[data-v-31237433]{cursor:pointer;border:%?2?% solid #fff;padding:0 %?20?% 0 %?20?%;color:#333;background:none;display:inline-block;width:auto;font-size:%?28?%;line-height:%?80?%;height:%?80?%}.category-one .tab.active[data-v-31237433]{cursor:pointer;border:%?2?% solid rgba(216,79,169,.19);padding:0 %?20?% 0 %?20?%;color:#d84fa9;background:none;display:inline-block;width:auto;font-size:%?28?%;line-height:%?80?%}.category-two .tab[data-v-31237433]{cursor:pointer;border:%?2?% solid #ccc;padding:0 0 0 0;margin:0 0 %?24?%;color:#333;display:inline-block;font-size:%?28?%;line-height:%?80?%;border-bottom:%?6?% solid #ccc;border-radius:%?20?%;box-shadow:0 %?8?% 0 #eee;background:#f6f6f6;width:100%;text-align:center;height:%?88?%}.category-two .tab.active[data-v-31237433]{cursor:pointer;border:%?2?% solid #ff746d;padding:0 0 0 0;margin:0 0 %?24?%;color:#333;display:inline-block;font-size:%?28?%;line-height:%?80?%;border-bottom:%?6?% solid #ff746d;border-radius:%?20?%;box-shadow:0 %?8?% 0 #eee;background:#fff000;width:100%;text-align:center;height:%?88?%}.category-three .tab[data-v-31237433]{cursor:pointer;padding:0 %?20?%;margin:0 0 %?24?%;color:#333;background:none;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center;height:%?80?%}.category-three .tab.active[data-v-31237433]{cursor:pointer;padding:0 %?20?%;margin:0 0 %?24?%;color:#fff;background:#3da742;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.screenBoxBG[data-v-31237433]{position:fixed;width:100%;height:100%;z-index:665;top:0;left:0;background:rgba(0,0,0,.3)}.screenBox[data-v-31237433]{width:80%;position:fixed;height:100%;right:0;top:0;z-index:666;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;overflow-y:scroll}.screenBox .screenTab[data-v-31237433]{border:%?2?% solid #ddd;border-radius:%?8?%;margin:%?10?% 0 %?10?% 0;color:#666;background:#fff;width:calc(100% / 3 - %?24?%);line-height:%?60?%;text-align:center}.screenBox .screenTabActive[data-v-31237433]{border:%?2?% solid #ddd;border-radius:%?8?%;margin:%?10?% 0 %?10?% 0;color:#333;background:#fff000;width:calc(100% / 3 - %?20?%);line-height:%?60?%;text-align:center}.screenBoxActive[data-v-31237433]{-webkit-transform:translateZ(0);transform:translateZ(0)}',""]),e.exports=t},"41a3":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6"),n("55dd"),n("96cf");var r=i(n("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",screenBoxShow:!1}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{priceChange:function(e){return Number(e).toFixed(2)},preHttp:function(e){return e&&"http"==e.substr(0,4)},queryChange:function(e){this.queryIndex=e.detail.value,this.searchForm.renwumingcheng=""},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var n,i,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={page:t.num,limit:t.size},this.searchForm.renwumingcheng&&(n["renwumingcheng"]="%"+this.searchForm.renwumingcheng+"%"),i={},!this.userid){e.next=9;break}return e.next=6,this.$api.page("shejirenwuwancheng",n);case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,this.$api.list("shejirenwuwancheng",n);case 11:i=e.sent;case 12:for(1==t.num&&(this.list=[]),this.list=this.list.concat(i.data.list),r=Math.ceil(this.list.length/6),a=[],s=0;s<r;s++)a[s]=this.list.slice(6*s,6*(s+1));this.lists=a,0==i.data.list.length&&(this.hasNext=!1),t.endSuccess(t.size,this.hasNext);case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdateTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e))},onAddTap:function(){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var t=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(i){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!i.confirm){n.next=5;break}return n.next=3,t.$api.del("shejirenwuwancheng",JSON.stringify([e]));case 3:t.hasNext=!0,t.mescroll.resetUpScroll();case 5:case"end":return n.stop()}}),n)})));function i(e){return n.apply(this,arguments)}return i}()})},search:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t,n,i,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.mescroll.num=1,t={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.renwumingcheng&&(t["renwumingcheng"]="%"+this.searchForm.renwumingcheng+"%"),n={},!this.userid){e.next=10;break}return e.next=7,this.$api.page("shejirenwuwancheng",t);case 7:n=e.sent,e.next=13;break;case 10:return e.next=12,this.$api.list("shejirenwuwancheng",t);case 12:n=e.sent;case 13:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(n.data.list),i=Math.ceil(this.list.length/6),r=[],a=0;a<i;a++)r[a]=this.list.slice(6*a,6*(a+1));this.lists=r,0==n.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext),this.screenBoxShow=!1;case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=a},"648e":function(e,t,n){"use strict";var i={"mescroll-uni":n("f05e").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"20rpx 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[n("v-uni-view",{style:{padding:"20rpx 0 0 0",alignItems:"center",flex:"1",display:"flex",width:"calc(98% - 120rpx)",position:"relative",justifyContent:"space-between"}},[n("v-uni-view",{style:{backgroundColor:"#f5f5f5",margin:"0 30rpx 0 30rpx",color:"#333333",alignItems:"center",borderRadius:"0px",flex:"1",display:"flex",lineHeight:"64rpx",fontSize:"24rpx",height:"64rpx"}},[n("v-uni-text",{staticClass:"iconfont icon-sousuo1",style:{margin:"0 16rpx 0 16rpx"}}),n("v-uni-input",{style:{background:"transparent",height:"100%"},attrs:{type:"text",placeholder:"任务名称"},model:{value:e.searchForm.renwumingcheng,callback:function(t){e.$set(e.searchForm,"renwumingcheng",t)},expression:"searchForm.renwumingcheng"}})],1),n("v-uni-button",{style:{border:"0px",padding:"0 40rpx 0 40rpx",margin:"0 20rpx 0 0px",borderRadius:"0px",color:"#333",background:"#befaba",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")])],1),n("v-uni-view",{style:{width:"100%",flexWrap:"wrap",background:"#ffffff",justifyContent:"space-between",display:"flex",height:"auto"}},[n("v-uni-view",{staticClass:"uni-product-list",style:{padding:"24rpx 24rpx 24rpx 24rpx",margin:"40rpx 0 0 0",alignItems:"flex-start",flexWrap:"wrap",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},e._l(e.list,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-product",style:{boxShadow:"0 0px 0px #eeeeee",margin:"0 0 40rpx 0",backgroundColor:"#ffffff",borderRadius:"8rpx",flexWrap:"wrap",textAlign:"center",display:"flex",width:"48%",justifyContent:"center",height:"auto"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onDetailTap(t)}}},[n("v-uni-view",{staticClass:"uni-product-title",style:{padding:"0px 20rpx 0px 20rpx",margin:"0 0 0px 0",whiteSpace:"nowrap",color:"#333333",textAlign:"left",overflow:"hidden",borderRadius:"8rpx",width:"100%",lineHeight:"72rpx",fontSize:"28rpx",textOverflow:"ellipsis",order:"2",height:"72rpx"}},[e._v("任务名称:"+e._s(t.renwumingcheng))]),e.preHttp(t.renwutupian)?n("v-uni-image",{staticClass:"uni-product-image",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 0 0px 0",objectFit:"cover",borderRadius:"0px",display:"inline-block",width:"100%",height:"220rpx"},attrs:{mode:"aspectFill",src:t.renwutupian.split(",")[0]}}):n("v-uni-image",{staticClass:"uni-product-image",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 0 0px 0",objectFit:"cover",borderRadius:"0px",display:"inline-block",width:"100%",height:"220rpx"},attrs:{mode:"aspectFill",src:t.renwutupian?e.baseUrl+t.renwutupian.split(",")[0]:""}}),n("v-uni-view",{staticClass:"uni-product-title",style:{padding:"0px 20rpx 0px 20rpx",margin:"0 0 0px 0",whiteSpace:"nowrap",color:"#333333",textAlign:"left",overflow:"hidden",borderRadius:"8rpx",width:"100%",lineHeight:"72rpx",fontSize:"28rpx",textOverflow:"ellipsis",order:"2",height:"72rpx"}},[e._v(e._s(t.xuyaoshijian))]),n("v-uni-view",{style:{padding:"0",margin:"8rpx 0 0 0",display:"flex",width:"100%",justifyContent:"space-between",height:"auto",order:"3"}},[e.userid&&e.isAuth("shejirenwuwancheng","修改")||!e.userid&&e.isAuthFront("shejirenwuwancheng","修改")?n("v-uni-view",{style:{border:"0px solid #dcf8f5",padding:"0px 20rpx 20rpx 20rpx",borderRadius:"60rpx",display:"flex"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.onUpdateTap(t.id)}}},[n("v-uni-text",{staticClass:"iconfont icon-xiugai3",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#5fb959",display:"inline-block"}}),n("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#5fb959",display:"inline-block"}},[e._v("修改")])],1):e._e(),e.userid&&e.isAuth("shejirenwuwancheng","删除")||!e.userid&&e.isAuthFront("shejirenwuwancheng","删除")?n("v-uni-view",{style:{border:"0px solid #f9dede",padding:"0px 20rpx 20rpx 20rpx",borderRadius:"60rpx",display:"flex"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.onDeleteTap(t.id)}}},[n("v-uni-text",{staticClass:"iconfont icon-shanchu4",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#cc0000",display:"inline-block"}}),n("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#cc0000",display:"inline-block"}},[e._v("删除")])],1):e._e()],1)],1)})),1)],1)],1),e.userid&&e.isAuth("shejirenwuwancheng","新增")?n("v-uni-button",{staticClass:"add-btn",style:{border:"0",boxShadow:"0 0px 0px #cccccc",color:"#ffffff",bottom:"120rpx",right:"120rpx",outline:"none",borderRadius:"100%",background:"#3da742",width:"80rpx",lineHeight:"80rpx",fontSize:"26rpx",position:"fixed",height:"80rpx",zIndex:"999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddTap()}}},[e._v("新增")]):e._e(),!e.userid&&e.isAuthFront("shejirenwuwancheng","新增")?n("v-uni-button",{staticClass:"add-btn",style:{border:"0",boxShadow:"0 0px 0px #cccccc",color:"#ffffff",bottom:"120rpx",right:"120rpx",outline:"none",borderRadius:"100%",background:"#3da742",width:"80rpx",lineHeight:"80rpx",fontSize:"26rpx",position:"fixed",height:"80rpx",zIndex:"999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddTap()}}},[e._v("新增")]):e._e()],1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},acb5:function(e,t,n){"use strict";n.r(t);var i=n("648e"),r=n("06a4");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("3429");var s,o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"31237433",null,!1,i["a"],s);t["default"]=c.exports},b875:function(e,t,n){var i=n("3936");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("0d4041e4",i,!0,{sourceMap:!1,shadowMode:!1})}}]);