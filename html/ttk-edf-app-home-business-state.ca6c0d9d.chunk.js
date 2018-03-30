webpackJsonp([22],{500:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var n,o=p(a(0)),i=p(a(10)),u=p(a(7)),r=p(a(9)),c=p(a(11)),d=p(a(12)),s=a(1),f=(p(s),a(34)),m=p(a(186));function p(t){return t&&t.__esModule?t:{"default":t}}var l=(0,f.wrapper)(m["default"])(n=function(t){function e(){return(0,u["default"])(this,e),(0,c["default"])(this,(e.__proto__||(0,i["default"])(e)).apply(this,arguments))}return(0,d["default"])(e,t),(0,r["default"])(e,[{key:"render",value:function(){return this.props.monkeyKing((0,o["default"])({},this.props,{path:"root"}))}}]),e}(s.Component))||n;e["default"]=l,t.exports=e["default"]},501:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o,i=A(a(0)),f=A(a(3)),u=A(a(84)),r=A(a(85)),c=A(a(7));e["default"]=function(t){var e=new s.action(t),a=new S((0,i["default"])({},t,{metaAction:e})),n=(0,i["default"])({},e,a);return e.config({metaHandlers:n}),n};var d=A(a(1)),s=a(34),m=A(a(147)),p=a(13),l=a(48),h=a(148);function A(t){return t&&t.__esModule?t:{"default":t}}var S=(n=function t(e){(0,c["default"])(this,t),o.call(this),this.metaAction=e.metaAction,this.config=m["default"].current,this.webapi=this.config.webapi},o=function(){var e,s=this;this.onInit=function(t){var e=t.component,a=t.injections;s.component=e,(s.injections=a).reduce("init"),s.load()},this.componentWillReceiveProps=function(t){!(0,p.is)(t.data,s.component.props.data)&&t.data&&s.initData(t.data)},this.load=(0,r["default"])(u["default"].mark(function t(){var e;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(e=s.component.props.data)&&s.initData(e);case 2:case"end":return t.stop()}},t,s)})),this.initData=function(t){var e=[],a=[],n=[],o=[],i=[],u=[],r={},c=[];for(var d in t)u.push(parseInt(d.replace("-",""))),u.sort(function(t,e){return t-e}),c.push((0,f["default"])({},d,t[d])),t[d].period=parseInt(d.split("-")[1])+"月",t[d].time=parseInt(d.replace("-","")),i.push(t[d]);u.map(function(t){e.push(parseInt((""+t).slice(4))+"月")}),i.map(function(t){return t.incomeSumAmout=(0,h.addThousandsPosition)(t.incomeSumAmout.toFixed(2),!0),t.expenditureSumAmount=(0,h.addThousandsPosition)(t.expenditureSumAmount.toFixed(2),!0),t.profitAmount=(0,h.addThousandsPosition)(t.profitAmount.toFixed(2),!0),t}),i.sort(s.compare("time")).map(function(t){return a.push(t.incomeSumAmout),n.push(t.expenditureSumAmount),o.push(t.profitAmount),t}),r.periodList=e,r.incomeSumAmout=a,r.expenditureSumAmount=n,r.profitAmount=o,r.tableSource=i,s.injections.reduce("load",r),s.metaAction.sf("data.type","chart")},this.compare=function(a){return function(t,e){return t[a]-e[a]}},this.fieldChange=function(t,e){"0"==e?s.metaAction.sf("data.type","chart"):s.metaAction.sf("data.type","table")},this.refresh=(0,r["default"])(u["default"].mark(function t(){var e;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.webapi.business.query();case 2:e=t.sent,s.initData(e);case 4:case"end":return t.stop()}},t,s)})),this.getContent=function(){var t=s.metaAction.gf("data.periodList")&&s.metaAction.gf("data.periodList").toJS(),e=s.metaAction.gf("data.incomeSumAmout")&&s.metaAction.gf("data.incomeSumAmout").toJS(),a=s.metaAction.gf("data.expenditureSumAmount")&&s.metaAction.gf("data.expenditureSumAmount").toJS(),n=s.metaAction.gf("data.profitAmount")&&s.metaAction.gf("data.profitAmount").toJS(),o=s.metaAction.gf("data.tableSource")&&s.metaAction.gf("data.tableSource").toJS(),i={grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},color:["#E48E58","#2BB696","#4cabce"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["收入","支出","利润"]},calculable:!0,xAxis:[{type:"category",axisTick:{show:!1},data:t}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"收入",type:"bar",barGap:0,data:e},{name:"支出",type:"bar",data:a},{name:"利润",type:"bar",data:n}]},u=s.metaAction.gf("data.type");return"chart"!=u&&u?"table"==u?d["default"].createElement(l.Table,{columns:[{title:"月份",dataIndex:"period",width:"10%",key:"period"},{title:"收入",dataIndex:"incomeSumAmout",key:"incomeSumAmout"},{title:"支出",dataIndex:"expenditureSumAmount",key:"expenditureSumAmount"},{title:"利润",dataIndex:"profitAmount",key:"profitAmount"}],bordered:!0,dataSource:o,pagination:!1,className:"rctable"}):void 0:d["default"].createElement(l.Echarts,{option:i,className:"rcchart"})},this.fold=(e=(0,r["default"])(u["default"].mark(function t(e){return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(1==s.metaAction.gf("data.fold")?s.metaAction.sf("data.fold",!1):s.metaAction.sf("data.fold",!0),t.t0=s.component.props.callback,!t.t0){t.next=5;break}return t.next=5,s.component.props.callback(e);case 5:case"end":return t.stop()}},t,s)})),function(t){return e.apply(this,arguments)})},n);t.exports=e["default"]},502:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o,i=f(a(0)),u=f(a(7));e["default"]=function(t){var e=new c.reducer(t),a=new m((0,i["default"])({},t,{metaReducer:e}));return(0,i["default"])({},e,a)};var r=a(13),c=a(34),d=f(a(147)),s=a(148);function f(t){return t&&t.__esModule?t:{"default":t}}var m=(n=function t(e){(0,u["default"])(this,t),o.call(this),this.metaReducer=e.metaReducer,this.config=d["default"].current},o=function(){var n=this;this.init=function(t,e){var a=(0,s.getInitState)();return e&&(a.data=e),n.metaReducer.init(t,a)},this.load=function(t,e){return t=n.metaReducer.sf(t,"data.businessState",(0,r.fromJS)(e)),t=n.metaReducer.sf(t,"data.periodList",(0,r.fromJS)(e.periodList)),t=n.metaReducer.sf(t,"data.incomeSumAmout",(0,r.fromJS)(e.incomeSumAmout)),t=n.metaReducer.sf(t,"data.expenditureSumAmount",(0,r.fromJS)(e.expenditureSumAmount)),t=n.metaReducer.sf(t,"data.profitAmount",(0,r.fromJS)(e.profitAmount)),t=n.metaReducer.sf(t,"data.tableSource",(0,r.fromJS)(e.tableSource))}},n);t.exports=e["default"]}});