webpackJsonp([30],{1092:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{"default":a},o=n(28);t["default"]={actionCreator:function(e){return{gridAction:new o.GridDecorator.action((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,n){return!1}}}}))}},reducerCreator:function(e){return{gridReducer:new o.GridDecorator.reducer((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,n){return!1}}}}))}}},e.exports=t["default"]},829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=p(n(0)),i=p(n(10)),o=p(n(7)),c=p(n(9)),u=p(n(11)),s=p(n(12)),d=n(2),f=(p(d),n(34)),l=p(n(247));function p(e){return e&&e.__esModule?e:{"default":e}}var m=(0,f.wrapper)(l["default"])(a=function(e){function t(){return(0,o["default"])(this,t),(0,u["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=m,e.exports=t["default"]},830:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(40)),c=a(n(41)),p=a(n(0)),u=a(n(7));t["default"]=function(e){var t=new i.action(e),n=l["default"].actionCreator((0,p["default"])({},e,{metaAction:t})),a=new v((0,p["default"])({},e,{metaAction:t,extendAction:n})),r=(0,p["default"])({},t,n.gridAction,a);return t.config({metaHandlers:r}),r};var s=a(n(2)),i=n(34),m=n(14),d=n(28),f=a(n(153)),h=(a(n(13)),a(n(1))),l=a(n(1092));function a(e){return e&&e.__esModule?e:{"default":e}}var v=function e(t){var n,a,r,i,l=this;(0,u["default"])(this,e),this.onInit=function(e){var t=e.component,n=e.injections;l.extendAction.gridAction.onInit({component:t,injections:n}),l.component=t,(l.injections=n).reduce("init");var a=l.metaAction.gf("data.pagination").toJS(),r=l.metaAction.gf("data.filter").toJS();l.load(a,r)},this.componentWillUnmount=function(){window.removeEventListener?window.removeEventListener("resize",l.onResize,!1):window.detachEvent?window.detachEvent("onresize",l.onResize):window.onresize=void 0},this.componentDidMount=function(){window.addEventListener?window.addEventListener("resize",l.onResize,!1):window.attachEvent?window.attachEvent("onresize",l.onResize):window.onresize=l.onResize},this.onResize=function(e){var t=Math.floor(1e4*Math.random());l.keyRandomTab=t,setTimeout(function(){t==l.keyRandomTab&&l.getTableScroll("ttk-edf-app-advancerpt-content","ant-table-thead",2,"ant-table-body","data.tableOption",e)},200)},this.getTableScroll=function(e,t,n,a,r,i){try{var o=document.getElementsByClassName(e)[0];if(!o){if(i)return;return void setTimeout(function(){l.getTableScroll(e,t,n,a,r)},500)}var c=o.getElementsByClassName(t)[0],u=o.getElementsByClassName(a)[0].getElementsByTagName("table")[0],s=l.metaAction.gf(r).toJS(),d=o.offsetHeight-c.offsetHeight-n,f=u.offsetHeight;if(d<f&&d!=s.y)l.metaAction.sf(r,(0,m.fromJS)((0,p["default"])({},s,{y:d})));else{if(!(f<d&&null!=s.y))return!1;l.metaAction.sf(r,(0,m.fromJS)((0,p["default"])({},s,{y:null})))}}catch(e){console.log(e)}},this.load=(n=(0,c["default"])(o["default"].mark(function e(t,n){var a;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.webapi.deliverOrderList.init({pagination:t,filter:n});case 2:(a=e.sent).filter=n,l.injections.reduce("load",a),setTimeout(function(){l.onResize()},20);case 6:case"end":return e.stop()}},e,l)})),function(e,t){return n.apply(this,arguments)}),this.reload=(0,c["default"])(o["default"].mark(function e(){var t,n;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=l.metaAction.gf("data.pagination").toJS(),n=l.metaAction.gf("data.filter").toJS(),l.load(t,n);case 3:case"end":return e.stop()}},e,l)})),this.add=(0,c["default"])(o["default"].mark(function e(){return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.config.apps["mk-app-delivery-order"]){e.next=2;break}throw"依赖mk-app-delivery-order app,请使用mk clone mk-app-delivery-order命令添加";case 2:l.component.props.setPortalContent&&l.component.props.setPortalContent("销售出库单","mk-app-delivery-order");case 3:case"end":return e.stop()}},e,l)})),this.batchMenuClick=function(e){switch(e.key){case"del":l.batchDel();break;case"audit":l.batchAudit()}},this.batchDel=(0,c["default"])(o["default"].mark(function e(){var t,n,a;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=l.metaAction.gf("data.list"))&&0!=t.size){e.next=4;break}return l.metaAction.toast("error","请选中要删除的记录"),e.abrupt("return");case 4:if((n=t.filter(function(e){return e.get("selected")}))&&0!=n.size){e.next=8;break}return l.metaAction.toast("error","请选中要删除的记录"),e.abrupt("return");case 8:return e.next=10,l.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 10:if(e.sent){e.next=13;break}return e.abrupt("return");case 13:return a=n.map(function(e){return e.get("id")}).toJS(),e.next=16,l.webapi.deliverOrderList.del({ids:a});case 16:l.metaAction.toast("success","删除成功"),l.reload();case 18:case"end":return e.stop()}},e,l)})),this.batchAudit=(0,c["default"])(o["default"].mark(function e(){var t,n,a;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=l.metaAction.gf("data.list"))&&0!=t.size){e.next=4;break}return l.metaAction.toast("error","请选中要审核的记录"),e.abrupt("return");case 4:if((n=t.filter(function(e){console.log(e),e.get("selected")}))&&0!=n.size){e.next=8;break}return l.metaAction.toast("error","请选中要审核的记录"),e.abrupt("return");case 8:return a=n.map(function(e){return e.get("id")}).toJS(),e.next=11,l.webapi.deliverOrderList.audit({ids:a});case 11:l.metaAction.toast("success","审核成功"),l.reload();case 13:case"end":return e.stop()}},e,l)})),this.audit=function(t){return(0,c["default"])(o["default"].mark(function e(){return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.webapi.deliverOrderList.audit({ids:[t]});case 2:l.metaAction.toast("success","审核成功"),l.reload();case 4:case"end":return e.stop()}},e,l)}))},this.reject=function(t){return(0,c["default"])(o["default"].mark(function e(){return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.webapi.deliverOrderList.reject({ids:[t]});case 2:l.metaAction.toast("success","反审核成功"),l.reload();case 4:case"end":return e.stop()}},e,l)}))},this.del=function(t){return(0,c["default"])(o["default"].mark(function e(){return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,l.webapi.deliverOrderList.del({ids:[t]});case 7:l.metaAction.toast("success","删除成功"),l.reload();case 9:case"end":return e.stop()}},e,l)}))},this.modify=function(t){return(0,c["default"])(o["default"].mark(function e(){return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l.config.apps["ttk-edf-app-advancerpt"]){e.next=2;break}throw"依赖mk-app-delivery-order app,请使用mk clone mk-app-delivery-order命令添加";case 2:l.component.props.setPortalContent&&l.component.props.setPortalContent("存货卡片","ttk-edf-app-advancerpt",{deliveryOrderId:t});case 3:case"end":return e.stop()}},e,l)}))},this.toggleShowAdvanceFilter=function(){l.metaAction.sf("data.other.isFold",!l.metaAction.gf("data.other.isFold"))},this.commonFilterChange=(a=(0,c["default"])(o["default"].mark(function e(t){var n,a,r,i;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,a=l.metaAction.gf("data.pagination").toJS(),(r=l.metaAction.gf("data.filter").toJS()).common=n,e.next=5,l.webapi.deliverOrderList.query({pagination:a,filter:r});case 5:(i=e.sent).filter=r,l.injections.reduce("load",i),setTimeout(function(){l.onResize()},20);case 9:case"end":return e.stop()}},e,l)})),function(e){return a.apply(this,arguments)}),this.tabChange=(r=(0,c["default"])(o["default"].mark(function e(t){var n,a,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.metaAction.gf("data.pagination").toJS(),(a=l.metaAction.gf("data.filter").toJS()).status=t,e.next=4,l.webapi.deliverOrderList.query({pagination:n,filter:a});case 4:(r=e.sent).filter=a,l.injections.reduce("load",r),setTimeout(function(){l.onResize()},20);case 8:case"end":return e.stop()}},e,l)})),function(e){return r.apply(this,arguments)}),this.customerChange=function(e){l.metaAction.gf("data.other.customers");l.metaAction.sf("data.filter.customer",e)},this.search=function(){l.reload()},this.pageChanged=function(e,t){var n=l.metaAction.gf("data.filter").toJS();l.load({current:e,pageSize:t},n)},this.receipt=function(){throw"请实现收框功能"},this.print=function(){throw"请实现打印功能"},this["export"]=function(){throw"请实现导出功能"},this.setting=function(){throw"请实现设置功能"},this.numberFormat=h["default"].number.format,this.renderColumns=function(){return[{title:"序号",dataIndex:"key",key:"key"},{title:"编号",dataIndex:"id",key:"id"},{title:"日期",dataIndex:"date",key:"date"},{title:"数量",dataIndex:"number",key:"number"},{title:"产地",dataIndex:"province",key:"province"},{title:"状态",dataIndex:"status",key:"status"},{title:"来源",dataIndex:"origin",key:"origin"},{title:"操作",dataIndex:"action",key:"action",fixed:"right",width:80,render:function(e,t){return s["default"].createElement(d.Icon,{onClick:function(){return l.delClick(t)},style:{fontSize:"18px"},fontFamily:"edficon",type:"shanchu"})}}]},this.delClick=(i=(0,c["default"])(o["default"].mark(function e(t){var n,a;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,l.webapi.deliverOrderList.del({id:t.id});case 3:l.metaAction.toast("success","删除成功！"),n=l.metaAction.gf("data.pagination").toJS(),a=l.metaAction.gf("data.filter").toJS(),l.load(n,a);case 7:case"end":return e.stop()}},e,l)})),function(e){return i.apply(this,arguments)}),this.metaAction=t.metaAction,this.extendAction=t.extendAction,this.config=f["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},831:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(0)),r=a(n(7));t["default"]=function(e){var t=new c.reducer(e),n=d["default"].reducerCreator((0,i["default"])({},e,{metaReducer:t})),a=new f((0,i["default"])({},e,{metaReducer:t,extendReducer:n})),r=(0,i["default"])({},t,n.gridReducer,a);return(0,i["default"])({},r)};var o=n(14),c=n(34),u=a(n(153)),s=n(248),d=a(n(1092));function a(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var a=this;(0,r["default"])(this,e),this.init=function(e,t){var n=(0,s.getInitState)();return a.metaReducer.init(e,n)},this.load=function(e,t){return e=a.metaReducer.sf(e,"data.list",(0,o.fromJS)(t.list)),e=a.metaReducer.sf(e,"data.pagination",(0,o.fromJS)(t.pagination)),e=a.metaReducer.sf(e,"data.filter",(0,o.fromJS)(t.filter)),e=a.metaReducer.sf(e,"data.total",(0,o.fromJS)(t.total))},this.metaReducer=t.metaReducer,this.extendReducer=t.extendReducer,this.config=u["default"].current};e.exports=t["default"]}});