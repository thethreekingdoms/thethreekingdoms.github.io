webpackJsonp([12],{918:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=p(a(0)),i=p(a(10)),u=p(a(7)),o=p(a(9)),d=p(a(11)),c=p(a(12)),l=a(2),s=(p(l),a(33)),f=p(a(343));function p(e){return e&&e.__esModule?e:{"default":e}}var m=(0,s.wrapper)(f["default"])(n=function(e){function t(){return(0,u["default"])(this,t),(0,d["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,c["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(l.Component))||n;t["default"]=m,e.exports=t["default"]},919:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(a(0)),r=n(a(39)),u=n(a(40)),o=n(a(7));t["default"]=function(e){var t=new d.action(e),a=l["default"].actionCreator((0,i["default"])({},e,{metaAction:t})),n=new s((0,i["default"])({},e,{metaAction:t,extendAction:a})),r=(0,i["default"])({},t,a.gridAction,n);return t.config({metaHandlers:r}),r};n(a(2)),n(a(15));var d=a(33),c=n(a(204)),l=(a(34),a(14),n(a(13)),n(a(1)),n(a(980)));function n(e){return e&&e.__esModule?e:{"default":e}}var s=function e(t){var n=this;(0,o["default"])(this,e),this.onInit=function(e){var t=e.component,a=e.injections;n.extendAction.gridAction.onInit({component:t,injections:a}),n.component=t,(n.injections=a).reduce("init"),n.load()},this.load=(0,u["default"])(r["default"].mark(function e(){var t;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.webapi.editableTable.query();case 2:t=e.sent,n.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,n)})),this.save=(0,u["default"])(r["default"].mark(function e(){var t;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.metaAction.gf("data.list").toJS(),e.next=3,n.webapi.editableTable.save(t);case 3:n.metaAction.toast("success","保存成功"),n.load();case 5:case"end":return e.stop()}},e,n)})),this.metaAction=t.metaAction,this.extendAction=t.extendAction,this.config=c["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},920:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(0)),i=n(a(7));t["default"]=function(e){var t=new o.reducer(e),a=l["default"].reducerCreator((0,r["default"])({},e,{metaReducer:t})),n=new s((0,r["default"])({},e,{metaReducer:t,extendReducer:a}));return(0,r["default"])({},t,a.gridReducer,n)};var u=a(14),o=a(33),d=n(a(204)),c=a(344),l=(n(a(13)),n(a(980)));function n(e){return e&&e.__esModule?e:{"default":e}}var s=function e(t){var n=this;(0,i["default"])(this,e),this.init=function(e,t){var a=(0,c.getInitState)();return n.metaReducer.init(e,a)},this.load=function(e,t){return e=n.metaReducer.sf(e,"data.list",(0,u.fromJS)(t.list)),n.metaReducer.sf(e,"data.other.focusCellInfo",void 0)},this.metaReducer=t.metaReducer,this.config=d["default"].current};e.exports=t["default"]},980:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),i=(n=r)&&n.__esModule?n:{"default":n},u=a(34);t["default"]={actionCreator:function(e){return{gridAction:new u.GridDecorator.action((0,i["default"])({},e,{gridOption:{table:{path:"data.list",selectFieldName:"selected",cellClassName:"ttk-edf-app-editable-cell",emptyRow:{},getColNames:function(e){return["name","mobile","birthday","sex"]}}}}))}},reducerCreator:function(e){return{gridReducer:new u.GridDecorator.reducer((0,i["default"])({},e,{gridOption:{table:{path:"data.list",selectFieldName:"selected",cellClassName:"ttk-edf-app-editable-cell",emptyRow:{},getColNames:function(e){return["name","mobile","birthday","sex"]}}}}))}}},e.exports=t["default"]}});