webpackJsonp([10],{1072:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.cashType={CASHTYPE_CASH:5000020001,CASHTYPE_CASHFLOW:5000020002,CASHTYPE_BANKDEPOSIT:5000020003,CASHTYPE_PAIDUPCAPITAL:5000020004,CASHTYPE_LONGEQUITYINVESTMENTS:5000020033,CASHTYPE_COST:5000020034,CASHTYPE_ADJUSTMENT:5000020035,CASHTYPE_EQUITYSTATEMENT:5000020036,CASHTYPE_OTHERINCOME:5000020037,CASHTYPE_CURYEARPROFIT:5000020005}},978:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n,r=p(a(0)),c=p(a(10)),i=p(a(7)),s=p(a(9)),o=p(a(11)),u=p(a(12)),l=a(2),d=(p(l),a(34)),f=p(a(371));function p(e){return e&&e.__esModule?e:{"default":e}}var m=(0,d.wrapper)(f["default"])(n=function(e){function t(){return(0,i["default"])(this,t),(0,o["default"])(this,(t.__proto__||(0,c["default"])(t)).apply(this,arguments))}return(0,u["default"])(t,e),(0,s["default"])(t,[{key:"render",value:function(){return this.props.monkeyKing((0,r["default"])({},this.props,{path:"root"}))}}]),t}(l.Component))||n;t["default"]=m,e.exports=t["default"]},979:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,F=o(a(19)),l=o(a(3)),K=o(a(40)),g=o(a(0)),d=o(a(41)),c=o(a(7));t["default"]=function(e){var t=new i.action(e),a=p.FormDecorator.actionCreator((0,g["default"])({},e,{metaAction:t})),n=new u((0,g["default"])({},e,{metaAction:t,voucherAction:a})),r=(0,g["default"])({},t,a,n);return t.config({metaHandlers:r}),r};var q=o(a(2)),i=a(34),s=o(a(217)),E=a(1072),f=a(14),p=a(35);function o(e){return e&&e.__esModule?e:{"default":e}}var u=(n=function e(t){(0,c["default"])(this,e),r.call(this),this.metaAction=t.metaAction,this.voucherAction=t.voucherAction,this.config=s["default"].current,this.webapi=this.config.webapi},r=function(){var t,a,n,r,c,i,s,o,u,Q=this;this.onInit=function(e){var t=e.component,a=e.injections;Q.voucherAction.onInit({component:t,injections:a}),Q.component=t,Q.injections=a,Q.component.props.setOkListener&&Q.component.props.setOkListener(Q.onOk),a.reduce("init"),Q.load()},this.load=(0,d["default"])(K["default"].mark(function e(){var t,a,n,r,c,i,s,o,u,l,d,f,p,m,h,C,x,b,y,A;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.webapi.queryunit();case 2:return t=e.sent,e.next=5,Q.webapi.currency({entity:{isEnable:!0}});case 5:if(a=e.sent,n=Q.metaAction.gf("data").toJS(),r=Q.component.props,c=r.data,i=r.active,n.other.unitList=t.list,n.other.currencyList=a.list,"certificate"!==i){e.next=19;break}return e.next=12,Q.webapi.quertSubjects({});case 12:s=e.sent,n.other.subjectList=s.glAccounts,n.other.calcDict=(0,g["default"])({},s.calcDict),n.other.active=i,n.other.codeAndName="",e.next=35;break;case 19:return e.next=21,Q.webapi.find({id:c.id});case 21:return o=e.sent,e.next=24,Q.webapi.used({id:c.id});case 24:u=e.sent,n.form=(0,g["default"])({},o.glAccount),n.other.oldSubject=(0,g["default"])({},o.glAccount),n.other.calcDict=(0,g["default"])({},o.calcDict),l=n.form,d=l.code,f=l.codeAndName,p=l.isCalcMulti,l.isCalcQuantity,m=l.cashTypeId,h=l.grade,C=l.currencyId,x=!(m==E.cashType.CASHTYPE_CASH||m==E.cashType.CASHTYPE_BANKDEPOSIT),b=m==E.cashType.CASHTYPE_BANKDEPOSIT,"edit"===i?(n.form.code=4<d.length?d.slice(-2):d,n.other.addonBefore=4<d.length?d.slice(0,d.length-2):"",n.other.isUsed=u,n.other.active=i,n.other.codeAndName=Q.component.props.parentSubject.codeAndName,n.other.isDisplayBankAccountAux=b&&1<h,c.isEndNode||(n.form.canDisabledMulti=!1,n.form.canDisabledQuantity=!1)):"add"===i&&(n.form.code=Q.component.props.newCode,n.form.isSystem=!1,n.form.isEndNode=!0,n.form.gradeName="",n.form.name="",n.other.codeAndName=f,n.other.addonBefore=d,n.other.isUsed=u,n.other.isDisplayBankAccountAux=b,u&&(n.form.canDisabledMulti=!1,n.form.canDisabledQuantity=!1)),p&&C&&0==n.other.currencyList.filter(function(e){return e&&e.id==C}).length&&(n.form.currencyName=n.other.currencyList[0].name,n.form.currencyId=n.other.currencyList[0].id),y=1<h?""!=n.other.addonBefore?n.other.addonBefore.indexOf("2221"):null:d?d.indexOf("2221"):null,A=m==E.cashType.CASHTYPE_CURYEARPROFIT,n.other.isExist=0==y&&"number"==typeof y,n.other.multiUnit=!(0==y&&"number"==typeof y||A),n.other.isDisplayAuxAcc=x&&!(0==y&&"number"==typeof y);case 35:document.getElementById("subjectName").focus(),n.other.loading=!1,Q.injections.reduce("load",n);case 38:case"end":return e.stop()}},e,Q)})),this.addCalcList=(t=(0,d["default"])(K["default"].mark(function e(t){var a,n,r,c,i,s;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a={name:t}).title="app-card-currency"==t?"币种":"计量单位",e.next=4,Q.metaAction.modal("show",{title:a.title,width:400,children:Q.metaAction.loadApp(a.name,{store:Q.component.props.store})});case 4:if(!(n=e.sent)){e.next=25;break}if(r=Q.metaAction.gf("data").toJS(),"app-card-currency"!=t){e.next=19;break}return e.next=10,Q.webapi.currency({entity:{isEnable:!0}});case 10:c=e.sent,r.other.currencyList=c.list.filter(function(e){return e.isEnable}),r.form.currencyId=n.id,[],i=n.id,r.other.currencyList=c.list,0==c.list.filter(function(e){return e.id==i}).length&&(r.form.currencyId=r.other.currencyList[0].id),e.next=24;break;case 19:return e.next=21,Q.webapi.queryunit();case 21:s=e.sent,r.other.unitList=s.list,r.form.unitId=n.id;case 24:Q.injections.reduce("load",r);case 25:case"end":return e.stop()}},e,Q)})),function(e){return t.apply(this,arguments)}),this.showisCalc=function(r){Q.metaAction.gf("data.other.isDisplayAuxAcc");if(r.isCalc){var e=Q.metaAction.gf("data.other.calcDict").toJS(),t=["isCalcCustomer","isCalcSupplier","isCalcProject","isCalcDepartment","isCalcPerson","isCalcInventory","isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"],a=[];for(var n in t)e[t[n]]&&a.push({name:t[n],title:e[t[n]],check:r[t[n]]});return a.map(function(t,e){var a,n;return 11<h(t.title)?q["default"].createElement(p.Checkbox,(n={disabled:!1,key:e,defaultChecked:t.check},(0,l["default"])(n,"disabled",Q.disabledState(r.form,t.name)),(0,l["default"])(n,"onClick",function(e){Q.metaAction.sf("data.form."+t.name,e.target.checked)}),n),q["default"].createElement("span",{title:t.title},t.title)):q["default"].createElement(p.Checkbox,(a={disabled:!1,key:e,defaultChecked:t.check},(0,l["default"])(a,"disabled",Q.disabledState(r.form,t.name)),(0,l["default"])(a,"onClick",function(e){Q.metaAction.sf("data.form."+t.name,e.target.checked)}),a),t.title)})}},this.parentSubjectNode=function(){var e=Q.metaAction.gf("data.other").toJS(),t=e.subjectList,a=e.active,n=e.codeAndName;if("certificate"==a){var r=t.map(function(e){var t=e.code,a=e.grade,n=e.cashTypeId,r=e.codeAndName,c=e.id,i=!1;return++a,(-1!=t.indexOf("1002")&&2!=a||-1!=t.indexOf("1012")&&2!=a&&3!=a||"22210401"==t||-1!=t.indexOf("1001")&&1!=a||5000020033==n&&2!=a||(5000020034==n||5000020035==n||5000020036==n||5000020037==n)&&2!=a||"22210109"==t||5000020005==n||5<a)&&(i=!0),q["default"].createElement(Option,{key:t,value:c,disabled:i},r)});return q["default"].createElement(p.Select,{style:{width:200},filterOption:Q.filterSubject.bind(Q),onChange:Q.changeParentSubject.bind(Q)},r)}return 38<h(n)?q["default"].createElement("span",{className:"parentName",title:n},n):q["default"].createElement("span",null,n)},this.filterSubject=function(e,t){if(t&&t.props&&t.props.value&&!t.props.disabled){var a=Q.metaAction.gf("data.other.subjectList").find(function(e){return e.get("id")==t.props.value});if(a.get("code")&&0==a.get("code").indexOf(e)||a.get("gradeName")&&-1!=a.get("gradeName").indexOf(e)||a.get("codeAndName")&&0==a.get("codeAndName").indexOf(e)||a.get("helpCode")&&-1!=a.get("helpCode").indexOf(e.toUpperCase())){var n=document.getElementsByClassName("ant-select-dropdown-menu");return 0<n.length&&0<n[0].scrollTop&&(n[0].scrollTop=0),!0}return!1}return!0},this.changeParentSubject=(a=(0,d["default"])(K["default"].mark(function e(t){var a,n,r,c,i,s,o,u,l,d,f,p,m,h,C,x,b;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.webapi.used({id:t});case 2:a=e.sent,n=Q.metaAction.gf("data").toJS(),r=n.other.subjectList,c=r.filter(function(e){return parseInt(e.id)==parseInt(t)}),i=n.form.name,n.form=(0,g["default"])({},c[0]),n.form.name=i,n.other.oldSubject=(0,g["default"])({},c[0]),++n.form.grade,s=n.form,o=s.code,u=s.codeAndName,l=s.isCalcMulti,s.isCalcQuantity,d=s.cashTypeId,f=s.grade,p=s.currencyId,m=!(d==E.cashType.CASHTYPE_CASH||d==E.cashType.CASHTYPE_BANKDEPOSIT),h=d==E.cashType.CASHTYPE_BANKDEPOSIT&&1!=f,C=n.form.code+y(n.form.id,o,r),n.form.code=C,n.form.isSystem=!1,n.form.isEndNode=!0,n.form.gradeName="",n.form.parentId=n.form.id,n.other.codeAndName=u,n.other.isUsed=a,n.other.isDisplayBankAccountAux=h,x=C?C.indexOf("2221"):null,b=d==E.cashType.CASHTYPE_CURYEARPROFIT,n.other.isExist=0==x&&"number"==typeof x,n.other.multiUnit=!(0==x&&"number"==typeof x||b),n.other.isDisplayAuxAcc=m&&!(0==x&&"number"==typeof x),n.form.canDisabledMulti=!0,n.form.canDisabledQuantity=!0,a&&(n.form.canDisabledMulti=!1,n.form.canDisabledQuantity=!1),l&&p&&0==n.other.currencyList.filter(function(e){return e&&e.id==p}).length&&(n.form.currencyName=n.other.currencyList[0].name,n.form.currencyId=n.other.currencyList[0].id),Q.fieldChange("data.form.code",n.form.code),Q.injections.reduce("load",n);case 28:case"end":return e.stop()}},e,Q)})),function(e){return a.apply(this,arguments)}),this.changeAdjustAccounts=function(e,t,a,n){var r=Q.metaAction.gf("data").toJS(),c=(r.form,r.other);(r.form[e]=n)&&0!=c[a].length?r.form[t]=c[a][0].id:r.form[t]=null,Q.injections.reduce("load",r)},this.disabledState=function(e,t){e||(e=Q.metaAction.gf("data.form").toJS());var a=Q.metaAction.gf("data.other").toJS(),n=a.isUsed,r=a.codeAndName,c=a.active,i=a.oldSubject,s=!1;if("edit"==c)if(e.isEndNode){if(e.isEndNode)if(e.isSystem){if("name"==t&&(s=!0,"1002  银行存款"!=r&&"1002 银行存款"!=r||(s=!1)),n){0<=["isCalc","isCalcDepartment","isCalcPerson","isCalcCustomer","isCalcSupplier","isCalcInventory","isCalcProject","isCalcBankAccount","isCalcQuantity","isCalcMulti","isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"].indexOf(t)&&(s=i[t])}}else if(n){0<=["isCalc","isCalcDepartment","isCalcPerson","isCalcCustomer","isCalcSupplier","isCalcInventory","isCalcProject","isCalcBankAccount",,"isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"].indexOf(t)&&(s=i[t])}}else{0<=["isCalc","isCalcDepartment","isCalcPerson","isCalcCustomer","isCalcSupplier","isCalcInventory","isCalcProject","isCalcBankAccount","isCalcQuantity","unitId","isCalcMulti","currencyId","isEnable","isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"].indexOf(t)&&(s=!0),e.isSystem&&"name"==t&&(s=!0,"1002  银行存款"!=r&&"1002 银行存款"!=r||(s=!1))}else if(n){0<=["isCalc","isCalcDepartment","isCalcPerson","isCalcCustomer","isCalcSupplier","isCalcInventory","isCalcProject","isCalcBankAccount",,"isExCalc1","isExCalc2","isExCalc3","isExCalc4","isExCalc5","isExCalc6","isExCalc7","isExCalc8","isExCalc9","isExCalc10"].indexOf(t)&&(s=!0)}return s},this.measurementUnitFocus=(0,d["default"])(K["default"].mark(function e(){var t;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.webapi.queryunit();case 2:t=e.sent,Q.metaAction.sf("data.other.unitList",(0,f.fromJS)(t.list));case 4:case"end":return e.stop()}},e,Q)})),this.currencyFocus=(0,d["default"])(K["default"].mark(function e(){var t;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.webapi.currency({entity:{isEnable:!0}});case 2:t=e.sent,Q.metaAction.sf("data.other.currencyList",(0,f.fromJS)(t.list));case 4:case"end":return e.stop()}},e,Q)})),this.numberAdminClick=function(){Q.BussClick("unit","计量单位")},this.adjustAdminClick=function(){Q.BussClick("currency","币种")},this.BussClick=(n=(0,d["default"])(K["default"].mark(function e(t,a){var n,r,c,i,s,o,u;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.metaAction.modal("show",{title:a,width:840,style:{top:40},bodyStyle:{height:500,paddingTop:0},footer:"",className:"app-proof-of-charge-modal",children:Q.metaAction.loadApp("app-list-"+t+"?from=subjects",{store:Q.component.props.store,modelStatus:1})});case 2:if(e.sent,n=Q.metaAction.gf("data").toJS(),"currency"!=t){e.next=14;break}return e.next=7,Q.webapi.currency({entity:{isEnable:!0}});case 7:r=e.sent,c=n.form.currencyId,[],n.other.currencyList=r.list,i=r.list.filter(function(e){return e.id==c}),0==r.list.length?n.form.currencyId=void 0:0==i.length&&(n.form.currencyId=n.other.currencyList[0].id),e.next=21;break;case 14:return e.next=16,Q.webapi.queryunit();case 16:s=e.sent,o=n.form.unitId,[],n.other.unitList=s.list,u=s.list.filter(function(e){return e.id==o}),0==s.list.length?n.form.unitId=void 0:0==u.length&&(n.form.unitId=n.other.unitList[0].id);case 21:Q.injections.reduce("load",n);case 22:case"end":return e.stop()}},e,Q)})),function(e,t){return n.apply(this,arguments)}),this.onOk=(0,d["default"])(K["default"].mark(function e(){return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.save();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,Q)})),this.save=(0,d["default"])(K["default"].mark(function e(){var a,n,r,c,i,s,o,u,l,d,f,p,m,h,C,x,b,y,A,g,E,k,v,S,w,I,N,T,P,O,j,D,_,M,B,L,H,Y,U,J,R;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Q.metaAction.gf("data.other").toJS(),n=Q.metaAction.gf("data.form").toJS(),r=n.isCalcQuantity,c=n.isCalcMulti,i=n.unitId,s=n.currencyId,n.isCalc,o=a.unitList,u=a.currencyList,l=a.oldSubject,d=a.isUsed,f=a.calcDict,p=a.active,m={},r&&i&&(h=o.filter(function(e){return e&&e.id==i}),n.unitName=h[0].name),c&&s&&(C=u.filter(function(e){return e&&e.id==s}),n.currencyName=C[0].name),x=[{path:"data.form.name",value:n.name},{path:"data.form.code",value:n.code}],a.isDisplayBankAccountAux&&(n.bankCode=n.bankCode.trim(),n.bankName=n.bankName.trim(),x=x.concat([{path:"data.form.bankCode",value:n.bankCode},{path:"data.form.bankName",value:n.bankName}])),e.next=8,Q.voucherAction.check(x,Q.check);case 8:if(b=e.sent,y=void 0,A={textAlign:"left",display:"inline-block",verticalAlign:"top"},!n.isCalc){e.next=16;break}return g=(0,F["default"])(f),E=g.filter(function(e){if(n[e])return e}),e.next=15,Q.checkCalc(E);case 15:y=e.sent;case 16:if(b||null!=y){e.next=21;break}return Q.metaAction.toast("warning",q["default"].createElement("div",{style:A},q["default"].createElement("p",{style:{marginBottom:"0"}},"请按页面提示信息修改信息后才可提交"))),e.abrupt("return",!1);case 21:if(null==y){e.next=26;break}return Q.metaAction.toast("warning",q["default"].createElement("div",{style:A},y?q["default"].createElement("p",{style:{marginBottom:"0"}},y):null)),e.abrupt("return",!1);case 26:if(!r||i){e.next=31;break}return Q.metaAction.toast("warning",q["default"].createElement("div",{style:A},q["default"].createElement("p",{style:{marginBottom:"0"}},"请选择计量单位"))),e.abrupt("return",!1);case 31:if(!c||s){e.next=34;break}return Q.metaAction.toast("warning",q["default"].createElement("div",{style:A},q["default"].createElement("p",{style:{marginBottom:"0"}},"请选择默认币种"))),e.abrupt("return",!1);case 34:if(n.name=n.name.trim(),n.code=n.code.trim(),"certificate"!==p&&"add"!==p||(delete n.ts,delete n.orgId,delete n.exchangeRate,delete n.AuxAccCalcInfo,delete n.helpCode,delete n.gradeName,delete n.id,delete n.codeAndName),n.isCalcMulti||(n.currencyId=null),n.isCalcQuantity||(n.unitId=null),l.isCalc==n.isCalc||0!=n.isCalc){e.next=44;break}for(v in k=(0,F["default"])(f))n[k[v]]=!1;e.next=54;break;case 44:if(!d){e.next=54;break}if("edit"!==p){e.next=54;break}if(S=(0,F["default"])(f),w=[],n.isCalc)for(T in S)l[S[T]]!=n[S[T]]&&n[S[T]]&&w.push(S[T]);else for(N in I=(0,F["default"])(f))n[I[N]]=!1;if(0==w.length||!n.isEndNode){e.next=54;break}return m.auxAccMap={},e.next=52,Q.metaAction.modal("show",{title:"档案明细选择",width:400,bodyStyle:{padding:16,fontSize:12},style:{top:40},children:Q.metaAction.loadApp("ttk-table-app-tab-list-accounting",{store:Q.component.props.store,calcDict:f,newCalc:w})});case 52:(P=e.sent)&&(m.auxAccMap=P);case 54:if(!l.isEndNode||"edit"===a.active||!d){e.next=60;break}return e.next=57,Q.metaAction.modal("confirm",{title:"新增",content:"新增下级，历史数据将会结转至新增的下级。此操作不能恢复，是否继续？"});case 57:if(e.sent){e.next=60;break}return e.abrupt("return",!1);case 60:if(!(m.form=n).isCalc)for(j in O=(0,F["default"])(f))n[O[j]]=!1;if("edit"!==p){e.next=82;break}if(D=4<l.code.length?l.code.slice(0,l.code.length-2)+n.code:l.code,n.code=D,_={glAccountDto:n,purpose:1,isUpdateSelf:1},m.hasOwnProperty("auxAccMap")&&0!=(0,F["default"])(m.auxAccMap).length&&(_.auxAccMap=m.auxAccMap),!m.hasOwnProperty("auxAccMap")||0!=(0,F["default"])(m.auxAccMap).length){e.next=69;break}return e.abrupt("return",!1);case 69:return e.next=71,Q.webapi.update(_);case 71:if(!(M=e.sent)){e.next=80;break}if(!M.errMsgs||!M.errMsgs[0]){e.next=77;break}return e.next=76,Q.metaAction.modal("confirm",{title:"新增",content:(t=M.errMsgs,q["default"].createElement("div",null,t.map(function(e){return q["default"].createElement("div",{style:{lineHeight:"20px",padding:"10px 0 0"}},e)})))});case 76:e.sent;case 77:return Q.metaAction.toast("success","更新成功！"),M.isUpdateSelf=_.isUpdateSelf,e.abrupt("return",M);case 80:e.next=105;break;case 82:if("add"!==p){e.next=99;break}return B=l.code,L=l.accountTypeId,H=l.grade,Y=l.id,U=l.cashTypeId,n.code=B+n.code,n.accountTypeId=L,n.grade=H+1,n.cashTypeId=U,n.parentId=Y,n.isCalcMulti||(n.currencyId=null),n.isCalcQuantity||(n.unitId=null),e.next=93,Q.webapi.add(n);case 93:if(!(J=e.sent)){e.next=97;break}return Q.metaAction.toast("success","新增成功！"),e.abrupt("return",J);case 97:e.next=105;break;case 99:return e.next=101,Q.webapi.add(n);case 101:if(!(R=e.sent)){e.next=105;break}return Q.metaAction.toast("success","新增成功！"),e.abrupt("return",R);case 105:return e.abrupt("return",!1);case 106:case"end":return e.stop()}var t},e,Q)})),this.check=(r=(0,d["default"])(K["default"].mark(function e(t){var a;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(a=(0,g["default"])({},t),"data.form.name"!==t.path){e.next=12;break}return e.t0=g["default"],e.t1=a,e.next=8,Q.checkName(t.value);case 8:e.t2=e.sent,(0,e.t0)(e.t1,e.t2),e.next=37;break;case 12:if("data.form.code"!==t.path){e.next=21;break}return e.t3=g["default"],e.t4=a,e.next=17,Q.checkCode(t.value);case 17:e.t5=e.sent,(0,e.t3)(e.t4,e.t5),e.next=37;break;case 21:if("data.form.bankCode"!==t.path){e.next=30;break}return e.t6=g["default"],e.t7=a,e.next=26,Q.checkBankCode(t.value);case 26:e.t8=e.sent,(0,e.t6)(e.t7,e.t8),e.next=37;break;case 30:if("data.form.bankName"!==t.path){e.next=37;break}return e.t9=g["default"],e.t10=a,e.next=35,Q.checkBankName(t.value);case 35:e.t11=e.sent,(0,e.t9)(e.t10,e.t11);case 37:return e.abrupt("return",a);case 38:case"end":return e.stop()}},e,Q)})),function(e){return r.apply(this,arguments)}),this.checkName=(c=(0,d["default"])(K["default"].mark(function e(t){var a;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,t&&t.trim()?50<t.length&&(a="名称长度不能超过50"):a="请录入名称",e.abrupt("return",{errorPath:"data.other.error.name",message:a});case 3:case"end":return e.stop()}},e,Q)})),function(e){return c.apply(this,arguments)}),this.checkCalc=(i=(0,d["default"])(K["default"].mark(function e(t){var a;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,0==t.length&&(a="请选择辅助核算"),e.abrupt("return",a);case 3:case"end":return e.stop()}},e,Q)})),function(e){return i.apply(this,arguments)}),this.checkBankCode=(s=(0,d["default"])(K["default"].mark(function e(t){var a;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,t&&t.trim()?50<t.length&&(a="银行账号长度不能超过50"):a="请录入账号",e.abrupt("return",{errorPath:"data.other.error.bankCode",message:a});case 3:case"end":return e.stop()}},e,Q)})),function(e){return s.apply(this,arguments)}),this.checkBankName=(o=(0,d["default"])(K["default"].mark(function e(t){var a;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,t&&t.trim()?50<t.length&&(a="银行名称长度不能超过50"):a="请录入开户银行",e.abrupt("return",{errorPath:"data.other.error.bankName",message:a});case 3:case"end":return e.stop()}},e,Q)})),function(e){return o.apply(this,arguments)}),this.checkCode=(u=(0,d["default"])(K["default"].mark(function e(t,a){var n,r;return K["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,r=/^[A-Za-z0-9]+$/,t&&t.trim()?r.test(t)?1==t.length&&(n="编码结构错误"):n="请输入字母或数字":n="certificate"===Q.component.props.active?"请选择上级":"请输入编码",e.abrupt("return",{errorPath:"data.other.error.code",message:n});case 3:case"end":return e.stop()}},e,Q)})),function(e,t){return u.apply(this,arguments)}),this.fieldChange=function(e,t){Q.voucherAction.fieldChange(e,t,Q.check)}},n);function y(t,e,a){var n=void 0,r=a.filter(function(e){return parseInt(e.parentId)==parseInt(t)});if(0==r.length)n="01";else{for(var c=[],i=0;i<r.length;i++){var s=r[i].code;c.push(s.substring(s.length-2))}var o=(c=c.sort(m))[c.length-1];"99"==o&&c.length<98?(o=c[c.length-2],n=isNaN(o)?"00":(n="00"+(parseInt(o)+1).toString()).substring(n.length-2)):n="99"==o||isNaN(o)?"00":(n="00"+(parseInt(o)+1).toString()).substring(n.length-2)}return n}function m(e,t){return e-t}function h(e){return null==e?0:("string"!=typeof e&&(e+=""),e.replace(/[^\x00-\xff]/g,"01").length)}e.exports=t["default"]},980:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(0)),r=u(a(7));t["default"]=function(e){var t=new i.reducer(e),a=new l((0,n["default"])({},e,{metaReducer:t}));return(0,n["default"])({},t,a)};var c=a(14),i=a(34),s=u(a(217)),o=a(372);function u(e){return e&&e.__esModule?e:{"default":e}}var l=function e(t){var n=this;(0,r["default"])(this,e),this.init=function(e,t){var a=(0,o.getInitState)();return n.metaReducer.init(e,a)},this.load=function(e,t){return e=n.metaReducer.sf(e,"data.form",(0,c.fromJS)(t.form)),e=n.metaReducer.sf(e,"data.other",(0,c.fromJS)(t.other))},this.metaReducer=t.metaReducer,this.config=s["default"].current};e.exports=t["default"]}});