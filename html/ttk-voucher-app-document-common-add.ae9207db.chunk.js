webpackJsonp([31],{1065:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,n=m(r(0)),u=m(r(10)),c=m(r(7)),i=m(r(9)),o=m(r(11)),s=m(r(12)),d=r(2),l=(m(d),r(34)),f=m(r(404));function m(e){return e&&e.__esModule?e:{"default":e}}var p=(0,l.wrapper)(f["default"])(a=function(e){function t(){return(0,c["default"])(this,t),(0,o["default"])(this,(t.__proto__||(0,u["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=p,e.exports=t["default"]},1066:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=a(r(0)),p=a(r(16)),g=a(r(40)),c=a(r(41)),i=a(r(7));t["default"]=function(e){var t=new n.action(e),r=new u((0,m["default"])({},e,{metaAction:t})),a=(0,m["default"])({},t,r);return t.config({metaHandlers:a}),a};a(r(2));var n=r(34),o=a(r(231));function a(e){return e&&e.__esModule?e:{"default":e}}var u=function e(t){var r,a,n,u,f=this;(0,i["default"])(this,e),this.onInit=function(e){var t=e.component,r=e.injections;f.component=t,f.injections=r,f.component.props.setOkListener&&f.component.props.setOkListener(f.onOk),r.reduce("init"),f.load(f.component.props.initData)},this.load=(r=(0,c["default"])(g["default"].mark(function e(t){var r,a,n,u,c,i,o;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.certificateData){e.next=18;break}return r=t.certificateData.toJS(),a=r.details,e.next=4,f.webapi.commonDoc.getNewCode();case 4:n=e.sent,u={code:n},c=0;case 7:if(!(c<a.length)){e.next=14;break}if(""==a[c].summary){e.next=11;break}return 30<a[c].summary.length?(i=a[c].summary.slice(0,30),u.name=i):u.name=a[c].summary,e.abrupt("break",14);case 11:c++,e.next=7;break;case 14:u.isDisplayCheckBox=!0,f.injections.reduce("load",r,u),e.next=19;break;case 18:t.template&&((o={}).modify=t.modify,o.id=t.template.get("docTemplateId"),o.code=t.template.get("docTemplateCode"),o.name=t.template.get("docTemplateName"),o.isDisplayCheckBox=!1,f.injections.reduce("load",{},o));case 19:case"end":return e.stop()}},e,f)})),function(e){return r.apply(this,arguments)}),this.onOk=(0,c["default"])(g["default"].mark(function e(){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,f)})),this.save=(0,c["default"])(g["default"].mark(function e(){var t,r,a,n,u,c;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.metaAction.gf("data.form").toJS(),e.next=3,f.check([{path:"data.form.code",value:t.code},{path:"data.form.name",value:t.name}]);case 3:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:if(r=!f.metaAction.gf("data.other.certificateData"),a=f.metaAction.gf("data.form").get("modify")||!1,!r&&!a){e.next=25;break}return(n={}).docTemplateId=f.metaAction.gf("data.form.id"),n.docTemplateCode=f.metaAction.gf("data.form.code"),n.docTemplateName=f.metaAction.gf("data.form.name"),n.isReturnValue=!0,e.next=15,f.webapi.commonDoc.update(n);case 15:if(!(u=e.sent)||0!=u.result){e.next=21;break}return f.metaAction.toast("warning",u.error.message),e.abrupt("return",!1);case 21:return f.metaAction.toast("success","常用模版保存成功！"),e.abrupt("return",{result:!0,editTemplate:n});case 23:e.next=34;break;case 25:return e.next=27,f.webapi.commonDoc.create(f.getTemplateFromCertificate());case 27:if(!(c=e.sent)||0!=c.result){e.next=33;break}return f.metaAction.toast("warning",c.error.message),e.abrupt("return",!1);case 33:f.metaAction.toast("success","常用模版保存成功！");case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}},e,f)})),this.check=(a=(0,c["default"])(g["default"].mark(function e(t){var r,a,n,u,c,i,o,s,d,l;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:r=[],n=!(a=!0),u=void 0,e.prev=6,c=(0,p["default"])(t);case 8:if(a=(i=c.next()).done){e.next=31;break}if(o=i.value,s=(0,m["default"])({},o),"data.form.code"!=o.path){e.next=20;break}return e.t0=m["default"],e.t1=s,e.next=16,f.checkCode(o.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 20:if("data.form.name"!=o.path){e.next=27;break}return e.t3=m["default"],e.t4=s,e.next=25,f.checkName(o.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5);case 27:r.push(s);case 28:a=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t6=e["catch"](6),n=!0,u=e.t6;case 37:e.prev=37,e.prev=38,!a&&c["return"]&&c["return"]();case 40:if(e.prev=40,!n){e.next=43;break}throw u;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return d={},l=!0,r.forEach(function(e){d[e.path]=e.value,d[e.errorPath]=e.message,e.message&&(l=!1)}),f.metaAction.sfs(d),e.abrupt("return",l);case 50:case"end":return e.stop()}},e,f,[[6,33,37,45],[38,,40,44]])})),function(e){return a.apply(this,arguments)}),this.checkCode=(n=(0,c["default"])(g["default"].mark(function e(t){var r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(r="请录入编码！"),e.abrupt("return",{errorPath:"data.other.error.code",message:r});case 2:case"end":return e.stop()}},e,f)})),function(e){return n.apply(this,arguments)}),this.checkName=(u=(0,c["default"])(g["default"].mark(function e(t){var r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(r="请录入名称！"),e.abrupt("return",{errorPath:"data.other.error.name",message:r});case 2:case"end":return e.stop()}},e,f)})),function(e){return u.apply(this,arguments)}),this.getTemplateFromCertificate=function(){var e=f.metaAction.gf("data.other.certificateData"),t=f.metaAction.gf("data.form"),r={};r.docTemplateCode=t.get("code"),r.docTemplateName=t.get("name"),r.isSaveAmount=t.get("isSaveAmount")||!1,r.docType=e.get("docType"),r.isReturnValue=!0,r.entrys=[];var a=e.get("details");if(a&&a.size){var n=!0,u=!1,c=void 0;try{for(var i,o=(0,p["default"])(a);!(n=(i=o.next()).done);n=!0){var s=i.value,d=f.convertVoucherItemForServer(s,!1);d&&r.entrys.push(d)}}catch(e){u=!0,c=e}finally{try{!n&&o["return"]&&o["return"]()}finally{if(u)throw c}}}return r},this.convertVoucherItemForServer=function(e,t){if(e&&e.get("accountingSubject")){var r=e.get("accountingSubject");if((!r.get("isCalcQuantity")&&!r.get("isCalcMulti")||e.get("quantityAndForeignCurrency"))&&(!r.get("isCalc")||r.get("auxAccountSubjects"))){var a={summary:e.get("summary"),accountId:r.get("id"),origAmountDr:e.get("debitAmount"),amountDr:e.get("debitAmount"),origAmountCr:e.get("creditAmount"),amountCr:e.get("creditAmount"),inPutTaxDeductId:e.get("inPutTaxDeductId")?e.get("inPutTaxDeductId"):null};if(t&&(e.get("id")?(a.id=e.get("id"),a.rowStatus=2,a.ts=e.get("ts")):a.rowStatus=1),r.get("isCalcQuantity")?(a.quantity=e.get("quantityAndForeignCurrency").get("quantity"),a.price=e.get("quantityAndForeignCurrency").get("price"),a.unitId=r.get("unitId"),a.exchangeRate=1):(a.quantity=null,a.price=null,a.unitId=null,a.exchangeRate=null),r.get("isCalcMulti")?(a.currencyId=e.get("quantityAndForeignCurrency").get("currency")?e.get("quantityAndForeignCurrency").get("currency").get("id"):"",a.exchangeRate=e.get("quantityAndForeignCurrency").get("exchangeRate"),a.amountDr?a.origAmountDr=e.get("quantityAndForeignCurrency").get("origAmount")||0:a.origAmountCr=e.get("quantityAndForeignCurrency").get("origAmount")||0):(a.currencyId=null,a.exchangeRate=1,a.origAmountDr=null,a.origAmountCr=null),r.get("isCalc")){var n=r.get("auxAccountSubjects");r.get("isCalcDepartment")?a.departmentId=n.get("department").get("id"):a.departmentId=null,r.get("isCalcPerson")?a.personId=n.get("person").get("id"):a.personId=null,r.get("isCalcCustomer")?a.customerId=n.get("customer").get("id"):a.customerId=null,r.get("isCalcSupplier")?a.supplierId=n.get("supplier").get("id"):a.supplierId=null,r.get("isCalcInventory")?a.inventoryId=n.get("inventory").get("id"):a.inventoryId=null,r.get("isCalcProject")?a.projectId=n.get("project").get("id"):a.projectId=null;for(var u=1;u<=10;u++)r.get("isExCalc"+u)?a["exCalc"+u]=n.get("exCalc"+u).get("id"):a["exCalc"+u]=null}else{a.customerId=null,a.departmentId=null,a.personId=null,a.inventoryId=null,a.supplierId=null,a.projectId=null;for(u=1;u<=10;u++)a["exCalc"+u]=null}return a}}},this.metaAction=t.metaAction,this.config=o["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},1067:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(r(0)),n=s(r(7));t["default"]=function(e){var t=new c.reducer(e),r=new d((0,a["default"])({},e,{metaReducer:t}));return(0,a["default"])({},t,r)};var u=r(14),c=r(34),i=s(r(231)),o=r(405);function s(e){return e&&e.__esModule?e:{"default":e}}var d=function e(t){var a=this;(0,n["default"])(this,e),this.init=function(e,t){var r=(0,o.getInitState)();return a.metaReducer.init(e,r)},this.load=function(e,t,r){return e=a.metaReducer.sf(e,"data.other.certificateData",(0,u.fromJS)(t)),a.metaReducer.sf(e,"data.form",(0,u.fromJS)(r))},this.metaReducer=t.metaReducer,this.config=i["default"].current};e.exports=t["default"]}});