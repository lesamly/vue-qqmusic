webpackJsonp([6],{118:function(t,s,n){n(198);var e=n(35)(n(173),n(223),null,null);t.exports=e.exports},119:function(t,s,n){"use strict";function e(t){var s="",n=t.url,e=Object(t.params);for(var i in e)s&&(s+="&"),s+=i+"="+encodeURIComponent(e[i]);return n+"?"+s}function i(t,s){window.jsonp1=function(t){window.jsonp1=void 0,document.body.removeChild(n),s(t)};var n=document.createElement("script");n.src=t,document.body.appendChild(n)}function a(t,s){return i(e("string"==typeof t?f[t]:(f[t.name].params=c()({},f[t.name].params,t.params),f[t.name])),s)}s.a=i,s.b=a;var o=n(58),c=n.n(o),r=n(121),l=n.n(r),u=n(19),p=n.n(u),m={g_tk:1604785682,uin:494873674,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,jsonpCallback:"jsonp1",_:(new Date).getTime()},f={topList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",params:m},rankList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",params:p()({},m,{type:"top",page:"detail",tpl:3})},recommend:{url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",params:p()({},m,l()({pic:500,json:1,type:1,utf8:1,nosign:1,onlysong:0},"nosign",1))},indexMsg:{url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",params:p()({},m)},hotkey:{url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",params:p()({},m)},search:{url:"https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg",params:p()({},m,{is_xml:0})}}},120:function(t,s,n){t.exports={default:n(122),__esModule:!0}},121:function(t,s,n){"use strict";s.__esModule=!0;var e=n(120),i=function(t){return t&&t.__esModule?t:{default:t}}(e);s.default=function(t,s,n){return s in t?(0,i.default)(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}},122:function(t,s,n){n(123);var e=n(6).Object;t.exports=function(t,s,n){return e.defineProperty(t,s,n)}},123:function(t,s,n){var e=n(15);e(e.S+e.F*!n(7),"Object",{defineProperty:n(3).f})},173:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(119),i=n(36);n.n(i);s.default={name:"topList",created:function(){var t=this;n.i(e.b)("topList",function(s){t.topList=s.data.topList})},data:function(){return{topList:{}}}}},186:function(t,s,n){s=t.exports=n(109)(),s.push([t.i,".music-list{margin-bottom:56px}.music-list>li{margin:0 10px 10px}","",{version:3,sources:["/Users/zhenhuadeng/Desktop/demo/vue-scaffold/src/components/topList.vue"],names:[],mappings:"AAQA,YACE,kBAAoB,CACrB,AACD,eACI,kBAAoB,CACvB",file:"topList.vue",sourcesContent:['\n@charset "UTF-8";\n/* ==================================================\n * \t\t\t  全局Sass变量\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\n * ================================================= */\n.music-list {\n  margin-bottom: 56px;\n}\n.music-list > li {\n    margin: 0 10px 10px;\n}\n'],sourceRoot:""}])},198:function(t,s,n){var e=n(186);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(110)("c994cce2",e,!0)},223:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"page"},[n("mt-header",{staticClass:"music-header",attrs:{fixed:"",title:"排行"}},[n("fallback",{slot:"left"})],1),t._v(" "),n("div",{staticClass:"page-content"},[n("ul",{staticClass:"music-list"},[n("li",[n("mt-cell",{staticClass:"music-cell-type1",attrs:{title:"Q Q 音 乐 巅 峰 榜"}})],1),t._v(" "),t._l(t.topList,function(s){return n("router-link",{key:"item.id",attrs:{tag:"li",to:{name:"rankList",params:{id:s.id}}}},[n("mt-cell",{staticClass:"music-cell-type2"},[n("div",{staticClass:"listen-cover"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.picUrl,expression:"item.picUrl"}]}),t._v(" "),n("span",{staticClass:"listen-count"},[n("i",{staticClass:"listen-icon"}),t._v("\n              "+t._s(t._f("listenFormat")(s.listenCount))+"万\n            ")]),t._v(" "),n("i",{staticClass:"listen-play"})]),t._v(" "),n("ul",{staticClass:"song-list",slot:"title"},t._l(s.songList,function(s,e){return n("li",{key:"index",staticClass:"song-item"},[t._v(" \n              "+t._s(e+1)+"\n              "+t._s(s.songname)+"\n              "),n("span",{staticClass:"song-singer"},[t._v(t._s("- "+s.singername))])])})),t._v(" "),n("i",{staticClass:"song-arrow",slot:"right"})])],1)})],2)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.a7c1829b32d992364802.js.map