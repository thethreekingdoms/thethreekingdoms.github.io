webpackJsonp([7],{1000:function(e,t,n){e.exports=n.p+"other.c290fc8d.png"},858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=p(n(0)),o=p(n(10)),u=p(n(7)),i=p(n(9)),s=p(n(11)),c=p(n(12)),f=n(2),d=(p(f),n(33)),l=p(n(305));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,d.wrapper)(l["default"])(a=function(e){function t(){return(0,u["default"])(this,t),(0,s["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,c["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(f.Component))||a;t["default"]=h,e.exports=t["default"]},859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=a(n(0)),h=a(n(18)),m=a(n(39)),o=a(n(40)),u=a(n(7));t["default"]=function(e){var t=new r.action(e),n=new l((0,p["default"])({},e,{metaAction:t})),a=(0,p["default"])({},t,n);return t.config({metaHandlers:a}),a};a(n(2));var r=n(33),i=a(n(90)),s=a(n(998)),c=a(n(999)),f=a(n(1e3)),d=n(1);function a(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var n,a,r,l=this;(0,u["default"])(this,e),this.onInit=function(e){var t=e.component,n=e.injections;l.component=t,(l.injections=n).reduce("init"),l.load()},this.load=(0,o["default"])(m["default"].mark(function e(){var t,n;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.metaAction.context.get("currentUser"),e.next=3,l.webapi.mySetting.init(t&&t.id);case 3:n=e.sent,l.injections.reduce("load",n);case 5:case"end":return e.stop()}},e,l)})),this.saveBaseInfo=(0,o["default"])(m["default"].mark(function e(){var t;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.metaAction.gf("data.form").toJS(),e.next=3,l.check([{path:"data.form.nickname",value:t.nickname}]);case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,l.webapi.user.update({mobile:t.mobile,sex:t.sex,nickname:t.nickname,birthday:t.birthday});case 8:l.component.props.onPortalReload&&l.component.props.onPortalReload(),l.metaAction.toast("success","保存个人资料成功");case 10:case"end":return e.stop()}},e,l)})),this.upload=function(){},this.getPhoto=function(e){return 1==e?c["default"]:2==e?s["default"]:f["default"]},this.getPasswordStrength=function(){var e=l.metaAction.gf("data.form.passwordStrength");return 1==e?"弱":2==e?"中":3==e?"高":void 0},this.getColor=function(){var e=l.metaAction.gf("data.form.passwordStrength");return 1==e?"orangeBg":2==e?"yellowBg":3==e?"greenBg":void 0},this.fieldChange=(n=(0,o["default"])(m["default"].mark(function e(t,n){return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.check([{path:t,value:n}]);case 2:case"end":return e.stop()}},e,l)})),function(e,t){return n.apply(this,arguments)}),this.check=(a=(0,o["default"])(m["default"].mark(function e(t){var n,a,r,o,u,i,s,c,f,d;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:n=[],r=!(a=!0),o=void 0,e.prev=6,u=(0,h["default"])(t);case 8:if(a=(i=u.next()).done){e.next=22;break}if(s=i.value,c=(0,p["default"])({},s),"data.form.nickname"!=s.path){e.next=18;break}return e.t0=p["default"],e.t1=c,e.next=16,l.checkNickname(s.value);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2);case 18:n.push(c);case 19:a=!0,e.next=8;break;case 22:e.next=28;break;case 24:e.prev=24,e.t3=e["catch"](6),r=!0,o=e.t3;case 28:e.prev=28,e.prev=29,!a&&u["return"]&&u["return"]();case 31:if(e.prev=31,!r){e.next=34;break}throw o;case 34:return e.finish(31);case 35:return e.finish(28);case 36:return f={},d=!0,n.forEach(function(e){f[e.path]=e.value,f[e.errorPath]=e.message,e.message&&(d=!1)}),l.metaAction.sfs(f),e.abrupt("return",d);case 41:case"end":return e.stop()}},e,l,[[6,24,28,36],[29,,31,35]])})),function(e){return a.apply(this,arguments)}),this.checkNickname=(r=(0,o["default"])(m["default"].mark(function e(t){var n;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?50<t.length&&(n="昵称不能超过50个字"):n="请录入昵称",e.abrupt("return",{errorPath:"data.other.error.nickname",message:n});case 2:case"end":return e.stop()}},e,l)})),function(e){return r.apply(this,arguments)}),this.getAccessTokenJson=function(){return{token:d.fetch.getAccessToken()}},this.changePassword=(0,o["default"])(m["default"].mark(function e(){var t;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.metaAction.modal("show",{title:"修改登录密码",width:500,height:251,children:l.metaAction.loadApp("ttk-edf-app-my-setting-change-password",{store:l.component.props.store})});case 2:(t=e.sent).passwordStrength&&l.metaAction.sf("data.form.passwordStrength",t.passwordStrength);case 4:case"end":return e.stop()}},e,l)})),this.changeMobile=(0,o["default"])(m["default"].mark(function e(){var t;return m["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.metaAction.modal("show",{title:"修改手机号",width:500,height:251,children:l.metaAction.loadApp("ttk-edf-app-my-setting-change-mobile",{store:l.component.props.store,mobile:l.metaAction.gf("data.form.mobile")})});case 2:(t=e.sent).newMobile&&l.metaAction.sf("data.form.mobile",t.newMobile);case 4:case"end":return e.stop()}},e,l)})),this.metaAction=t.metaAction,this.config=i["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(0)),a=c(n(7));t["default"]=function(e){var t=new r.reducer(e),n=new f((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,n)};var u=n(14),r=n(33),i=c(n(90)),s=n(306);function c(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var r=this;(0,a["default"])(this,e),this.init=function(e,t){var n=(0,s.getInitState)();return r.metaReducer.init(e,n)},this.load=function(e,t){var n=t.user,a=t.securityLevel;return n.sex=void 0===n.sex?0:n.sex,n.sex=n.sex+"",n.nickname=n.nickname||n.mobile,r.metaReducer.sf(e,"data.form",(0,u.fromJS)((0,o["default"])({},n,{securityLevel:a})))},this.metaReducer=t.metaReducer,this.config=i["default"].current};e.exports=t["default"]},998:function(e,t,n){e.exports=n.p+"female.a5f9c9e0.png"},999:function(e,t,n){e.exports=n.p+"male.08af014b.png"}});