webpackJsonp([36],{854:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a,r=p(n(0)),u=p(n(10)),i=p(n(7)),o=p(n(9)),f=p(n(11)),c=p(n(12)),d=n(2),s=(p(d),n(34)),l=p(n(293));function p(t){return t&&t.__esModule?t:{"default":t}}var h=(0,s.wrapper)(l["default"])(a=function(t){function e(){return(0,i["default"])(this,e),(0,f["default"])(this,(e.__proto__||(0,u["default"])(e)).apply(this,arguments))}return(0,c["default"])(e,t),(0,o["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),e}(d.Component))||a;e["default"]=h,t.exports=e["default"]},855:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=c(n(0)),a=c(n(40)),u=c(n(41)),i=c(n(7));e["default"]=function(t){var e=new o.action(t),n=new d((0,r["default"])({},t,{metaAction:e})),a=(0,r["default"])({},e,n);return e.config({metaHandlers:a}),a};c(n(2));var o=n(34),f=c(n(181));function c(t){return t&&t.__esModule?t:{"default":t}}var d=function t(e){var n,r=this;(0,i["default"])(this,t),this.onInit=function(t){var e=t.component,n=t.injections;r.component=e,(r.injections=n).reduce("init");var a=r.metaAction.gf("data.pagination").toJS();r.load(a)},this.load=(n=(0,u["default"])(a["default"].mark(function t(e){var n;return a["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.webapi.product.query({pagination:e});case 2:n=t.sent,r.injections.reduce("load",n);case 4:case"end":return t.stop()}},t,r)})),function(t){return n.apply(this,arguments)}),this.pageChanged=function(t,e){r.load({current:t,pageSize:e})},this.getLayout=function(){var t=r.metaAction.gf("data.products");if(t&&0!=t.size)return t.map(function(t,e){return r.getSingleLayout(e,t.get("id"))}).toJS()},this.getSingleLayout=function(t,e){return{i:e+"",x:t%4*3,y:4*Math.floor(t/4),w:3,h:4}},this.metaAction=e.metaAction,this.config=f["default"].current,this.webapi=this.config.webapi};t.exports=e["default"]},856:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=c(n(0)),u=c(n(7));e["default"]=function(t){var e=new r.reducer(t),n=new d((0,a["default"])({},t,{metaReducer:e}));return(0,a["default"])({},e,n)};var i=n(14),r=n(34),o=c(n(181)),f=n(294);function c(t){return t&&t.__esModule?t:{"default":t}}var d=function t(e){var r=this;(0,u["default"])(this,t),this.init=function(t,e){var n=(0,f.getInitState)();return r.metaReducer.init(t,n)},this.load=function(t,e){var n=e.products,a=e.pagination;return t=r.metaReducer.sf(t,"data.pagination",(0,i.fromJS)(a)),r.metaReducer.sf(t,"data.products",(0,i.fromJS)(n))},this.metaReducer=e.metaReducer,this.config=o["default"].current};t.exports=e["default"]}});