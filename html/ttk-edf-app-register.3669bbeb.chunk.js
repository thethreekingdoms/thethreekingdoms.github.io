webpackJsonp([16],{1015:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,n=l(a(0)),o=l(a(10)),s=l(a(7)),c=l(a(9)),i=l(a(11)),u=l(a(12)),f=a(2),d=(l(f),a(34)),p=l(a(371));function l(e){return e&&e.__esModule?e:{"default":e}}var h=(0,d.wrapper)(p["default"])(r=function(e){function t(){return(0,s["default"])(this,t),(0,i["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,u["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(f.Component))||r;t["default"]=h,e.exports=t["default"]},1016:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=r(a(0)),m=r(a(16)),d=r(a(24)),g=r(a(40)),p=r(a(41)),b=r(a(7));t["default"]=function(e){var t=new n.action(e),a=new o((0,h["default"])({},e,{metaAction:t})),r=(0,h["default"])({},t,a);return t.config({metaHandlers:r}),r};r(a(2));var n=a(34),x=(a(14),r(a(13)),r(a(93))),k=r(a(147));a(1132);function r(e){return e&&e.__esModule?e:{"default":e}}var o=function e(t){var r,a,n,o,s,c,i,u,f,l=this;(0,b["default"])(this,e),this.onInit=function(e){var t=e.component,a=e.injections;l.component=t,l.injections=a,l.component.props.setOkListener&&l.component.props.setOkListener(l.onOk),a.reduce("init"),l.load()},this.onOk=(0,p["default"])(g["default"].mark(function e(){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,l)})),this.load=(0,p["default"])(g["default"].mark(function e(){var t,a,r,n;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.webapi.enumDetail.findByEnumId({enumId:200003});case 2:return t=e.sent,e.next=5,l.webapi.enumDetail.findByEnumId({enumId:200001});case 5:return a=e.sent,e.next=8,l.webapi.enumDetail.findByEnumId({enumId:200002});case 8:return r=e.sent,e.next=11,l.webapi.enableDate.getServerDate();case 11:n=e.sent,l.injections.reduce("load",t,a,r,n);case 13:case"end":return e.stop()}},e,l)})),this.userregister=(0,p["default"])(g["default"].mark(function e(){var t,a,r,n,o,s;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.metaAction.gf("data.other").toJS(),a=l.metaAction.gf("data.form").toJS(),1!==t.step){e.next=13;break}return e.next=5,l.check([{path:"data.form.mobile",value:a.mobile},{path:"data.form.password",value:a.password},{path:"data.form.captcha",value:a.captcha}],"next");case 5:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:l.clearTimer(!1,"获取验证码"),l.metaAction.sf("data.other.step",2),_hmt&&_hmt.push(["_trackEvent","系统管理","企业注册","下一步"]),e.next=49;break;case 13:if(2!==t.step){e.next=22;break}return e.next=16,l.check([{path:"data.form.org",value:a.org},{path:"data.form.industry",value:a.industry},{path:"data.form.vatTaxpayer",value:a.vatTaxpayer}]);case 16:if(e.sent){e.next=19;break}return e.abrupt("return");case 19:l.metaAction.sf("data.other.step",3),e.next=49;break;case 22:if(3!==t.step){e.next=49;break}return e.next=25,l.check([{path:"data.form.enableDate",value:a.enableDate},{path:"data.form.accountingStandard",value:a.accountingStandard}]);case 25:if(e.sent){e.next=28;break}return e.abrupt("return");case 28:return r={mobile:a.mobile,password:(0,k["default"])(a.password+"*the3Kingdom*")},(n={name:a.org,industry:a.industry,vatTaxpayer:a.vatTaxpayer}).enabledYear=a.enableDate.split("-")[0],n.enabledMonth=a.enableDate.split("-")[1],n.accountingStandards=a.accountingStandard,r.sysOrg=n,(o={}).user=r,o.captcha=a.captcha,o.sign=a.sign,o.user.passwordStrength=l.pwdLevel(a.password),e.next=41,l.webapi.user.create(o);case 41:s=e.sent,a.password&&(a.password=(0,k["default"])(a.password+"*the3Kingdom*")),sessionStorage.mobile=a.mobile,sessionStorage.username=s.value.nickname,sessionStorage._accessToken=s.token,sessionStorage.password=a.password,sessionStorage.currentOrgStatus=null,l.component.props.onRedirect&&l.config.goAfterLogin&&(l.component.props.onRedirect(l.config.goAfterLogin),_hmt&&_hmt.push(["_trackEvent","系统管理","企业注册","立即体验"]));case 49:case"end":return e.stop()}},e,l)})),this.pwdLevel=function(e){var t=0;return/[0-9]/.test(e)&&t++,/[a-zA-Z]/.test(e)&&t++,(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(e)||/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im.test(e))&&t++,t},this.getLogo=function(){return l.config.logo},this.getBar=function(){return l.config.bar},this.countDown=60,this.timer=null,this.getCaptchaing=!1,this.getCaptcha=(0,p["default"])(g["default"].mark(function e(){var t,a,r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.getCaptchaing){e.next=2;break}return e.abrupt("return");case 2:return l.getCaptchaing=!0,l.metaAction.sf("data.timeStaus",!1),(t=l).timer=setInterval(function(){0!=t.countDown?t.metaAction.sf("data.time",--t.countDown+"s"):t.clearTimer(!0,"重新获取")},1e3),(a={}).mobile=l.metaAction.gf("data.form.mobile"),a.smsType=1,e.next=11,l.webapi.captcha.fetch(a);case 11:r=e.sent,l.metaAction.sf("data.form.sign",r),l.metaAction.toast("success","验证码已经发送到您的手机");case 14:case"end":return e.stop()}},e,l)})),this.clearTimer=function(e,t){this.metaAction.sf("data.timeStaus",!0),this.metaAction.sf("data.time",t),this.countDown=60,this.getCaptchaing=!1,clearInterval(this.timer)},this.fieldChange=(r=(0,p["default"])(g["default"].mark(function e(t,a,r){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.check([{path:t,value:a}],r);case 2:case"end":return e.stop()}},e,l)})),function(e,t,a){return r.apply(this,arguments)}),this.backLastStep=function(){var e=l.metaAction.gf("data.other.step");l.metaAction.sf("data.other.step",e-1)},this.showAgreement=(0,p["default"])(g["default"].mark(function e(){var t;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.metaAction.modal("show",{title:"用户协议条款",width:700,bodyStyle:{height:400,overflow:"auto"},okText:"同意",cancelText:"不同意",className:"userProtocol",children:l.metaAction.loadApp("ttk-edf-app-agreement",{store:l.component.props.store})});case 2:t=e.sent,l.metaAction.sf("data.form.agree",!!t);case 4:case"end":return e.stop()}},e,l)})),this.goOrgRegister=function(e){if(!l.config.apps["edfx-app-orgregister"])throw"请将这个应用加入到带ttk-edf-app-root和ttk-edf-app-login的网站中，跳转功能才能正常使用";l.component.props.onRedirect&&l.config.goOrgRegister&&(l.config.goOrgRegister.appName="edfx-app-orgregister?user="+(0,d["default"])(e),l.component.props.onRedirect(l.config.goOrgRegister))},this.goLogin=function(e){if(l.clearTimer(!1,"获取验证码"),!l.config.apps["ttk-edf-app-login"])throw"请将这个应用加入到带ttk-edf-app-root和ttk-edf-app-login的网站中，跳转功能才能正常使用";l.component.props.onRedirect&&l.config.goLogin&&("string"==typeof e&&(l.config.goLogin.appParams.mobile=e,l.config.goLogin.appName="ttk-edf-app-login?mobile="+e),l.component.props.onRedirect(l.config.goLogin))},this.check=(a=(0,p["default"])(g["default"].mark(function e(t,a){var r,n,o,s,c,i,u,f,d,p;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:r=[],o=!(n=!0),s=void 0,e.prev=6,c=(0,m["default"])(t);case 8:if(n=(i=c.next()).done){e.next=76;break}if(u=i.value,f=(0,h["default"])({},u),"data.form.mobile"!=u.path){e.next=20;break}return e.t0=h["default"],e.t1=f,e.next=16,l.checkMobile(u.value,a);case 16:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=72;break;case 20:if("data.form.password"!=u.path){e.next=29;break}return e.t3=h["default"],e.t4=f,e.next=25,l.checkPassword(u.value,a);case 25:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=72;break;case 29:if("data.form.captcha"!=u.path){e.next=38;break}return e.t6=h["default"],e.t7=f,e.next=34,l.checkCaptcha(u.value,a);case 34:e.t8=e.sent,(0,e.t6)(e.t7,e.t8),e.next=72;break;case 38:if("data.form.org"!=u.path){e.next=47;break}return e.t9=h["default"],e.t10=f,e.next=43,l.checkOrg(u.value);case 43:e.t11=e.sent,(0,e.t9)(e.t10,e.t11),e.next=72;break;case 47:if("data.form.vatTaxpayer"!=u.path){e.next=56;break}return e.t12=h["default"],e.t13=f,e.next=52,l.checkVatTaxpayer(u.value);case 52:e.t14=e.sent,(0,e.t12)(e.t13,e.t14),e.next=72;break;case 56:if("data.form.enableDate"!=u.path){e.next=65;break}return e.t15=h["default"],e.t16=f,e.next=61,l.checkEnableDate(u.value);case 61:e.t17=e.sent,(0,e.t15)(e.t16,e.t17),e.next=72;break;case 65:if("data.form.accountingStandard"!=u.path){e.next=72;break}return e.t18=h["default"],e.t19=f,e.next=70,l.checkAccountingStandards(u.value);case 70:e.t20=e.sent,(0,e.t18)(e.t19,e.t20);case 72:r.push(f);case 73:n=!0,e.next=8;break;case 76:e.next=82;break;case 78:e.prev=78,e.t21=e["catch"](6),o=!0,s=e.t21;case 82:e.prev=82,e.prev=83,!n&&c["return"]&&c["return"]();case 85:if(e.prev=85,!o){e.next=88;break}throw s;case 88:return e.finish(85);case 89:return e.finish(82);case 90:return d={},p=!0,r.forEach(function(e){d[e.path]=e.value,d[e.errorPath]=e.message,e.message&&(p=!1)}),l.metaAction.sfs(d),e.abrupt("return",p);case 95:case"end":return e.stop()}},e,l,[[6,78,82,90],[83,,85,89]])})),function(e,t){return a.apply(this,arguments)}),this.checkMobile=(n=(0,p["default"])(g["default"].mark(function e(t,a){var r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||"next"!=a){e.next=15;break}if(t){e.next=5;break}r="请输入手机号",e.next=13;break;case 5:if(11==t.length){e.next=9;break}r="请输入正确的手机号",e.next=13;break;case 9:return e.next=11,l.webapi.user.existsMobile(t);case 11:e.sent&&(r="该手机号已经注册");case 13:e.next=36;break;case 15:if(t){e.next=19;break}e.next=36;break;case 19:if(1!=t.length||"1"==t){e.next=23;break}r="请输入正确的手机号",e.next=36;break;case 23:if(!(1<t.length&&t.length<11)||/^1[3|4|5|8|7]/.test(t)){e.next=27;break}r="请输入正确的手机号",e.next=36;break;case 27:if(!(11<t.length)){e.next=31;break}r="请输入正确的手机号",e.next=36;break;case 31:if(11!=t.length){e.next=36;break}return e.next=34,l.webapi.user.existsMobile(t);case 34:e.sent&&(r="该手机号已经注册");case 36:return e.abrupt("return",{errorPath:"data.other.error.mobile",message:r});case 37:case"end":return e.stop()}},e,l)})),function(e,t){return n.apply(this,arguments)}),this.checkPassword=(o=(0,p["default"])(g["default"].mark(function e(t,a){var r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a&&"next"==a&&(t?/(?=^.{6,20}$)((?=.*[a-zA-Z]){1})((?=.*[0-9]){1})/.test(t)||(r="6-20位至少包含一个字母和一个数字"):r="请输入密码"),e.abrupt("return",{errorPath:"data.other.error.password",message:r});case 2:case"end":return e.stop()}},e,l)})),function(e,t){return o.apply(this,arguments)}),this.checkCaptcha=(s=(0,p["default"])(g["default"].mark(function e(t,a){var r,n,o,s;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.metaAction.gf("data.form.sign"),o=l.metaAction.gf("data.form.mobile"),s={sign:n,mobile:o,captcha:t},!a||"next"!=a){e.next=12;break}if(t){e.next=8;break}r="请输入验证码",e.next=12;break;case 8:return e.next=10,l.webapi.captcha.validate(s);case 10:if(e.sent){e.next=12;break}r="验证码输入错误";case 12:return e.abrupt("return",{errorPath:"data.other.error.captcha",message:r});case 13:case"end":return e.stop()}},e,l)})),function(e,t){return s.apply(this,arguments)}),this.checkOrg=(c=(0,p["default"])(g["default"].mark(function e(t){var a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?200<t.length&&(a="企业名称不要超过200个字符"):a="请输入企业名称",e.abrupt("return",{errorPath:"data.other.error.org",message:a});case 2:case"end":return e.stop()}},e,l)})),function(e){return c.apply(this,arguments)}),this.checkVatTaxpayer=(i=(0,p["default"])(g["default"].mark(function e(t){var a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),t||(a="纳税人身份不能为空"),e.abrupt("return",{errorPath:"data.other.error.vatTaxpayer",message:a});case 3:case"end":return e.stop()}},e,l)})),function(e){return i.apply(this,arguments)}),this.checkEnableDate=(u=(0,p["default"])(g["default"].mark(function e(t){var a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="启用日期不能为空"),e.abrupt("return",{errorPath:"data.other.error.enableDate",message:a});case 2:case"end":return e.stop()}},e,l)})),function(e){return u.apply(this,arguments)}),this.checkAccountingStandards=(f=(0,p["default"])(g["default"].mark(function e(t){var a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(a="企业会计准则不能为空"),e.abrupt("return",{errorPath:"data.other.error.accountingStandards",message:a});case 2:case"end":return e.stop()}},e,l)})),function(e){return f.apply(this,arguments)}),this.changeDateState=function(){var e=l.metaAction.gf("data.other").toJS().editDate;l.metaAction.sf("data.other.editDate",!e)},this.changeStandardState=function(){var e=l.metaAction.gf("data.other").toJS().editStandard;l.metaAction.sf("data.other.editStandard",!e)},this.checkNext=function(){var e=l.metaAction.gf("data").toJS(),t=l.metaAction.gf("data.other").toJS().step;return 1==t?!(e.form.mobile&&!e.other.error.mobile&&e.form.password&&!e.other.error.password&&e.form.captcha&&!e.other.error.captcha&&e.form.agree):2==t?!(e.form.org&&!e.other.error.org&&e.form.vatTaxpayer&&!e.other.error.vatTaxpayer):void 0},this.metaAction=t.metaAction,this.config=x["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},1017:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,o=p(a(0)),s=p(a(7));t["default"]=function(e){var t=new c.reducer(e),a=new l((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,a)};var i=a(14),c=a(34),u=(p(a(93)),p(a(13)),a(1)),f=a(372),d=a(63);function p(e){return e&&e.__esModule?e:{"default":e}}var l=(r=function e(t){(0,s["default"])(this,e),n.call(this),this.metaReducer=t.metaReducer},n=function(){var c=this;this.init=function(e,t){return c.metaReducer.init(e,(0,f.getInitState)(t))},this.load=function(e,t,a,r,n){e=c.metaReducer.sf(e,"data.industry",(0,i.fromJS)(t)),e=c.metaReducer.sf(e,"data.vatTaxpayer",(0,i.fromJS)(a)),e=c.metaReducer.sf(e,"data.accountingStandards",(0,i.fromJS)(r)),e=c.metaReducer.sf(e,"data.form.industry",t[0].id);var o="";r.forEach(function(e){e.id!=d.consts.ACCOUNTINGSTANDARDS_2013||(o=e.name)}),e=c.metaReducer.sf(e,"data.form.accountingStandard",Number(d.consts.ACCOUNTINGSTANDARDS_2013)),e=c.metaReducer.sf(e,"data.form.accountingStandardsName",o);var s=u.moment.stringToMoment(n).format("YYYY-MM");return e=c.metaReducer.sf(e,"data.form.enableDate",s)}},r);e.exports=t["default"]},1132:function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}}});