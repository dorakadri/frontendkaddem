"use strict";(self.webpackChunknow_ui_dashboard_angular=self.webpackChunknow_ui_dashboard_angular||[]).push([[279],{9279:function(H,v,l){l.r(v),l.d(v,{EnseignantsModule:function(){return j}});var g=l(3144),u=l(5671),d=l(9808),p=l(4366),f=l(5482),n=l(9115),r=l(4182),C=function(){var t=function(){function a(i,e,o){(0,u.Z)(this,a),this.enseignantService=i,this.router=e,this.currentRoute=o,this.defaultVal="not assigned yet"}return(0,g.Z)(a,[{key:"ngOnInit",value:function(){var e=this,o=this.currentRoute.snapshot.params.idenseignant;null!=o&&this.enseignantService.getEnseignantByID(o).subscribe(function(s){e.enseignant=s,null!==e.enseignant.departement.idDepart&&(e.defaultVal=e.enseignant.departement.nomDepart)})}}]),a}();return t.\u0275fac=function(i){return new(i||t)(n.Y36(f.y),n.Y36(p.F0),n.Y36(p.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-detail-enseignant"]],decls:31,vars:5,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],["f","ngForm"],[1,"form-group","col-md-6"],["type","text","name","nom","disabled","true",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","prenom","disabled","true",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","fonction","disabled","true",1,"form-control",3,"ngModel","ngModelChange"],["type","date","name","dateembauche","disabled","true",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","defaultVal","disabled","true",1,"form-control",3,"ngModel","ngModelChange"]],template:function(i,e){1&i&&(n._UZ(0,"div",0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),n._uU(7,"professor"),n.qZA()(),n.TgZ(8,"div",7)(9,"form",null,8)(11,"div",9)(12,"label"),n._uU(13,"First Name:*"),n.qZA(),n.TgZ(14,"input",10),n.NdJ("ngModelChange",function(s){return e.enseignant.nom=s}),n.qZA()(),n.TgZ(15,"div",9)(16,"label"),n._uU(17,"Last Name:*"),n.qZA(),n.TgZ(18,"input",11),n.NdJ("ngModelChange",function(s){return e.enseignant.prenom=s}),n.qZA()(),n.TgZ(19,"div",9)(20,"label"),n._uU(21,"Function:*"),n.qZA(),n.TgZ(22,"input",12),n.NdJ("ngModelChange",function(s){return e.enseignant.fonction=s}),n.qZA()(),n.TgZ(23,"div",9)(24,"label"),n._uU(25,"HireDate:*"),n.qZA(),n.TgZ(26,"input",13),n.NdJ("ngModelChange",function(s){return e.enseignant.dateembauche=s}),n.qZA()(),n.TgZ(27,"div",9)(28,"label"),n._uU(29,"Department Name assigned:*"),n.qZA(),n.TgZ(30,"input",14),n.NdJ("ngModelChange",function(s){return e.defaultVal=s}),n.qZA()()()()()()()()),2&i&&(n.xp6(14),n.Q6J("ngModel",e.enseignant.nom),n.xp6(4),n.Q6J("ngModel",e.enseignant.prenom),n.xp6(4),n.Q6J("ngModel",e.enseignant.fonction),n.xp6(4),n.Q6J("ngModel",e.enseignant.dateembauche),n.xp6(4),n.Q6J("ngModel",e.defaultVal))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On],styles:[""]}),t}(),E=function(){var t=function(){function a(){(0,u.Z)(this,a)}return(0,g.Z)(a,[{key:"ngOnInit",value:function(){}}]),a}();return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-enseignants"]],decls:1,vars:0,template:function(i,e){1&i&&n._UZ(0,"router-outlet")},directives:[p.lC],styles:[""]}),t}(),T=l(4951),Z=(0,g.Z)(function t(){(0,u.Z)(this,t)}),b=l(5226),m=l.n(b);function A(t,a){1&t&&(n.O4$(),n.kcU(),n.TgZ(0,"span"),n._uU(1," this Field is Required"),n.qZA())}function F(t,a){1&t&&(n.O4$(),n.kcU(),n.TgZ(0,"span"),n._uU(1," min length is 3"),n.qZA())}function q(t,a){if(1&t&&(n.TgZ(0,"div"),n.O4$(),n.TgZ(1,"svg",24),n._UZ(2,"path",25)(3,"path",26),n.qZA(),n.YNc(4,A,2,0,"span",12),n.YNc(5,F,2,0,"span",12),n.qZA()),2&t){var i=n.oxw();n.xp6(4),n.Q6J("ngIf",i.EnseignantForm.controls.nom.hasError("required")),n.xp6(1),n.Q6J("ngIf",i.EnseignantForm.controls.nom.hasError("minlength"))}}function M(t,a){1&t&&(n.O4$(),n.kcU(),n.TgZ(0,"span"),n._uU(1," this Field is Required"),n.qZA())}function y(t,a){1&t&&(n.O4$(),n.kcU(),n.TgZ(0,"span"),n._uU(1," min length is 3"),n.qZA())}function U(t,a){if(1&t&&(n.TgZ(0,"div"),n.O4$(),n.TgZ(1,"svg",24),n._UZ(2,"path",25)(3,"path",26),n.qZA(),n.YNc(4,M,2,0,"span",12),n.YNc(5,y,2,0,"span",12),n.qZA()),2&t){var i=n.oxw();n.xp6(4),n.Q6J("ngIf",i.EnseignantForm.controls.prenom.hasError("required")),n.xp6(1),n.Q6J("ngIf",i.EnseignantForm.controls.prenom.hasError("minlength"))}}function J(t,a){1&t&&(n.O4$(),n.kcU(),n.TgZ(0,"span"),n._uU(1," this Field is Required"),n.qZA())}function x(t,a){if(1&t&&(n.TgZ(0,"small"),n.O4$(),n.TgZ(1,"svg",24),n._UZ(2,"path",25)(3,"path",26),n.qZA(),n.YNc(4,J,2,0,"span",12),n.qZA()),2&t){var i=n.oxw();n.xp6(4),n.Q6J("ngIf",i.EnseignantForm.controls.fonction.hasError("required"))}}function w(t,a){1&t&&(n.O4$(),n.kcU(),n.TgZ(0,"span"),n._uU(1," this Field is Required"),n.qZA())}function L(t,a){if(1&t&&(n.TgZ(0,"small"),n.O4$(),n.TgZ(1,"svg",24),n._UZ(2,"path",25)(3,"path",26),n.qZA(),n.YNc(4,w,2,0,"span",12),n.qZA()),2&t){var i=n.oxw();n.xp6(4),n.Q6J("ngIf",i.EnseignantForm.controls.dateembauche.hasError("required"))}}function N(t,a){if(1&t&&(n.TgZ(0,"option",27),n._uU(1),n.qZA()),2&t){var i=a.$implicit;n.s9C("value",i.idDepart),n.xp6(1),n.hij(" ",i.nomDepart," ")}}var D=function(){return["btn","btn-sm","btn-success"]},_=function(){var t=function(){function a(i,e,o,s,c){(0,u.Z)(this,a),this.builder=i,this.enseignantService=e,this.departementService=o,this.router=s,this.currentRoute=c,this.enseignant=new Z,this.selectedList=[],this.list=[],this.idselected=[],this.defaultVal="not assigned yet"}return(0,g.Z)(a,[{key:"ngOnInit",value:function(){var e=this,o=this.currentRoute.snapshot.params.idenseignant;null!=o?(this.action="update",this.enseignantService.getEnseignantByID(o).subscribe(function(s){e.enseignant=s,null!==e.enseignant.departement.idDepart&&(e.defaultVal=e.enseignant.departement.nomDepart)})):(this.action="Add",this.enseignant=new Z),this.departementService.getAllDepartment().subscribe(function(s){e.list=s,e.selectedList=s}),this.EnseignantForm=this.builder.group({nom:new r.NI("",r.kI.minLength(3)),prenom:new r.NI("",r.kI.minLength(3)),dateembauche:new r.NI("",r.kI.required),fonction:new r.NI("",r.kI.required)})}},{key:"saveEnseignant",value:function(){var e=this;this.EnseignantForm.valid?"Add"==this.action?this.enseignantService.addEnseignant(this.enseignant).subscribe(function(o){e.router.navigate(["/professors"]),e.enseignantService.assignEnseignantsToDepartment(o,e.idDepar).subscribe(),m().fire({icon:"success",title:"Saved successfully",showConfirmButton:!1,timer:1500})}):this.enseignantService.updateEnseignant(this.enseignant).subscribe(function(o){e.router.navigate(["/professors"]),e.enseignantService.assignEnseignantsToDepartment(o,e.idDepar).subscribe(),m().fire({icon:"success",title:"Updated successfully",showConfirmButton:!1,timer:1500})}):m().fire({icon:"error",title:"Oops...",text:"Please fill the required fields  !",timer:2e3})}},{key:"getvalue",value:function(e){console.log(e.target.value),this.idDepar=e.target.value}},{key:"nom",get:function(){return this.nom.get("nom")}},{key:"prenom",get:function(){return this.prenom.get("prenom")}},{key:"dateembauche",get:function(){return this.dateembauche.get("dateembauche")}},{key:"fonction",get:function(){return this.fonction.get("fonction")}}]),a}();return t.\u0275fac=function(i){return new(i||t)(n.Y36(r.qu),n.Y36(f.y),n.Y36(T.p),n.Y36(p.F0),n.Y36(p.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-form-enseignant"]],decls:48,vars:16,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content"],[1,"row"],[1,"col-md-8"],[1,"card"],[1,"card-header"],[1,"title"],[1,"card-body"],[3,"formGroup","ngSubmit"],["f","ngForm"],[1,"form-group","col-md-6"],["type","text","name","nom","formControlName","nom","required","",1,"form-control",3,"ngModel","ngModelChange"],[4,"ngIf"],["type","text","name","prenom","formControlName","prenom","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","fonction","formControlName","fonction",1,"form-control",3,"ngModel","ngModelChange"],["value","chefdepartment"],["value","responsablemodule"],["value","professeur"],["value","surveillant"],["type","date","name","dateembauche","formControlName","dateembauche",1,"form-control",3,"ngModel","ngModelChange"],["name","departement","required","",1,"form-control",3,"change"],["selected","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","submit",3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-exclamation-circle"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"],[3,"value"]],template:function(i,e){1&i&&(n._UZ(0,"div",0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5",6),n._uU(7),n.qZA()(),n.TgZ(8,"div",7)(9,"form",8,9),n.NdJ("ngSubmit",function(){return e.saveEnseignant()}),n.TgZ(11,"div",10)(12,"label"),n._uU(13,"First Name:*"),n.qZA(),n.TgZ(14,"input",11),n.NdJ("ngModelChange",function(s){return e.enseignant.nom=s}),n.qZA(),n.YNc(15,q,6,2,"div",12),n.qZA(),n.TgZ(16,"div",10)(17,"label"),n._uU(18,"Last Name:*"),n.qZA(),n.TgZ(19,"input",13),n.NdJ("ngModelChange",function(s){return e.enseignant.prenom=s}),n.qZA(),n.YNc(20,U,6,2,"div",12),n.qZA(),n.TgZ(21,"div",10)(22,"label"),n._uU(23,"Function:*"),n.qZA(),n.TgZ(24,"select",14),n.NdJ("ngModelChange",function(s){return e.enseignant.fonction=s}),n.TgZ(25,"option",15),n._uU(26,"chef department"),n.qZA(),n.TgZ(27,"option",16),n._uU(28,"responsable module"),n.qZA(),n.TgZ(29,"option",17),n._uU(30,"professeur"),n.qZA(),n.TgZ(31,"option",18),n._uU(32,"surveillant"),n.qZA()(),n.YNc(33,x,5,1,"small",12),n.qZA(),n.TgZ(34,"div",10)(35,"label"),n._uU(36,"HireDate:*"),n.qZA(),n.TgZ(37,"input",19),n.NdJ("ngModelChange",function(s){return e.enseignant.dateembauche=s}),n.qZA(),n.YNc(38,L,5,1,"small",12),n.qZA(),n.TgZ(39,"div",10)(40,"label"),n._uU(41,"department:*"),n.qZA(),n.TgZ(42,"select",20),n.NdJ("change",function(s){return e.getvalue(s)}),n.TgZ(43,"option",21),n._uU(44),n.qZA(),n.YNc(45,N,2,2,"option",22),n.qZA()(),n.TgZ(46,"button",23),n._uU(47),n.qZA()()()()()()()),2&i&&(n.xp6(7),n.hij("",e.action," a professor"),n.xp6(2),n.Q6J("formGroup",e.EnseignantForm),n.xp6(5),n.Q6J("ngModel",e.enseignant.nom),n.xp6(1),n.Q6J("ngIf",!e.EnseignantForm.controls.nom.valid&&e.EnseignantForm.controls.nom.touched),n.xp6(4),n.Q6J("ngModel",e.enseignant.prenom),n.xp6(1),n.Q6J("ngIf",!e.EnseignantForm.controls.prenom.valid&&e.EnseignantForm.controls.prenom.touched),n.xp6(4),n.Q6J("ngModel",e.enseignant.fonction),n.xp6(9),n.Q6J("ngIf",!e.EnseignantForm.controls.fonction.valid&&e.EnseignantForm.controls.fonction.touched),n.xp6(4),n.Q6J("ngModel",e.enseignant.dateembauche),n.xp6(1),n.Q6J("ngIf",!e.EnseignantForm.controls.dateembauche.valid&&e.EnseignantForm.controls.dateembauche.touched),n.xp6(5),n.s9C("value",e.defaultVal),n.xp6(1),n.hij(" ",e.defaultVal," "),n.xp6(1),n.Q6J("ngForOf",e.selectedList),n.xp6(1),n.Q6J("ngClass",n.DdM(15,D)),n.xp6(1),n.hij(" ",e.action," "))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,d.O5,r.EJ,r.YN,r.Kr,d.sg,d.mk],styles:[""]}),t}(),h=l(9966),O=function(){var t=function(){function a(){(0,u.Z)(this,a)}return(0,g.Z)(a,[{key:"transform",value:function(e,o){return 0===e.length||""===o?e:e.filter(function(s){return s.nom.toLowerCase().startsWith(o.toLowerCase())})}}]),a}();return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=n.Yjl({name:"FilterPipeEnseign",type:t,pure:!0}),t}(),k=function(a){return["details",a]},I=function(a){return["modifier",a]};function z(t,a){if(1&t){var i=n.EpF();n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td")(10,"h6"),n._uU(11),n.qZA()(),n.TgZ(12,"td",10),n.O4$(),n.TgZ(13,"svg",14),n._UZ(14,"path",15)(15,"path",16),n.qZA(),n.TgZ(16,"svg",17),n._UZ(17,"path",18)(18,"path",19),n.qZA(),n.TgZ(19,"svg",20),n.NdJ("click",function(){var $=n.CHM(i).$implicit;return n.oxw().delete($)}),n._UZ(20,"path",21)(21,"path",22),n.qZA()()()}if(2&t){var e=a.$implicit,o=n.oxw();n.xp6(2),n.Oqu(e.idenseignant),n.xp6(2),n.Oqu(e.nom),n.xp6(2),n.Oqu(e.prenom),n.xp6(2),n.Oqu(e.dateembauche),n.xp6(1),n.Udp("color",o.getColor(e.fonction)),n.xp6(2),n.Oqu(e.fonction),n.xp6(2),n.Q6J("routerLink",n.VKq(9,k,e.idenseignant)),n.xp6(3),n.Q6J("routerLink",n.VKq(11,I,e.idenseignant))}}var Q=function(){return["btn","btn-sm","btn-color"]},S=function(a,i,e){return{itemsPerPage:a,currentPage:i,totalItems:e}},V=[{path:"",component:E,children:[{path:"",component:function(){var t=function(){function a(i){(0,u.Z)(this,a),this.serviceEnseignant=i,this.page=1,this.count=0,this.tableSize=5,this.tableSizes=[5,10],this.filterTexts=""}return(0,g.Z)(a,[{key:"ngOnInit",value:function(){this.EnseignantsList()}},{key:"EnseignantsList",value:function(){var e=this;this.serviceEnseignant.getAllEnseignant().subscribe(function(o){e.list=o})}},{key:"delete",value:function(e){var o=this;m().fire({title:"vous \xeates s\xfbr?",text:"voulez-vous supprimer cet enseignant!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, Supprimer !"}).then(function(s){if(s.isConfirmed){var c=o.list.indexOf(e);o.serviceEnseignant.deleteEnseignant(e.idenseignant).subscribe(function(){o.list.splice(c,1)}),m().fire("Supprim\xe9!","Enseignant supprim\xe9e avec success.","success")}})}},{key:"onTableDataChange",value:function(e){this.page=e,this.EnseignantsList()}},{key:"OnTableSizeChange",value:function(e){this.tableSize=e.target.value,this.page=1,this.EnseignantsList()}},{key:"getColor",value:function(e){switch(e){case"chefdepartment":return"green";case"responsablemodule":return"gold";case"professeur":return"blue";case"surveillant":return"purple"}}}]),a}();return t.\u0275fac=function(i){return new(i||t)(n.Y36(f.y))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-list-enseignant"]],decls:31,vars:15,consts:[[1,"panel-header","panel-header-sm"],[1,"main-content",2,"margin-top","100px"],[1,"card"],[1,"card-header","d-flex","justify-content-between"],[1,"card-title"],["routerLink","ajouter",2,"background-color","#fa7641",3,"ngClass"],[1,"card-body"],["placeholder","  Search ...","aria-label","Search",1,"form-control","border","p-2","col-md-4","align-right",3,"ngModel","ngModelChange"],[3,"ngClass"],["_ngcontent-neq-c27","",1,"text-primary"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["previousLabel","\ud83e\udc78","nextLabel","\ud83e\udc7a",1,"my-pagination",3,"pageChange"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","#00D100","viewBox","0 0 16 16",1,"bi","bi-info-circle","icon",3,"routerLink"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","#FFDA00","viewBox","0 0 16 16",1,"bi","bi-pencil-square","icon",3,"routerLink"],["d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"],["fill-rule","evenodd","d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","red","viewBox","0 0 16 16",1,"bi","bi-trash","icon",3,"click"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"],["fill-rule","evenodd","d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"]],template:function(i,e){1&i&&(n._UZ(0,"div",0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),n._uU(5,"professors List"),n.qZA(),n.TgZ(6,"button",5),n._uU(7," Add a professor "),n.qZA()(),n.TgZ(8,"div",6)(9,"form")(10,"input",7),n.NdJ("ngModelChange",function(s){return e.filterTexts=s}),n.qZA(),n.TgZ(11,"table",8)(12,"thead",9)(13,"th"),n._uU(14,"ID"),n.qZA(),n.TgZ(15,"th"),n._uU(16,"First Name"),n.qZA(),n.TgZ(17,"th"),n._uU(18,"Last Name"),n.qZA(),n.TgZ(19,"th"),n._uU(20,"HireDate"),n.qZA(),n.TgZ(21,"th"),n._uU(22,"function"),n.qZA(),n.TgZ(23,"th",10),n._uU(24,"action"),n.qZA()(),n.TgZ(25,"tbody"),n.YNc(26,z,22,13,"tr",11),n.ALo(27,"paginate"),n.ALo(28,"FilterPipeEnseign"),n.qZA()(),n.TgZ(29,"div",12)(30,"pagination-controls",13),n.NdJ("pageChange",function(s){return e.onTableDataChange(s)}),n.qZA()()()()()()),2&i&&(n.xp6(6),n.Q6J("ngClass",n.DdM(10,Q)),n.xp6(4),n.Q6J("ngModel",e.filterTexts),n.xp6(1),n.Q6J("ngClass","table"),n.xp6(15),n.Q6J("ngForOf",n.xi3(27,4,n.xi3(28,7,e.list,e.filterTexts),n.kEZ(11,S,e.tableSize,e.page,e.count))))},directives:[p.rH,d.mk,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,d.sg,h.LS],pipes:[h._s,O],styles:[".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background:red;padding-right:10px;padding-left:10px;border-radius:20px}"]}),t}()},{path:"modifier/:idenseignant",component:_},{path:"ajouter",component:_},{path:"details/:idenseignant",component:C}]}],B=function(){var t=(0,g.Z)(function a(){(0,u.Z)(this,a)});return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.Bz.forChild(V)],p.Bz]}),t}(),j=function(){var t=(0,g.Z)(function a(){(0,u.Z)(this,a)});return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,B,r.u5,r.UX,h.JX]]}),t}()}}]);