webpackJsonp([16],{1001:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),i=(n=r)&&n.__esModule?n:{"default":n},c=a(35);t["default"]={actionCreator:function(e){return{gridAction:new c.GridDecorator.action((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,a){return!1}}}}))}},reducerCreator:function(e){return{gridReducer:new c.GridDecorator.reducer((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"app-archives-list-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,a){return!1}}}}))}}},e.exports=t["default"]},884:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=p(a(0)),i=p(a(10)),c=p(a(7)),s=p(a(9)),o=p(a(11)),u=p(a(12)),d=a(2),l=(p(d),a(34)),f=p(a(315));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,l.wrapper)(f["default"])(n=function(e){function t(){return(0,c["default"])(this,t),(0,o["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,u["default"])(t,e),(0,s["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||n;t["default"]=h,e.exports=t["default"]},885:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,o=f(a(0)),u=f(a(40)),d=f(a(41)),i=f(a(7));t["default"]=function(e){var t=new c.action(e),a=s["default"].actionCreator((0,o["default"])({},e,{metaAction:t})),n=new p((0,o["default"])({},e,{metaAction:t,extendAction:a})),r=(0,o["default"])({},t,a.gridAction,n);return t.config({metaHandlers:r}),r};f(a(2));var c=a(34),s=(a(35),a(14),f(a(1001))),l=f(a(190));function f(e){return e&&e.__esModule?e:{"default":e}}var p=(n=function e(t){(0,i["default"])(this,e),r.call(this),this.metaAction=t.metaAction,this.extendAction=t.extendAction,this.config=l["default"].current,this.webapi=this.config.webapi},r=function(){var t,a,n,r,i,c,s=this;this.onInit=function(e){var t=e.component,a=e.injections;s.extendAction.gridAction.onInit({component:t,injections:a}),s.component=t,(s.injections=a).reduce("init"),s.load()},this.load=(t=(0,d["default"])(u["default"].mark(function e(t){var a,n,r,i,c;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.webapi.basearchive.queryList();case 2:if(a=e.sent,r=n=void 0,!(r="number"==typeof t?a.list&&0<a.list.length?a.list[a.list.length-1]:void 0:a.list&&0<a.list.length?a.list[0]:void 0)){e.next=17;break}return s.metaAction.sf("data.other.loading",!0),e.next=10,s.getData(r);case 10:return i=e.sent,e.next=13,s.injections.reduce("load",a,i,t);case 13:s.metaAction.sf("data.other.loading",!1),s.component.props.activeKey&&(c=a.list.filter(function(e){return e.name==s.component.props.activeKey}),s.tabChange(c[0].id+"")),e.next=18;break;case 17:s.injections.reduce("load",a,n);case 18:s.component.props.modelStatus&&s.metaAction.sf("data.modelStatus",s.component.props.modelStatus);case 19:case"end":return e.stop()}},e,s)})),function(e){return t.apply(this,arguments)}),this.refresh=function(e){if(!e){var t=s.metaAction.gf("data.pagination").toJS();e={currentPage:t.current,pageSize:t.pageSize}}s.getData({},e).then(function(e){s.injections.reduce("tabChange",e)})},this.heightCount=function(){var e="";return!s.component.props.modelStatus||1!=s.component.props.modelStatus&&2!=s.component.props.modelStatus||(e="ttk-edf-app-list-userdefinecard-contentHeight"),e},this.addArchives=(0,d["default"])(u["default"].mark(function e(){var t;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _hmt&&_hmt.push(["_trackEvent","基础档案","自定义档案","新增自定义档案+左上角（+）"]),e.next=3,s.metaAction.modal("show",{title:"自定义档案",className:"ttk-edf-app-list-userdefinecard-modalTitle",wrapClassName:"card-archive",width:400,height:170,children:s.metaAction.loadApp("ttk-edf-app-card-userdefinecard",{store:s.component.props.store,archivesName:!0})});case 3:(t=e.sent)&&s.load(t.id);case 5:case"end":return e.stop()}},e,s)})),this.delArchives=(0,d["default"])(u["default"].mark(function e(){var t,a;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _hmt&&_hmt.push(["_trackEvent","基础档案","自定义档案","左上角（X）"]),e.next=3,s.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 3:if(!e.sent){e.next=11;break}return t=s.metaAction.gf("data.tabKey"),a=s.metaAction.gf("data.tabTs"),e.next=9,s.webapi.basearchive["delete"]({id:t,ts:a});case 9:e.sent&&(s.load(),s.metaAction.toast("success","删除成功！"));case 11:case"end":return e.stop()}},e,s)})),this.delClick=function(a){return function(e){var t=[{archiveId:s.metaAction.gf("data.tabKey"),id:a.id,ts:a.ts}];s.del(t)}},this.delClickBatch=function(){var e=s.extendAction.gridAction.getSelectedInfo("dataGrid");e&&0<e.length?s.del(e):s.metaAction.toast("warn","请选择档案明细！")},this.del=(a=(0,d["default"])(u["default"].mark(function e(t){var a;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:if(!e.sent){e.next=9;break}return e.next=6,s.webapi.basearchive.deleteData(t);case 6:(a=e.sent).length&&0<a.length?a.forEach(function(e){s.metaAction.toast("warn",e.message)}):s.metaAction.toast("success","删除成功！"),s.refresh();case 9:case"end":return e.stop()}},e,s)})),function(e){return a.apply(this,arguments)}),this.modifyDetail=function(a){return function(e){var t=a||null;s.add(t)}},this.add=function(e){var t={title:"",appName:"",id:e};t.title="自定义档案",t.appName="ttk-edf-app-card-userdefinecard",s.addModel(t)},this.addClick=function(){_hmt&&_hmt.push(["_trackEvent","基础档案","自定义档案","右上角新增"]),s.addModel()},this.addModel=(n=(0,d["default"])(u["default"].mark(function e(t){var a,n,r,i;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.metaAction.gf("data.tabKey"),n="",r=s.metaAction.gf("data.other.userDefineArchives")||[],i=t&&t.id,r.toJS().map(function(e){e.id==a&&(n=e.name)}),e.next=4,s.metaAction.modal("show",{title:n,className:"ttk-edf-app-list-userdefinecard-modalList",wrapClassName:"card-archive",width:350,heigth:390,children:s.metaAction.loadApp("ttk-edf-app-card-userdefinecard",{store:s.component.props.store,id:a,parentId:i})});case 4:e.sent&&s.refresh();case 6:case"end":return e.stop()}},e,s)})),function(e){return n.apply(this,arguments)}),this.getListRowsCount=function(){return s.metaAction.gf("data.list").size},this.tabChange=(r=(0,d["default"])(u["default"].mark(function e(t){return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"add"!==t&&s.getData({id:t}).then(function(e){s.injections.reduce("tabChange",e,t)});case 1:case"end":return e.stop()}},e,s)})),function(e){return r.apply(this,arguments)}),this.pageChanged=function(e,t){null!=t&&null!=t||(t=s.metaAction.gf("data.pagination").toJS().pageSize);var a={currentPage:e,pageSize:t};s.refresh(a)},this.getData=(i=(0,d["default"])(u["default"].mark(function e(t,a){var n,r,i,c;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,r=s.metaAction.gf("data.pagination"),i={pageSize:r.toJS().pageSize},a&&(a.currentPage||a.pageSize)&&(0!=a.currentPage&&(i.currentPage=a.currentPage),i.pageSize=a.pageSize),c={entity:{archiveId:t.id||s.metaAction.gf("data.tabKey")},page:i},e.next=5,s.webapi.basearchive.queryDataList(c);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,s)})),function(e,t){return i.apply(this,arguments)}),this.selectRow=function(t){return function(e){s.injections.reduce("selectRow",t,e.target.checked)}},this.openSubject=(0,d["default"])(u["default"].mark(function e(){return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s.config.apps["app-account-subjects"]){e.next=2;break}throw"依赖app-account-subjects app,请使用mk clone app-account-subjects命令添加";case 2:s.component.props.setPortalContent&&s.component.props.setPortalContent("科目","app-account-subjects");case 3:case"end":return e.stop()}},e,s)})),this.personStatusClick=function(t,a){return function(e){s.metaAction.gf("data.status");s.setStatus(t,a)}},this.setStatus=(c=(0,d["default"])(u["default"].mark(function e(t,a){var n,r,i;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},t&&(n=(0,o["default"])({},t)),!t.isEnable){e.next=10;break}return n.isEnable=!1,e.next=6,s.webapi.basearchive.update(n);case 6:(r=e.sent)&&(s.metaAction.toast("success","停用自定义档案成功！"),s.injections.reduce("enable",r,a)),e.next=15;break;case 10:return n.isEnable=!0,e.next=13,s.webapi.basearchive.update(n);case 13:(i=e.sent)&&(s.metaAction.toast("success","启用自定义档案成功！"),s.injections.reduce("enable",i,a));case 15:case"end":return e.stop()}},e,s)})),function(e,t){return c.apply(this,arguments)})},n);e.exports=t["default"]},886:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(a(0)),n=d(a(7));t["default"]=function(e){var t=new c.reducer(e),a=o["default"].reducerCreator((0,i["default"])({},e,{metaReducer:t})),n=new l((0,i["default"])({},e,{metaReducer:t,extendReducer:a})),r=(0,i["default"])({},t,a.gridReducer,n);return(0,i["default"])({},r)};var s=a(14),c=a(34),r=d(a(190)),o=d(a(1001)),u=a(316);function d(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var c=this;(0,n["default"])(this,e),this.init=function(e,t){var a=(0,u.getInitState)();return c.metaReducer.init(e,a)},this.load=function(e,t,a,n){if(a&&a.page){var r={current:a.page.currentPage,total:a.page.totalCount,pageSize:a.page.pageSize};e=c.metaReducer.sf(e,"data.pagination",(0,s.fromJS)(r))}return t.list&&t.list.length?(e=c.metaReducer.sf(e,"data.other.entry","list"),e=c.metaReducer.sf(e,"data.other.userDefineArchives",(0,s.fromJS)(t.list)),e=c.metaReducer.sf(e,"data.list",(0,s.fromJS)(a.list)),"number"==typeof n?(e=c.metaReducer.sf(e,"data.tabKey",(0,s.fromJS)(t.list[t.list.length-1].id+"")),e=c.metaReducer.sf(e,"data.tabTs",(0,s.fromJS)(t.list[t.list.length-1].ts+""))):(e=c.metaReducer.sf(e,"data.tabKey",(0,s.fromJS)(t.list[0].id+"")),e=c.metaReducer.sf(e,"data.tabTs",(0,s.fromJS)(t.list[0].ts+"")))):e=c.metaReducer.sf(e,"data.other.entry","name"),e},this.tabChange=function(t,e,a){if(e&&e.page){var n={current:e.page.currentPage,total:e.page.totalCount,pageSize:e.page.pageSize};t=c.metaReducer.sf(t,"data.pagination",(0,s.fromJS)(n))}if(a){t=c.metaReducer.sf(t,"data.tabKey",a);var r=c.metaReducer.gf(t,"data.other.userDefineArchives"),i=r&&r.toJS();i&&i.some(function(e){if(a==e.id)return t=c.metaReducer.sf(t,"data.tabTs",e.ts),!0})}return t=c.metaReducer.sf(t,"data.list",(0,s.fromJS)(e.list))},this.selectAll=function(e,t,a){return e=c.extendReducer.gridReducer.selectAll(e,t,a)},this.selectRow=function(e,t,a){return e=c.metaReducer.sf(e,"data.list."+t+".selected",a)},this.enable=function(e,t,a){return t&&(e=c.metaReducer.sf(e,"data.list."+a,(0,s.fromJS)(t))),e},this.metaReducer=t.metaReducer,this.extendReducer=t.extendReducer,this.config=r["default"].current};e.exports=t["default"]}});