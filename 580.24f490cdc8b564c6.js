"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[580],{4580:(f,g,o)=>{o.r(g),o.d(g,{FavoriteComponent:()=>s});var d=o(6814),l=o(3838),n=o(9291),t=o(3052),p=o(7398),m=o(4069),_=o(9862);let a=(()=>{class e{constructor(c){this.http=c,this.baseUrl=t.N.baseUrl}getFavouriteList(){return this.http.get(`${this.baseUrl}v1/listFavourites`).pipe((0,p.U)(c=>c.data.map(r=>new m.Z(r))))}addFavouriteItem(c){return this.http.get(`${this.baseUrl}/v1/favouriteAction/${c}`)}static#t=this.\u0275fac=function(r){return new(r||e)(n.LFG(_.eN))};static#n=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function C(e,i){if(1&e&&(n.TgZ(0,"div",2)(1,"div"),n._UZ(2,"app-card",3),n.qZA()()),2&e){const c=i.$implicit;n.xp6(2),n.Q6J("card",c)}}let s=(()=>{class e{constructor(c){this.favouriteService=c,c.getFavouriteList().subscribe(r=>{this.items=r})}static#t=this.\u0275fac=function(r){return new(r||e)(n.Y36(a))};static#n=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-favorite"]],standalone:!0,features:[n.jDz],decls:2,vars:1,consts:[[1,"row"],["class","col-lg-4 col-2",4,"ngFor","ngForOf"],[1,"col-lg-4","col-2"],[3,"card"]],template:function(r,h){1&r&&(n.TgZ(0,"div",0),n.YNc(1,C,3,1,"div",1),n.qZA()),2&r&&(n.xp6(1),n.Q6J("ngForOf",h.items))},dependencies:[d.ez,d.sg,l.A],styles:["[_nghost-%COMP%]{width:100%}"]})}return e})()},3838:(f,g,o)=>{o.d(g,{A:()=>_});var d=o(6814),l=o(2669),n=o(3911),t=o(9291),p=o(9907);function m(a,C){if(1&a&&(t.TgZ(0,"span",18),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const s=t.oxw();t.xp6(1),t.AsE("",s.card.price_before," ",t.lcZ(2,2,"home.currency"),"")}}let _=(()=>{class a{constructor(s){this.lang=s}Number(s){return Number(s)}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(p.C))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-card"]],inputs:{card:"card"},standalone:!0,features:[t.jDz],decls:29,vars:22,consts:[["bindingLayout","",1,"card"],[1,"header"],[1,"img-container"],["alt","card-image",1,"img-cover",3,"src"],[1,"sticky-content"],[1,"d-flex","gap-1"],[1,"sales"],[1,"sales","text-white","bg-primary"],[1,"favorite"],["width","14","height","14","viewBox","0 0 13 13","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.90189 6.23274C0.224104 3.99921 1.01622 1.4463 3.23782 0.690899C4.40642 0.292862 5.69632 0.52755 6.66783 1.29896C7.58692 0.548886 8.92417 0.295529 10.0915 0.690899C12.3131 1.4463 13.1103 3.99921 12.4331 6.23274C11.3782 9.77308 6.66783 12.5 6.66783 12.5C6.66783 12.5 1.99216 9.81441 0.90189 6.23274Z"],[1,"content","grid-sm","mt-1"],[1,"d-flex","align-items-center","justify-content-between"],[1,"cost","d-flex","gap-md-2","gap-1"],["class","text-special price del",4,"ngIf"],[1,"text","price"],[1,"more-info"],[1,"chip"],[1,"text-special","price","del"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"div",7),t._uU(10),t.ALo(11,"translate"),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"div",8),t.O4$(),t.TgZ(14,"svg",9),t._UZ(15,"path",10),t.qZA()()()(),t.kcU(),t.TgZ(16,"div",11)(17,"h4"),t._uU(18),t.qZA(),t.TgZ(19,"div",12)(20,"div",13),t.YNc(21,m,3,4,"span",14),t.TgZ(22,"span",15),t._uU(23),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"div",16)(26,"div",17),t._uU(27),t.ALo(28,"translate"),t.qZA()()()()()),2&e&&(t.xp6(3),t.Q6J("src",i.card.image,t.LSH),t.xp6(4),t.AsE(" ",t.lcZ(8,12,"card.sale")," ",i.card.getDiscount().toFixed(1)," %"),t.xp6(3),t.AsE(" ",i.card.num_of_nights," ",i.Number(i.card.num_of_days)>10?t.lcZ(11,14,"card.night"):t.lcZ(12,16,"card.nights")," "),t.xp6(5),t.uIk("fill",i.card.is_favourite?"red":" transparent")("stroke",i.card.is_favourite?"red":"black"),t.xp6(3),t.Oqu(i.lang.isEn()?i.card.name_en:i.card.name_ar),t.xp6(3),t.Q6J("ngIf",i.card.price_before),t.xp6(2),t.AsE("",i.card.price_before?i.card.price_after:i.card.price_before," ",t.lcZ(24,18,"home.currency"),""),t.xp6(4),t.hij(" ",t.lcZ(28,20,"home.moreInfo")," "))},dependencies:[d.ez,d.O5,l.A,n.aw,n.X$],styles:['.header[_ngcontent-%COMP%]{position:relative}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{aspect-ratio:10/8;border-radius:5px;overflow:hidden;max-width:400px}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.5s}.header[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]{position:absolute;padding:0 5px;z-index:9;top:8px;width:100%;left:0;right:0;display:flex;justify-content:space-between}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]{background-color:rgb(var(--accent));padding:7px 12px;border-radius:6px;font-size:13px;font-weight:600;color:#fff}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{margin:auto 5px;background-color:#fff;border-radius:100%;width:25px;height:25px;display:flex;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .sticky-content[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:auto}.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:rgb(var(--text-color));font-size:15px;font-weight:600;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:2em;overflow:hidden;text-overflow:ellipsis}.content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]{font-size:15px}.content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .text-light-1[_ngcontent-%COMP%]{font-weight:100}.del[_ngcontent-%COMP%]{position:relative}.del[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:1px;background-color:red}.more-info[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]{font-size:12px;padding:4px 6px;border-radius:4px;border:1px solid rgba(var(--text-color),.5)}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{aspect-ratio:10/6}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .short-desc[_ngcontent-%COMP%]{font-size:14px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:12px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text-light-1[_ngcontent-%COMP%]{font-size:12px}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]{position:relative}[_ngcontent-%COMP%]:where(.mobile-mode, .tablet-mode)[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]:after{inset:-2px 0 0}']})}return a})()}}]);