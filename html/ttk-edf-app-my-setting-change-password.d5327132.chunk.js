webpackJsonp([50],{1008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,n=l(r(0)),s=l(r(9)),u=l(r(7)),o=l(r(8)),d=l(r(10)),i=l(r(11)),c=r(2),f=(l(c),r(35)),p=l(r(357));function l(e){return e&&e.__esModule?e:{"default":e}}var h=(0,f.wrapper)(p["default"])(a=function(e){function t(){return(0,u["default"])(this,t),(0,d["default"])(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return(0,i["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(c.Component))||a;t["default"]=h,e.exports=t["default"]},1009:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(r(0)),h=a(r(16)),w=a(r(36)),o=a(r(37)),d=a(r(7));t["default"]=function(e){var t=new n.action(e),r=new s((0,l["default"])({},e,{metaAction:t})),a=(0,l["default"])({},t,r);return t.config({metaHandlers:a}),a};a(r(2));var n=r(35),i=a(r(205)),c=a(r(150));function a(e){return e&&e.__esModule?e:{"default":e}}var s=function e(t){var r,a,n,s,u,p=this;(0,d["default"])(this,e),this.onInit=function(e){var t=e.component,r=e.injections;p.component=t,p.component.props.setOkListener&&p.component.props.setOkListener(p.onOk),(p.injections=r).reduce("init")},this.onOk=(0,o["default"])(w["default"].mark(function e(){var t,r,a,n,s;return w["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.metaAction.gf("data.form").toJS(),e.next=3,p.check([{path:"data.form.oldPassword",value:t.oldPassword},{path:"data.form.password",value:t.password},{path:"data.form.rePassword",value:t.rePassword}]);case 3:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return r=p.metaAction.context.get("currentUser"),a=r&&r.id,n=t.password,t.oldPassword=(0,c["default"])(t.oldPassword+"*the3Kingdom*"),t.password=(0,c["default"])(t.password+"*the3Kingdom*"),e.next=13,p.webapi.user.modifyPassword({id:a,oldPassword:t.oldPassword,password:t.password,passwordStrength:p.pwdLevel(n)});case 13:if(!e.sent){e.next=21;break}return p.metaAction.toast("success","修改密码成功"),sessionStorage.password=t.password,s=p.pwdLevel(n),e.abrupt("return",{passwordStrength:s});case 21:return e.abrupt("return",!1);case 22:case"end":return e.stop()}},e,p)})),this.pwdLevel=function(e){var t=0;return/[0-9]/.test(e)&&t++,/[a-zA-Z]/.test(e)&&t++,(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(e)||/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im.test(e))&&t++,t},this.fieldChange=(r=(0,o["default"])(w["default"].mark(function e(t,r){return w["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.check([{path:t,value:r}]);case 2:case"end":return e.stop()}},e,p)})),function(e,t){return r.apply(this,arguments)}),this.check=(a=(0,o["default"])(w["default"].mark(function e(t){var r,a,n,s,u,o,d,i,c,f;return w["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:r=[],n=!(a=!0),s=void 0,e.prev=6,u=(0,h["default"])(t);case 8:if(a=(o=u.next()).done){e.next=40;break}if(d=o.value,i=(0,l["default"])({},d),"data.form.oldPassword"!=d.path){e.next=20;break}return e.t0=l["default"],e.t1=i,e.next=16,p.oldPassword(d.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=36;break;case 20:if("data.form.password"!=d.path){e.next=29;break}return e.t3=l["default"],e.t4=i,e.next=25,p.password(d.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=36;break;case 29:if("data.form.rePassword"!=d.path){e.next=36;break}return e.t6=l["default"],e.t7=i,e.next=34,p.rePassword(d.value);case 34:e.t8=e.sent,(0,e.t6)(e.t7,e.t8);case 36:r.push(i);case 37:a=!0,e.next=8;break;case 40:e.next=46;break;case 42:e.prev=42,e.t9=e["catch"](6),n=!0,s=e.t9;case 46:e.prev=46,e.prev=47,!a&&u["return"]&&u["return"]();case 49:if(e.prev=49,!n){e.next=52;break}throw s;case 52:return e.finish(49);case 53:return e.finish(46);case 54:return c={},f=!0,r.forEach(function(e){c[e.path]=e.value,c[e.errorPath]=e.message,e.message&&(f=!1)}),p.metaAction.sfs(c),e.abrupt("return",f);case 59:case"end":return e.stop()}},e,p,[[6,42,46,54],[47,,49,53]])})),function(e){return a.apply(this,arguments)}),this.oldPassword=(n=(0,o["default"])(w["default"].mark(function e(t){var r;return w["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(r="请输入旧密码"),e.abrupt("return",{errorPath:"data.error.oldPassword",message:r});case 2:case"end":return e.stop()}},e,p)})),function(e){return n.apply(this,arguments)}),this.password=(s=(0,o["default"])(w["default"].mark(function e(t){var r;return w["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?/(?=^.{6,20}$)((?=.*[a-zA-Z]){1})((?=.*[0-9]){1})/.test(t)||(r="6-20位至少包含一个字母和一个数字"):r="请输入新密码",e.abrupt("return",{errorPath:"data.error.password",message:r});case 2:case"end":return e.stop()}},e,p)})),function(e){return s.apply(this,arguments)}),this.rePassword=(u=(0,o["default"])(w["default"].mark(function e(t){var r,a;return w["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.metaAction.gf("data.form").toJS(),t?/(?=^.{6,20}$)((?=.*[a-zA-Z]){1})((?=.*[0-9]){1})/.test(t)?t!=a.password&&(r="两次密码输入不一致",console.log(t,a.password)):r="6-20位至少包含一个字母和一个数字":r="请重新输入新密码",e.abrupt("return",{errorPath:"data.error.rePassword",message:r});case 3:case"end":return e.stop()}},e,p)})),function(e){return u.apply(this,arguments)}),this.metaAction=t.metaAction,this.config=i["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},1010:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(r(0)),n=d(r(7));t["default"]=function(e){var t=new s.reducer(e),r=new i((0,a["default"])({},e,{metaReducer:t}));return(0,a["default"])({},t,r)};r(14);var s=r(35),u=d(r(205)),o=r(358);function d(e){return e&&e.__esModule?e:{"default":e}}var i=function e(t){var a=this;(0,n["default"])(this,e),this.init=function(e,t){var r=(0,o.getInitState)();return a.metaReducer.init(e,r)},this.metaReducer=t.metaReducer,this.config=u["default"].current};e.exports=t["default"]}});