webpackJsonp([63],{787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=m(n(0)),o=m(n(10)),i=m(n(7)),c=m(n(9)),u=m(n(11)),l=m(n(12)),d=n(2),s=(m(d),n(34)),f=m(n(251));function m(e){return e&&e.__esModule?e:{"default":e}}var p=(0,s.wrapper)(f["default"])(a=function(e){function t(){return(0,i["default"])(this,t),(0,u["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,l["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=p,e.exports=t["default"]},788:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),c=a(n(40)),o=a(n(41)),u=a(n(7));t["default"]=function(e){var t=new i.action(e),n=new f((0,r["default"])({},e,{metaAction:t})),a=(0,r["default"])({},t,n);return t.config({metaHandlers:a}),a};var l=a(n(2)),i=n(34),d=(n(14),a(n(159))),s=(a(n(13)),n(35));function a(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var n,a,i=this;(0,u["default"])(this,e),this.onInit=function(e){var t=e.component,n=e.injections;i.component=t,(i.injections=n).reduce("init");var a=i.metaAction.gf("data.pagination").toJS();i.load(a)},this.load=(n=(0,o["default"])(c["default"].mark(function e(t,n){var a,r,o;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n){e.next=5;break}return e.next=3,i.webapi.column.query({isDefault:1});case 3:a=e.sent,n={columnId:a.length&&a[0].id};case 5:return e.next=7,i.webapi.columnDetail.init({pagination:t,filter:n});case 7:return r=e.sent,e.next=10,i.webapi.columnDetail.findByColumnCode("columnList");case 10:o=e.sent,r.columnsettings=o,r.filter=n,i.injections.reduce("load",r);case 14:case"end":return e.stop()}},e,i)})),function(e,t){return n.apply(this,arguments)}),this.reload=(0,o["default"])(c["default"].mark(function e(){var t,n;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=i.metaAction.gf("data.pagination").toJS(),n=i.metaAction.gf("data.other.filter").toJS(),i.load(t,n);case 2:case"end":return e.stop()}},e,i)})),this.selectType=(a=(0,o["default"])(c["default"].mark(function e(t,n){var a,r;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a={currentPage:1,totalData:0,pageSize:20},r={columnId:t[0]},i.load(a,r);case 2:case"end":return e.stop()}},e,i)})),function(e,t){return a.apply(this,arguments)}),this.getListRowsCount=function(){return i.metaAction.gf("data.list").size},this.getListColumns=function(){var n=i.metaAction.gf("data.list").toJS(),e=i.metaAction.gf("data.columns").toJS(),a=s.DataGrid.Column,r=s.DataGrid.Cell,o=[l["default"].createElement(a,{name:"select",columnKey:"select",flexGrow:1,width:30,header:l["default"].createElement(r,{name:"cb"},l["default"].createElement(s.Checkbox,{checked:i.isSelectAll(),onChange:i.selectAll()})),cell:function(e){return l["default"].createElement(r,{name:"cell"},l["default"].createElement(s.Checkbox,{onChange:i.selectRow(e.rowIndex)}))}})];return e.forEach(function(t){if(1==t.isVisible){var e=l["default"].createElement(a,{name:t.id,columnKey:t.id,flexGrow:1,width:t.width,header:l["default"].createElement(r,{name:"header"},t.caption),cell:function(e){return"fieldName"==t.fieldName||"caption"==t.fieldName?l["default"].createElement(r,null,l["default"].createElement("a",{onClick:i.modifyDetail(n[e.rowIndex].id)},n[e.rowIndex][t.fieldName])):"enum"==t.fieldTypeDTO.code?l["default"].createElement(r,null,n[e.rowIndex][t.fieldName]):"boolean"==t.fieldTypeDTO.code?l["default"].createElement(r,null,0==n[e.rowIndex][t.fieldName]?"否":"是"):l["default"].createElement(r,null,n[e.rowIndex][t.fieldName])}});o.push(e)}}),o},this.isSelectAll=function(){var e=i.metaAction.gf("data.list");return!(!e||0==e.size)&&e.every(function(e){return e.get("selected")})},this.selectAll=function(){return function(e){i.injections.reduce("selectAll",e.target.checked)}},this.selectRow=function(t){return function(e){i.injections.reduce("selectRow",t,e.target.checked)}},this.pageChanged=function(e,t){var n=i.metaAction.gf("data.other.filter").toJS();i.load({currentPage:e,pageSize:t},n)},this.loopTreeChildren=function(e){return e?e.map(function(e){return e.children&&e.children.length?l["default"].createElement(s.Tree.TreeNode,{key:e.id,title:e.name},i.loopTreeChildren(e.children)):l["default"].createElement(s.Tree.TreeNode,{key:e.id,title:e.name})}):null},this.addType=(0,o["default"])(c["default"].mark(function e(){var t;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.metaAction.gf("data.other.filter.columnId"),e.next=3,i.metaAction.modal("show",{title:"新增",children:i.metaAction.loadApp("ttk-edf-app-column-type",{store:i.component.props.store,parentId:t})});case 3:e.sent&&i.reload();case 5:case"end":return e.stop()}},e,i)})),this.modifyType=(0,o["default"])(c["default"].mark(function e(){var t;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.metaAction.gf("data.other.filter.columnId")){e.next=4;break}return i.metaAction.toast("error","请选中一个栏目方案"),e.abrupt("return");case 4:return e.next=6,i.metaAction.modal("show",{title:"修改",children:i.metaAction.loadApp("ttk-edf-app-column-type",{store:i.component.props.store,typeId:t})});case 6:e.sent&&i.reload();case 8:case"end":return e.stop()}},e,i)})),this.delType=(0,o["default"])(c["default"].mark(function e(){var t;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i.metaAction.gf("data.other.filter.columnId")){e.next=4;break}return i.metaAction.toast("error","请选中一个栏目方案"),e.abrupt("return");case 4:return e.next=6,i.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(!e.sent){e.next=15;break}return t=i.metaAction.gf("data.other.filter.columnId"),e.next=11,i.webapi.column.del({id:t});case 11:e.sent,i.metaAction.toast("success","删除栏目成功"),i.metaAction.gf("data.pagination").toJS(),i.reload();case 15:case"end":return e.stop()}},e,i)})),this.addDetail=(0,o["default"])(c["default"].mark(function e(){var t,n;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.metaAction.gf("data.other.filter.columnId")){e.next=4;break}return i.metaAction.toast("error","请选中一个栏目方案"),e.abrupt("return");case 4:return e.next=6,i.metaAction.modal("show",{title:"新增",children:i.metaAction.loadApp("ttk-edf-app-column-detail",{store:i.component.props.store,typeId:t})});case 6:e.sent&&((n=[]).push(t),i.selectType(n));case 8:case"end":return e.stop()}},e,i)})),this.modifyDetail=function(a){return(0,o["default"])(c["default"].mark(function e(){var t,n;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.metaAction.gf("data.other.filter.columnId"),e.next=3,i.metaAction.modal("show",{title:"修改",children:i.metaAction.loadApp("ttk-edf-app-column-detail",{store:i.component.props.store,id:a})});case 3:e.sent&&((n=[]).push(t),i.selectType(n));case 5:case"end":return e.stop()}},e,i)}))},this.batchDelDetail=(0,o["default"])(c["default"].mark(function e(){var t,n,a,r,o;return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.metaAction.gf("data.other.filter.columnId")){e.next=4;break}return i.metaAction.toast("error","请选中一个栏目方案"),e.abrupt("return");case 4:if((n=i.metaAction.gf("data.list"))&&0!=n.size){e.next=8;break}return i.metaAction.toast("error","请选中要删除的栏目"),e.abrupt("return");case 8:if((a=n.filter(function(e){return e.get("selected")}))&&0!=a.size){e.next=12;break}return i.metaAction.toast("error","请选中要删除的栏目"),e.abrupt("return");case 12:return e.next=14,i.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 14:if(e.sent){e.next=17;break}return e.abrupt("return");case 17:return console.log(a.toJS()),r=a.map(function(e){return console.log(e),e.get("id")}).toJS(),e.next=21,i.webapi.columnDetail.delDetail({ids:r,type:t});case 21:i.metaAction.toast("success","删除成功"),(o=[]).push(t),i.selectType(o);case 25:case"end":return e.stop()}},e,i)})),this.columnSetting=(0,o["default"])(c["default"].mark(function e(){return c["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.metaAction.modal("show",{title:"栏目设置",children:i.metaAction.loadApp("ttk-edf-app-column-setting",{store:i.component.props.store,columnCode:"columnList"})});case 2:e.sent&&i.reload();case 4:case"end":return e.stop()}},e,i)})),this.metaAction=t.metaAction,this.config=d["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(0)),o=u(n(7));t["default"]=function(e){var t=new r.reducer(e),n=new l((0,a["default"])({},e,{metaReducer:t}));return(0,a["default"])({},t,n)};var i=n(14),r=(n(1),n(34)),c=(u(n(159)),n(252));function u(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var r=this;(0,o["default"])(this,e),this.init=function(e,t){return r.metaReducer.init(e,(0,c.getInitState)())},this.load=function(e,t){return e=r.metaReducer.sf(e,"data.columns",(0,i.fromJS)(t.columnsettings)),e=r.metaReducer.sf(e,"data.list",(0,i.fromJS)(t.list)),e=r.metaReducer.sf(e,"data.pagination",(0,i.fromJS)(t.pagination)),e=r.metaReducer.sf(e,"data.other.filter",(0,i.fromJS)(t.filter)),t.tree&&(e=r.metaReducer.sf(e,"data.tree",(0,i.fromJS)(t.tree))),e},this.selectType=function(e,t){return e=r.metaReducer.sf(e,"data.list",(0,i.fromJS)(t.list)),e=r.metaReducer.sf(e,"data.pagination",(0,i.fromJS)(t.page)),e=r.metaReducer.sf(e,"data.other.filter",(0,i.fromJS)(t.filter))},this.selectAll=function(e,t){var n=r.metaReducer.gf(e,"data.list");if(!n||0==n.size)return e;for(var a=0;a<n.size;a++)e=r.metaReducer.sf(e,"data.list."+a+".selected",t);return e},this.selectRow=function(e,t,n){return e=r.metaReducer.sf(e,"data.list."+t+".selected",n)},this.metaReducer=t.metaReducer};e.exports=t["default"]}});