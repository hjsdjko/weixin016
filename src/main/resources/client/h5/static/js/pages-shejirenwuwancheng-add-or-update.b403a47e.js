(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shejirenwuwancheng-add-or-update"],{"108d":function(e,r,i){"use strict";i.r(r);var n=i("988a"),t=i("f7de");for(var o in t)"default"!==o&&function(e){i.d(r,e,(function(){return t[e]}))}(o);i("53c2");var a,s=i("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"5412c80a",null,!1,n["a"],a);r["default"]=u.exports},3644:function(e,r,i){var n=i("b2cf");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var t=i("4f06").default;t("6804b3f4",n,!0,{sourceMap:!1,shadowMode:!1})},"53c2":function(e,r,i){"use strict";var n=i("3644"),t=i.n(n);t.a},"78c2":function(e,r,i){"use strict";var n=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("a481"),i("c5f6"),i("f559"),i("456d"),i("ac6a"),i("28a5"),i("96cf");var t=n(i("3b8d")),o=n(i("e2b1")),a=n(i("064f")),s=n(i("bd56")),u={data:function(){return{cross:"",ruleForm:{renwumingcheng:"",renwutupian:"",renwuleixing:"",xuyaoshijian:"",yonghuxingming:"",yonghuzhanghao:"",shejishizhanghao:"",shejishixingming:"",wanchengshijian:""},user:{},ro:{renwumingcheng:!1,renwutupian:!1,renwuleixing:!1,xuyaoshijian:!1,yonghuxingming:!1,yonghuzhanghao:!1,shejishizhanghao:!1,shejishixingming:!1,wanchengshijian:!1}}},components:{wPicker:o.default,xiaEditor:a.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(r){var i,n,t,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.shejishizhanghao=this.user.yonghuzhanghao,this.ro.shejishizhanghao=!0,this.ruleForm.shejishixingming=this.user.yonghuxingming,this.ro.shejishixingming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=21;break}return this.ruleForm.id=r.id,e.next=19,this.$api.info("shejirenwuwancheng",this.ruleForm.id);case 19:n=e.sent,this.ruleForm=n.data;case 21:if(this.cross=r.cross,!r.cross){e.next=65;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 25:if((e.t1=e.t0()).done){e.next=65;break}if(o=e.t1.value,"renwumingcheng"!=o){e.next=31;break}return this.ruleForm.renwumingcheng=t[o],this.ro.renwumingcheng=!0,e.abrupt("continue",25);case 31:if("renwutupian"!=o){e.next=35;break}return this.ruleForm.renwutupian=t[o].split(",")[0],this.ro.renwutupian=!0,e.abrupt("continue",25);case 35:if("renwuleixing"!=o){e.next=39;break}return this.ruleForm.renwuleixing=t[o],this.ro.renwuleixing=!0,e.abrupt("continue",25);case 39:if("xuyaoshijian"!=o){e.next=43;break}return this.ruleForm.xuyaoshijian=t[o],this.ro.xuyaoshijian=!0,e.abrupt("continue",25);case 43:if("yonghuxingming"!=o){e.next=47;break}return this.ruleForm.yonghuxingming=t[o],this.ro.yonghuxingming=!0,e.abrupt("continue",25);case 47:if("yonghuzhanghao"!=o){e.next=51;break}return this.ruleForm.yonghuzhanghao=t[o],this.ro.yonghuzhanghao=!0,e.abrupt("continue",25);case 51:if("shejishizhanghao"!=o){e.next=55;break}return this.ruleForm.shejishizhanghao=t[o],this.ro.shejishizhanghao=!0,e.abrupt("continue",25);case 55:if("shejishixingming"!=o){e.next=59;break}return this.ruleForm.shejishixingming=t[o],this.ro.shejishixingming=!0,e.abrupt("continue",25);case 59:if("wanchengshijian"!=o){e.next=63;break}return this.ruleForm.wanchengshijian=t[o],this.ro.wanchengshijian=!0,e.abrupt("continue",25);case 63:e.next=25;break;case 65:this.styleChange(),this.$forceUpdate();case 67:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#666"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#666"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #5fb959",borderRadius:"0",color:"#fff",background:"#5fb959"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #5fb959",color:"#fff",borderRadius:"0",background:"#5fb959"};Object.keys(r).forEach((function(i){e.style[i]=r[i]}))}))}))},xuyaoshijianConfirm:function(e){console.log(e),this.ruleForm.xuyaoshijian=e.result,this.$forceUpdate()},wanchengshijianConfirm:function(e){console.log(e),this.ruleForm.wanchengshijian=e.result,this.$forceUpdate()},renwutupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.renwutupian="file/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var r,i,n,t,o,a,s,u,l,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.renwumingcheng){e.next=3;break}return this.$utils.msg("任务名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.renwuleixing){e.next=6;break}return this.$utils.msg("任务类型不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xuyaoshijian){e.next=9;break}return this.$utils.msg("需要时间不能为空"),e.abrupt("return");case 9:if(!this.cross){e.next=26;break}if(uni.setStorageSync("crossCleanType",!0),o=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==o){e.next=26;break}if(r||(r=uni.getStorageSync("crossObj")),o.startsWith("[")){e.next=22;break}for(s in r)s==o&&(r[s]=a);return u=uni.getStorageSync("crossTable"),e.next=20,this.$api.update("".concat(u),r);case 20:e.next=26;break;case 22:i=Number(uni.getStorageSync("userid")),n=r["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 26:if(!n||!i){e.next=49;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=n,l={page:1,limit:10,crossuserid:i,crossrefid:n},e.next=32,this.$api.list("shejirenwuwancheng",l);case 32:if(h=e.sent,!(h.data.total>=t)){e.next=39;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 39:if(!this.ruleForm.id){e.next=44;break}return e.next=42,this.$api.update("shejirenwuwancheng",this.ruleForm);case 42:e.next=46;break;case 44:return e.next=46,this.$api.add("shejirenwuwancheng",this.ruleForm);case 46:this.$utils.msgBack("提交成功");case 47:e.next=57;break;case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("shejirenwuwancheng",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("shejirenwuwancheng",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),n=r.getMonth()+1,t=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(i,"-").concat(n,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};r.default=u},"988a":function(e,r,i){"use strict";var n={"w-picker":i("e2b1").default},t=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("任务名称")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.renwumingcheng,placeholder:"任务名称"},model:{value:e.ruleForm.renwumingcheng,callback:function(r){e.$set(e.ruleForm,"renwumingcheng",r)},expression:"ruleForm.renwumingcheng"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.renwutupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("任务图片")]),e.ruleForm.renwutupian?i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.renwutupian.split(",")[0],mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("任务类型")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.renwuleixing,placeholder:"任务类型"},model:{value:e.ruleForm.renwuleixing,callback:function(r){e.$set(e.ruleForm,"renwuleixing",r)},expression:"ruleForm.renwuleixing"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("需要时间")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{placeholder:"需要时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("xuyaoshijian")}},model:{value:e.ruleForm.xuyaoshijian,callback:function(r){e.$set(e.ruleForm,"xuyaoshijian",r)},expression:"ruleForm.xuyaoshijian"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户姓名")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(r){e.$set(e.ruleForm,"yonghuxingming",r)},expression:"ruleForm.yonghuxingming"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户账号")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(r){e.$set(e.ruleForm,"yonghuzhanghao",r)},expression:"ruleForm.yonghuzhanghao"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("设计师账号")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.shejishizhanghao,placeholder:"设计师账号"},model:{value:e.ruleForm.shejishizhanghao,callback:function(r){e.$set(e.ruleForm,"shejishizhanghao",r)},expression:"ruleForm.shejishizhanghao"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("设计师姓名")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.shejishixingming,placeholder:"设计师姓名"},model:{value:e.ruleForm.shejishixingming,callback:function(r){e.$set(e.ruleForm,"shejishixingming",r)},expression:"ruleForm.shejishixingming"}})],1),i("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("完成时间")]),i("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{placeholder:"完成时间"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.toggleTab("wanchengshijian")}},model:{value:e.ruleForm.wanchengshijian,callback:function(r){e.$set(e.ruleForm,"wanchengshijian",r)},expression:"ruleForm.wanchengshijian"}})],1),i("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#fff",borderRadius:"60rpx",background:"#d84fa9",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"xuyaoshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.xuyaoshijianConfirm.apply(void 0,arguments)}}}),i("w-picker",{ref:"wanchengshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.wanchengshijianConfirm.apply(void 0,arguments)}}})],1)],1)},o=[];i.d(r,"b",(function(){return t})),i.d(r,"c",(function(){return o})),i.d(r,"a",(function(){return n}))},b2cf:function(e,r,i){var n=i("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-5412c80a]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},f7de:function(e,r,i){"use strict";i.r(r);var n=i("78c2"),t=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(r,e,(function(){return n[e]}))}(o);r["default"]=t.a}}]);