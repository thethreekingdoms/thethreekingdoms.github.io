webpackJsonp([70],{919:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u,a=p(n(0)),r=p(n(12)),o=p(n(7)),i=p(n(9)),d=p(n(10)),f=p(n(11)),c=n(1),l=(p(c),n(45)),s=p(n(549));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,l.wrapper)(s["default"])(u=function(e){function t(){return(0,o["default"])(this,t),(0,d["default"])(this,(t.__proto__||(0,r["default"])(t)).apply(this,arguments))}return(0,f["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(c.Component))||u;t["default"]=h,e.exports=t["default"]},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(0)),r=u(n(7));t["default"]=function(e){var t=new o.action(e),n=new d((0,a["default"])({},e,{metaAction:t})),u=(0,a["default"])({},t,n);return t.config({metaHandlers:u}),u};u(n(1));var o=n(45),i=u(n(399));function u(e){return e&&e.__esModule?e:{"default":e}}var d=function e(t){var u=this;(0,r["default"])(this,e),this.onInit=function(e){var t=e.component,n=e.injections;u.component=t,(u.injections=n).reduce("init")},this.handleAboutClick=function(){u.component.props.onRedirect({appName:"edfx-app-root-about",appParams:{}})},this.handleHelloClick=function(){u.component.props.onRedirect({appName:"edfx-app-root-helloWorld",appParams:{}})},this.metaAction=t.metaAction,this.config=i["default"].current};e.exports=t["default"]},921:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=d(n(0)),a=d(n(7));t["default"]=function(e){var t=new r.reducer(e),n=new f((0,u["default"])({},e,{metaReducer:t}));return(0,u["default"])({},t,n)};n(14);var r=n(45),o=d(n(399)),i=n(550);function d(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var n=this;(0,a["default"])(this,e),this.init=function(e,t){return n.metaReducer.init(e,(0,i.getInitState)())},this.metaReducer=t.metaReducer,this.config=o["default"].current};e.exports=t["default"]}});