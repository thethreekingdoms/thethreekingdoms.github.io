webpackJsonp([74],{843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,a=m(n(0)),o=m(n(10)),c=m(n(7)),u=m(n(9)),i=m(n(11)),s=m(n(12)),d=n(2),f=(m(d),n(34)),p=m(n(259));function m(e){return e&&e.__esModule?e:{"default":e}}var l=(0,f.wrapper)(p["default"])(r=function(e){function t(){return(0,c["default"])(this,t),(0,i["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||r;t["default"]=l,e.exports=t["default"]},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=p(n(0)),c=p(n(40)),u=p(n(41)),i=p(n(7));t["default"]=function(e){var t=new s.action(e),n=f.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),r=new m((0,o["default"])({},e,{metaAction:t,voucherAction:n})),a=(0,o["default"])({},t,n,r);return t.config({metaHandlers:a}),a};p(n(2));var s=n(34),d=p(n(159)),f=n(28);function p(e){return e&&e.__esModule?e:{"default":e}}var m=(r=function e(t){(0,i["default"])(this,e),a.call(this),this.metaAction=t.metaAction,this.config=d["default"].current,this.voucherAction=t.voucherAction,this.webapi=this.config.webapi},a=function(){var a=this;this.onInit=function(e){var t=e.component,n=e.injections;a.voucherAction.onInit({component:t,injections:n}),a.component=t,a.injections=n,a.component.props.setOkListener&&a.component.props.setOkListener(a.onOk),n.reduce("init",{isPop:a.component.props.isPop}),a.load()},this.load=(0,u["default"])(c["default"].mark(function e(){var t,n,r;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n={},r=void 0,!a.component.props.personId&&0!==a.component.props.personId){e.next=7;break}return e.next=4,a.webapi.vendor.query(a.component.props.personId);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,a.webapi.vendor.getCode();case 9:r=e.sent;case 10:r&&(t.code=r),n&&(t.response=n),a.injections.reduce("load",t);case 13:case"end":return e.stop()}},e,a)})),this.onOk=(0,u["default"])(c["default"].mark(function e(){return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,a)})),this.save=(0,u["default"])(c["default"].mark(function e(){var t,n;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form").toJS(),e.next=3,a.voucherAction.check([{path:"data.form.code",value:t.code},{path:"data.form.name",value:t.name},{path:"data.form.taxNumber",value:t.taxNumber}],a.check);case 3:if(e.sent){e.next=7;break}return a.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 7:if(n=void 0,t.code=t.code?t.code.trim():"",t.name=t.name?t.name.trim():"",t.taxNumber=t.taxNumber?t.taxNumber.trim():"",t.linkman=t.linkman?t.linkman.trim():"",t.contactNumber=t.contactNumber?t.contactNumber.trim():"",t.openingBank=t.openingBank?t.openingBank.trim():"",t.bankAccout=t.bankAccout?t.bankAccout.trim():"",t.addressAndTel=t.addressAndTel?t.addressAndTel.trim():"",t.remark=t.remark?t.remark.trim():"",t.isReturnValue=!0,!a.component.props.personId&&0!==a.component.props.personId){e.next=25;break}return t.id=a.component.props.personId,e.next=22,a.webapi.vendor.update(t);case 22:n=e.sent,e.next=28;break;case 25:return e.next=27,a.webapi.vendor.create(t);case 27:n=e.sent;case 28:if(!n||!n.error){e.next=33;break}return a.metaAction.toast("error",n.error.message),e.abrupt("return",!1);case 33:return a.metaAction.toast("success","保存成功"),e.abrupt("return",n);case 35:case"end":return e.stop()}},e,a)})),this.changeCheck=function(e){var t=a.metaAction.gf("data.form").toJS();1==e?a.voucherAction.check([{path:"data.form.code",value:t.code}],a.check):a.voucherAction.check([{path:"data.form.name",value:t.name}],a.check)},this.check=function(e){if(e&&e.path)return"data.form.code"==e.path?{errorPath:"data.other.error.code",message:e.value&&e.value.trim()?"":"请录入编码"}:"data.form.name"==e.path?{errorPath:"data.other.error.name",message:e.value&&e.value.trim()?"":"请录入名称"}:"data.form.taxNumber"==e.path&&e.value?{errorPath:"data.other.error.taxNumber",message:!e.value||20!=e.value.length&&15!=e.value.length&&18!=e.value.length?"税号应为15，18或20位":""}:void 0},this.fieldChange=function(e,t){a.voucherAction.fieldChange(e,t,a.check)}},r);e.exports=t["default"]},845:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=p(n(0)),c=p(n(19)),u=p(n(7));t["default"]=function(e){var t=new s.reducer(e),n=new m((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,n)};var i=n(14),s=n(34),d=p(n(159)),f=n(260);function p(e){return e&&e.__esModule?e:{"default":e}}var m=(r=function e(t){(0,u["default"])(this,e),a.call(this),this.metaReducer=t.metaReducer,this.config=d["default"].current},a=function(){var r=this;this.init=function(e,t){var n=(0,f.getInitState)();return r.metaReducer.init(e,n)},this.load=function(e,t){return t.response&&(0==(0,c["default"])(t.response).length&&(t.response.isEnable=!0),e=r.metaReducer.sf(e,"data.form",(0,i.fromJS)(t.response))),t.code&&(e=r.metaReducer.sf(e,"data.form.code",(0,i.fromJS)(t.code))),e},this.modifyContent=function(e){var t=r.metaReducer.gf(e,"data.content");return r.metaReducer.sf(e,"data.content",t+"!")}},r);e.exports=t["default"]}});