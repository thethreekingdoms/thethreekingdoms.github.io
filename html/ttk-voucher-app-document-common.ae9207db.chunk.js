webpackJsonp([30],{1062:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,o=p(n(0)),i=p(n(10)),c=p(n(7)),r=p(n(9)),l=p(n(11)),u=p(n(12)),s=n(2),d=(p(s),n(34)),f=p(n(402));function p(e){return e&&e.__esModule?e:{"default":e}}var m=(0,d.wrapper)(f["default"])(a=function(e){function t(){return(0,c["default"])(this,t),(0,l["default"])(this,(t.__proto__||(0,i["default"])(t)).apply(this,arguments))}return(0,u["default"])(t,e),(0,r["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,o["default"])({},this.props,{path:"root"}))}}]),t}(s.Component))||a;t["default"]=m,e.exports=t["default"]},1063:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o,i=p(n(0)),c=p(n(36)),r=p(n(40)),l=p(n(41)),u=p(n(7));t["default"]=function(e){var t=new d.action(e),n=new m((0,i["default"])({},e,{metaAction:t})),a=(0,i["default"])({},t,n);return t.config({metaHandlers:a}),a};p(n(2));var s=n(14),d=n(34),f=p(n(230));function p(e){return e&&e.__esModule?e:{"default":e}}var m=(a=function e(t){(0,u["default"])(this,e),o.call(this),this.metaAction=t.metaAction,this.config=f["default"].current,this.webapi=this.config.webapi},o=function(){var t,n,a=this;this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,a.component.props.setOkListener&&a.component.props.setOkListener(a.onOk),n.reduce("init"),a.load()},this.load=(0,l["default"])(r["default"].mark(function e(){var t;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.webapi.commonDoc.query();case 2:t=e.sent,a.injections.reduce("load",t);case 4:case"end":return e.stop()}},e,a)})),this.onOk=function(){var e=a.metaAction.gf("data.selectedCommon");return e?{docTemplateId:e}:(a.metaAction.toast("warning","请选择需要使用的模板！"),!1)},this.getList=function(e){var o=[],i=[],t=[];if(e.entrys.map(function(e){var t=""+e.directionName,n=e.accountCode?e.accountCode:"",a=e.accountName?e.accountName:"";"借"==t?0==o.length?o.push({tip:!0,ellipsis:!0,name:"content",component:"::div",className:"content-list",children:"借 : "+n+" "+a}):o.push({tip:!0,ellipsis:!0,name:"content",component:"::div",className:"content-list-ll",children:n+" "+a}):0==i.length?i.push({tip:!0,ellipsis:!0,name:"content",component:"::div",className:"content-list",children:"贷 : "+n+" "+a}):i.push({tip:!0,ellipsis:!0,name:"content",component:"::div",className:"content-list-ll",children:n+" "+a})}),0==o.length&&o.push({tip:!0,ellipsis:!0,name:"content",component:"::div",className:"content-list",children:"借:"}),0==i.length&&i.push({tip:!0,ellipsis:!0,name:"content",component:"::div",className:"content-list",children:"贷:"}),2<o.length)t=[].concat((0,c["default"])(o.slice(0,3)),(0,c["default"])(i.slice(0,1)));else if(2<i.length){var n=o.length;t=[].concat((0,c["default"])(o.slice(0,n)),(0,c["default"])(i.slice(0,4-n)))}else t=[].concat(o,i);return t},this.modifyTemplate=(t=(0,l["default"])(r["default"].mark(function e(t){var n;return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.metaAction.modal("show",{title:"存为模板",width:340,children:a.metaAction.loadApp("ttk-voucher-app-document-common-add",{store:a.component.props.store,columnCode:"common",initData:{template:(0,s.Map)(t),modify:!0}})});case 2:(n=e.sent).result&&a.injections.reduce("modifyTemplate",(0,s.fromJS)(n.editTemplate));case 4:case"end":return e.stop()}},e,a)})),function(e){return t.apply(this,arguments)}),this.deleteTemplate=(n=(0,l["default"])(r["default"].mark(function e(t){return r["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 2:e.sent&&(a.webapi.commonDoc["delete"]({docTemplateId:t.docTemplateId}),a.metaAction.toast("success","删除常用凭证成功！"),a.injections.reduce("deleteTemplate",t));case 4:case"end":return e.stop()}},e,a)})),function(e){return n.apply(this,arguments)})},a);e.exports=t["default"]},1064:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o,i=s(n(0)),f=s(n(16)),c=s(n(7));t["default"]=function(e){var t=new r.reducer(e),n=new d((0,i["default"])({},e,{metaReducer:t}));return(0,i["default"])({},t,n)};var p=n(14),r=n(34),l=s(n(230)),u=n(403);function s(e){return e&&e.__esModule?e:{"default":e}}var d=(a=function e(t){(0,c["default"])(this,e),o.call(this),this.metaReducer=t.metaReducer,this.config=l["default"].current},o=function(){var d=this;this.init=function(e,t){var n=(0,u.getInitState)();return d.metaReducer.init(e,n)},this.load=function(e,t){return e=d.metaReducer.sf(e,"data.other.value",(0,p.fromJS)(t))},this.initTemplate=function(e,t){var n=(0,p.List)(),a=0,o=void 0,i=!0,c=!1,r=void 0;try{for(var l,u=(0,f["default"])(t);!(i=(l=u.next()).done);i=!0){var s=l.value;0==a&&(o=(0,p.Map)()),o=o.set("col"+a,s),(a+1)%3==0?(n=n.push(o),o=void 0,a=0):a++}}catch(e){c=!0,r=e}finally{try{!i&&u["return"]&&u["return"]()}finally{if(c)throw r}}return o&&(n=n.push(o)),e=d.metaReducer.sf(e,"data.other.templateDataSource",t),d.metaReducer.sf(e,"data.templateList",n)},this.modifyTemplate=function(e,t){for(var n=d.metaReducer.gf(e,"data.other.value"),a=0;a<n.size;a++){var o=n.get(a);if(o.get("docTemplateId")==t.get("docTemplateId")){o=(o=o.set("docTemplateName",t.get("docTemplateName"))).set("docTemplateCode",t.get("docTemplateCode")),e=d.metaReducer.sf(e,"data.other.value",n.set(a,o));break}}return e},this.deleteTemplate=function(e,t){var n=d.metaReducer.gf(e,"data.other.value");return n=n.filter(function(e){return e.get("docTemplateId")!=t.docTemplateId}),d.load(e,n)},this.selectTemplate=function(e,t,n){for(var a=d.metaReducer.gf(e,"data.other.templateDataSource"),o=0;o<a.size;o++)a=a.update(o,function(e){return e.set("selectedTemplateId",n.get("docTemplateId"))});return e=d.initTemplate(e,a),d.metaReducer.sf(e,"data.other.selectedTemplate",n)}},a);e.exports=t["default"]}});