webpackJsonp([60],{749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,n=p(a(0)),o=p(a(10)),c=p(a(7)),i=p(a(9)),s=p(a(11)),u=p(a(12)),d=a(2),f=(p(d),a(33)),m=p(a(240));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,f.wrapper)(m["default"])(r=function(e){function t(){return(0,c["default"])(this,t),(0,s["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,u["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||r;t["default"]=h,e.exports=t["default"]},750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,o=m(a(0)),u=m(a(39)),c=m(a(40)),i=m(a(7));t["default"]=function(e){var t=new s.action(e),a=f.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),r=new p((0,o["default"])({},e,{metaAction:t,voucherAction:a})),n=(0,o["default"])({},t,a,r);return t.config({metaHandlers:n}),n};m(a(2));var s=a(33),d=m(a(155)),f=a(34);function m(e){return e&&e.__esModule?e:{"default":e}}var p=(r=function e(t){(0,i["default"])(this,e),n.call(this),this.metaAction=t.metaAction,this.config=d["default"].current,this.voucherAction=t.voucherAction,this.webapi=this.config.webapi},n=function(){var s=this;this.onInit=function(e){var t=e.component,a=e.injections;s.voucherAction.onInit({component:t,injections:a}),s.component=t,s.injections=a,s.activeKey="",s.component.props.setOkListener&&s.component.props.setOkListener(s.onOk);var r=void 0;s.component.props.archivesName&&(r=s.component.props.archivesName),a.reduce("init",r),s.load()},this.load=(0,c["default"])(u["default"].mark(function e(){var t,a,r,n,o;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={},r=a=void 0,e.next=5,s.webapi.basearchive.queryList();case 5:if(n=e.sent,!s.component.props.activeKey){e.next=11;break}return n.list&&n.list.forEach(function(e){e.name==s.component.props.activeKey&&(s.activeKey=e.id)}),e.next=10,s.webapi.basearchive.getCode({userDefineArchiveId:s.activeKey,archiveName:"ba_userdefinearchive_data"});case 10:a=e.sent;case 11:if(!s.component.props.archivesName){e.next=15;break}t.archivesName=!0,e.next=26;break;case 15:if(void 0===s.component.props.parentId){e.next=22;break}return o={id:s.component.props.parentId,parentId:s.component.props.id},e.next=19,s.webapi.basearchive.queryData(o);case 19:r=e.sent,e.next=26;break;case 22:if(void 0===s.component.props.id){e.next=26;break}return e.next=25,s.webapi.basearchive.getCode({userDefineArchiveId:s.component.props.id,archiveName:"ba_userdefinearchive_data"});case 25:a=e.sent;case 26:a&&(t.code=a),r&&(t=r),s.injections.reduce("load",t);case 29:case"end":return e.stop()}},e,s)})),this.onOk=(0,c["default"])(u["default"].mark(function e(){return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,s)})),this.save=(0,c["default"])(u["default"].mark(function e(){var t,a,r,n,o,c,i;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.metaAction.gf("data.form").toJS(),a={},r=s.metaAction.gf("data.ts"),n=s.metaAction.gf("data.archiveId"),o=s.component.props.archivesName,c=[{path:"data.form.name",value:t.name}],o||c.push({path:"data.form.code",value:t.code}),e.next=5,s.voucherAction.check(c,s.check);case 5:if(e.sent){e.next=9;break}return s.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 9:if(i=void 0,t.code=t.code?t.code.trim():"",t.name=t.name?t.name.trim():"",t.remark=t.remark?t.remark.trim():"",t.isReturnValue=!0,!o){e.next=23;break}return a.name=t.name.trim(),a.isEnable=!0,a.isReturnValue=!0,e.next=20,s.webapi.basearchive.queryName(a);case 20:i=e.sent,e.next=44;break;case 23:if(!s.component.props.parentId){e.next=32;break}return t.id=s.component.props.parentId,t.archiveId=n,t.ts=r,e.next=29,s.webapi.basearchive.update(t);case 29:i=e.sent,e.next=44;break;case 32:if(!s.component.props.id){e.next=39;break}return t.archiveId=s.component.props.id,e.next=36,s.webapi.basearchive.create(t);case 36:i=e.sent,e.next=44;break;case 39:if(""==s.activeKey){e.next=44;break}return t.archiveId=s.activeKey,e.next=43,s.webapi.basearchive.create(t);case 43:i=e.sent;case 44:if(!i||!i.error){e.next=49;break}return s.metaAction.toast("error",i.error.message),e.abrupt("return",!1);case 49:return s.metaAction.toast("success","保存成功"),e.abrupt("return",i);case 51:case"end":return e.stop()}},e,s)})),this.changeCheck=function(e){var t=s.metaAction.gf("data.form").toJS();1==e?s.voucherAction.check([{path:"data.form.code",value:t.code}],s.check):s.voucherAction.check([{path:"data.form.name",value:t.name}],s.check)},this.check=function(e){if(e&&e.path)return"data.form.code"==e.path?{errorPath:"data.other.error.code",message:e.value&&e.value.trim()?"":"请录入编码"}:"data.form.name"==e.path?{errorPath:"data.other.error.name",message:e.value&&e.value.trim()?"":"请录入名称"}:void 0},this.fieldChange=function(e,t){s.voucherAction.fieldChange(e,t,s.check)}},r);e.exports=t["default"]},751:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,o=m(a(0)),c=m(a(19)),i=m(a(7));t["default"]=function(e){var t=new u.reducer(e),a=new p((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,a)};var s=a(14),u=a(33),d=m(a(155)),f=a(241);function m(e){return e&&e.__esModule?e:{"default":e}}var p=(r=function e(t){(0,i["default"])(this,e),n.call(this),this.metaReducer=t.metaReducer,this.config=d["default"].current},n=function(){var r=this;this.init=function(e,t){var a=(0,f.getInitState)();return null!=t&&(a.data.archivesName=t),r.metaReducer.init(e,a)},this.load=function(e,t){return t.code&&(e=r.metaReducer.sf(e,"data.form.code",(0,s.fromJS)(t.code))),t.name&&(e=r.metaReducer.sf(e,"data.form.name",(0,s.fromJS)(t.name))),t.remark&&(e=r.metaReducer.sf(e,"data.form.remark",(0,s.fromJS)(t.remark))),e=r.metaReducer.sf(e,"data.form.isEnable",(0,s.fromJS)(t.isEnable)),t.archivesName&&(e=r.metaReducer.sf(e,"data.archivesName",(0,s.fromJS)(!0))),t.archiveId&&(e=r.metaReducer.sf(e,"data.archiveId",(0,s.fromJS)(t.archiveId))),t.ts&&(e=r.metaReducer.sf(e,"data.ts",(0,s.fromJS)(t.ts))),1==(0,c["default"])(t).length&&(e=r.metaReducer.sf(e,"data.form.isEnable",(0,s.fromJS)(!0))),e},this.modifyContent=function(e){var t=r.metaReducer.gf(e,"data.content");return r.metaReducer.sf(e,"data.content",t+"!")}},r);e.exports=t["default"]}});