"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[592],{2005:(p,f,n)=>{n.d(f,{Q:()=>m});var u=n(6026);class c{constructor(){this.store={}}static getInstance(){return c.instance||(c.instance=new c),c.instance}set(d,t){this.store[d]=t}get(d){return this.store[d]}has(d){const t=this.get(d);return!(!t&&0!=t&&""!=t)}remove(d){delete this.store[d]}}const g=c.getInstance();var e=n(9291),a=n(3052),i=n(9862);let s=(()=>{class h{constructor(t){this.http=t,this.baseUrl=a.N.baseUrl}register(t){return this.http.post(`${this.baseUrl}v1/register`,t)}login(t){return this.http.post(`${this.baseUrl}v1/login`,t)}sendCode(t){return this.http.post(`${this.baseUrl}v1/send-code`,t)}verify(t){return this.http.post(`${this.baseUrl}verify`,t)}resendCode(t){return this.http.post(`${this.baseUrl}resend-code`,t)}verifyPasswordCode(t){return this.http.post(`${this.baseUrl}verify-code`,t)}resetPassword(t){return this.http.post(`${this.baseUrl}reset-password`,t)}static#t=this.\u0275fac=function(r){return new(r||h)(e.LFG(i.eN))};static#e=this.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})();var o=n(7699),l=n(9376),v=n(57);let m=(()=>{class h{constructor(t,r,k,y){this.endPoint=t,this.authState=r,this.toaster=k,this.router=y}register(t){this.endPoint.register(t).subscribe({next:r=>{if(![200].includes(r.status))return this.toaster.error(r.msg);g.set("otpType","email"),this.toaster.success(r.msg),this.router.navigate([u.VP.auth.register,{email:t.email}])},error:r=>{this.toaster.error(r)}})}login(t){this.endPoint.login(t).subscribe({next:r=>{if(console.log(r),![200].includes(r.status))return this.toaster.error(r.msg);this.toaster.success(r.msg),this.router.navigate([u.VP.home])},error:r=>{this.toaster.error(r)}})}forgetPassword(t){this.endPoint.sendCode(t).subscribe({next:()=>{this.router.navigate([u.VP.auth.confirm,{key:t.key}])}})}static#t=this.\u0275fac=function(r){return new(r||h)(e.LFG(s),e.LFG(o.V),e.LFG(l.M),e.LFG(v.F0))};static#e=this.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},7699:(p,f,n)=>{n.d(f,{V:()=>g});var u=n(9291);let c=(()=>{class e{constructor(){}get(i){const s=document.cookie.split("; ");for(const o of s){const[l,v]=o.split("=");if(l===i)return JSON.parse(v)}return!1}set(i,s,o=7){const l=new Date;l.setDate(l.getDate()+o);const v=`${i}=${JSON.stringify(s)}; expires=${l.toUTCString()}; path=/; secure`;document.cookie=v}delete(i){const o=`${i}=; expires=${new Date(0).toUTCString()}; path=/`;document.cookie=o}static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),g=(()=>{class e{constructor(i){this.cookie=i,this.isLoggedIn=(0,u.tdS)(!0),this.detectUserState()}logout(){this.cookie.delete("auth_token"),this.detectUserState()}detectUserState(){const i=!!this.cookie.get("auth_token");this.isLoggedIn.update(()=>i),i&&(this.user=this.cookie.get("user"))}login(i){localStorage.setItem("auth_token",JSON.stringify(i)),this.cookie.set("user",i,15),this.detectUserState()}static#t=this.\u0275fac=function(s){return new(s||e)(u.LFG(c))};static#e=this.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},5524:(p,f,n)=>{n.d(f,{$:()=>e});var u=n(6814),c=n(9291);let g=(()=>{class a{constructor(){this.state=!1,this.closedEvent=s=>{const o=s.target.closest(".ng-menu");console.log("event"),o||this.close()}}open(){this.state=!0,setTimeout(()=>{document.addEventListener("click",this.closedEvent)},1)}close(){this.state=!1,document.removeEventListener("click",this.closedEvent)}toggle(s){const o=s.target;this.setMenu(o.getClientRects(),o.clientHeight),this.state?this.close():this.open()}setMenu(s,o){console.log(s[0]),this.menuEl.style.top=`${s[0].top+o+2}px`,this.menuEl.style.left=`${s[0].left}px`,this.menuEl.style.transform=`translateX(-${s[0].width}px)`}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac})}return a})(),e=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=c.oAB({type:a});static#s=this.\u0275inj=c.cJS({providers:[g],imports:[u.ez]})}return a})()}}]);