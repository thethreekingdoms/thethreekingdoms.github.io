webpackJsonp([20],{843:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a,r=p(n(0)),i=p(n(10)),o=p(n(7)),u=p(n(9)),c=p(n(11)),s=p(n(12)),d=n(2),l=(p(d),n(33)),f=p(n(295));function p(t){return t&&t.__esModule?t:{"default":t}}var h=(0,l.wrapper)(f["default"])(a=function(t){function e(){return(0,o["default"])(this,e),(0,c["default"])(this,(e.__proto__||(0,i["default"])(e)).apply(this,arguments))}return(0,s["default"])(e,t),(0,u["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),e}(d.Component))||a;e["default"]=h,t.exports=e["default"]},844:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r,i=f(n(0)),u=f(n(39)),c=f(n(40)),o=f(n(7));e["default"]=function(t){var e=new s.action(t),n=d["default"].actionCreator((0,i["default"])({},t,{metaAction:e})),a=new p((0,i["default"])({},t,{metaAction:e,extendAction:n})),r=(0,i["default"])({},e,n.gridAction,a);return e.config({metaHandlers:r}),r};f(n(2));var s=n(33),d=(n(34),f(n(974))),l=f(n(180));function f(t){return t&&t.__esModule?t:{"default":t}}var p=(a=function t(e){(0,o["default"])(this,t),r.call(this),this.metaAction=e.metaAction,this.extendAction=e.extendAction,this.config=l["default"].current,this.webapi=this.config.webapi},r=function(){var e,n,a,r,i,o=this;this.onInit=function(t){var e=t.component,n=t.injections;o.extendAction.gridAction.onInit({component:e,injections:n}),o.component=e,(o.injections=n).reduce("init"),o.load()},this.load=(e=(0,c["default"])(u["default"].mark(function t(e){var n;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e||(n=o.metaAction.gf("data.pagination").toJS(),e={currentPage:n.current,pageSize:n.pageSize}),o.metaAction.sf("data.other.loading",!0),o.getData(e).then(function(t){o.injections.reduce("load",t),o.metaAction.sf("data.other.loading",!1)});case 3:case"end":return t.stop()}},t,o)})),function(t){return e.apply(this,arguments)}),this.heightCount=function(){var t="";return!o.component.props.modelStatus||1!=o.component.props.modelStatus&&2!=o.component.props.modelStatus||(t="ttk-edf-app-list-inventory-contentHeight"),t},this.getListRowsCount=function(){return o.metaAction.gf("data.list").size},this.delClick=function(e){return function(t){o.del([{id:e.id,ts:e.ts}])}},this.delClickBatch=function(){var t=o.extendAction.gridAction.getSelected("dataGrid");t.length?o.del(t):o.metaAction.toast("warning","请选择存货！")},this.del=(n=(0,c["default"])(u["default"].mark(function t(e){var n,a,r;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(!t.sent){t.next=11;break}return n=[],a=o.metaAction.gf("data.list").toJS(),e.forEach(function(e){a.forEach(function(t){e.id==t.id&&n.push(t)})}),t.next=8,o.webapi.inventory["delete"](n);case 8:(r=t.sent).length&&0<r.length?r.forEach(function(t){o.metaAction.toast("warn",t.message)}):o.metaAction.toast("success","删除成功！"),o.load();case 11:case"end":return t.stop()}},t,o)})),function(t){return n.apply(this,arguments)}),this.modifyDetail=function(n){return function(t){var e=n||null;o.add(e)}},this.addClick=function(){o.add()},this.add=function(t){var e={title:"",appName:"",id:t};e.title="存货",e.appName="ttk-edf-app-card-inventory",o.addModel(e)},this.addModel=(a=(0,c["default"])(u["default"].mark(function t(e){return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.metaAction.modal("show",{title:e.title,className:"ttk-edf-app-list-inventory-modal",wrapClassName:"card-archive",width:800,height:530,children:o.metaAction.loadApp(e.appName,{store:o.component.props.store,personId:e.id})});case 2:t.sent&&o.load();case 4:case"end":return t.stop()}},t,o)})),function(t){return a.apply(this,arguments)}),this.selectRow=function(e){return function(t){o.injections.reduce("selectRow",e,t.target.checked)}},this.pageChanged=function(t,e){null!=e&&null!=e||(e=o.metaAction.gf("data.pagination").toJS().pageSize);var n={currentPage:t,pageSize:e};o.load(n)},this.getData=(r=(0,c["default"])(u["default"].mark(function t(e){var n,a,r;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=void 0,a=o.metaAction.gf("data.pagination"),r={pageSize:a.toJS().pageSize},e&&e.currentPage&&(r.currentPage=e.currentPage,r.pageSize=e.pageSize),t.next=4,o.webapi.inventory.query({page:r});case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}},t,o)})),function(t){return r.apply(this,arguments)}),this.personStatusClick=function(e,n){return function(t){o.metaAction.gf("data.status");o.setStatus(e,n)}},this.setStatus=(i=(0,c["default"])(u["default"].mark(function t(e,n){var a,r;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isEnable){t.next=8;break}return e.isEnable=!1,t.next=4,o.webapi.inventory.update(e);case 4:(a=t.sent)&&(o.metaAction.toast("success","停用存货成功！"),o.injections.reduce("enable",a,n)),t.next=13;break;case 8:return e.isEnable=!0,t.next=11,o.webapi.inventory.update(e);case 11:(r=t.sent)&&(o.metaAction.toast("success","启用存货成功！"),o.injections.reduce("enable",r,n));case 13:case"end":return t.stop()}},t,o)})),function(t,e){return i.apply(this,arguments)})},a);t.exports=e["default"]},845:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(0)),r=a(n(7));e["default"]=function(t){var e=new u.reducer(t),n=s["default"].reducerCreator((0,i["default"])({},t,{metaReducer:e})),a=new l((0,i["default"])({},t,{metaReducer:e,extendReducer:n})),r=(0,i["default"])({},e,n.gridReducer,a);return(0,i["default"])({},r)};var o=n(14),u=n(33),c=a(n(180)),s=a(n(974)),d=n(296);function a(t){return t&&t.__esModule?t:{"default":t}}var l=function t(e){var a=this;(0,r["default"])(this,t),this.init=function(t,e){var n=(0,d.getInitState)();return a.metaReducer.init(t,n)},this.selectAll=function(t,e,n){return t=a.extendReducer.gridReducer.selectAll(t,e,n)},this.load=function(t,e){if(e&&e.list&&(t=a.metaReducer.sf(t,"data.list",(0,o.fromJS)(e.list))),e&&e.page){var n={current:e.page.currentPage,total:e.page.totalCount,pageSize:e.page.pageSize};t=a.metaReducer.sf(t,"data.pagination",(0,o.fromJS)(n))}return t},this.selectRow=function(t,e,n){return t=a.metaReducer.sf(t,"data.list."+e+".selected",n)},this.enable=function(t,e,n){return e&&(t=a.metaReducer.sf(t,"data.list."+n,(0,o.fromJS)(e))),t},this.metaReducer=e.metaReducer,this.extendReducer=e.extendReducer,this.config=c["default"].current};t.exports=e["default"]},974:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{"default":a},o=n(34);e["default"]={actionCreator:function(t){return{gridAction:new o.GridDecorator.action((0,i["default"])({},t,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(t){return[]},cellIsReadonly:function(t,e,n){return!1}}}}))}},reducerCreator:function(t){return{gridReducer:new o.GridDecorator.reducer((0,i["default"])({},t,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(t){return[]},cellIsReadonly:function(t,e,n){return!1}}}}))}}},t.exports=e["default"]}});