webpackJsonp([65],{1087:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var u,a=p(n(0)),i=p(n(9)),r=p(n(7)),o=p(n(8)),f=p(n(10)),c=p(n(11)),s=n(2),d=(p(s),n(35)),l=p(n(414));function p(t){return t&&t.__esModule?t:{"default":t}}var h=(0,d.wrapper)(l["default"])(u=function(t){function e(){return(0,r["default"])(this,e),(0,f["default"])(this,(e.__proto__||(0,i["default"])(e)).apply(this,arguments))}return(0,c["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),e}(s.Component))||u;e["default"]=h,t.exports=e["default"]},1088:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(n(0)),i=u(n(20)),r=u(n(7));e["default"]=function(t){var e=new o.action(t),n=new s((0,a["default"])({},t,{metaAction:e})),u=(0,a["default"])({},e,n);return e.config({metaHandlers:u}),u};u(n(2));var o=n(35),f=u(n(235)),c=u(n(1));function u(t){return t&&t.__esModule?t:{"default":t}}var s=function t(e){var u=this;(0,r["default"])(this,t),this.onInit=function(t){var e=t.component,n=t.injections;u.component=e,(u.injections=n).reduce("init")},this.getApps=function(){var t=(0,i["default"])(u.config.apps),e={};return t.forEach(function(t){"config"!=t&&(e[t]=(0,a["default"])({},u.config.apps[t],{_notParse:!0}))}),e},this.tabChange=function(t){u.metaAction.sf("data.tabKey",t)},this.getState=function(){return window.reduxStore.getState().toJS()},this.getMockData=function(){return c["default"].fetch.mockData},this.getAPIs=function(){return c["default"].fetch.mockApi},this.isExistsApp=function(t){return!!u.config.apps[t]},this.metaAction=e.metaAction,this.config=f["default"].current};t.exports=e["default"]},1089:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=f(n(0)),a=f(n(7));e["default"]=function(t){var e=new i.reducer(t),n=new c((0,u["default"])({},t,{metaReducer:e}));return(0,u["default"])({},e,n)};n(14);var i=n(35),r=f(n(235)),o=n(415);function f(t){return t&&t.__esModule?t:{"default":t}}var c=function t(e){var u=this;(0,a["default"])(this,t),this.init=function(t,e){var n=(0,o.getInitState)();return u.metaReducer.init(t,n)},this.metaReducer=e.metaReducer,this.config=r["default"].current};t.exports=e["default"]}});