webpackJsonp([29],{1099:function(e,t,a){e.exports=a(5)(1246)},837:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,n=m(a(0)),o=m(a(10)),i=m(a(7)),s=m(a(9)),c=m(a(11)),u=m(a(12)),d=a(2),p=(m(d),a(34)),f=m(a(255));function m(e){return e&&e.__esModule?e:{"default":e}}var l=(0,p.wrapper)(f["default"])(r=function(e){function t(){return(0,i["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,u["default"])(t,e),(0,s["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||r;t["default"]=l,e.exports=t["default"]},838:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,o=l(a(0)),s=l(a(40)),c=l(a(41)),i=l(a(7));t["default"]=function(e){var t=new d.action(e),a=f.FormDecorator.actionCreator((0,o["default"])({},e,{metaAction:t})),r=new h((0,o["default"])({},e,{metaAction:t,voucherAction:a})),n=(0,o["default"])({},t,a,r);return t.config({metaHandlers:n}),n};var u=l(a(2)),d=a(34),p=l(a(157)),f=a(28),m=l(a(1099));function l(e){return e&&e.__esModule?e:{"default":e}}var h=(r=function e(t){(0,i["default"])(this,e),n.call(this),this.metaAction=t.metaAction,this.config=p["default"].current,this.voucherAction=t.voucherAction,this.webapi=this.config.webapi,this.fetchUser=(0,m["default"])(this.fetchUser,800),this.lastFetchId=0},n=function(){var t,i=this;this.onInit=function(e){var t=e.component,a=e.injections;i.voucherAction.onInit({component:t,injections:a}),i.component=t,i.injections=a,i.component.props.setOkListener&&i.component.props.setOkListener(i.onOk),a.reduce("init",{isPop:i.component.props.isPop}),i.load()},this.load=(0,c["default"])(s["default"].mark(function e(){var t,a,r,n;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},a={},r=void 0,!i.component.props.personId&&0!==i.component.props.personId){e.next=7;break}return e.next=4,i.webapi.inventory.query(i.component.props.personId);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,i.webapi.inventory.getCode();case 9:r=e.sent;case 10:return r&&(t.code=r),a&&(t.response=a),e.next=14,i.webapi.inventory.queryData();case 14:(n=e.sent)&&(t.queryData=n),i.injections.reduce("load",t),i.fetchUser(1010);case 18:case"end":return e.stop()}},e,i)})),this.fetchUser=(t=(0,c["default"])(s["default"].mark(function e(t){var a,r,n;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t||(t=1010),i.lastFetchId+=1,a=i.lastFetchId,i.injections.reduce("taxCodeLoad",{data:[],fetching:!0}),e.next=6,i.webapi.inventory.taxClassification({key:t});case 6:if(!(r=e.sent)){e.next=12;break}if(a===i.lastFetchId){e.next=10;break}return e.abrupt("return");case 10:n=r.map(function(e){return{text:e.key+"-"+e.label,value:e.label+","+e.key}}),i.injections.reduce("taxCodeLoad",{data:n,fetching:!1});case 12:case"end":return e.stop()}},e,i)})),function(e){return t.apply(this,arguments)}),this.taxOption=function(){var e=i.metaAction.gf("data.taxCode.data")&&i.metaAction.gf("data.taxCode.data").toJS();if(e)return e.map(function(e){return u["default"].createElement(Option,{title:e.text,key:e.value},e.text)})},this.taxNotFound=function(){return i.metaAction.gf("data.taxCode.fetching")?u["default"].createElement(f.Spin,{size:"small"}):null},this.tacChange=function(e){e&&i.injections.reduce("taxCodeLoad",{fetching:!1}),i.injections.reduce("taxCodeChange",e)},this.onOk=(0,c["default"])(s["default"].mark(function e(){return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,i)})),this.save=(0,c["default"])(s["default"].mark(function e(){var t,a,r,n,o;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.metaAction.gf("data.form").toJS(),a=i.metaAction.gf("data.isProperty"),r=[{path:"data.form.code",value:t.code},{path:"data.form.name",value:t.name},{path:"data.form.unit",value:t.unit},{path:"data.form.property",value:t.property},{path:"data.form.rate",value:t.rate}],a&&r.push({path:"data.form.propertyDetail",value:t.propertyDetail}),e.next=5,i.voucherAction.check(r,i.check);case 5:if(e.sent){e.next=9;break}return i.metaAction.toast("warning","请按页面提示信息修改信息后才可提交"),e.abrupt("return",!1);case 9:if(n=void 0,(o={}).taxClassificationId=t.taxClassificationId?t.taxClassificationId:"",o.taxClassificationName=t.taxClassificationName?t.taxClassificationName:"",o.code=t.code?t.code.trim():"",o.name=t.name?t.name.trim():"",o.specification=t.specification?t.specification.trim():"",o.unitId=t.unit?t.unit.id:"",o.unitName=t.unit.name?t.unit.name.trim():"",o.propertyId=t.property?t.property.id:"",o.propertyName=t.property?t.property.name:"",o.propertyDetail=t.propertyDetail?t.propertyDetail.id:"",o.rate=t.rate?t.rate.id:"",o.rateName=t.rate.name?t.rate.name:"",o.isEnable=t.isEnable||!1===t.isEnable?t.isEnable:"",o.ts=t.ts?t.ts:"",o.isReturnValue=!0,!i.component.props.personId&&0!==i.component.props.personId){e.next=32;break}return o.id=i.component.props.personId,e.next=29,i.webapi.inventory.update(o);case 29:n=e.sent,e.next=35;break;case 32:return e.next=34,i.webapi.inventory.create(o);case 34:n=e.sent;case 35:if(!n||!n.error){e.next=40;break}return i.metaAction.toast("error",n.error.message),e.abrupt("return",!1);case 40:return i.metaAction.toast("success","保存成功"),e.abrupt("return",n);case 42:case"end":return e.stop()}},e,i)})),this.changeCheck=function(e){var t=i.metaAction.gf("data.form").toJS();1==e?i.voucherAction.check([{path:"data.form.code",value:t.code}],i.check):i.voucherAction.check([{path:"data.form.name",value:t.name}],i.check)},this.check=function(e){if(e&&e.path)return"data.form.code"==e.path?{errorPath:"data.other.error.code",message:e.value&&e.value.trim()?"":"请录入编码"}:"data.form.name"==e.path?{errorPath:"data.other.error.name",message:e.value&&e.value.trim()?"":"请录入名称"}:"data.form.unit"==e.path?{errorPath:"data.other.error.unit",message:e.value?"":"请选择计量单位"}:"data.form.property"==e.path?{errorPath:"data.other.error.property",message:e.value?"":"请选择存货及服务分类"}:"data.form.rate"==e.path?{errorPath:"data.other.error.rate",message:e.value?"":"请选择税率"}:"data.form.propertyDetail"==e.path?{errorPath:"data.other.error.propertyDetail",message:e.value?"":"请选择明细分类"}:void 0},this.fieldChange=function(e,t){i.voucherAction.fieldChange(e,t,i.check)},this.addUnit=(0,c["default"])(s["default"].mark(function e(){var t,a;return s["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.metaAction.modal("show",{title:"新增计量单位",width:350,height:280,children:i.metaAction.loadApp("ttk-edf-app-card-unit",{store:i.component.props.store})});case 2:if(!(t=e.sent)){e.next=8;break}return e.next=6,i.webapi.unit.query();case 6:(a=e.sent)&&i.injections.reduce("unit",a.list,t);case 8:case"end":return e.stop()}},e,i)})),this.propertyChange=function(t){t=JSON.parse(t);var e=i.metaAction.gf("data.other.propertyDetail").toJS().filter(function(e){return t.id==e.propertyId});i.injections.reduce("propertyChange",t,e);var a=[{path:"data.form.property",value:i.metaAction.gf("data.form").toJS().property}];i.voucherAction.check(a,i.check)},this.propertyDetailChange=function(t){t=JSON.parse(t);var e=i.metaAction.gf("data.other.propertyDetail").toJS().filter(function(e){return t.id==e.propertyId});i.injections.reduce("propertyChange",t,e);var a=[{path:"data.form.propertyDetail",value:i.metaAction.gf("data.form").toJS().propertyDetail}];i.voucherAction.check(a,i.check)}},r);e.exports=t["default"]},839:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n,o=m(a(0)),i=m(a(19)),s=m(a(7));t["default"]=function(e){var t=new u.reducer(e),a=new l((0,o["default"])({},e,{metaReducer:t}));return(0,o["default"])({},t,a)};var c=a(14),u=a(34),d=m(a(157)),p=a(256),f=a(63);function m(e){return e&&e.__esModule?e:{"default":e}}var l=(r=function e(t){(0,s["default"])(this,e),n.call(this),this.metaReducer=t.metaReducer,this.config=d["default"].current},n=function(){var s=this;this.init=function(e,t){var a=(0,p.getInitState)();return s.metaReducer.init(e,a)},this.load=function(e,t){if(t.response){if(t.response.propertyId&&(t.queryData.dataList.filter(function(e){e.id==t.response.propertyId&&(t.response.property=e)}),t.queryData&&t.queryData.detailList)){var a=t.queryData.detailList.filter(function(e){return t.response.propertyId==e.propertyId});e=s.metaReducer.sf(e,"data.other.propertyDetailFilter",(0,c.fromJS)(a))}t.response.propertyDetail&&(t.queryData.detailList.filter(function(e){e.id==t.response.propertyDetail&&(t.response.propertyDetail=e)}),e=s.metaReducer.sf(e,"data.isProperty",(0,c.fromJS)(!0))),t.response.unitId&&(t.response.unit={id:t.response.unitId,name:t.response.unitName}),t.response.rate&&(t.response.rate={id:t.response.rate,name:t.response.rateName}),0==(0,i["default"])(t.response).length&&(t.response.isEnable=!0),e=s.metaReducer.sf(e,"data.form",(0,c.fromJS)(t.response))}return t.code&&(e=s.metaReducer.sf(e,"data.form.code",(0,c.fromJS)(t.code))),t.queryData&&(t.queryData.dataList&&(e=s.metaReducer.sf(e,"data.other.property",(0,c.fromJS)(t.queryData.dataList))),t.queryData.detailList&&(e=s.metaReducer.sf(e,"data.other.propertyDetail",(0,c.fromJS)(t.queryData.detailList))),t.queryData.rateList&&(e=s.metaReducer.sf(e,"data.other.rate",(0,c.fromJS)(t.queryData.rateList))),t.queryData.unitList&&(e=s.metaReducer.sf(e,"data.other.unit",(0,c.fromJS)(t.queryData.unitList)))),t.taxCode&&(e=s.metaReducer.sf(e,"data.taxCode",(0,c.fromJS)(t.taxCode))),e},this.unit=function(e,t,a){return e=s.metaReducer.sf(e,"data.other.unit",(0,c.fromJS)(t)),e=s.metaReducer.sf(e,"data.form.unit",(0,c.fromJS)(a))},this.propertyChange=function(t,e,a){var r=f.consts.VATTAXPAYER_generalTaxPayer,n=f.consts.VATTAXPAYER_smallScaleTaxPayer,o=s.metaReducer.gf(t,"data.other.rate"),i=void 0;if(e.vatTaxpayer)if("服务"==e.name||"无形资产"==e.name){t=s.metaReducer.sf(t,"data.other.propertyDetailFilter",(0,c.fromJS)(a)),t=s.metaReducer.sf(t,"data.isProperty",(0,c.fromJS)(!0))}else t=s.metaReducer.sf(t,"data.isProperty",(0,c.fromJS)(!1));return s.metaReducer.context.get("currentOrg").vatTaxpayer==r?i="服务"==e.name||"固定资产-不动产"==e.name||"交通运输服务"==e.name||"邮政服务"==e.name||"基础电信服务"==e.name||"建筑服务"==e.name||"不动产租赁服务"==e.name||"土地使用权"==e.name?"11%":"无形资产"==e.name||"增值电信服务"==e.name||"信息技术服务"==e.name||"金融服务"==e.name||"生活服务"==e.name||"其他服务"==e.name||"专利权"==e.name||"商标权"==e.name||"著作权"==e.name||"非专利技术"==e.name||"特许权使用费"==e.name||"其他"==e.name?"6%":"17%":s.metaReducer.context.get("currentOrg").vatTaxpayer==n&&(i="固定资产-不动产"==e.name||"土地使用权"==e.name||"不动产租赁服务"==e.name?"5%":"3%"),o&&o.toJS().map(function(e){e.name==i&&(t=s.metaReducer.sf(t,"data.form.rate",(0,c.fromJS)(e)))}),e.vatTaxpayer?(t=s.metaReducer.sf(t,"data.form.property",(0,c.fromJS)(e)),t=s.metaReducer.sf(t,"data.form.propertyDetail","")):t=s.metaReducer.sf(t,"data.form.propertyDetail",(0,c.fromJS)(e)),t},this.taxCodeLoad=function(e,t){return t.data&&(e=s.metaReducer.sf(e,"data.taxCode.data",(0,c.fromJS)(t.data))),e=s.metaReducer.sf(e,"data.taxCode.fetching",(0,c.fromJS)(t.fetching))},this.taxCodeChange=function(e,t){if(t){var a=t.split(",");e=s.metaReducer.sf(e,"data.form.taxClassificationId",(0,c.fromJS)(a[1])),e=s.metaReducer.sf(e,"data.form.taxClassificationName",(0,c.fromJS)(a[0]))}else e=s.metaReducer.sf(e,"data.form.taxClassificationId",(0,c.fromJS)("")),e=s.metaReducer.sf(e,"data.form.taxClassificationName",(0,c.fromJS)(""));return e}},r);e.exports=t["default"]}});