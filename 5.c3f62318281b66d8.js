"use strict";(self.webpackChunksama=self.webpackChunksama||[]).push([[5,462,521,15],{2005:(v,f,o)=>{o.d(f,{Q:()=>p});var a=o(6026);class c{constructor(){this.store={}}static getInstance(){return c.instance||(c.instance=new c),c.instance}set(d,t){this.store[d]=t}get(d){return this.store[d]}has(d){const t=this.get(d);return!(!t&&0!=t&&""!=t)}remove(d){delete this.store[d]}}const g=c.getInstance();var e=o(9291),k=o(3052),r=o(9862);let n=(()=>{class i{constructor(t){this.http=t,this.baseUrl=k.N.baseUrl}register(t){return this.http.post(`${this.baseUrl}v1/register`,t)}login(t){return this.http.post(`${this.baseUrl}v1/login`,t)}sendCode(t){return this.http.post(`${this.baseUrl}v1/send-code`,t)}verify(t){return this.http.post(`${this.baseUrl}verify`,t)}resendCode(t){return this.http.post(`${this.baseUrl}resend-code`,t)}verifyPasswordCode(t){return this.http.post(`${this.baseUrl}verify-code`,t)}resetPassword(t){return this.http.post(`${this.baseUrl}reset-password`,t)}static#t=this.\u0275fac=function(s){return new(s||i)(e.LFG(r.eN))};static#e=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var h=o(7699),u=o(9376),l=o(9068);let p=(()=>{class i{constructor(t,s,m,U){this.endPoint=t,this.authState=s,this.toaster=m,this.router=U}register(t){this.endPoint.register(t).subscribe({next:s=>{if(![200].includes(s.status))return this.toaster.error(s.msg);g.set("otpType","email"),this.toaster.success(s.msg),this.router.navigate([a.VP.auth.register,{email:t.email}])},error:s=>{this.toaster.error(s)}})}login(t){this.endPoint.login(t).subscribe({next:s=>{if(console.log(s),![200].includes(s.status))return this.toaster.error(s.msg);this.toaster.success(s.msg),this.router.navigate([a.VP.home])},error:s=>{this.toaster.error(s)}})}forgetPassword(t){this.endPoint.sendCode(t).subscribe({next:()=>{this.router.navigate([a.VP.auth.confirm,{key:t.key}])}})}static#t=this.\u0275fac=function(s){return new(s||i)(e.LFG(n),e.LFG(h.V),e.LFG(u.M),e.LFG(l.F0))};static#e=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},7699:(v,f,o)=>{o.d(f,{V:()=>g});var a=o(9291);let c=(()=>{class e{constructor(){}get(r){const n=document.cookie.split("; ");for(const h of n){const[u,l]=h.split("=");if(u===r)return JSON.parse(l)}return!1}set(r,n,h=7){const u=new Date;u.setDate(u.getDate()+h);const l=`${r}=${JSON.stringify(n)}; expires=${u.toUTCString()}; path=/; secure`;document.cookie=l}delete(r){const h=`${r}=; expires=${new Date(0).toUTCString()}; path=/`;document.cookie=h}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),g=(()=>{class e{constructor(r){this.cookie=r,this.isLoggedIn=(0,a.tdS)(!0),this.detectUserState()}logout(){this.cookie.delete("auth_token"),this.detectUserState()}detectUserState(){const r=!!this.cookie.get("auth_token");this.isLoggedIn.update(()=>r),r&&(this.user=this.cookie.get("user"))}login(r){localStorage.setItem("auth_token",JSON.stringify(r)),this.cookie.set("user",r,15),this.detectUserState()}static#t=this.\u0275fac=function(n){return new(n||e)(a.LFG(c))};static#e=this.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);