"use strict";(self.webpackChunkviencongnghedemo=self.webpackChunkviencongnghedemo||[]).push([[275],{8275:(A,l,r)=>{r.r(l),r.d(l,{AuthModule:()=>v});var m=r(6733),s=r(4825),t=r(755);const c=["root",""];let d=(()=>{class o{constructor(){this.today=new Date}ngOnInit(){document.body.classList.add("bg-white")}ngOnDestroy(){document.body.classList.remove("bg-white")}static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["body","root",""]],attrs:c,decls:12,vars:0,consts:[[1,"d-flex","flex-column","flex-column-fluid","bgi-position-y-bottom","position-x-center","bgi-no-repeat","bgi-size-contain","bgi-attachment-fixed",2,"background-image","url('/assets/media/illustrations/sigma-1/14.png')"],[1,"d-flex","flex-center","flex-column","flex-column-fluid","p-10","pb-lg-20"],["routerLink","/",1,"mb-12"],["alt","Logo","src","/assets/logo.png",1,"h-100px"],[1,"w-lg-500px","bg-white","rounded","shadow-sm","p-10","p-lg-15","mx-auto"],[1,"d-flex","flex-center","flex-column-auto","p-10"],[1,"d-flex","align-items-center","fw-bold","fs-6"],[1,"text-muted","text-hover-primary","px-2","cursor-pointer"]],template:function(n,u){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"router-outlet"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"a",7),t._uU(9,"Gi\u1edbi thi\u1ec7u"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Li\xean h\u1ec7"),t.qZA()()()())},dependencies:[s.lC,s.rH]})}return o})();var e=r(2133),h=r(5548),f=r(7072);const p=[{path:"",component:d,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class o{constructor(i,n,u,a){this.fb=i,this.authService=n,this.route=u,this.router=a,this.unsubscribe=[]}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}initForm(){this.loginForm=this.fb.group({username:new e.NI("",e.kI.required),password:new e.NI("",e.kI.required)})}submit(){if(this.loginForm.valid){let i=this.loginForm.value;this.authService.login(i.username,i.password)}else(0,h.FZ)("Nh\u1eadp t\xe0i kho\u1ea3n v\xe0 m\u1eadt kh\u1ea9u")}ngOnDestroy(){this.unsubscribe.forEach(i=>i.unsubscribe())}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(e.qu),t.Y36(f.e),t.Y36(s.gz),t.Y36(s.F0))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:20,vars:4,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","submit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"fv-row","mb-10"],[1,"form-label","fs-6","fw-bolder","text-dark"],["placeholder","Nh\u1eadp t\xe0i kho\u1ea3n","type","text","formControlName","username","autocomplete","off",1,"form-control","form-control-lg","form-control-solid"],[1,"d-flex","justify-content-between","mt-n5"],[1,"d-flex","flex-stack","mb-2"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["routerLink","/auth/forgot-password","id","kt_login_forgot",1,"link-primary","fs-6","fw-bolder",2,"display","none"],["type","password","placeholder","Nh\u1eadp m\u1eadt kh\u1ea9u","autocomplete","off","formControlName","password",1,"form-control","form-control-lg","form-control-solid"],[1,"text-center"],["type","submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],[1,"indicator-label"]],template:function(n,u){1&n&&(t.TgZ(0,"form",0),t.NdJ("submit",function(){return u.submit()}),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3,"\u0110\u0103ng nh\u1eadp Qu\u1ea3n tr\u1ecb Poker Tu\u1ea5n"),t.qZA()(),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"T\xe0i kho\u1ea3n"),t.qZA(),t._UZ(7,"input",5),t.qZA(),t.TgZ(8,"div",3)(9,"div",6)(10,"div",7)(11,"label",8),t._uU(12,"M\u1eadt kh\u1ea9u"),t.qZA(),t.TgZ(13,"a",9),t._uU(14," Qu\xean m\u1eadt kh\u1ea9u ? "),t.qZA()()(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",11)(17,"button",12)(18,"span",13),t._uU(19,"\u0110\u0103ng nh\u1eadp"),t.qZA()()()()),2&n&&(t.Q6J("formGroup",u.loginForm),t.xp6(13),t.Udp("margin-left","5px"),t.xp6(4),t.Q6J("disabled",u.loginForm.invalid))},dependencies:[s.rH,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return o})(),data:{returnUrl:window.location.pathname}},{path:"",redirectTo:"login",pathMatch:"full"}]},{path:"**",redirectTo:"login",pathMatch:"full"}];let g=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(p),s.Bz]})}return o})();var b=r(2939);let v=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[m.ez,g,e.u5,e.UX,b.JF]})}return o})()}}]);