webpackJsonp([38],{911:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=m(a(0)),i=m(a(10)),o=m(a(7)),c=m(a(9)),u=m(a(11)),l=m(a(12)),d=a(2),s=(m(d),a(34)),f=m(a(333));function m(e){return e&&e.__esModule?e:{"default":e}}var p=(0,s.wrapper)(f["default"])(n=function(e){function t(){return(0,o["default"])(this,t),(0,u["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,l["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||n;t["default"]=p,e.exports=t["default"]},912:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a(0)),i=s(a(40)),n=s(a(41)),c=s(a(7));t["default"]=function(e){var t=new o.action(e),a=new f((0,r["default"])({},e,{metaAction:t})),n=(0,r["default"])({},t,a);return t.config({metaHandlers:n}),n};var u=s(a(2)),o=a(34),l=(a(14),s(a(198))),d=(s(a(13)),a(35));function s(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var a,o=this;(0,c["default"])(this,e),this.onInit=function(e){var t=e.component,a=e.injections;o.component=t,(o.injections=a).reduce("init");var n=o.metaAction.gf("data.pagination").toJS();o.load(n)},this.load=(a=(0,n["default"])(i["default"].mark(function e(t){var a,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.orderBy="code",e.next=3,o.webapi.menu.queryPageList({page:t,entity:r});case 3:return a=e.sent,e.next=6,o.webapi.columnDetail.findByColumnCode("menuList");case 6:n=e.sent,a.columns=n,a.filter=r,o.injections.reduce("load",a);case 10:case"end":return e.stop()}},e,o)})),function(e){return a.apply(this,arguments)}),this.reload=(0,n["default"])(i["default"].mark(function e(){var t,a;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=o.metaAction.gf("data.pagination").toJS(),a=o.metaAction.gf("data.filter").toJS(),o.load(t,a);case 3:case"end":return e.stop()}},e,o)})),this.getListRowsCount=function(){return o.metaAction.gf("data.list").size},this.getListColumns=function(){var a=o.metaAction.gf("data.list").toJS(),e=o.metaAction.gf("data.columns").toJS(),n=d.DataGrid.Column,r=d.DataGrid.Cell,i=[u["default"].createElement(n,{name:"select",columnKey:"select",flexGrow:1,width:40,header:u["default"].createElement(r,{name:"cb"},u["default"].createElement(d.Checkbox,{checked:o.isSelectAll(),onChange:o.selectAll()})),cell:function(e){return u["default"].createElement(r,{name:"cell"},u["default"].createElement(d.Checkbox,{onChange:o.selectRow(e.rowIndex)}))}})];return e.forEach(function(t){if(1==t.isVisible){var e=u["default"].createElement(n,{name:t.id,columnKey:t.id,flexGrow:1,width:t.width,header:u["default"].createElement(r,{name:"header"},t.caption),cell:function(e){return"code"==t.fieldName?u["default"].createElement(r,null,u["default"].createElement("a",{onClick:o.modifyDetail(a[e.rowIndex].id)},a[e.rowIndex][t.fieldName])):u["default"].createElement(r,null,a[e.rowIndex][t.fieldName])}});i.push(e)}}),i},this.isSelectAll=function(){var e=o.metaAction.gf("data.list");return!(!e||0==e.size)&&e.every(function(e){return e.get("selected")})},this.selectAll=function(){return function(e){o.injections.reduce("selectAll",e.target.checked)}},this.selectRow=function(t){return function(e){o.injections.reduce("selectRow",t,e.target.checked)}},this.pageChanged=function(e,t){var a=o.metaAction.gf("data.filter").toJS();o.load({currentPage:e,pageSize:t},a)},this.selectType=function(e,t){var a=e[0]||0,n={parentId:Number(a),isReloadTree:!1};o.load({currentPage:1,totalData:0,pageSize:50},n)},this.loopTreeChildren=function(e,t){return e?e.map(function(e){return e.children&&e.children.length?u["default"].createElement(d.Tree.TreeNode,{key:e.id,title:e.name},o.loopTreeChildren(e.children)):u["default"].createElement(d.Tree.TreeNode,{key:e.id,title:e.name})}):null},this.addType=(0,n["default"])(i["default"].mark(function e(){var t,a;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.metaAction.gf("data.filter.parentId")||0,e.next=3,o.metaAction.modal("show",{title:"新增",children:o.metaAction.loadApp("ttk-edf-app-portal-menu-detail",{store:o.component.props.store,parentId:t})});case 3:e.sent&&(a=o.metaAction.gf("data.pagination").toJS(),o.load(a));case 5:case"end":return e.stop()}},e,o)})),this.modifyType=(0,n["default"])(i["default"].mark(function e(){var t,a;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.metaAction.gf("data.filter.parentId")){e.next=4;break}return o.metaAction.toast("error","请选中修改项"),e.abrupt("return");case 4:return e.next=6,o.metaAction.modal("show",{title:"修改",children:o.metaAction.loadApp("ttk-edf-app-portal-menu-detail",{store:o.component.props.store,id:t})});case 6:e.sent&&(a=o.metaAction.gf("data.pagination").toJS(),o.load(a));case 8:case"end":return e.stop()}},e,o)})),this.delType=(0,n["default"])(i["default"].mark(function e(){var t,a;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.metaAction.gf("data.filter.parentId")){e.next=4;break}return o.metaAction.toast("error","请选中删除项"),e.abrupt("return");case 4:return e.next=6,o.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(!e.sent){e.next=15;break}return t=o.metaAction.gf("data.filter.parentId"),e.next=11,o.webapi.menu.deleteBatch([{id:t}]);case 11:e.sent,o.metaAction.toast("success","删除成功"),a=o.metaAction.gf("data.pagination").toJS(),o.load(a);case 15:case"end":return e.stop()}},e,o)})),this.addDetail=(0,n["default"])(i["default"].mark(function e(){var t;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.metaAction.gf("data.filter.parentId")||0,e.next=3,o.metaAction.modal("show",{title:"新增",children:o.metaAction.loadApp("ttk-edf-app-portal-menu-detail",{store:o.component.props.store,parentId:t})});case 3:e.sent&&o.reload();case 5:case"end":return e.stop()}},e,o)})),this.modifyDetail=function(t){return(0,n["default"])(i["default"].mark(function e(){return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.metaAction.modal("show",{title:"修改",children:o.metaAction.loadApp("ttk-edf-app-portal-menu-detail",{store:o.component.props.store,id:t})});case 2:e.sent&&o.reload();case 4:case"end":return e.stop()}},e,o)}))},this.batchDelDetail=(0,n["default"])(i["default"].mark(function e(){var t,a,n;return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=o.metaAction.gf("data.list"))&&0!=t.size){e.next=3;break}return e.abrupt("return",o.metaAction.toast("error","请选中删除项"));case 3:if((a=t.filter(function(e){return e.get("selected")}))&&0!=a.size){e.next=6;break}return e.abrupt("return",o.metaAction.toast("error","请选中删除项"));case 6:return e.next=8,o.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 8:if(e.sent){e.next=11;break}return e.abrupt("return");case 11:return n=a.map(function(e){return{id:e.get("id")}}).toJS(),e.next=14,o.webapi.menu.deleteBatch(n);case 14:o.metaAction.toast("success","删除成功"),o.reload();case 16:case"end":return e.stop()}},e,o)})),this.columnSetting=(0,n["default"])(i["default"].mark(function e(){return i["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.metaAction.modal("show",{title:"栏目设置",children:o.metaAction.loadApp("edfx-app-column-setting",{store:o.component.props.store,columnCode:"menuList"})});case 2:e.sent&&o.reload();case 4:case"end":return e.stop()}},e,o)})),this.metaAction=t.metaAction,this.config=l["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},913:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(0)),i=l(a(7));t["default"]=function(e){var t=new r.reducer(e),a=new d((0,n["default"])({},e,{metaReducer:t}));return(0,n["default"])({},t,a)};var o=a(14),c=a(1),r=a(34),u=(l(a(198)),a(334));function l(e){return e&&e.__esModule?e:{"default":e}}var d=function e(t){var r=this;(0,i["default"])(this,e),this.init=function(e,t){return r.metaReducer.init(e,(0,u.getInitState)())},this.load=function(e,t){return e=r.metaReducer.sf(e,"data.columns",(0,o.fromJS)(t.columns)),e=r.metaReducer.sf(e,"data.list",(0,o.fromJS)(t.list)),e=r.metaReducer.sf(e,"data.pagination",(0,o.fromJS)(t.page)),e=r.metaReducer.sf(e,"data.filter",(0,o.fromJS)(t.filter)),void 0!==t.filter.isReloadTree&&!0!==t.filter.isReloadTree||(e=r.metaReducer.sf(e,"data.other.tree",(0,o.fromJS)(c.tree.build(t.list).children))),e},this.selectAll=function(e,t){var a=r.metaReducer.gf(e,"data.list");if(!a||0==a.size)return e;for(var n=0;n<a.size;n++)e=r.metaReducer.sf(e,"data.list."+n+".selected",t);return e},this.selectRow=function(e,t,a){return e=r.metaReducer.sf(e,"data.list."+t+".selected",a)},this.metaReducer=t.metaReducer};e.exports=t["default"]}});