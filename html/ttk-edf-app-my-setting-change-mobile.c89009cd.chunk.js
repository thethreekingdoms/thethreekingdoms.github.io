webpackJsonp([44],{908:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,n=d(a(0)),s=d(a(10)),u=d(a(7)),i=d(a(9)),c=d(a(11)),o=d(a(12)),f=a(2),l=(d(f),a(34)),p=d(a(325));function d(e){return e&&e.__esModule?e:{"default":e}}var h=(0,l.wrapper)(p["default"])(r=function(e){function t(){return(0,u["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,s["default"])(t)).apply(this,arguments))}return(0,o["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(f.Component))||r;t["default"]=h,e.exports=t["default"]},909:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=r(a(0)),b=r(a(16)),m=r(a(40)),c=r(a(41)),o=r(a(7));t["default"]=function(e){var t=new n.action(e),a=new s((0,h["default"])({},e,{metaAction:t})),r=(0,h["default"])({},t,a);return t.config({metaHandlers:r}),r};r(a(2));var n=a(34),f=r(a(193)),l=r(a(145));a(144);function r(e){return e&&e.__esModule?e:{"default":e}}var s=function e(t){var r,a,n,s,u,i,d=this;(0,o["default"])(this,e),this.onInit=function(e){var t=e.component,a=e.injections;d.component=t,d.component.props.setOkListener&&d.component.props.setOkListener(d.onOk),d.component.props.setCancelLister&&d.component.props.setCancelLister(d.onCancel),(d.injections=a).reduce("init",d.component.props.mobile)},this.countDown=60,this.timer=null,this.getCaptchaing=!1,this.getCaptcha=(0,c["default"])(m["default"].mark(function e(){var t,a,r;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!d.getCaptchaing){e.next=2;break}return e.abrupt("return");case 2:return d.getCaptchaing=!0,d.metaAction.sf("data.timeStaus",!1),(t=d).timer=setInterval(function(){0!=t.countDown?t.metaAction.sf("data.time",--t.countDown+"s"):t.clearTimer(!0,"重新获取")},1e3),(a={}).mobile=d.metaAction.gf("data.form.newMobile"),a.smsType=3,e.next=11,d.webapi.captcha.fetch(a);case 11:r=e.sent,d.metaAction.sf("data.form.sign",r),d.metaAction.toast("success","验证码已经发送到您的手机");case 14:case"end":return e.stop()}},e,d)})),this.clearTimer=function(e,t){this.metaAction.sf("data.timeStaus",!0),this.metaAction.sf("data.time",t),this.countDown=60,this.getCaptchaing=!1,clearInterval(this.timer)},this.onOk=(0,c["default"])(m["default"].mark(function e(){var t,a,r;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.metaAction.context.get("currentUser"),a=t&&t.id,r=d.metaAction.gf("data.form").toJS(),e.next=5,d.check([{path:"data.form.oldMobile",value:r.oldMobile},{path:"data.form.password",value:r.password},{path:"data.form.newMobile",value:r.newMobile},{path:"data.form.captcha",value:r.captcha}],"change");case 5:if(e.sent){e.next=8;break}return e.abrupt("return",!1);case 8:if((0,l["default"])(r.password+"*the3Kingdom*")!=sessionStorage.getItem("password")){e.next=16;break}return d.clearTimer(!1,"获取验证码"),e.next=12,d.webapi.user.update({id:a,mobile:r.newMobile,captcha:r.captcha});case 12:return d.metaAction.toast("success","手机修改成功"),e.abrupt("return",{newMobile:r.newMobile});case 16:return d.metaAction.sf("data.error.password","密码输入错误"),e.abrupt("return",!1);case 18:case"end":return e.stop()}},e,d)})),this.onCancel=function(){d.clearTimer(!1,"获取验证码")},this.fieldChange=(r=(0,c["default"])(m["default"].mark(function e(t,a,r){return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.check([{path:t,value:a}],r);case 2:case"end":return e.stop()}},e,d)})),function(e,t,a){return r.apply(this,arguments)}),this.check=(a=(0,c["default"])(m["default"].mark(function e(t,a){var r,n,s,u,i,c,o,f,l,p;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:r=[],s=!(n=!0),u=void 0,e.prev=6,i=(0,b["default"])(t);case 8:if(n=(c=i.next()).done){e.next=49;break}if(o=c.value,f=(0,h["default"])({},o),"data.form.oldMobile"!=o.path){e.next=20;break}return e.t0=h["default"],e.t1=f,e.next=16,d.oldMobile(o.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=45;break;case 20:if("data.form.password"!=o.path){e.next=29;break}return e.t3=h["default"],e.t4=f,e.next=25,d.password(o.value);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=45;break;case 29:if("data.form.newMobile"!=o.path){e.next=38;break}return e.t6=h["default"],e.t7=f,e.next=34,d.newMobile(o.value,a);case 34:e.t8=e.sent,(0,e.t6)(e.t7,e.t8),e.next=45;break;case 38:if("data.form.captcha"!=o.path){e.next=45;break}return e.t9=h["default"],e.t10=f,e.next=43,d.captcha(o.value);case 43:e.t11=e.sent,(0,e.t9)(e.t10,e.t11);case 45:r.push(f);case 46:n=!0,e.next=8;break;case 49:e.next=55;break;case 51:e.prev=51,e.t12=e["catch"](6),s=!0,u=e.t12;case 55:e.prev=55,e.prev=56,!n&&i["return"]&&i["return"]();case 58:if(e.prev=58,!s){e.next=61;break}throw u;case 61:return e.finish(58);case 62:return e.finish(55);case 63:return l={},p=!0,r.forEach(function(e){l[e.path]=e.value,l[e.errorPath]=e.message,e.message&&(p=!1)}),d.metaAction.sfs(l),e.abrupt("return",p);case 68:case"end":return e.stop()}},e,d,[[6,51,55,63],[56,,58,62]])})),function(e,t){return a.apply(this,arguments)}),this.oldMobile=(n=(0,c["default"])(m["default"].mark(function e(t){var a;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="请输入手机号"),e.abrupt("return",{errorPath:"data.error.oldMobile",message:a});case 2:case"end":return e.stop()}},e,d)})),function(e){return n.apply(this,arguments)}),this.password=(s=(0,c["default"])(m["default"].mark(function e(t){var a;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="请输入密码"),e.abrupt("return",{errorPath:"data.error.password",message:a});case 2:case"end":return e.stop()}},e,d)})),function(e){return s.apply(this,arguments)}),this.newMobile=(u=(0,c["default"])(m["default"].mark(function e(t,a){var r;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||"change"!=a){e.next=15;break}if(t){e.next=5;break}r="请输入手机号",e.next=13;break;case 5:if(11==t.length){e.next=9;break}r="请输入正确的手机号",e.next=13;break;case 9:return e.next=11,d.webapi.user.existsMobile(t);case 11:e.sent&&(r="该手机号已经注册");case 13:e.next=36;break;case 15:if(t){e.next=19;break}e.next=36;break;case 19:if(1!=t.length||"1"==t){e.next=23;break}r="请输入正确的手机号",e.next=36;break;case 23:if(!(1<t.length&&t.length<11)||/^1[3|4|5|8|7]/.test(t)){e.next=27;break}r="请输入正确的手机号",e.next=36;break;case 27:if(!(11<t.length)){e.next=31;break}r="请输入正确的手机号",e.next=36;break;case 31:if(11!=t.length){e.next=36;break}return e.next=34,d.webapi.user.existsMobile(t);case 34:e.sent&&(r="该手机号已经注册");case 36:return e.abrupt("return",{errorPath:"data.error.newMobile",message:r});case 37:case"end":return e.stop()}},e,d)})),function(e,t){return u.apply(this,arguments)}),this.captcha=(i=(0,c["default"])(m["default"].mark(function e(t){var a,r,n,s;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.metaAction.gf("data.form.sign"),n=d.metaAction.gf("data.form.newMobile"),s={sign:r,mobile:n,captcha:t},t){e.next=7;break}a="请输入验证码",e.next=11;break;case 7:return e.next=9,d.webapi.captcha.validate(s);case 9:if(e.sent){e.next=11;break}a="验证码输入错误";case 11:return e.abrupt("return",{errorPath:"data.error.captcha",message:a});case 12:case"end":return e.stop()}},e,d)})),function(e){return i.apply(this,arguments)}),this.metaAction=t.metaAction,this.config=f["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},910:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,s=f(a(0)),u=f(a(7));t["default"]=function(e){var t=new i.reducer(e),a=new l((0,s["default"])({},e,{metaReducer:t}));return(0,s["default"])({},t,a)};a(14);var i=a(34),c=f(a(193)),o=a(326);function f(e){return e&&e.__esModule?e:{"default":e}}var l=(r=function e(t){(0,u["default"])(this,e),n.call(this),this.metaReducer=t.metaReducer,this.config=c["default"].current},n=function(){var r=this;this.init=function(e,t){var a=(0,o.getInitState)();return a.data.form.oldMobile=t,r.metaReducer.init(e,a)}},r);e.exports=t["default"]}});