webpackJsonp([39],{1083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,a=s(n(0)),i=s(n(9)),u=s(n(7)),o=s(n(8)),d=s(n(10)),l=s(n(11)),c=n(2),p=(s(c),n(35)),f=s(n(404));function s(e){return e&&e.__esModule?e:{"default":e}}var h=(0,p.wrapper)(f["default"])(r=function(e){function t(){return(0,u["default"])(this,t),(0,d["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,l["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a["default"])({},this.props,{path:"root"}))}}]),t}(c.Component))||r;t["default"]=h,e.exports=t["default"]},1084:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(0)),r=p(n(36)),i=p(n(37)),o=p(n(7)),u=p(n(8));t["default"]=function(e){var t=new l.action(e),n=new f((0,a["default"])({},e,{metaAction:t})),r=(0,a["default"])({},t,n);return t.config({metaHandlers:r}),r};var d=p(n(2)),l=n(35),c=p(n(231));function p(e){return e&&e.__esModule?e:{"default":e}}var f=function(){function t(e){var u=this;(0,o["default"])(this,t),this.onInit=function(e){var t=e.component,n=e.injections;u.component=t,(u.injections=n).reduce("init"),u.load()},this.load=(0,i["default"])(r["default"].mark(function e(){var t;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.webapi.report.query();case 2:t=e.sent,u.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,u)})),this.cellRender=function(i){return function(e,t,n){if("dept1"==i)return u.dept1Render(e,t,n);if("dept2"==i)return u.dept2Render(e,t,n);if("dept3"==i)return u.dept3Render(e,t,n);var r=u.metaAction.gf("data.reportDS"),a="ttk-table-app-simplerpt-cell-right";return("合计"==r.getIn([n,"dept1"])||"小计"==r.getIn([n,"dept2"]))&&(a+=" ttk-table-app-simplerpt-total-cell"),{children:d["default"].createElement("div",{className:a},e)}}},this.dept1Render=function(e,t,n){return"合计"==e?{children:d["default"].createElement("div",{className:"ttk-table-app-simplerpt-total-cell"},"合计"),props:{rowSpan:1,colSpan:3}}:{children:d["default"].createElement("div",null,e),props:{rowSpan:u.calcRowSpan(e,"dept1",n)}}},this.dept2Render=function(e,t,n){if("合计"==u.metaAction.gf("data.reportDS").getIn([n,"dept1"]))return{props:{colSpan:0}};var r={children:d["default"].createElement("div",{className:"小计"==e?"ttk-table-app-simplerpt-total-cell":void 0},e),props:{rowSpan:u.calcRowSpan(e,"dept2",n)}};return u.metaAction.gf("data.reportDS").getIn([n,"dept3"])||(r.props.colSpan=2),r},this.dept3Render=function(e,t,n){return"合计"==u.metaAction.gf("data.reportDS").getIn([n,"dept1"])?{props:{colSpan:0}}:{children:d["default"].createElement("div",null,e),props:{colSpan:e?1:0}}},this.isTotalRow=function(e){},this.metaAction=e.metaAction,this.config=c["default"].current,this.webapi=this.config.webapi}return(0,u["default"])(t,[{key:"calcRowSpan",value:function(e,t,n){var r=this.metaAction.gf("data.reportDS");if(r){var a=r.size;if(0==a||1==a)return 1;if(0<n&&n<=a&&e==r.getIn([n-1,t]))return 0;for(var i=1,u=n+1;u<a&&e==r.getIn([u,t]);u++)i++;return i}}}]),t}();e.exports=t["default"]},1085:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),a=l(n(7));t["default"]=function(e){var t=new u.reducer(e),n=new c((0,r["default"])({},e,{metaReducer:t}));return(0,r["default"])({},t,n)};var i=n(14),u=n(35),o=l(n(231)),d=n(405);function l(e){return e&&e.__esModule?e:{"default":e}}var c=function e(t){var r=this;(0,a["default"])(this,e),this.init=function(e,t){var n=(0,d.getInitState)();return r.metaReducer.init(e,n)},this.load=function(e,t){return r.metaReducer.sf(e,"data.reportDS",(0,i.fromJS)(t))},this.metaReducer=t.metaReducer,this.config=o["default"].current};e.exports=t["default"]}});