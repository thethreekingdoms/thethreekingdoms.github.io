webpackJsonp([75],{952:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,n=h(r(0)),o=h(r(10)),c=h(r(7)),u=h(r(9)),s=h(r(11)),i=h(r(12)),d=r(2),f=(h(d),r(33)),p=h(r(346));function h(e){return e&&e.__esModule?e:{"default":e}}var l=(0,f.wrapper)(p["default"])(a=function(e){function t(){return(0,c["default"])(this,t),(0,s["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,i["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=l,e.exports=t["default"]},953:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n,o=p(r(0)),c=p(r(39)),u=p(r(40)),s=p(r(7));t["default"]=function(e){var t=new i.action(e),r=f.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),a=new h((0,o["default"])({},e,{metaAction:t,voucherAction:r})),n=(0,o["default"])({},t,r,a);return t.config({metaHandlers:n}),n};p(r(2));var i=r(33),d=p(r(204)),f=r(34);function p(e){return e&&e.__esModule?e:{"default":e}}var h=(a=function e(t){(0,s["default"])(this,e),n.call(this),this.metaAction=t.metaAction,this.config=d["default"].current,this.voucherAction=t.voucherAction,this.webapi=this.config.webapi},n=function(){var t,n=this;this.onInit=function(e){var t=e.component,r=e.injections;n.voucherAction.onInit({component:t,injections:r}),n.component=t,n.injections=r,n.component.props.setOkListener&&n.component.props.setOkListener(n.onOk),r.reduce("init",{isPop:n.component.props.isPop}),n.load()},this.load=(0,u["default"])(c["default"].mark(function e(){var t,r,a;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},r={},a=void 0,!n.component.props.personId&&0!==n.component.props.personId){e.next=7;break}return e.next=4,n.webapi.currency.query(n.component.props.personId);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,n.webapi.currency.getCode();case 9:a=e.sent;case 10:a&&(t.code=a),r&&(t.response=r),n.injections.reduce("load",t);case 13:case"end":return e.stop()}},e,n)})),this.getDetail=(t=(0,u["default"])(c["default"].mark(function e(t){var r;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.webapi.bankaccount.query(t);case 2:(r=e.sent).result&&n.injections.reduce("setCurrency",r.data);case 4:case"end":return e.stop()}},e,n)})),function(e){return t.apply(this,arguments)}),this.onOk=(0,u["default"])(c["default"].mark(function e(){return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,n)})),this.save=(0,u["default"])(c["default"].mark(function e(){var t,r;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.metaAction.gf("data.form").toJS(),e.next=3,n.voucherAction.check([{path:"data.form.code",value:t.code},{path:"data.form.name",value:t.name},{path:"data.form.exchangeRate",value:t.exchangeRate}],n.check);case 3:if(e.sent){e.next=7;break}return n.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 7:if(r=void 0,t.code=t.code?t.code.trim():"",t.name=t.name?t.name.trim():"",t.isReturnValue=!0,!n.component.props.personId&&0!==n.component.props.personId){e.next=18;break}return t.id=n.component.props.personId,e.next=15,n.webapi.currency.update(t);case 15:r=e.sent,e.next=21;break;case 18:return e.next=20,n.webapi.currency.create(t);case 20:r=e.sent;case 21:if(!r||!r.error){e.next=26;break}return n.metaAction.toast("error",r.error.message),e.abrupt("return",!1);case 26:return n.metaAction.toast("success","保存成功"),e.abrupt("return",r);case 28:case"end":return e.stop()}},e,n)})),this.changeCheck=function(e){var t=n.metaAction.gf("data.form").toJS();1==e?n.voucherAction.check([{path:"data.form.code",value:t.code}],n.check):n.voucherAction.check([{path:"data.form.name",value:t.name}],n.check)},this.check=function(e){if(e&&e.path)return"data.form.code"==e.path?{errorPath:"data.other.error.code",message:e.value&&e.value.trim()?"":"请录入编码"}:"data.form.name"==e.path?{errorPath:"data.other.error.name",message:e.value&&e.value.trim()?"":"请录入名称"}:"data.form.exchangeRate"==e.path?e.value?e.value<0?{errorPath:"data.other.error.exchangeRate",message:e.value<0?"汇率为非负值":""}:{errorPath:"data.other.error.exchangeRate",message:1e12<e.value?"最大整数位为12位":""}:{errorPath:"data.other.error.exchangeRate",message:e.value?"":"请录入汇率"}:void 0},this.fieldChange=function(e,t){n.voucherAction.fieldChange(e,t,n.check)}},a);e.exports=t["default"]},954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n,o=p(r(0)),c=p(r(19)),u=p(r(7));t["default"]=function(e){var t=new i.reducer(e),r=new h((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,r)};var s=r(14),i=r(33),d=p(r(204)),f=r(347);function p(e){return e&&e.__esModule?e:{"default":e}}var h=(a=function e(t){(0,u["default"])(this,e),n.call(this),this.metaReducer=t.metaReducer,this.config=d["default"].current},n=function(){var a=this;this.init=function(e,t){var r=(0,f.getInitState)();return a.metaReducer.init(e,r)},this.load=function(e,t){return t.response&&(0==(0,c["default"])(t.response).length&&(t.response.isEnable=!0),e=a.metaReducer.sf(e,"data.form",(0,s.fromJS)(t.response))),t.code&&(e=a.metaReducer.sf(e,"data.form.code",(0,s.fromJS)(t.code))),e},this.setCurrency=function(e,t){return a.metaReducer.sf(e,"data.currency",t)}},a);e.exports=t["default"]}});