webpackJsonp([2],{1043:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=[{title:o["default"].createElement("span",{title:"科目编码"},"科目编码"),name:"accountCode",dataIndex:"accountCode",key:"accountCode"},{title:o["default"].createElement("span",{title:"科目名称"},"科目名称"),name:"accountName",dataIndex:"accountName",key:"accountName"}],a=[{title:o["default"].createElement("span",{title:"期初余额"},"期初余额"),children:[{title:o["default"].createElement("span",{title:"借方"},"借方"),name:"periodBeginAmountDr",dataIndex:"periodBeginAmountDr",className:"amountColumnStyle",render:e,key:"periodBeginAmountDr"},{title:o["default"].createElement("span",{title:"贷方"},"贷方"),name:"periodBeginAmountCr",dataIndex:"periodBeginAmountCr",className:"amountColumnStyle",render:e,key:"periodBeginAmountCr"}]},{title:o["default"].createElement("span",{title:"本期发生额"},"本期发生额"),children:[{title:o["default"].createElement("span",{title:"借方"},"借方"),name:"amountDr",dataIndex:"amountDr",className:"amountColumnStyle",render:e,key:"amountDr"},{title:o["default"].createElement("span",{title:"贷方"},"贷方"),name:"amountCr",dataIndex:"amountCr",className:"amountColumnStyle",render:e,key:"amountCr"}]},{title:o["default"].createElement("span",{title:"本年累计发生额"},"本年累计发生额"),name:"balance",children:[{title:o["default"].createElement("span",{title:"借方"},"借方"),name:"yearAmountDr",dataIndex:"yearAmountDr",className:"amountColumnStyle",render:e,key:"yearAmountDr"},{title:o["default"].createElement("span",{title:"贷方"},"贷方"),name:"yearAmountCr",dataIndex:"yearAmountCr",className:"amountColumnStyle",render:e,key:"yearAmountCr"}]},{title:o["default"].createElement("span",{title:"期末余额"},"期末余额"),name:"balance",children:[{title:o["default"].createElement("span",{title:"借方"},"借方"),name:"periodEndAmountDr",dataIndex:"periodEndAmountDr",render:e,className:"amountColumnStyle",key:"periodEndAmountDr"},{title:o["default"].createElement("span",{title:"贷方"},"贷方"),name:"periodEndAmountCr",dataIndex:"periodEndAmountCr",className:"amountColumnStyle",render:e,key:"periodEndAmountCr"}]}];return[t,a]};var n,r=a(2),o=(n=r)&&n.__esModule?n:{"default":n};e.exports=t["default"]},937:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=p(a(0)),o=p(a(10)),i=p(a(7)),c=p(a(9)),u=p(a(11)),l=p(a(12)),s=a(2),d=(p(s),a(34)),f=p(a(351));function p(e){return e&&e.__esModule?e:{"default":e}}var h=(0,d.wrapper)(f["default"])(n=function(e){function t(){return(0,i["default"])(this,t),(0,u["default"])(this,(t.__proto__||(0,o["default"])(t)).apply(this,arguments))}return(0,l["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(s.Component))||n;t["default"]=h,e.exports=t["default"]},938:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,d=g(a(976)),y=g(a(88)),f=g(a(16)),u=g(a(24)),S=g(a(37)),p=g(a(50)),h=g(a(0)),i=g(a(51)),o=g(a(7));t["default"]=function(e){var t=new c.action(e),a=s.FormDecorator.actionCreator((0,h["default"])({},e,{metaAction:t})),n=new x((0,h["default"])({},e,{metaAction:t,voucherAction:a})),r=(0,h["default"])({},t,a,n);return t.config({metaHandlers:r}),r};var A=g(a(2)),c=a(34),l=g(a(208)),m=a(14),s=a(35),v=g(a(13)),w=(a(87),g(a(1043))),b=a(997);function g(e){return e&&e.__esModule?e:{"default":e}}s.Select.Option;var x=(n=function e(t){(0,o["default"])(this,e),r.call(this),this.metaAction=t.metaAction,this.config=l["default"].current,this.webapi=this.config.webapi,this.voucherAction=t.voucherAction,this.selectedOption=[]},r=function(){var e,a,n,t,r,o,g=this;this.onInit=function(e){var t=e.component,a=e.injections;g.component=t,(g.injections=a).reduce("init");var n=g.component.props.addEventListener;n&&n("onTabFocus",g.onTabFocus.bind(g)),g.load()},this.onTabFocus=function(){g.load("tab")},this.getInitOption=(e=(0,i["default"])(p["default"].mark(function e(){var t,a,n,r,o,i,c,u,l,s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"load";return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.webapi.auxBalanceSumRpt.queryAccountList({isCalc:!0});case 2:return t=e.sent,e.next=5,g.webapi.auxBalanceSumRpt.queryAccountDepth();case 5:return a=e.sent,e.next=8,g.webapi.auxBalanceSumRpt.queryBaseArchives({isContentEmpty:!0});case 8:return n=e.sent,r=(0,b.sortBaseArchives)(n),e.next=12,g.getMaxDocPeriod();case 12:o=e.sent,i=g.metaAction.context.get("currentOrg"),c=i.enabledYear+"-"+(""+i.enabledMonth).padStart(2,"0"),u={accountList:t,accountDepthList:a,enabledPeriod:c},l=g.metaAction.gf("data.other.changeSipmleDate"),"tab"==s?(l||(u[3]={maxDocPeriod:o}),g.updateBaseArchives(r)):u={accountList:t,accountDepthList:a,enabledPeriod:c,maxDocPeriod:o,auxGroupList:r},g.injections.reduce("initOption",(0,h["default"])({},u));case 19:case"end":return e.stop()}},e,g)})),function(){return e.apply(this,arguments)}),this.load=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"load";g.getInitOption(e).then(function(){var e=g.metaAction.gf("data.searchValue").toJS(),t=g.metaAction.gf("data.assistForm").toJS(),a=(t.assistFormOption,t.assistFormSelectValue),n=e.whereStr||a.join(","),r=e.groupStr||a.join(","),o="";n!=r&&(o=n),g.searchValueChange((0,h["default"])({},e,{groupStr:r,whereStr:o})),setTimeout(function(){g.onResize()},20)})},this.updateBaseArchives=function(e){var t=g.metaAction.gf("data.assistForm").toJS(),r=t.assistFormOption,a=(t.initOption,t.assistFormSelectValue),o=[];e.forEach(function(a){var e=r.find(function(e){return e.key==a.key});if(e){var t=e.value;if(t){var n=t.filter(function(t){return!!a.children.find(function(e){return e.value==t})});a.value=n}}o.push(a)});var n=[];a.forEach(function(t){e.find(function(e){return e.key==t})&&n.push(t)}),g.injections.reduce("updateBathState",[{path:"data.assistForm.initOption",value:e},{path:"data.assistForm.assistFormOption",value:o},{path:"data.assistForm.assistFormSelectValue",value:a}])},this.renderCheckBox=function(){return A["default"].createElement(s.Checkbox.Group,{className:"app-proof-of-list-accountQuery-search-checkbox"},A["default"].createElement(s.Checkbox,{value:"1"},"显示余额为0，发生额不为0的记录"))},this.renderAuxSearchItem=function(){var e=g.metaAction.gf("data.assistForm").toJS(),t=e.assistFormOption,a=e.assistFormSelectValue,n=g.metaAction.gf("data.other").toJS(),r=n.accountList,o=n.startAccountDepthList,i=n.endAccountDepthList,c=void 0;switch(g.metaAction.gf("data.showOption.searchType")){case 0:c=[{name:"date",range:!0,label:"会计期间",centerContent:"到",isTime:!0,pre:{type:"DatePicker.MonthPicker",mode:["month","month"],format:"YYYY-MM",allowClear:!1,decoratorDate:function(e,t){return g.disabledDate(e,t,"pre")}},next:{type:"DatePicker.MonthPicker",mode:["month","month"],format:"YYYY-MM",allowClear:!1,decoratorDate:function(e,t){return g.disabledDate(e,t,"next")}}},{name:"assitform",type:"AssistForm",assistFormOption:t,assistFormSelectValue:a},{name:"accountCodeList",label:"会计科目",type:"Select",mode:"multiple",allowClear:!0,childType:"Option",showSearch:"{{true}}",optionFilterProp:"children",filterOption:function(e,t){return g.filterAccountOption(e,t)},option:r},{name:"accountDepth",range:!0,label:"科目级次",centerContent:"~",pre:{name:"beginAccountGrade",type:"Select",childType:"Option",option:o,allowClear:!1},next:{name:"endAccountGrade",type:"Select",childType:"Option",option:i,allowClear:!1}},{name:"showZero",label:"",type:"Checkbox.Group",render:g.renderCheckBox,allowClear:!1}];break;case 1:c=[{name:"date",range:!0,label:"会计期间",centerContent:"到",isTime:!0,pre:{type:"DatePicker.MonthPicker",mode:["month","month"],format:"YYYY-MM",allowClear:!1,decoratorDate:function(e,t){return g.disabledDate(e,t,"pre")}},next:{type:"DatePicker.MonthPicker",mode:["month","month"],format:"YYYY-MM",allowClear:!1,decoratorDate:function(e,t){return g.disabledDate(e,t,"next")}}},{name:"accountCodeList",label:"会计科目",type:"Select",mode:"multiple",allowClear:!0,childType:"Option",filterOption:function(e,t){return g.filterAccountOption(e,t)},option:r},{name:"accountDepth",range:!0,label:"科目级次",centerContent:"~",pre:{name:"beginAccountGrade",type:"Select",childType:"Option",option:o,allowClear:!1},next:{name:"endAccountGrade",type:"Select",childType:"Option",option:i,allowClear:!1}},{name:"assitform",type:"AssistForm",assistFormOption:t,assistFormSelectValue:a},{name:"showZero",label:"",type:"Checkbox.Group",render:g.renderCheckBox,allowClear:!1}]}return[].concat((0,S["default"])(c))},this.filterAccountOption=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"value",n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"label",r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"data.other.accountList";if(t&&t.props&&t.props.value){var o=g.metaAction.gf(r).find(function(e){return e.get(a)==t.props.value}),i="";if(o.get(n)&&o.get(a)&&(i=o.get(n).replace(o.get(a),"")),o.get(a)&&0==o.get(a).indexOf(e)||-1!=i.indexOf(e)){var c=document.getElementsByClassName("ant-select-dropdown-menu");return 0<c.length&&0<c[0].scrollTop&&(c[0].scrollTop=0),!0}return!1}return!0},this.filterSingleAccountOption=function(e,t){return g.filterAccountOption(e,t,"code","name","data.other.sigleAccountList")},this.sigleAccountIsShow=function(){return{display:g.metaAction.gf("data.other.accountSimpleStyle")?"inline-block":"none"}},this.renderActiveSearch=function(){var e=g.metaAction.gf("data.assistForm").toJS(),t=e.assistFormSelectValue,a=e.assistFormOption,n=a.find(function(e){return t.includes(e.key)});return A["default"].createElement(s.ActiveLabelSelect,{option:a,selectLabel:n&&n.key?n.key:"",value:"",onChange:g.activeLabelSelectChange})},this.getMaxDocPeriod=(0,i["default"])(p["default"].mark(function e(){var t,a;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.webapi.auxBalanceSumRpt.getDocVoucherDate();case 2:return t=e.sent,a=t.year+"-"+(""+t.period).padStart(2,"0"),e.abrupt("return",a);case 5:case"end":return e.stop()}},e,g)})),this.disabledDate=function(e,t,a){var n=g.metaAction.gf("data.other.enabledDate");if("pre"==a){var r=g.transformDateToNum(e),o=g.transformDateToNum(t),i=g.transformDateToNum(n);return o<r||r<i}var c=g.transformDateToNum(e),u=g.transformDateToNum(t),l=g.transformDateToNum(n);return c<u||c<l},this.transformDateToNum=function(e){var t=e;return"string"==typeof e&&(t=(0,v["default"])(new Date(e))),parseInt(t.year()+(t.month()<10?"0"+t.month():""+t.month()))},this.activeLabelSelectChange=function(t,e){var a=g.metaAction.gf("data.assistForm").toJS().initOption,n=JSON.parse((0,u["default"])(a)),r=[];r.push(t);var o=a.findIndex(function(e){return e.key==t});-1!=o&&(a[o].value=e?[e]:[]),g.injections.reduce("update",{path:"data.assistForm",value:{initOption:n,assistFormOption:a,assistFormSelectValue:r}});var i=g.metaAction.gf("data.searchValue").toJS(),c=g.metaAction.gf("data.showOption").toJS();i.groupStr=t,i.whereStr=e?t+":"+e:"",g.injections.reduce("updateBathState",[{path:"data.other.accountSimpleStyle",value:0!=c.searchType}]),g.searchValueChange(i)},this.componentWillUnmount=function(){g.component.props.removeEventListener;window.removeEventListener?window.removeEventListener("resize",g.onResize,!1):window.detachEvent?window.detachEvent("onresize",g.onResize):window.onresize=void 0},this.componentDidMount=function(){window.addEventListener?window.addEventListener("resize",g.onResize,!1):window.attachEvent?window.attachEvent("onresize",g.onResize):window.onresize=g.onResize},this.componentWillReceiveProps=function(e){var t=e.keydown;if(t&&t.event){var a=t.event;39==a.keyCode||40==a.keyCode?g.accountlistBtn("right"):37!=a.keyCode&&38!=a.keyCode||g.accountlistBtn("left")}},this.searchValueChange=(a=(0,i["default"])(p["default"].mark(function e(t,a){var n,r,o,i,c;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=g.metaAction.gf("data.other").toJS(),r=n.accountList,o=n.startAccountDepthList,i=n.endAccountDepthList,n.sigleAccountList,(c=[]).push({path:"data.searchValue",value:(0,h["default"])({},t)}),a&&a.selectValue&&c.push({path:"data.assistForm.assistFormSelectValue",value:a.selectValue},{path:"data.assistForm.assistFormOption",value:a.option}),c.push({path:"data.other.accountList",value:r},{path:"data.other.startAccountDepthList",value:o},{path:"data.other.endAccountDepthList",value:i}),t.accountCodeList&&1==t.accountCodeList.length?g.injections.reduce("update",{path:"data.other.sigleAccountCode",value:t.accountCodeList[0]}):g.injections.reduce("update",{path:"data.other.sigleAccountCode",value:"0000"}),g.injections.reduce("updateBathState",c),g.sortParmas((0,h["default"])({},t)),g.getAuxAccountList(t);case 9:case"end":return e.stop()}},e,g)})),function(e,t){return a.apply(this,arguments)}),this.accountlistBtn=function(e){var t=g.metaAction.gf("data.other.sigleAccountList").toJS(),a=g.metaAction.gf("data.other.sigleAccountCode"),n=t.findIndex(function(e){return e.code==a}),r=void 0;switch(e){case"right":r=t[n+1]&&t[n+1].code?t[n+1].code:a;break;case"left":r=t[n-1]&&t[n-1].code?t[n-1].code:a;break;default:r=a}g.accountlistChange(r)},this.onPanelChange=function(e){var t={date_end:e[1],date_start:e[0]};g.metaAction.sf("data.other.changeSipmleDate",!0);var a=g.metaAction.gf("data.searchValue").toJS();g.injections.reduce("searchUpdate",(0,h["default"])({},a,t)),g.sortParmas((0,h["default"])({},a,t))},this.accountlistChange=function(t){g.metaAction.gf("data.other.sigleAccountList").toJS().find(function(e){return e.code==t});g.injections.reduce("update",{path:"data.other.sigleAccountCode",value:t}),g.injections.reduce("update",{path:"data.searchValue.accountCodeList",value:"0000"==t?[]:[t]}),g.sortParmas()},this.searchTypeRptChange=function(e,t){var a=void 0,n=void 0,r=!0,o=!1,i=void 0;try{for(var c,u=(0,f["default"])([{lable:"辅助科目余额表",value:0},{lable:"科目辅助余额表",value:1}]);!(r=(c=u.next()).done);r=!0){var l=c.value;l.lable!=t?a=l:n=l.value}}catch(e){o=!0,i=e}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw i}}g.injections.reduce("showOptionsChange",{path:"data.showOption.searchType",value:n}),g.injections.reduce("showOptionsChange",{path:"data.showOption."+e,value:a.lable}),g.injections.reduce("updateBathState",[{path:"data.other.accountSimpleStyle",value:"0"!=n}]);var s=g.metaAction.gf("data.searchValue").toJS();g.getAuxAccountList(s),g.sortParmas()},this.sortParmas=(n=(0,i["default"])(p["default"].mark(function e(t,a){var n,r,o,i;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t||(t=g.metaAction.gf("data.searchValue").toJS()),n={date_start:{beginYear:function(e){return e?e.format("YYYY"):null},beginPeriod:function(e){return e?e.format("MM"):null}},date_end:{endYear:function(e){return e?e.format("YYYY"):null},endPeriod:function(e){return e?e.format("MM"):null}}},(r=(0,b.sortSearchOption)(t,n)).auxInfo=g.getAux(t),r.showZero=r.showZero&&0<r.showZero.length?"true":"false",o=g.metaAction.gf("data.showOption.searchType"),r.printType="0"==o?4:o,i=g.metaAction.gf("data.other.sigleAccountCode"),"1"==o&&"0000"!=i&&(r.sigleAccountCode=i,r.accountCodeList=[]),r.searchType=o,r.isIncludeAllTotal=g.metaAction.gf("data.showOption.isIncludeAllTotal"),r.includeSum=g.metaAction.gf("data.showOption.includeSum"),"get"!=a){e.next=14;break}return e.abrupt("return",(0,h["default"])({},r));case 14:g.requestData((0,h["default"])({},r)).then(function(e){var t=g.metaAction.gf("data.showOption.searchType"),a=g.metaAction.gf("data.other.sigleAccountCode");if(1==t&&"0000"!=a&&e&&e.details){if(e.auxType&&2<e.auxType.length){var n=e.details.findIndex(function(e){return"小计"==e.accountName});-1!=n&&e.details.splice(n,1)}g.injections.reduce("load",e.details)}else g.injections.reduce("load",e&&e.details?e.details:[]);g.injections.reduce("update",{path:"data.style",value:g.getRowStyle(e&&e.style?e.style:"")}),setTimeout(function(){g.onResize()},20)});case 15:case"end":return e.stop()}},e,g)})),function(e,t){return n.apply(this,arguments)}),this.getAux=function(e){var a=[],t=e.groupStr&&e.groupStr.split(","),n=e.whereStr&&e.whereStr.split(";");return t&&t.forEach(function(t){if(n){var e=n.find(function(e){return-1<e.indexOf(t)});e?a.push(""+e):a.push(t+":")}else a.push(t+":")}),a},this.requestData=(t=(0,i["default"])(p["default"].mark(function e(t){var a;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.metaAction.gf("data.loading")||g.injections.reduce("tableLoading",!0),delete t.groupStr,delete t.whereStr,e.next=6,g.webapi.auxBalanceSumRpt.queryRptList(t);case 6:return a=e.sent,g.injections.reduce("tableLoading",!1),e.abrupt("return",a);case 9:case"end":return e.stop()}},e,g)})),function(e){return t.apply(this,arguments)}),this.getAuxAccountList=(r=(0,i["default"])(p["default"].mark(function e(t){var a,n,r;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=g.metaAction.gf("data.showOption.searchType")){e.next=8;break}return a=[],e.next=5,g.webapi.auxBalanceSumRpt.queryAccountList({isCalc:!0});case 5:n=e.sent,r=[{code:"0000",codeAndName:"所有科目"}],n&&n.glAccounts?(a=[].concat(r,(0,S["default"])(n.glAccounts)),g.injections.reduce("updateBathState",[{path:"data.other.sigleAccountList",value:a}]),g.injections.reduce("update",{path:"data.other.accountList",value:(0,m.fromJS)((0,b.changeToOption)(n.glAccounts,"codeAndName","code"))})):(g.injections.reduce("updateBathState",[{path:"data.other.sigleAccountList",value:r}]),g.injections.reduce("update",[{path:"data.searchValue.accountCodeList",value:[]}]));case 8:case"end":return e.stop()}},e,g)})),function(e){return r.apply(this,arguments)}),this.refreshBtnClick=function(){var e=g.metaAction.gf("data.searchValue").toJS();g.getAuxAccountList(e),g.sortParmas()},this.getNormalDateValue=function(){var e=g.metaAction.gf("data.searchValue").toJS(),t=[];return t.push(e.date_start),t.push(e.date_end),t},this.normalSearchChange=function(e,t){if("date"==e){var a={date_end:t[1],date_start:t[0]};g.metaAction.sf("data.other.changeSipmleDate",!0);var n=g.metaAction.gf("data.searchValue").toJS();g.injections.reduce("searchUpdate",(0,h["default"])({},n,a)),g.getAuxAccountList(n)}},this.getNormalSearchValue=function(){var e=g.metaAction.gf("data.searchValue").toJS();return{date:[e.date_start,e.date_end],query:e.query}},this.shareClick=function(e){switch(e.key){case"weixinShare":g.weixinShare();break;case"mailShare":g.mailShare()}},this.weixinShare=(0,i["default"])(p["default"].mark(function e(){return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=g.metaAction.gf("data.list").toJS().length){e.next=3;break}return g.metaAction.toast("warning","当前暂无数据可分享！"),e.abrupt("return");case 3:"https://thethreekingdoms.github.io/",g.metaAction.modal("show",{title:"微信/QQ分享",width:300,footer:null,children:g.metaAction.loadApp("ttk-edf-app-weixinshare",{store:g.component.props.store,initData:"/v1/gl/report/balanceauxrpt/share",params:"https://thethreekingdoms.github.io/"})});case 5:case"end":return e.stop()}},e,g)})),this.mailShare=(0,i["default"])(p["default"].mark(function e(){var t;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=g.metaAction.gf("data.list").toJS().length){e.next=3;break}return g.metaAction.toast("warning","当前暂无数据可分享！"),e.abrupt("return");case 3:return t={beginYear:2018,beginPeriod:3,endYear:2018,endPeriod:3},e.next=6,g.metaAction.modal("show",{title:"邮件分享",width:400,children:g.metaAction.loadApp("ttk-edf-app-mailshare",{store:g.component.props.store,params:t,shareUrl:"/v1/gl/report/balanceauxrpt/share",mailShareUrl:"/v1/gl/report/balanceauxrpt/sendShareMail",printShareUrl:"/v1/gl/report/balanceauxrpt/print",period:t.beginYear+"."+t.beginPeriod+"-"+t.endYear+"."+t.endPeriod})});case 6:e.sent&&g.metaAction.toast("warning","功能暂未实现！");case 8:case"end":return e.stop()}},e,g)})),this["export"]=(0,i["default"])(p["default"].mark(function e(){return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=g.metaAction.gf("data.list").toJS().length){e.next=3;break}return g.metaAction.toast("warning","当前暂无数据可导出！"),e.abrupt("return");case 3:g.metaAction.toast("warning","功能暂未实现！");case 4:case"end":return e.stop()}},e,g)})),this.print=(0,i["default"])(p["default"].mark(function e(){var t;return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=g.metaAction.gf("data.list").toJS().length){e.next=3;break}return g.metaAction.toast("warning","当前暂无数据可打印！"),e.abrupt("return");case 3:(t=g).metaAction.modal("show",{title:"打印",width:400,footer:null,iconType:null,okText:"打印",className:"mk-app-proof-of-list-modal-container",children:A["default"].createElement(s.PrintOption,{callBack:t.submitPrintOption})});case 5:case"end":return e.stop()}},e,g)})),this.submitPrintOption=(o=(0,i["default"])(p["default"].mark(function e(t,a){return p["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g.metaAction.toast("warning","功能暂未实现！");case 1:case"end":return e.stop()}},e,g)})),function(e,t){return o.apply(this,arguments)}),this.showOptionsChange=function(e,t){g.injections.reduce("showOptionsChange",{path:"data.showOption."+e,value:t}),g.sortParmas()},this.getRowStyle=function(e){var o={};return e.split(";").forEach(function(e){if(e){var t=e.replace(/\]\[/g,"];[").split(":"),a=(0,y["default"])(t,2),n=a[0],r=a[1];o[n]||(o[n]={}),r.split(";").forEach(function(e){var t=JSON.parse(e);o[n][t[0]]=t[1]-t[0]+1})}}),o},this.checkRowSpan=function(e,t){var a=1;if(!t)return a;var n=!0,r=!1,o=void 0;try{for(var i,c=(0,f["default"])((0,d["default"])(t));!(n=(i=c.next()).done);n=!0){var u=(0,y["default"])(i.value,2),l=u[0],s=u[1];e>parseInt(l)&&e<=l+s&&(a=0)}}catch(e){r=!0,o=e}finally{try{!n&&c["return"]&&c["return"]()}finally{if(r)throw o}}return a},this.renderRowSpan=function(e,t,a,n){var r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,o=5<arguments.length&&void 0!==arguments[5]&&arguments[5],i=1;if(g.metaAction.gf("data.style")){var c=g.metaAction.gf("data.style").toJS();c[n]&&c[n][a]?i=c[n][a]:c[n]&&(i=g.checkRowSpan(a,c[n]))}var u={children:A["default"].createElement("span",{title:e},e),props:{rowSpan:i,colSpan:1}};return t&&"合计"==t.accountName&&(u.children=A["default"].createElement("span",{title:t.accountName},t.accountName),u.props.colSpan=r),t&&"小计"==t.accountName&&(u.children=A["default"].createElement("span",{title:t.accountName},t.accountName),u.props.colSpan=r),o&&t&&"小计"==t.accountName&&(u.children=A["default"].createElement("span",{title:t.accountName},t.accountName)),u},this.renderColSpan=function(e,t,a,n,r){var o={children:A["default"].createElement("span",{title:e},e),props:{colSpan:1}};return t&&"合计"==t.accountName&&(o.children=A["default"].createElement("span",{title:t.accountName},t.accountName),o.props.colSpan=n),t&&"小计"==t.accountName&&(o.children=A["default"].createElement("span",{title:t.accountName},t.accountName),o.props.colSpan=n),r&&t&&"小计"==t.accountName&&(o.children=A["default"].createElement("span",{title:t.accountName},t.accountName)),o},this.rowShowTitle=function(e,t,a){return{children:A["default"].createElement("span",{title:e},e)}},this.tableColumns=function(){var e=(0,w["default"])(g.rowShowTitle),t=(0,y["default"])(e,2),a=t[0],n=t[1],r=[],o=g.metaAction.gf("data.showOption.searchType"),i=g.metaAction.gf("data.showOption.includeSum"),c=g.metaAction.gf("data.other.sigleAccountCode"),u=g.metaAction.gf("data.assistForm").toJS(),l=u.assistFormOption,s=u.assistFormSelectValue;if(l.forEach(function(e){if(s.includes(e.key))if(e.key.includes("isExCalc")){var t=e.key?"e"+e.key.slice(3)+"Name":e.key;r.push({title:A["default"].createElement("span",{title:e.name},e.name),name:t,dataIndex:t,key:t})}else r.push({title:A["default"].createElement("span",{title:e.name},e.name),name:e.key?e.key.replace(/Id/,"Name"):e.key,dataIndex:e.key?e.key.replace(/Id/,"Name"):e.key,key:e.key?e.key.replace(/Id/,"Name"):e.key})}),0==o){if(a&&r&&0<r.length){a.forEach(function(e){e.render=function(e,t,a){return g.renderColSpan(e,t,a,0)}}),r.forEach(function(e){var n=void 0;n=e.key.includes("exCalc")?"isE"+e.key.replace(/Name/,"").slice(1):e.key.replace(/Name/,"Id"),e.render=function(e,t,a){return g.renderRowSpan(e,t,a,n,0)}});var d=r.length+2,f=void 0;f=r[0].key.includes("exCalc")?"isE"+r[0].key.replace(/Name/,"").slice(1):r[0].key.replace(/Name/,"Id"),r[0].render=function(e,t,a){return g.renderRowSpan(e,t,a,f,d)}}return[].concat(r,(0,S["default"])(a),(0,S["default"])(n))}if(1==o&&"0000"==c){if(a&&r&&0<r.length)if(i){a.forEach(function(e){e.render=function(e,t,a){return g.renderRowSpan(e,t,a,"accountId",0)}}),r.forEach(function(e){var n=void 0;n=e.key.includes("exCalc")?"isE"+e.key.replace(/Name/,"").slice(1):e.key.replace(/Name/,"Id"),e.render=function(e,t,a){return g.renderRowSpan(e,t,a,n,0)}});var p=r.length+2;a[0].render=function(e,t,a){return g.renderRowSpan(e,t,a,"accountId",p)}}else{a.forEach(function(e){e.render=function(e,t,a){return g.renderColSpan(e,t,a,0)}}),r.forEach(function(e){e.render=function(e,t,a){return g.renderColSpan(e,t,a,0)}});var h=r.length+2;a[0].render=function(e,t,a){return g.renderColSpan(e,t,a,h)}}return[].concat((0,S["default"])(a),r,(0,S["default"])(n))}if(r&&1<r.length){r.forEach(function(e){e.render=function(e,t,a){return g.renderColSpan(e,t,a,0)}});var m=void 0;m=r[0].key.includes("exCalc")?"isE"+r[0].key.replace(/Name/,"").slice(1):r[0].key.replace(/Name/,"Id");var v=r.length;r[0].render=function(e,t,a){return g.renderRowSpan(e,t,a,m,v,!0)}}else r.forEach(function(e){e.render=function(e,t,a){return g.renderColSpan(e,t,a,1,!0)}});return[].concat(r,(0,S["default"])(n))},this.onResize=function(e){var t=Math.floor(1e4*Math.random());g.keyRandomTab=t,setTimeout(function(){t==g.keyRandomTab&&g.getTableScroll("app-auxbalancesum-rpt-table-tbody","ant-table-thead",0,"ant-table-body","data.tableOption",e)},20)},this.getTableScroll=function(e,t,a,n,r,o){try{var i=document.getElementsByClassName(e)[0];if(!i){if(o)return;return void setTimeout(function(){g.getTableScroll(e,t,a,n,r)},200)}var c=i.getElementsByClassName(t)[0],u=i.getElementsByClassName(n)[0].getElementsByTagName("table")[0],l=g.metaAction.gf(r).toJS(),s=i.offsetHeight-c.offsetHeight-a,d=u.offsetHeight;if(s<d&&s!=l.y)g.metaAction.sf(r,(0,m.fromJS)((0,h["default"])({},l,{y:s})));else{if(!(d<s&&null!=l.y))return!1;g.metaAction.sf(r,(0,m.fromJS)((0,h["default"])({},l,{y:null})))}}catch(e){}}},n);e.exports=t["default"]},939:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(0)),r=c(a(7));t["default"]=function(e){var t=new o.reducer(e),a=new f((0,n["default"])({},e,{metaReducer:t}));return(0,n["default"])({},t,a)};var u=a(14),o=a(34),i=a(352),l=c(a(13)),s=c(a(208)),d=a(997);function c(e){return e&&e.__esModule?e:{"default":e}}var f=function e(t){var c=this;(0,r["default"])(this,e),this.init=function(e,t){var a=(0,i.getInitState)();return c.metaReducer.init(e,a)},this.initOption=function(e,t){var a=t.accountList,n=t.accountDepthList,r=t.enabledPeriod,o=t.maxDocPeriod,i=t.auxGroupList;return a&&a.glAccounts&&(e=c.metaReducer.sf(e,"data.other.accountList",(0,u.fromJS)((0,d.changeToOption)(a.glAccounts,"codeAndName","code")))),e=c.metaReducer.sf(e,"data.other.startAccountDepthList",(0,u.fromJS)((0,d.changeToOption)(n.values,"value","key"))),e=c.metaReducer.sf(e,"data.other.endAccountDepthList",(0,u.fromJS)((0,d.changeToOption)(n.values,"value","key"))),e=c.metaReducer.sf(e,"data.showOption.rptType","科目辅助余额表"),i&&(e=c.metaReducer.sf(e,"data.assistForm.initOption",(0,u.fromJS)(i)),e=c.metaReducer.sf(e,"data.assistForm.assistFormOption",(0,u.fromJS)(i))),r&&(e=c.metaReducer.sf(e,"data.other.enabledDate",(0,u.fromJS)((0,l["default"])(new Date(r))))),o&&(e=c.metaReducer.sf(e,"data.searchValue.date_start",(0,l["default"])(new Date(o))),e=c.metaReducer.sf(e,"data.searchValue.date_end",(0,l["default"])(new Date(o)))),e},this.load=function(e,t){return e=c.metaReducer.sf(e,"data.list",(0,u.fromJS)(t))},this.update=function(e,t){var a=t.path,n=t.value;return c.metaReducer.sf(e,a,(0,u.fromJS)(n))},this.tableLoading=function(e,t){return c.metaReducer.sf(e,"data.loading",t)},this.updateBathState=function(t,e){return e.forEach(function(e){t=c.metaReducer.sf(t,e.path,(0,u.fromJS)(e.value))}),t},this.normalSearchChange=function(e,t){var a=t.path,n=t.value;return c.metaReducer.sf(e,a,(0,u.fromJS)(n))},this.showOptionsChange=function(e,t){var a=t.path,n=t.value;return c.metaReducer.sf(e,a,n)},this.searchUpdate=function(e,t){return c.metaReducer.sf(e,"data.searchValue",(0,u.fromJS)(t))},this.tableOnchange=function(e,t){return e=c.metaReducer.sf(e,"data.list",(0,u.fromJS)(t))},this.sortReduce=function(e,t,a){return e=c.metaReducer.sf(e,"data.sort."+t,(0,u.fromJS)(a)),e=c.metaReducer.sf(e,"data.key",Math.random())},this.metaReducer=t.metaReducer,this.config=s["default"].current};e.exports=t["default"]},976:function(e,t,a){e.exports={"default":a(977),__esModule:!0}},977:function(e,t,a){a(978),e.exports=a(36).Object.entries},978:function(e,t,a){var n=a(64),r=a(979)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},979:function(e,t,a){var u=a(980),l=a(981),s=a(982).f;e.exports=function(c){return function(e){for(var t,a=l(e),n=u(a),r=n.length,o=0,i=[];o<r;)s.call(a,t=n[o++])&&i.push(c?[t,a[t]]:a[t]);return i}}},980:function(e,t,a){e.exports=a(5)(130)},981:function(e,t,a){e.exports=a(5)(112)},982:function(e,t,a){e.exports=a(5)(162)},997:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortSearchOption=t.changeToOption=t.sortBaseArchives=void 0;var A=n(a(20)),C=n(a(88)),O=n(a(976)),E=n(a(16));function n(e){return e&&e.__esModule?e:{"default":e}}t.sortBaseArchives=function(r){var o={"草莓":"supplierId","苹果":"inventoryId","芒果":"customerId","猕猴桃":"departmentId","橘子":"projectId","杨梅":"personId","自定义档案":!0},i=[];["芒果","草莓","橘子","猕猴桃","杨梅","苹果"].forEach(function(e){if(r[e]){var t=r[e],a=[];t.forEach(function(e){a.push({label:e.name,value:e.id})});var n={name:e,key:o[e],children:a};i.push(n)}});var e=!0,t=!1,a=void 0;try{for(var n,c=(0,E["default"])((0,O["default"])(r));!(e=(n=c.next()).done);e=!0){var u=(0,C["default"])(n.value,2),l=u[0],s=u[1];if(1==o[l]){var d=s,f=!0,p=!1,h=void 0;try{for(var m,v=(0,E["default"])(d.values());!(f=(m=v.next()).done);f=!0){var g=m.value,y=[];if(g.userDefineArchiveDataList){var S=!0,A=!1,w=void 0;try{for(var b,x=(0,E["default"])(g.userDefineArchiveDataList.values());!(S=(b=x.next()).done);S=!0){var k=b.value;y.push({label:k.name,value:k.id})}}catch(e){A=!0,w=e}finally{try{!S&&x["return"]&&x["return"]()}finally{if(A)throw w}}}i.push({name:g.name,key:g.calcName,children:y})}}catch(e){p=!0,h=e}finally{try{!f&&v["return"]&&v["return"]()}finally{if(p)throw h}}}}}catch(e){t=!0,a=e}finally{try{!e&&c["return"]&&c["return"]()}finally{if(t)throw a}}return i},t.changeToOption=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"label",a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"value";return e.map(function(e){return{label:e[t],value:e[a].toString()}})},t.sortSearchOption=function(t,e,a){if(e){var n=!0,r=!1,o=void 0;try{for(var i,c=(0,E["default"])((0,O["default"])(e));!(n=(i=c.next()).done);n=!0){var u=(0,C["default"])(i.value,2),l=u[0],s=u[1],d=t[l];if("string"==typeof s)t[s]=d;else if("object"==(void 0===s?"undefined":(0,A["default"])(s))){var f=!0,p=!1,h=void 0;try{for(var m,v=(0,E["default"])((0,O["default"])(s));!(f=(m=v.next()).done);f=!0){var g=(0,C["default"])(m.value,2),y=g[0],S=g[1];t[y]=S(d)}}catch(e){p=!0,h=e}finally{try{!f&&v["return"]&&v["return"]()}finally{if(p)throw h}}}delete t[l]}}catch(e){r=!0,o=e}finally{try{!n&&c["return"]&&c["return"]()}finally{if(r)throw o}}}return a&&a.forEach(function(e){try{delete t[e]}catch(e){console.log(e)}}),t}}});