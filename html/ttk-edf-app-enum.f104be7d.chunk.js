webpackJsonp([53],{817:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,r=m(n(0)),i=m(n(10)),o=m(n(7)),u=m(n(9)),c=m(n(11)),l=m(n(12)),s=n(2),d=(m(s),n(34)),f=m(n(273));function m(e){return e&&e.__esModule?e:{"default":e}}var p=(0,d.wrapper)(f["default"])(a=function(e){function t(){return(0,o["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,l["default"])(t,e),(0,u["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(s.Component))||a;t["default"]=p,e.exports=t["default"]},818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),u=a(n(50)),i=a(n(51)),c=a(n(7));t["default"]=function(e){var t=new o.action(e),n=new f((0,r["default"])({},e,{metaAction:t})),a=(0,r["default"])({},t,n);return t.config({metaHandlers:a}),a};var l=a(n(2)),o=n(34),s=(n(14),a(n(169))),d=(a(n(13)),n(35));function a(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var n,a,o=this;(0,c["default"])(this,e),this.onInit=function(e){var t=e.component,n=e.injections;o.component=t,(o.injections=n).reduce("init");var a=o.metaAction.gf("data.pagination").toJS();o.load(a)},this.load=(n=(0,i["default"])(u["default"].mark(function e(t,n){var a,r;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return null==n&&(n={enumId:"3336424919598080"}),e.next=3,o.webapi.enumDetail.init({pagination:t,filter:n});case 3:return a=e.sent,e.next=6,o.webapi.columnDetail.findByColumnCode("enumList");case 6:r=e.sent,a.columns=r,a.filter=n,o.injections.reduce("load",a);case 10:case"end":return e.stop()}},e,o)})),function(e,t){return n.apply(this,arguments)}),this.reload=(0,i["default"])(u["default"].mark(function e(){var t,n;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=o.metaAction.gf("data.pagination").toJS(),n=o.metaAction.gf("data.other.filter").toJS(),o.load(t,n);case 2:case"end":return e.stop()}},e,o)})),this.selectType=(a=(0,i["default"])(u["default"].mark(function e(t,n){var a,r;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a={currentPage:1,totalData:0,pageSize:20},r={enumId:t[0]},o.load(a,r);case 2:case"end":return e.stop()}},e,o)})),function(e,t){return a.apply(this,arguments)}),this.getListRowsCount=function(){return o.metaAction.gf("data.list").size},this.getListColumns=function(){var n=o.metaAction.gf("data.list").toJS(),e=o.metaAction.gf("data.columns").toJS(),a=d.DataGrid.Column,r=d.DataGrid.Cell,i=[l["default"].createElement(a,{name:"select",columnKey:"select",flexGrow:1,width:40,header:l["default"].createElement(r,{name:"cb"},l["default"].createElement(d.Checkbox,{checked:o.isSelectAll(),onChange:o.selectAll()})),cell:function(e){return l["default"].createElement(r,{name:"cell"},l["default"].createElement(d.Checkbox,{onChange:o.selectRow(e.rowIndex)}))}})];return e.forEach(function(t){if(1==t.isVisible){var e=l["default"].createElement(a,{name:t.id,columnKey:t.id,flexGrow:1,width:t.width,header:l["default"].createElement(r,{name:"header"},t.caption),cell:function(e){return"code"==t.fieldName?l["default"].createElement(r,null,l["default"].createElement("a",{onClick:o.modifyDetail(n[e.rowIndex].id)},n[e.rowIndex][t.fieldName])):l["default"].createElement(r,null,n[e.rowIndex][t.fieldName])}});i.push(e)}}),i},this.isSelectAll=function(){var e=o.metaAction.gf("data.list");return!(!e||0==e.size)&&e.every(function(e){return e.get("selected")})},this.selectAll=function(){return function(e){o.injections.reduce("selectAll",e.target.checked)}},this.selectRow=function(t){return function(e){o.injections.reduce("selectRow",t,e.target.checked)}},this.pageChanged=function(e,t){var n=o.metaAction.gf("data.other.filter").toJS();o.load({current:e,pageSize:t},n)},this.loopTreeChildren=function(e){return e?e.map(function(e){return e.children&&e.children.length?l["default"].createElement(d.Tree.TreeNode,{key:e.id,title:e.name},o.loopTreeChildren(e.children)):l["default"].createElement(d.Tree.TreeNode,{key:e.id,title:e.name})}):null},this.addType=(0,i["default"])(u["default"].mark(function e(){var t;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.metaAction.gf("data.other.filter.enumId"),e.next=3,o.metaAction.modal("show",{title:"新增",children:o.metaAction.loadApp("edfx-app-enum-type",{store:o.component.props.store,parentId:t})});case 3:e.sent&&o.reload();case 5:case"end":return e.stop()}},e,o)})),this.modifyType=(0,i["default"])(u["default"].mark(function e(){var t;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.metaAction.gf("data.other.filter.enumId")){e.next=4;break}return o.metaAction.toast("error","请选中一个分类"),e.abrupt("return");case 4:return e.next=6,o.metaAction.modal("show",{title:"修改",children:o.metaAction.loadApp("edfx-app-enum-type",{store:o.component.props.store,typeId:t})});case 6:e.sent&&o.reload();case 8:case"end":return e.stop()}},e,o)})),this.delType=(0,i["default"])(u["default"].mark(function e(){var t;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.metaAction.gf("data.other.filter.enumId")){e.next=4;break}return o.metaAction.toast("error","请选中一个枚举分类"),e.abrupt("return");case 4:return e.next=6,o.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(!e.sent){e.next=14;break}return t=o.metaAction.gf("data.other.filter.enumId"),e.next=11,o.webapi["enum"].del({id:t});case 11:e.sent,o.metaAction.toast("success","删除枚举分类成功"),o.reload();case 14:case"end":return e.stop()}},e,o)})),this.addDetail=(0,i["default"])(u["default"].mark(function e(){var t,n;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.metaAction.gf("data.other.filter.enumId")){e.next=4;break}return o.metaAction.toast("error","请选中一个枚举分类"),e.abrupt("return");case 4:return e.next=6,o.metaAction.modal("show",{title:"新增",children:o.metaAction.loadApp("edfx-app-enum-detail",{store:o.component.props.store,typeId:t})});case 6:e.sent&&((n=[]).push(t),o.selectType(n));case 8:case"end":return e.stop()}},e,o)})),this.modifyDetail=function(a){return(0,i["default"])(u["default"].mark(function e(){var t,n;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.metaAction.gf("data.other.filter.enumId"),e.next=3,o.metaAction.modal("show",{title:"修改",children:o.metaAction.loadApp("edfx-app-enum-detail",{store:o.component.props.store,id:a})});case 3:e.sent&&((n=[]).push(t),o.selectType(n));case 5:case"end":return e.stop()}},e,o)}))},this.batchDelDetail=(0,i["default"])(u["default"].mark(function e(){var t,n,a,r,i;return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.metaAction.gf("data.other.filter.enumId")){e.next=4;break}return o.metaAction.toast("error","请选中一个枚举分类"),e.abrupt("return");case 4:if((n=o.metaAction.gf("data.list"))&&0!=n.size){e.next=8;break}return o.metaAction.toast("error","请选中要删除的枚举项"),e.abrupt("return");case 8:if((a=n.filter(function(e){return e.get("selected")}))&&0!=a.size){e.next=12;break}return o.metaAction.toast("error","请选中要删除的枚举项"),e.abrupt("return");case 12:return e.next=14,o.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 14:if(e.sent){e.next=17;break}return e.abrupt("return");case 17:return r=a.map(function(e){return e.get("id")}).toJS(),e.next=20,o.webapi.enumDetail.delDetail({ids:r,enumId:t});case 20:o.metaAction.toast("success","删除成功"),(i=[]).push(t),o.selectType(i);case 24:case"end":return e.stop()}},e,o)})),this.columnSetting=(0,i["default"])(u["default"].mark(function e(){return u["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.metaAction.modal("show",{title:"栏目设置",children:o.metaAction.loadApp("edfx-app-column-setting",{store:o.component.props.store,columnCode:"enumList"})});case 2:e.sent&&o.reload();case 4:case"end":return e.stop()}},e,o)})),this.metaAction=t.metaAction,this.config=s["default"].current,this.webapi=this.config.webapi};e.exports=t["default"]},819:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(0)),i=c(n(7));t["default"]=function(e){var t=new r.reducer(e),n=new l((0,a["default"])({},e,{metaReducer:t}));return(0,a["default"])({},t,n)};var o=n(14),r=(n(1),n(34)),u=(c(n(169)),n(274));function c(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var r=this;(0,i["default"])(this,e),this.init=function(e,t){return r.metaReducer.init(e,(0,u.getInitState)())},this.load=function(e,t){return e=r.metaReducer.sf(e,"data.columns",(0,o.fromJS)(t.columns)),e=r.metaReducer.sf(e,"data.list",(0,o.fromJS)(t.list)),e=r.metaReducer.sf(e,"data.pagination",(0,o.fromJS)(t.pagination)),e=r.metaReducer.sf(e,"data.other.filter",(0,o.fromJS)(t.filter)),t.tree&&(e=r.metaReducer.sf(e,"data.tree",(0,o.fromJS)(t.tree))),e},this.selectType=function(e,t){return e=r.metaReducer.sf(e,"data.list",(0,o.fromJS)(t.list)),e=r.metaReducer.sf(e,"data.pagination",(0,o.fromJS)(t.page)),e=r.metaReducer.sf(e,"data.other.filter",(0,o.fromJS)(t.filter))},this.selectAll=function(e,t){var n=r.metaReducer.gf(e,"data.list");if(!n||0==n.size)return e;for(var a=0;a<n.size;a++)e=r.metaReducer.sf(e,"data.list."+a+".selected",t);return e},this.selectRow=function(e,t,n){return e=r.metaReducer.sf(e,"data.list."+t+".selected",n)},this.metaReducer=t.metaReducer};e.exports=t["default"]}});