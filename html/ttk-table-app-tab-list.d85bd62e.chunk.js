webpackJsonp([8],{1007:function(t,e,n){"use strict";function a(e,n){var a=void 0;["isCalcCustomer","isCalcSupplier","isCalcProject","isCalcDepartment","isCalcPerson","isCalcInventory","isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"].filter(function(t){1==e[t]&&(a=a?a+n[t]+"/":n[t]+"/")});return a&&a.endsWith("/")&&(a=a.substring(0,a.length-1)),a}Object.defineProperty(e,"__esModule",{value:!0}),e.TransSubject=function(t,e){1==t.isCalc&&(t.AuxAccCalcInfo=a(t,e));return t.balanceDirectionName=1===t.balanceDirection?"卖":"买",t},e.genAuxAccCalcInfo=a},908:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a,r=p(n(0)),i=p(n(10)),c=p(n(7)),o=p(n(9)),u=p(n(11)),d=p(n(12)),s=n(2),f=(p(s),n(33)),l=p(n(344));function p(t){return t&&t.__esModule?t:{"default":t}}var h=(0,f.wrapper)(l["default"])(a=function(t){function e(){return(0,c["default"])(this,e),(0,u["default"])(this,(e.__proto__||(0,i["default"])(e)).apply(this,arguments))}return(0,d["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),e}(s.Component))||a;e["default"]=h,t.exports=e["default"]},909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r,c=h(n(0)),d=h(n(39)),s=h(n(40)),i=h(n(7));e["default"]=function(t){var e=new o.action(t),n=l["default"].actionCreator((0,c["default"])({},t,{metaAction:e})),a=new m((0,c["default"])({},t,{metaAction:e,extendAction:n})),r=(0,c["default"])({},e,n.gridAction,a);return e.config({metaHandlers:r}),r};h(n(2));var o=n(33),u=(n(14),h(n(206))),f=(h(n(13)),h(n(1))),l=h(n(959)),p=n(86);function h(t){return t&&t.__esModule?t:{"default":t}}var m=(a=function t(e){(0,i["default"])(this,t),r.call(this),this.metaAction=e.metaAction,this.extendAction=e.extendAction,this.config=u["default"].current,this.webapi=this.config.webapi},r=function(){var e,n,u=this;this.onInit=function(t){var e=t.component,n=t.injections;u.extendAction.gridAction.onInit({component:e,injections:n}),u.component=e,(u.injections=n).reduce("init");var a=u.component.props.addEventListener;a&&a("onTabFocus",u.onTabFocus.bind(u)),u.load()},this.load=(0,s["default"])(d["default"].mark(function t(){return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u.changeSubjects();case 1:case"end":return t.stop()}},t,u)})),this.onTabFocus=(0,s["default"])(d["default"].mark(function t(){var e,n,a,r;return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=u.metaAction.context.get("currentOrg"),n=e.accountingStandards==p.consts.ACCOUNTINGSTANDARDS_2013,a=u.metaAction.gf("data").toJS(),n!=a.other.accountingStandards&&"5000010003"==a.filter.targetList?(u.metaAction.sf("data.other.accountingStandards",n),u.tabChange("all")):(u.metaAction.sf("data.other.accountingStandards",n),r=u.metaAction.gf("data.filter.targetList"),u.changeSubjects(r));case 3:case"end":return t.stop()}},t,u)})),this.setSubjectCode=(0,s["default"])(d["default"].mark(function t(){var e;return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.metaAction.modal("show",{title:"编码设置",width:650,bodyStyle:{padding:6,fontSize:12},children:u.metaAction.loadApp("ttk-table-app-tab-list-code",{store:u.component.props.store})});case 2:(e=t.sent)&&console.log(e);case 4:case"end":return t.stop()}},t,u)})),this.disabledState=function(t){var e=!1,n=t.code,a=t.grade,r=t.cashTypeId;return(5000020003==r&&1!=a||-1!=n.indexOf("1012")&&1!=a&&2!=a||"22210401"==n||-1!=n.indexOf("1001")&&1==a||5000020033==r&&1!=a||(5000020034==r||5000020035==r||5000020036==r||5000020037==r)&&2!=a||"22210109"==n||5000020005==r||5==a)&&(e=!0),e},this.addSubject=function(o){return(0,s["default"])(d["default"].mark(function t(){var e,n,a,r,i,c;return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.id,n=o.code,a=o.grade,r=o.cashTypeId,5!=a){t.next=4;break}return u.metaAction.toast("warning","已经是第五级，无法再增加下级。"),t.abrupt("return");case 4:if(!(5000020003==r&&1!=a||-1!=n.indexOf("1012")&&1!=a&&2!=a||"22210401"==n||-1!=n.indexOf("1001")&&1==a||5000020033==r&&1!=a||(5000020034==r||5000020035==r||5000020036==r||5000020037==r)&&2!=a||"22210109"==n||5000020005==r)){t.next=6;break}return t.abrupt("return");case 6:return i=u.metaAction.gf("data").toJS(),c=i.list,i.other,t.next=10,u.metaAction.modal("show",{title:"新增",width:400,okText:"保存",style:{top:40},bodyStyle:{padding:24,fontSize:12},children:u.metaAction.loadApp("app-proof-of-charge-subjects-add",{store:u.component.props.store,active:"add",newCode:v(e,n,c),data:o})});case 10:t.sent&&u.changeSubjects();case 12:case"end":return t.stop()}},t,u)}))},this.editSubject=function(n){return(0,s["default"])(d["default"].mark(function t(){var e;return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.metaAction.gf("data.list").toJS(),t.next=3,u.metaAction.modal("show",{title:"编辑",width:400,style:{top:40},okText:"保存",bodyStyle:{padding:24,fontSize:12},children:u.metaAction.loadApp("app-proof-of-charge-subjects-add",{store:u.component.props.store,active:"edit",data:n,parentSubject:g(e,n.parentId)})});case 3:t.sent&&u.changeSubjects();case 5:case"end":return t.stop()}},t,u)}))},this.deleteSubject=function(i){return(0,s["default"])(d["default"].mark(function t(){var e,n,a,r;return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!i.isSystem&&i.isEndNode&&i.isEnable){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,u.metaAction.modal("confirm",{content:"确认删除?"});case 4:if(!t.sent){t.next=14;break}return e=i.id,i.parentId,n=i.ts,i.code,(a={}).id=e,a.ts=n,t.next=11,u.webapi["delete"](i);case 11:r=t.sent,void 0,""==r&&(!0,u.metaAction.toast("success","删除成功"),u.changeSubjects());case 14:case"end":return t.stop()}},t,u)}))},this.changeSubjects=(e=(0,s["default"])(d["default"].mark(function t(e){var n,a,r,i;return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.metaAction.gf("data").toJS(),a={},"all"!==(r=e||n.filter.targetList)&&(a.accountTypeId=r),e&&!n.other.loading&&u.metaAction.sf("data.other.loading",!0),t.next=6,u.webapi.query(a);case 6:i=t.sent,n.list=i.glAccounts,n.other.calcDict=(0,c["default"])({},i.calcDict),n.other.loading=!1,u.injections.reduce("load",n);case 11:case"end":return t.stop()}},t,u)})),function(t){return e.apply(this,arguments)}),this.setScrollTop=function(t,e){},this.tabChange=(n=(0,s["default"])(d["default"].mark(function t(e){return d["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u.metaAction.sf("data.filter.targetList",e),u.metaAction.sf("data.other.loading",!0),u.changeSubjects(e);case 3:case"end":return t.stop()}},t,u)})),function(t){return n.apply(this,arguments)}),this.numberFormat=f["default"].number.format},a);function g(t,e){if(!e)return{id:null,code:"无父级",name:"",codeAndName:null,accountTypeId:null};var n=t.filter(function(t){return parseInt(t.id)==parseInt(e)});return n&&0<n.length?{id:n[0].id,code:n[0].code,name:n[0].name,codeAndName:n[0].codeAndName,accountTypeId:n[0].accountTypeId}:{id:null,code:"无父级",name:null,codeAndName:null,accountTypeId:null}}function v(e,t,n){var a=void 0,r=n.filter(function(t){return parseInt(t.parentId)==parseInt(e)});if(0==r.length)a="01";else{for(var i=[],c=0;c<r.length;c++){var o=r[c].code;i.push(o.substring(o.length-2))}var u=(i=i.sort(b))[i.length-1];"99"==u&&i.length<98?(u=i[i.length-2],a=isNaN(u)?"00":(a="00"+(parseInt(u)+1).toString()).substring(a.length-2)):a="99"==u||isNaN(u)?"00":(a="00"+(parseInt(u)+1).toString()).substring(a.length-2)}return a}function b(t,e){return t-e}t.exports=e["default"]},910:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=d(n(0)),a=d(n(7));e["default"]=function(t){var e=new i.reducer(t),n=o["default"].reducerCreator((0,r["default"])({},t,{metaReducer:e})),a=new f((0,r["default"])({},t,{metaReducer:e,extendReducer:n}));return(0,r["default"])({},e,n.gridReducer,a)};var u=n(14),i=n(33),c=(d(n(206)),n(345)),o=d(n(959)),s=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}}(n(1007));function d(t){return t&&t.__esModule?t:{"default":t}}var f=function t(e){var d=this;(0,a["default"])(this,t),this.init=function(t,e){var n=(0,c.getInitState)();return d.metaReducer.init(t,n)},this.load=function(t,e){var n=e.other.calcDict;e.list.map(function(t){s.TransSubject(t,n)});return t=d.metaReducer.sf(t,"data.list",(0,u.fromJS)(e.list)),t=d.metaReducer.sf(t,"data.filter",(0,u.fromJS)(e.filter)),t=d.metaReducer.sf(t,"data.other",(0,u.fromJS)(e.other))},this.loading=function(t,e){return d.metaReducer.sf(t,"data.other.loading",e)},this.addSubject=function(t,e,n){var a=d.metaReducer.gf(t,"data.list"),r=d.metaReducer.gf(t,"data.other").toJS();e=s.TransSubject(e,r.calcDict);var i=a.toJS().findIndex(function(t){return t.id==n}),c=(a=a.update(i,function(t){return t=t.set("isEndNode",!1)})).filter(function(t){return t.get("parentId")==n}).toArray();if(c&&0<c.length){var o=c[c.length-1].get("id");i=a.toJS().findIndex(function(t){return t.id==o})}return i++,a=(a=a.insert(i,(0,u.Map)(e))).sortBy(function(t){return t.code}),d.metaReducer.sf(t,"data.list",a)},this.deleteSubject=function(t,e,n,a){var r=d.metaReducer.gf(t,"data.list"),i=r.toJS().findIndex(function(t){return t.id==e});if(a){var c=r.filter(function(t){return t.parentId==n&&t.id!=e});if(c&&0===c.size){var o=r.filter(function(t){return t.id==n});if(o&&1==o.size){var u=r.toJS().findIndex(function(t){return t.id==n});r=r.update(u,function(t){return t=t.set("isEndNode",!0)})}}r=r["delete"](i)}return d.metaReducer.sf(t,"data.list",r)},this.updateSubject=function(t,e){if(e){var n=d.metaReducer.gf(t,"data.list"),a=d.metaReducer.gf(t,"data.other").toJS();e=s.TransSubject(e,a.calcDict);var r=n.toJS().findIndex(function(t){return t.id==e.id});return n=n.update(r,function(t){return e}),d.metaReducer.sf(t,"data.list",n)}},this.metaReducer=e.metaReducer};t.exports=e["default"]},959:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{"default":a},c=n(34);e["default"]={actionCreator:function(t){return{gridAction:new c.GridDecorator.action((0,i["default"])({},t,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected"}}}))}},reducerCreator:function(t){return{gridReducer:new c.GridDecorator.reducer((0,i["default"])({},t,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected"}}}))}}},t.exports=e["default"]}});