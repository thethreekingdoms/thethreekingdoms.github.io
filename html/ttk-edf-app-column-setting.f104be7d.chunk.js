webpackJsonp([24],{787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,i=m(n(0)),r=m(n(10)),u=m(n(7)),o=m(n(9)),l=m(n(11)),c=m(n(12)),s=n(2),d=(m(s),n(34)),f=m(n(253));function m(e){return e&&e.__esModule?e:{"default":e}}var h=(0,d.wrapper)(f["default"])(a=function(e){function t(){return(0,u["default"])(this,t),(0,l["default"])(this,(t.__proto__||(0,r["default"])(t)).apply(this,arguments))}return(0,c["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,i["default"])({},this.props,{path:"root"}))}}]),t}(s.Component))||a;t["default"]=h,e.exports=t["default"]},788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(0)),r=a(n(50)),u=a(n(51)),o=a(n(7));t["default"]=function(e){var t=new c.action(e),n=new f((0,i["default"])({},e,{metaAction:t})),a=(0,i["default"])({},t,n);return t.config({metaHandlers:a}),a};var l=a(n(2)),c=n(34),s=(n(14),a(n(13)),a(n(159))),d=n(35);function a(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var a=this;(0,o["default"])(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,a.component.props.setOkListener&&a.component.props.setOkListener(a.onOk),n.reduce("init"),a.load()},this.load=(0,u["default"])(r["default"].mark(function e(){var t;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.webapi.columnDetail.findByColumnCode(a.component.props.columnCode);case 2:t=e.sent,a.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,a)})),this.getListRowsCount=function(){return a.metaAction.gf("data.list").size},this.getListColumns=function(){var t=a.metaAction.gf("data.list").toJS(),e=d.DataGrid.Column,n=d.DataGrid.Cell;return[l["default"].createElement(e,{name:"caption",columnKey:"caption",flexGrow:1,width:200,header:l["default"].createElement(n,{name:"header"},"字段名称"),cell:function(e){return l["default"].createElement(n,null,t[e.rowIndex].caption)}}),l["default"].createElement(e,{name:"isVisible",columnKey:"isVisible",flexGrow:1,width:200,header:l["default"].createElement(n,{name:"header"},l["default"].createElement(d.Checkbox,{checked:a.isSelectAll(t),onChange:a.selectAll()},"显示")),cell:function(e){return 1==t[e.rowIndex].isMustSelect?l["default"].createElement(n,null,l["default"].createElement(d.Checkbox,{checked:t[e.rowIndex].isVisible,onChange:a.selectColumn(t[e.rowIndex]),disabled:"disabled"})):l["default"].createElement(n,null,l["default"].createElement(d.Checkbox,{checked:t[e.rowIndex].isVisible,onChange:a.selectColumn(t[e.rowIndex])}))}})]},this.isSelectAll=function(e){return e.length==e.filter(function(e){return e&&1==e.isVisible}).length},this.selectAll=function(){return function(t){var e=a.metaAction.gf("data.list").toJS();e.forEach(function(e){1!=e.isMustSelect&&(t.target.checked?e.isVisible=1:e.isVisible=0)}),a.injections.reduce("loadColumns",{list:e})}},this.selectColumn=function(n){return function(t){var e=a.metaAction.gf("data.list").toJS();e.forEach(function(e){if(e.id==n.id)return t.target.checked?void(e.isVisible=1):void(e.isVisible=0)}),a.injections.reduce("loadColumns",{list:e})}},this.onOk=(0,u["default"])(r["default"].mark(function e(){return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,a)})),this.save=(0,u["default"])(r["default"].mark(function e(){var t,n;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=a.metaAction.gf("data.list").toJS())){e.next=7;break}return e.next=4,a.webapi.columnDetail.batchUpdate(t);case 4:return n=e.sent,a.metaAction.toast("success","修改成功"),e.abrupt("return",n);case 7:case"end":return e.stop()}},e,a)})),this.metaAction=t.metaAction,this.config=s["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i,r=d(n(0)),u=d(n(983)),o=d(n(7));t["default"]=function(e){var t=new c.reducer(e),n=new f((0,r["default"])({},e,{metaReducer:t}));return(0,r["default"])({},t,n)};var l=n(14),c=n(34),s=(d(n(159)),d(n(13)),n(254));function d(e){return e&&e.__esModule?e:{"default":e}}var f=(a=function e(t){(0,o["default"])(this,e),i.call(this),this.metaReducer=t.metaReducer},i=function(){var a=this;this.init=function(e,t){var n=(0,s.getInitState)();return t&&t.columnCode&&(n.data.form.columnCode=t.columnCode),a.metaReducer.init(e,n)},this.load=function(e,t){return a.metaReducer.sf(e,"data.list",(0,l.fromJS)(t))},this.loadColumns=function(e,t){var n=t.list;return e=a.metaReducer.sf(e,"data.list",(0,l.fromJS)((0,u["default"])(n)))}},a);e.exports=t["default"]},983:function(e,t,n){e.exports=n(5)(928)}});