var Yg=Object.defineProperty;var _d=s=>{throw TypeError(s)};var jg=(s,t,e)=>t in s?Yg(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var di=(s,t,e)=>jg(s,typeof t!="symbol"?t+"":t,e),qc=(s,t,e)=>t.has(s)||_d("Cannot "+e);var et=(s,t,e)=>(qc(s,t,"read from private field"),e?e.call(s):t.get(s)),ue=(s,t,e)=>t.has(s)?_d("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),se=(s,t,e,n)=>(qc(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),ln=(s,t,e)=>(qc(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const xn=2,$l=4,ka=8,sm=1<<24,Ls=16,Ei=32,Lr=64,Zu=128,si=512,un=1024,Rn=2048,Is=4096,Wn=8192,bs=16384,cc=32768,So=65536,gd=1<<17,rm=1<<18,Fo=1<<19,om=1<<20,vs=1<<25,Rr=32768,Ih=1<<21,qu=1<<22,js=1<<23,Er=Symbol("$state"),am=Symbol("legacy props"),Kg=Symbol(""),ro=new class extends Error{constructor(){super(...arguments);di(this,"name","StaleReactionError");di(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},lm=3,Bo=8,Dh=!1;var Yu=Array.isArray,Jg=Array.prototype.indexOf,bo=Array.prototype.includes,hc=Array.from,cm=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,hm=Object.getOwnPropertyDescriptors,$g=Object.prototype,Qg=Array.prototype,ju=Object.getPrototypeOf,vd=Object.isExtensible;function tv(s){return s()}function Nh(s){for(var t=0;t<s.length;t++)s[t]()}function um(){var s,t,e=new Promise((n,r)=>{s=n,t=r});return{promise:e,resolve:s,reject:t}}function fm(s){return s===this.v}function ev(s,t){return s!=s?t==t:s!==t||s!==null&&typeof s=="object"||typeof s=="function"}function dm(s){return!ev(s,this.v)}function Ku(s){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nv(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function iv(s){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sv(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rv(s){throw new Error("https://svelte.dev/e/effect_orphan")}function ov(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function av(){throw new Error("https://svelte.dev/e/hydration_failed")}function lv(s){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function cv(s){throw new Error("https://svelte.dev/e/props_invalid_value")}function hv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function uv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function dv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let ko=!1,pv=!1;function mv(){ko=!0}const _v=1,gv=2,pm=4,vv=8,xv=16,yv=2,Mv=8,Sv=2,mm="[",uc="[!",Ju="]",To={},pn=Symbol(),bv="http://www.w3.org/1999/xhtml";let ze=null;function Eo(s){ze=s}function zo(s,t=!1,e){ze={p:ze,i:!1,c:null,e:null,s,x:null,l:ko&&!t?{s:null,u:null,$:[]}:null}}function Vo(s){var t=ze,e=t.e;if(e!==null){t.e=null;for(var n of e)Xm(n)}return s!==void 0&&(t.x=s),t.i=!0,ze=t.p,s??{}}function za(){return!ko||ze!==null&&ze.l===null}let pr=[];function _m(){var s=pr;pr=[],Nh(s)}function Ts(s){if(pr.length===0&&!xa){var t=pr;queueMicrotask(()=>{t===pr&&_m()})}pr.push(s)}function Tv(){for(;pr.length>0;)_m()}function fc(s){console.warn("https://svelte.dev/e/hydration_mismatch")}function Ev(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ne=!1;function xs(s){Ne=s}let ke;function Xn(s){if(s===null)throw fc(),To;return ke=s}function dc(){return Xn(Ds(ke))}function hn(s){if(Ne){if(Ds(ke)!==null)throw fc(),To;ke=s}}function wv(s=1){if(Ne){for(var t=s,e=ke;t--;)e=Ds(e);ke=e}}function Ql(s=!0){for(var t=0,e=ke;;){if(e.nodeType===Bo){var n=e.data;if(n===Ju){if(t===0)return e;t-=1}else(n===mm||n===uc)&&(t+=1)}var r=Ds(e);s&&e.remove(),e=r}}function gm(s){if(!s||s.nodeType!==Bo)throw fc(),To;return s.data}function oo(s){if(typeof s!="object"||s===null||Er in s)return s;const t=ju(s);if(t!==$g&&t!==Qg)return s;var e=new Map,n=Yu(s),r=Os(0),o=wr,l=c=>{if(wr===o)return c();var u=me,f=wr;oi(null),Sd(o);var d=c();return oi(u),Sd(f),d};return n&&e.set("length",Os(s.length)),new Proxy(s,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&hv();var d=e.get(u);return d===void 0?d=l(()=>{var p=Os(f.value);return e.set(u,p),p}):Xe(d,f.value,!0),!0},deleteProperty(c,u){var f=e.get(u);if(f===void 0){if(u in c){const d=l(()=>Os(pn));e.set(u,d),ya(r)}}else Xe(f,pn),ya(r);return!0},get(c,u,f){var v;if(u===Er)return s;var d=e.get(u),p=u in c;if(d===void 0&&(!p||(v=lo(c,u))!=null&&v.writable)&&(d=l(()=>{var M=oo(p?c[u]:pn),S=Os(M);return S}),e.set(u,d)),d!==void 0){var _=Me(d);return _===pn?void 0:_}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var d=e.get(u);d&&(f.value=Me(d))}else if(f===void 0){var p=e.get(u),_=p==null?void 0:p.v;if(p!==void 0&&_!==pn)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return f},has(c,u){var _;if(u===Er)return!0;var f=e.get(u),d=f!==void 0&&f.v!==pn||Reflect.has(c,u);if(f!==void 0||Te!==null&&(!d||(_=lo(c,u))!=null&&_.writable)){f===void 0&&(f=l(()=>{var v=d?oo(c[u]):pn,M=Os(v);return M}),e.set(u,f));var p=Me(f);if(p===pn)return!1}return d},set(c,u,f,d){var A;var p=e.get(u),_=u in c;if(n&&u==="length")for(var v=f;v<p.v;v+=1){var M=e.get(v+"");M!==void 0?Xe(M,pn):v in c&&(M=l(()=>Os(pn)),e.set(v+"",M))}if(p===void 0)(!_||(A=lo(c,u))!=null&&A.writable)&&(p=l(()=>Os(void 0)),Xe(p,oo(f)),e.set(u,p));else{_=p.v!==pn;var S=l(()=>oo(f));Xe(p,S)}var x=Reflect.getOwnPropertyDescriptor(c,u);if(x!=null&&x.set&&x.set.call(d,f),!_){if(n&&typeof u=="string"){var g=e.get("length"),P=Number(u);Number.isInteger(P)&&P>=g.v&&Xe(g,P+1)}ya(r)}return!0},ownKeys(c){Me(r);var u=Reflect.ownKeys(c).filter(p=>{var _=e.get(p);return _===void 0||_.v!==pn});for(var[f,d]of e)d.v!==pn&&!(f in c)&&u.push(f);return u},setPrototypeOf(){uv()}})}var xd,vm,xm,ym;function Uh(){if(xd===void 0){xd=window,vm=/Firefox/.test(navigator.userAgent);var s=Element.prototype,t=Node.prototype,e=Text.prototype;xm=lo(t,"firstChild").get,ym=lo(t,"nextSibling").get,vd(s)&&(s.__click=void 0,s.__className=void 0,s.__attributes=null,s.__style=void 0,s.__e=void 0),vd(e)&&(e.__t=void 0)}}function Hi(s=""){return document.createTextNode(s)}function Ea(s){return xm.call(s)}function Ds(s){return ym.call(s)}function gn(s,t){if(!Ne)return Ea(s);var e=Ea(ke);if(e===null)e=ke.appendChild(Hi());else if(t&&e.nodeType!==lm){var n=Hi();return e==null||e.before(n),Xn(n),n}return Xn(e),e}function vn(s,t=1,e=!1){let n=Ne?ke:s;for(var r;t--;)r=n,n=Ds(n);if(!Ne)return n;if(e&&(n==null?void 0:n.nodeType)!==lm){var o=Hi();return n===null?r==null||r.after(o):n.before(o),Xn(o),o}return Xn(n),n}function Mm(s){s.textContent=""}function Sm(){return!1}function bm(s){var t=Te;if(t===null)return me.f|=js,s;if((t.f&cc)===0){if((t.f&Zu)===0)throw s;t.b.error(s)}else wo(s,t)}function wo(s,t){for(;t!==null;){if((t.f&Zu)!==0)try{t.b.error(s);return}catch(e){s=e}t=t.parent}throw s}const Av=-7169;function nn(s,t){s.f=s.f&Av|t}function $u(s){(s.f&si)!==0||s.deps===null?nn(s,un):nn(s,Is)}function Tm(s){if(s!==null)for(const t of s)(t.f&xn)===0||(t.f&Rr)===0||(t.f^=Rr,Tm(t.deps))}function Em(s,t,e){(s.f&Rn)!==0?t.add(s):(s.f&Is)!==0&&e.add(s),Tm(s.deps),nn(s,un)}const dl=new Set;let be=null,mn=null,Hn=[],pc=null,Oh=!1,xa=!1;var mo,_o,xr,go,Na,Ua,yr,vo,$i,Fh,Bh,wm;const Pf=class Pf{constructor(){ue(this,$i);di(this,"committed",!1);di(this,"current",new Map);di(this,"previous",new Map);ue(this,mo,new Set);ue(this,_o,new Set);ue(this,xr,0);ue(this,go,0);ue(this,Na,null);ue(this,Ua,new Set);ue(this,yr,new Set);di(this,"skipped_effects",new Set);di(this,"is_fork",!1);ue(this,vo,!1)}is_deferred(){return this.is_fork||et(this,go)>0}process(t){var r;Hn=[],this.apply();var e=[],n=[];for(const o of t)ln(this,$i,Fh).call(this,o,e,n);if(this.is_deferred()){ln(this,$i,Bh).call(this,n),ln(this,$i,Bh).call(this,e);for(const o of this.skipped_effects)Cm(o)}else{for(const o of et(this,mo))o();et(this,mo).clear(),et(this,xr)===0&&ln(this,$i,wm).call(this),be=null,yd(n),yd(e),(r=et(this,Na))==null||r.resolve()}mn=null}capture(t,e){e!==pn&&!this.previous.has(t)&&this.previous.set(t,e),(t.f&js)===0&&(this.current.set(t,t.v),mn==null||mn.set(t,t.v))}activate(){be=this,this.apply()}deactivate(){be===this&&(be=null,mn=null)}flush(){if(this.activate(),Hn.length>0){if(Am(),be!==null&&be!==this)return}else et(this,xr)===0&&this.process([]);this.deactivate()}discard(){for(const t of et(this,_o))t(this);et(this,_o).clear()}increment(t){se(this,xr,et(this,xr)+1),t&&se(this,go,et(this,go)+1)}decrement(t){se(this,xr,et(this,xr)-1),t&&se(this,go,et(this,go)-1),!et(this,vo)&&(se(this,vo,!0),Ts(()=>{se(this,vo,!1),this.is_deferred()?Hn.length>0&&this.flush():this.revive()}))}revive(){for(const t of et(this,Ua))et(this,yr).delete(t),nn(t,Rn),As(t);for(const t of et(this,yr))nn(t,Is),As(t);this.flush()}oncommit(t){et(this,mo).add(t)}ondiscard(t){et(this,_o).add(t)}settled(){return(et(this,Na)??se(this,Na,um())).promise}static ensure(){if(be===null){const t=be=new Pf;dl.add(be),xa||Ts(()=>{be===t&&t.flush()})}return be}apply(){}};mo=new WeakMap,_o=new WeakMap,xr=new WeakMap,go=new WeakMap,Na=new WeakMap,Ua=new WeakMap,yr=new WeakMap,vo=new WeakMap,$i=new WeakSet,Fh=function(t,e,n){t.f^=un;for(var r=t.first,o=null;r!==null;){var l=r.f,c=(l&(Ei|Lr))!==0,u=c&&(l&un)!==0,f=u||(l&Wn)!==0||this.skipped_effects.has(r);if(!f&&r.fn!==null){c?r.f^=un:o!==null&&(l&($l|ka|sm))!==0?o.b.defer_effect(r):(l&$l)!==0?e.push(r):Va(r)&&((l&Ls)!==0&&et(this,yr).add(r),wa(r));var d=r.first;if(d!==null){r=d;continue}}var p=r.parent;for(r=r.next;r===null&&p!==null;)p===o&&(o=null),r=p.next,p=p.parent}},Bh=function(t){for(var e=0;e<t.length;e+=1)Em(t[e],et(this,Ua),et(this,yr))},wm=function(){var r;if(dl.size>1){this.previous.clear();var t=mn,e=!0;for(const o of dl){if(o===this){e=!1;continue}const l=[];for(const[u,f]of this.current){if(o.current.has(u))if(e&&f!==o.current.get(u))o.current.set(u,f);else continue;l.push(u)}if(l.length===0)continue;const c=[...o.current.keys()].filter(u=>!this.current.has(u));if(c.length>0){var n=Hn;Hn=[];const u=new Set,f=new Map;for(const d of l)Rm(d,c,u,f);if(Hn.length>0){be=o,o.apply();for(const d of Hn)ln(r=o,$i,Fh).call(r,d,[],[]);o.deactivate()}Hn=n}}be=null,mn=t}this.committed=!0,dl.delete(this)};let Ks=Pf;function Qu(s){var t=xa;xa=!0;try{for(var e;;){if(Tv(),Hn.length===0&&(be==null||be.flush(),Hn.length===0))return pc=null,e;Am()}}finally{xa=t}}function Am(){Oh=!0;var s=null;try{for(var t=0;Hn.length>0;){var e=Ks.ensure();if(t++>1e3){var n,r;Rv()}e.process(Hn),Js.clear()}}finally{Oh=!1,pc=null}}function Rv(){try{ov()}catch(s){wo(s,pc)}}let gi=null;function yd(s){var t=s.length;if(t!==0){for(var e=0;e<t;){var n=s[e++];if((n.f&(bs|Wn))===0&&Va(n)&&(gi=new Set,wa(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?jm(n):n.fn=null),(gi==null?void 0:gi.size)>0)){Js.clear();for(const r of gi){if((r.f&(bs|Wn))!==0)continue;const o=[r];let l=r.parent;for(;l!==null;)gi.has(l)&&(gi.delete(l),o.push(l)),l=l.parent;for(let c=o.length-1;c>=0;c--){const u=o[c];(u.f&(bs|Wn))===0&&wa(u)}}gi.clear()}}gi=null}}function Rm(s,t,e,n){if(!e.has(s)&&(e.add(s),s.reactions!==null))for(const r of s.reactions){const o=r.f;(o&xn)!==0?Rm(r,t,e,n):(o&(qu|Ls))!==0&&(o&Rn)===0&&Pm(r,t,n)&&(nn(r,Rn),As(r))}}function Pm(s,t,e){const n=e.get(s);if(n!==void 0)return n;if(s.deps!==null)for(const r of s.deps){if(bo.call(t,r))return!0;if((r.f&xn)!==0&&Pm(r,t,e))return e.set(r,!0),!0}return e.set(s,!1),!1}function As(s){for(var t=pc=s;t.parent!==null;){t=t.parent;var e=t.f;if(Oh&&t===Te&&(e&Ls)!==0&&(e&rm)===0)return;if((e&(Lr|Ei))!==0){if((e&un)===0)return;t.f^=un}}Hn.push(t)}function Cm(s){if(!((s.f&Ei)!==0&&(s.f&un)!==0)){nn(s,un);for(var t=s.first;t!==null;)Cm(t),t=t.next}}function Pv(s){let t=0,e=Pr(0),n;return()=>{rf()&&(Me(e),Zm(()=>(t===0&&(n=mc(()=>s(()=>ya(e)))),t+=1,()=>{Ts(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ya(e))})})))}}var Cv=So|Fo|Zu;function Lv(s,t,e){new Iv(s,t,e)}var zn,Oa,Ni,Mr,Ui,Qn,Dn,Oi,ps,qs,Sr,ms,xo,br,yo,Mo,_s,ac,Je,Lm,Im,kh,Hl,Gl,zh;class Iv{constructor(t,e,n){ue(this,Je);di(this,"parent");di(this,"is_pending",!1);ue(this,zn);ue(this,Oa,Ne?ke:null);ue(this,Ni);ue(this,Mr);ue(this,Ui);ue(this,Qn,null);ue(this,Dn,null);ue(this,Oi,null);ue(this,ps,null);ue(this,qs,null);ue(this,Sr,0);ue(this,ms,0);ue(this,xo,!1);ue(this,br,!1);ue(this,yo,new Set);ue(this,Mo,new Set);ue(this,_s,null);ue(this,ac,Pv(()=>(se(this,_s,Pr(et(this,Sr))),()=>{se(this,_s,null)})));se(this,zn,t),se(this,Ni,e),se(this,Mr,n),this.parent=Te.b,this.is_pending=!!et(this,Ni).pending,se(this,Ui,of(()=>{if(Te.b=this,Ne){const o=et(this,Oa);dc(),o.nodeType===Bo&&o.data===uc?ln(this,Je,Im).call(this):(ln(this,Je,Lm).call(this),et(this,ms)===0&&(this.is_pending=!1))}else{var r=ln(this,Je,kh).call(this);try{se(this,Qn,ei(()=>n(r)))}catch(o){this.error(o)}et(this,ms)>0?ln(this,Je,Gl).call(this):this.is_pending=!1}return()=>{var o;(o=et(this,qs))==null||o.remove()}},Cv)),Ne&&se(this,zn,ke)}defer_effect(t){Em(t,et(this,yo),et(this,Mo))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!et(this,Ni).pending}update_pending_count(t){ln(this,Je,zh).call(this,t),se(this,Sr,et(this,Sr)+t),!(!et(this,_s)||et(this,xo))&&(se(this,xo,!0),Ts(()=>{se(this,xo,!1),et(this,_s)&&Ao(et(this,_s),et(this,Sr))}))}get_effect_pending(){return et(this,ac).call(this),Me(et(this,_s))}error(t){var e=et(this,Ni).onerror;let n=et(this,Ni).failed;if(et(this,br)||!e&&!n)throw t;et(this,Qn)&&(Un(et(this,Qn)),se(this,Qn,null)),et(this,Dn)&&(Un(et(this,Dn)),se(this,Dn,null)),et(this,Oi)&&(Un(et(this,Oi)),se(this,Oi,null)),Ne&&(Xn(et(this,Oa)),wv(),Xn(Ql()));var r=!1,o=!1;const l=()=>{if(r){Ev();return}r=!0,o&&dv(),Ks.ensure(),se(this,Sr,0),et(this,Oi)!==null&&Ar(et(this,Oi),()=>{se(this,Oi,null)}),this.is_pending=this.has_pending_snippet(),se(this,Qn,ln(this,Je,Hl).call(this,()=>(se(this,br,!1),ei(()=>et(this,Mr).call(this,et(this,zn)))))),et(this,ms)>0?ln(this,Je,Gl).call(this):this.is_pending=!1};Ts(()=>{try{o=!0,e==null||e(t,l),o=!1}catch(c){wo(c,et(this,Ui)&&et(this,Ui).parent)}n&&se(this,Oi,ln(this,Je,Hl).call(this,()=>{Ks.ensure(),se(this,br,!0);try{return ei(()=>{n(et(this,zn),()=>t,()=>l)})}catch(c){return wo(c,et(this,Ui).parent),null}finally{se(this,br,!1)}}))})}}zn=new WeakMap,Oa=new WeakMap,Ni=new WeakMap,Mr=new WeakMap,Ui=new WeakMap,Qn=new WeakMap,Dn=new WeakMap,Oi=new WeakMap,ps=new WeakMap,qs=new WeakMap,Sr=new WeakMap,ms=new WeakMap,xo=new WeakMap,br=new WeakMap,yo=new WeakMap,Mo=new WeakMap,_s=new WeakMap,ac=new WeakMap,Je=new WeakSet,Lm=function(){try{se(this,Qn,ei(()=>et(this,Mr).call(this,et(this,zn))))}catch(t){this.error(t)}},Im=function(){const t=et(this,Ni).pending;t&&(se(this,Dn,ei(()=>t(et(this,zn)))),Ts(()=>{var e=ln(this,Je,kh).call(this);se(this,Qn,ln(this,Je,Hl).call(this,()=>(Ks.ensure(),ei(()=>et(this,Mr).call(this,e))))),et(this,ms)>0?ln(this,Je,Gl).call(this):(Ar(et(this,Dn),()=>{se(this,Dn,null)}),this.is_pending=!1)}))},kh=function(){var t=et(this,zn);return this.is_pending&&(se(this,qs,Hi()),et(this,zn).before(et(this,qs)),t=et(this,qs)),t},Hl=function(t){var e=Te,n=me,r=ze;qi(et(this,Ui)),oi(et(this,Ui)),Eo(et(this,Ui).ctx);try{return t()}catch(o){return bm(o),null}finally{qi(e),oi(n),Eo(r)}},Gl=function(){const t=et(this,Ni).pending;et(this,Qn)!==null&&(se(this,ps,document.createDocumentFragment()),et(this,ps).append(et(this,qs)),$m(et(this,Qn),et(this,ps))),et(this,Dn)===null&&se(this,Dn,ei(()=>t(et(this,zn))))},zh=function(t){var e;if(!this.has_pending_snippet()){this.parent&&ln(e=this.parent,Je,zh).call(e,t);return}if(se(this,ms,et(this,ms)+t),et(this,ms)===0){this.is_pending=!1;for(const n of et(this,yo))nn(n,Rn),As(n);for(const n of et(this,Mo))nn(n,Is),As(n);et(this,yo).clear(),et(this,Mo).clear(),et(this,Dn)&&Ar(et(this,Dn),()=>{se(this,Dn,null)}),et(this,ps)&&(et(this,zn).before(et(this,ps)),se(this,ps,null))}};function Dv(s,t,e,n){const r=za()?tf:ef;var o=s.filter(_=>!_.settled);if(e.length===0&&o.length===0){n(t.map(r));return}var l=be,c=Te,u=Nv(),f=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(_=>_.promise)):null;function d(_){u();try{n(_)}catch(v){(c.f&bs)===0&&wo(v,c)}l==null||l.deactivate(),Vh()}if(e.length===0){f.then(()=>d(t.map(r)));return}function p(){u(),Promise.all(e.map(_=>Uv(_))).then(_=>d([...t.map(r),..._])).catch(_=>wo(_,c))}f?f.then(p):p()}function Nv(){var s=Te,t=me,e=ze,n=be;return function(o=!0){qi(s),oi(t),Eo(e),o&&(n==null||n.activate())}}function Vh(){qi(null),oi(null),Eo(null)}function tf(s){var t=xn|Rn,e=me!==null&&(me.f&xn)!==0?me:null;return Te!==null&&(Te.f|=Fo),{ctx:ze,deps:null,effects:null,equals:fm,f:t,fn:s,reactions:null,rv:0,v:pn,wv:0,parent:e??Te,ac:null}}function Uv(s,t,e){let n=Te;n===null&&nv();var r=n.b,o=void 0,l=Pr(pn),c=!me,u=new Map;return qv(()=>{var v;var f=um();o=f.promise;try{Promise.resolve(s()).then(f.resolve,f.reject).then(()=>{d===be&&d.committed&&d.deactivate(),Vh()})}catch(M){f.reject(M),Vh()}var d=be;if(c){var p=r.is_rendered();r.update_pending_count(1),d.increment(p),(v=u.get(d))==null||v.reject(ro),u.delete(d),u.set(d,f)}const _=(M,S=void 0)=>{if(d.activate(),S)S!==ro&&(l.f|=js,Ao(l,S));else{(l.f&js)!==0&&(l.f^=js),Ao(l,M);for(const[x,g]of u){if(u.delete(x),x===d)break;g.reject(ro)}}c&&(r.update_pending_count(-1),d.decrement(p))};f.promise.then(_,M=>_(null,M||"unknown"))}),Wm(()=>{for(const f of u.values())f.reject(ro)}),new Promise(f=>{function d(p){function _(){p===o?f(l):d(o)}p.then(_,_)}d(o)})}function ef(s){const t=tf(s);return t.equals=dm,t}function Dm(s){var t=s.effects;if(t!==null){s.effects=null;for(var e=0;e<t.length;e+=1)Un(t[e])}}function Ov(s){for(var t=s.parent;t!==null;){if((t.f&xn)===0)return(t.f&bs)===0?t:null;t=t.parent}return null}function nf(s){var t,e=Te;qi(Ov(s));try{s.f&=~Rr,Dm(s),t=zm(s)}finally{qi(e)}return t}function Nm(s){var t=nf(s);if(!s.equals(t)&&(s.wv=Bm(),(!(be!=null&&be.is_fork)||s.deps===null)&&(s.v=t,s.deps===null))){nn(s,un);return}$s||(mn!==null?(rf()||be!=null&&be.is_fork)&&mn.set(s,t):$u(s))}let Hh=new Set;const Js=new Map;let Um=!1;function Pr(s,t){var e={f:0,v:s,reactions:null,equals:fm,rv:0,wv:0};return e}function Os(s,t){const e=Pr(s);return Bv(e),e}function Gi(s,t=!1,e=!0){var r;const n=Pr(s);return t||(n.equals=dm),ko&&e&&ze!==null&&ze.l!==null&&((r=ze.l).s??(r.s=[])).push(n),n}function Xe(s,t,e=!1){me!==null&&(!Mi||(me.f&gd)!==0)&&za()&&(me.f&(xn|Ls|qu|gd))!==0&&(ri===null||!bo.call(ri,s))&&fv();let n=e?oo(t):t;return Ao(s,n)}function Ao(s,t){if(!s.equals(t)){var e=s.v;$s?Js.set(s,t):Js.set(s,e),s.v=t;var n=Ks.ensure();if(n.capture(s,e),(s.f&xn)!==0){const r=s;(s.f&Rn)!==0&&nf(r),$u(r)}s.wv=Bm(),Om(s,Rn),za()&&Te!==null&&(Te.f&un)!==0&&(Te.f&(Ei|Lr))===0&&(Jn===null?kv([s]):Jn.push(s)),!n.is_fork&&Hh.size>0&&!Um&&Fv()}return t}function Fv(){Um=!1;for(const s of Hh)(s.f&un)!==0&&nn(s,Is),Va(s)&&wa(s);Hh.clear()}function ya(s){Xe(s,s.v+1)}function Om(s,t){var e=s.reactions;if(e!==null)for(var n=za(),r=e.length,o=0;o<r;o++){var l=e[o],c=l.f;if(!(!n&&l===Te)){var u=(c&Rn)===0;if(u&&nn(l,t),(c&xn)!==0){var f=l;mn==null||mn.delete(f),(c&Rr)===0&&(c&si&&(l.f|=Rr),Om(f,Is))}else u&&((c&Ls)!==0&&gi!==null&&gi.add(l),As(l))}}}function sf(s){var t=me,e=Te;oi(null),qi(null);try{return s()}finally{oi(t),qi(e)}}let Wl=!1,$s=!1;function Md(s){$s=s}let me=null,Mi=!1;function oi(s){me=s}let Te=null;function qi(s){Te=s}let ri=null;function Bv(s){me!==null&&(ri===null?ri=[s]:ri.push(s))}let Nn=null,kn=0,Jn=null;function kv(s){Jn=s}let Fm=1,mr=0,wr=mr;function Sd(s){wr=s}function Bm(){return++Fm}function Va(s){var t=s.f;if((t&Rn)!==0)return!0;if(t&xn&&(s.f&=~Rr),(t&Is)!==0){for(var e=s.deps,n=e.length,r=0;r<n;r++){var o=e[r];if(Va(o)&&Nm(o),o.wv>s.wv)return!0}(t&si)!==0&&mn===null&&nn(s,un)}return!1}function km(s,t,e=!0){var n=s.reactions;if(n!==null&&!(ri!==null&&bo.call(ri,s)))for(var r=0;r<n.length;r++){var o=n[r];(o.f&xn)!==0?km(o,t,!1):t===o&&(e?nn(o,Rn):(o.f&un)!==0&&nn(o,Is),As(o))}}function zm(s){var S;var t=Nn,e=kn,n=Jn,r=me,o=ri,l=ze,c=Mi,u=wr,f=s.f;Nn=null,kn=0,Jn=null,me=(f&(Ei|Lr))===0?s:null,ri=null,Eo(s.ctx),Mi=!1,wr=++mr,s.ac!==null&&(sf(()=>{s.ac.abort(ro)}),s.ac=null);try{s.f|=Ih;var d=s.fn,p=d(),_=s.deps,v=be==null?void 0:be.is_fork;if(Nn!==null){var M;if(v||tc(s,kn),_!==null&&kn>0)for(_.length=kn+Nn.length,M=0;M<Nn.length;M++)_[kn+M]=Nn[M];else s.deps=_=Nn;if(rf()&&(s.f&si)!==0)for(M=kn;M<_.length;M++)((S=_[M]).reactions??(S.reactions=[])).push(s)}else!v&&_!==null&&kn<_.length&&(tc(s,kn),_.length=kn);if(za()&&Jn!==null&&!Mi&&_!==null&&(s.f&(xn|Is|Rn))===0)for(M=0;M<Jn.length;M++)km(Jn[M],s);if(r!==null&&r!==s){if(mr++,r.deps!==null)for(let x=0;x<e;x+=1)r.deps[x].rv=mr;if(t!==null)for(const x of t)x.rv=mr;Jn!==null&&(n===null?n=Jn:n.push(...Jn))}return(s.f&js)!==0&&(s.f^=js),p}catch(x){return bm(x)}finally{s.f^=Ih,Nn=t,kn=e,Jn=n,me=r,ri=o,Eo(l),Mi=c,wr=u}}function zv(s,t){let e=t.reactions;if(e!==null){var n=Jg.call(e,s);if(n!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[n]=e[r],e.pop())}}if(e===null&&(t.f&xn)!==0&&(Nn===null||!bo.call(Nn,t))){var o=t;(o.f&si)!==0&&(o.f^=si,o.f&=~Rr),$u(o),Dm(o),tc(o,0)}}function tc(s,t){var e=s.deps;if(e!==null)for(var n=t;n<e.length;n++)zv(s,e[n])}function wa(s){var t=s.f;if((t&bs)===0){nn(s,un);var e=Te,n=Wl;Te=s,Wl=!0;try{(t&(Ls|sm))!==0?Yv(s):Ym(s),qm(s);var r=zm(s);s.teardown=typeof r=="function"?r:null,s.wv=Fm;var o;Dh&&pv&&(s.f&Rn)!==0&&s.deps}finally{Wl=n,Te=e}}}async function Vv(){await Promise.resolve(),Qu()}function Me(s){var t=s.f,e=(t&xn)!==0;if(me!==null&&!Mi){var n=Te!==null&&(Te.f&bs)!==0;if(!n&&(ri===null||!bo.call(ri,s))){var r=me.deps;if((me.f&Ih)!==0)s.rv<mr&&(s.rv=mr,Nn===null&&r!==null&&r[kn]===s?kn++:Nn===null?Nn=[s]:Nn.push(s));else{(me.deps??(me.deps=[])).push(s);var o=s.reactions;o===null?s.reactions=[me]:bo.call(o,me)||o.push(me)}}}if($s&&Js.has(s))return Js.get(s);if(e){var l=s;if($s){var c=l.v;return((l.f&un)===0&&l.reactions!==null||Hm(l))&&(c=nf(l)),Js.set(l,c),c}var u=(l.f&si)===0&&!Mi&&me!==null&&(Wl||(me.f&si)!==0),f=l.deps===null;Va(l)&&(u&&(l.f|=si),Nm(l)),u&&!f&&Vm(l)}if(mn!=null&&mn.has(s))return mn.get(s);if((s.f&js)!==0)throw s.v;return s.v}function Vm(s){if(s.deps!==null){s.f|=si;for(const t of s.deps)(t.reactions??(t.reactions=[])).push(s),(t.f&xn)!==0&&(t.f&si)===0&&Vm(t)}}function Hm(s){if(s.v===pn)return!0;if(s.deps===null)return!1;for(const t of s.deps)if(Js.has(t)||(t.f&xn)!==0&&Hm(t))return!0;return!1}function mc(s){var t=Mi;try{return Mi=!0,s()}finally{Mi=t}}function Hv(s){if(!(typeof s!="object"||!s||s instanceof EventTarget)){if(Er in s)Gh(s);else if(!Array.isArray(s))for(let t in s){const e=s[t];typeof e=="object"&&e&&Er in e&&Gh(e)}}}function Gh(s,t=new Set){if(typeof s=="object"&&s!==null&&!(s instanceof EventTarget)&&!t.has(s)){t.add(s),s instanceof Date&&s.getTime();for(let n in s)try{Gh(s[n],t)}catch{}const e=ju(s);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const n=hm(e);for(let r in n){const o=n[r].get;if(o)try{o.call(s)}catch{}}}}}function Gm(s){Te===null&&(me===null&&rv(),sv()),$s&&iv()}function Gv(s,t){var e=t.last;e===null?t.last=t.first=s:(e.next=s,s.prev=e,t.last=s)}function Qi(s,t,e){var n=Te;n!==null&&(n.f&Wn)!==0&&(s|=Wn);var r={ctx:ze,deps:null,nodes:null,f:s|Rn|si,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(e)try{wa(r),r.f|=cc}catch(c){throw Un(r),c}else t!==null&&As(r);var o=r;if(e&&o.deps===null&&o.teardown===null&&o.nodes===null&&o.first===o.last&&(o.f&Fo)===0&&(o=o.first,(s&Ls)!==0&&(s&So)!==0&&o!==null&&(o.f|=So)),o!==null&&(o.parent=n,n!==null&&Gv(o,n),me!==null&&(me.f&xn)!==0&&(s&Lr)===0)){var l=me;(l.effects??(l.effects=[])).push(o)}return r}function rf(){return me!==null&&!Mi}function Wm(s){const t=Qi(ka,null,!1);return nn(t,un),t.teardown=s,t}function Wh(s){Gm();var t=Te.f,e=!me&&(t&Ei)!==0&&(t&cc)===0;if(e){var n=ze;(n.e??(n.e=[])).push(s)}else return Xm(s)}function Xm(s){return Qi($l|om,s,!1)}function Wv(s){return Gm(),Qi(ka|om,s,!0)}function Xv(s){Ks.ensure();const t=Qi(Lr|Fo,s,!0);return(e={})=>new Promise(n=>{e.outro?Ar(t,()=>{Un(t),n(void 0)}):(Un(t),n(void 0))})}function Zv(s){return Qi($l,s,!1)}function qv(s){return Qi(qu|Fo,s,!0)}function Zm(s,t=0){return Qi(ka|t,s,!0)}function Ma(s,t=[],e=[],n=[]){Dv(n,t,e,r=>{Qi(ka,()=>s(...r.map(Me)),!0)})}function of(s,t=0){var e=Qi(Ls|t,s,!0);return e}function ei(s){return Qi(Ei|Fo,s,!0)}function qm(s){var t=s.teardown;if(t!==null){const e=$s,n=me;Md(!0),oi(null);try{t.call(null)}finally{Md(e),oi(n)}}}function Ym(s,t=!1){var e=s.first;for(s.first=s.last=null;e!==null;){const r=e.ac;r!==null&&sf(()=>{r.abort(ro)});var n=e.next;(e.f&Lr)!==0?e.parent=null:Un(e,t),e=n}}function Yv(s){for(var t=s.first;t!==null;){var e=t.next;(t.f&Ei)===0&&Un(t),t=e}}function Un(s,t=!0){var e=!1;(t||(s.f&rm)!==0)&&s.nodes!==null&&s.nodes.end!==null&&(jv(s.nodes.start,s.nodes.end),e=!0),Ym(s,t&&!e),tc(s,0),nn(s,bs);var n=s.nodes&&s.nodes.t;if(n!==null)for(const o of n)o.stop();qm(s);var r=s.parent;r!==null&&r.first!==null&&jm(s),s.next=s.prev=s.teardown=s.ctx=s.deps=s.fn=s.nodes=s.ac=null}function jv(s,t){for(;s!==null;){var e=s===t?null:Ds(s);s.remove(),s=e}}function jm(s){var t=s.parent,e=s.prev,n=s.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),t!==null&&(t.first===s&&(t.first=n),t.last===s&&(t.last=e))}function Ar(s,t,e=!0){var n=[];Km(s,n,!0);var r=()=>{e&&Un(s),t&&t()},o=n.length;if(o>0){var l=()=>--o||r();for(var c of n)c.out(l)}else r()}function Km(s,t,e){if((s.f&Wn)===0){s.f^=Wn;var n=s.nodes&&s.nodes.t;if(n!==null)for(const c of n)(c.is_global||e)&&t.push(c);for(var r=s.first;r!==null;){var o=r.next,l=(r.f&So)!==0||(r.f&Ei)!==0&&(s.f&Ls)!==0;Km(r,t,l?e:!1),r=o}}}function af(s){Jm(s,!0)}function Jm(s,t){if((s.f&Wn)!==0){s.f^=Wn,(s.f&un)===0&&(nn(s,Rn),As(s));for(var e=s.first;e!==null;){var n=e.next,r=(e.f&So)!==0||(e.f&Ei)!==0;Jm(e,r?t:!1),e=n}var o=s.nodes&&s.nodes.t;if(o!==null)for(const l of o)(l.is_global||t)&&l.in()}}function $m(s,t){if(s.nodes)for(var e=s.nodes.start,n=s.nodes.end;e!==null;){var r=e===n?null:Ds(e);t.append(e),e=r}}const Kv=new Set,bd=new Set;function Jv(s,t,e,n={}){function r(o){if(n.capture||da.call(t,o),!o.cancelBubble)return sf(()=>e==null?void 0:e.call(this,o))}return s.startsWith("pointer")||s.startsWith("touch")||s==="wheel"?Ts(()=>{t.addEventListener(s,r,n)}):t.addEventListener(s,r,n),r}function ys(s,t,e,n,r){var o={capture:n,passive:r},l=Jv(s,t,e,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Wm(()=>{t.removeEventListener(s,l,o)})}let Td=null;function da(s){var x;var t=this,e=t.ownerDocument,n=s.type,r=((x=s.composedPath)==null?void 0:x.call(s))||[],o=r[0]||s.target;Td=s;var l=0,c=Td===s&&s.__root;if(c){var u=r.indexOf(c);if(u!==-1&&(t===document||t===window)){s.__root=t;return}var f=r.indexOf(t);if(f===-1)return;u<=f&&(l=u)}if(o=r[l]||s.target,o!==t){cm(s,"currentTarget",{configurable:!0,get(){return o||e}});var d=me,p=Te;oi(null),qi(null);try{for(var _,v=[];o!==null;){var M=o.assignedSlot||o.parentNode||o.host||null;try{var S=o["__"+n];S!=null&&(!o.disabled||s.target===o)&&S.call(o,s)}catch(g){_?v.push(g):_=g}if(s.cancelBubble||M===t||M===null)break;o=M}if(_){for(let g of v)queueMicrotask(()=>{throw g});throw _}}finally{s.__root=t,delete s.currentTarget,oi(d),qi(p)}}}function $v(s){var t=document.createElement("template");return t.innerHTML=s.replaceAll("<!>","<!---->"),t.content}function Xh(s,t){var e=Te;e.nodes===null&&(e.nodes={start:s,end:t,a:null,t:null})}function wi(s,t){var e=(t&Sv)!==0,n,r=!s.startsWith("<!>");return()=>{if(Ne)return Xh(ke,null),ke;n===void 0&&(n=$v(r?s:"<!>"+s),n=Ea(n));var o=e||vm?document.importNode(n,!0):n.cloneNode(!0);return Xh(o,o),o}}function Si(s,t){if(Ne){var e=Te;((e.f&cc)===0||e.nodes.end===null)&&(e.nodes.end=ke),dc();return}s!==null&&s.before(t)}const Qv=["touchstart","touchmove"];function t0(s){return Qv.includes(s)}function Ed(s,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(s.__t??(s.__t=s.nodeValue))&&(s.__t=e,s.nodeValue=e+"")}function Qm(s,t){return t_(s,t)}function e0(s,t){Uh(),t.intro=t.intro??!1;const e=t.target,n=Ne,r=ke;try{for(var o=Ea(e);o&&(o.nodeType!==Bo||o.data!==mm);)o=Ds(o);if(!o)throw To;xs(!0),Xn(o);const l=t_(s,{...t,anchor:o});return xs(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(c=>c.startsWith("https://svelte.dev/e/")))throw l;return l!==To&&console.warn("Failed to hydrate: ",l),t.recover===!1&&av(),Uh(),Mm(e),xs(!1),Qm(s,t)}finally{xs(n),Xn(r)}}const Hr=new Map;function t_(s,{target:t,anchor:e,props:n={},events:r,context:o,intro:l=!0}){Uh();var c=new Set,u=p=>{for(var _=0;_<p.length;_++){var v=p[_];if(!c.has(v)){c.add(v);var M=t0(v);t.addEventListener(v,da,{passive:M});var S=Hr.get(v);S===void 0?(document.addEventListener(v,da,{passive:M}),Hr.set(v,1)):Hr.set(v,S+1)}}};u(hc(Kv)),bd.add(u);var f=void 0,d=Xv(()=>{var p=e??t.appendChild(Hi());return Lv(p,{pending:()=>{}},_=>{if(o){zo({});var v=ze;v.c=o}if(r&&(n.$$events=r),Ne&&Xh(_,null),f=s(_,n)||{},Ne&&(Te.nodes.end=ke,ke===null||ke.nodeType!==Bo||ke.data!==Ju))throw fc(),To;o&&Vo()}),()=>{var M;for(var _ of c){t.removeEventListener(_,da);var v=Hr.get(_);--v===0?(document.removeEventListener(_,da),Hr.delete(_)):Hr.set(_,v)}bd.delete(u),p!==e&&((M=p.parentNode)==null||M.removeChild(p))}});return Zh.set(f,d),f}let Zh=new WeakMap;function n0(s,t){const e=Zh.get(s);return e?(Zh.delete(s),e(t)):Promise.resolve()}function Ha(s){return new i0(s)}var gs,ti;class i0{constructor(t){ue(this,gs);ue(this,ti);var o;var e=new Map,n=(l,c)=>{var u=Gi(c,!1,!1);return e.set(l,u),u};const r=new Proxy({...t.props||{},$$events:{}},{get(l,c){return Me(e.get(c)??n(c,Reflect.get(l,c)))},has(l,c){return c===am?!0:(Me(e.get(c)??n(c,Reflect.get(l,c))),Reflect.has(l,c))},set(l,c,u){return Xe(e.get(c)??n(c,u),u),Reflect.set(l,c,u)}});se(this,ti,(t.hydrate?e0:Qm)(t.component,{target:t.target,anchor:t.anchor,props:r,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&Qu(),se(this,gs,r.$$events);for(const l of Object.keys(et(this,ti)))l==="$set"||l==="$destroy"||l==="$on"||cm(this,l,{get(){return et(this,ti)[l]},set(c){et(this,ti)[l]=c},enumerable:!0});et(this,ti).$set=l=>{Object.assign(r,l)},et(this,ti).$destroy=()=>{n0(et(this,ti))}}$set(t){et(this,ti).$set(t)}$on(t,e){et(this,gs)[t]=et(this,gs)[t]||[];const n=(...r)=>e.call(this,...r);return et(this,gs)[t].push(n),()=>{et(this,gs)[t]=et(this,gs)[t].filter(r=>r!==n)}}$destroy(){et(this,ti).$destroy()}}gs=new WeakMap,ti=new WeakMap;const s0="5";var im;typeof window<"u"&&((im=window.__svelte??(window.__svelte={})).v??(im.v=new Set)).add(s0);mv();var vi,Fi,Vn,Tr,Fa,Ba,lc;class r0{constructor(t,e=!0){di(this,"anchor");ue(this,vi,new Map);ue(this,Fi,new Map);ue(this,Vn,new Map);ue(this,Tr,new Set);ue(this,Fa,!0);ue(this,Ba,()=>{var t=be;if(et(this,vi).has(t)){var e=et(this,vi).get(t),n=et(this,Fi).get(e);if(n)af(n),et(this,Tr).delete(e);else{var r=et(this,Vn).get(e);r&&(et(this,Fi).set(e,r.effect),et(this,Vn).delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[o,l]of et(this,vi)){if(et(this,vi).delete(o),o===t)break;const c=et(this,Vn).get(l);c&&(Un(c.effect),et(this,Vn).delete(l))}for(const[o,l]of et(this,Fi)){if(o===e||et(this,Tr).has(o))continue;const c=()=>{if(Array.from(et(this,vi).values()).includes(o)){var f=document.createDocumentFragment();$m(l,f),f.append(Hi()),et(this,Vn).set(o,{effect:l,fragment:f})}else Un(l);et(this,Tr).delete(o),et(this,Fi).delete(o)};et(this,Fa)||!n?(et(this,Tr).add(o),Ar(l,c,!1)):c()}}});ue(this,lc,t=>{et(this,vi).delete(t);const e=Array.from(et(this,vi).values());for(const[n,r]of et(this,Vn))e.includes(n)||(Un(r.effect),et(this,Vn).delete(n))});this.anchor=t,se(this,Fa,e)}ensure(t,e){var n=be,r=Sm();if(e&&!et(this,Fi).has(t)&&!et(this,Vn).has(t))if(r){var o=document.createDocumentFragment(),l=Hi();o.append(l),et(this,Vn).set(t,{effect:ei(()=>e(l)),fragment:o})}else et(this,Fi).set(t,ei(()=>e(this.anchor)));if(et(this,vi).set(n,t),r){for(const[c,u]of et(this,Fi))c===t?n.skipped_effects.delete(u):n.skipped_effects.add(u);for(const[c,u]of et(this,Vn))c===t?n.skipped_effects.delete(u.effect):n.skipped_effects.add(u.effect);n.oncommit(et(this,Ba)),n.ondiscard(et(this,lc))}else Ne&&(this.anchor=ke),et(this,Ba).call(this)}}vi=new WeakMap,Fi=new WeakMap,Vn=new WeakMap,Tr=new WeakMap,Fa=new WeakMap,Ba=new WeakMap,lc=new WeakMap;function e_(s){ze===null&&Ku(),ko&&ze.l!==null?n_(ze).m.push(s):Wh(()=>{const t=mc(s);if(typeof t=="function")return t})}function o0(s,t,{bubbles:e=!1,cancelable:n=!1}={}){return new CustomEvent(s,{detail:t,bubbles:e,cancelable:n})}function a0(){const s=ze;return s===null&&Ku(),(t,e,n)=>{var o;const r=(o=s.s.$$events)==null?void 0:o[t];if(r){const l=Yu(r)?r.slice():[r],c=o0(t,e,n);for(const u of l)u.call(s.x,c);return!c.defaultPrevented}return!0}}function l0(s){ze===null&&Ku(),ze.l===null&&lv(),n_(ze).a.push(s)}function n_(s){var t=s.l;return t.u??(t.u={a:[],b:[],m:[]})}function qh(s,t,e=!1){Ne&&dc();var n=new r0(s),r=e?So:0;function o(l,c){if(Ne){const f=gm(s)===uc;if(l===f){var u=Ql();Xn(u),n.anchor=u,xs(!1),n.ensure(l,c),xs(!0);return}}n.ensure(l,c)}of(()=>{var l=!1;t((c,u=!0)=>{l=!0,o(u,c)}),l||o(!1,null)},r)}function wd(s,t){return t}function c0(s,t,e){for(var n=[],r=t.length,o,l=t.length,c=0;c<r;c++){let p=t[c];Ar(p,()=>{if(o){if(o.pending.delete(p),o.done.add(p),o.pending.size===0){var _=s.outrogroups;Yh(hc(o.done)),_.delete(o),_.size===0&&(s.outrogroups=null)}}else l-=1},!1)}if(l===0){var u=n.length===0&&e!==null;if(u){var f=e,d=f.parentNode;Mm(d),d.append(f),s.items.clear()}Yh(t,!u)}else o={pending:new Set(t),done:new Set},(s.outrogroups??(s.outrogroups=new Set)).add(o)}function Yh(s,t=!0){for(var e=0;e<s.length;e++)Un(s[e],t)}var Ad;function Rd(s,t,e,n,r,o=null){var l=s,c=new Map,u=(t&pm)!==0;if(u){var f=s;l=Ne?Xn(Ea(f)):f.appendChild(Hi())}Ne&&dc();var d=null,p=ef(()=>{var g=e();return Yu(g)?g:g==null?[]:hc(g)}),_,v=!0;function M(){x.fallback=d,h0(x,_,l,t,n),d!==null&&(_.length===0?(d.f&vs)===0?af(d):(d.f^=vs,pa(d,null,l)):Ar(d,()=>{d=null}))}var S=of(()=>{_=Me(p);var g=_.length;let P=!1;if(Ne){var A=gm(l)===uc;A!==(g===0)&&(l=Ql(),Xn(l),xs(!1),P=!0)}for(var C=new Set,D=be,U=Sm(),N=0;N<g;N+=1){Ne&&ke.nodeType===Bo&&ke.data===Ju&&(l=ke,P=!0,xs(!1));var G=_[N],E=n(G,N),R=v?null:c.get(E);R?(R.v&&Ao(R.v,G),R.i&&Ao(R.i,N),U&&D.skipped_effects.delete(R.e)):(R=u0(c,v?l:Ad??(Ad=Hi()),G,E,N,r,t,e),v||(R.e.f|=vs),c.set(E,R)),C.add(E)}if(g===0&&o&&!d&&(v?d=ei(()=>o(l)):(d=ei(()=>o(Ad??(Ad=Hi()))),d.f|=vs)),Ne&&g>0&&Xn(Ql()),!v)if(U){for(const[F,Z]of c)C.has(F)||D.skipped_effects.add(Z.e);D.oncommit(M),D.ondiscard(()=>{})}else M();P&&xs(!0),Me(p)}),x={effect:S,items:c,outrogroups:null,fallback:d};v=!1,Ne&&(l=ke)}function na(s){for(;s!==null&&(s.f&Ei)===0;)s=s.next;return s}function h0(s,t,e,n,r){var R,F,Z,$,rt,ot,tt,q,j;var o=(n&vv)!==0,l=t.length,c=s.items,u=na(s.effect.first),f,d=null,p,_=[],v=[],M,S,x,g;if(o)for(g=0;g<l;g+=1)M=t[g],S=r(M,g),x=c.get(S).e,(x.f&vs)===0&&((F=(R=x.nodes)==null?void 0:R.a)==null||F.measure(),(p??(p=new Set)).add(x));for(g=0;g<l;g+=1){if(M=t[g],S=r(M,g),x=c.get(S).e,s.outrogroups!==null)for(const gt of s.outrogroups)gt.pending.delete(x),gt.done.delete(x);if((x.f&vs)!==0)if(x.f^=vs,x===u)pa(x,null,e);else{var P=d?d.next:u;x===s.effect.last&&(s.effect.last=x.prev),x.prev&&(x.prev.next=x.next),x.next&&(x.next.prev=x.prev),Fs(s,d,x),Fs(s,x,P),pa(x,P,e),d=x,_=[],v=[],u=na(d.next);continue}if((x.f&Wn)!==0&&(af(x),o&&(($=(Z=x.nodes)==null?void 0:Z.a)==null||$.unfix(),(p??(p=new Set)).delete(x))),x!==u){if(f!==void 0&&f.has(x)){if(_.length<v.length){var A=v[0],C;d=A.prev;var D=_[0],U=_[_.length-1];for(C=0;C<_.length;C+=1)pa(_[C],A,e);for(C=0;C<v.length;C+=1)f.delete(v[C]);Fs(s,D.prev,U.next),Fs(s,d,D),Fs(s,U,A),u=A,d=U,g-=1,_=[],v=[]}else f.delete(x),pa(x,u,e),Fs(s,x.prev,x.next),Fs(s,x,d===null?s.effect.first:d.next),Fs(s,d,x),d=x;continue}for(_=[],v=[];u!==null&&u!==x;)(f??(f=new Set)).add(u),v.push(u),u=na(u.next);if(u===null)continue}(x.f&vs)===0&&_.push(x),d=x,u=na(x.next)}if(s.outrogroups!==null){for(const gt of s.outrogroups)gt.pending.size===0&&(Yh(hc(gt.done)),(rt=s.outrogroups)==null||rt.delete(gt));s.outrogroups.size===0&&(s.outrogroups=null)}if(u!==null||f!==void 0){var N=[];if(f!==void 0)for(x of f)(x.f&Wn)===0&&N.push(x);for(;u!==null;)(u.f&Wn)===0&&u!==s.fallback&&N.push(u),u=na(u.next);var G=N.length;if(G>0){var E=(n&pm)!==0&&l===0?e:null;if(o){for(g=0;g<G;g+=1)(tt=(ot=N[g].nodes)==null?void 0:ot.a)==null||tt.measure();for(g=0;g<G;g+=1)(j=(q=N[g].nodes)==null?void 0:q.a)==null||j.fix()}c0(s,N,E)}}o&&Ts(()=>{var gt,it;if(p!==void 0)for(x of p)(it=(gt=x.nodes)==null?void 0:gt.a)==null||it.apply()})}function u0(s,t,e,n,r,o,l,c){var u=(l&_v)!==0?(l&xv)===0?Gi(e,!1,!1):Pr(e):null,f=(l&gv)!==0?Pr(r):null;return{v:u,i:f,e:ei(()=>(o(t,u??e,f??r,c),()=>{s.delete(n)}))}}function pa(s,t,e){if(s.nodes)for(var n=s.nodes.start,r=s.nodes.end,o=t&&(t.f&vs)===0?t.nodes.start:e;n!==null;){var l=Ds(n);if(o.before(n),n===r)return;n=l}}function Fs(s,t,e){t===null?s.effect.first=e:t.next=e,e===null?s.effect.last=t:e.prev=t}function f0(s,t,e){var n=s==null?"":""+s;return n=n?n+" "+t:t,n===""?null:n}function d0(s,t,e,n,r,o){var l=s.__className;if(Ne||l!==e||l===void 0){var c=f0(e,n);(!Ne||c!==s.getAttribute("class"))&&(c==null?s.removeAttribute("class"):s.className=c),s.__className=e}return o}const p0=Symbol("is custom element"),m0=Symbol("is html");function co(s,t,e,n){var r=_0(s);Ne&&(r[t]=s.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&s.nodeName==="LINK")||r[t]!==(r[t]=e)&&(t==="loading"&&(s[Kg]=e),e==null?s.removeAttribute(t):typeof e!="string"&&g0(s).includes(t)?s[t]=e:s.setAttribute(t,e))}function _0(s){return s.__attributes??(s.__attributes={[p0]:s.nodeName.includes("-"),[m0]:s.namespaceURI===bv})}var Pd=new Map;function g0(s){var t=s.getAttribute("is")||s.nodeName,e=Pd.get(t);if(e)return e;Pd.set(t,e=[]);for(var n,r=s,o=Element.prototype;o!==r;){n=hm(r);for(var l in n)n[l].set&&e.push(l);r=ju(r)}return e}function Cd(s,t){return s===t||(s==null?void 0:s[Er])===t}function i_(s={},t,e,n){return Zv(()=>{var r,o;return Zm(()=>{r=o,o=[],mc(()=>{s!==e(...o)&&(t(s,...o),r&&Cd(e(...r),s)&&t(null,...r))})}),()=>{Ts(()=>{o&&Cd(e(...o),s)&&t(null,...o)})}}),s}function Ga(s=!1){const t=ze,e=t.l.u;if(!e)return;let n=()=>Hv(t.s);if(s){let r=0,o={};const l=tf(()=>{let c=!1;const u=t.s;for(const f in u)u[f]!==o[f]&&(o[f]=u[f],c=!0);return c&&r++,r});n=()=>Me(l)}e.b.length&&Wv(()=>{Ld(t,n),Nh(e.b)}),Wh(()=>{const r=mc(()=>e.m.map(tv));return()=>{for(const o of r)typeof o=="function"&&o()}}),e.a.length&&Wh(()=>{Ld(t,n),Nh(e.a)})}function Ld(s,t){if(s.l.s)for(const e of s.l.s)Me(e);t()}function Wa(s,t,e){var n;s.$$events||(s.$$events={}),(n=s.$$events)[t]||(n[t]=[]),s.$$events[t].push(e)}function Xa(s){for(var t in s)t in this&&(this[t]=s[t])}let pl=!1;function v0(s){var t=pl;try{return pl=!1,[s(),pl]}finally{pl=t}}function x0(s,t,e,n){var P;var r=!ko||(e&yv)!==0,o=(e&Mv)!==0,l=n,c=!0,u=()=>(c&&(c=!1,l=n),l),f;{var d=Er in s||am in s;f=((P=lo(s,t))==null?void 0:P.set)??(d&&t in s?A=>s[t]=A:void 0)}var p,_=!1;[p,_]=v0(()=>s[t]),p===void 0&&n!==void 0&&(p=u(),f&&(r&&cv(),f(p)));var v;if(r?v=()=>{var A=s[t];return A===void 0?u():(c=!0,A)}:v=()=>{var A=s[t];return A!==void 0&&(l=void 0),A===void 0?l:A},f){var M=s.$$legacy;return(function(A,C){return arguments.length>0?((!r||!C||M||_)&&f(C?v():A),A):v()})}var S=!1,x=ef(()=>(S=!1,v()));Me(x);var g=Te;return(function(A,C){if(arguments.length>0){const D=C?Me(x):r&&o?oo(A):A;return Xe(x,D),S=!0,l!==void 0&&(l=D),A}return $s&&S||(g.f&bs)!==0?x.v:Me(x)})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="182",ho={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},y0=0,Id=1,M0=2,Xl=1,S0=2,ma=3,Rs=0,On=1,ki=2,Es=0,uo=1,Dd=2,Nd=3,Ud=4,b0=5,fr=100,T0=101,E0=102,w0=103,A0=104,R0=200,P0=201,C0=202,L0=203,jh=204,Kh=205,I0=206,D0=207,N0=208,U0=209,O0=210,F0=211,B0=212,k0=213,z0=214,Jh=0,$h=1,Qh=2,Ro=3,tu=4,eu=5,nu=6,iu=7,s_=0,V0=1,H0=2,Wi=0,r_=1,o_=2,a_=3,l_=4,c_=5,h_=6,u_=7,Od="attached",G0="detached",f_=300,Cr=301,Po=302,su=303,ru=304,_c=306,Co=1e3,zi=1001,ec=1002,tn=1003,d_=1004,_a=1005,en=1006,Zl=1007,Ms=1008,Gn=1009,p_=1010,m_=1011,Aa=1012,cf=1013,Yi=1014,ni=1015,Ps=1016,hf=1017,uf=1018,Ra=1020,__=35902,g_=35899,v_=1021,x_=1022,ii=1023,Cs=1026,_r=1027,ff=1028,df=1029,Lo=1030,pf=1031,mf=1033,ql=33776,Yl=33777,jl=33778,Kl=33779,ou=35840,au=35841,lu=35842,cu=35843,hu=36196,uu=37492,fu=37496,du=37488,pu=37489,mu=37490,_u=37491,gu=37808,vu=37809,xu=37810,yu=37811,Mu=37812,Su=37813,bu=37814,Tu=37815,Eu=37816,wu=37817,Au=37818,Ru=37819,Pu=37820,Cu=37821,Lu=36492,Iu=36494,Du=36495,Nu=36283,Uu=36284,Ou=36285,Fu=36286,Pa=2300,Ca=2301,Yc=2302,Fd=2400,Bd=2401,kd=2402,W0=2500,X0=0,y_=1,Bu=2,Z0=3200,M_=0,q0=1,Zs="",_n="srgb",Pn="srgb-linear",nc="linear",Pe="srgb",Gr=7680,zd=519,Y0=512,j0=513,K0=514,_f=515,J0=516,$0=517,gf=518,Q0=519,ku=35044,Vd="300 es",Vi=2e3,ic=2001;function S_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function La(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ex(){const s=La("canvas");return s.style.display="block",s}const Hd={};function sc(...s){const t="THREE."+s.shift();console.log(t,...s)}function zt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Yt(...s){const t="THREE."+s.shift();console.error(t,...s)}function Ia(...s){const t=s.join(" ");t in Hd||(Hd[t]=!0,zt(...s))}function nx(s,t,e){return new Promise(function(n,r){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}class Ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const Sa=Math.PI/180,Io=180/Math.PI;function bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function vf(s,t){return(s%t+t)%t}function ix(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function sx(s,t,e){return s!==t?(e-s)/(t-s):0}function ba(s,t,e){return(1-e)*s+e*t}function rx(s,t,e,n){return ba(s,t,1-Math.exp(-e*n))}function ox(s,t=1){return t-Math.abs(vf(s,t*2)-t)}function ax(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function lx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function cx(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hx(s,t){return s+Math.random()*(t-s)}function ux(s){return s*(.5-Math.random())}function fx(s){s!==void 0&&(Gd=s);let t=Gd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dx(s){return s*Sa}function px(s){return s*Io}function mx(s){return(s&s-1)===0&&s!==0}function _x(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vx(s,t,e,n,r){const o=Math.cos,l=Math.sin,c=o(e/2),u=l(e/2),f=o((t+n)/2),d=l((t+n)/2),p=o((t-n)/2),_=l((t-n)/2),v=o((n-t)/2),M=l((n-t)/2);switch(r){case"XYX":s.set(c*d,u*p,u*_,c*f);break;case"YZY":s.set(u*_,c*d,u*p,c*f);break;case"ZXZ":s.set(u*p,u*_,c*d,c*f);break;case"XZX":s.set(c*d,u*M,u*v,c*f);break;case"YXY":s.set(u*v,c*d,u*M,c*f);break;case"ZYZ":s.set(u*M,u*v,c*d,c*f);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:Sa,RAD2DEG:Io,generateUUID:bi,clamp:ce,euclideanModulo:vf,mapLinear:ix,inverseLerp:sx,lerp:ba,damp:rx,pingpong:ox,smoothstep:ax,smootherstep:lx,randInt:cx,randFloat:hx,randFloatSpread:ux,seededRandom:fx,degToRad:dx,radToDeg:px,isPowerOfTwo:mx,ceilPowerOfTwo:_x,floorPowerOfTwo:gx,setQuaternionFromProperEuler:vx,normalize:Ce,denormalize:xi};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*n-l*r+t.x,this.y=o*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,l,c){let u=n[r+0],f=n[r+1],d=n[r+2],p=n[r+3],_=o[l+0],v=o[l+1],M=o[l+2],S=o[l+3];if(c<=0){t[e+0]=u,t[e+1]=f,t[e+2]=d,t[e+3]=p;return}if(c>=1){t[e+0]=_,t[e+1]=v,t[e+2]=M,t[e+3]=S;return}if(p!==S||u!==_||f!==v||d!==M){let x=u*_+f*v+d*M+p*S;x<0&&(_=-_,v=-v,M=-M,S=-S,x=-x);let g=1-c;if(x<.9995){const P=Math.acos(x),A=Math.sin(P);g=Math.sin(g*P)/A,c=Math.sin(c*P)/A,u=u*g+_*c,f=f*g+v*c,d=d*g+M*c,p=p*g+S*c}else{u=u*g+_*c,f=f*g+v*c,d=d*g+M*c,p=p*g+S*c;const P=1/Math.sqrt(u*u+f*f+d*d+p*p);u*=P,f*=P,d*=P,p*=P}}t[e]=u,t[e+1]=f,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,o,l){const c=n[r],u=n[r+1],f=n[r+2],d=n[r+3],p=o[l],_=o[l+1],v=o[l+2],M=o[l+3];return t[e]=c*M+d*p+u*v-f*_,t[e+1]=u*M+d*_+f*p-c*v,t[e+2]=f*M+d*v+c*_-u*p,t[e+3]=d*M-c*p-u*_-f*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,l=t._order,c=Math.cos,u=Math.sin,f=c(n/2),d=c(r/2),p=c(o/2),_=u(n/2),v=u(r/2),M=u(o/2);switch(l){case"XYZ":this._x=_*d*p+f*v*M,this._y=f*v*p-_*d*M,this._z=f*d*M+_*v*p,this._w=f*d*p-_*v*M;break;case"YXZ":this._x=_*d*p+f*v*M,this._y=f*v*p-_*d*M,this._z=f*d*M-_*v*p,this._w=f*d*p+_*v*M;break;case"ZXY":this._x=_*d*p-f*v*M,this._y=f*v*p+_*d*M,this._z=f*d*M+_*v*p,this._w=f*d*p-_*v*M;break;case"ZYX":this._x=_*d*p-f*v*M,this._y=f*v*p+_*d*M,this._z=f*d*M-_*v*p,this._w=f*d*p+_*v*M;break;case"YZX":this._x=_*d*p+f*v*M,this._y=f*v*p+_*d*M,this._z=f*d*M-_*v*p,this._w=f*d*p-_*v*M;break;case"XZY":this._x=_*d*p-f*v*M,this._y=f*v*p-_*d*M,this._z=f*d*M+_*v*p,this._w=f*d*p+_*v*M;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],l=e[1],c=e[5],u=e[9],f=e[2],d=e[6],p=e[10],_=n+c+p;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(d-u)*v,this._y=(o-f)*v,this._z=(l-r)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(d-u)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(o+f)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(o-f)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(u+d)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(l-r)/v,this._x=(o+f)/v,this._y=(u+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,l=t._w,c=e._x,u=e._y,f=e._z,d=e._w;return this._x=n*d+l*c+r*f-o*u,this._y=r*d+l*u+o*c-n*f,this._z=o*d+l*f+n*u-r*c,this._w=l*d-n*c-r*u-o*f,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,o=t._z,l=t._w,c=this.dot(t);c<0&&(n=-n,r=-r,o=-o,l=-l,c=-c);let u=1-e;if(c<.9995){const f=Math.acos(c),d=Math.sin(f);u=Math.sin(u*f)/d,e=Math.sin(e*f)/d,this._x=this._x*u+n*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,l=t.y,c=t.z,u=t.w,f=2*(l*r-c*n),d=2*(c*e-o*r),p=2*(o*n-l*e);return this.x=e+u*f+l*p-c*d,this.y=n+u*d+c*f-o*p,this.z=r+u*p+o*d-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,l=e.x,c=e.y,u=e.z;return this.x=r*u-o*c,this.y=o*l-n*u,this.z=n*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jc.copy(this).projectOnVector(t),this.sub(jc)}reflect(t){return this.sub(jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new H,Wd=new ji;class oe{constructor(t,e,n,r,o,l,c,u,f){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,l,c,u,f)}set(t,e,n,r,o,l,c,u,f){const d=this.elements;return d[0]=t,d[1]=r,d[2]=c,d[3]=e,d[4]=o,d[5]=u,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,l=n[0],c=n[3],u=n[6],f=n[1],d=n[4],p=n[7],_=n[2],v=n[5],M=n[8],S=r[0],x=r[3],g=r[6],P=r[1],A=r[4],C=r[7],D=r[2],U=r[5],N=r[8];return o[0]=l*S+c*P+u*D,o[3]=l*x+c*A+u*U,o[6]=l*g+c*C+u*N,o[1]=f*S+d*P+p*D,o[4]=f*x+d*A+p*U,o[7]=f*g+d*C+p*N,o[2]=_*S+v*P+M*D,o[5]=_*x+v*A+M*U,o[8]=_*g+v*C+M*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],f=t[7],d=t[8];return e*l*d-e*c*f-n*o*d+n*c*u+r*o*f-r*l*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],f=t[7],d=t[8],p=d*l-c*f,_=c*u-d*o,v=f*o-l*u,M=e*p+n*_+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=p*S,t[1]=(r*f-d*n)*S,t[2]=(c*n-r*l)*S,t[3]=_*S,t[4]=(d*e-r*u)*S,t[5]=(r*o-c*e)*S,t[6]=v*S,t[7]=(n*u-f*e)*S,t[8]=(l*e-n*o)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,l,c){const u=Math.cos(o),f=Math.sin(o);return this.set(n*u,n*f,-n*(u*l+f*c)+l+t,-r*f,r*u,-r*(-f*l+u*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Kc.makeScale(t,e)),this}rotate(t){return this.premultiply(Kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new oe,Xd=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zd=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xx(){const s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Pe&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Pe&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zs?nc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:t,whitePoint:n,transfer:nc,toXYZ:Xd,fromXYZ:Zd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:Xd,fromXYZ:Zd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),s}const ge=xx();function ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wr;class yx{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=La("canvas")),Wr.width=t.width,Wr.height=t.height;const r=Wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=La("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=ws(o[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ws(e[n]/255)*255):e[n]=ws(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mx=0;class xf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(Jc(r[l].image)):o.push(Jc(r[l]))}else o=Jc(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function Jc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Sx=0;const $c=new H;class fn extends Ir{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=zi,r=zi,o=en,l=Ms,c=ii,u=Gn,f=fn.DEFAULT_ANISOTROPY,d=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=bi(),this.name="",this.source=new xf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==f_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Co:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Co:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=f_;fn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,r=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const u=t.elements,f=u[0],d=u[4],p=u[8],_=u[1],v=u[5],M=u[9],S=u[2],x=u[6],g=u[10];if(Math.abs(d-_)<.01&&Math.abs(p-S)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+S)<.1&&Math.abs(M+x)<.1&&Math.abs(f+v+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(f+1)/2,C=(v+1)/2,D=(g+1)/2,U=(d+_)/4,N=(p+S)/4,G=(M+x)/4;return A>C&&A>D?A<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(A),r=U/n,o=N/n):C>D?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=U/r,o=G/r):D<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),n=N/o,r=G/o),this.set(n,r,o,e),this}let P=Math.sqrt((x-M)*(x-M)+(p-S)*(p-S)+(_-d)*(_-d));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(p-S)/P,this.z=(_-d)/P,this.w=Math.acos((f+v+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bx extends Ir{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const r={width:t,height:e,depth:n.depth},o=new fn(r);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new xf(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends bx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class T_ extends fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tx extends fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,pi):pi.fromBufferAttribute(o,l),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ml.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(t.matrixWorld),this.union(ml)}const r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),_l.subVectors(this.max,ia),Xr.subVectors(t.a,ia),Zr.subVectors(t.b,ia),qr.subVectors(t.c,ia),Bs.subVectors(Zr,Xr),ks.subVectors(qr,Zr),rr.subVectors(Xr,qr);let e=[0,-Bs.z,Bs.y,0,-ks.z,ks.y,0,-rr.z,rr.y,Bs.z,0,-Bs.x,ks.z,0,-ks.x,rr.z,0,-rr.x,-Bs.y,Bs.x,0,-ks.y,ks.x,0,-rr.y,rr.x,0];return!Qc(e,Xr,Zr,qr,_l)||(e=[1,0,0,0,1,0,0,0,1],!Qc(e,Xr,Zr,qr,_l))?!1:(gl.crossVectors(Bs,ks),e=[gl.x,gl.y,gl.z],Qc(e,Xr,Zr,qr,_l))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ls=[new H,new H,new H,new H,new H,new H,new H,new H],pi=new H,ml=new ts,Xr=new H,Zr=new H,qr=new H,Bs=new H,ks=new H,rr=new H,ia=new H,_l=new H,gl=new H,or=new H;function Qc(s,t,e,n,r){for(let o=0,l=s.length-3;o<=l;o+=3){or.fromArray(s,o);const c=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),u=t.dot(or),f=e.dot(or),d=n.dot(or);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>c)return!1}return!0}const Ex=new ts,sa=new H,th=new H;class es{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ex.setFromPoints(t).getCenter(n);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sa.subVectors(t,this.center);const e=sa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(sa,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sa.copy(t.center).add(th)),this.expandByPoint(sa.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const cs=new H,eh=new H,vl=new H,zs=new H,nh=new H,xl=new H,ih=new H;class Za{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cs.copy(this.origin).addScaledVector(this.direction,e),cs.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){eh.copy(t).add(e).multiplyScalar(.5),vl.copy(e).sub(t).normalize(),zs.copy(this.origin).sub(eh);const o=t.distanceTo(e)*.5,l=-this.direction.dot(vl),c=zs.dot(this.direction),u=-zs.dot(vl),f=zs.lengthSq(),d=Math.abs(1-l*l);let p,_,v,M;if(d>0)if(p=l*u-c,_=l*c-u,M=o*d,p>=0)if(_>=-M)if(_<=M){const S=1/d;p*=S,_*=S,v=p*(p+l*_+2*c)+_*(l*p+_+2*u)+f}else _=o,p=Math.max(0,-(l*_+c)),v=-p*p+_*(_+2*u)+f;else _=-o,p=Math.max(0,-(l*_+c)),v=-p*p+_*(_+2*u)+f;else _<=-M?(p=Math.max(0,-(-l*o+c)),_=p>0?-o:Math.min(Math.max(-o,-u),o),v=-p*p+_*(_+2*u)+f):_<=M?(p=0,_=Math.min(Math.max(-o,-u),o),v=_*(_+2*u)+f):(p=Math.max(0,-(l*o+c)),_=p>0?o:Math.min(Math.max(-o,-u),o),v=-p*p+_*(_+2*u)+f);else _=l>0?-o:o,p=Math.max(0,-(l*_+c)),v=-p*p+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(eh).addScaledVector(vl,_),v}intersectSphere(t,e){cs.subVectors(t.center,this.origin);const n=cs.dot(this.direction),r=cs.dot(cs)-n*n,o=t.radius*t.radius;if(r>o)return null;const l=Math.sqrt(o-r),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,l,c,u;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return f>=0?(n=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(n=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),d>=0?(o=(t.min.y-_.y)*d,l=(t.max.y-_.y)*d):(o=(t.max.y-_.y)*d,l=(t.min.y-_.y)*d),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),p>=0?(c=(t.min.z-_.z)*p,u=(t.max.z-_.z)*p):(c=(t.max.z-_.z)*p,u=(t.min.z-_.z)*p),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,cs)!==null}intersectTriangle(t,e,n,r,o){nh.subVectors(e,t),xl.subVectors(n,t),ih.crossVectors(nh,xl);let l=this.direction.dot(ih),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;zs.subVectors(this.origin,t);const u=c*this.direction.dot(xl.crossVectors(zs,xl));if(u<0)return null;const f=c*this.direction.dot(nh.cross(zs));if(f<0||u+f>l)return null;const d=-c*zs.dot(ih);return d<0?null:this.at(d/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,r,o,l,c,u,f,d,p,_,v,M,S,x){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,l,c,u,f,d,p,_,v,M,S,x)}set(t,e,n,r,o,l,c,u,f,d,p,_,v,M,S,x){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=o,g[5]=l,g[9]=c,g[13]=u,g[2]=f,g[6]=d,g[10]=p,g[14]=_,g[3]=v,g[7]=M,g[11]=S,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Yr.setFromMatrixColumn(t,0).length(),o=1/Yr.setFromMatrixColumn(t,1).length(),l=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o);if(t.order==="XYZ"){const _=l*d,v=l*p,M=c*d,S=c*p;e[0]=u*d,e[4]=-u*p,e[8]=f,e[1]=v+M*f,e[5]=_-S*f,e[9]=-c*u,e[2]=S-_*f,e[6]=M+v*f,e[10]=l*u}else if(t.order==="YXZ"){const _=u*d,v=u*p,M=f*d,S=f*p;e[0]=_+S*c,e[4]=M*c-v,e[8]=l*f,e[1]=l*p,e[5]=l*d,e[9]=-c,e[2]=v*c-M,e[6]=S+_*c,e[10]=l*u}else if(t.order==="ZXY"){const _=u*d,v=u*p,M=f*d,S=f*p;e[0]=_-S*c,e[4]=-l*p,e[8]=M+v*c,e[1]=v+M*c,e[5]=l*d,e[9]=S-_*c,e[2]=-l*f,e[6]=c,e[10]=l*u}else if(t.order==="ZYX"){const _=l*d,v=l*p,M=c*d,S=c*p;e[0]=u*d,e[4]=M*f-v,e[8]=_*f+S,e[1]=u*p,e[5]=S*f+_,e[9]=v*f-M,e[2]=-f,e[6]=c*u,e[10]=l*u}else if(t.order==="YZX"){const _=l*u,v=l*f,M=c*u,S=c*f;e[0]=u*d,e[4]=S-_*p,e[8]=M*p+v,e[1]=p,e[5]=l*d,e[9]=-c*d,e[2]=-f*d,e[6]=v*p+M,e[10]=_-S*p}else if(t.order==="XZY"){const _=l*u,v=l*f,M=c*u,S=c*f;e[0]=u*d,e[4]=-p,e[8]=f*d,e[1]=_*p+S,e[5]=l*d,e[9]=v*p-M,e[2]=M*p-v,e[6]=c*d,e[10]=S*p+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wx,t,Ax)}lookAt(t,e,n){const r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Vs.crossVectors(n,Fn),Vs.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Vs.crossVectors(n,Fn)),Vs.normalize(),yl.crossVectors(Fn,Vs),r[0]=Vs.x,r[4]=yl.x,r[8]=Fn.x,r[1]=Vs.y,r[5]=yl.y,r[9]=Fn.y,r[2]=Vs.z,r[6]=yl.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,l=n[0],c=n[4],u=n[8],f=n[12],d=n[1],p=n[5],_=n[9],v=n[13],M=n[2],S=n[6],x=n[10],g=n[14],P=n[3],A=n[7],C=n[11],D=n[15],U=r[0],N=r[4],G=r[8],E=r[12],R=r[1],F=r[5],Z=r[9],$=r[13],rt=r[2],ot=r[6],tt=r[10],q=r[14],j=r[3],gt=r[7],it=r[11],dt=r[15];return o[0]=l*U+c*R+u*rt+f*j,o[4]=l*N+c*F+u*ot+f*gt,o[8]=l*G+c*Z+u*tt+f*it,o[12]=l*E+c*$+u*q+f*dt,o[1]=d*U+p*R+_*rt+v*j,o[5]=d*N+p*F+_*ot+v*gt,o[9]=d*G+p*Z+_*tt+v*it,o[13]=d*E+p*$+_*q+v*dt,o[2]=M*U+S*R+x*rt+g*j,o[6]=M*N+S*F+x*ot+g*gt,o[10]=M*G+S*Z+x*tt+g*it,o[14]=M*E+S*$+x*q+g*dt,o[3]=P*U+A*R+C*rt+D*j,o[7]=P*N+A*F+C*ot+D*gt,o[11]=P*G+A*Z+C*tt+D*it,o[15]=P*E+A*$+C*q+D*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],l=t[1],c=t[5],u=t[9],f=t[13],d=t[2],p=t[6],_=t[10],v=t[14],M=t[3],S=t[7],x=t[11],g=t[15],P=u*v-f*_,A=c*v-f*p,C=c*_-u*p,D=l*v-f*d,U=l*_-u*d,N=l*p-c*d;return e*(S*P-x*A+g*C)-n*(M*P-x*D+g*U)+r*(M*A-S*D+g*N)-o*(M*C-S*U+x*N)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],f=t[7],d=t[8],p=t[9],_=t[10],v=t[11],M=t[12],S=t[13],x=t[14],g=t[15],P=p*x*f-S*_*f+S*u*v-c*x*v-p*u*g+c*_*g,A=M*_*f-d*x*f-M*u*v+l*x*v+d*u*g-l*_*g,C=d*S*f-M*p*f+M*c*v-l*S*v-d*c*g+l*p*g,D=M*p*u-d*S*u-M*c*_+l*S*_+d*c*x-l*p*x,U=e*P+n*A+r*C+o*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return t[0]=P*N,t[1]=(S*_*o-p*x*o-S*r*v+n*x*v+p*r*g-n*_*g)*N,t[2]=(c*x*o-S*u*o+S*r*f-n*x*f-c*r*g+n*u*g)*N,t[3]=(p*u*o-c*_*o-p*r*f+n*_*f+c*r*v-n*u*v)*N,t[4]=A*N,t[5]=(d*x*o-M*_*o+M*r*v-e*x*v-d*r*g+e*_*g)*N,t[6]=(M*u*o-l*x*o-M*r*f+e*x*f+l*r*g-e*u*g)*N,t[7]=(l*_*o-d*u*o+d*r*f-e*_*f-l*r*v+e*u*v)*N,t[8]=C*N,t[9]=(M*p*o-d*S*o-M*n*v+e*S*v+d*n*g-e*p*g)*N,t[10]=(l*S*o-M*c*o+M*n*f-e*S*f-l*n*g+e*c*g)*N,t[11]=(d*c*o-l*p*o-d*n*f+e*p*f+l*n*v-e*c*v)*N,t[12]=D*N,t[13]=(d*S*r-M*p*r+M*n*_-e*S*_-d*n*x+e*p*x)*N,t[14]=(M*c*r-l*S*r-M*n*u+e*S*u+l*n*x-e*c*x)*N,t[15]=(l*p*r-d*c*r+d*n*u-e*p*u-l*n*_+e*c*_)*N,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,l=t.x,c=t.y,u=t.z,f=o*l,d=o*c;return this.set(f*l+n,f*c-r*u,f*u+r*c,0,f*c+r*u,d*c+n,d*u-r*l,0,f*u-r*c,d*u+r*l,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,l){return this.set(1,n,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,l=e._y,c=e._z,u=e._w,f=o+o,d=l+l,p=c+c,_=o*f,v=o*d,M=o*p,S=l*d,x=l*p,g=c*p,P=u*f,A=u*d,C=u*p,D=n.x,U=n.y,N=n.z;return r[0]=(1-(S+g))*D,r[1]=(v+C)*D,r[2]=(M-A)*D,r[3]=0,r[4]=(v-C)*U,r[5]=(1-(_+g))*U,r[6]=(x+P)*U,r[7]=0,r[8]=(M+A)*N,r[9]=(x-P)*N,r[10]=(1-(_+S))*N,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let o=Yr.set(r[0],r[1],r[2]).length();const l=Yr.set(r[4],r[5],r[6]).length(),c=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),mi.copy(this);const f=1/o,d=1/l,p=1/c;return mi.elements[0]*=f,mi.elements[1]*=f,mi.elements[2]*=f,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=p,mi.elements[9]*=p,mi.elements[10]*=p,e.setFromRotationMatrix(mi),n.x=o,n.y=l,n.z=c,this}makePerspective(t,e,n,r,o,l,c=Vi,u=!1){const f=this.elements,d=2*o/(e-t),p=2*o/(n-r),_=(e+t)/(e-t),v=(n+r)/(n-r);let M,S;if(u)M=o/(l-o),S=l*o/(l-o);else if(c===Vi)M=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(c===ic)M=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,r,o,l,c=Vi,u=!1){const f=this.elements,d=2/(e-t),p=2/(n-r),_=-(e+t)/(e-t),v=-(n+r)/(n-r);let M,S;if(u)M=1/(l-o),S=l/(l-o);else if(c===Vi)M=-2/(l-o),S=-(l+o)/(l-o);else if(c===ic)M=-1/(l-o),S=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=p,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=M,f[14]=S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yr=new H,mi=new le,wx=new H(0,0,0),Ax=new H(1,1,1),Vs=new H,yl=new H,Fn=new H,qd=new le,Yd=new ji;class Ki{constructor(t=0,e=0,n=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],l=r[4],c=r[8],u=r[1],f=r[5],d=r[9],p=r[2],_=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,v),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rx=0;const jd=new H,jr=new ji,hs=new le,Ml=new H,ra=new H,Px=new H,Cx=new ji,Kd=new H(1,0,0),Jd=new H(0,1,0),$d=new H(0,0,1),Qd={type:"added"},Lx={type:"removed"},Kr={type:"childadded",child:null},sh={type:"childremoved",child:null};class Ge extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new H,e=new Ki,n=new ji,r=new H(1,1,1);function o(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new oe}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(Kd,t)}rotateY(t){return this.rotateOnAxis(Jd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kd,t)}translateY(t){return this.translateOnAxis(Jd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ml.copy(t):Ml.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(ra,Ml,this.up):hs.lookAt(Ml,ra,this.up),this.quaternion.setFromRotationMatrix(hs),r&&(hs.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(hs),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qd),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lx),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hs.multiply(t.parent.matrixWorld)),t.applyMatrix4(hs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qd),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,Px),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Cx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){const p=u[f];o(t.shapes,p)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(o(t.materials,this.material[u]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(o(t.animations,u))}}if(e){const c=l(t.geometries),u=l(t.materials),f=l(t.textures),d=l(t.images),p=l(t.shapes),_=l(t.skeletons),v=l(t.animations),M=l(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=r,n;function l(c){const u=[];for(const f in c){const d=c[f];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ge.DEFAULT_UP=new H(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new H,us=new H,rh=new H,fs=new H,Jr=new H,$r=new H,tp=new H,oh=new H,ah=new H,lh=new H,ch=new Be,hh=new Be,uh=new Be;class yi{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),_i.subVectors(t,e),r.cross(_i);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){_i.subVectors(r,e),us.subVectors(n,e),rh.subVectors(t,e);const l=_i.dot(_i),c=_i.dot(us),u=_i.dot(rh),f=us.dot(us),d=us.dot(rh),p=l*f-c*c;if(p===0)return o.set(0,0,0),null;const _=1/p,v=(f*u-c*d)*_,M=(l*d-c*u)*_;return o.set(1-v-M,M,v)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(t,e,n,r,o,l,c,u){return this.getBarycoord(t,e,n,r,fs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,fs.x),u.addScaledVector(l,fs.y),u.addScaledVector(c,fs.z),u)}static getInterpolatedAttribute(t,e,n,r,o,l){return ch.setScalar(0),hh.setScalar(0),uh.setScalar(0),ch.fromBufferAttribute(t,e),hh.fromBufferAttribute(t,n),uh.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(ch,o.x),l.addScaledVector(hh,o.y),l.addScaledVector(uh,o.z),l}static isFrontFacing(t,e,n,r){return _i.subVectors(n,e),us.subVectors(t,e),_i.cross(us).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),us.subVectors(this.a,this.b),_i.cross(us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return yi.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let l,c;Jr.subVectors(r,n),$r.subVectors(o,n),oh.subVectors(t,n);const u=Jr.dot(oh),f=$r.dot(oh);if(u<=0&&f<=0)return e.copy(n);ah.subVectors(t,r);const d=Jr.dot(ah),p=$r.dot(ah);if(d>=0&&p<=d)return e.copy(r);const _=u*p-d*f;if(_<=0&&u>=0&&d<=0)return l=u/(u-d),e.copy(n).addScaledVector(Jr,l);lh.subVectors(t,o);const v=Jr.dot(lh),M=$r.dot(lh);if(M>=0&&v<=M)return e.copy(o);const S=v*f-u*M;if(S<=0&&f>=0&&M<=0)return c=f/(f-M),e.copy(n).addScaledVector($r,c);const x=d*M-v*p;if(x<=0&&p-d>=0&&v-M>=0)return tp.subVectors(o,r),c=(p-d)/(p-d+(v-M)),e.copy(r).addScaledVector(tp,c);const g=1/(x+S+_);return l=S*g,c=_*g,e.copy(n).addScaledVector(Jr,l).addScaledVector($r,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hs={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function fh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ge.workingColorSpace){if(t=vf(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,l=2*n-o;this.r=fh(l,o,t+1/3),this.g=fh(l,o,t),this.b=fh(l,o,t-1/3)}return ge.colorSpaceToWorking(this,r),this}setStyle(t,e=_n){function n(o){o!==void 0&&parseFloat(o)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=w_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return ge.workingToColorSpace(Mn.copy(this),t),Math.round(ce(Mn.r*255,0,255))*65536+Math.round(ce(Mn.g*255,0,255))*256+Math.round(ce(Mn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b,l=Math.max(n,r,o),c=Math.min(n,r,o);let u,f;const d=(c+l)/2;if(c===l)u=0,f=0;else{const p=l-c;switch(f=d<=.5?p/(l+c):p/(2-l-c),l){case n:u=(r-o)/p+(r<o?6:0);break;case r:u=(o-n)/p+2;break;case o:u=(n-r)/p+4;break}u/=6}return t.h=u,t.s=f,t.l=d,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=_n){ge.workingToColorSpace(Mn.copy(this),t);const e=Mn.r,n=Mn.g,r=Mn.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Hs),this.setHSL(Hs.h+t,Hs.s+e,Hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hs),t.getHSL(Sl);const n=ba(Hs.h,Sl.h,e),r=ba(Hs.s,Sl.s,e),o=ba(Hs.l,Sl.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new ee;ee.NAMES=w_;let Ix=0;class Zi extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=uo,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Kh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(n.blending=this.blending),this.side!==Rs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jh&&(n.blendSrc=this.blendSrc),this.blendDst!==Kh&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}if(e){const o=r(t.textures),l=r(t.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gr extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new H,bl=new $t;let Dx=0;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ku,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bl.fromBufferAttribute(this,e),bl.applyMatrix3(t),this.setXY(e,bl.x,bl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array),o=Ce(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ku&&(t.usage=this.usage),t}}class A_ extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class R_ extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ti extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nx=0;const Kn=new le,dh=new Ge,Qr=new H,Bn=new ts,oa=new ts,cn=new H;class ai extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S_(t)?R_:A_)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new oe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,o=t.length;r<o;r++){const l=t[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Ti(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];Bn.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const c=e[o];oa.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(Bn.min,oa.min),Bn.expandByPoint(cn),cn.addVectors(Bn.max,oa.max),Bn.expandByPoint(cn)):(Bn.expandByPoint(oa.min),Bn.expandByPoint(oa.max))}Bn.getCenter(n);let r=0;for(let o=0,l=t.count;o<l;o++)cn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(cn));if(e)for(let o=0,l=e.length;o<l;o++){const c=e[o],u=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)cn.fromBufferAttribute(c,f),u&&(Qr.fromBufferAttribute(t,f),cn.add(Qr)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let G=0;G<n.count;G++)c[G]=new H,u[G]=new H;const f=new H,d=new H,p=new H,_=new $t,v=new $t,M=new $t,S=new H,x=new H;function g(G,E,R){f.fromBufferAttribute(n,G),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,R),_.fromBufferAttribute(o,G),v.fromBufferAttribute(o,E),M.fromBufferAttribute(o,R),d.sub(f),p.sub(f),v.sub(_),M.sub(_);const F=1/(v.x*M.y-M.x*v.y);isFinite(F)&&(S.copy(d).multiplyScalar(M.y).addScaledVector(p,-v.y).multiplyScalar(F),x.copy(p).multiplyScalar(v.x).addScaledVector(d,-M.x).multiplyScalar(F),c[G].add(S),c[E].add(S),c[R].add(S),u[G].add(x),u[E].add(x),u[R].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let G=0,E=P.length;G<E;++G){const R=P[G],F=R.start,Z=R.count;for(let $=F,rt=F+Z;$<rt;$+=3)g(t.getX($+0),t.getX($+1),t.getX($+2))}const A=new H,C=new H,D=new H,U=new H;function N(G){D.fromBufferAttribute(r,G),U.copy(D);const E=c[G];A.copy(E),A.sub(D.multiplyScalar(D.dot(E))).normalize(),C.crossVectors(U,E);const F=C.dot(u[G])<0?-1:1;l.setXYZW(G,A.x,A.y,A.z,F)}for(let G=0,E=P.length;G<E;++G){const R=P[G],F=R.start,Z=R.count;for(let $=F,rt=F+Z;$<rt;$+=3)N(t.getX($+0)),N(t.getX($+1)),N(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,v=n.count;_<v;_++)n.setXYZ(_,0,0,0);const r=new H,o=new H,l=new H,c=new H,u=new H,f=new H,d=new H,p=new H;if(t)for(let _=0,v=t.count;_<v;_+=3){const M=t.getX(_+0),S=t.getX(_+1),x=t.getX(_+2);r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,S),l.fromBufferAttribute(e,x),d.subVectors(l,o),p.subVectors(r,o),d.cross(p),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),c.add(d),u.add(d),f.add(d),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,v=e.count;_<v;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),d.subVectors(l,o),p.subVectors(r,o),d.cross(p),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(c,u){const f=c.array,d=c.itemSize,p=c.normalized,_=new f.constructor(u.length*d);let v=0,M=0;for(let S=0,x=u.length;S<x;S++){c.isInterleavedBufferAttribute?v=u[S]*c.data.stride+c.offset:v=u[S]*d;for(let g=0;g<d;g++)_[M++]=f[v++]}return new An(_,d,p)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ai,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],f=t(u,n);e.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,p=f.length;d<p;d++){const _=f[d],v=t(_,n);u.push(v)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const f=n[u];t.data.attributes[u]=f.toJSON(t.data)}const r={};let o=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],d=[];for(let p=0,_=f.length;p<_;p++){const v=f[p];d.push(v.toJSON(t.data))}d.length>0&&(r[u]=d,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(e))}const o=t.morphAttributes;for(const f in o){const d=[],p=o[f];for(let _=0,v=p.length;_<v;_++)d.push(p[_].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,d=l.length;f<d;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new le,ar=new Za,Tl=new es,np=new H,El=new H,wl=new H,Al=new H,ph=new H,Rl=new H,ip=new H,Pl=new H;class Zn extends Ge{constructor(t=new ai,e=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(o&&c){Rl.set(0,0,0);for(let u=0,f=o.length;u<f;u++){const d=c[u],p=o[u];d!==0&&(ph.fromBufferAttribute(p,t),l?Rl.addScaledVector(ph,d):Rl.addScaledVector(ph.sub(e),d))}e.add(Rl)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(o),ar.copy(t.ray).recast(t.near),!(Tl.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Tl,np)===null||ar.origin.distanceToSquared(np)>(t.far-t.near)**2))&&(ep.copy(o).invert(),ar.copy(t.ray).applyMatrix4(ep),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,n){let r;const o=this.geometry,l=this.material,c=o.index,u=o.attributes.position,f=o.attributes.uv,d=o.attributes.uv1,p=o.attributes.normal,_=o.groups,v=o.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const x=_[M],g=l[x.materialIndex],P=Math.max(x.start,v.start),A=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let C=P,D=A;C<D;C+=3){const U=c.getX(C),N=c.getX(C+1),G=c.getX(C+2);r=Cl(this,g,t,n,f,d,p,U,N,G),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const M=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let x=M,g=S;x<g;x+=3){const P=c.getX(x),A=c.getX(x+1),C=c.getX(x+2);r=Cl(this,l,t,n,f,d,p,P,A,C),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const x=_[M],g=l[x.materialIndex],P=Math.max(x.start,v.start),A=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let C=P,D=A;C<D;C+=3){const U=C,N=C+1,G=C+2;r=Cl(this,g,t,n,f,d,p,U,N,G),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const M=Math.max(0,v.start),S=Math.min(u.count,v.start+v.count);for(let x=M,g=S;x<g;x+=3){const P=x,A=x+1,C=x+2;r=Cl(this,l,t,n,f,d,p,P,A,C),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function Ux(s,t,e,n,r,o,l,c){let u;if(t.side===On?u=n.intersectTriangle(l,o,r,!0,c):u=n.intersectTriangle(r,o,l,t.side===Rs,c),u===null)return null;Pl.copy(c),Pl.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Pl);return f<e.near||f>e.far?null:{distance:f,point:Pl.clone(),object:s}}function Cl(s,t,e,n,r,o,l,c,u,f){s.getVertexPosition(c,El),s.getVertexPosition(u,wl),s.getVertexPosition(f,Al);const d=Ux(s,t,e,n,El,wl,Al,ip);if(d){const p=new H;yi.getBarycoord(ip,El,wl,Al,p),r&&(d.uv=yi.getInterpolatedAttribute(r,c,u,f,p,new $t)),o&&(d.uv1=yi.getInterpolatedAttribute(o,c,u,f,p,new $t)),l&&(d.normal=yi.getInterpolatedAttribute(l,c,u,f,p,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const _={a:c,b:u,c:f,normal:new H,materialIndex:0};yi.getNormal(El,wl,Al,_.normal),d.face=_,d.barycoord=p}return d}class qa extends ai{constructor(t=1,e=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const u=[],f=[],d=[],p=[];let _=0,v=0;M("z","y","x",-1,-1,n,e,t,l,o,0),M("z","y","x",1,-1,n,e,-t,l,o,1),M("x","z","y",1,1,t,n,e,r,l,2),M("x","z","y",1,-1,t,n,-e,r,l,3),M("x","y","z",1,-1,t,e,n,r,o,4),M("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(u),this.setAttribute("position",new Ti(f,3)),this.setAttribute("normal",new Ti(d,3)),this.setAttribute("uv",new Ti(p,2));function M(S,x,g,P,A,C,D,U,N,G,E){const R=C/N,F=D/G,Z=C/2,$=D/2,rt=U/2,ot=N+1,tt=G+1;let q=0,j=0;const gt=new H;for(let it=0;it<tt;it++){const dt=it*F-$;for(let Wt=0;Wt<ot;Wt++){const Ht=Wt*R-Z;gt[S]=Ht*P,gt[x]=dt*A,gt[g]=rt,f.push(gt.x,gt.y,gt.z),gt[S]=0,gt[x]=0,gt[g]=U>0?1:-1,d.push(gt.x,gt.y,gt.z),p.push(Wt/N),p.push(1-it/G),q+=1}}for(let it=0;it<G;it++)for(let dt=0;dt<N;dt++){const Wt=_+dt+ot*it,Ht=_+dt+ot*(it+1),Qt=_+(dt+1)+ot*(it+1),Gt=_+(dt+1)+ot*it;u.push(Wt,Ht,Gt),u.push(Ht,Qt,Gt),j+=6}c.addGroup(v,j,E),v+=j,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Do(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function En(s){const t={};for(let e=0;e<s.length;e++){const n=Do(s[e]);for(const r in n)t[r]=n[r]}return t}function Ox(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function P_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const Fx={clone:Do,merge:En};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Do(t.uniforms),this.uniformsGroups=Ox(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class C_ extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gs=new H,sp=new $t,rp=new $t;class wn extends C_{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z)}getViewSize(t,e){return this.getViewBounds(t,sp,rp),e.subVectors(rp,sp)}setViewOffset(t,e,n,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,f=l.fullHeight;o+=l.offsetX*r/u,e-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const to=-90,eo=1;class zx extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(to,eo,t,e);r.layers=this.layers,this.add(r);const o=new wn(to,eo,t,e);o.layers=this.layers,this.add(o);const l=new wn(to,eo,t,e);l.layers=this.layers,this.add(l);const c=new wn(to,eo,t,e);c.layers=this.layers,this.add(c);const u=new wn(to,eo,t,e);u.layers=this.layers,this.add(u);const f=new wn(to,eo,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,l,c,u]=e;for(const f of e)this.remove(f);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===ic)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,u,f,d]=this.children,p=t.getRenderTarget(),_=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,c),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(p,_,v),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class L_ extends fn{constructor(t=[],e=Cr,n,r,o,l,c,u,f,d){super(t,e,n,r,o,l,c,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class I_ extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new L_(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qa(5,5,5),o=new Ji({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Es});o.uniforms.tEquirect.value=e;const l=new Zn(r,o),c=e.minFilter;return e.minFilter===Ms&&(e.minFilter=en),new zx(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(o)}}class vr extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,l=null;const c=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const S of t.hand.values()){const x=e.getJointPose(S,n),g=this._getHandJoint(f,S);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],_=d.position.distanceTo(p.position),v=.02,M=.005;f.inputState.pinching&&_>v+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=v-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hx extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ku,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new H;class yf{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),r=Ce(r,this.array),o=Ce(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){sc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const op=new H,ap=new Be,lp=new Be,Wx=new H,cp=new le,Ll=new H,_h=new es,hp=new le,gh=new Za;class Xx extends Zn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Od,this.bindMatrix=new le,this.bindMatrixInverse=new le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ts),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ll),this.boundingBox.expandByPoint(Ll)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new es),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ll),this.boundingSphere.expandByPoint(Ll)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_h.copy(this.boundingSphere),_h.applyMatrix4(r),t.ray.intersectsSphere(_h)!==!1&&(hp.copy(r).invert(),gh.copy(t.ray).applyMatrix4(hp),!(this.boundingBox!==null&&gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Be,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===G0?this.bindMatrixInverse.copy(this.bindMatrix).invert():zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;ap.fromBufferAttribute(r.attributes.skinIndex,t),lp.fromBufferAttribute(r.attributes.skinWeight,t),op.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const l=lp.getComponent(o);if(l!==0){const c=ap.getComponent(o);cp.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),e.addScaledVector(Wx.copy(op).applyMatrix4(cp),l)}}return e.applyMatrix4(this.bindMatrixInverse)}}class D_ extends Ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Mf extends fn{constructor(t=null,e=1,n=1,r,o,l,c,u,f=tn,d=tn,p,_){super(null,l,c,u,f,d,r,o,p,_),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const up=new le,Zx=new le;class Sf{constructor(t=[],e=[]){this.uuid=bi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new le;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,l=t.length;o<l;o++){const c=t[o]?t[o].matrixWorld:Zx;up.multiplyMatrices(c,e[o]),up.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Sf(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Mf(e,t,t,ii,ni);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const o=t.bones[n];let l=e[o];l===void 0&&(zt("Skeleton: No bone found with UUID:",o),l=new D_),this.bones.push(l),this.boneInverses.push(new le().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,o=e.length;r<o;r++){const l=e[r];t.bones.push(l.uuid);const c=n[r];t.boneInverses.push(c.toArray())}return t}}class zu extends An{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const no=new le,fp=new le,Il=[],dp=new ts,qx=new le,aa=new Zn,la=new es;class Yx extends Zn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,qx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,no),dp.copy(t.boundingBox).applyMatrix4(no),this.boundingBox.union(dp)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,no),la.copy(t.boundingSphere).applyMatrix4(no),this.boundingSphere.union(la)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,l=t*o+1;for(let c=0;c<n.length;c++)n[c]=r[l+c]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(n),t.ray.intersectsSphere(la)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,no),fp.multiplyMatrices(n,no),aa.matrixWorld=fp,aa.raycast(t,Il);for(let l=0,c=Il.length;l<c;l++){const u=Il[l];u.instanceId=o,u.object=this,e.push(u)}Il.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mf(new Float32Array(r*this.count),r,this.count,ff,ni));const o=this.morphTexture.source.data.data;let l=0;for(let f=0;f<n.length;f++)l+=n[f];const c=this.geometry.morphTargetsRelative?1:1-l,u=r*t;o[u]=c,o.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vh=new H,jx=new H,Kx=new oe;class Xs{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=vh.subVectors(n,e).cross(jx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kx.getNormalMatrix(t),r=this.coplanarPoint(vh).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new es,Jx=new $t(.5,.5),Dl=new H;class bf{constructor(t=new Xs,e=new Xs,n=new Xs,r=new Xs,o=new Xs,l=new Xs){this.planes=[t,e,n,r,o,l]}set(t,e,n,r,o,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi,n=!1){const r=this.planes,o=t.elements,l=o[0],c=o[1],u=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],M=o[8],S=o[9],x=o[10],g=o[11],P=o[12],A=o[13],C=o[14],D=o[15];if(r[0].setComponents(f-l,v-d,g-M,D-P).normalize(),r[1].setComponents(f+l,v+d,g+M,D+P).normalize(),r[2].setComponents(f+c,v+p,g+S,D+A).normalize(),r[3].setComponents(f-c,v-p,g-S,D-A).normalize(),n)r[4].setComponents(u,_,x,C).normalize(),r[5].setComponents(f-u,v-_,g-x,D-C).normalize();else if(r[4].setComponents(f-u,v-_,g-x,D-C).normalize(),e===Vi)r[5].setComponents(f+u,v+_,g+x,D+C).normalize();else if(e===ic)r[5].setComponents(u,_,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){lr.center.set(0,0,0);const e=Jx.distanceTo(t.center);return lr.radius=.7071067811865476+e,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Dl.x=r.normal.x>0?t.max.x:t.min.x,Dl.y=r.normal.y>0?t.max.y:t.min.y,Dl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N_ extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rc=new H,oc=new H,pp=new le,ca=new Za,Nl=new es,xh=new H,mp=new H;class Tf extends Ge{constructor(t=new ai,e=new N_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)rc.fromBufferAttribute(e,r-1),oc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=rc.distanceTo(oc);t.setAttribute("lineDistance",new Ti(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=o,t.ray.intersectsSphere(Nl)===!1)return;pp.copy(r).invert(),ca.copy(t.ray).applyMatrix4(pp);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=this.isLineSegments?2:1,d=n.index,_=n.attributes.position;if(d!==null){const v=Math.max(0,l.start),M=Math.min(d.count,l.start+l.count);for(let S=v,x=M-1;S<x;S+=f){const g=d.getX(S),P=d.getX(S+1),A=Ul(this,t,ca,u,g,P,S);A&&e.push(A)}if(this.isLineLoop){const S=d.getX(M-1),x=d.getX(v),g=Ul(this,t,ca,u,S,x,M-1);g&&e.push(g)}}else{const v=Math.max(0,l.start),M=Math.min(_.count,l.start+l.count);for(let S=v,x=M-1;S<x;S+=f){const g=Ul(this,t,ca,u,S,S+1,S);g&&e.push(g)}if(this.isLineLoop){const S=Ul(this,t,ca,u,M-1,v,M-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Ul(s,t,e,n,r,o,l){const c=s.geometry.attributes.position;if(rc.fromBufferAttribute(c,r),oc.fromBufferAttribute(c,o),e.distanceSqToSegment(rc,oc,xh,mp)>n)return;xh.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(xh);if(!(f<t.near||f>t.far))return{distance:f,point:mp.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const _p=new H,gp=new H;class $x extends Tf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)_p.fromBufferAttribute(e,r),gp.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_p.distanceTo(gp);t.setAttribute("lineDistance",new Ti(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qx extends Tf{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class U_ extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vp=new le,Vu=new Za,Ol=new es,Fl=new H;class ty extends Ge{constructor(t=new ai,e=new U_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(r),Ol.radius+=o,t.ray.intersectsSphere(Ol)===!1)return;vp.copy(r).invert(),Vu.copy(t.ray).applyMatrix4(vp);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=n.index,p=n.attributes.position;if(f!==null){const _=Math.max(0,l.start),v=Math.min(f.count,l.start+l.count);for(let M=_,S=v;M<S;M++){const x=f.getX(M);Fl.fromBufferAttribute(p,x),xp(Fl,x,u,r,t,e,this)}}else{const _=Math.max(0,l.start),v=Math.min(p.count,l.start+l.count);for(let M=_,S=v;M<S;M++)Fl.fromBufferAttribute(p,M),xp(Fl,M,u,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function xp(s,t,e,n,r,o,l){const c=Vu.distanceSqToPoint(s);if(c<e){const u=new H;Vu.closestPointToPoint(s,u),u.applyMatrix4(n);const f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}class Da extends fn{constructor(t,e,n=Yi,r,o,l,c=tn,u=tn,f,d=Cs,p=1){if(d!==Cs&&d!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:p};super(_,r,o,l,c,u,d,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ey extends Da{constructor(t,e=Yi,n=Cr,r,o,l=tn,c=tn,u,f=Cs){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,n,r,o,l,c,u,f),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class O_ extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gc extends ai{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,l=e/2,c=Math.floor(n),u=Math.floor(r),f=c+1,d=u+1,p=t/c,_=e/u,v=[],M=[],S=[],x=[];for(let g=0;g<d;g++){const P=g*_-l;for(let A=0;A<f;A++){const C=A*p-o;M.push(C,-P,0),S.push(0,0,1),x.push(A/c),x.push(1-g/u)}}for(let g=0;g<u;g++)for(let P=0;P<c;P++){const A=P+f*g,C=P+f*(g+1),D=P+1+f*(g+1),U=P+1+f*g;v.push(A,C,U),v.push(C,D,U)}this.setIndex(v),this.setAttribute("position",new Ti(M,3)),this.setAttribute("normal",new Ti(S,3)),this.setAttribute("uv",new Ti(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.width,t.height,t.widthSegments,t.heightSegments)}}class ny extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vc extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=M_,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ns extends vc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class iy extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sy extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Bl(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ry(s){function t(r,o){return s[r]-s[o]}const e=s.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function yp(s,t,e){const n=s.length,r=new s.constructor(n);for(let o=0,l=0;l!==n;++o){const c=e[o]*t;for(let u=0;u!==t;++u)r[l++]=s[c+u]}return r}function F_(s,t,e,n){let r=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[r++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(t.push(o.time),e.push(...l)),o=s[r++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(t.push(o.time),l.toArray(e,e.length)),o=s[r++];while(o!==void 0);else do l=o[n],l!==void 0&&(t.push(o.time),e.push(l)),o=s[r++];while(o!==void 0)}class Ya{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let l;e:{i:if(!(t<r)){for(let c=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=r,r=e[++n],t<r)break t}l=e.length;break e}if(!(t>=o)){const c=e[1];t<c&&(n=2,o=c);for(let u=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=o,o=e[--n-1],t>=o)break t}l=n,n=0;break e}break n}for(;n<l;){const c=n+l>>>1;t<e[c]?l=c:n=c+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=n[o+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oy extends Ya{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fd,endingEnd:Fd}}intervalChanged_(t,e,n){const r=this.parameterPositions;let o=t-2,l=t+1,c=r[o],u=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Bd:o=t,c=2*e-n;break;case kd:o=r.length-2,c=e+r[o]-r[o+1];break;default:o=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Bd:l=t,u=2*n-e;break;case kd:l=1,u=n+r[1]-r[0];break;default:l=t-1,u=e}const f=(n-e)*.5,d=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(u-n),this._offsetPrev=o*d,this._offsetNext=l*d}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,d=this._offsetPrev,p=this._offsetNext,_=this._weightPrev,v=this._weightNext,M=(n-e)/(r-e),S=M*M,x=S*M,g=-_*x+2*_*S-_*M,P=(1+_)*x+(-1.5-2*_)*S+(-.5+_)*M+1,A=(-1-v)*x+(1.5+v)*S+.5*M,C=v*x-v*S;for(let D=0;D!==c;++D)o[D]=g*l[d+D]+P*l[f+D]+A*l[u+D]+C*l[p+D];return o}}class ay extends Ya{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,d=(n-e)/(r-e),p=1-d;for(let _=0;_!==c;++_)o[_]=l[f+_]*p+l[u+_]*d;return o}}class ly extends Ya{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ai{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bl(e,this.TimeBufferType),this.values=Bl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bl(t.times,Array),values:Bl(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ly(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ay(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oy(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Pa:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case Yc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let o=0,l=r-1;for(;o!==r&&n[o]<t;)++o;for(;l!==-1&&n[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);const c=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,o=n.length;o===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==o;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){Yt("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(l!==null&&l>u){Yt("KeyframeTrack: Out of order keys.",this,c,u,l),t=!1;break}l=u}if(r!==void 0&&tx(r))for(let c=0,u=r.length;c!==u;++c){const f=r[c];if(isNaN(f)){Yt("KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yc,o=t.length-1;let l=1;for(let c=1;c<o;++c){let u=!1;const f=t[c],d=t[c+1];if(f!==d&&(c!==1||f!==t[0]))if(r)u=!0;else{const p=c*n,_=p-n,v=p+n;for(let M=0;M!==n;++M){const S=e[p+M];if(S!==e[_+M]||S!==e[v+M]){u=!0;break}}}if(u){if(c!==l){t[l]=t[c];const p=c*n,_=l*n;for(let v=0;v!==n;++v)e[_+v]=e[p+v]}++l}}if(o>0){t[l]=t[o];for(let c=o*n,u=l*n,f=0;f!==n;++f)e[u+f]=e[c+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Ca;class Ho extends Ai{constructor(t,e,n){super(t,e,n)}}Ho.prototype.ValueTypeName="bool";Ho.prototype.ValueBufferType=Array;Ho.prototype.DefaultInterpolation=Pa;Ho.prototype.InterpolantFactoryMethodLinear=void 0;Ho.prototype.InterpolantFactoryMethodSmooth=void 0;class B_ extends Ai{constructor(t,e,n,r){super(t,e,n,r)}}B_.prototype.ValueTypeName="color";class No extends Ai{constructor(t,e,n,r){super(t,e,n,r)}}No.prototype.ValueTypeName="number";class cy extends Ya{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-e)/(r-e);let f=t*c;for(let d=f+c;f!==d;f+=4)ji.slerpFlat(o,0,l,f-c,l,f,u);return o}}class Uo extends Ai{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new cy(this.times,this.values,this.getValueSize(),t)}}Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Go extends Ai{constructor(t,e,n){super(t,e,n)}}Go.prototype.ValueTypeName="string";Go.prototype.ValueBufferType=Array;Go.prototype.DefaultInterpolation=Pa;Go.prototype.InterpolantFactoryMethodLinear=void 0;Go.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends Ai{constructor(t,e,n,r){super(t,e,n,r)}}Oo.prototype.ValueTypeName="vector";class hy{constructor(t="",e=-1,n=[],r=W0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=bi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let l=0,c=n.length;l!==c;++l)e.push(fy(n[l]).scale(r));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o.userData=JSON.parse(t.userData||"{}"),o}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let o=0,l=n.length;o!==l;++o)e.push(Ai.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const o=e.length,l=[];for(let c=0;c<o;c++){let u=[],f=[];u.push((c+o-1)%o,c,(c+1)%o),f.push(0,1,0);const d=ry(u);u=yp(u,1,d),f=yp(f,1,d),!r&&u[0]===0&&(u.push(o),f.push(f[0])),l.push(new No(".morphTargetInfluences["+e[c].name+"]",u,f).scale(1/n))}return new this(t,-1,l)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,u=t.length;c<u;c++){const f=t[c],d=f.name.match(o);if(d&&d.length>1){const p=d[1];let _=r[p];_||(r[p]=_=[]),_.push(f)}}const l=[];for(const c in r)l.push(this.CreateFromMorphTargetSequence(c,r[c],e,n));return l}static parseAnimation(t,e){if(zt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Yt("AnimationClip: No animation in JSONLoader data."),null;const n=function(p,_,v,M,S){if(v.length!==0){const x=[],g=[];F_(v,x,g,M),x.length!==0&&S.push(new p(_,x,g))}},r=[],o=t.name||"default",l=t.fps||30,c=t.blendMode;let u=t.length||-1;const f=t.hierarchy||[];for(let p=0;p<f.length;p++){const _=f[p].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const v={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let S=0;S<_[M].morphTargets.length;S++)v[_[M].morphTargets[S]]=-1;for(const S in v){const x=[],g=[];for(let P=0;P!==_[M].morphTargets.length;++P){const A=_[M];x.push(A.time),g.push(A.morphTarget===S?1:0)}r.push(new No(".morphTargetInfluence["+S+"]",x,g))}u=v.length*l}else{const v=".bones["+e[p].name+"]";n(Oo,v+".position",_,"pos",r),n(Uo,v+".quaternion",_,"rot",r),n(Oo,v+".scale",_,"scl",r)}}return r.length===0?null:new this(o,u,r,c)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function uy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return Oo;case"color":return B_;case"quaternion":return Uo;case"bool":case"boolean":return Ho;case"string":return Go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function fy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=uy(s.type);if(s.times===void 0){const e=[],n=[];F_(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Ss={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class dy{constructor(t,e,n){const r=this;let o=!1,l=0,c=0,u;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){c++,o===!1&&r.onStart!==void 0&&r.onStart(d,l,c),o=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,c),l===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,_=f.length;p<_;p+=2){const v=f[p],M=f[p+1];if(v.global&&(v.lastIndex=0),v.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const py=new dy;class Wo{constructor(t){this.manager=t!==void 0?t:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";const ds={};class my extends Error{constructor(t,e){super(t),this.response=e}}class k_ extends Wo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=Ss.get(`file:${t}`);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(ds[t]!==void 0){ds[t].push({onLoad:e,onProgress:n,onError:r});return}ds[t]=[],ds[t].push({onLoad:e,onProgress:n,onError:r});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,u=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=ds[t],p=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),v=_?parseInt(_):0,M=v!==0;let S=0;const x=new ReadableStream({start(g){P();function P(){p.read().then(({done:A,value:C})=>{if(A)g.close();else{S+=C.byteLength;const D=new ProgressEvent("progress",{lengthComputable:M,loaded:S,total:v});for(let U=0,N=d.length;U<N;U++){const G=d[U];G.onProgress&&G.onProgress(D)}g.enqueue(C),P()}},A=>{g.error(A)})}}});return new Response(x)}else throw new my(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,c));case"json":return f.json();default:if(c==="")return f.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),_=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(_);return f.arrayBuffer().then(M=>v.decode(M))}}}).then(f=>{Ss.add(`file:${t}`,f);const d=ds[t];delete ds[t];for(let p=0,_=d.length;p<_;p++){const v=d[p];v.onLoad&&v.onLoad(f)}}).catch(f=>{const d=ds[t];if(d===void 0)throw this.manager.itemError(t),f;delete ds[t];for(let p=0,_=d.length;p<_;p++){const v=d[p];v.onError&&v.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const io=new WeakMap;class _y extends Wo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=Ss.get(`image:${t}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0);else{let p=io.get(l);p===void 0&&(p=[],io.set(l,p)),p.push({onLoad:e,onError:r})}return l}const c=La("img");function u(){d(),e&&e(this);const p=io.get(this)||[];for(let _=0;_<p.length;_++){const v=p[_];v.onLoad&&v.onLoad(this)}io.delete(this),o.manager.itemEnd(t)}function f(p){d(),r&&r(p),Ss.remove(`image:${t}`);const _=io.get(this)||[];for(let v=0;v<_.length;v++){const M=_[v];M.onError&&M.onError(p)}io.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),Ss.add(`image:${t}`,c),o.manager.itemStart(t),c.src=t,c}}class gy extends Wo{constructor(t){super(t)}load(t,e,n,r){const o=new fn,l=new _y(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(c){o.image=c,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}}class xc extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const yh=new le,Mp=new H,Sp=new H;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mp),Sp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sp),e.updateMatrixWorld(),yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vy extends Ef{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Io*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,o=t.distance||e.far;(n!==e.fov||r!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=r,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class xy extends xc{constructor(t,e,n=0,r=Math.PI/3,o=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new vy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class yy extends Ef{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class My extends xc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new yy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class yc extends C_{constructor(t=-1,e=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,l=n+t,c=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sy extends Ef{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z_ extends xc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Sy}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class by extends xc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ta{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Mh=new WeakMap;class Ty extends Wo{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&zt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&zt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=Ss.get(`image-bitmap:${t}`);if(l!==void 0){if(o.manager.itemStart(t),l.then){l.then(f=>{if(Mh.has(l)===!0)r&&r(Mh.get(l)),o.manager.itemError(t),o.manager.itemEnd(t);else return e&&e(f),o.manager.itemEnd(t),f});return}return setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(t,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){return Ss.add(`image-bitmap:${t}`,f),e&&e(f),o.manager.itemEnd(t),f}).catch(function(f){r&&r(f),Mh.set(u,f),Ss.remove(`image-bitmap:${t}`),o.manager.itemError(t),o.manager.itemEnd(t)});Ss.add(`image-bitmap:${t}`,u),o.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ey extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const wf="\\[\\]\\.:\\/",wy=new RegExp("["+wf+"]","g"),Af="[^"+wf+"]",Ay="[^"+wf.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",Af),Py=/(WCOD+)?/.source.replace("WCOD",Ay),Cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Af),Ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Af),Iy=new RegExp("^"+Ry+Py+Cy+Ly+"$"),Dy=["material","materials","bones","map"];class Ny{constructor(t,e,n){const r=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Le{constructor(t,e,n){this.path=e,this.parsedPath=n||Le.parseTrackName(e),this.node=Le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Le.Composite(t,e,n):new Le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wy,"")}static parseTrackName(t){const e=Iy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);Dy.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===e||c.uuid===e)return c;const u=n(c.children);if(u)return u}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let o=e.propertyIndex;if(t||(t=Le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===f){f=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}const l=t[r];if(l===void 0){const f=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Le.Composite=Ny;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bp{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Uy extends Ir{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Tp(s,t,e,n){const r=Oy(n);switch(e){case v_:return s*t;case ff:return s*t/r.components*r.byteLength;case df:return s*t/r.components*r.byteLength;case Lo:return s*t*2/r.components*r.byteLength;case pf:return s*t*2/r.components*r.byteLength;case x_:return s*t*3/r.components*r.byteLength;case ii:return s*t*4/r.components*r.byteLength;case mf:return s*t*4/r.components*r.byteLength;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jl:case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case au:case cu:return Math.max(s,16)*Math.max(t,8)/4;case ou:case lu:return Math.max(s,8)*Math.max(t,8)/2;case hu:case uu:case du:case pu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fu:case mu:case _u:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Su:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Tu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Eu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Au:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ru:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Cu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lu:case Iu:case Du:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nu:case Uu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ou:case Fu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Oy(s){switch(s){case Gn:case p_:return{byteLength:1,components:1};case Aa:case m_:case Ps:return{byteLength:2,components:1};case hf:case uf:return{byteLength:2,components:4};case Yi:case cf:case ni:return{byteLength:4,components:1};case __:case g_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V_(){let s=null,t=!1,e=null,n=null;function r(o,l){e(o,l),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Fy(s){const t=new WeakMap;function e(c,u){const f=c.array,d=c.usage,p=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=s.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=s.SHORT;else if(f instanceof Uint32Array)v=s.UNSIGNED_INT;else if(f instanceof Int32Array)v=s.INT;else if(f instanceof Int8Array)v=s.BYTE;else if(f instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,f){const d=u.array,p=u.updateRanges;if(s.bindBuffer(f,c),p.length===0)s.bufferSubData(f,0,d);else{p.sort((v,M)=>v.start-M.start);let _=0;for(let v=1;v<p.length;v++){const M=p[_],S=p[v];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++_,p[_]=S)}p.length=_+1;for(let v=0,M=p.length;v<M;v++){const S=p[v];s.bufferSubData(f,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=t.get(c);u&&(s.deleteBuffer(u.buffer),t.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=t.get(c);(!d||d.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,u),f.version=c.version}}return{get:r,remove:o,update:l}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,CM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:By,alphahash_pars_fragment:ky,alphamap_fragment:zy,alphamap_pars_fragment:Vy,alphatest_fragment:Hy,alphatest_pars_fragment:Gy,aomap_fragment:Wy,aomap_pars_fragment:Xy,batching_pars_vertex:Zy,batching_vertex:qy,begin_vertex:Yy,beginnormal_vertex:jy,bsdfs:Ky,iridescence_fragment:Jy,bumpmap_pars_fragment:$y,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:eM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:sM,color_pars_vertex:rM,color_vertex:oM,common:aM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:hM,displacementmap_vertex:uM,emissivemap_fragment:fM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:_M,envmap_common_pars_fragment:gM,envmap_pars_fragment:vM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:CM,envmap_vertex:yM,fog_vertex:MM,fog_pars_vertex:SM,fog_fragment:bM,fog_pars_fragment:TM,gradientmap_pars_fragment:EM,lightmap_pars_fragment:wM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:RM,lights_pars_begin:PM,lights_toon_fragment:LM,lights_toon_pars_fragment:IM,lights_phong_fragment:DM,lights_phong_pars_fragment:NM,lights_physical_fragment:UM,lights_physical_pars_fragment:OM,lights_fragment_begin:FM,lights_fragment_maps:BM,lights_fragment_end:kM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:GM,map_fragment:WM,map_pars_fragment:XM,map_particle_fragment:ZM,map_particle_pars_fragment:qM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:jM,morphinstance_vertex:KM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:QM,morphtarget_vertex:tS,normal_fragment_begin:eS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:sS,normal_vertex:rS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:hS,opaque_fragment:uS,packing:fS,premultiplied_alpha_fragment:dS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:_S,roughnessmap_fragment:gS,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:yS,shadowmap_vertex:MS,shadowmask_pars_fragment:SS,skinbase_vertex:bS,skinning_pars_vertex:TS,skinning_vertex:ES,skinnormal_vertex:wS,specularmap_fragment:AS,specularmap_pars_fragment:RS,tonemapping_fragment:PS,tonemapping_pars_fragment:CS,transmission_fragment:LS,transmission_pars_fragment:IS,uv_pars_fragment:DS,uv_pars_vertex:NS,uv_vertex:US,worldpos_vertex:OS,background_vert:FS,background_frag:BS,backgroundCube_vert:kS,backgroundCube_frag:zS,cube_vert:VS,cube_frag:HS,depth_vert:GS,depth_frag:WS,distance_vert:XS,distance_frag:ZS,equirect_vert:qS,equirect_frag:YS,linedashed_vert:jS,linedashed_frag:KS,meshbasic_vert:JS,meshbasic_frag:$S,meshlambert_vert:QS,meshlambert_frag:tb,meshmatcap_vert:eb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:sb,meshphong_vert:rb,meshphong_frag:ob,meshphysical_vert:ab,meshphysical_frag:lb,meshtoon_vert:cb,meshtoon_frag:hb,points_vert:ub,points_frag:fb,shadow_vert:db,shadow_frag:pb,sprite_vert:mb,sprite_frag:_b},Tt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Bi={basic:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:En([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:En([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:En([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:En([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:En([Tt.points,Tt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:En([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:En([Tt.common,Tt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:En([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:En([Tt.sprite,Tt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:En([Tt.common,Tt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:En([Tt.lights,Tt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Bi.physical={uniforms:En([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const kl={r:0,b:0,g:0},cr=new Ki,gb=new le;function vb(s,t,e,n,r,o,l){const c=new ee(0);let u=o===!0?0:1,f,d,p=null,_=0,v=null;function M(A){let C=A.isScene===!0?A.background:null;return C&&C.isTexture&&(C=(A.backgroundBlurriness>0?e:t).get(C)),C}function S(A){let C=!1;const D=M(A);D===null?g(c,u):D&&D.isColor&&(g(D,1),C=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(A,C){const D=M(C);D&&(D.isCubeTexture||D.mapping===_c)?(d===void 0&&(d=new Zn(new qa(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Do(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),cr.copy(C.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(cr)),d.material.toneMapped=ge.getTransfer(D.colorSpace)!==Pe,(p!==D||_!==D.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,p=D,_=D.version,v=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(f===void 0&&(f=new Zn(new gc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Do(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=D,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.toneMapped=ge.getTransfer(D.colorSpace)!==Pe,D.matrixAutoUpdate===!0&&D.updateMatrix(),f.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||_!==D.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,p=D,_=D.version,v=s.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function g(A,C){A.getRGB(kl,P_(s)),n.buffers.color.setClear(kl.r,kl.g,kl.b,C,l)}function P(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,C=1){c.set(A),u=C,g(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(A){u=A,g(c,u)},render:S,addToRenderList:x,dispose:P}}function xb(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,l=!1;function c(R,F,Z,$,rt){let ot=!1;const tt=p($,Z,F);o!==tt&&(o=tt,f(o.object)),ot=v(R,$,Z,rt),ot&&M(R,$,Z,rt),rt!==null&&t.update(rt,s.ELEMENT_ARRAY_BUFFER),(ot||l)&&(l=!1,C(R,F,Z,$),rt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function u(){return s.createVertexArray()}function f(R){return s.bindVertexArray(R)}function d(R){return s.deleteVertexArray(R)}function p(R,F,Z){const $=Z.wireframe===!0;let rt=n[R.id];rt===void 0&&(rt={},n[R.id]=rt);let ot=rt[F.id];ot===void 0&&(ot={},rt[F.id]=ot);let tt=ot[$];return tt===void 0&&(tt=_(u()),ot[$]=tt),tt}function _(R){const F=[],Z=[],$=[];for(let rt=0;rt<e;rt++)F[rt]=0,Z[rt]=0,$[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:$,object:R,attributes:{},index:null}}function v(R,F,Z,$){const rt=o.attributes,ot=F.attributes;let tt=0;const q=Z.getAttributes();for(const j in q)if(q[j].location>=0){const it=rt[j];let dt=ot[j];if(dt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;tt++}return o.attributesNum!==tt||o.index!==$}function M(R,F,Z,$){const rt={},ot=F.attributes;let tt=0;const q=Z.getAttributes();for(const j in q)if(q[j].location>=0){let it=ot[j];it===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(it=R.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),rt[j]=dt,tt++}o.attributes=rt,o.attributesNum=tt,o.index=$}function S(){const R=o.newAttributes;for(let F=0,Z=R.length;F<Z;F++)R[F]=0}function x(R){g(R,0)}function g(R,F){const Z=o.newAttributes,$=o.enabledAttributes,rt=o.attributeDivisors;Z[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),rt[R]!==F&&(s.vertexAttribDivisor(R,F),rt[R]=F)}function P(){const R=o.newAttributes,F=o.enabledAttributes;for(let Z=0,$=F.length;Z<$;Z++)F[Z]!==R[Z]&&(s.disableVertexAttribArray(Z),F[Z]=0)}function A(R,F,Z,$,rt,ot,tt){tt===!0?s.vertexAttribIPointer(R,F,Z,rt,ot):s.vertexAttribPointer(R,F,Z,$,rt,ot)}function C(R,F,Z,$){S();const rt=$.attributes,ot=Z.getAttributes(),tt=F.defaultAttributeValues;for(const q in ot){const j=ot[q];if(j.location>=0){let gt=rt[q];if(gt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const it=gt.normalized,dt=gt.itemSize,Wt=t.get(gt);if(Wt===void 0)continue;const Ht=Wt.buffer,Qt=Wt.type,Gt=Wt.bytesPerElement,Y=Qt===s.INT||Qt===s.UNSIGNED_INT||gt.gpuType===cf;if(gt.isInterleavedBufferAttribute){const lt=gt.data,Et=lt.stride,te=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<j.locationSize;It++)g(j.location+It,lt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let It=0;It<j.locationSize;It++)x(j.location+It);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let It=0;It<j.locationSize;It++)A(j.location+It,dt/j.locationSize,Qt,it,Et*Gt,(te+dt/j.locationSize*It)*Gt,Y)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<j.locationSize;lt++)g(j.location+lt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<j.locationSize;lt++)x(j.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let lt=0;lt<j.locationSize;lt++)A(j.location+lt,dt/j.locationSize,Qt,it,dt*Gt,dt/j.locationSize*lt*Gt,Y)}}else if(tt!==void 0){const it=tt[q];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(j.location,it);break;case 3:s.vertexAttrib3fv(j.location,it);break;case 4:s.vertexAttrib4fv(j.location,it);break;default:s.vertexAttrib1fv(j.location,it)}}}}P()}function D(){G();for(const R in n){const F=n[R];for(const Z in F){const $=F[Z];for(const rt in $)d($[rt].object),delete $[rt];delete F[Z]}delete n[R]}}function U(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const Z in F){const $=F[Z];for(const rt in $)d($[rt].object),delete $[rt];delete F[Z]}delete n[R.id]}function N(R){for(const F in n){const Z=n[F];if(Z[R.id]===void 0)continue;const $=Z[R.id];for(const rt in $)d($[rt].object),delete $[rt];delete Z[R.id]}}function G(){E(),l=!0,o!==r&&(o=r,f(o.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:G,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:S,enableAttribute:x,disableUnusedAttributes:P}}function yb(s,t,e){let n;function r(f){n=f}function o(f,d){s.drawArrays(n,f,d),e.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawArraysInstanced(n,f,d,p),e.update(d,n,p))}function c(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,p);let v=0;for(let M=0;M<p;M++)v+=d[M];e.update(v,n,1)}function u(f,d,p,_){if(p===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<f.length;M++)l(f[M],d[M],_[M]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,d,0,_,0,p);let M=0;for(let S=0;S<p;S++)M+=d[S]*_[S];e.update(M,n,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Mb(s,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==ii&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const G=N===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Gn&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ni&&!G)}function u(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const d=u(f);d!==f&&(zt("WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const p=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:P,maxVaryings:A,maxFragmentUniforms:C,maxSamples:D,samples:U}}function Sb(s){const t=this;let e=null,n=0,r=!1,o=!1;const l=new Xs,c=new oe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const v=p.length!==0||_||n!==0||r;return r=_,n=p.length,v},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,_){e=d(p,_,0)},this.setState=function(p,_,v){const M=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,g=s.get(p);if(!r||M===null||M.length===0||o&&!x)o?d(null):f();else{const P=o?0:n,A=P*4;let C=g.clippingState||null;u.value=C,C=d(M,_,A,v);for(let D=0;D!==A;++D)C[D]=e[D];g.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,_,v,M){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=u.value,M!==!0||x===null){const g=v+S*4,P=_.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<g)&&(x=new Float32Array(g));for(let A=0,C=v;A!==S;++A,C+=4)l.copy(p[A]).applyMatrix4(P,c),l.normal.toArray(x,C),x[C+3]=l.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function bb(s){let t=new WeakMap;function e(l,c){return c===su?l.mapping=Cr:c===ru&&(l.mapping=Po),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===su||c===ru)if(t.has(l)){const u=t.get(l).texture;return e(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const f=new I_(u.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ys=4,Ep=[.125,.215,.35,.446,.526,.582],dr=20,Tb=256,ha=new yc,wp=new ee;let Sh=null,bh=0,Th=0,Eh=!1;const Eb=new H;class Ap{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){const{size:l=256,position:c=Eb}=o;Sh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,r,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sh,bh,Th),this._renderer.xr.enabled=Eh,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Po?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sh=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ps,format:ii,colorSpace:Pn,depthBuffer:!1},r=Rp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wb(o)),this._blurMaterial=Rb(o,t,e),this._ggxMaterial=Ab(o,t,e)}return r}_compileMaterial(t){const e=new Zn(new ai,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,r,o){const u=new wn(90,1,e,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(wp),p.toneMapping=Wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new qa,new gr({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,x=S.material;let g=!1;const P=t.background;P?P.isColor&&(x.color.copy(P),t.background=null,g=!0):(x.color.copy(wp),g=!0);for(let A=0;A<6;A++){const C=A%3;C===0?(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+d[A],o.y,o.z)):C===1?(u.up.set(0,0,f[A]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+d[A],o.z)):(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+d[A]));const D=this._cubeSize;so(r,C*D,A>2?D:0,D,D),p.setRenderTarget(r),g&&p.render(S,u),p.render(t,u)}p.toneMapping=v,p.autoClear=_,t.background=P}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Cr||t.mapping===Po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());const o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const c=o.uniforms;c.envMap.value=t;const u=this._cubeSize;so(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const u=l.uniforms,f=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(f*f-d*d),_=0+f*1.25,v=p*_,{_lodMax:M}=this,S=this._sizeLods[n],x=3*S*(n>M-Ys?n-M+Ys:0),g=4*(this._cubeSize-S);u.envMap.value=t.texture,u.roughness.value=v,u.mipInt.value=M-e,so(o,x,g,3*S,2*S),r.setRenderTarget(o),r.render(c,ha),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=M-n,so(t,x,g,3*S,2*S),r.setRenderTarget(t),r.render(c,ha)}_blur(t,e,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",o),this._halfBlur(l,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,l,c){const u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=f;const _=f.uniforms,v=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*dr-1),S=o/M,x=isFinite(o)?1+Math.floor(d*S):dr;x>dr&&zt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${dr}`);const g=[];let P=0;for(let N=0;N<dr;++N){const G=N/S,E=Math.exp(-G*G/2);g.push(E),N===0?P+=E:N<x&&(P+=2*E)}for(let N=0;N<g.length;N++)g[N]=g[N]/P;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=g,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:A}=this;_.dTheta.value=M,_.mipInt.value=A-n;const C=this._sizeLods[r],D=3*C*(r>A-Ys?r-A+Ys:0),U=4*(this._cubeSize-C);so(e,D,U,3*C,2*C),u.setRenderTarget(e),u.render(p,ha)}}function wb(s){const t=[],e=[],n=[];let r=s;const o=s-Ys+1+Ep.length;for(let l=0;l<o;l++){const c=Math.pow(2,r);t.push(c);let u=1/c;l>s-Ys?u=Ep[l-s+Ys-1]:l===0&&(u=0),e.push(u);const f=1/(c-2),d=-f,p=1+f,_=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,M=6,S=3,x=2,g=1,P=new Float32Array(S*M*v),A=new Float32Array(x*M*v),C=new Float32Array(g*M*v);for(let U=0;U<v;U++){const N=U%3*2/3-1,G=U>2?0:-1,E=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];P.set(E,S*M*U),A.set(_,x*M*U);const R=[U,U,U,U,U,U];C.set(R,g*M*U)}const D=new ai;D.setAttribute("position",new An(P,S)),D.setAttribute("uv",new An(A,x)),D.setAttribute("faceIndex",new An(C,g)),n.push(new Zn(D,null)),r>Ys&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Rp(s,t,e){const n=new Xi(s,t,e);return n.texture.mapping=_c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function Ab(s,t,e){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Rb(s,t,e){const n=new Float32Array(dr),r=new H(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Pp(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Cp(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pb(s){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const u=c.mapping,f=u===su||u===ru,d=u===Cr||u===Po;if(f||d){let p=t.get(c);const _=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return e===null&&(e=new Ap(s)),p=f?e.fromEquirectangular(c,p):e.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return f&&v&&v.height>0||d&&v&&r(v)?(e===null&&(e=new Ap(s)),p=f?e.fromEquirectangular(c):e.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",o),p.texture):null}}}return c}function r(c){let u=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&u++;return u===f}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function Cb(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=s.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ia("WebGLRenderer: "+n+" extension not supported."),r}}}function Lb(s,t,e,n){const r={},o=new WeakMap;function l(p){const _=p.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete r[_.id];const v=o.get(_);v&&(t.remove(v),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(p,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(p){const _=p.attributes;for(const v in _)t.update(_[v],s.ARRAY_BUFFER)}function f(p){const _=[],v=p.index,M=p.attributes.position;let S=0;if(v!==null){const P=v.array;S=v.version;for(let A=0,C=P.length;A<C;A+=3){const D=P[A+0],U=P[A+1],N=P[A+2];_.push(D,U,U,N,N,D)}}else if(M!==void 0){const P=M.array;S=M.version;for(let A=0,C=P.length/3-1;A<C;A+=3){const D=A+0,U=A+1,N=A+2;_.push(D,U,U,N,N,D)}}else return;const x=new(S_(_)?R_:A_)(_,1);x.version=S;const g=o.get(p);g&&t.remove(g),o.set(p,x)}function d(p){const _=o.get(p);if(_){const v=p.index;v!==null&&_.version<v.version&&f(p)}else f(p);return o.get(p)}return{get:c,update:u,getWireframeAttribute:d}}function Ib(s,t,e){let n;function r(_){n=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function u(_,v){s.drawElements(n,v,o,_*l),e.update(v,n,1)}function f(_,v,M){M!==0&&(s.drawElementsInstanced(n,v,o,_*l,M),e.update(v,n,M))}function d(_,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,_,0,M);let x=0;for(let g=0;g<M;g++)x+=v[g];e.update(x,n,1)}function p(_,v,M,S){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<_.length;g++)f(_[g]/l,v[g],S[g]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,o,_,0,S,0,M);let g=0;for(let P=0;P<M;P++)g+=v[P]*S[P];e.update(g,n,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Db(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=c*(o/3);break;case s.LINES:e.lines+=c*(o/2);break;case s.LINE_STRIP:e.lines+=c*(o-1);break;case s.LINE_LOOP:e.lines+=c*o;break;case s.POINTS:e.points+=c*o;break;default:Yt("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Nb(s,t,e){const n=new WeakMap,r=new Be;function o(l,c,u){const f=l.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0;let _=n.get(c);if(_===void 0||_.count!==p){let R=function(){G.dispose(),n.delete(c),c.removeEventListener("dispose",R)};var v=R;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let C=0;M===!0&&(C=1),S===!0&&(C=2),x===!0&&(C=3);let D=c.attributes.position.count*C,U=1;D>t.maxTextureSize&&(U=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const N=new Float32Array(D*U*4*p),G=new T_(N,D,U,p);G.type=ni,G.needsUpdate=!0;const E=C*4;for(let F=0;F<p;F++){const Z=g[F],$=P[F],rt=A[F],ot=D*U*4*F;for(let tt=0;tt<Z.count;tt++){const q=tt*E;M===!0&&(r.fromBufferAttribute(Z,tt),N[ot+q+0]=r.x,N[ot+q+1]=r.y,N[ot+q+2]=r.z,N[ot+q+3]=0),S===!0&&(r.fromBufferAttribute($,tt),N[ot+q+4]=r.x,N[ot+q+5]=r.y,N[ot+q+6]=r.z,N[ot+q+7]=0),x===!0&&(r.fromBufferAttribute(rt,tt),N[ot+q+8]=r.x,N[ot+q+9]=r.y,N[ot+q+10]=r.z,N[ot+q+11]=rt.itemSize===4?r.w:1)}}_={count:p,texture:G,size:new $t(D,U)},n.set(c,_),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let M=0;for(let x=0;x<f.length;x++)M+=f[x];const S=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:o}}function Ub(s,t,e,n){let r=new WeakMap;function o(u){const f=n.render.frame,d=u.geometry,p=t.get(u,d);if(r.get(p)!==f&&(t.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return p}function l(){r=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:l}}const Ob={[r_]:"LINEAR_TONE_MAPPING",[o_]:"REINHARD_TONE_MAPPING",[a_]:"CINEON_TONE_MAPPING",[l_]:"ACES_FILMIC_TONE_MAPPING",[h_]:"AGX_TONE_MAPPING",[u_]:"NEUTRAL_TONE_MAPPING",[c_]:"CUSTOM_TONE_MAPPING"};function Fb(s,t,e,n,r){const o=new Xi(t,e,{type:s,depthBuffer:n,stencilBuffer:r}),l=new Xi(t,e,{type:Ps,depthBuffer:!1,stencilBuffer:!1}),c=new ai;c.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ti([0,2,0,0,2,0],2));const u=new ny({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Zn(c,u),d=new yc(-1,1,1,-1,0,1);let p=null,_=null,v=!1,M,S=null,x=[],g=!1;this.setSize=function(P,A){o.setSize(P,A),l.setSize(P,A);for(let C=0;C<x.length;C++){const D=x[C];D.setSize&&D.setSize(P,A)}},this.setEffects=function(P){x=P,g=x.length>0&&x[0].isRenderPass===!0;const A=o.width,C=o.height;for(let D=0;D<x.length;D++){const U=x[D];U.setSize&&U.setSize(A,C)}},this.begin=function(P,A){if(v||P.toneMapping===Wi&&x.length===0)return!1;if(S=A,A!==null){const C=A.width,D=A.height;(o.width!==C||o.height!==D)&&this.setSize(C,D)}return g===!1&&P.setRenderTarget(o),M=P.toneMapping,P.toneMapping=Wi,!0},this.hasRenderPass=function(){return g},this.end=function(P,A){P.toneMapping=M,v=!0;let C=o,D=l;for(let U=0;U<x.length;U++){const N=x[U];if(N.enabled!==!1&&(N.render(P,D,C,A),N.needsSwap!==!1)){const G=C;C=D,D=G}}if(p!==P.outputColorSpace||_!==P.toneMapping){p=P.outputColorSpace,_=P.toneMapping,u.defines={},ge.getTransfer(p)===Pe&&(u.defines.SRGB_TRANSFER="");const U=Ob[_];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,P.setRenderTarget(S),P.render(f,d),S=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),l.dispose(),c.dispose(),u.dispose()}}const H_=new fn,Hu=new Da(1,1),G_=new T_,W_=new Tx,X_=new L_,Lp=[],Ip=[],Dp=new Float32Array(16),Np=new Float32Array(9),Up=new Float32Array(4);function Xo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let o=Lp[r];if(o===void 0&&(o=new Float32Array(r),Lp[r]=o),t!==0){n.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=e,s[l].toArray(o,c)}return o}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function rn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sc(s,t){let e=Ip[t];e===void 0&&(e=new Int32Array(t),Ip[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),rn(e,t)}}function zb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),rn(e,t)}}function Vb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),rn(e,t)}}function Hb(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Up.set(n),s.uniformMatrix2fv(this.addr,!1,Up),rn(e,n)}}function Gb(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Np.set(n),s.uniformMatrix3fv(this.addr,!1,Np),rn(e,n)}}function Wb(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Dp.set(n),s.uniformMatrix4fv(this.addr,!1,Dp),rn(e,n)}}function Xb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),rn(e,t)}}function qb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),rn(e,t)}}function Yb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),rn(e,t)}}function jb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),rn(e,t)}}function Jb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),rn(e,t)}}function $b(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),rn(e,t)}}function Qb(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let o;this.type===s.SAMPLER_2D_SHADOW?(Hu.compareFunction=e.isReversedDepthBuffer()?gf:_f,o=Hu):o=H_,e.setTexture2D(t||o,r)}function tT(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||W_,r)}function eT(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||X_,r)}function nT(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||G_,r)}function iT(s){switch(s){case 5126:return Bb;case 35664:return kb;case 35665:return zb;case 35666:return Vb;case 35674:return Hb;case 35675:return Gb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return Zb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return Kb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return nT}}function sT(s,t){s.uniform1fv(this.addr,t)}function rT(s,t){const e=Xo(t,this.size,2);s.uniform2fv(this.addr,e)}function oT(s,t){const e=Xo(t,this.size,3);s.uniform3fv(this.addr,e)}function aT(s,t){const e=Xo(t,this.size,4);s.uniform4fv(this.addr,e)}function lT(s,t){const e=Xo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cT(s,t){const e=Xo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hT(s,t){const e=Xo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function uT(s,t){s.uniform1iv(this.addr,t)}function fT(s,t){s.uniform2iv(this.addr,t)}function dT(s,t){s.uniform3iv(this.addr,t)}function pT(s,t){s.uniform4iv(this.addr,t)}function mT(s,t){s.uniform1uiv(this.addr,t)}function _T(s,t){s.uniform2uiv(this.addr,t)}function gT(s,t){s.uniform3uiv(this.addr,t)}function vT(s,t){s.uniform4uiv(this.addr,t)}function xT(s,t,e){const n=this.cache,r=t.length,o=Sc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));let l;this.type===s.SAMPLER_2D_SHADOW?l=Hu:l=H_;for(let c=0;c!==r;++c)e.setTexture2D(t[c]||l,o[c])}function yT(s,t,e){const n=this.cache,r=t.length,o=Sc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||W_,o[l])}function MT(s,t,e){const n=this.cache,r=t.length,o=Sc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||X_,o[l])}function ST(s,t,e){const n=this.cache,r=t.length,o=Sc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||G_,o[l])}function bT(s){switch(s){case 5126:return sT;case 35664:return rT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return cT;case 35676:return hT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return _T;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ST}}class TT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iT(e.type)}}class ET{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bT(e.type)}}class wT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const c=r[o];c.setValue(t,e[c.id],n)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function Op(s,t){s.seq.push(t),s.map[t.id]=t}function AT(s,t,e){const n=s.name,r=n.length;for(wh.lastIndex=0;;){const o=wh.exec(n),l=wh.lastIndex;let c=o[1];const u=o[2]==="]",f=o[3];if(u&&(c=c|0),f===void 0||f==="["&&l+2===r){Op(e,f===void 0?new TT(c,s,t):new ET(c,s,t));break}else{let p=e.map[c];p===void 0&&(p=new wT(c),Op(e,p)),e=p}}}class Jl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=t.getActiveUniform(e,l),u=t.getUniformLocation(e,c.name);AT(c,u,this)}const r=[],o=[];for(const l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,l=e.length;o!==l;++o){const c=e[o],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const l=t[r];l.id in e&&n.push(l)}return n}}function Fp(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const RT=37297;let PT=0;function CT(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){const c=l+1;n.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return n.join(`
`)}const Bp=new oe;function LT(s){ge._getMatrix(Bp,ge.workingColorSpace,s);const t=`mat3( ${Bp.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case nc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function kp(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+CT(s.getShaderSource(t),c)}else return o}function IT(s,t){const e=LT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const DT={[r_]:"Linear",[o_]:"Reinhard",[a_]:"Cineon",[l_]:"ACESFilmic",[h_]:"AgX",[u_]:"Neutral",[c_]:"Custom"};function NT(s,t){const e=DT[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zl=new H;function UT(){ge.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),t=zl.y.toFixed(4),e=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function FT(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function BT(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=s.getActiveAttrib(t,r),l=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),e[l]={type:o.type,location:s.getAttribLocation(t,l),locationSize:c}}return e}function ga(s){return s!==""}function zp(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(s){return s.replace(kT,VT)}const zT=new Map;function VT(s,t){let e=ae[t];if(e===void 0){const n=zT.get(t);if(n!==void 0)e=ae[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gu(e)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(s){return s.replace(HT,GT)}function GT(s,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Gp(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const WT={[Xl]:"SHADOWMAP_TYPE_PCF",[ma]:"SHADOWMAP_TYPE_VSM"};function XT(s){return WT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZT={[Cr]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function qT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ZT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const YT={[Po]:"ENVMAP_MODE_REFRACTION"};function jT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KT={[s_]:"ENVMAP_BLENDING_MULTIPLY",[V0]:"ENVMAP_BLENDING_MIX",[H0]:"ENVMAP_BLENDING_ADD"};function JT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":KT[s.combine]||"ENVMAP_BLENDING_NONE"}function $T(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function QT(s,t,e,n){const r=s.getContext(),o=e.defines;let l=e.vertexShader,c=e.fragmentShader;const u=XT(e),f=qT(e),d=jT(e),p=JT(e),_=$T(e),v=OT(e),M=FT(o),S=r.createProgram();let x,g,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ga).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ga).join(`
`),g.length>0&&(g+=`
`)):(x=[Gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),g=[Gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?ae.tonemapping_pars_fragment:"",e.toneMapping!==Wi?NT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,IT("linearToOutputTexel",e.outputColorSpace),UT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),l=Gu(l),l=zp(l,e),l=Vp(l,e),c=Gu(c),c=zp(c,e),c=Vp(c,e),l=Hp(l),c=Hp(c),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=P+x+l,C=P+g+c,D=Fp(r,r.VERTEX_SHADER,A),U=Fp(r,r.FRAGMENT_SHADER,C);r.attachShader(S,D),r.attachShader(S,U),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function N(F){if(s.debug.checkShaderErrors){const Z=r.getProgramInfoLog(S)||"",$=r.getShaderInfoLog(D)||"",rt=r.getShaderInfoLog(U)||"",ot=Z.trim(),tt=$.trim(),q=rt.trim();let j=!0,gt=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,S,D,U);else{const it=kp(r,D,"vertex"),dt=kp(r,U,"fragment");Yt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+it+`
`+dt)}else ot!==""?zt("WebGLProgram: Program Info Log:",ot):(tt===""||q==="")&&(gt=!1);gt&&(F.diagnostics={runnable:j,programLog:ot,vertexShader:{log:tt,prefix:x},fragmentShader:{log:q,prefix:g}})}r.deleteShader(D),r.deleteShader(U),G=new Jl(r,S),E=BT(r,S)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,RT)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=PT++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=U,this}let tE=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nE(t),e.set(t,n)),n}}class nE{constructor(t){this.id=tE++,this.code=t,this.usedTimes=0}}function iE(s,t,e,n,r,o,l){const c=new E_,u=new eE,f=new Set,d=[],p=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return f.add(E),E===0?"uv":`uv${E}`}function x(E,R,F,Z,$){const rt=Z.fog,ot=$.geometry,tt=E.isMeshStandardMaterial?Z.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||tt),j=q&&q.mapping===_c?q.image.height:null,gt=M[E.type];E.precision!==null&&(v=r.getMaxPrecision(E.precision),v!==E.precision&&zt("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const it=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,dt=it!==void 0?it.length:0;let Wt=0;ot.morphAttributes.position!==void 0&&(Wt=1),ot.morphAttributes.normal!==void 0&&(Wt=2),ot.morphAttributes.color!==void 0&&(Wt=3);let Ht,Qt,Gt,Y;if(gt){const we=Bi[gt];Ht=we.vertexShader,Qt=we.fragmentShader}else Ht=E.vertexShader,Qt=E.fragmentShader,u.update(E),Gt=u.getVertexShaderID(E),Y=u.getFragmentShaderID(E);const lt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),te=$.isInstancedMesh===!0,It=$.isBatchedMesh===!0,pe=!!E.map,Ve=!!E.matcap,fe=!!q,Ee=!!E.aoMap,Ae=!!E.lightMap,ne=!!E.bumpMap,He=!!E.normalMap,B=!!E.displacementMap,We=!!E.emissiveMap,Se=!!E.metalnessMap,Re=!!E.roughnessMap,Ut=E.anisotropy>0,I=E.clearcoat>0,b=E.dispersion>0,z=E.iridescence>0,st=E.sheen>0,ct=E.transmission>0,nt=Ut&&!!E.anisotropyMap,Ft=I&&!!E.clearcoatMap,xt=I&&!!E.clearcoatNormalMap,Dt=I&&!!E.clearcoatRoughnessMap,Xt=z&&!!E.iridescenceMap,ut=z&&!!E.iridescenceThicknessMap,yt=st&&!!E.sheenColorMap,Lt=st&&!!E.sheenRoughnessMap,Ot=!!E.specularMap,_t=!!E.specularColorMap,re=!!E.specularIntensityMap,k=ct&&!!E.transmissionMap,bt=ct&&!!E.thicknessMap,mt=!!E.gradientMap,At=!!E.alphaMap,ft=E.alphaTest>0,at=!!E.alphaHash,Mt=!!E.extensions;let jt=Wi;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(jt=s.toneMapping);const Ie={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:Ht,fragmentShader:Qt,defines:E.defines,customVertexShaderID:Gt,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:It,batchingColor:It&&$._colorsTexture!==null,instancing:te,instancingColor:te&&$.instanceColor!==null,instancingMorph:te&&$.morphTexture!==null,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Pn,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:Ve,envMap:fe,envMapMode:fe&&q.mapping,envMapCubeUVHeight:j,aoMap:Ee,lightMap:Ae,bumpMap:ne,normalMap:He,displacementMap:B,emissiveMap:We,normalMapObjectSpace:He&&E.normalMapType===q0,normalMapTangentSpace:He&&E.normalMapType===M_,metalnessMap:Se,roughnessMap:Re,anisotropy:Ut,anisotropyMap:nt,clearcoat:I,clearcoatMap:Ft,clearcoatNormalMap:xt,clearcoatRoughnessMap:Dt,dispersion:b,iridescence:z,iridescenceMap:Xt,iridescenceThicknessMap:ut,sheen:st,sheenColorMap:yt,sheenRoughnessMap:Lt,specularMap:Ot,specularColorMap:_t,specularIntensityMap:re,transmission:ct,transmissionMap:k,thicknessMap:bt,gradientMap:mt,opaque:E.transparent===!1&&E.blending===uo&&E.alphaToCoverage===!1,alphaMap:At,alphaTest:ft,alphaHash:at,combine:E.combine,mapUv:pe&&S(E.map.channel),aoMapUv:Ee&&S(E.aoMap.channel),lightMapUv:Ae&&S(E.lightMap.channel),bumpMapUv:ne&&S(E.bumpMap.channel),normalMapUv:He&&S(E.normalMap.channel),displacementMapUv:B&&S(E.displacementMap.channel),emissiveMapUv:We&&S(E.emissiveMap.channel),metalnessMapUv:Se&&S(E.metalnessMap.channel),roughnessMapUv:Re&&S(E.roughnessMap.channel),anisotropyMapUv:nt&&S(E.anisotropyMap.channel),clearcoatMapUv:Ft&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:xt&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&S(E.sheenRoughnessMap.channel),specularMapUv:Ot&&S(E.specularMap.channel),specularColorMapUv:_t&&S(E.specularColorMap.channel),specularIntensityMapUv:re&&S(E.specularIntensityMap.channel),transmissionMapUv:k&&S(E.transmissionMap.channel),thicknessMapUv:bt&&S(E.thicknessMap.channel),alphaMapUv:At&&S(E.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(He||Ut),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ot.attributes.uv&&(pe||At),fog:!!rt,useFog:E.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:$.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Wt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===Pe,decodeVideoTextureEmissive:We&&E.emissiveMap.isVideoTexture===!0&&ge.getTransfer(E.emissiveMap.colorSpace)===Pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ki,flipSided:E.side===On,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Mt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&E.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ie.vertexUv1s=f.has(1),Ie.vertexUv2s=f.has(2),Ie.vertexUv3s=f.has(3),f.clear(),Ie}function g(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)R.push(F),R.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(P(R,E),A(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function P(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function A(E,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),E.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),E.push(c.mask)}function C(E){const R=M[E.type];let F;if(R){const Z=Bi[R];F=Fx.clone(Z.uniforms)}else F=E.uniforms;return F}function D(E,R){let F=p.get(R);return F!==void 0?++F.usedTimes:(F=new QT(s,R,E,o),d.push(F),p.set(R,F)),F}function U(E){if(--E.usedTimes===0){const R=d.indexOf(E);d[R]=d[d.length-1],d.pop(),p.delete(E.cacheKey),E.destroy()}}function N(E){u.remove(E)}function G(){u.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:D,releaseProgram:U,releaseShaderCache:N,programs:d,dispose:G}}function sE(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function r(l,c,u){s.get(l)[c]=u}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function rE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xp(){const s=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function l(p,_,v,M,S,x){let g=s[t];return g===void 0?(g={id:p.id,object:p,geometry:_,material:v,groupOrder:M,renderOrder:p.renderOrder,z:S,group:x},s[t]=g):(g.id=p.id,g.object=p,g.geometry=_,g.material=v,g.groupOrder=M,g.renderOrder=p.renderOrder,g.z=S,g.group=x),t++,g}function c(p,_,v,M,S,x){const g=l(p,_,v,M,S,x);v.transmission>0?n.push(g):v.transparent===!0?r.push(g):e.push(g)}function u(p,_,v,M,S,x){const g=l(p,_,v,M,S,x);v.transmission>0?n.unshift(g):v.transparent===!0?r.unshift(g):e.unshift(g)}function f(p,_){e.length>1&&e.sort(p||rE),n.length>1&&n.sort(_||Wp),r.length>1&&r.sort(_||Wp)}function d(){for(let p=t,_=s.length;p<_;p++){const v=s[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:c,unshift:u,finish:d,sort:f}}function oE(){let s=new WeakMap;function t(n,r){const o=s.get(n);let l;return o===void 0?(l=new Xp,s.set(n,[l])):r>=o.length?(l=new Xp,o.push(l)):l=o[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function aE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new ee};break;case"SpotLight":e={position:new H,direction:new H,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function lE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let cE=0;function hE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uE(s){const t=new aE,e=lE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);const r=new H,o=new le,l=new le;function c(f){let d=0,p=0,_=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let v=0,M=0,S=0,x=0,g=0,P=0,A=0,C=0,D=0,U=0,N=0;f.sort(hE);for(let E=0,R=f.length;E<R;E++){const F=f[E],Z=F.color,$=F.intensity,rt=F.distance;let ot=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Lo?ot=F.shadow.map.texture:ot=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=Z.r*$,p+=Z.g*$,_+=Z.b*$;else if(F.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(F.sh.coefficients[tt],$);N++}else if(F.isDirectionalLight){const tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,j=e.get(F);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[v]=j,n.directionalShadowMap[v]=ot,n.directionalShadowMatrix[v]=F.shadow.matrix,P++}n.directional[v]=tt,v++}else if(F.isSpotLight){const tt=t.get(F);tt.position.setFromMatrixPosition(F.matrixWorld),tt.color.copy(Z).multiplyScalar($),tt.distance=rt,tt.coneCos=Math.cos(F.angle),tt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),tt.decay=F.decay,n.spot[S]=tt;const q=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,q.updateMatrices(F),F.castShadow&&U++),n.spotLightMatrix[S]=q.matrix,F.castShadow){const j=e.get(F);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=ot,C++}S++}else if(F.isRectAreaLight){const tt=t.get(F);tt.color.copy(Z).multiplyScalar($),tt.halfWidth.set(F.width*.5,0,0),tt.halfHeight.set(0,F.height*.5,0),n.rectArea[x]=tt,x++}else if(F.isPointLight){const tt=t.get(F);if(tt.color.copy(F.color).multiplyScalar(F.intensity),tt.distance=F.distance,tt.decay=F.decay,F.castShadow){const q=F.shadow,j=e.get(F);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[M]=j,n.pointShadowMap[M]=ot,n.pointShadowMatrix[M]=F.shadow.matrix,A++}n.point[M]=tt,M++}else if(F.isHemisphereLight){const tt=t.get(F);tt.skyColor.copy(F.color).multiplyScalar($),tt.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[g]=tt,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=_;const G=n.hash;(G.directionalLength!==v||G.pointLength!==M||G.spotLength!==S||G.rectAreaLength!==x||G.hemiLength!==g||G.numDirectionalShadows!==P||G.numPointShadows!==A||G.numSpotShadows!==C||G.numSpotMaps!==D||G.numLightProbes!==N)&&(n.directional.length=v,n.spot.length=S,n.rectArea.length=x,n.point.length=M,n.hemi.length=g,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=C+D-U,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=N,G.directionalLength=v,G.pointLength=M,G.spotLength=S,G.rectAreaLength=x,G.hemiLength=g,G.numDirectionalShadows=P,G.numPointShadows=A,G.numSpotShadows=C,G.numSpotMaps=D,G.numLightProbes=N,n.version=cE++)}function u(f,d){let p=0,_=0,v=0,M=0,S=0;const x=d.matrixWorldInverse;for(let g=0,P=f.length;g<P;g++){const A=f[g];if(A.isDirectionalLight){const C=n.directional[p];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),p++}else if(A.isSpotLight){const C=n.spot[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(x),v++}else if(A.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),l.identity(),o.copy(A.matrixWorld),o.premultiply(x),l.extractRotation(o),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),M++}else if(A.isPointLight){const C=n.point[_];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),_++}else if(A.isHemisphereLight){const C=n.hemi[S];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(x),S++}}}return{setup:c,setupView:u,state:n}}function Zp(s){const t=new uE(s),e=[],n=[];function r(d){f.camera=d,e.length=0,n.length=0}function o(d){e.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function fE(s){let t=new WeakMap;function e(r,o=0){const l=t.get(r);let c;return l===void 0?(c=new Zp(s),t.set(r,[c])):o>=l.length?(c=new Zp(s),l.push(c)):c=l[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}const dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mE=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],_E=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],qp=new le,ua=new H,Ah=new H;function gE(s,t,e){let n=new bf;const r=new $t,o=new $t,l=new Be,c=new iy,u=new sy,f={},d=e.maxTextureSize,p={[Rs]:On,[On]:Rs,[ki]:ki},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:dE,fragmentShader:pE}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const M=new ai;M.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Zn(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let g=this.type;this.render=function(U,N,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;U.type===S0&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=Xl);const E=s.getRenderTarget(),R=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Es),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=g!==this.type;$&&N.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(ot=>ot.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,ot=U.length;rt<ot;rt++){const tt=U[rt],q=tt.shadow;if(q===void 0){zt("WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const j=q.getFrameExtents();if(r.multiply(j),o.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/j.x),r.x=o.x*j.x,q.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/j.y),r.y=o.y*j.y,q.mapSize.y=o.y)),q.map===null||$===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ma){if(tt.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xi(r.x,r.y,{format:Lo,type:Ps,minFilter:en,magFilter:en,generateMipmaps:!1}),q.map.texture.name=tt.name+".shadowMap",q.map.depthTexture=new Da(r.x,r.y,ni),q.map.depthTexture.name=tt.name+".shadowMapDepth",q.map.depthTexture.format=Cs,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn}else{tt.isPointLight?(q.map=new I_(r.x),q.map.depthTexture=new ey(r.x,Yi)):(q.map=new Xi(r.x,r.y),q.map.depthTexture=new Da(r.x,r.y,Yi)),q.map.depthTexture.name=tt.name+".shadowMap",q.map.depthTexture.format=Cs;const it=s.state.buffers.depth.getReversed();this.type===Xl?(q.map.depthTexture.compareFunction=it?gf:_f,q.map.depthTexture.minFilter=en,q.map.depthTexture.magFilter=en):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn)}q.camera.updateProjectionMatrix()}const gt=q.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<gt;it++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,it),s.clear();else{it===0&&(s.setRenderTarget(q.map),s.clear());const dt=q.getViewport(it);l.set(o.x*dt.x,o.y*dt.y,o.x*dt.z,o.y*dt.w),Z.viewport(l)}if(tt.isPointLight){const dt=q.camera,Wt=q.matrix,Ht=tt.distance||dt.far;Ht!==dt.far&&(dt.far=Ht,dt.updateProjectionMatrix()),ua.setFromMatrixPosition(tt.matrixWorld),dt.position.copy(ua),Ah.copy(dt.position),Ah.add(mE[it]),dt.up.copy(_E[it]),dt.lookAt(Ah),dt.updateMatrixWorld(),Wt.makeTranslation(-ua.x,-ua.y,-ua.z),qp.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(qp,dt.coordinateSystem,dt.reversedDepth)}else q.updateMatrices(tt);n=q.getFrustum(),C(N,G,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===ma&&P(q,G),q.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(E,R,F)};function P(U,N){const G=t.update(S);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Xi(r.x,r.y,{format:Lo,type:Ps})),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(N,null,G,_,S,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(N,null,G,v,S,null)}function A(U,N,G,E){let R=null;const F=G.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)R=F;else if(R=G.isPointLight===!0?u:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Z=R.uuid,$=N.uuid;let rt=f[Z];rt===void 0&&(rt={},f[Z]=rt);let ot=rt[$];ot===void 0&&(ot=R.clone(),rt[$]=ot,N.addEventListener("dispose",D)),R=ot}if(R.visible=N.visible,R.wireframe=N.wireframe,E===ma?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:p[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Z=s.properties.get(R);Z.light=G}return R}function C(U,N,G,E,R){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===ma)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,U.matrixWorld);const $=t.update(U),rt=U.material;if(Array.isArray(rt)){const ot=$.groups;for(let tt=0,q=ot.length;tt<q;tt++){const j=ot[tt],gt=rt[j.materialIndex];if(gt&&gt.visible){const it=A(U,gt,E,R);U.onBeforeShadow(s,U,N,G,$,it,j),s.renderBufferDirect(G,null,$,it,U,j),U.onAfterShadow(s,U,N,G,$,it,j)}}}else if(rt.visible){const ot=A(U,rt,E,R);U.onBeforeShadow(s,U,N,G,$,ot,null),s.renderBufferDirect(G,null,$,ot,U,null),U.onAfterShadow(s,U,N,G,$,ot,null)}}const Z=U.children;for(let $=0,rt=Z.length;$<rt;$++)C(Z[$],N,G,E,R)}function D(U){U.target.removeEventListener("dispose",D);for(const G in f){const E=f[G],R=U.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}const vE={[Jh]:$h,[Qh]:nu,[tu]:iu,[Ro]:eu,[$h]:Jh,[nu]:Qh,[iu]:tu,[eu]:Ro};function xE(s,t){function e(){let k=!1;const bt=new Be;let mt=null;const At=new Be(0,0,0,0);return{setMask:function(ft){mt!==ft&&!k&&(s.colorMask(ft,ft,ft,ft),mt=ft)},setLocked:function(ft){k=ft},setClear:function(ft,at,Mt,jt,Ie){Ie===!0&&(ft*=jt,at*=jt,Mt*=jt),bt.set(ft,at,Mt,jt),At.equals(bt)===!1&&(s.clearColor(ft,at,Mt,jt),At.copy(bt))},reset:function(){k=!1,mt=null,At.set(-1,0,0,0)}}}function n(){let k=!1,bt=!1,mt=null,At=null,ft=null;return{setReversed:function(at){if(bt!==at){const Mt=t.get("EXT_clip_control");at?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),bt=at;const jt=ft;ft=null,this.setClear(jt)}},getReversed:function(){return bt},setTest:function(at){at?lt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(at){mt!==at&&!k&&(s.depthMask(at),mt=at)},setFunc:function(at){if(bt&&(at=vE[at]),At!==at){switch(at){case Jh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case Ro:s.depthFunc(s.LEQUAL);break;case tu:s.depthFunc(s.EQUAL);break;case eu:s.depthFunc(s.GEQUAL);break;case nu:s.depthFunc(s.GREATER);break;case iu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=at}},setLocked:function(at){k=at},setClear:function(at){ft!==at&&(bt&&(at=1-at),s.clearDepth(at),ft=at)},reset:function(){k=!1,mt=null,At=null,ft=null,bt=!1}}}function r(){let k=!1,bt=null,mt=null,At=null,ft=null,at=null,Mt=null,jt=null,Ie=null;return{setTest:function(we){k||(we?lt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(we){bt!==we&&!k&&(s.stencilMask(we),bt=we)},setFunc:function(we,Cn,li){(mt!==we||At!==Cn||ft!==li)&&(s.stencilFunc(we,Cn,li),mt=we,At=Cn,ft=li)},setOp:function(we,Cn,li){(at!==we||Mt!==Cn||jt!==li)&&(s.stencilOp(we,Cn,li),at=we,Mt=Cn,jt=li)},setLocked:function(we){k=we},setClear:function(we){Ie!==we&&(s.clearStencil(we),Ie=we)},reset:function(){k=!1,bt=null,mt=null,At=null,ft=null,at=null,Mt=null,jt=null,Ie=null}}}const o=new e,l=new n,c=new r,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,v=[],M=null,S=!1,x=null,g=null,P=null,A=null,C=null,D=null,U=null,N=new ee(0,0,0),G=0,E=!1,R=null,F=null,Z=null,$=null,rt=null;const ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),tt=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),tt=q>=2);let gt=null,it={};const dt=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),Ht=new Be().fromArray(dt),Qt=new Be().fromArray(Wt);function Gt(k,bt,mt,At){const ft=new Uint8Array(4),at=s.createTexture();s.bindTexture(k,at),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<mt;Mt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(bt+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return at}const Y={};Y[s.TEXTURE_2D]=Gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),lt(s.DEPTH_TEST),l.setFunc(Ro),ne(!1),He(Id),lt(s.CULL_FACE),Ee(Es);function lt(k){d[k]!==!0&&(s.enable(k),d[k]=!0)}function Et(k){d[k]!==!1&&(s.disable(k),d[k]=!1)}function te(k,bt){return p[k]!==bt?(s.bindFramebuffer(k,bt),p[k]=bt,k===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=bt),k===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function It(k,bt){let mt=v,At=!1;if(k){mt=_.get(bt),mt===void 0&&(mt=[],_.set(bt,mt));const ft=k.textures;if(mt.length!==ft.length||mt[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Mt=ft.length;at<Mt;at++)mt[at]=s.COLOR_ATTACHMENT0+at;mt.length=ft.length,At=!0}}else mt[0]!==s.BACK&&(mt[0]=s.BACK,At=!0);At&&s.drawBuffers(mt)}function pe(k){return M!==k?(s.useProgram(k),M=k,!0):!1}const Ve={[fr]:s.FUNC_ADD,[T0]:s.FUNC_SUBTRACT,[E0]:s.FUNC_REVERSE_SUBTRACT};Ve[w0]=s.MIN,Ve[A0]=s.MAX;const fe={[R0]:s.ZERO,[P0]:s.ONE,[C0]:s.SRC_COLOR,[jh]:s.SRC_ALPHA,[O0]:s.SRC_ALPHA_SATURATE,[N0]:s.DST_COLOR,[I0]:s.DST_ALPHA,[L0]:s.ONE_MINUS_SRC_COLOR,[Kh]:s.ONE_MINUS_SRC_ALPHA,[U0]:s.ONE_MINUS_DST_COLOR,[D0]:s.ONE_MINUS_DST_ALPHA,[F0]:s.CONSTANT_COLOR,[B0]:s.ONE_MINUS_CONSTANT_COLOR,[k0]:s.CONSTANT_ALPHA,[z0]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(k,bt,mt,At,ft,at,Mt,jt,Ie,we){if(k===Es){S===!0&&(Et(s.BLEND),S=!1);return}if(S===!1&&(lt(s.BLEND),S=!0),k!==b0){if(k!==x||we!==E){if((g!==fr||C!==fr)&&(s.blendEquation(s.FUNC_ADD),g=fr,C=fr),we)switch(k){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dd:s.blendFunc(s.ONE,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ud:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",k);break}else switch(k){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Nd:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",k);break}P=null,A=null,D=null,U=null,N.set(0,0,0),G=0,x=k,E=we}return}ft=ft||bt,at=at||mt,Mt=Mt||At,(bt!==g||ft!==C)&&(s.blendEquationSeparate(Ve[bt],Ve[ft]),g=bt,C=ft),(mt!==P||At!==A||at!==D||Mt!==U)&&(s.blendFuncSeparate(fe[mt],fe[At],fe[at],fe[Mt]),P=mt,A=At,D=at,U=Mt),(jt.equals(N)===!1||Ie!==G)&&(s.blendColor(jt.r,jt.g,jt.b,Ie),N.copy(jt),G=Ie),x=k,E=!1}function Ae(k,bt){k.side===ki?Et(s.CULL_FACE):lt(s.CULL_FACE);let mt=k.side===On;bt&&(mt=!mt),ne(mt),k.blending===uo&&k.transparent===!1?Ee(Es):Ee(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const At=k.stencilWrite;c.setTest(At),At&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),We(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function He(k){k!==y0?(lt(s.CULL_FACE),k!==F&&(k===Id?s.cullFace(s.BACK):k===M0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),F=k}function B(k){k!==Z&&(tt&&s.lineWidth(k),Z=k)}function We(k,bt,mt){k?(lt(s.POLYGON_OFFSET_FILL),($!==bt||rt!==mt)&&(s.polygonOffset(bt,mt),$=bt,rt=mt)):Et(s.POLYGON_OFFSET_FILL)}function Se(k){k?lt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Re(k){k===void 0&&(k=s.TEXTURE0+ot-1),gt!==k&&(s.activeTexture(k),gt=k)}function Ut(k,bt,mt){mt===void 0&&(gt===null?mt=s.TEXTURE0+ot-1:mt=gt);let At=it[mt];At===void 0&&(At={type:void 0,texture:void 0},it[mt]=At),(At.type!==k||At.texture!==bt)&&(gt!==mt&&(s.activeTexture(mt),gt=mt),s.bindTexture(k,bt||Y[k]),At.type=k,At.texture=bt)}function I(){const k=it[gt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function st(){try{s.texSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function ct(){try{s.texSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function xt(){try{s.texStorage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Dt(){try{s.texStorage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Xt(){try{s.texImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function ut(){try{s.texImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function yt(k){Ht.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function Lt(k){Qt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Qt.copy(k))}function Ot(k,bt){let mt=f.get(bt);mt===void 0&&(mt=new WeakMap,f.set(bt,mt));let At=mt.get(k);At===void 0&&(At=s.getUniformBlockIndex(bt,k.name),mt.set(k,At))}function _t(k,bt){const At=f.get(bt).get(k);u.get(bt)!==At&&(s.uniformBlockBinding(bt,At,k.__bindingPointIndex),u.set(bt,At))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},gt=null,it={},p={},_=new WeakMap,v=[],M=null,S=!1,x=null,g=null,P=null,A=null,C=null,D=null,U=null,N=new ee(0,0,0),G=0,E=!1,R=null,F=null,Z=null,$=null,rt=null,Ht.set(0,0,s.canvas.width,s.canvas.height),Qt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:lt,disable:Et,bindFramebuffer:te,drawBuffers:It,useProgram:pe,setBlending:Ee,setMaterial:Ae,setFlipSided:ne,setCullFace:He,setLineWidth:B,setPolygonOffset:We,setScissorTest:Se,activeTexture:Re,bindTexture:Ut,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:Xt,texImage3D:ut,updateUBOMapping:Ot,uniformBlockBinding:_t,texStorage2D:xt,texStorage3D:Dt,texSubImage2D:st,texSubImage3D:ct,compressedTexSubImage2D:nt,compressedTexSubImage3D:Ft,scissor:yt,viewport:Lt,reset:re}}function yE(s,t,e,n,r,o,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new $t,d=new WeakMap;let p;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,b){return v?new OffscreenCanvas(I,b):La("canvas")}function S(I,b,z){let st=1;const ct=Ut(I);if((ct.width>z||ct.height>z)&&(st=z/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const nt=Math.floor(st*ct.width),Ft=Math.floor(st*ct.height);p===void 0&&(p=M(nt,Ft));const xt=b?M(nt,Ft):p;return xt.width=nt,xt.height=Ft,xt.getContext("2d").drawImage(I,0,0,nt,Ft),zt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Ft+")."),xt}else return"data"in I&&zt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function x(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(I,b,z,st,ct=!1){if(I!==null){if(s[I]!==void 0)return s[I];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=b;if(b===s.RED&&(z===s.FLOAT&&(nt=s.R32F),z===s.HALF_FLOAT&&(nt=s.R16F),z===s.UNSIGNED_BYTE&&(nt=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.R8UI),z===s.UNSIGNED_SHORT&&(nt=s.R16UI),z===s.UNSIGNED_INT&&(nt=s.R32UI),z===s.BYTE&&(nt=s.R8I),z===s.SHORT&&(nt=s.R16I),z===s.INT&&(nt=s.R32I)),b===s.RG&&(z===s.FLOAT&&(nt=s.RG32F),z===s.HALF_FLOAT&&(nt=s.RG16F),z===s.UNSIGNED_BYTE&&(nt=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RG8UI),z===s.UNSIGNED_SHORT&&(nt=s.RG16UI),z===s.UNSIGNED_INT&&(nt=s.RG32UI),z===s.BYTE&&(nt=s.RG8I),z===s.SHORT&&(nt=s.RG16I),z===s.INT&&(nt=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),z===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),z===s.UNSIGNED_INT&&(nt=s.RGB32UI),z===s.BYTE&&(nt=s.RGB8I),z===s.SHORT&&(nt=s.RGB16I),z===s.INT&&(nt=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),z===s.UNSIGNED_INT&&(nt=s.RGBA32UI),z===s.BYTE&&(nt=s.RGBA8I),z===s.SHORT&&(nt=s.RGBA16I),z===s.INT&&(nt=s.RGBA32I)),b===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(nt=s.R11F_G11F_B10F)),b===s.RGBA){const Ft=ct?nc:ge.getTransfer(st);z===s.FLOAT&&(nt=s.RGBA32F),z===s.HALF_FLOAT&&(nt=s.RGBA16F),z===s.UNSIGNED_BYTE&&(nt=Ft===Pe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function C(I,b){let z;return I?b===null||b===Yi||b===Ra?z=s.DEPTH24_STENCIL8:b===ni?z=s.DEPTH32F_STENCIL8:b===Aa&&(z=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Ra?z=s.DEPTH_COMPONENT24:b===ni?z=s.DEPTH_COMPONENT32F:b===Aa&&(z=s.DEPTH_COMPONENT16),z}function D(I,b){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function U(I){const b=I.target;b.removeEventListener("dispose",U),G(b),b.isVideoTexture&&d.delete(b)}function N(I){const b=I.target;b.removeEventListener("dispose",N),R(b)}function G(I){const b=n.get(I);if(b.__webglInit===void 0)return;const z=I.source,st=_.get(z);if(st){const ct=st[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(I),Object.keys(st).length===0&&_.delete(z)}n.remove(I)}function E(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const z=I.source,st=_.get(z);delete st[b.__cacheKey],l.memory.textures--}function R(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let ct=0;ct<b.__webglFramebuffer[st].length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[st][ct]);else s.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)s.deleteFramebuffer(b.__webglFramebuffer[st]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=I.textures;for(let st=0,ct=z.length;st<ct;st++){const nt=n.get(z[st]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),l.memory.textures--),n.remove(z[st])}n.remove(I)}let F=0;function Z(){F=0}function $(){const I=F;return I>=r.maxTextures&&zt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),F+=1,I}function rt(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ot(I,b){const z=n.get(I);if(I.isVideoTexture&&Se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const st=I.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,I,b);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function tt(I,b){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Y(z,I,b);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function q(I,b){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Y(z,I,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function j(I,b){const z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){lt(z,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const gt={[Co]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[ec]:s.MIRRORED_REPEAT},it={[tn]:s.NEAREST,[d_]:s.NEAREST_MIPMAP_NEAREST,[_a]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Zl]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},dt={[Y0]:s.NEVER,[Q0]:s.ALWAYS,[j0]:s.LESS,[_f]:s.LEQUAL,[K0]:s.EQUAL,[gf]:s.GEQUAL,[J0]:s.GREATER,[$0]:s.NOTEQUAL};function Wt(I,b){if(b.type===ni&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Zl||b.magFilter===_a||b.magFilter===Ms||b.minFilter===en||b.minFilter===Zl||b.minFilter===_a||b.minFilter===Ms)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,gt[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,gt[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,gt[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,it[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,it[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==_a&&b.minFilter!==Ms||b.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ht(I,b){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",U));const st=b.source;let ct=_.get(st);ct===void 0&&(ct={},_.set(st,ct));const nt=rt(b);if(nt!==I.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,z=!0),ct[nt].usedTimes++;const Ft=ct[I.__cacheKey];Ft!==void 0&&(ct[I.__cacheKey].usedTimes--,Ft.usedTimes===0&&E(b)),I.__cacheKey=nt,I.__webglTexture=ct[nt].texture}return z}function Qt(I,b,z){return Math.floor(Math.floor(I/z)/b)}function Gt(I,b,z,st){const nt=I.updateRanges;if(nt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,z,st,b.data);else{nt.sort((ut,yt)=>ut.start-yt.start);let Ft=0;for(let ut=1;ut<nt.length;ut++){const yt=nt[Ft],Lt=nt[ut],Ot=yt.start+yt.count,_t=Qt(Lt.start,b.width,4),re=Qt(yt.start,b.width,4);Lt.start<=Ot+1&&_t===re&&Qt(Lt.start+Lt.count-1,b.width,4)===_t?yt.count=Math.max(yt.count,Lt.start+Lt.count-yt.start):(++Ft,nt[Ft]=Lt)}nt.length=Ft+1;const xt=s.getParameter(s.UNPACK_ROW_LENGTH),Dt=s.getParameter(s.UNPACK_SKIP_PIXELS),Xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ut=0,yt=nt.length;ut<yt;ut++){const Lt=nt[ut],Ot=Math.floor(Lt.start/4),_t=Math.ceil(Lt.count/4),re=Ot%b.width,k=Math.floor(Ot/b.width),bt=_t,mt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,re,k,bt,mt,z,st,b.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,xt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xt)}}function Y(I,b,z){let st=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=s.TEXTURE_3D);const ct=Ht(I,b),nt=b.source;e.bindTexture(st,I.__webglTexture,s.TEXTURE0+z);const Ft=n.get(nt);if(nt.version!==Ft.__version||ct===!0){e.activeTexture(s.TEXTURE0+z);const xt=ge.getPrimaries(ge.workingColorSpace),Dt=b.colorSpace===Zs?null:ge.getPrimaries(b.colorSpace),Xt=b.colorSpace===Zs||xt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ut=S(b.image,!1,r.maxTextureSize);ut=Re(b,ut);const yt=o.convert(b.format,b.colorSpace),Lt=o.convert(b.type);let Ot=A(b.internalFormat,yt,Lt,b.colorSpace,b.isVideoTexture);Wt(st,b);let _t;const re=b.mipmaps,k=b.isVideoTexture!==!0,bt=Ft.__version===void 0||ct===!0,mt=nt.dataReady,At=D(b,ut);if(b.isDepthTexture)Ot=C(b.format===_r,b.type),bt&&(k?e.texStorage2D(s.TEXTURE_2D,1,Ot,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ut.width,ut.height,0,yt,Lt,null));else if(b.isDataTexture)if(re.length>0){k&&bt&&e.texStorage2D(s.TEXTURE_2D,At,Ot,re[0].width,re[0].height);for(let ft=0,at=re.length;ft<at;ft++)_t=re[ft],k?mt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,ft,Ot,_t.width,_t.height,0,yt,Lt,_t.data);b.generateMipmaps=!1}else k?(bt&&e.texStorage2D(s.TEXTURE_2D,At,Ot,ut.width,ut.height),mt&&Gt(b,ut,yt,Lt)):e.texImage2D(s.TEXTURE_2D,0,Ot,ut.width,ut.height,0,yt,Lt,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ot,re[0].width,re[0].height,ut.depth);for(let ft=0,at=re.length;ft<at;ft++)if(_t=re[ft],b.format!==ii)if(yt!==null)if(k){if(mt)if(b.layerUpdates.size>0){const Mt=Tp(_t.width,_t.height,b.format,b.type);for(const jt of b.layerUpdates){const Ie=_t.data.subarray(jt*Mt/_t.data.BYTES_PER_ELEMENT,(jt+1)*Mt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,jt,_t.width,_t.height,1,yt,Ie)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,ut.depth,yt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Ot,_t.width,_t.height,ut.depth,0,_t.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?mt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,ut.depth,yt,Lt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Ot,_t.width,_t.height,ut.depth,0,yt,Lt,_t.data)}else{k&&bt&&e.texStorage2D(s.TEXTURE_2D,At,Ot,re[0].width,re[0].height);for(let ft=0,at=re.length;ft<at;ft++)_t=re[ft],b.format!==ii?yt!==null?k?mt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Ot,_t.width,_t.height,0,_t.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?mt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,_t.width,_t.height,yt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,ft,Ot,_t.width,_t.height,0,yt,Lt,_t.data)}else if(b.isDataArrayTexture)if(k){if(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ot,ut.width,ut.height,ut.depth),mt)if(b.layerUpdates.size>0){const ft=Tp(ut.width,ut.height,b.format,b.type);for(const at of b.layerUpdates){const Mt=ut.data.subarray(at*ft/ut.data.BYTES_PER_ELEMENT,(at+1)*ft/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,ut.width,ut.height,1,yt,Lt,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,yt,Lt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ut.width,ut.height,ut.depth,0,yt,Lt,ut.data);else if(b.isData3DTexture)k?(bt&&e.texStorage3D(s.TEXTURE_3D,At,Ot,ut.width,ut.height,ut.depth),mt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,yt,Lt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ut.width,ut.height,ut.depth,0,yt,Lt,ut.data);else if(b.isFramebufferTexture){if(bt)if(k)e.texStorage2D(s.TEXTURE_2D,At,Ot,ut.width,ut.height);else{let ft=ut.width,at=ut.height;for(let Mt=0;Mt<At;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Ot,ft,at,0,yt,Lt,null),ft>>=1,at>>=1}}else if(re.length>0){if(k&&bt){const ft=Ut(re[0]);e.texStorage2D(s.TEXTURE_2D,At,Ot,ft.width,ft.height)}for(let ft=0,at=re.length;ft<at;ft++)_t=re[ft],k?mt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,yt,Lt,_t):e.texImage2D(s.TEXTURE_2D,ft,Ot,yt,Lt,_t);b.generateMipmaps=!1}else if(k){if(bt){const ft=Ut(ut);e.texStorage2D(s.TEXTURE_2D,At,Ot,ft.width,ft.height)}mt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Lt,ut)}else e.texImage2D(s.TEXTURE_2D,0,Ot,yt,Lt,ut);x(b)&&g(st),Ft.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function lt(I,b,z){if(b.image.length!==6)return;const st=Ht(I,b),ct=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);const nt=n.get(ct);if(ct.version!==nt.__version||st===!0){e.activeTexture(s.TEXTURE0+z);const Ft=ge.getPrimaries(ge.workingColorSpace),xt=b.colorSpace===Zs?null:ge.getPrimaries(b.colorSpace),Dt=b.colorSpace===Zs||Ft===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let at=0;at<6;at++)!Xt&&!ut?yt[at]=S(b.image[at],!0,r.maxCubemapSize):yt[at]=ut?b.image[at].image:b.image[at],yt[at]=Re(b,yt[at]);const Lt=yt[0],Ot=o.convert(b.format,b.colorSpace),_t=o.convert(b.type),re=A(b.internalFormat,Ot,_t,b.colorSpace),k=b.isVideoTexture!==!0,bt=nt.__version===void 0||st===!0,mt=ct.dataReady;let At=D(b,Lt);Wt(s.TEXTURE_CUBE_MAP,b);let ft;if(Xt){k&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,re,Lt.width,Lt.height);for(let at=0;at<6;at++){ft=yt[at].mipmaps;for(let Mt=0;Mt<ft.length;Mt++){const jt=ft[Mt];b.format!==ii?Ot!==null?k?mt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt,0,0,jt.width,jt.height,Ot,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt,re,jt.width,jt.height,0,jt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt,0,0,jt.width,jt.height,Ot,_t,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt,re,jt.width,jt.height,0,Ot,_t,jt.data)}}}else{if(ft=b.mipmaps,k&&bt){ft.length>0&&At++;const at=Ut(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,re,at.width,at.height)}for(let at=0;at<6;at++)if(ut){k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,yt[at].width,yt[at].height,Ot,_t,yt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,re,yt[at].width,yt[at].height,0,Ot,_t,yt[at].data);for(let Mt=0;Mt<ft.length;Mt++){const Ie=ft[Mt].image[at].image;k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt+1,0,0,Ie.width,Ie.height,Ot,_t,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt+1,re,Ie.width,Ie.height,0,Ot,_t,Ie.data)}}else{k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,_t,yt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,re,Ot,_t,yt[at]);for(let Mt=0;Mt<ft.length;Mt++){const jt=ft[Mt];k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt+1,0,0,Ot,_t,jt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Mt+1,re,Ot,_t,jt.image[at])}}}x(b)&&g(s.TEXTURE_CUBE_MAP),nt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Et(I,b,z,st,ct,nt){const Ft=o.convert(z.format,z.colorSpace),xt=o.convert(z.type),Dt=A(z.internalFormat,Ft,xt,z.colorSpace),Xt=n.get(b),ut=n.get(z);if(ut.__renderTarget=b,!Xt.__hasExternalTextures){const yt=Math.max(1,b.width>>nt),Lt=Math.max(1,b.height>>nt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,Dt,yt,Lt,b.depth,0,Ft,xt,null):e.texImage2D(ct,nt,Dt,yt,Lt,0,Ft,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),We(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,ct,ut.__webglTexture,0,B(b)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,ct,ut.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(I,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const st=b.depthTexture,ct=st&&st.isDepthTexture?st.type:null,nt=C(b.stencilBuffer,ct),Ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;We(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(b),nt,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(b),nt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,nt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,I)}else{const st=b.textures;for(let ct=0;ct<st.length;ct++){const nt=st[ct],Ft=o.convert(nt.format,nt.colorSpace),xt=o.convert(nt.type),Dt=A(nt.internalFormat,Ft,xt,nt.colorSpace);We(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(b),Dt,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(b),Dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(I,b,z){const st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(b.depthTexture);if(ct.__renderTarget=b,(!ct.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,b.depthTexture.addEventListener("dispose",U)),ct.__webglTexture===void 0){ct.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,b.depthTexture);const Xt=o.convert(b.depthTexture.format),ut=o.convert(b.depthTexture.type);let yt;b.depthTexture.format===Cs?yt=s.DEPTH_COMPONENT24:b.depthTexture.format===_r&&(yt=s.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,yt,b.width,b.height,0,Xt,ut,null)}}else ot(b.depthTexture,0);const nt=ct.__webglTexture,Ft=B(b),xt=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,Dt=b.depthTexture.format===_r?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Cs)We(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,xt,nt,0,Ft):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,xt,nt,0);else if(b.depthTexture.format===_r)We(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,xt,nt,0,Ft):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,xt,nt,0);else throw new Error("Unknown depthTexture format")}function pe(I){const b=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const st=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){const ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=st}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let st=0;st<6;st++)It(b.__webglFramebuffer[st],I,st);else{const st=I.texture.mipmaps;st&&st.length>0?It(b.__webglFramebuffer[0],I,0):It(b.__webglFramebuffer,I,0)}else if(z){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=s.createRenderbuffer(),te(b.__webglDepthbuffer[st],I,!1);else{const ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,nt)}}else{const st=I.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),te(b.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,nt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(I,b,z){const st=n.get(I);b!==void 0&&Et(st.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&pe(I)}function fe(I){const b=I.texture,z=n.get(I),st=n.get(b);I.addEventListener("dispose",N);const ct=I.textures,nt=I.isWebGLCubeRenderTarget===!0,Ft=ct.length>1;if(Ft||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=b.version,l.memory.textures++),nt){z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[xt]=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)z.__webglFramebuffer[xt][Dt]=s.createFramebuffer()}else z.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)z.__webglFramebuffer[xt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let xt=0,Dt=ct.length;xt<Dt;xt++){const Xt=n.get(ct[xt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),l.memory.textures++)}if(I.samples>0&&We(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<ct.length;xt++){const Dt=ct[xt];z.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);const Xt=o.convert(Dt.format,Dt.colorSpace),ut=o.convert(Dt.type),yt=A(Dt.internalFormat,Xt,ut,Dt.colorSpace,I.isXRRenderTarget===!0),Lt=B(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,yt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),te(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Et(z.__webglFramebuffer[xt][Dt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt);else Et(z.__webglFramebuffer[xt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(b)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let xt=0,Dt=ct.length;xt<Dt;xt++){const Xt=ct[xt],ut=n.get(Xt);let yt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,ut.__webglTexture),Wt(yt,Xt),Et(z.__webglFramebuffer,I,Xt,s.COLOR_ATTACHMENT0+xt,yt,0),x(Xt)&&g(yt)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,st.__webglTexture),Wt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Et(z.__webglFramebuffer[Dt],I,b,s.COLOR_ATTACHMENT0,xt,Dt);else Et(z.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,xt,0);x(b)&&g(xt),e.unbindTexture()}I.depthBuffer&&pe(I)}function Ee(I){const b=I.textures;for(let z=0,st=b.length;z<st;z++){const ct=b[z];if(x(ct)){const nt=P(I),Ft=n.get(ct).__webglTexture;e.bindTexture(nt,Ft),g(nt),e.unbindTexture()}}}const Ae=[],ne=[];function He(I){if(I.samples>0){if(We(I)===!1){const b=I.textures,z=I.width,st=I.height;let ct=s.COLOR_BUFFER_BIT;const nt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(I),xt=b.length>1;if(xt)for(let Xt=0;Xt<b.length;Xt++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Dt=I.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Xt=0;Xt<b.length;Xt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Xt]);const ut=n.get(b[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,z,st,0,0,z,st,ct,s.NEAREST),u===!0&&(Ae.length=0,ne.length=0,Ae.push(s.COLOR_ATTACHMENT0+Xt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(nt),ne.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Xt=0;Xt<b.length;Xt++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Xt]);const ut=n.get(b[Xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function B(I){return Math.min(r.maxSamples,I.samples)}function We(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(I){const b=l.render.frame;d.get(I)!==b&&(d.set(I,b),I.update())}function Re(I,b){const z=I.colorSpace,st=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Pn&&z!==Zs&&(ge.getTransfer(z)===Pe?(st!==ii||ct!==Gn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),b}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=ot,this.setTexture2DArray=tt,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ME(s,t){function e(n,r=Zs){let o;const l=ge.getTransfer(r);if(n===Gn)return s.UNSIGNED_BYTE;if(n===hf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===uf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===__)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===g_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===p_)return s.BYTE;if(n===m_)return s.SHORT;if(n===Aa)return s.UNSIGNED_SHORT;if(n===cf)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===Ps)return s.HALF_FLOAT;if(n===v_)return s.ALPHA;if(n===x_)return s.RGB;if(n===ii)return s.RGBA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===_r)return s.DEPTH_STENCIL;if(n===ff)return s.RED;if(n===df)return s.RED_INTEGER;if(n===Lo)return s.RG;if(n===pf)return s.RG_INTEGER;if(n===mf)return s.RGBA_INTEGER;if(n===ql||n===Yl||n===jl||n===Kl)if(l===Pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ql)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ql)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===au||n===lu||n===cu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ou)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===au)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===uu||n===fu||n===du||n===pu||n===mu||n===_u)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===hu||n===uu)return l===Pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===fu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===du)return o.COMPRESSED_R11_EAC;if(n===pu)return o.COMPRESSED_SIGNED_R11_EAC;if(n===mu)return o.COMPRESSED_RG11_EAC;if(n===_u)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gu||n===vu||n===xu||n===yu||n===Mu||n===Su||n===bu||n===Tu||n===Eu||n===wu||n===Au||n===Ru||n===Pu||n===Cu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===gu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ru)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return l===Pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lu||n===Iu||n===Du)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Lu)return l===Pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Iu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Uu||n===Ou||n===Fu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Nu)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Uu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ou)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ra?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new O_(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ji({vertexShader:SE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zn(new gc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends Ir{constructor(t,e){super();const n=this;let r=null,o=1,l=null,c="local-floor",u=1,f=null,d=null,p=null,_=null,v=null,M=null;const S=typeof XRWebGLBinding<"u",x=new TE,g={},P=e.getContextAttributes();let A=null,C=null;const D=[],U=[],N=new $t;let G=null;const E=new wn;E.viewport=new Be;const R=new wn;R.viewport=new Be;const F=[E,R],Z=new Ey;let $=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let lt=D[Y];return lt===void 0&&(lt=new mh,D[Y]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Y){let lt=D[Y];return lt===void 0&&(lt=new mh,D[Y]=lt),lt.getGripSpace()},this.getHand=function(Y){let lt=D[Y];return lt===void 0&&(lt=new mh,D[Y]=lt),lt.getHandSpace()};function ot(Y){const lt=U.indexOf(Y.inputSource);if(lt===-1)return;const Et=D[lt];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,f||l),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function tt(){r.removeEventListener("select",ot),r.removeEventListener("selectstart",ot),r.removeEventListener("selectend",ot),r.removeEventListener("squeeze",ot),r.removeEventListener("squeezestart",ot),r.removeEventListener("squeezeend",ot),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<D.length;Y++){const lt=U[Y];lt!==null&&(U[Y]=null,D[Y].disconnect(lt))}$=null,rt=null,x.reset();for(const Y in g)delete g[Y];t.setRenderTarget(A),v=null,_=null,p=null,r=null,C=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(G),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(Y){f=Y},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",ot),r.addEventListener("selectstart",ot),r.addEventListener("selectend",ot),r.addEventListener("squeeze",ot),r.addEventListener("squeezestart",ot),r.addEventListener("squeezeend",ot),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await e.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(N),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,te=null,It=null;P.depth&&(It=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=P.stencil?_r:Cs,te=P.stencil?Ra:Yi);const pe={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};p=this.getBinding(),_=p.createProjectionLayer(pe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Xi(_.textureWidth,_.textureHeight,{format:ii,type:Gn,depthTexture:new Da(_.textureWidth,_.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new Xi(v.framebufferWidth,v.framebufferHeight,{format:ii,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(c),Gt.setContext(r),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Y){for(let lt=0;lt<Y.removed.length;lt++){const Et=Y.removed[lt],te=U.indexOf(Et);te>=0&&(U[te]=null,D[te].disconnect(Et))}for(let lt=0;lt<Y.added.length;lt++){const Et=Y.added[lt];let te=U.indexOf(Et);if(te===-1){for(let pe=0;pe<D.length;pe++)if(pe>=U.length){U.push(Et),te=pe;break}else if(U[pe]===null){U[pe]=Et,te=pe;break}if(te===-1)break}const It=D[te];It&&It.connect(Et)}}const j=new H,gt=new H;function it(Y,lt,Et){j.setFromMatrixPosition(lt.matrixWorld),gt.setFromMatrixPosition(Et.matrixWorld);const te=j.distanceTo(gt),It=lt.projectionMatrix.elements,pe=Et.projectionMatrix.elements,Ve=It[14]/(It[10]-1),fe=It[14]/(It[10]+1),Ee=(It[9]+1)/It[5],Ae=(It[9]-1)/It[5],ne=(It[8]-1)/It[0],He=(pe[8]+1)/pe[0],B=Ve*ne,We=Ve*He,Se=te/(-ne+He),Re=Se*-ne;if(lt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Re),Y.translateZ(Se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(lt.projectionMatrix),Y.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ut=Ve+Se,I=fe+Se,b=B-Re,z=We+(te-Re),st=Ee*fe/I*Ut,ct=Ae*fe/I*Ut;Y.projectionMatrix.makePerspective(b,z,st,ct,Ut,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,lt){lt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(lt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let lt=Y.near,Et=Y.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(Et=x.depthFar)),Z.near=R.near=E.near=lt,Z.far=R.far=E.far=Et,($!==Z.near||rt!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),$=Z.near,rt=Z.far),Z.layers.mask=Y.layers.mask|6,E.layers.mask=Z.layers.mask&3,R.layers.mask=Z.layers.mask&5;const te=Y.parent,It=Z.cameras;dt(Z,te);for(let pe=0;pe<It.length;pe++)dt(It[pe],te);It.length===2?it(Z,E,R):Z.projectionMatrix.copy(E.projectionMatrix),Wt(Y,Z,te)};function Wt(Y,lt,Et){Et===null?Y.matrix.copy(lt.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(lt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(lt.projectionMatrix),Y.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&v===null))return u},this.setFoveation=function(Y){u=Y,_!==null&&(_.fixedFoveation=Y),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(Y){return g[Y]};let Ht=null;function Qt(Y,lt){if(d=lt.getViewerPose(f||l),M=lt,d!==null){const Et=d.views;v!==null&&(t.setRenderTargetFramebuffer(C,v.framebuffer),t.setRenderTarget(C));let te=!1;Et.length!==Z.cameras.length&&(Z.cameras.length=0,te=!0);for(let fe=0;fe<Et.length;fe++){const Ee=Et[fe];let Ae=null;if(v!==null)Ae=v.getViewport(Ee);else{const He=p.getViewSubImage(_,Ee);Ae=He.viewport,fe===0&&(t.setRenderTargetTextures(C,He.colorTexture,He.depthStencilTexture),t.setRenderTarget(C))}let ne=F[fe];ne===void 0&&(ne=new wn,ne.layers.enable(fe),ne.viewport=new Be,F[fe]=ne),ne.matrix.fromArray(Ee.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Ee.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(Z.matrix.copy(ne.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),te===!0&&Z.cameras.push(ne)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const fe=p.getDepthInformation(Et[0]);fe&&fe.isValid&&fe.texture&&x.init(fe,r.renderState)}if(It&&It.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let fe=0;fe<Et.length;fe++){const Ee=Et[fe].camera;if(Ee){let Ae=g[Ee];Ae||(Ae=new O_,g[Ee]=Ae);const ne=p.getCameraImage(Ee);Ae.sourceTexture=ne}}}}for(let Et=0;Et<D.length;Et++){const te=U[Et],It=D[Et];te!==null&&It!==void 0&&It.update(te,lt,f||l)}Ht&&Ht(Y,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),M=null}const Gt=new V_;Gt.setAnimationLoop(Qt),this.setAnimationLoop=function(Y){Ht=Y},this.dispose=function(){}}}const hr=new Ki,wE=new le;function AE(s,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,P_(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,P,A,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),p(x,g)):g.isMeshPhongMaterial?(o(x,g),d(x,g)):g.isMeshStandardMaterial?(o(x,g),_(x,g),g.isMeshPhysicalMaterial&&v(x,g,C)):g.isMeshMatcapMaterial?(o(x,g),M(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),S(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(l(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?u(x,g,P,A):g.isSpriteMaterial?f(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===On&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===On&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const P=t.get(g),A=P.envMap,C=P.envMapRotation;A&&(x.envMap.value=A,hr.copy(C),hr.x*=-1,hr.y*=-1,hr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),x.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(hr)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function l(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function u(x,g,P,A){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*P,x.scale.value=A*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function p(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function _(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,P){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,g){g.matcap&&(x.matcap.value=g.matcap)}function S(x,g){const P=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function RE(s,t,e,n){let r={},o={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,A){const C=A.program;n.uniformBlockBinding(P,C)}function f(P,A){let C=r[P.id];C===void 0&&(M(P),C=d(P),r[P.id]=C,P.addEventListener("dispose",x));const D=A.program;n.updateUBOMapping(P,D);const U=t.render.frame;o[P.id]!==U&&(_(P),o[P.id]=U)}function d(P){const A=p();P.__bindingPointIndex=A;const C=s.createBuffer(),D=P.__size,U=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,D,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,C),C}function p(){for(let P=0;P<c;P++)if(l.indexOf(P)===-1)return l.push(P),P;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const A=r[P.id],C=P.uniforms,D=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let U=0,N=C.length;U<N;U++){const G=Array.isArray(C[U])?C[U]:[C[U]];for(let E=0,R=G.length;E<R;E++){const F=G[E];if(v(F,U,E,D)===!0){const Z=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let rt=0;for(let ot=0;ot<$.length;ot++){const tt=$[ot],q=S(tt);typeof tt=="number"||typeof tt=="boolean"?(F.__data[0]=tt,s.bufferSubData(s.UNIFORM_BUFFER,Z+rt,F.__data)):tt.isMatrix3?(F.__data[0]=tt.elements[0],F.__data[1]=tt.elements[1],F.__data[2]=tt.elements[2],F.__data[3]=0,F.__data[4]=tt.elements[3],F.__data[5]=tt.elements[4],F.__data[6]=tt.elements[5],F.__data[7]=0,F.__data[8]=tt.elements[6],F.__data[9]=tt.elements[7],F.__data[10]=tt.elements[8],F.__data[11]=0):(tt.toArray(F.__data,rt),rt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(P,A,C,D){const U=P.value,N=A+"_"+C;if(D[N]===void 0)return typeof U=="number"||typeof U=="boolean"?D[N]=U:D[N]=U.clone(),!0;{const G=D[N];if(typeof U=="number"||typeof U=="boolean"){if(G!==U)return D[N]=U,!0}else if(G.equals(U)===!1)return G.copy(U),!0}return!1}function M(P){const A=P.uniforms;let C=0;const D=16;for(let N=0,G=A.length;N<G;N++){const E=Array.isArray(A[N])?A[N]:[A[N]];for(let R=0,F=E.length;R<F;R++){const Z=E[R],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let rt=0,ot=$.length;rt<ot;rt++){const tt=$[rt],q=S(tt),j=C%D,gt=j%q.boundary,it=j+gt;C+=gt,it!==0&&D-it<q.storage&&(C+=D-it),Z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=C,C+=q.storage}}}const U=C%D;return U>0&&(C+=D-U),P.__size=C,P.__cache={},this}function S(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):zt("WebGLRenderer: Unsupported uniform value type.",P),A}function x(P){const A=P.target;A.removeEventListener("dispose",x);const C=l.indexOf(A.__bindingPointIndex);l.splice(C,1),s.deleteBuffer(r[A.id]),delete r[A.id],delete o[A.id]}function g(){for(const P in r)s.deleteBuffer(r[P]);l=[],r={},o={}}return{bind:u,update:f,dispose:g}}const PE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function CE(){return Ii===null&&(Ii=new Mf(PE,16,16,Lo,Ps),Ii.name="DFG_LUT",Ii.minFilter=en,Ii.magFilter=en,Ii.wrapS=zi,Ii.wrapT=zi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class LE{constructor(t={}){const{canvas:e=ex(),context:n=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1,outputBufferType:v=Gn}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;const S=v,x=new Set([mf,pf,df]),g=new Set([Gn,Yi,Aa,Ra,hf,uf]),P=new Uint32Array(4),A=new Int32Array(4);let C=null,D=null;const U=[],N=[];let G=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=_n;let F=0,Z=0,$=null,rt=-1,ot=null;const tt=new Be,q=new Be;let j=null;const gt=new ee(0);let it=0,dt=e.width,Wt=e.height,Ht=1,Qt=null,Gt=null;const Y=new Be(0,0,dt,Wt),lt=new Be(0,0,dt,Wt);let Et=!1;const te=new bf;let It=!1,pe=!1;const Ve=new le,fe=new H,Ee=new Be,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function He(){return $===null?Ht:1}let B=n;function We(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lf}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",Ie,!1),e.addEventListener("webglcontextcreationerror",we,!1),B===null){const V="webgl2";if(B=We(V,w),B===null)throw We(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Yt("WebGLRenderer: "+w.message),w}let Se,Re,Ut,I,b,z,st,ct,nt,Ft,xt,Dt,Xt,ut,yt,Lt,Ot,_t,re,k,bt,mt,At,ft;function at(){Se=new Cb(B),Se.init(),mt=new ME(B,Se),Re=new Mb(B,Se,t,mt),Ut=new xE(B,Se),Re.reversedDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),I=new Db(B),b=new sE,z=new yE(B,Se,Ut,b,Re,mt,I),st=new bb(E),ct=new Pb(E),nt=new Fy(B),At=new xb(B,nt),Ft=new Lb(B,nt,I,At),xt=new Ub(B,Ft,nt,I),re=new Nb(B,Re,z),Lt=new Sb(b),Dt=new iE(E,st,ct,Se,Re,At,Lt),Xt=new AE(E,b),ut=new oE,yt=new fE(Se),_t=new vb(E,st,ct,Ut,xt,M,u),Ot=new gE(E,xt,Re),ft=new RE(B,I,Re,Ut),k=new yb(B,Se,I),bt=new Ib(B,Se,I),I.programs=Dt.programs,E.capabilities=Re,E.extensions=Se,E.properties=b,E.renderLists=ut,E.shadowMap=Ot,E.state=Ut,E.info=I}at(),S!==Gn&&(G=new Fb(S,e.width,e.height,r,o));const Mt=new EE(E,B);this.xr=Mt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(w){w!==void 0&&(Ht=w,this.setSize(dt,Wt,!1))},this.getSize=function(w){return w.set(dt,Wt)},this.setSize=function(w,V,Q=!0){if(Mt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=w,Wt=V,e.width=Math.floor(w*Ht),e.height=Math.floor(V*Ht),Q===!0&&(e.style.width=w+"px",e.style.height=V+"px"),G!==null&&G.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(dt*Ht,Wt*Ht).floor()},this.setDrawingBufferSize=function(w,V,Q){dt=w,Wt=V,Ht=Q,e.width=Math.floor(w*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(S===Gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(tt)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,V,Q,K){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,V,Q,K),Ut.viewport(tt.copy(Y).multiplyScalar(Ht).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,V,Q,K){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,V,Q,K),Ut.scissor(q.copy(lt).multiplyScalar(Ht).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(w){Ut.setScissorTest(Et=w)},this.setOpaqueSort=function(w){Qt=w},this.setTransparentSort=function(w){Gt=w},this.getClearColor=function(w){return w.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Q=!0){let K=0;if(w){let W=!1;if($!==null){const vt=$.texture.format;W=x.has(vt)}if(W){const vt=$.texture.type,Pt=g.has(vt),St=_t.getClearColor(),Ct=_t.getClearAlpha(),pt=St.r,wt=St.g,kt=St.b;Pt?(P[0]=pt,P[1]=wt,P[2]=kt,P[3]=Ct,B.clearBufferuiv(B.COLOR,0,P)):(A[0]=pt,A[1]=wt,A[2]=kt,A[3]=Ct,B.clearBufferiv(B.COLOR,0,A))}else K|=B.COLOR_BUFFER_BIT}V&&(K|=B.DEPTH_BUFFER_BIT),Q&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",Ie,!1),e.removeEventListener("webglcontextcreationerror",we,!1),_t.dispose(),ut.dispose(),yt.dispose(),b.dispose(),st.dispose(),ct.dispose(),xt.dispose(),At.dispose(),ft.dispose(),Dt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Bt),Mt.removeEventListener("sessionend",qo),Ri.stop()};function jt(w){w.preventDefault(),sc("WebGLRenderer: Context Lost."),R=!0}function Ie(){sc("WebGLRenderer: Context Restored."),R=!1;const w=I.autoReset,V=Ot.enabled,Q=Ot.autoUpdate,K=Ot.needsUpdate,W=Ot.type;at(),I.autoReset=w,Ot.enabled=V,Ot.autoUpdate=Q,Ot.needsUpdate=K,Ot.type=W}function we(w){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Cn(w){const V=w.target;V.removeEventListener("dispose",Cn),li(V)}function li(w){bc(w),b.remove(w)}function bc(w){const V=b.get(w).programs;V!==void 0&&(V.forEach(function(Q){Dt.releaseProgram(Q)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Q,K,W,vt){V===null&&(V=Ae);const Pt=W.isMesh&&W.matrixWorld.determinant()<0,St=Tc(w,V,Q,K,W);Ut.setMaterial(K,Pt);let Ct=Q.index,pt=1;if(K.wireframe===!0){if(Ct=Ft.getWireframeAttribute(Q),Ct===void 0)return;pt=2}const wt=Q.drawRange,kt=Q.attributes.position;let Kt=wt.start*pt,_e=(wt.start+wt.count)*pt;vt!==null&&(Kt=Math.max(Kt,vt.start*pt),_e=Math.min(_e,(vt.start+vt.count)*pt)),Ct!==null?(Kt=Math.max(Kt,0),_e=Math.min(_e,Ct.count)):kt!=null&&(Kt=Math.max(Kt,0),_e=Math.min(_e,kt.count));const Ue=_e-Kt;if(Ue<0||Ue===1/0)return;At.setup(W,K,St,Q,Ct);let Nt,Zt=k;if(Ct!==null&&(Nt=nt.get(Ct),Zt=bt,Zt.setIndex(Nt)),W.isMesh)K.wireframe===!0?(Ut.setLineWidth(K.wireframeLinewidth*He()),Zt.setMode(B.LINES)):Zt.setMode(B.TRIANGLES);else if(W.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),Ut.setLineWidth(Vt*He()),W.isLineSegments?Zt.setMode(B.LINES):W.isLineLoop?Zt.setMode(B.LINE_LOOP):Zt.setMode(B.LINE_STRIP)}else W.isPoints?Zt.setMode(B.POINTS):W.isSprite&&Zt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Zt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Vt=W._multiDrawStarts,ve=W._multiDrawCounts,Jt=W._multiDrawCount,Sn=Ct?nt.get(Ct).bytesPerElement:1,ci=b.get(K).currentProgram.getUniforms();for(let Ze=0;Ze<Jt;Ze++)ci.setValue(B,"_gl_DrawID",Ze),Zt.render(Vt[Ze]/Sn,ve[Ze])}else if(W.isInstancedMesh)Zt.renderInstances(Kt,Ue,W.count);else if(Q.isInstancedBufferGeometry){const Vt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ve=Math.min(Q.instanceCount,Vt);Zt.renderInstances(Kt,Ue,ve)}else Zt.render(Kt,Ue)};function ja(w,V,Q){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=On,w.needsUpdate=!0,tr(w,V,Q),w.side=Rs,w.needsUpdate=!0,tr(w,V,Q),w.side=ki):tr(w,V,Q)}this.compile=function(w,V,Q=null){Q===null&&(Q=w),D=yt.get(Q),D.init(V),N.push(D),Q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(D.pushLight(W),W.castShadow&&D.pushShadow(W))}),w!==Q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(D.pushLight(W),W.castShadow&&D.pushShadow(W))}),D.setupLights();const K=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){const St=vt[Pt];ja(St,Q,W),K.add(St)}else ja(vt,Q,W),K.add(vt)}),D=N.pop(),K},this.compileAsync=function(w,V,Q=null){const K=this.compile(w,V,Q);return new Promise(W=>{function vt(){if(K.forEach(function(Pt){b.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){W(w);return}setTimeout(vt,10)}Se.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Zo=null;function qn(w){Zo&&Zo(w)}function Bt(){Ri.stop()}function qo(){Ri.start()}const Ri=new V_;Ri.setAnimationLoop(qn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(w){Zo=w,Mt.setAnimationLoop(w),w===null?Ri.stop():Ri.start()},Mt.addEventListener("sessionstart",Bt),Mt.addEventListener("sessionend",qo),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const Q=Mt.enabled===!0&&Mt.isPresenting===!0,K=G!==null&&($===null||Q)&&G.begin(E,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(V),V=Mt.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,V,$),D=yt.get(w,N.length),D.init(V),N.push(D),Ve.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(Ve,Vi,V.reversedDepth),pe=this.localClippingEnabled,It=Lt.init(this.clippingPlanes,pe),C=ut.get(w,U.length),C.init(),U.push(C),Mt.enabled===!0&&Mt.isPresenting===!0){const Pt=E.xr.getDepthSensingMesh();Pt!==null&&Dr(Pt,V,-1/0,E.sortObjects)}Dr(w,V,0,E.sortObjects),C.finish(),E.sortObjects===!0&&C.sort(Qt,Gt),ne=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ne&&_t.addToRenderList(C,w),this.info.render.frame++,It===!0&&Lt.beginShadows();const W=D.state.shadowsArray;if(Ot.render(W,w,V),It===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&G.hasRenderPass())===!1){const Pt=C.opaque,St=C.transmissive;if(D.setupLights(),V.isArrayCamera){const Ct=V.cameras;if(St.length>0)for(let pt=0,wt=Ct.length;pt<wt;pt++){const kt=Ct[pt];Nr(Pt,St,w,kt)}ne&&_t.render(w);for(let pt=0,wt=Ct.length;pt<wt;pt++){const kt=Ct[pt];Yo(C,w,kt,kt.viewport)}}else St.length>0&&Nr(Pt,St,w,V),ne&&_t.render(w),Yo(C,w,V)}$!==null&&Z===0&&(z.updateMultisampleRenderTarget($),z.updateRenderTargetMipmap($)),K&&G.end(E),w.isScene===!0&&w.onAfterRender(E,w,V),At.resetDefaultState(),rt=-1,ot=null,N.pop(),N.length>0?(D=N[N.length-1],It===!0&&Lt.setGlobalState(E.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?C=U[U.length-1]:C=null};function Dr(w,V,Q,K){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){K&&Ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ve);const Pt=xt.update(w),St=w.material;St.visible&&C.push(w,Pt,St,Q,Ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||te.intersectsObject(w))){const Pt=xt.update(w),St=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ee.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ee.copy(Pt.boundingSphere.center)),Ee.applyMatrix4(w.matrixWorld).applyMatrix4(Ve)),Array.isArray(St)){const Ct=Pt.groups;for(let pt=0,wt=Ct.length;pt<wt;pt++){const kt=Ct[pt],Kt=St[kt.materialIndex];Kt&&Kt.visible&&C.push(w,Pt,Kt,Q,Ee.z,kt)}}else St.visible&&C.push(w,Pt,St,Q,Ee.z,null)}}const vt=w.children;for(let Pt=0,St=vt.length;Pt<St;Pt++)Dr(vt[Pt],V,Q,K)}function Yo(w,V,Q,K){const{opaque:W,transmissive:vt,transparent:Pt}=w;D.setupLightsView(Q),It===!0&&Lt.setGlobalState(E.clippingPlanes,Q),K&&Ut.viewport(tt.copy(K)),W.length>0&&Qs(W,V,Q),vt.length>0&&Qs(vt,V,Q),Pt.length>0&&Qs(Pt,V,Q),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Nr(w,V,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[K.id]===void 0){const Kt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[K.id]=new Xi(1,1,{generateMipmaps:!0,type:Kt?Ps:Gn,minFilter:Ms,samples:Re.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const vt=D.state.transmissionRenderTarget[K.id],Pt=K.viewport||tt;vt.setSize(Pt.z*E.transmissionResolutionScale,Pt.w*E.transmissionResolutionScale);const St=E.getRenderTarget(),Ct=E.getActiveCubeFace(),pt=E.getActiveMipmapLevel();E.setRenderTarget(vt),E.getClearColor(gt),it=E.getClearAlpha(),it<1&&E.setClearColor(16777215,.5),E.clear(),ne&&_t.render(Q);const wt=E.toneMapping;E.toneMapping=Wi;const kt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),D.setupLightsView(K),It===!0&&Lt.setGlobalState(E.clippingPlanes,K),Qs(w,Q,K),z.updateMultisampleRenderTarget(vt),z.updateRenderTargetMipmap(vt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let _e=0,Ue=V.length;_e<Ue;_e++){const Nt=V[_e],{object:Zt,geometry:Vt,material:ve,group:Jt}=Nt;if(ve.side===ki&&Zt.layers.test(K.layers)){const Sn=ve.side;ve.side=On,ve.needsUpdate=!0,is(Zt,Q,K,Vt,ve,Jt),ve.side=Sn,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(z.updateMultisampleRenderTarget(vt),z.updateRenderTargetMipmap(vt))}E.setRenderTarget(St,Ct,pt),E.setClearColor(gt,it),kt!==void 0&&(K.viewport=kt),E.toneMapping=wt}function Qs(w,V,Q){const K=V.isScene===!0?V.overrideMaterial:null;for(let W=0,vt=w.length;W<vt;W++){const Pt=w[W],{object:St,geometry:Ct,group:pt}=Pt;let wt=Pt.material;wt.allowOverride===!0&&K!==null&&(wt=K),St.layers.test(Q.layers)&&is(St,V,Q,Ct,wt,pt)}}function is(w,V,Q,K,W,vt){w.onBeforeRender(E,V,Q,K,W,vt),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(E,V,Q,K,w,vt),W.transparent===!0&&W.side===ki&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,E.renderBufferDirect(Q,V,K,W,w,vt),W.side=Rs,W.needsUpdate=!0,E.renderBufferDirect(Q,V,K,W,w,vt),W.side=ki):E.renderBufferDirect(Q,V,K,W,w,vt),w.onAfterRender(E,V,Q,K,W,vt)}function tr(w,V,Q){V.isScene!==!0&&(V=Ae);const K=b.get(w),W=D.state.lights,vt=D.state.shadowsArray,Pt=W.state.version,St=Dt.getParameters(w,W.state,vt,V,Q),Ct=Dt.getProgramCacheKey(St);let pt=K.programs;K.environment=w.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(w.isMeshStandardMaterial?ct:st).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,pt===void 0&&(w.addEventListener("dispose",Cn),pt=new Map,K.programs=pt);let wt=pt.get(Ct);if(wt!==void 0){if(K.currentProgram===wt&&K.lightsStateVersion===Pt)return Ja(w,St),wt}else St.uniforms=Dt.getUniforms(w),w.onBeforeCompile(St,E),wt=Dt.acquireProgram(St,Ct),pt.set(Ct,wt),K.uniforms=St.uniforms;const kt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=Lt.uniform),Ja(w,St),K.needsLights=$a(w),K.lightsStateVersion=Pt,K.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=wt,K.uniformsList=null,wt}function Ka(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=Jl.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ja(w,V){const Q=b.get(w);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Tc(w,V,Q,K,W){V.isScene!==!0&&(V=Ae),z.resetTextureUnits();const vt=V.fog,Pt=K.isMeshStandardMaterial?V.environment:null,St=$===null?E.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Pn,Ct=(K.isMeshStandardMaterial?ct:st).get(K.envMap||Pt),pt=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,wt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),kt=!!Q.morphAttributes.position,Kt=!!Q.morphAttributes.normal,_e=!!Q.morphAttributes.color;let Ue=Wi;K.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ue=E.toneMapping);const Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Zt=Nt!==void 0?Nt.length:0,Vt=b.get(K),ve=D.state.lights;if(It===!0&&(pe===!0||w!==ot)){const $e=w===ot&&K.id===rt;Lt.setState(K,w,$e)}let Jt=!1;K.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ve.state.version||Vt.outputColorSpace!==St||W.isBatchedMesh&&Vt.batching===!1||!W.isBatchedMesh&&Vt.batching===!0||W.isBatchedMesh&&Vt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Vt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||W.isInstancedMesh&&Vt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Vt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Vt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Vt.instancingMorph===!1&&W.morphTexture!==null||Vt.envMap!==Ct||K.fog===!0&&Vt.fog!==vt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Lt.numPlanes||Vt.numIntersection!==Lt.numIntersection)||Vt.vertexAlphas!==pt||Vt.vertexTangents!==wt||Vt.morphTargets!==kt||Vt.morphNormals!==Kt||Vt.morphColors!==_e||Vt.toneMapping!==Ue||Vt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Vt.__version=K.version);let Sn=Vt.currentProgram;Jt===!0&&(Sn=tr(K,V,W));let ci=!1,Ze=!1,Oe=!1;const xe=Sn.getUniforms(),qe=Vt.uniforms;if(Ut.useProgram(Sn.program)&&(ci=!0,Ze=!0,Oe=!0),K.id!==rt&&(rt=K.id,Ze=!0),ci||ot!==w){Ut.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(B,"projectionMatrix",w.projectionMatrix),xe.setValue(B,"viewMatrix",w.matrixWorldInverse);const Ye=xe.map.cameraPosition;Ye!==void 0&&Ye.setValue(B,fe.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xe.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),ot!==w&&(ot=w,Ze=!0,Oe=!0)}if(Vt.needsLights&&(ve.state.directionalShadowMap.length>0&&xe.setValue(B,"directionalShadowMap",ve.state.directionalShadowMap,z),ve.state.spotShadowMap.length>0&&xe.setValue(B,"spotShadowMap",ve.state.spotShadowMap,z),ve.state.pointShadowMap.length>0&&xe.setValue(B,"pointShadowMap",ve.state.pointShadowMap,z)),W.isSkinnedMesh){xe.setOptional(B,W,"bindMatrix"),xe.setOptional(B,W,"bindMatrixInverse");const $e=W.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),xe.setValue(B,"boneTexture",$e.boneTexture,z))}W.isBatchedMesh&&(xe.setOptional(B,W,"batchingTexture"),xe.setValue(B,"batchingTexture",W._matricesTexture,z),xe.setOptional(B,W,"batchingIdTexture"),xe.setValue(B,"batchingIdTexture",W._indirectTexture,z),xe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(B,"batchingColorTexture",W._colorsTexture,z));const on=Q.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&re.update(W,Q,Sn),(Ze||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,xe.setValue(B,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(qe.envMap.value=Ct,qe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(qe.envMapIntensity.value=V.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=CE()),Ze&&(xe.setValue(B,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&Ec(qe,Oe),vt&&K.fog===!0&&Xt.refreshFogUniforms(qe,vt),Xt.refreshMaterialUniforms(qe,K,Ht,Wt,D.state.transmissionRenderTarget[w.id]),Jl.upload(B,Ka(Vt),qe,z)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Jl.upload(B,Ka(Vt),qe,z),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xe.setValue(B,"center",W.center),xe.setValue(B,"modelViewMatrix",W.modelViewMatrix),xe.setValue(B,"normalMatrix",W.normalMatrix),xe.setValue(B,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const $e=K.uniformsGroups;for(let Ye=0,er=$e.length;Ye<er;Ye++){const hi=$e[Ye];ft.update(hi,Sn),ft.bind(hi,Sn)}}return Sn}function Ec(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function $a(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,V,Q){const K=b.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=V,b.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const Q=b.get(w);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};const wc=B.createFramebuffer();this.setRenderTarget=function(w,V=0,Q=0){$=w,F=V,Z=Q;let K=null,W=!1,vt=!1;if(w){const St=b.get(w);if(St.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(B.FRAMEBUFFER,St.__webglFramebuffer),tt.copy(w.viewport),q.copy(w.scissor),j=w.scissorTest,Ut.viewport(tt),Ut.scissor(q),Ut.setScissorTest(j),rt=-1;return}else if(St.__webglFramebuffer===void 0)z.setupRenderTarget(w);else if(St.__hasExternalTextures)z.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const wt=w.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&b.has(wt)&&(w.width!==wt.image.width||w.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(w)}}const Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(vt=!0);const pt=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(pt[V])?K=pt[V][Q]:K=pt[V],W=!0):w.samples>0&&z.useMultisampledRTT(w)===!1?K=b.get(w).__webglMultisampledFramebuffer:Array.isArray(pt)?K=pt[Q]:K=pt,tt.copy(w.viewport),q.copy(w.scissor),j=w.scissorTest}else tt.copy(Y).multiplyScalar(Ht).floor(),q.copy(lt).multiplyScalar(Ht).floor(),j=Et;if(Q!==0&&(K=wc),Ut.bindFramebuffer(B.FRAMEBUFFER,K)&&Ut.drawBuffers(w,K),Ut.viewport(tt),Ut.scissor(q),Ut.setScissorTest(j),W){const St=b.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,St.__webglTexture,Q)}else if(vt){const St=V;for(let Ct=0;Ct<w.textures.length;Ct++){const pt=b.get(w.textures[Ct]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ct,pt.__webglTexture,Q,St)}}else if(w!==null&&Q!==0){const St=b.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,Q)}rt=-1},this.readRenderTargetPixels=function(w,V,Q,K,W,vt,Pt,St=0){if(!(w&&w.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct){Ut.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const pt=w.textures[St],wt=pt.format,kt=pt.type;if(!Re.textureFormatReadable(wt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(kt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-K&&Q>=0&&Q<=w.height-W&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St),B.readPixels(V,Q,K,W,mt.convert(wt),mt.convert(kt),vt))}finally{const pt=$!==null?b.get($).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(w,V,Q,K,W,vt,Pt,St=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct)if(V>=0&&V<=w.width-K&&Q>=0&&Q<=w.height-W){Ut.bindFramebuffer(B.FRAMEBUFFER,Ct);const pt=w.textures[St],wt=pt.format,kt=pt.type;if(!Re.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Kt),B.bufferData(B.PIXEL_PACK_BUFFER,vt.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St),B.readPixels(V,Q,K,W,mt.convert(wt),mt.convert(kt),0);const _e=$!==null?b.get($).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,_e);const Ue=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await nx(B,Ue,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Kt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,vt),B.deleteBuffer(Kt),B.deleteSync(Ue),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Q=0){const K=Math.pow(2,-Q),W=Math.floor(w.image.width*K),vt=Math.floor(w.image.height*K),Pt=V!==null?V.x:0,St=V!==null?V.y:0;z.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Pt,St,W,vt),Ut.unbindTexture()};const Ur=B.createFramebuffer(),Ac=B.createFramebuffer();this.copyTextureToTexture=function(w,V,Q=null,K=null,W=0,vt=null){vt===null&&(W!==0?(Ia("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=W,W=0):vt=0);let Pt,St,Ct,pt,wt,kt,Kt,_e,Ue;const Nt=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(Q!==null)Pt=Q.max.x-Q.min.x,St=Q.max.y-Q.min.y,Ct=Q.isBox3?Q.max.z-Q.min.z:1,pt=Q.min.x,wt=Q.min.y,kt=Q.isBox3?Q.min.z:0;else{const on=Math.pow(2,-W);Pt=Math.floor(Nt.width*on),St=Math.floor(Nt.height*on),w.isDataArrayTexture?Ct=Nt.depth:w.isData3DTexture?Ct=Math.floor(Nt.depth*on):Ct=1,pt=0,wt=0,kt=0}K!==null?(Kt=K.x,_e=K.y,Ue=K.z):(Kt=0,_e=0,Ue=0);const Zt=mt.convert(V.format),Vt=mt.convert(V.type);let ve;V.isData3DTexture?(z.setTexture3D(V,0),ve=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),ve=B.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Jt=B.getParameter(B.UNPACK_ROW_LENGTH),Sn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ci=B.getParameter(B.UNPACK_SKIP_PIXELS),Ze=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pt),B.pixelStorei(B.UNPACK_SKIP_ROWS,wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);const xe=w.isDataArrayTexture||w.isData3DTexture,qe=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const on=b.get(w),$e=b.get(V),Ye=b.get(on.__renderTarget),er=b.get($e.__renderTarget);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let hi=0;hi<Ct;hi++)xe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(w).__webglTexture,W,kt+hi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(V).__webglTexture,vt,Ue+hi)),B.blitFramebuffer(pt,wt,Pt,St,Kt,_e,Pt,St,B.DEPTH_BUFFER_BIT,B.NEAREST);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||b.has(w)){const on=b.get(w),$e=b.get(V);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Ur),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ac);for(let Ye=0;Ye<Ct;Ye++)xe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,W,kt+Ye):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,W),qe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.__webglTexture,vt,Ue+Ye):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$e.__webglTexture,vt),W!==0?B.blitFramebuffer(pt,wt,Pt,St,Kt,_e,Pt,St,B.COLOR_BUFFER_BIT,B.NEAREST):qe?B.copyTexSubImage3D(ve,vt,Kt,_e,Ue+Ye,pt,wt,Pt,St):B.copyTexSubImage2D(ve,vt,Kt,_e,pt,wt,Pt,St);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else qe?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(ve,vt,Kt,_e,Ue,Pt,St,Ct,Zt,Vt,Nt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(ve,vt,Kt,_e,Ue,Pt,St,Ct,Zt,Nt.data):B.texSubImage3D(ve,vt,Kt,_e,Ue,Pt,St,Ct,Zt,Vt,Nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,vt,Kt,_e,Pt,St,Zt,Vt,Nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,vt,Kt,_e,Nt.width,Nt.height,Zt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,vt,Kt,_e,Pt,St,Zt,Vt,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Sn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ci),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),vt===0&&V.generateMipmaps&&B.generateMipmap(ve),Ut.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?z.setTextureCube(w,0):w.isData3DTexture?z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?z.setTexture2DArray(w,0):z.setTexture2D(w,0),Ut.unbindTexture()},this.resetState=function(){F=0,Z=0,$=null,Ut.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function Yp(s,t){if(t===X0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Bu||t===y_){let e=s.getIndex();if(e===null){const l=[],c=s.getAttribute("position");if(c!==void 0){for(let u=0;u<c.count;u++)l.push(u);s.setIndex(l),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,r=[];if(t===Bu)for(let l=1;l<=n;l++)r.push(e.getX(0)),r.push(e.getX(l)),r.push(e.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(r.push(e.getX(l)),r.push(e.getX(l+1)),r.push(e.getX(l+2))):(r.push(e.getX(l+2)),r.push(e.getX(l+1)),r.push(e.getX(l)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class IE extends Wo{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new FE(e)}),this.register(function(e){return new BE(e)}),this.register(function(e){return new qE(e)}),this.register(function(e){return new YE(e)}),this.register(function(e){return new jE(e)}),this.register(function(e){return new zE(e)}),this.register(function(e){return new VE(e)}),this.register(function(e){return new HE(e)}),this.register(function(e){return new GE(e)}),this.register(function(e){return new OE(e)}),this.register(function(e){return new WE(e)}),this.register(function(e){return new kE(e)}),this.register(function(e){return new ZE(e)}),this.register(function(e){return new XE(e)}),this.register(function(e){return new NE(e)}),this.register(function(e){return new KE(e)}),this.register(function(e){return new JE(e)})}load(t,e,n,r){const o=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const f=Ta.extractUrlBase(t);l=Ta.resolveURL(f,this.path)}else l=Ta.extractUrlBase(t);this.manager.itemStart(t);const c=function(f){r?r(f):console.error(f),o.manager.itemError(t),o.manager.itemEnd(t)},u=new k_(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(f){try{o.parse(f,l,function(d){e(d),o.manager.itemEnd(t)},c)}catch(d){c(d)}},n,c)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,r){let o;const l={},c={},u=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(u.decode(new Uint8Array(t,0,4))===Z_){try{l[de.KHR_BINARY_GLTF]=new $E(t)}catch(p){r&&r(p);return}o=JSON.parse(l[de.KHR_BINARY_GLTF].content)}else o=JSON.parse(u.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new uw(o,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](f);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,l[p.name]=!0}if(o.extensionsUsed)for(let d=0;d<o.extensionsUsed.length;++d){const p=o.extensionsUsed[d],_=o.extensionsRequired||[];switch(p){case de.KHR_MATERIALS_UNLIT:l[p]=new UE;break;case de.KHR_DRACO_MESH_COMPRESSION:l[p]=new QE(o,this.dracoLoader);break;case de.KHR_TEXTURE_TRANSFORM:l[p]=new tw;break;case de.KHR_MESH_QUANTIZATION:l[p]=new ew;break;default:_.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}f.setExtensions(l),f.setPlugins(c),f.parse(n,r)}parseAsync(t,e){const n=this;return new Promise(function(r,o){n.parse(t,e,r,o)})}}function DE(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const de={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NE{constructor(t){this.parser=t,this.name=de.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,r=e.length;n<r;n++){const o=e[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let r=e.cache.get(n);if(r)return r;const o=e.json,u=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let f;const d=new ee(16777215);u.color!==void 0&&d.setRGB(u.color[0],u.color[1],u.color[2],Pn);const p=u.range!==void 0?u.range:0;switch(u.type){case"directional":f=new z_(d),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new My(d),f.distance=p;break;case"spot":f=new xy(d),f.distance=p,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,f.angle=u.spot.outerConeAngle,f.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return f.position.set(0,0,0),Di(f,u),u.intensity!==void 0&&(f.intensity=u.intensity),f.name=e.createUniqueName(u.name||"light_"+t),r=Promise.resolve(f),e.cache.add(n,r),r}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,o=n.json.nodes[t],c=(o.extensions&&o.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(u){return n._getNodeRef(e.cache,c,u)})}}class UE{constructor(){this.name=de.KHR_MATERIALS_UNLIT}getMaterialType(){return gr}extendParams(t,e,n){const r=[];t.color=new ee(1,1,1),t.opacity=1;const o=e.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const l=o.baseColorFactor;t.color.setRGB(l[0],l[1],l[2],Pn),t.opacity=l[3]}o.baseColorTexture!==void 0&&r.push(n.assignTexture(t,"map",o.baseColorTexture,_n))}return Promise.all(r)}}class OE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(e.emissiveIntensity=o),Promise.resolve()}}class FE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];if(l.clearcoatFactor!==void 0&&(e.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(e,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $t(c,c)}return Promise.all(o)}}class BE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return e.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class kE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.iridescenceFactor!==void 0&&(e.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(e.iridescenceIOR=l.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(o)}}class zE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];e.sheenColor=new ee(0,0,0),e.sheenRoughness=0,e.sheen=1;const l=r.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;e.sheenColor.setRGB(c[0],c[1],c[2],Pn)}return l.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&o.push(n.assignTexture(e,"sheenColorMap",l.sheenColorTexture,_n)),l.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(o)}}class VE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.transmissionFactor!==void 0&&(e.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&o.push(n.assignTexture(e,"transmissionMap",l.transmissionTexture)),Promise.all(o)}}class HE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];e.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&o.push(n.assignTexture(e,"thicknessMap",l.thicknessTexture)),e.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return e.attenuationColor=new ee().setRGB(c[0],c[1],c[2],Pn),Promise.all(o)}}class GE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return e.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class WE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];e.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&o.push(n.assignTexture(e,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return e.specularColor=new ee().setRGB(c[0],c[1],c[2],Pn),l.specularColorTexture!==void 0&&o.push(n.assignTexture(e,"specularColorMap",l.specularColorTexture,_n)),Promise.all(o)}}class XE{constructor(t){this.parser=t,this.name=de.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return e.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&o.push(n.assignTexture(e,"bumpMap",l.bumpTexture)),Promise.all(o)}}class ZE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ns}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.anisotropyStrength!==void 0&&(e.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(e.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&o.push(n.assignTexture(e,"anisotropyMap",l.anisotropyTexture)),Promise.all(o)}}class qE{constructor(t){this.parser=t,this.name=de.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,r=n.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],l=e.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,o.source,l)}}class YE{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,r=n.json,o=r.textures[t];if(!o.extensions||!o.extensions[e])return null;const l=o.extensions[e],c=r.images[l.source];let u=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(u=f)}return n.loadTextureImage(t,l.source,u)}}class jE{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,r=n.json,o=r.textures[t];if(!o.extensions||!o.extensions[e])return null;const l=o.extensions[e],c=r.images[l.source];let u=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(u=f)}return n.loadTextureImage(t,l.source,u)}}class KE{constructor(t){this.name=de.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(c){const u=r.byteOffset||0,f=r.byteLength||0,d=r.count,p=r.byteStride,_=new Uint8Array(c,u,f);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(d,p,_,r.mode,r.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(d*p);return l.decodeGltfBuffer(new Uint8Array(v),d,p,_,r.mode,r.filter),v})})}else return null}}class JE{constructor(t){this.name=de.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=e.meshes[n.mesh];for(const f of r.primitives)if(f.mode!==$n.TRIANGLES&&f.mode!==$n.TRIANGLE_STRIP&&f.mode!==$n.TRIANGLE_FAN&&f.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],u={};for(const f in l)c.push(this.parser.getDependency("accessor",l[f]).then(d=>(u[f]=d,u[f])));return c.length<1?null:(c.push(this.parser.createNodeMesh(t)),Promise.all(c).then(f=>{const d=f.pop(),p=d.isGroup?d.children:[d],_=f[0].count,v=[];for(const M of p){const S=new le,x=new H,g=new ji,P=new H(1,1,1),A=new Yx(M.geometry,M.material,_);for(let C=0;C<_;C++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,C),u.ROTATION&&g.fromBufferAttribute(u.ROTATION,C),u.SCALE&&P.fromBufferAttribute(u.SCALE,C),A.setMatrixAt(C,S.compose(x,g,P));for(const C in u)if(C==="_COLOR_0"){const D=u[C];A.instanceColor=new zu(D.array,D.itemSize,D.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,u[C]);Ge.prototype.copy.call(A,M),this.parser.assignFinalMaterial(A),v.push(A)}return d.isGroup?(d.clear(),d.add(...v),d):v[0]}))}}const Z_="glTF",fa=12,jp={JSON:1313821514,BIN:5130562};class $E{constructor(t){this.name=de.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,fa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Z_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-fa,o=new DataView(t,fa);let l=0;for(;l<r;){const c=o.getUint32(l,!0);l+=4;const u=o.getUint32(l,!0);if(l+=4,u===jp.JSON){const f=new Uint8Array(t,fa+l,c);this.content=n.decode(f)}else if(u===jp.BIN){const f=fa+l;this.body=t.slice(f,f+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QE{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=de.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,r=this.dracoLoader,o=t.extensions[this.name].bufferView,l=t.extensions[this.name].attributes,c={},u={},f={};for(const d in l){const p=Wu[d]||d.toLowerCase();c[p]=l[d]}for(const d in t.attributes){const p=Wu[d]||d.toLowerCase();if(l[d]!==void 0){const _=n.accessors[t.attributes[d]],v=po[_.componentType];f[p]=v.name,u[p]=_.normalized===!0}}return e.getDependency("bufferView",o).then(function(d){return new Promise(function(p,_){r.decodeDracoFile(d,function(v){for(const M in v.attributes){const S=v.attributes[M],x=u[M];x!==void 0&&(S.normalized=x)}p(v)},c,f,Pn,_)})})}}class tw{constructor(){this.name=de.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ew{constructor(){this.name=de.KHR_MESH_QUANTIZATION}}class q_ extends Ya{constructor(t,e,n,r){super(t,e,n,r)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r*3+r;for(let l=0;l!==r;l++)e[l]=n[o+l];return e}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=c*2,f=c*3,d=r-e,p=(n-e)/d,_=p*p,v=_*p,M=t*f,S=M-f,x=-2*v+3*_,g=v-_,P=1-x,A=g-_+p;for(let C=0;C!==c;C++){const D=l[S+C+c],U=l[S+C+u]*d,N=l[M+C+c],G=l[M+C]*d;o[C]=P*D+A*U+x*N+g*G}return o}}const nw=new ji;class iw extends q_{interpolate_(t,e,n,r){const o=super.interpolate_(t,e,n,r);return nw.fromArray(o).normalize().toArray(o),o}}const $n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kp={9728:tn,9729:en,9984:d_,9985:Zl,9986:_a,9987:Ms},Jp={33071:zi,33648:ec,10497:Co},Rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sw={CUBICSPLINE:void 0,LINEAR:Ca,STEP:Pa},Ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new vc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rs})),s.DefaultMaterial}function ur(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Di(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ow(s,t,e){let n=!1,r=!1,o=!1;for(let f=0,d=t.length;f<d;f++){const p=t[f];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(r=!0),p.COLOR_0!==void 0&&(o=!0),n&&r&&o)break}if(!n&&!r&&!o)return Promise.resolve(s);const l=[],c=[],u=[];for(let f=0,d=t.length;f<d;f++){const p=t[f];if(n){const _=p.POSITION!==void 0?e.getDependency("accessor",p.POSITION):s.attributes.position;l.push(_)}if(r){const _=p.NORMAL!==void 0?e.getDependency("accessor",p.NORMAL):s.attributes.normal;c.push(_)}if(o){const _=p.COLOR_0!==void 0?e.getDependency("accessor",p.COLOR_0):s.attributes.color;u.push(_)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],_=f[2];return n&&(s.morphAttributes.position=d),r&&(s.morphAttributes.normal=p),o&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function aw(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,r=e.length;n<r;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lw(s){let t;const e=s.extensions&&s.extensions[de.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ch(e.attributes):t=s.indices+":"+Ch(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)t+=":"+Ch(s.targets[n]);return t}function Ch(s){let t="";const e=Object.keys(s).sort();for(let n=0,r=e.length;n<r;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Xu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hw=new le;class uw{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new DE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,o=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const u=c.match(/Version\/(\d+)/);r=n&&u?parseInt(u[1],10):-1,o=c.indexOf("Firefox")>-1,l=o?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||o&&l<98?this.textureLoader=new gy(this.options.manager):this.textureLoader=new Ty(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new k_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][r.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:r.asset,parser:n,userData:{}};return ur(o,c,r),Di(c,r),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(c)})).then(function(){for(const u of c.scenes)u.updateMatrixWorld();t(c)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let r=0,o=e.length;r<o;r++){const l=e[r].joints;for(let c=0,u=l.length;c<u;c++)t[l[c]].isBone=!0}for(let r=0,o=t.length;r<o;r++){const l=t[r];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const r=n.clone(),o=(l,c)=>{const u=this.associations.get(l);u!=null&&this.associations.set(c,u);for(const[f,d]of l.children.entries())o(d,c.children[f])};return o(n,r),r.name+="_instance_"+t.uses[e]++,r}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const r=t(e[n]);if(r)return r}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let r=0;r<e.length;r++){const o=t(e[r]);o&&n.push(o)}return n}getDependency(t,e){const n=t+":"+e;let r=this.cache.get(n);if(!r){switch(t){case"scene":r=this.loadScene(e);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(e)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(e)});break;case"accessor":r=this.loadAccessor(e);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(e)});break;case"buffer":r=this.loadBuffer(e);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(e)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(e)});break;case"skin":r=this.loadSkin(e);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(e)});break;case"camera":r=this.loadCamera(e);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,e)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(n,r)}return r}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(r.map(function(o,l){return n.getDependency(t,l)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[de.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,l){n.load(Ta.resolveURL(e.uri,r.path),o,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const r=e.byteLength||0,o=e.byteOffset||0;return n.slice(o,o+r)})}loadAccessor(t){const e=this,n=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const l=Rh[r.type],c=po[r.componentType],u=r.normalized===!0,f=new c(r.count*l);return Promise.resolve(new An(f,l,u))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(l){const c=l[0],u=Rh[r.type],f=po[r.componentType],d=f.BYTES_PER_ELEMENT,p=d*u,_=r.byteOffset||0,v=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let S,x;if(v&&v!==p){const g=Math.floor(_/v),P="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let A=e.cache.get(P);A||(S=new f(c,g*v,r.count*v/d),A=new Gx(S,v/d),e.cache.add(P,A)),x=new yf(A,u,_%v/d,M)}else c===null?S=new f(r.count*u):S=new f(c,_,r.count*u),x=new An(S,u,M);if(r.sparse!==void 0){const g=Rh.SCALAR,P=po[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,D=new P(l[1],A,r.sparse.count*g),U=new f(l[2],C,r.sparse.count*u);c!==null&&(x=new An(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let N=0,G=D.length;N<G;N++){const E=D[N];if(x.setX(E,U[N*u]),u>=2&&x.setY(E,U[N*u+1]),u>=3&&x.setZ(E,U[N*u+2]),u>=4&&x.setW(E,U[N*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=M}return x})}loadTexture(t){const e=this.json,n=this.options,o=e.textures[t].source,l=e.images[o];let c=this.textureLoader;if(l.uri){const u=n.manager.getHandler(l.uri);u!==null&&(c=u)}return this.loadTextureImage(t,o,c)}loadTextureImage(t,e,n){const r=this,o=this.json,l=o.textures[t],c=o.images[e],u=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[u])return this.textureCache[u];const f=this.loadImageSource(e,n).then(function(d){d.flipY=!1,d.name=l.name||c.name||"",d.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(d.name=c.uri);const _=(o.samplers||{})[l.sampler]||{};return d.magFilter=Kp[_.magFilter]||en,d.minFilter=Kp[_.minFilter]||Ms,d.wrapS=Jp[_.wrapS]||Co,d.wrapT=Jp[_.wrapT]||Co,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==tn&&d.minFilter!==en,r.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[u]=f,f}loadImageSource(t,e){const n=this,r=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(p=>p.clone());const l=r.images[t],c=self.URL||self.webkitURL;let u=l.uri||"",f=!1;if(l.bufferView!==void 0)u=n.getDependency("bufferView",l.bufferView).then(function(p){f=!0;const _=new Blob([p],{type:l.mimeType});return u=c.createObjectURL(_),u});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(p){return new Promise(function(_,v){let M=_;e.isImageBitmapLoader===!0&&(M=function(S){const x=new fn(S);x.needsUpdate=!0,_(x)}),e.load(Ta.resolveURL(p,o.path),M,void 0,v)})}).then(function(p){return f===!0&&c.revokeObjectURL(u),Di(p,l),p.userData.mimeType=l.mimeType||cw(l.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),p});return this.sourceCache[t]=d,d}assignTexture(t,e,n,r){const o=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),o.extensions[de.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[de.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const u=o.associations.get(l);l=o.extensions[de.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),o.associations.set(l,u)}}return r!==void 0&&(l.colorSpace=r),t[e]=l,l})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const r=e.attributes.tangent===void 0,o=e.attributes.color!==void 0,l=e.attributes.normal===void 0;if(t.isPoints){const c="PointsMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new U_,Zi.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(c,u)),n=u}else if(t.isLine){const c="LineBasicMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new N_,Zi.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(c,u)),n=u}if(r||o||l){let c="ClonedMaterial:"+n.uuid+":";r&&(c+="derivative-tangents:"),o&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let u=this.cache.get(c);u||(u=n.clone(),o&&(u.vertexColors=!0),l&&(u.flatShading=!0),r&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(c,u),this.associations.set(u,this.associations.get(n))),n=u}t.material=n}getMaterialType(){return vc}loadMaterial(t){const e=this,n=this.json,r=this.extensions,o=n.materials[t];let l;const c={},u=o.extensions||{},f=[];if(u[de.KHR_MATERIALS_UNLIT]){const p=r[de.KHR_MATERIALS_UNLIT];l=p.getMaterialType(),f.push(p.extendParams(c,o,e))}else{const p=o.pbrMetallicRoughness||{};if(c.color=new ee(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const _=p.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],Pn),c.opacity=_[3]}p.baseColorTexture!==void 0&&f.push(e.assignTexture(c,"map",p.baseColorTexture,_n)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(f.push(e.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),f.push(e.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),l=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(t)}),f.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(t,c)})))}o.doubleSided===!0&&(c.side=ki);const d=o.alphaMode||Ph.OPAQUE;if(d===Ph.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===Ph.MASK&&(c.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&l!==gr&&(f.push(e.assignTexture(c,"normalMap",o.normalTexture)),c.normalScale=new $t(1,1),o.normalTexture.scale!==void 0)){const p=o.normalTexture.scale;c.normalScale.set(p,p)}if(o.occlusionTexture!==void 0&&l!==gr&&(f.push(e.assignTexture(c,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&l!==gr){const p=o.emissiveFactor;c.emissive=new ee().setRGB(p[0],p[1],p[2],Pn)}return o.emissiveTexture!==void 0&&l!==gr&&f.push(e.assignTexture(c,"emissiveMap",o.emissiveTexture,_n)),Promise.all(f).then(function(){const p=new l(c);return o.name&&(p.name=o.name),Di(p,o),e.associations.set(p,{materials:t}),o.extensions&&ur(r,p,o),p})}createUniqueName(t){const e=Le.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,r=this.primitiveCache;function o(c){return n[de.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,e).then(function(u){return $p(u,c,e)})}const l=[];for(let c=0,u=t.length;c<u;c++){const f=t[c],d=lw(f),p=r[d];if(p)l.push(p.promise);else{let _;f.extensions&&f.extensions[de.KHR_DRACO_MESH_COMPRESSION]?_=o(f):_=$p(new ai,f,e),r[d]={primitive:f,promise:_},l.push(_)}}return Promise.all(l)}loadMesh(t){const e=this,n=this.json,r=this.extensions,o=n.meshes[t],l=o.primitives,c=[];for(let u=0,f=l.length;u<f;u++){const d=l[u].material===void 0?rw(this.cache):this.getDependency("material",l[u].material);c.push(d)}return c.push(e.loadGeometries(l)),Promise.all(c).then(function(u){const f=u.slice(0,u.length-1),d=u[u.length-1],p=[];for(let v=0,M=d.length;v<M;v++){const S=d[v],x=l[v];let g;const P=f[v];if(x.mode===$n.TRIANGLES||x.mode===$n.TRIANGLE_STRIP||x.mode===$n.TRIANGLE_FAN||x.mode===void 0)g=o.isSkinnedMesh===!0?new Xx(S,P):new Zn(S,P),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),x.mode===$n.TRIANGLE_STRIP?g.geometry=Yp(g.geometry,y_):x.mode===$n.TRIANGLE_FAN&&(g.geometry=Yp(g.geometry,Bu));else if(x.mode===$n.LINES)g=new $x(S,P);else if(x.mode===$n.LINE_STRIP)g=new Tf(S,P);else if(x.mode===$n.LINE_LOOP)g=new Qx(S,P);else if(x.mode===$n.POINTS)g=new ty(S,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&aw(g,o),g.name=e.createUniqueName(o.name||"mesh_"+t),Di(g,o),x.extensions&&ur(r,g,x),e.assignFinalMaterial(g),p.push(g)}for(let v=0,M=p.length;v<M;v++)e.associations.set(p[v],{meshes:t,primitives:v});if(p.length===1)return o.extensions&&ur(r,p[0],o),p[0];const _=new vr;o.extensions&&ur(r,_,o),e.associations.set(_,{meshes:t});for(let v=0,M=p.length;v<M;v++)_.add(p[v]);return _})}loadCamera(t){let e;const n=this.json.cameras[t],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new wn(b_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(e=new yc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Di(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let r=0,o=e.joints.length;r<o;r++)n.push(this._loadNodeShallow(e.joints[r]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const o=r.pop(),l=r,c=[],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];if(p){c.push(p);const _=new le;o!==null&&_.fromArray(o.array,f*16),u.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[f])}return new Sf(c,u)})}loadAnimation(t){const e=this.json,n=this,r=e.animations[t],o=r.name?r.name:"animation_"+t,l=[],c=[],u=[],f=[],d=[];for(let p=0,_=r.channels.length;p<_;p++){const v=r.channels[p],M=r.samplers[v.sampler],S=v.target,x=S.node,g=r.parameters!==void 0?r.parameters[M.input]:M.input,P=r.parameters!==void 0?r.parameters[M.output]:M.output;S.node!==void 0&&(l.push(this.getDependency("node",x)),c.push(this.getDependency("accessor",g)),u.push(this.getDependency("accessor",P)),f.push(M),d.push(S))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(d)]).then(function(p){const _=p[0],v=p[1],M=p[2],S=p[3],x=p[4],g=[];for(let A=0,C=_.length;A<C;A++){const D=_[A],U=v[A],N=M[A],G=S[A],E=x[A];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const R=n._createAnimationTracks(D,U,N,G,E);if(R)for(let F=0;F<R.length;F++)g.push(R[F])}const P=new hy(o,void 0,g);return Di(P,r),P})}createNodeMesh(t){const e=this.json,n=this,r=e.nodes[t];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(o){const l=n._getNodeRef(n.meshCache,r.mesh,o);return r.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let u=0,f=r.weights.length;u<f;u++)c.morphTargetInfluences[u]=r.weights[u]}),l})}loadNode(t){const e=this.json,n=this,r=e.nodes[t],o=n._loadNodeShallow(t),l=[],c=r.children||[];for(let f=0,d=c.length;f<d;f++)l.push(n.getDependency("node",c[f]));const u=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([o,Promise.all(l),u]).then(function(f){const d=f[0],p=f[1],_=f[2];_!==null&&d.traverse(function(v){v.isSkinnedMesh&&v.bind(_,hw)});for(let v=0,M=p.length;v<M;v++)d.add(p[v]);return d})}_loadNodeShallow(t){const e=this.json,n=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=e.nodes[t],l=o.name?r.createUniqueName(o.name):"",c=[],u=r._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(t)});return u&&c.push(u),o.camera!==void 0&&c.push(r.getDependency("camera",o.camera).then(function(f){return r._getNodeRef(r.cameraCache,o.camera,f)})),r._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(t)}).forEach(function(f){c.push(f)}),this.nodeCache[t]=Promise.all(c).then(function(f){let d;if(o.isBone===!0?d=new D_:f.length>1?d=new vr:f.length===1?d=f[0]:d=new Ge,d!==f[0])for(let p=0,_=f.length;p<_;p++)d.add(f[p]);if(o.name&&(d.userData.name=o.name,d.name=l),Di(d,o),o.extensions&&ur(n,d,o),o.matrix!==void 0){const p=new le;p.fromArray(o.matrix),d.applyMatrix4(p)}else o.translation!==void 0&&d.position.fromArray(o.translation),o.rotation!==void 0&&d.quaternion.fromArray(o.rotation),o.scale!==void 0&&d.scale.fromArray(o.scale);if(!r.associations.has(d))r.associations.set(d,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){const p=r.associations.get(d);r.associations.set(d,{...p})}return r.associations.get(d).nodes=t,d}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],r=this,o=new vr;n.name&&(o.name=r.createUniqueName(n.name)),Di(o,n),n.extensions&&ur(e,o,n);const l=n.nodes||[],c=[];for(let u=0,f=l.length;u<f;u++)c.push(r.getDependency("node",l[u]));return Promise.all(c).then(function(u){for(let d=0,p=u.length;d<p;d++)o.add(u[d]);const f=d=>{const p=new Map;for(const[_,v]of r.associations)(_ instanceof Zi||_ instanceof fn)&&p.set(_,v);return d.traverse(_=>{const v=r.associations.get(_);v!=null&&p.set(_,v)}),p};return r.associations=f(o),o})}_createAnimationTracks(t,e,n,r,o){const l=[],c=t.name?t.name:t.uuid,u=[];Ws[o.path]===Ws.weights?t.traverse(function(_){_.morphTargetInfluences&&u.push(_.name?_.name:_.uuid)}):u.push(c);let f;switch(Ws[o.path]){case Ws.weights:f=No;break;case Ws.rotation:f=Uo;break;case Ws.translation:case Ws.scale:f=Oo;break;default:switch(n.itemSize){case 1:f=No;break;case 2:case 3:default:f=Oo;break}break}const d=r.interpolation!==void 0?sw[r.interpolation]:Ca,p=this._getArrayFromAccessor(n);for(let _=0,v=u.length;_<v;_++){const M=new f(u[_]+"."+Ws[o.path],e.array,p,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),l.push(M)}return l}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Xu(e.constructor),r=new Float32Array(e.length);for(let o=0,l=e.length;o<l;o++)r[o]=e[o]*n;e=r}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const r=this instanceof Uo?iw:q_;return new r(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fw(s,t,e){const n=t.attributes,r=new ts;if(n.POSITION!==void 0){const c=e.json.accessors[n.POSITION],u=c.min,f=c.max;if(u!==void 0&&f!==void 0){if(r.set(new H(u[0],u[1],u[2]),new H(f[0],f[1],f[2])),c.normalized){const d=Xu(po[c.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const c=new H,u=new H;for(let f=0,d=o.length;f<d;f++){const p=o[f];if(p.POSITION!==void 0){const _=e.json.accessors[p.POSITION],v=_.min,M=_.max;if(v!==void 0&&M!==void 0){if(u.setX(Math.max(Math.abs(v[0]),Math.abs(M[0]))),u.setY(Math.max(Math.abs(v[1]),Math.abs(M[1]))),u.setZ(Math.max(Math.abs(v[2]),Math.abs(M[2]))),_.normalized){const S=Xu(po[_.componentType]);u.multiplyScalar(S)}c.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}s.boundingBox=r;const l=new es;r.getCenter(l.center),l.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=l}function $p(s,t,e){const n=t.attributes,r=[];function o(l,c){return e.getDependency("accessor",l).then(function(u){s.setAttribute(c,u)})}for(const l in n){const c=Wu[l]||l.toLowerCase();c in s.attributes||r.push(o(n[l],c))}if(t.indices!==void 0&&!s.index){const l=e.getDependency("accessor",t.indices).then(function(c){s.setIndex(c)});r.push(l)}return ge.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),Di(s,t),fw(s,t,e),Promise.all(r).then(function(){return t.targets!==void 0?ow(s,t.targets,e):s})}const Qp={type:"change"},Rf={type:"start"},Y_={type:"end"},Vl=new Za,tm=new Xs,dw=Math.cos(70*b_.DEG2RAD),Qe=new H,In=2*Math.PI,De={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lh=1e-6;class pw extends Uy{constructor(t,e=null){super(t,e),this.state=De.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:ao.ROTATE,TWO:ao.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new ji,this._lastTargetPosition=new H,this._quat=new ji().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bp,this._sphericalDelta=new bp,this._scale=1,this._panOffset=new H,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new H,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_w.bind(this),this._onPointerDown=mw.bind(this),this._onPointerUp=gw.bind(this),this._onContextMenu=Tw.bind(this),this._onMouseWheel=yw.bind(this),this._onKeyDown=Mw.bind(this),this._onTouchStart=Sw.bind(this),this._onTouchMove=bw.bind(this),this._onMouseDown=vw.bind(this),this._onMouseMove=xw.bind(this),this._interceptControlDown=Ew.bind(this),this._interceptControlUp=ww.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qp),this.update(),this.state=De.NONE}update(t=null){const e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===De.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),r<-Math.PI?r+=In:r>Math.PI&&(r-=In),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=Qe.length();l=this._clampDistance(c*this._scale);const u=c-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;const f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<dw?this.object.lookAt(this.target):(tm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(tm,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lh||this._lastTargetPosition.distanceToSquared(this.target)>Lh?(this.dispatchEvent(Qp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Qe.copy(r).sub(this.target);let o=Qe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,o=e-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function _w(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function gw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Y_),this.state=De.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vw(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=De.DOLLY;break;case ho.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=De.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=De.ROTATE}break;case ho.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=De.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=De.PAN}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Rf)}function xw(s){switch(this.state){case De.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case De.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case De.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function yw(s){this.enabled===!1||this.enableZoom===!1||this.state!==De.NONE||(s.preventDefault(),this.dispatchEvent(Rf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Y_))}function Mw(s){this.enabled!==!1&&this._handleKeyDown(s)}function Sw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ao.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=De.TOUCH_ROTATE;break;case ao.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=De.TOUCH_PAN;break;default:this.state=De.NONE}break;case 2:switch(this.touches.TWO){case ao.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=De.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=De.TOUCH_DOLLY_ROTATE;break;default:this.state=De.NONE}break;default:this.state=De.NONE}this.state!==De.NONE&&this.dispatchEvent(Rf)}function bw(s){switch(this._trackPointer(s),this.state){case De.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case De.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case De.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case De.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=De.NONE}}function Tw(s){this.enabled!==!1&&s.preventDefault()}function Ew(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ww(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Aw=wi('<button class="activate-btn svelte-ygbm3g">Explorer le modèle</button>'),Rw=wi('<div class="loading-overlay svelte-ygbm3g"><div class="spinner svelte-ygbm3g"></div> <p>Chargement en cours...</p></div>'),Pw=wi('<div class="viewer-container svelte-ygbm3g"><!> <!> <div class="viewer svelte-ygbm3g"></div> <button class="back-btn svelte-ygbm3g">← Retour</button></div>');function j_(s,t){if(new.target)return Ha({component:j_,...s});zo(t,!1);let e=Gi(),n,r=Gi(!0),o=Gi(!1);const l=a0();function c(x){Xe(o,x),n&&(n.enabled=x,n.enableZoom=x,n.enableRotate=x)}e_(()=>{const x=new Hx;x.background=new ee(15989483);const g=new wn(30,1,.01,1e12);g.position.set(0,1,1);const P=new LE({antialias:!0,powerPreference:"high-performance"});P.setPixelRatio(Math.min(2,window.devicePixelRatio)),Me(e).appendChild(P.domElement),P.setSize(Me(e).clientWidth,Me(e).clientHeight),x.add(new by(16777215,.7));const A=new z_(16777215,.6);A.position.set(50,50,50),x.add(A),n=new pw(g,P.domElement),n.target.set(0,0,0),n.enableDamping=!0,n.dampingFactor=.05,n.enabled=!1,n.enableZoom=!1,n.enableRotate=!1,n.enablePan=!1,new IE().load("/nyamusisi/data/point.glb",U=>{const N=U.scene;x.add(N),N.traverse(Z=>{Z.isMesh&&(Z.material=new vc({vertexColors:!!Z.geometry.attributes.color,color:16777215}))});const G=new ts().setFromObject(N),E=G.getCenter(new H),R=G.getSize(new H),F=Math.max(R.x,R.y,R.z);N.position.sub(E),g.near=F/1e4,g.far=F*1e4,g.updateProjectionMatrix(),g.position.set(F*.8,F*.8,F*.6),g.lookAt(0,0,0),n.minDistance=F*.03,n.maxDistance=F*3,n.update(),Xe(r,!1)},U=>{U.total&&console.log(`GLB ${(U.loaded/U.total*100).toFixed(0)}% loaded`)},U=>{console.error("GLB load error",U),Xe(r,!1)});const D=()=>{const U=Me(e).clientWidth,N=Me(e).clientHeight;U&&N&&(g.aspect=U/N,g.updateProjectionMatrix(),P.setSize(U,N))};window.addEventListener("resize",D),D(),P.setAnimationLoop(()=>{n.update(),P.render(x,g)})});var u={$set:Xa,$on:(x,g)=>Wa(t,x,g)};Ga();var f=Pw(),d=gn(f);{var p=x=>{var g=Aw();ys("click",g,()=>c(!0)),Si(x,g)};qh(d,x=>{Me(o)||x(p)})}var _=vn(d,2);{var v=x=>{var g=Rw();Si(x,g)};qh(_,x=>{Me(r)&&x(v)})}var M=vn(_,2);i_(M,x=>Xe(e,x),()=>Me(e));var S=vn(M,2);return hn(f),ys("click",S,()=>l("close")),Si(s,f),Vo(u)}var Cw=wi("<img/>"),Lw=wi(`<section class="svelte-1rraixl"><p style="font-family: 'Ga Maamli', sans-serif !important;color: #0085ca;"> </p> <p> </p></section>`),Iw=wi('<div class="agro-layout svelte-1rraixl"><div class="map svelte-1rraixl"><img class="layer base svelte-1rraixl" alt="Layer base"/> <!></div> <div class="stor svelte-1rraixl"></div></div>');function K_(s,t){if(new.target)return Ha({component:K_,...s});zo(t,!1);const e=[{year:2003,text:"Occupation des zones agricoles"},{year:2007,text:""},{year:2011,text:""},{year:2015,text:""},{year:2019,text:""}];let n=Gi(0);function r(p){Xe(n,p)}var o={$set:Xa,$on:(p,_)=>Wa(t,p,_)};Ga();var l=Iw(),c=gn(l),u=gn(c),f=vn(u,2);Rd(f,1,()=>e,wd,(p,_,v)=>{var M=Cw();Ma(()=>{co(M,"src",`/nyamusisi/svg/${Me(_).year}.svg`),d0(M,1,`layer ${v===Me(n)?"visible":""}`,"svelte-1rraixl"),co(M,"alt",`Anno ${Me(_).year??""}`)}),Si(p,M)}),hn(c);var d=vn(c,2);return Rd(d,5,()=>e,wd,(p,_,v)=>{var M=Lw(),S=gn(M),x=gn(S,!0);hn(S);var g=vn(S,2),P=gn(g,!0);hn(g),hn(M),Ma(()=>{Ed(x,Me(_).text),Ed(P,Me(_).year)}),ys("mouseover",M,()=>r(v)),Si(p,M)}),hn(d),hn(l),Ma(()=>co(u,"src","/nyamusisi/svg/layerbase.svg")),Si(s,l),Vo(o)}function Dw(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var va={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var Nw=va.exports,em;function Uw(){return em||(em=1,(function(s,t){(function(e,n){n(t)})(Nw,(function(e){var n="1.9.4";function r(i){var a,h,m,y;for(h=1,m=arguments.length;h<m;h++){y=arguments[h];for(a in y)i[a]=y[a]}return i}var o=Object.create||(function(){function i(){}return function(a){return i.prototype=a,new i}})();function l(i,a){var h=Array.prototype.slice;if(i.bind)return i.bind.apply(i,h.call(arguments,1));var m=h.call(arguments,2);return function(){return i.apply(a,m.length?m.concat(h.call(arguments)):arguments)}}var c=0;function u(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function f(i,a,h){var m,y,T,O;return O=function(){m=!1,y&&(T.apply(h,y),y=!1)},T=function(){m?y=arguments:(i.apply(h,arguments),setTimeout(O,a),m=!0)},T}function d(i,a,h){var m=a[1],y=a[0],T=m-y;return i===m&&h?i:((i-y)%T+T)%T+y}function p(){return!1}function _(i,a){if(a===!1)return i;var h=Math.pow(10,a===void 0?6:a);return Math.round(i*h)/h}function v(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function M(i){return v(i).split(/\s+/)}function S(i,a){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?o(i.options):{});for(var h in a)i.options[h]=a[h];return i.options}function x(i,a,h){var m=[];for(var y in i)m.push(encodeURIComponent(h?y.toUpperCase():y)+"="+encodeURIComponent(i[y]));return(!a||a.indexOf("?")===-1?"?":"&")+m.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function P(i,a){return i.replace(g,function(h,m){var y=a[m];if(y===void 0)throw new Error("No value provided for variable "+h);return typeof y=="function"&&(y=y(a)),y})}var A=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function C(i,a){for(var h=0;h<i.length;h++)if(i[h]===a)return h;return-1}var D="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function U(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var N=0;function G(i){var a=+new Date,h=Math.max(0,16-(a-N));return N=a+h,window.setTimeout(i,h)}var E=window.requestAnimationFrame||U("RequestAnimationFrame")||G,R=window.cancelAnimationFrame||U("CancelAnimationFrame")||U("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function F(i,a,h){if(h&&E===G)i.call(a);else return E.call(window,l(i,a))}function Z(i){i&&R.call(window,i)}var $={__proto__:null,extend:r,create:o,bind:l,get lastId(){return c},stamp:u,throttle:f,wrapNum:d,falseFn:p,formatNum:_,trim:v,splitWords:M,setOptions:S,getParamString:x,template:P,isArray:A,indexOf:C,emptyImageUrl:D,requestFn:E,cancelFn:R,requestAnimFrame:F,cancelAnimFrame:Z};function rt(){}rt.extend=function(i){var a=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},h=a.__super__=this.prototype,m=o(h);m.constructor=a,a.prototype=m;for(var y in this)Object.prototype.hasOwnProperty.call(this,y)&&y!=="prototype"&&y!=="__super__"&&(a[y]=this[y]);return i.statics&&r(a,i.statics),i.includes&&(ot(i.includes),r.apply(null,[m].concat(i.includes))),r(m,i),delete m.statics,delete m.includes,m.options&&(m.options=h.options?o(h.options):{},r(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){h.callInitHooks&&h.callInitHooks.call(this),this._initHooksCalled=!0;for(var T=0,O=m._initHooks.length;T<O;T++)m._initHooks[T].call(this)}},a},rt.include=function(i){var a=this.prototype.options;return r(this.prototype,i),i.options&&(this.prototype.options=a,this.mergeOptions(i.options)),this},rt.mergeOptions=function(i){return r(this.prototype.options,i),this},rt.addInitHook=function(i){var a=Array.prototype.slice.call(arguments,1),h=typeof i=="function"?i:function(){this[i].apply(this,a)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(h),this};function ot(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=A(i)?i:[i];for(var a=0;a<i.length;a++)i[a]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(i,a,h){if(typeof i=="object")for(var m in i)this._on(m,i[m],a);else{i=M(i);for(var y=0,T=i.length;y<T;y++)this._on(i[y],a,h)}return this},off:function(i,a,h){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],a);else{i=M(i);for(var y=arguments.length===1,T=0,O=i.length;T<O;T++)y?this._off(i[T]):this._off(i[T],a,h)}return this},_on:function(i,a,h,m){if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}if(this._listens(i,a,h)===!1){h===this&&(h=void 0);var y={fn:a,ctx:h};m&&(y.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(y)}},_off:function(i,a,h){var m,y,T;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(y=0,T=m.length;y<T;y++)m[y].fn=p;delete this._events[i];return}if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}var O=this._listens(i,a,h);if(O!==!1){var X=m[O];this._firingCount&&(X.fn=p,this._events[i]=m=m.slice()),m.splice(O,1)}}},fire:function(i,a,h){if(!this.listens(i,h))return this;var m=r({},a,{type:i,target:this,sourceTarget:a&&a.sourceTarget||this});if(this._events){var y=this._events[i];if(y){this._firingCount=this._firingCount+1||1;for(var T=0,O=y.length;T<O;T++){var X=y[T],J=X.fn;X.once&&this.off(i,J,X.ctx),J.call(X.ctx||this,m)}this._firingCount--}}return h&&this._propagateEvent(m),this},listens:function(i,a,h,m){typeof i!="string"&&console.warn('"string" type argument expected');var y=a;typeof a!="function"&&(m=!!a,y=void 0,h=void 0);var T=this._events&&this._events[i];if(T&&T.length&&this._listens(i,y,h)!==!1)return!0;if(m){for(var O in this._eventParents)if(this._eventParents[O].listens(i,a,h,m))return!0}return!1},_listens:function(i,a,h){if(!this._events)return!1;var m=this._events[i]||[];if(!a)return!!m.length;h===this&&(h=void 0);for(var y=0,T=m.length;y<T;y++)if(m[y].fn===a&&m[y].ctx===h)return y;return!1},once:function(i,a,h){if(typeof i=="object")for(var m in i)this._on(m,i[m],a,!0);else{i=M(i);for(var y=0,T=i.length;y<T;y++)this._on(i[y],a,h,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[u(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[u(i)],this},_propagateEvent:function(i){for(var a in this._eventParents)this._eventParents[a].fire(i.type,r({layer:i.target,propagatedFrom:i.target},i),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var q=rt.extend(tt);function j(i,a,h){this.x=h?Math.round(i):i,this.y=h?Math.round(a):a}var gt=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};j.prototype={clone:function(){return new j(this.x,this.y)},add:function(i){return this.clone()._add(it(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(it(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new j(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new j(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=gt(this.x),this.y=gt(this.y),this},distanceTo:function(i){i=it(i);var a=i.x-this.x,h=i.y-this.y;return Math.sqrt(a*a+h*h)},equals:function(i){return i=it(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=it(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function it(i,a,h){return i instanceof j?i:A(i)?new j(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new j(i.x,i.y):new j(i,a,h)}function dt(i,a){if(i)for(var h=a?[i,a]:i,m=0,y=h.length;m<y;m++)this.extend(h[m])}dt.prototype={extend:function(i){var a,h;if(!i)return this;if(i instanceof j||typeof i[0]=="number"||"x"in i)a=h=it(i);else if(i=Wt(i),a=i.min,h=i.max,!a||!h)return this;return!this.min&&!this.max?(this.min=a.clone(),this.max=h.clone()):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(h.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(h.y,this.max.y)),this},getCenter:function(i){return it((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return it(this.min.x,this.max.y)},getTopRight:function(){return it(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var a,h;return typeof i[0]=="number"||i instanceof j?i=it(i):i=Wt(i),i instanceof dt?(a=i.min,h=i.max):a=h=i,a.x>=this.min.x&&h.x<=this.max.x&&a.y>=this.min.y&&h.y<=this.max.y},intersects:function(i){i=Wt(i);var a=this.min,h=this.max,m=i.min,y=i.max,T=y.x>=a.x&&m.x<=h.x,O=y.y>=a.y&&m.y<=h.y;return T&&O},overlaps:function(i){i=Wt(i);var a=this.min,h=this.max,m=i.min,y=i.max,T=y.x>a.x&&m.x<h.x,O=y.y>a.y&&m.y<h.y;return T&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var a=this.min,h=this.max,m=Math.abs(a.x-h.x)*i,y=Math.abs(a.y-h.y)*i;return Wt(it(a.x-m,a.y-y),it(h.x+m,h.y+y))},equals:function(i){return i?(i=Wt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function Wt(i,a){return!i||i instanceof dt?i:new dt(i,a)}function Ht(i,a){if(i)for(var h=a?[i,a]:i,m=0,y=h.length;m<y;m++)this.extend(h[m])}Ht.prototype={extend:function(i){var a=this._southWest,h=this._northEast,m,y;if(i instanceof Gt)m=i,y=i;else if(i instanceof Ht){if(m=i._southWest,y=i._northEast,!m||!y)return this}else return i?this.extend(Y(i)||Qt(i)):this;return!a&&!h?(this._southWest=new Gt(m.lat,m.lng),this._northEast=new Gt(y.lat,y.lng)):(a.lat=Math.min(m.lat,a.lat),a.lng=Math.min(m.lng,a.lng),h.lat=Math.max(y.lat,h.lat),h.lng=Math.max(y.lng,h.lng)),this},pad:function(i){var a=this._southWest,h=this._northEast,m=Math.abs(a.lat-h.lat)*i,y=Math.abs(a.lng-h.lng)*i;return new Ht(new Gt(a.lat-m,a.lng-y),new Gt(h.lat+m,h.lng+y))},getCenter:function(){return new Gt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Gt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Gt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof Gt||"lat"in i?i=Y(i):i=Qt(i);var a=this._southWest,h=this._northEast,m,y;return i instanceof Ht?(m=i.getSouthWest(),y=i.getNorthEast()):m=y=i,m.lat>=a.lat&&y.lat<=h.lat&&m.lng>=a.lng&&y.lng<=h.lng},intersects:function(i){i=Qt(i);var a=this._southWest,h=this._northEast,m=i.getSouthWest(),y=i.getNorthEast(),T=y.lat>=a.lat&&m.lat<=h.lat,O=y.lng>=a.lng&&m.lng<=h.lng;return T&&O},overlaps:function(i){i=Qt(i);var a=this._southWest,h=this._northEast,m=i.getSouthWest(),y=i.getNorthEast(),T=y.lat>a.lat&&m.lat<h.lat,O=y.lng>a.lng&&m.lng<h.lng;return T&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,a){return i?(i=Qt(i),this._southWest.equals(i.getSouthWest(),a)&&this._northEast.equals(i.getNorthEast(),a)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Qt(i,a){return i instanceof Ht?i:new Ht(i,a)}function Gt(i,a,h){if(isNaN(i)||isNaN(a))throw new Error("Invalid LatLng object: ("+i+", "+a+")");this.lat=+i,this.lng=+a,h!==void 0&&(this.alt=+h)}Gt.prototype={equals:function(i,a){if(!i)return!1;i=Y(i);var h=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return h<=(a===void 0?1e-9:a)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return Et.distance(this,Y(i))},wrap:function(){return Et.wrapLatLng(this)},toBounds:function(i){var a=180*i/40075017,h=a/Math.cos(Math.PI/180*this.lat);return Qt([this.lat-a,this.lng-h],[this.lat+a,this.lng+h])},clone:function(){return new Gt(this.lat,this.lng,this.alt)}};function Y(i,a,h){return i instanceof Gt?i:A(i)&&typeof i[0]!="object"?i.length===3?new Gt(i[0],i[1],i[2]):i.length===2?new Gt(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new Gt(i.lat,"lng"in i?i.lng:i.lon,i.alt):a===void 0?null:new Gt(i,a,h)}var lt={latLngToPoint:function(i,a){var h=this.projection.project(i),m=this.scale(a);return this.transformation._transform(h,m)},pointToLatLng:function(i,a){var h=this.scale(a),m=this.transformation.untransform(i,h);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var a=this.projection.bounds,h=this.scale(i),m=this.transformation.transform(a.min,h),y=this.transformation.transform(a.max,h);return new dt(m,y)},infinite:!1,wrapLatLng:function(i){var a=this.wrapLng?d(i.lng,this.wrapLng,!0):i.lng,h=this.wrapLat?d(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new Gt(h,a,m)},wrapLatLngBounds:function(i){var a=i.getCenter(),h=this.wrapLatLng(a),m=a.lat-h.lat,y=a.lng-h.lng;if(m===0&&y===0)return i;var T=i.getSouthWest(),O=i.getNorthEast(),X=new Gt(T.lat-m,T.lng-y),J=new Gt(O.lat-m,O.lng-y);return new Ht(X,J)}},Et=r({},lt,{wrapLng:[-180,180],R:6371e3,distance:function(i,a){var h=Math.PI/180,m=i.lat*h,y=a.lat*h,T=Math.sin((a.lat-i.lat)*h/2),O=Math.sin((a.lng-i.lng)*h/2),X=T*T+Math.cos(m)*Math.cos(y)*O*O,J=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*J}}),te=6378137,It={R:te,MAX_LATITUDE:85.0511287798,project:function(i){var a=Math.PI/180,h=this.MAX_LATITUDE,m=Math.max(Math.min(h,i.lat),-h),y=Math.sin(m*a);return new j(this.R*i.lng*a,this.R*Math.log((1+y)/(1-y))/2)},unproject:function(i){var a=180/Math.PI;return new Gt((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*a,i.x*a/this.R)},bounds:(function(){var i=te*Math.PI;return new dt([-i,-i],[i,i])})()};function pe(i,a,h,m){if(A(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=a,this._c=h,this._d=m}pe.prototype={transform:function(i,a){return this._transform(i.clone(),a)},_transform:function(i,a){return a=a||1,i.x=a*(this._a*i.x+this._b),i.y=a*(this._c*i.y+this._d),i},untransform:function(i,a){return a=a||1,new j((i.x/a-this._b)/this._a,(i.y/a-this._d)/this._c)}};function Ve(i,a,h,m){return new pe(i,a,h,m)}var fe=r({},Et,{code:"EPSG:3857",projection:It,transformation:(function(){var i=.5/(Math.PI*It.R);return Ve(i,.5,-i,.5)})()}),Ee=r({},fe,{code:"EPSG:900913"});function Ae(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ne(i,a){var h="",m,y,T,O,X,J;for(m=0,T=i.length;m<T;m++){for(X=i[m],y=0,O=X.length;y<O;y++)J=X[y],h+=(y?"L":"M")+J.x+" "+J.y;h+=a?Bt.svg?"z":"x":""}return h||"M0 0"}var He=document.documentElement.style,B="ActiveXObject"in window,We=B&&!document.addEventListener,Se="msLaunchUri"in navigator&&!("documentMode"in document),Re=qn("webkit"),Ut=qn("android"),I=qn("android 2")||qn("android 3"),b=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),z=Ut&&qn("Google")&&b<537&&!("AudioNode"in window),st=!!window.opera,ct=!Se&&qn("chrome"),nt=qn("gecko")&&!Re&&!st&&!B,Ft=!ct&&qn("safari"),xt=qn("phantom"),Dt="OTransition"in He,Xt=navigator.platform.indexOf("Win")===0,ut=B&&"transition"in He,yt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!I,Lt="MozPerspective"in He,Ot=!window.L_DISABLE_3D&&(ut||yt||Lt)&&!Dt&&!xt,_t=typeof orientation<"u"||qn("mobile"),re=_t&&Re,k=_t&&yt,bt=!window.PointerEvent&&window.MSPointerEvent,mt=!!(window.PointerEvent||bt),At="ontouchstart"in window||!!window.TouchEvent,ft=!window.L_NO_TOUCH&&(At||mt),at=_t&&st,Mt=_t&&nt,jt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ie=(function(){var i=!1;try{var a=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",p,a),window.removeEventListener("testPassiveEventSupport",p,a)}catch{}return i})(),we=(function(){return!!document.createElement("canvas").getContext})(),Cn=!!(document.createElementNS&&Ae("svg").createSVGRect),li=!!Cn&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),bc=!Cn&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var a=i.firstChild;return a.style.behavior="url(#default#VML)",a&&typeof a.adj=="object"}catch{return!1}})(),ja=navigator.platform.indexOf("Mac")===0,Zo=navigator.platform.indexOf("Linux")===0;function qn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Bt={ie:B,ielt9:We,edge:Se,webkit:Re,android:Ut,android23:I,androidStock:z,opera:st,chrome:ct,gecko:nt,safari:Ft,phantom:xt,opera12:Dt,win:Xt,ie3d:ut,webkit3d:yt,gecko3d:Lt,any3d:Ot,mobile:_t,mobileWebkit:re,mobileWebkit3d:k,msPointer:bt,pointer:mt,touch:ft,touchNative:At,mobileOpera:at,mobileGecko:Mt,retina:jt,passiveEvents:Ie,canvas:we,svg:Cn,vml:bc,inlineSvg:li,mac:ja,linux:Zo},qo=Bt.msPointer?"MSPointerDown":"pointerdown",Ri=Bt.msPointer?"MSPointerMove":"pointermove",Dr=Bt.msPointer?"MSPointerUp":"pointerup",Yo=Bt.msPointer?"MSPointerCancel":"pointercancel",Nr={touchstart:qo,touchmove:Ri,touchend:Dr,touchcancel:Yo},Qs={touchstart:Ac,touchmove:Ur,touchend:Ur,touchcancel:Ur},is={},tr=!1;function Ka(i,a,h){return a==="touchstart"&&wc(),Qs[a]?(h=Qs[a].bind(this,h),i.addEventListener(Nr[a],h,!1),h):(console.warn("wrong event specified:",a),p)}function Ja(i,a,h){if(!Nr[a]){console.warn("wrong event specified:",a);return}i.removeEventListener(Nr[a],h,!1)}function Tc(i){is[i.pointerId]=i}function Ec(i){is[i.pointerId]&&(is[i.pointerId]=i)}function $a(i){delete is[i.pointerId]}function wc(){tr||(document.addEventListener(qo,Tc,!0),document.addEventListener(Ri,Ec,!0),document.addEventListener(Dr,$a,!0),document.addEventListener(Yo,$a,!0),tr=!0)}function Ur(i,a){if(a.pointerType!==(a.MSPOINTER_TYPE_MOUSE||"mouse")){a.touches=[];for(var h in is)a.touches.push(is[h]);a.changedTouches=[a],i(a)}}function Ac(i,a){a.MSPOINTER_TYPE_TOUCH&&a.pointerType===a.MSPOINTER_TYPE_TOUCH&&dn(a),Ur(i,a)}function w(i){var a={},h,m;for(m in i)h=i[m],a[m]=h&&h.bind?h.bind(i):h;return i=a,a.type="dblclick",a.detail=2,a.isTrusted=!1,a._simulated=!0,a}var V=200;function Q(i,a){i.addEventListener("dblclick",a);var h=0,m;function y(T){if(T.detail!==1){m=T.detail;return}if(!(T.pointerType==="mouse"||T.sourceCapabilities&&!T.sourceCapabilities.firesTouchEvents)){var O=If(T);if(!(O.some(function(J){return J instanceof HTMLLabelElement&&J.attributes.for})&&!O.some(function(J){return J instanceof HTMLInputElement||J instanceof HTMLSelectElement}))){var X=Date.now();X-h<=V?(m++,m===2&&a(w(T))):m=1,h=X}}}return i.addEventListener("click",y),{dblclick:a,simDblclick:y}}function K(i,a){i.removeEventListener("dblclick",a.dblclick),i.removeEventListener("click",a.simDblclick)}var W=ci(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),vt=ci(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Pt=vt==="webkitTransition"||vt==="OTransition"?vt+"End":"transitionend";function St(i){return typeof i=="string"?document.getElementById(i):i}function Ct(i,a){var h=i.style[a]||i.currentStyle&&i.currentStyle[a];if((!h||h==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);h=m?m[a]:null}return h==="auto"?null:h}function pt(i,a,h){var m=document.createElement(i);return m.className=a||"",h&&h.appendChild(m),m}function wt(i){var a=i.parentNode;a&&a.removeChild(i)}function kt(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Kt(i){var a=i.parentNode;a&&a.lastChild!==i&&a.appendChild(i)}function _e(i){var a=i.parentNode;a&&a.firstChild!==i&&a.insertBefore(i,a.firstChild)}function Ue(i,a){if(i.classList!==void 0)return i.classList.contains(a);var h=ve(i);return h.length>0&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(h)}function Nt(i,a){if(i.classList!==void 0)for(var h=M(a),m=0,y=h.length;m<y;m++)i.classList.add(h[m]);else if(!Ue(i,a)){var T=ve(i);Vt(i,(T?T+" ":"")+a)}}function Zt(i,a){i.classList!==void 0?i.classList.remove(a):Vt(i,v((" "+ve(i)+" ").replace(" "+a+" "," ")))}function Vt(i,a){i.className.baseVal===void 0?i.className=a:i.className.baseVal=a}function ve(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function Jt(i,a){"opacity"in i.style?i.style.opacity=a:"filter"in i.style&&Sn(i,a)}function Sn(i,a){var h=!1,m="DXImageTransform.Microsoft.Alpha";try{h=i.filters.item(m)}catch{if(a===1)return}a=Math.round(a*100),h?(h.Enabled=a!==100,h.Opacity=a):i.style.filter+=" progid:"+m+"(opacity="+a+")"}function ci(i){for(var a=document.documentElement.style,h=0;h<i.length;h++)if(i[h]in a)return i[h];return!1}function Ze(i,a,h){var m=a||new j(0,0);i.style[W]=(Bt.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(h?" scale("+h+")":"")}function Oe(i,a){i._leaflet_pos=a,Bt.any3d?Ze(i,a):(i.style.left=a.x+"px",i.style.top=a.y+"px")}function xe(i){return i._leaflet_pos||new j(0,0)}var qe,on,$e;if("onselectstart"in document)qe=function(){ie(window,"selectstart",dn)},on=function(){Fe(window,"selectstart",dn)};else{var Ye=ci(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);qe=function(){if(Ye){var i=document.documentElement.style;$e=i[Ye],i[Ye]="none"}},on=function(){Ye&&(document.documentElement.style[Ye]=$e,$e=void 0)}}function er(){ie(window,"dragstart",dn)}function hi(){Fe(window,"dragstart",dn)}var Qa,Rc;function Pc(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(tl(),Qa=i,Rc=i.style.outlineStyle,i.style.outlineStyle="none",ie(window,"keydown",tl))}function tl(){Qa&&(Qa.style.outlineStyle=Rc,Qa=void 0,Rc=void 0,Fe(window,"keydown",tl))}function Cf(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Cc(i){var a=i.getBoundingClientRect();return{x:a.width/i.offsetWidth||1,y:a.height/i.offsetHeight||1,boundingClientRect:a}}var tg={__proto__:null,TRANSFORM:W,TRANSITION:vt,TRANSITION_END:Pt,get:St,getStyle:Ct,create:pt,remove:wt,empty:kt,toFront:Kt,toBack:_e,hasClass:Ue,addClass:Nt,removeClass:Zt,setClass:Vt,getClass:ve,setOpacity:Jt,testProp:ci,setTransform:Ze,setPosition:Oe,getPosition:xe,get disableTextSelection(){return qe},get enableTextSelection(){return on},disableImageDrag:er,enableImageDrag:hi,preventOutline:Pc,restoreOutline:tl,getSizedParentNode:Cf,getScale:Cc};function ie(i,a,h,m){if(a&&typeof a=="object")for(var y in a)Ic(i,y,a[y],h);else{a=M(a);for(var T=0,O=a.length;T<O;T++)Ic(i,a[T],h,m)}return this}var Pi="_leaflet_events";function Fe(i,a,h,m){if(arguments.length===1)Lf(i),delete i[Pi];else if(a&&typeof a=="object")for(var y in a)Dc(i,y,a[y],h);else if(a=M(a),arguments.length===2)Lf(i,function(X){return C(a,X)!==-1});else for(var T=0,O=a.length;T<O;T++)Dc(i,a[T],h,m);return this}function Lf(i,a){for(var h in i[Pi]){var m=h.split(/\d/)[0];(!a||a(m))&&Dc(i,m,null,null,h)}}var Lc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ic(i,a,h,m){var y=a+u(h)+(m?"_"+u(m):"");if(i[Pi]&&i[Pi][y])return this;var T=function(X){return h.call(m||i,X||window.event)},O=T;!Bt.touchNative&&Bt.pointer&&a.indexOf("touch")===0?T=Ka(i,a,T):Bt.touch&&a==="dblclick"?T=Q(i,T):"addEventListener"in i?a==="touchstart"||a==="touchmove"||a==="wheel"||a==="mousewheel"?i.addEventListener(Lc[a]||a,T,Bt.passiveEvents?{passive:!1}:!1):a==="mouseenter"||a==="mouseleave"?(T=function(X){X=X||window.event,Uc(i,X)&&O(X)},i.addEventListener(Lc[a],T,!1)):i.addEventListener(a,O,!1):i.attachEvent("on"+a,T),i[Pi]=i[Pi]||{},i[Pi][y]=T}function Dc(i,a,h,m,y){y=y||a+u(h)+(m?"_"+u(m):"");var T=i[Pi]&&i[Pi][y];if(!T)return this;!Bt.touchNative&&Bt.pointer&&a.indexOf("touch")===0?Ja(i,a,T):Bt.touch&&a==="dblclick"?K(i,T):"removeEventListener"in i?i.removeEventListener(Lc[a]||a,T,!1):i.detachEvent("on"+a,T),i[Pi][y]=null}function nr(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Nc(i){return Ic(i,"wheel",nr),this}function jo(i){return ie(i,"mousedown touchstart dblclick contextmenu",nr),i._leaflet_disable_click=!0,this}function dn(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function ir(i){return dn(i),nr(i),this}function If(i){if(i.composedPath)return i.composedPath();for(var a=[],h=i.target;h;)a.push(h),h=h.parentNode;return a}function Df(i,a){if(!a)return new j(i.clientX,i.clientY);var h=Cc(a),m=h.boundingClientRect;return new j((i.clientX-m.left)/h.x-a.clientLeft,(i.clientY-m.top)/h.y-a.clientTop)}var eg=Bt.linux&&Bt.chrome?window.devicePixelRatio:Bt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Nf(i){return Bt.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/eg:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Uc(i,a){var h=a.relatedTarget;if(!h)return!0;try{for(;h&&h!==i;)h=h.parentNode}catch{return!1}return h!==i}var ng={__proto__:null,on:ie,off:Fe,stopPropagation:nr,disableScrollPropagation:Nc,disableClickPropagation:jo,preventDefault:dn,stop:ir,getPropagationPath:If,getMousePosition:Df,getWheelDelta:Nf,isExternalTarget:Uc,addListener:ie,removeListener:Fe},Uf=q.extend({run:function(i,a,h,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=h||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=xe(i),this._offset=a.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=F(this._animate,this),this._step()},_step:function(i){var a=+new Date-this._startTime,h=this._duration*1e3;a<h?this._runFrame(this._easeOut(a/h),i):(this._runFrame(1),this._complete())},_runFrame:function(i,a){var h=this._startPos.add(this._offset.multiplyBy(i));a&&h._round(),Oe(this._el,h),this.fire("step")},_complete:function(){Z(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ye=q.extend({options:{crs:fe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,a){a=S(this,a),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.zoom!==void 0&&(this._zoom=this._limitZoom(a.zoom)),a.center&&a.zoom!==void 0&&this.setView(Y(a.center),a.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=vt&&Bt.any3d&&!Bt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ie(this._proxy,Pt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,a,h){if(a=a===void 0?this._zoom:this._limitZoom(a),i=this._limitCenter(Y(i),a,this.options.maxBounds),h=h||{},this._stop(),this._loaded&&!h.reset&&h!==!0){h.animate!==void 0&&(h.zoom=r({animate:h.animate},h.zoom),h.pan=r({animate:h.animate,duration:h.duration},h.pan));var m=this._zoom!==a?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,a,h.zoom):this._tryAnimatedPan(i,h.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,a,h.pan&&h.pan.noMoveStart),this},setZoom:function(i,a){return this._loaded?this.setView(this.getCenter(),i,{zoom:a}):(this._zoom=i,this)},zoomIn:function(i,a){return i=i||(Bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,a)},zoomOut:function(i,a){return i=i||(Bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,a)},setZoomAround:function(i,a,h){var m=this.getZoomScale(a),y=this.getSize().divideBy(2),T=i instanceof j?i:this.latLngToContainerPoint(i),O=T.subtract(y).multiplyBy(1-1/m),X=this.containerPointToLatLng(y.add(O));return this.setView(X,a,{zoom:h})},_getBoundsCenterZoom:function(i,a){a=a||{},i=i.getBounds?i.getBounds():Qt(i);var h=it(a.paddingTopLeft||a.padding||[0,0]),m=it(a.paddingBottomRight||a.padding||[0,0]),y=this.getBoundsZoom(i,!1,h.add(m));if(y=typeof a.maxZoom=="number"?Math.min(a.maxZoom,y):y,y===1/0)return{center:i.getCenter(),zoom:y};var T=m.subtract(h).divideBy(2),O=this.project(i.getSouthWest(),y),X=this.project(i.getNorthEast(),y),J=this.unproject(O.add(X).divideBy(2).add(T),y);return{center:J,zoom:y}},fitBounds:function(i,a){if(i=Qt(i),!i.isValid())throw new Error("Bounds are not valid.");var h=this._getBoundsCenterZoom(i,a);return this.setView(h.center,h.zoom,a)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,a){return this.setView(i,this._zoom,{pan:a})},panBy:function(i,a){if(i=it(i).round(),a=a||{},!i.x&&!i.y)return this.fire("moveend");if(a.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Uf,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),a.noMoveStart||this.fire("movestart"),a.animate!==!1){Nt(this._mapPane,"leaflet-pan-anim");var h=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,h,a.duration||.25,a.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,a,h){if(h=h||{},h.animate===!1||!Bt.any3d)return this.setView(i,a,h);this._stop();var m=this.project(this.getCenter()),y=this.project(i),T=this.getSize(),O=this._zoom;i=Y(i),a=a===void 0?O:a;var X=Math.max(T.x,T.y),J=X*this.getZoomScale(O,a),ht=y.distanceTo(m)||1,Rt=1.42,qt=Rt*Rt;function he(je){var fl=je?-1:1,Wg=je?J:X,Xg=J*J-X*X+fl*qt*qt*ht*ht,Zg=2*Wg*qt*ht,Zc=Xg/Zg,md=Math.sqrt(Zc*Zc+1)-Zc,qg=md<1e-9?-18:Math.log(md);return qg}function bn(je){return(Math.exp(je)-Math.exp(-je))/2}function an(je){return(Math.exp(je)+Math.exp(-je))/2}function jn(je){return bn(je)/an(je)}var Ln=he(0);function Vr(je){return X*(an(Ln)/an(Ln+Rt*je))}function zg(je){return X*(an(Ln)*jn(Ln+Rt*je)-bn(Ln))/qt}function Vg(je){return 1-Math.pow(1-je,1.5)}var Hg=Date.now(),dd=(he(1)-Ln)/Rt,Gg=h.duration?1e3*h.duration:1e3*dd*.8;function pd(){var je=(Date.now()-Hg)/Gg,fl=Vg(je)*dd;je<=1?(this._flyToFrame=F(pd,this),this._move(this.unproject(m.add(y.subtract(m).multiplyBy(zg(fl)/ht)),O),this.getScaleZoom(X/Vr(fl),O),{flyTo:!0})):this._move(i,a)._moveEnd(!0)}return this._moveStart(!0,h.noMoveStart),pd.call(this),this},flyToBounds:function(i,a){var h=this._getBoundsCenterZoom(i,a);return this.flyTo(h.center,h.zoom,a)},setMaxBounds:function(i){return i=Qt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var a=this.options.minZoom;return this.options.minZoom=i,this._loaded&&a!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var a=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&a!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,a){this._enforcingBounds=!0;var h=this.getCenter(),m=this._limitCenter(h,this._zoom,Qt(i));return h.equals(m)||this.panTo(m,a),this._enforcingBounds=!1,this},panInside:function(i,a){a=a||{};var h=it(a.paddingTopLeft||a.padding||[0,0]),m=it(a.paddingBottomRight||a.padding||[0,0]),y=this.project(this.getCenter()),T=this.project(i),O=this.getPixelBounds(),X=Wt([O.min.add(h),O.max.subtract(m)]),J=X.getSize();if(!X.contains(T)){this._enforcingBounds=!0;var ht=T.subtract(X.getCenter()),Rt=X.extend(T).getSize().subtract(J);y.x+=ht.x<0?-Rt.x:Rt.x,y.y+=ht.y<0?-Rt.y:Rt.y,this.panTo(this.unproject(y),a),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=r({animate:!1,pan:!0},i===!0?{animate:!0}:i);var a=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var h=this.getSize(),m=a.divideBy(2).round(),y=h.divideBy(2).round(),T=m.subtract(y);return!T.x&&!T.y?this:(i.animate&&i.pan?this.panBy(T):(i.pan&&this._rawPanBy(T),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:a,newSize:h}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=r({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var a=l(this._handleGeolocationResponse,this),h=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(a,h,i):navigator.geolocation.getCurrentPosition(a,h,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var a=i.code,h=i.message||(a===1?"permission denied":a===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:a,message:"Geolocation error: "+h+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var a=i.coords.latitude,h=i.coords.longitude,m=new Gt(a,h),y=m.toBounds(i.coords.accuracy*2),T=this._locateOptions;if(T.setView){var O=this.getBoundsZoom(y);this.setView(m,T.maxZoom?Math.min(O,T.maxZoom):O)}var X={latlng:m,bounds:y,timestamp:i.timestamp};for(var J in i.coords)typeof i.coords[J]=="number"&&(X[J]=i.coords[J]);this.fire("locationfound",X)}},addHandler:function(i,a){if(!a)return this;var h=this[i]=new a(this);return this._handlers.push(h),this.options[i]&&h.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),wt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)wt(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,a){var h="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=pt("div",h,a||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),a=this.unproject(i.getBottomLeft()),h=this.unproject(i.getTopRight());return new Ht(a,h)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,a,h){i=Qt(i),h=it(h||[0,0]);var m=this.getZoom()||0,y=this.getMinZoom(),T=this.getMaxZoom(),O=i.getNorthWest(),X=i.getSouthEast(),J=this.getSize().subtract(h),ht=Wt(this.project(X,m),this.project(O,m)).getSize(),Rt=Bt.any3d?this.options.zoomSnap:1,qt=J.x/ht.x,he=J.y/ht.y,bn=a?Math.max(qt,he):Math.min(qt,he);return m=this.getScaleZoom(bn,m),Rt&&(m=Math.round(m/(Rt/100))*(Rt/100),m=a?Math.ceil(m/Rt)*Rt:Math.floor(m/Rt)*Rt),Math.max(y,Math.min(T,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new j(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,a){var h=this._getTopLeftPoint(i,a);return new dt(h,h.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,a){var h=this.options.crs;return a=a===void 0?this._zoom:a,h.scale(i)/h.scale(a)},getScaleZoom:function(i,a){var h=this.options.crs;a=a===void 0?this._zoom:a;var m=h.zoom(i*h.scale(a));return isNaN(m)?1/0:m},project:function(i,a){return a=a===void 0?this._zoom:a,this.options.crs.latLngToPoint(Y(i),a)},unproject:function(i,a){return a=a===void 0?this._zoom:a,this.options.crs.pointToLatLng(it(i),a)},layerPointToLatLng:function(i){var a=it(i).add(this.getPixelOrigin());return this.unproject(a)},latLngToLayerPoint:function(i){var a=this.project(Y(i))._round();return a._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(Y(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Qt(i))},distance:function(i,a){return this.options.crs.distance(Y(i),Y(a))},containerPointToLayerPoint:function(i){return it(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return it(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var a=this.containerPointToLayerPoint(it(i));return this.layerPointToLatLng(a)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(i)))},mouseEventToContainerPoint:function(i){return Df(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var a=this._container=St(i);if(a){if(a._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ie(a,"scroll",this._onScroll,this),this._containerId=u(a)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Bt.any3d,Nt(i,"leaflet-container"+(Bt.touch?" leaflet-touch":"")+(Bt.retina?" leaflet-retina":"")+(Bt.ielt9?" leaflet-oldie":"")+(Bt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var a=Ct(i,"position");a!=="absolute"&&a!=="relative"&&a!=="fixed"&&a!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Oe(this._mapPane,new j(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Nt(i.markerPane,"leaflet-zoom-hide"),Nt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,a,h){Oe(this._mapPane,new j(0,0));var m=!this._loaded;this._loaded=!0,a=this._limitZoom(a),this.fire("viewprereset");var y=this._zoom!==a;this._moveStart(y,h)._move(i,a)._moveEnd(y),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,a){return i&&this.fire("zoomstart"),a||this.fire("movestart"),this},_move:function(i,a,h,m){a===void 0&&(a=this._zoom);var y=this._zoom!==a;return this._zoom=a,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?h&&h.pinch&&this.fire("zoom",h):((y||h&&h.pinch)&&this.fire("zoom",h),this.fire("move",h)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Oe(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[u(this._container)]=this;var a=i?Fe:ie;a(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&a(window,"resize",this._onResize,this),Bt.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Z(this._resizeRequest),this._resizeRequest=F(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,a){for(var h=[],m,y=a==="mouseout"||a==="mouseover",T=i.target||i.srcElement,O=!1;T;){if(m=this._targets[u(T)],m&&(a==="click"||a==="preclick")&&this._draggableMoved(m)){O=!0;break}if(m&&m.listens(a,!0)&&(y&&!Uc(T,i)||(h.push(m),y))||T===this._container)break;T=T.parentNode}return!h.length&&!O&&!y&&this.listens(a,!0)&&(h=[this]),h},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var a=i.target||i.srcElement;if(!(!this._loaded||a._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(a))){var h=i.type;h==="mousedown"&&Pc(a),this._fireDOMEvent(i,h)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,a,h){if(i.type==="click"){var m=r({},i);m.type="preclick",this._fireDOMEvent(m,m.type,h)}var y=this._findEventTargets(i,a);if(h){for(var T=[],O=0;O<h.length;O++)h[O].listens(a,!0)&&T.push(h[O]);y=T.concat(y)}if(y.length){a==="contextmenu"&&dn(i);var X=y[0],J={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var ht=X.getLatLng&&(!X._radius||X._radius<=10);J.containerPoint=ht?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(i),J.layerPoint=this.containerPointToLayerPoint(J.containerPoint),J.latlng=ht?X.getLatLng():this.layerPointToLatLng(J.layerPoint)}for(O=0;O<y.length;O++)if(y[O].fire(a,J,!0),J.originalEvent._stopped||y[O].options.bubblingMouseEvents===!1&&C(this._mouseEvents,a)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,a=this._handlers.length;i<a;i++)this._handlers[i].disable()},whenReady:function(i,a){return this._loaded?i.call(a||this,{target:this}):this.on("load",i,a),this},_getMapPanePos:function(){return xe(this._mapPane)||new j(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,a){var h=i&&a!==void 0?this._getNewPixelOrigin(i,a):this.getPixelOrigin();return h.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,a){var h=this.getSize()._divideBy(2);return this.project(i,a)._subtract(h)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,a,h){var m=this._getNewPixelOrigin(h,a);return this.project(i,a)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,a,h){var m=this._getNewPixelOrigin(h,a);return Wt([this.project(i.getSouthWest(),a)._subtract(m),this.project(i.getNorthWest(),a)._subtract(m),this.project(i.getSouthEast(),a)._subtract(m),this.project(i.getNorthEast(),a)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,a,h){if(!h)return i;var m=this.project(i,a),y=this.getSize().divideBy(2),T=new dt(m.subtract(y),m.add(y)),O=this._getBoundsOffset(T,h,a);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?i:this.unproject(m.add(O),a)},_limitOffset:function(i,a){if(!a)return i;var h=this.getPixelBounds(),m=new dt(h.min.add(i),h.max.add(i));return i.add(this._getBoundsOffset(m,a))},_getBoundsOffset:function(i,a,h){var m=Wt(this.project(a.getNorthEast(),h),this.project(a.getSouthWest(),h)),y=m.min.subtract(i.min),T=m.max.subtract(i.max),O=this._rebound(y.x,-T.x),X=this._rebound(y.y,-T.y);return new j(O,X)},_rebound:function(i,a){return i+a>0?Math.round(i-a)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(a))},_limitZoom:function(i){var a=this.getMinZoom(),h=this.getMaxZoom(),m=Bt.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(a,Math.min(h,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Zt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,a){var h=this._getCenterOffset(i)._trunc();return(a&&a.animate)!==!0&&!this.getSize().contains(h)?!1:(this.panBy(h,a),!0)},_createAnimProxy:function(){var i=this._proxy=pt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(a){var h=W,m=this._proxy.style[h];Ze(this._proxy,this.project(a.center,a.zoom),this.getZoomScale(a.zoom,1)),m===this._proxy.style[h]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){wt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),a=this.getZoom();Ze(this._proxy,this.project(i,a),this.getZoomScale(a,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,a,h){if(this._animatingZoom)return!0;if(h=h||{},!this._zoomAnimated||h.animate===!1||this._nothingToAnimate()||Math.abs(a-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(a),y=this._getCenterOffset(i)._divideBy(1-1/m);return h.animate!==!0&&!this.getSize().contains(y)?!1:(F(function(){this._moveStart(!0,h.noMoveStart||!1)._animateZoom(i,a,!0)},this),!0)},_animateZoom:function(i,a,h,m){this._mapPane&&(h&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=a,Nt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:a,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Zt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function ig(i,a){return new ye(i,a)}var ui=rt.extend({options:{position:"topright"},initialize:function(i){S(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var a=this._map;return a&&a.removeControl(this),this.options.position=i,a&&a.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var a=this._container=this.onAdd(i),h=this.getPosition(),m=i._controlCorners[h];return Nt(a,"leaflet-control"),h.indexOf("bottom")!==-1?m.insertBefore(a,m.firstChild):m.appendChild(a),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(wt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Ko=function(i){return new ui(i)};ye.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},a="leaflet-",h=this._controlContainer=pt("div",a+"control-container",this._container);function m(y,T){var O=a+y+" "+a+T;i[y+T]=pt("div",O,h)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)wt(this._controlCorners[i]);wt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Of=ui.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,a,h,m){return h<m?-1:m<h?1:0}},initialize:function(i,a,h){S(this,h),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in a)this._addLayer(a[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return ui.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,a){return this._addLayer(i,a),this._map?this._update():this},addOverlay:function(i,a){return this._addLayer(i,a,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var a=this._getLayer(u(i));return a&&this._layers.splice(this._layers.indexOf(a),1),this._map?this._update():this},expand:function(){Nt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Nt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Zt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Zt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",a=this._container=pt("div",i),h=this.options.collapsed;a.setAttribute("aria-haspopup",!0),jo(a),Nc(a);var m=this._section=pt("section",i+"-list");h&&(this._map.on("click",this.collapse,this),ie(a,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var y=this._layersLink=pt("a",i+"-toggle",a);y.href="#",y.title="Layers",y.setAttribute("role","button"),ie(y,{keydown:function(T){T.keyCode===13&&this._expandSafely()},click:function(T){dn(T),this._expandSafely()}},this),h||this.expand(),this._baseLayersList=pt("div",i+"-base",m),this._separator=pt("div",i+"-separator",m),this._overlaysList=pt("div",i+"-overlays",m),a.appendChild(m)},_getLayer:function(i){for(var a=0;a<this._layers.length;a++)if(this._layers[a]&&u(this._layers[a].layer)===i)return this._layers[a]},_addLayer:function(i,a,h){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:a,overlay:h}),this.options.sortLayers&&this._layers.sort(l(function(m,y){return this.options.sortFunction(m.layer,y.layer,m.name,y.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;kt(this._baseLayersList),kt(this._overlaysList),this._layerControlInputs=[];var i,a,h,m,y=0;for(h=0;h<this._layers.length;h++)m=this._layers[h],this._addItem(m),a=a||m.overlay,i=i||!m.overlay,y+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&y>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=a&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var a=this._getLayer(u(i.target)),h=a.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;h&&this._map.fire(h,a)},_createRadioElement:function(i,a){var h='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(a?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=h,m.firstChild},_addItem:function(i){var a=document.createElement("label"),h=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=h):m=this._createRadioElement("leaflet-base-layers_"+u(this),h),this._layerControlInputs.push(m),m.layerId=u(i.layer),ie(m,"click",this._onInputClick,this);var y=document.createElement("span");y.innerHTML=" "+i.name;var T=document.createElement("span");a.appendChild(T),T.appendChild(m),T.appendChild(y);var O=i.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(a),this._checkDisabledLayers(),a},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,a,h,m=[],y=[];this._handlingClick=!0;for(var T=i.length-1;T>=0;T--)a=i[T],h=this._getLayer(a.layerId).layer,a.checked?m.push(h):a.checked||y.push(h);for(T=0;T<y.length;T++)this._map.hasLayer(y[T])&&this._map.removeLayer(y[T]);for(T=0;T<m.length;T++)this._map.hasLayer(m[T])||this._map.addLayer(m[T]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,a,h,m=this._map.getZoom(),y=i.length-1;y>=0;y--)a=i[y],h=this._getLayer(a.layerId).layer,a.disabled=h.options.minZoom!==void 0&&m<h.options.minZoom||h.options.maxZoom!==void 0&&m>h.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,ie(i,"click",dn),this.expand();var a=this;setTimeout(function(){Fe(i,"click",dn),a._preventClick=!1})}}),sg=function(i,a,h){return new Of(i,a,h)},Oc=ui.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var a="leaflet-control-zoom",h=pt("div",a+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,a+"-in",h,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,a+"-out",h,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),h},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,a,h,m,y){var T=pt("a",h,m);return T.innerHTML=i,T.href="#",T.title=a,T.setAttribute("role","button"),T.setAttribute("aria-label",a),jo(T),ie(T,"click",ir),ie(T,"click",y,this),ie(T,"click",this._refocusOnMap,this),T},_updateDisabled:function(){var i=this._map,a="leaflet-disabled";Zt(this._zoomInButton,a),Zt(this._zoomOutButton,a),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Nt(this._zoomOutButton,a),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Nt(this._zoomInButton,a),this._zoomInButton.setAttribute("aria-disabled","true"))}});ye.mergeOptions({zoomControl:!0}),ye.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Oc,this.addControl(this.zoomControl))});var rg=function(i){return new Oc(i)},Ff=ui.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var a="leaflet-control-scale",h=pt("div",a),m=this.options;return this._addScales(m,a+"-line",h),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),h},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,a,h){i.metric&&(this._mScale=pt("div",a,h)),i.imperial&&(this._iScale=pt("div",a,h))},_update:function(){var i=this._map,a=i.getSize().y/2,h=i.distance(i.containerPointToLatLng([0,a]),i.containerPointToLatLng([this.options.maxWidth,a]));this._updateScales(h)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var a=this._getRoundNum(i),h=a<1e3?a+" m":a/1e3+" km";this._updateScale(this._mScale,h,a/i)},_updateImperial:function(i){var a=i*3.2808399,h,m,y;a>5280?(h=a/5280,m=this._getRoundNum(h),this._updateScale(this._iScale,m+" mi",m/h)):(y=this._getRoundNum(a),this._updateScale(this._iScale,y+" ft",y/a))},_updateScale:function(i,a,h){i.style.width=Math.round(this.options.maxWidth*h)+"px",i.innerHTML=a},_getRoundNum:function(i){var a=Math.pow(10,(Math.floor(i)+"").length-1),h=i/a;return h=h>=10?10:h>=5?5:h>=3?3:h>=2?2:1,a*h}}),og=function(i){return new Ff(i)},ag='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Fc=ui.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Bt.inlineSvg?ag+" ":"")+"Leaflet</a>"},initialize:function(i){S(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=pt("div","leaflet-control-attribution"),jo(this._container);for(var a in i._layers)i._layers[a].getAttribution&&this.addAttribution(i._layers[a].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var a in this._attributions)this._attributions[a]&&i.push(a);var h=[];this.options.prefix&&h.push(this.options.prefix),i.length&&h.push(i.join(", ")),this._container.innerHTML=h.join(' <span aria-hidden="true">|</span> ')}}});ye.mergeOptions({attributionControl:!0}),ye.addInitHook(function(){this.options.attributionControl&&new Fc().addTo(this)});var lg=function(i){return new Fc(i)};ui.Layers=Of,ui.Zoom=Oc,ui.Scale=Ff,ui.Attribution=Fc,Ko.layers=sg,Ko.zoom=rg,Ko.scale=og,Ko.attribution=lg;var Ci=rt.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ci.addTo=function(i,a){return i.addHandler(a,this),this};var cg={Events:tt},Bf=Bt.touch?"touchstart mousedown":"mousedown",Ns=q.extend({options:{clickTolerance:3},initialize:function(i,a,h,m){S(this,m),this._element=i,this._dragStartTarget=a||i,this._preventOutline=h},enable:function(){this._enabled||(ie(this._dragStartTarget,Bf,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ns._dragging===this&&this.finishDrag(!0),Fe(this._dragStartTarget,Bf,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Ue(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Ns._dragging===this&&this.finishDrag();return}if(!(Ns._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Ns._dragging=this,this._preventOutline&&Pc(this._element),er(),qe(),!this._moving)){this.fire("down");var a=i.touches?i.touches[0]:i,h=Cf(this._element);this._startPoint=new j(a.clientX,a.clientY),this._startPos=xe(this._element),this._parentScale=Cc(h);var m=i.type==="mousedown";ie(document,m?"mousemove":"touchmove",this._onMove,this),ie(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var a=i.touches&&i.touches.length===1?i.touches[0]:i,h=new j(a.clientX,a.clientY)._subtract(this._startPoint);!h.x&&!h.y||Math.abs(h.x)+Math.abs(h.y)<this.options.clickTolerance||(h.x/=this._parentScale.x,h.y/=this._parentScale.y,dn(i),this._moved||(this.fire("dragstart"),this._moved=!0,Nt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Nt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(h),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Oe(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Zt(document.body,"leaflet-dragging"),this._lastTarget&&(Zt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Fe(document,"mousemove touchmove",this._onMove,this),Fe(document,"mouseup touchend touchcancel",this._onUp,this),hi(),on();var a=this._moved&&this._moving;this._moving=!1,Ns._dragging=!1,a&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function kf(i,a,h){var m,y=[1,4,2,8],T,O,X,J,ht,Rt,qt,he;for(T=0,Rt=i.length;T<Rt;T++)i[T]._code=sr(i[T],a);for(X=0;X<4;X++){for(qt=y[X],m=[],T=0,Rt=i.length,O=Rt-1;T<Rt;O=T++)J=i[T],ht=i[O],J._code&qt?ht._code&qt||(he=el(ht,J,qt,a,h),he._code=sr(he,a),m.push(he)):(ht._code&qt&&(he=el(ht,J,qt,a,h),he._code=sr(he,a),m.push(he)),m.push(J));i=m}return i}function zf(i,a){var h,m,y,T,O,X,J,ht,Rt;if(!i||i.length===0)throw new Error("latlngs not passed");Yn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var qt=Y([0,0]),he=Qt(i),bn=he.getNorthWest().distanceTo(he.getSouthWest())*he.getNorthEast().distanceTo(he.getNorthWest());bn<1700&&(qt=Bc(i));var an=i.length,jn=[];for(h=0;h<an;h++){var Ln=Y(i[h]);jn.push(a.project(Y([Ln.lat-qt.lat,Ln.lng-qt.lng])))}for(X=J=ht=0,h=0,m=an-1;h<an;m=h++)y=jn[h],T=jn[m],O=y.y*T.x-T.y*y.x,J+=(y.x+T.x)*O,ht+=(y.y+T.y)*O,X+=O*3;X===0?Rt=jn[0]:Rt=[J/X,ht/X];var Vr=a.unproject(it(Rt));return Y([Vr.lat+qt.lat,Vr.lng+qt.lng])}function Bc(i){for(var a=0,h=0,m=0,y=0;y<i.length;y++){var T=Y(i[y]);a+=T.lat,h+=T.lng,m++}return Y([a/m,h/m])}var hg={__proto__:null,clipPolygon:kf,polygonCenter:zf,centroid:Bc};function Vf(i,a){if(!a||!i.length)return i.slice();var h=a*a;return i=dg(i,h),i=fg(i,h),i}function Hf(i,a,h){return Math.sqrt(Jo(i,a,h,!0))}function ug(i,a,h){return Jo(i,a,h)}function fg(i,a){var h=i.length,m=typeof Uint8Array<"u"?Uint8Array:Array,y=new m(h);y[0]=y[h-1]=1,kc(i,y,a,0,h-1);var T,O=[];for(T=0;T<h;T++)y[T]&&O.push(i[T]);return O}function kc(i,a,h,m,y){var T=0,O,X,J;for(X=m+1;X<=y-1;X++)J=Jo(i[X],i[m],i[y],!0),J>T&&(O=X,T=J);T>h&&(a[O]=1,kc(i,a,h,m,O),kc(i,a,h,O,y))}function dg(i,a){for(var h=[i[0]],m=1,y=0,T=i.length;m<T;m++)pg(i[m],i[y])>a&&(h.push(i[m]),y=m);return y<T-1&&h.push(i[T-1]),h}var Gf;function Wf(i,a,h,m,y){var T=m?Gf:sr(i,h),O=sr(a,h),X,J,ht;for(Gf=O;;){if(!(T|O))return[i,a];if(T&O)return!1;X=T||O,J=el(i,a,X,h,y),ht=sr(J,h),X===T?(i=J,T=ht):(a=J,O=ht)}}function el(i,a,h,m,y){var T=a.x-i.x,O=a.y-i.y,X=m.min,J=m.max,ht,Rt;return h&8?(ht=i.x+T*(J.y-i.y)/O,Rt=J.y):h&4?(ht=i.x+T*(X.y-i.y)/O,Rt=X.y):h&2?(ht=J.x,Rt=i.y+O*(J.x-i.x)/T):h&1&&(ht=X.x,Rt=i.y+O*(X.x-i.x)/T),new j(ht,Rt,y)}function sr(i,a){var h=0;return i.x<a.min.x?h|=1:i.x>a.max.x&&(h|=2),i.y<a.min.y?h|=4:i.y>a.max.y&&(h|=8),h}function pg(i,a){var h=a.x-i.x,m=a.y-i.y;return h*h+m*m}function Jo(i,a,h,m){var y=a.x,T=a.y,O=h.x-y,X=h.y-T,J=O*O+X*X,ht;return J>0&&(ht=((i.x-y)*O+(i.y-T)*X)/J,ht>1?(y=h.x,T=h.y):ht>0&&(y+=O*ht,T+=X*ht)),O=i.x-y,X=i.y-T,m?O*O+X*X:new j(y,T)}function Yn(i){return!A(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Xf(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Yn(i)}function Zf(i,a){var h,m,y,T,O,X,J,ht;if(!i||i.length===0)throw new Error("latlngs not passed");Yn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Rt=Y([0,0]),qt=Qt(i),he=qt.getNorthWest().distanceTo(qt.getSouthWest())*qt.getNorthEast().distanceTo(qt.getNorthWest());he<1700&&(Rt=Bc(i));var bn=i.length,an=[];for(h=0;h<bn;h++){var jn=Y(i[h]);an.push(a.project(Y([jn.lat-Rt.lat,jn.lng-Rt.lng])))}for(h=0,m=0;h<bn-1;h++)m+=an[h].distanceTo(an[h+1])/2;if(m===0)ht=an[0];else for(h=0,T=0;h<bn-1;h++)if(O=an[h],X=an[h+1],y=O.distanceTo(X),T+=y,T>m){J=(T-m)/y,ht=[X.x-J*(X.x-O.x),X.y-J*(X.y-O.y)];break}var Ln=a.unproject(it(ht));return Y([Ln.lat+Rt.lat,Ln.lng+Rt.lng])}var mg={__proto__:null,simplify:Vf,pointToSegmentDistance:Hf,closestPointOnSegment:ug,clipSegment:Wf,_getEdgeIntersection:el,_getBitCode:sr,_sqClosestPointOnSegment:Jo,isFlat:Yn,_flat:Xf,polylineCenter:Zf},zc={project:function(i){return new j(i.lng,i.lat)},unproject:function(i){return new Gt(i.y,i.x)},bounds:new dt([-180,-90],[180,90])},Vc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new dt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var a=Math.PI/180,h=this.R,m=i.lat*a,y=this.R_MINOR/h,T=Math.sqrt(1-y*y),O=T*Math.sin(m),X=Math.tan(Math.PI/4-m/2)/Math.pow((1-O)/(1+O),T/2);return m=-h*Math.log(Math.max(X,1e-10)),new j(i.lng*a*h,m)},unproject:function(i){for(var a=180/Math.PI,h=this.R,m=this.R_MINOR/h,y=Math.sqrt(1-m*m),T=Math.exp(-i.y/h),O=Math.PI/2-2*Math.atan(T),X=0,J=.1,ht;X<15&&Math.abs(J)>1e-7;X++)ht=y*Math.sin(O),ht=Math.pow((1-ht)/(1+ht),y/2),J=Math.PI/2-2*Math.atan(T*ht)-O,O+=J;return new Gt(O*a,i.x*a/h)}},_g={__proto__:null,LonLat:zc,Mercator:Vc,SphericalMercator:It},gg=r({},Et,{code:"EPSG:3395",projection:Vc,transformation:(function(){var i=.5/(Math.PI*Vc.R);return Ve(i,.5,-i,.5)})()}),qf=r({},Et,{code:"EPSG:4326",projection:zc,transformation:Ve(1/180,1,-1/180,.5)}),vg=r({},lt,{projection:zc,transformation:Ve(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,a){var h=a.lng-i.lng,m=a.lat-i.lat;return Math.sqrt(h*h+m*m)},infinite:!0});lt.Earth=Et,lt.EPSG3395=gg,lt.EPSG3857=fe,lt.EPSG900913=Ee,lt.EPSG4326=qf,lt.Simple=vg;var fi=q.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[u(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[u(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var a=i.target;if(a.hasLayer(this)){if(this._map=a,this._zoomAnimated=a._zoomAnimated,this.getEvents){var h=this.getEvents();a.on(h,this),this.once("remove",function(){a.off(h,this)},this)}this.onAdd(a),this.fire("add"),a.fire("layeradd",{layer:this})}}});ye.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var a=u(i);return this._layers[a]?this:(this._layers[a]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var a=u(i);return this._layers[a]?(this._loaded&&i.onRemove(this),delete this._layers[a],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return u(i)in this._layers},eachLayer:function(i,a){for(var h in this._layers)i.call(a,this._layers[h]);return this},_addLayers:function(i){i=i?A(i)?i:[i]:[];for(var a=0,h=i.length;a<h;a++)this.addLayer(i[a])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[u(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var a=u(i);this._zoomBoundLayers[a]&&(delete this._zoomBoundLayers[a],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,a=-1/0,h=this._getZoomSpan();for(var m in this._zoomBoundLayers){var y=this._zoomBoundLayers[m].options;i=y.minZoom===void 0?i:Math.min(i,y.minZoom),a=y.maxZoom===void 0?a:Math.max(a,y.maxZoom)}this._layersMaxZoom=a===-1/0?void 0:a,this._layersMinZoom=i===1/0?void 0:i,h!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Or=fi.extend({initialize:function(i,a){S(this,a),this._layers={};var h,m;if(i)for(h=0,m=i.length;h<m;h++)this.addLayer(i[h])},addLayer:function(i){var a=this.getLayerId(i);return this._layers[a]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var a=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[a]&&this._map.removeLayer(this._layers[a]),delete this._layers[a],this},hasLayer:function(i){var a=typeof i=="number"?i:this.getLayerId(i);return a in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var a=Array.prototype.slice.call(arguments,1),h,m;for(h in this._layers)m=this._layers[h],m[i]&&m[i].apply(m,a);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,a){for(var h in this._layers)i.call(a,this._layers[h]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return u(i)}}),xg=function(i,a){return new Or(i,a)},ss=Or.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Or.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Or.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new Ht;for(var a in this._layers){var h=this._layers[a];i.extend(h.getBounds?h.getBounds():h.getLatLng())}return i}}),yg=function(i,a){return new ss(i,a)},Fr=rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){S(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,a){var h=this._getIconUrl(i);if(!h){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(h,a&&a.tagName==="IMG"?a:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,a){var h=this.options,m=h[a+"Size"];typeof m=="number"&&(m=[m,m]);var y=it(m),T=it(a==="shadow"&&h.shadowAnchor||h.iconAnchor||y&&y.divideBy(2,!0));i.className="leaflet-marker-"+a+" "+(h.className||""),T&&(i.style.marginLeft=-T.x+"px",i.style.marginTop=-T.y+"px"),y&&(i.style.width=y.x+"px",i.style.height=y.y+"px")},_createImg:function(i,a){return a=a||document.createElement("img"),a.src=i,a},_getIconUrl:function(i){return Bt.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Mg(i){return new Fr(i)}var $o=Fr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof $o.imagePath!="string"&&($o.imagePath=this._detectIconPath()),(this.options.imagePath||$o.imagePath)+Fr.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var a=function(h,m,y){var T=m.exec(h);return T&&T[y]};return i=a(i,/^url\((['"])?(.+)\1\)$/,2),i&&a(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=pt("div","leaflet-default-icon-path",document.body),a=Ct(i,"background-image")||Ct(i,"backgroundImage");if(document.body.removeChild(i),a=this._stripUrl(a),a)return a;var h=document.querySelector('link[href$="leaflet.css"]');return h?h.href.substring(0,h.href.length-11-1):""}}),Yf=Ci.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Ns(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Nt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Zt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var a=this._marker,h=a._map,m=this._marker.options.autoPanSpeed,y=this._marker.options.autoPanPadding,T=xe(a._icon),O=h.getPixelBounds(),X=h.getPixelOrigin(),J=Wt(O.min._subtract(X).add(y),O.max._subtract(X).subtract(y));if(!J.contains(T)){var ht=it((Math.max(J.max.x,T.x)-J.max.x)/(O.max.x-J.max.x)-(Math.min(J.min.x,T.x)-J.min.x)/(O.min.x-J.min.x),(Math.max(J.max.y,T.y)-J.max.y)/(O.max.y-J.max.y)-(Math.min(J.min.y,T.y)-J.min.y)/(O.min.y-J.min.y)).multiplyBy(m);h.panBy(ht,{animate:!1}),this._draggable._newPos._add(ht),this._draggable._startPos._add(ht),Oe(a._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=F(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(Z(this._panRequest),this._panRequest=F(this._adjustPan.bind(this,i)))},_onDrag:function(i){var a=this._marker,h=a._shadow,m=xe(a._icon),y=a._map.layerPointToLatLng(m);h&&Oe(h,m),a._latlng=y,i.latlng=y,i.oldLatLng=this._oldLatLng,a.fire("move",i).fire("drag",i)},_onDragEnd:function(i){Z(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),nl=fi.extend({options:{icon:new $o,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,a){S(this,a),this._latlng=Y(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var a=this._latlng;return this._latlng=Y(i),this.update(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,a="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),h=i.icon.createIcon(this._icon),m=!1;h!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(h.title=i.title),h.tagName==="IMG"&&(h.alt=i.alt||"")),Nt(h,a),i.keyboard&&(h.tabIndex="0",h.setAttribute("role","button")),this._icon=h,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ie(h,"focus",this._panOnFocus,this);var y=i.icon.createShadow(this._shadow),T=!1;y!==this._shadow&&(this._removeShadow(),T=!0),y&&(Nt(y,a),y.alt=""),this._shadow=y,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),y&&T&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Fe(this._icon,"focus",this._panOnFocus,this),wt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&wt(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Oe(this._icon,i),this._shadow&&Oe(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(a)},_initInteraction:function(){if(this.options.interactive&&(Nt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Yf)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Yf(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&Jt(this._icon,i),this._shadow&&Jt(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var a=this.options.icon.options,h=a.iconSize?it(a.iconSize):it(0,0),m=a.iconAnchor?it(a.iconAnchor):it(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:h.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Sg(i,a){return new nl(i,a)}var Us=fi.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return S(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),il=Us.extend({options:{fill:!0,radius:10},initialize:function(i,a){S(this,a),this._latlng=Y(i),this._radius=this.options.radius},setLatLng:function(i){var a=this._latlng;return this._latlng=Y(i),this.redraw(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var a=i&&i.radius||this._radius;return Us.prototype.setStyle.call(this,i),this.setRadius(a),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,a=this._radiusY||i,h=this._clickTolerance(),m=[i+h,a+h];this._pxBounds=new dt(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function bg(i,a){return new il(i,a)}var Hc=il.extend({initialize:function(i,a,h){if(typeof a=="number"&&(a=r({},h,{radius:a})),S(this,a),this._latlng=Y(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new Ht(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Us.prototype.setStyle,_project:function(){var i=this._latlng.lng,a=this._latlng.lat,h=this._map,m=h.options.crs;if(m.distance===Et.distance){var y=Math.PI/180,T=this._mRadius/Et.R/y,O=h.project([a+T,i]),X=h.project([a-T,i]),J=O.add(X).divideBy(2),ht=h.unproject(J).lat,Rt=Math.acos((Math.cos(T*y)-Math.sin(a*y)*Math.sin(ht*y))/(Math.cos(a*y)*Math.cos(ht*y)))/y;(isNaN(Rt)||Rt===0)&&(Rt=T/Math.cos(Math.PI/180*a)),this._point=J.subtract(h.getPixelOrigin()),this._radius=isNaN(Rt)?0:J.x-h.project([ht,i-Rt]).x,this._radiusY=J.y-O.y}else{var qt=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=h.latLngToLayerPoint(this._latlng),this._radius=this._point.x-h.latLngToLayerPoint(qt).x}this._updateBounds()}});function Tg(i,a,h){return new Hc(i,a,h)}var rs=Us.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,a){S(this,a),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var a=1/0,h=null,m=Jo,y,T,O=0,X=this._parts.length;O<X;O++)for(var J=this._parts[O],ht=1,Rt=J.length;ht<Rt;ht++){y=J[ht-1],T=J[ht];var qt=m(i,y,T,!0);qt<a&&(a=qt,h=m(i,y,T))}return h&&(h.distance=Math.sqrt(a)),h},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Zf(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,a){return a=a||this._defaultShape(),i=Y(i),a.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new Ht,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Yn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var a=[],h=Yn(i),m=0,y=i.length;m<y;m++)h?(a[m]=Y(i[m]),this._bounds.extend(a[m])):a[m]=this._convertLatLngs(i[m]);return a},_project:function(){var i=new dt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),a=new j(i,i);this._rawPxBounds&&(this._pxBounds=new dt([this._rawPxBounds.min.subtract(a),this._rawPxBounds.max.add(a)]))},_projectLatlngs:function(i,a,h){var m=i[0]instanceof Gt,y=i.length,T,O;if(m){for(O=[],T=0;T<y;T++)O[T]=this._map.latLngToLayerPoint(i[T]),h.extend(O[T]);a.push(O)}else for(T=0;T<y;T++)this._projectLatlngs(i[T],a,h)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var a=this._parts,h,m,y,T,O,X,J;for(h=0,y=0,T=this._rings.length;h<T;h++)for(J=this._rings[h],m=0,O=J.length;m<O-1;m++)X=Wf(J[m],J[m+1],i,m,!0),X&&(a[y]=a[y]||[],a[y].push(X[0]),(X[1]!==J[m+1]||m===O-2)&&(a[y].push(X[1]),y++))}},_simplifyPoints:function(){for(var i=this._parts,a=this.options.smoothFactor,h=0,m=i.length;h<m;h++)i[h]=Vf(i[h],a)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,a){var h,m,y,T,O,X,J=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(h=0,T=this._parts.length;h<T;h++)for(X=this._parts[h],m=0,O=X.length,y=O-1;m<O;y=m++)if(!(!a&&m===0)&&Hf(i,X[y],X[m])<=J)return!0;return!1}});function Eg(i,a){return new rs(i,a)}rs._flat=Xf;var Br=rs.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return zf(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var a=rs.prototype._convertLatLngs.call(this,i),h=a.length;return h>=2&&a[0]instanceof Gt&&a[0].equals(a[h-1])&&a.pop(),a},_setLatLngs:function(i){rs.prototype._setLatLngs.call(this,i),Yn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Yn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,a=this.options.weight,h=new j(a,a);if(i=new dt(i.min.subtract(h),i.max.add(h)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,y=this._rings.length,T;m<y;m++)T=kf(this._rings[m],i,!0),T.length&&this._parts.push(T)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var a=!1,h,m,y,T,O,X,J,ht;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(T=0,J=this._parts.length;T<J;T++)for(h=this._parts[T],O=0,ht=h.length,X=ht-1;O<ht;X=O++)m=h[O],y=h[X],m.y>i.y!=y.y>i.y&&i.x<(y.x-m.x)*(i.y-m.y)/(y.y-m.y)+m.x&&(a=!a);return a||rs.prototype._containsPoint.call(this,i,!0)}});function wg(i,a){return new Br(i,a)}var os=ss.extend({initialize:function(i,a){S(this,a),this._layers={},i&&this.addData(i)},addData:function(i){var a=A(i)?i:i.features,h,m,y;if(a){for(h=0,m=a.length;h<m;h++)y=a[h],(y.geometries||y.geometry||y.features||y.coordinates)&&this.addData(y);return this}var T=this.options;if(T.filter&&!T.filter(i))return this;var O=sl(i,T);return O?(O.feature=al(i),O.defaultOptions=O.options,this.resetStyle(O),T.onEachFeature&&T.onEachFeature(i,O),this.addLayer(O)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=r({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(a){this._setLayerStyle(a,i)},this)},_setLayerStyle:function(i,a){i.setStyle&&(typeof a=="function"&&(a=a(i.feature)),i.setStyle(a))}});function sl(i,a){var h=i.type==="Feature"?i.geometry:i,m=h?h.coordinates:null,y=[],T=a&&a.pointToLayer,O=a&&a.coordsToLatLng||Gc,X,J,ht,Rt;if(!m&&!h)return null;switch(h.type){case"Point":return X=O(m),jf(T,i,X,a);case"MultiPoint":for(ht=0,Rt=m.length;ht<Rt;ht++)X=O(m[ht]),y.push(jf(T,i,X,a));return new ss(y);case"LineString":case"MultiLineString":return J=rl(m,h.type==="LineString"?0:1,O),new rs(J,a);case"Polygon":case"MultiPolygon":return J=rl(m,h.type==="Polygon"?1:2,O),new Br(J,a);case"GeometryCollection":for(ht=0,Rt=h.geometries.length;ht<Rt;ht++){var qt=sl({geometry:h.geometries[ht],type:"Feature",properties:i.properties},a);qt&&y.push(qt)}return new ss(y);case"FeatureCollection":for(ht=0,Rt=h.features.length;ht<Rt;ht++){var he=sl(h.features[ht],a);he&&y.push(he)}return new ss(y);default:throw new Error("Invalid GeoJSON object.")}}function jf(i,a,h,m){return i?i(a,h):new nl(h,m&&m.markersInheritOptions&&m)}function Gc(i){return new Gt(i[1],i[0],i[2])}function rl(i,a,h){for(var m=[],y=0,T=i.length,O;y<T;y++)O=a?rl(i[y],a-1,h):(h||Gc)(i[y]),m.push(O);return m}function Wc(i,a){return i=Y(i),i.alt!==void 0?[_(i.lng,a),_(i.lat,a),_(i.alt,a)]:[_(i.lng,a),_(i.lat,a)]}function ol(i,a,h,m){for(var y=[],T=0,O=i.length;T<O;T++)y.push(a?ol(i[T],Yn(i[T])?0:a-1,h,m):Wc(i[T],m));return!a&&h&&y.length>0&&y.push(y[0].slice()),y}function kr(i,a){return i.feature?r({},i.feature,{geometry:a}):al(a)}function al(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Xc={toGeoJSON:function(i){return kr(this,{type:"Point",coordinates:Wc(this.getLatLng(),i)})}};nl.include(Xc),Hc.include(Xc),il.include(Xc),rs.include({toGeoJSON:function(i){var a=!Yn(this._latlngs),h=ol(this._latlngs,a?1:0,!1,i);return kr(this,{type:(a?"Multi":"")+"LineString",coordinates:h})}}),Br.include({toGeoJSON:function(i){var a=!Yn(this._latlngs),h=a&&!Yn(this._latlngs[0]),m=ol(this._latlngs,h?2:a?1:0,!0,i);return a||(m=[m]),kr(this,{type:(h?"Multi":"")+"Polygon",coordinates:m})}}),Or.include({toMultiPoint:function(i){var a=[];return this.eachLayer(function(h){a.push(h.toGeoJSON(i).geometry.coordinates)}),kr(this,{type:"MultiPoint",coordinates:a})},toGeoJSON:function(i){var a=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(a==="MultiPoint")return this.toMultiPoint(i);var h=a==="GeometryCollection",m=[];return this.eachLayer(function(y){if(y.toGeoJSON){var T=y.toGeoJSON(i);if(h)m.push(T.geometry);else{var O=al(T);O.type==="FeatureCollection"?m.push.apply(m,O.features):m.push(O)}}}),h?kr(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Kf(i,a){return new os(i,a)}var Ag=Kf,ll=fi.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,a,h){this._url=i,this._bounds=Qt(a),S(this,h)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Nt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){wt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Kt(this._image),this},bringToBack:function(){return this._map&&_e(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Qt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",a=this._image=i?this._url:pt("img");if(Nt(a,"leaflet-image-layer"),this._zoomAnimated&&Nt(a,"leaflet-zoom-animated"),this.options.className&&Nt(a,this.options.className),a.onselectstart=p,a.onmousemove=p,a.onload=l(this.fire,this,"load"),a.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=a.src;return}a.src=this._url,a.alt=this.options.alt},_animateZoom:function(i){var a=this._map.getZoomScale(i.zoom),h=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Ze(this._image,h,a)},_reset:function(){var i=this._image,a=new dt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),h=a.getSize();Oe(i,a.min),i.style.width=h.x+"px",i.style.height=h.y+"px"},_updateOpacity:function(){Jt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Rg=function(i,a,h){return new ll(i,a,h)},Jf=ll.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",a=this._image=i?this._url:pt("video");if(Nt(a,"leaflet-image-layer"),this._zoomAnimated&&Nt(a,"leaflet-zoom-animated"),this.options.className&&Nt(a,this.options.className),a.onselectstart=p,a.onmousemove=p,a.onloadeddata=l(this.fire,this,"load"),i){for(var h=a.getElementsByTagName("source"),m=[],y=0;y<h.length;y++)m.push(h[y].src);this._url=h.length>0?m:[a.src];return}A(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(a.style,"objectFit")&&(a.style.objectFit="fill"),a.autoplay=!!this.options.autoplay,a.loop=!!this.options.loop,a.muted=!!this.options.muted,a.playsInline=!!this.options.playsInline;for(var T=0;T<this._url.length;T++){var O=pt("source");O.src=this._url[T],a.appendChild(O)}}});function Pg(i,a,h){return new Jf(i,a,h)}var $f=ll.extend({_initImage:function(){var i=this._image=this._url;Nt(i,"leaflet-image-layer"),this._zoomAnimated&&Nt(i,"leaflet-zoom-animated"),this.options.className&&Nt(i,this.options.className),i.onselectstart=p,i.onmousemove=p}});function Cg(i,a,h){return new $f(i,a,h)}var Li=fi.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,a){i&&(i instanceof Gt||A(i))?(this._latlng=Y(i),S(this,a)):(S(this,i),this._source=a),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&Jt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&Jt(this._container,1),this.bringToFront(),this.options.interactive&&(Nt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(Jt(this._container,0),this._removeTimeout=setTimeout(l(wt,void 0,this._container),200)):wt(this._container),this.options.interactive&&(Zt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=Y(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Kt(this._container),this},bringToBack:function(){return this._map&&_e(this._container),this},_prepareOpen:function(i){var a=this._source;if(!a._map)return!1;if(a instanceof ss){a=null;var h=this._source._layers;for(var m in h)if(h[m]._map){a=h[m];break}if(!a)return!1;this._source=a}if(!i)if(a.getCenter)i=a.getCenter();else if(a.getLatLng)i=a.getLatLng();else if(a.getBounds)i=a.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,a=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof a=="string")i.innerHTML=a;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(a)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),a=it(this.options.offset),h=this._getAnchor();this._zoomAnimated?Oe(this._container,i.add(h)):a=a.add(i).add(h);var m=this._containerBottom=-a.y,y=this._containerLeft=-Math.round(this._containerWidth/2)+a.x;this._container.style.bottom=m+"px",this._container.style.left=y+"px"}},_getAnchor:function(){return[0,0]}});ye.include({_initOverlay:function(i,a,h,m){var y=a;return y instanceof i||(y=new i(m).setContent(a)),h&&y.setLatLng(h),y}}),fi.include({_initOverlay:function(i,a,h,m){var y=h;return y instanceof i?(S(y,m),y._source=this):(y=a&&!m?a:new i(m,this),y.setContent(h)),y}});var cl=Li.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Li.prototype.openOn.call(this,i)},onAdd:function(i){Li.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Us||this._source.on("preclick",nr))},onRemove:function(i){Li.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Us||this._source.off("preclick",nr))},getEvents:function(){var i=Li.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",a=this._container=pt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),h=this._wrapper=pt("div",i+"-content-wrapper",a);if(this._contentNode=pt("div",i+"-content",h),jo(a),Nc(this._contentNode),ie(a,"contextmenu",nr),this._tipContainer=pt("div",i+"-tip-container",a),this._tip=pt("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=pt("a",i+"-close-button",a);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',ie(m,"click",function(y){dn(y),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,a=i.style;a.width="",a.whiteSpace="nowrap";var h=i.offsetWidth;h=Math.min(h,this.options.maxWidth),h=Math.max(h,this.options.minWidth),a.width=h+1+"px",a.whiteSpace="",a.height="";var m=i.offsetHeight,y=this.options.maxHeight,T="leaflet-popup-scrolled";y&&m>y?(a.height=y+"px",Nt(i,T)):Zt(i,T),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),h=this._getAnchor();Oe(this._container,a.add(h))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,a=parseInt(Ct(this._container,"marginBottom"),10)||0,h=this._container.offsetHeight+a,m=this._containerWidth,y=new j(this._containerLeft,-h-this._containerBottom);y._add(xe(this._container));var T=i.layerPointToContainerPoint(y),O=it(this.options.autoPanPadding),X=it(this.options.autoPanPaddingTopLeft||O),J=it(this.options.autoPanPaddingBottomRight||O),ht=i.getSize(),Rt=0,qt=0;T.x+m+J.x>ht.x&&(Rt=T.x+m-ht.x+J.x),T.x-Rt-X.x<0&&(Rt=T.x-X.x),T.y+h+J.y>ht.y&&(qt=T.y+h-ht.y+J.y),T.y-qt-X.y<0&&(qt=T.y-X.y),(Rt||qt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Rt,qt]))}},_getAnchor:function(){return it(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Lg=function(i,a){return new cl(i,a)};ye.mergeOptions({closePopupOnClick:!0}),ye.include({openPopup:function(i,a,h){return this._initOverlay(cl,i,a,h).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),fi.include({bindPopup:function(i,a){return this._popup=this._initOverlay(cl,this._popup,i,a),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof ss||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){ir(i);var a=i.layer||i.target;if(this._popup._source===a&&!(a instanceof Us)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=a,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var hl=Li.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Li.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Li.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Li.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",a=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=pt("div",a),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var a,h,m=this._map,y=this._container,T=m.latLngToContainerPoint(m.getCenter()),O=m.layerPointToContainerPoint(i),X=this.options.direction,J=y.offsetWidth,ht=y.offsetHeight,Rt=it(this.options.offset),qt=this._getAnchor();X==="top"?(a=J/2,h=ht):X==="bottom"?(a=J/2,h=0):X==="center"?(a=J/2,h=ht/2):X==="right"?(a=0,h=ht/2):X==="left"?(a=J,h=ht/2):O.x<T.x?(X="right",a=0,h=ht/2):(X="left",a=J+(Rt.x+qt.x)*2,h=ht/2),i=i.subtract(it(a,h,!0)).add(Rt).add(qt),Zt(y,"leaflet-tooltip-right"),Zt(y,"leaflet-tooltip-left"),Zt(y,"leaflet-tooltip-top"),Zt(y,"leaflet-tooltip-bottom"),Nt(y,"leaflet-tooltip-"+X),Oe(y,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&Jt(this._container,i)},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(a)},_getAnchor:function(){return it(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ig=function(i,a){return new hl(i,a)};ye.include({openTooltip:function(i,a,h){return this._initOverlay(hl,i,a,h).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),fi.include({bindTooltip:function(i,a){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(hl,this._tooltip,i,a),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var a=i?"off":"on",h={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?h.add=this._openTooltip:(h.mouseover=this._openTooltip,h.mouseout=this.closeTooltip,h.click=this._openTooltip,this._map?this._addFocusListeners():h.add=this._addFocusListeners),this._tooltip.options.sticky&&(h.mousemove=this._moveTooltip),this[a](h),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof ss||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var a=typeof i.getElement=="function"&&i.getElement();a&&(ie(a,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),ie(a,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var a=typeof i.getElement=="function"&&i.getElement();a&&a.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var a=this;this._map.once("moveend",function(){a._openOnceFlag=!1,a._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var a=i.latlng,h,m;this._tooltip.options.sticky&&i.originalEvent&&(h=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(h),a=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(a)}});var Qf=Fr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var a=i&&i.tagName==="DIV"?i:document.createElement("div"),h=this.options;if(h.html instanceof Element?(kt(a),a.appendChild(h.html)):a.innerHTML=h.html!==!1?h.html:"",h.bgPos){var m=it(h.bgPos);a.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});function Dg(i){return new Qf(i)}Fr.Default=$o;var Qo=fi.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Bt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){S(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),wt(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Kt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_e(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof j?i:new j(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var a=this.getPane().children,h=-i(-1/0,1/0),m=0,y=a.length,T;m<y;m++)T=a[m].style.zIndex,a[m]!==this._container&&T&&(h=i(h,+T));isFinite(h)&&(this.options.zIndex=h+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Bt.ielt9){Jt(this._container,this.options.opacity);var i=+new Date,a=!1,h=!1;for(var m in this._tiles){var y=this._tiles[m];if(!(!y.current||!y.loaded)){var T=Math.min(1,(i-y.loaded)/200);Jt(y.el,T),T<1?a=!0:(y.active?h=!0:this._onOpaqueTile(y),y.active=!0)}}h&&!this._noPrune&&this._pruneTiles(),a&&(Z(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this))}},_onOpaqueTile:p,_initContainer:function(){this._container||(this._container=pt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,a=this.options.maxZoom;if(i!==void 0){for(var h in this._levels)h=Number(h),this._levels[h].el.children.length||h===i?(this._levels[h].el.style.zIndex=a-Math.abs(i-h),this._onUpdateLevel(h)):(wt(this._levels[h].el),this._removeTilesAtZoom(h),this._onRemoveLevel(h),delete this._levels[h]);var m=this._levels[i],y=this._map;return m||(m=this._levels[i]={},m.el=pt("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=a,m.origin=y.project(y.unproject(y.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,y.getCenter(),y.getZoom()),p(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:p,_onRemoveLevel:p,_onCreateLevel:p,_pruneTiles:function(){if(this._map){var i,a,h=this._map.getZoom();if(h>this.options.maxZoom||h<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)a=this._tiles[i],a.retain=a.current;for(i in this._tiles)if(a=this._tiles[i],a.current&&!a.active){var m=a.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var a in this._tiles)this._tiles[a].coords.z===i&&this._removeTile(a)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)wt(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,a,h,m){var y=Math.floor(i/2),T=Math.floor(a/2),O=h-1,X=new j(+y,+T);X.z=+O;var J=this._tileCoordsToKey(X),ht=this._tiles[J];return ht&&ht.active?(ht.retain=!0,!0):(ht&&ht.loaded&&(ht.retain=!0),O>m?this._retainParent(y,T,O,m):!1)},_retainChildren:function(i,a,h,m){for(var y=2*i;y<2*i+2;y++)for(var T=2*a;T<2*a+2;T++){var O=new j(y,T);O.z=h+1;var X=this._tileCoordsToKey(O),J=this._tiles[X];if(J&&J.active){J.retain=!0;continue}else J&&J.loaded&&(J.retain=!0);h+1<m&&this._retainChildren(y,T,h+1,m)}},_resetView:function(i){var a=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),a,a)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var a=this.options;return a.minNativeZoom!==void 0&&i<a.minNativeZoom?a.minNativeZoom:a.maxNativeZoom!==void 0&&a.maxNativeZoom<i?a.maxNativeZoom:i},_setView:function(i,a,h,m){var y=Math.round(a);this.options.maxZoom!==void 0&&y>this.options.maxZoom||this.options.minZoom!==void 0&&y<this.options.minZoom?y=void 0:y=this._clampZoom(y);var T=this.options.updateWhenZooming&&y!==this._tileZoom;(!m||T)&&(this._tileZoom=y,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),y!==void 0&&this._update(i),h||this._pruneTiles(),this._noPrune=!!h),this._setZoomTransforms(i,a)},_setZoomTransforms:function(i,a){for(var h in this._levels)this._setZoomTransform(this._levels[h],i,a)},_setZoomTransform:function(i,a,h){var m=this._map.getZoomScale(h,i.zoom),y=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(a,h)).round();Bt.any3d?Ze(i.el,y,m):Oe(i.el,y)},_resetGrid:function(){var i=this._map,a=i.options.crs,h=this._tileSize=this.getTileSize(),m=this._tileZoom,y=this._map.getPixelWorldBounds(this._tileZoom);y&&(this._globalTileRange=this._pxBoundsToTileRange(y)),this._wrapX=a.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,a.wrapLng[0]],m).x/h.x),Math.ceil(i.project([0,a.wrapLng[1]],m).x/h.y)],this._wrapY=a.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([a.wrapLat[0],0],m).y/h.x),Math.ceil(i.project([a.wrapLat[1],0],m).y/h.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var a=this._map,h=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),m=a.getZoomScale(h,this._tileZoom),y=a.project(i,this._tileZoom).floor(),T=a.getSize().divideBy(m*2);return new dt(y.subtract(T),y.add(T))},_update:function(i){var a=this._map;if(a){var h=this._clampZoom(a.getZoom());if(i===void 0&&(i=a.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),y=this._pxBoundsToTileRange(m),T=y.getCenter(),O=[],X=this.options.keepBuffer,J=new dt(y.getBottomLeft().subtract([X,-X]),y.getTopRight().add([X,-X]));if(!(isFinite(y.min.x)&&isFinite(y.min.y)&&isFinite(y.max.x)&&isFinite(y.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ht in this._tiles){var Rt=this._tiles[ht].coords;(Rt.z!==this._tileZoom||!J.contains(new j(Rt.x,Rt.y)))&&(this._tiles[ht].current=!1)}if(Math.abs(h-this._tileZoom)>1){this._setView(i,h);return}for(var qt=y.min.y;qt<=y.max.y;qt++)for(var he=y.min.x;he<=y.max.x;he++){var bn=new j(he,qt);if(bn.z=this._tileZoom,!!this._isValidTile(bn)){var an=this._tiles[this._tileCoordsToKey(bn)];an?an.current=!0:O.push(bn)}}if(O.sort(function(Ln,Vr){return Ln.distanceTo(T)-Vr.distanceTo(T)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var jn=document.createDocumentFragment();for(he=0;he<O.length;he++)this._addTile(O[he],jn);this._level.el.appendChild(jn)}}}},_isValidTile:function(i){var a=this._map.options.crs;if(!a.infinite){var h=this._globalTileRange;if(!a.wrapLng&&(i.x<h.min.x||i.x>h.max.x)||!a.wrapLat&&(i.y<h.min.y||i.y>h.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return Qt(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var a=this._map,h=this.getTileSize(),m=i.scaleBy(h),y=m.add(h),T=a.unproject(m,i.z),O=a.unproject(y,i.z);return[T,O]},_tileCoordsToBounds:function(i){var a=this._tileCoordsToNwSe(i),h=new Ht(a[0],a[1]);return this.options.noWrap||(h=this._map.wrapLatLngBounds(h)),h},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var a=i.split(":"),h=new j(+a[0],+a[1]);return h.z=+a[2],h},_removeTile:function(i){var a=this._tiles[i];a&&(wt(a.el),delete this._tiles[i],this.fire("tileunload",{tile:a.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Nt(i,"leaflet-tile");var a=this.getTileSize();i.style.width=a.x+"px",i.style.height=a.y+"px",i.onselectstart=p,i.onmousemove=p,Bt.ielt9&&this.options.opacity<1&&Jt(i,this.options.opacity)},_addTile:function(i,a){var h=this._getTilePos(i),m=this._tileCoordsToKey(i),y=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(y),this.createTile.length<2&&F(l(this._tileReady,this,i,null,y)),Oe(y,h),this._tiles[m]={el:y,coords:i,current:!0},a.appendChild(y),this.fire("tileloadstart",{tile:y,coords:i})},_tileReady:function(i,a,h){a&&this.fire("tileerror",{error:a,tile:h,coords:i});var m=this._tileCoordsToKey(i);h=this._tiles[m],h&&(h.loaded=+new Date,this._map._fadeAnimated?(Jt(h.el,0),Z(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this)):(h.active=!0,this._pruneTiles()),a||(Nt(h.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:h.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Bt.ielt9||!this._map._fadeAnimated?F(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var a=new j(this._wrapX?d(i.x,this._wrapX):i.x,this._wrapY?d(i.y,this._wrapY):i.y);return a.z=i.z,a},_pxBoundsToTileRange:function(i){var a=this.getTileSize();return new dt(i.min.unscaleBy(a).floor(),i.max.unscaleBy(a).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Ng(i){return new Qo(i)}var zr=Qo.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,a){this._url=i,a=S(this,a),a.detectRetina&&Bt.retina&&a.maxZoom>0?(a.tileSize=Math.floor(a.tileSize/2),a.zoomReverse?(a.zoomOffset--,a.minZoom=Math.min(a.maxZoom,a.minZoom+1)):(a.zoomOffset++,a.maxZoom=Math.max(a.minZoom,a.maxZoom-1)),a.minZoom=Math.max(0,a.minZoom)):a.zoomReverse?a.minZoom=Math.min(a.maxZoom,a.minZoom):a.maxZoom=Math.max(a.minZoom,a.maxZoom),typeof a.subdomains=="string"&&(a.subdomains=a.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,a){return this._url===i&&a===void 0&&(a=!0),this._url=i,a||this.redraw(),this},createTile:function(i,a){var h=document.createElement("img");return ie(h,"load",l(this._tileOnLoad,this,a,h)),ie(h,"error",l(this._tileOnError,this,a,h)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(h.referrerPolicy=this.options.referrerPolicy),h.alt="",h.src=this.getTileUrl(i),h},getTileUrl:function(i){var a={r:Bt.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var h=this._globalTileRange.max.y-i.y;this.options.tms&&(a.y=h),a["-y"]=h}return P(this._url,r(a,this.options))},_tileOnLoad:function(i,a){Bt.ielt9?setTimeout(l(i,this,null,a),0):i(null,a)},_tileOnError:function(i,a,h){var m=this.options.errorTileUrl;m&&a.getAttribute("src")!==m&&(a.src=m),i(h,a)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,a=this.options.maxZoom,h=this.options.zoomReverse,m=this.options.zoomOffset;return h&&(i=a-i),i+m},_getSubdomain:function(i){var a=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[a]},_abortLoading:function(){var i,a;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(a=this._tiles[i].el,a.onload=p,a.onerror=p,!a.complete)){a.src=D;var h=this._tiles[i].coords;wt(a),delete this._tiles[i],this.fire("tileabort",{tile:a,coords:h})}},_removeTile:function(i){var a=this._tiles[i];if(a)return a.el.setAttribute("src",D),Qo.prototype._removeTile.call(this,i)},_tileReady:function(i,a,h){if(!(!this._map||h&&h.getAttribute("src")===D))return Qo.prototype._tileReady.call(this,i,a,h)}});function td(i,a){return new zr(i,a)}var ed=zr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,a){this._url=i;var h=r({},this.defaultWmsParams);for(var m in a)m in this.options||(h[m]=a[m]);a=S(this,a);var y=a.detectRetina&&Bt.retina?2:1,T=this.getTileSize();h.width=T.x*y,h.height=T.y*y,this.wmsParams=h},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var a=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[a]=this._crs.code,zr.prototype.onAdd.call(this,i)},getTileUrl:function(i){var a=this._tileCoordsToNwSe(i),h=this._crs,m=Wt(h.project(a[0]),h.project(a[1])),y=m.min,T=m.max,O=(this._wmsVersion>=1.3&&this._crs===qf?[y.y,y.x,T.y,T.x]:[y.x,y.y,T.x,T.y]).join(","),X=zr.prototype.getTileUrl.call(this,i);return X+x(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(i,a){return r(this.wmsParams,i),a||this.redraw(),this}});function Ug(i,a){return new ed(i,a)}zr.WMS=ed,td.wms=Ug;var as=fi.extend({options:{padding:.1},initialize:function(i){S(this,i),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Nt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,a){var h=this._map.getZoomScale(a,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),y=this._map.project(this._center,a),T=m.multiplyBy(-h).add(y).subtract(this._map._getNewPixelOrigin(i,a));Bt.any3d?Ze(this._container,T,h):Oe(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,a=this._map.getSize(),h=this._map.containerPointToLayerPoint(a.multiplyBy(-i)).round();this._bounds=new dt(h,h.add(a.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),nd=as.extend({options:{tolerance:0},getEvents:function(){var i=as.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){as.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");ie(i,"mousemove",this._onMouseMove,this),ie(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ie(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){Z(this._redrawRequest),delete this._ctx,wt(this._container),Fe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var a in this._layers)i=this._layers[a],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){as.prototype._update.call(this);var i=this._bounds,a=this._container,h=i.getSize(),m=Bt.retina?2:1;Oe(a,i.min),a.width=m*h.x,a.height=m*h.y,a.style.width=h.x+"px",a.style.height=h.y+"px",Bt.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){as.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[u(i)]=i;var a=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=a),this._drawLast=a,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var a=i._order,h=a.next,m=a.prev;h?h.prev=m:this._drawLast=m,m?m.next=h:this._drawFirst=h,delete i._order,delete this._layers[u(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var a=i.options.dashArray.split(/[, ]+/),h=[],m,y;for(y=0;y<a.length;y++){if(m=Number(a[y]),isNaN(m))return;h.push(m)}i.options._dashArray=h}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||F(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var a=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new dt,this._redrawBounds.extend(i._pxBounds.min.subtract([a,a])),this._redrawBounds.extend(i._pxBounds.max.add([a,a]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var a=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,a.x,a.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,a=this._redrawBounds;if(this._ctx.save(),a){var h=a.getSize();this._ctx.beginPath(),this._ctx.rect(a.min.x,a.min.y,h.x,h.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!a||i._pxBounds&&i._pxBounds.intersects(a))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,a){if(this._drawing){var h,m,y,T,O=i._parts,X=O.length,J=this._ctx;if(X){for(J.beginPath(),h=0;h<X;h++){for(m=0,y=O[h].length;m<y;m++)T=O[h][m],J[m?"lineTo":"moveTo"](T.x,T.y);a&&J.closePath()}this._fillStroke(J,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var a=i._point,h=this._ctx,m=Math.max(Math.round(i._radius),1),y=(Math.max(Math.round(i._radiusY),1)||m)/m;y!==1&&(h.save(),h.scale(1,y)),h.beginPath(),h.arc(a.x,a.y/y,m,0,Math.PI*2,!1),y!==1&&h.restore(),this._fillStroke(h,i)}},_fillStroke:function(i,a){var h=a.options;h.fill&&(i.globalAlpha=h.fillOpacity,i.fillStyle=h.fillColor||h.color,i.fill(h.fillRule||"evenodd")),h.stroke&&h.weight!==0&&(i.setLineDash&&i.setLineDash(a.options&&a.options._dashArray||[]),i.globalAlpha=h.opacity,i.lineWidth=h.weight,i.strokeStyle=h.color,i.lineCap=h.lineCap,i.lineJoin=h.lineJoin,i.stroke())},_onClick:function(i){for(var a=this._map.mouseEventToLayerPoint(i),h,m,y=this._drawFirst;y;y=y.next)h=y.layer,h.options.interactive&&h._containsPoint(a)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(h))&&(m=h);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var a=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,a)}},_handleMouseOut:function(i){var a=this._hoveredLayer;a&&(Zt(this._container,"leaflet-interactive"),this._fireEvent([a],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,a){if(!this._mouseHoverThrottled){for(var h,m,y=this._drawFirst;y;y=y.next)h=y.layer,h.options.interactive&&h._containsPoint(a)&&(m=h);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(Nt(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,a,h){this._map._fireDOMEvent(a,h||a.type,i)},_bringToFront:function(i){var a=i._order;if(a){var h=a.next,m=a.prev;if(h)h.prev=m;else return;m?m.next=h:h&&(this._drawFirst=h),a.prev=this._drawLast,this._drawLast.next=a,a.next=null,this._drawLast=a,this._requestRedraw(i)}},_bringToBack:function(i){var a=i._order;if(a){var h=a.next,m=a.prev;if(m)m.next=h;else return;h?h.prev=m:m&&(this._drawLast=m),a.prev=null,a.next=this._drawFirst,this._drawFirst.prev=a,this._drawFirst=a,this._requestRedraw(i)}}});function id(i){return Bt.canvas?new nd(i):null}var ta=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Og={_initContainer:function(){this._container=pt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(as.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var a=i._container=ta("shape");Nt(a,"leaflet-vml-shape "+(this.options.className||"")),a.coordsize="1 1",i._path=ta("path"),a.appendChild(i._path),this._updateStyle(i),this._layers[u(i)]=i},_addPath:function(i){var a=i._container;this._container.appendChild(a),i.options.interactive&&i.addInteractiveTarget(a)},_removePath:function(i){var a=i._container;wt(a),i.removeInteractiveTarget(a),delete this._layers[u(i)]},_updateStyle:function(i){var a=i._stroke,h=i._fill,m=i.options,y=i._container;y.stroked=!!m.stroke,y.filled=!!m.fill,m.stroke?(a||(a=i._stroke=ta("stroke")),y.appendChild(a),a.weight=m.weight+"px",a.color=m.color,a.opacity=m.opacity,m.dashArray?a.dashStyle=A(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):a.dashStyle="",a.endcap=m.lineCap.replace("butt","flat"),a.joinstyle=m.lineJoin):a&&(y.removeChild(a),i._stroke=null),m.fill?(h||(h=i._fill=ta("fill")),y.appendChild(h),h.color=m.fillColor||m.color,h.opacity=m.fillOpacity):h&&(y.removeChild(h),i._fill=null)},_updateCircle:function(i){var a=i._point.round(),h=Math.round(i._radius),m=Math.round(i._radiusY||h);this._setPath(i,i._empty()?"M0 0":"AL "+a.x+","+a.y+" "+h+","+m+" 0,"+65535*360)},_setPath:function(i,a){i._path.v=a},_bringToFront:function(i){Kt(i._container)},_bringToBack:function(i){_e(i._container)}},ul=Bt.vml?ta:Ae,ea=as.extend({_initContainer:function(){this._container=ul("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ul("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){wt(this._container),Fe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){as.prototype._update.call(this);var i=this._bounds,a=i.getSize(),h=this._container;(!this._svgSize||!this._svgSize.equals(a))&&(this._svgSize=a,h.setAttribute("width",a.x),h.setAttribute("height",a.y)),Oe(h,i.min),h.setAttribute("viewBox",[i.min.x,i.min.y,a.x,a.y].join(" ")),this.fire("update")}},_initPath:function(i){var a=i._path=ul("path");i.options.className&&Nt(a,i.options.className),i.options.interactive&&Nt(a,"leaflet-interactive"),this._updateStyle(i),this._layers[u(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){wt(i._path),i.removeInteractiveTarget(i._path),delete this._layers[u(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var a=i._path,h=i.options;a&&(h.stroke?(a.setAttribute("stroke",h.color),a.setAttribute("stroke-opacity",h.opacity),a.setAttribute("stroke-width",h.weight),a.setAttribute("stroke-linecap",h.lineCap),a.setAttribute("stroke-linejoin",h.lineJoin),h.dashArray?a.setAttribute("stroke-dasharray",h.dashArray):a.removeAttribute("stroke-dasharray"),h.dashOffset?a.setAttribute("stroke-dashoffset",h.dashOffset):a.removeAttribute("stroke-dashoffset")):a.setAttribute("stroke","none"),h.fill?(a.setAttribute("fill",h.fillColor||h.color),a.setAttribute("fill-opacity",h.fillOpacity),a.setAttribute("fill-rule",h.fillRule||"evenodd")):a.setAttribute("fill","none"))},_updatePoly:function(i,a){this._setPath(i,ne(i._parts,a))},_updateCircle:function(i){var a=i._point,h=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||h,y="a"+h+","+m+" 0 1,0 ",T=i._empty()?"M0 0":"M"+(a.x-h)+","+a.y+y+h*2+",0 "+y+-h*2+",0 ";this._setPath(i,T)},_setPath:function(i,a){i._path.setAttribute("d",a)},_bringToFront:function(i){Kt(i._path)},_bringToBack:function(i){_e(i._path)}});Bt.vml&&ea.include(Og);function sd(i){return Bt.svg||Bt.vml?new ea(i):null}ye.include({getRenderer:function(i){var a=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return a||(a=this._renderer=this._createRenderer()),this.hasLayer(a)||this.addLayer(a),a},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var a=this._paneRenderers[i];return a===void 0&&(a=this._createRenderer({pane:i}),this._paneRenderers[i]=a),a},_createRenderer:function(i){return this.options.preferCanvas&&id(i)||sd(i)}});var rd=Br.extend({initialize:function(i,a){Br.prototype.initialize.call(this,this._boundsToLatLngs(i),a)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Qt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Fg(i,a){return new rd(i,a)}ea.create=ul,ea.pointsToPath=ne,os.geometryToLayer=sl,os.coordsToLatLng=Gc,os.coordsToLatLngs=rl,os.latLngToCoords=Wc,os.latLngsToCoords=ol,os.getFeature=kr,os.asFeature=al,ye.mergeOptions({boxZoom:!0});var od=Ci.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){ie(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Fe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){wt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),qe(),er(),this._startPoint=this._map.mouseEventToContainerPoint(i),ie(document,{contextmenu:ir,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=pt("div","leaflet-zoom-box",this._container),Nt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var a=new dt(this._point,this._startPoint),h=a.getSize();Oe(this._box,a.min),this._box.style.width=h.x+"px",this._box.style.height=h.y+"px"},_finish:function(){this._moved&&(wt(this._box),Zt(this._container,"leaflet-crosshair")),on(),hi(),Fe(document,{contextmenu:ir,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var a=new Ht(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(a).fire("boxzoomend",{boxZoomBounds:a})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ye.addInitHook("addHandler","boxZoom",od),ye.mergeOptions({doubleClickZoom:!0});var ad=Ci.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var a=this._map,h=a.getZoom(),m=a.options.zoomDelta,y=i.originalEvent.shiftKey?h-m:h+m;a.options.doubleClickZoom==="center"?a.setZoom(y):a.setZoomAround(i.containerPoint,y)}});ye.addInitHook("addHandler","doubleClickZoom",ad),ye.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ld=Ci.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Ns(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Nt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Zt(this._map._container,"leaflet-grab"),Zt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var a=Qt(this._map.options.maxBounds);this._offsetLimit=Wt(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var a=this._lastTime=+new Date,h=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(h),this._times.push(a),this._prunePositions(a)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),a=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=a.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,a){return i-(i-a)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),a=this._offsetLimit;i.x<a.min.x&&(i.x=this._viscousLimit(i.x,a.min.x)),i.y<a.min.y&&(i.y=this._viscousLimit(i.y,a.min.y)),i.x>a.max.x&&(i.x=this._viscousLimit(i.x,a.max.x)),i.y>a.max.y&&(i.y=this._viscousLimit(i.y,a.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,a=Math.round(i/2),h=this._initialWorldOffset,m=this._draggable._newPos.x,y=(m-a+h)%i+a-h,T=(m+a+h)%i-a-h,O=Math.abs(y+h)<Math.abs(T+h)?y:T;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(i){var a=this._map,h=a.options,m=!h.inertia||i.noInertia||this._times.length<2;if(a.fire("dragend",i),m)a.fire("moveend");else{this._prunePositions(+new Date);var y=this._lastPos.subtract(this._positions[0]),T=(this._lastTime-this._times[0])/1e3,O=h.easeLinearity,X=y.multiplyBy(O/T),J=X.distanceTo([0,0]),ht=Math.min(h.inertiaMaxSpeed,J),Rt=X.multiplyBy(ht/J),qt=ht/(h.inertiaDeceleration*O),he=Rt.multiplyBy(-qt/2).round();!he.x&&!he.y?a.fire("moveend"):(he=a._limitOffset(he,a.options.maxBounds),F(function(){a.panBy(he,{duration:qt,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});ye.addInitHook("addHandler","dragging",ld),ye.mergeOptions({keyboard:!0,keyboardPanDelta:80});var cd=Ci.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),ie(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Fe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,a=document.documentElement,h=i.scrollTop||a.scrollTop,m=i.scrollLeft||a.scrollLeft;this._map._container.focus(),window.scrollTo(m,h)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var a=this._panKeys={},h=this.keyCodes,m,y;for(m=0,y=h.left.length;m<y;m++)a[h.left[m]]=[-1*i,0];for(m=0,y=h.right.length;m<y;m++)a[h.right[m]]=[i,0];for(m=0,y=h.down.length;m<y;m++)a[h.down[m]]=[0,i];for(m=0,y=h.up.length;m<y;m++)a[h.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var a=this._zoomKeys={},h=this.keyCodes,m,y;for(m=0,y=h.zoomIn.length;m<y;m++)a[h.zoomIn[m]]=i;for(m=0,y=h.zoomOut.length;m<y;m++)a[h.zoomOut[m]]=-i},_addHooks:function(){ie(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Fe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var a=i.keyCode,h=this._map,m;if(a in this._panKeys){if(!h._panAnim||!h._panAnim._inProgress)if(m=this._panKeys[a],i.shiftKey&&(m=it(m).multiplyBy(3)),h.options.maxBounds&&(m=h._limitOffset(it(m),h.options.maxBounds)),h.options.worldCopyJump){var y=h.wrapLatLng(h.unproject(h.project(h.getCenter()).add(m)));h.panTo(y)}else h.panBy(m)}else if(a in this._zoomKeys)h.setZoom(h.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[a]);else if(a===27&&h._popup&&h._popup.options.closeOnEscapeKey)h.closePopup();else return;ir(i)}}});ye.addInitHook("addHandler","keyboard",cd),ye.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var hd=Ci.extend({addHooks:function(){ie(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Fe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var a=Nf(i),h=this._map.options.wheelDebounceTime;this._delta+=a,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(h-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),m),ir(i)},_performZoom:function(){var i=this._map,a=i.getZoom(),h=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),y=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,T=h?Math.ceil(y/h)*h:y,O=i._limitZoom(a+(this._delta>0?T:-T))-a;this._delta=0,this._startTime=null,O&&(i.options.scrollWheelZoom==="center"?i.setZoom(a+O):i.setZoomAround(this._lastMousePos,a+O))}});ye.addInitHook("addHandler","scrollWheelZoom",hd);var Bg=600;ye.mergeOptions({tapHold:Bt.touchNative&&Bt.safari&&Bt.mobile,tapTolerance:15});var ud=Ci.extend({addHooks:function(){ie(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Fe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var a=i.touches[0];this._startPos=this._newPos=new j(a.clientX,a.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ie(document,"touchend",dn),ie(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",a))},this),Bg),ie(document,"touchend touchcancel contextmenu",this._cancel,this),ie(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Fe(document,"touchend",dn),Fe(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Fe(document,"touchend touchcancel contextmenu",this._cancel,this),Fe(document,"touchmove",this._onMove,this)},_onMove:function(i){var a=i.touches[0];this._newPos=new j(a.clientX,a.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,a){var h=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY});h._simulated=!0,a.target.dispatchEvent(h)}});ye.addInitHook("addHandler","tapHold",ud),ye.mergeOptions({touchZoom:Bt.touch,bounceAtZoomLimits:!0});var fd=Ci.extend({addHooks:function(){Nt(this._map._container,"leaflet-touch-zoom"),ie(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Zt(this._map._container,"leaflet-touch-zoom"),Fe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var a=this._map;if(!(!i.touches||i.touches.length!==2||a._animatingZoom||this._zooming)){var h=a.mouseEventToContainerPoint(i.touches[0]),m=a.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=a.getSize()._divideBy(2),this._startLatLng=a.containerPointToLatLng(this._centerPoint),a.options.touchZoom!=="center"&&(this._pinchStartLatLng=a.containerPointToLatLng(h.add(m)._divideBy(2))),this._startDist=h.distanceTo(m),this._startZoom=a.getZoom(),this._moved=!1,this._zooming=!0,a._stop(),ie(document,"touchmove",this._onTouchMove,this),ie(document,"touchend touchcancel",this._onTouchEnd,this),dn(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var a=this._map,h=a.mouseEventToContainerPoint(i.touches[0]),m=a.mouseEventToContainerPoint(i.touches[1]),y=h.distanceTo(m)/this._startDist;if(this._zoom=a.getScaleZoom(y,this._startZoom),!a.options.bounceAtZoomLimits&&(this._zoom<a.getMinZoom()&&y<1||this._zoom>a.getMaxZoom()&&y>1)&&(this._zoom=a._limitZoom(this._zoom)),a.options.touchZoom==="center"){if(this._center=this._startLatLng,y===1)return}else{var T=h._add(m)._divideBy(2)._subtract(this._centerPoint);if(y===1&&T.x===0&&T.y===0)return;this._center=a.unproject(a.project(this._pinchStartLatLng,this._zoom).subtract(T),this._zoom)}this._moved||(a._moveStart(!0,!1),this._moved=!0),Z(this._animRequest);var O=l(a._move,a,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=F(O,this,!0),dn(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Z(this._animRequest),Fe(document,"touchmove",this._onTouchMove,this),Fe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ye.addInitHook("addHandler","touchZoom",fd),ye.BoxZoom=od,ye.DoubleClickZoom=ad,ye.Drag=ld,ye.Keyboard=cd,ye.ScrollWheelZoom=hd,ye.TapHold=ud,ye.TouchZoom=fd,e.Bounds=dt,e.Browser=Bt,e.CRS=lt,e.Canvas=nd,e.Circle=Hc,e.CircleMarker=il,e.Class=rt,e.Control=ui,e.DivIcon=Qf,e.DivOverlay=Li,e.DomEvent=ng,e.DomUtil=tg,e.Draggable=Ns,e.Evented=q,e.FeatureGroup=ss,e.GeoJSON=os,e.GridLayer=Qo,e.Handler=Ci,e.Icon=Fr,e.ImageOverlay=ll,e.LatLng=Gt,e.LatLngBounds=Ht,e.Layer=fi,e.LayerGroup=Or,e.LineUtil=mg,e.Map=ye,e.Marker=nl,e.Mixin=cg,e.Path=Us,e.Point=j,e.PolyUtil=hg,e.Polygon=Br,e.Polyline=rs,e.Popup=cl,e.PosAnimation=Uf,e.Projection=_g,e.Rectangle=rd,e.Renderer=as,e.SVG=ea,e.SVGOverlay=$f,e.TileLayer=zr,e.Tooltip=hl,e.Transformation=pe,e.Util=$,e.VideoOverlay=Jf,e.bind=l,e.bounds=Wt,e.canvas=id,e.circle=Tg,e.circleMarker=bg,e.control=Ko,e.divIcon=Dg,e.extend=r,e.featureGroup=yg,e.geoJSON=Kf,e.geoJson=Ag,e.gridLayer=Ng,e.icon=Mg,e.imageOverlay=Rg,e.latLng=Y,e.latLngBounds=Qt,e.layerGroup=xg,e.map=ig,e.marker=Sg,e.point=it,e.polygon=wg,e.polyline=Eg,e.popup=Lg,e.rectangle=Fg,e.setOptions=S,e.stamp=u,e.svg=sd,e.svgOverlay=Cg,e.tileLayer=td,e.tooltip=Ig,e.transformation=Ve,e.version=n,e.videoOverlay=Pg;var kg=window.L;e.noConflict=function(){return window.L=kg,this},window.L=e}))})(va,va.exports)),va.exports}var Ow=Uw();const nm=Dw(Ow);var Fw=wi('<div class="keymap-container svelte-bmmrwh"></div>');function J_(s,t){if(new.target)return Ha({component:J_,...s});zo(t,!1);let e=x0(t,"step",12,0),n=Gi(),r;const o=[{bounds:[[-13.5,12],[5.5,31]],zoom:5},{bounds:[[-4.5,27.5],[-1.5,29.8]],zoom:8},{bounds:[[-2.3,28.9],[-1.9,29.2]],zoom:10},{bounds:[[-2.2,29],[-2.1,29.1]],zoom:12}];let l=e();l0(()=>{r&&e()!==l&&(c(e()),l=e())}),e_(async()=>{await Vv(),r=nm.map(Me(n),{zoomControl:!1,scrollWheelZoom:!1,dragging:!1}),nm.tileLayer("https://alessandromusetta.com/geo/tiles/keymapidjwi/{z}/{x}/{y}.png",{maxZoom:13}).addTo(r),await new Promise(d=>{const p=()=>{const _=Me(n).getBoundingClientRect();_.width>0&&_.height>0?d():requestAnimationFrame(p)};p()}),r.invalidateSize(),setTimeout(()=>c(e()),50)});function c(d){const p=o[d];r.fitBounds(p.bounds,{animate:!0,duration:1.6,easeLinearity:.25,maxZoom:p.zoom})}var u={get step(){return e()},set step(d){e(d),Qu()},$set:Xa,$on:(d,p)=>Wa(t,d,p)};Ga();var f=Fw();return i_(f,d=>Xe(n,d),()=>Me(n)),Si(s,f),Vo(u)}var Bw=wi(`<div class="keymapsteps-layout svelte-sibpqi"><div class="keymapsteps-story svelte-sibpqi"><section class="svelte-sibpqi"><p style="padding: 20px;">La Réserve Forestière de Nyamusisi est située à l’est de la
                République démocratique du Congo, dans la province du Sud-Kivu,
                au cœur du lac Kivu. À l’échelle régionale, le Sud-Kivu est
                l’une des provinces les plus fragilisées par des décennies de
                conflits armés, de déplacements forcés de populations et de
                crises humanitaires récurrentes. Dans ce contexte, l’île d’Idjwi
                constitue une singularité territoriale. Relativement épargnée
                par les violences armées directes, elle est souvent qualifiée
                par ses habitants et par les acteurs institutionnels comme une «
                île de paix » au sein d’un environnement régional instable.
                Aucun obstacle lié à la sécurité ne se présente pour la mise en
                œuvre de projets à vocation locale sur l’île d’Idjwi, où des
                initiatives de coopération internationale, tant à petite qu’à
                grande échelle, ont déjà été menées avec succès.</p></section> <section class="svelte-sibpqi">Province du Sud-Kivu</section> <section class="svelte-sibpqi">Île d'Idjwi<br/><br/> <p style="font-size:x-small; text-align:left; margin-block-start: 0em;margin-block-end: 0em;">Diego Tirira, Creative Commons Attribution-Share Alike 2.0
                Generic</p> <img height="400px" alt="Idjwi"/></section> <section class="svelte-sibpqi">Réserve Naturelle d'Idjwi-Nyamusisi<br/><br/> <p style="font-size:x-small; text-align:left; margin-block-start: 0em;margin-block-end: 0em;">© Réserve Naturelle d’Idjwi-Nyamusisi</p> <img height="400px" alt="Idjwi-reserve"/></section></div> <div class="keymapsteps-map svelte-sibpqi"><!></div></div>`);function $_(s,t){if(new.target)return Ha({component:$_,...s});zo(t,!1);let e=Gi(0);var n={$set:Xa,$on:(M,S)=>Wa(t,M,S)};Ga();var r=Bw(),o=gn(r),l=gn(o),c=vn(l,2),u=vn(c,2),f=vn(gn(u),6);hn(u);var d=vn(u,2),p=vn(gn(d),6);hn(d),hn(o);var _=vn(o,2),v=gn(_);return J_(v,{get step(){return Me(e)}}),hn(_),hn(r),Ma(()=>{co(f,"src","/nyamusisi/image/CD_Idjwi.jpg"),co(p,"src","/nyamusisi/image/Idjwi_reserve.jpg")}),ys("mouseenter",l,()=>Xe(e,0)),ys("mouseenter",c,()=>Xe(e,1)),ys("mouseenter",u,()=>Xe(e,2)),ys("mouseenter",d,()=>Xe(e,3)),Si(s,r),Vo(n)}var kw=wi('<div class="overlay svelte-1n46o8q"><!></div>'),zw=wi(`<div class="three-wrapper svelte-1n46o8q"><div class="model-preview svelte-1n46o8q"><p class="svelte-1n46o8q">La réserve naturelle d’Idjwi-Nyamusisi se distingue par un profil
          altimétrique marqué, composé de collines ondulantes et de reliefs
          montagneux. Cette topographie structure une mosaïque d’écosystèmes,
          favorisant une forte biodiversité et des services écosystémiques
          essentiels.</p> <img height="500px" alt="Aperçu du modèle" class="svelte-1n46o8q"/> <button class="svelte-1n46o8q">Découvrez le modèle interactif</button></div></div>`),Vw=wi(`<div class="layout svelte-1n46o8q"><div class="pre-keymap-trigger svelte-1n46o8q"><div class="header svelte-1n46o8q"><p style="color:#5d5769;padding:0" class="svelte-1n46o8q">Rapport narratif rédigé par le Comité de Gestion de la Réserve Naturelle
        d'Idjwi-Nyamusisi</p></div> <div class="story svelte-1n46o8q"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q">De réserve défunte à paysage vivant</h1> <h2 class="svelte-1n46o8q">Restauration et gestion communautaire de la Réserve forestière de
            Nyamusisi</h2></div> <p style="color:#5d5769;padding-left:1em;padding-right:1em;font-size:0.95; border-bottom:1px solid #0085ca; margin-block-start: 0em;margin-block-end: 0em;" class="svelte-1n46o8q">La présente publication du rapport narratif a pour objectif de
          favoriser l’établissement de partenariats régionaux et internationaux,
          ainsi que de mobiliser des ressources financières en vue de la mise en
          œuvre du Plan Opérationnel Triennal du Comité de Gestion de la Réserve
          Naturelle d’Idjwi-Nyamusisi. Le plan opérationnel triennal a été
          élaboré et approuvé avec le soutien technique et financier de la GIZ,
          en collaboration avec les autorités publiques (Ministère de
          l'Environnement, ICCN, PNKB), les autorités traditionnelles, les
          associations, les villages, les organisations de la société civile,
          les populations autochtones et les groupes sociaux vulnérables.</p></section></div></div> <div class="map-wrapper svelte-1n46o8q" style="margin-top: 1em; margin-bottom:3em"><!></div> <div class="story svelte-1n46o8q"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q">Comment une réserve devient «défunte»</h1> <h2 class="svelte-1n46o8q">L'histoire de la Réserve forestière de Nyamusisi</h2></div> <p class="svelte-1n46o8q">La déforestation de la Réserve Forestière de Nyamusisi n’est ni soudaine
        ni accidentelle. Elle résulte d’un processus long, cumulatif, inscrit
        dans les transformations régionales. La réserve a progressivement perdu
        ses fonctions écologiques (régulation hydrique, habitat de la faune,
        protection des sols) sous l’effet de pressions multiples. À la pression
        démographique due à l'afflux de réfugiés causé par les conflits armés
        dans la région viennent s'ajouter des raisons communes à d'autres études
        de cas en RDC et dans le continent : l'insécurité foncière, la demande
        croissante de terres agricoles en raison de la crise alimentaire et
        l'augmentation de la demande en énergie bois, l'absence de gouvernance
        appropriée de la réserve.</p></section></div> <div><!></div> <!></div>`);function Q_(s,t){if(new.target)return Ha({component:Q_,...s});zo(t,!1);let e=Gi(!1),n=Gi(0);var r={$set:Xa,$on:(M,S)=>Wa(t,M,S)};Ga();var o=Vw(),l=gn(o),c=vn(l,2),u=gn(c);$_(u,{}),hn(c);var f=vn(c,4),d=gn(f);K_(d,{}),hn(f);var p=vn(f,2);{var _=M=>{var S=kw(),x=gn(S);j_(x,{$$events:{close:()=>Xe(e,!1)}}),hn(S),Si(M,S)},v=M=>{var S=zw(),x=gn(S),g=vn(gn(x),2),P=vn(g,2);hn(x),hn(S),Ma(()=>co(g,"src","/nyamusisi/image/model.png")),ys("click",P,()=>Xe(e,!0)),Si(M,S)};qh(p,M=>{Me(e)?M(_):M(v,!1)})}return hn(o),ys("mouseenter",l,()=>Xe(n,0)),Si(s,o),Vo(r)}new Q_({target:document.getElementById("app")});
