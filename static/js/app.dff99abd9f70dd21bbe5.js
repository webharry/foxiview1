webpackJsonp([3],{"+skl":function(t,e){},"2udO":function(t,e){},"7yKk":function(t,e,a){t.exports=a.p+"static/img/banner.26ba0a2.png"},"8brF":function(t,e){},H7mI:function(t,e){},Hb9R:function(t,e){},KAE3:function(t,e){},XXKy:function(t,e){},"ffz/":function(t,e){t.exports={"开发指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"快速开始"},{name:"index",path:"/",type:"pages"},{name:"logs",path:"/logs",desc:"更新日志"}],"组件":[{desc:"基础组件",path:"/component",items:[{desc:"详情页模板",name:"detail",path:"/detail"},{desc:"search搜索框",name:"search",path:"/search"},{desc:"Button 按钮",name:"button",path:"/button"},{desc:"alert 弹框",name:"alert",path:"/alert"},{desc:"upload文件上传",name:"upload",path:"/upload"},{desc:"progress进度条",name:"progress",path:"/progress"}]}],"过滤器":[{name:"filters",path:"/filters",desc:"filters"}]}},fkkw:function(t,e){},mUtA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};a.d(n,"date",function(){return E});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header",style:"index"===this.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[e("div",{staticClass:"header-container"},[e("router-link",{attrs:{to:{name:"index"}}},[e("img",{attrs:{src:a("7yKk"),width:"100"}})]),this._v(" "),e("router-link",{attrs:{to:{name:"giud"}}},[this._v("组件")])],1)])},staticRenderFns:[]};var l=a("VU/8")({data:function(){return{}}},i,!1,function(t){a("8brF")},null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-footer"},[e("div",{staticClass:"footer-container"})])}]};var r=a("VU/8")(null,o,!1,function(t){a("H7mI")},"data-v-fca3d998",null).exports,c=a("ffz/"),u=a.n(c),d={data:function(){return{data:u.a}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e){return a("div",{staticClass:"group-container"},[a("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._v(" "),t._l(t.data[e],function(e){return e.desc?a("div",{staticClass:"side-nav-items"},[e.name?a("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))]):a("p",{staticClass:"side-nav-group"},[t._v(t._s(e.desc))]),t._v(" "),t._l(e.items,function(e){return a("div",[a("router-link",{staticClass:"slid-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))])],1)})],2):t._e()})],2)}))},staticRenderFns:[]};var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-skeleton"},[e("div",[e("div",{staticClass:"skeleton-container"},[e("div",{staticClass:"skeleton"})]),this._v(" "),e("div",{staticClass:"skeleton-bottom"})])])}]};var f={name:"app",data:function(){return{init:!1,isIndex:!0}},watch:{$route:function(){this.isIndex="index"===this.$route.name}},mounted:function(){var t=this;setTimeout(function(){t.init=!0},250)},components:{mainHeader:l,sideNav:a("VU/8")(d,m,!1,function(t){a("fkkw")},null,null).exports,mainFooter:r,mainSkeleton:a("VU/8")({data:function(){return{msg:"hello vue"}}},v,!1,function(t){a("KAE3")},null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.init?e("div",[e("mainHeader"),this._v(" "),this.isIndex?e("router-view",{staticClass:"page"}):e("div",{staticClass:"container"},[e("sideNav",{staticClass:"nav"}),this._v(" "),e("router-view",{staticClass:"view"})],1),this._v(" "),this.isIndex?this._e():e("mainFooter")],1):e("mainSkeleton")],1)},staticRenderFns:[]};var _=a("VU/8")(f,p,!1,function(t){a("XXKy")},null,null).exports,h=a("fZjL"),b=a.n(h),g=a("/ocq");s.default.use(g.a);var k=[];b()(u.a).forEach(function(t){k=k.concat(u.a[t])});!function t(e){e.forEach(function(e){if(e.items)t(e.items),k=k.concat(e.items);else{if("pages"===e.type)return void(e.component=function(t){return a.e(1).then(function(){return t(a("LFUG")("./"+e.name+".vue"))}.bind(null,a)).catch(a.oe)});e.component=function(t){return a.e(0).then(function(){return t(a("Gv6s")("./"+e.name+".md"))}.bind(null,a)).catch(a.oe)}}})}(k);var y=new g.a({routes:k}),x=a("BTaQ"),C=a.n(x),w=(a("+skl"),a("An7n")),N={name:"xalert",data:function(){return{visible:!1}},directives:{clickOutside:w.directive},methods:{handleClose:function(){this.visible=!this.visible}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:this.handleClose,expression:"handleClose"}],staticClass:"box"},[e("p",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}]},[this._v("这是一个测试例子23")])]),this._v(" "),e("Button",[this._v("Default")])],1)},staticRenderFns:[]};var $=a("VU/8")(N,F,!1,function(t){a("2udO")},"data-v-0662cc58",null).exports,E=function(t){return t+" 2018-01-10"},R={name:"xrow",props:{data:{type:Object,default:function(){}},keyName:{type:String,default:""},val:{type:Object,default:function(){}}},data:function(){return{modal1:!1}},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.$Message.info("Clicked cancel")}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["link"===t.val.type?a("div",{class:["span-line","tip",t.data[t.keyName]?"":"span-null-line"]},[a("a",{attrs:{href:t.data[t.keyName],target:"_blank"}},[t._v(t._s(t.data[t.keyName]))])]):t._e(),t._v(" "),"text"===t.val.type?a("div",{class:["span-line",t.data[t.keyName]?"":"span-null-line",t.data[t.keyName+"redStyle"]?"red":""]},[t._v("\n        "+t._s(t.data[t.keyName])+"\n    ")]):t._e(),t._v(" "),"readMore"===t.val.type?a("div",[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.modal1=!0}}},[t._v("查看更多")]),t._v(" "),a("Modal",{attrs:{title:"Common Modal dialog box title"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("p",[t._v("Content of dialog")]),t._v(" "),a("p",[t._v("Content of dialog")]),t._v(" "),a("p",[t._v("Content of dialog")])])],1):t._e(),t._v(" "),"picture"===t.val.type?a("div",[a("div",{class:["img-area","red"===t.val.style?"red-border":""]},[a("a",{style:"background-image:url("+t.data[t.keyName]+")",attrs:{href:t.data[t.keyName],target:"_blank"}})])]):t._e()])},staticRenderFns:[]};var I=a("VU/8")(R,U,!1,function(t){a("Hb9R")},"data-v-2be037e8",null).exports,P={name:"xdetail",props:{inline:{type:Boolean,default:!1},labels:{type:Object,default:function(){}},data:{type:Object,default:function(){}},history:{type:Array,default:function(){return[]}},colNum:{type:Object,default:function(){col1=1,col2=2}},labelPosition:{type:String,default:"top"},columns:{type:Number,default:2}},data:function(){return{theme1:"light"}},components:{xrow:I}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t.labels.titles&&t.labels.titles.length?a("Menu",{attrs:{mode:"horizontal",theme:t.theme1,"active-name":"1"}},t._l(t.labels.titles,function(e,n){return a("MenuItem",{key:n,attrs:{name:n}},[t._v("\n            "+t._s(e)+"\n        ")])})):t._e(),t._v(" "),a("br"),t._v(" "),t.inline?a("div",[a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{xs:2,sm:4,md:6,lg:8}},[t._v("Col")]),t._v(" "),a("Col",{attrs:{xs:20,sm:16,md:12,lg:8}},[t._v("Col")]),t._v(" "),a("Col",{attrs:{xs:2,sm:4,md:6,lg:8}},[t._v("Col")])],1)],1):t._e(),t._v(" "),t.inline?t._e():a("div",[2===t.columns?a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{xs:12,sm:12,md:12,lg:12}},[a("Form",{attrs:{"label-position":t.labelPosition}},t._l(t.labels.column,function(e,n,s){return s<t.colNum.col1?a("FormItem",{key:s,attrs:{label:e.label+":"}},[a("xrow",{attrs:{val:e,keyName:n,data:t.data}})],1):t._e()}))],1),t._v(" "),a("Col",{attrs:{xs:12,sm:12,md:12,lg:12}},[a("Form",{attrs:{"label-position":t.labelPosition}},t._l(t.labels.column,function(e,n,s){return s>=t.colNum.col1?a("FormItem",{key:s,attrs:{label:e.label+":"}},[a("xrow",{attrs:{val:e,keyName:n,data:t.data}})],1):t._e()}))],1)],1):t._e(),t._v(" "),3===t.columns?a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{xs:8,sm:8,md:8,lg:8}},[a("Form",{attrs:{"label-position":t.labelPosition}},t._l(t.labels.column,function(e,n,s){return s<t.colNum.col1?a("FormItem",{key:s,attrs:{label:e.label+":"}},[a("xrow",{attrs:{val:e,keyName:n,data:t.data}})],1):t._e()}))],1),t._v(" "),a("Col",{attrs:{xs:8,sm:8,md:8,lg:8}},[a("Form",{attrs:{"label-position":t.labelPosition}},t._l(t.labels.column,function(e,n,s){return s>=t.colNum.col1&&s<t.colNum.col2?a("FormItem",{key:s,attrs:{label:e.label+":"}},[a("xrow",{attrs:{val:e,keyName:n,data:t.data}})],1):t._e()}))],1),t._v(" "),a("Col",{attrs:{xs:8,sm:8,md:8,lg:8}},[a("Form",{attrs:{"label-position":t.labelPosition}},t._l(t.labels.column,function(e,n,s){return s>=t.colNum.col2?a("FormItem",{key:s,attrs:{label:e.label+":"}},[a("xrow",{attrs:{val:e,keyName:n,data:t.data}})],1):t._e()}))],1)],1):t._e()],1)],1)},staticRenderFns:[]};var O=a("VU/8")(P,V,!1,function(t){a("sU0/")},"data-v-228c7788",null).exports,j={name:"xProgress",props:{width:{type:String,default:"40%"}},data:function(){return{}},methods:{setProgress:function(){console.log(111,this.$refs.progress.style.width=this.width)}},mounted:function(){this.setProgress()}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress-box"},[e("div",{ref:"progress",staticClass:"progress"})])},staticRenderFns:[]};var H=a("VU/8")(j,A,!1,function(t){a("yH3t")},"data-v-4079f00b",null).exports,M=a("7t+N"),K=a.n(M);console.log(K.a),s.default.use(C.a);var S=[$,O,H],B=function(t){b()(n).forEach(function(e){t.filter(e,n[e])}),S.map(function(e){t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&B(window.Vue);var X={install:B,xalert:$,xdetail:O,xProgress:H};s.default.use(X),s.default.config.productionTip=!1,new s.default({el:"#app",router:y,components:{App:_},template:"<App/>"})},"sU0/":function(t,e){},yH3t:function(t,e){}},["mUtA"]);
//# sourceMappingURL=app.dff99abd9f70dd21bbe5.js.map