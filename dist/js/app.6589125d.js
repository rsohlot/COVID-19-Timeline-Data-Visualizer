(function(t){function a(a){for(var n,i,o=a[0],c=a[1],l=a[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(n=!1)}n&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},s=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1097:function(t,a,e){"use strict";var n=e("3f84"),r=e.n(n);r.a},"1bdf":function(t,a,e){},"3f84":function(t,a,e){},4678:function(t,a,e){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var a=s(t);return e(a)}function s(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="4678"},5122:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.dataUk?e("div",{staticClass:"mContent"},[t._m(0),e("div",{staticClass:"title"},[t._v("今日概览")]),e("div",{staticClass:"overview mBlock"},[e("div",{staticClass:"overview_item",staticStyle:{color:"#ff5151"}},[e("div",{staticClass:"overview_title"},[t._v("累计确诊")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].confirmed}})],1),e("div",{staticClass:"daily-increase"},[t._v(t._s("+"+t.dataUk.regional.dailyConfirmed))])]),e("div",{staticClass:"overview_item",staticStyle:{color:"#575757"}},[e("div",{staticClass:"overview_title"},[t._v("累计死亡")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].death}})],1),e("div",{staticClass:"daily-increase"},[t._v(t._s("+"+(t.todayData.death-t.yestData.death)))])]),e("div",{staticClass:"overview_item",staticStyle:{color:"#0094b9"}},[e("div",{staticClass:"overview_title"},[t._v("累计测试")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].tested}})],1),e("div",{staticClass:"daily-increase"},[t._v(" "+t._s("+"+(t.todayData.tested-t.yestData.tested))+" ")])]),e("div",{staticClass:"overview_item",staticStyle:{color:"#28ca00"}},[e("div",{staticClass:"overview_title"},[t._v("累计治愈")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[1].cured}})],1),e("div",{staticClass:"daily-increase"},[t._v(t._s("+"+(t.todayData.cured-t.yestData.cured)))])])]),e("div",{staticClass:"title"},[t._v("国家概览")]),e("div",{staticClass:"overview mBlock"},[e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("英格兰")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].england}})],1),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUk.regional.englandDeceased))])]),e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("苏格兰")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].scotland}})],1),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUk.regional.scottlandDeceased))])]),e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("威尔士")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].wales}})],1),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUk.regional.walesDeceased))])]),e("div",{staticClass:"overview_item"},[e("div",{staticClass:"overview_title"},[t._v("北爱尔兰")]),e("div",{staticClass:"overview_number"},[e("ICountUp",{attrs:{endVal:t.dataUk.now[0].nireland}})],1),e("div",{staticClass:"country-death"},[t._v(t._s(t.dataUk.regional.northenIrelandDeceased))])])]),e("div",[e("div",{staticClass:"title"},[t._v("查询周边确诊")]),e("div",{staticClass:"mBlock"},[e("NearbyCasesFinder",{attrs:{regionData:t.sortedRegionData}})],1)]),e("div",{ref:"navPlaceholder",attrs:{id:"navPlaceholder"}}),e("div",{ref:"nav",staticClass:"mNav",attrs:{id:"mNavbar"}},[e("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active",value:{selector:"li a",class:"active",offset:500},expression:"{selector: 'li a', class: 'active', offset: 500}"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],staticClass:"nav nav-pills nav-fill"},[t._m(1),t._m(2),t._m(3)])]),e("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy",value:{data:"section"},expression:"{data: 'section'}"}]},[e("div",{staticClass:"mSection",staticStyle:{"padding-top":"0"},attrs:{id:"charts"}},[e("div",{staticClass:"title"},[t._v("确诊及死亡")]),e("Chart",{attrs:{id:"confirmedAndDeathChart1",type:"area",dataHistory:t.dataUk.history,seriesData:t.confirmedAndDeathChart1}}),e("div",{staticClass:"title"},[t._v("新增死亡")]),e("Chart",{attrs:{id:"deathChart2",type:"bar",stacked:!0,dataHistory:t.dataUk.history,seriesData:t.deathChart2,colors:["#c40000","#3d000d","#2c9100"]}}),e("div",{staticClass:"title"},[t._v("死亡率及治愈率")]),e("Chart",{attrs:{id:"rateChart3",type:"area",dataHistory:t.dataUk.history,seriesData:t.rateChart3,colors:["#ca0011","#0088ff"]}})],1),e("div",{staticClass:"mSection",attrs:{id:"animation"}},[e("div",{staticClass:"title"},[t._v("历史确诊数据动画")]),t.barRaceData.hasData?e("BarRaceSection",{attrs:{"bar-race-data":t.barRaceData}}):t._e()],1),e("div",{staticClass:"mSection",attrs:{id:"regionData"}},[e("div",{staticClass:"title"},[t._v("地区列表")]),e("RegionTable",{attrs:{dataNow:t.dataUk.now,dataYesterday:t.dataUk.history[t.dataUk.history.length-1]},on:{onRegionalDataSorted:function(a){t.sortedRegionData=a}}})],1)]),t._m(4)]):e("div",[t._m(5)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"covid_header"},[e("h2",[t._v("COVID-19")]),e("h3",[t._v("实时数据动态")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#charts"}},[t._v("当前数据")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#animation"}},[t._v("数据动画")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#regionData"}},[t._v("地图列表")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"mSection"},[n("br"),n("div",{staticClass:"title"},[t._v("数据来源")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/isjeffcom/coronvirusFigureUK"}},[t._v("Coronavirus UK Data API - isjeffcom")])]),n("li",[n("a",{attrs:{href:"https://github.com/CSSEGISandData/COVID-19"}},[t._v("COVID-19 Data Repository - Johns Hopkins CSSE")])]),n("li",[t._v("感谢 "),n("a",{attrs:{href:"https://github.com/isjeffcom/"}},[t._v("@isjeff")]),t._v(" 提供的英国数据API")])]),n("div",{staticClass:"title"},[t._v("关于")]),n("ul",[n("li",[t._v("本应用开源于 "),n("a",{attrs:{href:"https://github.com/henryz00/COVID-19-Data-Visualizer-UK"}},[t._v("Github Repository")]),t._v("，欢迎提供任何建议及贡献！")]),n("li",[t._v("© 2020 "),n("a",{attrs:{href:"https://github.com/henryz00"}},[t._v("@henryz00")]),t._v(" and "),n("a",{attrs:{href:"https://github.com/DaviesXue"}},[t._v("@DaviesXue")]),t._v(" for UCLCSSA.")])]),n("div",{staticStyle:{"text-align":"center",margin:"50px 0"}},[n("img",{staticStyle:{"max-width":"200px","text-align":"center",opacity:"0.5"},attrs:{src:e("f529")}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vertical-center"},[e("div",{staticClass:"spinner-border text-primary",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],i=(e("d81d"),e("d3b7"),e("96cf"),e("c964")),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock"},[e("div",{staticClass:"btn-group-wrap"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:-7===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-7,!0)}}},[t._v(" 一周内 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-14===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-14,!0)}}},[t._v(" 两周内 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:-31===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(-31,!1)}}},[t._v(" 一个月内 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:0===t.range},attrs:{type:"button"},on:{click:function(a){return t.updateRange(0,!1)}}},[t._v(" 全部数据 ")])])]),e("VueApexCharts",{attrs:{width:"100%",type:t.type,options:t.options,series:t.series}})],1)},c=[],l=(e("fb6a"),e("1321")),u=e.n(l),d={name:"Chart",components:{VueApexCharts:u.a},props:{seriesData:Array,dataHistory:Array,id:String,type:String,colors:Array,stacked:Boolean},data:function(){return{showLabel:!1,range:-31}},methods:{updateRange:function(t,a){this.range=t,this.showLabel=a}},computed:{series:function(){var t=this;return this.seriesData.map((function(a){return a.originalData=a.originalData?a.originalData:a.data,a.data=a.originalData.slice(t.range),a}))},options:function(){return{chart:{id:this.id,height:350,type:this.type?this.type:"line",stacked:this.stacked,zoom:{enabled:window.innerWidth>800}},colors:this.colors?this.colors:["#ff0000","#3d0707"],dataLabels:{enabled:this.showLabel,textAnchor:"middle",dropShadow:{enabled:!0},style:{fontSize:"12px"}},stroke:{curve:"smooth"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"datetime",categories:this.dataHistory.map((function(t){return t.date})).slice(this.range),labels:{format:"dd/MM",rotate:-10}}}}}},f=d,v=e("2877"),h=Object(v["a"])(f,o,c,!1,null,"0efe7f53",null),b=h.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock"},[e("div",{staticClass:"btn-group-wrap"},[e("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:0===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByDefault()}}},[t._v(" 默认排序 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:1===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByAlphabet()}}},[t._v(" 按地区 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:2===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByNumber()}}},[t._v(" 按人数 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:3===t.sort},attrs:{type:"button"},on:{click:function(a){return t.sortByIncreaseNumber()}}},[t._v(" 按变化 ")])])]),e("div",[e("table",{staticClass:"table table-striped table-hover",staticStyle:{position:"relative","border-collapse":"collapse"}},[t._m(0),e("tbody",[t._l(t.regionData.slice(0,t.limit),(function(a){return e("tr",{key:a.id,staticClass:"singleRegionData"},[e("td",[t._v(t._s(a.location))]),e("td",[t._v(t._s(a.number))]),e("td",[t._v(t._s(a.change))])])})),e("tr")],2)]),e("div",{staticClass:"showAll",on:{click:function(a){t.limit=10===t.limit?t.regionData.length:10}}},[t._v(t._s(10===t.limit?"Show All":"Show Less"))])])])},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("NHS地区")]),e("th",{attrs:{scope:"col",nowrap:""}},[t._v("确诊人数")]),e("th",{attrs:{scope:"col",nowrap:""}},[t._v("较上次")])])])}],y=e("54f8"),g=e("d0ff"),j=(e("7db0"),e("4160"),e("caad"),e("4fad"),e("ac1f"),e("25f0"),e("2532"),e("5319"),e("498a"),e("159b"),e("c1df"));function _(t){var a=JSON.parse(t.replace(/\\/g,"")),e=function(t){null!=t.number&&(t.number.toString().includes(",")&&(t.number=t.number.replace(/,/g,"")),t.location=t.location.trim(),t.number=parseInt(t.number.toString().trim()))};return a.forEach(e),a}function w(t){var a,e=[],n=null,r=Object(y["a"])(t);try{for(r.s();!(a=r.n()).done;){var s,i=a.value,o=Object(y["a"])(i.arr);try{var c=function(){var t=s.value,a={};if(a.name=t.location,a.value=t.number,a.day=i.date,a.lastValue=0,n){var r=n.arr.find((function(a){return a.location===t.location}));a.lastValue=r&&r.number?r.number:0}e.push(a)};for(o.s();!(s=o.n()).done;)c()}catch(l){o.e(l)}finally{o.f()}n=i}}catch(l){r.e(l)}finally{r.f()}return e}function C(t){var a,e=[],n=Object(y["a"])(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(r.area){var s={};s.arr=_(r.area),s.date=j(r.date).format("DD/MM"),e.push(s)}}}catch(i){n.e(i)}finally{n.f()}return w(e)}function D(t){var a,e={},n=Object(y["a"])(t.locations);try{for(n.s();!(a=n.n()).done;)for(var r=a.value,s=Object.entries(r.history),i=0;i<s.length;i++){var o=j(s[i][0]).format("DD/MM"),c=s[i][1],l={location:r["country"]+(r["province"]?" - "+r["province"]:""),number:c};e[o]=e[o]?e[o]:[],e[o].push(l)}}catch(h){n.e(h)}finally{n.f()}for(var u=[],d=0,f=Object.entries(e);d<f.length;d++){var v=f[d];u.push({arr:v[1],date:v[0]})}return w(u)}var k={name:"RegionTable",props:["dataNow","dataYesterday"],data:function(){return{regionData:[],sort:0,limit:10}},mounted:function(){this.regionData=this.getRegionData(),this.$emit("onRegionalDataSorted",Object(g["a"])(this.regionData).sort((function(t,a){return a.change-t.change})))},methods:{getRegionData:function(){var t,a=_(this.dataNow[0].area),e=_(this.dataYesterday.area),n=0,r=Object(y["a"])(a);try{for(r.s();!(t=r.n()).done;){var s=t.value;s.id=n++;var i=e[n]?s.number-e[n].number:0;s.change=(i>0?"+":"")+i}}catch(o){r.e(o)}finally{r.f()}return a},sortByDefault:function(){this.sort=0,this.regionData=Object(g["a"])(this.regionData).sort((function(t,a){return a.id-t.id}))},sortByAlphabet:function(){this.sort=1,this.regionData=Object(g["a"])(this.regionData).sort((function(t,a){return t.location.localeCompare(a.location)}))},sortByNumber:function(){this.sort=2,this.regionData=Object(g["a"])(this.regionData).sort((function(t,a){return a.number-t.number}))},sortByIncreaseNumber:function(){this.sort=3,this.regionData=Object(g["a"])(this.regionData).sort((function(t,a){return a.change-t.change}))}}},x=k,S=(e("fe80"),Object(v["a"])(x,p,m,!1,null,"018c0cce",null)),R=S.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mBlock"},[e("div",{staticClass:"btn-group btn-group-sm",staticStyle:{position:"absolute",right:"20px"},attrs:{role:"group","aria-label":"date range"}},[e("button",{staticClass:"btn btn-secondary",class:{active:0===t.tab},attrs:{type:"button"},on:{click:function(a){return t.changeTab(0)}}},[t._v(" 全球 ")]),e("button",{staticClass:"btn btn-secondary",class:{active:1===t.tab},attrs:{type:"button"},on:{click:function(a){return t.changeTab(1)}}},[t._v(" 英国 ")])]),t.barRaceData.global?e("BarRace",{directives:[{name:"show",rawName:"v-show",value:0===t.tab,expression:"tab===0"}],attrs:{raceData:t.barRaceData.global,title:"全球确诊数据",subtitle:"确诊人数（例）",source:"Source: Johns Hopkins University","change-label-position":!0,id:"2"}}):t._e(),t.barRaceData.ukRegions?e("BarRace",{directives:[{name:"show",rawName:"v-show",value:1===t.tab,expression:"tab===1"}],attrs:{raceData:t.barRaceData.ukRegions,title:"NHS地区确诊数据",subtitle:"确诊人数（例）",source:"Source: isjeff.com",id:"1"}}):t._e()],1)},O=[],P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bar_race",attrs:{id:"barRace"+t.id}}),e("SlideController",{attrs:{"start-date":t.startDate,"end-date":t.endDate,"current-date":t.day},on:{change:t.changeDate,playPause:function(a){t.playing=a}}})],1)},I=[],z=(e("4de4"),e("b0c0"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{display:"flex","align-items":"center","padding-top":"20px"}},[e("button",{staticClass:"btn btn-secondary btn-lg circle",attrs:{type:"button"},on:{click:t.onPlayPause}},[e("div",{staticStyle:{"margin-top":"-2px"}},[t.playPause?e("PauseIcon"):e("PlayIcon")],1)]),e("div",{staticStyle:{"flex-grow":"1","margin-left":"30px"}},[e("VueSlider",{attrs:{value:t.currentDate,data:t.data,disabled:!t.playPause},on:{change:t.onDateChange}})],1)])}),L=[],N=e("4971"),V=e.n(N),A=e("1501"),E=e("f9d2"),B=(e("24df"),{name:"SlideController",props:["startDate","endDate","playing","currentDate"],data:function(){return{playPause:!0,data:[]}},components:{VueSlider:V.a,PlayIcon:A["a"],PauseIcon:E["a"]},watch:{endDate:function(){var t=e("c1df"),a="DD/MM/YYYY";this.data=[];var n=!0,r=this.startDate,s=0;while(n&&s<1e4){this.data.push(r);var i=t(r+"/2020",a);r=i.add(1,"days").format("DD/MM"),n=i.isSameOrBefore(t(this.endDate+"/2020",a)),s++}},playing:function(t){this.playPause=t}},methods:{onDateChange:function(t){console.log(t),this.$emit("change",t)},onPlayPause:function(){this.playPause=!this.playPause,this.$emit("playPause",this.playPause)}}}),$=B,M=Object(v["a"])($,z,L,!1,null,"60092ad4",null),Y=M.exports,H={name:"BarRace",components:{SlideController:Y},props:{raceData:Array,title:String,subtitle:String,source:String,id:String,changeLabelPosition:Boolean},data:function(){return{width:500,day:"",playing:!0,startDate:"",endDate:""}},created:function(){window.addEventListener("resize",this.resizeEventHandler)},destroyed:function(){window.removeEventListener("resize",this.resizeEventHandler)},methods:{resizeEventHandler:function(t){this.width=window.innerWidth>510?510:window.innerWidth-55},changeDate:function(t){this.day=t}},mounted:function(){var t=e("c1df");this.resizeEventHandler(),this.startDate=this.raceData[0].day,this.endDate=this.raceData[this.raceData.length-1].day;var a=e("5698"),n=a.select("#barRace"+this.id).append("svg").attr("width",this.width).attr("height",500),r=1e3,s=12,i=500,o=this.width,c={top:80,right:0,bottom:5,left:0},l=(i-(c.bottom+c.top))/(5*s);n.append("text").attr("class","title").attr("y",24).html(this.title),n.append("text").attr("class","subTitle").attr("y",55).html(this.subtitle),n.append("text").attr("class","caption").attr("x",o).attr("y",i-5).style("text-anchor","end").html(this.source);this.day=this.raceData[0].day;var u=this;function d(e){e.forEach((function(t){t.value=+t.value,t.lastValue=t.lastValue<0?0:+t.lastValue,t.value=isNaN(t.value)&&t.value<0?0:t.value,t.colour=a.rgb(0,195,255)}));var d=e.filter((function(t){return t.day==u.day&&!isNaN(t.value)})).sort((function(t,a){return a.value-t.value})).slice(0,s);d.forEach((function(t,a){return t.rank=a}));var f=function(t){return"bar_"+t.name.replace(/[^\w]/g,"_")},v=function(t){var e,n=a.select(".".concat(f(t)));return(null===n||void 0===n||null===(e=n.node())||void 0===e?void 0:e.getBoundingClientRect().width)<100},h=function(t){return m(t.value)+15+10*(t.value+"").length},b=function(t){return u.changeLabelPosition&&v(t)?h(t):m(t.value)-8},p=function(t){return u.changeLabelPosition&&v(t)?"start":"end"},m=a.scaleLinear().domain([0,a.max(d,(function(t){return t.value}))]).range([c.left,o-c.right-65]),y=a.scaleLinear().domain([s,0]).range([i-c.bottom,c.top]),g=a.axisTop().scale(m).ticks(o>500?5:2).tickSize(-(i-c.top-c.bottom)).tickFormat((function(t){return a.format(",")(t)}));n.append("g").attr("class","axis xAxis").attr("transform","translate(0, ".concat(c.top,")")).call(g).selectAll(".tick line").classed("origin",(function(t){return 0==t})),n.selectAll("rect.bar").data(d,(function(t){return t.name})).enter().append("rect").attr("class",(function(t){return"bar ".concat(f(t))})).attr("x",m(0)+1).attr("width",(function(t){return m(t.value)-m(0)-1<0?0:m(t.value)-m(0)-1})).attr("y",(function(t){return y(t.rank)+5})).attr("height",y(1)-y(0)-l).style("fill",(function(t){return t.colour})),n.selectAll("text.label").data(d,(function(t){return t.name})).enter().append("text").attr("class","label").attr("x",(function(t){return b(t)})).attr("y",(function(t){return y(t.rank)+5+(y(1)-y(0))/2+1})).style("text-anchor",(function(t){return p(t)})).style("color","white").html((function(t){return t.name})),n.selectAll("text.valueLabel").data(d,(function(t){return t.name})).enter().append("text").attr("class","valueLabel").attr("x",(function(t){return m(t.value)+5})).attr("y",(function(t){return y(t.rank)+5+(y(1)-y(0))/2+1})).text((function(t){return a.format(",.0f")(t.lastValue)}));var j=n.append("text").attr("class","dayText").attr("x",o-c.right).attr("y",i-25).style("text-anchor","end").html(u.day);a.interval((function(i){if(u.playing){d=e.filter((function(t){return t.day==u.day&&!isNaN(t.value)})).sort((function(t,a){return a.value-t.value})).slice(0,s),d.forEach((function(t,a){return t.rank=a})),m.domain([0,a.max(d,(function(t){return t.value}))]),n.select(".xAxis").transition().duration(r).ease(a.easeLinear).call(g);var o=n.selectAll(".bar").data(d,(function(t){return t.name}));o.enter().append("rect").attr("class",(function(t){return"bar ".concat(f(t))})).attr("x",m(0)+1).attr("width",(function(t){return m(t.value)-m(0)-1<0?0:m(t.value)-m(0)-1})).attr("y",(function(t){return y(s+1)+5})).attr("height",y(1)-y(0)-l).style("fill",(function(t){return t.colour})).transition().duration(r).ease(a.easeLinear).attr("y",(function(t){return y(t.rank)+5})),o.transition().duration(r).ease(a.easeLinear).attr("width",(function(t){return m(t.value)-m(0)-1<0?0:m(t.value)-m(0)-1})).attr("y",(function(t){return y(t.rank)+5})),o.exit().transition().duration(r).ease(a.easeLinear).attr("width",(function(t){return m(t.value)-m(0)-1<0?0:m(t.value)-m(0)-1})).attr("y",(function(t){return y(s+1)+5})).remove();var c=n.selectAll(".label").data(d,(function(t){return t.name}));c.enter().append("text").attr("class","label").attr("x",(function(t){return b(t)})).attr("y",(function(t){return y(s+1)+5+(y(1)-y(0))/2})).style("text-anchor",(function(t){return p(t)})).style("color","white").html((function(t){return t.name})).transition().duration(r).ease(a.easeLinear).attr("y",(function(t){return y(t.rank)+5+(y(1)-y(0))/2+1})),c.transition().duration(r).ease(a.easeLinear).attr("x",(function(t){return b(t)})).style("text-anchor",(function(t){return p(t)})).attr("y",(function(t){return y(t.rank)+5+(y(1)-y(0))/2+1})),c.exit().transition().duration(r).ease(a.easeLinear).attr("x",(function(t){return b(t)})).style("text-anchor",(function(t){return p(t)})).attr("y",(function(t){return y(s+1)+5})).remove();var v=n.selectAll(".valueLabel").data(d,(function(t){return t.name}));v.enter().append("text").attr("class","valueLabel").attr("x",(function(t){return m(t.value)+5})).attr("y",(function(t){return y(s+1)+5})).text((function(t){return a.format(",.0f")(t.lastValue)})).transition().duration(r).ease(a.easeLinear).attr("y",(function(t){return y(t.rank)+5+(y(1)-y(0))/2+1})),v.transition().duration(r).ease(a.easeLinear).attr("x",(function(t){return m(t.value)+5})).attr("y",(function(t){return y(t.rank)+5+(y(1)-y(0))/2+1})).tween("text",(function(t){var e=a.interpolateRound(t.lastValue,t.value);return function(t){this.textContent=a.format(",")(e(t))}})),v.exit().transition().duration(r).ease(a.easeLinear).attr("x",(function(t){return m(t.value)+5})).attr("y",(function(t){return y(s+1)+5})).remove(),j.html(u.day);var h=t(u.day+"/2020","DD/MM/YYYY"),_=t(e[e.length-1].day+"/2020","DD/MM/YYYY");u.day=h.add(1,"days").format("DD/MM"),h.isAfter(_)&&(u.day=e[0].day)}}),r)}d(this.raceData)}},T=H,F=(e("efaf"),Object(v["a"])(T,P,I,!1,null,null,null)),G=F.exports,J={name:"BarRaceSection",components:{BarRace:G},props:{barRaceData:Object},data:function(){return{tab:0}},methods:{changeTab:function(t){this.tab=t}}},K=J,W=Object(v["a"])(K,U,O,!1,null,"f8f7ea80",null),q=W.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("button",{staticClass:"btn btn-secondary btn-lg circle",attrs:{type:"button"},on:{click:t.locateUserPostcode}},[e("div",{staticStyle:{"margin-top":"-2px"}},[e("LocateIcon")],1)]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"form-control",staticStyle:{margin:"0 20px"},attrs:{id:"postcode",placeholder:"UK Postcode"},domProps:{value:t.inputValue},on:{input:function(a){a.target.composing||(t.inputValue=a.target.value)}}}),e("button",{staticClass:"btn btn-primary",staticStyle:{width:"100px"},attrs:{type:"submit"},on:{click:t.find}},[t._v("查询")])]),e("div",{staticClass:"displayInfo",staticStyle:{"margin-top":"20px","text-align":"center"},domProps:{innerHTML:t._s(t.displayInfo)}})])},Q=[],Z=(e("99af"),e("c740"),e("c98d")),tt={name:"NearbyCasesFinder",props:["regionData"],components:{LocateIcon:Z["a"]},data:function(){return{inputValue:"",displayInfo:"<div style='opacity: 0.7; font-size: 14px;'>输入您的英国邮编即可查询最近的区域确诊数量，点击左侧按钮可以自动定位。</div>"}},methods:{find:function(){var t=this;window.ga("send","event","nearby","postcode",this.inputValue),fetch("https://api.postcodes.io/postcodes/"+this.inputValue).then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(e){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:n=a.sent,console.log(n),200==n.status?t.findByRegionName(n.result.nhs_ha,n.result.admin_district):(window.ga("send","event","nearby","postcode-notfound",t.inputValue),t.displayInfo="抱歉，您输入的邮编有误");case 5:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())},findByRegionName:function(t,a){var e=this.regionData.filter((function(e){return e.location==t||e.location==a}));if(e&&e[0]){var n=e[0],r=this.regionData.findIndex((function(t){return t.id===n.id}));this.displayInfo="目前，<span>".concat(n.location,"</span>区共有<span>").concat(n.number,"</span>例确诊，在NHS地区中排名第<span>").concat(r,"</span>。"),window.ga("send","event","nearby","region-found",n.location+", "+t+", "+a)}else this.displayInfo="抱歉，我们无法找到<span>".concat(t,"</span>的相关信息"),window.ga("send","event","nearby","region-notfound",t+", "+a)},locateUserPostcode:function(){var t=this;window.ga("send","event","nearby","start-locating",""),navigator.geolocation?(this.displayInfo="定位中，请稍候...",navigator.geolocation.getCurrentPosition((function(a){fetch("https://api.postcodes.io/postcodes?lon=".concat(a.coords.longitude,"&lat=").concat(a.coords.latitude)).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.ga("send","event","nearby","location-found",a.coords.longitude+", "+a.coords.latitude),e.next=3,n.json();case 3:r=e.sent,r.result&&r.result[0]?(t.inputValue=r.result[0].postcode,t.find()):(window.ga("send","event","nearby","location-invalid",a.coords.longitude+", "+a.coords.latitude),t.displayInfo="很抱歉，我们无法定位您到英国的地区");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),(function(){window.ga("send","event","nearby","location-rejected",""),t.displayInfo="很抱歉，我们无法定位，因为您已拒绝位置授权"}))):(window.ga("send","event","nearby","location-unsupported",""),this.displayInfo="Geolocation is not supported by this browser.")}}},at=tt,et=(e("1097"),Object(v["a"])(at,X,Q,!1,null,null,null)),nt=et.exports,rt=e("87f4"),st=e.n(rt),it={name:"App",components:{Chart:b,RegionTable:R,BarRaceSection:q,NearbyCasesFinder:nt,ICountUp:st.a},data:function(){return{dataUk:null,todayData:null,yestData:null,sortedRegionData:null,section:0,barRaceData:{hasData:!1}}},mounted:function(){var t=this;fetch("https://henryz.cc/projects/covid/api.php").then(function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(e){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.json();case 2:n=a.sent,t.dataUk=n.uk,console.log(n),t.todayData=n.uk.history[n.uk.history.length-1],t.yestData=n.uk.history[n.uk.history.length-2],t.barRaceData.ukRegions=C(n.uk.history),t.barRaceData.global=D(n.global.confirmed),t.barRaceData.hasData=!0,t.getNavScrollAnchor();case 11:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())},computed:{confirmedAndDeathChart1:function(){return[{name:"总确诊",data:this.dataUk.history.map((function(t){return t.confirmed}))},{name:"总死亡",data:this.dataUk.history.map((function(t){return t.death}))}]},deathChart2:function(){var t=0,a=0;return[{name:"新增确诊",data:this.dataUk.history.map((function(a){var e=a.confirmed-t;return t=a.confirmed,e}))},{name:"新增死亡",data:this.dataUk.history.map((function(t){var e=t.death-a;return a=t.death,e}))}]},rateChart3:function(){return[{name:"死亡率",data:this.dataUk.history.map((function(t){var a=(t.death/t.confirmed).toPrecision(2);return a}))},{name:"治愈率",data:this.dataUk.history.map((function(t){var a=(t.cured/t.confirmed).toPrecision(2);return a}))}]}},methods:{getNavScrollAnchor:function(){var t=this;document.addEventListener("scroll",(function(){window.scrollY>t.$refs["navPlaceholder"].offsetTop?(t.$refs["nav"].classList.add("fixed_nav"),t.$refs["navPlaceholder"].classList.add("navPlaceholder")):(t.$refs["nav"].classList.remove("fixed_nav"),t.$refs["navPlaceholder"].classList.remove("navPlaceholder"))}))}}},ot=it,ct=(e("9152"),Object(v["a"])(ot,r,s,!1,null,"42d5b772",null)),lt=ct.exports,ut=e("33bc");n["default"].use(ut["b"],{easing:ut["a"].Quartic.InOut}),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(lt)}}).$mount("#app")},9152:function(t,a,e){"use strict";var n=e("5122"),r=e.n(n);r.a},"9a79":function(t,a,e){},efaf:function(t,a,e){"use strict";var n=e("9a79"),r=e.n(n);r.a},f529:function(t,a,e){t.exports=e.p+"img/logo_grey.1b9e8775.png"},fe80:function(t,a,e){"use strict";var n=e("1bdf"),r=e.n(n);r.a}});
//# sourceMappingURL=app.6589125d.js.map