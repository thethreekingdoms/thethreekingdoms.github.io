webpackJsonp([1],{1002:function(e,t,n){e.exports={"default":n(1003),__esModule:!0}},1003:function(e,t,n){n(1004),e.exports=n(36).Object.entries},1004:function(e,t,n){var a=n(64),r=n(1005)(!0);a(a.S,"Object",{entries:function(e){return r(e)}})},1005:function(e,t,n){var c=n(1006),s=n(1007),l=n(1008).f;e.exports=function(u){return function(e){for(var t,n=s(e),a=c(n),r=a.length,o=0,i=[];o<r;)l.call(n,t=a[o++])&&i.push(u?[t,n[t]]:n[t]);return i}}},1006:function(e,t,n){e.exports=n(5)(130)},1007:function(e,t,n){e.exports=n(5)(112)},1008:function(e,t,n){e.exports=n(5)(162)},1022:function(e,t,n){e.exports=n(5)(741)},1023:function(e,t,n){var a=n(89);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},1047:function(e,t,n){e.exports={"default":n(1048),__esModule:!0}},1048:function(e,t,n){n(226),n(227),n(228),n(1049),n(1061),n(1064),n(1066),e.exports=n(36).Map},1049:function(e,t,n){"use strict";var a=n(1050),r=n(1023);e.exports=n(1054)("Map",function(e){return function(){return e(this,0<arguments.length?arguments[0]:void 0)}},{get:function(e){var t=a.getEntry(r(this,"Map"),e);return t&&t.v},set:function(e,t){return a.def(r(this,"Map"),0===e?0:e,t)}},a,!0)},1050:function(e,t,n){"use strict";var i=n(148).f,u=n(1051),c=n(147),s=n(65),l=n(146),d=n(144),a=n(1052),r=n(1053),o=n(233),f=n(149),p=n(1022).fastKey,h=n(1023),m=f?"_s":"size",v=function(e,t){var n,a=p(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,o,n,a){var r=e(function(e,t){l(e,r,o,"_i"),e._t=o,e._i=u(null),e._f=void 0,e._l=void 0,e[m]=0,null!=t&&d(t,n,e[a],e)});return c(r.prototype,{clear:function(){for(var e=h(this,o),t=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete t[n.i];e._f=e._l=void 0,e[m]=0},"delete":function(e){var t=h(this,o),n=v(t,e);if(n){var a=n.n,r=n.p;delete t._i[n.i],n.r=!0,r&&(r.n=a),a&&(a.p=r),t._f==n&&(t._f=a),t._l==n&&(t._l=r),t[m]--}return!!n},forEach:function(e){h(this,o);for(var t,n=s(e,1<arguments.length?arguments[1]:void 0,3);t=t?t.n:this._f;)for(n(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!v(h(this,o),e)}}),f&&i(r.prototype,"size",{get:function(){return h(this,o)[m]}}),r},def:function(e,t,n){var a,r,o=v(e,t);return o?o.v=n:(e._l=o={i:r=p(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=o),a&&(a.n=o),e[m]++,"F"!==r&&(e._i[r]=o)),e},getEntry:v,setStrong:function(e,n,t){a(e,n,function(e,t){this._t=h(e,n),this._k=t,this._l=void 0},function(){for(var e=this,t=e._k,n=e._l;n&&n.r;)n=n.p;return e._t&&(e._l=n=n?n.n:e._t._f)?r(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(e._t=void 0,r(1))},t?"entries":"values",!t,!0),o(n)}}},1051:function(e,t,n){e.exports=n(5)(230)},1052:function(e,t,n){e.exports=n(5)(344)},1053:function(e,t,n){e.exports=n(5)(737)},1054:function(e,t,n){"use strict";var d=n(42),f=n(64),p=n(1022),h=n(1055),m=n(231),v=n(147),g=n(144),b=n(146),x=n(89),k=n(232),y=n(148).f,C=n(1056)(0),w=n(149);e.exports=function(n,e,t,a,r,o){var i=d[n],u=i,c=r?"set":"add",s=u&&u.prototype,l={};return w&&"function"==typeof u&&(o||s.forEach&&!h(function(){(new u).entries().next()}))?(u=e(function(e,t){b(e,u,n,"_c"),e._c=new i,null!=t&&g(t,r,e[c],e)}),C("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(a){var r="add"==a||"set"==a;a in s&&(!o||"clear"!=a)&&m(u.prototype,a,function(e,t){if(b(this,u,a),!r&&o&&!x(e))return"get"==a&&void 0;var n=this._c[a](0===e?0:e,t);return r?this:n})}),o||y(u.prototype,"size",{get:function(){return this._c.size}})):(u=a.getConstructor(e,n,r,c),v(u.prototype,t),p.NEED=!0),k(u,n),l[n]=u,f(f.G+f.W+f.F,l),o||a.setStrong(u,n,r),u}},1055:function(e,t,n){e.exports=n(5)(111)},1056:function(e,t,n){var x=n(65),k=n(1057),y=n(225),C=n(230),a=n(1058);e.exports=function(d,e){var f=1==d,p=2==d,h=3==d,m=4==d,v=6==d,g=5==d||v,b=e||a;return function(e,t,n){for(var a,r,o=y(e),i=k(o),u=x(t,n,3),c=C(i.length),s=0,l=f?b(e,c):p?b(e,0):void 0;s<c;s++)if((g||s in i)&&(r=u(a=i[s],s,o),d))if(f)l[s]=r;else if(r)switch(d){case 3:return!0;case 5:return a;case 6:return s;case 2:l.push(a)}else if(m)return!1;return v?-1:h||m?m:l}}},1057:function(e,t,n){e.exports=n(5)(340)},1058:function(e,t,n){var a=n(1059);e.exports=function(e,t){return new(a(e))(t)}},1059:function(e,t,n){var a=n(89),r=n(1060),o=n(67)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),a(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},1060:function(e,t,n){e.exports=n(5)(743)},1061:function(e,t,n){var a=n(64);a(a.P+a.R,"Map",{toJSON:n(1062)("Map")})},1062:function(e,t,n){var a=n(229),r=n(1063);e.exports=function(e){return function(){if(a(this)!=e)throw TypeError(e+"#toJSON isn't generic");return r(this)}}},1063:function(e,t,n){var a=n(144);e.exports=function(e,t){var n=[];return a(e,!1,n.push,n,t),n}},1064:function(e,t,n){n(1065)("Map")},1065:function(e,t,n){"use strict";var a=n(64);e.exports=function(e){a(a.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},1066:function(e,t,n){n(1067)("Map")},1067:function(e,t,n){"use strict";var a=n(64),i=n(66),u=n(65),c=n(144);e.exports=function(e){a(a.S,e,{from:function(e){var t,n,a,r,o=arguments[1];return i(this),(t=void 0!==o)&&i(o),null==e?new this:(n=[],t?(a=0,r=u(o,arguments[2],2),c(e,!1,function(e){n.push(r(e,a++))})):c(e,!1,n.push,n),new this(n))}})}},1068:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var k=a(n(20)),y=a(n(88)),C=a(n(1002)),w=a(n(16));function a(e){return e&&e.__esModule?e:{"default":e}}t["default"]=function(t,e,n){if(e){var a=!0,r=!1,o=void 0;try{for(var i,u=(0,w["default"])((0,C["default"])(e));!(a=(i=u.next()).done);a=!0){var c=(0,y["default"])(i.value,2),s=c[0],l=c[1],d=t[s];if("string"==typeof l)t[l]=d;else if("object"==(void 0===l?"undefined":(0,k["default"])(l))){var f=!0,p=!1,h=void 0;try{for(var m,v=(0,w["default"])((0,C["default"])(l));!(f=(m=v.next()).done);f=!0){var g=(0,y["default"])(m.value,2),b=g[0],x=g[1];t[b]=x(d)}}catch(e){p=!0,h=e}finally{try{!f&&v["return"]&&v["return"]()}finally{if(p)throw h}}}delete t[s]}}catch(e){r=!0,o=e}finally{try{!a&&u["return"]&&u["return"]()}finally{if(r)throw o}}}n&&n.forEach(function(e){try{delete t[e]}catch(e){console.log(e)}});return t},e.exports=t["default"]},1069:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(0)),a=p(n(3)),o=p(n(10)),i=p(n(7)),u=p(n(9)),c=p(n(11)),s=p(n(12)),l=p(n(2)),d=n(35),f=p(n(13));function p(e){return e&&e.__esModule?e:{"default":e}}var h=d.Form.Item,m=d.Radio.Group,v=d.DatePicker.MonthPicker,g={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},b=function(e){function t(e){(0,i["default"])(this,t);var n=(0,c["default"])(this,(t.__proto__||(0,o["default"])(t)).call(this,e));return n.dateChange=function(e,t){n.setState((0,a["default"])({},e,t))},n.getValue=function(){return n.state},n.confirm=function(){n.props.closeModal(),n.props.callBack(n)},n.cancel=function(){n.props.closeModal()},n.state={date:e.time?e.time:(0,f["default"])(),radio:0},n}return(0,s["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){var t=this,e=this.state,n=e.date,a=e.radio;return l["default"].createElement("div",{className:"mk-ttk-table-app-list-sort",id:"mk-ttk-table-app-list-sort-modal"},l["default"].createElement(h,(0,r["default"])({},g,{label:l["default"].createElement("span",null,l["default"].createElement("em",{style:{color:"#f00",marginRight:"8px",position:"relative",top:"3px"}},"*"),"范围")}),l["default"].createElement(v,{style:{marginLeft:"8px"},allowClear:!1,placeholder:"",value:n,getCalendarContainer:function(){return document.getElementById("mk-ttk-table-app-list-sort-modal")},onChange:function(e){return t.dateChange("date",e)}})),l["default"].createElement(h,null,l["default"].createElement(m,{onChange:function(e){return t.dateChange("radio",e.target.value)},value:a},l["default"].createElement(d.Radio,{value:0},"断号整理"),l["default"].createElement(d.Radio,{value:1},"序时整理"))),l["default"].createElement("div",{style:{width:"100%",textAlign:"center"}},l["default"].createElement(d.Button,{onClick:this.cancel},"取消"),l["default"].createElement(d.Button,{style:{marginLeft:"8px"},type:"primary",onClick:this.confirm},"确定")))}}]),t}(l["default"].Component);t["default"]=b,e.exports=t["default"]},1070:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"label",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"value";return e.map(function(e){return{label:e[t],value:e[n].toString()}})},e.exports=t["default"]},960:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=p(n(0)),o=p(n(10)),i=p(n(7)),u=p(n(9)),c=p(n(11)),s=p(n(12)),l=n(2),d=(p(l),n(34)),f=p(n(359));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,d.wrapper)(f["default"])(a=function(e){function t(){return(0,i["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(l.Component))||a;t["default"]=h,e.exports=t["default"]},961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,p=s(n(16)),h=s(n(1047)),m=s(n(3)),v=s(n(0)),g=s(n(40)),b=s(n(41)),o=s(n(7)),i=s(n(9));t["default"]=function(e){var t=new u.action(e),n=k.FormDecorator.actionCreator((0,v["default"])({},e,{metaAction:t})),a=new l((0,v["default"])({},e,{metaAction:t,voucherAction:n})),r=(0,v["default"])({},t,n,a);return t.config({metaHandlers:r}),r};var x=s(n(2)),u=n(34),k=n(35),y=s(n(1)),C=s(n(1068)),w=s(n(13)),S=s(n(1069)),c=s(n(211));n(87),s(n(234));function s(e){return e&&e.__esModule?e:{"default":e}}k.Select.Option;var _="1000020002",l=(a=function(){function t(e){(0,o["default"])(this,t),r.call(this),this.metaAction=e.metaAction,this.config=c["default"].current,this.webapi=this.config.webapi,this.voucherAction=e.voucherAction}return(0,i["default"])(t,[{key:"calcRowSpan",value:function(e,t,n){var a=this.metaAction.gf("data.list");if(a){var r=a.size;if(0==r||1==r)return 1;if(0<n&&n<=r&&e==a.getIn([n-1,t]))return 0;for(var o=1,i=n+1;i<r&&e==a.getIn([i,t]);i++)o++;return o}}}]),t}(),r=function(){var t,n,a,r,o,i,u,c,s,l,d,f=this;this.onInit=function(e){var t=e.component,n=e.injections;f.component=t,f.injections=n;var a=f.component.props.addEventListener;f.changeSipmleDate=!1,a&&a("onTabFocus",f.onTabFocus.bind(f)),n.reduce("init"),f.component.props.initSearchValue?f.linkInPage(f.component.props.initSearchValue):f.load()},this.onTabFocus=(t=(0,b["default"])(g["default"].mark(function e(t){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.initSearchValue){e.next=4;break}f.linkInPage(t.initSearchValue),e.next=7;break;case 4:return e.next=6,f.initDate();case 6:f.sortParmas();case 7:case"end":return e.stop()}},e,f)})),function(e){return t.apply(this,arguments)}),this.linkInPage=function(e){var t=e.accountId,n=e.endCode,a=e.startCode,r=e.date_end,o=e.date_start,i=e.docIds,u=e.summary,c=e.voucherState,s=e.sourceVoucherTypeId,l=e.simpleCondition;f.injections.reduce("update",{path:"data.searchValue",value:{accountId:t,endCode:n,startCode:a,date_end:r,date_start:o,docIds:i,summary:u,voucherState:c,sourceVoucherTypeId:s,simpleCondition:l}}),f.sortParmas(null,null,null,"init",!0)},this.componentDidMount=function(){f.onResize();var e=window;e.addEventListener?e.addEventListener("resize",f.onResize,!1):e.attachEvent?e.attachEvent("onresize",f.onResize):e.onresize=f.onResize},this.getTableScroll=function(){try{var e=f.metaAction.gf("data.tableOption").toJS(),t=document.getElementsByClassName("ttk-table-app-list-Body")[0],n=void 0;if(!t)return;if((n=e.y?t.getElementsByClassName("ant-table-fixed")[1]:t.getElementsByClassName("ant-table-fixed")[0])&&t){var a=t.offsetHeight-n.offsetHeight;if(console.log(a),0<a-30&&e.y)delete e.y,f.injections.reduce("update",{path:"data.tableOption",value:e});else if(a<0&&!e.y){var r=t.offsetWidth,o=t.offsetHeight;f.injections.reduce("setTableOption",(0,v["default"])({},e,{y:o-41,containerWidth:r-20}))}}}catch(e){console.log(e)}},this.onResize=function(r){var o=Math.floor(1e4*Math.random());f.keyRandom=o;f.metaAction.gf("data.tableOption").toJS();setTimeout(function(){if(f.keyRandom==o){var e=document.getElementsByClassName("ttk-table-app-list-Body")[0];if(e){var t=f.metaAction.gf("data.tableOption").toJS(),n=e.offsetWidth,a=e.offsetHeight;f.injections.reduce("setTableOption",(0,v["default"])({},t,{y:a-41,containerWidth:n-20}))}else{if(r)return;setTimeout(function(){f.onResize()},20)}}},100)},this.refreshBtnClick=function(){f.sortParmas()},this.getColumnsItem=function(t){var e=f.metaAction.gf("data").toJS();return[{title:{name:"sort",component:"TableSort",sortOrder:"voucherDate"==e.sort.userOrderField?e.sort.order:null,handleClick:function(e){f.sortChange("voucherDate",e)},title:"日期"},dataIndex:"voucherDate",key:"voucherDate",className:"table_center",render:f.rowSpan},{title:{name:"sort",component:"TableSort",sortOrder:"docCode"==e.sort.userOrderField?e.sort.order:null,handleClick:function(e){f.sortChange("docCode",e)},title:"账单序号"},className:"table_center",dataIndex:"docTypeAndCode",key:"docTypeAndCode",render:f.rowSpan2}].find(function(e){return e.dataIndex==t})},this.needAlignType=function(e){return["amountSum","origAmount","amountDr","price","amountCr"].includes(e)?"right":["summary","accountCodeName","currencyAndExchangeRate","sourceVoucherCode","creator","auditor"].includes(e)?"left":"center"},this.renderColumns=function(){var e=f.metaAction.gf("data.other.columnDto").toJS(),t=(f.metaAction.gf("data.tableOption").toJS(),[]);return e.forEach(function(a){var e=f.getColumnsItem(a.fieldName);a.isVisible&&(e?t.push(e):1==a.isHeader?t.push({title:a.caption,key:a.fieldName,className:"table_td_align_"+f.needAlignType(a.fieldName),dataIndex:a.fieldName,render:function(e,t,n){return f.rowSpan(e,t,n,a.fieldName)}}):"accountCodeName"==a.fieldName?t.push({title:a.caption,key:a.fieldName,dataIndex:a.fieldName,className:"table_td_align_"+f.needAlignType(a.fieldName),render:f.normalTdRender2}):t.push({title:a.caption,key:a.fieldName,className:"table_td_align_"+f.needAlignType(a.fieldName),dataIndex:a.fieldName,render:function(e,t,n){return f.normalTdRender(e,t,n,a.fieldName)}}))}),t.push({title:x["default"].createElement(k.Icon,{name:"columnset",fontFamily:"edficon",className:"ttk-table-app-list-columnset",type:"youcezhankailanmushezhi",onClick:function(){return f.showTableSetting({value:!0})}}),key:"voucherState",dataIndex:"voucherState",fixed:"right",className:"table_fixed_width",width:70,render:function(e,t,n){return f.operateCol(e,t,n)}}),t},this.transformThoundsNumber=function(e,t){return["amountCr","amountDr","origAmount","price","amountSum"].includes(t)?!e||0==parseFloat(e)||isNaN(parseInt(e))?"":"price"==t?y["default"].number.format(e,6):y["default"].number.format(e,2):e},this.normalTdRender=function(e,t,n,a){return x["default"].createElement("span",{className:"ttk-table-app-list-td-con",title:f.transformThoundsNumber(e,a)},f.transformThoundsNumber(e,a))},this.normalTdRender2=function(e){return x["default"].createElement("span",(0,m["default"])({title:e,className:"ttk-table-app-list-td-con"},"title",e),e)},this.getNormalSearchValue=function(){var e=f.metaAction.gf("data.searchValue").toJS();return{date:[e.date_start,e.date_end],simpleCondition:e.simpleCondition}},this.combineColumnProp=function(e){if(!e)return[];var n=[];return e.forEach(function(e,t){n.push({isVisible:e.isVisible,id:e.id})}),n},this.closeTableSetting=function(){f.injections.reduce("tableSettingVisible",{value:!1})},this.showTableSetting=(n=(0,b["default"])(g["default"].mark(function e(t){var n,a,r,o,i=t.value,u=t.data;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f.injections.reduce("update",{path:"data.showTableSetting",value:!1}),n=f.metaAction.gf("data.other.columnDto"),!1!==i){e.next=18;break}return f.injections.reduce("update",{path:"data.other.columnDto",value:u}),e.next=6,f.webapi.docManage.findByParam({code:"docList"});case 6:if(!(a=e.sent)){e.next=15;break}return r=a.id,e.next=11,f.webapi.docManage.updateWithDetail({id:r,columnDetails:f.combineColumnProp(u)});case 11:(o=e.sent)?f.injections.reduce("settingOptionsUpdate",{visible:i,data:o.columnDetails}):f.metaAction.sf("data.other.columnDto",n),e.next=16;break;case 15:f.metaAction.sf("data.other.columnDto",n);case 16:e.next=19;break;case 18:f.injections.reduce("tableSettingVisible",{value:i,data:u});case 19:case"end":return e.stop()}},e,f)})),function(e){return n.apply(this,arguments)}),this.load=function(){var e=f.metaAction.context.get("currentOrg"),t=e.enabledMonth,n=e.enabledYear;t&&n&&f.injections.reduce("update",{path:"data.other.enableddate",value:y["default"].date.transformMomentDate(n+"-"+t)}),f.sortParmas(null,null,null,"init")},this.initDate=(0,b["default"])(g["default"].mark(function e(){var t;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f.changeSipmleDate){e.next=6;break}return e.next=4,f.webapi.docManage.getDisplayDate();case 4:t=e.sent,f.injections.reduce("updateArr",[{path:"data.searchValue.date_start",value:y["default"].date.transformMomentDate(t.DisplayDate)},{path:"data.searchValue.date_end",value:y["default"].date.transformMomentDate(t.DisplayDate)}]);case 6:return e.abrupt("return");case 7:case"end":return e.stop()}},e,f)})),this.searchValueChange=function(e){var t=f.metaAction.gf("data.searchValue").toJS();e.date_end||(e.date_end=(0,w["default"])().endOf("month")),e.date_start||(e.date_start=(0,w["default"])().startOf("month")),f.injections.reduce("searchUpdate",(0,v["default"])({},t,e,{simpleCondition:null}));var n=f.metaAction.gf("data.pagination").toJS();f.sortParmas((0,v["default"])({},t,e,{simpleCondition:null}),(0,v["default"])({},n,{currentPage:1})),console.log("触发高级搜索"),f.changeSipmleDate=!0},this.sortParmas=function(e,t,n,a,r){e||(e=f.metaAction.gf("data.searchValue").toJS()),t||(t=f.metaAction.gf("data.pagination").toJS()),n||(n=f.metaAction.gf("data.sort").toJS());var o=(0,C["default"])(e,{date_start:{startYear:function(e){return e?e.year():null},startPeriod:function(e){return e?e.month()+1:null}},date_end:{endYear:function(e){return e?e.year():null},endPeriod:function(e){return e?e.month()+1:null}}}),i=(0,C["default"])(t,null,["total","totalCount","totalPage"]);if(""===o.simpleCondition&&(o.simpleCondition=null),""===o.endCode&&(o.endCode=null),""===o.startCode&&(o.startCode=null),"get"==a)return(0,v["default"])({},o,{page:i},n);"init"==a?f.initData((0,v["default"])({},o,{page:i},n),r):f.requestData((0,v["default"])({},o,{page:i},n))},this.requestData=(a=(0,b["default"])(g["default"].mark(function e(t){var n;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f.metaAction.gf("data.loading")||f.injections.reduce("tableLoading",!0),e.next=4,f.webapi.docManage.query(t);case 4:n=e.sent,f.injections.reduce("tableLoading",!1),f.injections.reduce("load",{response:n}),setTimeout(function(){f.getTableScroll()},100);case 8:case"end":return e.stop()}},e,f)})),function(e){return a.apply(this,arguments)}),this.initData=(r=(0,b["default"])(g["default"].mark(function e(t,n){var a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.webapi.docManage.init(t);case 2:a=e.sent,f.injections.reduce("tableLoading",!1),f.injections.reduce("load",{response:a,noInitDate:n}),f.metaAction.sf("data.tableKey",Math.random()),setTimeout(function(){f.getTableScroll()},100);case 7:case"end":return e.stop()}},e,f)})),function(e,t){return r.apply(this,arguments)}),this.sortChange=function(e,t){var n={userOrderField:0==t?null:e,order:0==t?null:t},a=f.metaAction.gf("data.pagination").toJS();f.sortParmas(null,(0,v["default"])({},a,{currentPage:1}),n),f.injections.reduce("sortReduce",n)},this.pageChanged=function(e,t){var n=f.metaAction.gf("data.pagination").toJS(),a=f.metaAction.gf("data.list").toJS().length;n=t?(0,v["default"])({},n,{currentPage:0==a?1:e,pageSize:t}):(0,v["default"])({},n,{currentPage:0==a?1:e}),f.injections.reduce("update",{path:"data.tableCheckbox",value:{checkboxValue:[],selectedOption:[]}}),f.sortParmas(null,n)},this.getChildVoucherItems=function(){},this.renderRowKey=function(e){return e.docId},this.tableOnchange=(o=(0,b["default"])(g["default"].mark(function e(t,n,a){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,f)})),function(e,t,n){return o.apply(this,arguments)}),this.rowSelection=function(e,t,n){},this.checkboxChange=function(e,t){var n=[];e.forEach(function(e){e&&n.push(e)});var a=[];t.map(function(e){e&&a.push(e)}),f.injections.reduce("update",{path:"data.tableCheckbox",value:{checkboxValue:n,selectedOption:a}}),f.selectedOption=a},this.moreActionOpeate=function(e){f[e.key]&&f[e.key]()},this.delTableItemClick=(0,b["default"])(g["default"].mark(function e(){var t,n,a,r,o,i,u,c,s,l,d;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(t=f.metaAction.gf("data.tableCheckbox.selectedOption").toJS()).length){e.next=4;break}return f.metaAction.toast("error","请选择您要删除的数据！"),e.abrupt("return");case 4:return e.next=6,f.metaAction.modal("confirm",{title:"删除凭证",content:"确定删除所选凭证？"});case 6:if(n=e.sent,console.log(n),n){e.next=10;break}return e.abrupt("return");case 10:for(a=new h["default"],t.forEach(function(e){a.has(e.docId)||a.set(e.docId,{docId:e.docId,ts:e.ts})}),r=[],i=!(o=!0),u=void 0,e.prev=16,c=(0,p["default"])(a.values());!(o=(s=c.next()).done);o=!0)l=s.value,r.push(l);e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](16),i=!0,u=e.t0;case 24:e.prev=24,e.prev=25,!o&&c["return"]&&c["return"]();case 27:if(e.prev=27,!i){e.next=30;break}throw u;case 30:return e.finish(27);case 31:return e.finish(24);case 32:return e.next=34,f.webapi.docManage.delProof(r);case 34:(d=e.sent).allSuccess?f.metaAction.toast("success","删除成功!"):f.metaAction.toast("error",""+d.msg),f.injections.reduce("update",{path:"data.tableCheckbox",value:{checkboxValue:[],selectedOption:[]}}),f.sortParmas();case 38:case"end":return e.stop()}},e,f,[[16,20,24,32],[25,,27,31]])})),this.auditClick=(0,b["default"])(g["default"].mark(function e(){var t,n,a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(t=f.getNewData()).length){e.next=4;break}return f.metaAction.toast("error","请选择您要审核的数据!"),e.abrupt("return");case 4:if(n=!1,a=t.map(function(e){return e.voucherState!=_&&(n=!0),{docId:e.docId,ts:e.ts}}),n){e.next=8;break}return e.abrupt("return",f.metaAction.toast("warn","当前没有可审核数据!"));case 8:return e.next=10,f.webapi.docManage.auditProof(f.delRepeat(a,"docId"));case 10:e.sent,f.injections.reduce("update",{path:"data.tableCheckbox",value:{checkboxValue:[],selectedOption:[]}}),f.sortParmas();case 13:case"end":return e.stop()}},e,f)})),this.getNewData=function(){var t=f.metaAction.gf("data.tableCheckbox.checkboxValue").toJS(),e=f.metaAction.gf("data.list").toJS(),n=[];return e.map(function(e){t.includes(e.docId)&&n.push(e)}),n},this.delRepeat=function(e,t){var n=new h["default"];e.map(function(e){n.has(e[t])||n.set(e[t],e)});var a=[],r=!0,o=!1,i=void 0;try{for(var u,c=(0,p["default"])(n.values());!(r=(u=c.next()).done);r=!0){var s=u.value;a.push(s)}}catch(e){o=!0,i=e}finally{try{!r&&c["return"]&&c["return"]()}finally{if(o)throw i}}return a},this.submitSortProof=(i=(0,b["default"])(g["default"].mark(function e(t,n){var a,r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getValue(),r={year:a.date.year(),period:a.date.month()+1,reorganizeType:a.radio},e.next=4,f.webapi.docManage.reorganizeDocCode(r);case 4:return e.sent,f.sortParmas(),e.abrupt("return",f.metaAction.toast("success","整理凭证号成功!"));case 7:case"end":return e.stop()}},e,f)})),function(e,t){return i.apply(this,arguments)}),this.sortProofClick=function(){var e=f,t=f.metaAction.gf("data.searchValue").toJS().date_end;f.metaAction.modal("show",{title:"整理凭证号",width:320,iconType:null,className:"mk-ttk-table-app-list-modal-container",children:x["default"].createElement(S["default"],{time:t,callBack:e.submitSortProof}),footer:null})},this.versaAuditClick=(0,b["default"])(g["default"].mark(function e(){var t,n,a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(t=f.getNewData()).length){e.next=4;break}return f.metaAction.toast("error","请选择您要反审核的数据!"),e.abrupt("return");case 4:if(n=!1,a=t.map(function(e){return e.voucherState==_&&(n=!0),{docId:e.docId,ts:e.ts}}),n){e.next=8;break}return e.abrupt("return",f.metaAction.toast("warn","当前没有反审核的数据!"));case 8:return e.next=10,f.webapi.docManage.unAuditBatch(f.delRepeat(a,"docId"));case 10:e.sent,f.injections.reduce("update",{path:"data.tableCheckbox",value:{checkboxValue:[],selectedOption:[]}}),f.sortParmas();case 13:case"end":return e.stop()}},e,f)})),this.insertProofConfirm=function(e){f.component.props.setPortalContent&&f.component.props.setPortalContent("填制凭证","app-proof-of-charge",{initData:{code:e.docCode,voucherDate:e.voucherDate}})},this.getInsertItem=function(){var t=f.metaAction.gf("data.tableCheckbox.checkboxValue").toJS();return f.metaAction.gf("data.list").toJS().find(function(e){return t.includes(e.docId)})},this.delDocId=(u=(0,b["default"])(g["default"].mark(function e(t,n){var a,r,o;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.webapi.docManage.delSingleDocId({docId:t,ts:n});case 2:e.sent&&f.metaAction.toast("success","删除成功"),a=f.metaAction.gf("data.tableCheckbox").toJS(),r=a.checkboxValue,o=a.selectedOption,r=r.filter(function(e){return e!=t}),o=o.filter(function(e){return e.docId!=t}),f.injections.reduce("update",{path:"data.tableCheckbox",value:{checkboxValue:r,selectedOption:o}}),console.log(r,o),f.sortParmas();case 10:case"end":return e.stop()}},e,f)})),function(e,t){return u.apply(this,arguments)}),this.delModal=(c=(0,b["default"])(g["default"].mark(function e(t,n){var a,r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=f,e.next=3,f.metaAction.modal("confirm",{title:"删除",content:"你确定要删除吗？",onOk:function(){return a.delDocId(t,n)},onCancel:function(){}});case 3:(r=e.sent)&&console.log(r);case 5:case"end":return e.stop()}},e,f)})),function(e,t){return c.apply(this,arguments)}),this.openMoreContent=(s=(0,b["default"])(g["default"].mark(function e(t,n){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f.metaAction.toast("warn","功能暂未实现！");case 1:case"end":return e.stop()}},e,f)})),function(e,t){return s.apply(this,arguments)}),this.operateCol=function(e,t,n){var a=t.voucherState,r=t.docId,o=f.calcRowSpan(r,"docId",n);return{children:x["default"].createElement("span",null,x["default"].createElement(k.TableOperate,{viewClick:function(){return f.openMoreContent(r,!1)},editClick:function(){return f.openMoreContent(r,!1)},deleteClick:function(){return f.delModal(r,t.ts)},status:a==_?1:2})),props:{rowSpan:o}}},this.componentWillUnmount=function(){if(f.dateDom&&f.dateDom.removeEventListener("click",f.rangePickerClick),!f.props||!0!==f.props.isFix){var e=window;e.removeEventListener?e.removeEventListener("resize",f.onResize,!1):e.detachEvent?e.detachEvent("onresize",f.onResize):e.onresize=void 0}},this.rangePickerClick=function(){f.injections.reduce("update",{path:"data.showPicker",value:!0})},this.normalSearchDateChange=function(e){console.log("简单时间搜索"),f.changeSipmleDate=!0},this.normalSearchChange=function(e,t,n,a){var r=f.metaAction.gf("data.searchValue").toJS();n&&(r=(0,v["default"])({},r,n)),"date"==e?(r.date_start=t[0],r.date_end=t[1]):r[e]=t,f.injections.reduce("searchUpdate",r);var o=f.metaAction.gf("data.pagination").toJS();f.sortParmas(r,(0,v["default"])({},o,{currentPage:1})),console.log("简单搜索"),f.changeSipmleDate=!0},this.rowSpan2=function(e,t,n){var a=f.calcRowSpan(t.docId,"docId",n);return{children:x["default"].createElement("span",{className:"ttk-table-app-list-td-con"},x["default"].createElement("a",{href:"javascript:;",onClick:function(){return f.openMoreContent(t.docId,!1)},className:"table-needDel",title:e,"data-rol":a},e)),props:{rowSpan:a}}},this.rowSpan=function(e,t,n,a){return{children:x["default"].createElement("span",{className:"ttk-table-app-list-td-con"},x["default"].createElement("span",{title:f.transformThoundsNumber(e,a)},f.transformThoundsNumber(e,a))),props:{rowSpan:f.calcRowSpan(t.docId,"docId",n)}}},this.isTotalRow=(l=(0,b["default"])(g["default"].mark(function e(t){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,f)})),function(e){return l.apply(this,arguments)}),this["export"]=(0,b["default"])(g["default"].mark(function e(){var t;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.sortParmas(null,null,null,"get"),0!=f.metaAction.gf("data.list").toJS().length){e.next=5;break}return f.metaAction.toast("warn","当前没有可导出数据！"),e.abrupt("return");case 5:t.docIdsStr=f.getPrintDocId(),f.metaAction.toast("warn","功能暂未实现！");case 7:case"end":return e.stop()}},e,f)})),this.print=(0,b["default"])(g["default"].mark(function e(){var t,n,a,r,o,i,u;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0,0!=(t=f).metaAction.gf("data.list").toJS().length){e.next=6;break}return f.metaAction.toast("warn","当前没有可打印数据！"),e.abrupt("return");case 6:return e.next=8,f.webapi.docManage.getPrintConfig();case 8:n=e.sent,a=n.height,r=n.maxLineNum,o=n.printAuxAccCalc,i=n.type,u=n.width,f.metaAction.modal("show",{title:"打印",width:400,footer:null,iconType:null,okText:"打印",className:"mk-ttk-table-app-list-modal-container",children:x["default"].createElement(k.PrintOption,{height:a,maxLineNum:r,printAuxAccCalc:o,type:i,width:u,callBack:t.submitPrintOption})});case 15:case"end":return e.stop()}},e,f)})),this.getPrintDocId=function(){var e=f.metaAction.gf("data.tableCheckbox.selectedOption").toJS();if(0==e.length)return"";var t=e.map(function(e){return e.docId});return console.log(t),t.join(",")},this.submitPrintOption=(d=(0,b["default"])(g["default"].mark(function e(t,n){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f.metaAction.toast("warn","功能暂未实现！");case 1:case"end":return e.stop()}},e,f)})),function(e,t){return d.apply(this,arguments)}),this.checkSearchValue=function(e,t){return f.checkSearchValueCode(e,t)},this.checkSearchValueCode=function(e,t){var n=e.endCode,a=e.startCode;if(!n&&!a)return!0;if(!n&&a){var r=parseInt(e.startCode?e.startCode:0);return isNaN(r)||9999<r?(t.setFields({startCode:{errors:[new Error("请输入正确的凭证号")]}}),!1):(t.setFields({startCode:{value:f.fillZero(r),errors:null},endCode:{value:f.fillZero(9999),errors:null}}),e.startCode=f.fillZero(r),e.endCode=f.fillZero(9999),!0)}var o=parseInt(e.startCode?e.startCode:0),i=parseInt(e.endCode),u=!0;return(isNaN(o)||9999<o)&&(u=!1,t.setFields({startCode:{errors:[new Error("请输入正确的凭证号")]}})),(isNaN(i)||9999<i)&&(u=!1,t.setFields({endCode:{errors:[new Error("请输入正确的凭证号")]}})),u&&(t.setFields({startCode:{value:o<i?f.fillZero(o):f.fillZero(i),errors:null},endCode:{value:o<i?f.fillZero(i):f.fillZero(o),errors:null}}),e.startCode=o<i?f.fillZero(o):f.fillZero(i),e.endCode=o<i?f.fillZero(i):f.fillZero(o)),u},this.fillZero=function(e){var t=e.toString(),n=t.length;return""+"0".repeat(4-n)+t},this.disabledDate=function(e,t,n){var a=f.metaAction.gf("data.other.enableddate");if("pre"==n){var r=f.transformDateToNum(e),o=f.transformDateToNum(t),i=f.transformDateToNum(a);return o<r||r<i}var u=f.transformDateToNum(e),c=f.transformDateToNum(t),s=f.transformDateToNum(a);return u<c||u<s},this.transformDateToNum=function(e){var t=e;return"string"==typeof e&&(t=y["default"].date.transformMomentDate(e)),parseInt(t.year()+(t.month()<10?"0"+t.month():""+t.month()))},this.disabledRangePicker=function(e){var t=f.metaAction.context.get("currentOrg");t.enabledMonth,t.enabledYear;return!0},this.filterOptionSummary=function(e,t){return!(t&&t.props&&t.props.label)||0<=t.props.label.toLowerCase().indexOf(e.toLowerCase())}},a);e.exports=t["default"]},962:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(0)),r=c(n(7));t["default"]=function(e){var t=new o.reducer(e),n=new s((0,a["default"])({},e,{metaReducer:t}));return(0,a["default"])({},t,n)};var p=n(14),o=n(34),h=c(n(1)),i=c(n(211)),u=n(360),m=c(n(1070));c(n(13));function c(e){return e&&e.__esModule?e:{"default":e}}var s=function e(t){var f=this;(0,r["default"])(this,e),this.init=function(e,t){var n=(0,u.getInitState)();return f.metaReducer.init(e,n)},this.load=function(e,t){var n=t.response,a=t.noInitDate,r=n.dtoList,o=n.page,i=n.accountList,u=n.columnDto,c=n.voucherStateList,s=n.voucherTypeList,l=n.displayDate,d=n.loading;return e=f.metaReducer.sf(e,"data.list",(0,p.fromJS)(r)),e=f.metaReducer.sf(e,"data.pagination",(0,p.fromJS)(o)),i&&(e=f.metaReducer.sf(e,"data.other.accountList",(0,p.fromJS)((0,m["default"])(i,"codeAndName","id")))),u&&(e=f.metaReducer.sf(e,"data.other.columnDto",(0,p.fromJS)(u.columnDetails))),c&&(e=f.metaReducer.sf(e,"data.other.voucherStateOption",(0,p.fromJS)((0,m["default"])(c,"name","id")))),s&&(e=f.metaReducer.sf(e,"data.other.sourceVoucherTypeIdOption",(0,p.fromJS)((0,m["default"])(s,"name","id")))),l&&!a&&(e=f.metaReducer.sf(e,"data.searchValue.date_end",h["default"].date.transformMomentDate(l)),e=f.metaReducer.sf(e,"data.searchValue.date_start",h["default"].date.transformMomentDate(l)),e=f.metaReducer.sf(e,"data.searchValue.displayDate",l)),"boolean"==typeof d&&(e=f.metaReducer.sf(e,"data.other.loading",d)),e},this.tableLoading=function(e,t){return f.metaReducer.sf(e,"data.loading",t)},this.update=function(e,t){var n=t.path,a=t.value;return f.metaReducer.sf(e,n,(0,p.fromJS)(a))},this.updateArr=function(t,e){return e.forEach(function(e){t=f.metaReducer.sf(t,e.path,(0,p.fromJS)(e.value))}),t},this.tableSettingVisible=function(e,t){var n=t.value;t.data;return e=f.metaReducer.sf(e,"data.showTableSetting",n),f.metaReducer.gf(e,"data.other.columnDto"),e},this.settingOptionsUpdate=function(e,t){var n=t.visible,a=t.data;return e=f.metaReducer.sf(e,"data.other.columnDto",(0,p.fromJS)(a)),e=f.metaReducer.sf(e,"data.showTableSetting",n)},this.normalSearchChange=function(e,t){var n=t.path,a=t.value;return e=f.metaReducer.sf(e,"data.normalSearch."+n,(0,p.fromJS)(a))},this.searchUpdate=function(e,t){return f.metaReducer.sf(e,"data.searchValue",(0,p.fromJS)(t))},this.tableOnchange=function(e,t){return e=f.metaReducer.sf(e,"data.list",(0,p.fromJS)(t)),e=f.metaReducer.sf(e,"data.key",Math.random())},this.sortReduce=function(e,t){return e=f.metaReducer.sf(e,"data.sort",(0,p.fromJS)(t))},this.setTableScroll=function(e,t){var n={x:1090,y:t};return e=f.metaReducer.sf(e,"data.tableOption",(0,p.fromJS)(n))},this.setTableOption=function(e,t){return f.metaReducer.sf(e,"data.tableOption",(0,p.fromJS)(t))},this.metaReducer=t.metaReducer,this.config=i["default"].current};e.exports=t["default"]}});