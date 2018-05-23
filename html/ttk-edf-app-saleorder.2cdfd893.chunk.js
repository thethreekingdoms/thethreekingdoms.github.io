webpackJsonp([15],{1114:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(0),u=(a=n)&&a.__esModule?a:{"default":a},o=r(25);t["default"]={actionCreator:function(e){return{gridAction:new o.GridDecorator.action((0,u["default"])({},e,{gridOption:{details:{path:"data.form.details",selectFieldName:"selected",cellClassName:"mk-app-delivery-order-cell",emptyRow:{},getColNames:function(e){return["stockCode","stockName","spec","unit","isGift","number","price","amount","taxRate","tax","priceTaxTotal"]},cellIsReadonly:function(e,t,r){return 1==e.x||2==e.x||3==e.x||7==e.x||9==e.x||10==e.x}}}}))}},reducerCreator:function(e){return{gridReducer:new o.GridDecorator.reducer((0,u["default"])({},e,{gridOption:{details:{path:"data.form.details",selectFieldName:"selected",cellClassName:"mk-app-delivery-order-cell",emptyRow:{},getColNames:function(e){return["stockCode","stockName","spec","unit","isGift","number","price","amount","taxRate","tax","priceTaxTotal"]},cellIsReadonly:function(e,t,r){return 1==e.x||2==e.x||3==e.x||7==e.x||9==e.x||10==e.x}}}}))}}},e.exports=t["default"]},934:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,n=m(r(0)),u=m(r(9)),o=m(r(7)),i=m(r(8)),s=m(r(10)),c=m(r(11)),d=r(2),f=(m(d),m(r(15)),r(35)),l=m(r(312));function m(e){return e&&e.__esModule?e:{"default":e}}var p=(0,f.wrapper)(l["default"])(a=function(e){function t(){return(0,o["default"])(this,t),(0,s["default"])(this,(t.__proto__||(0,u["default"])(t)).apply(this,arguments))}return(0,c["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,n["default"])({},this.props,{path:"root"}))}}]),t}(d.Component))||a;t["default"]=p,e.exports=t["default"]},935:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=h(r(0)),d=h(r(3)),o=h(r(36)),a=h(r(37)),n=h(r(7)),i=h(r(8));t["default"]=function(e){var t=new c.action(e),r=p["default"].actionCreator((0,u["default"])({},e,{metaAction:t})),a=new x((0,u["default"])({},e,{metaAction:t,extendAction:r})),n=(0,u["default"])({},t,r.gridAction,a);return t.config({metaHandlers:n}),n};var s=h(r(2)),c=(h(r(15)),r(35)),f=h(r(186)),l=r(14),m=(h(r(13)),h(r(1))),p=h(r(1114));function h(e){return e&&e.__esModule?e:{"default":e}}var x=function(){function t(e){var c=this;(0,n["default"])(this,t),this.onInit=function(e){var t=e.component,r=e.injections;c.extendAction.gridAction.onInit({component:t,injections:r}),c.component=t,(c.injections=r).reduce("init"),c.load()},this.load=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return{},e.next=3,c.webapi.deliveryOrder.init({id:c.component.props.deliveryOrderId});case 3:t=e.sent,c.injections.reduce("load",t);case 5:case"end":return e.stop()}},e,c)})),this.prev=(0,a["default"])(o["default"].mark(function e(){var t,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.metaAction.gf("data.form.id"),e.next=3,c.webapi.deliveryOrder.prev(t);case 3:(r=e.sent)&&c.injections.reduce("setForm",r);case 5:case"end":return e.stop()}},e,c)})),this.next=(0,a["default"])(o["default"].mark(function e(){var t,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.metaAction.gf("data.form.id"),e.next=3,c.webapi.deliveryOrder.next(t);case 3:(r=e.sent)?c.injections.reduce("setForm",r):c.metaAction.toast("warn","已经到最后一张单据！");case 5:case"end":return e.stop()}},e,c)})),this.add=function(){c.injections.reduce("setForm")},this.del=(0,a["default"])(o["default"].mark(function e(){var t,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.metaAction.gf("data.form.id"),e.next=3,c.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 3:if(!e.sent){e.next=10;break}return e.next=7,c.webapi.deliveryOrder.del({id:t});case 7:r=e.sent,c.metaAction.toast("success","删除单据成功"),c.injections.reduce("setForm",r);case 10:case"end":return e.stop()}},e,c)})),this.audit=(0,a["default"])(o["default"].mark(function e(){var t,r;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.metaAction.gf("data.form.id")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,c.webapi.deliveryOrder.audit({id:t});case 5:(r=e.sent)&&c.injections.reduce("setForm",r);case 7:case"end":return e.stop()}},e,c)})),this.moreMenuClick=function(e){switch(e.key){case"del":c.del();break;case"receipt":c.metaAction.toast("warn","此功能为实现！");case"history":c.metaAction.toast("warn","此功能为实现！")}},this.setting=function(){c.metaAction.toast("warn","此功能为实现！")},this.save=(0,a["default"])(o["default"].mark(function e(){var t,r,a,n;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.metaAction.gf("data.form").toJS(),!(0<(r=c.checkSave(t)).length)){e.next=5;break}return c.metaAction.toast("error",s["default"].createElement("div",{style:{textAlign:"left"}},r.map(function(e){return s["default"].createElement("div",null,e)}))),e.abrupt("return");case 5:if(!t.id&&0!=t.id){e.next=12;break}return e.next=8,c.webapi.deliveryOrder.update(t);case 8:(a=e.sent)&&(c.metaAction.toast("success","保存单据成功"),c.injections.reduce("setForm",a)),e.next=16;break;case 12:return e.next=14,c.webapi.deliveryOrder.create(t);case 14:(n=e.sent)&&(c.metaAction.toast("success","保存单据成功"),c.injections.reduce("setForm",n));case 16:case"end":return e.stop()}},e,c)})),this.customerFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.customer.query();case 2:t=e.sent,c.metaAction.sf("data.other.customers",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.warehouseFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.warehouse.query();case 2:t=e.sent,c.metaAction.sf("data.other.warehouses",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.ticketTypeFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.ticketType.query();case 2:t=e.sent,c.metaAction.sf("data.other.ticketTypes",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.stockFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.stock.query();case 2:t=e.sent,c.metaAction.sf("data.other.stocks",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.taxRateFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.taxRate.query();case 2:t=e.sent,c.metaAction.sf("data.other.taxRates",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.settlementModeFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.settlementMode.query();case 2:t=e.sent,c.metaAction.sf("data.other.settlementModes",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.accountFocus=(0,a["default"])(o["default"].mark(function e(){var t;return o["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.webapi.assetAccount.query();case 2:t=e.sent,c.metaAction.sf("data.other.assetAccounts",(0,l.fromJS)(t));case 4:case"end":return e.stop()}},e,c)})),this.numberFormat=function(e,t){return!0===(2<arguments.length&&void 0!==arguments[2]&&arguments[2])?e:m["default"].number.format(e,t)},this.numberChange=function(i,s){return function(e){var t,r=m["default"].number.round(e,2),a=m["default"].number.round(s.price,2),n=m["default"].number.round(a*r,2),u=m["default"].number.round(n*(s.tax?s.tax.id:0)/100,2),o=m["default"].number.round(n+u,2);c.metaAction.sfs((t={},(0,d["default"])(t,"data.form.details."+i+".number",r),(0,d["default"])(t,"data.form.details."+i+".amount",n),(0,d["default"])(t,"data.form.details."+i+".tax",u),(0,d["default"])(t,"data.form.details."+i+".priceTaxTotal",o),t))}},this.priceChange=function(i,s){return function(e){var t,r=m["default"].number.round(e,2),a=m["default"].number.round(s.number,2),n=m["default"].number.round(r*a,2),u=m["default"].number.round(n*(s.tax?s.tax.id:0)/100,2),o=m["default"].number.round(n+u,2);c.metaAction.sfs((t={},(0,d["default"])(t,"data.form.details."+i+".price",r),(0,d["default"])(t,"data.form.details."+i+".amount",n),(0,d["default"])(t,"data.form.details."+i+".tax",u),(0,d["default"])(t,"data.form.details."+i+".priceTaxTotal",o),t))}},this.taxRateChange=function(o,i,s){return function(t){var e,r=s.find(function(e){return e.id==t});if(r){var a=i.amount,n=m["default"].number.round(a*r.id/100,2),u=m["default"].number.round(a+n,2);c.metaAction.sfs((e={},(0,d["default"])(e,"data.form.details."+o+".taxRate",(0,l.fromJS)(r)),(0,d["default"])(e,"data.form.details."+o+".tax",(0,l.fromJS)(n)),(0,d["default"])(e,"data.form.details."+o+".priceTaxTotal",u),e))}}},this.sumAmount=function(e){return c.numberFormat(c.sum(e,function(e,t){return e+t.amount}),2)},this.sumTax=function(e){return c.numberFormat(c.sum(e,function(e,t){return e+t.tax}),2)},this.sumPriceTaxTotal=function(e){return c.numberFormat(c.sum(e,function(e,t){return e+t.priceTaxTotal}),2)},this.calcBalance=function(e){var t=c.sum(e.form.details,function(e,t){return e+t.priceTaxTotal}),r=c.sum(e.form.settlements,function(e,t){return e+t.settlementAmount}),a=e.form.useAdvance?m["default"].number.round(e.form.advanceAmount,2):0;return c.numberFormat(t-r-a,2)},this.mousedown=function(e){c.extendAction.gridAction.mousedown(e)},this.gridKeydown=function(e){c.extendAction.gridAction.gridKeydown(e),40==e.keyCode&&c.extendAction.gridAction.cellAutoFocus()},this.metaAction=e.metaAction,this.extendAction=e.extendAction,this.config=f["default"].current,this.webapi=this.config.webapi}return(0,i["default"])(t,[{key:"checkSave",value:function(e){var r=[];return e.customer&&e.customer.id||r.push("客户不能为空!"),e.date||r.push("单据日期不能为空!"),e.warehouse&&e.warehouse.id||r.push("仓库不能为空!"),e.ticketType&&e.ticketType.id||r.push("仓库不能为空!"),e.details&&0!=e.details.length||r.push("明细不能为空！"),e.details.forEach(function(e,t){e.stock||r.push("明细第"+(t+1)+"行，存货不能为空！")}),r}},{key:"sum",value:function(e,a){return e&&0!=e.length?e.reduce(function(e,t){var r=a(e,t);return isNaN(r)?e:r},0):this.numberFormat(0,2)}}]),t}();e.exports=t["default"]},936:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(0)),a=s(r(7));t["default"]=function(e){var t=new u.reducer(e),r=i["default"].reducerCreator((0,n["default"])({},e,{metaReducer:t})),a=new c((0,n["default"])({},e,{metaReducer:t,extendReducer:r}));return(0,n["default"])({},t,r.gridReducer,a)};var d=r(14),u=r(35),o=s(r(186)),f=r(313),i=(s(r(13)),s(r(1114)));function s(e){return e&&e.__esModule?e:{"default":e}}var c=function e(t){var c=this;(0,a["default"])(this,e),this.init=function(e,t){return c.metaReducer.init(e,(0,f.getInitState)())},this.load=function(e,t){var r=t.voucher,a=t.stocks,n=t.customers,u=t.ticketTypes,o=t.warehouses,i=t.settlementModes,s=t.assetAccounts;return e=r?c.metaReducer.sf(e,"data.form",(0,d.fromJS)(r)):c.metaReducer.sf(e,"data",(0,d.fromJS)((0,f.getInitState)().data)),e=c.metaReducer.sf(e,"data.other.stocks",(0,d.fromJS)(a)),e=c.metaReducer.sf(e,"data.other.customers",(0,d.fromJS)(n)),e=c.metaReducer.sf(e,"data.other.ticketTypes",(0,d.fromJS)(u)),e=c.metaReducer.sf(e,"data.other.warehouses",(0,d.fromJS)(o)),e=c.metaReducer.sf(e,"data.other.settlementModes",(0,d.fromJS)(i)),e=c.metaReducer.sf(e,"data.other.assetAccounts",(0,d.fromJS)(s))},this.setForm=function(e,t){return t?c.metaReducer.sf(e,"data.form",(0,d.fromJS)(t)):c.metaReducer.sf(e,"data.form",(0,d.fromJS)((0,f.getInitState)().data.form))},this.addRowBefore=function(e,t,r){return e},this.delRowBefore=function(e,t,r){return e},this.metaReducer=t.metaReducer,this.extendReducer=t.extendReducer,this.config=o["default"].current};e.exports=t["default"]}});