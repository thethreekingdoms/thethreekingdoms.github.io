webpackJsonp([29],{965:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var u,r=p(n(0)),a=p(n(10)),i=p(n(7)),o=p(n(9)),f=p(n(11)),d=p(n(12)),c=n(2),l=(p(c),n(34)),s=p(n(367));function p(t){return t&&t.__esModule?t:{"default":t}}var v=(0,l.wrapper)(s["default"])(u=function(t){function e(){return(0,i["default"])(this,e),(0,f["default"])(this,(e.__proto__||(0,a["default"])(e)).apply(this,arguments))}return(0,d["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),e}(c.Component))||u;e["default"]=v,t.exports=e["default"]},966:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(0)),a=u(n(7));e["default"]=function(t){var e=new o.action(t),n=new c((0,r["default"])({},t,{metaAction:e})),u=(0,r["default"])({},e,n);return e.config({metaHandlers:u}),u};var i=u(n(2)),o=n(34),f=u(n(216));function u(t){return t&&t.__esModule?t:{"default":t}}var d=n(35).Input.AntNumber,c=function t(e){var u=this;(0,a["default"])(this,t),this.onInit=function(t){var e=t.component,n=t.injections;u.component=e,(u.injections=n).reduce("init")},this.returnNumber=function(){return i["default"].createElement(d,{min:"1",max:"4"})},this.metaAction=e.metaAction,this.config=f["default"].current};t.exports=e["default"]},967:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=f(n(0)),r=f(n(7));e["default"]=function(t){var e=new a.reducer(t),n=new d((0,u["default"])({},t,{metaReducer:e}));return(0,u["default"])({},e,n)};n(14);var a=n(34),i=f(n(216)),o=n(368);function f(t){return t&&t.__esModule?t:{"default":t}}var d=function t(e){var u=this;(0,r["default"])(this,t),this.init=function(t,e){var n=(0,o.getInitState)();return u.metaReducer.init(t,n)},this.metaReducer=e.metaReducer,this.config=i["default"].current};t.exports=e["default"]}});