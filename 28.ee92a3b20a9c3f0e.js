"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[28],{28:(v,g,s)=>{s.r(g),s.d(g,{NavbarComponent:()=>k});var i=s(6814),p=s(9068),u=s(3911),c=s(5431),m=s(6026),t=s(9291),l=s(9907),r=s(7699),d=s(3959),f=s(6197);function _(n,h){if(1&n&&(t.TgZ(0,"div",2),t.Hsn(1),t.qZA()),2&n){const e=t.oxw();t.Q6J("ngStyle",e.style)}}const b=[[["ng-menu-item"]]],C=["ng-menu-item"];let M=(()=>{class n{set useDefaultElementStyle(e){this.controller.useDefaultElementStyle=e}constructor(e,a){this.controller=e,this.el=a}ngAfterViewInit(){this.controller.menuEl=this.el.nativeElement.querySelector(".ng-menu-overlay")}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(f.K),t.Y36(t.SBq))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["ng-menu"]],inputs:{useDefaultElementStyle:"useDefaultElementStyle",style:"style"},features:[t._Bn([f.K])],ngContentSelectors:C,decls:2,vars:1,consts:[[1,"ng-menu-overlay"],["class","ng-menu",3,"ngStyle",4,"ngIf"],[1,"ng-menu",3,"ngStyle"]],template:function(a,o){1&a&&(t.F$t(b),t.TgZ(0,"div",0),t.YNc(1,_,2,1,"div",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngIf",o.controller.state))},dependencies:[i.O5,i.PC],styles:[".ng-menu-overlay[_ngcontent-%COMP%]{position:absolute;z-index:999}.ng-menu-overlay[_ngcontent-%COMP%]   .ng-menu[_ngcontent-%COMP%]{border-radius:5px;display:flex;flex-direction:column;min-width:100px;box-shadow:0 0 5px #0003,0 0 5px #0003;max-height:250px;overflow:auto;background-color:#fff}"]})}return n})();const Z=["*"];let O=(()=>{class n{constructor(e){this.controller=e}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(f.K))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["ng-menu-item"]],ngContentSelectors:Z,decls:2,vars:2,consts:[[3,"click"]],template:function(a,o){1&a&&(t.F$t(),t.TgZ(0,"li",0),t.NdJ("click",function(){return o.controller.close()}),t.Hsn(1),t.qZA()),2&a&&t.ekj("menu-item",o.controller.useDefaultElementStyle)},styles:["li.menu-item[_ngcontent-%COMP%]{transition:.5s;padding:10px;color:var(--text-color);cursor:pointer;width:inherit;display:block;text-wrap:nowrap}li.menu-item[_ngcontent-%COMP%]:hover{background-color:rgb(var(--bg-offset))}"]})}return n})();function P(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.lang.changeLanguage("en"))}),t.TgZ(1,"span",18),t._uU(2,"English"),t.qZA(),t.TgZ(3,"span",19),t._uU(4,"|"),t.qZA(),t.TgZ(5,"span",20),t._uU(6,"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"),t.qZA()()}}function y(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.lang.changeLanguage("ar"))}),t.TgZ(1,"span",20),t._uU(2,"English"),t.qZA(),t.TgZ(3,"span",19),t._uU(4,"|"),t.qZA(),t.TgZ(5,"span",18),t._uU(6,"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"),t.qZA()()}}function A(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"a",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.authViewController.login())}),t.TgZ(1,"button",22),t._uU(2),t.ALo(3,"translate"),t.qZA()()}2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"auth.loginRegister")))}function E(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"a",21,23),t.NdJ("click",function(){t.CHM(e);const o=t.MAs(1);t.oxw();const x=t.MAs(33);return t.KtG(x.controller.toggle(o))}),t._UZ(2,"img",24),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",null==e.auth.user?null:e.auth.user.image,t.LSH)}}const T=function(){return{"border-radius":"3px",padding:"14px 5px"}};let k=(()=>{class n{constructor(e,a,o){this.lang=e,this.auth=a,this.authViewController=o,this.appRoutes=m.VP}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(l.C),t.Y36(r.V),t.Y36(d.w))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["navbar"]],standalone:!0,features:[t.jDz],decls:54,vars:37,consts:[[1,"container-fluid","h-100"],[1,"d-flex","align-items-center","gap-3"],[1,"px-4",3,"routerLink"],["src","assets/images/icon/sama-logo.svg","alt","sama"],[1,"d-flex","align-items-center","gap-4"],[3,"routerLink"],[1,"app-btn","app-btn-accent",2,"padding","0.8em 1.5em 0.6em",3,"routerLink"],[1,"lang-select","pointer"],["class","d-flex align-items-center",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"useDefaultElementStyle"],["menu",""],["routerLink",""],["src","../../../../assets/images/svg/profile.svg","alt","profile","width","22","height","22"],["src","../../../../assets/images/svg/save.svg","alt","profile","width","22","height","22"],["src","../../../../assets/images/svg/save-offer.svg","alt","profile","width","22","height","22"],["src","../../../../assets/images/svg/heart.svg","alt","profile","width","22","height","22"],[1,"d-flex","align-items-center",3,"click"],[1,"text"],[1,"vertical-line","text-offset"],[1,"fw-bold","text-offset"],[3,"click"],[1,"app-btn","app-btn-primary","login-btn"],["trigger",""],["width","34","height","34",3,"src"]],template:function(a,o){1&a&&(t.TgZ(0,"nav")(1,"div",0)(2,"ul")(3,"div",1)(4,"li")(5,"a",2),t._UZ(6,"img",3),t.qZA()(),t.TgZ(7,"div",4)(8,"li")(9,"a",5),t._uU(10),t.ALo(11,"translate"),t.qZA()(),t.TgZ(12,"li")(13,"a",5),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"li")(17,"a",5),t._uU(18),t.ALo(19,"translate"),t.qZA()(),t.TgZ(20,"li")(21,"a",6),t._uU(22),t.ALo(23,"translate"),t.qZA()()()(),t.TgZ(24,"div",1)(25,"li")(26,"div",7),t.YNc(27,P,7,0,"button",8),t.YNc(28,y,7,0,"button",8),t.qZA()(),t.TgZ(29,"li"),t.YNc(30,A,4,3,"a",9),t.YNc(31,E,3,1,"a",9),t.TgZ(32,"ng-menu",10,11)(34,"ng-menu-item")(35,"a",12),t._UZ(36,"img",13),t._uU(37),t.ALo(38,"translate"),t.qZA()(),t.TgZ(39,"ng-menu-item")(40,"a",12),t._UZ(41,"img",14),t._uU(42),t.ALo(43,"translate"),t.qZA()(),t.TgZ(44,"ng-menu-item")(45,"a",12),t._UZ(46,"img",15),t._uU(47),t.ALo(48,"translate"),t.qZA()(),t.TgZ(49,"ng-menu-item")(50,"a",12),t._UZ(51,"img",16),t._uU(52),t.ALo(53,"translate"),t.qZA()()()()()()()()),2&a&&(t.xp6(5),t.Q6J("routerLink",o.appRoutes.home),t.xp6(4),t.Q6J("routerLink",o.appRoutes.home),t.xp6(1),t.Oqu(t.lcZ(11,20,"screen.home")),t.xp6(3),t.Q6J("routerLink",o.appRoutes.offers),t.xp6(1),t.Oqu(t.lcZ(15,22,"screen.travalPackages")),t.xp6(3),t.Q6J("routerLink",o.appRoutes.aboutUs),t.xp6(1),t.Oqu(t.lcZ(19,24,"screen.aboutUs")),t.xp6(3),t.Q6J("routerLink",o.appRoutes.joinUs),t.xp6(1),t.Oqu(t.lcZ(23,26,"screen.joinUs")),t.xp6(5),t.Q6J("ngIf",o.lang.isAr()),t.xp6(1),t.Q6J("ngIf",o.lang.isEn()),t.xp6(2),t.Q6J("ngIf",!o.auth.isLoggedIn()),t.xp6(1),t.Q6J("ngIf",o.auth.isLoggedIn()),t.xp6(1),t.Akn(t.DdM(36,T)),t.Q6J("useDefaultElementStyle",!1),t.xp6(5),t.hij(" ",t.lcZ(38,28,"userAccount.profile")," "),t.xp6(5),t.hij(" ",t.lcZ(43,30,"userAccount.reservation")," "),t.xp6(5),t.hij(" ",t.lcZ(48,32,"userAccount.offerBooking")," "),t.xp6(5),t.hij(" ",t.lcZ(53,34,"userAccount.favourites")," "))},dependencies:[i.ez,i.O5,p.Bz,p.rH,c.$,M,O,u.aw,u.X$],styles:[".app-btn[_ngcontent-%COMP%]{background-color:transparent;transition:.5s;cursor:pointer;border:none;outline:none;padding:.8em 1.5em;border-radius:1em}.app-btn-primary[_ngcontent-%COMP%]{background-color:rgb(var(--primary));color:#fff}.app-btn-primary[_ngcontent-%COMP%]:focus, .app-btn-primary[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--primary),.4)}.app-btn-accent[_ngcontent-%COMP%]{background-color:rgb(var(--accent));color:#fff!important}.app-btn-accent[_ngcontent-%COMP%]:focus, .app-btn-accent[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--accent),.4)}.app-btn-offset-outline[_ngcontent-%COMP%]{color:rgb(var(text));border:1px solid rgb(var(--bg-offset))}.app-btn-offset-outline[_ngcontent-%COMP%]:focus, .app-btn-offset-outline[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--bg-offset),.5)}.app-btn-white[_ngcontent-%COMP%]{background-color:#fff;color:rgb(var(--text-color-offset))}.app-btn-white[_ngcontent-%COMP%]:focus, .app-btn-white[_ngcontent-%COMP%]:hover{box-shadow:0 4px 32px 0 rgba(var(--text-color-offset),.1)}nav[_ngcontent-%COMP%]{height:60px;background-color:#fff;position:sticky;z-index:9999;box-shadow:0 0 30px #00000017;top:0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:100%}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-transform:capitalize;font-size:16px}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:rgb(var(--text-color))}.login-btn[_ngcontent-%COMP%]{font-size:16px;border-radius:16px;padding:10px 25px}.linkable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:20px;cursor:pointer}.linkable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;object-fit:contain}.lang-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;background-color:transparent;border:none;outline:none;color:rgb(var(--primary));font-size:14px}.vertical-line[_ngcontent-%COMP%]{font-weight:700;margin:auto 5px}.text-offset[_ngcontent-%COMP%]{color:#858585}ng-menu-item[_ngcontent-%COMP%]{padding:8px 5px;cursor:pointer;width:150px;font-size:13px;font-weight:500}ng-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}ng-menu-item[_ngcontent-%COMP%]:hover{background-color:rgba(var(--primary),.9);color:#fff}"]})}return n})()},5431:(v,g,s)=>{s.d(g,{$:()=>c});var i=s(6814),p=s(6197),u=s(9291);let c=(()=>{class m{static#t=this.\u0275fac=function(r){return new(r||m)};static#n=this.\u0275mod=u.oAB({type:m});static#e=this.\u0275inj=u.cJS({providers:[p.K],imports:[i.ez]})}return m})()},6197:(v,g,s)=>{s.d(g,{K:()=>u});var i=s(9291),p=s(9907);let u=(()=>{class c{constructor(t){this.lang=t,this.state=!1,this.useDefaultElementStyle=!0,this.closedEvent=l=>{const r=l.target.closest(".ng-menu");console.log("event"),r||this.close()}}open(){this.state=!0,setTimeout(()=>{document.addEventListener("click",this.closedEvent)},1)}close(){this.state=!1,document.removeEventListener("click",this.closedEvent)}toggle(t){this.state?this.close():this.open(),this.setMenu(t)}setMenu(t){const{bottom:l,width:r,right:d}=t.getBoundingClientRect();let f=0;if(f=Math.max(r,t.offsetLeft),this.menuEl.style.top=`${l}px`,this.lang.isAr()&&(this.menuEl.style.right="unset",this.menuEl.style.left=`${f}px`,this.menuEl.style.transform=`translateX(-${r/2}px)`),this.lang.isEn()){const _=document.documentElement.clientWidth-d;this.menuEl.style.left="unset",this.menuEl.style.right=`${Math.max(_+r,_)}px`,this.menuEl.style.transform=`translateX(${r/2}px)`}}static#t=this.\u0275fac=function(l){return new(l||c)(i.LFG(p.C))};static#n=this.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac})}return c})()}}]);