(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},i={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),i=a.n(o);i.a},"359c":function(t,e,a){},"45d9":function(t,e,a){"use strict";var o=a("920e"),i=a.n(o);i.a},"4ffd":function(t,e,a){t.exports=a.p+"img/logo.30fea7dc.png"},"54f8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var o=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],n=(a("034f"),a("2877")),r={},l=Object(n["a"])(r,i,s,!1,null,null,null),c=l.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout"},[o("div",{staticClass:"container-main"},[o("header",{staticClass:"container-header"},[o("el-menu",{staticClass:"nav-menu",attrs:{"default-active":"home",mode:"horizontal","text-color":"#ffffffaa","active-text-color":"#ffd04baa",router:""}},[o("div",{staticClass:"logo-img"},[o("img",{attrs:{src:a("4ffd"),alt:"logo"}})]),o("el-menu-item",{attrs:{index:"home"}},[t._v("首页")]),o("el-menu-item",{staticClass:"ll",attrs:{index:"control"}},[t._v("控制中心")])],1)],1),o("div",{staticClass:"container-body"},[o("router-view")],1)])])},f=[],h={data:function(){return{var:""}}},m=h,p=(a("974c"),Object(n["a"])(m,u,f,!1,null,"4277eea3",null)),g=p.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h3",{staticClass:"title"},[t._v("5102物联网控制平台")]),a("div",{staticClass:"login-container"},[a("form",{attrs:{action:""},on:{submit:t.login}},[a("ul",{staticClass:"login-check"},[a("li",{staticClass:"login-title"},[t._v("登录")]),a("li",{staticClass:"login-username"},[a("label",{staticClass:"iconfont icon-wo",attrs:{for:"username"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.username,expression:"model.username"}],attrs:{id:"username"},domProps:{value:t.model.username},on:{input:function(e){e.target.composing||t.$set(t.model,"username",e.target.value)}}})]),a("li",{staticClass:"login-password"},[a("label",{staticClass:"iconfont icon-suo",attrs:{for:"password"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],attrs:{id:"password",type:"password"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}})]),t._m(0)])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"login-button"},[a("button",{attrs:{type:"submit"}},[t._v(" NEXT DOOR ")])])}],y={data:function(){return{model:{}}},methods:{login:function(){"mycar"==this.model.username&&"1234"==this.model.password?(sessionStorage.setItem("token","true"),this.$message.success("登录成功！"),this.$router.push("/layout")):this.$message.warning("账号或密码错误！")}}},_=y,b=(a("45d9"),Object(n["a"])(_,w,v,!1,null,"437b6092",null)),x=b.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-main"},[o("div",{staticClass:"main-container"},[t._m(0),o("div",{staticClass:"main-body",staticStyle:{color:"#fff"}},[o("div",{staticClass:"ls-item main-body-top"},[o("i"),o("div",{attrs:{id:"power",title:"电量"}}),o("div",{staticClass:"xuhang"},[o("img",{attrs:{src:a("5ef9"),alt:"续航",title:"续航"}}),t._v(t._s((t.echartsData.res_xuhang/60).toFixed(1))+"小时 ")]),o("div",{staticClass:"zhenglv",attrs:{title:"帧率"}},[o("i",{staticClass:"iconfont icon-frequency",staticStyle:{color:"yellow","padding-right":"10px"}}),t._v(t._s(t.echartsData.frame)+" FPS ")]),o("div",{staticClass:"openImg"},[t._v(" 实时视频 "),o("el-switch",{staticStyle:{display:"block","margin-left":"10px"},model:{value:t.echartsData.on_line,callback:function(e){t.$set(t.echartsData,"on_line",e)},expression:"echartsData.on_line"}})],1)]),o("div",{staticClass:"ls-item img-container"},[o("i"),o("div",{class:t.echartsData.on_line?"online":"offline"},[t._v(" "+t._s(t.echartsData.on_line?"● Live":"● offLine")+" ")]),o("img",{attrs:{id:"imgData"}}),t._m(1)]),o("div",{staticClass:"ls-item main-body-bottom"},[o("i"),o("div",{staticClass:"drag-base"}),o("div",{attrs:{id:"drag-gun"}}),o("div",{attrs:{id:"drag-pointer"}}),o("div",{staticClass:"drag-mask"}),t._m(2),t._m(3),o("el-slider",{staticClass:"duoji-1",attrs:{min:-135,max:135,step:5,"show-tooltip":"","format-tooltip":function(t){return"一维:"+(t<=0?"左旋"+-t:"右旋"+t)+"°"}},on:{change:t.changeDuoji},model:{value:t.echartsData.cur_duoji_1_angle,callback:function(e){t.$set(t.echartsData,"cur_duoji_1_angle",e)},expression:"echartsData.cur_duoji_1_angle"}}),o("el-slider",{staticClass:"duoji-2",attrs:{min:-90,max:90,"show-tooltip":"",vertical:"",step:5,height:"120","format-tooltip":function(t){return"二维:"+(t<=0?"下旋"+-t:"上旋"+t)+"°"}},on:{change:t.changeDuoji},model:{value:t.echartsData.cur_duoji_2_angle,callback:function(e){t.$set(t.echartsData,"cur_duoji_2_angle",e)},expression:"echartsData.cur_duoji_2_angle"}}),t._m(4)],1)]),o("div",{staticClass:"right-aside"},[t._m(5),o("div",{staticClass:"rs-item"},[o("i"),o("div",{staticClass:"camera-state-title"},[t._v("摄像头状态")]),o("div",{staticClass:"camera-state-content"},[o("div",{staticClass:"camera-left"},[o("ul",[o("li",[o("i",{staticClass:"iconfont icon-14"}),t._v("对比度："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_contrast)+" 级")])],1),o("li",[o("i",{staticClass:"iconfont icon-saturation"}),t._v("饱和度："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_saturation)+" 级")])],1),o("li",[o("i",{staticClass:"iconfont icon-heibaipingheng"}),t._v("白平衡："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_light_mode)+" 级")])],1),o("li",[o("i",{staticClass:"iconfont icon-football_name"}),t._v("模式："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_mode?"拍照":"连续"))])],1),o("li",[o("i",{staticClass:"iconfont icon-geshi_tupianjpg"}),t._v("格式："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_workmode?"JPG":"RGB565"))])],1)])]),o("div",{staticClass:"camera-right"},[o("ul",[o("li",[o("i",{staticClass:"iconfont icon-brightj2"}),t._v("亮度："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_brightness)+" 级")])],1),o("li",[o("i",{staticClass:"iconfont icon-texiao"}),t._v("特效："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.camera_effectList[t.echartsData.camera_effect]))])],1),o("li",[o("i",{staticClass:"iconfont icon-puguang"}),t._v("曝光："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_autoexposure_level)+" 级")])],1),o("li",[o("i",{staticClass:"iconfont icon-tiaoxingma"}),t._v("彩条："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.echartsData.camera_color_bar?"开启":"关闭"))])],1),o("li",[o("i",{staticClass:"iconfont icon-quanping_huaban1"}),t._v("尺寸："),o("el-tag",{attrs:{size:"mini",effect:"dark",type:"info"}},[t._v(t._s(t.camera_size[t.echartsData.camera_size]))])],1)])])])]),t._m(6)])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-aside"},[a("div",{staticClass:"ls-item"},[a("i"),a("div",{attrs:{id:"speed-whool"}})]),a("div",{staticClass:"ls-item"},[a("i"),a("div",{attrs:{id:"speed-every"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"downloadImg",attrs:{title:"保存图片"}},[a("i",{staticClass:"iconfont icon-baocuntupian"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"turn-left",attrs:{title:"左旋"}},[a("i",{staticClass:"iconfont icon-zuozhuan"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"turn-right",attrs:{title:"右旋"}},[a("i",{staticClass:"iconfont icon-youzhuan"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"duoji-reset",attrs:{title:"舵机复位"}},[a("i",{staticClass:"iconfont icon-fuwei"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rs-item"},[a("i"),a("div",{attrs:{id:"duoji-angle"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rs-item"},[a("i"),a("div",{attrs:{id:"history-data"}})])}],D=(a("99af"),a("4160"),a("b680"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),z=a("ade3"),E={data:function(){var t={cur_speed_whole:50,cur_speed_angle:50,cur_speed_lq:20,cur_speed_rq:20,cur_speed_lh:20,cur_speed_rh:20,res_power:50,res_xuhang:360,frame:10,on_line:!0,cur_duoji_1_angle:10,cur_duoji_2_angle:10,camera_mode:0,camera_workmode:1,camera_contrast:2,camera_saturation:4,camera_effect:0,camera_autoexposure_level:0,camera_light_mode:4,camera_brightness:3,camera_color_bar:0,camera_size:3,camera_is_abort:0,history_frame:[1,2],history_speed:[1,2]};return{echartsData:t,options:[{backgroundColor:"transparent",title:{show:!0,text:"速度",left:"center",top:"5%",color:"#000000",fontSize:14,width:50,height:20},series:[{type:"gauge",min:0,max:200,startAngle:200,endAngle:-20,center:["50%","60%"],animationDurationUpdate:1e3,itemStyle:{color:"#77ddff",shadowColor:"rgba(0,138,255,0.45)",shadowBlur:10,shadowOffsetX:2,shadowOffsetY:2},progress:{show:!0,width:10,roundCap:!1,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#aaf"},{offset:1,color:"#55f"}],global:!1}}},axisLine:{lineStyle:{width:10}},axisTick:{show:!0},splitLine:{length:10,lineStyle:{width:2,color:"#aaf"}},axisLabel:{distance:20,color:"#999",fontSize:9},pointer:{icon:"path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",length:"80%",width:10,offsetCenter:[0,"5%"]},anchor:{show:!0,showAbove:!0,size:15,itemStyle:{borderWidth:8}},detail:{valueAnimation:!0,fontSize:20,color:"#bbbbff",offsetCenter:["20%","60%"],formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|cm/s}"},rich:{value:{fontSize:30,fontWeight:"bolder",color:"#eee"},unit:{fontSize:14,color:"#aaa",padding:[0,0,-10,10]}}},data:[{value:t.cur_speed_whole}]}]},{backgroundColor:"transparent",series:[{name:"左前轮",type:"gauge",color:["#f00"],min:-180,max:180,splitNumber:6,radius:"40%",animationDurationUpdate:1e3,center:["28%","28%"],axisLine:{lineStyle:{width:5,color:[[.5,"#ee5511"],[1,"#1155ee"]],shadowColor:"#7f7f7f",shadowBlur:2},backgroundColor:"none"},axisTick:{length:5,lineStyle:{color:"auto"},distance:1},splitLine:{length:3,lineStyle:{color:"rgba(255,255,255,0.7)"},distance:1},axisLabel:{borderRadius:1,color:"rgba(255,255,255,0.7)",padding:1,distance:10,fontSize:8},title:{fontSize:10,fontColor:"#FFF",color:"#FFF",paddingTop:5,offsetCenter:[0,"95%"]},itemStyle:{color:"#1092ff"},detail:Object(z["a"])({shadowOffsetX:0,shadowOffsetY:0,textBorderColor:"#000",textBorderWidth:1,textShadowBlur:1,textShadowColor:"#fff",textShadowOffsetX:0,textShadowOffsetY:0,paddingTop:5,fontFamily:"digital",fontSize:12,width:15,color:"#fff",rich:{},offsetCenter:[10,"70%"],formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|cm/s}"}},"rich",{value:{fontSize:12,fontWeight:"bolder",color:"#eee"},unit:{fontSize:8,color:"#eee",padding:[0,0,-2,5]}}),data:[{value:t.cur_speed_lq,name:"左前轮"}]},{name:"右前轮",type:"gauge",color:["#f00"],min:-180,max:180,splitNumber:6,radius:"40%",animationDurationUpdate:1e3,center:["72%","28%"],axisLine:{lineStyle:{width:5,color:[[.5,"#ee5511"],[1,"#1155ee"]],shadowColor:"#7f7f7f",shadowBlur:2},backgroundColor:"none"},axisTick:{length:5,lineStyle:{color:"auto"},distance:1},splitLine:{length:3,lineStyle:{color:"rgba(255,255,255,0.7)"},distance:1},axisLabel:{borderRadius:1,color:"rgba(255,255,255,0.7)",padding:1,distance:10,fontSize:8},title:{fontSize:10,fontColor:"#FFF",color:"#FFF",paddingTop:5,offsetCenter:[0,"95%"]},itemStyle:{color:"#1092ff"},detail:Object(z["a"])({shadowOffsetX:0,shadowOffsetY:0,textBorderColor:"#000",textBorderWidth:1,textShadowBlur:1,textShadowColor:"#fff",textShadowOffsetX:0,textShadowOffsetY:0,paddingTop:5,fontFamily:"digital",fontSize:12,width:15,color:"#fff",rich:{},offsetCenter:[10,"70%"],formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|cm/s}"}},"rich",{value:{fontSize:12,fontWeight:"bolder",color:"#eee"},unit:{fontSize:8,color:"#eee",padding:[0,0,-2,5]}}),data:[{value:t.cur_speed_rq,name:"右前轮"}]},{name:"左后轮",type:"gauge",color:["#f00"],min:-180,max:180,splitNumber:6,radius:"40%",animationDurationUpdate:1e3,center:["28%","75%"],axisLine:{lineStyle:{width:5,color:[[.5,"#ee5511"],[1,"#1155ee"]],shadowColor:"#7f7f7f",shadowBlur:2},backgroundColor:"none"},axisTick:{length:5,lineStyle:{color:"auto"},distance:1},splitLine:{length:3,lineStyle:{color:"rgba(255,255,255,0.7)"},distance:1},axisLabel:{borderRadius:1,color:"rgba(255,255,255,0.7)",padding:1,distance:10,fontSize:8},title:{fontSize:10,fontColor:"#FFF",color:"#FFF",paddingTop:5,offsetCenter:[0,"95%"]},itemStyle:{color:"#1092ff"},detail:Object(z["a"])({shadowOffsetX:0,shadowOffsetY:0,textBorderColor:"#000",textBorderWidth:1,textShadowBlur:1,textShadowColor:"#fff",textShadowOffsetX:0,textShadowOffsetY:0,paddingTop:5,fontFamily:"digital",fontSize:12,width:15,color:"#fff",rich:{},offsetCenter:[10,"70%"],formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|cm/s}"}},"rich",{value:{fontSize:12,fontWeight:"bolder",color:"#eee"},unit:{fontSize:8,color:"#eee",padding:[0,0,-2,5]}}),data:[{value:t.cur_speed_lh,name:"左后轮"}]},{name:"右后轮",type:"gauge",color:["#f00"],min:-180,max:180,splitNumber:6,radius:"40%",animationDurationUpdate:1e3,center:["72%","75%"],axisLine:{lineStyle:{width:5,color:[[.5,"#ee5511"],[1,"#1155ee"]],shadowColor:"#7f7f7f",shadowBlur:2},backgroundColor:"none"},axisTick:{length:5,lineStyle:{color:"auto"},distance:1},splitLine:{length:3,lineStyle:{color:"rgba(255,255,255,0.7)"},distance:1},axisLabel:{borderRadius:1,color:"rgba(255,255,255,0.7)",padding:1,distance:10,fontSize:8},title:{fontSize:10,fontColor:"#FFF",color:"#FFF",paddingTop:5,offsetCenter:[0,"95%"]},itemStyle:{color:"#1092ff"},detail:Object(z["a"])({shadowOffsetX:0,shadowOffsetY:0,textBorderColor:"#000",textBorderWidth:1,textShadowBlur:1,textShadowColor:"#fff",textShadowOffsetX:0,textShadowOffsetY:0,paddingTop:5,fontFamily:"digital",fontSize:12,width:15,color:"#fff",rich:{},offsetCenter:[10,"70%"],formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|cm/s}"}},"rich",{value:{fontSize:12,fontWeight:"bolder",color:"#eee"},unit:{fontSize:8,color:"#eee",padding:[0,0,-2,5]}}),data:[{value:t.cur_speed_rh,name:"右后轮"}]}]},{backgroundColor:"transparent",title:{show:!0,text:"舵机角度",left:"center",top:"5%",color:"#000000",fontSize:12,width:50,height:20},series:[{type:"gauge",radius:"50%",center:["30%","55%"],min:135,max:-135,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:40,color:[[1,new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5098ed88"},{offset:1,color:"#5098ed08"}])]]}},axisTick:{show:!0,splitNumber:2,length:5,distance:-45},splitLine:{show:!1},axisLabel:{show:!0,fontSize:6,distance:-35},pointer:{show:!1},detail:{show:!1}},{type:"gauge",radius:"50%",center:["30%","55%"],min:135,max:-135,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:3,color:[[0,"#00FCF7"],[1,"#5098cc"]]}},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{type:"gauge",animationDurationUpdate:1e3,radius:"20%",center:["30%","55%"],min:135,max:-135,startAngle:225,endAngle:-45,axisLine:{show:!1},pointer:{show:!0,icon:"roundRect",length:"220%",width:"10",offsetCenter:[0,0]},anchor:{show:!0,showAbove:!0,size:10,itemStyle:{color:"#5098aa"},icon:"circle"},itemStyle:{color:"rgba(0,255,255,0.3)"},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!0,offsetCenter:["20%","140%"],fontSize:"8",color:"#08b5d6",formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|°}"},rich:{value:{fontSize:12,fontWeight:"bolder",color:"#eee"},unit:{fontSize:10,color:"#eee",padding:[0,0,2,3]}}},data:[{value:t.cur_duoji_1_angle,name:"一维舵机"}],title:{fontSize:10,fontColor:"#FFF",color:"#FFF",paddingTop:5,offsetCenter:[0,"220%"]}},{type:"gauge",radius:"50%",center:["75%","55%"],min:90,max:-90,startAngle:270,endAngle:90,axisLine:{show:!0,lineStyle:{width:40,color:[[1,new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5098ed38"},{offset:.5,color:"#5098ed88"},{offset:1,color:"#5098ed38"}])]]}},axisTick:{show:!0,splitNumber:2,length:5,distance:-45},splitLine:{show:!1},axisLabel:{show:!0,fontSize:6,distance:-35},pointer:{show:!1},detail:{show:!1}},{type:"gauge",radius:"50%",center:["75%","55%"],min:90,max:-90,startAngle:270,endAngle:90,axisLine:{show:!0,lineStyle:{width:3,color:[[0,"#00FCF7"],[1,"#5098cc"]]}},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{type:"gauge",animationDurationUpdate:1e3,radius:"20%",center:["75%","55%"],min:90,max:-90,startAngle:270,endAngle:90,axisLine:{show:!1},pointer:{show:!0,icon:"roundRect",length:"220%",width:"10",offsetCenter:[0,0]},anchor:{show:!0,showAbove:!0,size:10,itemStyle:{color:"#5098aa"},icon:"circle"},itemStyle:{color:"rgba(0,255,255,0.3)"},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!0,offsetCenter:["140%","0%"],fontSize:"8",color:"#08b5d6",formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|°}"},rich:{value:{fontSize:12,fontWeight:"bolder",color:"#eee"},unit:{fontSize:10,color:"#eee",padding:[0,0,2,3]}}},data:[{value:t.cur_duoji_2_angle,name:"二维舵机"}],title:{fontSize:10,fontColor:"#FFF",color:"#FFF",paddingTop:5,offsetCenter:["140%","80%"]}}]},{backgroundColor:"transparent",animationDurationUpdate:1e3,tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:30,bottom:50,textStyle:{color:"#fff"}},legend:{x:"60%",top:"5%",textStyle:{color:"#90979c"},data:["帧率","速度"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"rgba(204,187,225,0.5)"}},splitLine:{show:!1},axisTick:{show:!1},data:[1,2,3,4,5,6,7,8,9,10]}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"rgba(204,187,225,0.5)"}}}],dataZoom:[{show:!0,height:20,xAxisIndex:[0],bottom:10,start:0,end:100,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#5B3AAE"},textStyle:{color:"rgba(204,187,225,0.5)"},fillerColor:"rgba(67,55,160,0.4)",borderColor:"rgba(204,187,225,0.5)"},{type:"inside",show:!0,height:20,start:0,end:100}],series:[{name:"帧率",type:"line",symbolSize:6,symbol:"circle",itemStyle:{color:"#6f7de3"},data:[{value:t.history_frame}]},{name:"速度",type:"line",symbolSize:6,symbol:"circle",itemStyle:{color:"#c257F6"},data:[{value:t.history_speed}]}]},{backgroundColor:"transparent",xAxis:{max:100,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},grid:{left:20,top:45,width:80,bottom:40},yAxis:[{type:"category",inverse:!1,data:[{name:"剩余电量",value:t.res_power}],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",barWidth:13,silent:!0,itemStyle:{normal:{color:"#1588D1"}},data:[{name:"剩余电量",value:t.res_power}],z:1,animationEasing:"elasticOut"},{type:"pictorialBar",itemStyle:{normal:{color:"#07314a"}},symbolRepeat:"fixed",symbolMargin:1,symbol:"rect",symbolClip:!0,symbolSize:[2,14],symbolPosition:"start",symbolOffset:[2,-2],symbolBoundingData:100,data:[100],z:2,animationEasing:"elasticOut"},{type:"pictorialBar",symbolBoundingData:100,itemStyle:{normal:{color:"none"}},label:{normal:{formatter:function(t){return"{f| "+t.data+"%}"},rich:{f:{color:"#eee"}},position:"right",distance:10,show:!0}},data:[t.res_power],z:0},{name:"外框",type:"bar",barGap:"-130%",data:[100],barWidth:20,itemStyle:{normal:{barBorderRadius:[2,2,2,2],color:"transparent",barBorderColor:"#1588D1",barBorderWidth:3}},z:0},{type:"scatter",name:"条形",symbol:"roundRect",symbolSize:[5,10],symbolOffset:[2,-2],symbolKeepAspect:!0,itemStyle:{normal:{color:"#1588D1"}},data:[100]}]}],camera_effectList:["正常","负片","黑白","偏红色","偏绿色","偏蓝色","复古"],camera_size:["160*120","176*144","320*240","400*240","352*288","640*480","800*600","1024*768","1280*800","1280*960","1440*900","1280*1024","1600*1200"],els:[],myEcharts:[],wss:null,isDrag:!1,dragEl:null,gunEl:null,maxDistance:50,statesData:null,DeviceName:"test2",ProductId:"K8LG8U17CW",clientToken:"",pingTimeout:0}},watch:{echartsData:{handler:"putEchartsData",deep:!0,immediate:!0}},mounted:function(){this.mapElementToEcharts(),this.drawAllEcharts(),this.openWebSocket(),this.initDrag()},befordistory:function(){this.wss.close(),this.wss=null,this.els=null,this.myEcharts=null},methods:{postChangeDuoji:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.put("/putProps",{Payload:JSON.stringify({clientToken:t.clientToken,method:"control",params:{cur_duoji_1_angle:t.echartsData.cur_duoji_1_angle,cur_duoji_2_angle:t.echartsData.cur_duoji_2_angle}}),DeviceName:t.DeviceName,ProductId:t.ProductId,Topic:"$thing/down/property/".concat(t.ProductId,"/").concat(t.DeviceName)});case 3:a=e.sent,console.log(a),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:console.log(a);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},changeDuoji:function(){this.postChangeDuoji()},setRotate:function(t,e,a){t>=0&&e>=0?this.gunEl.style.transform="rotate(".concat(180*a/Math.PI,"deg)"):t<=0&&e<=0?this.gunEl.style.transform="rotate(".concat(180*(Math.PI+a)/Math.PI,"deg)"):t<=0&&e>=0?this.gunEl.style.transform="rotate(".concat(180*(Math.PI-a)/Math.PI,"deg)"):t>=0&&e<=0&&(this.gunEl.style.transform="rotate(".concat(180*-a/Math.PI,"deg)"))},getDegree:function(t,e,a,o){return Math.abs(Math.atan((o-e)/(a-t)))},getDistance:function(t,e,a,o){var i=Math.abs(e-o),s=Math.abs(t-a);return i/Math.sin(Math.atan(i/s))||s},initDrag:function(){var t=this;this.dragEl=document.getElementById("drag-pointer"),this.gunEl=document.getElementById("drag-gun");var e,a,o,i,s,n,r=this.dragEl.offsetLeft,l=this.dragEl.offsetTop;e=a=o=i=s=n=0,this.dragEl.addEventListener("mousedown",(function(o){t.isDrag=!0,e=o.pageX,a=o.pageY})),this.dragEl.parentElement.addEventListener("mouseup",(function(e){t.isDrag=!1,t.dragEl.style.left=r+"px",t.dragEl.style.top=l+"px",t.gunEl.style.width="0px"})),document.body.addEventListener("mousemove",(function(c){if(t.isDrag){var d=c.pageX,u=c.pageY;s=t.getDegree(e,a,d,u),n=t.getDistance(e,a,d,u),n>t.maxDistance?(n=t.maxDistance,o=Math.cos(s)*(d>e?t.maxDistance:-t.maxDistance),i=Math.sin(s)*(u>a?t.maxDistance:-t.maxDistance)):(o=d-e,i=u-a),t.setRotate(o,i,s),t.gunEl.style.width=n+5+"px",t.dragEl.style.left=r+o+"px",t.dragEl.style.top=l+i+"px"}}))},putEchartsData:function(){if(this.statesData)for(var t in this.options[0].series[0].data[0].value=this.echartsData.cur_speed_whole,this.options[1].series[0].data[0].value=this.echartsData.cur_speed_lq,this.options[1].series[1].data[0].value=this.echartsData.cur_speed_rq,this.options[1].series[2].data[0].value=this.echartsData.cur_speed_lh,this.options[1].series[3].data[0].value=this.echartsData.cur_speed_rh,this.options[2].series[2].data[0].value=-this.echartsData.cur_duoji_1_angle,this.options[2].series[5].data[0].value=-this.echartsData.cur_duoji_2_angle,this.options[3].series[0].data[0].value=this.echartsData.history_frame,this.options[3].series[1].data[0].value=this.echartsData.history_speed,this.options[4].yAxis[0].data[0].value=this.echartsData.res_power,this.options[4].series[0].data[0].value=this.echartsData.res_power,this.options[4].series[2].data[0]=this.echartsData.res_power,this.els)this.myEcharts[t].setOption(this.options[t])},openWebSocket:function(){var t=this,e=0,a=0;this.wss=new WebSocket("wss://wlw.5102it.cn/websocket");var o=function(){clearTimeout(t.pingTimeout),t.pingTimeout=setTimeout((function(){t.wss.terminate()}),31e3)};this.wss.onopen=function(){o(),console.log("ws：连接建立")},this.wss.onping=function(){o(),console.log("ws：ping")},this.wss.onmessage=function(o){if("string"===typeof o.data)t.statesData=JSON.parse(o.data).data,t.clientToken=t.statesData.payload.clientToken,Object.assign(t.echartsData,t.statesData.payload.params),console.log(t.statesData.payload.params);else{Date.now()-a>1e3?(a=Date.now(),t.frame=e,e=0):e++;var i=URL.createObjectURL(o.data);document.getElementById("imgData").src=i}},this.wss.onerror=function(t){console.log("ws：连接出错")},this.wss.onclose=function(e,a){clearTimeout(t.pingTimeout),console.log("ws：连接关闭"),setTimeout((function(){console.log("ws：重试中..."),t.openWebSocket()}),1e3)}},mapElementToEcharts:function(){this.els.push(document.getElementById("speed-whool")),this.els.push(document.getElementById("speed-every")),this.els.push(document.getElementById("duoji-angle")),this.els.push(document.getElementById("history-data")),this.els.push(document.getElementById("power"))},drawAllEcharts:function(){var t=this;for(var e in this.els){var a=this.$echarts.init(this.els[e],"dark");a.setOption(this.options[e]),this.myEcharts.push(a)}window.onresize=function(e){t.myEcharts.forEach((function(t){return t.resize()}))}}}},O=E,j=(a("587e"),Object(n["a"])(O,C,S,!1,null,"3d8efc2e",null)),L=j.exports;o["default"].use(d["a"]);var k=[{path:"/login",name:"login",component:x,meta:{isPublic:!0}},{path:"/",name:"main",redirect:"/home"},{path:"/layout",name:"layout",component:g,children:[{path:"/home",name:"home",component:L}]}],A=new d["a"]({routes:k});A.beforeEach((function(t,e,a){a()}));var B=A,F=(a("0fae"),a("9e2f")),T=a.n(F);a("c69f");o["default"].use(T.a);a("6672");var M=a("bc3a"),I=a.n(M),W=a("313e");o["default"].prototype.$echarts=W,o["default"].config.productionTip=!1,o["default"].prototype.$http=I.a.create({baseURL:"https://wlw.5102it.cn"}),new o["default"]({router:B,render:function(t){return t(c)}}).$mount("#app")},"587e":function(t,e,a){"use strict";var o=a("359c"),i=a.n(o);i.a},"5ef9":function(t,e){t.exports="data:image/png;base64,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"},6672:function(t,e,a){},"85ec":function(t,e,a){},"920e":function(t,e,a){},"974c":function(t,e,a){"use strict";var o=a("54f8"),i=a.n(o);i.a},c69f:function(t,e,a){}});