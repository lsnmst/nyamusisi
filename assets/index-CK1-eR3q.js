var Jm=Object.defineProperty;var Vh=i=>{throw TypeError(i)};var Qm=(i,e,t)=>e in i?Jm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Jn=(i,e,t)=>Qm(i,typeof e!="symbol"?e+"":e,t),Xl=(i,e,t)=>e.has(i)||Vh("Cannot "+t);var X=(i,e,t)=>(Xl(i,e,"read from private field"),t?t.call(i):e.get(i)),Ke=(i,e,t)=>e.has(i)?Vh("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Ve=(i,e,t,n)=>(Xl(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Qt=(i,e,t)=>(Xl(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const an=2,cl=4,ho=8,Rf=1<<24,ds=16,ui=32,fr=64,Gu=128,jn=512,Xt=1024,vn=2048,Ui=4096,Fn=8192,ws=16384,yl=32768,ar=65536,Hh=1<<17,Cf=1<<18,va=1<<19,Pf=1<<20,es=1<<25,or=32768,Pc=1<<21,Wu=1<<22,Rs=1<<23,Wr=Symbol("$state"),eg=Symbol("legacy props"),tg=Symbol(""),Hr=new class extends Error{constructor(){super(...arguments);Jn(this,"name","StaleReactionError");Jn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Xu=3,pr=8,Lc=!1;var qu=Array.isArray,ng=Array.prototype.indexOf,ia=Array.prototype.includes,Sl=Array.from,ju=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Lf=Object.getOwnPropertyDescriptors,ig=Object.prototype,sg=Array.prototype,Yu=Object.getPrototypeOf,Gh=Object.isExtensible;const Xr=()=>{};function rg(i){return i()}function Ic(i){for(var e=0;e<i.length;e++)i[e]()}function If(){var i,e,t=new Promise((n,s)=>{i=n,e=s});return{promise:t,resolve:i,reject:e}}function Df(i){return i===this.v}function Nf(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Uf(i){return!Nf(i,this.v)}function Ku(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ag(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function og(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lg(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cg(i){throw new Error("https://svelte.dev/e/effect_orphan")}function ug(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hg(){throw new Error("https://svelte.dev/e/hydration_failed")}function dg(i){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function fg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pg(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function gg(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let fo=!1,_g=!1;function vg(){fo=!0}const xg=1,yg=2,Ff=4,Sg=8,Mg=16,bg=1,Eg=2,Of="[",Ml="[!",$u="]",lr={},nn=Symbol(),Tg="http://www.w3.org/1999/xhtml";let Et=null;function sa(i){Et=i}function zt(i,e=!1,t){Et={p:Et,i:!1,c:null,e:null,s:i,x:null,l:fo&&!e?{s:null,u:null,$:[]}:null}}function Vt(i){var e=Et,t=e.e;if(t!==null){e.e=null;for(var n of t)fp(n)}return i!==void 0&&(e.x=i),e.i=!0,Et=e.p,i??{}}function po(){return!fo||Et!==null&&Et.l===null}let qs=[];function Bf(){var i=qs;qs=[],Ic(i)}function ss(i){if(qs.length===0&&!Ya){var e=qs;queueMicrotask(()=>{e===qs&&Bf()})}qs.push(i)}function Ag(){for(;qs.length>0;)Bf()}function mo(i){console.warn("https://svelte.dev/e/hydration_mismatch")}function wg(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let lt=!1;function ts(i){lt=i}let Qe;function gn(i){if(i===null)throw mo(),lr;return Qe=i}function cr(){return gn(hi(Qe))}function k(i){if(lt){if(hi(Qe)!==null)throw mo(),lr;Qe=i}}function xa(i=1){if(lt){for(var e=i,t=Qe;e--;)t=hi(t);Qe=t}}function ul(i=!0){for(var e=0,t=Qe;;){if(t.nodeType===pr){var n=t.data;if(n===$u){if(e===0)return t;e-=1}else(n===Of||n===Ml)&&(e+=1)}var s=hi(t);i&&t.remove(),t=s}}function kf(i){if(!i||i.nodeType!==pr)throw mo(),lr;return i.data}function Va(i){if(typeof i!="object"||i===null||Wr in i)return i;const e=Yu(i);if(e!==ig&&e!==sg)return i;var t=new Map,n=qu(i),s=ps(0),r=ir,a=o=>{if(ir===r)return o();var l=Je,c=ir;$n(null),jh(r);var u=o();return $n(l),jh(c),u};return n&&t.set("length",ps(i.length)),new Proxy(i,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&fg();var u=t.get(l);return u===void 0?u=a(()=>{var h=ps(c.value);return t.set(l,h),h}):Lt(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>ps(nn));t.set(l,u),Ka(s)}}else Lt(c,nn),Ka(s);return!0},get(o,l,c){var f;if(l===Wr)return i;var u=t.get(l),h=l in o;if(u===void 0&&(!h||(f=ja(o,l))!=null&&f.writable)&&(u=a(()=>{var g=Va(h?o[l]:nn),_=ps(g);return _}),t.set(l,u)),u!==void 0){var d=G(u);return d===nn?void 0:d}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=G(u))}else if(c===void 0){var h=t.get(l),d=h==null?void 0:h.v;if(h!==void 0&&d!==nn)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){var d;if(l===Wr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==nn||Reflect.has(o,l);if(c!==void 0||ct!==null&&(!u||(d=ja(o,l))!=null&&d.writable)){c===void 0&&(c=a(()=>{var f=u?Va(o[l]):nn,g=ps(f);return g}),t.set(l,c));var h=G(c);if(h===nn)return!1}return u},set(o,l,c,u){var E;var h=t.get(l),d=l in o;if(n&&l==="length")for(var f=c;f<h.v;f+=1){var g=t.get(f+"");g!==void 0?Lt(g,nn):f in o&&(g=a(()=>ps(nn)),t.set(f+"",g))}if(h===void 0)(!d||(E=ja(o,l))!=null&&E.writable)&&(h=a(()=>ps(void 0)),Lt(h,Va(c)),t.set(l,h));else{d=h.v!==nn;var _=a(()=>Va(c));Lt(h,_)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m!=null&&m.set&&m.set.call(u,c),!d){if(n&&typeof l=="string"){var p=t.get("length"),M=Number(l);Number.isInteger(M)&&M>=p.v&&Lt(p,M+1)}Ka(s)}return!0},ownKeys(o){G(s);var l=Reflect.ownKeys(o).filter(h=>{var d=t.get(h);return d===void 0||d.v!==nn});for(var[c,u]of t)u.v!==nn&&!(c in o)&&l.push(c);return l},setPrototypeOf(){pg()}})}var Wh,zf,Vf,Hf;function Dc(){if(Wh===void 0){Wh=window,zf=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;Vf=ja(e,"firstChild").get,Hf=ja(e,"nextSibling").get,Gh(i)&&(i.__click=void 0,i.__className=void 0,i.__attributes=null,i.__style=void 0,i.__e=void 0),Gh(t)&&(t.__t=void 0)}}function Yn(i=""){return document.createTextNode(i)}function ai(i){return Vf.call(i)}function hi(i){return Hf.call(i)}function W(i,e){if(!lt)return ai(i);var t=ai(Qe);if(t===null)t=Qe.appendChild(Yn());else if(e&&t.nodeType!==Xu){var n=Yn();return t==null||t.before(n),gn(n),n}return gn(t),t}function go(i,e=!1){if(!lt){var t=ai(i);return t instanceof Comment&&t.data===""?hi(t):t}if(e&&(Qe==null?void 0:Qe.nodeType)!==Xu){var n=Yn();return Qe==null||Qe.before(n),gn(n),n}return Qe}function ce(i,e=1,t=!1){let n=lt?Qe:i;for(var s;e--;)s=n,n=hi(n);if(!lt)return n;if(t&&(n==null?void 0:n.nodeType)!==Xu){var r=Yn();return n===null?s==null||s.after(r):n.before(r),gn(r),r}return gn(n),n}function Gf(i){i.textContent=""}function Wf(){return!1}function Xf(i){var e=ct;if(e===null)return Je.f|=Rs,i;if((e.f&yl)===0){if((e.f&Gu)===0)throw i;e.b.error(i)}else ra(i,e)}function ra(i,e){for(;e!==null;){if((e.f&Gu)!==0)try{e.b.error(i);return}catch(t){i=t}e=e.parent}throw i}const Rg=-7169;function kt(i,e){i.f=i.f&Rg|e}function Zu(i){(i.f&jn)!==0||i.deps===null?kt(i,Xt):kt(i,Ui)}function qf(i){if(i!==null)for(const e of i)(e.f&an)===0||(e.f&or)===0||(e.f^=or,qf(e.deps))}function jf(i,e,t){(i.f&vn)!==0?e.add(i):(i.f&Ui)!==0&&t.add(i),qf(i.deps),kt(i,Xt)}const To=new Set;let ot=null,sn=null,Nn=[],bl=null,Nc=!1,Ya=!1;var $r,Zr,Zs,Jr,ao,oo,Js,Qr,Ni,Uc,Fc,Yf;const Th=class Th{constructor(){Ke(this,Ni);Jn(this,"committed",!1);Jn(this,"current",new Map);Jn(this,"previous",new Map);Ke(this,$r,new Set);Ke(this,Zr,new Set);Ke(this,Zs,0);Ke(this,Jr,0);Ke(this,ao,null);Ke(this,oo,new Set);Ke(this,Js,new Set);Jn(this,"skipped_effects",new Set);Jn(this,"is_fork",!1);Ke(this,Qr,!1)}is_deferred(){return this.is_fork||X(this,Jr)>0}process(e){var s;Nn=[],this.apply();var t=[],n=[];for(const r of e)Qt(this,Ni,Uc).call(this,r,t,n);if(this.is_deferred()){Qt(this,Ni,Fc).call(this,n),Qt(this,Ni,Fc).call(this,t);for(const r of this.skipped_effects)Jf(r)}else{for(const r of X(this,$r))r();X(this,$r).clear(),X(this,Zs)===0&&Qt(this,Ni,Yf).call(this),ot=null,Xh(n),Xh(t),(s=X(this,ao))==null||s.resolve()}sn=null}capture(e,t){t!==nn&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&Rs)===0&&(this.current.set(e,e.v),sn==null||sn.set(e,e.v))}activate(){ot=this,this.apply()}deactivate(){ot===this&&(ot=null,sn=null)}flush(){if(this.activate(),Nn.length>0){if(Kf(),ot!==null&&ot!==this)return}else X(this,Zs)===0&&this.process([]);this.deactivate()}discard(){for(const e of X(this,Zr))e(this);X(this,Zr).clear()}increment(e){Ve(this,Zs,X(this,Zs)+1),e&&Ve(this,Jr,X(this,Jr)+1)}decrement(e){Ve(this,Zs,X(this,Zs)-1),e&&Ve(this,Jr,X(this,Jr)-1),!X(this,Qr)&&(Ve(this,Qr,!0),ss(()=>{Ve(this,Qr,!1),this.is_deferred()?Nn.length>0&&this.flush():this.revive()}))}revive(){for(const e of X(this,oo))X(this,Js).delete(e),kt(e,vn),ls(e);for(const e of X(this,Js))kt(e,Ui),ls(e);this.flush()}oncommit(e){X(this,$r).add(e)}ondiscard(e){X(this,Zr).add(e)}settled(){return(X(this,ao)??Ve(this,ao,If())).promise}static ensure(){if(ot===null){const e=ot=new Th;To.add(ot),Ya||ss(()=>{ot===e&&e.flush()})}return ot}apply(){}};$r=new WeakMap,Zr=new WeakMap,Zs=new WeakMap,Jr=new WeakMap,ao=new WeakMap,oo=new WeakMap,Js=new WeakMap,Qr=new WeakMap,Ni=new WeakSet,Uc=function(e,t,n){e.f^=Xt;for(var s=e.first,r=null;s!==null;){var a=s.f,o=(a&(ui|fr))!==0,l=o&&(a&Xt)!==0,c=l||(a&Fn)!==0||this.skipped_effects.has(s);if(!c&&s.fn!==null){o?s.f^=Xt:r!==null&&(a&(cl|ho|Rf))!==0?r.b.defer_effect(s):(a&cl)!==0?t.push(s):ya(s)&&((a&ds)!==0&&X(this,Js).add(s),oa(s));var u=s.first;if(u!==null){s=u;continue}}var h=s.parent;for(s=s.next;s===null&&h!==null;)h===r&&(r=null),s=h.next,h=h.parent}},Fc=function(e){for(var t=0;t<e.length;t+=1)jf(e[t],X(this,oo),X(this,Js))},Yf=function(){var s;if(To.size>1){this.previous.clear();var e=sn,t=!0;for(const r of To){if(r===this){t=!1;continue}const a=[];for(const[l,c]of this.current){if(r.current.has(l))if(t&&c!==r.current.get(l))r.current.set(l,c);else continue;a.push(l)}if(a.length===0)continue;const o=[...r.current.keys()].filter(l=>!this.current.has(l));if(o.length>0){var n=Nn;Nn=[];const l=new Set,c=new Map;for(const u of a)$f(u,o,l,c);if(Nn.length>0){ot=r,r.apply();for(const u of Nn)Qt(s=r,Ni,Uc).call(s,u,[],[]);r.deactivate()}Nn=n}}ot=null,sn=e}this.committed=!0,To.delete(this)};let Cs=Th;function Cg(i){var e=Ya;Ya=!0;try{for(var t;;){if(Ag(),Nn.length===0&&(ot==null||ot.flush(),Nn.length===0))return bl=null,t;Kf()}}finally{Ya=e}}function Kf(){Nc=!0;var i=null;try{for(var e=0;Nn.length>0;){var t=Cs.ensure();if(e++>1e3){var n,s;Pg()}t.process(Nn),Ps.clear()}}finally{Nc=!1,bl=null}}function Pg(){try{ug()}catch(i){ra(i,bl)}}let ni=null;function Xh(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(ws|Fn))===0&&ya(n)&&(ni=new Set,oa(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?_p(n):n.fn=null),(ni==null?void 0:ni.size)>0)){Ps.clear();for(const s of ni){if((s.f&(ws|Fn))!==0)continue;const r=[s];let a=s.parent;for(;a!==null;)ni.has(a)&&(ni.delete(a),r.push(a)),a=a.parent;for(let o=r.length-1;o>=0;o--){const l=r[o];(l.f&(ws|Fn))===0&&oa(l)}}ni.clear()}}ni=null}}function $f(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const s of i.reactions){const r=s.f;(r&an)!==0?$f(s,e,t,n):(r&(Wu|ds))!==0&&(r&vn)===0&&Zf(s,e,n)&&(kt(s,vn),ls(s))}}function Zf(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const s of i.deps){if(ia.call(e,s))return!0;if((s.f&an)!==0&&Zf(s,e,t))return t.set(s,!0),!0}return t.set(i,!1),!1}function ls(i){for(var e=bl=i;e.parent!==null;){e=e.parent;var t=e.f;if(Nc&&e===ct&&(t&ds)!==0&&(t&Cf)===0)return;if((t&(fr|ui))!==0){if((t&Xt)===0)return;e.f^=Xt}}Nn.push(e)}function Jf(i){if(!((i.f&ui)!==0&&(i.f&Xt)!==0)){kt(i,Xt);for(var e=i.first;e!==null;)Jf(e),e=e.next}}function Lg(i){let e=0,t=ur(0),n;return()=>{th()&&(G(t),El(()=>(e===0&&(n=Re(()=>i(()=>Ka(t)))),e+=1,()=>{ss(()=>{e-=1,e===0&&(n==null||n(),n=void 0,Ka(t))})})))}}var Ig=ar|va|Gu;function Dg(i,e,t){new Ng(i,e,t)}var In,lo,vi,Qs,xi,Hn,Mn,yi,$i,Ts,er,Zi,ea,tr,ta,na,Ji,vl,Bt,Qf,ep,Oc,Qo,el,Bc;class Ng{constructor(e,t,n){Ke(this,Bt);Jn(this,"parent");Jn(this,"is_pending",!1);Ke(this,In);Ke(this,lo,lt?Qe:null);Ke(this,vi);Ke(this,Qs);Ke(this,xi);Ke(this,Hn,null);Ke(this,Mn,null);Ke(this,yi,null);Ke(this,$i,null);Ke(this,Ts,null);Ke(this,er,0);Ke(this,Zi,0);Ke(this,ea,!1);Ke(this,tr,!1);Ke(this,ta,new Set);Ke(this,na,new Set);Ke(this,Ji,null);Ke(this,vl,Lg(()=>(Ve(this,Ji,ur(X(this,er))),()=>{Ve(this,Ji,null)})));Ve(this,In,e),Ve(this,vi,t),Ve(this,Qs,n),this.parent=ct.b,this.is_pending=!!X(this,vi).pending,Ve(this,xi,Tl(()=>{if(ct.b=this,lt){const r=X(this,lo);cr(),r.nodeType===pr&&r.data===Ml?Qt(this,Bt,ep).call(this):(Qt(this,Bt,Qf).call(this),X(this,Zi)===0&&(this.is_pending=!1))}else{var s=Qt(this,Bt,Oc).call(this);try{Ve(this,Hn,Wn(()=>n(s)))}catch(r){this.error(r)}X(this,Zi)>0?Qt(this,Bt,el).call(this):this.is_pending=!1}return()=>{var r;(r=X(this,Ts))==null||r.remove()}},Ig)),lt&&Ve(this,In,Qe)}defer_effect(e){jf(e,X(this,ta),X(this,na))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!X(this,vi).pending}update_pending_count(e){Qt(this,Bt,Bc).call(this,e),Ve(this,er,X(this,er)+e),!(!X(this,Ji)||X(this,ea))&&(Ve(this,ea,!0),ss(()=>{Ve(this,ea,!1),X(this,Ji)&&aa(X(this,Ji),X(this,er))}))}get_effect_pending(){return X(this,vl).call(this),G(X(this,Ji))}error(e){var t=X(this,vi).onerror;let n=X(this,vi).failed;if(X(this,tr)||!t&&!n)throw e;X(this,Hn)&&(Tn(X(this,Hn)),Ve(this,Hn,null)),X(this,Mn)&&(Tn(X(this,Mn)),Ve(this,Mn,null)),X(this,yi)&&(Tn(X(this,yi)),Ve(this,yi,null)),lt&&(gn(X(this,lo)),xa(),gn(ul()));var s=!1,r=!1;const a=()=>{if(s){wg();return}s=!0,r&&gg(),Cs.ensure(),Ve(this,er,0),X(this,yi)!==null&&sr(X(this,yi),()=>{Ve(this,yi,null)}),this.is_pending=this.has_pending_snippet(),Ve(this,Hn,Qt(this,Bt,Qo).call(this,()=>(Ve(this,tr,!1),Wn(()=>X(this,Qs).call(this,X(this,In)))))),X(this,Zi)>0?Qt(this,Bt,el).call(this):this.is_pending=!1};ss(()=>{try{r=!0,t==null||t(e,a),r=!1}catch(o){ra(o,X(this,xi)&&X(this,xi).parent)}n&&Ve(this,yi,Qt(this,Bt,Qo).call(this,()=>{Cs.ensure(),Ve(this,tr,!0);try{return Wn(()=>{n(X(this,In),()=>e,()=>a)})}catch(o){return ra(o,X(this,xi).parent),null}finally{Ve(this,tr,!1)}}))})}}In=new WeakMap,lo=new WeakMap,vi=new WeakMap,Qs=new WeakMap,xi=new WeakMap,Hn=new WeakMap,Mn=new WeakMap,yi=new WeakMap,$i=new WeakMap,Ts=new WeakMap,er=new WeakMap,Zi=new WeakMap,ea=new WeakMap,tr=new WeakMap,ta=new WeakMap,na=new WeakMap,Ji=new WeakMap,vl=new WeakMap,Bt=new WeakSet,Qf=function(){try{Ve(this,Hn,Wn(()=>X(this,Qs).call(this,X(this,In))))}catch(e){this.error(e)}},ep=function(){const e=X(this,vi).pending;e&&(Ve(this,Mn,Wn(()=>e(X(this,In)))),ss(()=>{var t=Qt(this,Bt,Oc).call(this);Ve(this,Hn,Qt(this,Bt,Qo).call(this,()=>(Cs.ensure(),Wn(()=>X(this,Qs).call(this,t))))),X(this,Zi)>0?Qt(this,Bt,el).call(this):(sr(X(this,Mn),()=>{Ve(this,Mn,null)}),this.is_pending=!1)}))},Oc=function(){var e=X(this,In);return this.is_pending&&(Ve(this,Ts,Yn()),X(this,In).before(X(this,Ts)),e=X(this,Ts)),e},Qo=function(e){var t=ct,n=Je,s=Et;Ci(X(this,xi)),$n(X(this,xi)),sa(X(this,xi).ctx);try{return e()}catch(r){return Xf(r),null}finally{Ci(t),$n(n),sa(s)}},el=function(){const e=X(this,vi).pending;X(this,Hn)!==null&&(Ve(this,$i,document.createDocumentFragment()),X(this,$i).append(X(this,Ts)),yp(X(this,Hn),X(this,$i))),X(this,Mn)===null&&Ve(this,Mn,Wn(()=>e(X(this,In))))},Bc=function(e){var t;if(!this.has_pending_snippet()){this.parent&&Qt(t=this.parent,Bt,Bc).call(t,e);return}if(Ve(this,Zi,X(this,Zi)+e),X(this,Zi)===0){this.is_pending=!1;for(const n of X(this,ta))kt(n,vn),ls(n);for(const n of X(this,na))kt(n,Ui),ls(n);X(this,ta).clear(),X(this,na).clear(),X(this,Mn)&&sr(X(this,Mn),()=>{Ve(this,Mn,null)}),X(this,$i)&&(X(this,In).before(X(this,$i)),Ve(this,$i,null))}};function Ug(i,e,t,n){const s=po()?Ju:tp;var r=i.filter(d=>!d.settled);if(t.length===0&&r.length===0){n(e.map(s));return}var a=ot,o=ct,l=Fg(),c=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(d=>d.promise)):null;function u(d){l();try{n(d)}catch(f){(o.f&ws)===0&&ra(f,o)}a==null||a.deactivate(),kc()}if(t.length===0){c.then(()=>u(e.map(s)));return}function h(){l(),Promise.all(t.map(d=>Og(d))).then(d=>u([...e.map(s),...d])).catch(d=>ra(d,o))}c?c.then(h):h()}function Fg(){var i=ct,e=Je,t=Et,n=ot;return function(r=!0){Ci(i),$n(e),sa(t),r&&(n==null||n.activate())}}function kc(){Ci(null),$n(null),sa(null)}function Ju(i){var e=an|vn,t=Je!==null&&(Je.f&an)!==0?Je:null;return ct!==null&&(ct.f|=va),{ctx:Et,deps:null,effects:null,equals:Df,f:e,fn:i,reactions:null,rv:0,v:nn,wv:0,parent:t??ct,ac:null}}function Og(i,e,t){let n=ct;n===null&&ag();var s=n.b,r=void 0,a=ur(nn),o=!Je,l=new Map;return $g(()=>{var f;var c=If();r=c.promise;try{Promise.resolve(i()).then(c.resolve,c.reject).then(()=>{u===ot&&u.committed&&u.deactivate(),kc()})}catch(g){c.reject(g),kc()}var u=ot;if(o){var h=s.is_rendered();s.update_pending_count(1),u.increment(h),(f=l.get(u))==null||f.reject(Hr),l.delete(u),l.set(u,c)}const d=(g,_=void 0)=>{if(u.activate(),_)_!==Hr&&(a.f|=Rs,aa(a,_));else{(a.f&Rs)!==0&&(a.f^=Rs),aa(a,g);for(const[m,p]of l){if(l.delete(m),m===u)break;p.reject(Hr)}}o&&(s.update_pending_count(-1),u.decrement(h))};c.promise.then(d,g=>d(null,g||"unknown"))}),nh(()=>{for(const c of l.values())c.reject(Hr)}),new Promise(c=>{function u(h){function d(){h===r?c(a):u(r)}h.then(d,d)}u(r)})}function tp(i){const e=Ju(i);return e.equals=Uf,e}function np(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)Tn(e[t])}}function Bg(i){for(var e=i.parent;e!==null;){if((e.f&an)===0)return(e.f&ws)===0?e:null;e=e.parent}return null}function Qu(i){var e,t=ct;Ci(Bg(i));try{i.f&=~or,np(i),e=cp(i)}finally{Ci(t)}return e}function ip(i){var e=Qu(i);if(!i.equals(e)&&(i.wv=op(),(!(ot!=null&&ot.is_fork)||i.deps===null)&&(i.v=e,i.deps===null))){kt(i,Xt);return}hr||(sn!==null?(th()||ot!=null&&ot.is_fork)&&sn.set(i,e):Zu(i))}let zc=new Set;const Ps=new Map;let sp=!1;function ur(i,e){var t={f:0,v:i,reactions:null,equals:Df,rv:0,wv:0};return t}function ps(i,e){const t=ur(i);return zg(t),t}function En(i,e=!1,t=!0){var s;const n=ur(i);return e||(n.equals=Uf),fo&&t&&Et!==null&&Et.l!==null&&((s=Et.l).s??(s.s=[])).push(n),n}function Lt(i,e,t=!1){Je!==null&&(!oi||(Je.f&Hh)!==0)&&po()&&(Je.f&(an|ds|Wu|Hh))!==0&&(Kn===null||!ia.call(Kn,i))&&mg();let n=t?Va(e):e;return aa(i,n)}function aa(i,e){if(!i.equals(e)){var t=i.v;hr?Ps.set(i,e):Ps.set(i,t),i.v=e;var n=Cs.ensure();if(n.capture(i,t),(i.f&an)!==0){const s=i;(i.f&vn)!==0&&Qu(s),Zu(s)}i.wv=op(),rp(i,vn),po()&&ct!==null&&(ct.f&Xt)!==0&&(ct.f&(ui|fr))===0&&(zn===null?Vg([i]):zn.push(i)),!n.is_fork&&zc.size>0&&!sp&&kg()}return e}function kg(){sp=!1;for(const i of zc)(i.f&Xt)!==0&&kt(i,Ui),ya(i)&&oa(i);zc.clear()}function Ka(i){Lt(i,i.v+1)}function rp(i,e){var t=i.reactions;if(t!==null)for(var n=po(),s=t.length,r=0;r<s;r++){var a=t[r],o=a.f;if(!(!n&&a===ct)){var l=(o&vn)===0;if(l&&kt(a,e),(o&an)!==0){var c=a;sn==null||sn.delete(c),(o&or)===0&&(o&jn&&(a.f|=or),rp(c,Ui))}else l&&((o&ds)!==0&&ni!==null&&ni.add(a),ls(a))}}}function eh(i){var e=Je,t=ct;$n(null),Ci(null);try{return i()}finally{$n(e),Ci(t)}}let tl=!1,hr=!1;function qh(i){hr=i}let Je=null,oi=!1;function $n(i){Je=i}let ct=null;function Ci(i){ct=i}let Kn=null;function zg(i){Je!==null&&(Kn===null?Kn=[i]:Kn.push(i))}let bn=null,Ln=0,zn=null;function Vg(i){zn=i}let ap=1,js=0,ir=js;function jh(i){ir=i}function op(){return++ap}function ya(i){var e=i.f;if((e&vn)!==0)return!0;if(e&an&&(i.f&=~or),(e&Ui)!==0){for(var t=i.deps,n=t.length,s=0;s<n;s++){var r=t[s];if(ya(r)&&ip(r),r.wv>i.wv)return!0}(e&jn)!==0&&sn===null&&kt(i,Xt)}return!1}function lp(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Kn!==null&&ia.call(Kn,i)))for(var s=0;s<n.length;s++){var r=n[s];(r.f&an)!==0?lp(r,e,!1):e===r&&(t?kt(r,vn):(r.f&Xt)!==0&&kt(r,Ui),ls(r))}}function cp(i){var _;var e=bn,t=Ln,n=zn,s=Je,r=Kn,a=Et,o=oi,l=ir,c=i.f;bn=null,Ln=0,zn=null,Je=(c&(ui|fr))===0?i:null,Kn=null,sa(i.ctx),oi=!1,ir=++js,i.ac!==null&&(eh(()=>{i.ac.abort(Hr)}),i.ac=null);try{i.f|=Pc;var u=i.fn,h=u(),d=i.deps,f=ot==null?void 0:ot.is_fork;if(bn!==null){var g;if(f||hl(i,Ln),d!==null&&Ln>0)for(d.length=Ln+bn.length,g=0;g<bn.length;g++)d[Ln+g]=bn[g];else i.deps=d=bn;if(th()&&(i.f&jn)!==0)for(g=Ln;g<d.length;g++)((_=d[g]).reactions??(_.reactions=[])).push(i)}else!f&&d!==null&&Ln<d.length&&(hl(i,Ln),d.length=Ln);if(po()&&zn!==null&&!oi&&d!==null&&(i.f&(an|Ui|vn))===0)for(g=0;g<zn.length;g++)lp(zn[g],i);if(s!==null&&s!==i){if(js++,s.deps!==null)for(let m=0;m<t;m+=1)s.deps[m].rv=js;if(e!==null)for(const m of e)m.rv=js;zn!==null&&(n===null?n=zn:n.push(...zn))}return(i.f&Rs)!==0&&(i.f^=Rs),h}catch(m){return Xf(m)}finally{i.f^=Pc,bn=e,Ln=t,zn=n,Je=s,Kn=r,sa(a),oi=o,ir=l}}function Hg(i,e){let t=e.reactions;if(t!==null){var n=ng.call(t,i);if(n!==-1){var s=t.length-1;s===0?t=e.reactions=null:(t[n]=t[s],t.pop())}}if(t===null&&(e.f&an)!==0&&(bn===null||!ia.call(bn,e))){var r=e;(r.f&jn)!==0&&(r.f^=jn,r.f&=~or),Zu(r),np(r),hl(r,0)}}function hl(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Hg(i,t[n])}function oa(i){var e=i.f;if((e&ws)===0){kt(i,Xt);var t=ct,n=tl;ct=i,tl=!0;try{(e&(ds|Rf))!==0?Zg(i):mp(i),pp(i);var s=cp(i);i.teardown=typeof s=="function"?s:null,i.wv=ap;var r;Lc&&_g&&(i.f&vn)!==0&&i.deps}finally{tl=n,ct=t}}}function G(i){var e=i.f,t=(e&an)!==0;if(Je!==null&&!oi){var n=ct!==null&&(ct.f&ws)!==0;if(!n&&(Kn===null||!ia.call(Kn,i))){var s=Je.deps;if((Je.f&Pc)!==0)i.rv<js&&(i.rv=js,bn===null&&s!==null&&s[Ln]===i?Ln++:bn===null?bn=[i]:bn.push(i));else{(Je.deps??(Je.deps=[])).push(i);var r=i.reactions;r===null?i.reactions=[Je]:ia.call(r,Je)||r.push(Je)}}}if(hr&&Ps.has(i))return Ps.get(i);if(t){var a=i;if(hr){var o=a.v;return((a.f&Xt)===0&&a.reactions!==null||hp(a))&&(o=Qu(a)),Ps.set(a,o),o}var l=(a.f&jn)===0&&!oi&&Je!==null&&(tl||(Je.f&jn)!==0),c=a.deps===null;ya(a)&&(l&&(a.f|=jn),ip(a)),l&&!c&&up(a)}if(sn!=null&&sn.has(i))return sn.get(i);if((i.f&Rs)!==0)throw i.v;return i.v}function up(i){if(i.deps!==null){i.f|=jn;for(const e of i.deps)(e.reactions??(e.reactions=[])).push(i),(e.f&an)!==0&&(e.f&jn)===0&&up(e)}}function hp(i){if(i.v===nn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Ps.has(e)||(e.f&an)!==0&&hp(e))return!0;return!1}function Re(i){var e=oi;try{return oi=!0,i()}finally{oi=e}}function Gg(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(Wr in i)Vc(i);else if(!Array.isArray(i))for(let e in i){const t=i[e];typeof t=="object"&&t&&Wr in t&&Vc(t)}}}function Vc(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let n in i)try{Vc(i[n],e)}catch{}const t=Yu(i);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=Lf(t);for(let s in n){const r=n[s].get;if(r)try{r.call(i)}catch{}}}}}function dp(i){ct===null&&(Je===null&&cg(),lg()),hr&&og()}function Wg(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Fi(i,e,t){var n=ct;n!==null&&(n.f&Fn)!==0&&(i|=Fn);var s={ctx:Et,deps:null,nodes:null,f:i|vn|jn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{oa(s),s.f|=yl}catch(o){throw Tn(s),o}else e!==null&&ls(s);var r=s;if(t&&r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&va)===0&&(r=r.first,(i&ds)!==0&&(i&ar)!==0&&r!==null&&(r.f|=ar)),r!==null&&(r.parent=n,n!==null&&Wg(r,n),Je!==null&&(Je.f&an)!==0&&(i&fr)===0)){var a=Je;(a.effects??(a.effects=[])).push(r)}return s}function th(){return Je!==null&&!oi}function nh(i){const e=Fi(ho,null,!1);return kt(e,Xt),e.teardown=i,e}function Hc(i){dp();var e=ct.f,t=!Je&&(e&ui)!==0&&(e&yl)===0;if(t){var n=Et;(n.e??(n.e=[])).push(i)}else return fp(i)}function fp(i){return Fi(cl|Pf,i,!1)}function Xg(i){return dp(),Fi(ho|Pf,i,!0)}function qg(i){Cs.ensure();const e=Fi(fr|va,i,!0);return(t={})=>new Promise(n=>{t.outro?sr(e,()=>{Tn(e),n(void 0)}):(Tn(e),n(void 0))})}function jg(i){return Fi(cl,i,!1)}function Yg(i,e){var t=Et,n={effect:null,ran:!1,deps:i};t.l.$.push(n),n.effect=El(()=>{i(),!n.ran&&(n.ran=!0,Re(e))})}function Kg(){var i=Et;El(()=>{for(var e of i.l.$){e.deps();var t=e.effect;(t.f&Xt)!==0&&t.deps!==null&&kt(t,Ui),ya(t)&&oa(t),e.ran=!1}})}function $g(i){return Fi(Wu|va,i,!0)}function El(i,e=0){return Fi(ho|e,i,!0)}function It(i,e=[],t=[],n=[]){Ug(n,e,t,s=>{Fi(ho,()=>i(...s.map(G)),!0)})}function Tl(i,e=0){var t=Fi(ds|e,i,!0);return t}function Wn(i){return Fi(ui|va,i,!0)}function pp(i){var e=i.teardown;if(e!==null){const t=hr,n=Je;qh(!0),$n(null);try{e.call(null)}finally{qh(t),$n(n)}}}function mp(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const s=t.ac;s!==null&&eh(()=>{s.abort(Hr)});var n=t.next;(t.f&fr)!==0?t.parent=null:Tn(t,e),t=n}}function Zg(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&ui)===0&&Tn(e),e=t}}function Tn(i,e=!0){var t=!1;(e||(i.f&Cf)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(gp(i.nodes.start,i.nodes.end),t=!0),mp(i,e&&!t),hl(i,0),kt(i,ws);var n=i.nodes&&i.nodes.t;if(n!==null)for(const r of n)r.stop();pp(i);var s=i.parent;s!==null&&s.first!==null&&_p(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=null}function gp(i,e){for(;i!==null;){var t=i===e?null:hi(i);i.remove(),i=t}}function _p(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function sr(i,e,t=!0){var n=[];vp(i,n,!0);var s=()=>{t&&Tn(i),e&&e()},r=n.length;if(r>0){var a=()=>--r||s();for(var o of n)o.out(a)}else s()}function vp(i,e,t){if((i.f&Fn)===0){i.f^=Fn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var s=i.first;s!==null;){var r=s.next,a=(s.f&ar)!==0||(s.f&ui)!==0&&(i.f&ds)!==0;vp(s,e,a?t:!1),s=r}}}function ih(i){xp(i,!0)}function xp(i,e){if((i.f&Fn)!==0){i.f^=Fn,(i.f&Xt)===0&&(kt(i,vn),ls(i));for(var t=i.first;t!==null;){var n=t.next,s=(t.f&ar)!==0||(t.f&ui)!==0;xp(t,s?e:!1),t=n}var r=i.nodes&&i.nodes.t;if(r!==null)for(const a of r)(a.is_global||e)&&a.in()}}function yp(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var s=t===n?null:hi(t);e.append(t),t=s}}const Jg=new Set,Yh=new Set;function Qg(i,e,t,n={}){function s(r){if(n.capture||Ha.call(e,r),!r.cancelBubble)return eh(()=>t==null?void 0:t.call(this,r))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?ss(()=>{e.addEventListener(i,s,n)}):e.addEventListener(i,s,n),s}function Ls(i,e,t,n,s){var r={capture:n,passive:s},a=Qg(i,e,t,r);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&nh(()=>{e.removeEventListener(i,a,r)})}let Kh=null;function Ha(i){var m;var e=this,t=e.ownerDocument,n=i.type,s=((m=i.composedPath)==null?void 0:m.call(i))||[],r=s[0]||i.target;Kh=i;var a=0,o=Kh===i&&i.__root;if(o){var l=s.indexOf(o);if(l!==-1&&(e===document||e===window)){i.__root=e;return}var c=s.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(r=s[a]||i.target,r!==e){ju(i,"currentTarget",{configurable:!0,get(){return r||t}});var u=Je,h=ct;$n(null),Ci(null);try{for(var d,f=[];r!==null;){var g=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+n];_!=null&&(!r.disabled||i.target===r)&&_.call(r,i)}catch(p){d?f.push(p):d=p}if(i.cancelBubble||g===e||g===null)break;r=g}if(d){for(let p of f)queueMicrotask(()=>{throw p});throw d}}finally{i.__root=e,delete i.currentTarget,$n(u),Ci(h)}}}function Sp(i){var e=document.createElement("template");return e.innerHTML=i.replaceAll("<!>","<!---->"),e.content}function Is(i,e){var t=ct;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function Mt(i,e){var t=(e&bg)!==0,n=(e&Eg)!==0,s,r=!i.startsWith("<!>");return()=>{if(lt)return Is(Qe,null),Qe;s===void 0&&(s=Sp(r?i:"<!>"+i),t||(s=ai(s)));var a=n||zf?document.importNode(s,!0):s.cloneNode(!0);if(t){var o=ai(a),l=a.lastChild;Is(o,l)}else Is(a,a);return a}}function Al(){if(lt)return Is(Qe,null),Qe;var i=document.createDocumentFragment(),e=document.createComment(""),t=Yn();return i.append(e,t),Is(e,t),i}function at(i,e){if(lt){var t=ct;((t.f&yl)===0||t.nodes.end===null)&&(t.nodes.end=Qe),cr();return}i!==null&&i.before(e)}const e_=["touchstart","touchmove"];function t_(i){return e_.includes(i)}function wt(i,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(i.__t??(i.__t=i.nodeValue))&&(i.__t=t,i.nodeValue=t+"")}function Mp(i,e){return bp(i,e)}function n_(i,e){Dc(),e.intro=e.intro??!1;const t=e.target,n=lt,s=Qe;try{for(var r=ai(t);r&&(r.nodeType!==pr||r.data!==Of);)r=hi(r);if(!r)throw lr;ts(!0),gn(r);const a=bp(i,{...e,anchor:r});return ts(!1),a}catch(a){if(a instanceof Error&&a.message.split(`
`).some(o=>o.startsWith("https://svelte.dev/e/")))throw a;return a!==lr&&console.warn("Failed to hydrate: ",a),e.recover===!1&&hg(),Dc(),Gf(t),ts(!1),Mp(i,e)}finally{ts(n),gn(s)}}const Er=new Map;function bp(i,{target:e,anchor:t,props:n={},events:s,context:r,intro:a=!0}){Dc();var o=new Set,l=h=>{for(var d=0;d<h.length;d++){var f=h[d];if(!o.has(f)){o.add(f);var g=t_(f);e.addEventListener(f,Ha,{passive:g});var _=Er.get(f);_===void 0?(document.addEventListener(f,Ha,{passive:g}),Er.set(f,1)):Er.set(f,_+1)}}};l(Sl(Jg)),Yh.add(l);var c=void 0,u=qg(()=>{var h=t??e.appendChild(Yn());return Dg(h,{pending:()=>{}},d=>{if(r){zt({});var f=Et;f.c=r}if(s&&(n.$$events=s),lt&&Is(d,null),c=i(d,n)||{},lt&&(ct.nodes.end=Qe,Qe===null||Qe.nodeType!==pr||Qe.data!==$u))throw mo(),lr;r&&Vt()}),()=>{var g;for(var d of o){e.removeEventListener(d,Ha);var f=Er.get(d);--f===0?(document.removeEventListener(d,Ha),Er.delete(d)):Er.set(d,f)}Yh.delete(l),h!==t&&((g=h.parentNode)==null||g.removeChild(h))}});return Gc.set(c,u),c}let Gc=new WeakMap;function i_(i,e){const t=Gc.get(i);return t?(Gc.delete(i),t(e)):Promise.resolve()}function Yt(i){return new s_(i)}var Qi,Gn;class s_{constructor(e){Ke(this,Qi);Ke(this,Gn);var r;var t=new Map,n=(a,o)=>{var l=En(o,!1,!1);return t.set(a,l),l};const s=new Proxy({...e.props||{},$$events:{}},{get(a,o){return G(t.get(o)??n(o,Reflect.get(a,o)))},has(a,o){return o===eg?!0:(G(t.get(o)??n(o,Reflect.get(a,o))),Reflect.has(a,o))},set(a,o,l){return Lt(t.get(o)??n(o,l),l),Reflect.set(a,o,l)}});Ve(this,Gn,(e.hydrate?n_:Mp)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((r=e==null?void 0:e.props)!=null&&r.$$host)||e.sync===!1)&&Cg(),Ve(this,Qi,s.$$events);for(const a of Object.keys(X(this,Gn)))a==="$set"||a==="$destroy"||a==="$on"||ju(this,a,{get(){return X(this,Gn)[a]},set(o){X(this,Gn)[a]=o},enumerable:!0});X(this,Gn).$set=a=>{Object.assign(s,a)},X(this,Gn).$destroy=()=>{i_(X(this,Gn))}}$set(e){X(this,Gn).$set(e)}$on(e,t){X(this,Qi)[e]=X(this,Qi)[e]||[];const n=(...s)=>t.call(this,...s);return X(this,Qi)[e].push(n),()=>{X(this,Qi)[e]=X(this,Qi)[e].filter(s=>s!==n)}}$destroy(){X(this,Gn).$destroy()}}Qi=new WeakMap,Gn=new WeakMap;const r_="5";var wf;typeof window<"u"&&((wf=window.__svelte??(window.__svelte={})).v??(wf.v=new Set)).add(r_);vg();var ii,Si,Dn,nr,co,uo,xl;class Ep{constructor(e,t=!0){Jn(this,"anchor");Ke(this,ii,new Map);Ke(this,Si,new Map);Ke(this,Dn,new Map);Ke(this,nr,new Set);Ke(this,co,!0);Ke(this,uo,()=>{var e=ot;if(X(this,ii).has(e)){var t=X(this,ii).get(e),n=X(this,Si).get(t);if(n)ih(n),X(this,nr).delete(t);else{var s=X(this,Dn).get(t);s&&(X(this,Si).set(t,s.effect),X(this,Dn).delete(t),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[r,a]of X(this,ii)){if(X(this,ii).delete(r),r===e)break;const o=X(this,Dn).get(a);o&&(Tn(o.effect),X(this,Dn).delete(a))}for(const[r,a]of X(this,Si)){if(r===t||X(this,nr).has(r))continue;const o=()=>{if(Array.from(X(this,ii).values()).includes(r)){var c=document.createDocumentFragment();yp(a,c),c.append(Yn()),X(this,Dn).set(r,{effect:a,fragment:c})}else Tn(a);X(this,nr).delete(r),X(this,Si).delete(r)};X(this,co)||!n?(X(this,nr).add(r),sr(a,o,!1)):o()}}});Ke(this,xl,e=>{X(this,ii).delete(e);const t=Array.from(X(this,ii).values());for(const[n,s]of X(this,Dn))t.includes(n)||(Tn(s.effect),X(this,Dn).delete(n))});this.anchor=e,Ve(this,co,t)}ensure(e,t){var n=ot,s=Wf();if(t&&!X(this,Si).has(e)&&!X(this,Dn).has(e))if(s){var r=document.createDocumentFragment(),a=Yn();r.append(a),X(this,Dn).set(e,{effect:Wn(()=>t(a)),fragment:r})}else X(this,Si).set(e,Wn(()=>t(this.anchor)));if(X(this,ii).set(n,e),s){for(const[o,l]of X(this,Si))o===e?n.skipped_effects.delete(l):n.skipped_effects.add(l);for(const[o,l]of X(this,Dn))o===e?n.skipped_effects.delete(l.effect):n.skipped_effects.add(l.effect);n.oncommit(X(this,uo)),n.ondiscard(X(this,xl))}else lt&&(this.anchor=Qe),X(this,uo).call(this)}}ii=new WeakMap,Si=new WeakMap,Dn=new WeakMap,nr=new WeakMap,co=new WeakMap,uo=new WeakMap,xl=new WeakMap;function wl(i){Et===null&&Ku(),fo&&Et.l!==null?Tp(Et).m.push(i):Hc(()=>{const e=Re(i);if(typeof e=="function")return e})}function a_(i,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:e,bubbles:t,cancelable:n})}function o_(){const i=Et;return i===null&&Ku(),(e,t,n)=>{var r;const s=(r=i.s.$$events)==null?void 0:r[e];if(s){const a=qu(s)?s.slice():[s],o=a_(e,t,n);for(const l of a)l.call(i.x,o);return!o.defaultPrevented}return!0}}function l_(i){Et===null&&Ku(),Et.l===null&&dg(),Tp(Et).a.push(i)}function Tp(i){var e=i.l;return e.u??(e.u={a:[],b:[],m:[]})}function Ds(i,e,t=!1){lt&&cr();var n=new Ep(i),s=t?ar:0;function r(a,o){if(lt){const c=kf(i)===Ml;if(a===c){var l=ul();gn(l),n.anchor=l,ts(!1),n.ensure(a,o),ts(!0);return}}n.ensure(a,o)}Tl(()=>{var a=!1;e((o,l=!0)=>{a=!0,r(l,o)}),a||r(!1,null)},s)}function rr(i,e){return e}function c_(i,e,t){for(var n=[],s=e.length,r,a=e.length,o=0;o<s;o++){let h=e[o];sr(h,()=>{if(r){if(r.pending.delete(h),r.done.add(h),r.pending.size===0){var d=i.outrogroups;Wc(Sl(r.done)),d.delete(r),d.size===0&&(i.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&t!==null;if(l){var c=t,u=c.parentNode;Gf(u),u.append(c),i.items.clear()}Wc(e,!l)}else r={pending:new Set(e),done:new Set},(i.outrogroups??(i.outrogroups=new Set)).add(r)}function Wc(i,e=!0){for(var t=0;t<i.length;t++)Tn(i[t],e)}var $h;function rs(i,e,t,n,s,r=null){var a=i,o=new Map,l=(e&Ff)!==0;if(l){var c=i;a=lt?gn(ai(c)):c.appendChild(Yn())}lt&&cr();var u=null,h=tp(()=>{var p=t();return qu(p)?p:p==null?[]:Sl(p)}),d,f=!0;function g(){m.fallback=u,u_(m,d,a,e,n),u!==null&&(d.length===0?(u.f&es)===0?ih(u):(u.f^=es,Ga(u,null,a)):sr(u,()=>{u=null}))}var _=Tl(()=>{d=G(h);var p=d.length;let M=!1;if(lt){var E=kf(a)===Ml;E!==(p===0)&&(a=ul(),gn(a),ts(!1),M=!0)}for(var b=new Set,A=ot,R=Wf(),w=0;w<p;w+=1){lt&&Qe.nodeType===pr&&Qe.data===$u&&(a=Qe,M=!0,ts(!1));var D=d[w],x=n(D,w),S=f?null:o.get(x);S?(S.v&&aa(S.v,D),S.i&&aa(S.i,w),R&&A.skipped_effects.delete(S.e)):(S=h_(o,f?a:$h??($h=Yn()),D,x,w,s,e,t),f||(S.e.f|=es),o.set(x,S)),b.add(x)}if(p===0&&r&&!u&&(f?u=Wn(()=>r(a)):(u=Wn(()=>r($h??($h=Yn()))),u.f|=es)),lt&&p>0&&gn(ul()),!f)if(R){for(const[P,V]of o)b.has(P)||A.skipped_effects.add(V.e);A.oncommit(g),A.ondiscard(()=>{})}else g();M&&ts(!0),G(h)}),m={effect:_,items:o,outrogroups:null,fallback:u};f=!1,lt&&(a=Qe)}function Pa(i){for(;i!==null&&(i.f&ui)===0;)i=i.next;return i}function u_(i,e,t,n,s){var S,P,V,B,K,Y,q,O,J;var r=(n&Sg)!==0,a=e.length,o=i.items,l=Pa(i.effect.first),c,u=null,h,d=[],f=[],g,_,m,p;if(r)for(p=0;p<a;p+=1)g=e[p],_=s(g,p),m=o.get(_).e,(m.f&es)===0&&((P=(S=m.nodes)==null?void 0:S.a)==null||P.measure(),(h??(h=new Set)).add(m));for(p=0;p<a;p+=1){if(g=e[p],_=s(g,p),m=o.get(_).e,i.outrogroups!==null)for(const re of i.outrogroups)re.pending.delete(m),re.done.delete(m);if((m.f&es)!==0)if(m.f^=es,m===l)Ga(m,null,t);else{var M=u?u.next:l;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),ms(i,u,m),ms(i,m,M),Ga(m,M,t),u=m,d=[],f=[],l=Pa(u.next);continue}if((m.f&Fn)!==0&&(ih(m),r&&((B=(V=m.nodes)==null?void 0:V.a)==null||B.unfix(),(h??(h=new Set)).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(d.length<f.length){var E=f[0],b;u=E.prev;var A=d[0],R=d[d.length-1];for(b=0;b<d.length;b+=1)Ga(d[b],E,t);for(b=0;b<f.length;b+=1)c.delete(f[b]);ms(i,A.prev,R.next),ms(i,u,A),ms(i,R,E),l=E,u=R,p-=1,d=[],f=[]}else c.delete(m),Ga(m,l,t),ms(i,m.prev,m.next),ms(i,m,u===null?i.effect.first:u.next),ms(i,u,m),u=m;continue}for(d=[],f=[];l!==null&&l!==m;)(c??(c=new Set)).add(l),f.push(l),l=Pa(l.next);if(l===null)continue}(m.f&es)===0&&d.push(m),u=m,l=Pa(m.next)}if(i.outrogroups!==null){for(const re of i.outrogroups)re.pending.size===0&&(Wc(Sl(re.done)),(K=i.outrogroups)==null||K.delete(re));i.outrogroups.size===0&&(i.outrogroups=null)}if(l!==null||c!==void 0){var w=[];if(c!==void 0)for(m of c)(m.f&Fn)===0&&w.push(m);for(;l!==null;)(l.f&Fn)===0&&l!==i.fallback&&w.push(l),l=Pa(l.next);var D=w.length;if(D>0){var x=(n&Ff)!==0&&a===0?t:null;if(r){for(p=0;p<D;p+=1)(q=(Y=w[p].nodes)==null?void 0:Y.a)==null||q.measure();for(p=0;p<D;p+=1)(J=(O=w[p].nodes)==null?void 0:O.a)==null||J.fix()}c_(i,w,x)}}r&&ss(()=>{var re,ae;if(h!==void 0)for(m of h)(ae=(re=m.nodes)==null?void 0:re.a)==null||ae.apply()})}function h_(i,e,t,n,s,r,a,o){var l=(a&xg)!==0?(a&Mg)===0?En(t,!1,!1):ur(t):null,c=(a&yg)!==0?ur(s):null;return{v:l,i:c,e:Wn(()=>(r(e,l??t,c??s,o),()=>{i.delete(n)}))}}function Ga(i,e,t){if(i.nodes)for(var n=i.nodes.start,s=i.nodes.end,r=e&&(e.f&es)===0?e.nodes.start:t;n!==null;){var a=hi(n);if(r.before(n),n===s)return;n=a}}function ms(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}function et(i,e,t=!1,n=!1,s=!1){var r=i,a="";It(()=>{var o=ct;if(a===(a=e()??"")){lt&&cr();return}if(o.nodes!==null&&(gp(o.nodes.start,o.nodes.end),o.nodes=null),a!==""){if(lt){Qe.data;for(var l=cr(),c=l;l!==null&&(l.nodeType!==pr||l.data!=="");)c=l,l=hi(l);if(l===null)throw mo(),lr;Is(Qe,c),r=gn(l);return}var u=a+"";t?u=`<svg>${u}</svg>`:n&&(u=`<math>${u}</math>`);var h=Sp(u);if((t||n)&&(h=ai(h)),Is(ai(h),h.lastChild),t||n)for(;ai(h);)r.before(ai(h));else r.before(h)}})}function d_(i,e,t){lt&&cr();var n=new Ep(i);Tl(()=>{var s=e()??null;n.ensure(s,s&&(r=>t(r,s)))},ar)}const Zh=[...` 	
\r\f \v\uFEFF`];function f_(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var r=s.length,a=0;(a=n.indexOf(s,a))>=0;){var o=a+r;(a===0||Zh.includes(n[a-1]))&&(o===n.length||Zh.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function la(i,e,t,n,s,r){var a=i.__className;if(lt||a!==t||a===void 0){var o=f_(t,n,r);(!lt||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):i.className=o),i.__className=t}else if(r&&s!==r)for(var l in r){var c=!!r[l];(s==null||c!==!!s[l])&&i.classList.toggle(l,c)}return r}const p_=Symbol("is custom element"),m_=Symbol("is html");function Ut(i,e,t,n){var s=g_(i);lt&&(s[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="loading"&&(i[tg]=t),t==null?i.removeAttribute(e):typeof t!="string"&&__(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function g_(i){return i.__attributes??(i.__attributes={[p_]:i.nodeName.includes("-"),[m_]:i.namespaceURI===Tg})}var Jh=new Map;function __(i){var e=i.getAttribute("is")||i.nodeName,t=Jh.get(e);if(t)return t;Jh.set(e,t=[]);for(var n,s=i,r=Element.prototype;r!==s;){n=Lf(s);for(var a in n)n[a].set&&t.push(a);s=Yu(s)}return t}function Qh(i,e){return i===e||(i==null?void 0:i[Wr])===e}function Ap(i={},e,t,n){return jg(()=>{var s,r;return El(()=>{s=r,r=[],Re(()=>{i!==t(...r)&&(e(i,...r),s&&Qh(t(...s),i)&&e(null,...s))})}),()=>{ss(()=>{r&&Qh(t(...r),i)&&e(null,...r)})}}),i}function di(i=!1){const e=Et,t=e.l.u;if(!t)return;let n=()=>Gg(e.s);if(i){let s=0,r={};const a=Ju(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],o=!0);return o&&s++,s});n=()=>G(a)}t.b.length&&Xg(()=>{ed(e,n),Ic(t.b)}),Hc(()=>{const s=Re(()=>t.m.map(rg));return()=>{for(const r of s)typeof r=="function"&&r()}}),t.a.length&&Hc(()=>{ed(e,n),Ic(t.a)})}function ed(i,e){if(i.l.s)for(const t of i.l.s)G(t);e()}function Kt(i,e,t){var n;i.$$events||(i.$$events={}),(n=i.$$events)[e]||(n[e]=[]),i.$$events[e].push(t)}function $t(i){for(var e in i)e in this&&(this[e]=i[e])}function wp(i,e,t){if(i==null)return e(void 0),Xr;const n=Re(()=>i.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const Tr=[];function v_(i,e=Xr){let t=null;const n=new Set;function s(o){if(Nf(i,o)&&(i=o,t)){const l=!Tr.length;for(const c of n)c[1](),Tr.push(c,i);if(l){for(let c=0;c<Tr.length;c+=2)Tr[c][0](Tr[c+1]);Tr.length=0}}}function r(o){s(o(i))}function a(o,l=Xr){const c=[o,l];return n.add(c),n.size===1&&(t=e(s,r)||Xr),o(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:a}}function x_(i){let e;return wp(i,t=>e=t)(),e}let Xc=Symbol();function Oi(i,e,t){const n=t[e]??(t[e]={store:null,source:En(void 0),unsubscribe:Xr});if(n.store!==i&&!(Xc in t))if(n.unsubscribe(),n.store=i??null,i==null)n.source.v=void 0,n.unsubscribe=Xr;else{var s=!0;n.unsubscribe=wp(i,r=>{s?n.source.v=r:Lt(n.source,r)}),s=!1}return i&&Xc in t?x_(i):G(n.source)}function Bi(){const i={};function e(){nh(()=>{for(var t in i)i[t].unsubscribe();ju(i,Xc,{enumerable:!1,value:!0})})}return[i,e]}const y_=localStorage.getItem("lang"),fi=v_(y_||"fr");function td(i){fi.set(i),localStorage.setItem("lang",i)}var S_=Mt('<div class="lang-switch svelte-97ztzs"><button>FR</button> <button>EN</button></div>');function Rp(i,e){if(new.target)return Yt({component:Rp,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi();var r={$set:$t,$on:(d,f)=>Kt(e,d,f)};di();var a=S_(),o=W(a);let l;var c=ce(o,2);let u;k(a),It(()=>{l=la(o,1,"svelte-97ztzs",null,l,{active:t()==="fr"}),u=la(c,1,"svelte-97ztzs",null,u,{active:t()==="en"})}),Ls("click",o,()=>td("fr")),Ls("click",c,()=>td("en")),at(i,a);var h=Vt(r);return s(),h}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="182",qr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,nd=1,b_=2,nl=1,E_=2,Wa=3,cs=0,An=1,bi=2,as=0,jr=1,id=2,sd=3,rd=4,T_=5,Ws=100,A_=101,w_=102,R_=103,C_=104,P_=200,L_=201,I_=202,D_=203,qc=204,jc=205,N_=206,U_=207,F_=208,O_=209,B_=210,k_=211,z_=212,V_=213,H_=214,Yc=0,Kc=1,$c=2,ca=3,Zc=4,Jc=5,Qc=6,eu=7,Cp=0,G_=1,W_=2,Ai=0,Pp=1,Lp=2,Ip=3,Dp=4,Np=5,Up=6,Fp=7,ad="attached",X_="detached",Op=300,dr=301,ua=302,tu=303,nu=304,Rl=306,ha=1e3,Ei=1001,dl=1002,Gt=1003,Bp=1004,Xa=1005,Wt=1006,il=1007,ns=1008,Un=1009,kp=1010,zp=1011,Qa=1012,rh=1013,Pi=1014,Xn=1015,us=1016,ah=1017,oh=1018,eo=1020,Vp=35902,Hp=35899,Gp=1021,Wp=1022,qn=1023,hs=1026,Ys=1027,lh=1028,ch=1029,da=1030,uh=1031,hh=1033,sl=33776,rl=33777,al=33778,ol=33779,iu=35840,su=35841,ru=35842,au=35843,ou=36196,lu=37492,cu=37496,uu=37488,hu=37489,du=37490,fu=37491,pu=37808,mu=37809,gu=37810,_u=37811,vu=37812,xu=37813,yu=37814,Su=37815,Mu=37816,bu=37817,Eu=37818,Tu=37819,Au=37820,wu=37821,Ru=36492,Cu=36494,Pu=36495,Lu=36283,Iu=36284,Du=36285,Nu=36286,to=2300,no=2301,ql=2302,od=2400,ld=2401,cd=2402,q_=2500,j_=0,Xp=1,Uu=2,Y_=3200,qp=0,K_=1,Es="",rn="srgb",xn="srgb-linear",fl="linear",xt="srgb",Ar=7680,ud=519,$_=512,Z_=513,J_=514,dh=515,Q_=516,ev=517,fh=518,tv=519,Fu=35044,hd="300 es",Ti=2e3,pl=2001;function jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iv(){const i=io("canvas");return i.style.display="block",i}const dd={};function ml(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ce(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ne(...i){const e="THREE."+i.shift();console.error(e,...i)}function so(...i){const e=i.join(" ");e in dd||(dd[e]=!0,Ce(...i))}function sv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const $a=Math.PI/180,fa=180/Math.PI;function li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function ph(i,e){return(i%e+e)%e}function rv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function av(i,e,t){return i!==e?(t-i)/(e-i):0}function Za(i,e,t){return(1-t)*i+t*e}function ov(i,e,t,n){return Za(i,e,1-Math.exp(-t*n))}function lv(i,e=1){return e-Math.abs(ph(i,e*2)-e)}function cv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dv(i,e){return i+Math.random()*(e-i)}function fv(i){return i*(.5-Math.random())}function pv(i){i!==void 0&&(fd=i);let e=fd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mv(i){return i*$a}function gv(i){return i*fa}function _v(i){return(i&i-1)===0&&i!==0}function vv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yp={DEG2RAD:$a,RAD2DEG:fa,generateUUID:li,clamp:Ye,euclideanModulo:ph,mapLinear:rv,inverseLerp:av,lerp:Za,damp:ov,pingpong:lv,smoothstep:cv,smootherstep:uv,randInt:hv,randFloat:dv,randFloatSpread:fv,seededRandom:pv,degToRad:mv,radToDeg:gv,isPowerOfTwo:_v,ceilPowerOfTwo:vv,floorPowerOfTwo:xv,setQuaternionFromProperEuler:yv,normalize:yt,denormalize:si};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+_*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new U,pd=new Li;class Xe{constructor(e,t,n,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],E=s[4],b=s[7],A=s[2],R=s[5],w=s[8];return r[0]=a*_+o*M+l*A,r[3]=a*m+o*E+l*R,r[6]=a*p+o*b+l*w,r[1]=c*_+u*M+h*A,r[4]=c*m+u*E+h*R,r[7]=c*p+u*b+h*w,r[2]=d*_+f*M+g*A,r[5]=d*m+f*E+g*R,r[8]=d*p+f*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new Xe,md=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sv(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?fl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return so("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return so("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:e,whitePoint:n,transfer:fl,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:md,fromXYZ:gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const tt=Sv();function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wr;class Mv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=io("canvas")),wr.width=e.width,wr.height=e.height;const s=wr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bv=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Ev=0;const $l=new U;class tn extends mr{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Ei,s=Ei,r=Wt,a=ns,o=qn,l=Un,c=tn.DEFAULT_ANISOTROPY,u=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=li(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Op;tn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(f+1)/2,A=(p+1)/2,R=(u+d)/4,w=(h+_)/4,D=(g+m)/4;return E>b&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=w/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=D/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tv extends mr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new tn(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Tv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kp extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Av extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),wo.subVectors(this.max,La),Rr.subVectors(e.a,La),Cr.subVectors(e.b,La),Pr.subVectors(e.c,La),gs.subVectors(Cr,Rr),_s.subVectors(Pr,Cr),Os.subVectors(Rr,Pr);let t=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-Os.z,Os.y,gs.z,0,-gs.x,_s.z,0,-_s.x,Os.z,0,-Os.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-Os.y,Os.x,0];return!Zl(t,Rr,Cr,Pr,wo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Rr,Cr,Pr,wo))?!1:(Ro.crossVectors(gs,_s),t=[Ro.x,Ro.y,Ro.z],Zl(t,Rr,Cr,Pr,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new U,new U,new U,new U,new U,new U,new U,new U],Qn=new U,Ao=new ki,Rr=new U,Cr=new U,Pr=new U,gs=new U,_s=new U,Os=new U,La=new U,wo=new U,Ro=new U,Bs=new U;function Zl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bs.fromArray(i,r);const o=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=t.dot(Bs),u=n.dot(Bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wv=new ki,Ia=new U,Jl=new U;class zi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const t=Ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Jl)),this.expandByPoint(Ia.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new U,Ql=new U,Co=new U,vs=new U,ec=new U,Po=new U,tc=new U;class _o{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ql.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(Ql);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Co),o=vs.dot(this.direction),l=-vs.dot(Co),c=vs.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ql).addScaledVector(Co,d),f}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,s,r){ec.subVectors(t,e),Po.subVectors(n,e),tc.crossVectors(ec,Po);let a=this.direction.dot(tc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vs.subVectors(this.origin,e);const l=o*this.direction.dot(Po.crossVectors(vs,Po));if(l<0)return null;const c=o*this.direction.dot(ec.cross(vs));if(c<0||l+c>a)return null;const u=-o*vs.dot(tc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Cv)}lookAt(e,t,n){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),xs.crossVectors(n,Cn),xs.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),xs.crossVectors(n,Cn)),xs.normalize(),Lo.crossVectors(Cn,xs),s[0]=xs.x,s[4]=Lo.x,s[8]=Cn.x,s[1]=xs.y,s[5]=Lo.y,s[9]=Cn.y,s[2]=xs.z,s[6]=Lo.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],E=n[7],b=n[11],A=n[15],R=s[0],w=s[4],D=s[8],x=s[12],S=s[1],P=s[5],V=s[9],B=s[13],K=s[2],Y=s[6],q=s[10],O=s[14],J=s[3],re=s[7],ae=s[11],de=s[15];return r[0]=a*R+o*S+l*K+c*J,r[4]=a*w+o*P+l*Y+c*re,r[8]=a*D+o*V+l*q+c*ae,r[12]=a*x+o*B+l*O+c*de,r[1]=u*R+h*S+d*K+f*J,r[5]=u*w+h*P+d*Y+f*re,r[9]=u*D+h*V+d*q+f*ae,r[13]=u*x+h*B+d*O+f*de,r[2]=g*R+_*S+m*K+p*J,r[6]=g*w+_*P+m*Y+p*re,r[10]=g*D+_*V+m*q+p*ae,r[14]=g*x+_*B+m*O+p*de,r[3]=M*R+E*S+b*K+A*J,r[7]=M*w+E*P+b*Y+A*re,r[11]=M*D+E*V+b*q+A*ae,r[15]=M*x+E*B+b*O+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*f-c*d,E=o*f-c*h,b=o*d-l*h,A=a*f-c*u,R=a*d-l*u,w=a*h-o*u;return t*(_*M-m*E+p*b)-n*(g*M-m*A+p*R)+s*(g*E-_*A+p*w)-r*(g*b-_*R+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,E=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,b=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,A=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,R=t*M+n*E+s*b+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=M*w,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*w,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*w,e[4]=E*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*w,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*w,e[8]=b*w,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*w,e[12]=A*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,M=l*c,E=l*u,b=l*h,A=n.x,R=n.y,w=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+p))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(g+E)*w,s[9]=(m-M)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Lr.set(s[0],s[1],s[2]).length();const a=Lr.set(s[4],s[5],s[6]).length(),o=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),ei.copy(this);const c=1/r,u=1/a,h=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ti,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Ti)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===pl)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ti,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Ti)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===pl)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new U,ei=new je,Rv=new U(0,0,0),Cv=new U(1,1,1),xs=new U,Lo=new U,Cn=new U,_d=new je,vd=new Li;class Ii{constructor(e=0,t=0,n=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class $p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pv=0;const xd=new U,Ir=new Li,qi=new je,Io=new U,Da=new U,Lv=new U,Iv=new Li,yd=new U(1,0,0),Sd=new U(0,1,0),Md=new U(0,0,1),bd={type:"added"},Dv={type:"removed"},Dr={type:"childadded",child:null},nc={type:"childremoved",child:null};class Dt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new U,t=new Ii,n=new Li,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Xe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(yd,e)}rotateY(e){return this.rotateOnAxis(Sd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yd,e)}translateY(e){return this.translateOnAxis(Sd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Da,Io,this.up):qi.lookAt(Io,Da,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(qi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bd),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dv),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bd),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new U(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new U,ji=new U,ic=new U,Yi=new U,Nr=new U,Ur=new U,Ed=new U,sc=new U,rc=new U,ac=new U,oc=new Rt,lc=new Rt,cc=new Rt;class ri{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),ji.subVectors(n,t),ic.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(ji),l=ti.dot(ic),c=ji.dot(ji),u=ji.dot(ic),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),ji.subVectors(e,t),ti.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),ti.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Nr.subVectors(s,n),Ur.subVectors(r,n),sc.subVectors(e,n);const l=Nr.dot(sc),c=Ur.dot(sc);if(l<=0&&c<=0)return t.copy(n);rc.subVectors(e,s);const u=Nr.dot(rc),h=Ur.dot(rc);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Nr,a);ac.subVectors(e,r);const f=Nr.dot(ac),g=Ur.dot(ac);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ur,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ed.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Ed,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Nr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Do={h:0,s:0,l:0};function uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ph(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uc(a,r,e+1/3),this.g=uc(a,r,e),this.b=uc(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Zp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return tt.workingToColorSpace(dn.copy(this),e),Math.round(Ye(dn.r*255,0,255))*65536+Math.round(Ye(dn.g*255,0,255))*256+Math.round(Ye(dn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(dn.copy(this),t);const n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=rn){tt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,s=dn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Do);const n=Za(ys.h,Do.h,t),s=Za(ys.s,Do.s,t),r=Za(ys.l,Do.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Be;Be.NAMES=Zp;let Nv=0;class Ri extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=li(),this.name="",this.type="Material",this.blending=jr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=jc,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qc&&(n.blendSrc=this.blendSrc),this.blendDst!==jc&&(n.blendDst=this.blendDst),this.blendEquation!==Ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ks extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new U,No=new Fe;let Uv=0;class _n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class Jp extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qp extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ci extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fv=0;const kn=new je,hc=new Dt,Fr=new U,Pn=new ki,Na=new ki,en=new U;class Zn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?Qp:Jp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ci(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Pn.min,Na.min),Pn.expandByPoint(en),en.addVectors(Pn.max,Na.max),Pn.expandByPoint(en)):(Pn.expandByPoint(Na.min),Pn.expandByPoint(Na.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(e,c),en.add(Fr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new U,l[D]=new U;const c=new U,u=new U,h=new U,d=new Fe,f=new Fe,g=new Fe,_=new U,m=new U;function p(D,x,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[D].add(_),o[x].add(_),o[S].add(_),l[D].add(m),l[x].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,x=M.length;D<x;++D){const S=M[D],P=S.start,V=S.count;for(let B=P,K=P+V;B<K;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new U,b=new U,A=new U,R=new U;function w(D){A.fromBufferAttribute(s,D),R.copy(A);const x=o[D];E.copy(x),E.sub(A.multiplyScalar(A.dot(x))).normalize(),b.crossVectors(R,x);const P=b.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,P)}for(let D=0,x=M.length;D<x;++D){const S=M[D],P=S.start,V=S.count;for(let B=P,K=P+V;B<K;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new _n(d,u,h)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new je,ks=new _o,Uo=new zi,Ad=new U,Fo=new U,Oo=new U,Bo=new U,dc=new U,ko=new U,wd=new U,zo=new U;class On extends Dt{constructor(e=new Zn,t=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(dc.fromBufferAttribute(h,e),a?ko.addScaledVector(dc,u):ko.addScaledVector(dc.sub(t),u))}t.add(ko)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Uo.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Uo,Ad)===null||ks.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(Td.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Td),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=E;b<A;b+=3){const R=o.getX(b),w=o.getX(b+1),D=o.getX(b+2);s=Vo(this,p,e,n,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=Vo(this,a,e,n,c,u,h,M,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=E;b<A;b+=3){const R=b,w=b+1,D=b+2;s=Vo(this,p,e,n,c,u,h,R,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,E=m+1,b=m+2;s=Vo(this,a,e,n,c,u,h,M,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ov(i,e,t,n,s,r,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===cs,o),l===null)return null;zo.copy(o),zo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zo);return c<t.near||c>t.far?null:{distance:c,point:zo.clone(),object:i}}function Vo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fo),i.getVertexPosition(l,Oo),i.getVertexPosition(c,Bo);const u=Ov(i,e,t,n,Fo,Oo,Bo,wd);if(u){const h=new U;ri.getBarycoord(wd,Fo,Oo,Bo,h),s&&(u.uv=ri.getInterpolatedAttribute(s,o,l,c,h,new Fe)),r&&(u.uv1=ri.getInterpolatedAttribute(r,o,l,c,h,new Fe)),a&&(u.normal=ri.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};ri.getNormal(Fo,Oo,Bo,d.normal),u.face=d,u.barycoord=h}return u}class vo extends Zn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(h,2));function g(_,m,p,M,E,b,A,R,w,D,x){const S=b/w,P=A/D,V=b/2,B=A/2,K=R/2,Y=w+1,q=D+1;let O=0,J=0;const re=new U;for(let ae=0;ae<q;ae++){const de=ae*P-B;for(let Oe=0;Oe<Y;Oe++){const ke=Oe*S-V;re[_]=ke*M,re[m]=de*E,re[p]=K,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=R>0?1:-1,u.push(re.x,re.y,re.z),h.push(Oe/w),h.push(1-ae/D),O+=1}}for(let ae=0;ae<D;ae++)for(let de=0;de<w;de++){const Oe=d+de+Y*ae,ke=d+de+Y*(ae+1),Tt=d+(de+1)+Y*(ae+1),gt=d+(de+1)+Y*ae;l.push(Oe,ke,gt),l.push(ke,Tt,gt),J+=6}o.addGroup(f,J,x),f+=J,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=pa(i[t]);for(const s in n)e[s]=n[s]}return e}function Bv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function em(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const kv={clone:pa,merge:pn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=Bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tm extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new U,Rd=new Fe,Cd=new Fe;class mn extends tm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Rd,Cd),t.subVectors(Cd,Rd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Br=1;class Hv extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Or,Br,e,t);s.layers=this.layers,this.add(s);const r=new mn(Or,Br,e,t);r.layers=this.layers,this.add(r);const a=new mn(Or,Br,e,t);a.layers=this.layers,this.add(a);const o=new mn(Or,Br,e,t);o.layers=this.layers,this.add(o);const l=new mn(Or,Br,e,t);l.layers=this.layers,this.add(l);const c=new mn(Or,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nm extends tn{constructor(e=[],t=dr,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class im extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vo(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:pa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:as});r.uniforms.tEquirect.value=t;const a=new On(s,r),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=Wt),new Hv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class $s extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gv={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wv extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new U;class gh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ml("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ml("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Pd=new U,Ld=new Rt,Id=new Rt,qv=new U,Dd=new je,Ho=new U,pc=new zi,Nd=new je,mc=new _o;class jv extends On{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ad,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(s),e.ray.intersectsSphere(pc)!==!1&&(Nd.copy(s).invert(),mc.copy(e.ray).applyMatrix4(Nd),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===X_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ld.fromBufferAttribute(s.attributes.skinIndex,e),Id.fromBufferAttribute(s.attributes.skinWeight,e),Pd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Id.getComponent(r);if(a!==0){const o=Ld.getComponent(r);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(qv.copy(Pd).applyMatrix4(Dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sm extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _h extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Gt,u=Gt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new je,Yv=new je;class vh{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Yv;Ud.multiplyMatrices(o,t[r]),Ud.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new vh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _h(t,e,e,qn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new sm),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Ou extends _n{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kr=new je,Fd=new je,Go=[],Od=new ki,Kv=new je,Ua=new On,Fa=new zi;class $v extends On{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ou(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),Od.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(Od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),Fa.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ua.geometry=this.geometry,Ua.material=this.material,Ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(n),e.ray.intersectsSphere(Fa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),Fd.multiplyMatrices(n,kr),Ua.matrixWorld=Fd,Ua.raycast(e,Go);for(let a=0,o=Go.length;a<o;a++){const l=Go[a];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(s*this.count),s,this.count,lh,Xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gc=new U,Zv=new U,Jv=new Xe;class bs{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=gc.subVectors(n,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jv.getNormalMatrix(e),s=this.coplanarPoint(gc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new zi,Qv=new Fe(.5,.5),Wo=new U;class xh{constructor(e=new bs,t=new bs,n=new bs,s=new bs,r=new bs,a=new bs){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,p-g,A-M).normalize(),s[1].setComponents(c+a,f+u,p+g,A+M).normalize(),s[2].setComponents(c+o,f+h,p+_,A+E).normalize(),s[3].setComponents(c-o,f-h,p-_,A-E).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,A-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,A-b).normalize(),t===Ti)s[5].setComponents(c+l,f+d,p+m,A+b).normalize();else if(t===pl)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const t=Qv.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rm extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new U,_l=new U,Bd=new je,Oa=new _o,Xo=new zi,_c=new U,kd=new U;class yh extends Dt{constructor(e=new Zn,t=new rm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gl.fromBufferAttribute(t,s-1),_l.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gl.distanceTo(_l);e.setAttribute("lineDistance",new ci(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Bd.copy(s).invert(),Oa.copy(e.ray).applyMatrix4(Bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),E=qo(this,e,Oa,l,p,M,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=qo(this,e,Oa,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=qo(this,e,Oa,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=qo(this,e,Oa,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qo(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(gl.fromBufferAttribute(o,s),_l.fromBufferAttribute(o,r),t.distanceSqToSegment(gl,_l,_c,kd)>n)return;_c.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:kd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const zd=new U,Vd=new U;class e0 extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zd.fromBufferAttribute(t,s),Vd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zd.distanceTo(Vd);e.setAttribute("lineDistance",new ci(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t0 extends yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class am extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hd=new je,Bu=new _o,jo=new zi,Yo=new U;class n0 extends Dt{constructor(e=new Zn,t=new am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Hd.copy(s).invert(),Bu.copy(e.ray).applyMatrix4(Hd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Yo.fromBufferAttribute(h,m),Gd(Yo,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Yo.fromBufferAttribute(h,g),Gd(Yo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gd(i,e,t,n,s,r,a){const o=Bu.distanceSqToPoint(i);if(o<t){const l=new U;Bu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ro extends tn{constructor(e,t,n=Pi,s,r,a,o=Gt,l=Gt,c,u=hs,h=1){if(u!==hs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class i0 extends ro{constructor(e,t=Pi,n=dr,s,r,a=Gt,o=Gt,l,c=hs){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class om extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cl extends Zn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let E=0;E<c;E++){const b=E*h-r;g.push(b,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const E=M+c*p,b=M+c*(p+1),A=M+1+c*(p+1),R=M+1+c*p;f.push(E,b,R),f.push(b,A,R)}this.setIndex(f),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class s0 extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pl extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qp,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vi extends Pl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class r0 extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a0 extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ko(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function o0(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Wd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function lm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class xo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class l0 extends xo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:od,endingEnd:od}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ld:r=e,o=2*t-n;break;case cd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ld:a=e,l=2*n-t;break;case cd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+M*a[c+A]+E*a[l+A]+b*a[h+A];return r}}class c0 extends xo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class u0 extends xo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new u0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new c0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new l0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nv(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ql,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=no;class Sa extends pi{constructor(e,t,n){super(e,t,n)}}Sa.prototype.ValueTypeName="bool";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=to;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;class cm extends pi{constructor(e,t,n,s){super(e,t,n,s)}}cm.prototype.ValueTypeName="color";class ma extends pi{constructor(e,t,n,s){super(e,t,n,s)}}ma.prototype.ValueTypeName="number";class h0 extends xo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ga extends pi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new h0(this.times,this.values,this.getValueSize(),e)}}ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;class Ma extends pi{constructor(e,t,n){super(e,t,n)}}Ma.prototype.ValueTypeName="string";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=to;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class _a extends pi{constructor(e,t,n,s){super(e,t,n,s)}}_a.prototype.ValueTypeName="vector";class d0{constructor(e="",t=-1,n=[],s=q_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p0(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=o0(l);l=Wd(l,1,u),c=Wd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ma(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Ce("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ne("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];lm(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}s.push(new ma(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(_a,f+".position",d,"pos",s),n(ga,f+".quaternion",d,"rot",s),n(_a,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function f0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ma;case"vector":case"vector2":case"vector3":case"vector4":return _a;case"color":return cm;case"quaternion":return ga;case"bool":case"boolean":return Sa;case"string":return Ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function p0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f0(i.type);if(i.times===void 0){const t=[],n=[];lm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const is={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class m0{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const g0=new m0;class ba{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ba.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class _0 extends Error{constructor(e,t){super(e),this.response=t}}class um extends ba{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=is.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:s});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ki[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:E,value:b})=>{if(E)p.close();else{_+=b.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,w=u.length;R<w;R++){const D=u[R];D.onProgress&&D.onProgress(A)}p.enqueue(b),M()}},E=>{p.error(E)})}}});return new Response(m)}else throw new _0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{is.add(`file:${e}`,c);const u=Ki[e];delete Ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zr=new WeakMap;class v0 extends ba{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=is.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=zr.get(a);h===void 0&&(h=[],zr.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=io("img");function l(){u(),t&&t(this);const h=zr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}zr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),is.remove(`image:${e}`);const d=zr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),is.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class x0 extends ba{constructor(e){super(e)}load(e,t,n,s){const r=new tn,a=new v0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ll extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const vc=new je,Xd=new U,qd=new U;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y0 extends Sh{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=fa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class S0 extends Ll{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new y0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class M0 extends Sh{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class b0 extends Ll{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new M0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Il extends tm{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E0 extends Sh{constructor(){super(new Il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hm extends Ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new E0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class T0 extends Ll{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ja{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xc=new WeakMap;class A0 extends ba{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=is.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(xc.has(a)===!0)s&&s(xc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return is.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),xc.set(l,c),is.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});is.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class w0 extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mh="\\[\\]\\.:\\/",R0=new RegExp("["+Mh+"]","g"),bh="[^"+Mh+"]",C0="[^"+Mh.replace("\\.","")+"]",P0=/((?:WC+[\/:])*)/.source.replace("WC",bh),L0=/(WCOD+)?/.source.replace("WCOD",C0),I0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),N0=new RegExp("^"+P0+L0+I0+D0+"$"),U0=["material","materials","bones","map"];class F0{constructor(e,t,n){const s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R0,"")}static parseTrackName(e){const t=N0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);U0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=F0;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class O0 extends mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yd(i,e,t,n){const s=B0(n);switch(t){case Gp:return i*e;case lh:return i*e/s.components*s.byteLength;case ch:return i*e/s.components*s.byteLength;case da:return i*e*2/s.components*s.byteLength;case uh:return i*e*2/s.components*s.byteLength;case Wp:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case hh:return i*e*4/s.components*s.byteLength;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case su:case au:return Math.max(i,16)*Math.max(e,8)/4;case iu:case ru:return Math.max(i,8)*Math.max(e,8)/2;case ou:case lu:case uu:case hu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cu:case du:case fu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lu:case Iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Du:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(i){switch(i){case Un:case kp:return{byteLength:1,components:1};case Qa:case zp:case us:return{byteLength:2,components:1};case ah:case oh:return{byteLength:2,components:4};case Pi:case rh:case Xn:return{byteLength:4,components:1};case Vp:case Hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dm(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function k0(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
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
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Bx=`uniform sampler2D dfgLUT;
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
}`,kx=`
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ey=`float getShadowMask() {
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
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
}`,jy=`#define DISTANCE
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
}`,Yy=`#define DISTANCE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#define LAMBERT
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,rS=`#define NORMAL
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
}`,aS=`#define NORMAL
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
}`,oS=`#define PHONG
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
}`,lS=`#define PHONG
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
}`,cS=`#define STANDARD
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
}`,uS=`#define STANDARD
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
}`,hS=`#define TOON
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
}`,dS=`#define TOON
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
}`,fS=`uniform float size;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:z0,alphahash_pars_fragment:V0,alphamap_fragment:H0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:j0,batching_pars_vertex:Y0,batching_vertex:K0,begin_vertex:$0,beginnormal_vertex:Z0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ax,color_pars_vertex:ox,color_vertex:lx,common:cx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:hx,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:_x,envmap_fragment:vx,envmap_common_pars_fragment:xx,envmap_pars_fragment:yx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Ix,envmap_vertex:Mx,fog_vertex:bx,fog_pars_vertex:Ex,fog_fragment:Tx,fog_pars_fragment:Ax,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Rx,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Px,lights_pars_begin:Lx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Bx,lights_fragment_begin:kx,lights_fragment_maps:zx,lights_fragment_end:Vx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:jx,map_particle_fragment:Yx,map_particle_pars_fragment:Kx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:ey,morphtarget_pars_vertex:ty,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:ay,normal_vertex:oy,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:hy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:_y,dithering_pars_fragment:vy,roughnessmap_fragment:xy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:My,shadowmap_vertex:by,shadowmask_pars_fragment:Ey,skinbase_vertex:Ty,skinning_pars_vertex:Ay,skinning_vertex:wy,skinnormal_vertex:Ry,specularmap_fragment:Cy,specularmap_pars_fragment:Py,tonemapping_fragment:Ly,tonemapping_pars_fragment:Iy,transmission_fragment:Dy,transmission_pars_fragment:Ny,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:ky,background_frag:zy,backgroundCube_vert:Vy,backgroundCube_frag:Hy,cube_vert:Gy,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distance_vert:jy,distance_frag:Yy,equirect_vert:Ky,equirect_frag:$y,linedashed_vert:Zy,linedashed_frag:Jy,meshbasic_vert:Qy,meshbasic_frag:eS,meshlambert_vert:tS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:sS,meshnormal_vert:rS,meshnormal_frag:aS,meshphong_vert:oS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:uS,meshtoon_vert:hS,meshtoon_frag:dS,points_vert:fS,points_frag:pS,shadow_vert:mS,shadow_frag:gS,sprite_vert:_S,sprite_frag:vS},me={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Mi={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Mi.physical={uniforms:pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const $o={r:0,b:0,g:0},Vs=new Ii,xS=new je;function yS(i,e,t,n,s,r,a){const o=new Be(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const A=g(E);A===null?p(o,l):A&&A.isColor&&(p(A,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const A=g(b);A&&(A.isCubeTexture||A.mapping===Rl)?(u===void 0&&(u=new On(new vo(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:pa(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(b.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xS.makeRotationFromEuler(Vs)),u.material.toneMapped=tt.getTransfer(A.colorSpace)!==xt,(h!==A||d!==A.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new On(new Cl(2,2),new Di({name:"BackgroundMaterial",uniforms:pa(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(A.colorSpace)!==xt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB($o,em(i)),n.buffers.color.setClear($o.r,$o.g,$o.b,b,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:M}}function SS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,P,V,B,K){let Y=!1;const q=h(B,V,P);r!==q&&(r=q,c(r.object)),Y=f(S,B,V,K),Y&&g(S,B,V,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(S,P,V,B),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,V){const B=V.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let Y=K[P.id];Y===void 0&&(Y={},K[P.id]=Y);let q=Y[B];return q===void 0&&(q=d(l()),Y[B]=q),q}function d(S){const P=[],V=[],B=[];for(let K=0;K<t;K++)P[K]=0,V[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,P,V,B){const K=r.attributes,Y=P.attributes;let q=0;const O=V.getAttributes();for(const J in O)if(O[J].location>=0){const ae=K[J];let de=Y[J];if(de===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(S,P,V,B){const K={},Y=P.attributes;let q=0;const O=V.getAttributes();for(const J in O)if(O[J].location>=0){let ae=Y[J];ae===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),K[J]=de,q++}r.attributes=K,r.attributesNum=q,r.index=B}function _(){const S=r.newAttributes;for(let P=0,V=S.length;P<V;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const V=r.newAttributes,B=r.enabledAttributes,K=r.attributeDivisors;V[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),K[S]!==P&&(i.vertexAttribDivisor(S,P),K[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let V=0,B=P.length;V<B;V++)P[V]!==S[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function E(S,P,V,B,K,Y,q){q===!0?i.vertexAttribIPointer(S,P,V,K,Y):i.vertexAttribPointer(S,P,V,B,K,Y)}function b(S,P,V,B){_();const K=B.attributes,Y=V.getAttributes(),q=P.defaultAttributeValues;for(const O in Y){const J=Y[O];if(J.location>=0){let re=K[O];if(re===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const ae=re.normalized,de=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;const ke=Oe.buffer,Tt=Oe.type,gt=Oe.bytesPerElement,Z=Tt===i.INT||Tt===i.UNSIGNED_INT||re.gpuType===rh;if(re.isInterleavedBufferAttribute){const te=re.data,xe=te.stride,ze=re.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<J.locationSize;Me++)p(J.location+Me,te.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<J.locationSize;Me++)m(J.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Me=0;Me<J.locationSize;Me++)E(J.location+Me,de/J.locationSize,Tt,ae,xe*gt,(ze+de/J.locationSize*Me)*gt,Z)}else{if(re.isInstancedBufferAttribute){for(let te=0;te<J.locationSize;te++)p(J.location+te,re.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let te=0;te<J.locationSize;te++)m(J.location+te);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let te=0;te<J.locationSize;te++)E(J.location+te,de/J.locationSize,Tt,ae,de*gt,de/J.locationSize*te*gt,Z)}}else if(q!==void 0){const ae=q[O];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(J.location,ae);break;case 3:i.vertexAttrib3fv(J.location,ae);break;case 4:i.vertexAttrib4fv(J.location,ae);break;default:i.vertexAttrib1fv(J.location,ae)}}}}M()}function A(){D();for(const S in n){const P=n[S];for(const V in P){const B=P[V];for(const K in B)u(B[K].object),delete B[K];delete P[V]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const V in P){const B=P[V];for(const K in B)u(B[K].object),delete B[K];delete P[V]}delete n[S.id]}function w(S){for(const P in n){const V=n[P];if(V[S.id]===void 0)continue;const B=V[S.id];for(const K in B)u(B[K].object),delete B[K];delete V[S.id]}}function D(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function MS(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bS(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xn&&!D)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:R}}function ES(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new bs,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,E=M*4;let b=p.clippingState||null;l.value=b,b=u(g,d,E,f);for(let A=0;A!==E;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==_;++E,b+=4)a.copy(h[E]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function TS(i){let e=new WeakMap;function t(a,o){return o===tu?a.mapping=dr:o===nu&&(a.mapping=ua),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===tu||o===nu)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new im(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const As=4,Kd=[.125,.215,.35,.446,.526,.582],Xs=20,AS=256,Ba=new Il,$d=new Be;let yc=null,Sc=0,Mc=0,bc=!1;const wS=new U;class Zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=wS}=r;yc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,Sc,Mc),this._renderer.xr.enabled=bc,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:us,format:qn,colorSpace:xn,depthBuffer:!1},s=Jd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RS(r)),this._blurMaterial=PS(r,e,t),this._ggxMaterial=CS(r,e,t)}return s}_compileMaterial(e){const t=new On(new Zn,e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,s,r){const l=new mn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($d),h.toneMapping=Ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new vo,new Ks({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy($d),p=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;Vr(s,b*A,E>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===dr||e.mapping===ua;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-As?n-g+As:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Vr(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Ba),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Vr(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Ba)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Xs;m>Xs&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);const p=[];let M=0;for(let w=0;w<Xs;++w){const D=w/_,x=Math.exp(-D*D/2);p.push(x),w===0?M+=x:w<m&&(M+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const b=this._sizeLods[s],A=3*b*(s>E-As?s-E+As:0),R=4*(this._cubeSize-b);Vr(t,A,R,3*b,2*b),l.setRenderTarget(t),l.render(h,Ba)}}function RS(i){const e=[],t=[],n=[];let s=i;const r=i-As+1+Kd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-As?l=Kd[a-i+As-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),E=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,D=R>2?0:-1,x=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];M.set(x,_*g*R),E.set(d,m*g*R);const S=[R,R,R,R,R,R];b.set(S,p*g*R)}const A=new Zn;A.setAttribute("position",new _n(M,_)),A.setAttribute("uv",new _n(E,m)),A.setAttribute("faceIndex",new _n(b,p)),n.push(new On(A,null)),s>As&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Jd(i,e,t){const n=new wi(i,e,t);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function CS(i,e,t){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function PS(i,e,t){const n=new Float32Array(Xs),s=new U(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Qd(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function ef(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function LS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===tu||l===nu,u=l===dr||l===ua;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Zd(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Zd(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function IS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&so("WebGLRenderer: "+n+" extension not supported."),s}}}function DS(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let E=0,b=M.length;E<b;E+=3){const A=M[E+0],R=M[E+1],w=M[E+2];d.push(A,R,R,w,w,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,b=M.length/3-1;E<b;E+=3){const A=E+0,R=E+1,w=E+2;d.push(A,R,R,w,w,A)}}else return;const m=new(jp(d)?Qp:Jp)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function NS(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function US(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function FS(i,e,t){const n=new WeakMap,s=new Rt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let A=o.attributes.position.count*b,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*R*4*h),D=new Kp(w,A,R,h);D.type=Xn,D.needsUpdate=!0;const x=b*4;for(let P=0;P<h;P++){const V=p[P],B=M[P],K=E[P],Y=A*R*4*P;for(let q=0;q<V.count;q++){const O=q*x;g===!0&&(s.fromBufferAttribute(V,q),w[Y+O+0]=s.x,w[Y+O+1]=s.y,w[Y+O+2]=s.z,w[Y+O+3]=0),_===!0&&(s.fromBufferAttribute(B,q),w[Y+O+4]=s.x,w[Y+O+5]=s.y,w[Y+O+6]=s.z,w[Y+O+7]=0),m===!0&&(s.fromBufferAttribute(K,q),w[Y+O+8]=s.x,w[Y+O+9]=s.y,w[Y+O+10]=s.z,w[Y+O+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new Fe(A,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function OS(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const BS={[Pp]:"LINEAR_TONE_MAPPING",[Lp]:"REINHARD_TONE_MAPPING",[Ip]:"CINEON_TONE_MAPPING",[Dp]:"ACES_FILMIC_TONE_MAPPING",[Up]:"AGX_TONE_MAPPING",[Fp]:"NEUTRAL_TONE_MAPPING",[Np]:"CUSTOM_TONE_MAPPING"};function kS(i,e,t,n,s){const r=new wi(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new wi(e,t,{type:us,depthBuffer:!1,stencilBuffer:!1}),o=new Zn;o.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ci([0,2,0,0,2,0],2));const l=new s0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new On(o,l),u=new Il(-1,1,1,-1,0,1);let h=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(M,E){r.setSize(M,E),a.setSize(M,E);for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(M,E)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,b=r.height;for(let A=0;A<m.length;A++){const R=m[A];R.setSize&&R.setSize(E,b)}},this.begin=function(M,E){if(f||M.toneMapping===Ai&&m.length===0)return!1;if(_=E,E!==null){const b=E.width,A=E.height;(r.width!==b||r.height!==A)&&this.setSize(b,A)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Ai,!0},this.hasRenderPass=function(){return p},this.end=function(M,E){M.toneMapping=g,f=!0;let b=r,A=a;for(let R=0;R<m.length;R++){const w=m[R];if(w.enabled!==!1&&(w.render(M,A,b,E),w.needsSwap!==!1)){const D=b;b=A,A=D}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,l.defines={},tt.getTransfer(h)===xt&&(l.defines.SRGB_TRANSFER="");const R=BS[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(_),M.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const fm=new tn,ku=new ro(1,1),pm=new Kp,mm=new Av,gm=new nm,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),af=new Float32Array(4);function Ea(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nl(i,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function VS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function HS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function WS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;af.set(n),i.uniformMatrix2fv(this.addr,!1,af),jt(t,n)}}function XS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),jt(t,n)}}function qS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),jt(t,n)}}function jS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function YS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function KS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function ZS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function JS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function QS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function tM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ku.compareFunction=t.isReversedDepthBuffer()?fh:dh,r=ku):r=fm,t.setTexture2D(e||r,s)}function nM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mm,s)}function iM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gm,s)}function sM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pm,s)}function rM(i){switch(i){case 5126:return zS;case 35664:return VS;case 35665:return HS;case 35666:return GS;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return jS;case 35667:case 35671:return YS;case 35668:case 35672:return KS;case 35669:case 35673:return $S;case 5125:return ZS;case 36294:return JS;case 36295:return QS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}function aM(i,e){i.uniform1fv(this.addr,e)}function oM(i,e){const t=Ea(e,this.size,2);i.uniform2fv(this.addr,t)}function lM(i,e){const t=Ea(e,this.size,3);i.uniform3fv(this.addr,t)}function cM(i,e){const t=Ea(e,this.size,4);i.uniform4fv(this.addr,t)}function uM(i,e){const t=Ea(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hM(i,e){const t=Ea(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dM(i,e){const t=Ea(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fM(i,e){i.uniform1iv(this.addr,e)}function pM(i,e){i.uniform2iv(this.addr,e)}function mM(i,e){i.uniform3iv(this.addr,e)}function gM(i,e){i.uniform4iv(this.addr,e)}function _M(i,e){i.uniform1uiv(this.addr,e)}function vM(i,e){i.uniform2uiv(this.addr,e)}function xM(i,e){i.uniform3uiv(this.addr,e)}function yM(i,e){i.uniform4uiv(this.addr,e)}function SM(i,e,t){const n=this.cache,s=e.length,r=Nl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ku:a=fm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function MM(i,e,t){const n=this.cache,s=e.length,r=Nl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||mm,r[a])}function bM(i,e,t){const n=this.cache,s=e.length,r=Nl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gm,r[a])}function EM(i,e,t){const n=this.cache,s=e.length,r=Nl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pm,r[a])}function TM(i){switch(i){case 5126:return aM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return xM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return EM}}class AM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rM(t.type)}}class wM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TM(t.type)}}class RM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function of(i,e){i.seq.push(e),i.map[e.id]=e}function CM(i,e,t){const n=i.name,s=n.length;for(Ec.lastIndex=0;;){const r=Ec.exec(n),a=Ec.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){of(t,c===void 0?new AM(o,i,e):new wM(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new RM(o),of(t,h)),t=h}}}class ll{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);CM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function lf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const PM=37297;let LM=0;function IM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cf=new Xe;function DM(i){tt._getMatrix(cf,tt.workingColorSpace,i);const e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case fl:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+IM(i.getShaderSource(e),o)}else return r}function NM(i,e){const t=DM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const UM={[Pp]:"Linear",[Lp]:"Reinhard",[Ip]:"Cineon",[Dp]:"ACESFilmic",[Up]:"AgX",[Fp]:"Neutral",[Np]:"Custom"};function FM(i,e){const t=UM[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zo=new U;function OM(){tt.getLuminanceCoefficients(Zo);const i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function kM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qa(i){return i!==""}function hf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(VM,GM)}const HM=new Map;function GM(i,e){let t=qe[e];if(t===void 0){const n=HM.get(e);if(n!==void 0)t=qe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(WM,XM)}function XM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qM={[nl]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function jM(i){return qM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YM={[dr]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function KM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":YM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const $M={[ua]:"ENVMAP_MODE_REFRACTION"};function ZM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$M[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JM={[Cp]:"ENVMAP_BLENDING_MULTIPLY",[G_]:"ENVMAP_BLENDING_MIX",[W_]:"ENVMAP_BLENDING_ADD"};function QM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":JM[i.combine]||"ENVMAP_BLENDING_NONE"}function eb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jM(t),c=KM(t),u=ZM(t),h=QM(t),d=eb(t),f=BM(t),g=kM(r),_=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(m=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ai?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,NM("linearToOutputTexel",t.outputColorSpace),OM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=zu(a),a=hf(a,t),a=df(a,t),o=zu(o),o=hf(o,t),o=df(o,t),a=ff(a),o=ff(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,b=M+p+o,A=lf(s,s.VERTEX_SHADER,E),R=lf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,A),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(A)||"",K=s.getShaderInfoLog(R)||"",Y=V.trim(),q=B.trim(),O=K.trim();let J=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,R);else{const ae=uf(s,A,"vertex"),de=uf(s,R,"fragment");Ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+ae+`
`+de)}else Y!==""?Ce("WebGLProgram: Program Info Log:",Y):(q===""||O==="")&&(re=!1);re&&(P.diagnostics={runnable:J,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(A),s.deleteShader(R),D=new ll(s,_),x=zM(s,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,PM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let nb=0;class ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sb(e),t.set(e,n)),n}}class sb{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}}function rb(i,e,t,n,s,r,a){const o=new $p,l=new ib,c=new Set,u=[],h=new Map,d=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,V,B){const K=V.fog,Y=B.geometry,q=x.isMeshStandardMaterial?V.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),J=O&&O.mapping===Rl?O.image.height:null,re=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=ae!==void 0?ae.length:0;let Oe=0;Y.morphAttributes.position!==void 0&&(Oe=1),Y.morphAttributes.normal!==void 0&&(Oe=2),Y.morphAttributes.color!==void 0&&(Oe=3);let ke,Tt,gt,Z;if(re){const ht=Mi[re];ke=ht.vertexShader,Tt=ht.fragmentShader}else ke=x.vertexShader,Tt=x.fragmentShader,l.update(x),gt=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ze=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,nt=!!x.map,Ft=!!x.matcap,Ze=!!O,ut=!!x.aoMap,ft=!!x.lightMap,He=!!x.bumpMap,Nt=!!x.normalMap,C=!!x.displacementMap,Pt=!!x.emissiveMap,it=!!x.metalnessMap,pt=!!x.roughnessMap,Ae=x.anisotropy>0,T=x.clearcoat>0,v=x.dispersion>0,I=x.iridescence>0,$=x.sheen>0,ee=x.transmission>0,j=Ae&&!!x.anisotropyMap,Ee=T&&!!x.clearcoatMap,ue=T&&!!x.clearcoatNormalMap,Te=T&&!!x.clearcoatRoughnessMap,De=I&&!!x.iridescenceMap,ie=I&&!!x.iridescenceThicknessMap,he=$&&!!x.sheenColorMap,Se=$&&!!x.sheenRoughnessMap,be=!!x.specularMap,oe=!!x.specularColorMap,Ge=!!x.specularIntensityMap,L=ee&&!!x.transmissionMap,ge=ee&&!!x.thicknessMap,se=!!x.gradientMap,_e=!!x.alphaMap,ne=x.alphaTest>0,Q=!!x.alphaHash,le=!!x.extensions;let Ue=Ai;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const _t={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:Tt,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:ze,instancingColor:ze&&B.instanceColor!==null,instancingMorph:ze&&B.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xn,alphaToCoverage:!!x.alphaToCoverage,map:nt,matcap:Ft,envMap:Ze,envMapMode:Ze&&O.mapping,envMapCubeUVHeight:J,aoMap:ut,lightMap:ft,bumpMap:He,normalMap:Nt,displacementMap:C,emissiveMap:Pt,normalMapObjectSpace:Nt&&x.normalMapType===K_,normalMapTangentSpace:Nt&&x.normalMapType===qp,metalnessMap:it,roughnessMap:pt,anisotropy:Ae,anisotropyMap:j,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Te,dispersion:v,iridescence:I,iridescenceMap:De,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:he,sheenRoughnessMap:Se,specularMap:be,specularColorMap:oe,specularIntensityMap:Ge,transmission:ee,transmissionMap:L,thicknessMap:ge,gradientMap:se,opaque:x.transparent===!1&&x.blending===jr&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Q,combine:x.combine,mapUv:nt&&_(x.map.channel),aoMapUv:ut&&_(x.aoMap.channel),lightMapUv:ft&&_(x.lightMap.channel),bumpMapUv:He&&_(x.bumpMap.channel),normalMapUv:Nt&&_(x.normalMap.channel),displacementMapUv:C&&_(x.displacementMap.channel),emissiveMapUv:Pt&&_(x.emissiveMap.channel),metalnessMapUv:it&&_(x.metalnessMap.channel),roughnessMapUv:pt&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:Ee&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(x.sheenRoughnessMap.channel),specularMapUv:be&&_(x.specularMap.channel),specularColorMapUv:oe&&_(x.specularColorMap.channel),specularIntensityMapUv:Ge&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:ge&&_(x.thicknessMap.channel),alphaMapUv:_e&&_(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Nt||Ae),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(nt||_e),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:nt&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:Pt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(S,x),E(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const S=g[x.type];let P;if(S){const V=Mi[S];P=kv.clone(V.uniforms)}else P=x.uniforms;return P}function A(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new tb(i,S,x,r),u.push(P),h.set(S,P)),P}function R(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:D}}function ab(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ob(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ob),n.length>1&&n.sort(d||mf),s.length>1&&s.sort(d||mf)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function lb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new gf,i.set(n,[a])):s>=r.length?(a=new gf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function ub(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hb=0;function db(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fb(i){const e=new cb,t=ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new je,a=new je;function o(c){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,E=0,b=0,A=0,R=0,w=0;c.sort(db);for(let x=0,S=c.length;x<S;x++){const P=c[x],V=P.color,B=P.intensity,K=P.distance;let Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===da?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*B,h+=V.g*B,d+=V.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],B);w++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(V).multiplyScalar(B),q.distance=K,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[_]=q;const O=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,O.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=Y,b++}_++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(V).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==A||D.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=A,D.numLightProbes=w,n.version=hb++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const E=c[p];if(E.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(E.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function _f(i){const e=new fb(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pb(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new _f(i),e.set(s,[o])):r>=a.length?(o=new _f(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`,_b=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],vb=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],vf=new je,ka=new U,Tc=new U;function xb(i,e,t){let n=new xh;const s=new Fe,r=new Fe,a=new Rt,o=new r0,l=new a0,c={},u=t.maxTextureSize,h={[cs]:An,[An]:cs,[bi]:bi},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let p=this.type;this.render=function(R,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===E_&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=nl);const x=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(as),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==this.type;B&&w.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Y=>Y.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Y=R.length;K<Y;K++){const q=R[K],O=q.shadow;if(O===void 0){Ce("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const J=O.getFrameExtents();if(s.multiply(J),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,O.mapSize.y=r.y)),O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Wa){if(q.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new wi(s.x,s.y,{format:da,type:us,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new ro(s.x,s.y,Xn),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=hs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt}else{q.isPointLight?(O.map=new im(s.x),O.map.depthTexture=new i0(s.x,Pi)):(O.map=new wi(s.x,s.y),O.map.depthTexture=new ro(s.x,s.y,Pi)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=hs;const ae=i.state.buffers.depth.getReversed();this.type===nl?(O.map.depthTexture.compareFunction=ae?fh:dh,O.map.depthTexture.minFilter=Wt,O.map.depthTexture.magFilter=Wt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Gt,O.map.depthTexture.magFilter=Gt)}O.camera.updateProjectionMatrix()}const re=O.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<re;ae++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(O.map),i.clear());const de=O.getViewport(ae);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),V.viewport(a)}if(q.isPointLight){const de=O.camera,Oe=O.matrix,ke=q.distance||de.far;ke!==de.far&&(de.far=ke,de.updateProjectionMatrix()),ka.setFromMatrixPosition(q.matrixWorld),de.position.copy(ka),Tc.copy(de.position),Tc.add(_b[ae]),de.up.copy(vb[ae]),de.lookAt(Tc),de.updateMatrixWorld(),Oe.makeTranslation(-ka.x,-ka.y,-ka.z),vf.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vf,de.coordinateSystem,de.reversedDepth)}else O.updateMatrices(q);n=O.getFrustum(),b(w,D,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Wa&&M(O,D),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,S,P)};function M(R,w){const D=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wi(s.x,s.y,{format:da,type:us})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,D,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,D,f,_,null)}function E(R,w,D,x){let S=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const V=S.uuid,B=w.uuid;let K=c[V];K===void 0&&(K={},c[V]=K);let Y=K[B];Y===void 0&&(Y=S.clone(),K[B]=Y,w.addEventListener("dispose",A)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,x===Wa?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=D}return S}function b(R,w,D,x,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Wa)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=e.update(R),K=R.material;if(Array.isArray(K)){const Y=B.groups;for(let q=0,O=Y.length;q<O;q++){const J=Y[q],re=K[J.materialIndex];if(re&&re.visible){const ae=E(R,re,x,S);R.onBeforeShadow(i,R,w,D,B,ae,J),i.renderBufferDirect(D,null,B,ae,R,J),R.onAfterShadow(i,R,w,D,B,ae,J)}}}else if(K.visible){const Y=E(R,K,x,S);R.onBeforeShadow(i,R,w,D,B,Y,null),i.renderBufferDirect(D,null,B,Y,R,null),R.onAfterShadow(i,R,w,D,B,Y,null)}}const V=R.children;for(let B=0,K=V.length;B<K;B++)b(V[B],w,D,x,S)}function A(R){R.target.removeEventListener("dispose",A);for(const D in c){const x=c[D],S=R.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const yb={[Yc]:Kc,[$c]:Qc,[Zc]:eu,[ca]:Jc,[Kc]:Yc,[Qc]:$c,[eu]:Zc,[Jc]:ca};function Sb(i,e){function t(){let L=!1;const ge=new Rt;let se=null;const _e=new Rt(0,0,0,0);return{setMask:function(ne){se!==ne&&!L&&(i.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){L=ne},setClear:function(ne,Q,le,Ue,_t){_t===!0&&(ne*=Ue,Q*=Ue,le*=Ue),ge.set(ne,Q,le,Ue),_e.equals(ge)===!1&&(i.clearColor(ne,Q,le,Ue),_e.copy(ge))},reset:function(){L=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,ge=!1,se=null,_e=null,ne=null;return{setReversed:function(Q){if(ge!==Q){const le=e.get("EXT_clip_control");Q?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),ge=Q;const Ue=ne;ne=null,this.setClear(Ue)}},getReversed:function(){return ge},setTest:function(Q){Q?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Q){se!==Q&&!L&&(i.depthMask(Q),se=Q)},setFunc:function(Q){if(ge&&(Q=yb[Q]),_e!==Q){switch(Q){case Yc:i.depthFunc(i.NEVER);break;case Kc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case Qc:i.depthFunc(i.GREATER);break;case eu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ne!==Q&&(ge&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){L=!1,se=null,_e=null,ne=null,ge=!1}}}function s(){let L=!1,ge=null,se=null,_e=null,ne=null,Q=null,le=null,Ue=null,_t=null;return{setTest:function(ht){L||(ht?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ht){ge!==ht&&!L&&(i.stencilMask(ht),ge=ht)},setFunc:function(ht,yn,wn){(se!==ht||_e!==yn||ne!==wn)&&(i.stencilFunc(ht,yn,wn),se=ht,_e=yn,ne=wn)},setOp:function(ht,yn,wn){(Q!==ht||le!==yn||Ue!==wn)&&(i.stencilOp(ht,yn,wn),Q=ht,le=yn,Ue=wn)},setLocked:function(ht){L=ht},setClear:function(ht){_t!==ht&&(i.clearStencil(ht),_t=ht)},reset:function(){L=!1,ge=null,se=null,_e=null,ne=null,Q=null,le=null,Ue=null,_t=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,E=null,b=null,A=null,R=null,w=new Be(0,0,0),D=0,x=!1,S=null,P=null,V=null,B=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,O=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=O>=1):J.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=O>=2);let re=null,ae={};const de=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),ke=new Rt().fromArray(de),Tt=new Rt().fromArray(Oe);function gt(L,ge,se,_e){const ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(L,Q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<se;le++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ge+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}const Z={};Z[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(ca),He(!1),Nt(nd),te(i.CULL_FACE),ut(as);function te(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ze(L,ge){return h[L]!==ge?(i.bindFramebuffer(L,ge),h[L]=ge,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Me(L,ge){let se=f,_e=!1;if(L){se=d.get(ge),se===void 0&&(se=[],d.set(ge,se));const ne=L.textures;if(se.length!==ne.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,le=ne.length;Q<le;Q++)se[Q]=i.COLOR_ATTACHMENT0+Q;se.length=ne.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function nt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Ft={[Ws]:i.FUNC_ADD,[A_]:i.FUNC_SUBTRACT,[w_]:i.FUNC_REVERSE_SUBTRACT};Ft[R_]=i.MIN,Ft[C_]=i.MAX;const Ze={[P_]:i.ZERO,[L_]:i.ONE,[I_]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[B_]:i.SRC_ALPHA_SATURATE,[F_]:i.DST_COLOR,[N_]:i.DST_ALPHA,[D_]:i.ONE_MINUS_SRC_COLOR,[jc]:i.ONE_MINUS_SRC_ALPHA,[O_]:i.ONE_MINUS_DST_COLOR,[U_]:i.ONE_MINUS_DST_ALPHA,[k_]:i.CONSTANT_COLOR,[z_]:i.ONE_MINUS_CONSTANT_COLOR,[V_]:i.CONSTANT_ALPHA,[H_]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(L,ge,se,_e,ne,Q,le,Ue,_t,ht){if(L===as){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),L!==T_){if(L!==m||ht!==x){if((p!==Ws||b!==Ws)&&(i.blendEquation(i.FUNC_ADD),p=Ws,b=Ws),ht)switch(L){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case id:i.blendFunc(i.ONE,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case id:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sd:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rd:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}M=null,E=null,A=null,R=null,w.set(0,0,0),D=0,m=L,x=ht}return}ne=ne||ge,Q=Q||se,le=le||_e,(ge!==p||ne!==b)&&(i.blendEquationSeparate(Ft[ge],Ft[ne]),p=ge,b=ne),(se!==M||_e!==E||Q!==A||le!==R)&&(i.blendFuncSeparate(Ze[se],Ze[_e],Ze[Q],Ze[le]),M=se,E=_e,A=Q,R=le),(Ue.equals(w)===!1||_t!==D)&&(i.blendColor(Ue.r,Ue.g,Ue.b,_t),w.copy(Ue),D=_t),m=L,x=!1}function ft(L,ge){L.side===bi?xe(i.CULL_FACE):te(i.CULL_FACE);let se=L.side===An;ge&&(se=!se),He(se),L.blending===jr&&L.transparent===!1?ut(as):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function Nt(L){L!==M_?(te(i.CULL_FACE),L!==P&&(L===nd?i.cullFace(i.BACK):L===b_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),P=L}function C(L){L!==V&&(q&&i.lineWidth(L),V=L)}function Pt(L,ge,se){L?(te(i.POLYGON_OFFSET_FILL),(B!==ge||K!==se)&&(i.polygonOffset(ge,se),B=ge,K=se)):xe(i.POLYGON_OFFSET_FILL)}function it(L){L?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pt(L){L===void 0&&(L=i.TEXTURE0+Y-1),re!==L&&(i.activeTexture(L),re=L)}function Ae(L,ge,se){se===void 0&&(re===null?se=i.TEXTURE0+Y-1:se=re);let _e=ae[se];_e===void 0&&(_e={type:void 0,texture:void 0},ae[se]=_e),(_e.type!==L||_e.texture!==ge)&&(re!==se&&(i.activeTexture(se),re=se),i.bindTexture(L,ge||Z[L]),_e.type=L,_e.texture=ge)}function T(){const L=ae[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function $(){try{i.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ee(){try{i.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ue(){try{i.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Te(){try{i.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function De(){try{i.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function ie(){try{i.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function he(L){ke.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function Se(L){Tt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Tt.copy(L))}function be(L,ge){let se=c.get(ge);se===void 0&&(se=new WeakMap,c.set(ge,se));let _e=se.get(L);_e===void 0&&(_e=i.getUniformBlockIndex(ge,L.name),se.set(L,_e))}function oe(L,ge){const _e=c.get(ge).get(L);l.get(ge)!==_e&&(i.uniformBlockBinding(ge,_e,L.__bindingPointIndex),l.set(ge,_e))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ae={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,E=null,b=null,A=null,R=null,w=new Be(0,0,0),D=0,x=!1,S=null,P=null,V=null,B=null,K=null,ke.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:ze,drawBuffers:Me,useProgram:nt,setBlending:ut,setMaterial:ft,setFlipSided:He,setCullFace:Nt,setLineWidth:C,setPolygonOffset:Pt,setScissorTest:it,activeTexture:pt,bindTexture:Ae,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:De,texImage3D:ie,updateUBOMapping:be,uniformBlockBinding:oe,texStorage2D:ue,texStorage3D:Te,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:he,viewport:Se,reset:Ge}}function Mb(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):io("canvas")}function _(T,v,I){let $=1;const ee=Ae(T);if((ee.width>I||ee.height>I)&&($=I/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor($*ee.width),Ee=Math.floor($*ee.height);h===void 0&&(h=g(j,Ee));const ue=v?g(j,Ee):h;return ue.width=j,ue.height=Ee,ue.getContext("2d").drawImage(T,0,0,j,Ee),Ce("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ee+")."),ue}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,I,$,ee=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===i.RED&&(I===i.FLOAT&&(j=i.R32F),I===i.HALF_FLOAT&&(j=i.R16F),I===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.R8UI),I===i.UNSIGNED_SHORT&&(j=i.R16UI),I===i.UNSIGNED_INT&&(j=i.R32UI),I===i.BYTE&&(j=i.R8I),I===i.SHORT&&(j=i.R16I),I===i.INT&&(j=i.R32I)),v===i.RG&&(I===i.FLOAT&&(j=i.RG32F),I===i.HALF_FLOAT&&(j=i.RG16F),I===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RG8UI),I===i.UNSIGNED_SHORT&&(j=i.RG16UI),I===i.UNSIGNED_INT&&(j=i.RG32UI),I===i.BYTE&&(j=i.RG8I),I===i.SHORT&&(j=i.RG16I),I===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGB8UI),I===i.UNSIGNED_SHORT&&(j=i.RGB16UI),I===i.UNSIGNED_INT&&(j=i.RGB32UI),I===i.BYTE&&(j=i.RGB8I),I===i.SHORT&&(j=i.RGB16I),I===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),I===i.UNSIGNED_INT&&(j=i.RGBA32UI),I===i.BYTE&&(j=i.RGBA8I),I===i.SHORT&&(j=i.RGBA16I),I===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const Ee=ee?fl:tt.getTransfer($);I===i.FLOAT&&(j=i.RGBA32F),I===i.HALF_FLOAT&&(j=i.RGBA16F),I===i.UNSIGNED_BYTE&&(j=Ee===xt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(T,v){let I;return T?v===null||v===Pi||v===eo?I=i.DEPTH24_STENCIL8:v===Xn?I=i.DEPTH32F_STENCIL8:v===Qa&&(I=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pi||v===eo?I=i.DEPTH_COMPONENT24:v===Xn?I=i.DEPTH_COMPONENT32F:v===Qa&&(I=i.DEPTH_COMPONENT16),I}function A(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){const v=T.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&u.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),S(v)}function D(T){const v=n.get(T);if(v.__webglInit===void 0)return;const I=T.source,$=d.get(I);if($){const ee=$[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&x(T),Object.keys($).length===0&&d.delete(I)}n.remove(T)}function x(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const I=T.source,$=d.get(I);delete $[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ee=0;ee<v.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=T.textures;for(let $=0,ee=I.length;$<ee;$++){const j=n.get(I[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(I[$])}n.remove(T)}let P=0;function V(){P=0}function B(){const T=P;return T>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function K(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Y(T,v){const I=n.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const $=T.image;if($===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(I,T,v);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function q(T,v){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Z(I,T,v);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function O(T,v){const I=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Z(I,T,v);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function J(T,v){const I=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){te(I,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}const re={[ha]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},ae={[Gt]:i.NEAREST,[Bp]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[il]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},de={[$_]:i.NEVER,[tv]:i.ALWAYS,[Z_]:i.LESS,[dh]:i.LEQUAL,[J_]:i.EQUAL,[fh]:i.GEQUAL,[Q_]:i.GREATER,[ev]:i.NOTEQUAL};function Oe(T,v){if(v.type===Xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wt||v.magFilter===il||v.magFilter===Xa||v.magFilter===ns||v.minFilter===Wt||v.minFilter===il||v.minFilter===Xa||v.minFilter===ns)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,re[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,re[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,re[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==Xa&&v.minFilter!==ns||v.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const $=v.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const j=K(v);if(j!==T.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ee[j].usedTimes++;const Ee=ee[T.__cacheKey];Ee!==void 0&&(ee[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(v)),T.__cacheKey=j,T.__webglTexture=ee[j].texture}return I}function Tt(T,v,I){return Math.floor(Math.floor(T/I)/v)}function gt(T,v,I,$){const j=T.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,I,$,v.data);else{j.sort((ie,he)=>ie.start-he.start);let Ee=0;for(let ie=1;ie<j.length;ie++){const he=j[Ee],Se=j[ie],be=he.start+he.count,oe=Tt(Se.start,v.width,4),Ge=Tt(he.start,v.width,4);Se.start<=be+1&&oe===Ge&&Tt(Se.start+Se.count-1,v.width,4)===oe?he.count=Math.max(he.count,Se.start+Se.count-he.start):(++Ee,j[Ee]=Se)}j.length=Ee+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ie=0,he=j.length;ie<he;ie++){const Se=j[ie],be=Math.floor(Se.start/4),oe=Math.ceil(Se.count/4),Ge=be%v.width,L=Math.floor(be/v.width),ge=oe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ge,L,ge,se,I,$,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function Z(T,v,I){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const ee=ke(T,v),j=v.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+I);const Ee=n.get(j);if(j.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+I);const ue=tt.getPrimaries(tt.workingColorSpace),Te=v.colorSpace===Es?null:tt.getPrimaries(v.colorSpace),De=v.colorSpace===Es||ue===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ie=_(v.image,!1,s.maxTextureSize);ie=pt(v,ie);const he=r.convert(v.format,v.colorSpace),Se=r.convert(v.type);let be=E(v.internalFormat,he,Se,v.colorSpace,v.isVideoTexture);Oe($,v);let oe;const Ge=v.mipmaps,L=v.isVideoTexture!==!0,ge=Ee.__version===void 0||ee===!0,se=j.dataReady,_e=A(v,ie);if(v.isDepthTexture)be=b(v.format===Ys,v.type),ge&&(L?t.texStorage2D(i.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,he,Se,null));else if(v.isDataTexture)if(Ge.length>0){L&&ge&&t.texStorage2D(i.TEXTURE_2D,_e,be,Ge[0].width,Ge[0].height);for(let ne=0,Q=Ge.length;ne<Q;ne++)oe=Ge[ne],L?se&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,oe.width,oe.height,he,Se,oe.data):t.texImage2D(i.TEXTURE_2D,ne,be,oe.width,oe.height,0,he,Se,oe.data);v.generateMipmaps=!1}else L?(ge&&t.texStorage2D(i.TEXTURE_2D,_e,be,ie.width,ie.height),se&&gt(v,ie,he,Se)):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,he,Se,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,be,Ge[0].width,Ge[0].height,ie.depth);for(let ne=0,Q=Ge.length;ne<Q;ne++)if(oe=Ge[ne],v.format!==qn)if(he!==null)if(L){if(se)if(v.layerUpdates.size>0){const le=Yd(oe.width,oe.height,v.format,v.type);for(const Ue of v.layerUpdates){const _t=oe.data.subarray(Ue*le/oe.data.BYTES_PER_ELEMENT,(Ue+1)*le/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ue,oe.width,oe.height,1,he,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,oe.width,oe.height,ie.depth,he,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,be,oe.width,oe.height,ie.depth,0,oe.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,oe.width,oe.height,ie.depth,he,Se,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,be,oe.width,oe.height,ie.depth,0,he,Se,oe.data)}else{L&&ge&&t.texStorage2D(i.TEXTURE_2D,_e,be,Ge[0].width,Ge[0].height);for(let ne=0,Q=Ge.length;ne<Q;ne++)oe=Ge[ne],v.format!==qn?he!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,oe.width,oe.height,he,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,be,oe.width,oe.height,0,oe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,oe.width,oe.height,he,Se,oe.data):t.texImage2D(i.TEXTURE_2D,ne,be,oe.width,oe.height,0,he,Se,oe.data)}else if(v.isDataArrayTexture)if(L){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,be,ie.width,ie.height,ie.depth),se)if(v.layerUpdates.size>0){const ne=Yd(ie.width,ie.height,v.format,v.type);for(const Q of v.layerUpdates){const le=ie.data.subarray(Q*ne/ie.data.BYTES_PER_ELEMENT,(Q+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,he,Se,le)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Se,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,he,Se,ie.data);else if(v.isData3DTexture)L?(ge&&t.texStorage3D(i.TEXTURE_3D,_e,be,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Se,ie.data)):t.texImage3D(i.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,he,Se,ie.data);else if(v.isFramebufferTexture){if(ge)if(L)t.texStorage2D(i.TEXTURE_2D,_e,be,ie.width,ie.height);else{let ne=ie.width,Q=ie.height;for(let le=0;le<_e;le++)t.texImage2D(i.TEXTURE_2D,le,be,ne,Q,0,he,Se,null),ne>>=1,Q>>=1}}else if(Ge.length>0){if(L&&ge){const ne=Ae(Ge[0]);t.texStorage2D(i.TEXTURE_2D,_e,be,ne.width,ne.height)}for(let ne=0,Q=Ge.length;ne<Q;ne++)oe=Ge[ne],L?se&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he,Se,oe):t.texImage2D(i.TEXTURE_2D,ne,be,he,Se,oe);v.generateMipmaps=!1}else if(L){if(ge){const ne=Ae(ie);t.texStorage2D(i.TEXTURE_2D,_e,be,ne.width,ne.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Se,ie)}else t.texImage2D(i.TEXTURE_2D,0,be,he,Se,ie);m(v)&&p($),Ee.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function te(T,v,I){if(v.image.length!==6)return;const $=ke(T,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);const j=n.get(ee);if(ee.version!==j.__version||$===!0){t.activeTexture(i.TEXTURE0+I);const Ee=tt.getPrimaries(tt.workingColorSpace),ue=v.colorSpace===Es?null:tt.getPrimaries(v.colorSpace),Te=v.colorSpace===Es||Ee===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!De&&!ie?he[Q]=_(v.image[Q],!0,s.maxCubemapSize):he[Q]=ie?v.image[Q].image:v.image[Q],he[Q]=pt(v,he[Q]);const Se=he[0],be=r.convert(v.format,v.colorSpace),oe=r.convert(v.type),Ge=E(v.internalFormat,be,oe,v.colorSpace),L=v.isVideoTexture!==!0,ge=j.__version===void 0||$===!0,se=ee.dataReady;let _e=A(v,Se);Oe(i.TEXTURE_CUBE_MAP,v);let ne;if(De){L&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,Se.width,Se.height);for(let Q=0;Q<6;Q++){ne=he[Q].mipmaps;for(let le=0;le<ne.length;le++){const Ue=ne[le];v.format!==qn?be!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Ue.width,Ue.height,be,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,Ge,Ue.width,Ue.height,0,Ue.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Ue.width,Ue.height,be,oe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,Ge,Ue.width,Ue.height,0,be,oe,Ue.data)}}}else{if(ne=v.mipmaps,L&&ge){ne.length>0&&_e++;const Q=Ae(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,be,oe,he[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,he[Q].width,he[Q].height,0,be,oe,he[Q].data);for(let le=0;le<ne.length;le++){const _t=ne[le].image[Q].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,_t.width,_t.height,be,oe,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,Ge,_t.width,_t.height,0,be,oe,_t.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be,oe,he[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,be,oe,he[Q]);for(let le=0;le<ne.length;le++){const Ue=ne[le];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,be,oe,Ue.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,Ge,be,oe,Ue.image[Q])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function xe(T,v,I,$,ee,j){const Ee=r.convert(I.format,I.colorSpace),ue=r.convert(I.type),Te=E(I.internalFormat,Ee,ue,I.colorSpace),De=n.get(v),ie=n.get(I);if(ie.__renderTarget=v,!De.__hasExternalTextures){const he=Math.max(1,v.width>>j),Se=Math.max(1,v.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,Te,he,Se,v.depth,0,Ee,ue,null):t.texImage2D(ee,j,Te,he,Se,0,Ee,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,ie.__webglTexture,0,C(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,ie.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(T,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const $=v.depthTexture,ee=$&&$.isDepthTexture?$.type:null,j=b(v.stencilBuffer,ee),Ee=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(v),j,v.width,v.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,T)}else{const $=v.textures;for(let ee=0;ee<$.length;ee++){const j=$[ee],Ee=r.convert(j.format,j.colorSpace),ue=r.convert(j.type),Te=E(j.internalFormat,Ee,ue,j.colorSpace);Pt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(v),Te,v.width,v.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(v),Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(T,v,I){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(v.depthTexture);if(ee.__renderTarget=v,(!ee.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,v.depthTexture);const De=r.convert(v.depthTexture.format),ie=r.convert(v.depthTexture.type);let he;v.depthTexture.format===hs?he=i.DEPTH_COMPONENT24:v.depthTexture.format===Ys&&(he=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,v.width,v.height,0,De,ie,null)}}else Y(v.depthTexture,0);const j=ee.__webglTexture,Ee=C(v),ue=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Te=v.depthTexture.format===Ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===hs)Pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ue,j,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ue,j,0);else if(v.depthTexture.format===Ys)Pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ue,j,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ue,j,0);else throw new Error("Unknown depthTexture format")}function nt(T){const v=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=$}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let $=0;$<6;$++)Me(v.__webglFramebuffer[$],T,$);else{const $=T.texture.mipmaps;$&&$.length>0?Me(v.__webglFramebuffer[0],T,0):Me(v.__webglFramebuffer,T,0)}else if(I){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),ze(v.__webglDepthbuffer[$],T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}else{const $=T.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ze(v.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,v,I){const $=n.get(T);v!==void 0&&xe($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&nt(T)}function Ze(T){const v=T.texture,I=n.get(T),$=n.get(v);T.addEventListener("dispose",w);const ee=T.textures,j=T.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),j){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let Te=0;Te<v.mipmaps.length;Te++)I.__webglFramebuffer[ue][Te]=i.createFramebuffer()}else I.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)I.__webglFramebuffer[ue]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ue=0,Te=ee.length;ue<Te;ue++){const De=n.get(ee[ue]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Pt(T)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const Te=ee[ue];I.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const De=r.convert(Te.format,Te.colorSpace),ie=r.convert(Te.type),he=E(Te.internalFormat,De,ie,Te.colorSpace,T.isXRRenderTarget===!0),Se=C(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)xe(I.__webglFramebuffer[ue][Te],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te);else xe(I.__webglFramebuffer[ue],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,Te=ee.length;ue<Te;ue++){const De=ee[ue],ie=n.get(De);let he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Oe(he,De),xe(I.__webglFramebuffer,T,De,i.COLOR_ATTACHMENT0+ue,he,0),m(De)&&p(he)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,$.__webglTexture),Oe(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)xe(I.__webglFramebuffer[Te],T,v,i.COLOR_ATTACHMENT0,ue,Te);else xe(I.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}T.depthBuffer&&nt(T)}function ut(T){const v=T.textures;for(let I=0,$=v.length;I<$;I++){const ee=v[I];if(m(ee)){const j=M(T),Ee=n.get(ee).__webglTexture;t.bindTexture(j,Ee),p(j),t.unbindTexture()}}}const ft=[],He=[];function Nt(T){if(T.samples>0){if(Pt(T)===!1){const v=T.textures,I=T.width,$=T.height;let ee=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(T),ue=v.length>1;if(ue)for(let De=0;De<v.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let De=0;De<v.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[De]);const ie=n.get(v[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,I,$,0,0,I,$,ee,i.NEAREST),l===!0&&(ft.length=0,He.length=0,ft.push(i.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ft.push(j),He.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let De=0;De<v.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[De]);const ie=n.get(v[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function C(T){return Math.min(s.maxSamples,T.samples)}function Pt(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function pt(T,v){const I=T.colorSpace,$=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==xn&&I!==Es&&(tt.getTransfer(I)===xt?($!==qn||ee!==Un)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",I)),v}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=Ft,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bb(i,e){function t(n,s=Es){let r;const a=tt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kp)return i.BYTE;if(n===zp)return i.SHORT;if(n===Qa)return i.UNSIGNED_SHORT;if(n===rh)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===Gp)return i.ALPHA;if(n===Wp)return i.RGB;if(n===qn)return i.RGBA;if(n===hs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===lh)return i.RED;if(n===ch)return i.RED_INTEGER;if(n===da)return i.RG;if(n===uh)return i.RG_INTEGER;if(n===hh)return i.RGBA_INTEGER;if(n===sl||n===rl||n===al||n===ol)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ol)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===iu||n===su||n===ru||n===au)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===su)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===au)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ou||n===lu||n===cu||n===uu||n===hu||n===du||n===fu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ou||n===lu)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uu)return r.COMPRESSED_R11_EAC;if(n===hu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===du)return r.COMPRESSED_RG11_EAC;if(n===fu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===yu||n===Su||n===Mu||n===bu||n===Eu||n===Tu||n===Au||n===wu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Au)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Cu||n===Pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ru)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===Iu||n===Du||n===Nu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`;class Ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new om(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Di({vertexShader:Eb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new On(new Cl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wb extends mr{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ab,p={},M=t.getContextAttributes();let E=null,b=null;const A=[],R=[],w=new Fe;let D=null;const x=new mn;x.viewport=new Rt;const S=new mn;S.viewport=new Rt;const P=[x,S],V=new w0;let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=A[Z];return te===void 0&&(te=new fc,A[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=A[Z];return te===void 0&&(te=new fc,A[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=A[Z];return te===void 0&&(te=new fc,A[Z]=te),te.getHandSpace()};function Y(Z){const te=R.indexOf(Z.inputSource);if(te===-1)return;const xe=A[te];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",O);for(let Z=0;Z<A.length;Z++){const te=R[Z];te!==null&&(R[Z]=null,A[Z].disconnect(te))}B=null,K=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(E),f=null,d=null,h=null,s=null,b=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ze=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?Ys:hs,ze=M.stencil?eo:Pi);const nt={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new wi(d.textureWidth,d.textureHeight,{format:qn,type:Un,depthTexture:new ro(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new wi(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Z){for(let te=0;te<Z.removed.length;te++){const xe=Z.removed[te],ze=R.indexOf(xe);ze>=0&&(R[ze]=null,A[ze].disconnect(xe))}for(let te=0;te<Z.added.length;te++){const xe=Z.added[te];let ze=R.indexOf(xe);if(ze===-1){for(let nt=0;nt<A.length;nt++)if(nt>=R.length){R.push(xe),ze=nt;break}else if(R[nt]===null){R[nt]=xe,ze=nt;break}if(ze===-1)break}const Me=A[ze];Me&&Me.connect(xe)}}const J=new U,re=new U;function ae(Z,te,xe){J.setFromMatrixPosition(te.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const ze=J.distanceTo(re),Me=te.projectionMatrix.elements,nt=xe.projectionMatrix.elements,Ft=Me[14]/(Me[10]-1),Ze=Me[14]/(Me[10]+1),ut=(Me[9]+1)/Me[5],ft=(Me[9]-1)/Me[5],He=(Me[8]-1)/Me[0],Nt=(nt[8]+1)/nt[0],C=Ft*He,Pt=Ft*Nt,it=ze/(-He+Nt),pt=it*-He;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pt),Z.translateZ(it),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ae=Ft+it,T=Ze+it,v=C-pt,I=Pt+(ze-pt),$=ut*Ze/T*Ae,ee=ft*Ze/T*Ae;Z.projectionMatrix.makePerspective(v,I,$,ee,Ae,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,xe=Z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),V.near=S.near=x.near=te,V.far=S.far=x.far=xe,(B!==V.near||K!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),B=V.near,K=V.far),V.layers.mask=Z.layers.mask|6,x.layers.mask=V.layers.mask&3,S.layers.mask=V.layers.mask&5;const ze=Z.parent,Me=V.cameras;de(V,ze);for(let nt=0;nt<Me.length;nt++)de(Me[nt],ze);Me.length===2?ae(V,x,S):V.projectionMatrix.copy(x.projectionMatrix),Oe(Z,V,ze)};function Oe(Z,te,xe){xe===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return p[Z]};let ke=null;function Tt(Z,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,ze=!0);for(let Ze=0;Ze<xe.length;Ze++){const ut=xe[Ze];let ft=null;if(f!==null)ft=f.getViewport(ut);else{const Nt=h.getViewSubImage(d,ut);ft=Nt.viewport,Ze===0&&(e.setRenderTargetTextures(b,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(b))}let He=P[Ze];He===void 0&&(He=new mn,He.layers.enable(Ze),He.viewport=new Rt,P[Ze]=He),He.matrix.fromArray(ut.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ut.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ft.x,ft.y,ft.width,ft.height),Ze===0&&(V.matrix.copy(He.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ze===!0&&V.cameras.push(He)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ze=h.getDepthInformation(xe[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ze=0;Ze<xe.length;Ze++){const ut=xe[Ze].camera;if(ut){let ft=p[ut];ft||(ft=new om,p[ut]=ft);const He=h.getCameraImage(ut);ft.sourceTexture=He}}}}for(let xe=0;xe<A.length;xe++){const ze=R[xe],Me=A[xe];ze!==null&&Me!==void 0&&Me.update(ze,te,c||a)}ke&&ke(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const gt=new dm;gt.setAnimationLoop(Tt),this.setAnimationLoop=function(Z){ke=Z},this.dispose=function(){}}}const Hs=new Ii,Rb=new je;function Cb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,em(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,b=M.envMapRotation;E&&(m.envMap.value=E,Hs.copy(b),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(Hs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pb(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const b=E.program;n.uniformBlockBinding(M,b)}function c(M,E){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(M,A);const R=e.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function u(M){const E=h();M.__bindingPointIndex=E;const b=i.createBuffer(),A=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=s[M.id],b=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,w=b.length;R<w;R++){const D=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,S=D.length;x<S;x++){const P=D[x];if(f(P,R,x,A)===!0){const V=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let Y=0;Y<B.length;Y++){const q=B[Y],O=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+K,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,K),K+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,E,b,A){const R=M.value,w=E+"_"+b;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{const D=A[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(M){const E=M.uniforms;let b=0;const A=16;for(let w=0,D=E.length;w<D;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,P=x.length;S<P;S++){const V=x[S],B=Array.isArray(V.value)?V.value:[V.value];for(let K=0,Y=B.length;K<Y;K++){const q=B[K],O=_(q),J=b%A,re=J%O.boundary,ae=J+re;b+=re,ae!==0&&A-ae<O.storage&&(b+=A-ae),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=O.storage}}}const R=b%A;return R>0&&(b+=A-R),M.__size=b,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Lb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function Ib(){return gi===null&&(gi=new _h(Lb,16,16,da,us),gi.name="DFG_LUT",gi.minFilter=Wt,gi.magFilter=Wt,gi.wrapS=Ei,gi.wrapT=Ei,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class Db{constructor(e={}){const{canvas:t=iv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([hh,uh,ch]),p=new Set([Un,Pi,Qa,eo,ah,oh]),M=new Uint32Array(4),E=new Int32Array(4);let b=null,A=null;const R=[],w=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=rn;let P=0,V=0,B=null,K=-1,Y=null;const q=new Rt,O=new Rt;let J=null;const re=new Be(0);let ae=0,de=t.width,Oe=t.height,ke=1,Tt=null,gt=null;const Z=new Rt(0,0,de,Oe),te=new Rt(0,0,de,Oe);let xe=!1;const ze=new xh;let Me=!1,nt=!1;const Ft=new je,Ze=new U,ut=new Rt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Nt(){return B===null?ke:1}let C=n;function Pt(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sh}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ht,!1),C===null){const N="webgl2";if(C=Pt(N,y),C===null)throw Pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ne("WebGLRenderer: "+y.message),y}let it,pt,Ae,T,v,I,$,ee,j,Ee,ue,Te,De,ie,he,Se,be,oe,Ge,L,ge,se,_e,ne;function Q(){it=new IS(C),it.init(),se=new bb(C,it),pt=new bS(C,it,e,se),Ae=new Sb(C,it),pt.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),T=new US(C),v=new ab,I=new Mb(C,it,Ae,v,pt,se,T),$=new TS(x),ee=new LS(x),j=new k0(C),_e=new SS(C,j),Ee=new DS(C,j,T,_e),ue=new OS(C,Ee,j,T),Ge=new FS(C,pt,I),Se=new ES(v),Te=new rb(x,$,ee,it,pt,_e,Se),De=new Cb(x,v),ie=new lb,he=new pb(it),oe=new yS(x,$,ee,Ae,ue,g,l),be=new xb(x,ue,pt),ne=new Pb(C,T,pt,Ae),L=new MS(C,it,T),ge=new NS(C,it,T),T.programs=Te.programs,x.capabilities=pt,x.extensions=it,x.properties=v,x.renderLists=ie,x.shadowMap=be,x.state=Ae,x.info=T}Q(),_!==Un&&(D=new kS(_,t.width,t.height,s,r));const le=new wb(x,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=it.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=it.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(y){y!==void 0&&(ke=y,this.setSize(de,Oe,!1))},this.getSize=function(y){return y.set(de,Oe)},this.setSize=function(y,N,H=!0){if(le.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}de=y,Oe=N,t.width=Math.floor(y*ke),t.height=Math.floor(N*ke),H===!0&&(t.style.width=y+"px",t.style.height=N+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(de*ke,Oe*ke).floor()},this.setDrawingBufferSize=function(y,N,H){de=y,Oe=N,ke=H,t.width=Math.floor(y*H),t.height=Math.floor(N*H),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(_===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(q)},this.getViewport=function(y){return y.copy(Z)},this.setViewport=function(y,N,H,z){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,N,H,z),Ae.viewport(q.copy(Z).multiplyScalar(ke).round())},this.getScissor=function(y){return y.copy(te)},this.setScissor=function(y,N,H,z){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,N,H,z),Ae.scissor(O.copy(te).multiplyScalar(ke).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(y){Ae.setScissorTest(xe=y)},this.setOpaqueSort=function(y){Tt=y},this.setTransparentSort=function(y){gt=y},this.getClearColor=function(y){return y.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,H=!0){let z=0;if(y){let F=!1;if(B!==null){const fe=B.texture.format;F=m.has(fe)}if(F){const fe=B.texture.type,ve=p.has(fe),pe=oe.getClearColor(),ye=oe.getClearAlpha(),we=pe.r,Ie=pe.g,Le=pe.b;ve?(M[0]=we,M[1]=Ie,M[2]=Le,M[3]=ye,C.clearBufferuiv(C.COLOR,0,M)):(E[0]=we,E[1]=Ie,E[2]=Le,E[3]=ye,C.clearBufferiv(C.COLOR,0,E))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT),H&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),oe.dispose(),ie.dispose(),he.dispose(),v.dispose(),$.dispose(),ee.dispose(),ue.dispose(),_e.dispose(),ne.dispose(),Te.dispose(),le.dispose(),le.removeEventListener("sessionstart",gr),le.removeEventListener("sessionend",_r),Hi.stop()};function Ue(y){y.preventDefault(),ml("WebGLRenderer: Context Lost."),S=!0}function _t(){ml("WebGLRenderer: Context Restored."),S=!1;const y=T.autoReset,N=be.enabled,H=be.autoUpdate,z=be.needsUpdate,F=be.type;Q(),T.autoReset=y,be.enabled=N,be.autoUpdate=H,be.needsUpdate=z,be.type=F}function ht(y){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function yn(y){const N=y.target;N.removeEventListener("dispose",yn),wn(N)}function wn(y){Ul(y),v.remove(y)}function Ul(y){const N=v.get(y).programs;N!==void 0&&(N.forEach(function(H){Te.releaseProgram(H)}),y.isShaderMaterial&&Te.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,H,z,F,fe){N===null&&(N=ft);const ve=F.isMesh&&F.matrixWorld.determinant()<0,pe=wa(y,N,H,z,F);Ae.setMaterial(z,ve);let ye=H.index,we=1;if(z.wireframe===!0){if(ye=Ee.getWireframeAttribute(H),ye===void 0)return;we=2}const Ie=H.drawRange,Le=H.attributes.position;let We=Ie.start*we,mt=(Ie.start+Ie.count)*we;fe!==null&&(We=Math.max(We,fe.start*we),mt=Math.min(mt,(fe.start+fe.count)*we)),ye!==null?(We=Math.max(We,0),mt=Math.min(mt,ye.count)):Le!=null&&(We=Math.max(We,0),mt=Math.min(mt,Le.count));const At=mt-We;if(At<0||At===1/0)return;_e.setup(F,z,pe,H,ye);let Ct,dt=L;if(ye!==null&&(Ct=j.get(ye),dt=ge,dt.setIndex(Ct)),F.isMesh)z.wireframe===!0?(Ae.setLineWidth(z.wireframeLinewidth*Nt()),dt.setMode(C.LINES)):dt.setMode(C.TRIANGLES);else if(F.isLine){let Pe=z.linewidth;Pe===void 0&&(Pe=1),Ae.setLineWidth(Pe*Nt()),F.isLineSegments?dt.setMode(C.LINES):F.isLineLoop?dt.setMode(C.LINE_LOOP):dt.setMode(C.LINE_STRIP)}else F.isPoints?dt.setMode(C.POINTS):F.isSprite&&dt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)so("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))dt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,rt=F._multiDrawCounts,st=F._multiDrawCount,on=ye?j.get(ye).bytesPerElement:1,mi=v.get(z).currentProgram.getUniforms();for(let ln=0;ln<st;ln++)mi.setValue(C,"_gl_DrawID",ln),dt.render(Pe[ln]/on,rt[ln])}else if(F.isInstancedMesh)dt.renderInstances(We,At,F.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,rt=Math.min(H.instanceCount,Pe);dt.renderInstances(We,At,rt)}else dt.render(We,At)};function yo(y,N,H){y.transparent===!0&&y.side===bi&&y.forceSinglePass===!1?(y.side=An,y.needsUpdate=!0,Sr(y,N,H),y.side=cs,y.needsUpdate=!0,Sr(y,N,H),y.side=bi):Sr(y,N,H)}this.compile=function(y,N,H=null){H===null&&(H=y),A=he.get(H),A.init(N),w.push(A),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),y!==H&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights();const z=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const fe=F.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const pe=fe[ve];yo(pe,H,F),z.add(pe)}else yo(fe,H,F),z.add(fe)}),A=w.pop(),z},this.compileAsync=function(y,N,H=null){const z=this.compile(y,N,H);return new Promise(F=>{function fe(){if(z.forEach(function(ve){v.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){F(y);return}setTimeout(fe,10)}it.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ns=null;function So(y){Ns&&Ns(y)}function gr(){Hi.stop()}function _r(){Hi.start()}const Hi=new dm;Hi.setAnimationLoop(So),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(y){Ns=y,le.setAnimationLoop(y),y===null?Hi.stop():Hi.start()},le.addEventListener("sessionstart",gr),le.addEventListener("sessionend",_r),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const H=le.enabled===!0&&le.isPresenting===!0,z=D!==null&&(B===null||H)&&D.begin(x,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,N,B),A=he.get(y,w.length),A.init(N),w.push(A),Ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(Ft,Ti,N.reversedDepth),nt=this.localClippingEnabled,Me=Se.init(this.clippingPlanes,nt),b=ie.get(y,R.length),b.init(),R.push(b),le.enabled===!0&&le.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&vr(ve,N,-1/0,x.sortObjects)}vr(y,N,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(Tt,gt),He=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,He&&oe.addToRenderList(b,y),this.info.render.frame++,Me===!0&&Se.beginShadows();const F=A.state.shadowsArray;if(be.render(F,y,N),Me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&D.hasRenderPass())===!1){const ve=b.opaque,pe=b.transmissive;if(A.setupLights(),N.isArrayCamera){const ye=N.cameras;if(pe.length>0)for(let we=0,Ie=ye.length;we<Ie;we++){const Le=ye[we];Ta(ve,pe,y,Le)}He&&oe.render(y);for(let we=0,Ie=ye.length;we<Ie;we++){const Le=ye[we];Mo(b,y,Le,Le.viewport)}}else pe.length>0&&Ta(ve,pe,y,N),He&&oe.render(y),Mo(b,y,N)}B!==null&&V===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),z&&D.end(x),y.isScene===!0&&y.onAfterRender(x,y,N),_e.resetDefaultState(),K=-1,Y=null,w.pop(),w.length>0?(A=w[w.length-1],Me===!0&&Se.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?b=R[R.length-1]:b=null};function vr(y,N,H,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ze.intersectsSprite(y)){z&&ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ft);const ve=ue.update(y),pe=y.material;pe.visible&&b.push(y,ve,pe,H,ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ze.intersectsObject(y))){const ve=ue.update(y),pe=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ut.copy(y.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ut.copy(ve.boundingSphere.center)),ut.applyMatrix4(y.matrixWorld).applyMatrix4(Ft)),Array.isArray(pe)){const ye=ve.groups;for(let we=0,Ie=ye.length;we<Ie;we++){const Le=ye[we],We=pe[Le.materialIndex];We&&We.visible&&b.push(y,ve,We,H,ut.z,Le)}}else pe.visible&&b.push(y,ve,pe,H,ut.z,null)}}const fe=y.children;for(let ve=0,pe=fe.length;ve<pe;ve++)vr(fe[ve],N,H,z)}function Mo(y,N,H,z){const{opaque:F,transmissive:fe,transparent:ve}=y;A.setupLightsView(H),Me===!0&&Se.setGlobalState(x.clippingPlanes,H),z&&Ae.viewport(q.copy(z)),F.length>0&&xr(F,N,H),fe.length>0&&xr(fe,N,H),ve.length>0&&xr(ve,N,H),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ta(y,N,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const We=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new wi(1,1,{generateMipmaps:!0,type:We?us:Un,minFilter:ns,samples:pt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const fe=A.state.transmissionRenderTarget[z.id],ve=z.viewport||q;fe.setSize(ve.z*x.transmissionResolutionScale,ve.w*x.transmissionResolutionScale);const pe=x.getRenderTarget(),ye=x.getActiveCubeFace(),we=x.getActiveMipmapLevel();x.setRenderTarget(fe),x.getClearColor(re),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),He&&oe.render(H);const Ie=x.toneMapping;x.toneMapping=Ai;const Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Me===!0&&Se.setGlobalState(x.clippingPlanes,z),xr(y,H,z),I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe),it.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let mt=0,At=N.length;mt<At;mt++){const Ct=N[mt],{object:dt,geometry:Pe,material:rt,group:st}=Ct;if(rt.side===bi&&dt.layers.test(z.layers)){const on=rt.side;rt.side=An,rt.needsUpdate=!0,yr(dt,H,z,Pe,rt,st),rt.side=on,rt.needsUpdate=!0,We=!0}}We===!0&&(I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe))}x.setRenderTarget(pe,ye,we),x.setClearColor(re,ae),Le!==void 0&&(z.viewport=Le),x.toneMapping=Ie}function xr(y,N,H){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,fe=y.length;F<fe;F++){const ve=y[F],{object:pe,geometry:ye,group:we}=ve;let Ie=ve.material;Ie.allowOverride===!0&&z!==null&&(Ie=z),pe.layers.test(H.layers)&&yr(pe,N,H,ye,Ie,we)}}function yr(y,N,H,z,F,fe){y.onBeforeRender(x,N,H,z,F,fe),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(x,N,H,z,y,fe),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=An,F.needsUpdate=!0,x.renderBufferDirect(H,N,z,F,y,fe),F.side=cs,F.needsUpdate=!0,x.renderBufferDirect(H,N,z,F,y,fe),F.side=bi):x.renderBufferDirect(H,N,z,F,y,fe),y.onAfterRender(x,N,H,z,F,fe)}function Sr(y,N,H){N.isScene!==!0&&(N=ft);const z=v.get(y),F=A.state.lights,fe=A.state.shadowsArray,ve=F.state.version,pe=Te.getParameters(y,F.state,fe,N,H),ye=Te.getProgramCacheKey(pe);let we=z.programs;z.environment=y.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(y.isMeshStandardMaterial?ee:$).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",yn),we=new Map,z.programs=we);let Ie=we.get(ye);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===ve)return Aa(y,pe),Ie}else pe.uniforms=Te.getUniforms(y),y.onBeforeCompile(pe,x),Ie=Te.acquireProgram(pe,ye),we.set(ye,Ie),z.uniforms=pe.uniforms;const Le=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=Se.uniform),Aa(y,pe),z.needsLights=Fl(y),z.lightsStateVersion=ve,z.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Mr(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=ll.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Aa(y,N){const H=v.get(y);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function wa(y,N,H,z,F){N.isScene!==!0&&(N=ft),I.resetTextureUnits();const fe=N.fog,ve=z.isMeshStandardMaterial?N.environment:null,pe=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:xn,ye=(z.isMeshStandardMaterial?ee:$).get(z.envMap||ve),we=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!H.morphAttributes.position,We=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let At=Ai;z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(At=x.toneMapping);const Ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,dt=Ct!==void 0?Ct.length:0,Pe=v.get(z),rt=A.state.lights;if(Me===!0&&(nt===!0||y!==Y)){const Zt=y===Y&&z.id===K;Se.setState(z,y,Zt)}let st=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==rt.state.version||Pe.outputColorSpace!==pe||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==ye||z.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Se.numPlanes||Pe.numIntersection!==Se.numIntersection)||Pe.vertexAlphas!==we||Pe.vertexTangents!==Ie||Pe.morphTargets!==Le||Pe.morphNormals!==We||Pe.morphColors!==mt||Pe.toneMapping!==At||Pe.morphTargetsCount!==dt)&&(st=!0):(st=!0,Pe.__version=z.version);let on=Pe.currentProgram;st===!0&&(on=Sr(z,N,F));let mi=!1,ln=!1,Us=!1;const vt=on.getUniforms(),cn=Pe.uniforms;if(Ae.useProgram(on.program)&&(mi=!0,ln=!0,Us=!0),z.id!==K&&(K=z.id,ln=!0),mi||Y!==y){Ae.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),vt.setValue(C,"projectionMatrix",y.projectionMatrix),vt.setValue(C,"viewMatrix",y.matrixWorldInverse);const Jt=vt.map.cameraPosition;Jt!==void 0&&Jt.setValue(C,Ze.setFromMatrixPosition(y.matrixWorld)),pt.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),Y!==y&&(Y=y,ln=!0,Us=!0)}if(Pe.needsLights&&(rt.state.directionalShadowMap.length>0&&vt.setValue(C,"directionalShadowMap",rt.state.directionalShadowMap,I),rt.state.spotShadowMap.length>0&&vt.setValue(C,"spotShadowMap",rt.state.spotShadowMap,I),rt.state.pointShadowMap.length>0&&vt.setValue(C,"pointShadowMap",rt.state.pointShadowMap,I)),F.isSkinnedMesh){vt.setOptional(C,F,"bindMatrix"),vt.setOptional(C,F,"bindMatrixInverse");const Zt=F.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),vt.setValue(C,"boneTexture",Zt.boneTexture,I))}F.isBatchedMesh&&(vt.setOptional(C,F,"batchingTexture"),vt.setValue(C,"batchingTexture",F._matricesTexture,I),vt.setOptional(C,F,"batchingIdTexture"),vt.setValue(C,"batchingIdTexture",F._indirectTexture,I),vt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(C,"batchingColorTexture",F._colorsTexture,I));const un=H.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ge.update(F,H,on),(ln||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,vt.setValue(C,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(cn.envMap.value=ye,cn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Ib()),ln&&(vt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Ra(cn,Us),fe&&z.fog===!0&&De.refreshFogUniforms(cn,fe),De.refreshMaterialUniforms(cn,z,ke,Oe,A.state.transmissionRenderTarget[y.id]),ll.upload(C,Mr(Pe),cn,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ll.upload(C,Mr(Pe),cn,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(C,"center",F.center),vt.setValue(C,"modelViewMatrix",F.modelViewMatrix),vt.setValue(C,"normalMatrix",F.normalMatrix),vt.setValue(C,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Zt=z.uniformsGroups;for(let Jt=0,Fs=Zt.length;Jt<Fs;Jt++){const Gi=Zt[Jt];ne.update(Gi,on),ne.bind(Gi,on)}}return on}function Ra(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Fl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,N,H){const z=v.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),v.get(y.texture).__webglTexture=N,v.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const H=v.get(y);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const bo=C.createFramebuffer();this.setRenderTarget=function(y,N=0,H=0){B=y,P=N,V=H;let z=null,F=!1,fe=!1;if(y){const pe=v.get(y);if(pe.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(C.FRAMEBUFFER,pe.__webglFramebuffer),q.copy(y.viewport),O.copy(y.scissor),J=y.scissorTest,Ae.viewport(q),Ae.scissor(O),Ae.setScissorTest(J),K=-1;return}else if(pe.__webglFramebuffer===void 0)I.setupRenderTarget(y);else if(pe.__hasExternalTextures)I.rebindTextures(y,v.get(y.texture).__webglTexture,v.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(pe.__boundDepthTexture!==Ie){if(Ie!==null&&v.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(y)}}const ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);const we=v.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[N])?z=we[N][H]:z=we[N],F=!0):y.samples>0&&I.useMultisampledRTT(y)===!1?z=v.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[H]:z=we,q.copy(y.viewport),O.copy(y.scissor),J=y.scissorTest}else q.copy(Z).multiplyScalar(ke).floor(),O.copy(te).multiplyScalar(ke).floor(),J=xe;if(H!==0&&(z=bo),Ae.bindFramebuffer(C.FRAMEBUFFER,z)&&Ae.drawBuffers(y,z),Ae.viewport(q),Ae.scissor(O),Ae.setScissorTest(J),F){const pe=v.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,H)}else if(fe){const pe=N;for(let ye=0;ye<y.textures.length;ye++){const we=v.get(y.textures[ye]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ye,we.__webglTexture,H,pe)}}else if(y!==null&&H!==0){const pe=v.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,pe.__webglTexture,H)}K=-1},this.readRenderTargetPixels=function(y,N,H,z,F,fe,ve,pe=0){if(!(y&&y.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){Ae.bindFramebuffer(C.FRAMEBUFFER,ye);try{const we=y.textures[pe],Ie=we.format,Le=we.type;if(!pt.textureFormatReadable(Ie)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Le)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&H>=0&&H<=y.height-F&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(N,H,z,F,se.convert(Ie),se.convert(Le),fe))}finally{const we=B!==null?v.get(B).__webglFramebuffer:null;Ae.bindFramebuffer(C.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,N,H,z,F,fe,ve,pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=v.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(N>=0&&N<=y.width-z&&H>=0&&H<=y.height-F){Ae.bindFramebuffer(C.FRAMEBUFFER,ye);const we=y.textures[pe],Ie=we.format,Le=we.type;if(!pt.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.bufferData(C.PIXEL_PACK_BUFFER,fe.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(N,H,z,F,se.convert(Ie),se.convert(Le),0);const mt=B!==null?v.get(B).__webglFramebuffer:null;Ae.bindFramebuffer(C.FRAMEBUFFER,mt);const At=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await sv(C,At,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,fe),C.deleteBuffer(We),C.deleteSync(At),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,H=0){const z=Math.pow(2,-H),F=Math.floor(y.image.width*z),fe=Math.floor(y.image.height*z),ve=N!==null?N.x:0,pe=N!==null?N.y:0;I.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,ve,pe,F,fe),Ae.unbindTexture()};const Ol=C.createFramebuffer(),Ca=C.createFramebuffer();this.copyTextureToTexture=function(y,N,H=null,z=null,F=0,fe=null){fe===null&&(F!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=F,F=0):fe=0);let ve,pe,ye,we,Ie,Le,We,mt,At;const Ct=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(H!==null)ve=H.max.x-H.min.x,pe=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Ie=H.min.y,Le=H.isBox3?H.min.z:0;else{const un=Math.pow(2,-F);ve=Math.floor(Ct.width*un),pe=Math.floor(Ct.height*un),y.isDataArrayTexture?ye=Ct.depth:y.isData3DTexture?ye=Math.floor(Ct.depth*un):ye=1,we=0,Ie=0,Le=0}z!==null?(We=z.x,mt=z.y,At=z.z):(We=0,mt=0,At=0);const dt=se.convert(N.format),Pe=se.convert(N.type);let rt;N.isData3DTexture?(I.setTexture3D(N,0),rt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),rt=C.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),rt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const st=C.getParameter(C.UNPACK_ROW_LENGTH),on=C.getParameter(C.UNPACK_IMAGE_HEIGHT),mi=C.getParameter(C.UNPACK_SKIP_PIXELS),ln=C.getParameter(C.UNPACK_SKIP_ROWS),Us=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,we),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le);const vt=y.isDataArrayTexture||y.isData3DTexture,cn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const un=v.get(y),Zt=v.get(N),Jt=v.get(un.__renderTarget),Fs=v.get(Zt.__renderTarget);Ae.bindFramebuffer(C.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Gi=0;Gi<ye;Gi++)vt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,v.get(y).__webglTexture,F,Le+Gi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,v.get(N).__webglTexture,fe,At+Gi)),C.blitFramebuffer(we,Ie,ve,pe,We,mt,ve,pe,C.DEPTH_BUFFER_BIT,C.NEAREST);Ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||v.has(y)){const un=v.get(y),Zt=v.get(N);Ae.bindFramebuffer(C.READ_FRAMEBUFFER,Ol),Ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ca);for(let Jt=0;Jt<ye;Jt++)vt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,un.__webglTexture,F,Le+Jt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,un.__webglTexture,F),cn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Zt.__webglTexture,fe,At+Jt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Zt.__webglTexture,fe),F!==0?C.blitFramebuffer(we,Ie,ve,pe,We,mt,ve,pe,C.COLOR_BUFFER_BIT,C.NEAREST):cn?C.copyTexSubImage3D(rt,fe,We,mt,At+Jt,we,Ie,ve,pe):C.copyTexSubImage2D(rt,fe,We,mt,we,Ie,ve,pe);Ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else cn?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(rt,fe,We,mt,At,ve,pe,ye,dt,Pe,Ct.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(rt,fe,We,mt,At,ve,pe,ye,dt,Ct.data):C.texSubImage3D(rt,fe,We,mt,At,ve,pe,ye,dt,Pe,Ct):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,fe,We,mt,ve,pe,dt,Pe,Ct.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,fe,We,mt,Ct.width,Ct.height,dt,Ct.data):C.texSubImage2D(C.TEXTURE_2D,fe,We,mt,ve,pe,dt,Pe,Ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,st),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,on),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mi),C.pixelStorei(C.UNPACK_SKIP_ROWS,ln),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Us),fe===0&&N.generateMipmaps&&C.generateMipmap(rt),Ae.unbindTexture()},this.initRenderTarget=function(y){v.get(y).__webglFramebuffer===void 0&&I.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?I.setTextureCube(y,0):y.isData3DTexture?I.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?I.setTexture2DArray(y,0):I.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){P=0,V=0,B=null,Ae.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function xf(i,e){if(e===j_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Uu||e===Xp){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Uu)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Nb extends ba{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Zb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Qb(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ja.extractUrlBase(e);a=Ja.resolveURL(c,this.path)}else a=Ja.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new um(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_m){try{a[$e.KHR_BINARY_GLTF]=new eE(e)}catch(h){s&&s(h);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:a[h]=new Ob;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[h]=new tE(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[h]=new nE;break;case $e.KHR_MESH_QUANTIZATION:a[h]=new iE;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Ub(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fb{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],xn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new b0(u),c.distance=h;break;case"spot":c=new S0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Ob{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ks}extendParams(e,t,n){const s=[];e.color=new Be(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],xn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,rn))}return Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class kb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(r)}}class zb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Vb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Hb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],xn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,rn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Gb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Wb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],xn),Promise.all(r)}}class Xb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class qb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],xn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,rn)),Promise.all(r)}}class jb{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Yb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Kb{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $b{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Zb{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Jb{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Qb{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Vn.TRIANGLES&&c.mode!==Vn.TRIANGLE_STRIP&&c.mode!==Vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new je,m=new U,p=new Li,M=new U(1,1,1),E=new $v(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),E.setMatrixAt(b,_.compose(m,p,M));for(const b in l)if(b==="_COLOR_0"){const A=l[b];E.instanceColor=new Ou(A.array,A.itemSize,A.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Dt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const _m="glTF",za=12,yf={JSON:1313821514,BIN:5130562};class eE{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-za,r=new DataView(e,za);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===yf.JSON){const c=new Uint8Array(e,za+a,o);this.content=n.decode(c)}else if(l===yf.BIN){const c=za+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Vu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Vu[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Kr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},o,c,xn,d)})})}}class nE{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iE{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class vm extends xo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,E=p-d+h;for(let b=0;b!==o;b++){const A=a[_+b+o],R=a[_+b+l]*u,w=a[g+b+o],D=a[g+b]*u;r[b]=M*A+E*R+m*w+p*D}return r}}const sE=new Li;class rE extends vm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return sE.fromArray(r).normalize().toArray(r),r}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:Gt,9729:Wt,9984:Bp,9985:il,9986:Xa,9987:ns},Mf={33071:Ei,33648:dl,10497:ha},Ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aE={CUBICSPLINE:void 0,LINEAR:no,STEP:to},wc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cs})),i.DefaultMaterial}function Gs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function cE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uE(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rc(t.attributes):e=i.indices+":"+Rc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Rc(i.targets[n]);return e}function Rc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Hu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dE=new je;class fE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ub,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new x0(this.options.manager):this.textureLoader=new A0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new um(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Gs(r,o,s),_i(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Ja.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Ac[s.type],o=Kr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new _n(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ac[s.type],c=Kr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(M);E||(_=new c(o,p*f,s.count*f/u),E=new Xv(_,f/u),t.cache.add(M,E)),m=new gh(E,l,d%f/u,g)}else o===null?_=new c(s.count*l):_=new c(o,d,s.count*l),m=new _n(_,l,g);if(s.sparse!==void 0){const p=Ac.SCALAR,M=Kr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,A=new M(a[1],E,s.sparse.count*p),R=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new _n(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,D=A.length;w<D;w++){const x=A[w];if(m.setX(x,R[w*l]),l>=2&&m.setY(x,R[w*l+1]),l>=3&&m.setZ(x,R[w*l+2]),l>=4&&m.setW(x,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Sf[d.magFilter]||Wt,u.minFilter=Sf[d.minFilter]||ns,u.wrapS=Mf[d.wrapS]||ha,u.wrapT=Mf[d.wrapT]||ha,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Gt&&u.minFilter!==Wt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new tn(_);m.needsUpdate=!0,d(m)}),t.load(Ja.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),_i(h,a),h.userData.mimeType=a.mimeType||hE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new am,Ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new rm,Ri.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Pl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=s[$e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],xn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,rn)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bi);const u=r.alphaMode||wc.OPAQUE;if(u===wc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===wc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ks&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ks&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ks){const h=r.emissiveFactor;o.emissive=new Be().setRGB(h[0],h[1],h[2],xn)}return r.emissiveTexture!==void 0&&a!==Ks&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,rn)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),_i(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gs(s,h,r),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return bf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=uE(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=bf(new Zn,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?oE(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=a[f];let p;const M=c[f];if(m.mode===Vn.TRIANGLES||m.mode===Vn.TRIANGLE_STRIP||m.mode===Vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new jv(_,M):new On(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Vn.TRIANGLE_STRIP?p.geometry=xf(p.geometry,Xp):m.mode===Vn.TRIANGLE_FAN&&(p.geometry=xf(p.geometry,Uu));else if(m.mode===Vn.LINES)p=new e0(_,M);else if(m.mode===Vn.LINE_STRIP)p=new yh(_,M);else if(m.mode===Vn.LINE_LOOP)p=new t0(_,M);else if(m.mode===Vn.POINTS)p=new n0(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&cE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),_i(p,r),m.extensions&&Gs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Gs(s,h[0],r),h[0];const d=new $s;r.extensions&&Gs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(Yp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Il(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vh(o,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let E=0,b=d.length;E<b;E++){const A=d[E],R=f[E],w=g[E],D=_[E],x=m[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=n._createAnimationTracks(A,R,w,D,x);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const M=new d0(r,void 0,p);return _i(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new sm:c.length>1?u=new $s:c.length===1?u=c[0]:u=new Dt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),_i(u,r),r.extensions&&Gs(n,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new $s;n.name&&(r.name=s.createUniqueName(n.name)),_i(r,n),n.extensions&&Gs(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Ri||d instanceof tn)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ms[r.path]===Ms.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ms[r.path]){case Ms.weights:c=ma;break;case Ms.rotation:c=ga;break;case Ms.translation:case Ms.scale:c=_a;break;default:switch(n.itemSize){case 1:c=ma;break;case 2:case 3:default:c=_a;break}break}const u=s.interpolation!==void 0?aE[s.interpolation]:no,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ms[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Hu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ga?rE:vm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pE(i,e,t){const n=e.attributes,s=new ki;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const u=Hu(Kr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Hu(Kr[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new zi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function bf(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Vu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return tt.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),_i(i,e),pE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lE(i,e.targets,t):i})}const Ef={type:"change"},Eh={type:"start"},xm={type:"end"},Jo=new _o,Tf=new bs,mE=Math.cos(70*Yp.DEG2RAD),Ht=new U,Sn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cc=1e-6;class gE extends O0{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Li,this._lastTargetPosition=new U,this._quat=new Li().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jd,this._sphericalDelta=new jd,this._scale=1,this._panOffset=new U,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new U,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vE.bind(this),this._onPointerDown=_E.bind(this),this._onPointerUp=xE.bind(this),this._onContextMenu=AE.bind(this),this._onMouseWheel=ME.bind(this),this._onKeyDown=bE.bind(this),this._onTouchStart=EE.bind(this),this._onTouchMove=TE.bind(this),this._onMouseDown=yE.bind(this),this._onMouseMove=SE.bind(this),this._interceptControlDown=wE.bind(this),this._interceptControlUp=RE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ef),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ht.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<mE?this.object.lookAt(this.target):(Tf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(Tf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cc||this._lastTargetPosition.distanceToSquared(this.target)>Cc?(this.dispatchEvent(Ef),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _E(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function vE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xm),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case qr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case qr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Eh)}function SE(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ME(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(Eh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xm))}function bE(i){this.enabled!==!1&&this._handleKeyDown(i)}function EE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Eh)}function TE(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function AE(i){this.enabled!==!1&&i.preventDefault()}function wE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var CE=Mt('<button class="activate-btn svelte-ygbm3g"> </button>'),PE=Mt('<div class="loading-overlay svelte-ygbm3g"><div class="spinner svelte-ygbm3g"></div> <p> </p></div>'),LE=Mt('<div class="viewer-container svelte-ygbm3g"><!> <!> <div class="viewer svelte-ygbm3g"></div> <button class="back-btn svelte-ygbm3g"> </button></div>');function ym(i,e){if(new.target)return Yt({component:ym,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi();let r=En(),a,o=En(!0),l=En(!1);const c=o_(),u={activate:{fr:"Activer la rotation et le zoom de la maquette",en:"Enable model rotation and zoom"},loading:{fr:"Chargement en cours...",en:"Loading..."},back:{fr:"← Retour",en:"← Back"}};function h(R){Lt(l,R),a&&(a.enabled=R,a.enableZoom=R,a.enableRotate=R)}wl(()=>{const R=new Wv;R.background=new Be(15989483);const w=new mn(30,1,.01,1e12);w.position.set(0,1,1);const D=new Db({antialias:!0,powerPreference:"high-performance"});D.setPixelRatio(Math.min(2,window.devicePixelRatio)),G(r).appendChild(D.domElement),D.setSize(G(r).clientWidth,G(r).clientHeight),R.add(new T0(16777215,.7));const x=new hm(16777215,.6);x.position.set(50,50,50),R.add(x),a=new gE(w,D.domElement),a.target.set(0,0,0),a.enableDamping=!0,a.dampingFactor=.05,a.enabled=!1,a.enableZoom=!1,a.enableRotate=!1,a.enablePan=!1,new Nb().load("/nyamusisi/data/point.glb",V=>{const B=V.scene;R.add(B),B.traverse(J=>{J.isMesh&&(J.material=new Pl({vertexColors:!!J.geometry.attributes.color,color:16777215}))});const K=new ki().setFromObject(B),Y=K.getCenter(new U),q=K.getSize(new U),O=Math.max(q.x,q.y,q.z);B.position.sub(Y),w.near=O/1e4,w.far=O*1e4,w.updateProjectionMatrix(),w.position.set(O*.8,O*.8,O*.6),w.lookAt(0,0,0),a.minDistance=O*.03,a.maxDistance=O*3,a.update(),Lt(o,!1)},void 0,()=>Lt(o,!1));const P=()=>{const V=G(r).clientWidth,B=G(r).clientHeight;V&&B&&(w.aspect=V/B,w.updateProjectionMatrix(),D.setSize(V,B))};window.addEventListener("resize",P),P(),D.setAnimationLoop(()=>{a.update(),D.render(R,w)})});var d={$set:$t,$on:(R,w)=>Kt(e,R,w)};di();var f=LE(),g=W(f);{var _=R=>{var w=CE(),D=W(w,!0);k(w),It(()=>wt(D,u.activate[t()])),Ls("click",w,()=>h(!0)),at(R,w)};Ds(g,R=>{G(l)||R(_)})}var m=ce(g,2);{var p=R=>{var w=PE(),D=ce(W(w),2),x=W(D,!0);k(D),k(w),It(()=>wt(x,u.loading[t()])),at(R,w)};Ds(m,R=>{G(o)&&R(p)})}var M=ce(m,2);Ap(M,R=>Lt(r,R),()=>G(r));var E=ce(M,2),b=W(E,!0);k(E),k(f),It(()=>wt(b,u.back[t()])),Ls("click",E,()=>c("close")),at(i,f);var A=Vt(d);return s(),A}var IE=Mt("<img/>"),DE=Mt('<section class="svelte-1rraixl"><p class="text svelte-1rraixl"> </p> <p class="year svelte-1rraixl"> </p></section>'),NE=Mt('<div class="agro-layout svelte-1rraixl"><div class="map svelte-1rraixl"><img class="layer base svelte-1rraixl" alt="Layer base"/> <!></div> <div class="stor svelte-1rraixl"></div></div>');function Sm(i,e){if(new.target)return Yt({component:Sm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi(),r=[{year:2003,fr:"Extension des surfaces agricoles (2003–2019)",en:"Expansion of agricultural land (2003–2019)"},{year:2007,fr:"Progression des cultures vivrières",en:"Expansion of subsistence crops"},{year:2011,fr:"Réduction du couvert forestier",en:"Forest cover reduction"},{year:2015,fr:"Fragmentation des habitats naturels",en:"Fragmentation of natural habitats"},{year:2019,fr:"Pression agricole maximale observée",en:"Peak agricultural pressure observed"}];let a=En(0);wl(()=>{const _=Array.from(document.querySelectorAll(".stor section")),m=()=>{const p=window.scrollY,M=window.innerHeight,E=p+M/2;let b=0;_.forEach((A,R)=>{const w=A.getBoundingClientRect(),D=w.top+p,x=D+w.height;E>=D&&E<=x&&(b=R)}),Lt(a,b)};window.addEventListener("scroll",m,{passive:!0}),m()});function o(_){Lt(a,_)}var l={$set:$t,$on:(_,m)=>Kt(e,_,m)};di();var c=NE(),u=W(c),h=W(u),d=ce(h,2);rs(d,1,()=>r,rr,(_,m,p)=>{var M=IE();It(()=>{Ut(M,"src",`/nyamusisi/svg/${G(m).year}.svg`),la(M,1,`layer ${p===G(a)?"visible":""}`,"svelte-1rraixl"),Ut(M,"alt",`Year ${G(m).year??""}`)}),at(_,M)}),k(u);var f=ce(u,2);rs(f,5,()=>r,rr,(_,m,p)=>{var M=DE(),E=W(M),b=W(E,!0);k(E);var A=ce(E,2),R=W(A,!0);k(A),k(M),It(()=>{wt(b,t()==="fr"?G(m).fr:G(m).en),wt(R,G(m).year)}),Ls("mouseover",M,()=>o(p)),at(_,M)}),k(f),k(c),It(()=>Ut(h,"src","/nyamusisi/svg/layerbase.svg")),at(i,c);var g=Vt(l);return s(),g}var UE=Mt("<img/>"),FE=Mt('<section class="story-step svelte-11fdowh"><h2 class="svelte-11fdowh"> </h2></section>'),OE=Mt('<div class="layout svelte-11fdowh"><div class="visual svelte-11fdowh"></div> <div class="story svelte-11fdowh"></div></div>');function Mm(i,e){if(new.target)return Yt({component:Mm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi(),r=[{id:"riserva",text:{fr:"Réserve Naturelle d'Idjwi-Nyamusisi",en:"Idjwi-Nyamusisi Nature Reserve"}},{id:"champs",text:{fr:"Villages et habitations",en:"Villages and settlements"}},{id:"agro",text:{fr:"Champs agricoles, élevage intégré et agroforesterie",en:"Farmland, integrated livestock and agroforestry"}},{id:"altitude",text:{fr:"Zone de conservation en haute altitude",en:"High altitude conservation area"}},{id:"savana",text:{fr:"Savane à vocation écologique",en:"Ecological savanna"}},{id:"tourisme",text:{fr:"Accueil écotouristique",en:"Ecotourism reception area"}}];let a=En(0),o=En();wl(()=>{const f=Array.from(G(o).querySelectorAll(".story-step")),g=()=>{const _=window.scrollY+window.innerHeight/2;let m=0;f.forEach((p,M)=>{const E=p.getBoundingClientRect(),b=E.top+window.scrollY,A=b+E.height;_>=b&&_<=A&&(m=M)}),Lt(a,m)};return window.addEventListener("scroll",g,{passive:!0}),g(),()=>window.removeEventListener("scroll",g)});var l={$set:$t,$on:(f,g)=>Kt(e,f,g)};di();var c=OE(),u=W(c);rs(u,5,()=>r,rr,(f,g,_)=>{var m=UE();It(()=>{Ut(m,"src",`/nyamusisi/svg/${G(g).id}.svg`),la(m,1,`layer ${_===G(a)?"visible":""}`,"svelte-11fdowh"),Ut(m,"alt",G(g).id)}),at(f,m)}),k(u);var h=ce(u,2);rs(h,5,()=>r,rr,(f,g)=>{var _=FE(),m=W(_),p=W(m,!0);k(m),k(_),It(()=>wt(p,G(g).text[t()])),at(f,_)}),k(h),k(c),Ap(c,f=>Lt(o,f),()=>G(o)),at(i,c);var d=Vt(l);return s(),d}var BE=Mt(`<div class="text svelte-msj9tj"><p>La Réserve Forestière de Nyamusisi est située à l’est de la République
        démocratique du Congo, dans la province du Sud-Kivu, au cœur du lac
        Kivu. À l’échelle régionale, le Sud-Kivu est l’une des provinces les
        plus fragilisées par des décennies de conflits armés, de déplacements
        forcés de populations et de crises humanitaires récurrentes. Dans ce
        contexte, l’île d’Idjwi constitue une singularité territoriale.
        Relativement épargnée par les violences armées directes, elle est
        souvent qualifiée par ses habitants et par les acteurs institutionnels
        comme une « île de paix » au sein d’un environnement régional instable.
        Aucun obstacle lié à la sécurité ne se présente pour la mise en œuvre de
        projets à vocation locale sur l’île d’Idjwi, où des initiatives de
        coopération internationale, tant à petite qu’à grande échelle, ont déjà
        été menées avec succès.</p></div>`);function bm(i,e){if(new.target)return Yt({component:bm,...i});zt(e,!1);var t={$set:$t,$on:(s,r)=>Kt(e,s,r)},n=BE();return at(i,n),Vt(t)}var kE=Mt(`<div class="text svelte-lx7xgm"><p>The Nyamusisi Forest Reserve is located in the east of the Democratic
        Republic of Congo, in the province of South Kivu, in the heart of Lake
        Kivu. At the regional level, South Kivu is one of the provinces most
        vulnerable to decades of armed conflict, forced displacement of
        populations and recurring humanitarian crises. In this context, Idjwi
        Island is a unique territory. Relatively spared from direct armed
        violence, it is often described by its inhabitants and institutional
        actors as an "island of peace" within an unstable regional environment.
        There are no security-related obstacles to the implementation of local
        projects on Idjwi Island, where small- and large-scale international
        cooperation initiatives have already been successfully carried out.</p></div>`);function Em(i,e){if(new.target)return Yt({component:Em,...i});zt(e,!1);var t={$set:$t,$on:(s,r)=>Kt(e,s,r)},n=kE();return at(i,n),Vt(t)}function Tm(i,e){if(new.target)return Yt({component:Tm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi();var r={$set:$t,$on:(h,d)=>Kt(e,h,d)},a=Al(),o=go(a);{var l=h=>{bm(h,{})},c=h=>{Em(h,{})};Ds(o,h=>{t()==="fr"?h(l):h(c,!1)})}at(i,a);var u=Vt(r);return s(),u}var zE=Mt(`<div class="text svelte-xgy53x">Province du Sud-Kivu<br/><br/> <p>Le Sud-Kivu se caractérise par un relief fortement compartimenté où
        montagnes volcaniques, vallées densément peuplées et rivages lacustres
        structurent les modes de vie et d’occupation des terres. Dans cet espace
        contraint, la pression démographique et la rareté des terres cultivables
        façonnent profondément les dynamiques sociales et environnementales,
        rendant chaque territoire insulaire, comme Idjwi, particulièrement
        stratégique pour l’équilibre régional.</p></div>`);function Am(i,e){if(new.target)return Yt({component:Am,...i});zt(e,!1);var t={$set:$t,$on:(s,r)=>Kt(e,s,r)},n=zE();return at(i,n),Vt(t)}var VE=Mt(`<div class="text svelte-1xu6zug">Sud-Kivu Province<br/><br/> <p>South Kivu is characterised by a highly fragmented landscape where
        volcanic mountains, densely populated valleys and lake shores shape
        livelihoods and land use patterns. In this constrained space,
        demographic pressure and the scarcity of arable land profoundly shape
        social and environmental dynamics, making each island territory, such as
        Idjwi, particularly strategic for regional balance.</p></div>`);function wm(i,e){if(new.target)return Yt({component:wm,...i});zt(e,!1);var t={$set:$t,$on:(s,r)=>Kt(e,s,r)},n=VE();return at(i,n),Vt(t)}function Rm(i,e){if(new.target)return Yt({component:Rm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi();var r={$set:$t,$on:(h,d)=>Kt(e,h,d)},a=Al(),o=go(a);{var l=h=>{Am(h,{})},c=h=>{wm(h,{})};Ds(o,h=>{t()==="fr"?h(l):h(c,!1)})}at(i,a);var u=Vt(r);return s(),u}var HE=Mt(`<div class="text svelte-7in0d5">Île d'Idjwi<br/><br/> <p style="font-size:x-small; text-align:center; margin-block-start: 0em;margin-block-end: 0em;">Diego Tirira, Creative Commons Attribution-Share Alike 2.0 Generic</p> <img width="90%" alt="Idjwi"/> <p>Au cœur du lac Kivu, Idjwi est une île habitée par ses paysages autant
        que par ses habitants, où chaque colline raconte l’équilibre fragile
        entre vivre de la terre et la préserver.</p></div>`);function Cm(i,e){if(new.target)return Yt({component:Cm,...i});zt(e,!1);var t={$set:$t,$on:(r,a)=>Kt(e,r,a)};di();var n=HE(),s=ce(W(n),6);return xa(2),k(n),It(()=>Ut(s,"src","/nyamusisi/image/CD_Idjwi.jpg")),at(i,n),Vt(t)}var GE=Mt(`<div class="text svelte-kqg8o8">Idjwi Island<br/><br/> <p style="font-size:x-small; text-align:center; margin-block-start: 0em;margin-block-end: 0em;">Diego Tirira, Creative Commons Attribution-Share Alike 2.0 Generic</p> <img width="90%" alt="Idjwi"/> <p>In the heart of Lake Kivu, Idjwi is an island shaped as much by its
        landscapes as by its inhabitants, where every hill tells the story of
        the delicate balance between living off the land and preserving it.</p></div>`);function Pm(i,e){if(new.target)return Yt({component:Pm,...i});zt(e,!1);var t={$set:$t,$on:(r,a)=>Kt(e,r,a)};di();var n=GE(),s=ce(W(n),6);return xa(2),k(n),It(()=>Ut(s,"src","/nyamusisi/image/CD_Idjwi.jpg")),at(i,n),Vt(t)}function Lm(i,e){if(new.target)return Yt({component:Lm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi();var r={$set:$t,$on:(h,d)=>Kt(e,h,d)},a=Al(),o=go(a);{var l=h=>{Cm(h,{})},c=h=>{Pm(h,{})};Ds(o,h=>{t()==="fr"?h(l):h(c,!1)})}at(i,a);var u=Vt(r);return s(),u}var WE=Mt(`<div class="text svelte-a83cle">Réserve Forestière de Nyamusisi<br/><br/> <p style="font-size:x-small; text-align:center; margin-block-start: 0em;margin-block-end: 0em;">© Réserve Naturelle d’Idjwi-Nyamusisi</p> <img width="90%" alt="Idjwi-reserve"/> <p>À Nyamusisi, nous ne protégeons pas une forêt vide : nous faisons vivre
        un territoire où la nature et la communauté apprennent à durer ensemble.
        Nous restaurons patiemment les équilibres perdus, afin que la forêt
        redevienne à la fois un refuge pour le vivant et une source d’avenir
        pour celles et ceux qui y habitent.</p></div>`);function Im(i,e){if(new.target)return Yt({component:Im,...i});zt(e,!1);var t={$set:$t,$on:(r,a)=>Kt(e,r,a)};di();var n=WE(),s=ce(W(n),6);return xa(2),k(n),It(()=>Ut(s,"src","/nyamusisi/image/Idjwi_reserve.jpg")),at(i,n),Vt(t)}var XE=Mt(`<div class="text svelte-1x05z1n">Nyamusisi Forest Reserve<br/><br/> <p style="font-size:x-small; text-align:center; margin-block-start: 0em;margin-block-end: 0em;">© Réserve Naturelle d’Idjwi-Nyamusisi</p> <img width="90%" alt="Idjwi-reserve"/> <p>In Nyamusisi, we are not protecting an "empty" forest: we are bringing
        life to a region where nature and the community are learning to coexist.
        We are patiently restoring the balance that has been lost, so that the
        forest can once again become a refuge for living creatures and a source
        of hope for the future for those who live there.</p></div>`);function Dm(i,e){if(new.target)return Yt({component:Dm,...i});zt(e,!1);var t={$set:$t,$on:(r,a)=>Kt(e,r,a)};di();var n=XE(),s=ce(W(n),6);return xa(2),k(n),It(()=>Ut(s,"src","/nyamusisi/image/Idjwi_reserve.jpg")),at(i,n),Vt(t)}function Nm(i,e){if(new.target)return Yt({component:Nm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi();var r={$set:$t,$on:(h,d)=>Kt(e,h,d)},a=Al(),o=go(a);{var l=h=>{Im(h,{})},c=h=>{Dm(h,{})};Ds(o,h=>{t()==="fr"?h(l):h(c,!1)})}at(i,a);var u=Vt(r);return s(),u}var qE=Mt('<section class="story-step svelte-1obdd2u"><img class="mobile-map svelte-1obdd2u"/> <!></section>'),jE=Mt('<img draggable="false"/>'),YE=Mt('<div class="layout svelte-1obdd2u"><div class="storya svelte-1obdd2u"></div> <div class="visuale svelte-1obdd2u"></div></div>');function Um(i,e){if(new.target)return Yt({component:Um,...i});zt(e,!1);const t=[{id:"cd",component:Tm},{id:"sk",component:Rm},{id:"idwji",component:Lm},{id:"res",component:Nm}];let n=En(0),s=[];function r(){const u=window.scrollY+window.innerHeight*.5;let h=0;s.forEach((d,f)=>{const g=d.getBoundingClientRect(),_=g.top+window.scrollY,m=_+g.height;u>=_&&u<=m&&(h=f)}),Lt(n,h)}wl(()=>{s=Array.from(document.querySelectorAll(".story-step")),r(),window.addEventListener("scroll",r,{passive:!0})}),l_(()=>{s=Array.from(document.querySelectorAll(".story-step")),r()});var a={$set:$t,$on:(u,h)=>Kt(e,u,h)};di();var o=YE(),l=W(o);rs(l,7,()=>t,u=>u.id,(u,h)=>{var d=qE(),f=W(d),g=ce(f,2);d_(g,()=>G(h).component,(_,m)=>{m(_,{})}),k(d),It(()=>{Ut(f,"src",`/nyamusisi/image/${G(h).id}.png`),Ut(f,"alt",G(h).id)}),at(u,d)}),k(l);var c=ce(l,2);return rs(c,7,()=>t,u=>u.id,(u,h,d)=>{var f=jE();It(()=>{Ut(f,"src",`/nyamusisi/image/${G(h).id}.png`),Ut(f,"alt",G(h).id),la(f,1,`layer ${G(d)===G(n)?"visible":""}`,"svelte-1obdd2u")}),at(u,f)}),k(c),k(o),at(i,o),Vt(a)}var KE=Mt('<li class="svelte-1nxpbno"> </li>'),$E=Mt('<li class="svelte-1nxpbno"> </li>'),ZE=Mt('<tr><td class="layer svelte-1nxpbno"><strong class="svelte-1nxpbno"> </strong><br/> <span class="subtitle svelte-1nxpbno"> </span></td><td class="scientific svelte-1nxpbno"><ul class="svelte-1nxpbno"></ul></td><td class="svelte-1nxpbno"><ul class="svelte-1nxpbno"></ul></td></tr>'),JE=Mt('<div class="agro-layout svelte-1nxpbno"><div class="scheme svelte-1nxpbno"><img alt="Agroforestry scheme" class="svelte-1nxpbno"/></div> <div class="table-wrapper svelte-1nxpbno"><table class="svelte-1nxpbno"><thead class="svelte-1nxpbno"><tr><th class="svelte-1nxpbno"> </th><th class="svelte-1nxpbno"> </th><th class="svelte-1nxpbno"> </th></tr></thead><tbody></tbody></table></div></div>');function Fm(i,e){if(new.target)return Yt({component:Fm,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi(),r={fr:["Strate agroforestière","Plantes","Fonctions principales"],en:["Agroforestry layer","Plants","Main functions"]},a=[{layer:{fr:"Strate supérieure",en:"Upper layer"},subtitle:{fr:"(arbres de haut jet – ombrage et structure)",en:"(tall trees – shade and structure)"},plants:["Gliricidia sepium","Maesopsis eminii","Ficus spp.","Strombosia scheffleri"],functions:{fr:["Ombrage pour le café et le cacao","Amélioration de la fertilité des sols","Protection contre l’érosion","Bois de service et bois énergie"],en:["Shade for coffee and cocoa","Soil fertility improvement","Erosion control","Timber and fuelwood"]}},{layer:{fr:"Strate intermédiaire",en:"Middle layer"},subtitle:{fr:"(arbres fruitiers et cultures pérennes)",en:"(fruit trees and perennial crops)"},plants:["Theobroma cacao","Coffea arabica / robusta","Musa spp.","Mangifera indica","Psidium guajava"],functions:{fr:["Revenus commerciaux réguliers","Diversification économique","Production alimentaire et marchande","Stabilité des systèmes agricoles"],en:["Regular income","Economic diversification","Food and market production","Agricultural system stability"]}},{layer:{fr:"Strate inférieure",en:"Lower layer"},subtitle:{fr:"(cultures vivrières et herbacées)",en:"(food crops and herbaceous plants)"},plants:["Ananas comosus","Manihot esculenta","Zea mays","Ipomoea batatas","Légumes-feuilles locaux"],functions:{fr:["Sécurité alimentaire des ménages","Production rapide et continue","Alimentation diversifiée et nutritive"],en:["Household food security","Fast and continuous production","Diverse and nutritious diet"]}},{layer:{fr:"Plantes de service",en:"Service plants"},subtitle:{fr:"(fertilité, fourrage, protection)",en:"(fertility, fodder, protection)"},plants:["Leucaena leucocephala","Calliandra calothyrsus","Moringa oleifera","Erythrina spp."],functions:{fr:["Fixation de l’azote","Amélioration durable des sols","Fourrage pour l’élevage intégré","Feuilles nutritives pour les familles"],en:["Nitrogen fixation","Long-term soil improvement","Fodder for integrated livestock","Nutritious leaves for households"]}}];var o={$set:$t,$on:(w,D)=>Kt(e,w,D)};di();var l=JE(),c=W(l),u=W(c);k(c);var h=ce(c,2),d=W(h),f=W(d),g=W(f),_=W(g),m=W(_,!0);k(_);var p=ce(_),M=W(p,!0);k(p);var E=ce(p),b=W(E,!0);k(E),k(g),k(f);var A=ce(f);rs(A,5,()=>a,rr,(w,D)=>{var x=ZE(),S=W(x),P=W(S),V=W(P,!0);k(P);var B=ce(P,3),K=W(B,!0);k(B),k(S);var Y=ce(S),q=W(Y);rs(q,5,()=>G(D).plants,rr,(re,ae)=>{var de=KE(),Oe=W(de,!0);k(de),It(()=>wt(Oe,G(ae))),at(re,de)}),k(q),k(Y);var O=ce(Y),J=W(O);rs(J,5,()=>G(D).functions[t()],rr,(re,ae)=>{var de=$E(),Oe=W(de,!0);k(de),It(()=>wt(Oe,G(ae))),at(re,de)}),k(J),k(O),k(x),It(()=>{wt(V,G(D).layer[t()]),wt(K,G(D).subtitle[t()])}),at(w,x)}),k(A),k(d),k(h),k(l),It(()=>{Ut(u,"src","/nyamusisi/image/agrofo.png"),wt(m,r[t()][0]),wt(M,r[t()][1]),wt(b,r[t()][2])}),at(i,l);var R=Vt(o);return s(),R}const QE={header:{text:"Rapport narratif rédigé par le Comité de Gestion de la Réserve Naturelle d'Idjwi-Nyamusisi"},intro:{title:"De réserve défunte à paysage vivant",subtitle:"Restauration et gestion communautaire de la Réserve forestière de Nyamusisi",text:`Le présent rapport narratif a pour objectif de favoriser l’établissement de partenariats régionaux et internationaux,
          ainsi que de mobiliser des ressources financières en vue de la mise en
          œuvre du Plan Opérationnel Triennal du Comité de Gestion de la Réserve
          Naturelle d’Idjwi-Nyamusisi. Le Plan Opérationnel Triennal a été
          élaboré et validé avec l’appui technique et financier de la GIZ,
          en collaboration avec les autorités publiques (Ministère de
          l'Environnement, ICCN, PNKB), les autorités traditionnelles, les
          associations, les villages, les organisations de la société civile,
          les populations autochtones et les groupes sociaux vulnérables.`},history:{title:"Comment une réserve devient «défunte»",subtitle:"L'histoire de la Réserve forestière de Nyamusisi",text:`La déforestation de la Réserve Forestière de Nyamusisi n’est ni soudaine
        ni accidentelle. Elle résulte d’un processus long, cumulatif, inscrit dans
        les transformations régionales. La réserve a progressivement perdu ses fonctions
        écologiques (régulation hydrique, habitat de la faune, protection des sols)
        sous l’effet de pressions multiples. À la pression démographique due à l'afflux
        de réfugiés causé par les conflits armés dans la région viennent s’ajouter d’autres facteurs observés dans de nombreux contextes en RDC et sur le continent
        : l'insécurité foncière, la demande croissante de terres agricoles en raison
        de la crise alimentaire et l’augmentation de la demande en bois-énergie,
        l'absence de gouvernance appropriée de la réserve.`},singes:{title:"Les derniers survivants : les singes bleus de Schouteden",subtitle:"Quand la forêt disparaît, la biodiversité se réfugie",text:`Le Plan Opérationnel Triennal identifie clairement les singes bleus de
        Schouteden comme <i>espèce phare</i> de la réserve. Leur survie
        actuelle, concentrée sur des fragments forestiers extrêmement réduits,
        illustre à la fois la gravité de la dégradation et le potentiel de
        restauration. À Nyamusisi, la disparition de la forêt n’a pas entraîné
        la disparition immédiate de toute biodiversité. Certaines espèces, comme
        les singes bleus de Schouteden (<i>Cercopithecus mitis schoutedeni</i>), ont survécu en se repliant sur des fragments résiduels de forêt,
        parfois inférieurs à un hectare. Ces animaux sont aujourd’hui à la fois
        des survivants et des sentinelles : leur situation reflète l’état
        critique de l’écosystème.`,caption:`Image capturée par une caméra piège PEX sur le site de Bulolero, Réserve
        Naturelle d’Idjwi-Nyamusisi © Réserve Naturelle d’Idjwi-Nyamusisi`},three:{text:`L'habitat refuge des singes bleus a été protégé avec la création de la
          réserve naturelle d'Idjwi-Nyamusisi en 2022. La réserve naturelle est
          située sur les versants orientaux du massif de Nyamusisi, à cheval
          entre les chefferies de Ntambuka et Rubenga, et se distingue par un
          profil altimétrique marqué. Elle abrite une zone de grottes de moins
          d'un hectare où vit une population totale d'environ 100 individus de
          singes bleus.`,button:"Découvrez la maquette interactive de la réserve naturelle d'Idjwi-Nyamusisi",boxtitle:"Projets validés dans l'attente d'un cofinancement",projects:`♦ Création de zones d'observation de la faune<br />
          ♦ Formation de guides écologiques<br />
          ♦ Création de sentiers écologiques<br />
          ♦ Programme d’habituation progressive des singes à la présence humaine<br />`},communa:{title:"La parole aux communautés",subtitle:"Sans consentement communautaire, pas de restauration durable",text:`Contrairement à certaines idées reçues, les communautés vivant dans et
        autour de la réserve ne sont pas opposées à la forêt. Elles sont
        opposées à une conservation imposée, qui ignorerait leurs besoins vitaux
        et leurs droits fonciers. À Nyamusisi, la restauration écologique est
        donc conçue comme un processus de dialogue et de paix sociale. Restaurer
        signifie négocier parcelle par parcelle. Les limites de la réserve
        traversent aujourd’hui des champs cultivés depuis parfois plus de vingt
        ans ; la solution ne peut donc être ni l’expulsion ni le statu quo, mais
        une requalification progressive des usages. Le Plan Opérationnel
        Triennal consacre un pilier entier à l’engagement communautaire,
        reconnaissant que la restauration écologique à Nyamusisi est
        indissociable de la résolution des conflits fonciers et sociaux. Les
        activités d’identification des occupants, d’évaluation des superficies
        occupées et d’analyse des besoins constituent la base de ce processus.
        Le processus permet d’identifier les zones de la forêt dégradée que la communauté considère comme restaurables et les zones non négociables car elles
        assurent leur subsistance.`,boxtitle:"Projets validés dans l'attente d'un cofinancement",project:`♦ Projet d'identification des occupants & médiation foncière
          (restaurer sans déplacer)<br />
          ♦ Reconnaissance des activités alternatives à l'exploitation intensive
          des ressources naturelles et mise en place de mesures incitatives ainsi
          que de compensations (relance des systèmes agroforestiers abandonnés du
          café et du cacao, et de l'élevage intégré)`},zone:{title:"Changer d’approche: Restaurer ≠ exclure",subtitle:"La forêt plus conçue comme un espace à vider, mais comme un espace à organiser",text:`La nouvelle vision de la réserve rompt clairement avec le modèle
        colonial de conservation fondé sur l’exclusion. Pendant des décennies,
        la protection de la nature a été pensée comme une mise à distance de
        l’humain : tracer une limite, déclarer un espace « protégé », puis
        tenter d’en écarter ceux qui y vivent. À Nyamusisi, cette approche s’est
        révélée non seulement irréaliste, mais aussi génératrice de conflits,
        d’occupation informelle et, paradoxalement, de dégradation écologique.
        Dans cette logique, la gestion communautaire n’est pas un outil social
        ajouté à la conservation ; elle en est la condition de possibilité. Les
        habitants deviennent co-gestionnaires parce qu’ils sont déjà acteurs du
        territoire. La restauration écologique dépend alors de la sécurité
        sociale : quand les droits sont reconnus, les conflits diminuent ; quand
        les revenus sont assurés, la pression sur la forêt baisse ; quand la
        communauté bénéficie directement de la biodiversité, elle la protège.`,boxtitle:"Projets validés dans l'attente d'un cofinancement",projects:`♦ Restauration forestière (démarcation des zones, inventaire
          floristique, plantation d’arbres endogènes, entretien et sécurisation)<br
          />
          ♦ Protection et biosurveillance (inventaires fauniques, suivi biodiversité)<br
          />`,step:"Organisation/zonage de la Réserve Forestière de Nyamusisi"},agroforesterie:{title:"L’agroforesterie comme solution-clé",subtitle:"Nourrir les gens tout en nourrissant la forêt. Sécurité alimentaire et diversification économique",text:`La relance de l’agroforesterie figure parmi les investissements majeurs
        du Plan Opérationnel Triennal. Elle répond simultanément à trois
        objectifs stratégiques : sécurité alimentaire, réduction de la pression
        sur la réserve et amélioration des revenus des ménages riverains. Sur
        Idjwi, chaque amélioration de rendement agricole évite directement un
        nouveau défrichement, car l’expansion spatiale est la seule variable
        d’ajustement disponible pour les ménages. L’agroforesterie ne cherche
        pas à opposer agriculture et conservation, mais à les réconcilier dans
        un même système productif. En associant arbres, cultures vivrières et
        élevage intégré, elle recrée des paysages productifs capables de nourrir
        durablement les ménages tout en reconstituant les fonctions écologiques
        perdues : fertilité des sols, infiltration de l’eau, microclimat et
        stockage de carbone. Le programme s'adresse en priorité aux groupes les
        plus dépendants des ressources naturelles, en particulier les femmes et
        les communautés autochtones, non pas pour des raisons purement
        symboliques, mais parce qu'elles se trouvent au cœur de l’économie réelle du territoire. L’agroforesterie sécurise d’abord l’alimentation. Les
        cultures vivrières sont maintenues mais stabilisées par la fertilité
        restaurée des sols, tandis que les arbres apportent des productions
        complémentaires : fruits, produits forestiers non ligneux, fourrage et
        bois domestique. À moyen terme, certaines filières telles que le café,
        le cacao et les produits agroforestiers génèrent des revenus commerciaux
        réguliers. Les familles ne dépendent plus d'une seule récolte
        saisonnière vulnérable aux variations climatiques. Cette diversification
        réduit la vulnérabilité économique et, par conséquent, la nécessité de
        puiser dans les réserves en période de crise.`},femmes:{title:"Les femmes au cœur de la restauration",subtitle:"Soigner la terre pour sécuriser les familles",text:`La restauration écologique de la Réserve Forestière de Nyamusisi passe
        d’abord par celles qui vivent quotidiennement du territoire. Les femmes
        assurent l’essentiel de la production alimentaire, de la collecte du
        bois énergie, de l’entretien des parcelles et de l’éducation
        environnementale informelle au sein des familles. Elles sont donc à la
        fois les premières affectées par la dégradation de la forêt et les
        premières capables d’en transformer l’usage. Lorsque la forêt disparaît,
        les distances de collecte augmentent, le temps de travail s’allonge et
        la sécurité alimentaire du ménage diminue. Restaurer la forêt signifie
        donc aussi réduire la pénibilité quotidienne et stabiliser la vie
        domestique. Le Plan Opérationnel Triennal reconnaît explicitement ce
        rôle central et prévoit d’appuyer les femmes comme actrices prioritaires
        de la transition écologique locale.`,boxtitle:"Projets validés dans l'attente d'un cofinancement",projects:`♦ Construction de pépinières communautaires gérées par des groupes de
          femmes et création de banques de semences<br />
          ♦ Subventions pour l'agroforesterie familiale<br />
          ♦ Mise en œuvre de mesures visant à garantir la participation aux comités
          locaux de gestion<br />`},eco:{title:"Forêt, singes bleus et écotourisme",subtitle:"Vers l’autonomie de la gestion de la réserve, un modèle économique local et durable",text:`L’écotourisme communautaire est envisagé comme un levier économique
        complémentaire. Les projets d’infrastructures légères s’appuient sur les
        atouts naturels et culturels de l’île. Les guides, pisteurs,
        gestionnaires de bungalows, transporteurs lacustres et artisans
        bénéficient directement de cette économie. La protection de la
        biodiversité devient ainsi une activité professionnelle. Cette dynamique
        permet d’installer des revenus réguliers et diversifiés pour les ménages
        riverains, réduisant leur dépendance aux activités destructrices et
        renforçant l’acceptation sociale de la réserve. L’expérience proposée
        dépasse l’observation naturaliste. Elle associe paysages, savoirs et
        culture insulaire : pratiques agricoles, usages traditionnels des
        plantes, histoire locale et vie quotidienne participent au récit. La
        synergie entre lac et montagne renforce cette identité : navigation,
        randonnée, observation de la faune et immersion culturelle composent un
        parcours cohérent où nature et société sont indissociables.`,caption:"Installations hôtelières sur l'île d'Idjwi vues depuis le lac © Ley Uwera",boxtitle:"Projets validés dans l'attente d'un cofinancement",projects:`♦ Améliorer les infrastructures de connexion avec les voies lacustres
          et garantir l'accessibilité à la Réserve naturelle d’Idjwi-Nyamusisi<br
          />
          ♦ Construction de bungalows sur le site de Bulolero<br />
          ♦ Préparation et soutien à la création de paquets touristiques<br />`},gestion:{title:"La forêt vit si la communauté en vit",subtitle:"Gestion communautaire + éducation environnementale",text:`La conservation ne se maintient pas uniquement par la surveillance, mais
        par l’apprentissage. En travaillant avec les écoles et les universités,
        la réserve devient un espace pédagogique vivant où les jeunes
        comprennent concrètement le lien entre environnement, alimentation et
        avenir économique. Protéger la forêt cesse alors d’être une obligation
        extérieure et devient un choix éclairé. L’éducation environnementale
        prépare aussi la gestion communautaire. Une population informée
        participe davantage aux décisions, comprend les règles d’usage et
        contribue à prévenir les conflits. La protection ne repose plus
        uniquement sur l’autorité, mais sur l’adhésion collective. Lorsque la
        communauté comprend la forêt, elle la protège ; lorsque la forêt
        soutient la communauté, elle dure.`,boxtitle:"Projets validés dans l'attente d'un cofinancement",projects:`♦ Projet de réseau éducatif autour de la réserve avec les écoles et
          les universités<br />
          ♦ Mise en œuvre d'un programme Sport et environnement<br />
          ♦ Attribution de bourses d'études de la réserve<br />`},foot:{title:"La restauration est déjà en marche. Soutenez la réserve à retrouver son paysage vivant. Contactez-nous",text:`La Réserve naturelle d’Idjwi-Nyamusisi a été créée par l’arrêté
          provincial du Sud-Kivu n° 22/131/GP/SK du 20 mai 2022 en tant qu’une
          réserve communautaire d’intérêt local placée sous la gestion des ETD
          Chefferie Ntambuka et Chefferie Rubenga. Pour maximiser une gestion
          efficace conjointe, les deux chefferies ont mis en place une structure
          dénommée « Comité de gestion de la Réserve naturelle d’Idjwi-Nyamusisi
          » en tant qu’une organisation étatique à même de sauvegarder les
          intérêts communautaires de deux chefferies que regorge l’île d’Idjwi
          et rendre ensuite compte au gouvernement provincial du Sud-Kivu et au
          Ministère National de l’Environnement et Développement Durable à
          travers la Coordination Provinciale de l’Environnement et
          Développement Durable du Sud-Kivu. Le Comité de gestion dispose d’une
          ONG enregistrée sous le numéro F92/52.340: « CGRI Asbl »`}},Af={header:{text:"Narrative report prepared by the Idjwi-Nyamusisi Nature Reserve Management Committee"},intro:{title:"Bringing a lost reserve back to a living landscape",subtitle:"Restoration and community management of the Nyamusisi Forest Reserve",text:"This report aims to foster regional and international partnerships and to attract the financial resources needed to bring the Three-Year Operational Plan of the Idjwi-Nyamusisi Nature Reserve Management Committee to life. Developed and approved with the technical and financial support of GIZ, the Plan reflects a broad collaboration with public authorities (including the Ministry of the Environment, ICCN, and PNKB), traditional leaders, local associations, villages, civil society organizations, indigenous communities, and other vulnerable social groups."},history:{title:"How a reserve becomes defunct",subtitle:"The history of the Nyamusisi Forest Reserve",text:"Deforestation in the Nyamusisi Forest Reserve is neither sudden nor accidental. It is the result of a long, cumulative process that is part of regional transformations. The reserve has gradually lost its ecological functions (water regulation, wildlife habitat, soil protection) under the effect of multiple pressures. In addition to demographic pressure due to the influx of refugees caused by armed conflicts in the region, there are other factors common to other case studies in the DRC and on the continent: land insecurity, growing demand for agricultural land due to the food crisis and increased demand for wood energy, and the lack of appropriate governance of the reserve."},singes:{title:"The last survivors: Schouteden's blue monkeys",subtitle:"When the forest disappears, biodiversity takes refuge",text:"The Three-Year Operational Plan clearly identifies Schouteden's blue monkeys as the reserve's flagship species. Their current survival, concentrated in extremely small forest fragments, demonstrates both the severity of degradation and the potential for restoration. In Nyamusisi, the disappearance of the forest did not lead to the immediate disappearance of all biodiversity. Some species, such as Schouteden's blue monkeys (<i>Cercopithecus mitis schoutedeni</i>), have survived by retreating to residual forest fragments, less than one hectare in size. These animals are now both survivors and sentinels: their situation reflects the critical state of the ecosystem.",caption:"Image captured by a PEX camera trap at the Bulolero site, Idjwi-Nyamusisi Nature Reserve © Réserve Naturelle d’Idjwi-Nyamusisi"},three:{text:"The habitat of the blue monkeys has been protected with the creation of the Idjwi-Nyamusisi Nature Reserve in 2022. The nature reserve is located on the eastern slopes of the Nyamusisi massif, straddling the chiefdoms of Ntambuka and Rubenga, and is distinguished by its marked altitudinal profile. It is home to an area of caves covering less than one hectare, where a total population of around 100 blue monkeys live.",button:"Discover the interactive model of the Idjwi-Nyamusisi Nature Reserve",boxtitle:"Projects approved pending co-financing",projects:"♦ Creation of wildlife observation areas<br /> ♦ Training of ecological guides<br /> ♦ Creation of ecological trails<br /> ♦ Familiarizing monkeys with coexisting with humans<br />"},communa:{title:"Giving communities a voice",subtitle:"Without community consent, no sustainable restoration",text:"Contrary to some preconceived ideas, the communities living in and around the reserve are not opposed to the forest. They are opposed to imposed conservation, which would ignore their vital needs and land rights. In Nyamusisi, ecological restoration is therefore conceived as a process of dialogue and social peace. Restoration means negotiating parcel by parcel. The boundaries of the reserve now run through fields that have been cultivated for more than twenty years in some cases; the solution can therefore be neither expulsion nor the status quo, but a gradual reclassification of land use. The Three-Year Operational Plan devotes an entire pillar to community engagement, recognising that ecological restoration in Nyamusisi is inseparable from the resolution of land and social conflicts. Activities to identify occupants, assess occupied areas and analyse needs form the basis of this process. Recognises and identifies areas of the defunct forest that the community considers restorable and areas that are non-negotiable because they provide their livelihood.",boxtitle:"Projects approved pending co-financing",project:`♦ Project to identify occupants and mediate land disputes
          (restore without displacing)<br />
♦ Recognition of alternative activities to intensive exploitation of natural resources and implementation of incentives and compensation measures (revival of abandoned agroforestry systems for coffee and cocoa, and integrated livestock farming)`},zone:{title:"Changing approach: Restoring ≠ excluding",subtitle:"The forest no longer conceived as a space to be emptied, but as a space to be organised",text:"The new vision for the reserve marks a clear break with the colonial model of conservation based on exclusion. For decades, nature conservation was seen as a means of distancing humans from nature: drawing a boundary, declaring an area ‘protected’, then attempting to remove those who lived there. In Nyamusisi, this approach proved not only unrealistic, but also a source of conflict, informal occupation and, paradoxically, ecological degradation. In this logic, community management is not a social tool added to conservation; it is the condition that makes it possible. The inhabitants become co-managers because they are already active participants in the territory. Ecological restoration then depends on social security: when rights are recognised, conflicts diminish; when incomes are secure, pressure on the forest decreases; when the community benefits directly from biodiversity, it protects it.",boxtitle:"Projects approved pending co-financing",projects:`♦ Forest restoration (demarcation of areas, floristic inventory, planting of native trees, maintenance and security)<br/>
♦ Protection and biomonitoring (wildlife inventories, biodiversity monitoring)<br/>`,step:"Organisation/zoning of the Nyamusisi Forest Reserve"},agroforesterie:{title:"Agroforestry as a key solution",subtitle:"Feeding people while feeding the forest. Food security and economic diversification",text:"The revival of agroforestry is one of the major investments in the Three-Year Operational Plan. It simultaneously addresses three strategic objectives: food security, reducing pressure on reserves and improving the incomes of local households. On Idjwi, every improvement in agricultural yield directly prevents further land clearing, as spatial expansion is the only adjustment variable available to households. Agroforestry does not seek to pit agriculture against conservation, but to reconcile them within the same productive system. By combining trees, food crops and integrated livestock farming, it recreates productive landscapes capable of sustainably feeding households while restoring lost ecological functions: soil fertility, water infiltration, microclimate and carbon storage. The programme is more dependent on natural resources, particularly women and indigenous communities, not for purely symbolic reasons, but because they are at the heart of the real economy of the territory. Agroforestry first and foremost secures food supplies. Food crops are maintained but stabilised by restored soil fertility, while trees provide complementary products: fruit, non-timber forest products, fodder and domestic wood. In the medium term, certain sectors such as coffee, cocoa and agroforestry products generate regular commercial income. Agroforestry primarily secures food supplies. Food crops are maintained but stabilised by restored soil fertility, while trees provide additional produce: fruit, non-timber forest products, fodder and domestic wood. In the medium term, certain sectors such as coffee, cocoa and agroforestry products generate regular commercial income. Families no longer depend on a single seasonal harvest that is vulnerable to climatic variations. This diversification reduces economic vulnerability and, consequently, the need to draw on reserves in times of crisis."},femmes:{title:"Women at the heart of forest restoration",subtitle:"Caring for the land to keep families safe",text:"The ecological restoration of the Nyamusisi Forest Reserve begins with those who live off the land on a daily basis. Women are responsible for most of the food production, collecting firewood, maintaining plots of land and providing informal environmental education within families. They are therefore both the first to be affected by forest degradation and the first to be able to transform its use. When the forest disappears, collection distances increase, working hours lengthen and household food security declines. Restoring the forest therefore also means reducing daily hardship and stabilising domestic life. The Three-Year Operational Plan explicitly recognises this central role and plans to support women as key players in the local ecological transition.",boxtitle:"Projects approved pending co-financing",projects:`♦ Construction of community nurseries managed by women's groups and seed banks<br />
♦ Subsidies for family agroforestry<br />
♦ Implementation of measures to ensure participation in local management committees<br />`},eco:{title:"Forest, blue monkeys and ecotourism",subtitle:"Towards autonomous reserve management: a local and sustainable economic model",text:"Community ecotourism is seen as an additional economic driver. Light infrastructure projects leverage the island's natural and cultural assets. Guides, trackers, bungalow managers, lake transport operators, and artisans benefit directly from this economy. Biodiversity protection thus becomes a professional activity. This dynamic provides regular and diversified income for local households, reducing their dependence on destructive activities and strengthening social acceptance of the reserve. The experience offered goes beyond nature observation. It combines landscapes, knowledge, and island culture: agricultural practices, traditional uses of plants, local history, and daily life all contribute to the narrative. The synergy between lake and mountain reinforces this identity: boating, hiking, wildlife observation, and cultural immersion make up a coherent journey where nature and society are inseparable.",caption:"Hotel facilities on Idjwi Island seen from the lake © Ley Uwera",boxtitle:"Projects approved pending co-financing",projects:`♦ Improve infrastructure connecting to lake routes and ensure accessibility to the Idjwi-Nyamusisi Nature Reserve<br />
♦ Construction of bungalows on the Bulolero site<br />
♦ Preparation and support for the creation of tourist packages<br />`},gestion:{title:"The forest lives if the community lives",subtitle:"Community management + environmental education",text:"Conservation is not maintained solely through monitoring, but through learning. By working with schools and universities, the reserve becomes a living educational space where young people gain a concrete understanding of the link between the environment, food, and economic future. Protecting the forest then ceases to be an external obligation and becomes an informed choice. Environmental education also prepares the community for management. An informed population participates more in decisions, understands the rules of use, and helps prevent conflicts. Protection no longer relies solely on authority, but on collective support. When the community understands the forest, it protects it; when the forest supports the community, it lasts.",boxtitle:"Projets validés dans l'attente d'un cofinancement",projects:`♦ Educational network project involving schools and universities around the reserve<br />
♦ Implementation of a Sports and Environment program<br />
♦ Awarding of reserve scholarships<br />`},foot:{title:"Restoration is already underway. Support the reserve in restoring its living landscape. Contact us",text:"The Idjwi-Nyamusisi Nature Reserve was created by South Kivu Provincial Decree No. 22/131/GP/SK of May 20, 2022, as a community reserve of local interest under the management of the Ntambuka and Rubenga chiefdoms. To maximize effective joint management, the two chiefdoms have set up a structure called the “Nature Reserve Management Committee” as a state organization capable of safeguarding the community interests of the two chiefdoms that populate Idjwi Island and then reporting to the provincial government of South Kivu and the National Ministry of Environment and Sustainable Development through the Provincial Coordination of Environment and Sustainable Development of South Kivu. The Management Committee has an NGO registered under number F92/52.340: “CGRI Asbl.”"}};var eT=Mt('<div class="overlay svelte-1n46o8q"><!></div>'),tT=Mt('<div class="three-wrapper svelte-1n46o8q"><div class="model-preview svelte-1n46o8q"><p class="svelte-1n46o8q"> </p> <button id="maquette" class="svelte-1n46o8q"> </button> <img height="500px" alt="Aperçu du modèle" class="svelte-1n46o8q"/></div> <div class="box svelte-1n46o8q"><p class="svelte-1n46o8q"><i> </i></p> <h3 class="svelte-1n46o8q"><!></h3></div></div>'),nT=Mt('<div class="pdf-overlay svelte-1n46o8q"><div class="backdrop svelte-1n46o8q"></div> <div class="pdf-frame svelte-1n46o8q"><iframe class="svelte-1n46o8q"></iframe></div></div>'),iT=Mt(`<!> <div><div class="pre-keymap-trigger svelte-1n46o8q"><div class="header svelte-1n46o8q"><p class="header-text svelte-1n46o8q" style="color:#5d5769;padding:0"> </p></div> <div class="story svelte-1n46o8q"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"> </h1> <h2 class="svelte-1n46o8q"> </h2></div> <p style="color:#5d5769;padding-left:1em;padding-right:1em;font-size:0.95; border-bottom:1px solid #0085ca; margin-block-start: 0em;margin-block-end: 0em;" class="svelte-1n46o8q"> </p></section></div></div> <div><!></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"> </h1> <h2 class="svelte-1n46o8q"> </h2></div> <p class="svelte-1n46o8q"> </p></section></div> <div><!></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"> </h1> <h2 class="svelte-1n46o8q"> </h2></div> <p class="svelte-1n46o8q"><!></p> <img height="500px" class="img-size svelte-1n46o8q" alt="Image capturée par une caméra piège PEX sur le site de Bulolero, Réserve
        Naturelle d’Idjwi-Nyamusisi © Réserve Naturelle d’Idjwi-Nyamusisi"/> <p style="font-size:x-small; margin-block-start: 0em;margin-block-end: 0em;" class="svelte-1n46o8q"><!></p></section></div> <!> <div class="story svelte-1n46o8q" style="margin-top: 30em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1> <h2 class="svelte-1n46o8q"><!></h2></div> <p class="svelte-1n46o8q"><!></p> <img class="img-size svelte-1n46o8q" alt="GHS" height="650"/> <div class="box svelte-1n46o8q"><p class="svelte-1n46o8q"><i><!></i></p> <h3 class="svelte-1n46o8q"><!></h3></div></section></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1> <h2 class="svelte-1n46o8q"><!></h2></div> <p class="svelte-1n46o8q"><!></p> <div class="box svelte-1n46o8q"><p class="svelte-1n46o8q"><i><!></i></p> <h3 class="svelte-1n46o8q"><!></h3></div></section></div> <div style="margin-top: 5em;"><h2 style="font-size: 1.5em;text-align:start;padding-left: 1em;" class="svelte-1n46o8q"><!></h2> <!></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1> <h2 class="svelte-1n46o8q"><!></h2></div> <p class="svelte-1n46o8q"><!></p></section></div> <div style="margin-top:10em"><!></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1> <h2 class="svelte-1n46o8q"><!></h2></div> <p class="svelte-1n46o8q"><!></p> <div class="box svelte-1n46o8q"><p class="svelte-1n46o8q"><i><!></i></p> <h3 class="svelte-1n46o8q"><!></h3></div></section></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1> <h2 class="svelte-1n46o8q"><!></h2></div> <p class="svelte-1n46o8q"><!></p> <div class="video-container svelte-1n46o8q"><video controls playsinline="" loop class="svelte-1n46o8q"></video></div> <p style="font-size:small; text-align:center; margin-block-start: 0em;margin-block-end: 0em;" class="svelte-1n46o8q"><!></p> <div class="box svelte-1n46o8q"><p class="svelte-1n46o8q"><i><!></i></p> <h3 class="svelte-1n46o8q"><!></h3></div></section></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1> <h2 class="svelte-1n46o8q"><!></h2></div> <p class="svelte-1n46o8q"><!></p> <div class="box svelte-1n46o8q"><p class="svelte-1n46o8q"><i><!></i></p> <h3 class="svelte-1n46o8q"><!></h3></div></section></div> <div class="story svelte-1n46o8q" style="margin-top: 20em;border-top: 3px double #0085ca"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q"><!></h1></div> <div><img height="100px" style="margin-top:2em;" alt="Logo Réserve Naturelle d’Idjwi-Nyamusisi"/> <p class="svelte-1n46o8q">⾕ Bugarula, Idjwi, Sud-Kivu, RDC <br/>⾕ 34 av. Hypodrome, Q.
          Nyalukemba, V. Bukavu, Sud-Kivu, RDC<br/>☏ +243 999 193 998, +243 976
          022 521<br/>✉ <a href="mailto:rnaidir@reservenaturelleidjwi.org">rnaidir@reservenaturelleidjwi.org</a>, <a href="mailto:infosrnaia@gmail.com">infosrnaia@gmail.com</a><br/>☞ <a href="https://reservenaturelleidjwi.org/">reservenaturelleidjwi.org</a></p> <p class="svelte-1n46o8q"><!></p></div></section></div> <section class="letter svelte-1n46o8q"><a target="_blank" rel="noopener noreferrer" style="text-decoration: none; font-weight:400; font-family: 'Lora', serif;"><img alt="Lettre du directeur" class="svelte-1n46o8q"/> <div class="caption svelte-1n46o8q"> </div> <div style="height:100px"></div></a></section></div> <!>`,3);function Om(i,e){if(new.target)return Yt({component:Om,...i});zt(e,!1);const t=()=>Oi(fi,"$lang",n),[n,s]=Bi(),r=En();let a=En(!1),o=En(0),l=En(!1);Yg(()=>(t(),Af),()=>{Lt(r,t()==="fr"?QE:Af)}),Kg();var c={$set:$t,$on:(Bn,Rn)=>Kt(e,Bn,Rn)};di();var u=iT(),h=go(u);Rp(h,{});var d=ce(h,2),f=W(d),g=W(f),_=W(g),m=W(_,!0);k(_),k(g);var p=ce(g,2),M=W(p),E=W(M),b=W(E),A=W(b,!0);k(b);var R=ce(b,2),w=W(R,!0);k(R),k(E);var D=ce(E,2),x=W(D,!0);k(D),k(M),k(p),k(f);var S=ce(f,2),P=W(S);Um(P,{}),k(S);var V=ce(S,2),B=W(V),K=W(B),Y=W(K),q=W(Y,!0);k(Y);var O=ce(Y,2),J=W(O,!0);k(O),k(K);var re=ce(K,2),ae=W(re,!0);k(re),k(B),k(V);var de=ce(V,2),Oe=W(de);Sm(Oe,{}),k(de);var ke=ce(de,2),Tt=W(ke),gt=W(Tt),Z=W(gt),te=W(Z,!0);k(Z);var xe=ce(Z,2),ze=W(xe,!0);k(xe),k(gt);var Me=ce(gt,2),nt=W(Me);et(nt,()=>(G(r),Re(()=>G(r).singes.text))),k(Me);var Ft=ce(Me,2),Ze=ce(Ft,2),ut=W(Ze);et(ut,()=>(G(r),Re(()=>G(r).singes.caption))),k(Ze),k(Tt),k(ke);var ft=ce(ke,2);{var He=Bn=>{var Rn=eT(),fs=W(Rn);ym(fs,{$$events:{close:()=>Lt(a,!1)}}),k(Rn),at(Bn,Rn)},Nt=Bn=>{var Rn=tT(),fs=W(Rn),br=W(fs),Gl=W(br,!0);k(br);var Eo=ce(br,2),Ym=W(Eo,!0);k(Eo);var Km=ce(Eo,2);k(fs);var Bh=ce(fs,2),Wl=W(Bh),kh=W(Wl),$m=W(kh,!0);k(kh),k(Wl);var zh=ce(Wl,2),Zm=W(zh);et(Zm,()=>(G(r),Re(()=>G(r).three.projects))),k(zh),k(Bh),k(Rn),It(()=>{wt(Gl,(G(r),Re(()=>G(r).three.text))),wt(Ym,(G(r),Re(()=>G(r).three.button))),Ut(Km,"src",Re(()=>"/nyamusisi/image/model.png")),wt($m,(G(r),Re(()=>G(r).three.boxtitle)))}),Ls("click",Eo,()=>Lt(a,!0)),at(Bn,Rn)};Ds(ft,Bn=>{G(a)?Bn(He):Bn(Nt,!1)})}var C=ce(ft,2),Pt=W(C),it=W(Pt),pt=W(it),Ae=W(pt);et(Ae,()=>(G(r),Re(()=>G(r).communa.title))),k(pt);var T=ce(pt,2),v=W(T);et(v,()=>(G(r),Re(()=>G(r).communa.subtitle))),k(T),k(it);var I=ce(it,2),$=W(I);et($,()=>(G(r),Re(()=>G(r).communa.text))),k(I);var ee=ce(I,2),j=ce(ee,2),Ee=W(j),ue=W(Ee),Te=W(ue);et(Te,()=>(G(r),Re(()=>G(r).communa.boxtitle))),k(ue),k(Ee);var De=ce(Ee,2),ie=W(De);et(ie,()=>(G(r),Re(()=>G(r).communa.project))),k(De),k(j),k(Pt),k(C);var he=ce(C,2),Se=W(he),be=W(Se),oe=W(be),Ge=W(oe);et(Ge,()=>(G(r),Re(()=>G(r).zone.title))),k(oe);var L=ce(oe,2),ge=W(L);et(ge,()=>(G(r),Re(()=>G(r).zone.subtitle))),k(L),k(be);var se=ce(be,2),_e=W(se);et(_e,()=>(G(r),Re(()=>G(r).zone.text))),k(se);var ne=ce(se,2),Q=W(ne),le=W(Q),Ue=W(le);et(Ue,()=>(G(r),Re(()=>G(r).zone.boxtitle))),k(le),k(Q);var _t=ce(Q,2),ht=W(_t);et(ht,()=>(G(r),Re(()=>G(r).zone.projects))),k(_t),k(ne),k(Se),k(he);var yn=ce(he,2),wn=W(yn),Ul=W(wn);et(Ul,()=>(G(r),Re(()=>G(r).zone.step))),k(wn);var yo=ce(wn,2);Mm(yo,{}),k(yn);var Ns=ce(yn,2),So=W(Ns),gr=W(So),_r=W(gr),Hi=W(_r);et(Hi,()=>(G(r),Re(()=>G(r).agroforesterie.title))),k(_r);var vr=ce(_r,2),Mo=W(vr);et(Mo,()=>(G(r),Re(()=>G(r).agroforesterie.subtitle))),k(vr),k(gr);var Ta=ce(gr,2),xr=W(Ta);et(xr,()=>(G(r),Re(()=>G(r).agroforesterie.text))),k(Ta),k(So),k(Ns);var yr=ce(Ns,2),Sr=W(yr);Fm(Sr,{}),k(yr);var Mr=ce(yr,2),Aa=W(Mr),wa=W(Aa),Ra=W(wa),Fl=W(Ra);et(Fl,()=>(G(r),Re(()=>G(r).femmes.title))),k(Ra);var bo=ce(Ra,2),Ol=W(bo);et(Ol,()=>(G(r),Re(()=>G(r).femmes.subtitle))),k(bo),k(wa);var Ca=ce(wa,2),y=W(Ca);et(y,()=>(G(r),Re(()=>G(r).femmes.text))),k(Ca);var N=ce(Ca,2),H=W(N),z=W(H),F=W(z);et(F,()=>(G(r),Re(()=>G(r).femmes.boxtitle))),k(z),k(H);var fe=ce(H,2),ve=W(fe);et(ve,()=>(G(r),Re(()=>G(r).femmes.projects))),k(fe),k(N),k(Aa),k(Mr);var pe=ce(Mr,2),ye=W(pe),we=W(ye),Ie=W(we),Le=W(Ie);et(Le,()=>(G(r),Re(()=>G(r).eco.title))),k(Ie);var We=ce(Ie,2),mt=W(We);et(mt,()=>(G(r),Re(()=>G(r).eco.subtitle))),k(We),k(we);var At=ce(we,2),Ct=W(At);et(Ct,()=>(G(r),Re(()=>G(r).eco.text))),k(At);var dt=ce(At,2),Pe=W(dt);Pe.muted=!0,k(dt);var rt=ce(dt,2),st=W(rt);et(st,()=>(G(r),Re(()=>G(r).eco.caption))),k(rt);var on=ce(rt,2),mi=W(on),ln=W(mi),Us=W(ln);et(Us,()=>(G(r),Re(()=>G(r).eco.boxtitle))),k(ln),k(mi);var vt=ce(mi,2),cn=W(vt);et(cn,()=>(G(r),Re(()=>G(r).eco.projects))),k(vt),k(on),k(ye),k(pe);var un=ce(pe,2),Zt=W(un),Jt=W(Zt),Fs=W(Jt),Gi=W(Fs);et(Gi,()=>(G(r),Re(()=>G(r).gestion.title))),k(Fs);var Ah=ce(Fs,2),Bm=W(Ah);et(Bm,()=>(G(r),Re(()=>G(r).gestion.subtitle))),k(Ah),k(Jt);var Bl=ce(Jt,2),km=W(Bl);et(km,()=>(G(r),Re(()=>G(r).gestion.text))),k(Bl);var wh=ce(Bl,2),kl=W(wh),Rh=W(kl),zm=W(Rh);et(zm,()=>(G(r),Re(()=>G(r).gestion.boxtitle))),k(Rh),k(kl);var Ch=ce(kl,2),Vm=W(Ch);et(Vm,()=>(G(r),Re(()=>G(r).gestion.projects))),k(Ch),k(wh),k(Zt),k(un);var zl=ce(un,2),Ph=W(zl),Vl=W(Ph),Lh=W(Vl),Hm=W(Lh);et(Hm,()=>(G(r),Re(()=>G(r).foot.title))),k(Lh),k(Vl);var Ih=ce(Vl,2),Dh=W(Ih),Nh=ce(Dh,4),Gm=W(Nh);et(Gm,()=>(G(r),Re(()=>G(r).foot.text))),k(Nh),k(Ih),k(Ph),k(zl);var Uh=ce(zl,2),Hl=W(Uh),Fh=W(Hl),Oh=ce(Fh,2),Wm=W(Oh,!0);k(Oh),xa(2),k(Hl),k(Uh),k(d);var Xm=ce(d,2);{var qm=Bn=>{var Rn=nT(),fs=W(Rn),br=ce(fs,2),Gl=W(br);k(br),k(Rn),It(()=>Ut(Gl,"src",Re(()=>"/nyamusisi/pdf/RNAI-Appel.pdf"))),Ls("click",fs,()=>Lt(l,!1)),at(Bn,Rn)};Ds(Xm,Bn=>{G(l)&&Bn(qm)})}It(()=>{la(d,1,`layout ${G(l)?"modal-open":""}`,"svelte-1n46o8q"),wt(m,(G(r),Re(()=>G(r).header.text))),wt(A,(G(r),Re(()=>G(r).intro.title))),wt(w,(G(r),Re(()=>G(r).intro.subtitle))),wt(x,(G(r),Re(()=>G(r).intro.text))),wt(q,(G(r),Re(()=>G(r).history.title))),wt(J,(G(r),Re(()=>G(r).history.subtitle))),wt(ae,(G(r),Re(()=>G(r).history.text))),wt(te,(G(r),Re(()=>G(r).singes.title))),wt(ze,(G(r),Re(()=>G(r).singes.subtitle))),Ut(Ft,"src",Re(()=>"/nyamusisi/image/singe.jpg")),Ut(ee,"src",Re(()=>"/nyamusisi/svg/ghs.svg")),Ut(Pe,"src",Re(()=>"/nyamusisi/video/hopeland.mp4")),Ut(Dh,"src",Re(()=>"/nyamusisi/svg/logo.svg")),Ut(Hl,"href",(t(),Re(()=>`/nyamusisi/pdf/RNAI-Appel-${t()}.pdf`))),Ut(Fh,"src",Re(()=>"/nyamusisi/image/RNAI-Appel.jpg")),wt(Wm,t()==="fr"?"Lettre du Directeur de la Réserve forestière de Nyamusisi à ses partenaires et bailleurs de fonds":"Letter from the Director of the Nyamusisi Forest Reserve to its partners and donors")}),Ls("mouseenter",f,()=>Lt(o,0)),at(i,u);var jm=Vt(c);return s(),jm}new Om({target:document.getElementById("app")});
