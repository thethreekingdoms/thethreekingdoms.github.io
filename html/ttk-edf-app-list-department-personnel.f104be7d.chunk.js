webpackJsonp([20],{859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,n=f(r(0)),i=f(r(10)),s=f(r(7)),o=f(r(9)),d=f(r(11)),c=f(r(12)),u=r(2),p=(f(u),r(34)),l=f(r(301));function f(e){return e&&e.__esModule?e:{"default":e}}var m=(0,p.wrapper)(l["default"])(a=function(e){function t(){return(0,s["default"])(this,t),(0,d["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,c["default"])(t,e),(0,o["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(u.Component))||a;t["default"]=m,e.exports=t["default"]},860:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n,o=f(r(0)),g=f(r(50)),d=f(r(51)),i=f(r(7));t["default"]=function(e){var t=new s.action(e),r=p["default"].actionCreator((0,o["default"])({},e,{metaAction:t})),a=new h((0,o["default"])({},e,{metaAction:t,extendAction:r})),n=(0,o["default"])({},t,r.gridAction,a);return t.config({metaHandlers:n}),n};var c=f(r(2)),s=r(34),m=r(14),u=f(r(183)),p=f(r(987)),l=r(35);function f(e){return e&&e.__esModule?e:{"default":e}}var h=(a=function e(t){(0,i["default"])(this,e),n.call(this),this.metaAction=t.metaAction,this.extendAction=t.extendAction,this.config=u["default"].current,this.webapi=this.config.webapi},n=function(){var r,t,a,n,i,s,h=this;this.onInit=function(e){var t=e.component,r=e.injections;h.extendAction.gridAction.onInit({component:t,injections:r}),h.component=t,h.injections=r,h.VatTaxpayer=h.metaAction.context.get("currentOrg")||{},h.VatTaxpayer.id="genid",r.reduce("init");var a=h.component.props.addEventListener;a&&a("onTabFocus",h.load.bind(h)),h.load(h.metaAction.gf("data.pagination").toJS())},this.load=(r=(0,d["default"])(g["default"].mark(function e(t,r){var a,n,i,s,o,d,c,u,p,l,f,m;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=!(i=n=a=void 0),d=o=void 0,h.metaAction.sf("data.other.loading",!0),!r||r.id){e.next=4;break}return e.abrupt("return");case 4:return r&&(s=r.isReloadTree),e.next=7,h.webapi.role.query();case 7:if(d=e.sent,!s){e.next=12;break}return e.next=11,h.webapi.dept.query();case 11:n=e.sent;case 12:if(t&&t.currentPage||(t=h.metaAction.gf("data.pagination").toJS()),c={page:{currentPage:t.currentPage||t.current,pageSize:t.pageSize}},r&&r.parentId?c.entity={departmentId:r.parentId}:r&&r.grade||(r={type:0,isEndNode:!1,parentId:h.VatTaxpayer.id,id:h.VatTaxpayer.id,grade:0}),0!==r.grade){e.next=23;break}return u={page:{currentPage:t.currentPage||t.current,pageSize:t.pageSize}},e.next=19,h.webapi.person.queryList(u);case 19:i=e.sent,o=!0,e.next=27;break;case 23:return e.next=25,h.webapi.person.queryList(c);case 25:i=e.sent,o=!1;case 27:return e.next=29,h.webapi.dept.isCreater();case 29:p=e.sent,l={status:p},f=h.VatTaxpayer,m=h.metaAction.context.get("currentUser"),a={deptResponse:n,persResponse:i,filter:r,VatTaxpayer:f,isCreater:o,roleResponse:d,isDeptCreaterStatus:l,user:m},h.injections.reduce("load",a),h.metaAction.sf("data.other.loading",!1);case 36:case"end":return e.stop()}},e,h)})),function(e,t){return r.apply(this,arguments)}),this.refresh=function(e,t,r){var a=h.metaAction.gf("data.pagination").toJS(),n=h.metaAction.gf("data.filter").toJS();e&&(n.isReloadTree=e),void 0!==r&&(n.isEndNode=r),t&&(n=!1),h.load(a,n)},this.heightCount=function(){var e="edfx-deptPers edfx-deptPersNoBorder";return h.component.props.modelStatus&&1==h.component.props.modelStatus&&(e="edfx-deptPers"),e},this.renderTreeNodes=function(e){return e?e.map(function(e){return e.children?c["default"].createElement(l.Tree.TreeNode,{title:e.title,key:e.key,dataRef:e},h.renderTreeNodes(e.children)):c["default"].createElement(l.Tree.TreeNode,(0,o["default"])({},e,{dataRef:e}))}):c["default"].createElement("div",null)},this.selectType=function(e,t){var r=t.selectedNodes[0]&&t.selectedNodes[0].key||"genid";if(h.metaAction.sf("data.treeSelectedKey",(0,m.fromJS)([r])),0==t.selected)return!1;h.metaAction.gf("data").toJS();var a=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.id,n=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.pid,i=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.grade,s=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.isEndNode,o=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.id,d=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.name,c=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.propertyName,u=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.property,p=t.selectedNodes[0]&&t.selectedNodes[0].props.dataRef.ts,l=h.metaAction.gf("data.pagination").toJS(),f={parentId:Number(a),grade:i||0,isEndNode:s,isReloadTree:!1,id:o,name:d,propertyName:c,property:u,pid:n,ts:p};h.load(l,f)},this.pageChanged=function(e,t){var r=h.metaAction.gf("data.filter").toJS();r.isReloadTree=!1,null!=t&&null!=t||(t=h.metaAction.gf("data.pagination").toJS().pageSize),h.load({currentPage:e,pageSize:t},r)},this.getListRowsCount=function(){return h.metaAction.gf("data.list").size},this.selectRow=function(t){return function(e){h.injections.reduce("selectRow",t,e.target.checked)}},this.addDept=(0,d["default"])(g["default"].mark(function e(){var t;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _hmt&&_hmt.push(["_trackEvent","基础档案","部门人员","左上角(+)"]),t=h.metaAction.gf("data.filter").toJS(),e.next=4,h.metaAction.modal("show",{title:"部门",className:"edfx-deptPers-deptModal",wrapClassName:"card-archive",width:400,height:290,children:h.metaAction.loadApp("ttk-edf-app-card-department",{store:h.component.props.store,parentId:t?t.parentId:"",grade:t.grade,propertyName:t?t.propertyName:"",property:t?t.property:""})});case 4:e.sent&&h.refresh(!0,void 0,!1);case 6:case"end":return e.stop()}},e,h)})),this.editDept=(0,d["default"])(g["default"].mark(function e(){var t,r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=h.metaAction.gf("data.filter").toJS()).id){e.next=4;break}return h.metaAction.toast("warning","请选择部门！"),e.abrupt("return");case 4:if(t.id!=h.VatTaxpayer.id){e.next=7;break}return h.metaAction.toast("warning","该部门不能修改！"),e.abrupt("return");case 7:return e.next=9,h.metaAction.modal("show",{title:"部门",className:"edfx-deptPers-deptModal",wrapClassName:"card-archive",width:400,height:290,children:h.metaAction.loadApp("ttk-edf-app-card-department",{store:h.component.props.store,id:t?t.id:""})});case 9:(r=e.sent)&&(h.metaAction.sf("data.filter.ts",(0,m.fromJS)(r.ts)),h.refresh(!0));case 11:case"end":return e.stop()}},e,h)})),this.delDept=(0,d["default"])(g["default"].mark(function e(){var t,r,a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(_hmt&&_hmt.push(["_trackEvent","基础档案","部门人员","左上角(X)"]),t=h.metaAction.gf("data.filter").toJS(),r=h.metaAction.gf("data.isDelDept"),t.id!=h.VatTaxpayer.id){e.next=5;break}return h.metaAction.toast("warning","该部门不能删除！"),e.abrupt("return");case 5:if(!t||t.parentId){e.next=8;break}return h.metaAction.toast("warning","请选择部门！"),e.abrupt("return");case 8:if(r){e.next=11;break}return h.metaAction.toast("warning","该部门有人员，不能删除！"),e.abrupt("return");case 11:if(t.isEndNode){e.next=14;break}return h.metaAction.toast("warning","该部门不是末级部门，不能删除！"),e.abrupt("return");case 14:return e.next=16,h.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 16:if(!e.sent){e.next=29;break}if(a=void 0,!t.pid){e.next=25;break}return e.next=22,h.webapi.dept["delete"]({id:t.parentId,pid:t.pid,ts:t.ts});case 22:a=e.sent,e.next=28;break;case 25:return e.next=27,h.webapi.dept["delete"]({id:t.parentId,ts:t.ts});case 27:a=e.sent;case 28:a&&(h.metaAction.toast("success","删除成功！"),h.refresh(!0,h.VatTaxpayer.id));case 29:case"end":return e.stop()}},e,h)})),this.transPrises=(0,d["default"])(g["default"].mark(function e(){var t,r,a;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(_hmt&&_hmt.push(["_trackEvent","基础档案","部门人员","移交企业"]),void 0,t=h.extendAction.gridAction.getSelectedInfo("dataGrid"),r=h.metaAction.context.get("currentUser"),a=h.metaAction.context.get("currentOrg"),t.length){e.next=5;break}return h.metaAction.toast("warning","请选择人员！"),e.abrupt("return");case 5:if(!(1<t.length)){e.next=8;break}return h.metaAction.toast("warning","请选择一个已激活用户进行企业移交！"),e.abrupt("return");case 8:if(r.personid!=t[0].id){e.next=11;break}return h.metaAction.toast("warning","请选择非创建者兼系统管理员的用户进行企业移交！"),e.abrupt("return");case 11:if(3000030003==t[0].activeStatus){e.next=16;break}return h.metaAction.toast("warning","请选择已激活用户进行移交企业！"),e.abrupt("return");case 16:if(1==t[0].isEnable){e.next=21;break}return h.metaAction.toast("warning","请选择已启用用户进行移交企业！"),e.abrupt("return");case 21:return e.next=23,h.metaAction.modal("confirm",{title:"企业移交",content:"您确定将"+a.name+"企业移交吗?",style:{wordWrap:"break-word"}});case 23:if(!e.sent){e.next=30;break}return e.next=27,h.webapi.person.transferPrivilege({personId:t[0].id});case 27:e.sent&&h.metaAction.toast("success","移交成功！"),h.load();case 30:case"end":return e.stop()}},e,h)})),this.addPerson=(t=(0,d["default"])(g["default"].mark(function e(t){var r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(_hmt&&_hmt.push(["_trackEvent","基础档案","部门人员","右上角新增"]),0==(r=h.metaAction.gf("data.filter").toJS()).grade){e.next=9;break}if(r.id!=h.VatTaxpayer.id){e.next=6;break}return h.metaAction.toast("warning","该部门不能新增人员！"),e.abrupt("return");case 6:if(r.isEndNode){e.next=9;break}return h.metaAction.toast("warning","该部门不是末级部门，不能添加人员！"),e.abrupt("return");case 9:return e.next=11,h.metaAction.modal("show",{title:"人员",width:720,className:"edfx-deptPers-personModal",height:550,children:h.metaAction.loadApp("ttk-edf-app-card-person",{store:h.component.props.store,dept:r})});case 11:e.sent&&h.refresh();case 13:case"end":return e.stop()}},e,h)})),function(e){return t.apply(this,arguments)}),this.personDelClick=function(e){h.del(e)},this.delBatch=function(){var e=h.extendAction.gridAction.getSelectedInfo("dataGrid"),t=[],r=(h.metaAction.context.get("currentUser"),!0);if(e.length){if(e.forEach(function(e){1==e.isOrgCreator&&(r=!1),t.push({id:e.id,userId:e.userId?e.userId:"",ts:e.ts})}),0==r)return h.metaAction.toast("warning","企业创建者不允许删除！"),!1;h.del(t)}else h.metaAction.toast("warning","请选择人员！")},this.del=(a=(0,d["default"])(g["default"].mark(function e(t){var r,a,n;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.metaAction.context.get("currentUser"),e.next=3,h.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 3:if(!e.sent){e.next=18;break}if(a=void 0,!t.userId||t.userId!=r.id){e.next=9;break}return h.metaAction.toast("warning","当前账号正在登录，禁止删除！"),e.abrupt("return");case 9:if(!t||1!=t.isOrgCreator){e.next=12;break}return h.metaAction.toast("warn","创建者禁止删除！"),e.abrupt("return");case 12:return a=t instanceof Array?t:[{id:t.id,userId:t.userId?t.userId:"",ts:t.ts}],e.next=15,h.webapi.person["delete"](a);case 15:(n=e.sent).length&&0<n.length?n.forEach(function(e){h.metaAction.toast("warn",e.message)}):h.metaAction.toast("success","删除成功！"),h.refresh();case 18:case"end":return e.stop()}},e,h)})),function(e){return a.apply(this,arguments)}),this.modifyDetail=function(t){return function(e){h.edit(t)}},this.edit=(n=(0,d["default"])(g["default"].mark(function e(t){var r;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((r=h.metaAction.gf("data.filter").toJS()).parentId){e.next=4;break}return h.metaAction.toast("warning","请选择部门！"),e.abrupt("return");case 4:return e.next=6,h.metaAction.modal("show",{title:"人员",width:720,className:"edfx-deptPers-personModal",height:550,children:h.metaAction.loadApp("ttk-edf-app-card-person",{store:h.component.props.store,parentId:r.parentId?r.parentId:"",personId:t})});case 6:e.sent&&h.refresh();case 8:case"end":return e.stop()}},e,h)})),function(e){return n.apply(this,arguments)}),this.personStatusClick=function(e,t){h.metaAction.gf("data.status");h.setStatus(e,t)},this.setStatus=(i=(0,d["default"])(g["default"].mark(function e(t,r){var a,n;return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isEnable){e.next=8;break}return t.isEnable=!1,e.next=4,h.webapi.person.update(t);case 4:(a=e.sent)&&(h.metaAction.toast("success","停用人员成功！"),h.injections.reduce("enable",a,r)),e.next=13;break;case 8:return t.isEnable=!0,e.next=11,h.webapi.person.update(t);case 11:(n=e.sent)&&(h.metaAction.toast("success","启用人员成功！"),h.injections.reduce("enable",n,r));case 13:case"end":return e.stop()}},e,h)})),function(e,t){return i.apply(this,arguments)}),this.batchMenuClick=(s=(0,d["default"])(g["default"].mark(function e(t){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"tempt"==t.key&&h.webapi.person.temptDownload();case 1:case"end":return e.stop()}},e,h)})),function(e){return s.apply(this,arguments)}),this.importPerson=(0,d["default"])(g["default"].mark(function e(){return g["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.metaAction.modal("show",{title:"导入",width:400,height:330,cancelText:"取消",okText:"导入",children:h.metaAction.loadApp("ttk-edf-app-card-personimport",{store:h.component.props.store})});case 2:e.sent&&(h.metaAction.sf("data.treeSelectedKey",(0,m.fromJS)(["genid"])),h.load("",{type:0,isEndNode:!1,parentId:"genid",id:"genid",grade:0,isReloadTree:!0}));case 4:case"end":return e.stop()}},e,h)})),this.exportPerson=function(){h.webapi.person["export"]()},this.roleShow=function(e){var r=h.metaAction.gf("data.roles").toJS(),a="";return e.roleDtoList&&0<e.roleDtoList.length&&(e.roleDtoList.forEach(function(t){return r.forEach(function(e){t.roleId==e.id&&(a+=e.name+",")})}),a=a.slice(0,length-1)),e.isOrgCreator&&1==e.isOrgCreator&&(a="创建者兼系统管理员"),a}},a);e.exports=t["default"]},861:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(r(0)),a=c(r(7));t["default"]=function(e){var t=new s.reducer(e),r=o["default"].reducerCreator((0,i["default"])({},e,{metaReducer:t})),a=new p((0,i["default"])({},e,{metaReducer:t,extendReducer:r})),n=(0,i["default"])({},t,r.gridReducer,a);return(0,i["default"])({},n)};var u=r(14),s=(r(1),r(34)),n=c(r(183)),o=c(r(987)),d=r(302);function c(e){return e&&e.__esModule?e:{"default":e}}var p=function e(t){var c=this;(0,a["default"])(this,e),this.init=function(e,t){return c.metaReducer.init(e,(0,d.getInitState)())},this.load=function(e,t){var r=t.deptResponse,a=t.persResponse,n=t.filter,i=t.user,s=t.VatTaxpayer;if(e=c.metaReducer.sf(e,"data.user",(0,u.fromJS)(i)),t.roleResponse&&(e=c.metaReducer.sf(e,"data.roles",(0,u.fromJS)(t.roleResponse))),n&&(e=c.metaReducer.sf(e,"data.filter",(0,u.fromJS)(n)),e=c.metaReducer.sf(e,"data.expandedKeys",(0,u.fromJS)(n.parentId))),r&&r.list){r.list.forEach(function(e){e.children&&(e.children=null)});var o=c.getTreeNode(r.list);s.title=s.name,s.key="genid",o&&0<o.length?s.children=o:s.children=[],e=c.metaReducer.sf(e,"data.other.tree",(0,u.fromJS)([s]))}if(a&&a.list&&(e=c.metaReducer.sf(e,"data.list",(0,u.fromJS)(a.list)),e=a.list.length?c.metaReducer.sf(e,"data.isDelDept",(0,u.fromJS)(!1)):c.metaReducer.sf(e,"data.isDelDept",(0,u.fromJS)(!0)),t.isCreater&&(e=c.metaReducer.sf(e,"data.isCreater",(0,u.fromJS)(t.isCreater)))),a&&a.page){var d={current:a.page.currentPage,total:a.page.totalCount,pageSize:a.page.pageSize};e=c.metaReducer.sf(e,"data.pagination",(0,u.fromJS)(d))}return t.isDeptCreaterStatus&&(e=c.metaReducer.sf(e,"data.status.isDeptCreater",(0,u.fromJS)(t.isDeptCreaterStatus.status))),e},this.treeKey=function(e,t){return e=c.metaReducer.sf(e,"data.expandedKeys",t)},this.selectAll=function(e,t,r){return e=c.extendReducer.gridReducer.selectAll(e,t,r)},this.enable=function(e,t,r){return t&&(e=c.metaReducer.sf(e,"data.list."+r,(0,u.fromJS)(t))),e},this.selectRow=function(e,t,r){return e=c.metaReducer.sf(e,"data.list."+t+".selected",r)},this.getTreeNode=function(e,t,r){for(var a,n=[],i=0;i<e.length;i++)if(e[i].pid==t){var s=e[i];null!=r&&NaN!=Number(r)?s.key=r+"-"+i:s.key=i,0<(a=c.getTreeNode(e,e[i].id,i)).length&&(s.children=a),s.title=s.name,n.push(s)}return n},this.metaReducer=t.metaReducer,this.extendReducer=t.extendReducer,this.config=n["default"].current};e.exports=t["default"]},987:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(0),i=(a=n)&&a.__esModule?a:{"default":a},s=r(35);t["default"]={actionCreator:function(e){return{gridAction:new s.GridDecorator.action((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"ttk-edf-app-list-department-personnel-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,r){return!1}}}}))}},reducerCreator:function(e){return{gridReducer:new s.GridDecorator.reducer((0,i["default"])({},e,{gridOption:{dataGrid:{path:"data.list",selectFieldName:"selected",cellClassName:"ttk-edf-app-list-department-personnel-cell",emptyRow:{},getColNames:function(e){return[]},cellIsReadonly:function(e,t,r){return!1}}}}))}}},e.exports=t["default"]}});