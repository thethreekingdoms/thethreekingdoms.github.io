webpackJsonp([75],{840:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=l(r(0)),o=l(r(10)),c=l(r(7)),u=l(r(9)),s=l(r(11)),i=l(r(12)),d=r(2),f=(l(d),r(34)),p=l(r(257));function l(e){return e&&e.__esModule?e:{"default":e}}var m=(0,f.wrapper)(p["default"])(n=function(e){function t(){return(0,c["default"])(this,t),(0,s["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,i["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||n;t["default"]=m,e.exports=t["default"]},841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=p(r(0)),c=p(r(40)),u=p(r(41)),s=p(r(7));t["default"]=function(e){var t=new i.action(e),r=f.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),n=new l((0,o["default"])({},e,{metaAction:t,voucherAction:r})),a=(0,o["default"])({},t,r,n);return t.config({metaHandlers:a}),a};p(r(2));var i=r(34),d=(r(14),p(r(13)),p(r(158))),f=r(28);function p(e){return e&&e.__esModule?e:{"default":e}}var l=(n=function e(t){(0,s["default"])(this,e),a.call(this),this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=d["default"].current,this.webapi=this.config.webapi},a=function(){var t,a=this;this.onInit=function(e){var t=e.component,r=e.injections;a.voucherAction.onInit({component:t,injections:r}),a.component=t,a.injections=r,a.component.props.setOkListener&&a.component.props.setOkListener(a.onOk),r.reduce("init",{isPop:a.component.props.isPop}),a.load()},this.load=(0,u["default"])(c["default"].mark(function e(){var t,r,n;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},r={},n=void 0,!a.component.props.personId&&0!==a.component.props.personId){e.next=7;break}return e.next=4,a.webapi.project.query(a.component.props.personId);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,a.webapi.project.getCode();case 9:n=e.sent;case 10:n&&(t.code=n),r&&(t.response=r),a.injections.reduce("load",t);case 13:case"end":return e.stop()}},e,a)})),this.onOk=(0,u["default"])(c["default"].mark(function e(){return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,a)})),this.save=(0,u["default"])(c["default"].mark(function e(){var t,r;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form").toJS(),e.next=3,a.voucherAction.check([{path:"data.form.code",value:t.code},{path:"data.form.name",value:t.name}],a.check);case 3:if(e.sent){e.next=7;break}return a.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 7:if(r=void 0,t.code=t.code?t.code.trim():"",t.name=t.name?t.name.trim():"",t.isReturnValue=!0,!a.component.props.personId&&0!==a.component.props.personId){e.next=18;break}return t.id=a.component.props.personId,e.next=15,a.webapi.project.update(t);case 15:r=e.sent,e.next=21;break;case 18:return e.next=20,a.webapi.project.create(t);case 20:r=e.sent;case 21:if(!r||!r.error){e.next=26;break}return a.metaAction.toast("error",r.error.message),e.abrupt("return",!1);case 26:return a.metaAction.toast("success","保存成功"),e.abrupt("return",r);case 28:case"end":return e.stop()}},e,a)})),this.changeCheck=function(e){var t=a.metaAction.gf("data.form").toJS();1==e?a.voucherAction.check([{path:"data.form.code",value:t.code}],a.check):a.voucherAction.check([{path:"data.form.name",value:t.name}],a.check)},this.check=(t=(0,u["default"])(c["default"].mark(function e(t){return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.path){e.next=2;break}return e.abrupt("return");case 2:if("data.form.code"!=t.path){e.next=6;break}return e.abrupt("return",{errorPath:"data.other.error.code",message:t.value&&t.value.trim()?"":"请录入编码"});case 6:if("data.form.name"!=t.path){e.next=8;break}return e.abrupt("return",{errorPath:"data.other.error.name",message:t.value&&t.value.trim()?"":"请录入名称"});case 8:case"end":return e.stop()}},e,a)})),function(e){return t.apply(this,arguments)}),this.fieldChange=function(e,t){a.voucherAction.fieldChange(e,t,a.check)}},n);e.exports=t["default"]},842:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=f(r(0)),c=f(r(19)),u=f(r(7));t["default"]=function(e){var t=new i.reducer(e),r=new p((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,r)};var s=r(14),i=r(34),d=(f(r(158)),f(r(13)),r(258));function f(e){return e&&e.__esModule?e:{"default":e}}var p=(n=function e(t){(0,u["default"])(this,e),a.call(this),this.metaReducer=t.metaReducer},a=function(){var r=this;this.init=function(e){return r.metaReducer.init(e,(0,d.getInitState)())},this.load=function(e,t){return t.response&&(0==(0,c["default"])(t.response).length&&(t.response.isEnable=!0),e=r.metaReducer.sf(e,"data.form",(0,s.fromJS)(t.response))),t.code&&(e=r.metaReducer.sf(e,"data.form.code",(0,s.fromJS)(t.code))),e},this.setproject=function(e,t){return e=r.metaReducer.sf(e,"data.form",(0,s.fromJS)(t))}},n);e.exports=t["default"]}});