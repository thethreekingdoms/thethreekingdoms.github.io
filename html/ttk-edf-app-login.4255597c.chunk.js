webpackJsonp([7],{1010:function(e,t,r){e.exports=r.p+"login-bg-1.216f94e4.jpg"},1011:function(e,t,r){e.exports=r.p+"login-bg-2.43b85a72.jpg"},1012:function(e,t,r){e.exports=r.p+"login-bg-3.23778f3b.jpg"},767:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,a=p(r(0)),o=p(r(10)),s=p(r(7)),i=p(r(9)),u=p(r(11)),c=p(r(12)),f=r(2),l=(p(f),r(34)),d=p(r(236));function p(e){return e&&e.__esModule?e:{"default":e}}var g=(0,l.wrapper)(d["default"])(n=function(e){function t(){return(0,s["default"])(this,t),(0,u["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,c["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(f.Component))||n;t["default"]=g,e.exports=t["default"]},768:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var g=r(s(0)),m=r(s(16)),h=r(s(40)),i=r(s(41)),u=r(s(7));t["default"]=function(e){var t=new a.action(e),r=new o((0,g["default"])({},e,{metaAction:t})),n=(0,g["default"])({},t,r);return t.config({metaHandlers:n}),n};var c=r(s(2)),a=s(34),f=r(s(152)),l=r(s(143)),d=s(35);function r(e){return e&&e.__esModule?e:{"default":e}}var o=function e(t){var r,n,a,o,p=this;(0,u["default"])(this,e),this.onInit=function(e){var t=e.component,r=e.injections;p.component=t;var n={mobile:"13333333333",password:"1",remember:!1},a=(new Date).getTime();var o=function(e){if(0<document.cookie.length){var t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;var r=document.cookie.indexOf(";",t);return-1==r&&(r=document.cookie.length),unescape(document.cookie.substring(t,r))}}return""}("THE_LAST_LOGIN");o&&(n.mobile=o),a<localStorage.remember?(n.remember=!0,n.mobile==localStorage.mobile&&(n.password=localStorage.password)):localStorage.clear(),(p.injections=r).reduce("init",n),p.getCarouselBg(),p.bindEnter()},this.getLogo=function(){return p.config.logo},this.getCarouselBg=(0,i["default"])(h["default"].mark(function e(){var t;return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{},{},{}],e.next=3,s(1010);case 3:return t[0].url=e.sent,e.next=6,s(1011);case 6:return t[1].url=e.sent,e.next=9,s(1012);case 9:t[2].url=e.sent,p.injections.reduce("load",t);case 11:case"end":return e.stop()}},e,p)})),this.bindEnter=function(){var r=p;document.onkeydown=function(e){if(13===e.keyCode){var t=r.metaAction.gf("data.form").toJS();r.fieldChange("data.form.mobile",t.mobile),r.fieldChange("data.form.password",t.password),r.login()}}},this.login=(0,i["default"])(h["default"].mark(function e(){var t,r,n,a,o,s;return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e,t,r){var n=new Date;n.setDate(n.getDate()+r),document.cookie=e+"="+escape(t)+(null==r?"":";expires="+n.toGMTString())},t=p.metaAction.gf("data.form").toJS(),r=p.metaAction.gf("data.other").toJS(),e.next=5,p.check([{path:"data.form.mobile",value:t.mobile},{path:"data.form.password",value:t.password}],"login");case 5:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return r.userInput=!0,r.userInput&&t.password&&(t.password=(0,l["default"])(t.password+"*thethreekingdoms*")),e.next=12,p.webapi.user.login(t);case 12:if((n=e.sent).result){e.next=16;break}return 50111==n.error.code&&p.metaAction.sf("data.other.error.password","密码不正确，请重新输入"),e.abrupt("return");case 16:a("THE_LAST_LOGIN",t.mobile,7),p.metaAction.context.set("user",n.value),t.remember?(o=(new Date).getTime()+6048e5,localStorage.remember=o,localStorage.mobile=t.mobile,localStorage.password=t.password):localStorage.clear(),sessionStorage.mobile=t.mobile,sessionStorage.username=n.value.nickname,sessionStorage._accessToken=n.token,sessionStorage.password=t.password,sessionStorage.currentOrgStatus=n.value.currentOrgStatus,document.onkeydown=null,s=n.value.skin&&n.value.skin.toUpperCase()||"#00B38A",localStorage.skin=s,p.component.props.onRedirect&&p.config.goAfterLogin&&p.component.props.onRedirect(p.config.goAfterLogin);case 28:case"end":return e.stop()}},e,p)})),this.renderCal=function(){var e=p.metaAction.gf("data.other.imgs").toJS();console.log(e);var t=p.metaAction.gf("data").toJS();return c["default"].createElement(d.Carousel,{autoplay:!0,initialSlide:t.other.selectedImgIndex,afterChange:p.imgChange},e.map(function(e){return c["default"].createElement("div",null,c["default"].createElement("img",{src:e.url}),c["default"].createElement("div",{className:"ttk-edf-app-login-content-ad"},c["default"].createElement("p",null,"企业开发平台"),c["default"].createElement("p",null,"广告词预留区域广告词预留区域")))}))},this.goRegisterA=function(){p.goRegister(),_hmt.push(["_trackEvent","系统管理","企业登录","右上角立即注册"])},this.goRegisterB=function(){p.goRegister(),_hmt.push(["_trackEvent","系统管理","企业登录","右下角立即注册"])},this.goRegister=function(){if(document.onkeydown=null,!p.config.apps["ttk-edf-app-register"])throw"请将这个应用加入到带ttk-edf-app-root和ttk-edf-app-register的网站中，跳转功能才能正常使用";p.component.props.onRedirect&&p.config.goRegister&&p.component.props.onRedirect(p.config.goRegister)},this.goForgot=function(){if(!p.config.apps["ttk-edf-app-forgot-password"])throw"请将这个应用加入到带ttk-edf-app-root和ttk-edf-app-forgot-password的网站中，跳转功能才能正常使用";p.component.props.onRedirect&&p.config.goForgot&&(p.component.props.onRedirect(p.config.goForgot),_hmt.push(["_trackEvent","系统管理","企业登录","忘记密码"]))},this.fieldChange=(r=(0,i["default"])(h["default"].mark(function e(t,r){return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.metaAction.sf(t,r),e.next=3,p.check([{path:t,value:r}]);case 3:case"end":return e.stop()}},e,p)})),function(e,t){return r.apply(this,arguments)}),this.check=(n=(0,i["default"])(h["default"].mark(function e(t,r){var n,a,o,s,i,u,c,f,l,d;return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:n=[],o=!(a=!0),s=void 0,e.prev=6,i=(0,m["default"])(t);case 8:if(a=(u=i.next()).done){e.next=31;break}if(c=u.value,f=(0,g["default"])({},c),"data.form.mobile"!=c.path){e.next=20;break}return e.t0=g["default"],e.t1=f,e.next=16,p.checkMobile(c.value,r);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=27;break;case 20:if("data.form.password"!=c.path){e.next=27;break}return e.t3=g["default"],e.t4=f,e.next=25,p.checkPassword(c.value,r);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5);case 27:n.push(f);case 28:a=!0,e.next=8;break;case 31:e.next=37;break;case 33:e.prev=33,e.t6=e["catch"](6),o=!0,s=e.t6;case 37:e.prev=37,e.prev=38,!a&&i["return"]&&i["return"]();case 40:if(e.prev=40,!o){e.next=43;break}throw s;case 43:return e.finish(40);case 44:return e.finish(37);case 45:return l={},d=!0,n.forEach(function(e){l[e.errorPath]=e.message,e.message&&(d=!1)}),p.metaAction.sfs(l),e.abrupt("return",d);case 50:case"end":return e.stop()}},e,p,[[6,33,37,45],[38,,40,44]])})),function(e,t){return n.apply(this,arguments)}),this.checkMobile=(a=(0,i["default"])(h["default"].mark(function e(t,r){var n;return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||"login"!=r){e.next=15;break}if(t){e.next=5;break}n="请输入手机号",e.next=13;break;case 5:if(11==t.length){e.next=9;break}n="请输入正确的手机号",e.next=13;break;case 9:return e.next=11,p.webapi.user.existsMobile(t);case 11:!e.sent&&(n="该手机号未注册，请重新输入");case 13:e.next=36;break;case 15:if(t){e.next=19;break}e.next=36;break;case 19:if(1!=t.length||"1"==t){e.next=23;break}n="请输入正确的手机号",e.next=36;break;case 23:if(!(1<t.length&&t.length<11)||/^1[3|4|5|8|7]/.test(t)){e.next=27;break}n="请输入正确的手机号",e.next=36;break;case 27:if(!(11<t.length)){e.next=31;break}n="请输入正确的手机号",e.next=36;break;case 31:if(11!=t.length){e.next=36;break}return e.next=34,p.webapi.user.existsMobile(t);case 34:!e.sent&&(n="该手机号未注册，请重新输入");case 36:return e.abrupt("return",{errorPath:"data.other.error.mobile",message:n});case 37:case"end":return e.stop()}},e,p)})),function(e,t){return a.apply(this,arguments)}),this.imgChange=(0,i["default"])(h["default"].mark(function e(){return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,p)})),this.checkPassword=(o=(0,i["default"])(h["default"].mark(function e(t){var r;return h["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(r="请输入密码"),e.abrupt("return",{errorPath:"data.other.error.password",message:r});case 2:case"end":return e.stop()}},e,p)})),function(e){return o.apply(this,arguments)}),this.checkLogin=function(){var e=p.metaAction.gf("data").toJS();return!(e.form.mobile&&!e.other.error.mobile&&e.form.password&&!e.other.error.password)},this.metaAction=t.metaAction,this.config=f["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},769:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=f(r(0)),s=f(r(7));t["default"]=function(e){var t=new u.reducer(e),r=new l((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,r)};var i=r(14),u=r(34),c=(f(r(152)),r(237));function f(e){return e&&e.__esModule?e:{"default":e}}var l=(n=function e(t){(0,s["default"])(this,e),a.call(this),this.metaReducer=t.metaReducer},a=function(){var n=this;this.init=function(e,t){var r=(0,c.getInitState)();return(0,o["default"])(r.data.form,t),n.metaReducer.init(e,r)},this.load=function(e,t){return e=n.metaReducer.sf(e,"data.other.imgs",(0,i.fromJS)(t))}},n);e.exports=t["default"]}});