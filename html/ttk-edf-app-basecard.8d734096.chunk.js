webpackJsonp([74],{781:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=m(r(0)),o=m(r(10)),s=m(r(7)),u=m(r(9)),c=m(r(11)),i=m(r(12)),d=r(2),f=(m(d),r(34)),p=m(r(238));function m(e){return e&&e.__esModule?e:{"default":e}}var l=(0,f.wrapper)(p["default"])(n=function(e){function t(){return(0,s["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,i["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||n;t["default"]=l,e.exports=t["default"]},782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=m(r(0)),s=m(r(40)),u=m(r(41)),c=m(r(7));t["default"]=function(e){var t=new i.action(e),r=p.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),n=new l((0,o["default"])({},e,{metaAction:t,voucherAction:r})),a=(0,o["default"])({},t,r,n);return t.config({metaHandlers:a}),a};m(r(2));var i=r(34),d=r(14),f=(m(r(13)),m(r(151))),p=r(35);function m(e){return e&&e.__esModule?e:{"default":e}}var l=(n=function e(t){(0,c["default"])(this,e),a.call(this),this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=f["default"].current,this.webapi=this.config.webapi},a=function(){var t,a=this;this.onInit=function(e){var t=e.component,r=e.injections;a.voucherAction.onInit({component:t,injections:r}),a.component=t,a.injections=r,a.component.props.setOkListener&&a.component.props.setOkListener(a.onOk),r.reduce("init",{isPop:a.component.props.isPop}),a.load()},this.load=(0,u["default"])(s["default"].mark(function e(){var t,r;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,a.webapi.department.query();case 3:if(r=e.sent,t.departments=r,!a.component.props.personId&&0!=a.component.props.personId){e.next=10;break}return e.next=8,a.webapi.person.findById(a.component.props.personId);case 8:r=e.sent,t.person=r;case 10:a.injections.reduce("load",t);case 11:case"end":return e.stop()}},e,a)})),this.onOk=(0,u["default"])(s["default"].mark(function e(){return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,a)})),this.save=(0,u["default"])(s["default"].mark(function e(){var t,r,n;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form").toJS(),e.next=3,a.voucherAction.check([{path:"data.form.name",value:t.name},{path:"data.form.mobile",value:t.mobile}],a.check);case 3:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:if(!t.id&&0!=t.id){e.next=13;break}return e.next=9,a.webapi.person.update(t);case 9:(r=e.sent)&&(a.metaAction.toast("success","保存人员成功"),a.injections.reduce("setPerson",r)),e.next=17;break;case 13:return e.next=15,a.webapi.person.create(t);case 15:(n=e.sent)&&(a.metaAction.toast("success","保存人员成功"),a.injections.reduce("setPerson",n));case 17:return e.abrupt("return",!0);case 18:case"end":return e.stop()}},e,a)})),this.add=function(){a.injections.reduce("setPerson",{id:void 0,name:"",sex:"0",birthday:"1980-01-01",mobile:"",dept:void 0,address:"北京海淀"})},this.prev=(0,u["default"])(s["default"].mark(function e(){var t,r;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.webapi.person.prev(t);case 3:(r=e.sent)&&a.injections.reduce("setPerson",r);case 5:case"end":return e.stop()}},e,a)})),this.next=(0,u["default"])(s["default"].mark(function e(){var t,r;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.metaAction.gf("data.form.id"),e.next=3,a.webapi.person.next(t);case 3:(r=e.sent)&&a.injections.reduce("setPerson",r);case 5:case"end":return e.stop()}},e,a)})),this.check=(t=(0,u["default"])(s["default"].mark(function e(t){var r;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.path){e.next=2;break}return e.abrupt("return");case 2:if("data.form.name"!=t.path){e.next=6;break}return e.abrupt("return",{errorPath:"data.other.error.name",message:t.value?"":"请录入姓名"});case 6:if("data.form.mobile"!=t.path){e.next=10;break}return r=void 0,t.value?/^1[3|4|5|8][0-9]\d{8}$/.test(t.value)||(r="请录入有效的手机号"):r="请录入手机号",e.abrupt("return",{errorPath:"data.other.error.mobile",message:r});case 10:case"end":return e.stop()}},e,a)})),function(e){return t.apply(this,arguments)}),this.departmentFocus=(0,u["default"])(s["default"].mark(function e(){var t;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.webapi.department.query();case 2:t=e.sent,a.metaAction.sf("data.other.departments",(0,d.fromJS)(t));case 4:case"end":return e.stop()}},e,a)})),this.addDepartment=(0,u["default"])(s["default"].mark(function e(){var t;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.config.apps["mk-app-department-card"]){e.next=2;break}throw"依赖mk-app-department-card app,请使用mk clone mk-app-department-card命令添加";case 2:return e.next=4,a.metaAction.modal("show",{title:"新增部门",children:a.metaAction.loadApp("mk-app-department-card",{store:a.component.props.store})});case 4:(t=e.sent)&&a.injections.reduce("addDepartment",t);case 6:case"end":return e.stop()}},e,a)})),this.fieldChange=function(e,t){a.voucherAction.fieldChange(e,t,a.check)}},n);e.exports=t["default"]},783:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=d(r(0)),s=d(r(7));t["default"]=function(e){var t=new c.reducer(e),r=new f((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,r)};var u=r(14),c=r(34),i=(d(r(151)),d(r(13)),r(239));function d(e){return e&&e.__esModule?e:{"default":e}}var f=(n=function e(t){(0,s["default"])(this,e),a.call(this),this.metaReducer=t.metaReducer},a=function(){var a=this;this.init=function(e,t){return a.metaReducer.init(e,(0,i.getInitState)(t))},this.load=function(e,t){var r=t.person,n=t.departments;return r&&(e=a.metaReducer.sf(e,"data.form",(0,u.fromJS)(r))),a.metaReducer.sf(e,"data.other.departments",(0,u.fromJS)(n))},this.setPerson=function(e,t){return e=a.metaReducer.sf(e,"data.form",(0,u.fromJS)(t)),a.metaReducer.sf(e,"data.other.checkFields",(0,u.List)())},this.addDepartment=function(e,t){t.id;var r=t.code;t.name;return a.metaReducer.sf(e,"data.form.department",r)}},n);e.exports=t["default"]}});