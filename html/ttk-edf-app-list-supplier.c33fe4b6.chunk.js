webpackJsonp([17],{880:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=p(n(0)),i=p(n(10)),u=p(n(7)),o=p(n(9)),c=p(n(11)),s=p(n(12)),d=n(2),l=(p(d),n(34)),f=p(n(313));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,l.wrapper)(f["default"])(a=function(e){function t(){return(0,u["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=h,e.exports=t["default"]},881:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,i=f(n(0)),o=f(n(40)),c=f(n(41)),u=f(n(7));t["default"]=function(e){var t=new s.action(e),n=d["default"].actionCreator((0,i["default"])({},e,{metaAction:t})),a=new p((0,i["default"])({},e,{metaAction:t,extendAction:n})),r=(0,i["default"])({},t,n.gridAction,a);return t.config({metaHandlers:r}),r};f(n(2));var s=n(34),d=(n(35),f(n(999))),l=f(n(189));function f(e){return e&&e.__esModule?e:{"default":e}}var p=(a=function e(t){(0,u["default"])(this,e),r.call(this),this.metaAction=t.metaAction,this.extendAction=t.extendAction,this.config=l["default"].current,this.webapi=this.config.webapi},r=function(){var t,n,a,r,i,u=this;this.onInit=function(e){var t=e.component,n=e.injections;u.extendAction.gridAction.onInit({component:t,injections:n}),u.component=t,(u.injections=n).reduce("init"),u.load()},this.load=(t=(0,c["default"])(o["default"].mark(function e(t){var n;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t||(n=u.metaAction.gf("data.pagination").toJS(),t={currentPage:n.current,pageSize:n.pageSize}),u.metaAction.sf("data.other.loading",!0),u.getData(t).then(function(e){u.injections.reduce("load",e),u.metaAction.sf("data.other.loading",!1)});case 3:case"end":return e.stop()}},e,u)})),function(e){return t.apply(this,arguments)}),this.heightCount=function(){var e="";return u.component.props.modelStatus&&1==u.component.props.modelStatus?e="ttk-edf-app-list-supplier-contentHeight1":u.component.props.modelStatus&&2==u.component.props.modelStatus&&(e="ttk-edf-app-list-supplier-contentHeight2"),e},this.getListRowsCount=function(){return u.metaAction.gf("data.list").size},this.delClick=function(t){return function(e){u.del([t])}},this.delClickBatch=function(){var e=u.extendAction.gridAction.getSelectedInfo("dataGrid"),t=[];e.length?(e.forEach(function(e){t.push({id:e.id,ts:e.ts})}),u.del(t)):u.metaAction.toast("warning","请选择供应商！")},this.del=(n=(0,c["default"])(o["default"].mark(function e(t){var n;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(!e.sent){e.next=9;break}return e.next=6,u.webapi.supplier["delete"](t);case 6:(n=e.sent).length&&0<n.length?n.forEach(function(e){u.metaAction.toast("warn",e.message)}):u.metaAction.toast("success","删除成功！"),u.load();case 9:case"end":return e.stop()}},e,u)})),function(e){return n.apply(this,arguments)}),this.modifyDetail=function(n){return function(e){var t=n||null;u.add(t)}},this.addClick=function(){u.add()},this.add=function(e){var t={title:"",appName:"",id:e};t.title="供应商",t.appName="ttk-edf-app-card-supplier",u.addModel(t)},this.addModel=(a=(0,c["default"])(o["default"].mark(function e(t){return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.metaAction.modal("show",{title:t.title,className:"ttk-edf-app-list-supplier-modal",wrapClassName:"card-archive",width:700,height:450,children:u.metaAction.loadApp(t.appName,{store:u.component.props.store,personId:t.id})});case 2:e.sent&&u.load();case 4:case"end":return e.stop()}},e,u)})),function(e){return a.apply(this,arguments)}),this.selectRow=function(t){return function(e){u.injections.reduce("selectRow",t,e.target.checked)}},this.pageChanged=function(e,t){null!=t&&null!=t||(t=u.metaAction.gf("data.pagination").toJS().pageSize);var n={currentPage:e,pageSize:t};u.load(n)},this.getData=(r=(0,c["default"])(o["default"].mark(function e(t){var n,a,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,a=u.metaAction.gf("data.pagination"),r={pageSize:a.toJS().pageSize},t&&t.currentPage&&(r.currentPage=t.currentPage,r.pageSize=t.pageSize),e.next=4,u.webapi.supplier.query({page:r});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e,u)})),function(e){return r.apply(this,arguments)}),this.personStatusClick=function(t,n){return function(e){u.metaAction.gf("data.status");u.setStatus(t,n)}},this.setStatus=(i=(0,c["default"])(o["default"].mark(function e(t,n){var a,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isEnable){e.next=8;break}return t.isEnable=!1,e.next=4,u.webapi.supplier.update(t);case 4:(a=e.sent)&&(u.metaAction.toast("success","停用供应商成功！"),u.injections.reduce("enable",a,n)),e.next=13;break;case 8:return t.isEnable=!0,e.next=11,u.webapi.supplier.update(t);case 11:(r=e.sent)&&(u.metaAction.toast("success","启用供应商成功！"),u.injections.reduce("enable",r,n));case 13:case"end":return e.stop()}},e,u)})),function(e,t){return i.apply(this,arguments)})},a);e.exports=t["default"]},882:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(0)),r=a(n(7));t["default"]=function(e){var t=new o.reducer(e),n=s["default"].reducerCreator((0,i["default"])({},e,{metaReducer:t})),a=new l((0,i["default"])({},e,{metaReducer:t,extendReducer:n})),r=(0,i["default"])({},t,n.gridReducer,a);return(0,i["default"])({},r)};var u=n(14),o=n(34),c=a(n(189)),s=a(n(999)),d=n(314);function a(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var a=this;(0,r["default"])(this,e),this.init=function(e,t){var n=(0,d.getInitState)();return a.metaReducer.init(e,n)},this.selectAll=function(e,t,n){return e=a.extendReducer.gridReducer.selectAll(e,t,n)},this.load=function(e,t){if(t&&t.list&&(e=a.metaReducer.sf(e,"data.list",(0,u.fromJS)(t.list))),t&&t.page){var n={current:t.page.currentPage,total:t.page.totalCount,pageSize:t.page.pageSize};e=a.metaReducer.sf(e,"data.pagination",(0,u.fromJS)(n))}return e},this.selectRow=function(e,t,n){return e=a.metaReducer.sf(e,"data.list."+t+".selected",n)},this.enable=function(e,t,n){return t&&(e=a.metaReducer.sf(e,"data.list."+n,(0,u.fromJS)(t))),e},this.metaReducer=t.metaReducer,this.extendReducer=t.extendReducer,this.config=c["default"].current};e.exports=t["default"]},999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{"default":a},u=n(35);t["default"]={actionCreator:function(e){return{gridAction:new u.GridDecorator.action((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,n){return!1}}}}))}},reducerCreator:function(e){return{gridReducer:new u.GridDecorator.reducer((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,n){return!1}}}}))}}},e.exports=t["default"]}});