webpackJsonp([17],{864:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a,n=p(r(0)),i=p(r(10)),o=p(r(7)),u=p(r(9)),c=p(r(11)),s=p(r(12)),d=r(2),f=(p(d),r(33)),l=p(r(313));function p(t){return t&&t.__esModule?t:{"default":t}}var m=(0,f.wrapper)(l["default"])(a=function(t){function e(){return(0,o["default"])(this,e),(0,c["default"])(this,(e.__proto__||(0,i["default"])(e)).apply(this,arguments))}return(0,s["default"])(e,t),(0,u["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),e}(d.Component))||a;e["default"]=m,t.exports=e["default"]},865:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(r(0)),o=a(r(39)),u=a(r(40)),c=a(r(7));e["default"]=function(t){var e=new s.action(t),r=l["default"].actionCreator((0,i["default"])({},t,{metaAction:e})),a=new p((0,i["default"])({},t,{metaAction:e,extendAction:r})),n=(0,i["default"])({},e,r.gridAction,a);return e.config({metaHandlers:n}),n};a(r(2));var s=r(33),d=(r(14),a(r(189))),f=(a(r(13)),a(r(1))),l=a(r(968));function a(t){return t&&t.__esModule?t:{"default":t}}var p=function t(e){var r,a,n,i=this;(0,c["default"])(this,t),this.onInit=function(t){var e=t.component,r=t.injections;i.extendAction.gridAction.onInit({component:e,injections:r}),i.component=e,(i.injections=r).reduce("init");var a=i.metaAction.gf("data.pagination").toJS(),n=i.metaAction.gf("data.filter").toJS();i.load(a,n)},this.load=(r=(0,u["default"])(o["default"].mark(function t(e,r){var a;return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.webapi.deliverOrderList.init({pagination:e,filter:r});case 2:(a=t.sent).filter=r,i.injections.reduce("load",a);case 5:case"end":return t.stop()}},t,i)})),function(t,e){return r.apply(this,arguments)}),this.reload=(0,u["default"])(o["default"].mark(function t(){var e,r;return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=i.metaAction.gf("data.pagination").toJS(),r=i.metaAction.gf("data.filter").toJS(),i.load(e,r);case 3:case"end":return t.stop()}},t,i)})),this.add=(0,u["default"])(o["default"].mark(function t(){return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i.config.apps["mk-app-delivery-order"]){t.next=2;break}throw"依赖mk-app-delivery-order app,请使用mk clone mk-app-delivery-order命令添加";case 2:i.component.props.setPortalContent&&i.component.props.setPortalContent("销售出库单","mk-app-delivery-order");case 3:case"end":return t.stop()}},t,i)})),this.batchMenuClick=function(t){switch(t.key){case"del":i.batchDel();break;case"audit":i.batchAudit()}},this.batchDel=(0,u["default"])(o["default"].mark(function t(){var e,r,a;return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=i.metaAction.gf("data.list"))&&0!=e.size){t.next=4;break}return i.metaAction.toast("error","请选中要删除的记录"),t.abrupt("return");case 4:if((r=e.filter(function(t){return t.get("selected")}))&&0!=r.size){t.next=8;break}return i.metaAction.toast("error","请选中要删除的记录"),t.abrupt("return");case 8:return t.next=10,i.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 10:if(t.sent){t.next=13;break}return t.abrupt("return");case 13:return a=r.map(function(t){return t.get("id")}).toJS(),t.next=16,i.webapi.deliverOrderList.del({ids:a});case 16:i.metaAction.toast("success","删除成功"),i.reload();case 18:case"end":return t.stop()}},t,i)})),this.batchAudit=(0,u["default"])(o["default"].mark(function t(){var e,r,a;return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.metaAction.gf("data.list"),console.log(e),e&&0!=e.size){t.next=5;break}return i.metaAction.toast("error","请选中要审核的记录"),t.abrupt("return");case 5:if((r=e.filter(function(t){console.log(t),t.get("selected")}))&&0!=r.size){t.next=9;break}return i.metaAction.toast("error","请选中要审核的记录"),t.abrupt("return");case 9:return a=r.map(function(t){return t.get("id")}).toJS(),t.next=12,i.webapi.deliverOrderList.audit({ids:a});case 12:i.metaAction.toast("success","审核成功"),i.reload();case 14:case"end":return t.stop()}},t,i)})),this.audit=function(e){return(0,u["default"])(o["default"].mark(function t(){return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.webapi.deliverOrderList.audit({ids:[e]});case 2:i.metaAction.toast("success","审核成功"),i.reload();case 4:case"end":return t.stop()}},t,i)}))},this.reject=function(e){return(0,u["default"])(o["default"].mark(function t(){return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.webapi.deliverOrderList.reject({ids:[e]});case 2:i.metaAction.toast("success","反审核成功"),i.reload();case 4:case"end":return t.stop()}},t,i)}))},this.del=function(e){return(0,u["default"])(o["default"].mark(function t(){return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,i.webapi.deliverOrderList.del({ids:[e]});case 7:i.metaAction.toast("success","删除成功"),i.reload();case 9:case"end":return t.stop()}},t,i)}))},this.modify=function(e){return(0,u["default"])(o["default"].mark(function t(){return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i.config.apps["ttk-edf-app-orderlist"]){t.next=2;break}throw"依赖mk-app-delivery-order app,请使用mk clone mk-app-delivery-order命令添加";case 2:i.component.props.setPortalContent&&i.component.props.setPortalContent("存货卡片","ttk-edf-app-orderlist",{deliveryOrderId:e});case 3:case"end":return t.stop()}},t,i)}))},this.toggleShowAdvanceFilter=function(){i.metaAction.sf("data.other.isFold",!i.metaAction.gf("data.other.isFold"))},this.commonFilterChange=(a=(0,u["default"])(o["default"].mark(function t(e){var r,a,n;return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target.value,a=i.metaAction.gf("data.pagination").toJS(),(n=i.metaAction.gf("data.filter").toJS()).common=r,t.next=5,i.webapi.deliverOrderList.query({pagination:a,filter:n});case 5:t.sent.filter=n,i.load(a,n);case 8:case"end":return t.stop()}},t,i)})),function(t){return a.apply(this,arguments)}),this.tabChange=(n=(0,u["default"])(o["default"].mark(function t(e){var r,a;return o["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.metaAction.gf("data.pagination").toJS(),(a=i.metaAction.gf("data.filter").toJS()).targetList=e,t.next=4,i.webapi.deliverOrderList.query({pagination:r,filter:a});case 4:t.sent.filter=a,i.load(r,a);case 7:case"end":return t.stop()}},t,i)})),function(t){return n.apply(this,arguments)}),this.customerChange=function(e){var t=i.metaAction.gf("data.other.customers").find(function(t){return t.get("id")==e});i.metaAction.sf("data.filter.customer",t)},this.search=function(){i.reload()},this.pageChanged=function(t,e){var r=i.metaAction.gf("data.filter").toJS();i.load({current:t,pageSize:e},r)},this.receipt=function(){throw"请实现收框功能"},this.print=function(){throw"请实现打印功能"},this["export"]=function(){throw"请实现导出功能"},this.setting=function(){throw"请实现设置功能"},this.numberFormat=f["default"].number.format,this.metaAction=e.metaAction,this.extendAction=e.extendAction,this.config=d["default"].current,this.webapi=this.config.webapi};t.exports=e["default"]},866:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(r(0)),n=a(r(7));e["default"]=function(t){var e=new u.reducer(t),r=d["default"].reducerCreator((0,i["default"])({},t,{metaReducer:e})),a=new f((0,i["default"])({},t,{metaReducer:e,extendReducer:r})),n=(0,i["default"])({},e,r.gridReducer,a);return(0,i["default"])({},n)};var o=r(14),u=r(33),c=a(r(189)),s=r(314),d=a(r(968));function a(t){return t&&t.__esModule?t:{"default":t}}var f=function t(e){var a=this;(0,n["default"])(this,t),this.init=function(t,e){var r=(0,s.getInitState)();return a.metaReducer.init(t,r)},this.load=function(t,e){return t=a.metaReducer.sf(t,"data.list",(0,o.fromJS)(e.list)),t=a.metaReducer.sf(t,"data.pagination",(0,o.fromJS)(e.pagination)),t=a.metaReducer.sf(t,"data.filter",(0,o.fromJS)(e.filter)),t=a.metaReducer.sf(t,"data.total",(0,o.fromJS)(e.total)),e.customers&&(t=a.metaReducer.sf(t,"data.other.customers",(0,o.fromJS)(e.customers))),t},this.metaReducer=e.metaReducer,this.extendReducer=e.extendReducer,this.config=c["default"].current};t.exports=e["default"]},968:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,n=r(0),i=(a=n)&&a.__esModule?a:{"default":a},o=r(34);e["default"]={actionCreator:function(t){return{gridAction:new o.GridDecorator.action((0,i["default"])({},t,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(t){return[]},cellIsReadonly:function(t,e,r){return!1}}}}))}},reducerCreator:function(t){return{gridReducer:new o.GridDecorator.reducer((0,i["default"])({},t,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(t){return[]},cellIsReadonly:function(t,e,r){return!1}}}}))}}},t.exports=e["default"]}});