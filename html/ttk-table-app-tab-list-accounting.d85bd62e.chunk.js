webpackJsonp([29],{911:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=p(a(0)),i=p(a(10)),c=p(a(7)),o=p(a(9)),u=p(a(11)),s=p(a(12)),l=a(2),d=(p(l),a(33)),f=p(a(346));function p(e){return e&&e.__esModule?e:{"default":e}}var m=(0,d.wrapper)(f["default"])(n=function(e){function t(){return(0,c["default"])(this,t),(0,u["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(l.Component))||n;t["default"]=m,e.exports=t["default"]},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(a(19)),s=n(a(3)),v=n(a(39)),u=n(a(0)),l=n(a(36)),d=n(a(40)),f=n(a(7));t["default"]=function(e){var t=new i.action(e),a=x.FormDecorator.actionCreator((0,u["default"])({},e,{metaAction:t})),n=new c((0,u["default"])({},e,{metaAction:t,voucherAction:a})),r=(0,u["default"])({},t,a,n);return t.config({metaHandlers:r}),r};var p=n(a(2)),i=a(33),m=n(a(207)),x=a(34),b=a(14);function n(e){return e&&e.__esModule?e:{"default":e}}var w=x.Form.Item,k=x.Select.Option,c=function e(t){var a,n,r,i,c,h=this;(0,f["default"])(this,e),this.onInit=function(e){var t=e.component,a=e.injections;h.voucherAction.onInit({component:t,injections:a}),h.component=t,h.injections=a,h.component.props.setOkListener&&h.component.props.setOkListener(h.onOk),a.reduce("init"),h.load()},this.load=(0,d["default"])(v["default"].mark(function e(){var t;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=h.metaAction.gf("data").toJS()).value=[].concat((0,l["default"])(h.component.props.newCalc)),t.other=(0,u["default"])({},h.component.props.calcDict),h.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,h)})),this.loopFormItem=function(e){if(!e)return null;var t=["isCalcCustomer","isCalcSupplier","isCalcProject","isCalcDepartment","isCalcPerson","isCalcInventory","isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"],a=h.metaAction.gf("data.other").toJS(),r=h.metaAction.gf("data.selectValue").toJS(),i=h.metaAction.gf("data.error").toJS(),n=[],c=void 0,o=void 0;for(var u in t)-1!=e.indexOf(t[u])&&n.push({name:t[u],title:a[t[u]]});return n.map(function(e,t){var a,n=p["default"].createElement(x.Button,{type:"primary",style:{width:"100%",borderRadius:"0"},onClick:h.addArchive.bind(h,e.name,e.title)},"新增");return o=e.title,c=e.name,p["default"].createElement(w,(a={key:t,name:c,required:!0,label:o},(0,s["default"])(a,"required",!0),(0,s["default"])(a,"validateStatus",i[c]&&null!==i[c]?"error":"success"),(0,s["default"])(a,"help",i[c]&&null!==i[c]?i[c]:null),(0,s["default"])(a,"className","ttk-table-app-tab-list-accounting-form-item"),a),p["default"].createElement(x.Select,{style:{width:198},allowClear:!0,className:"ttk-table-app-tab-list-accounting-form-item-select",onFocus:h.onFocus.bind(h,c),onChange:h.handleChange.bind(h,c),value:r[c]&&r[c],dropdownFooter:n},h.returnOption(c)),p["default"].createElement("a",{className:"btn",onClick:h.adminClick.bind(h,c,o)},"管理"))})},this.addArchive=(a=(0,d["default"])(v["default"].mark(function e(t,a){var n;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=void 0,-1!=t.indexOf("isCalc")&&(n=t.slice(6).toLowerCase()),e.t0=n,e.next="customer"===e.t0?5:"department"===e.t0?8:"person"===e.t0?11:"inventory"===e.t0?14:"supplier"===e.t0?17:"project"===e.t0?20:23;break;case 5:return e.next=7,h.voucherAction.addCustomer("data.addValue.customer");case 7:return e.abrupt("break",24);case 8:return e.next=10,h.voucherAction.addDepartment("data.addValue.department");case 10:return e.abrupt("break",24);case 11:return e.next=13,h.voucherAction.addPerson("data.addValue.person");case 13:return e.abrupt("break",24);case 14:return e.next=16,h.voucherAction.addInventory("data.addValue.inventory");case 16:return e.abrupt("break",24);case 17:return e.next=19,h.voucherAction.addSupplier("data.addValue.supplier");case 19:return e.abrupt("break",24);case 20:return e.next=22,h.voucherAction.addProject("data.addValue.project");case 22:return e.abrupt("break",24);case 23:h.openUserDefineCard(t,a);case 24:h.writeBackAuxItem(t);case 25:case"end":return e.stop()}},e,h)})),function(e,t){return a.apply(this,arguments)}),this.openUserDefineCard=(n=(0,d["default"])(v["default"].mark(function e(t,a){var n,r;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.metaAction.modal("show",{title:"新增"+a,width:400,children:h.metaAction.loadApp("app-card-userdefinecard",{store:h.component.props.store,activeKey:a})});case 2:(n=e.sent)&&n.isEnable&&(r="data.addValue."+t,h.metaAction.sf(r,n),h.writeBackAuxItem(t));case 4:case"end":return e.stop()}},e,h)})),function(e,t){return n.apply(this,arguments)}),this.writeBackAuxItem=function(e){var t=h.metaAction.gf("data").toJS(),a=t.addValue,n=t.selectValue,r=t.list,i=void 0;0!=(0,o["default"])(a).length&&(a[i=-1!=e.indexOf("isCalc")?e.slice(6).toLowerCase():e]&&(n[e]=a[i].id,r[e]=r[e].concat([a[i]])),h.injections.reduce("setData",{list:r,selectValue:n}))},this.adminClick=(r=(0,d["default"])(v["default"].mark(function e(t,a){var n,r,i,c,o,u,s,l,d,f,p,m;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=r=n=void 0,-1!=t.indexOf("isCalc")?(n="部门"==a||"人员"==a?"department-personnel":t.slice(6).toLowerCase(),i=a):(n="userdefinecard",r=a,i="自定义档案"),e.next=4,h.metaAction.modal("show",{title:i,width:840,style:{top:20},className:"app-proof-of-charge-modal",bodyStyle:{height:500,paddingTop:0},footer:"",children:h.metaAction.loadApp("app-list-"+n+"?from=subjects",{store:h.component.props.store,activeKey:r,modelStatus:1})});case 4:if(e.sent){e.next=25;break}if("string"!=typeof t||t.constructor!=String){e.next=22;break}if(c=h.metaAction.gf("data.list").toJS(),-1==t.indexOf("isCalc")){e.next=17;break}return o=t.slice(6).toLowerCase(),e.next=12,h.webapi.query.calcDict("",o);case 12:u=e.sent,c[t]=u.list,h.metaAction.sf("data.list",(0,b.fromJS)(c)),e.next=22;break;case 17:return e.next=19,h.webapi.query.userdefinearchive({entity:{calcName:t}});case 19:s=e.sent,c[t]=s.list,h.metaAction.sf("data.list",(0,b.fromJS)(c));case 22:l=h.metaAction.gf("data").toJS(),d=l.list,(f=l.selectValue)[t]&&(p=f[t],m=d[t],0==m.filter(function(e){return e.id==p}).length&&(0==m.length?delete f[t]:f[t]=m[0].id)),h.injections.reduce("setData",{list:d,selectValue:f});case 25:case"end":return e.stop()}},e,h)})),function(e,t){return r.apply(this,arguments)}),this.handleChange=function(e,t){var a=h.metaAction.gf("data.selectValue").toJS();a[e]=t,h.metaAction.sf("data.selectValue",(0,b.fromJS)(a))},this.returnOption=function(e){var t=h.metaAction.gf("data.list").toJS();if(0!=(0,o["default"])(t).length&&t[e])return t[e].map(function(e){if(e.isEnable||!e.hasOwnProperty("isEnable"))return p["default"].createElement(k,{key:e.id,value:e.id},e.name)})},this.onFocus=(i=(0,d["default"])(v["default"].mark(function e(t){var a,n,r,i;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t||t.constructor!=String){e.next=16;break}if(a=h.metaAction.gf("data.list").toJS(),-1==t.indexOf("isCalc")){e.next=11;break}return n=t.slice(6).toLowerCase(),e.next=6,h.webapi.query.calcDict("",n);case 6:r=e.sent,a[t]=r.list,h.injections.reduce("loadData",a),e.next=16;break;case 11:return e.next=13,h.webapi.query.userdefinearchive({entity:{calcName:t}});case 13:i=e.sent,a[t]=i.list,h.injections.reduce("loadData",a);case 16:case"end":return e.stop()}},e,h)})),function(e){return i.apply(this,arguments)}),this.onOk=(0,d["default"])(v["default"].mark(function e(){var t,a,n,r,i,c,o,u,s;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=h.metaAction.gf("data").toJS(),a=t.selectValue,n=t.value,r=t.other,[],i={},o=c="",u=[],s=0;s<n.length;s++)o=n[s],a[o]?(c=-1!=o.indexOf("isCalc")?o.slice(6).toLowerCase()+"Id":"e"+o.slice(3),i[c]=a[o]):u.push({path:"data.error."+o,title:r[o]});return e.next=4,h.voucherAction.check(u,h.check);case 4:if(e.sent){e.next=8;break}return h.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}},e,h)})),this.check=(c=(0,d["default"])(v["default"].mark(function e(t){var a,n,r,i;return v["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=(0,u["default"])({},t),n=a.path,r=h.metaAction.gf("data.other").toJS(),i=r[n.slice(11)]+"不能为空",e.abrupt("return",{errorPath:n,message:i});case 4:case"end":return e.stop()}},e,h)})),function(e){return c.apply(this,arguments)}),this.fieldChange=function(e,t){h.voucherAction.fieldChange(e,t,h.check)},this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=m["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},913:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(0)),r=s(a(7));t["default"]=function(e){var t=new c.reducer(e),a=new l((0,n["default"])({},e,{metaReducer:t}));return(0,n["default"])({},t,a)};var i=a(14),c=a(33),o=s(a(207)),u=a(347);function s(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var n=this;(0,r["default"])(this,e),this.init=function(e,t){var a=(0,u.getInitState)();return n.metaReducer.init(e,a)},this.load=function(e,t){return e=n.metaReducer.sf(e,"data.list",(0,i.fromJS)(t.list)),e=n.metaReducer.sf(e,"data.value",(0,i.fromJS)(t.value)),e=n.metaReducer.sf(e,"data.other",(0,i.fromJS)(t.other))},this.loadData=function(e,t){return e=n.metaReducer.sf(e,"data.list",(0,i.fromJS)(t))},this.setData=function(e,t){return e=n.metaReducer.sf(e,"data.selectValue",(0,i.fromJS)(t.selectValue)),e=n.metaReducer.sf(e,"data.list",(0,i.fromJS)(t.list))},this.metaReducer=t.metaReducer,this.config=o["default"].current};e.exports=t["default"]}});