webpackJsonp([75],{829:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=m(r(0)),o=m(r(10)),i=m(r(7)),u=m(r(9)),c=m(r(11)),s=m(r(12)),p=r(2),d=(m(p),r(34)),f=m(r(252));function m(e){return e&&e.__esModule?e:{"default":e}}var l=(0,d.wrapper)(f["default"])(n=function(e){function t(){return(0,i["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,s["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(p.Component))||n;t["default"]=l,e.exports=t["default"]},830:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=f(r(0)),u=f(r(40)),c=f(r(41)),i=f(r(7));t["default"]=function(e){var t=new s.action(e),r=d.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),n=new m((0,o["default"])({},e,{metaAction:t,voucherAction:r})),a=(0,o["default"])({},t,r,n);return t.config({metaHandlers:a}),a};f(r(2));var s=r(34),p=(r(14),f(r(13)),f(r(156))),d=r(28);function f(e){return e&&e.__esModule?e:{"default":e}}var m=(n=function e(t){(0,i["default"])(this,e),a.call(this),this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=p["default"].current,this.webapi=this.config.webapi},a=function(){var t,i=this;this.onInit=function(e){var t=e.component,r=e.injections;i.voucherAction.onInit({component:t,injections:r}),i.component=t,i.injections=r,i.component.props.setOkListener&&i.component.props.setOkListener(i.onOk),r.reduce("init",{isPop:i.component.props.isPop}),i.load()},this.load=(0,c["default"])(u["default"].mark(function e(){var t,r,n;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n=r=void 0,!i.component.props.id&&0!==i.component.props.id){e.next=6;break}return e.next=4,i.webapi.department.query(i.component.props.id);case 4:(r=e.sent)&&(t.response=r);case 6:return e.next=8,i.webapi.department.deptAttr();case 8:(n=e.sent)&&(t.deptAttr=n),i.injections.reduce("load",t,i.component.props);case 11:case"end":return e.stop()}},e,i)})),this.onOk=(0,c["default"])(u["default"].mark(function e(){return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,i)})),this.save=(0,c["default"])(u["default"].mark(function e(){var t,r,n,a,o;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.metaAction.gf("data.form").toJS(),e.next=3,i.voucherAction.check([{path:"data.form.attribute",value:t.attribute},{path:"data.form.name",value:t.name}],i.check);case 3:if(r=e.sent,n=void 0,a={},r){e.next=8;break}return i.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 8:if((o=i.metaAction.context.get("currentOrg")||{}).id="genid",a.name=t.name.trim(),a.property=t.attribute&&t.attribute.id,a.pid=t.pid,a.ts=t.ts,a.isReturnValue=!0,!i.component.props.id){e.next=22;break}return a.id=i.component.props.id,e.next=19,i.webapi.department.update(a);case 19:n=e.sent,e.next=36;break;case 22:if(!i.component.props.parentId){e.next=31;break}return o.id!=i.component.props.parentId&&(a.pid=i.component.props.parentId),a.grade=i.component.props.grade+1||1,a.isEnable=!0,e.next=28,i.webapi.department.create(a);case 28:n=e.sent,e.next=36;break;case 31:return a.grade=i.component.props.grade+1||1,a.isEnable=!0,e.next=35,i.webapi.department.create(a);case 35:n=e.sent;case 36:if(!n||!n.error){e.next=41;break}return i.metaAction.toast("error",n.error.message),e.abrupt("return",!1);case 41:return i.metaAction.toast("success","保存成功"),e.abrupt("return",n);case 43:case"end":return e.stop()}},e,i)})),this.changeCheck=function(){var e=i.metaAction.gf("data.form").toJS();i.voucherAction.check([{path:"data.form.name",value:e.name}],i.check)},this.check=(t=(0,c["default"])(u["default"].mark(function e(t){return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.path){e.next=2;break}return e.abrupt("return");case 2:if("data.form.attribute"!=t.path){e.next=6;break}return e.abrupt("return",{errorPath:"data.other.error.attribute",message:t.value?"":"请选择部门属性"});case 6:if("data.form.name"!=t.path){e.next=8;break}return e.abrupt("return",{errorPath:"data.other.error.name",message:t.value&&t.value.trim()?"":"请录入名称"});case 8:case"end":return e.stop()}},e,i)})),function(e){return t.apply(this,arguments)}),this.fieldChange=function(e,t){i.voucherAction.fieldChange(e,t,i.check)}},n);e.exports=t["default"]},831:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=p(r(0)),i=p(r(7));t["default"]=function(e){var t=new c.reducer(e),r=new d((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,r)};var u=r(14),c=r(34),s=(p(r(156)),r(253));function p(e){return e&&e.__esModule?e:{"default":e}}var d=(n=function e(t){(0,i["default"])(this,e),a.call(this),this.metaReducer=t.metaReducer},a=function(){var o=this;this.init=function(e){return o.metaReducer.init(e,(0,s.getInitState)())},this.load=function(e,t,r){if(t.response){if(t.response.property){var n=void 0;t.deptAttr.forEach(function(e){e.id!=t.response.property||(n=e.name)}),t.response.attribute={id:t.response.property,name:n}}e=o.metaReducer.sf(e,"data.form",(0,u.fromJS)(t.response))}else{var a={};r.propertyName?a.attribute={id:r.property,name:r.propertyName}:a.attribute={id:3000010001,name:"其它（含管理）"},e=o.metaReducer.sf(e,"data.form",(0,u.fromJS)(a))}return t.deptAttr&&(e=o.metaReducer.sf(e,"data.other.attributes",(0,u.fromJS)(t.deptAttr))),e}},n);e.exports=t["default"]}});