"use strict";(self.webpackChunknow_ui_dashboard_angular=self.webpackChunknow_ui_dashboard_angular||[]).push([[592],{6569:function(j,D,s){s.d(D,{y:function(){return p}});var d=s(3144),O=s(5671),p=(0,d.Z)(function b(){(0,O.Z)(this,b)})},4951:function(j,D,s){s.d(D,{p:function(){return S}});var d=s(5671),O=s(3144),p=s(2340),b=s(9115),C=s(520),S=function(){var m=function(){function v(y){(0,d.Z)(this,v),this.http=y,this.urlGET=p.N.url+"DepartmentController/displayalldepartment/",this.urlDel=p.N.url+"DepartmentController/deleteDepartment/",this.urlGetById=p.N.url+"DepartmentController/displdepartmentbyid/",this.urlAdd=p.N.url+"DepartmentController/addDepartment/",this.urlUpdate=p.N.url+"DepartmentController/updatedepartment/",this.urlNbensperdepartById=p.N.url+"DepartmentController/GetNbensperDepartment/"}return(0,O.Z)(v,[{key:"getAllDepartment",value:function(){return this.http.get(this.urlGET)}},{key:"delete",value:function(_){return this.http.delete(this.urlDel+_)}},{key:"getDepartmentByID",value:function(_){return this.http.get(this.urlGetById+_)}},{key:"addDepartment",value:function(_){return this.http.post(this.urlAdd,_)}},{key:"updateDepartment",value:function(_){return this.http.put(this.urlUpdate,_)}},{key:"GetNbensperDepartment",value:function(_){return this.http.get(this.urlNbensperdepartById+_)}}]),v}();return m.\u0275fac=function(y){return new(y||m)(b.LFG(C.eN))},m.\u0275prov=b.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m}()},655:function(j,D,s){function b(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function v(t,e,n,r){return new(n||(n=Promise))(function(a,u){function i(f){try{l(r.next(f))}catch(w){u(w)}}function h(f){try{l(r.throw(f))}catch(w){u(w)}}function l(f){f.done?a(f.value):function o(a){return a instanceof n?a:new n(function(u){u(a)})}(f.value).then(i,h)}l((r=r.apply(t,e||[])).next())})}s.d(D,{_T:function(){return b},mG:function(){return v}})}}]);