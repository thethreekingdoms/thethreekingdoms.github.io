webpackJsonp([27],{923:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=l(n(0)),o=l(n(10)),c=l(n(7)),u=l(n(9)),i=l(n(11)),s=l(n(12)),d=n(2),f=(l(d),n(33)),m=l(n(353));function l(e){return e&&e.__esModule?e:{"default":e}}var p=(0,f.wrapper)(m["default"])(a=function(e){function t(){return(0,c["default"])(this,t),(0,i["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=p,e.exports=t["default"]},924:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=r(n(39)),s=r(n(40)),d=r(n(7)),a=r(n(9));t["default"]=function(e){var t=new c.action(e),n=u.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),a=new p((0,o["default"])({},e,{metaAction:t,voucherAction:n})),r=(0,o["default"])({},t,n,a);return t.config({metaHandlers:r}),r};var f=r(n(2)),c=(r(n(15)),n(33)),m=r(n(211)),l=n(14),u=n(34);function r(e){return e&&e.__esModule?e:{"default":e}}var p=function(){function c(e){var t,n,a,r,o,u=this;(0,d["default"])(this,c),this.onInit=function(e){var t=e.component,n=e.injections;u.voucherAction.onInit({component:t,injections:n}),u.component=t,u.injections=n,u.onWriteBackAuxItem=t.props.onWriteBackAuxItem;var a=u.component.props.initData?u.component.props.initData.toJS():{};n.reduce("init",a),u.load(a)},this.load=(t=(0,s["default"])(i["default"].mark(function e(t){var n;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.webapi.query.allArchive({isEnable:!0});case 2:n=e.sent,u.injections.reduce("load",t,n),u.writeBackAuxItem();case 5:case"end":return e.stop()}},e,u)})),function(e){return t.apply(this,arguments)}),this.componentDidMount=function(){var t=u;setTimeout(function(){var e=document.getElementsByClassName("ttk-voucher-app-document-assistitem")[0];e&&(e.addEventListener?e.addEventListener("keydown",t.handleKeyDown.bind(t),!1):e.attachEvent?e.attachEvent("onkeydown",t.handleKeyDown.bind(t)):e.onKeyDown=t.handleKeyDown.bind(t))},0)},this.componentDidUpdate=function(){if(u.metaAction.gf("data.other.isSetFocus")){var t=document.getElementsByClassName("ttk-voucher-app-document-assistitem")[0];t&&setTimeout(function(){var e=t.children[0].children[1].getElementsByClassName("ant-select-selection")[0];e&&(e.tabIndex=0,e.focus())},0),u.metaAction.sf("data.other.isSetFocus",!1)}},this.writeBackAuxItem=function(){var e=u.metaAction.gf("data.form.auxAccountSubjects")?u.metaAction.gf("data.form.auxAccountSubjects").toJS():void 0;u.onWriteBackAuxItem(e)},this.addArchive=(n=(0,s["default"])(i["default"].mark(function e(t,n){return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="customer"===e.t0?3:"department"===e.t0?7:"person"===e.t0?11:"inventory"===e.t0?15:"supplier"===e.t0?19:"project"===e.t0?23:27;break;case 3:return e.next=5,u.voucherAction.addCustomer("data.form.auxAccountSubjects.customer");case 5:return u.addItemtoList("data.other.customer","data.form.auxAccountSubjects.customer"),e.abrupt("break",28);case 7:return e.next=9,u.voucherAction.addDepartment("data.form.auxAccountSubjects.department");case 9:return u.addItemtoList("data.other.department","data.form.auxAccountSubjects.department"),e.abrupt("break",28);case 11:return e.next=13,u.voucherAction.addPerson("data.form.auxAccountSubjects.person");case 13:return u.addItemtoList("data.other.person","data.form.auxAccountSubjects.person"),e.abrupt("break",28);case 15:return e.next=17,u.voucherAction.addInventory("data.form.auxAccountSubjects.inventory");case 17:return u.addItemtoList("data.other.inventory","data.form.auxAccountSubjects.inventory"),e.abrupt("break",28);case 19:return e.next=21,u.voucherAction.addSupplier("data.form.auxAccountSubjects.supplier");case 21:return u.addItemtoList("data.other.supplier","data.form.auxAccountSubjects.supplier"),e.abrupt("break",28);case 23:return e.next=25,u.voucherAction.addProject("data.form.auxAccountSubjects.project");case 25:return u.addItemtoList("data.other.project","data.form.auxAccountSubjects.project"),e.abrupt("break",28);case 27:u.openUserDefineCard(t,n);case 28:u.writeBackAuxItem();case 29:case"end":return e.stop()}},e,u)})),function(e,t){return n.apply(this,arguments)}),this.addItemtoList=function(e,t){var n=u.metaAction.gf(e),a=u.metaAction.gf(t);n=n.push(a),u.metaAction.sf(e,n)},this.openUserDefineCard=(a=(0,s["default"])(i["default"].mark(function e(t,n){var a,r;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.metaAction.modal("show",{title:"新增"+t,width:400,children:u.metaAction.loadApp("app-card-userdefinecard",{store:u.component.props.store,activeKey:t})});case 2:(a=e.sent)&&a.isEnable&&(r="data.form.auxAccountSubjects."+n,u.injections.reduce("setUserDefineItem",r,a),u.addItemtoList("data.other."+n,r),u.writeBackAuxItem());case 4:case"end":return e.stop()}},e,u)})),function(e,t){return a.apply(this,arguments)}),this.archiveFocus=(r=(0,s["default"])(i["default"].mark(function e(t){var n,a,r,o,c;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=void 0,n="department"==t?{entity:{isEnable:!0,isEndNode:!0}}:{entity:{isEnable:!0}},!(-1<t.indexOf("exCalc"))){e.next=11;break}return a=t.substr(t.length-1,1),r={entity:{calcName:"isExCalc"+a,isEnable:!0}},e.next=7,u.webapi.query.userDefineItem(r);case 7:o=e.sent,u.metaAction.sf("data.other."+t,(0,l.fromJS)(o.list)),e.next=15;break;case 11:return e.next=13,u.webapi.query.fixedArchive(n,t);case 13:c=e.sent,u.metaAction.sf("data.other."+t,(0,l.fromJS)(c.list));case 15:case"end":return e.stop()}},e,u)})),function(e){return r.apply(this,arguments)}),this.onFieldChange=function(a,r){return function(t){var e=a.find(function(e){return e.id==t});e?u.metaAction.sf(r,(0,l.fromJS)(e)):u.metaAction.sf(r,t);var n=u.metaAction.gf("data.form.auxAccountSubjects").toJS();u.onWriteBackAuxItem(n)}},this.getDisplayValue=function(t,e){if(!t)return"";var n=e.filter(function(e){return e.id==t.id});return n&&0<n.length?t.id:t.name},this.openContent=(o=(0,s["default"])(i["default"].mark(function e(t,n){var a,r;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0,r="自定义档案","department"!=t&&"person"!=t){e.next=6;break}return u.component.props.setPortalContent&&u.component.props.setPortalContent("部门人员","app-list-department-personnel",{}),e.abrupt("return");case 6:a="app-list-"+t+"?from=certificate","userdefinecard"!==t&&(r=n);case 8:return e.next=10,u.metaAction.modal("show",{title:f["default"].createElement("span",{style:{fontWeight:"bold"}},r),className:"ttk-voucher-app-document-modal",width:800,footer:null,bodyStyle:{height:450},children:u.metaAction.loadApp(a,{store:u.component.props.store,activeKey:n,modelStatus:2})});case 10:e.sent;case 11:case"end":return e.stop()}},e,u)})),function(e,t){return o.apply(this,arguments)}),this.metaAction=e.metaAction,this.voucherAction=e.voucherAction,this.config=m["default"].current,this.webapi=this.config.webapi}return(0,a["default"])(c,[{key:"componentWillUnmount",value:function(){var e=document.getElementsByClassName("ttk-voucher-app-document-assistitem")[0];e&&(e.removeEventListener?e.removeEventListener("keydown",this.handleKeyDown.bind(this),!1):e.detachEvent?e.detachEvent("onkeydown",this.handleKeyDown.bind(this)):e.onKeyDown=void 0)}},{key:"handleKeyDown",value:function(e){var n=this;if("Enter"===e.key||13==e.keyCode||108==e.keyCode){var a=document.getElementsByClassName("ttk-voucher-app-document-assistitem")[0];a&&setTimeout(function(){var e=n.getNextFocusIndex();if(-1<e){var t=a.children[e].children[1].getElementsByClassName("ant-select-selection")[0];t&&(t.tabIndex=0,t.focus())}else-1==e&&setTimeout(function(){var e=document.getElementById("auxItemConfirm");e&&e.click()},0)},0)}}},{key:"getNextFocusIndex",value:function(){var e=void 0;if(-1<document.activeElement.className.indexOf("ant-select-selection--single")){var t=this.metaAction.gf("data.other.auxItems").toJS(),n=document.activeElement.parentElement.parentElement.parentElement.parentElement.parentElement,a=n.children[0].children[0].innerText,r=t.indexOf(a);e=r<n.parentElement.parentElement.children[0].children.length-1?r+1:-1}return e}}]),c}();e.exports=t["default"]},925:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,o=m(n(0)),c=m(n(7));t["default"]=function(e){var t=new i.reducer(e),n=f.FormDecorator.reducerCreator((0,o["default"])({},e,{metaReducer:t})),a=new l((0,o["default"])({},e,{metaReducer:t,voucherReducer:n}));return(0,o["default"])({},t,a)};var u=n(14),i=n(33),s=m(n(211)),d=n(354),f=n(34);function m(e){return e&&e.__esModule?e:{"default":e}}var l=(a=function e(t){(0,c["default"])(this,e),r.call(this),this.metaReducer=t.metaReducer,this.config=s["default"].current},r=function(){var c=this;this.init=function(e,t){var n=(0,d.getInitState)(t);return c.metaReducer.init(e,n)},this.load=function(e,t,n){var a=t.auxAccountSubjectsPreSelected,r=[];t.isCalcCustomer&&(r.push("客户"),e=c.metaReducer.sf(e,"data.other.customer",(0,u.fromJS)(n["客户"]))),t.isCalcSupplier&&(r.push("供应商"),e=c.metaReducer.sf(e,"data.other.supplier",(0,u.fromJS)(n["供应商"]))),t.isCalcProject&&(r.push("项目"),e=c.metaReducer.sf(e,"data.other.project",(0,u.fromJS)(n["项目"]))),t.isCalcDepartment&&(r.push("部门"),e=c.metaReducer.sf(e,"data.other.department",(0,u.fromJS)(n["部门"]))),t.isCalcPerson&&(r.push("人员"),e=c.metaReducer.sf(e,"data.other.person",(0,u.fromJS)(n["人员"]))),t.isCalcInventory&&(r.push("存货"),e=c.metaReducer.sf(e,"data.other.inventory",(0,u.fromJS)(n["存货"])));for(var o=1;o<=10;o++)t["isExCalc"+o]&&(r.push(t.calcDict["isExCalc"+o]),e=c.metaReducer.sf(e,"data.other.exCalc"+o,(0,u.fromJS)(c.getUserdefineDS(n,"isExCalc"+o))));return e=c.metaReducer.sf(e,"data.other.auxItems",(0,u.fromJS)(r)),a&&(e=c.metaReducer.sf(e,"data.form.auxAccountSubjects",(0,u.fromJS)(a))),e},this.getUserdefineDS=function(e,t){for(var n=e["自定义档案"],a=[],r=0;r<n.length;r++)n[r].calcName==t&&(a=n[r].userDefineArchiveDataList);return a},this.setUserDefineItem=function(e,t,n){return e=c.metaReducer.sf(e,t,(0,u.fromJS)(n))}},a);e.exports=t["default"]}});