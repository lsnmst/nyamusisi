var Ig=Object.defineProperty;var sd=s=>{throw TypeError(s)};var Dg=(s,t,e)=>t in s?Ig(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var li=(s,t,e)=>Dg(s,typeof t!="symbol"?t+"":t,e),Bc=(s,t,e)=>t.has(s)||sd("Cannot "+e);var tt=(s,t,e)=>(Bc(s,t,"read from private field"),e?e.call(s):t.get(s)),ue=(s,t,e)=>t.has(s)?sd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),se=(s,t,e,n)=>(Bc(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e),ln=(s,t,e)=>(Bc(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const _n=2,zl=4,Aa=8,Hp=1<<24,bs=16,Zi=32,Er=64,Fu=128,Qn=512,hn=1024,En=2048,Ts=4096,Oi=8192,ms=16384,Ql=32768,_o=65536,rd=1<<17,Gp=1<<18,Lo=1<<19,Wp=1<<20,br=32768,bh=1<<21,Bu=1<<22,ks=1<<23,yr=Symbol("$state"),Xp=Symbol("legacy props"),Qr=new class extends Error{constructor(){super(...arguments);li(this,"name","StaleReactionError");li(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Ng=3,Ra=8,Th=!1;var Zp=Array.isArray,Ug=Array.prototype.indexOf,go=Array.prototype.includes,Og=Array.from,qp=Object.defineProperty,io=Object.getOwnPropertyDescriptor,Yp=Object.getOwnPropertyDescriptors,Fg=Object.prototype,Bg=Array.prototype,ku=Object.getPrototypeOf,od=Object.isExtensible;function kg(s){return s()}function Eh(s){for(var t=0;t<s.length;t++)s[t]()}function jp(){var s,t,e=new Promise((n,r)=>{s=n,t=r});return{promise:e,resolve:s,reject:t}}function Kp(s){return s===this.v}function zg(s,t){return s!=s?t==t:s!==t||s!==null&&typeof s=="object"||typeof s=="function"}function Jp(s){return!zg(s,this.v)}function zu(s){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Vg(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Hg(s){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Gg(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wg(s){throw new Error("https://svelte.dev/e/effect_orphan")}function Xg(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zg(){throw new Error("https://svelte.dev/e/hydration_failed")}function qg(s){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function Yg(s){throw new Error("https://svelte.dev/e/props_invalid_value")}function jg(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kg(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jg(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function $g(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Io=!1,Qg=!1;function tv(){Io=!0}const ev=2,nv=8,iv=2,$p="[",Vu="[!",Qp="]",vo={},dn=Symbol(),sv="http://www.w3.org/1999/xhtml";let Be=null;function xo(s){Be=s}function Pa(s,t=!1,e){Be={p:Be,i:!1,c:null,e:null,s,x:null,l:Io&&!t?{s:null,u:null,$:[]}:null}}function Ca(s){var t=Be,e=t.e;if(e!==null){t.e=null;for(var n of e)Rm(n)}return s!==void 0&&(t.x=s),t.i=!0,Be=t.p,s??{}}function La(){return!Io||Be!==null&&Be.l===null}let lr=[];function tm(){var s=lr;lr=[],Eh(s)}function zs(s){if(lr.length===0&&!la){var t=lr;queueMicrotask(()=>{t===lr&&tm()})}lr.push(s)}function rv(){for(;lr.length>0;)tm()}function tc(s){console.warn("https://svelte.dev/e/hydration_mismatch")}function ov(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Qe=!1;function to(s){Qe=s}let We;function vs(s){if(s===null)throw tc(),vo;return We=s}function Hu(){return vs(Xs(We))}function pi(s){if(Qe){if(Xs(We)!==null)throw tc(),vo;We=s}}function Vl(s=1){if(Qe){for(var t=s,e=We;t--;)e=Xs(e);We=e}}function em(s=!0){for(var t=0,e=We;;){if(e.nodeType===Ra){var n=e.data;if(n===Qp){if(t===0)return e;t-=1}else(n===$p||n===Vu)&&(t+=1)}var r=Xs(e);s&&e.remove(),e=r}}function av(s){if(!s||s.nodeType!==Ra)throw tc(),vo;return s.data}function eo(s){if(typeof s!="object"||s===null||yr in s)return s;const t=ku(s);if(t!==Fg&&t!==Bg)return s;var e=new Map,n=Zp(s),r=As(0),o=Sr,l=c=>{if(Sr===o)return c();var u=me,f=Sr;ei(null),hd(o);var p=c();return ei(u),hd(f),p};return n&&e.set("length",As(s.length)),new Proxy(s,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&jg();var p=e.get(u);return p===void 0?p=l(()=>{var d=As(f.value);return e.set(u,d),d}):je(p,f.value,!0),!0},deleteProperty(c,u){var f=e.get(u);if(f===void 0){if(u in c){const p=l(()=>As(dn));e.set(u,p),ca(r)}}else je(f,dn),ca(r);return!0},get(c,u,f){var g;if(u===yr)return s;var p=e.get(u),d=u in c;if(p===void 0&&(!d||(g=io(c,u))!=null&&g.writable)&&(p=l(()=>{var M=eo(d?c[u]:dn),S=As(M);return S}),e.set(u,p)),p!==void 0){var _=De(p);return _===dn?void 0:_}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var p=e.get(u);p&&(f.value=De(p))}else if(f===void 0){var d=e.get(u),_=d==null?void 0:d.v;if(d!==void 0&&_!==dn)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return f},has(c,u){var _;if(u===yr)return!0;var f=e.get(u),p=f!==void 0&&f.v!==dn||Reflect.has(c,u);if(f!==void 0||Se!==null&&(!p||(_=io(c,u))!=null&&_.writable)){f===void 0&&(f=l(()=>{var g=p?eo(c[u]):dn,M=As(g);return M}),e.set(u,f));var d=De(f);if(d===dn)return!1}return p},set(c,u,f,p){var A;var d=e.get(u),_=u in c;if(n&&u==="length")for(var g=f;g<d.v;g+=1){var M=e.get(g+"");M!==void 0?je(M,dn):g in c&&(M=l(()=>As(dn)),e.set(g+"",M))}if(d===void 0)(!_||(A=io(c,u))!=null&&A.writable)&&(d=l(()=>As(void 0)),je(d,eo(f)),e.set(u,d));else{_=d.v!==dn;var S=l(()=>eo(f));je(d,S)}var y=Reflect.getOwnPropertyDescriptor(c,u);if(y!=null&&y.set&&y.set.call(p,f),!_){if(n&&typeof u=="string"){var v=e.get("length"),P=Number(u);Number.isInteger(P)&&P>=v.v&&je(v,P+1)}ca(r)}return!0},ownKeys(c){De(r);var u=Reflect.ownKeys(c).filter(d=>{var _=e.get(d);return _===void 0||_.v!==dn});for(var[f,p]of e)p.v!==dn&&!(f in c)&&u.push(f);return u},setPrototypeOf(){Kg()}})}var ad,nm,im,sm;function wh(){if(ad===void 0){ad=window,nm=/Firefox/.test(navigator.userAgent);var s=Element.prototype,t=Node.prototype,e=Text.prototype;im=io(t,"firstChild").get,sm=io(t,"nextSibling").get,od(s)&&(s.__click=void 0,s.__className=void 0,s.__attributes=null,s.__style=void 0,s.__e=void 0),od(e)&&(e.__t=void 0)}}function yo(s=""){return document.createTextNode(s)}function Hl(s){return im.call(s)}function Xs(s){return sm.call(s)}function mi(s,t){if(!Qe)return Hl(s);var e=Hl(We);return e===null&&(e=We.appendChild(yo())),vs(e),e}function Kn(s,t=1,e=!1){let n=Qe?We:s;for(var r;t--;)r=n,n=Xs(n);if(!Qe)return n;if(e&&(n==null?void 0:n.nodeType)!==Ng){var o=yo();return n===null?r==null||r.after(o):n.before(o),vs(o),o}return vs(n),n}function lv(s){s.textContent=""}function cv(){return!1}function rm(s){var t=Se;if(t===null)return me.f|=ks,s;if((t.f&Ql)===0){if((t.f&Fu)===0)throw s;t.b.error(s)}else Mo(s,t)}function Mo(s,t){for(;t!==null;){if((t.f&Fu)!==0)try{t.b.error(s);return}catch(e){s=e}t=t.parent}throw s}const hv=-7169;function nn(s,t){s.f=s.f&hv|t}function Gu(s){(s.f&Qn)!==0||s.deps===null?nn(s,hn):nn(s,Ts)}function om(s){if(s!==null)for(const t of s)(t.f&_n)===0||(t.f&br)===0||(t.f^=br,om(t.deps))}function am(s,t,e){(s.f&En)!==0?t.add(s):(s.f&Ts)!==0&&e.add(s),om(s.deps),nn(s,hn)}const el=new Set;let Ee=null,pn=null,Bn=[],ec=null,Ah=!1,la=!1;var lo,co,pr,ho,Sa,ba,mr,uo,Xi,Rh,Ph,lm;const gf=class gf{constructor(){ue(this,Xi);li(this,"committed",!1);li(this,"current",new Map);li(this,"previous",new Map);ue(this,lo,new Set);ue(this,co,new Set);ue(this,pr,0);ue(this,ho,0);ue(this,Sa,null);ue(this,ba,new Set);ue(this,mr,new Set);li(this,"skipped_effects",new Set);li(this,"is_fork",!1);ue(this,uo,!1)}is_deferred(){return this.is_fork||tt(this,ho)>0}process(t){var r;Bn=[],this.apply();var e=[],n=[];for(const o of t)ln(this,Xi,Rh).call(this,o,e,n);if(this.is_deferred()){ln(this,Xi,Ph).call(this,n),ln(this,Xi,Ph).call(this,e);for(const o of this.skipped_effects)fm(o)}else{for(const o of tt(this,lo))o();tt(this,lo).clear(),tt(this,pr)===0&&ln(this,Xi,lm).call(this),Ee=null,ld(n),ld(e),(r=tt(this,Sa))==null||r.resolve()}pn=null}capture(t,e){e!==dn&&!this.previous.has(t)&&this.previous.set(t,e),(t.f&ks)===0&&(this.current.set(t,t.v),pn==null||pn.set(t,t.v))}activate(){Ee=this,this.apply()}deactivate(){Ee===this&&(Ee=null,pn=null)}flush(){if(this.activate(),Bn.length>0){if(cm(),Ee!==null&&Ee!==this)return}else tt(this,pr)===0&&this.process([]);this.deactivate()}discard(){for(const t of tt(this,co))t(this);tt(this,co).clear()}increment(t){se(this,pr,tt(this,pr)+1),t&&se(this,ho,tt(this,ho)+1)}decrement(t){se(this,pr,tt(this,pr)-1),t&&se(this,ho,tt(this,ho)-1),!tt(this,uo)&&(se(this,uo,!0),zs(()=>{se(this,uo,!1),this.is_deferred()?Bn.length>0&&this.flush():this.revive()}))}revive(){for(const t of tt(this,ba))tt(this,mr).delete(t),nn(t,En),xs(t);for(const t of tt(this,mr))nn(t,Ts),xs(t);this.flush()}oncommit(t){tt(this,lo).add(t)}ondiscard(t){tt(this,co).add(t)}settled(){return(tt(this,Sa)??se(this,Sa,jp())).promise}static ensure(){if(Ee===null){const t=Ee=new gf;el.add(Ee),la||zs(()=>{Ee===t&&t.flush()})}return Ee}apply(){}};lo=new WeakMap,co=new WeakMap,pr=new WeakMap,ho=new WeakMap,Sa=new WeakMap,ba=new WeakMap,mr=new WeakMap,uo=new WeakMap,Xi=new WeakSet,Rh=function(t,e,n){t.f^=hn;for(var r=t.first,o=null;r!==null;){var l=r.f,c=(l&(Zi|Er))!==0,u=c&&(l&hn)!==0,f=u||(l&Oi)!==0||this.skipped_effects.has(r);if(!f&&r.fn!==null){c?r.f^=hn:o!==null&&(l&(zl|Aa|Hp))!==0?o.b.defer_effect(r):(l&zl)!==0?e.push(r):Da(r)&&((l&bs)!==0&&tt(this,mr).add(r),pa(r));var p=r.first;if(p!==null){r=p;continue}}var d=r.parent;for(r=r.next;r===null&&d!==null;)d===o&&(o=null),r=d.next,d=d.parent}},Ph=function(t){for(var e=0;e<t.length;e+=1)am(t[e],tt(this,ba),tt(this,mr))},lm=function(){var r;if(el.size>1){this.previous.clear();var t=pn,e=!0;for(const o of el){if(o===this){e=!1;continue}const l=[];for(const[u,f]of this.current){if(o.current.has(u))if(e&&f!==o.current.get(u))o.current.set(u,f);else continue;l.push(u)}if(l.length===0)continue;const c=[...o.current.keys()].filter(u=>!this.current.has(u));if(c.length>0){var n=Bn;Bn=[];const u=new Set,f=new Map;for(const p of l)hm(p,c,u,f);if(Bn.length>0){Ee=o,o.apply();for(const p of Bn)ln(r=o,Xi,Rh).call(r,p,[],[]);o.deactivate()}Bn=n}}Ee=null,pn=t}this.committed=!0,el.delete(this)};let Vs=gf;function Wu(s){var t=la;la=!0;try{for(var e;;){if(rv(),Bn.length===0&&(Ee==null||Ee.flush(),Bn.length===0))return ec=null,e;cm()}}finally{la=t}}function cm(){Ah=!0;var s=null;try{for(var t=0;Bn.length>0;){var e=Vs.ensure();if(t++>1e3){var n,r;uv()}e.process(Bn),Hs.clear()}}finally{Ah=!1,ec=null}}function uv(){try{Xg()}catch(s){Mo(s,ec)}}let fi=null;function ld(s){var t=s.length;if(t!==0){for(var e=0;e<t;){var n=s[e++];if((n.f&(ms|Oi))===0&&Da(n)&&(fi=new Set,pa(n),n.deps===null&&n.first===null&&n.nodes===null&&(n.teardown===null&&n.ac===null?Nm(n):n.fn=null),(fi==null?void 0:fi.size)>0)){Hs.clear();for(const r of fi){if((r.f&(ms|Oi))!==0)continue;const o=[r];let l=r.parent;for(;l!==null;)fi.has(l)&&(fi.delete(l),o.push(l)),l=l.parent;for(let c=o.length-1;c>=0;c--){const u=o[c];(u.f&(ms|Oi))===0&&pa(u)}}fi.clear()}}fi=null}}function hm(s,t,e,n){if(!e.has(s)&&(e.add(s),s.reactions!==null))for(const r of s.reactions){const o=r.f;(o&_n)!==0?hm(r,t,e,n):(o&(Bu|bs))!==0&&(o&En)===0&&um(r,t,n)&&(nn(r,En),xs(r))}}function um(s,t,e){const n=e.get(s);if(n!==void 0)return n;if(s.deps!==null)for(const r of s.deps){if(go.call(t,r))return!0;if((r.f&_n)!==0&&um(r,t,e))return e.set(r,!0),!0}return e.set(s,!1),!1}function xs(s){for(var t=ec=s;t.parent!==null;){t=t.parent;var e=t.f;if(Ah&&t===Se&&(e&bs)!==0&&(e&Gp)===0)return;if((e&(Er|Zi))!==0){if((e&hn)===0)return;t.f^=hn}}Bn.push(t)}function fm(s){if(!((s.f&Zi)!==0&&(s.f&hn)!==0)){nn(s,hn);for(var t=s.first;t!==null;)fm(t),t=t.next}}function fv(s){let t=0,e=Ia(0),n;return()=>{Yu()&&(De(e),Pm(()=>(t===0&&(n=nc(()=>s(()=>ca(e)))),t+=1,()=>{zs(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ca(e))})})))}}var dv=_o|Lo|Fu;function pv(s,t,e){new mv(s,t,e)}var On,Ta,Ri,_r,Pi,Yn,Cn,Ci,cs,Fs,gr,hs,fo,vr,po,mo,us,Jl,Ke,dm,pm,Ch,Cl,Ll,Lh;class mv{constructor(t,e,n){ue(this,Ke);li(this,"parent");li(this,"is_pending",!1);ue(this,On);ue(this,Ta,Qe?We:null);ue(this,Ri);ue(this,_r);ue(this,Pi);ue(this,Yn,null);ue(this,Cn,null);ue(this,Ci,null);ue(this,cs,null);ue(this,Fs,null);ue(this,gr,0);ue(this,hs,0);ue(this,fo,!1);ue(this,vr,!1);ue(this,po,new Set);ue(this,mo,new Set);ue(this,us,null);ue(this,Jl,fv(()=>(se(this,us,Ia(tt(this,gr))),()=>{se(this,us,null)})));se(this,On,t),se(this,Ri,e),se(this,_r,n),this.parent=Se.b,this.is_pending=!!tt(this,Ri).pending,se(this,Pi,Lm(()=>{if(Se.b=this,Qe){const o=tt(this,Ta);Hu(),o.nodeType===Ra&&o.data===Vu?ln(this,Ke,pm).call(this):(ln(this,Ke,dm).call(this),tt(this,hs)===0&&(this.is_pending=!1))}else{var r=ln(this,Ke,Ch).call(this);try{se(this,Yn,ls(()=>n(r)))}catch(o){this.error(o)}tt(this,hs)>0?ln(this,Ke,Ll).call(this):this.is_pending=!1}return()=>{var o;(o=tt(this,Fs))==null||o.remove()}},dv)),Qe&&se(this,On,We)}defer_effect(t){am(t,tt(this,po),tt(this,mo))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!tt(this,Ri).pending}update_pending_count(t){ln(this,Ke,Lh).call(this,t),se(this,gr,tt(this,gr)+t),!(!tt(this,us)||tt(this,fo))&&(se(this,fo,!0),zs(()=>{se(this,fo,!1),tt(this,us)&&Gl(tt(this,us),tt(this,gr))}))}get_effect_pending(){return tt(this,Jl).call(this),De(tt(this,us))}error(t){var e=tt(this,Ri).onerror;let n=tt(this,Ri).failed;if(tt(this,vr)||!e&&!n)throw t;tt(this,Yn)&&(zn(tt(this,Yn)),se(this,Yn,null)),tt(this,Cn)&&(zn(tt(this,Cn)),se(this,Cn,null)),tt(this,Ci)&&(zn(tt(this,Ci)),se(this,Ci,null)),Qe&&(vs(tt(this,Ta)),Vl(),vs(em()));var r=!1,o=!1;const l=()=>{if(r){ov();return}r=!0,o&&$g(),Vs.ensure(),se(this,gr,0),tt(this,Ci)!==null&&ha(tt(this,Ci),()=>{se(this,Ci,null)}),this.is_pending=this.has_pending_snippet(),se(this,Yn,ln(this,Ke,Cl).call(this,()=>(se(this,vr,!1),ls(()=>tt(this,_r).call(this,tt(this,On)))))),tt(this,hs)>0?ln(this,Ke,Ll).call(this):this.is_pending=!1};zs(()=>{try{o=!0,e==null||e(t,l),o=!1}catch(c){Mo(c,tt(this,Pi)&&tt(this,Pi).parent)}n&&se(this,Ci,ln(this,Ke,Cl).call(this,()=>{Vs.ensure(),se(this,vr,!0);try{return ls(()=>{n(tt(this,On),()=>t,()=>l)})}catch(c){return Mo(c,tt(this,Pi).parent),null}finally{se(this,vr,!1)}}))})}}On=new WeakMap,Ta=new WeakMap,Ri=new WeakMap,_r=new WeakMap,Pi=new WeakMap,Yn=new WeakMap,Cn=new WeakMap,Ci=new WeakMap,cs=new WeakMap,Fs=new WeakMap,gr=new WeakMap,hs=new WeakMap,fo=new WeakMap,vr=new WeakMap,po=new WeakMap,mo=new WeakMap,us=new WeakMap,Jl=new WeakMap,Ke=new WeakSet,dm=function(){try{se(this,Yn,ls(()=>tt(this,_r).call(this,tt(this,On))))}catch(t){this.error(t)}},pm=function(){const t=tt(this,Ri).pending;t&&(se(this,Cn,ls(()=>t(tt(this,On)))),zs(()=>{var e=ln(this,Ke,Ch).call(this);se(this,Yn,ln(this,Ke,Cl).call(this,()=>(Vs.ensure(),ls(()=>tt(this,_r).call(this,e))))),tt(this,hs)>0?ln(this,Ke,Ll).call(this):(ha(tt(this,Cn),()=>{se(this,Cn,null)}),this.is_pending=!1)}))},Ch=function(){var t=tt(this,On);return this.is_pending&&(se(this,Fs,yo()),tt(this,On).before(tt(this,Fs)),t=tt(this,Fs)),t},Cl=function(t){var e=Se,n=me,r=Be;zi(tt(this,Pi)),ei(tt(this,Pi)),xo(tt(this,Pi).ctx);try{return t()}catch(o){return rm(o),null}finally{zi(e),ei(n),xo(r)}},Ll=function(){const t=tt(this,Ri).pending;tt(this,Yn)!==null&&(se(this,cs,document.createDocumentFragment()),tt(this,cs).append(tt(this,Fs)),Fm(tt(this,Yn),tt(this,cs))),tt(this,Cn)===null&&se(this,Cn,ls(()=>t(tt(this,On))))},Lh=function(t){var e;if(!this.has_pending_snippet()){this.parent&&ln(e=this.parent,Ke,Lh).call(e,t);return}if(se(this,hs,tt(this,hs)+t),tt(this,hs)===0){this.is_pending=!1;for(const n of tt(this,po))nn(n,En),xs(n);for(const n of tt(this,mo))nn(n,Ts),xs(n);tt(this,po).clear(),tt(this,mo).clear(),tt(this,Cn)&&ha(tt(this,Cn),()=>{se(this,Cn,null)}),tt(this,cs)&&(tt(this,On).before(tt(this,cs)),se(this,cs,null))}};function _v(s,t,e,n){const r=La()?Xu:mm;var o=s.filter(_=>!_.settled);if(e.length===0&&o.length===0){n(t.map(r));return}var l=Ee,c=Se,u=gv(),f=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(_=>_.promise)):null;function p(_){u();try{n(_)}catch(g){(c.f&ms)===0&&Mo(g,c)}l==null||l.deactivate(),Ih()}if(e.length===0){f.then(()=>p(t.map(r)));return}function d(){u(),Promise.all(e.map(_=>vv(_))).then(_=>p([...t.map(r),..._])).catch(_=>Mo(_,c))}f?f.then(d):d()}function gv(){var s=Se,t=me,e=Be,n=Ee;return function(o=!0){zi(s),ei(t),xo(e),o&&(n==null||n.activate())}}function Ih(){zi(null),ei(null),xo(null)}function Xu(s){var t=_n|En,e=me!==null&&(me.f&_n)!==0?me:null;return Se!==null&&(Se.f|=Lo),{ctx:Be,deps:null,effects:null,equals:Kp,f:t,fn:s,reactions:null,rv:0,v:dn,wv:0,parent:e??Se,ac:null}}function vv(s,t,e){let n=Se;n===null&&Vg();var r=n.b,o=void 0,l=Ia(dn),c=!me,u=new Map;return Cv(()=>{var g;var f=jp();o=f.promise;try{Promise.resolve(s()).then(f.resolve,f.reject).then(()=>{p===Ee&&p.committed&&p.deactivate(),Ih()})}catch(M){f.reject(M),Ih()}var p=Ee;if(c){var d=r.is_rendered();r.update_pending_count(1),p.increment(d),(g=u.get(p))==null||g.reject(Qr),u.delete(p),u.set(p,f)}const _=(M,S=void 0)=>{if(p.activate(),S)S!==Qr&&(l.f|=ks,Gl(l,S));else{(l.f&ks)!==0&&(l.f^=ks),Gl(l,M);for(const[y,v]of u){if(u.delete(y),y===p)break;v.reject(Qr)}}c&&(r.update_pending_count(-1),p.decrement(d))};f.promise.then(_,M=>_(null,M||"unknown"))}),Am(()=>{for(const f of u.values())f.reject(Qr)}),new Promise(f=>{function p(d){function _(){d===o?f(l):p(o)}d.then(_,_)}p(o)})}function mm(s){const t=Xu(s);return t.equals=Jp,t}function _m(s){var t=s.effects;if(t!==null){s.effects=null;for(var e=0;e<t.length;e+=1)zn(t[e])}}function xv(s){for(var t=s.parent;t!==null;){if((t.f&_n)===0)return(t.f&ms)===0?t:null;t=t.parent}return null}function Zu(s){var t,e=Se;zi(xv(s));try{s.f&=~br,_m(s),t=bm(s)}finally{zi(e)}return t}function gm(s){var t=Zu(s);if(!s.equals(t)&&(s.wv=Mm(),(!(Ee!=null&&Ee.is_fork)||s.deps===null)&&(s.v=t,s.deps===null))){nn(s,hn);return}Ws||(pn!==null?(Yu()||Ee!=null&&Ee.is_fork)&&pn.set(s,t):Gu(s))}let Dh=new Set;const Hs=new Map;let vm=!1;function Ia(s,t){var e={f:0,v:s,reactions:null,equals:Kp,rv:0,wv:0};return e}function As(s,t){const e=Ia(s);return Mv(e),e}function Mr(s,t=!1,e=!0){var r;const n=Ia(s);return t||(n.equals=Jp),Io&&e&&Be!==null&&Be.l!==null&&((r=Be.l).s??(r.s=[])).push(n),n}function je(s,t,e=!1){me!==null&&(!vi||(me.f&rd)!==0)&&La()&&(me.f&(_n|bs|Bu|rd))!==0&&(ti===null||!go.call(ti,s))&&Jg();let n=e?eo(t):t;return Gl(s,n)}function Gl(s,t){if(!s.equals(t)){var e=s.v;Ws?Hs.set(s,t):Hs.set(s,e),s.v=t;var n=Vs.ensure();if(n.capture(s,e),(s.f&_n)!==0){const r=s;(s.f&En)!==0&&Zu(r),Gu(r)}s.wv=Mm(),xm(s,En),La()&&Se!==null&&(Se.f&hn)!==0&&(Se.f&(Zi|Er))===0&&(Zn===null?Sv([s]):Zn.push(s)),!n.is_fork&&Dh.size>0&&!vm&&yv()}return t}function yv(){vm=!1;for(const s of Dh)(s.f&hn)!==0&&nn(s,Ts),Da(s)&&pa(s);Dh.clear()}function ca(s){je(s,s.v+1)}function xm(s,t){var e=s.reactions;if(e!==null)for(var n=La(),r=e.length,o=0;o<r;o++){var l=e[o],c=l.f;if(!(!n&&l===Se)){var u=(c&En)===0;if(u&&nn(l,t),(c&_n)!==0){var f=l;pn==null||pn.delete(f),(c&br)===0&&(c&Qn&&(l.f|=br),xm(f,Ts))}else u&&((c&bs)!==0&&fi!==null&&fi.add(l),xs(l))}}}function qu(s){var t=me,e=Se;ei(null),zi(null);try{return s()}finally{ei(t),zi(e)}}let Il=!1,Ws=!1;function cd(s){Ws=s}let me=null,vi=!1;function ei(s){me=s}let Se=null;function zi(s){Se=s}let ti=null;function Mv(s){me!==null&&(ti===null?ti=[s]:ti.push(s))}let Ln=null,Un=0,Zn=null;function Sv(s){Zn=s}let ym=1,cr=0,Sr=cr;function hd(s){Sr=s}function Mm(){return++ym}function Da(s){var t=s.f;if((t&En)!==0)return!0;if(t&_n&&(s.f&=~br),(t&Ts)!==0){for(var e=s.deps,n=e.length,r=0;r<n;r++){var o=e[r];if(Da(o)&&gm(o),o.wv>s.wv)return!0}(t&Qn)!==0&&pn===null&&nn(s,hn)}return!1}function Sm(s,t,e=!0){var n=s.reactions;if(n!==null&&!(ti!==null&&go.call(ti,s)))for(var r=0;r<n.length;r++){var o=n[r];(o.f&_n)!==0?Sm(o,t,!1):t===o&&(e?nn(o,En):(o.f&hn)!==0&&nn(o,Ts),xs(o))}}function bm(s){var S;var t=Ln,e=Un,n=Zn,r=me,o=ti,l=Be,c=vi,u=Sr,f=s.f;Ln=null,Un=0,Zn=null,me=(f&(Zi|Er))===0?s:null,ti=null,xo(s.ctx),vi=!1,Sr=++cr,s.ac!==null&&(qu(()=>{s.ac.abort(Qr)}),s.ac=null);try{s.f|=bh;var p=s.fn,d=p(),_=s.deps,g=Ee==null?void 0:Ee.is_fork;if(Ln!==null){var M;if(g||Wl(s,Un),_!==null&&Un>0)for(_.length=Un+Ln.length,M=0;M<Ln.length;M++)_[Un+M]=Ln[M];else s.deps=_=Ln;if(Yu()&&(s.f&Qn)!==0)for(M=Un;M<_.length;M++)((S=_[M]).reactions??(S.reactions=[])).push(s)}else!g&&_!==null&&Un<_.length&&(Wl(s,Un),_.length=Un);if(La()&&Zn!==null&&!vi&&_!==null&&(s.f&(_n|Ts|En))===0)for(M=0;M<Zn.length;M++)Sm(Zn[M],s);if(r!==null&&r!==s){if(cr++,r.deps!==null)for(let y=0;y<e;y+=1)r.deps[y].rv=cr;if(t!==null)for(const y of t)y.rv=cr;Zn!==null&&(n===null?n=Zn:n.push(...Zn))}return(s.f&ks)!==0&&(s.f^=ks),d}catch(y){return rm(y)}finally{s.f^=bh,Ln=t,Un=e,Zn=n,me=r,ti=o,xo(l),vi=c,Sr=u}}function bv(s,t){let e=t.reactions;if(e!==null){var n=Ug.call(e,s);if(n!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[n]=e[r],e.pop())}}if(e===null&&(t.f&_n)!==0&&(Ln===null||!go.call(Ln,t))){var o=t;(o.f&Qn)!==0&&(o.f^=Qn,o.f&=~br),Gu(o),_m(o),Wl(o,0)}}function Wl(s,t){var e=s.deps;if(e!==null)for(var n=t;n<e.length;n++)bv(s,e[n])}function pa(s){var t=s.f;if((t&ms)===0){nn(s,hn);var e=Se,n=Il;Se=s,Il=!0;try{(t&(bs|Hp))!==0?Lv(s):Dm(s),Im(s);var r=bm(s);s.teardown=typeof r=="function"?r:null,s.wv=ym;var o;Th&&Qg&&(s.f&En)!==0&&s.deps}finally{Il=n,Se=e}}}async function Tv(){await Promise.resolve(),Wu()}function De(s){var t=s.f,e=(t&_n)!==0;if(me!==null&&!vi){var n=Se!==null&&(Se.f&ms)!==0;if(!n&&(ti===null||!go.call(ti,s))){var r=me.deps;if((me.f&bh)!==0)s.rv<cr&&(s.rv=cr,Ln===null&&r!==null&&r[Un]===s?Un++:Ln===null?Ln=[s]:Ln.push(s));else{(me.deps??(me.deps=[])).push(s);var o=s.reactions;o===null?s.reactions=[me]:go.call(o,me)||o.push(me)}}}if(Ws&&Hs.has(s))return Hs.get(s);if(e){var l=s;if(Ws){var c=l.v;return((l.f&hn)===0&&l.reactions!==null||Em(l))&&(c=Zu(l)),Hs.set(l,c),c}var u=(l.f&Qn)===0&&!vi&&me!==null&&(Il||(me.f&Qn)!==0),f=l.deps===null;Da(l)&&(u&&(l.f|=Qn),gm(l)),u&&!f&&Tm(l)}if(pn!=null&&pn.has(s))return pn.get(s);if((s.f&ks)!==0)throw s.v;return s.v}function Tm(s){if(s.deps!==null){s.f|=Qn;for(const t of s.deps)(t.reactions??(t.reactions=[])).push(s),(t.f&_n)!==0&&(t.f&Qn)===0&&Tm(t)}}function Em(s){if(s.v===dn)return!0;if(s.deps===null)return!1;for(const t of s.deps)if(Hs.has(t)||(t.f&_n)!==0&&Em(t))return!0;return!1}function nc(s){var t=vi;try{return vi=!0,s()}finally{vi=t}}function Ev(s){if(!(typeof s!="object"||!s||s instanceof EventTarget)){if(yr in s)Nh(s);else if(!Array.isArray(s))for(let t in s){const e=s[t];typeof e=="object"&&e&&yr in e&&Nh(e)}}}function Nh(s,t=new Set){if(typeof s=="object"&&s!==null&&!(s instanceof EventTarget)&&!t.has(s)){t.add(s),s instanceof Date&&s.getTime();for(let n in s)try{Nh(s[n],t)}catch{}const e=ku(s);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const n=Yp(e);for(let r in n){const o=n[r].get;if(o)try{o.call(s)}catch{}}}}}function wm(s){Se===null&&(me===null&&Wg(),Gg()),Ws&&Hg()}function wv(s,t){var e=t.last;e===null?t.last=t.first=s:(e.next=s,s.prev=e,t.last=s)}function qi(s,t,e){var n=Se;n!==null&&(n.f&Oi)!==0&&(s|=Oi);var r={ctx:Be,deps:null,nodes:null,f:s|En|Qn,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};if(e)try{pa(r),r.f|=Ql}catch(c){throw zn(r),c}else t!==null&&xs(r);var o=r;if(e&&o.deps===null&&o.teardown===null&&o.nodes===null&&o.first===o.last&&(o.f&Lo)===0&&(o=o.first,(s&bs)!==0&&(s&_o)!==0&&o!==null&&(o.f|=_o)),o!==null&&(o.parent=n,n!==null&&wv(o,n),me!==null&&(me.f&_n)!==0&&(s&Er)===0)){var l=me;(l.effects??(l.effects=[])).push(o)}return r}function Yu(){return me!==null&&!vi}function Am(s){const t=qi(Aa,null,!1);return nn(t,hn),t.teardown=s,t}function Uh(s){wm();var t=Se.f,e=!me&&(t&Zi)!==0&&(t&Ql)===0;if(e){var n=Be;(n.e??(n.e=[])).push(s)}else return Rm(s)}function Rm(s){return qi(zl|Wp,s,!1)}function Av(s){return wm(),qi(Aa|Wp,s,!0)}function Rv(s){Vs.ensure();const t=qi(Er|Lo,s,!0);return(e={})=>new Promise(n=>{e.outro?ha(t,()=>{zn(t),n(void 0)}):(zn(t),n(void 0))})}function Pv(s){return qi(zl,s,!1)}function Cv(s){return qi(Bu|Lo,s,!0)}function Pm(s,t=0){return qi(Aa|t,s,!0)}function Cm(s,t=[],e=[],n=[]){_v(n,t,e,r=>{qi(Aa,()=>s(...r.map(De)),!0)})}function Lm(s,t=0){var e=qi(bs|t,s,!0);return e}function ls(s){return qi(Zi|Lo,s,!0)}function Im(s){var t=s.teardown;if(t!==null){const e=Ws,n=me;cd(!0),ei(null);try{t.call(null)}finally{cd(e),ei(n)}}}function Dm(s,t=!1){var e=s.first;for(s.first=s.last=null;e!==null;){const r=e.ac;r!==null&&qu(()=>{r.abort(Qr)});var n=e.next;(e.f&Er)!==0?e.parent=null:zn(e,t),e=n}}function Lv(s){for(var t=s.first;t!==null;){var e=t.next;(t.f&Zi)===0&&zn(t),t=e}}function zn(s,t=!0){var e=!1;(t||(s.f&Gp)!==0)&&s.nodes!==null&&s.nodes.end!==null&&(Iv(s.nodes.start,s.nodes.end),e=!0),Dm(s,t&&!e),Wl(s,0),nn(s,ms);var n=s.nodes&&s.nodes.t;if(n!==null)for(const o of n)o.stop();Im(s);var r=s.parent;r!==null&&r.first!==null&&Nm(s),s.next=s.prev=s.teardown=s.ctx=s.deps=s.fn=s.nodes=s.ac=null}function Iv(s,t){for(;s!==null;){var e=s===t?null:Xs(s);s.remove(),s=e}}function Nm(s){var t=s.parent,e=s.prev,n=s.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),t!==null&&(t.first===s&&(t.first=n),t.last===s&&(t.last=e))}function ha(s,t,e=!0){var n=[];Um(s,n,!0);var r=()=>{e&&zn(s),t&&t()},o=n.length;if(o>0){var l=()=>--o||r();for(var c of n)c.out(l)}else r()}function Um(s,t,e){if((s.f&Oi)===0){s.f^=Oi;var n=s.nodes&&s.nodes.t;if(n!==null)for(const c of n)(c.is_global||e)&&t.push(c);for(var r=s.first;r!==null;){var o=r.next,l=(r.f&_o)!==0||(r.f&Zi)!==0&&(s.f&bs)!==0;Um(r,t,l?e:!1),r=o}}}function Dv(s){Om(s,!0)}function Om(s,t){if((s.f&Oi)!==0){s.f^=Oi,(s.f&hn)===0&&(nn(s,En),xs(s));for(var e=s.first;e!==null;){var n=e.next,r=(e.f&_o)!==0||(e.f&Zi)!==0;Om(e,r?t:!1),e=n}var o=s.nodes&&s.nodes.t;if(o!==null)for(const l of o)(l.is_global||t)&&l.in()}}function Fm(s,t){if(s.nodes)for(var e=s.nodes.start,n=s.nodes.end;e!==null;){var r=e===n?null:Xs(e);t.append(e),e=r}}const Nv=new Set,ud=new Set;function Uv(s,t,e,n={}){function r(o){if(n.capture||ia.call(t,o),!o.cancelBubble)return qu(()=>e==null?void 0:e.call(this,o))}return s.startsWith("pointer")||s.startsWith("touch")||s==="wheel"?zs(()=>{t.addEventListener(s,r,n)}):t.addEventListener(s,r,n),r}function hr(s,t,e,n,r){var o={capture:n,passive:r},l=Uv(s,t,e,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Am(()=>{t.removeEventListener(s,l,o)})}let fd=null;function ia(s){var y;var t=this,e=t.ownerDocument,n=s.type,r=((y=s.composedPath)==null?void 0:y.call(s))||[],o=r[0]||s.target;fd=s;var l=0,c=fd===s&&s.__root;if(c){var u=r.indexOf(c);if(u!==-1&&(t===document||t===window)){s.__root=t;return}var f=r.indexOf(t);if(f===-1)return;u<=f&&(l=u)}if(o=r[l]||s.target,o!==t){qp(s,"currentTarget",{configurable:!0,get(){return o||e}});var p=me,d=Se;ei(null),zi(null);try{for(var _,g=[];o!==null;){var M=o.assignedSlot||o.parentNode||o.host||null;try{var S=o["__"+n];S!=null&&(!o.disabled||s.target===o)&&S.call(o,s)}catch(v){_?g.push(v):_=v}if(s.cancelBubble||M===t||M===null)break;o=M}if(_){for(let v of g)queueMicrotask(()=>{throw v});throw _}}finally{s.__root=t,delete s.currentTarget,ei(p),zi(d)}}}function Ov(s){var t=document.createElement("template");return t.innerHTML=s.replaceAll("<!>","<!---->"),t.content}function Oh(s,t){var e=Se;e.nodes===null&&(e.nodes={start:s,end:t,a:null,t:null})}function Zs(s,t){var e=(t&iv)!==0,n,r=!s.startsWith("<!>");return()=>{if(Qe)return Oh(We,null),We;n===void 0&&(n=Ov(r?s:"<!>"+s),n=Hl(n));var o=e||nm?document.importNode(n,!0):n.cloneNode(!0);return Oh(o,o),o}}function Gs(s,t){if(Qe){var e=Se;((e.f&Ql)===0||e.nodes.end===null)&&(e.nodes.end=We),Hu();return}s!==null&&s.before(t)}const Fv=["touchstart","touchmove"];function Bv(s){return Fv.includes(s)}function Bm(s,t){return km(s,t)}function kv(s,t){wh(),t.intro=t.intro??!1;const e=t.target,n=Qe,r=We;try{for(var o=Hl(e);o&&(o.nodeType!==Ra||o.data!==$p);)o=Xs(o);if(!o)throw vo;to(!0),vs(o);const l=km(s,{...t,anchor:o});return to(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(c=>c.startsWith("https://svelte.dev/e/")))throw l;return l!==vo&&console.warn("Failed to hydrate: ",l),t.recover===!1&&Zg(),wh(),lv(e),to(!1),Bm(s,t)}finally{to(n),vs(r)}}const Or=new Map;function km(s,{target:t,anchor:e,props:n={},events:r,context:o,intro:l=!0}){wh();var c=new Set,u=d=>{for(var _=0;_<d.length;_++){var g=d[_];if(!c.has(g)){c.add(g);var M=Bv(g);t.addEventListener(g,ia,{passive:M});var S=Or.get(g);S===void 0?(document.addEventListener(g,ia,{passive:M}),Or.set(g,1)):Or.set(g,S+1)}}};u(Og(Nv)),ud.add(u);var f=void 0,p=Rv(()=>{var d=e??t.appendChild(yo());return pv(d,{pending:()=>{}},_=>{if(o){Pa({});var g=Be;g.c=o}if(r&&(n.$$events=r),Qe&&Oh(_,null),f=s(_,n)||{},Qe&&(Se.nodes.end=We,We===null||We.nodeType!==Ra||We.data!==Qp))throw tc(),vo;o&&Ca()}),()=>{var M;for(var _ of c){t.removeEventListener(_,ia);var g=Or.get(_);--g===0?(document.removeEventListener(_,ia),Or.delete(_)):Or.set(_,g)}ud.delete(u),d!==e&&((M=d.parentNode)==null||M.removeChild(d))}});return Fh.set(f,p),f}let Fh=new WeakMap;function zv(s,t){const e=Fh.get(s);return e?(Fh.delete(s),e(t)):Promise.resolve()}function ic(s){return new Vv(s)}var fs,jn;class Vv{constructor(t){ue(this,fs);ue(this,jn);var o;var e=new Map,n=(l,c)=>{var u=Mr(c,!1,!1);return e.set(l,u),u};const r=new Proxy({...t.props||{},$$events:{}},{get(l,c){return De(e.get(c)??n(c,Reflect.get(l,c)))},has(l,c){return c===Xp?!0:(De(e.get(c)??n(c,Reflect.get(l,c))),Reflect.has(l,c))},set(l,c,u){return je(e.get(c)??n(c,u),u),Reflect.set(l,c,u)}});se(this,jn,(t.hydrate?kv:Bm)(t.component,{target:t.target,anchor:t.anchor,props:r,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&Wu(),se(this,fs,r.$$events);for(const l of Object.keys(tt(this,jn)))l==="$set"||l==="$destroy"||l==="$on"||qp(this,l,{get(){return tt(this,jn)[l]},set(c){tt(this,jn)[l]=c},enumerable:!0});tt(this,jn).$set=l=>{Object.assign(r,l)},tt(this,jn).$destroy=()=>{zv(tt(this,jn))}}$set(t){tt(this,jn).$set(t)}$on(t,e){tt(this,fs)[t]=tt(this,fs)[t]||[];const n=(...r)=>e.call(this,...r);return tt(this,fs)[t].push(n),()=>{tt(this,fs)[t]=tt(this,fs)[t].filter(r=>r!==n)}}$destroy(){tt(this,jn).$destroy()}}fs=new WeakMap,jn=new WeakMap;const Hv="5";var Vp;typeof window<"u"&&((Vp=window.__svelte??(window.__svelte={})).v??(Vp.v=new Set)).add(Hv);tv();var di,Li,Fn,xr,Ea,wa,$l;class Gv{constructor(t,e=!0){li(this,"anchor");ue(this,di,new Map);ue(this,Li,new Map);ue(this,Fn,new Map);ue(this,xr,new Set);ue(this,Ea,!0);ue(this,wa,()=>{var t=Ee;if(tt(this,di).has(t)){var e=tt(this,di).get(t),n=tt(this,Li).get(e);if(n)Dv(n),tt(this,xr).delete(e);else{var r=tt(this,Fn).get(e);r&&(tt(this,Li).set(e,r.effect),tt(this,Fn).delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[o,l]of tt(this,di)){if(tt(this,di).delete(o),o===t)break;const c=tt(this,Fn).get(l);c&&(zn(c.effect),tt(this,Fn).delete(l))}for(const[o,l]of tt(this,Li)){if(o===e||tt(this,xr).has(o))continue;const c=()=>{if(Array.from(tt(this,di).values()).includes(o)){var f=document.createDocumentFragment();Fm(l,f),f.append(yo()),tt(this,Fn).set(o,{effect:l,fragment:f})}else zn(l);tt(this,xr).delete(o),tt(this,Li).delete(o)};tt(this,Ea)||!n?(tt(this,xr).add(o),ha(l,c,!1)):c()}}});ue(this,$l,t=>{tt(this,di).delete(t);const e=Array.from(tt(this,di).values());for(const[n,r]of tt(this,Fn))e.includes(n)||(zn(r.effect),tt(this,Fn).delete(n))});this.anchor=t,se(this,Ea,e)}ensure(t,e){var n=Ee,r=cv();if(e&&!tt(this,Li).has(t)&&!tt(this,Fn).has(t))if(r){var o=document.createDocumentFragment(),l=yo();o.append(l),tt(this,Fn).set(t,{effect:ls(()=>e(l)),fragment:o})}else tt(this,Li).set(t,ls(()=>e(this.anchor)));if(tt(this,di).set(n,t),r){for(const[c,u]of tt(this,Li))c===t?n.skipped_effects.delete(u):n.skipped_effects.add(u);for(const[c,u]of tt(this,Fn))c===t?n.skipped_effects.delete(u.effect):n.skipped_effects.add(u.effect);n.oncommit(tt(this,wa)),n.ondiscard(tt(this,$l))}else Qe&&(this.anchor=We),tt(this,wa).call(this)}}di=new WeakMap,Li=new WeakMap,Fn=new WeakMap,xr=new WeakMap,Ea=new WeakMap,wa=new WeakMap,$l=new WeakMap;function zm(s){Be===null&&zu(),Io&&Be.l!==null?Vm(Be).m.push(s):Uh(()=>{const t=nc(s);if(typeof t=="function")return t})}function Wv(s,t,{bubbles:e=!1,cancelable:n=!1}={}){return new CustomEvent(s,{detail:t,bubbles:e,cancelable:n})}function Xv(){const s=Be;return s===null&&zu(),(t,e,n)=>{var o;const r=(o=s.s.$$events)==null?void 0:o[t];if(r){const l=Zp(r)?r.slice():[r],c=Wv(t,e,n);for(const u of l)u.call(s.x,c);return!c.defaultPrevented}return!0}}function Zv(s){Be===null&&zu(),Be.l===null&&qg(),Vm(Be).a.push(s)}function Vm(s){var t=s.l;return t.u??(t.u={a:[],b:[],m:[]})}function Bh(s,t,e=!1){Qe&&Hu();var n=new Gv(s),r=e?_o:0;function o(l,c){if(Qe){const f=av(s)===Vu;if(l===f){var u=em();vs(u),n.anchor=u,to(!1),n.ensure(l,c),to(!0);return}}n.ensure(l,c)}Lm(()=>{var l=!1;t((c,u=!0)=>{l=!0,o(u,c)}),l||o(!1,null)},r)}const qv=Symbol("is custom element"),Yv=Symbol("is html");function kh(s,t,e,n){var r=jv(s);if(Qe){r[t]=s.getAttribute(t);return}r[t]!==(r[t]=e)&&(e==null?s.removeAttribute(t):typeof e!="string"&&Kv(s).includes(t)?s[t]=e:s.setAttribute(t,e))}function jv(s){return s.__attributes??(s.__attributes={[qv]:s.nodeName.includes("-"),[Yv]:s.namespaceURI===sv})}var dd=new Map;function Kv(s){var t=s.getAttribute("is")||s.nodeName,e=dd.get(t);if(e)return e;dd.set(t,e=[]);for(var n,r=s,o=Element.prototype;o!==r;){n=Yp(r);for(var l in n)n[l].set&&e.push(l);r=ku(r)}return e}function pd(s,t){return s===t||(s==null?void 0:s[yr])===t}function Hm(s={},t,e,n){return Pv(()=>{var r,o;return Pm(()=>{r=o,o=[],nc(()=>{s!==e(...o)&&(t(s,...o),r&&pd(e(...r),s)&&t(null,...r))})}),()=>{zs(()=>{o&&pd(e(...o),s)&&t(null,...o)})}}),s}function sc(s=!1){const t=Be,e=t.l.u;if(!e)return;let n=()=>Ev(t.s);if(s){let r=0,o={};const l=Xu(()=>{let c=!1;const u=t.s;for(const f in u)u[f]!==o[f]&&(o[f]=u[f],c=!0);return c&&r++,r});n=()=>De(l)}e.b.length&&Av(()=>{md(t,n),Eh(e.b)}),Uh(()=>{const r=nc(()=>e.m.map(kg));return()=>{for(const o of r)typeof o=="function"&&o()}}),e.a.length&&Uh(()=>{md(t,n),Eh(e.a)})}function md(s,t){if(s.l.s)for(const e of s.l.s)De(e);t()}function rc(s,t,e){var n;s.$$events||(s.$$events={}),(n=s.$$events)[t]||(n[t]=[]),s.$$events[t].push(e)}function oc(s){for(var t in s)t in this&&(this[t]=s[t])}let nl=!1;function Jv(s){var t=nl;try{return nl=!1,[s(),nl]}finally{nl=t}}function $v(s,t,e,n){var P;var r=!Io||(e&ev)!==0,o=(e&nv)!==0,l=n,c=!0,u=()=>(c&&(c=!1,l=n),l),f;{var p=yr in s||Xp in s;f=((P=io(s,t))==null?void 0:P.set)??(p&&t in s?A=>s[t]=A:void 0)}var d,_=!1;[d,_]=Jv(()=>s[t]),d===void 0&&n!==void 0&&(d=u(),f&&(r&&Yg(),f(d)));var g;if(r?g=()=>{var A=s[t];return A===void 0?u():(c=!0,A)}:g=()=>{var A=s[t];return A!==void 0&&(l=void 0),A===void 0?l:A},f){var M=s.$$legacy;return(function(A,C){return arguments.length>0?((!r||!C||M||_)&&f(C?g():A),A):g()})}var S=!1,y=mm(()=>(S=!1,g()));De(y);var v=Se;return(function(A,C){if(arguments.length>0){const D=C?De(y):r&&o?eo(A):A;return je(y,D),S=!0,l!==void 0&&(l=D),A}return Ws&&S||(v.f&ms)!==0?y.v:De(y)})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="182",so={ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qv=0,_d=1,t0=2,Dl=1,e0=2,sa=3,ys=0,In=1,Di=2,_s=0,ro=1,gd=2,vd=3,xd=4,n0=5,or=100,i0=101,s0=102,r0=103,o0=104,a0=200,l0=201,c0=202,h0=203,zh=204,Vh=205,u0=206,f0=207,d0=208,p0=209,m0=210,_0=211,g0=212,v0=213,x0=214,Hh=0,Gh=1,Wh=2,So=3,Xh=4,Zh=5,qh=6,Yh=7,Gm=0,y0=1,M0=2,Fi=0,Wm=1,Xm=2,Zm=3,qm=4,Ym=5,jm=6,Km=7,yd="attached",S0="detached",Jm=300,Tr=301,bo=302,jh=303,Kh=304,ac=306,To=1e3,Ni=1001,Xl=1002,tn=1003,$m=1004,ra=1005,en=1006,Nl=1007,ds=1008,kn=1009,Qm=1010,t_=1011,ma=1012,Ku=1013,Vi=1014,Jn=1015,Ms=1016,Ju=1017,$u=1018,_a=1020,e_=35902,n_=35899,i_=1021,s_=1022,$n=1023,Ss=1026,ur=1027,Qu=1028,tf=1029,Eo=1030,ef=1031,nf=1033,Ul=33776,Ol=33777,Fl=33778,Bl=33779,Jh=35840,$h=35841,Qh=35842,tu=35843,eu=36196,nu=37492,iu=37496,su=37488,ru=37489,ou=37490,au=37491,lu=37808,cu=37809,hu=37810,uu=37811,fu=37812,du=37813,pu=37814,mu=37815,_u=37816,gu=37817,vu=37818,xu=37819,yu=37820,Mu=37821,Su=36492,bu=36494,Tu=36495,Eu=36283,wu=36284,Au=36285,Ru=36286,ga=2300,va=2301,kc=2302,Md=2400,Sd=2401,bd=2402,b0=2500,T0=0,r_=1,Pu=2,E0=3200,o_=0,w0=1,Os="",mn="srgb",wn="srgb-linear",Zl="linear",Re="srgb",Fr=7680,Td=519,A0=512,R0=513,P0=514,sf=515,C0=516,L0=517,rf=518,I0=519,Cu=35044,Ed="300 es",Ui=2e3,ql=2001;function a_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function D0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N0(){const s=xa("canvas");return s.style.display="block",s}const wd={};function Yl(...s){const t="THREE."+s.shift();console.log(t,...s)}function zt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Yt(...s){const t="THREE."+s.shift();console.error(t,...s)}function ya(...s){const t=s.join(" ");t in wd||(wd[t]=!0,zt(...s))}function U0(s,t,e){return new Promise(function(n,r){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ad=1234567;const ua=Math.PI/180,wo=180/Math.PI;function xi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function of(s,t){return(s%t+t)%t}function O0(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function F0(s,t,e){return s!==t?(e-s)/(t-s):0}function fa(s,t,e){return(1-e)*s+e*t}function B0(s,t,e,n){return fa(s,t,1-Math.exp(-e*n))}function k0(s,t=1){return t-Math.abs(of(s,t*2)-t)}function z0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function V0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function H0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function G0(s,t){return s+Math.random()*(t-s)}function W0(s){return s*(.5-Math.random())}function X0(s){s!==void 0&&(Ad=s);let t=Ad+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z0(s){return s*ua}function q0(s){return s*wo}function Y0(s){return(s&s-1)===0&&s!==0}function j0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function K0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function J0(s,t,e,n,r){const o=Math.cos,l=Math.sin,c=o(e/2),u=l(e/2),f=o((t+n)/2),p=l((t+n)/2),d=o((t-n)/2),_=l((t-n)/2),g=o((n-t)/2),M=l((n-t)/2);switch(r){case"XYX":s.set(c*p,u*d,u*_,c*f);break;case"YZY":s.set(u*_,c*p,u*d,c*f);break;case"ZXZ":s.set(u*d,u*_,c*p,c*f);break;case"XZX":s.set(c*p,u*M,u*g,c*f);break;case"YXY":s.set(u*g,c*p,u*M,c*f);break;case"ZYZ":s.set(u*M,u*g,c*p,c*f);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const l_={DEG2RAD:ua,RAD2DEG:wo,generateUUID:xi,clamp:ce,euclideanModulo:of,mapLinear:O0,inverseLerp:F0,lerp:fa,damp:B0,pingpong:k0,smoothstep:z0,smootherstep:V0,randInt:H0,randFloat:G0,randFloatSpread:W0,seededRandom:X0,degToRad:Z0,radToDeg:q0,isPowerOfTwo:Y0,ceilPowerOfTwo:j0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:J0,normalize:Pe,denormalize:_i};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*n-l*r+t.x,this.y=o*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,l,c){let u=n[r+0],f=n[r+1],p=n[r+2],d=n[r+3],_=o[l+0],g=o[l+1],M=o[l+2],S=o[l+3];if(c<=0){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=d;return}if(c>=1){t[e+0]=_,t[e+1]=g,t[e+2]=M,t[e+3]=S;return}if(d!==S||u!==_||f!==g||p!==M){let y=u*_+f*g+p*M+d*S;y<0&&(_=-_,g=-g,M=-M,S=-S,y=-y);let v=1-c;if(y<.9995){const P=Math.acos(y),A=Math.sin(P);v=Math.sin(v*P)/A,c=Math.sin(c*P)/A,u=u*v+_*c,f=f*v+g*c,p=p*v+M*c,d=d*v+S*c}else{u=u*v+_*c,f=f*v+g*c,p=p*v+M*c,d=d*v+S*c;const P=1/Math.sqrt(u*u+f*f+p*p+d*d);u*=P,f*=P,p*=P,d*=P}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,o,l){const c=n[r],u=n[r+1],f=n[r+2],p=n[r+3],d=o[l],_=o[l+1],g=o[l+2],M=o[l+3];return t[e]=c*M+p*d+u*g-f*_,t[e+1]=u*M+p*_+f*d-c*g,t[e+2]=f*M+p*g+c*_-u*d,t[e+3]=p*M-c*d-u*_-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,o=t._z,l=t._order,c=Math.cos,u=Math.sin,f=c(n/2),p=c(r/2),d=c(o/2),_=u(n/2),g=u(r/2),M=u(o/2);switch(l){case"XYZ":this._x=_*p*d+f*g*M,this._y=f*g*d-_*p*M,this._z=f*p*M+_*g*d,this._w=f*p*d-_*g*M;break;case"YXZ":this._x=_*p*d+f*g*M,this._y=f*g*d-_*p*M,this._z=f*p*M-_*g*d,this._w=f*p*d+_*g*M;break;case"ZXY":this._x=_*p*d-f*g*M,this._y=f*g*d+_*p*M,this._z=f*p*M+_*g*d,this._w=f*p*d-_*g*M;break;case"ZYX":this._x=_*p*d-f*g*M,this._y=f*g*d+_*p*M,this._z=f*p*M-_*g*d,this._w=f*p*d+_*g*M;break;case"YZX":this._x=_*p*d+f*g*M,this._y=f*g*d+_*p*M,this._z=f*p*M-_*g*d,this._w=f*p*d-_*g*M;break;case"XZY":this._x=_*p*d-f*g*M,this._y=f*g*d-_*p*M,this._z=f*p*M+_*g*d,this._w=f*p*d+_*g*M;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],o=e[8],l=e[1],c=e[5],u=e[9],f=e[2],p=e[6],d=e[10],_=n+c+d;if(_>0){const g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(p-u)*g,this._y=(o-f)*g,this._z=(l-r)*g}else if(n>c&&n>d){const g=2*Math.sqrt(1+n-c-d);this._w=(p-u)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(o+f)/g}else if(c>d){const g=2*Math.sqrt(1+c-n-d);this._w=(o-f)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(u+p)/g}else{const g=2*Math.sqrt(1+d-n-c);this._w=(l-r)/g,this._x=(o+f)/g,this._y=(u+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,o=t._z,l=t._w,c=e._x,u=e._y,f=e._z,p=e._w;return this._x=n*p+l*c+r*f-o*u,this._y=r*p+l*u+o*c-n*f,this._z=o*p+l*f+n*u-r*c,this._w=l*p-n*c-r*u-o*f,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,o=t._z,l=t._w,c=this.dot(t);c<0&&(n=-n,r=-r,o=-o,l=-l,c=-c);let u=1-e;if(c<.9995){const f=Math.acos(c),p=Math.sin(f);u=Math.sin(u*f)/p,e=Math.sin(e*f)/p,this._x=this._x*u+n*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+r*e,this._z=this._z*u+o*e,this._w=this._w*u+l*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,o=t.x,l=t.y,c=t.z,u=t.w,f=2*(l*r-c*n),p=2*(c*e-o*r),d=2*(o*n-l*e);return this.x=e+u*f+l*d-c*p,this.y=n+u*p+c*f-o*d,this.z=r+u*d+o*p-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,o=t.z,l=e.x,c=e.y,u=e.z;return this.x=r*u-o*c,this.y=o*l-n*u,this.z=n*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zc.copy(this).projectOnVector(t),this.sub(zc)}reflect(t){return this.sub(zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new H,Rd=new Hi;class oe{constructor(t,e,n,r,o,l,c,u,f){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,l,c,u,f)}set(t,e,n,r,o,l,c,u,f){const p=this.elements;return p[0]=t,p[1]=r,p[2]=c,p[3]=e,p[4]=o,p[5]=u,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,l=n[0],c=n[3],u=n[6],f=n[1],p=n[4],d=n[7],_=n[2],g=n[5],M=n[8],S=r[0],y=r[3],v=r[6],P=r[1],A=r[4],C=r[7],D=r[2],N=r[5],U=r[8];return o[0]=l*S+c*P+u*D,o[3]=l*y+c*A+u*N,o[6]=l*v+c*C+u*U,o[1]=f*S+p*P+d*D,o[4]=f*y+p*A+d*N,o[7]=f*v+p*C+d*U,o[2]=_*S+g*P+M*D,o[5]=_*y+g*A+M*N,o[8]=_*v+g*C+M*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],f=t[7],p=t[8];return e*l*p-e*c*f-n*o*p+n*c*u+r*o*f-r*l*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],f=t[7],p=t[8],d=p*l-c*f,_=c*u-p*o,g=f*o-l*u,M=e*d+n*_+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=d*S,t[1]=(r*f-p*n)*S,t[2]=(c*n-r*l)*S,t[3]=_*S,t[4]=(p*e-r*u)*S,t[5]=(r*o-c*e)*S,t[6]=g*S,t[7]=(n*u-f*e)*S,t[8]=(l*e-n*o)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,l,c){const u=Math.cos(o),f=Math.sin(o);return this.set(n*u,n*f,-n*(u*l+f*c)+l+t,-r*f,r*u,-r*(-f*l+u*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Vc.makeScale(t,e)),this}rotate(t){return this.premultiply(Vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new oe,Pd=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){const s={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Re&&(r.r=gs(r.r),r.g=gs(r.g),r.b=gs(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Re&&(r.r=oo(r.r),r.g=oo(r.g),r.b=oo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Os?Zl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wn]:{primaries:t,whitePoint:n,transfer:Zl,toXYZ:Pd,fromXYZ:Cd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Pd,fromXYZ:Cd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),s}const ge=$0();function gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Br;class Q0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Br===void 0&&(Br=xa("canvas")),Br.width=t.width,Br.height=t.height;const r=Br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Br}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=gs(o[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gs(e[n]/255)*255):e[n]=gs(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tx=0;class af{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(Hc(r[l].image)):o.push(Hc(r[l]))}else o=Hc(r);n.url=o}return e||(t.images[this.uuid]=n),n}}function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Q0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let ex=0;const Gc=new H;class un extends wr{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=Ni,r=Ni,o=en,l=ds,c=$n,u=kn,f=un.DEFAULT_ANISOTROPY,p=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=xi(),this.name="",this.source=new af(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Jm;un.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,r=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o;const u=t.elements,f=u[0],p=u[4],d=u[8],_=u[1],g=u[5],M=u[9],S=u[2],y=u[6],v=u[10];if(Math.abs(p-_)<.01&&Math.abs(d-S)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+_)<.1&&Math.abs(d+S)<.1&&Math.abs(M+y)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(f+1)/2,C=(g+1)/2,D=(v+1)/2,N=(p+_)/4,U=(d+S)/4,X=(M+y)/4;return A>C&&A>D?A<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(A),r=N/n,o=U/n):C>D?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=N/r,o=X/r):D<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),n=U/o,r=X/o),this.set(n,r,o,e),this}let P=Math.sqrt((y-M)*(y-M)+(d-S)*(d-S)+(_-p)*(_-p));return Math.abs(P)<.001&&(P=1),this.x=(y-M)/P,this.y=(d-S)/P,this.z=(_-p)/P,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nx extends wr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const r={width:t,height:e,depth:n.depth},o=new un(r);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new af(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends nx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class c_ extends un{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ix extends un{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,ci):ci.fromBufferAttribute(o,l),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),il.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(t.matrixWorld),this.union(il)}const r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),sl.subVectors(this.max,qo),kr.subVectors(t.a,qo),zr.subVectors(t.b,qo),Vr.subVectors(t.c,qo),Rs.subVectors(zr,kr),Ps.subVectors(Vr,zr),Qs.subVectors(kr,Vr);let e=[0,-Rs.z,Rs.y,0,-Ps.z,Ps.y,0,-Qs.z,Qs.y,Rs.z,0,-Rs.x,Ps.z,0,-Ps.x,Qs.z,0,-Qs.x,-Rs.y,Rs.x,0,-Ps.y,Ps.x,0,-Qs.y,Qs.x,0];return!Wc(e,kr,zr,Vr,sl)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,kr,zr,Vr,sl))?!1:(rl.crossVectors(Rs,Ps),e=[rl.x,rl.y,rl.z],Wc(e,kr,zr,Vr,sl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ns=[new H,new H,new H,new H,new H,new H,new H,new H],ci=new H,il=new Yi,kr=new H,zr=new H,Vr=new H,Rs=new H,Ps=new H,Qs=new H,qo=new H,sl=new H,rl=new H,tr=new H;function Wc(s,t,e,n,r){for(let o=0,l=s.length-3;o<=l;o+=3){tr.fromArray(s,o);const c=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),u=t.dot(tr),f=e.dot(tr),p=n.dot(tr);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>c)return!1}return!0}const sx=new Yi,Yo=new H,Xc=new H;class ji{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sx.setFromPoints(t).getCenter(n);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const e=Yo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Yo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Xc)),this.expandByPoint(Yo.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const is=new H,Zc=new H,ol=new H,Cs=new H,qc=new H,al=new H,Yc=new H;class Na{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,is)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=is.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(is.copy(this.origin).addScaledVector(this.direction,e),is.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Zc.copy(t).add(e).multiplyScalar(.5),ol.copy(e).sub(t).normalize(),Cs.copy(this.origin).sub(Zc);const o=t.distanceTo(e)*.5,l=-this.direction.dot(ol),c=Cs.dot(this.direction),u=-Cs.dot(ol),f=Cs.lengthSq(),p=Math.abs(1-l*l);let d,_,g,M;if(p>0)if(d=l*u-c,_=l*c-u,M=o*p,d>=0)if(_>=-M)if(_<=M){const S=1/p;d*=S,_*=S,g=d*(d+l*_+2*c)+_*(l*d+_+2*u)+f}else _=o,d=Math.max(0,-(l*_+c)),g=-d*d+_*(_+2*u)+f;else _=-o,d=Math.max(0,-(l*_+c)),g=-d*d+_*(_+2*u)+f;else _<=-M?(d=Math.max(0,-(-l*o+c)),_=d>0?-o:Math.min(Math.max(-o,-u),o),g=-d*d+_*(_+2*u)+f):_<=M?(d=0,_=Math.min(Math.max(-o,-u),o),g=_*(_+2*u)+f):(d=Math.max(0,-(l*o+c)),_=d>0?o:Math.min(Math.max(-o,-u),o),g=-d*d+_*(_+2*u)+f);else _=l>0?-o:o,d=Math.max(0,-(l*_+c)),g=-d*d+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zc).addScaledVector(ol,_),g}intersectSphere(t,e){is.subVectors(t.center,this.origin);const n=is.dot(this.direction),r=is.dot(is)-n*n,o=t.radius*t.radius;if(r>o)return null;const l=Math.sqrt(o-r),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,l,c,u;const f=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,_=this.origin;return f>=0?(n=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(n=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),p>=0?(o=(t.min.y-_.y)*p,l=(t.max.y-_.y)*p):(o=(t.max.y-_.y)*p,l=(t.min.y-_.y)*p),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),d>=0?(c=(t.min.z-_.z)*d,u=(t.max.z-_.z)*d):(c=(t.max.z-_.z)*d,u=(t.min.z-_.z)*d),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,is)!==null}intersectTriangle(t,e,n,r,o){qc.subVectors(e,t),al.subVectors(n,t),Yc.crossVectors(qc,al);let l=this.direction.dot(Yc),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Cs.subVectors(this.origin,t);const u=c*this.direction.dot(al.crossVectors(Cs,al));if(u<0)return null;const f=c*this.direction.dot(qc.cross(Cs));if(f<0||u+f>l)return null;const p=-c*Cs.dot(Yc);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,r,o,l,c,u,f,p,d,_,g,M,S,y){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,l,c,u,f,p,d,_,g,M,S,y)}set(t,e,n,r,o,l,c,u,f,p,d,_,g,M,S,y){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=o,v[5]=l,v[9]=c,v[13]=u,v[2]=f,v[6]=p,v[10]=d,v[14]=_,v[3]=g,v[7]=M,v[11]=S,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Hr.setFromMatrixColumn(t,0).length(),o=1/Hr.setFromMatrixColumn(t,1).length(),l=1/Hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,o=t.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const _=l*p,g=l*d,M=c*p,S=c*d;e[0]=u*p,e[4]=-u*d,e[8]=f,e[1]=g+M*f,e[5]=_-S*f,e[9]=-c*u,e[2]=S-_*f,e[6]=M+g*f,e[10]=l*u}else if(t.order==="YXZ"){const _=u*p,g=u*d,M=f*p,S=f*d;e[0]=_+S*c,e[4]=M*c-g,e[8]=l*f,e[1]=l*d,e[5]=l*p,e[9]=-c,e[2]=g*c-M,e[6]=S+_*c,e[10]=l*u}else if(t.order==="ZXY"){const _=u*p,g=u*d,M=f*p,S=f*d;e[0]=_-S*c,e[4]=-l*d,e[8]=M+g*c,e[1]=g+M*c,e[5]=l*p,e[9]=S-_*c,e[2]=-l*f,e[6]=c,e[10]=l*u}else if(t.order==="ZYX"){const _=l*p,g=l*d,M=c*p,S=c*d;e[0]=u*p,e[4]=M*f-g,e[8]=_*f+S,e[1]=u*d,e[5]=S*f+_,e[9]=g*f-M,e[2]=-f,e[6]=c*u,e[10]=l*u}else if(t.order==="YZX"){const _=l*u,g=l*f,M=c*u,S=c*f;e[0]=u*p,e[4]=S-_*d,e[8]=M*d+g,e[1]=d,e[5]=l*p,e[9]=-c*p,e[2]=-f*p,e[6]=g*d+M,e[10]=_-S*d}else if(t.order==="XZY"){const _=l*u,g=l*f,M=c*u,S=c*f;e[0]=u*p,e[4]=-d,e[8]=f*p,e[1]=_*d+S,e[5]=l*p,e[9]=g*d-M,e[2]=M*d-g,e[6]=c*p,e[10]=S*d+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rx,t,ox)}lookAt(t,e,n){const r=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ls.crossVectors(n,Dn),Ls.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ls.crossVectors(n,Dn)),Ls.normalize(),ll.crossVectors(Dn,Ls),r[0]=Ls.x,r[4]=ll.x,r[8]=Dn.x,r[1]=Ls.y,r[5]=ll.y,r[9]=Dn.y,r[2]=Ls.z,r[6]=ll.z,r[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,o=this.elements,l=n[0],c=n[4],u=n[8],f=n[12],p=n[1],d=n[5],_=n[9],g=n[13],M=n[2],S=n[6],y=n[10],v=n[14],P=n[3],A=n[7],C=n[11],D=n[15],N=r[0],U=r[4],X=r[8],w=r[12],R=r[1],F=r[5],q=r[9],Q=r[13],rt=r[2],ot=r[6],et=r[10],j=r[14],K=r[3],Tt=r[7],st=r[11],dt=r[15];return o[0]=l*N+c*R+u*rt+f*K,o[4]=l*U+c*F+u*ot+f*Tt,o[8]=l*X+c*q+u*et+f*st,o[12]=l*w+c*Q+u*j+f*dt,o[1]=p*N+d*R+_*rt+g*K,o[5]=p*U+d*F+_*ot+g*Tt,o[9]=p*X+d*q+_*et+g*st,o[13]=p*w+d*Q+_*j+g*dt,o[2]=M*N+S*R+y*rt+v*K,o[6]=M*U+S*F+y*ot+v*Tt,o[10]=M*X+S*q+y*et+v*st,o[14]=M*w+S*Q+y*j+v*dt,o[3]=P*N+A*R+C*rt+D*K,o[7]=P*U+A*F+C*ot+D*Tt,o[11]=P*X+A*q+C*et+D*st,o[15]=P*w+A*Q+C*j+D*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],l=t[1],c=t[5],u=t[9],f=t[13],p=t[2],d=t[6],_=t[10],g=t[14],M=t[3],S=t[7],y=t[11],v=t[15],P=u*g-f*_,A=c*g-f*d,C=c*_-u*d,D=l*g-f*p,N=l*_-u*p,U=l*d-c*p;return e*(S*P-y*A+v*C)-n*(M*P-y*D+v*N)+r*(M*A-S*D+v*U)-o*(M*C-S*N+y*U)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],f=t[7],p=t[8],d=t[9],_=t[10],g=t[11],M=t[12],S=t[13],y=t[14],v=t[15],P=d*y*f-S*_*f+S*u*g-c*y*g-d*u*v+c*_*v,A=M*_*f-p*y*f-M*u*g+l*y*g+p*u*v-l*_*v,C=p*S*f-M*d*f+M*c*g-l*S*g-p*c*v+l*d*v,D=M*d*u-p*S*u-M*c*_+l*S*_+p*c*y-l*d*y,N=e*P+n*A+r*C+o*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return t[0]=P*U,t[1]=(S*_*o-d*y*o-S*r*g+n*y*g+d*r*v-n*_*v)*U,t[2]=(c*y*o-S*u*o+S*r*f-n*y*f-c*r*v+n*u*v)*U,t[3]=(d*u*o-c*_*o-d*r*f+n*_*f+c*r*g-n*u*g)*U,t[4]=A*U,t[5]=(p*y*o-M*_*o+M*r*g-e*y*g-p*r*v+e*_*v)*U,t[6]=(M*u*o-l*y*o-M*r*f+e*y*f+l*r*v-e*u*v)*U,t[7]=(l*_*o-p*u*o+p*r*f-e*_*f-l*r*g+e*u*g)*U,t[8]=C*U,t[9]=(M*d*o-p*S*o-M*n*g+e*S*g+p*n*v-e*d*v)*U,t[10]=(l*S*o-M*c*o+M*n*f-e*S*f-l*n*v+e*c*v)*U,t[11]=(p*c*o-l*d*o-p*n*f+e*d*f+l*n*g-e*c*g)*U,t[12]=D*U,t[13]=(p*S*r-M*d*r+M*n*_-e*S*_-p*n*y+e*d*y)*U,t[14]=(M*c*r-l*S*r-M*n*u+e*S*u+l*n*y-e*c*y)*U,t[15]=(l*d*r-p*c*r+p*n*u-e*d*u-l*n*_+e*c*_)*U,this}scale(t){const e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),o=1-n,l=t.x,c=t.y,u=t.z,f=o*l,p=o*c;return this.set(f*l+n,f*c-r*u,f*u+r*c,0,f*c+r*u,p*c+n,p*u-r*l,0,f*u-r*c,p*u+r*l,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,l){return this.set(1,n,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,o=e._x,l=e._y,c=e._z,u=e._w,f=o+o,p=l+l,d=c+c,_=o*f,g=o*p,M=o*d,S=l*p,y=l*d,v=c*d,P=u*f,A=u*p,C=u*d,D=n.x,N=n.y,U=n.z;return r[0]=(1-(S+v))*D,r[1]=(g+C)*D,r[2]=(M-A)*D,r[3]=0,r[4]=(g-C)*N,r[5]=(1-(_+v))*N,r[6]=(y+P)*N,r[7]=0,r[8]=(M+A)*U,r[9]=(y-P)*U,r[10]=(1-(_+S))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let o=Hr.set(r[0],r[1],r[2]).length();const l=Hr.set(r[4],r[5],r[6]).length(),c=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),hi.copy(this);const f=1/o,p=1/l,d=1/c;return hi.elements[0]*=f,hi.elements[1]*=f,hi.elements[2]*=f,hi.elements[4]*=p,hi.elements[5]*=p,hi.elements[6]*=p,hi.elements[8]*=d,hi.elements[9]*=d,hi.elements[10]*=d,e.setFromRotationMatrix(hi),n.x=o,n.y=l,n.z=c,this}makePerspective(t,e,n,r,o,l,c=Ui,u=!1){const f=this.elements,p=2*o/(e-t),d=2*o/(n-r),_=(e+t)/(e-t),g=(n+r)/(n-r);let M,S;if(u)M=o/(l-o),S=l*o/(l-o);else if(c===Ui)M=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(c===ql)M=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=d,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,r,o,l,c=Ui,u=!1){const f=this.elements,p=2/(e-t),d=2/(n-r),_=-(e+t)/(e-t),g=-(n+r)/(n-r);let M,S;if(u)M=1/(l-o),S=l/(l-o);else if(c===Ui)M=-2/(l-o),S=-(l+o)/(l-o);else if(c===ql)M=-1/(l-o),S=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=d,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=M,f[14]=S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hr=new H,hi=new le,rx=new H(0,0,0),ox=new H(1,1,1),Ls=new H,ll=new H,Dn=new H,Ld=new le,Id=new Hi;class Gi{constructor(t=0,e=0,n=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,o=r[0],l=r[4],c=r[8],u=r[1],f=r[5],p=r[9],d=r[2],_=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,g),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ld,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class h_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ax=0;const Dd=new H,Gr=new Hi,ss=new le,cl=new H,jo=new H,lx=new H,cx=new Hi,Nd=new H(1,0,0),Ud=new H(0,1,0),Od=new H(0,0,1),Fd={type:"added"},hx={type:"removed"},Wr={type:"childadded",child:null},jc={type:"childremoved",child:null};class Ve extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new H,e=new Gi,n=new Hi,r=new H(1,1,1);function o(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new oe}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(Nd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Od,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cl.copy(t):cl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(jo,cl,this.up):ss.lookAt(cl,jo,this.up),this.quaternion.setFromRotationMatrix(ss),r&&(ss.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ss),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hx),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fd),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,lx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,cx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const d=u[f];o(t.shapes,d)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(o(t.materials,this.material[u]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(o(t.animations,u))}}if(e){const c=l(t.geometries),u=l(t.materials),f=l(t.textures),p=l(t.images),d=l(t.shapes),_=l(t.skeletons),g=l(t.animations),M=l(t.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),_.length>0&&(n.skeletons=_),g.length>0&&(n.animations=g),M.length>0&&(n.nodes=M)}return n.object=r,n;function l(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ve.DEFAULT_UP=new H(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new H,rs=new H,Kc=new H,os=new H,Xr=new H,Zr=new H,Bd=new H,Jc=new H,$c=new H,Qc=new H,th=new Fe,eh=new Fe,nh=new Fe;class gi{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ui.subVectors(t,e),r.cross(ui);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){ui.subVectors(r,e),rs.subVectors(n,e),Kc.subVectors(t,e);const l=ui.dot(ui),c=ui.dot(rs),u=ui.dot(Kc),f=rs.dot(rs),p=rs.dot(Kc),d=l*f-c*c;if(d===0)return o.set(0,0,0),null;const _=1/d,g=(f*u-c*p)*_,M=(l*p-c*u)*_;return o.set(1-g-M,M,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(t,e,n,r,o,l,c,u){return this.getBarycoord(t,e,n,r,os)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,os.x),u.addScaledVector(l,os.y),u.addScaledVector(c,os.z),u)}static getInterpolatedAttribute(t,e,n,r,o,l){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(t,e),eh.fromBufferAttribute(t,n),nh.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(th,o.x),l.addScaledVector(eh,o.y),l.addScaledVector(nh,o.z),l}static isFrontFacing(t,e,n,r){return ui.subVectors(n,e),rs.subVectors(t,e),ui.cross(rs).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),ui.cross(rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return gi.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,o=this.c;let l,c;Xr.subVectors(r,n),Zr.subVectors(o,n),Jc.subVectors(t,n);const u=Xr.dot(Jc),f=Zr.dot(Jc);if(u<=0&&f<=0)return e.copy(n);$c.subVectors(t,r);const p=Xr.dot($c),d=Zr.dot($c);if(p>=0&&d<=p)return e.copy(r);const _=u*d-p*f;if(_<=0&&u>=0&&p<=0)return l=u/(u-p),e.copy(n).addScaledVector(Xr,l);Qc.subVectors(t,o);const g=Xr.dot(Qc),M=Zr.dot(Qc);if(M>=0&&g<=M)return e.copy(o);const S=g*f-u*M;if(S<=0&&f>=0&&M<=0)return c=f/(f-M),e.copy(n).addScaledVector(Zr,c);const y=p*M-g*d;if(y<=0&&d-p>=0&&g-M>=0)return Bd.subVectors(o,r),c=(d-p)/(d-p+(g-M)),e.copy(r).addScaledVector(Bd,c);const v=1/(y+S+_);return l=S*v,c=_*v,e.copy(n).addScaledVector(Xr,l).addScaledVector(Zr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const u_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},hl={h:0,s:0,l:0};function ih(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ge.workingColorSpace){if(t=of(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,l=2*n-o;this.r=ih(l,o,t+1/3),this.g=ih(l,o,t),this.b=ih(l,o,t-1/3)}return ge.colorSpaceToWorking(this,r),this}setStyle(t,e=mn){function n(o){o!==void 0&&parseFloat(o)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=u_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return ge.workingToColorSpace(vn.copy(this),t),Math.round(ce(vn.r*255,0,255))*65536+Math.round(ce(vn.g*255,0,255))*256+Math.round(ce(vn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,o=vn.b,l=Math.max(n,r,o),c=Math.min(n,r,o);let u,f;const p=(c+l)/2;if(c===l)u=0,f=0;else{const d=l-c;switch(f=p<=.5?d/(l+c):d/(2-l-c),l){case n:u=(r-o)/d+(r<o?6:0);break;case r:u=(o-n)/d+2;break;case o:u=(n-r)/d+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=mn){ge.workingToColorSpace(vn.copy(this),t);const e=vn.r,n=vn.g,r=vn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Is),this.setHSL(Is.h+t,Is.s+e,Is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Is),t.getHSL(hl);const n=fa(Is.h,hl.h,e),r=fa(Is.s,hl.s,e),o=fa(Is.l,hl.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ee;ee.NAMES=u_;let ux=0;class ki extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ro,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Vh,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==ys&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zh&&(n.blendSrc=this.blendSrc),this.blendDst!==Vh&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}if(e){const o=r(t.textures),l=r(t.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fr extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new H,ul=new $t;let fx=0;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cu,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ul.fromBufferAttribute(this,e),ul.applyMatrix3(t),this.setXY(e,ul.x,ul.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array),o=Pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cu&&(t.usage=this.usage),t}}class f_ extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class d_ extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class yi extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dx=0;const Xn=new le,sh=new Ve,qr=new H,Nn=new Yi,Ko=new Yi,cn=new H;class ni extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a_(t)?d_:f_)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new oe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,o=t.length;r<o;r++){const l=t[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new yi(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const o=e[n];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){const c=e[o];Ko.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(Nn.min,Ko.min),Nn.expandByPoint(cn),cn.addVectors(Nn.max,Ko.max),Nn.expandByPoint(cn)):(Nn.expandByPoint(Ko.min),Nn.expandByPoint(Ko.max))}Nn.getCenter(n);let r=0;for(let o=0,l=t.count;o<l;o++)cn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(cn));if(e)for(let o=0,l=e.length;o<l;o++){const c=e[o],u=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)cn.fromBufferAttribute(c,f),u&&(qr.fromBufferAttribute(t,f),cn.add(qr)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],u=[];for(let X=0;X<n.count;X++)c[X]=new H,u[X]=new H;const f=new H,p=new H,d=new H,_=new $t,g=new $t,M=new $t,S=new H,y=new H;function v(X,w,R){f.fromBufferAttribute(n,X),p.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),_.fromBufferAttribute(o,X),g.fromBufferAttribute(o,w),M.fromBufferAttribute(o,R),p.sub(f),d.sub(f),g.sub(_),M.sub(_);const F=1/(g.x*M.y-M.x*g.y);isFinite(F)&&(S.copy(p).multiplyScalar(M.y).addScaledVector(d,-g.y).multiplyScalar(F),y.copy(d).multiplyScalar(g.x).addScaledVector(p,-M.x).multiplyScalar(F),c[X].add(S),c[w].add(S),c[R].add(S),u[X].add(y),u[w].add(y),u[R].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,w=P.length;X<w;++X){const R=P[X],F=R.start,q=R.count;for(let Q=F,rt=F+q;Q<rt;Q+=3)v(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const A=new H,C=new H,D=new H,N=new H;function U(X){D.fromBufferAttribute(r,X),N.copy(D);const w=c[X];A.copy(w),A.sub(D.multiplyScalar(D.dot(w))).normalize(),C.crossVectors(N,w);const F=C.dot(u[X])<0?-1:1;l.setXYZW(X,A.x,A.y,A.z,F)}for(let X=0,w=P.length;X<w;++X){const R=P[X],F=R.start,q=R.count;for(let Q=F,rt=F+q;Q<rt;Q+=3)U(t.getX(Q+0)),U(t.getX(Q+1)),U(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,g=n.count;_<g;_++)n.setXYZ(_,0,0,0);const r=new H,o=new H,l=new H,c=new H,u=new H,f=new H,p=new H,d=new H;if(t)for(let _=0,g=t.count;_<g;_+=3){const M=t.getX(_+0),S=t.getX(_+1),y=t.getX(_+2);r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,S),l.fromBufferAttribute(e,y),p.subVectors(l,o),d.subVectors(r,o),p.cross(d),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),c.add(p),u.add(p),f.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,g=e.count;_<g;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),p.subVectors(l,o),d.subVectors(r,o),p.cross(d),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(c,u){const f=c.array,p=c.itemSize,d=c.normalized,_=new f.constructor(u.length*p);let g=0,M=0;for(let S=0,y=u.length;S<y;S++){c.isInterleavedBufferAttribute?g=u[S]*c.data.stride+c.offset:g=u[S]*p;for(let v=0;v<p;v++)_[M++]=f[g++]}return new Tn(_,p,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ni,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],f=t(u,n);e.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const u=[],f=o[c];for(let p=0,d=f.length;p<d;p++){const _=f[p],g=t(_,n);u.push(g)}e.morphAttributes[c]=u}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const f=n[u];t.data.attributes[u]=f.toJSON(t.data)}const r={};let o=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let d=0,_=f.length;d<_;d++){const g=f[d];p.push(g.toJSON(t.data))}p.length>0&&(r[u]=p,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],d=o[f];for(let _=0,g=d.length;_<g;_++)p.push(d[_].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,p=l.length;f<p;f++){const d=l[f];this.addGroup(d.start,d.count,d.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kd=new le,er=new Na,fl=new ji,zd=new H,dl=new H,pl=new H,ml=new H,rh=new H,_l=new H,Vd=new H,gl=new H;class Vn extends Ve{constructor(t=new ni,e=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(o&&c){_l.set(0,0,0);for(let u=0,f=o.length;u<f;u++){const p=c[u],d=o[u];p!==0&&(rh.fromBufferAttribute(d,t),l?_l.addScaledVector(rh,p):_l.addScaledVector(rh.sub(e),p))}e.add(_l)}return e}raycast(t,e){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(o),er.copy(t.ray).recast(t.near),!(fl.containsPoint(er.origin)===!1&&(er.intersectSphere(fl,zd)===null||er.origin.distanceToSquared(zd)>(t.far-t.near)**2))&&(kd.copy(o).invert(),er.copy(t.ray).applyMatrix4(kd),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let r;const o=this.geometry,l=this.material,c=o.index,u=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,d=o.attributes.normal,_=o.groups,g=o.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const y=_[M],v=l[y.materialIndex],P=Math.max(y.start,g.start),A=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let C=P,D=A;C<D;C+=3){const N=c.getX(C),U=c.getX(C+1),X=c.getX(C+2);r=vl(this,v,t,n,f,p,d,N,U,X),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const M=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let y=M,v=S;y<v;y+=3){const P=c.getX(y),A=c.getX(y+1),C=c.getX(y+2);r=vl(this,l,t,n,f,p,d,P,A,C),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let M=0,S=_.length;M<S;M++){const y=_[M],v=l[y.materialIndex],P=Math.max(y.start,g.start),A=Math.min(u.count,Math.min(y.start+y.count,g.start+g.count));for(let C=P,D=A;C<D;C+=3){const N=C,U=C+1,X=C+2;r=vl(this,v,t,n,f,p,d,N,U,X),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const M=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let y=M,v=S;y<v;y+=3){const P=y,A=y+1,C=y+2;r=vl(this,l,t,n,f,p,d,P,A,C),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function px(s,t,e,n,r,o,l,c){let u;if(t.side===In?u=n.intersectTriangle(l,o,r,!0,c):u=n.intersectTriangle(r,o,l,t.side===ys,c),u===null)return null;gl.copy(c),gl.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(gl);return f<e.near||f>e.far?null:{distance:f,point:gl.clone(),object:s}}function vl(s,t,e,n,r,o,l,c,u,f){s.getVertexPosition(c,dl),s.getVertexPosition(u,pl),s.getVertexPosition(f,ml);const p=px(s,t,e,n,dl,pl,ml,Vd);if(p){const d=new H;gi.getBarycoord(Vd,dl,pl,ml,d),r&&(p.uv=gi.getInterpolatedAttribute(r,c,u,f,d,new $t)),o&&(p.uv1=gi.getInterpolatedAttribute(o,c,u,f,d,new $t)),l&&(p.normal=gi.getInterpolatedAttribute(l,c,u,f,d,new H),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:u,c:f,normal:new H,materialIndex:0};gi.getNormal(dl,pl,ml,_.normal),p.face=_,p.barycoord=d}return p}class Ua extends ni{constructor(t=1,e=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const u=[],f=[],p=[],d=[];let _=0,g=0;M("z","y","x",-1,-1,n,e,t,l,o,0),M("z","y","x",1,-1,n,e,-t,l,o,1),M("x","z","y",1,1,t,n,e,r,l,2),M("x","z","y",1,-1,t,n,-e,r,l,3),M("x","y","z",1,-1,t,e,n,r,o,4),M("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(u),this.setAttribute("position",new yi(f,3)),this.setAttribute("normal",new yi(p,3)),this.setAttribute("uv",new yi(d,2));function M(S,y,v,P,A,C,D,N,U,X,w){const R=C/U,F=D/X,q=C/2,Q=D/2,rt=N/2,ot=U+1,et=X+1;let j=0,K=0;const Tt=new H;for(let st=0;st<et;st++){const dt=st*F-Q;for(let Wt=0;Wt<ot;Wt++){const Ht=Wt*R-q;Tt[S]=Ht*P,Tt[y]=dt*A,Tt[v]=rt,f.push(Tt.x,Tt.y,Tt.z),Tt[S]=0,Tt[y]=0,Tt[v]=N>0?1:-1,p.push(Tt.x,Tt.y,Tt.z),d.push(Wt/U),d.push(1-st/X),j+=1}}for(let st=0;st<X;st++)for(let dt=0;dt<U;dt++){const Wt=_+dt+ot*st,Ht=_+dt+ot*(st+1),Qt=_+(dt+1)+ot*(st+1),Gt=_+(dt+1)+ot*st;u.push(Wt,Ht,Gt),u.push(Ht,Qt,Gt),K+=6}c.addGroup(g,K,w),g+=K,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ao(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Sn(s){const t={};for(let e=0;e<s.length;e++){const n=Ao(s[e]);for(const r in n)t[r]=n[r]}return t}function mx(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function p_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const _x={clone:Ao,merge:Sn};var gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gx,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ao(t.uniforms),this.uniformsGroups=mx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class m_ extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new H,Hd=new $t,Gd=new $t;class bn extends m_{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,e){return this.getViewBounds(t,Hd,Gd),e.subVectors(Gd,Hd)}setViewOffset(t,e,n,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,f=l.fullHeight;o+=l.offsetX*r/u,e-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yr=-90,jr=1;class xx extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Yr,jr,t,e);r.layers=this.layers,this.add(r);const o=new bn(Yr,jr,t,e);o.layers=this.layers,this.add(o);const l=new bn(Yr,jr,t,e);l.layers=this.layers,this.add(l);const c=new bn(Yr,jr,t,e);c.layers=this.layers,this.add(c);const u=new bn(Yr,jr,t,e);u.layers=this.layers,this.add(u);const f=new bn(Yr,jr,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,o,l,c,u]=e;for(const f of e)this.remove(f);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===ql)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,u,f,p]=this.children,d=t.getRenderTarget(),_=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,o),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,c),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(d,_,g),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class __ extends un{constructor(t=[],e=Tr,n,r,o,l,c,u,f,p){super(t,e,n,r,o,l,c,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class g_ extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new __(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),o=new Wi({name:"CubemapFromEquirect",uniforms:Ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:_s});o.uniforms.tEquirect.value=e;const l=new Vn(r,o),c=e.minFilter;return e.minFilter===ds&&(e.minFilter=en),new xx(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(o)}}class dr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,l=null;const c=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const S of t.hand.values()){const y=e.getJointPose(S,n),v=this._getHandJoint(f,S);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const p=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],_=p.position.distanceTo(d.position),g=.02,M=.005;f.inputState.pinching&&_>g+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=g-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mx extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cu,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new H;class lf{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),r=Pe(r,this.array),o=Pe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Yl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wd=new H,Xd=new Fe,Zd=new Fe,bx=new H,qd=new le,xl=new H,ah=new ji,Yd=new le,lh=new Na;class Tx extends Vn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yd,this.bindMatrix=new le,this.bindMatrixInverse=new le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xl),this.boundingBox.expandByPoint(xl)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ji),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,xl),this.boundingSphere.expandByPoint(xl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(r),t.ray.intersectsSphere(ah)!==!1&&(Yd.copy(r).invert(),lh.copy(t.ray).applyMatrix4(Yd),!(this.boundingBox!==null&&lh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,lh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Fe,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===S0?this.bindMatrixInverse.copy(this.bindMatrix).invert():zt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;Xd.fromBufferAttribute(r.attributes.skinIndex,t),Zd.fromBufferAttribute(r.attributes.skinWeight,t),Wd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const l=Zd.getComponent(o);if(l!==0){const c=Xd.getComponent(o);qd.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),e.addScaledVector(bx.copy(Wd).applyMatrix4(qd),l)}}return e.applyMatrix4(this.bindMatrixInverse)}}class v_ extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cf extends un{constructor(t=null,e=1,n=1,r,o,l,c,u,f=tn,p=tn,d,_){super(null,l,c,u,f,p,r,o,d,_),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new le,Ex=new le;class hf{constructor(t=[],e=[]){this.uuid=xi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){zt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new le;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,l=t.length;o<l;o++){const c=t[o]?t[o].matrixWorld:Ex;jd.multiplyMatrices(c,e[o]),jd.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new hf(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new cf(e,t,t,$n,Jn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const o=t.bones[n];let l=e[o];l===void 0&&(zt("Skeleton: No bone found with UUID:",o),l=new v_),this.bones.push(l),this.boneInverses.push(new le().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,o=e.length;r<o;r++){const l=e[r];t.bones.push(l.uuid);const c=n[r];t.boneInverses.push(c.toArray())}return t}}class Lu extends Tn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Kr=new le,Kd=new le,yl=[],Jd=new Yi,wx=new le,Jo=new Vn,$o=new ji;class Ax extends Vn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,wx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Kr),Jd.copy(t.boundingBox).applyMatrix4(Kr),this.boundingBox.union(Jd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Kr),$o.copy(t.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union($o)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,l=t*o+1;for(let c=0;c<n.length;c++)n[c]=r[l+c]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),t.ray.intersectsSphere($o)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Kr),Kd.multiplyMatrices(n,Kr),Jo.matrixWorld=Kd,Jo.raycast(t,yl);for(let l=0,c=yl.length;l<c;l++){const u=yl[l];u.instanceId=o,u.object=this,e.push(u)}yl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new cf(new Float32Array(r*this.count),r,this.count,Qu,Jn));const o=this.morphTexture.source.data.data;let l=0;for(let f=0;f<n.length;f++)l+=n[f];const c=this.geometry.morphTargetsRelative?1:1-l,u=r*t;o[u]=c,o.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ch=new H,Rx=new H,Px=new oe;class Us{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ch.subVectors(n,e).cross(Rx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ch),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Px.getNormalMatrix(t),r=this.coplanarPoint(ch).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new ji,Cx=new $t(.5,.5),Ml=new H;class uf{constructor(t=new Us,e=new Us,n=new Us,r=new Us,o=new Us,l=new Us){this.planes=[t,e,n,r,o,l]}set(t,e,n,r,o,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui,n=!1){const r=this.planes,o=t.elements,l=o[0],c=o[1],u=o[2],f=o[3],p=o[4],d=o[5],_=o[6],g=o[7],M=o[8],S=o[9],y=o[10],v=o[11],P=o[12],A=o[13],C=o[14],D=o[15];if(r[0].setComponents(f-l,g-p,v-M,D-P).normalize(),r[1].setComponents(f+l,g+p,v+M,D+P).normalize(),r[2].setComponents(f+c,g+d,v+S,D+A).normalize(),r[3].setComponents(f-c,g-d,v-S,D-A).normalize(),n)r[4].setComponents(u,_,y,C).normalize(),r[5].setComponents(f-u,g-_,v-y,D-C).normalize();else if(r[4].setComponents(f-u,g-_,v-y,D-C).normalize(),e===Ui)r[5].setComponents(f+u,g+_,v+y,D+C).normalize();else if(e===ql)r[5].setComponents(u,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){nr.center.set(0,0,0);const e=Cx.distanceTo(t.center);return nr.radius=.7071067811865476+e,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ml.x=r.normal.x>0?t.max.x:t.min.x,Ml.y=r.normal.y>0?t.max.y:t.min.y,Ml.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class x_ extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jl=new H,Kl=new H,$d=new le,Qo=new Na,Sl=new ji,hh=new H,Qd=new H;class ff extends Ve{constructor(t=new ni,e=new x_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)jl.fromBufferAttribute(e,r-1),Kl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=jl.distanceTo(Kl);t.setAttribute("lineDistance",new yi(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(r),Sl.radius+=o,t.ray.intersectsSphere(Sl)===!1)return;$d.copy(r).invert(),Qo.copy(t.ray).applyMatrix4($d);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){const g=Math.max(0,l.start),M=Math.min(p.count,l.start+l.count);for(let S=g,y=M-1;S<y;S+=f){const v=p.getX(S),P=p.getX(S+1),A=bl(this,t,Qo,u,v,P,S);A&&e.push(A)}if(this.isLineLoop){const S=p.getX(M-1),y=p.getX(g),v=bl(this,t,Qo,u,S,y,M-1);v&&e.push(v)}}else{const g=Math.max(0,l.start),M=Math.min(_.count,l.start+l.count);for(let S=g,y=M-1;S<y;S+=f){const v=bl(this,t,Qo,u,S,S+1,S);v&&e.push(v)}if(this.isLineLoop){const S=bl(this,t,Qo,u,M-1,g,M-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function bl(s,t,e,n,r,o,l){const c=s.geometry.attributes.position;if(jl.fromBufferAttribute(c,r),Kl.fromBufferAttribute(c,o),e.distanceSqToSegment(jl,Kl,hh,Qd)>n)return;hh.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(hh);if(!(f<t.near||f>t.far))return{distance:f,point:Qd.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const tp=new H,ep=new H;class Lx extends ff{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)tp.fromBufferAttribute(e,r),ep.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+tp.distanceTo(ep);t.setAttribute("lineDistance",new yi(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends ff{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class y_ extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const np=new le,Iu=new Na,Tl=new ji,El=new H;class Dx extends Ve{constructor(t=new ni,e=new y_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=o,t.ray.intersectsSphere(Tl)===!1)return;np.copy(r).invert(),Iu.copy(t.ray).applyMatrix4(np);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=n.index,d=n.attributes.position;if(f!==null){const _=Math.max(0,l.start),g=Math.min(f.count,l.start+l.count);for(let M=_,S=g;M<S;M++){const y=f.getX(M);El.fromBufferAttribute(d,y),ip(El,y,u,r,t,e,this)}}else{const _=Math.max(0,l.start),g=Math.min(d.count,l.start+l.count);for(let M=_,S=g;M<S;M++)El.fromBufferAttribute(d,M),ip(El,M,u,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function ip(s,t,e,n,r,o,l){const c=Iu.distanceSqToPoint(s);if(c<e){const u=new H;Iu.closestPointToPoint(s,u),u.applyMatrix4(n);const f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;o.push({distance:f,distanceToRay:Math.sqrt(c),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}class Ma extends un{constructor(t,e,n=Vi,r,o,l,c=tn,u=tn,f,p=Ss,d=1){if(p!==Ss&&p!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:d};super(_,r,o,l,c,u,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new af(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nx extends Ma{constructor(t,e=Vi,n=Tr,r,o,l=tn,c=tn,u,f=Ss){const p={width:t,height:t,depth:1},d=[p,p,p,p,p,p];super(t,t,e,n,r,o,l,c,u,f),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class M_ extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lc extends ni{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const o=t/2,l=e/2,c=Math.floor(n),u=Math.floor(r),f=c+1,p=u+1,d=t/c,_=e/u,g=[],M=[],S=[],y=[];for(let v=0;v<p;v++){const P=v*_-l;for(let A=0;A<f;A++){const C=A*d-o;M.push(C,-P,0),S.push(0,0,1),y.push(A/c),y.push(1-v/u)}}for(let v=0;v<u;v++)for(let P=0;P<c;P++){const A=P+f*v,C=P+f*(v+1),D=P+1+f*(v+1),N=P+1+f*v;g.push(A,C,N),g.push(C,D,N)}this.setIndex(g),this.setAttribute("position",new yi(M,3)),this.setAttribute("normal",new yi(S,3)),this.setAttribute("uv",new yi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ux extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cc extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o_,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ki extends cc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ox extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fx extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function wl(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Bx(s){function t(r,o){return s[r]-s[o]}const e=s.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function sp(s,t,e){const n=s.length,r=new s.constructor(n);for(let o=0,l=0;l!==n;++o){const c=e[o]*t;for(let u=0;u!==t;++u)r[l++]=s[c+u]}return r}function S_(s,t,e,n){let r=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[r++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(t.push(o.time),e.push(...l)),o=s[r++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(t.push(o.time),l.toArray(e,e.length)),o=s[r++];while(o!==void 0);else do l=o[n],l!==void 0&&(t.push(o.time),e.push(l)),o=s[r++];while(o!==void 0)}class Oa{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let l;e:{i:if(!(t<r)){for(let c=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=r,r=e[++n],t<r)break t}l=e.length;break e}if(!(t>=o)){const c=e[1];t<c&&(n=2,o=c);for(let u=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=o,o=e[--n-1],t>=o)break t}l=n,n=0;break e}break n}for(;n<l;){const c=n+l>>>1;t<e[c]?l=c:n=c+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=n[o+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kx extends Oa{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(t,e,n){const r=this.parameterPositions;let o=t-2,l=t+1,c=r[o],u=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Sd:o=t,c=2*e-n;break;case bd:o=r.length-2,c=e+r[o]-r[o+1];break;default:o=t,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Sd:l=t,u=2*n-e;break;case bd:l=1,u=n+r[1]-r[0];break;default:l=t-1,u=e}const f=(n-e)*.5,p=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(u-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,p=this._offsetPrev,d=this._offsetNext,_=this._weightPrev,g=this._weightNext,M=(n-e)/(r-e),S=M*M,y=S*M,v=-_*y+2*_*S-_*M,P=(1+_)*y+(-1.5-2*_)*S+(-.5+_)*M+1,A=(-1-g)*y+(1.5+g)*S+.5*M,C=g*y-g*S;for(let D=0;D!==c;++D)o[D]=v*l[p+D]+P*l[f+D]+A*l[u+D]+C*l[d+D];return o}}class zx extends Oa{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=t*c,f=u-c,p=(n-e)/(r-e),d=1-p;for(let _=0;_!==c;++_)o[_]=l[f+_]*d+l[u+_]*p;return o}}class Vx extends Oa{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Mi{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wl(e,this.TimeBufferType),this.values=wl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wl(t.times,Array),values:wl(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case kc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let o=0,l=r-1;for(;o!==r&&n[o]<t;)++o;for(;l!==-1&&n[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);const c=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,o=n.length;o===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==o;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){Yt("KeyframeTrack: Time is not a valid number.",this,c,u),t=!1;break}if(l!==null&&l>u){Yt("KeyframeTrack: Out of order keys.",this,c,u,l),t=!1;break}l=u}if(r!==void 0&&D0(r))for(let c=0,u=r.length;c!==u;++c){const f=r[c];if(isNaN(f)){Yt("KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===kc,o=t.length-1;let l=1;for(let c=1;c<o;++c){let u=!1;const f=t[c],p=t[c+1];if(f!==p&&(c!==1||f!==t[0]))if(r)u=!0;else{const d=c*n,_=d-n,g=d+n;for(let M=0;M!==n;++M){const S=e[d+M];if(S!==e[_+M]||S!==e[g+M]){u=!0;break}}}if(u){if(c!==l){t[l]=t[c];const d=c*n,_=l*n;for(let g=0;g!==n;++g)e[_+g]=e[d+g]}++l}}if(o>0){t[l]=t[o];for(let c=o*n,u=l*n,f=0;f!==n;++f)e[u+f]=e[c+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=va;class Do extends Mi{constructor(t,e,n){super(t,e,n)}}Do.prototype.ValueTypeName="bool";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=ga;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class b_ extends Mi{constructor(t,e,n,r){super(t,e,n,r)}}b_.prototype.ValueTypeName="color";class Ro extends Mi{constructor(t,e,n,r){super(t,e,n,r)}}Ro.prototype.ValueTypeName="number";class Hx extends Oa{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=(n-e)/(r-e);let f=t*c;for(let p=f+c;f!==p;f+=4)Hi.slerpFlat(o,0,l,f-c,l,f,u);return o}}class Po extends Mi{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Hx(this.times,this.values,this.getValueSize(),t)}}Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends Mi{constructor(t,e,n){super(t,e,n)}}No.prototype.ValueTypeName="string";No.prototype.ValueBufferType=Array;No.prototype.DefaultInterpolation=ga;No.prototype.InterpolantFactoryMethodLinear=void 0;No.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends Mi{constructor(t,e,n,r){super(t,e,n,r)}}Co.prototype.ValueTypeName="vector";class Gx{constructor(t="",e=-1,n=[],r=b0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let l=0,c=n.length;l!==c;++l)e.push(Xx(n[l]).scale(r));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o.userData=JSON.parse(t.userData||"{}"),o}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let o=0,l=n.length;o!==l;++o)e.push(Mi.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const o=e.length,l=[];for(let c=0;c<o;c++){let u=[],f=[];u.push((c+o-1)%o,c,(c+1)%o),f.push(0,1,0);const p=Bx(u);u=sp(u,1,p),f=sp(f,1,p),!r&&u[0]===0&&(u.push(o),f.push(f[0])),l.push(new Ro(".morphTargetInfluences["+e[c].name+"]",u,f).scale(1/n))}return new this(t,-1,l)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,u=t.length;c<u;c++){const f=t[c],p=f.name.match(o);if(p&&p.length>1){const d=p[1];let _=r[d];_||(r[d]=_=[]),_.push(f)}}const l=[];for(const c in r)l.push(this.CreateFromMorphTargetSequence(c,r[c],e,n));return l}static parseAnimation(t,e){if(zt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Yt("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,_,g,M,S){if(g.length!==0){const y=[],v=[];S_(g,y,v,M),y.length!==0&&S.push(new d(_,y,v))}},r=[],o=t.name||"default",l=t.fps||30,c=t.blendMode;let u=t.length||-1;const f=t.hierarchy||[];for(let d=0;d<f.length;d++){const _=f[d].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const g={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let S=0;S<_[M].morphTargets.length;S++)g[_[M].morphTargets[S]]=-1;for(const S in g){const y=[],v=[];for(let P=0;P!==_[M].morphTargets.length;++P){const A=_[M];y.push(A.time),v.push(A.morphTarget===S?1:0)}r.push(new Ro(".morphTargetInfluence["+S+"]",y,v))}u=g.length*l}else{const g=".bones["+e[d].name+"]";n(Co,g+".position",_,"pos",r),n(Po,g+".quaternion",_,"rot",r),n(Co,g+".scale",_,"scl",r)}}return r.length===0?null:new this(o,u,r,c)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Wx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ro;case"vector":case"vector2":case"vector3":case"vector4":return Co;case"color":return b_;case"quaternion":return Po;case"bool":case"boolean":return Do;case"string":return No}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Wx(s.type);if(s.times===void 0){const e=[],n=[];S_(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ps={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zx{constructor(t,e,n){const r=this;let o=!1,l=0,c=0,u;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,o===!1&&r.onStart!==void 0&&r.onStart(p,l,c),o=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,c),l===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,d){return f.push(p,d),this},this.removeHandler=function(p){const d=f.indexOf(p);return d!==-1&&f.splice(d,2),this},this.getHandler=function(p){for(let d=0,_=f.length;d<_;d+=2){const g=f[d],M=f[d+1];if(g.global&&(g.lastIndex=0),g.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qx=new Zx;class Uo{constructor(t){this.manager=t!==void 0?t:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const as={};class Yx extends Error{constructor(t,e){super(t),this.response=e}}class T_ extends Uo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=ps.get(`file:${t}`);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(as[t]!==void 0){as[t].push({onLoad:e,onProgress:n,onError:r});return}as[t]=[],as[t].push({onLoad:e,onProgress:n,onError:r});const l=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,u=this.responseType;fetch(l).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=as[t],d=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),g=_?parseInt(_):0,M=g!==0;let S=0;const y=new ReadableStream({start(v){P();function P(){d.read().then(({done:A,value:C})=>{if(A)v.close();else{S+=C.byteLength;const D=new ProgressEvent("progress",{lengthComputable:M,loaded:S,total:g});for(let N=0,U=p.length;N<U;N++){const X=p[N];X.onProgress&&X.onProgress(D)}v.enqueue(C),P()}},A=>{v.error(A)})}}});return new Response(y)}else throw new Yx(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return f.json();default:if(c==="")return f.text();{const d=/charset="?([^;"\s]*)"?/i.exec(c),_=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(_);return f.arrayBuffer().then(M=>g.decode(M))}}}).then(f=>{ps.add(`file:${t}`,f);const p=as[t];delete as[t];for(let d=0,_=p.length;d<_;d++){const g=p[d];g.onLoad&&g.onLoad(f)}}).catch(f=>{const p=as[t];if(p===void 0)throw this.manager.itemError(t),f;delete as[t];for(let d=0,_=p.length;d<_;d++){const g=p[d];g.onError&&g.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Jr=new WeakMap;class jx extends Uo{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=ps.get(`image:${t}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0);else{let d=Jr.get(l);d===void 0&&(d=[],Jr.set(l,d)),d.push({onLoad:e,onError:r})}return l}const c=xa("img");function u(){p(),e&&e(this);const d=Jr.get(this)||[];for(let _=0;_<d.length;_++){const g=d[_];g.onLoad&&g.onLoad(this)}Jr.delete(this),o.manager.itemEnd(t)}function f(d){p(),r&&r(d),ps.remove(`image:${t}`);const _=Jr.get(this)||[];for(let g=0;g<_.length;g++){const M=_[g];M.onError&&M.onError(d)}Jr.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){c.removeEventListener("load",u,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),ps.add(`image:${t}`,c),o.manager.itemStart(t),c.src=t,c}}class Kx extends Uo{constructor(t){super(t)}load(t,e,n,r){const o=new un,l=new jx(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(c){o.image=c,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}}class hc extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const uh=new le,rp=new H,op=new H;class df{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rp.setFromMatrixPosition(t.matrixWorld),e.position.copy(rp),op.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(op),e.updateMatrixWorld(),uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jx extends df{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=wo*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,o=t.distance||e.far;(n!==e.fov||r!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=r,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class $x extends hc{constructor(t,e,n=0,r=Math.PI/3,o=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new Jx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Qx extends df{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class ty extends hc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Qx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class uc extends m_{constructor(t=-1,e=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-t,l=n+t,c=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ey extends df{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E_ extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new ey}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class ny extends hc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class da{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const fh=new WeakMap;class iy extends Uo{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&zt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&zt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,l=ps.get(`image-bitmap:${t}`);if(l!==void 0){if(o.manager.itemStart(t),l.then){l.then(f=>{if(fh.has(l)===!0)r&&r(fh.get(l)),o.manager.itemError(t),o.manager.itemEnd(t);else return e&&e(f),o.manager.itemEnd(t),f});return}return setTimeout(function(){e&&e(l),o.manager.itemEnd(t)},0),l}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(t,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){return ps.add(`image-bitmap:${t}`,f),e&&e(f),o.manager.itemEnd(t),f}).catch(function(f){r&&r(f),fh.set(u,f),ps.remove(`image-bitmap:${t}`),o.manager.itemError(t),o.manager.itemEnd(t)});ps.add(`image-bitmap:${t}`,u),o.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class sy extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const pf="\\[\\]\\.:\\/",ry=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",oy="[^"+pf.replace("\\.","")+"]",ay=/((?:WC+[\/:])*)/.source.replace("WC",mf),ly=/(WCOD+)?/.source.replace("WCOD",oy),cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),uy=new RegExp("^"+ay+ly+cy+hy+"$"),fy=["material","materials","bones","map"];class dy{constructor(t,e,n){const r=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ce{constructor(t,e,n){this.path=e,this.parsedPath=n||Ce.parseTrackName(e),this.node=Ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ce.Composite(t,e,n):new Ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(t){const e=uy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);fy.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===e||c.uuid===e)return c;const u=n(c.children);if(u)return u}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let o=e.propertyIndex;if(t||(t=Ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}const l=t[r];if(l===void 0){const f=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ce.Composite=dy;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ap{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class py extends wr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function lp(s,t,e,n){const r=my(n);switch(e){case i_:return s*t;case Qu:return s*t/r.components*r.byteLength;case tf:return s*t/r.components*r.byteLength;case Eo:return s*t*2/r.components*r.byteLength;case ef:return s*t*2/r.components*r.byteLength;case s_:return s*t*3/r.components*r.byteLength;case $n:return s*t*4/r.components*r.byteLength;case nf:return s*t*4/r.components*r.byteLength;case Ul:case Ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fl:case Bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:case tu:return Math.max(s,16)*Math.max(t,8)/4;case Jh:case Qh:return Math.max(s,8)*Math.max(t,8)/2;case eu:case nu:case su:case ru:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case iu:case ou:case au:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case du:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _u:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Su:case bu:case Tu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Eu:case wu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Au:case Ru:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function my(s){switch(s){case kn:case Qm:return{byteLength:1,components:1};case ma:case t_:case Ms:return{byteLength:2,components:1};case Ju:case $u:return{byteLength:2,components:4};case Vi:case Ku:case Jn:return{byteLength:4,components:1};case e_:case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function w_(){let s=null,t=!1,e=null,n=null;function r(o,l){e(o,l),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function _y(s){const t=new WeakMap;function e(c,u){const f=c.array,p=c.usage,d=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,p),c.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)g=s.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function n(c,u,f){const p=u.array,d=u.updateRanges;if(s.bindBuffer(f,c),d.length===0)s.bufferSubData(f,0,p);else{d.sort((g,M)=>g.start-M.start);let _=0;for(let g=1;g<d.length;g++){const M=d[_],S=d[g];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++_,d[_]=S)}d.length=_+1;for(let g=0,M=d.length;g<M;g++){const S=d[g];s.bufferSubData(f,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=t.get(c);u&&(s.deleteBuffer(u.buffer),t.delete(c))}function l(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=t.get(c);(!p||p.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,u),f.version=c.version}}return{get:r,remove:o,update:l}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
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
#endif`,xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,by=`#ifdef USE_AOMAP
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
#endif`,Ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ly=`#ifdef USE_BUMPMAP
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zy=`#define PI 3.141592653589793
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
} // validated`,Vy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hy=`vec3 transformedNormal = objectNormal;
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
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
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
}`,rM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
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
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
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
#endif`,mM=`uniform sampler2D dfgLUT;
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
}`,_M=`
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
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
#endif`,vM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wM=`#if defined( USE_POINTS_UV )
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
#endif`,AM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,DM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kM=`#ifdef USE_NORMALMAP
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
#endif`,zM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eS=`float getShadowMask() {
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
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`#include <common>
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
}`,bS=`#if DEPTH_PACKING == 3200
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
}`,TS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
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
}`,PS=`uniform vec3 diffuse;
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
}`,CS=`#include <common>
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
}`,LS=`uniform vec3 diffuse;
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
}`,IS=`#define LAMBERT
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
}`,DS=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,US=`#define MATCAP
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
}`,OS=`#define NORMAL
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
}`,FS=`#define NORMAL
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
}`,BS=`#define PHONG
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
}`,kS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
}`,HS=`#define TOON
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
}`,GS=`#define TOON
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
}`,WS=`uniform float size;
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
}`,XS=`uniform vec3 diffuse;
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
}`,ZS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,YS=`uniform float rotation;
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
}`,jS=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:gy,alphahash_pars_fragment:vy,alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:My,alphatest_pars_fragment:Sy,aomap_fragment:by,aomap_pars_fragment:Ty,batching_pars_vertex:Ey,batching_vertex:wy,begin_vertex:Ay,beginnormal_vertex:Ry,bsdfs:Py,iridescence_fragment:Cy,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Iy,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Ny,clipping_planes_vertex:Uy,color_fragment:Oy,color_pars_fragment:Fy,color_pars_vertex:By,color_vertex:ky,common:zy,cube_uv_reflection_fragment:Vy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Wy,emissivemap_fragment:Xy,emissivemap_pars_fragment:Zy,colorspace_fragment:qy,colorspace_pars_fragment:Yy,envmap_fragment:jy,envmap_common_pars_fragment:Ky,envmap_pars_fragment:Jy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:cM,envmap_vertex:Qy,fog_vertex:tM,fog_pars_vertex:eM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:sM,lightmap_pars_fragment:rM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:hM,lights_toon_pars_fragment:uM,lights_phong_fragment:fM,lights_phong_pars_fragment:dM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:_M,lights_fragment_maps:gM,lights_fragment_end:vM,logdepthbuf_fragment:xM,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:SM,map_fragment:bM,map_pars_fragment:TM,map_particle_fragment:EM,map_particle_pars_fragment:wM,metalnessmap_fragment:AM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:CM,morphnormal_vertex:LM,morphtarget_pars_vertex:IM,morphtarget_vertex:DM,normal_fragment_begin:NM,normal_fragment_maps:UM,normal_pars_fragment:OM,normal_pars_vertex:FM,normal_vertex:BM,normalmap_pars_fragment:kM,clearcoat_normal_fragment_begin:zM,clearcoat_normal_fragment_maps:VM,clearcoat_pars_fragment:HM,iridescence_pars_fragment:GM,opaque_fragment:WM,packing:XM,premultiplied_alpha_fragment:ZM,project_vertex:qM,dithering_fragment:YM,dithering_pars_fragment:jM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:JM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:QM,shadowmap_vertex:tS,shadowmask_pars_fragment:eS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:sS,skinnormal_vertex:rS,specularmap_fragment:oS,specularmap_pars_fragment:aS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:hS,transmission_pars_fragment:uS,uv_pars_fragment:fS,uv_pars_vertex:dS,uv_vertex:pS,worldpos_vertex:mS,background_vert:_S,background_frag:gS,backgroundCube_vert:vS,backgroundCube_frag:xS,cube_vert:yS,cube_frag:MS,depth_vert:SS,depth_frag:bS,distance_vert:TS,distance_frag:ES,equirect_vert:wS,equirect_frag:AS,linedashed_vert:RS,linedashed_frag:PS,meshbasic_vert:CS,meshbasic_frag:LS,meshlambert_vert:IS,meshlambert_frag:DS,meshmatcap_vert:NS,meshmatcap_frag:US,meshnormal_vert:OS,meshnormal_frag:FS,meshphong_vert:BS,meshphong_frag:kS,meshphysical_vert:zS,meshphysical_frag:VS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:WS,points_frag:XS,shadow_vert:ZS,shadow_frag:qS,sprite_vert:YS,sprite_frag:jS},bt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ii={basic:{uniforms:Sn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Sn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Sn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Sn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Sn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Sn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Sn([bt.points,bt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Sn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Sn([bt.common,bt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Sn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Sn([bt.sprite,bt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Sn([bt.common,bt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Sn([bt.lights,bt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Ii.physical={uniforms:Sn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Al={r:0,b:0,g:0},ir=new Gi,KS=new le;function JS(s,t,e,n,r,o,l){const c=new ee(0);let u=o===!0?0:1,f,p,d=null,_=0,g=null;function M(A){let C=A.isScene===!0?A.background:null;return C&&C.isTexture&&(C=(A.backgroundBlurriness>0?e:t).get(C)),C}function S(A){let C=!1;const D=M(A);D===null?v(c,u):D&&D.isColor&&(v(D,1),C=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(A,C){const D=M(C);D&&(D.isCubeTexture||D.mapping===ac)?(p===void 0&&(p=new Vn(new Ua(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ao(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),ir.copy(C.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(ir)),p.material.toneMapped=ge.getTransfer(D.colorSpace)!==Re,(d!==D||_!==D.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,d=D,_=D.version,g=s.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(f===void 0&&(f=new Vn(new lc(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ao(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=D,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.toneMapped=ge.getTransfer(D.colorSpace)!==Re,D.matrixAutoUpdate===!0&&D.updateMatrix(),f.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||_!==D.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,d=D,_=D.version,g=s.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function v(A,C){A.getRGB(Al,p_(s)),n.buffers.color.setClear(Al.r,Al.g,Al.b,C,l)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,C=1){c.set(A),u=C,v(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(A){u=A,v(c,u)},render:S,addToRenderList:y,dispose:P}}function $S(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,l=!1;function c(R,F,q,Q,rt){let ot=!1;const et=d(Q,q,F);o!==et&&(o=et,f(o.object)),ot=g(R,Q,q,rt),ot&&M(R,Q,q,rt),rt!==null&&t.update(rt,s.ELEMENT_ARRAY_BUFFER),(ot||l)&&(l=!1,C(R,F,q,Q),rt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function u(){return s.createVertexArray()}function f(R){return s.bindVertexArray(R)}function p(R){return s.deleteVertexArray(R)}function d(R,F,q){const Q=q.wireframe===!0;let rt=n[R.id];rt===void 0&&(rt={},n[R.id]=rt);let ot=rt[F.id];ot===void 0&&(ot={},rt[F.id]=ot);let et=ot[Q];return et===void 0&&(et=_(u()),ot[Q]=et),et}function _(R){const F=[],q=[],Q=[];for(let rt=0;rt<e;rt++)F[rt]=0,q[rt]=0,Q[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:Q,object:R,attributes:{},index:null}}function g(R,F,q,Q){const rt=o.attributes,ot=F.attributes;let et=0;const j=q.getAttributes();for(const K in j)if(j[K].location>=0){const st=rt[K];let dt=ot[K];if(dt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),st===void 0||st.attribute!==dt||dt&&st.data!==dt.data)return!0;et++}return o.attributesNum!==et||o.index!==Q}function M(R,F,q,Q){const rt={},ot=F.attributes;let et=0;const j=q.getAttributes();for(const K in j)if(j[K].location>=0){let st=ot[K];st===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(st=R.instanceColor));const dt={};dt.attribute=st,st&&st.data&&(dt.data=st.data),rt[K]=dt,et++}o.attributes=rt,o.attributesNum=et,o.index=Q}function S(){const R=o.newAttributes;for(let F=0,q=R.length;F<q;F++)R[F]=0}function y(R){v(R,0)}function v(R,F){const q=o.newAttributes,Q=o.enabledAttributes,rt=o.attributeDivisors;q[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),rt[R]!==F&&(s.vertexAttribDivisor(R,F),rt[R]=F)}function P(){const R=o.newAttributes,F=o.enabledAttributes;for(let q=0,Q=F.length;q<Q;q++)F[q]!==R[q]&&(s.disableVertexAttribArray(q),F[q]=0)}function A(R,F,q,Q,rt,ot,et){et===!0?s.vertexAttribIPointer(R,F,q,rt,ot):s.vertexAttribPointer(R,F,q,Q,rt,ot)}function C(R,F,q,Q){S();const rt=Q.attributes,ot=q.getAttributes(),et=F.defaultAttributeValues;for(const j in ot){const K=ot[j];if(K.location>=0){let Tt=rt[j];if(Tt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor)),Tt!==void 0){const st=Tt.normalized,dt=Tt.itemSize,Wt=t.get(Tt);if(Wt===void 0)continue;const Ht=Wt.buffer,Qt=Wt.type,Gt=Wt.bytesPerElement,Z=Qt===s.INT||Qt===s.UNSIGNED_INT||Tt.gpuType===Ku;if(Tt.isInterleavedBufferAttribute){const lt=Tt.data,Et=lt.stride,te=Tt.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<K.locationSize;It++)v(K.location+It,lt.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let It=0;It<K.locationSize;It++)y(K.location+It);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let It=0;It<K.locationSize;It++)A(K.location+It,dt/K.locationSize,Qt,st,Et*Gt,(te+dt/K.locationSize*It)*Gt,Z)}else{if(Tt.isInstancedBufferAttribute){for(let lt=0;lt<K.locationSize;lt++)v(K.location+lt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let lt=0;lt<K.locationSize;lt++)y(K.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let lt=0;lt<K.locationSize;lt++)A(K.location+lt,dt/K.locationSize,Qt,st,dt*Gt,dt/K.locationSize*lt*Gt,Z)}}else if(et!==void 0){const st=et[j];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(K.location,st);break;case 3:s.vertexAttrib3fv(K.location,st);break;case 4:s.vertexAttrib4fv(K.location,st);break;default:s.vertexAttrib1fv(K.location,st)}}}}P()}function D(){X();for(const R in n){const F=n[R];for(const q in F){const Q=F[q];for(const rt in Q)p(Q[rt].object),delete Q[rt];delete F[q]}delete n[R]}}function N(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const q in F){const Q=F[q];for(const rt in Q)p(Q[rt].object),delete Q[rt];delete F[q]}delete n[R.id]}function U(R){for(const F in n){const q=n[F];if(q[R.id]===void 0)continue;const Q=q[R.id];for(const rt in Q)p(Q[rt].object),delete Q[rt];delete q[R.id]}}function X(){w(),l=!0,o!==r&&(o=r,f(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:X,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:y,disableUnusedAttributes:P}}function QS(s,t,e){let n;function r(f){n=f}function o(f,p){s.drawArrays(n,f,p),e.update(p,n,1)}function l(f,p,d){d!==0&&(s.drawArraysInstanced(n,f,p,d),e.update(p,n,d))}function c(f,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,d);let g=0;for(let M=0;M<d;M++)g+=p[M];e.update(g,n,1)}function u(f,p,d,_){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<f.length;M++)l(f[M],p[M],_[M]);else{g.multiDrawArraysInstancedWEBGL(n,f,0,p,0,_,0,d);let M=0;for(let S=0;S<d;S++)M+=p[S]*_[S];e.update(M,n,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function tb(s,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(U){return!(U!==$n&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const X=U===Ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==kn&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Jn&&!X)}function u(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=u(f);p!==f&&(zt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const d=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:d,reversedDepthBuffer:_,maxTextures:g,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:A,maxFragmentUniforms:C,maxSamples:D,samples:N}}function eb(s){const t=this;let e=null,n=0,r=!1,o=!1;const l=new Us,c=new oe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,_){const g=d.length!==0||_||n!==0||r;return r=_,n=d.length,g},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,_){e=p(d,_,0)},this.setState=function(d,_,g){const M=d.clippingPlanes,S=d.clipIntersection,y=d.clipShadows,v=s.get(d);if(!r||M===null||M.length===0||o&&!y)o?p(null):f();else{const P=o?0:n,A=P*4;let C=v.clippingState||null;u.value=C,C=p(M,_,A,g);for(let D=0;D!==A;++D)C[D]=e[D];v.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(d,_,g,M){const S=d!==null?d.length:0;let y=null;if(S!==0){if(y=u.value,M!==!0||y===null){const v=g+S*4,P=_.matrixWorldInverse;c.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let A=0,C=g;A!==S;++A,C+=4)l.copy(d[A]).applyMatrix4(P,c),l.normal.toArray(y,C),y[C+3]=l.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,y}}function nb(s){let t=new WeakMap;function e(l,c){return c===jh?l.mapping=Tr:c===Kh&&(l.mapping=bo),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===jh||c===Kh)if(t.has(l)){const u=t.get(l).texture;return e(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const f=new g_(u.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Bs=4,cp=[.125,.215,.35,.446,.526,.582],ar=20,ib=256,ta=new uc,hp=new ee;let dh=null,ph=0,mh=0,_h=!1;const sb=new H;class up{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){const{size:l=256,position:c=sb}=o;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,r,u,c),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Tr||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ms,format:$n,colorSpace:wn,depthBuffer:!1},r=fp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rb(o)),this._blurMaterial=ab(o,t,e),this._ggxMaterial=ob(o,t,e)}return r}_compileMaterial(t){const e=new Vn(new ni,t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,r,o){const u=new bn(90,1,e,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,_=d.autoClear,g=d.toneMapping;d.getClearColor(hp),d.toneMapping=Fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new Ua,new fr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,y=S.material;let v=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,v=!0):(y.color.copy(hp),v=!0);for(let A=0;A<6;A++){const C=A%3;C===0?(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+p[A],o.y,o.z)):C===1?(u.up.set(0,0,f[A]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+p[A],o.z)):(u.up.set(0,f[A],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+p[A]));const D=this._cubeSize;$r(r,C*D,A>2?D:0,D,D),d.setRenderTarget(r),v&&d.render(S,u),d.render(t,u)}d.toneMapping=g,d.autoClear=_,t.background=P}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Tr||t.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const c=o.uniforms;c.envMap.value=t;const u=this._cubeSize;$r(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const u=l.uniforms,f=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),d=Math.sqrt(f*f-p*p),_=0+f*1.25,g=d*_,{_lodMax:M}=this,S=this._sizeLods[n],y=3*S*(n>M-Bs?n-M+Bs:0),v=4*(this._cubeSize-S);u.envMap.value=t.texture,u.roughness.value=g,u.mipInt.value=M-e,$r(o,y,v,3*S,2*S),r.setRenderTarget(o),r.render(c,ta),u.envMap.value=o.texture,u.roughness.value=0,u.mipInt.value=M-n,$r(t,y,v,3*S,2*S),r.setRenderTarget(t),r.render(c,ta)}_blur(t,e,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",o),this._halfBlur(l,t,n,n,r,"longitudinal",o)}_halfBlur(t,e,n,r,o,l,c){const u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const p=3,d=this._lodMeshes[r];d.material=f;const _=f.uniforms,g=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*ar-1),S=o/M,y=isFinite(o)?1+Math.floor(p*S):ar;y>ar&&zt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ar}`);const v=[];let P=0;for(let U=0;U<ar;++U){const X=U/S,w=Math.exp(-X*X/2);v.push(w),U===0?P+=w:U<y&&(P+=2*w)}for(let U=0;U<v.length;U++)v[U]=v[U]/P;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:A}=this;_.dTheta.value=M,_.mipInt.value=A-n;const C=this._sizeLods[r],D=3*C*(r>A-Bs?r-A+Bs:0),N=4*(this._cubeSize-C);$r(e,D,N,3*C,2*C),u.setRenderTarget(e),u.render(d,ta)}}function rb(s){const t=[],e=[],n=[];let r=s;const o=s-Bs+1+cp.length;for(let l=0;l<o;l++){const c=Math.pow(2,r);t.push(c);let u=1/c;l>s-Bs?u=cp[l-s+Bs-1]:l===0&&(u=0),e.push(u);const f=1/(c-2),p=-f,d=1+f,_=[p,p,d,p,d,d,p,p,d,d,p,d],g=6,M=6,S=3,y=2,v=1,P=new Float32Array(S*M*g),A=new Float32Array(y*M*g),C=new Float32Array(v*M*g);for(let N=0;N<g;N++){const U=N%3*2/3-1,X=N>2?0:-1,w=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];P.set(w,S*M*N),A.set(_,y*M*N);const R=[N,N,N,N,N,N];C.set(R,v*M*N)}const D=new ni;D.setAttribute("position",new Tn(P,S)),D.setAttribute("uv",new Tn(A,y)),D.setAttribute("faceIndex",new Tn(C,v)),n.push(new Vn(D,null)),r>Bs&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function fp(s,t,e){const n=new Bi(s,t,e);return n.texture.mapping=ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function ob(s,t,e){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function ab(s,t,e){const n=new Float32Array(ar),r=new H(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function dp(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function pp(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function lb(s){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const u=c.mapping,f=u===jh||u===Kh,p=u===Tr||u===bo;if(f||p){let d=t.get(c);const _=d!==void 0?d.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return e===null&&(e=new up(s)),d=f?e.fromEquirectangular(c,d):e.fromCubemap(c,d),d.texture.pmremVersion=c.pmremVersion,t.set(c,d),d.texture;if(d!==void 0)return d.texture;{const g=c.image;return f&&g&&g.height>0||p&&g&&r(g)?(e===null&&(e=new up(s)),d=f?e.fromEquirectangular(c):e.fromCubemap(c),d.texture.pmremVersion=c.pmremVersion,t.set(c,d),c.addEventListener("dispose",o),d.texture):null}}}return c}function r(c){let u=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&u++;return u===f}function o(c){const u=c.target;u.removeEventListener("dispose",o);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function cb(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=s.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ya("WebGLRenderer: "+n+" extension not supported."),r}}}function hb(s,t,e,n){const r={},o=new WeakMap;function l(d){const _=d.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete r[_.id];const g=o.get(_);g&&(t.remove(g),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(d,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(d){const _=d.attributes;for(const g in _)t.update(_[g],s.ARRAY_BUFFER)}function f(d){const _=[],g=d.index,M=d.attributes.position;let S=0;if(g!==null){const P=g.array;S=g.version;for(let A=0,C=P.length;A<C;A+=3){const D=P[A+0],N=P[A+1],U=P[A+2];_.push(D,N,N,U,U,D)}}else if(M!==void 0){const P=M.array;S=M.version;for(let A=0,C=P.length/3-1;A<C;A+=3){const D=A+0,N=A+1,U=A+2;_.push(D,N,N,U,U,D)}}else return;const y=new(a_(_)?d_:f_)(_,1);y.version=S;const v=o.get(d);v&&t.remove(v),o.set(d,y)}function p(d){const _=o.get(d);if(_){const g=d.index;g!==null&&_.version<g.version&&f(d)}else f(d);return o.get(d)}return{get:c,update:u,getWireframeAttribute:p}}function ub(s,t,e){let n;function r(_){n=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function u(_,g){s.drawElements(n,g,o,_*l),e.update(g,n,1)}function f(_,g,M){M!==0&&(s.drawElementsInstanced(n,g,o,_*l,M),e.update(g,n,M))}function p(_,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,o,_,0,M);let y=0;for(let v=0;v<M;v++)y+=g[v];e.update(y,n,1)}function d(_,g,M,S){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)f(_[v]/l,g[v],S[v]);else{y.multiDrawElementsInstancedWEBGL(n,g,0,o,_,0,S,0,M);let v=0;for(let P=0;P<M;P++)v+=g[P]*S[P];e.update(v,n,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function fb(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=c*(o/3);break;case s.LINES:e.lines+=c*(o/2);break;case s.LINE_STRIP:e.lines+=c*(o-1);break;case s.LINE_LOOP:e.lines+=c*o;break;case s.POINTS:e.points+=c*o;break;default:Yt("WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function db(s,t,e){const n=new WeakMap,r=new Fe;function o(l,c,u){const f=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=p!==void 0?p.length:0;let _=n.get(c);if(_===void 0||_.count!==d){let R=function(){X.dispose(),n.delete(c),c.removeEventListener("dispose",R)};var g=R;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let C=0;M===!0&&(C=1),S===!0&&(C=2),y===!0&&(C=3);let D=c.attributes.position.count*C,N=1;D>t.maxTextureSize&&(N=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const U=new Float32Array(D*N*4*d),X=new c_(U,D,N,d);X.type=Jn,X.needsUpdate=!0;const w=C*4;for(let F=0;F<d;F++){const q=v[F],Q=P[F],rt=A[F],ot=D*N*4*F;for(let et=0;et<q.count;et++){const j=et*w;M===!0&&(r.fromBufferAttribute(q,et),U[ot+j+0]=r.x,U[ot+j+1]=r.y,U[ot+j+2]=r.z,U[ot+j+3]=0),S===!0&&(r.fromBufferAttribute(Q,et),U[ot+j+4]=r.x,U[ot+j+5]=r.y,U[ot+j+6]=r.z,U[ot+j+7]=0),y===!0&&(r.fromBufferAttribute(rt,et),U[ot+j+8]=r.x,U[ot+j+9]=r.y,U[ot+j+10]=r.z,U[ot+j+11]=rt.itemSize===4?r.w:1)}}_={count:d,texture:X,size:new $t(D,N)},n.set(c,_),c.addEventListener("dispose",R)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const S=c.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:o}}function pb(s,t,e,n){let r=new WeakMap;function o(u){const f=n.render.frame,p=u.geometry,d=t.get(u,p);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return d}function l(){r=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:l}}const mb={[Wm]:"LINEAR_TONE_MAPPING",[Xm]:"REINHARD_TONE_MAPPING",[Zm]:"CINEON_TONE_MAPPING",[qm]:"ACES_FILMIC_TONE_MAPPING",[jm]:"AGX_TONE_MAPPING",[Km]:"NEUTRAL_TONE_MAPPING",[Ym]:"CUSTOM_TONE_MAPPING"};function _b(s,t,e,n,r){const o=new Bi(t,e,{type:s,depthBuffer:n,stencilBuffer:r}),l=new Bi(t,e,{type:Ms,depthBuffer:!1,stencilBuffer:!1}),c=new ni;c.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yi([0,2,0,0,2,0],2));const u=new Ux({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Vn(c,u),p=new uc(-1,1,1,-1,0,1);let d=null,_=null,g=!1,M,S=null,y=[],v=!1;this.setSize=function(P,A){o.setSize(P,A),l.setSize(P,A);for(let C=0;C<y.length;C++){const D=y[C];D.setSize&&D.setSize(P,A)}},this.setEffects=function(P){y=P,v=y.length>0&&y[0].isRenderPass===!0;const A=o.width,C=o.height;for(let D=0;D<y.length;D++){const N=y[D];N.setSize&&N.setSize(A,C)}},this.begin=function(P,A){if(g||P.toneMapping===Fi&&y.length===0)return!1;if(S=A,A!==null){const C=A.width,D=A.height;(o.width!==C||o.height!==D)&&this.setSize(C,D)}return v===!1&&P.setRenderTarget(o),M=P.toneMapping,P.toneMapping=Fi,!0},this.hasRenderPass=function(){return v},this.end=function(P,A){P.toneMapping=M,g=!0;let C=o,D=l;for(let N=0;N<y.length;N++){const U=y[N];if(U.enabled!==!1&&(U.render(P,D,C,A),U.needsSwap!==!1)){const X=C;C=D,D=X}}if(d!==P.outputColorSpace||_!==P.toneMapping){d=P.outputColorSpace,_=P.toneMapping,u.defines={},ge.getTransfer(d)===Re&&(u.defines.SRGB_TRANSFER="");const N=mb[_];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,P.setRenderTarget(S),P.render(f,p),S=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),l.dispose(),c.dispose(),u.dispose()}}const A_=new un,Du=new Ma(1,1),R_=new c_,P_=new ix,C_=new __,mp=[],_p=[],gp=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function Oo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let o=mp[r];if(o===void 0&&(o=new Float32Array(r),mp[r]=o),t!==0){n.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=e,s[l].toArray(o,c)}return o}function sn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function rn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function dc(s,t){let e=_p[t];e===void 0&&(e=new Int32Array(t),_p[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2fv(this.addr,t),rn(e,t)}}function xb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;s.uniform3fv(this.addr,t),rn(e,t)}}function yb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4fv(this.addr,t),rn(e,t)}}function Mb(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;xp.set(n),s.uniformMatrix2fv(this.addr,!1,xp),rn(e,n)}}function Sb(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;vp.set(n),s.uniformMatrix3fv(this.addr,!1,vp),rn(e,n)}}function bb(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;gp.set(n),s.uniformMatrix4fv(this.addr,!1,gp),rn(e,n)}}function Tb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Eb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2iv(this.addr,t),rn(e,t)}}function wb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3iv(this.addr,t),rn(e,t)}}function Ab(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4iv(this.addr,t),rn(e,t)}}function Rb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;s.uniform2uiv(this.addr,t),rn(e,t)}}function Cb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;s.uniform3uiv(this.addr,t),rn(e,t)}}function Lb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;s.uniform4uiv(this.addr,t),rn(e,t)}}function Ib(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let o;this.type===s.SAMPLER_2D_SHADOW?(Du.compareFunction=e.isReversedDepthBuffer()?rf:sf,o=Du):o=A_,e.setTexture2D(t||o,r)}function Db(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||P_,r)}function Nb(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||C_,r)}function Ub(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||R_,r)}function Ob(s){switch(s){case 5126:return gb;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return Mb;case 35675:return Sb;case 35676:return bb;case 5124:case 35670:return Tb;case 35667:case 35671:return Eb;case 35668:case 35672:return wb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Pb;case 36295:return Cb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ub}}function Fb(s,t){s.uniform1fv(this.addr,t)}function Bb(s,t){const e=Oo(t,this.size,2);s.uniform2fv(this.addr,e)}function kb(s,t){const e=Oo(t,this.size,3);s.uniform3fv(this.addr,e)}function zb(s,t){const e=Oo(t,this.size,4);s.uniform4fv(this.addr,e)}function Vb(s,t){const e=Oo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hb(s,t){const e=Oo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gb(s,t){const e=Oo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Wb(s,t){s.uniform1iv(this.addr,t)}function Xb(s,t){s.uniform2iv(this.addr,t)}function Zb(s,t){s.uniform3iv(this.addr,t)}function qb(s,t){s.uniform4iv(this.addr,t)}function Yb(s,t){s.uniform1uiv(this.addr,t)}function jb(s,t){s.uniform2uiv(this.addr,t)}function Kb(s,t){s.uniform3uiv(this.addr,t)}function Jb(s,t){s.uniform4uiv(this.addr,t)}function $b(s,t,e){const n=this.cache,r=t.length,o=dc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));let l;this.type===s.SAMPLER_2D_SHADOW?l=Du:l=A_;for(let c=0;c!==r;++c)e.setTexture2D(t[c]||l,o[c])}function Qb(s,t,e){const n=this.cache,r=t.length,o=dc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||P_,o[l])}function tT(s,t,e){const n=this.cache,r=t.length,o=dc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||C_,o[l])}function eT(s,t,e){const n=this.cache,r=t.length,o=dc(e,r);sn(n,o)||(s.uniform1iv(this.addr,o),rn(n,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||R_,o[l])}function nT(s){switch(s){case 5126:return Fb;case 35664:return Bb;case 35665:return kb;case 35666:return zb;case 35674:return Vb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return Zb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return jb;case 36295:return Kb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}class iT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ob(e.type)}}class sT{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nT(e.type)}}class rT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const c=r[o];c.setValue(t,e[c.id],n)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function yp(s,t){s.seq.push(t),s.map[t.id]=t}function oT(s,t,e){const n=s.name,r=n.length;for(gh.lastIndex=0;;){const o=gh.exec(n),l=gh.lastIndex;let c=o[1];const u=o[2]==="]",f=o[3];if(u&&(c=c|0),f===void 0||f==="["&&l+2===r){yp(e,f===void 0?new iT(c,s,t):new sT(c,s,t));break}else{let d=e.map[c];d===void 0&&(d=new rT(c),yp(e,d)),e=d}}}class kl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=t.getActiveUniform(e,l),u=t.getUniformLocation(e,c.name);oT(c,u,this)}const r=[],o=[];for(const l of this.seq)l.type===t.SAMPLER_2D_SHADOW||l.type===t.SAMPLER_CUBE_SHADOW||l.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){const o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,l=e.length;o!==l;++o){const c=e[o],u=n[c.id];u.needsUpdate!==!1&&c.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,o=t.length;r!==o;++r){const l=t[r];l.id in e&&n.push(l)}return n}}function Mp(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const aT=37297;let lT=0;function cT(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){const c=l+1;n.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return n.join(`
`)}const Sp=new oe;function hT(s){ge._getMatrix(Sp,ge.workingColorSpace,s);const t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Zl:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bp(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+cT(s.getShaderSource(t),c)}else return o}function uT(s,t){const e=hT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const fT={[Wm]:"Linear",[Xm]:"Reinhard",[Zm]:"Cineon",[qm]:"ACESFilmic",[jm]:"AgX",[Km]:"Neutral",[Ym]:"Custom"};function dT(s,t){const e=fT[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rl=new H;function pT(){ge.getLuminanceCoefficients(Rl);const s=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function _T(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gT(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=s.getActiveAttrib(t,r),l=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),e[l]={type:o.type,location:s.getAttribLocation(t,l),locationSize:c}}return e}function oa(s){return s!==""}function Tp(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ep(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(s){return s.replace(vT,yT)}const xT=new Map;function yT(s,t){let e=ae[t];if(e===void 0){const n=xT.get(t);if(n!==void 0)e=ae[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nu(e)}const MT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(s){return s.replace(MT,ST)}function ST(s,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ap(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const bT={[Dl]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function TT(s){return bT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ET={[Tr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function wT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ET[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const AT={[bo]:"ENVMAP_MODE_REFRACTION"};function RT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":AT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PT={[Gm]:"ENVMAP_BLENDING_MULTIPLY",[y0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function CT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":PT[s.combine]||"ENVMAP_BLENDING_NONE"}function LT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function IT(s,t,e,n){const r=s.getContext(),o=e.defines;let l=e.vertexShader,c=e.fragmentShader;const u=TT(e),f=wT(e),p=RT(e),d=CT(e),_=LT(e),g=mT(e),M=_T(o),S=r.createProgram();let y,v,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(oa).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(oa).join(`
`),v.length>0&&(v+=`
`)):(y=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),v=[Ap(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?ae.tonemapping_pars_fragment:"",e.toneMapping!==Fi?dT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,uT("linearToOutputTexel",e.outputColorSpace),pT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),l=Nu(l),l=Tp(l,e),l=Ep(l,e),c=Nu(c),c=Tp(c,e),c=Ep(c,e),l=wp(l),c=wp(c),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",e.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=P+y+l,C=P+v+c,D=Mp(r,r.VERTEX_SHADER,A),N=Mp(r,r.FRAGMENT_SHADER,C);r.attachShader(S,D),r.attachShader(S,N),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function U(F){if(s.debug.checkShaderErrors){const q=r.getProgramInfoLog(S)||"",Q=r.getShaderInfoLog(D)||"",rt=r.getShaderInfoLog(N)||"",ot=q.trim(),et=Q.trim(),j=rt.trim();let K=!0,Tt=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,S,D,N);else{const st=bp(r,D,"vertex"),dt=bp(r,N,"fragment");Yt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+st+`
`+dt)}else ot!==""?zt("WebGLProgram: Program Info Log:",ot):(et===""||j==="")&&(Tt=!1);Tt&&(F.diagnostics={runnable:K,programLog:ot,vertexShader:{log:et,prefix:y},fragmentShader:{log:j,prefix:v}})}r.deleteShader(D),r.deleteShader(N),X=new kl(r,S),w=gT(r,S)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,aT)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lT++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=N,this}let DT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new UT(t),e.set(t,n)),n}}class UT{constructor(t){this.id=DT++,this.code=t,this.usedTimes=0}}function OT(s,t,e,n,r,o,l){const c=new h_,u=new NT,f=new Set,p=[],d=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(w){return f.add(w),w===0?"uv":`uv${w}`}function y(w,R,F,q,Q){const rt=q.fog,ot=Q.geometry,et=w.isMeshStandardMaterial?q.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||et),K=j&&j.mapping===ac?j.image.height:null,Tt=M[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&zt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const st=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,dt=st!==void 0?st.length:0;let Wt=0;ot.morphAttributes.position!==void 0&&(Wt=1),ot.morphAttributes.normal!==void 0&&(Wt=2),ot.morphAttributes.color!==void 0&&(Wt=3);let Ht,Qt,Gt,Z;if(Tt){const Te=Ii[Tt];Ht=Te.vertexShader,Qt=Te.fragmentShader}else Ht=w.vertexShader,Qt=w.fragmentShader,u.update(w),Gt=u.getVertexShaderID(w),Z=u.getFragmentShaderID(w);const lt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),te=Q.isInstancedMesh===!0,It=Q.isBatchedMesh===!0,pe=!!w.map,ke=!!w.matcap,fe=!!j,be=!!w.aoMap,we=!!w.lightMap,ne=!!w.bumpMap,ze=!!w.normalMap,B=!!w.displacementMap,He=!!w.emissiveMap,Me=!!w.metalnessMap,Ae=!!w.roughnessMap,Ut=w.anisotropy>0,I=w.clearcoat>0,b=w.dispersion>0,z=w.iridescence>0,it=w.sheen>0,ct=w.transmission>0,nt=Ut&&!!w.anisotropyMap,Ft=I&&!!w.clearcoatMap,vt=I&&!!w.clearcoatNormalMap,Dt=I&&!!w.clearcoatRoughnessMap,Xt=z&&!!w.iridescenceMap,ut=z&&!!w.iridescenceThicknessMap,xt=it&&!!w.sheenColorMap,Lt=it&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,_t=!!w.specularColorMap,re=!!w.specularIntensityMap,k=ct&&!!w.transmissionMap,St=ct&&!!w.thicknessMap,mt=!!w.gradientMap,At=!!w.alphaMap,ft=w.alphaTest>0,at=!!w.alphaHash,yt=!!w.extensions;let jt=Fi;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(jt=s.toneMapping);const Le={shaderID:Tt,shaderType:w.type,shaderName:w.name,vertexShader:Ht,fragmentShader:Qt,defines:w.defines,customVertexShaderID:Gt,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:It,batchingColor:It&&Q._colorsTexture!==null,instancing:te,instancingColor:te&&Q.instanceColor!==null,instancingMorph:te&&Q.morphTexture!==null,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:wn,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:ke,envMap:fe,envMapMode:fe&&j.mapping,envMapCubeUVHeight:K,aoMap:be,lightMap:we,bumpMap:ne,normalMap:ze,displacementMap:B,emissiveMap:He,normalMapObjectSpace:ze&&w.normalMapType===w0,normalMapTangentSpace:ze&&w.normalMapType===o_,metalnessMap:Me,roughnessMap:Ae,anisotropy:Ut,anisotropyMap:nt,clearcoat:I,clearcoatMap:Ft,clearcoatNormalMap:vt,clearcoatRoughnessMap:Dt,dispersion:b,iridescence:z,iridescenceMap:Xt,iridescenceThicknessMap:ut,sheen:it,sheenColorMap:xt,sheenRoughnessMap:Lt,specularMap:Ot,specularColorMap:_t,specularIntensityMap:re,transmission:ct,transmissionMap:k,thicknessMap:St,gradientMap:mt,opaque:w.transparent===!1&&w.blending===ro&&w.alphaToCoverage===!1,alphaMap:At,alphaTest:ft,alphaHash:at,combine:w.combine,mapUv:pe&&S(w.map.channel),aoMapUv:be&&S(w.aoMap.channel),lightMapUv:we&&S(w.lightMap.channel),bumpMapUv:ne&&S(w.bumpMap.channel),normalMapUv:ze&&S(w.normalMap.channel),displacementMapUv:B&&S(w.displacementMap.channel),emissiveMapUv:He&&S(w.emissiveMap.channel),metalnessMapUv:Me&&S(w.metalnessMap.channel),roughnessMapUv:Ae&&S(w.roughnessMap.channel),anisotropyMapUv:nt&&S(w.anisotropyMap.channel),clearcoatMapUv:Ft&&S(w.clearcoatMap.channel),clearcoatNormalMapUv:vt&&S(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&S(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&S(w.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&S(w.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&S(w.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&S(w.sheenRoughnessMap.channel),specularMapUv:Ot&&S(w.specularMap.channel),specularColorMapUv:_t&&S(w.specularColorMap.channel),specularIntensityMapUv:re&&S(w.specularIntensityMap.channel),transmissionMapUv:k&&S(w.transmissionMap.channel),thicknessMapUv:St&&S(w.thicknessMap.channel),alphaMapUv:At&&S(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ze||Ut),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(pe||At),fog:!!rt,useFog:w.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Wt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&ge.getTransfer(w.map.colorSpace)===Re,decodeVideoTextureEmissive:He&&w.emissiveMap.isVideoTexture===!0&&ge.getTransfer(w.emissiveMap.colorSpace)===Re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Di,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:yt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&w.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=f.has(1),Le.vertexUv2s=f.has(2),Le.vertexUv3s=f.has(3),f.clear(),Le}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(P(R,w),A(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function P(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function A(w,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),w.push(c.mask)}function C(w){const R=M[w.type];let F;if(R){const q=Ii[R];F=_x.clone(q.uniforms)}else F=w.uniforms;return F}function D(w,R){let F=d.get(R);return F!==void 0?++F.usedTimes:(F=new IT(s,R,w,o),p.push(F),d.set(R,F)),F}function N(w){if(--w.usedTimes===0){const R=p.indexOf(w);p[R]=p[p.length-1],p.pop(),d.delete(w.cacheKey),w.destroy()}}function U(w){u.remove(w)}function X(){u.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:D,releaseProgram:N,releaseShaderCache:U,programs:p,dispose:X}}function FT(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function r(l,c,u){s.get(l)[c]=u}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function BT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pp(){const s=[];let t=0;const e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function l(d,_,g,M,S,y){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:_,material:g,groupOrder:M,renderOrder:d.renderOrder,z:S,group:y},s[t]=v):(v.id=d.id,v.object=d,v.geometry=_,v.material=g,v.groupOrder=M,v.renderOrder=d.renderOrder,v.z=S,v.group=y),t++,v}function c(d,_,g,M,S,y){const v=l(d,_,g,M,S,y);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):e.push(v)}function u(d,_,g,M,S,y){const v=l(d,_,g,M,S,y);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function f(d,_){e.length>1&&e.sort(d||BT),n.length>1&&n.sort(_||Rp),r.length>1&&r.sort(_||Rp)}function p(){for(let d=t,_=s.length;d<_;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:c,unshift:u,finish:p,sort:f}}function kT(){let s=new WeakMap;function t(n,r){const o=s.get(n);let l;return o===void 0?(l=new Pp,s.set(n,[l])):r>=o.length?(l=new Pp,o.push(l)):l=o[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function zT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new ee};break;case"SpotLight":e={position:new H,direction:new H,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function VT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let HT=0;function GT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function WT(s){const t=new zT,e=VT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);const r=new H,o=new le,l=new le;function c(f){let p=0,d=0,_=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,M=0,S=0,y=0,v=0,P=0,A=0,C=0,D=0,N=0,U=0;f.sort(GT);for(let w=0,R=f.length;w<R;w++){const F=f[w],q=F.color,Q=F.intensity,rt=F.distance;let ot=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Eo?ot=F.shadow.map.texture:ot=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)p+=q.r*Q,d+=q.g*Q,_+=q.b*Q;else if(F.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(F.sh.coefficients[et],Q);U++}else if(F.isDirectionalLight){const et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,K=e.get(F);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=ot,n.directionalShadowMatrix[g]=F.shadow.matrix,P++}n.directional[g]=et,g++}else if(F.isSpotLight){const et=t.get(F);et.position.setFromMatrixPosition(F.matrixWorld),et.color.copy(q).multiplyScalar(Q),et.distance=rt,et.coneCos=Math.cos(F.angle),et.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),et.decay=F.decay,n.spot[S]=et;const j=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,j.updateMatrices(F),F.castShadow&&N++),n.spotLightMatrix[S]=j.matrix,F.castShadow){const K=e.get(F);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.spotShadow[S]=K,n.spotShadowMap[S]=ot,C++}S++}else if(F.isRectAreaLight){const et=t.get(F);et.color.copy(q).multiplyScalar(Q),et.halfWidth.set(F.width*.5,0,0),et.halfHeight.set(0,F.height*.5,0),n.rectArea[y]=et,y++}else if(F.isPointLight){const et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),et.distance=F.distance,et.decay=F.decay,F.castShadow){const j=F.shadow,K=e.get(F);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,n.pointShadow[M]=K,n.pointShadowMap[M]=ot,n.pointShadowMatrix[M]=F.shadow.matrix,A++}n.point[M]=et,M++}else if(F.isHemisphereLight){const et=t.get(F);et.skyColor.copy(F.color).multiplyScalar(Q),et.groundColor.copy(F.groundColor).multiplyScalar(Q),n.hemi[v]=et,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=_;const X=n.hash;(X.directionalLength!==g||X.pointLength!==M||X.spotLength!==S||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==P||X.numPointShadows!==A||X.numSpotShadows!==C||X.numSpotMaps!==D||X.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=y,n.point.length=M,n.hemi.length=v,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=C+D-N,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,X.directionalLength=g,X.pointLength=M,X.spotLength=S,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=P,X.numPointShadows=A,X.numSpotShadows=C,X.numSpotMaps=D,X.numLightProbes=U,n.version=HT++)}function u(f,p){let d=0,_=0,g=0,M=0,S=0;const y=p.matrixWorldInverse;for(let v=0,P=f.length;v<P;v++){const A=f[v];if(A.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(y),d++}else if(A.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(y),g++}else if(A.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(y),l.identity(),o.copy(A.matrixWorld),o.premultiply(y),l.extractRotation(o),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),M++}else if(A.isPointLight){const C=n.point[_];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(y),_++}else if(A.isHemisphereLight){const C=n.hemi[S];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(y),S++}}}return{setup:c,setupView:u,state:n}}function Cp(s){const t=new WT(s),e=[],n=[];function r(p){f.camera=p,e.length=0,n.length=0}function o(p){e.push(p)}function l(p){n.push(p)}function c(){t.setup(e)}function u(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function XT(s){let t=new WeakMap;function e(r,o=0){const l=t.get(r);let c;return l===void 0?(c=new Cp(s),t.set(r,[c])):o>=l.length?(c=new Cp(s),l.push(c)):c=l[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}const ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
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
}`,YT=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],jT=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Lp=new le,ea=new H,vh=new H;function KT(s,t,e){let n=new uf;const r=new $t,o=new $t,l=new Fe,c=new Ox,u=new Fx,f={},p=e.maxTextureSize,d={[ys]:In,[In]:ys,[Di]:Di},_=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:ZT,fragmentShader:qT}),g=_.clone();g.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Vn(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let v=this.type;this.render=function(N,U,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;N.type===e0&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=Dl);const w=s.getRenderTarget(),R=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),q=s.state;q.setBlending(_s),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=v!==this.type;Q&&U.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(ot=>ot.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,ot=N.length;rt<ot;rt++){const et=N[rt],j=et.shadow;if(j===void 0){zt("WebGLShadowMap:",et,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const K=j.getFrameExtents();if(r.multiply(K),o.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/K.x),r.x=o.x*K.x,j.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/K.y),r.y=o.y*K.y,j.mapSize.y=o.y)),j.map===null||Q===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===sa){if(et.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Bi(r.x,r.y,{format:Eo,type:Ms,minFilter:en,magFilter:en,generateMipmaps:!1}),j.map.texture.name=et.name+".shadowMap",j.map.depthTexture=new Ma(r.x,r.y,Jn),j.map.depthTexture.name=et.name+".shadowMapDepth",j.map.depthTexture.format=Ss,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=tn,j.map.depthTexture.magFilter=tn}else{et.isPointLight?(j.map=new g_(r.x),j.map.depthTexture=new Nx(r.x,Vi)):(j.map=new Bi(r.x,r.y),j.map.depthTexture=new Ma(r.x,r.y,Vi)),j.map.depthTexture.name=et.name+".shadowMap",j.map.depthTexture.format=Ss;const st=s.state.buffers.depth.getReversed();this.type===Dl?(j.map.depthTexture.compareFunction=st?rf:sf,j.map.depthTexture.minFilter=en,j.map.depthTexture.magFilter=en):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=tn,j.map.depthTexture.magFilter=tn)}j.camera.updateProjectionMatrix()}const Tt=j.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<Tt;st++){if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,st),s.clear();else{st===0&&(s.setRenderTarget(j.map),s.clear());const dt=j.getViewport(st);l.set(o.x*dt.x,o.y*dt.y,o.x*dt.z,o.y*dt.w),q.viewport(l)}if(et.isPointLight){const dt=j.camera,Wt=j.matrix,Ht=et.distance||dt.far;Ht!==dt.far&&(dt.far=Ht,dt.updateProjectionMatrix()),ea.setFromMatrixPosition(et.matrixWorld),dt.position.copy(ea),vh.copy(dt.position),vh.add(YT[st]),dt.up.copy(jT[st]),dt.lookAt(vh),dt.updateMatrixWorld(),Wt.makeTranslation(-ea.x,-ea.y,-ea.z),Lp.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Lp,dt.coordinateSystem,dt.reversedDepth)}else j.updateMatrices(et);n=j.getFrustum(),C(U,X,j.camera,et,this.type)}j.isPointLightShadow!==!0&&this.type===sa&&P(j,X),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(w,R,F)};function P(N,U){const X=t.update(S);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,g.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Bi(r.x,r.y,{format:Eo,type:Ms})),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(U,null,X,_,S,null),g.uniforms.shadow_pass.value=N.mapPass.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(U,null,X,g,S,null)}function A(N,U,X,w){let R=null;const F=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)R=F;else if(R=X.isPointLight===!0?u:c,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const q=R.uuid,Q=U.uuid;let rt=f[q];rt===void 0&&(rt={},f[q]=rt);let ot=rt[Q];ot===void 0&&(ot=R.clone(),rt[Q]=ot,U.addEventListener("dispose",D)),R=ot}if(R.visible=U.visible,R.wireframe=U.wireframe,w===sa?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:d[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=s.properties.get(R);q.light=X}return R}function C(N,U,X,w,R){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===sa)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const Q=t.update(N),rt=N.material;if(Array.isArray(rt)){const ot=Q.groups;for(let et=0,j=ot.length;et<j;et++){const K=ot[et],Tt=rt[K.materialIndex];if(Tt&&Tt.visible){const st=A(N,Tt,w,R);N.onBeforeShadow(s,N,U,X,Q,st,K),s.renderBufferDirect(X,null,Q,st,N,K),N.onAfterShadow(s,N,U,X,Q,st,K)}}}else if(rt.visible){const ot=A(N,rt,w,R);N.onBeforeShadow(s,N,U,X,Q,ot,null),s.renderBufferDirect(X,null,Q,ot,N,null),N.onAfterShadow(s,N,U,X,Q,ot,null)}}const q=N.children;for(let Q=0,rt=q.length;Q<rt;Q++)C(q[Q],U,X,w,R)}function D(N){N.target.removeEventListener("dispose",D);for(const X in f){const w=f[X],R=N.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const JT={[Hh]:Gh,[Wh]:qh,[Xh]:Yh,[So]:Zh,[Gh]:Hh,[qh]:Wh,[Yh]:Xh,[Zh]:So};function $T(s,t){function e(){let k=!1;const St=new Fe;let mt=null;const At=new Fe(0,0,0,0);return{setMask:function(ft){mt!==ft&&!k&&(s.colorMask(ft,ft,ft,ft),mt=ft)},setLocked:function(ft){k=ft},setClear:function(ft,at,yt,jt,Le){Le===!0&&(ft*=jt,at*=jt,yt*=jt),St.set(ft,at,yt,jt),At.equals(St)===!1&&(s.clearColor(ft,at,yt,jt),At.copy(St))},reset:function(){k=!1,mt=null,At.set(-1,0,0,0)}}}function n(){let k=!1,St=!1,mt=null,At=null,ft=null;return{setReversed:function(at){if(St!==at){const yt=t.get("EXT_clip_control");at?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),St=at;const jt=ft;ft=null,this.setClear(jt)}},getReversed:function(){return St},setTest:function(at){at?lt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(at){mt!==at&&!k&&(s.depthMask(at),mt=at)},setFunc:function(at){if(St&&(at=JT[at]),At!==at){switch(at){case Hh:s.depthFunc(s.NEVER);break;case Gh:s.depthFunc(s.ALWAYS);break;case Wh:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Xh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case qh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=at}},setLocked:function(at){k=at},setClear:function(at){ft!==at&&(St&&(at=1-at),s.clearDepth(at),ft=at)},reset:function(){k=!1,mt=null,At=null,ft=null,St=!1}}}function r(){let k=!1,St=null,mt=null,At=null,ft=null,at=null,yt=null,jt=null,Le=null;return{setTest:function(Te){k||(Te?lt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Te){St!==Te&&!k&&(s.stencilMask(Te),St=Te)},setFunc:function(Te,An,ii){(mt!==Te||At!==An||ft!==ii)&&(s.stencilFunc(Te,An,ii),mt=Te,At=An,ft=ii)},setOp:function(Te,An,ii){(at!==Te||yt!==An||jt!==ii)&&(s.stencilOp(Te,An,ii),at=Te,yt=An,jt=ii)},setLocked:function(Te){k=Te},setClear:function(Te){Le!==Te&&(s.clearStencil(Te),Le=Te)},reset:function(){k=!1,St=null,mt=null,At=null,ft=null,at=null,yt=null,jt=null,Le=null}}}const o=new e,l=new n,c=new r,u=new WeakMap,f=new WeakMap;let p={},d={},_=new WeakMap,g=[],M=null,S=!1,y=null,v=null,P=null,A=null,C=null,D=null,N=null,U=new ee(0,0,0),X=0,w=!1,R=null,F=null,q=null,Q=null,rt=null;const ot=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,j=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),et=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),et=j>=2);let Tt=null,st={};const dt=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),Ht=new Fe().fromArray(dt),Qt=new Fe().fromArray(Wt);function Gt(k,St,mt,At){const ft=new Uint8Array(4),at=s.createTexture();s.bindTexture(k,at),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let yt=0;yt<mt;yt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(St,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(St+yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return at}const Z={};Z[s.TEXTURE_2D]=Gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),lt(s.DEPTH_TEST),l.setFunc(So),ne(!1),ze(_d),lt(s.CULL_FACE),be(_s);function lt(k){p[k]!==!0&&(s.enable(k),p[k]=!0)}function Et(k){p[k]!==!1&&(s.disable(k),p[k]=!1)}function te(k,St){return d[k]!==St?(s.bindFramebuffer(k,St),d[k]=St,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=St),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=St),!0):!1}function It(k,St){let mt=g,At=!1;if(k){mt=_.get(St),mt===void 0&&(mt=[],_.set(St,mt));const ft=k.textures;if(mt.length!==ft.length||mt[0]!==s.COLOR_ATTACHMENT0){for(let at=0,yt=ft.length;at<yt;at++)mt[at]=s.COLOR_ATTACHMENT0+at;mt.length=ft.length,At=!0}}else mt[0]!==s.BACK&&(mt[0]=s.BACK,At=!0);At&&s.drawBuffers(mt)}function pe(k){return M!==k?(s.useProgram(k),M=k,!0):!1}const ke={[or]:s.FUNC_ADD,[i0]:s.FUNC_SUBTRACT,[s0]:s.FUNC_REVERSE_SUBTRACT};ke[r0]=s.MIN,ke[o0]=s.MAX;const fe={[a0]:s.ZERO,[l0]:s.ONE,[c0]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[m0]:s.SRC_ALPHA_SATURATE,[d0]:s.DST_COLOR,[u0]:s.DST_ALPHA,[h0]:s.ONE_MINUS_SRC_COLOR,[Vh]:s.ONE_MINUS_SRC_ALPHA,[p0]:s.ONE_MINUS_DST_COLOR,[f0]:s.ONE_MINUS_DST_ALPHA,[_0]:s.CONSTANT_COLOR,[g0]:s.ONE_MINUS_CONSTANT_COLOR,[v0]:s.CONSTANT_ALPHA,[x0]:s.ONE_MINUS_CONSTANT_ALPHA};function be(k,St,mt,At,ft,at,yt,jt,Le,Te){if(k===_s){S===!0&&(Et(s.BLEND),S=!1);return}if(S===!1&&(lt(s.BLEND),S=!0),k!==n0){if(k!==y||Te!==w){if((v!==or||C!==or)&&(s.blendEquation(s.FUNC_ADD),v=or,C=or),Te)switch(k){case ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gd:s.blendFunc(s.ONE,s.ONE);break;case vd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",k);break}else switch(k){case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vd:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xd:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",k);break}P=null,A=null,D=null,N=null,U.set(0,0,0),X=0,y=k,w=Te}return}ft=ft||St,at=at||mt,yt=yt||At,(St!==v||ft!==C)&&(s.blendEquationSeparate(ke[St],ke[ft]),v=St,C=ft),(mt!==P||At!==A||at!==D||yt!==N)&&(s.blendFuncSeparate(fe[mt],fe[At],fe[at],fe[yt]),P=mt,A=At,D=at,N=yt),(jt.equals(U)===!1||Le!==X)&&(s.blendColor(jt.r,jt.g,jt.b,Le),U.copy(jt),X=Le),y=k,w=!1}function we(k,St){k.side===Di?Et(s.CULL_FACE):lt(s.CULL_FACE);let mt=k.side===In;St&&(mt=!mt),ne(mt),k.blending===ro&&k.transparent===!1?be(_s):be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);const At=k.stencilWrite;c.setTest(At),At&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),He(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function ze(k){k!==Qv?(lt(s.CULL_FACE),k!==F&&(k===_d?s.cullFace(s.BACK):k===t0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),F=k}function B(k){k!==q&&(et&&s.lineWidth(k),q=k)}function He(k,St,mt){k?(lt(s.POLYGON_OFFSET_FILL),(Q!==St||rt!==mt)&&(s.polygonOffset(St,mt),Q=St,rt=mt)):Et(s.POLYGON_OFFSET_FILL)}function Me(k){k?lt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Ae(k){k===void 0&&(k=s.TEXTURE0+ot-1),Tt!==k&&(s.activeTexture(k),Tt=k)}function Ut(k,St,mt){mt===void 0&&(Tt===null?mt=s.TEXTURE0+ot-1:mt=Tt);let At=st[mt];At===void 0&&(At={type:void 0,texture:void 0},st[mt]=At),(At.type!==k||At.texture!==St)&&(Tt!==mt&&(s.activeTexture(mt),Tt=mt),s.bindTexture(k,St||Z[k]),At.type=k,At.texture=St)}function I(){const k=st[Tt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function it(){try{s.texSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function ct(){try{s.texSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function vt(){try{s.texStorage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Dt(){try{s.texStorage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Xt(){try{s.texImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function ut(){try{s.texImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function xt(k){Ht.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function Lt(k){Qt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Qt.copy(k))}function Ot(k,St){let mt=f.get(St);mt===void 0&&(mt=new WeakMap,f.set(St,mt));let At=mt.get(k);At===void 0&&(At=s.getUniformBlockIndex(St,k.name),mt.set(k,At))}function _t(k,St){const At=f.get(St).get(k);u.get(St)!==At&&(s.uniformBlockBinding(St,At,k.__bindingPointIndex),u.set(St,At))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Tt=null,st={},d={},_=new WeakMap,g=[],M=null,S=!1,y=null,v=null,P=null,A=null,C=null,D=null,N=null,U=new ee(0,0,0),X=0,w=!1,R=null,F=null,q=null,Q=null,rt=null,Ht.set(0,0,s.canvas.width,s.canvas.height),Qt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:lt,disable:Et,bindFramebuffer:te,drawBuffers:It,useProgram:pe,setBlending:be,setMaterial:we,setFlipSided:ne,setCullFace:ze,setLineWidth:B,setPolygonOffset:He,setScissorTest:Me,activeTexture:Ae,bindTexture:Ut,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:Xt,texImage3D:ut,updateUBOMapping:Ot,uniformBlockBinding:_t,texStorage2D:vt,texStorage3D:Dt,texSubImage2D:it,texSubImage3D:ct,compressedTexSubImage2D:nt,compressedTexSubImage3D:Ft,scissor:xt,viewport:Lt,reset:re}}function QT(s,t,e,n,r,o,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new $t,p=new WeakMap;let d;const _=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,b){return g?new OffscreenCanvas(I,b):xa("canvas")}function S(I,b,z){let it=1;const ct=Ut(I);if((ct.width>z||ct.height>z)&&(it=z/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const nt=Math.floor(it*ct.width),Ft=Math.floor(it*ct.height);d===void 0&&(d=M(nt,Ft));const vt=b?M(nt,Ft):d;return vt.width=nt,vt.height=Ft,vt.getContext("2d").drawImage(I,0,0,nt,Ft),zt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Ft+")."),vt}else return"data"in I&&zt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function y(I){return I.generateMipmaps}function v(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(I,b,z,it,ct=!1){if(I!==null){if(s[I]!==void 0)return s[I];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=b;if(b===s.RED&&(z===s.FLOAT&&(nt=s.R32F),z===s.HALF_FLOAT&&(nt=s.R16F),z===s.UNSIGNED_BYTE&&(nt=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.R8UI),z===s.UNSIGNED_SHORT&&(nt=s.R16UI),z===s.UNSIGNED_INT&&(nt=s.R32UI),z===s.BYTE&&(nt=s.R8I),z===s.SHORT&&(nt=s.R16I),z===s.INT&&(nt=s.R32I)),b===s.RG&&(z===s.FLOAT&&(nt=s.RG32F),z===s.HALF_FLOAT&&(nt=s.RG16F),z===s.UNSIGNED_BYTE&&(nt=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RG8UI),z===s.UNSIGNED_SHORT&&(nt=s.RG16UI),z===s.UNSIGNED_INT&&(nt=s.RG32UI),z===s.BYTE&&(nt=s.RG8I),z===s.SHORT&&(nt=s.RG16I),z===s.INT&&(nt=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),z===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),z===s.UNSIGNED_INT&&(nt=s.RGB32UI),z===s.BYTE&&(nt=s.RGB8I),z===s.SHORT&&(nt=s.RGB16I),z===s.INT&&(nt=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),z===s.UNSIGNED_INT&&(nt=s.RGBA32UI),z===s.BYTE&&(nt=s.RGBA8I),z===s.SHORT&&(nt=s.RGBA16I),z===s.INT&&(nt=s.RGBA32I)),b===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(nt=s.R11F_G11F_B10F)),b===s.RGBA){const Ft=ct?Zl:ge.getTransfer(it);z===s.FLOAT&&(nt=s.RGBA32F),z===s.HALF_FLOAT&&(nt=s.RGBA16F),z===s.UNSIGNED_BYTE&&(nt=Ft===Re?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function C(I,b){let z;return I?b===null||b===Vi||b===_a?z=s.DEPTH24_STENCIL8:b===Jn?z=s.DEPTH32F_STENCIL8:b===ma&&(z=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vi||b===_a?z=s.DEPTH_COMPONENT24:b===Jn?z=s.DEPTH_COMPONENT32F:b===ma&&(z=s.DEPTH_COMPONENT16),z}function D(I,b){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function N(I){const b=I.target;b.removeEventListener("dispose",N),X(b),b.isVideoTexture&&p.delete(b)}function U(I){const b=I.target;b.removeEventListener("dispose",U),R(b)}function X(I){const b=n.get(I);if(b.__webglInit===void 0)return;const z=I.source,it=_.get(z);if(it){const ct=it[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&w(I),Object.keys(it).length===0&&_.delete(z)}n.remove(I)}function w(I){const b=n.get(I);s.deleteTexture(b.__webglTexture);const z=I.source,it=_.get(z);delete it[b.__cacheKey],l.memory.textures--}function R(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ct=0;ct<b.__webglFramebuffer[it].length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[it][ct]);else s.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)s.deleteFramebuffer(b.__webglFramebuffer[it]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=I.textures;for(let it=0,ct=z.length;it<ct;it++){const nt=n.get(z[it]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),l.memory.textures--),n.remove(z[it])}n.remove(I)}let F=0;function q(){F=0}function Q(){const I=F;return I>=r.maxTextures&&zt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),F+=1,I}function rt(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ot(I,b){const z=n.get(I);if(I.isVideoTexture&&Me(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const it=I.image;if(it===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,I,b);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function et(I,b){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Z(z,I,b);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function j(I,b){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Z(z,I,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function K(I,b){const z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){lt(z,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const Tt={[To]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[Xl]:s.MIRRORED_REPEAT},st={[tn]:s.NEAREST,[$m]:s.NEAREST_MIPMAP_NEAREST,[ra]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Nl]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},dt={[A0]:s.NEVER,[I0]:s.ALWAYS,[R0]:s.LESS,[sf]:s.LEQUAL,[P0]:s.EQUAL,[rf]:s.GEQUAL,[C0]:s.GREATER,[L0]:s.NOTEQUAL};function Wt(I,b){if(b.type===Jn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Nl||b.magFilter===ra||b.magFilter===ds||b.minFilter===en||b.minFilter===Nl||b.minFilter===ra||b.minFilter===ds)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Tt[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Tt[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Tt[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,st[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==ra&&b.minFilter!==ds||b.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ht(I,b){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",N));const it=b.source;let ct=_.get(it);ct===void 0&&(ct={},_.set(it,ct));const nt=rt(b);if(nt!==I.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,z=!0),ct[nt].usedTimes++;const Ft=ct[I.__cacheKey];Ft!==void 0&&(ct[I.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(b)),I.__cacheKey=nt,I.__webglTexture=ct[nt].texture}return z}function Qt(I,b,z){return Math.floor(Math.floor(I/z)/b)}function Gt(I,b,z,it){const nt=I.updateRanges;if(nt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,z,it,b.data);else{nt.sort((ut,xt)=>ut.start-xt.start);let Ft=0;for(let ut=1;ut<nt.length;ut++){const xt=nt[Ft],Lt=nt[ut],Ot=xt.start+xt.count,_t=Qt(Lt.start,b.width,4),re=Qt(xt.start,b.width,4);Lt.start<=Ot+1&&_t===re&&Qt(Lt.start+Lt.count-1,b.width,4)===_t?xt.count=Math.max(xt.count,Lt.start+Lt.count-xt.start):(++Ft,nt[Ft]=Lt)}nt.length=Ft+1;const vt=s.getParameter(s.UNPACK_ROW_LENGTH),Dt=s.getParameter(s.UNPACK_SKIP_PIXELS),Xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ut=0,xt=nt.length;ut<xt;ut++){const Lt=nt[ut],Ot=Math.floor(Lt.start/4),_t=Math.ceil(Lt.count/4),re=Ot%b.width,k=Math.floor(Ot/b.width),St=_t,mt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,re,k,St,mt,z,it,b.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,vt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xt)}}function Z(I,b,z){let it=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=s.TEXTURE_3D);const ct=Ht(I,b),nt=b.source;e.bindTexture(it,I.__webglTexture,s.TEXTURE0+z);const Ft=n.get(nt);if(nt.version!==Ft.__version||ct===!0){e.activeTexture(s.TEXTURE0+z);const vt=ge.getPrimaries(ge.workingColorSpace),Dt=b.colorSpace===Os?null:ge.getPrimaries(b.colorSpace),Xt=b.colorSpace===Os||vt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ut=S(b.image,!1,r.maxTextureSize);ut=Ae(b,ut);const xt=o.convert(b.format,b.colorSpace),Lt=o.convert(b.type);let Ot=A(b.internalFormat,xt,Lt,b.colorSpace,b.isVideoTexture);Wt(it,b);let _t;const re=b.mipmaps,k=b.isVideoTexture!==!0,St=Ft.__version===void 0||ct===!0,mt=nt.dataReady,At=D(b,ut);if(b.isDepthTexture)Ot=C(b.format===ur,b.type),St&&(k?e.texStorage2D(s.TEXTURE_2D,1,Ot,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ut.width,ut.height,0,xt,Lt,null));else if(b.isDataTexture)if(re.length>0){k&&St&&e.texStorage2D(s.TEXTURE_2D,At,Ot,re[0].width,re[0].height);for(let ft=0,at=re.length;ft<at;ft++)_t=re[ft],k?mt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,_t.width,_t.height,xt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,ft,Ot,_t.width,_t.height,0,xt,Lt,_t.data);b.generateMipmaps=!1}else k?(St&&e.texStorage2D(s.TEXTURE_2D,At,Ot,ut.width,ut.height),mt&&Gt(b,ut,xt,Lt)):e.texImage2D(s.TEXTURE_2D,0,Ot,ut.width,ut.height,0,xt,Lt,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ot,re[0].width,re[0].height,ut.depth);for(let ft=0,at=re.length;ft<at;ft++)if(_t=re[ft],b.format!==$n)if(xt!==null)if(k){if(mt)if(b.layerUpdates.size>0){const yt=lp(_t.width,_t.height,b.format,b.type);for(const jt of b.layerUpdates){const Le=_t.data.subarray(jt*yt/_t.data.BYTES_PER_ELEMENT,(jt+1)*yt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,jt,_t.width,_t.height,1,xt,Le)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,ut.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,Ot,_t.width,_t.height,ut.depth,0,_t.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?mt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,ut.depth,xt,Lt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,Ot,_t.width,_t.height,ut.depth,0,xt,Lt,_t.data)}else{k&&St&&e.texStorage2D(s.TEXTURE_2D,At,Ot,re[0].width,re[0].height);for(let ft=0,at=re.length;ft<at;ft++)_t=re[ft],b.format!==$n?xt!==null?k?mt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,Ot,_t.width,_t.height,0,_t.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?mt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,_t.width,_t.height,xt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,ft,Ot,_t.width,_t.height,0,xt,Lt,_t.data)}else if(b.isDataArrayTexture)if(k){if(St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ot,ut.width,ut.height,ut.depth),mt)if(b.layerUpdates.size>0){const ft=lp(ut.width,ut.height,b.format,b.type);for(const at of b.layerUpdates){const yt=ut.data.subarray(at*ft/ut.data.BYTES_PER_ELEMENT,(at+1)*ft/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,ut.width,ut.height,1,xt,Lt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,xt,Lt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ut.width,ut.height,ut.depth,0,xt,Lt,ut.data);else if(b.isData3DTexture)k?(St&&e.texStorage3D(s.TEXTURE_3D,At,Ot,ut.width,ut.height,ut.depth),mt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,xt,Lt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ut.width,ut.height,ut.depth,0,xt,Lt,ut.data);else if(b.isFramebufferTexture){if(St)if(k)e.texStorage2D(s.TEXTURE_2D,At,Ot,ut.width,ut.height);else{let ft=ut.width,at=ut.height;for(let yt=0;yt<At;yt++)e.texImage2D(s.TEXTURE_2D,yt,Ot,ft,at,0,xt,Lt,null),ft>>=1,at>>=1}}else if(re.length>0){if(k&&St){const ft=Ut(re[0]);e.texStorage2D(s.TEXTURE_2D,At,Ot,ft.width,ft.height)}for(let ft=0,at=re.length;ft<at;ft++)_t=re[ft],k?mt&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,xt,Lt,_t):e.texImage2D(s.TEXTURE_2D,ft,Ot,xt,Lt,_t);b.generateMipmaps=!1}else if(k){if(St){const ft=Ut(ut);e.texStorage2D(s.TEXTURE_2D,At,Ot,ft.width,ft.height)}mt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Lt,ut)}else e.texImage2D(s.TEXTURE_2D,0,Ot,xt,Lt,ut);y(b)&&v(it),Ft.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function lt(I,b,z){if(b.image.length!==6)return;const it=Ht(I,b),ct=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);const nt=n.get(ct);if(ct.version!==nt.__version||it===!0){e.activeTexture(s.TEXTURE0+z);const Ft=ge.getPrimaries(ge.workingColorSpace),vt=b.colorSpace===Os?null:ge.getPrimaries(b.colorSpace),Dt=b.colorSpace===Os||Ft===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,ut=b.image[0]&&b.image[0].isDataTexture,xt=[];for(let at=0;at<6;at++)!Xt&&!ut?xt[at]=S(b.image[at],!0,r.maxCubemapSize):xt[at]=ut?b.image[at].image:b.image[at],xt[at]=Ae(b,xt[at]);const Lt=xt[0],Ot=o.convert(b.format,b.colorSpace),_t=o.convert(b.type),re=A(b.internalFormat,Ot,_t,b.colorSpace),k=b.isVideoTexture!==!0,St=nt.__version===void 0||it===!0,mt=ct.dataReady;let At=D(b,Lt);Wt(s.TEXTURE_CUBE_MAP,b);let ft;if(Xt){k&&St&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,re,Lt.width,Lt.height);for(let at=0;at<6;at++){ft=xt[at].mipmaps;for(let yt=0;yt<ft.length;yt++){const jt=ft[yt];b.format!==$n?Ot!==null?k?mt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,0,0,jt.width,jt.height,Ot,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,re,jt.width,jt.height,0,jt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,0,0,jt.width,jt.height,Ot,_t,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt,re,jt.width,jt.height,0,Ot,_t,jt.data)}}}else{if(ft=b.mipmaps,k&&St){ft.length>0&&At++;const at=Ut(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,re,at.width,at.height)}for(let at=0;at<6;at++)if(ut){k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,xt[at].width,xt[at].height,Ot,_t,xt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,re,xt[at].width,xt[at].height,0,Ot,_t,xt[at].data);for(let yt=0;yt<ft.length;yt++){const Le=ft[yt].image[at].image;k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,0,0,Le.width,Le.height,Ot,_t,Le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,re,Le.width,Le.height,0,Ot,_t,Le.data)}}else{k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,_t,xt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,re,Ot,_t,xt[at]);for(let yt=0;yt<ft.length;yt++){const jt=ft[yt];k?mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,0,0,Ot,_t,jt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,yt+1,re,Ot,_t,jt.image[at])}}}y(b)&&v(s.TEXTURE_CUBE_MAP),nt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Et(I,b,z,it,ct,nt){const Ft=o.convert(z.format,z.colorSpace),vt=o.convert(z.type),Dt=A(z.internalFormat,Ft,vt,z.colorSpace),Xt=n.get(b),ut=n.get(z);if(ut.__renderTarget=b,!Xt.__hasExternalTextures){const xt=Math.max(1,b.width>>nt),Lt=Math.max(1,b.height>>nt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,Dt,xt,Lt,b.depth,0,Ft,vt,null):e.texImage2D(ct,nt,Dt,xt,Lt,0,Ft,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),He(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,ct,ut.__webglTexture,0,B(b)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,ct,ut.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(I,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const it=b.depthTexture,ct=it&&it.isDepthTexture?it.type:null,nt=C(b.stencilBuffer,ct),Ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;He(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(b),nt,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(b),nt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,nt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,I)}else{const it=b.textures;for(let ct=0;ct<it.length;ct++){const nt=it[ct],Ft=o.convert(nt.format,nt.colorSpace),vt=o.convert(nt.type),Dt=A(nt.internalFormat,Ft,vt,nt.colorSpace);He(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(b),Dt,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(b),Dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(I,b,z){const it=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(b.depthTexture);if(ct.__renderTarget=b,(!ct.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),it){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,b.depthTexture.addEventListener("dispose",N)),ct.__webglTexture===void 0){ct.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,b.depthTexture);const Xt=o.convert(b.depthTexture.format),ut=o.convert(b.depthTexture.type);let xt;b.depthTexture.format===Ss?xt=s.DEPTH_COMPONENT24:b.depthTexture.format===ur&&(xt=s.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,xt,b.width,b.height,0,Xt,ut,null)}}else ot(b.depthTexture,0);const nt=ct.__webglTexture,Ft=B(b),vt=it?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,Dt=b.depthTexture.format===ur?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ss)He(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,vt,nt,0,Ft):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,vt,nt,0);else if(b.depthTexture.format===ur)He(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,vt,nt,0,Ft):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,vt,nt,0);else throw new Error("Unknown depthTexture format")}function pe(I){const b=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const it=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=it}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)It(b.__webglFramebuffer[it],I,it);else{const it=I.texture.mipmaps;it&&it.length>0?It(b.__webglFramebuffer[0],I,0):It(b.__webglFramebuffer,I,0)}else if(z){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=s.createRenderbuffer(),te(b.__webglDepthbuffer[it],I,!1);else{const ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,nt)}}else{const it=I.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),te(b.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,nt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(I,b,z){const it=n.get(I);b!==void 0&&Et(it.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&pe(I)}function fe(I){const b=I.texture,z=n.get(I),it=n.get(b);I.addEventListener("dispose",U);const ct=I.textures,nt=I.isWebGLCubeRenderTarget===!0,Ft=ct.length>1;if(Ft||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=b.version,l.memory.textures++),nt){z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[vt]=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)z.__webglFramebuffer[vt][Dt]=s.createFramebuffer()}else z.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)z.__webglFramebuffer[vt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let vt=0,Dt=ct.length;vt<Dt;vt++){const Xt=n.get(ct[vt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),l.memory.textures++)}if(I.samples>0&&He(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let vt=0;vt<ct.length;vt++){const Dt=ct[vt];z.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[vt]);const Xt=o.convert(Dt.format,Dt.colorSpace),ut=o.convert(Dt.type),xt=A(Dt.internalFormat,Xt,ut,Dt.colorSpace,I.isXRRenderTarget===!0),Lt=B(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,xt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,z.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),te(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Et(z.__webglFramebuffer[vt][Dt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt);else Et(z.__webglFramebuffer[vt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(b)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let vt=0,Dt=ct.length;vt<Dt;vt++){const Xt=ct[vt],ut=n.get(Xt);let xt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,ut.__webglTexture),Wt(xt,Xt),Et(z.__webglFramebuffer,I,Xt,s.COLOR_ATTACHMENT0+vt,xt,0),y(Xt)&&v(xt)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,it.__webglTexture),Wt(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Et(z.__webglFramebuffer[Dt],I,b,s.COLOR_ATTACHMENT0,vt,Dt);else Et(z.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,vt,0);y(b)&&v(vt),e.unbindTexture()}I.depthBuffer&&pe(I)}function be(I){const b=I.textures;for(let z=0,it=b.length;z<it;z++){const ct=b[z];if(y(ct)){const nt=P(I),Ft=n.get(ct).__webglTexture;e.bindTexture(nt,Ft),v(nt),e.unbindTexture()}}}const we=[],ne=[];function ze(I){if(I.samples>0){if(He(I)===!1){const b=I.textures,z=I.width,it=I.height;let ct=s.COLOR_BUFFER_BIT;const nt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(I),vt=b.length>1;if(vt)for(let Xt=0;Xt<b.length;Xt++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Dt=I.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Xt=0;Xt<b.length;Xt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Xt]);const ut=n.get(b[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,z,it,0,0,z,it,ct,s.NEAREST),u===!0&&(we.length=0,ne.length=0,we.push(s.COLOR_ATTACHMENT0+Xt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(we.push(nt),ne.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Xt=0;Xt<b.length;Xt++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Xt]);const ut=n.get(b[Xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function B(I){return Math.min(r.maxSamples,I.samples)}function He(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(I){const b=l.render.frame;p.get(I)!==b&&(p.set(I,b),I.update())}function Ae(I,b){const z=I.colorSpace,it=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==wn&&z!==Os&&(ge.getTransfer(z)===Re?(it!==$n||ct!==kn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),b}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=et,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=ke,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tE(s,t){function e(n,r=Os){let o;const l=ge.getTransfer(r);if(n===kn)return s.UNSIGNED_BYTE;if(n===Ju)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$u)return s.UNSIGNED_SHORT_5_5_5_1;if(n===e_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===n_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qm)return s.BYTE;if(n===t_)return s.SHORT;if(n===ma)return s.UNSIGNED_SHORT;if(n===Ku)return s.INT;if(n===Vi)return s.UNSIGNED_INT;if(n===Jn)return s.FLOAT;if(n===Ms)return s.HALF_FLOAT;if(n===i_)return s.ALPHA;if(n===s_)return s.RGB;if(n===$n)return s.RGBA;if(n===Ss)return s.DEPTH_COMPONENT;if(n===ur)return s.DEPTH_STENCIL;if(n===Qu)return s.RED;if(n===tf)return s.RED_INTEGER;if(n===Eo)return s.RG;if(n===ef)return s.RG_INTEGER;if(n===nf)return s.RGBA_INTEGER;if(n===Ul||n===Ol||n===Fl||n===Bl)if(l===Re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ol)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jh||n===$h||n===Qh||n===tu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Jh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===eu||n===nu)return l===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===iu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===su)return o.COMPRESSED_R11_EAC;if(n===ru)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ou)return o.COMPRESSED_RG11_EAC;if(n===au)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lu||n===cu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===yu||n===Mu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===lu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===du)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return l===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Su||n===bu||n===Tu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Su)return l===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===wu||n===Au||n===Ru)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Eu)return o.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Au)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ru)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_a?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
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

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new M_(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wi({vertexShader:eE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vn(new lc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends wr{constructor(t,e){super();const n=this;let r=null,o=1,l=null,c="local-floor",u=1,f=null,p=null,d=null,_=null,g=null,M=null;const S=typeof XRWebGLBinding<"u",y=new iE,v={},P=e.getContextAttributes();let A=null,C=null;const D=[],N=[],U=new $t;let X=null;const w=new bn;w.viewport=new Fe;const R=new bn;R.viewport=new Fe;const F=[w,R],q=new sy;let Q=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=D[Z];return lt===void 0&&(lt=new oh,D[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=D[Z];return lt===void 0&&(lt=new oh,D[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=D[Z];return lt===void 0&&(lt=new oh,D[Z]=lt),lt.getHandSpace()};function ot(Z){const lt=N.indexOf(Z.inputSource);if(lt===-1)return;const Et=D[lt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,f||l),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function et(){r.removeEventListener("select",ot),r.removeEventListener("selectstart",ot),r.removeEventListener("selectend",ot),r.removeEventListener("squeeze",ot),r.removeEventListener("squeezestart",ot),r.removeEventListener("squeezeend",ot),r.removeEventListener("end",et),r.removeEventListener("inputsourceschange",j);for(let Z=0;Z<D.length;Z++){const lt=N[Z];lt!==null&&(N[Z]=null,D[Z].disconnect(lt))}Q=null,rt=null,y.reset();for(const Z in v)delete v[Z];t.setRenderTarget(A),g=null,_=null,d=null,r=null,C=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(X),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(Z){f=Z},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(A=t.getRenderTarget(),r.addEventListener("select",ot),r.addEventListener("selectstart",ot),r.addEventListener("selectend",ot),r.addEventListener("squeeze",ot),r.addEventListener("squeezestart",ot),r.addEventListener("squeezeend",ot),r.addEventListener("end",et),r.addEventListener("inputsourceschange",j),P.xrCompatible!==!0&&await e.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(U),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,te=null,It=null;P.depth&&(It=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=P.stencil?ur:Ss,te=P.stencil?_a:Vi);const pe={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};d=this.getBinding(),_=d.createProjectionLayer(pe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Bi(_.textureWidth,_.textureHeight,{format:$n,type:kn,depthTexture:new Ma(_.textureWidth,_.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Bi(g.framebufferWidth,g.framebufferHeight,{format:$n,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(c),Gt.setContext(r),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(Z){for(let lt=0;lt<Z.removed.length;lt++){const Et=Z.removed[lt],te=N.indexOf(Et);te>=0&&(N[te]=null,D[te].disconnect(Et))}for(let lt=0;lt<Z.added.length;lt++){const Et=Z.added[lt];let te=N.indexOf(Et);if(te===-1){for(let pe=0;pe<D.length;pe++)if(pe>=N.length){N.push(Et),te=pe;break}else if(N[pe]===null){N[pe]=Et,te=pe;break}if(te===-1)break}const It=D[te];It&&It.connect(Et)}}const K=new H,Tt=new H;function st(Z,lt,Et){K.setFromMatrixPosition(lt.matrixWorld),Tt.setFromMatrixPosition(Et.matrixWorld);const te=K.distanceTo(Tt),It=lt.projectionMatrix.elements,pe=Et.projectionMatrix.elements,ke=It[14]/(It[10]-1),fe=It[14]/(It[10]+1),be=(It[9]+1)/It[5],we=(It[9]-1)/It[5],ne=(It[8]-1)/It[0],ze=(pe[8]+1)/pe[0],B=ke*ne,He=ke*ze,Me=te/(-ne+ze),Ae=Me*-ne;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),It[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ut=ke+Me,I=fe+Me,b=B-Ae,z=He+(te-Ae),it=be*fe/I*Ut,ct=we*fe/I*Ut;Z.projectionMatrix.makePerspective(b,z,it,ct,Ut,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function dt(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let lt=Z.near,Et=Z.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),q.near=R.near=w.near=lt,q.far=R.far=w.far=Et,(Q!==q.near||rt!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),Q=q.near,rt=q.far),q.layers.mask=Z.layers.mask|6,w.layers.mask=q.layers.mask&3,R.layers.mask=q.layers.mask&5;const te=Z.parent,It=q.cameras;dt(q,te);for(let pe=0;pe<It.length;pe++)dt(It[pe],te);It.length===2?st(q,w,R):q.projectionMatrix.copy(w.projectionMatrix),Wt(Z,q,te)};function Wt(Z,lt,Et){Et===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&g===null))return u},this.setFoveation=function(Z){u=Z,_!==null&&(_.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(Z){return v[Z]};let Ht=null;function Qt(Z,lt){if(p=lt.getViewerPose(f||l),M=lt,p!==null){const Et=p.views;g!==null&&(t.setRenderTargetFramebuffer(C,g.framebuffer),t.setRenderTarget(C));let te=!1;Et.length!==q.cameras.length&&(q.cameras.length=0,te=!0);for(let fe=0;fe<Et.length;fe++){const be=Et[fe];let we=null;if(g!==null)we=g.getViewport(be);else{const ze=d.getViewSubImage(_,be);we=ze.viewport,fe===0&&(t.setRenderTargetTextures(C,ze.colorTexture,ze.depthStencilTexture),t.setRenderTarget(C))}let ne=F[fe];ne===void 0&&(ne=new bn,ne.layers.enable(fe),ne.viewport=new Fe,F[fe]=ne),ne.matrix.fromArray(be.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(be.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(we.x,we.y,we.width,we.height),fe===0&&(q.matrix.copy(ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),te===!0&&q.cameras.push(ne)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const fe=d.getDepthInformation(Et[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,r.renderState)}if(It&&It.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let fe=0;fe<Et.length;fe++){const be=Et[fe].camera;if(be){let we=v[be];we||(we=new M_,v[be]=we);const ne=d.getCameraImage(be);we.sourceTexture=ne}}}}for(let Et=0;Et<D.length;Et++){const te=N[Et],It=D[Et];te!==null&&It!==void 0&&It.update(te,lt,f||l)}Ht&&Ht(Z,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),M=null}const Gt=new w_;Gt.setAnimationLoop(Qt),this.setAnimationLoop=function(Z){Ht=Z},this.dispose=function(){}}}const sr=new Gi,rE=new le;function oE(s,t){function e(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function n(y,v){v.color.getRGB(y.fogColor.value,p_(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function r(y,v,P,A,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(y,v):v.isMeshToonMaterial?(o(y,v),d(y,v)):v.isMeshPhongMaterial?(o(y,v),p(y,v)):v.isMeshStandardMaterial?(o(y,v),_(y,v),v.isMeshPhysicalMaterial&&g(y,v,C)):v.isMeshMatcapMaterial?(o(y,v),M(y,v)):v.isMeshDepthMaterial?o(y,v):v.isMeshDistanceMaterial?(o(y,v),S(y,v)):v.isMeshNormalMaterial?o(y,v):v.isLineBasicMaterial?(l(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?u(y,v,P,A):v.isSpriteMaterial?f(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,e(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===In&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,e(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===In&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,e(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,e(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),A=P.envMap,C=P.envMapRotation;A&&(y.envMap.value=A,sr.copy(C),sr.x*=-1,sr.y*=-1,sr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),y.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(sr)),y.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,y.aoMapTransform))}function l(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function u(y,v,P,A){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=A*.5,v.map&&(y.map.value=v.map,e(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,e(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,e(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function d(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function g(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function S(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function aE(s,t,e,n){let r={},o={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,A){const C=A.program;n.uniformBlockBinding(P,C)}function f(P,A){let C=r[P.id];C===void 0&&(M(P),C=p(P),r[P.id]=C,P.addEventListener("dispose",y));const D=A.program;n.updateUBOMapping(P,D);const N=t.render.frame;o[P.id]!==N&&(_(P),o[P.id]=N)}function p(P){const A=d();P.__bindingPointIndex=A;const C=s.createBuffer(),D=P.__size,N=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,D,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,C),C}function d(){for(let P=0;P<c;P++)if(l.indexOf(P)===-1)return l.push(P),P;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const A=r[P.id],C=P.uniforms,D=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let N=0,U=C.length;N<U;N++){const X=Array.isArray(C[N])?C[N]:[C[N]];for(let w=0,R=X.length;w<R;w++){const F=X[w];if(g(F,N,w,D)===!0){const q=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let rt=0;for(let ot=0;ot<Q.length;ot++){const et=Q[ot],j=S(et);typeof et=="number"||typeof et=="boolean"?(F.__data[0]=et,s.bufferSubData(s.UNIFORM_BUFFER,q+rt,F.__data)):et.isMatrix3?(F.__data[0]=et.elements[0],F.__data[1]=et.elements[1],F.__data[2]=et.elements[2],F.__data[3]=0,F.__data[4]=et.elements[3],F.__data[5]=et.elements[4],F.__data[6]=et.elements[5],F.__data[7]=0,F.__data[8]=et.elements[6],F.__data[9]=et.elements[7],F.__data[10]=et.elements[8],F.__data[11]=0):(et.toArray(F.__data,rt),rt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(P,A,C,D){const N=P.value,U=A+"_"+C;if(D[U]===void 0)return typeof N=="number"||typeof N=="boolean"?D[U]=N:D[U]=N.clone(),!0;{const X=D[U];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return D[U]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function M(P){const A=P.uniforms;let C=0;const D=16;for(let U=0,X=A.length;U<X;U++){const w=Array.isArray(A[U])?A[U]:[A[U]];for(let R=0,F=w.length;R<F;R++){const q=w[R],Q=Array.isArray(q.value)?q.value:[q.value];for(let rt=0,ot=Q.length;rt<ot;rt++){const et=Q[rt],j=S(et),K=C%D,Tt=K%j.boundary,st=K+Tt;C+=Tt,st!==0&&D-st<j.storage&&(C+=D-st),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=C,C+=j.storage}}}const N=C%D;return N>0&&(C+=D-N),P.__size=C,P.__cache={},this}function S(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):zt("WebGLRenderer: Unsupported uniform value type.",P),A}function y(P){const A=P.target;A.removeEventListener("dispose",y);const C=l.indexOf(A.__bindingPointIndex);l.splice(C,1),s.deleteBuffer(r[A.id]),delete r[A.id],delete o[A.id]}function v(){for(const P in r)s.deleteBuffer(r[P]);l=[],r={},o={}}return{bind:u,update:f,dispose:v}}const lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function cE(){return wi===null&&(wi=new cf(lE,16,16,Eo,Ms),wi.name="DFG_LUT",wi.minFilter=en,wi.magFilter=en,wi.wrapS=Ni,wi.wrapT=Ni,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class hE{constructor(t={}){const{canvas:e=N0(),context:n=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:_=!1,outputBufferType:g=kn}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;const S=g,y=new Set([nf,ef,tf]),v=new Set([kn,Vi,ma,_a,Ju,$u]),P=new Uint32Array(4),A=new Int32Array(4);let C=null,D=null;const N=[],U=[];let X=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=mn;let F=0,q=0,Q=null,rt=-1,ot=null;const et=new Fe,j=new Fe;let K=null;const Tt=new ee(0);let st=0,dt=e.width,Wt=e.height,Ht=1,Qt=null,Gt=null;const Z=new Fe(0,0,dt,Wt),lt=new Fe(0,0,dt,Wt);let Et=!1;const te=new uf;let It=!1,pe=!1;const ke=new le,fe=new H,be=new Fe,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ze(){return Q===null?Ht:1}let B=n;function He(E,V){return e.getContext(E,V)}try{const E={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ju}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Te,!1),B===null){const V="webgl2";if(B=He(V,E),B===null)throw He(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Yt("WebGLRenderer: "+E.message),E}let Me,Ae,Ut,I,b,z,it,ct,nt,Ft,vt,Dt,Xt,ut,xt,Lt,Ot,_t,re,k,St,mt,At,ft;function at(){Me=new cb(B),Me.init(),mt=new tE(B,Me),Ae=new tb(B,Me,t,mt),Ut=new $T(B,Me),Ae.reversedDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),I=new fb(B),b=new FT,z=new QT(B,Me,Ut,b,Ae,mt,I),it=new nb(w),ct=new lb(w),nt=new _y(B),At=new $S(B,nt),Ft=new hb(B,nt,I,At),vt=new pb(B,Ft,nt,I),re=new db(B,Ae,z),Lt=new eb(b),Dt=new OT(w,it,ct,Me,Ae,At,Lt),Xt=new oE(w,b),ut=new kT,xt=new XT(Me),_t=new JS(w,it,ct,Ut,vt,M,u),Ot=new KT(w,vt,Ae),ft=new aE(B,I,Ae,Ut),k=new QS(B,Me,I),St=new ub(B,Me,I),I.programs=Dt.programs,w.capabilities=Ae,w.extensions=Me,w.properties=b,w.renderLists=ut,w.shadowMap=Ot,w.state=Ut,w.info=I}at(),S!==kn&&(X=new _b(S,e.width,e.height,r,o));const yt=new sE(w,B);this.xr=yt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(E){E!==void 0&&(Ht=E,this.setSize(dt,Wt,!1))},this.getSize=function(E){return E.set(dt,Wt)},this.setSize=function(E,V,$=!0){if(yt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=E,Wt=V,e.width=Math.floor(E*Ht),e.height=Math.floor(V*Ht),$===!0&&(e.style.width=E+"px",e.style.height=V+"px"),X!==null&&X.setSize(e.width,e.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(dt*Ht,Wt*Ht).floor()},this.setDrawingBufferSize=function(E,V,$){dt=E,Wt=V,Ht=$,e.width=Math.floor(E*$),e.height=Math.floor(V*$),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(S===kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,V,$,Y){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,V,$,Y),Ut.viewport(et.copy(Z).multiplyScalar(Ht).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,V,$,Y){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,V,$,Y),Ut.scissor(j.copy(lt).multiplyScalar(Ht).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(E){Ut.setScissorTest(Et=E)},this.setOpaqueSort=function(E){Qt=E},this.setTransparentSort=function(E){Gt=E},this.getClearColor=function(E){return E.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,$=!0){let Y=0;if(E){let G=!1;if(Q!==null){const gt=Q.texture.format;G=y.has(gt)}if(G){const gt=Q.texture.type,Pt=v.has(gt),Mt=_t.getClearColor(),Ct=_t.getClearAlpha(),pt=Mt.r,wt=Mt.g,kt=Mt.b;Pt?(P[0]=pt,P[1]=wt,P[2]=kt,P[3]=Ct,B.clearBufferuiv(B.COLOR,0,P)):(A[0]=pt,A[1]=wt,A[2]=kt,A[3]=Ct,B.clearBufferiv(B.COLOR,0,A))}else Y|=B.COLOR_BUFFER_BIT}V&&(Y|=B.DEPTH_BUFFER_BIT),$&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),_t.dispose(),ut.dispose(),xt.dispose(),b.dispose(),it.dispose(),ct.dispose(),vt.dispose(),At.dispose(),ft.dispose(),Dt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Bt),yt.removeEventListener("sessionend",Bo),Si.stop()};function jt(E){E.preventDefault(),Yl("WebGLRenderer: Context Lost."),R=!0}function Le(){Yl("WebGLRenderer: Context Restored."),R=!1;const E=I.autoReset,V=Ot.enabled,$=Ot.autoUpdate,Y=Ot.needsUpdate,G=Ot.type;at(),I.autoReset=E,Ot.enabled=V,Ot.autoUpdate=$,Ot.needsUpdate=Y,Ot.type=G}function Te(E){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function An(E){const V=E.target;V.removeEventListener("dispose",An),ii(V)}function ii(E){pc(E),b.remove(E)}function pc(E){const V=b.get(E).programs;V!==void 0&&(V.forEach(function($){Dt.releaseProgram($)}),E.isShaderMaterial&&Dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,$,Y,G,gt){V===null&&(V=we);const Pt=G.isMesh&&G.matrixWorld.determinant()<0,Mt=mc(E,V,$,Y,G);Ut.setMaterial(Y,Pt);let Ct=$.index,pt=1;if(Y.wireframe===!0){if(Ct=Ft.getWireframeAttribute($),Ct===void 0)return;pt=2}const wt=$.drawRange,kt=$.attributes.position;let Kt=wt.start*pt,_e=(wt.start+wt.count)*pt;gt!==null&&(Kt=Math.max(Kt,gt.start*pt),_e=Math.min(_e,(gt.start+gt.count)*pt)),Ct!==null?(Kt=Math.max(Kt,0),_e=Math.min(_e,Ct.count)):kt!=null&&(Kt=Math.max(Kt,0),_e=Math.min(_e,kt.count));const Ne=_e-Kt;if(Ne<0||Ne===1/0)return;At.setup(G,Y,Mt,$,Ct);let Nt,Zt=k;if(Ct!==null&&(Nt=nt.get(Ct),Zt=St,Zt.setIndex(Nt)),G.isMesh)Y.wireframe===!0?(Ut.setLineWidth(Y.wireframeLinewidth*ze()),Zt.setMode(B.LINES)):Zt.setMode(B.TRIANGLES);else if(G.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),Ut.setLineWidth(Vt*ze()),G.isLineSegments?Zt.setMode(B.LINES):G.isLineLoop?Zt.setMode(B.LINE_LOOP):Zt.setMode(B.LINE_STRIP)}else G.isPoints?Zt.setMode(B.POINTS):G.isSprite&&Zt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Zt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Zt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Vt=G._multiDrawStarts,ve=G._multiDrawCounts,Jt=G._multiDrawCount,xn=Ct?nt.get(Ct).bytesPerElement:1,si=b.get(Y).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)si.setValue(B,"_gl_DrawID",Ge),Zt.render(Vt[Ge]/xn,ve[Ge])}else if(G.isInstancedMesh)Zt.renderInstances(Kt,Ne,G.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ve=Math.min($.instanceCount,Vt);Zt.renderInstances(Kt,Ne,ve)}else Zt.render(Kt,Ne)};function Fa(E,V,$){E.transparent===!0&&E.side===Di&&E.forceSinglePass===!1?(E.side=In,E.needsUpdate=!0,Ys(E,V,$),E.side=ys,E.needsUpdate=!0,Ys(E,V,$),E.side=Di):Ys(E,V,$)}this.compile=function(E,V,$=null){$===null&&($=E),D=xt.get($),D.init(V),U.push(D),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(D.pushLight(G),G.castShadow&&D.pushShadow(G))}),E!==$&&E.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(D.pushLight(G),G.castShadow&&D.pushShadow(G))}),D.setupLights();const Y=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let Pt=0;Pt<gt.length;Pt++){const Mt=gt[Pt];Fa(Mt,$,G),Y.add(Mt)}else Fa(gt,$,G),Y.add(gt)}),D=U.pop(),Y},this.compileAsync=function(E,V,$=null){const Y=this.compile(E,V,$);return new Promise(G=>{function gt(){if(Y.forEach(function(Pt){b.get(Pt).currentProgram.isReady()&&Y.delete(Pt)}),Y.size===0){G(E);return}setTimeout(gt,10)}Me.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Fo=null;function Hn(E){Fo&&Fo(E)}function Bt(){Si.stop()}function Bo(){Si.start()}const Si=new w_;Si.setAnimationLoop(Hn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(E){Fo=E,yt.setAnimationLoop(E),E===null?Si.stop():Si.start()},yt.addEventListener("sessionstart",Bt),yt.addEventListener("sessionend",Bo),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const $=yt.enabled===!0&&yt.isPresenting===!0,Y=X!==null&&(Q===null||$)&&X.begin(w,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(V),V=yt.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,V,Q),D=xt.get(E,U.length),D.init(V),U.push(D),ke.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(ke,Ui,V.reversedDepth),pe=this.localClippingEnabled,It=Lt.init(this.clippingPlanes,pe),C=ut.get(E,N.length),C.init(),N.push(C),yt.enabled===!0&&yt.isPresenting===!0){const Pt=w.xr.getDepthSensingMesh();Pt!==null&&Ar(Pt,V,-1/0,w.sortObjects)}Ar(E,V,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(Qt,Gt),ne=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ne&&_t.addToRenderList(C,E),this.info.render.frame++,It===!0&&Lt.beginShadows();const G=D.state.shadowsArray;if(Ot.render(G,E,V),It===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&X.hasRenderPass())===!1){const Pt=C.opaque,Mt=C.transmissive;if(D.setupLights(),V.isArrayCamera){const Ct=V.cameras;if(Mt.length>0)for(let pt=0,wt=Ct.length;pt<wt;pt++){const kt=Ct[pt];Rr(Pt,Mt,E,kt)}ne&&_t.render(E);for(let pt=0,wt=Ct.length;pt<wt;pt++){const kt=Ct[pt];ko(C,E,kt,kt.viewport)}}else Mt.length>0&&Rr(Pt,Mt,E,V),ne&&_t.render(E),ko(C,E,V)}Q!==null&&q===0&&(z.updateMultisampleRenderTarget(Q),z.updateRenderTargetMipmap(Q)),Y&&X.end(w),E.isScene===!0&&E.onAfterRender(w,E,V),At.resetDefaultState(),rt=-1,ot=null,U.pop(),U.length>0?(D=U[U.length-1],It===!0&&Lt.setGlobalState(w.clippingPlanes,D.state.camera)):D=null,N.pop(),N.length>0?C=N[N.length-1]:C=null};function Ar(E,V,$,Y){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)D.pushLight(E),E.castShadow&&D.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){Y&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);const Pt=vt.update(E),Mt=E.material;Mt.visible&&C.push(E,Pt,Mt,$,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const Pt=vt.update(E),Mt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),be.copy(Pt.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(Mt)){const Ct=Pt.groups;for(let pt=0,wt=Ct.length;pt<wt;pt++){const kt=Ct[pt],Kt=Mt[kt.materialIndex];Kt&&Kt.visible&&C.push(E,Pt,Kt,$,be.z,kt)}}else Mt.visible&&C.push(E,Pt,Mt,$,be.z,null)}}const gt=E.children;for(let Pt=0,Mt=gt.length;Pt<Mt;Pt++)Ar(gt[Pt],V,$,Y)}function ko(E,V,$,Y){const{opaque:G,transmissive:gt,transparent:Pt}=E;D.setupLightsView($),It===!0&&Lt.setGlobalState(w.clippingPlanes,$),Y&&Ut.viewport(et.copy(Y)),G.length>0&&qs(G,V,$),gt.length>0&&qs(gt,V,$),Pt.length>0&&qs(Pt,V,$),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Rr(E,V,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[Y.id]===void 0){const Kt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[Y.id]=new Bi(1,1,{generateMipmaps:!0,type:Kt?Ms:kn,minFilter:ds,samples:Ae.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const gt=D.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||et;gt.setSize(Pt.z*w.transmissionResolutionScale,Pt.w*w.transmissionResolutionScale);const Mt=w.getRenderTarget(),Ct=w.getActiveCubeFace(),pt=w.getActiveMipmapLevel();w.setRenderTarget(gt),w.getClearColor(Tt),st=w.getClearAlpha(),st<1&&w.setClearColor(16777215,.5),w.clear(),ne&&_t.render($);const wt=w.toneMapping;w.toneMapping=Fi;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),D.setupLightsView(Y),It===!0&&Lt.setGlobalState(w.clippingPlanes,Y),qs(E,$,Y),z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let _e=0,Ne=V.length;_e<Ne;_e++){const Nt=V[_e],{object:Zt,geometry:Vt,material:ve,group:Jt}=Nt;if(ve.side===Di&&Zt.layers.test(Y.layers)){const xn=ve.side;ve.side=In,ve.needsUpdate=!0,Ji(Zt,$,Y,Vt,ve,Jt),ve.side=xn,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt))}w.setRenderTarget(Mt,Ct,pt),w.setClearColor(Tt,st),kt!==void 0&&(Y.viewport=kt),w.toneMapping=wt}function qs(E,V,$){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,gt=E.length;G<gt;G++){const Pt=E[G],{object:Mt,geometry:Ct,group:pt}=Pt;let wt=Pt.material;wt.allowOverride===!0&&Y!==null&&(wt=Y),Mt.layers.test($.layers)&&Ji(Mt,V,$,Ct,wt,pt)}}function Ji(E,V,$,Y,G,gt){E.onBeforeRender(w,V,$,Y,G,gt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(w,V,$,Y,E,gt),G.transparent===!0&&G.side===Di&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,w.renderBufferDirect($,V,Y,G,E,gt),G.side=ys,G.needsUpdate=!0,w.renderBufferDirect($,V,Y,G,E,gt),G.side=Di):w.renderBufferDirect($,V,Y,G,E,gt),E.onAfterRender(w,V,$,Y,G,gt)}function Ys(E,V,$){V.isScene!==!0&&(V=we);const Y=b.get(E),G=D.state.lights,gt=D.state.shadowsArray,Pt=G.state.version,Mt=Dt.getParameters(E,G.state,gt,V,$),Ct=Dt.getProgramCacheKey(Mt);let pt=Y.programs;Y.environment=E.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(E.isMeshStandardMaterial?ct:it).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,pt===void 0&&(E.addEventListener("dispose",An),pt=new Map,Y.programs=pt);let wt=pt.get(Ct);if(wt!==void 0){if(Y.currentProgram===wt&&Y.lightsStateVersion===Pt)return ka(E,Mt),wt}else Mt.uniforms=Dt.getUniforms(E),E.onBeforeCompile(Mt,w),wt=Dt.acquireProgram(Mt,Ct),pt.set(Ct,wt),Y.uniforms=Mt.uniforms;const kt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=Lt.uniform),ka(E,Mt),Y.needsLights=za(E),Y.lightsStateVersion=Pt,Y.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=wt,Y.uniformsList=null,wt}function Ba(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=kl.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function ka(E,V){const $=b.get(E);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function mc(E,V,$,Y,G){V.isScene!==!0&&(V=we),z.resetTextureUnits();const gt=V.fog,Pt=Y.isMeshStandardMaterial?V.environment:null,Mt=Q===null?w.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:wn,Ct=(Y.isMeshStandardMaterial?ct:it).get(Y.envMap||Pt),pt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,wt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!$.morphAttributes.position,Kt=!!$.morphAttributes.normal,_e=!!$.morphAttributes.color;let Ne=Fi;Y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=w.toneMapping);const Nt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=Nt!==void 0?Nt.length:0,Vt=b.get(Y),ve=D.state.lights;if(It===!0&&(pe===!0||E!==ot)){const Je=E===ot&&Y.id===rt;Lt.setState(Y,E,Je)}let Jt=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ve.state.version||Vt.outputColorSpace!==Mt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isBatchedMesh&&Vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Vt.instancingMorph===!1&&G.morphTexture!==null||Vt.envMap!==Ct||Y.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Lt.numPlanes||Vt.numIntersection!==Lt.numIntersection)||Vt.vertexAlphas!==pt||Vt.vertexTangents!==wt||Vt.morphTargets!==kt||Vt.morphNormals!==Kt||Vt.morphColors!==_e||Vt.toneMapping!==Ne||Vt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,Vt.__version=Y.version);let xn=Vt.currentProgram;Jt===!0&&(xn=Ys(Y,V,G));let si=!1,Ge=!1,Ue=!1;const xe=xn.getUniforms(),Xe=Vt.uniforms;if(Ut.useProgram(xn.program)&&(si=!0,Ge=!0,Ue=!0),Y.id!==rt&&(rt=Y.id,Ge=!0),si||ot!==E){Ut.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(B,"projectionMatrix",E.projectionMatrix),xe.setValue(B,"viewMatrix",E.matrixWorldInverse);const Ze=xe.map.cameraPosition;Ze!==void 0&&Ze.setValue(B,fe.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),ot!==E&&(ot=E,Ge=!0,Ue=!0)}if(Vt.needsLights&&(ve.state.directionalShadowMap.length>0&&xe.setValue(B,"directionalShadowMap",ve.state.directionalShadowMap,z),ve.state.spotShadowMap.length>0&&xe.setValue(B,"spotShadowMap",ve.state.spotShadowMap,z),ve.state.pointShadowMap.length>0&&xe.setValue(B,"pointShadowMap",ve.state.pointShadowMap,z)),G.isSkinnedMesh){xe.setOptional(B,G,"bindMatrix"),xe.setOptional(B,G,"bindMatrixInverse");const Je=G.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),xe.setValue(B,"boneTexture",Je.boneTexture,z))}G.isBatchedMesh&&(xe.setOptional(B,G,"batchingTexture"),xe.setValue(B,"batchingTexture",G._matricesTexture,z),xe.setOptional(B,G,"batchingIdTexture"),xe.setValue(B,"batchingIdTexture",G._indirectTexture,z),xe.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(B,"batchingColorTexture",G._colorsTexture,z));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&re.update(G,$,xn),(Ge||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,xe.setValue(B,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Xe.envMap.value=Ct,Xe.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Xe.envMapIntensity.value=V.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=cE()),Ge&&(xe.setValue(B,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&_c(Xe,Ue),gt&&Y.fog===!0&&Xt.refreshFogUniforms(Xe,gt),Xt.refreshMaterialUniforms(Xe,Y,Ht,Wt,D.state.transmissionRenderTarget[E.id]),kl.upload(B,Ba(Vt),Xe,z)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(kl.upload(B,Ba(Vt),Xe,z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(B,"center",G.center),xe.setValue(B,"modelViewMatrix",G.modelViewMatrix),xe.setValue(B,"normalMatrix",G.normalMatrix),xe.setValue(B,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Je=Y.uniformsGroups;for(let Ze=0,js=Je.length;Ze<js;Ze++){const ri=Je[Ze];ft.update(ri,xn),ft.bind(ri,xn)}}return xn}function _c(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function za(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,V,$){const Y=b.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=V,b.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const $=b.get(E);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};const gc=B.createFramebuffer();this.setRenderTarget=function(E,V=0,$=0){Q=E,F=V,q=$;let Y=null,G=!1,gt=!1;if(E){const Mt=b.get(E);if(Mt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(B.FRAMEBUFFER,Mt.__webglFramebuffer),et.copy(E.viewport),j.copy(E.scissor),K=E.scissorTest,Ut.viewport(et),Ut.scissor(j),Ut.setScissorTest(K),rt=-1;return}else if(Mt.__webglFramebuffer===void 0)z.setupRenderTarget(E);else if(Mt.__hasExternalTextures)z.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&b.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(gt=!0);const pt=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(pt[V])?Y=pt[V][$]:Y=pt[V],G=!0):E.samples>0&&z.useMultisampledRTT(E)===!1?Y=b.get(E).__webglMultisampledFramebuffer:Array.isArray(pt)?Y=pt[$]:Y=pt,et.copy(E.viewport),j.copy(E.scissor),K=E.scissorTest}else et.copy(Z).multiplyScalar(Ht).floor(),j.copy(lt).multiplyScalar(Ht).floor(),K=Et;if($!==0&&(Y=gc),Ut.bindFramebuffer(B.FRAMEBUFFER,Y)&&Ut.drawBuffers(E,Y),Ut.viewport(et),Ut.scissor(j),Ut.setScissorTest(K),G){const Mt=b.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Mt.__webglTexture,$)}else if(gt){const Mt=V;for(let Ct=0;Ct<E.textures.length;Ct++){const pt=b.get(E.textures[Ct]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ct,pt.__webglTexture,$,Mt)}}else if(E!==null&&$!==0){const Mt=b.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mt.__webglTexture,$)}rt=-1},this.readRenderTargetPixels=function(E,V,$,Y,G,gt,Pt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct){Ut.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const pt=E.textures[Mt],wt=pt.format,kt=pt.type;if(!Ae.textureFormatReadable(wt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(kt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Y&&$>=0&&$<=E.height-G&&(E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt),B.readPixels(V,$,Y,G,mt.convert(wt),mt.convert(kt),gt))}finally{const pt=Q!==null?b.get(Q).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(E,V,$,Y,G,gt,Pt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct)if(V>=0&&V<=E.width-Y&&$>=0&&$<=E.height-G){Ut.bindFramebuffer(B.FRAMEBUFFER,Ct);const pt=E.textures[Mt],wt=pt.format,kt=pt.type;if(!Ae.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Kt),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt),B.readPixels(V,$,Y,G,mt.convert(wt),mt.convert(kt),0);const _e=Q!==null?b.get(Q).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,_e);const Ne=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await U0(B,Ne,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Kt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.deleteBuffer(Kt),B.deleteSync(Ne),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,$=0){const Y=Math.pow(2,-$),G=Math.floor(E.image.width*Y),gt=Math.floor(E.image.height*Y),Pt=V!==null?V.x:0,Mt=V!==null?V.y:0;z.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Pt,Mt,G,gt),Ut.unbindTexture()};const Pr=B.createFramebuffer(),vc=B.createFramebuffer();this.copyTextureToTexture=function(E,V,$=null,Y=null,G=0,gt=null){gt===null&&(G!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=G,G=0):gt=0);let Pt,Mt,Ct,pt,wt,kt,Kt,_e,Ne;const Nt=E.isCompressedTexture?E.mipmaps[gt]:E.image;if($!==null)Pt=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Ct=$.isBox3?$.max.z-$.min.z:1,pt=$.min.x,wt=$.min.y,kt=$.isBox3?$.min.z:0;else{const on=Math.pow(2,-G);Pt=Math.floor(Nt.width*on),Mt=Math.floor(Nt.height*on),E.isDataArrayTexture?Ct=Nt.depth:E.isData3DTexture?Ct=Math.floor(Nt.depth*on):Ct=1,pt=0,wt=0,kt=0}Y!==null?(Kt=Y.x,_e=Y.y,Ne=Y.z):(Kt=0,_e=0,Ne=0);const Zt=mt.convert(V.format),Vt=mt.convert(V.type);let ve;V.isData3DTexture?(z.setTexture3D(V,0),ve=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),ve=B.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),ve=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Jt=B.getParameter(B.UNPACK_ROW_LENGTH),xn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),si=B.getParameter(B.UNPACK_SKIP_PIXELS),Ge=B.getParameter(B.UNPACK_SKIP_ROWS),Ue=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pt),B.pixelStorei(B.UNPACK_SKIP_ROWS,wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);const xe=E.isDataArrayTexture||E.isData3DTexture,Xe=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const on=b.get(E),Je=b.get(V),Ze=b.get(on.__renderTarget),js=b.get(Je.__renderTarget);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let ri=0;ri<Ct;ri++)xe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(E).__webglTexture,G,kt+ri),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(V).__webglTexture,gt,Ne+ri)),B.blitFramebuffer(pt,wt,Pt,Mt,Kt,_e,Pt,Mt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||b.has(E)){const on=b.get(E),Je=b.get(V);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Pr),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,vc);for(let Ze=0;Ze<Ct;Ze++)xe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,G,kt+Ze):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,G),Xe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Je.__webglTexture,gt,Ne+Ze):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Je.__webglTexture,gt),G!==0?B.blitFramebuffer(pt,wt,Pt,Mt,Kt,_e,Pt,Mt,B.COLOR_BUFFER_BIT,B.NEAREST):Xe?B.copyTexSubImage3D(ve,gt,Kt,_e,Ne+Ze,pt,wt,Pt,Mt):B.copyTexSubImage2D(ve,gt,Kt,_e,pt,wt,Pt,Mt);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Xe?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(ve,gt,Kt,_e,Ne,Pt,Mt,Ct,Zt,Vt,Nt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(ve,gt,Kt,_e,Ne,Pt,Mt,Ct,Zt,Nt.data):B.texSubImage3D(ve,gt,Kt,_e,Ne,Pt,Mt,Ct,Zt,Vt,Nt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,gt,Kt,_e,Pt,Mt,Zt,Vt,Nt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,gt,Kt,_e,Nt.width,Nt.height,Zt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,gt,Kt,_e,Pt,Mt,Zt,Vt,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,si),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ue),gt===0&&V.generateMipmaps&&B.generateMipmap(ve),Ut.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?z.setTextureCube(E,0):E.isData3DTexture?z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?z.setTexture2DArray(E,0):z.setTexture2D(E,0),Ut.unbindTexture()},this.resetState=function(){F=0,q=0,Q=null,Ut.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function Ip(s,t){if(t===T0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Pu||t===r_){let e=s.getIndex();if(e===null){const l=[],c=s.getAttribute("position");if(c!==void 0){for(let u=0;u<c.count;u++)l.push(u);s.setIndex(l),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,r=[];if(t===Pu)for(let l=1;l<=n;l++)r.push(e.getX(0)),r.push(e.getX(l)),r.push(e.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(r.push(e.getX(l)),r.push(e.getX(l+1)),r.push(e.getX(l+2))):(r.push(e.getX(l+2)),r.push(e.getX(l+1)),r.push(e.getX(l)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class uE extends Uo{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _E(e)}),this.register(function(e){return new gE(e)}),this.register(function(e){return new wE(e)}),this.register(function(e){return new AE(e)}),this.register(function(e){return new RE(e)}),this.register(function(e){return new xE(e)}),this.register(function(e){return new yE(e)}),this.register(function(e){return new ME(e)}),this.register(function(e){return new SE(e)}),this.register(function(e){return new mE(e)}),this.register(function(e){return new bE(e)}),this.register(function(e){return new vE(e)}),this.register(function(e){return new EE(e)}),this.register(function(e){return new TE(e)}),this.register(function(e){return new dE(e)}),this.register(function(e){return new PE(e)}),this.register(function(e){return new CE(e)})}load(t,e,n,r){const o=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const f=da.extractUrlBase(t);l=da.resolveURL(f,this.path)}else l=da.extractUrlBase(t);this.manager.itemStart(t);const c=function(f){r?r(f):console.error(f),o.manager.itemError(t),o.manager.itemEnd(t)},u=new T_(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(f){try{o.parse(f,l,function(p){e(p),o.manager.itemEnd(t)},c)}catch(p){c(p)}},n,c)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,r){let o;const l={},c={},u=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(u.decode(new Uint8Array(t,0,4))===L_){try{l[de.KHR_BINARY_GLTF]=new LE(t)}catch(d){r&&r(d);return}o=JSON.parse(l[de.KHR_BINARY_GLTF].content)}else o=JSON.parse(u.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new WE(o,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const d=this.pluginCallbacks[p](f);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[d.name]=d,l[d.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const d=o.extensionsUsed[p],_=o.extensionsRequired||[];switch(d){case de.KHR_MATERIALS_UNLIT:l[d]=new pE;break;case de.KHR_DRACO_MESH_COMPRESSION:l[d]=new IE(o,this.dracoLoader);break;case de.KHR_TEXTURE_TRANSFORM:l[d]=new DE;break;case de.KHR_MESH_QUANTIZATION:l[d]=new NE;break;default:_.indexOf(d)>=0&&c[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}f.setExtensions(l),f.setPlugins(c),f.parse(n,r)}parseAsync(t,e){const n=this;return new Promise(function(r,o){n.parse(t,e,r,o)})}}function fE(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const de={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dE{constructor(t){this.parser=t,this.name=de.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,r=e.length;n<r;n++){const o=e[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let r=e.cache.get(n);if(r)return r;const o=e.json,u=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let f;const p=new ee(16777215);u.color!==void 0&&p.setRGB(u.color[0],u.color[1],u.color[2],wn);const d=u.range!==void 0?u.range:0;switch(u.type){case"directional":f=new E_(p),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new ty(p),f.distance=d;break;case"spot":f=new $x(p),f.distance=d,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,f.angle=u.spot.outerConeAngle,f.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return f.position.set(0,0,0),Ai(f,u),u.intensity!==void 0&&(f.intensity=u.intensity),f.name=e.createUniqueName(u.name||"light_"+t),r=Promise.resolve(f),e.cache.add(n,r),r}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,o=n.json.nodes[t],c=(o.extensions&&o.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(u){return n._getNodeRef(e.cache,c,u)})}}class pE{constructor(){this.name=de.KHR_MATERIALS_UNLIT}getMaterialType(){return fr}extendParams(t,e,n){const r=[];t.color=new ee(1,1,1),t.opacity=1;const o=e.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const l=o.baseColorFactor;t.color.setRGB(l[0],l[1],l[2],wn),t.opacity=l[3]}o.baseColorTexture!==void 0&&r.push(n.assignTexture(t,"map",o.baseColorTexture,mn))}return Promise.all(r)}}class mE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(e.emissiveIntensity=o),Promise.resolve()}}class _E{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];if(l.clearcoatFactor!==void 0&&(e.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(e,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const c=l.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new $t(c,c)}return Promise.all(o)}}class gE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return e.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class vE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.iridescenceFactor!==void 0&&(e.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(e.iridescenceIOR=l.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(e,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(o)}}class xE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];e.sheenColor=new ee(0,0,0),e.sheenRoughness=0,e.sheen=1;const l=r.extensions[this.name];if(l.sheenColorFactor!==void 0){const c=l.sheenColorFactor;e.sheenColor.setRGB(c[0],c[1],c[2],wn)}return l.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&o.push(n.assignTexture(e,"sheenColorMap",l.sheenColorTexture,mn)),l.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(e,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(o)}}class yE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.transmissionFactor!==void 0&&(e.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&o.push(n.assignTexture(e,"transmissionMap",l.transmissionTexture)),Promise.all(o)}}class ME{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];e.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&o.push(n.assignTexture(e,"thicknessMap",l.thicknessTexture)),e.attenuationDistance=l.attenuationDistance||1/0;const c=l.attenuationColor||[1,1,1];return e.attenuationColor=new ee().setRGB(c[0],c[1],c[2],wn),Promise.all(o)}}class SE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return e.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class bE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];e.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&o.push(n.assignTexture(e,"specularIntensityMap",l.specularTexture));const c=l.specularColorFactor||[1,1,1];return e.specularColor=new ee().setRGB(c[0],c[1],c[2],wn),l.specularColorTexture!==void 0&&o.push(n.assignTexture(e,"specularColorMap",l.specularColorTexture,mn)),Promise.all(o)}}class TE{constructor(t){this.parser=t,this.name=de.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return e.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&o.push(n.assignTexture(e,"bumpMap",l.bumpTexture)),Promise.all(o)}}class EE{constructor(t){this.parser=t,this.name=de.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Ki}extendMaterialParams(t,e){const n=this.parser,r=n.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.anisotropyStrength!==void 0&&(e.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(e.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&o.push(n.assignTexture(e,"anisotropyMap",l.anisotropyTexture)),Promise.all(o)}}class wE{constructor(t){this.parser=t,this.name=de.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,r=n.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],l=e.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,o.source,l)}}class AE{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,r=n.json,o=r.textures[t];if(!o.extensions||!o.extensions[e])return null;const l=o.extensions[e],c=r.images[l.source];let u=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(u=f)}return n.loadTextureImage(t,l.source,u)}}class RE{constructor(t){this.parser=t,this.name=de.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,r=n.json,o=r.textures[t];if(!o.extensions||!o.extensions[e])return null;const l=o.extensions[e],c=r.images[l.source];let u=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(u=f)}return n.loadTextureImage(t,l.source,u)}}class PE{constructor(t){this.name=de.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(c){const u=r.byteOffset||0,f=r.byteLength||0,p=r.count,d=r.byteStride,_=new Uint8Array(c,u,f);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(p,d,_,r.mode,r.filter).then(function(g){return g.buffer}):l.ready.then(function(){const g=new ArrayBuffer(p*d);return l.decodeGltfBuffer(new Uint8Array(g),p,d,_,r.mode,r.filter),g})})}else return null}}class CE{constructor(t){this.name=de.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=e.meshes[n.mesh];for(const f of r.primitives)if(f.mode!==qn.TRIANGLES&&f.mode!==qn.TRIANGLE_STRIP&&f.mode!==qn.TRIANGLE_FAN&&f.mode!==void 0)return null;const l=n.extensions[this.name].attributes,c=[],u={};for(const f in l)c.push(this.parser.getDependency("accessor",l[f]).then(p=>(u[f]=p,u[f])));return c.length<1?null:(c.push(this.parser.createNodeMesh(t)),Promise.all(c).then(f=>{const p=f.pop(),d=p.isGroup?p.children:[p],_=f[0].count,g=[];for(const M of d){const S=new le,y=new H,v=new Hi,P=new H(1,1,1),A=new Ax(M.geometry,M.material,_);for(let C=0;C<_;C++)u.TRANSLATION&&y.fromBufferAttribute(u.TRANSLATION,C),u.ROTATION&&v.fromBufferAttribute(u.ROTATION,C),u.SCALE&&P.fromBufferAttribute(u.SCALE,C),A.setMatrixAt(C,S.compose(y,v,P));for(const C in u)if(C==="_COLOR_0"){const D=u[C];A.instanceColor=new Lu(D.array,D.itemSize,D.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,u[C]);Ve.prototype.copy.call(A,M),this.parser.assignFinalMaterial(A),g.push(A)}return p.isGroup?(p.clear(),p.add(...g),p):g[0]}))}}const L_="glTF",na=12,Dp={JSON:1313821514,BIN:5130562};class LE{constructor(t){this.name=de.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==L_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-na,o=new DataView(t,na);let l=0;for(;l<r;){const c=o.getUint32(l,!0);l+=4;const u=o.getUint32(l,!0);if(l+=4,u===Dp.JSON){const f=new Uint8Array(t,na+l,c);this.content=n.decode(f)}else if(u===Dp.BIN){const f=na+l;this.body=t.slice(f,f+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IE{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=de.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,r=this.dracoLoader,o=t.extensions[this.name].bufferView,l=t.extensions[this.name].attributes,c={},u={},f={};for(const p in l){const d=Uu[p]||p.toLowerCase();c[d]=l[p]}for(const p in t.attributes){const d=Uu[p]||p.toLowerCase();if(l[p]!==void 0){const _=n.accessors[t.attributes[p]],g=ao[_.componentType];f[d]=g.name,u[d]=_.normalized===!0}}return e.getDependency("bufferView",o).then(function(p){return new Promise(function(d,_){r.decodeDracoFile(p,function(g){for(const M in g.attributes){const S=g.attributes[M],y=u[M];y!==void 0&&(S.normalized=y)}d(g)},c,f,wn,_)})})}}class DE{constructor(){this.name=de.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class NE{constructor(){this.name=de.KHR_MESH_QUANTIZATION}}class I_ extends Oa{constructor(t,e,n,r){super(t,e,n,r)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r*3+r;for(let l=0;l!==r;l++)e[l]=n[o+l];return e}interpolate_(t,e,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,u=c*2,f=c*3,p=r-e,d=(n-e)/p,_=d*d,g=_*d,M=t*f,S=M-f,y=-2*g+3*_,v=g-_,P=1-y,A=v-_+d;for(let C=0;C!==c;C++){const D=l[S+C+c],N=l[S+C+u]*p,U=l[M+C+c],X=l[M+C]*p;o[C]=P*D+A*N+y*U+v*X}return o}}const UE=new Hi;class OE extends I_{interpolate_(t,e,n,r){const o=super.interpolate_(t,e,n,r);return UE.fromArray(o).normalize().toArray(o),o}}const qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Np={9728:tn,9729:en,9984:$m,9985:Nl,9986:ra,9987:ds},Up={33071:Ni,33648:Xl,10497:To},xh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FE={CUBICSPLINE:void 0,LINEAR:va,STEP:ga},yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new cc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ys})),s.DefaultMaterial}function rr(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ai(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function kE(s,t,e){let n=!1,r=!1,o=!1;for(let f=0,p=t.length;f<p;f++){const d=t[f];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(o=!0),n&&r&&o)break}if(!n&&!r&&!o)return Promise.resolve(s);const l=[],c=[],u=[];for(let f=0,p=t.length;f<p;f++){const d=t[f];if(n){const _=d.POSITION!==void 0?e.getDependency("accessor",d.POSITION):s.attributes.position;l.push(_)}if(r){const _=d.NORMAL!==void 0?e.getDependency("accessor",d.NORMAL):s.attributes.normal;c.push(_)}if(o){const _=d.COLOR_0!==void 0?e.getDependency("accessor",d.COLOR_0):s.attributes.color;u.push(_)}}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const p=f[0],d=f[1],_=f[2];return n&&(s.morphAttributes.position=p),r&&(s.morphAttributes.normal=d),o&&(s.morphAttributes.color=_),s.morphTargetsRelative=!0,s})}function zE(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,r=e.length;n<r;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VE(s){let t;const e=s.extensions&&s.extensions[de.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Mh(e.attributes):t=s.indices+":"+Mh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)t+=":"+Mh(s.targets[n]);return t}function Mh(s){let t="";const e=Object.keys(s).sort();for(let n=0,r=e.length;n<r;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Ou(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const GE=new le;class WE{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new fE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,o=!1,l=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const u=c.match(/Version\/(\d+)/);r=n&&u?parseInt(u[1],10):-1,o=c.indexOf("Firefox")>-1,l=o?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||o&&l<98?this.textureLoader=new Kx(this.options.manager):this.textureLoader=new iy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new T_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const c={scene:l[0][r.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:r.asset,parser:n,userData:{}};return rr(o,c,r),Ai(c,r),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(c)})).then(function(){for(const u of c.scenes)u.updateMatrixWorld();t(c)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let r=0,o=e.length;r<o;r++){const l=e[r].joints;for(let c=0,u=l.length;c<u;c++)t[l[c]].isBone=!0}for(let r=0,o=t.length;r<o;r++){const l=t[r];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const r=n.clone(),o=(l,c)=>{const u=this.associations.get(l);u!=null&&this.associations.set(c,u);for(const[f,p]of l.children.entries())o(p,c.children[f])};return o(n,r),r.name+="_instance_"+t.uses[e]++,r}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const r=t(e[n]);if(r)return r}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let r=0;r<e.length;r++){const o=t(e[r]);o&&n.push(o)}return n}getDependency(t,e){const n=t+":"+e;let r=this.cache.get(n);if(!r){switch(t){case"scene":r=this.loadScene(e);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(e)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(e)});break;case"accessor":r=this.loadAccessor(e);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(e)});break;case"buffer":r=this.loadBuffer(e);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(e)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(e)});break;case"skin":r=this.loadSkin(e);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(e)});break;case"camera":r=this.loadCamera(e);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,e)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(n,r)}return r}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(r.map(function(o,l){return n.getDependency(t,l)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[de.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,l){n.load(da.resolveURL(e.uri,r.path),o,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const r=e.byteLength||0,o=e.byteOffset||0;return n.slice(o,o+r)})}loadAccessor(t){const e=this,n=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const l=xh[r.type],c=ao[r.componentType],u=r.normalized===!0,f=new c(r.count*l);return Promise.resolve(new Tn(f,l,u))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(l){const c=l[0],u=xh[r.type],f=ao[r.componentType],p=f.BYTES_PER_ELEMENT,d=p*u,_=r.byteOffset||0,g=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let S,y;if(g&&g!==d){const v=Math.floor(_/g),P="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let A=e.cache.get(P);A||(S=new f(c,v*g,r.count*g/p),A=new Sx(S,g/p),e.cache.add(P,A)),y=new lf(A,u,_%g/p,M)}else c===null?S=new f(r.count*u):S=new f(c,_,r.count*u),y=new Tn(S,u,M);if(r.sparse!==void 0){const v=xh.SCALAR,P=ao[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,C=r.sparse.values.byteOffset||0,D=new P(l[1],A,r.sparse.count*v),N=new f(l[2],C,r.sparse.count*u);c!==null&&(y=new Tn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let U=0,X=D.length;U<X;U++){const w=D[U];if(y.setX(w,N[U*u]),u>=2&&y.setY(w,N[U*u+1]),u>=3&&y.setZ(w,N[U*u+2]),u>=4&&y.setW(w,N[U*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(t){const e=this.json,n=this.options,o=e.textures[t].source,l=e.images[o];let c=this.textureLoader;if(l.uri){const u=n.manager.getHandler(l.uri);u!==null&&(c=u)}return this.loadTextureImage(t,o,c)}loadTextureImage(t,e,n){const r=this,o=this.json,l=o.textures[t],c=o.images[e],u=(c.uri||c.bufferView)+":"+l.sampler;if(this.textureCache[u])return this.textureCache[u];const f=this.loadImageSource(e,n).then(function(p){p.flipY=!1,p.name=l.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const _=(o.samplers||{})[l.sampler]||{};return p.magFilter=Np[_.magFilter]||en,p.minFilter=Np[_.minFilter]||ds,p.wrapS=Up[_.wrapS]||To,p.wrapT=Up[_.wrapT]||To,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==tn&&p.minFilter!==en,r.associations.set(p,{textures:t}),p}).catch(function(){return null});return this.textureCache[u]=f,f}loadImageSource(t,e){const n=this,r=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const l=r.images[t],c=self.URL||self.webkitURL;let u=l.uri||"",f=!1;if(l.bufferView!==void 0)u=n.getDependency("bufferView",l.bufferView).then(function(d){f=!0;const _=new Blob([d],{type:l.mimeType});return u=c.createObjectURL(_),u});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const p=Promise.resolve(u).then(function(d){return new Promise(function(_,g){let M=_;e.isImageBitmapLoader===!0&&(M=function(S){const y=new un(S);y.needsUpdate=!0,_(y)}),e.load(da.resolveURL(d,o.path),M,void 0,g)})}).then(function(d){return f===!0&&c.revokeObjectURL(u),Ai(d,l),d.userData.mimeType=l.mimeType||HE(l.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),d});return this.sourceCache[t]=p,p}assignTexture(t,e,n,r){const o=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),o.extensions[de.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[de.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const u=o.associations.get(l);l=o.extensions[de.KHR_TEXTURE_TRANSFORM].extendTexture(l,c),o.associations.set(l,u)}}return r!==void 0&&(l.colorSpace=r),t[e]=l,l})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const r=e.attributes.tangent===void 0,o=e.attributes.color!==void 0,l=e.attributes.normal===void 0;if(t.isPoints){const c="PointsMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new y_,ki.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(c,u)),n=u}else if(t.isLine){const c="LineBasicMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new x_,ki.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(c,u)),n=u}if(r||o||l){let c="ClonedMaterial:"+n.uuid+":";r&&(c+="derivative-tangents:"),o&&(c+="vertex-colors:"),l&&(c+="flat-shading:");let u=this.cache.get(c);u||(u=n.clone(),o&&(u.vertexColors=!0),l&&(u.flatShading=!0),r&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(c,u),this.associations.set(u,this.associations.get(n))),n=u}t.material=n}getMaterialType(){return cc}loadMaterial(t){const e=this,n=this.json,r=this.extensions,o=n.materials[t];let l;const c={},u=o.extensions||{},f=[];if(u[de.KHR_MATERIALS_UNLIT]){const d=r[de.KHR_MATERIALS_UNLIT];l=d.getMaterialType(),f.push(d.extendParams(c,o,e))}else{const d=o.pbrMetallicRoughness||{};if(c.color=new ee(1,1,1),c.opacity=1,Array.isArray(d.baseColorFactor)){const _=d.baseColorFactor;c.color.setRGB(_[0],_[1],_[2],wn),c.opacity=_[3]}d.baseColorTexture!==void 0&&f.push(e.assignTexture(c,"map",d.baseColorTexture,mn)),c.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,c.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(f.push(e.assignTexture(c,"metalnessMap",d.metallicRoughnessTexture)),f.push(e.assignTexture(c,"roughnessMap",d.metallicRoughnessTexture))),l=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(t)}),f.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(t,c)})))}o.doubleSided===!0&&(c.side=Di);const p=o.alphaMode||yh.OPAQUE;if(p===yh.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===yh.MASK&&(c.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&l!==fr&&(f.push(e.assignTexture(c,"normalMap",o.normalTexture)),c.normalScale=new $t(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;c.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&l!==fr&&(f.push(e.assignTexture(c,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&l!==fr){const d=o.emissiveFactor;c.emissive=new ee().setRGB(d[0],d[1],d[2],wn)}return o.emissiveTexture!==void 0&&l!==fr&&f.push(e.assignTexture(c,"emissiveMap",o.emissiveTexture,mn)),Promise.all(f).then(function(){const d=new l(c);return o.name&&(d.name=o.name),Ai(d,o),e.associations.set(d,{materials:t}),o.extensions&&rr(r,d,o),d})}createUniqueName(t){const e=Ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,r=this.primitiveCache;function o(c){return n[de.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,e).then(function(u){return Op(u,c,e)})}const l=[];for(let c=0,u=t.length;c<u;c++){const f=t[c],p=VE(f),d=r[p];if(d)l.push(d.promise);else{let _;f.extensions&&f.extensions[de.KHR_DRACO_MESH_COMPRESSION]?_=o(f):_=Op(new ni,f,e),r[p]={primitive:f,promise:_},l.push(_)}}return Promise.all(l)}loadMesh(t){const e=this,n=this.json,r=this.extensions,o=n.meshes[t],l=o.primitives,c=[];for(let u=0,f=l.length;u<f;u++){const p=l[u].material===void 0?BE(this.cache):this.getDependency("material",l[u].material);c.push(p)}return c.push(e.loadGeometries(l)),Promise.all(c).then(function(u){const f=u.slice(0,u.length-1),p=u[u.length-1],d=[];for(let g=0,M=p.length;g<M;g++){const S=p[g],y=l[g];let v;const P=f[g];if(y.mode===qn.TRIANGLES||y.mode===qn.TRIANGLE_STRIP||y.mode===qn.TRIANGLE_FAN||y.mode===void 0)v=o.isSkinnedMesh===!0?new Tx(S,P):new Vn(S,P),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),y.mode===qn.TRIANGLE_STRIP?v.geometry=Ip(v.geometry,r_):y.mode===qn.TRIANGLE_FAN&&(v.geometry=Ip(v.geometry,Pu));else if(y.mode===qn.LINES)v=new Lx(S,P);else if(y.mode===qn.LINE_STRIP)v=new ff(S,P);else if(y.mode===qn.LINE_LOOP)v=new Ix(S,P);else if(y.mode===qn.POINTS)v=new Dx(S,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(v.geometry.morphAttributes).length>0&&zE(v,o),v.name=e.createUniqueName(o.name||"mesh_"+t),Ai(v,o),y.extensions&&rr(r,v,y),e.assignFinalMaterial(v),d.push(v)}for(let g=0,M=d.length;g<M;g++)e.associations.set(d[g],{meshes:t,primitives:g});if(d.length===1)return o.extensions&&rr(r,d[0],o),d[0];const _=new dr;o.extensions&&rr(r,_,o),e.associations.set(_,{meshes:t});for(let g=0,M=d.length;g<M;g++)_.add(d[g]);return _})}loadCamera(t){let e;const n=this.json.cameras[t],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new bn(l_.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(e=new uc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ai(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let r=0,o=e.joints.length;r<o;r++)n.push(this._loadNodeShallow(e.joints[r]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const o=r.pop(),l=r,c=[],u=[];for(let f=0,p=l.length;f<p;f++){const d=l[f];if(d){c.push(d);const _=new le;o!==null&&_.fromArray(o.array,f*16),u.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[f])}return new hf(c,u)})}loadAnimation(t){const e=this.json,n=this,r=e.animations[t],o=r.name?r.name:"animation_"+t,l=[],c=[],u=[],f=[],p=[];for(let d=0,_=r.channels.length;d<_;d++){const g=r.channels[d],M=r.samplers[g.sampler],S=g.target,y=S.node,v=r.parameters!==void 0?r.parameters[M.input]:M.input,P=r.parameters!==void 0?r.parameters[M.output]:M.output;S.node!==void 0&&(l.push(this.getDependency("node",y)),c.push(this.getDependency("accessor",v)),u.push(this.getDependency("accessor",P)),f.push(M),p.push(S))}return Promise.all([Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(p)]).then(function(d){const _=d[0],g=d[1],M=d[2],S=d[3],y=d[4],v=[];for(let A=0,C=_.length;A<C;A++){const D=_[A],N=g[A],U=M[A],X=S[A],w=y[A];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const R=n._createAnimationTracks(D,N,U,X,w);if(R)for(let F=0;F<R.length;F++)v.push(R[F])}const P=new Gx(o,void 0,v);return Ai(P,r),P})}createNodeMesh(t){const e=this.json,n=this,r=e.nodes[t];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(o){const l=n._getNodeRef(n.meshCache,r.mesh,o);return r.weights!==void 0&&l.traverse(function(c){if(c.isMesh)for(let u=0,f=r.weights.length;u<f;u++)c.morphTargetInfluences[u]=r.weights[u]}),l})}loadNode(t){const e=this.json,n=this,r=e.nodes[t],o=n._loadNodeShallow(t),l=[],c=r.children||[];for(let f=0,p=c.length;f<p;f++)l.push(n.getDependency("node",c[f]));const u=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([o,Promise.all(l),u]).then(function(f){const p=f[0],d=f[1],_=f[2];_!==null&&p.traverse(function(g){g.isSkinnedMesh&&g.bind(_,GE)});for(let g=0,M=d.length;g<M;g++)p.add(d[g]);return p})}_loadNodeShallow(t){const e=this.json,n=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=e.nodes[t],l=o.name?r.createUniqueName(o.name):"",c=[],u=r._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(t)});return u&&c.push(u),o.camera!==void 0&&c.push(r.getDependency("camera",o.camera).then(function(f){return r._getNodeRef(r.cameraCache,o.camera,f)})),r._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(t)}).forEach(function(f){c.push(f)}),this.nodeCache[t]=Promise.all(c).then(function(f){let p;if(o.isBone===!0?p=new v_:f.length>1?p=new dr:f.length===1?p=f[0]:p=new Ve,p!==f[0])for(let d=0,_=f.length;d<_;d++)p.add(f[d]);if(o.name&&(p.userData.name=o.name,p.name=l),Ai(p,o),o.extensions&&rr(n,p,o),o.matrix!==void 0){const d=new le;d.fromArray(o.matrix),p.applyMatrix4(d)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);if(!r.associations.has(p))r.associations.set(p,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){const d=r.associations.get(p);r.associations.set(p,{...d})}return r.associations.get(p).nodes=t,p}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],r=this,o=new dr;n.name&&(o.name=r.createUniqueName(n.name)),Ai(o,n),n.extensions&&rr(e,o,n);const l=n.nodes||[],c=[];for(let u=0,f=l.length;u<f;u++)c.push(r.getDependency("node",l[u]));return Promise.all(c).then(function(u){for(let p=0,d=u.length;p<d;p++)o.add(u[p]);const f=p=>{const d=new Map;for(const[_,g]of r.associations)(_ instanceof ki||_ instanceof un)&&d.set(_,g);return p.traverse(_=>{const g=r.associations.get(_);g!=null&&d.set(_,g)}),d};return r.associations=f(o),o})}_createAnimationTracks(t,e,n,r,o){const l=[],c=t.name?t.name:t.uuid,u=[];Ns[o.path]===Ns.weights?t.traverse(function(_){_.morphTargetInfluences&&u.push(_.name?_.name:_.uuid)}):u.push(c);let f;switch(Ns[o.path]){case Ns.weights:f=Ro;break;case Ns.rotation:f=Po;break;case Ns.translation:case Ns.scale:f=Co;break;default:switch(n.itemSize){case 1:f=Ro;break;case 2:case 3:default:f=Co;break}break}const p=r.interpolation!==void 0?FE[r.interpolation]:va,d=this._getArrayFromAccessor(n);for(let _=0,g=u.length;_<g;_++){const M=new f(u[_]+"."+Ns[o.path],e.array,d,p);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),l.push(M)}return l}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ou(e.constructor),r=new Float32Array(e.length);for(let o=0,l=e.length;o<l;o++)r[o]=e[o]*n;e=r}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const r=this instanceof Po?OE:I_;return new r(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XE(s,t,e){const n=t.attributes,r=new Yi;if(n.POSITION!==void 0){const c=e.json.accessors[n.POSITION],u=c.min,f=c.max;if(u!==void 0&&f!==void 0){if(r.set(new H(u[0],u[1],u[2]),new H(f[0],f[1],f[2])),c.normalized){const p=Ou(ao[c.componentType]);r.min.multiplyScalar(p),r.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const c=new H,u=new H;for(let f=0,p=o.length;f<p;f++){const d=o[f];if(d.POSITION!==void 0){const _=e.json.accessors[d.POSITION],g=_.min,M=_.max;if(g!==void 0&&M!==void 0){if(u.setX(Math.max(Math.abs(g[0]),Math.abs(M[0]))),u.setY(Math.max(Math.abs(g[1]),Math.abs(M[1]))),u.setZ(Math.max(Math.abs(g[2]),Math.abs(M[2]))),_.normalized){const S=Ou(ao[_.componentType]);u.multiplyScalar(S)}c.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}s.boundingBox=r;const l=new ji;r.getCenter(l.center),l.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=l}function Op(s,t,e){const n=t.attributes,r=[];function o(l,c){return e.getDependency("accessor",l).then(function(u){s.setAttribute(c,u)})}for(const l in n){const c=Uu[l]||l.toLowerCase();c in s.attributes||r.push(o(n[l],c))}if(t.indices!==void 0&&!s.index){const l=e.getDependency("accessor",t.indices).then(function(c){s.setIndex(c)});r.push(l)}return ge.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ge.workingColorSpace}" not supported.`),Ai(s,t),XE(s,t,e),Promise.all(r).then(function(){return t.targets!==void 0?kE(s,t.targets,e):s})}const Fp={type:"change"},_f={type:"start"},D_={type:"end"},Pl=new Na,Bp=new Us,ZE=Math.cos(70*l_.DEG2RAD),$e=new H,Pn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6;class qE extends py{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:so.ROTATE,MIDDLE:so.DOLLY,RIGHT:so.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Hi,this._lastTargetPosition=new H,this._quat=new Hi().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ap,this._sphericalDelta=new ap,this._scale=1,this._panOffset=new H,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new H,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jE.bind(this),this._onPointerDown=YE.bind(this),this._onPointerUp=KE.bind(this),this._onContextMenu=iw.bind(this),this._onMouseWheel=QE.bind(this),this._onKeyDown=tw.bind(this),this._onTouchStart=ew.bind(this),this._onTouchMove=nw.bind(this),this._onMouseDown=JE.bind(this),this._onMouseMove=$E.bind(this),this._interceptControlDown=sw.bind(this),this._interceptControlUp=rw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fp),this.update(),this.state=Ie.NONE}update(t=null){const e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),r<-Math.PI?r+=Pn:r>Math.PI&&(r-=Pn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=$e.length();l=this._clampDistance(c*this._scale);const u=c-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;const f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Pl.origin.copy(this.object.position),Pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pl.direction))<ZE?this.object.lookAt(this.target):(Bp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pl.intersectPlane(Bp,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(Fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$e.copy(r).sub(this.target);let o=$e.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,o=e-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function YE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function jE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function KE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(D_),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function JE(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case so.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ie.DOLLY;break;case so.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ie.ROTATE}break;case so.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(_f)}function $E(s){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function QE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(s.preventDefault(),this.dispatchEvent(_f),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(D_))}function tw(s){this.enabled!==!1&&this._handleKeyDown(s)}function ew(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case no.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ie.TOUCH_ROTATE;break;case no.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case no.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ie.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(_f)}function nw(s){switch(this._trackPointer(s),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ie.NONE}}function iw(s){this.enabled!==!1&&s.preventDefault()}function sw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ow=Zs('<button class="activate-btn svelte-ygbm3g">Explorer le modèle</button>'),aw=Zs('<div class="loading-overlay svelte-ygbm3g"><div class="spinner svelte-ygbm3g"></div> <p>Chargement en cours...</p></div>'),lw=Zs('<div class="viewer-container svelte-ygbm3g"><!> <!> <div class="viewer svelte-ygbm3g"></div> <button class="back-btn svelte-ygbm3g">← Retour</button></div>');function N_(s,t){if(new.target)return ic({component:N_,...s});Pa(t,!1);let e=Mr(),n,r=Mr(!0),o=Mr(!1);const l=Xv();function c(y){je(o,y),n&&(n.enabled=y,n.enableZoom=y,n.enableRotate=y)}zm(()=>{const y=new Mx;y.background=new ee(15989483);const v=new bn(30,1,.01,1e12);v.position.set(0,1,1);const P=new hE({antialias:!0,powerPreference:"high-performance"});P.setPixelRatio(Math.min(2,window.devicePixelRatio)),De(e).appendChild(P.domElement),P.setSize(De(e).clientWidth,De(e).clientHeight),y.add(new ny(16777215,.7));const A=new E_(16777215,.6);A.position.set(50,50,50),y.add(A),n=new qE(v,P.domElement),n.target.set(0,0,0),n.enableDamping=!0,n.dampingFactor=.05,n.enabled=!1,n.enableZoom=!1,n.enableRotate=!1,n.enablePan=!1,new uE().load("/nyamusisi/data/point.glb",N=>{const U=N.scene;y.add(U),U.traverse(q=>{q.isMesh&&(q.material=new cc({vertexColors:!!q.geometry.attributes.color,color:16777215}))});const X=new Yi().setFromObject(U),w=X.getCenter(new H),R=X.getSize(new H),F=Math.max(R.x,R.y,R.z);U.position.sub(w),v.near=F/1e4,v.far=F*1e4,v.updateProjectionMatrix(),v.position.set(F*.8,F*.8,F*.6),v.lookAt(0,0,0),n.minDistance=F*.03,n.maxDistance=F*3,n.update(),je(r,!1)},N=>{N.total&&console.log(`GLB ${(N.loaded/N.total*100).toFixed(0)}% loaded`)},N=>{console.error("GLB load error",N),je(r,!1)});const D=()=>{const N=De(e).clientWidth,U=De(e).clientHeight;N&&U&&(v.aspect=N/U,v.updateProjectionMatrix(),P.setSize(N,U))};window.addEventListener("resize",D),D(),P.setAnimationLoop(()=>{n.update(),P.render(y,v)})});var u={$set:oc,$on:(y,v)=>rc(t,y,v)};sc();var f=lw(),p=mi(f);{var d=y=>{var v=ow();hr("click",v,()=>c(!0)),Gs(y,v)};Bh(p,y=>{De(o)||y(d)})}var _=Kn(p,2);{var g=y=>{var v=aw();Gs(y,v)};Bh(_,y=>{De(r)&&y(g)})}var M=Kn(_,2);Hm(M,y=>je(e,y),()=>De(e));var S=Kn(M,2);return pi(f),hr("click",S,()=>l("close")),Gs(s,f),Ca(u)}function cw(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var aa={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var hw=aa.exports,kp;function uw(){return kp||(kp=1,(function(s,t){(function(e,n){n(t)})(hw,(function(e){var n="1.9.4";function r(i){var a,h,m,x;for(h=1,m=arguments.length;h<m;h++){x=arguments[h];for(a in x)i[a]=x[a]}return i}var o=Object.create||(function(){function i(){}return function(a){return i.prototype=a,new i}})();function l(i,a){var h=Array.prototype.slice;if(i.bind)return i.bind.apply(i,h.call(arguments,1));var m=h.call(arguments,2);return function(){return i.apply(a,m.length?m.concat(h.call(arguments)):arguments)}}var c=0;function u(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function f(i,a,h){var m,x,T,O;return O=function(){m=!1,x&&(T.apply(h,x),x=!1)},T=function(){m?x=arguments:(i.apply(h,arguments),setTimeout(O,a),m=!0)},T}function p(i,a,h){var m=a[1],x=a[0],T=m-x;return i===m&&h?i:((i-x)%T+T)%T+x}function d(){return!1}function _(i,a){if(a===!1)return i;var h=Math.pow(10,a===void 0?6:a);return Math.round(i*h)/h}function g(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function M(i){return g(i).split(/\s+/)}function S(i,a){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?o(i.options):{});for(var h in a)i.options[h]=a[h];return i.options}function y(i,a,h){var m=[];for(var x in i)m.push(encodeURIComponent(h?x.toUpperCase():x)+"="+encodeURIComponent(i[x]));return(!a||a.indexOf("?")===-1?"?":"&")+m.join("&")}var v=/\{ *([\w_ -]+) *\}/g;function P(i,a){return i.replace(v,function(h,m){var x=a[m];if(x===void 0)throw new Error("No value provided for variable "+h);return typeof x=="function"&&(x=x(a)),x})}var A=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function C(i,a){for(var h=0;h<i.length;h++)if(i[h]===a)return h;return-1}var D="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function N(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var U=0;function X(i){var a=+new Date,h=Math.max(0,16-(a-U));return U=a+h,window.setTimeout(i,h)}var w=window.requestAnimationFrame||N("RequestAnimationFrame")||X,R=window.cancelAnimationFrame||N("CancelAnimationFrame")||N("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function F(i,a,h){if(h&&w===X)i.call(a);else return w.call(window,l(i,a))}function q(i){i&&R.call(window,i)}var Q={__proto__:null,extend:r,create:o,bind:l,get lastId(){return c},stamp:u,throttle:f,wrapNum:p,falseFn:d,formatNum:_,trim:g,splitWords:M,setOptions:S,getParamString:y,template:P,isArray:A,indexOf:C,emptyImageUrl:D,requestFn:w,cancelFn:R,requestAnimFrame:F,cancelAnimFrame:q};function rt(){}rt.extend=function(i){var a=function(){S(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},h=a.__super__=this.prototype,m=o(h);m.constructor=a,a.prototype=m;for(var x in this)Object.prototype.hasOwnProperty.call(this,x)&&x!=="prototype"&&x!=="__super__"&&(a[x]=this[x]);return i.statics&&r(a,i.statics),i.includes&&(ot(i.includes),r.apply(null,[m].concat(i.includes))),r(m,i),delete m.statics,delete m.includes,m.options&&(m.options=h.options?o(h.options):{},r(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){h.callInitHooks&&h.callInitHooks.call(this),this._initHooksCalled=!0;for(var T=0,O=m._initHooks.length;T<O;T++)m._initHooks[T].call(this)}},a},rt.include=function(i){var a=this.prototype.options;return r(this.prototype,i),i.options&&(this.prototype.options=a,this.mergeOptions(i.options)),this},rt.mergeOptions=function(i){return r(this.prototype.options,i),this},rt.addInitHook=function(i){var a=Array.prototype.slice.call(arguments,1),h=typeof i=="function"?i:function(){this[i].apply(this,a)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(h),this};function ot(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=A(i)?i:[i];for(var a=0;a<i.length;a++)i[a]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var et={on:function(i,a,h){if(typeof i=="object")for(var m in i)this._on(m,i[m],a);else{i=M(i);for(var x=0,T=i.length;x<T;x++)this._on(i[x],a,h)}return this},off:function(i,a,h){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],a);else{i=M(i);for(var x=arguments.length===1,T=0,O=i.length;T<O;T++)x?this._off(i[T]):this._off(i[T],a,h)}return this},_on:function(i,a,h,m){if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}if(this._listens(i,a,h)===!1){h===this&&(h=void 0);var x={fn:a,ctx:h};m&&(x.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(x)}},_off:function(i,a,h){var m,x,T;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(x=0,T=m.length;x<T;x++)m[x].fn=d;delete this._events[i];return}if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}var O=this._listens(i,a,h);if(O!==!1){var W=m[O];this._firingCount&&(W.fn=d,this._events[i]=m=m.slice()),m.splice(O,1)}}},fire:function(i,a,h){if(!this.listens(i,h))return this;var m=r({},a,{type:i,target:this,sourceTarget:a&&a.sourceTarget||this});if(this._events){var x=this._events[i];if(x){this._firingCount=this._firingCount+1||1;for(var T=0,O=x.length;T<O;T++){var W=x[T],J=W.fn;W.once&&this.off(i,J,W.ctx),J.call(W.ctx||this,m)}this._firingCount--}}return h&&this._propagateEvent(m),this},listens:function(i,a,h,m){typeof i!="string"&&console.warn('"string" type argument expected');var x=a;typeof a!="function"&&(m=!!a,x=void 0,h=void 0);var T=this._events&&this._events[i];if(T&&T.length&&this._listens(i,x,h)!==!1)return!0;if(m){for(var O in this._eventParents)if(this._eventParents[O].listens(i,a,h,m))return!0}return!1},_listens:function(i,a,h){if(!this._events)return!1;var m=this._events[i]||[];if(!a)return!!m.length;h===this&&(h=void 0);for(var x=0,T=m.length;x<T;x++)if(m[x].fn===a&&m[x].ctx===h)return x;return!1},once:function(i,a,h){if(typeof i=="object")for(var m in i)this._on(m,i[m],a,!0);else{i=M(i);for(var x=0,T=i.length;x<T;x++)this._on(i[x],a,h,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[u(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[u(i)],this},_propagateEvent:function(i){for(var a in this._eventParents)this._eventParents[a].fire(i.type,r({layer:i.target,propagatedFrom:i.target},i),!0)}};et.addEventListener=et.on,et.removeEventListener=et.clearAllEventListeners=et.off,et.addOneTimeEventListener=et.once,et.fireEvent=et.fire,et.hasEventListeners=et.listens;var j=rt.extend(et);function K(i,a,h){this.x=h?Math.round(i):i,this.y=h?Math.round(a):a}var Tt=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};K.prototype={clone:function(){return new K(this.x,this.y)},add:function(i){return this.clone()._add(st(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(st(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new K(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new K(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Tt(this.x),this.y=Tt(this.y),this},distanceTo:function(i){i=st(i);var a=i.x-this.x,h=i.y-this.y;return Math.sqrt(a*a+h*h)},equals:function(i){return i=st(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=st(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function st(i,a,h){return i instanceof K?i:A(i)?new K(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new K(i.x,i.y):new K(i,a,h)}function dt(i,a){if(i)for(var h=a?[i,a]:i,m=0,x=h.length;m<x;m++)this.extend(h[m])}dt.prototype={extend:function(i){var a,h;if(!i)return this;if(i instanceof K||typeof i[0]=="number"||"x"in i)a=h=st(i);else if(i=Wt(i),a=i.min,h=i.max,!a||!h)return this;return!this.min&&!this.max?(this.min=a.clone(),this.max=h.clone()):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(h.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(h.y,this.max.y)),this},getCenter:function(i){return st((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return st(this.min.x,this.max.y)},getTopRight:function(){return st(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var a,h;return typeof i[0]=="number"||i instanceof K?i=st(i):i=Wt(i),i instanceof dt?(a=i.min,h=i.max):a=h=i,a.x>=this.min.x&&h.x<=this.max.x&&a.y>=this.min.y&&h.y<=this.max.y},intersects:function(i){i=Wt(i);var a=this.min,h=this.max,m=i.min,x=i.max,T=x.x>=a.x&&m.x<=h.x,O=x.y>=a.y&&m.y<=h.y;return T&&O},overlaps:function(i){i=Wt(i);var a=this.min,h=this.max,m=i.min,x=i.max,T=x.x>a.x&&m.x<h.x,O=x.y>a.y&&m.y<h.y;return T&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var a=this.min,h=this.max,m=Math.abs(a.x-h.x)*i,x=Math.abs(a.y-h.y)*i;return Wt(st(a.x-m,a.y-x),st(h.x+m,h.y+x))},equals:function(i){return i?(i=Wt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function Wt(i,a){return!i||i instanceof dt?i:new dt(i,a)}function Ht(i,a){if(i)for(var h=a?[i,a]:i,m=0,x=h.length;m<x;m++)this.extend(h[m])}Ht.prototype={extend:function(i){var a=this._southWest,h=this._northEast,m,x;if(i instanceof Gt)m=i,x=i;else if(i instanceof Ht){if(m=i._southWest,x=i._northEast,!m||!x)return this}else return i?this.extend(Z(i)||Qt(i)):this;return!a&&!h?(this._southWest=new Gt(m.lat,m.lng),this._northEast=new Gt(x.lat,x.lng)):(a.lat=Math.min(m.lat,a.lat),a.lng=Math.min(m.lng,a.lng),h.lat=Math.max(x.lat,h.lat),h.lng=Math.max(x.lng,h.lng)),this},pad:function(i){var a=this._southWest,h=this._northEast,m=Math.abs(a.lat-h.lat)*i,x=Math.abs(a.lng-h.lng)*i;return new Ht(new Gt(a.lat-m,a.lng-x),new Gt(h.lat+m,h.lng+x))},getCenter:function(){return new Gt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Gt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Gt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof Gt||"lat"in i?i=Z(i):i=Qt(i);var a=this._southWest,h=this._northEast,m,x;return i instanceof Ht?(m=i.getSouthWest(),x=i.getNorthEast()):m=x=i,m.lat>=a.lat&&x.lat<=h.lat&&m.lng>=a.lng&&x.lng<=h.lng},intersects:function(i){i=Qt(i);var a=this._southWest,h=this._northEast,m=i.getSouthWest(),x=i.getNorthEast(),T=x.lat>=a.lat&&m.lat<=h.lat,O=x.lng>=a.lng&&m.lng<=h.lng;return T&&O},overlaps:function(i){i=Qt(i);var a=this._southWest,h=this._northEast,m=i.getSouthWest(),x=i.getNorthEast(),T=x.lat>a.lat&&m.lat<h.lat,O=x.lng>a.lng&&m.lng<h.lng;return T&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,a){return i?(i=Qt(i),this._southWest.equals(i.getSouthWest(),a)&&this._northEast.equals(i.getNorthEast(),a)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Qt(i,a){return i instanceof Ht?i:new Ht(i,a)}function Gt(i,a,h){if(isNaN(i)||isNaN(a))throw new Error("Invalid LatLng object: ("+i+", "+a+")");this.lat=+i,this.lng=+a,h!==void 0&&(this.alt=+h)}Gt.prototype={equals:function(i,a){if(!i)return!1;i=Z(i);var h=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return h<=(a===void 0?1e-9:a)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return Et.distance(this,Z(i))},wrap:function(){return Et.wrapLatLng(this)},toBounds:function(i){var a=180*i/40075017,h=a/Math.cos(Math.PI/180*this.lat);return Qt([this.lat-a,this.lng-h],[this.lat+a,this.lng+h])},clone:function(){return new Gt(this.lat,this.lng,this.alt)}};function Z(i,a,h){return i instanceof Gt?i:A(i)&&typeof i[0]!="object"?i.length===3?new Gt(i[0],i[1],i[2]):i.length===2?new Gt(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new Gt(i.lat,"lng"in i?i.lng:i.lon,i.alt):a===void 0?null:new Gt(i,a,h)}var lt={latLngToPoint:function(i,a){var h=this.projection.project(i),m=this.scale(a);return this.transformation._transform(h,m)},pointToLatLng:function(i,a){var h=this.scale(a),m=this.transformation.untransform(i,h);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var a=this.projection.bounds,h=this.scale(i),m=this.transformation.transform(a.min,h),x=this.transformation.transform(a.max,h);return new dt(m,x)},infinite:!1,wrapLatLng:function(i){var a=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,h=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new Gt(h,a,m)},wrapLatLngBounds:function(i){var a=i.getCenter(),h=this.wrapLatLng(a),m=a.lat-h.lat,x=a.lng-h.lng;if(m===0&&x===0)return i;var T=i.getSouthWest(),O=i.getNorthEast(),W=new Gt(T.lat-m,T.lng-x),J=new Gt(O.lat-m,O.lng-x);return new Ht(W,J)}},Et=r({},lt,{wrapLng:[-180,180],R:6371e3,distance:function(i,a){var h=Math.PI/180,m=i.lat*h,x=a.lat*h,T=Math.sin((a.lat-i.lat)*h/2),O=Math.sin((a.lng-i.lng)*h/2),W=T*T+Math.cos(m)*Math.cos(x)*O*O,J=2*Math.atan2(Math.sqrt(W),Math.sqrt(1-W));return this.R*J}}),te=6378137,It={R:te,MAX_LATITUDE:85.0511287798,project:function(i){var a=Math.PI/180,h=this.MAX_LATITUDE,m=Math.max(Math.min(h,i.lat),-h),x=Math.sin(m*a);return new K(this.R*i.lng*a,this.R*Math.log((1+x)/(1-x))/2)},unproject:function(i){var a=180/Math.PI;return new Gt((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*a,i.x*a/this.R)},bounds:(function(){var i=te*Math.PI;return new dt([-i,-i],[i,i])})()};function pe(i,a,h,m){if(A(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=a,this._c=h,this._d=m}pe.prototype={transform:function(i,a){return this._transform(i.clone(),a)},_transform:function(i,a){return a=a||1,i.x=a*(this._a*i.x+this._b),i.y=a*(this._c*i.y+this._d),i},untransform:function(i,a){return a=a||1,new K((i.x/a-this._b)/this._a,(i.y/a-this._d)/this._c)}};function ke(i,a,h,m){return new pe(i,a,h,m)}var fe=r({},Et,{code:"EPSG:3857",projection:It,transformation:(function(){var i=.5/(Math.PI*It.R);return ke(i,.5,-i,.5)})()}),be=r({},fe,{code:"EPSG:900913"});function we(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ne(i,a){var h="",m,x,T,O,W,J;for(m=0,T=i.length;m<T;m++){for(W=i[m],x=0,O=W.length;x<O;x++)J=W[x],h+=(x?"L":"M")+J.x+" "+J.y;h+=a?Bt.svg?"z":"x":""}return h||"M0 0"}var ze=document.documentElement.style,B="ActiveXObject"in window,He=B&&!document.addEventListener,Me="msLaunchUri"in navigator&&!("documentMode"in document),Ae=Hn("webkit"),Ut=Hn("android"),I=Hn("android 2")||Hn("android 3"),b=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),z=Ut&&Hn("Google")&&b<537&&!("AudioNode"in window),it=!!window.opera,ct=!Me&&Hn("chrome"),nt=Hn("gecko")&&!Ae&&!it&&!B,Ft=!ct&&Hn("safari"),vt=Hn("phantom"),Dt="OTransition"in ze,Xt=navigator.platform.indexOf("Win")===0,ut=B&&"transition"in ze,xt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!I,Lt="MozPerspective"in ze,Ot=!window.L_DISABLE_3D&&(ut||xt||Lt)&&!Dt&&!vt,_t=typeof orientation<"u"||Hn("mobile"),re=_t&&Ae,k=_t&&xt,St=!window.PointerEvent&&window.MSPointerEvent,mt=!!(window.PointerEvent||St),At="ontouchstart"in window||!!window.TouchEvent,ft=!window.L_NO_TOUCH&&(At||mt),at=_t&&it,yt=_t&&nt,jt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Le=(function(){var i=!1;try{var a=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",d,a),window.removeEventListener("testPassiveEventSupport",d,a)}catch{}return i})(),Te=(function(){return!!document.createElement("canvas").getContext})(),An=!!(document.createElementNS&&we("svg").createSVGRect),ii=!!An&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),pc=!An&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var a=i.firstChild;return a.style.behavior="url(#default#VML)",a&&typeof a.adj=="object"}catch{return!1}})(),Fa=navigator.platform.indexOf("Mac")===0,Fo=navigator.platform.indexOf("Linux")===0;function Hn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Bt={ie:B,ielt9:He,edge:Me,webkit:Ae,android:Ut,android23:I,androidStock:z,opera:it,chrome:ct,gecko:nt,safari:Ft,phantom:vt,opera12:Dt,win:Xt,ie3d:ut,webkit3d:xt,gecko3d:Lt,any3d:Ot,mobile:_t,mobileWebkit:re,mobileWebkit3d:k,msPointer:St,pointer:mt,touch:ft,touchNative:At,mobileOpera:at,mobileGecko:yt,retina:jt,passiveEvents:Le,canvas:Te,svg:An,vml:pc,inlineSvg:ii,mac:Fa,linux:Fo},Bo=Bt.msPointer?"MSPointerDown":"pointerdown",Si=Bt.msPointer?"MSPointerMove":"pointermove",Ar=Bt.msPointer?"MSPointerUp":"pointerup",ko=Bt.msPointer?"MSPointerCancel":"pointercancel",Rr={touchstart:Bo,touchmove:Si,touchend:Ar,touchcancel:ko},qs={touchstart:vc,touchmove:Pr,touchend:Pr,touchcancel:Pr},Ji={},Ys=!1;function Ba(i,a,h){return a==="touchstart"&&gc(),qs[a]?(h=qs[a].bind(this,h),i.addEventListener(Rr[a],h,!1),h):(console.warn("wrong event specified:",a),d)}function ka(i,a,h){if(!Rr[a]){console.warn("wrong event specified:",a);return}i.removeEventListener(Rr[a],h,!1)}function mc(i){Ji[i.pointerId]=i}function _c(i){Ji[i.pointerId]&&(Ji[i.pointerId]=i)}function za(i){delete Ji[i.pointerId]}function gc(){Ys||(document.addEventListener(Bo,mc,!0),document.addEventListener(Si,_c,!0),document.addEventListener(Ar,za,!0),document.addEventListener(ko,za,!0),Ys=!0)}function Pr(i,a){if(a.pointerType!==(a.MSPOINTER_TYPE_MOUSE||"mouse")){a.touches=[];for(var h in Ji)a.touches.push(Ji[h]);a.changedTouches=[a],i(a)}}function vc(i,a){a.MSPOINTER_TYPE_TOUCH&&a.pointerType===a.MSPOINTER_TYPE_TOUCH&&fn(a),Pr(i,a)}function E(i){var a={},h,m;for(m in i)h=i[m],a[m]=h&&h.bind?h.bind(i):h;return i=a,a.type="dblclick",a.detail=2,a.isTrusted=!1,a._simulated=!0,a}var V=200;function $(i,a){i.addEventListener("dblclick",a);var h=0,m;function x(T){if(T.detail!==1){m=T.detail;return}if(!(T.pointerType==="mouse"||T.sourceCapabilities&&!T.sourceCapabilities.firesTouchEvents)){var O=yf(T);if(!(O.some(function(J){return J instanceof HTMLLabelElement&&J.attributes.for})&&!O.some(function(J){return J instanceof HTMLInputElement||J instanceof HTMLSelectElement}))){var W=Date.now();W-h<=V?(m++,m===2&&a(E(T))):m=1,h=W}}}return i.addEventListener("click",x),{dblclick:a,simDblclick:x}}function Y(i,a){i.removeEventListener("dblclick",a.dblclick),i.removeEventListener("click",a.simDblclick)}var G=si(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),gt=si(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Pt=gt==="webkitTransition"||gt==="OTransition"?gt+"End":"transitionend";function Mt(i){return typeof i=="string"?document.getElementById(i):i}function Ct(i,a){var h=i.style[a]||i.currentStyle&&i.currentStyle[a];if((!h||h==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);h=m?m[a]:null}return h==="auto"?null:h}function pt(i,a,h){var m=document.createElement(i);return m.className=a||"",h&&h.appendChild(m),m}function wt(i){var a=i.parentNode;a&&a.removeChild(i)}function kt(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Kt(i){var a=i.parentNode;a&&a.lastChild!==i&&a.appendChild(i)}function _e(i){var a=i.parentNode;a&&a.firstChild!==i&&a.insertBefore(i,a.firstChild)}function Ne(i,a){if(i.classList!==void 0)return i.classList.contains(a);var h=ve(i);return h.length>0&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(h)}function Nt(i,a){if(i.classList!==void 0)for(var h=M(a),m=0,x=h.length;m<x;m++)i.classList.add(h[m]);else if(!Ne(i,a)){var T=ve(i);Vt(i,(T?T+" ":"")+a)}}function Zt(i,a){i.classList!==void 0?i.classList.remove(a):Vt(i,g((" "+ve(i)+" ").replace(" "+a+" "," ")))}function Vt(i,a){i.className.baseVal===void 0?i.className=a:i.className.baseVal=a}function ve(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function Jt(i,a){"opacity"in i.style?i.style.opacity=a:"filter"in i.style&&xn(i,a)}function xn(i,a){var h=!1,m="DXImageTransform.Microsoft.Alpha";try{h=i.filters.item(m)}catch{if(a===1)return}a=Math.round(a*100),h?(h.Enabled=a!==100,h.Opacity=a):i.style.filter+=" progid:"+m+"(opacity="+a+")"}function si(i){for(var a=document.documentElement.style,h=0;h<i.length;h++)if(i[h]in a)return i[h];return!1}function Ge(i,a,h){var m=a||new K(0,0);i.style[G]=(Bt.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(h?" scale("+h+")":"")}function Ue(i,a){i._leaflet_pos=a,Bt.any3d?Ge(i,a):(i.style.left=a.x+"px",i.style.top=a.y+"px")}function xe(i){return i._leaflet_pos||new K(0,0)}var Xe,on,Je;if("onselectstart"in document)Xe=function(){ie(window,"selectstart",fn)},on=function(){Oe(window,"selectstart",fn)};else{var Ze=si(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Xe=function(){if(Ze){var i=document.documentElement.style;Je=i[Ze],i[Ze]="none"}},on=function(){Ze&&(document.documentElement.style[Ze]=Je,Je=void 0)}}function js(){ie(window,"dragstart",fn)}function ri(){Oe(window,"dragstart",fn)}var Va,xc;function yc(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Ha(),Va=i,xc=i.style.outlineStyle,i.style.outlineStyle="none",ie(window,"keydown",Ha))}function Ha(){Va&&(Va.style.outlineStyle=xc,Va=void 0,xc=void 0,Oe(window,"keydown",Ha))}function vf(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Mc(i){var a=i.getBoundingClientRect();return{x:a.width/i.offsetWidth||1,y:a.height/i.offsetHeight||1,boundingClientRect:a}}var B_={__proto__:null,TRANSFORM:G,TRANSITION:gt,TRANSITION_END:Pt,get:Mt,getStyle:Ct,create:pt,remove:wt,empty:kt,toFront:Kt,toBack:_e,hasClass:Ne,addClass:Nt,removeClass:Zt,setClass:Vt,getClass:ve,setOpacity:Jt,testProp:si,setTransform:Ge,setPosition:Ue,getPosition:xe,get disableTextSelection(){return Xe},get enableTextSelection(){return on},disableImageDrag:js,enableImageDrag:ri,preventOutline:yc,restoreOutline:Ha,getSizedParentNode:vf,getScale:Mc};function ie(i,a,h,m){if(a&&typeof a=="object")for(var x in a)bc(i,x,a[x],h);else{a=M(a);for(var T=0,O=a.length;T<O;T++)bc(i,a[T],h,m)}return this}var bi="_leaflet_events";function Oe(i,a,h,m){if(arguments.length===1)xf(i),delete i[bi];else if(a&&typeof a=="object")for(var x in a)Tc(i,x,a[x],h);else if(a=M(a),arguments.length===2)xf(i,function(W){return C(a,W)!==-1});else for(var T=0,O=a.length;T<O;T++)Tc(i,a[T],h,m);return this}function xf(i,a){for(var h in i[bi]){var m=h.split(/\d/)[0];(!a||a(m))&&Tc(i,m,null,null,h)}}var Sc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function bc(i,a,h,m){var x=a+u(h)+(m?"_"+u(m):"");if(i[bi]&&i[bi][x])return this;var T=function(W){return h.call(m||i,W||window.event)},O=T;!Bt.touchNative&&Bt.pointer&&a.indexOf("touch")===0?T=Ba(i,a,T):Bt.touch&&a==="dblclick"?T=$(i,T):"addEventListener"in i?a==="touchstart"||a==="touchmove"||a==="wheel"||a==="mousewheel"?i.addEventListener(Sc[a]||a,T,Bt.passiveEvents?{passive:!1}:!1):a==="mouseenter"||a==="mouseleave"?(T=function(W){W=W||window.event,wc(i,W)&&O(W)},i.addEventListener(Sc[a],T,!1)):i.addEventListener(a,O,!1):i.attachEvent("on"+a,T),i[bi]=i[bi]||{},i[bi][x]=T}function Tc(i,a,h,m,x){x=x||a+u(h)+(m?"_"+u(m):"");var T=i[bi]&&i[bi][x];if(!T)return this;!Bt.touchNative&&Bt.pointer&&a.indexOf("touch")===0?ka(i,a,T):Bt.touch&&a==="dblclick"?Y(i,T):"removeEventListener"in i?i.removeEventListener(Sc[a]||a,T,!1):i.detachEvent("on"+a,T),i[bi][x]=null}function Ks(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Ec(i){return bc(i,"wheel",Ks),this}function zo(i){return ie(i,"mousedown touchstart dblclick contextmenu",Ks),i._leaflet_disable_click=!0,this}function fn(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Js(i){return fn(i),Ks(i),this}function yf(i){if(i.composedPath)return i.composedPath();for(var a=[],h=i.target;h;)a.push(h),h=h.parentNode;return a}function Mf(i,a){if(!a)return new K(i.clientX,i.clientY);var h=Mc(a),m=h.boundingClientRect;return new K((i.clientX-m.left)/h.x-a.clientLeft,(i.clientY-m.top)/h.y-a.clientTop)}var k_=Bt.linux&&Bt.chrome?window.devicePixelRatio:Bt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Sf(i){return Bt.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/k_:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function wc(i,a){var h=a.relatedTarget;if(!h)return!0;try{for(;h&&h!==i;)h=h.parentNode}catch{return!1}return h!==i}var z_={__proto__:null,on:ie,off:Oe,stopPropagation:Ks,disableScrollPropagation:Ec,disableClickPropagation:zo,preventDefault:fn,stop:Js,getPropagationPath:yf,getMousePosition:Mf,getWheelDelta:Sf,isExternalTarget:wc,addListener:ie,removeListener:Oe},bf=j.extend({run:function(i,a,h,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=h||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=xe(i),this._offset=a.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=F(this._animate,this),this._step()},_step:function(i){var a=+new Date-this._startTime,h=this._duration*1e3;a<h?this._runFrame(this._easeOut(a/h),i):(this._runFrame(1),this._complete())},_runFrame:function(i,a){var h=this._startPos.add(this._offset.multiplyBy(i));a&&h._round(),Ue(this._el,h),this.fire("step")},_complete:function(){q(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ye=j.extend({options:{crs:fe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,a){a=S(this,a),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.zoom!==void 0&&(this._zoom=this._limitZoom(a.zoom)),a.center&&a.zoom!==void 0&&this.setView(Z(a.center),a.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=gt&&Bt.any3d&&!Bt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ie(this._proxy,Pt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,a,h){if(a=a===void 0?this._zoom:this._limitZoom(a),i=this._limitCenter(Z(i),a,this.options.maxBounds),h=h||{},this._stop(),this._loaded&&!h.reset&&h!==!0){h.animate!==void 0&&(h.zoom=r({animate:h.animate},h.zoom),h.pan=r({animate:h.animate,duration:h.duration},h.pan));var m=this._zoom!==a?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,a,h.zoom):this._tryAnimatedPan(i,h.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,a,h.pan&&h.pan.noMoveStart),this},setZoom:function(i,a){return this._loaded?this.setView(this.getCenter(),i,{zoom:a}):(this._zoom=i,this)},zoomIn:function(i,a){return i=i||(Bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,a)},zoomOut:function(i,a){return i=i||(Bt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,a)},setZoomAround:function(i,a,h){var m=this.getZoomScale(a),x=this.getSize().divideBy(2),T=i instanceof K?i:this.latLngToContainerPoint(i),O=T.subtract(x).multiplyBy(1-1/m),W=this.containerPointToLatLng(x.add(O));return this.setView(W,a,{zoom:h})},_getBoundsCenterZoom:function(i,a){a=a||{},i=i.getBounds?i.getBounds():Qt(i);var h=st(a.paddingTopLeft||a.padding||[0,0]),m=st(a.paddingBottomRight||a.padding||[0,0]),x=this.getBoundsZoom(i,!1,h.add(m));if(x=typeof a.maxZoom=="number"?Math.min(a.maxZoom,x):x,x===1/0)return{center:i.getCenter(),zoom:x};var T=m.subtract(h).divideBy(2),O=this.project(i.getSouthWest(),x),W=this.project(i.getNorthEast(),x),J=this.unproject(O.add(W).divideBy(2).add(T),x);return{center:J,zoom:x}},fitBounds:function(i,a){if(i=Qt(i),!i.isValid())throw new Error("Bounds are not valid.");var h=this._getBoundsCenterZoom(i,a);return this.setView(h.center,h.zoom,a)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,a){return this.setView(i,this._zoom,{pan:a})},panBy:function(i,a){if(i=st(i).round(),a=a||{},!i.x&&!i.y)return this.fire("moveend");if(a.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new bf,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),a.noMoveStart||this.fire("movestart"),a.animate!==!1){Nt(this._mapPane,"leaflet-pan-anim");var h=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,h,a.duration||.25,a.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,a,h){if(h=h||{},h.animate===!1||!Bt.any3d)return this.setView(i,a,h);this._stop();var m=this.project(this.getCenter()),x=this.project(i),T=this.getSize(),O=this._zoom;i=Z(i),a=a===void 0?O:a;var W=Math.max(T.x,T.y),J=W*this.getZoomScale(O,a),ht=x.distanceTo(m)||1,Rt=1.42,qt=Rt*Rt;function he(qe){var tl=qe?-1:1,Rg=qe?J:W,Pg=J*J-W*W+tl*qt*qt*ht*ht,Cg=2*Rg*qt*ht,Fc=Pg/Cg,id=Math.sqrt(Fc*Fc+1)-Fc,Lg=id<1e-9?-18:Math.log(id);return Lg}function yn(qe){return(Math.exp(qe)-Math.exp(-qe))/2}function an(qe){return(Math.exp(qe)+Math.exp(-qe))/2}function Wn(qe){return yn(qe)/an(qe)}var Rn=he(0);function Ur(qe){return W*(an(Rn)/an(Rn+Rt*qe))}function Tg(qe){return W*(an(Rn)*Wn(Rn+Rt*qe)-yn(Rn))/qt}function Eg(qe){return 1-Math.pow(1-qe,1.5)}var wg=Date.now(),ed=(he(1)-Rn)/Rt,Ag=h.duration?1e3*h.duration:1e3*ed*.8;function nd(){var qe=(Date.now()-wg)/Ag,tl=Eg(qe)*ed;qe<=1?(this._flyToFrame=F(nd,this),this._move(this.unproject(m.add(x.subtract(m).multiplyBy(Tg(tl)/ht)),O),this.getScaleZoom(W/Ur(tl),O),{flyTo:!0})):this._move(i,a)._moveEnd(!0)}return this._moveStart(!0,h.noMoveStart),nd.call(this),this},flyToBounds:function(i,a){var h=this._getBoundsCenterZoom(i,a);return this.flyTo(h.center,h.zoom,a)},setMaxBounds:function(i){return i=Qt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var a=this.options.minZoom;return this.options.minZoom=i,this._loaded&&a!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var a=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&a!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,a){this._enforcingBounds=!0;var h=this.getCenter(),m=this._limitCenter(h,this._zoom,Qt(i));return h.equals(m)||this.panTo(m,a),this._enforcingBounds=!1,this},panInside:function(i,a){a=a||{};var h=st(a.paddingTopLeft||a.padding||[0,0]),m=st(a.paddingBottomRight||a.padding||[0,0]),x=this.project(this.getCenter()),T=this.project(i),O=this.getPixelBounds(),W=Wt([O.min.add(h),O.max.subtract(m)]),J=W.getSize();if(!W.contains(T)){this._enforcingBounds=!0;var ht=T.subtract(W.getCenter()),Rt=W.extend(T).getSize().subtract(J);x.x+=ht.x<0?-Rt.x:Rt.x,x.y+=ht.y<0?-Rt.y:Rt.y,this.panTo(this.unproject(x),a),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=r({animate:!1,pan:!0},i===!0?{animate:!0}:i);var a=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var h=this.getSize(),m=a.divideBy(2).round(),x=h.divideBy(2).round(),T=m.subtract(x);return!T.x&&!T.y?this:(i.animate&&i.pan?this.panBy(T):(i.pan&&this._rawPanBy(T),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:a,newSize:h}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=r({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var a=l(this._handleGeolocationResponse,this),h=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(a,h,i):navigator.geolocation.getCurrentPosition(a,h,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var a=i.code,h=i.message||(a===1?"permission denied":a===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:a,message:"Geolocation error: "+h+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var a=i.coords.latitude,h=i.coords.longitude,m=new Gt(a,h),x=m.toBounds(i.coords.accuracy*2),T=this._locateOptions;if(T.setView){var O=this.getBoundsZoom(x);this.setView(m,T.maxZoom?Math.min(O,T.maxZoom):O)}var W={latlng:m,bounds:x,timestamp:i.timestamp};for(var J in i.coords)typeof i.coords[J]=="number"&&(W[J]=i.coords[J]);this.fire("locationfound",W)}},addHandler:function(i,a){if(!a)return this;var h=this[i]=new a(this);return this._handlers.push(h),this.options[i]&&h.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),wt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(q(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)wt(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,a){var h="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=pt("div",h,a||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),a=this.unproject(i.getBottomLeft()),h=this.unproject(i.getTopRight());return new Ht(a,h)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,a,h){i=Qt(i),h=st(h||[0,0]);var m=this.getZoom()||0,x=this.getMinZoom(),T=this.getMaxZoom(),O=i.getNorthWest(),W=i.getSouthEast(),J=this.getSize().subtract(h),ht=Wt(this.project(W,m),this.project(O,m)).getSize(),Rt=Bt.any3d?this.options.zoomSnap:1,qt=J.x/ht.x,he=J.y/ht.y,yn=a?Math.max(qt,he):Math.min(qt,he);return m=this.getScaleZoom(yn,m),Rt&&(m=Math.round(m/(Rt/100))*(Rt/100),m=a?Math.ceil(m/Rt)*Rt:Math.floor(m/Rt)*Rt),Math.max(x,Math.min(T,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new K(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,a){var h=this._getTopLeftPoint(i,a);return new dt(h,h.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,a){var h=this.options.crs;return a=a===void 0?this._zoom:a,h.scale(i)/h.scale(a)},getScaleZoom:function(i,a){var h=this.options.crs;a=a===void 0?this._zoom:a;var m=h.zoom(i*h.scale(a));return isNaN(m)?1/0:m},project:function(i,a){return a=a===void 0?this._zoom:a,this.options.crs.latLngToPoint(Z(i),a)},unproject:function(i,a){return a=a===void 0?this._zoom:a,this.options.crs.pointToLatLng(st(i),a)},layerPointToLatLng:function(i){var a=st(i).add(this.getPixelOrigin());return this.unproject(a)},latLngToLayerPoint:function(i){var a=this.project(Z(i))._round();return a._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(Z(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Qt(i))},distance:function(i,a){return this.options.crs.distance(Z(i),Z(a))},containerPointToLayerPoint:function(i){return st(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return st(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var a=this.containerPointToLayerPoint(st(i));return this.layerPointToLatLng(a)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Z(i)))},mouseEventToContainerPoint:function(i){return Mf(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var a=this._container=Mt(i);if(a){if(a._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ie(a,"scroll",this._onScroll,this),this._containerId=u(a)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Bt.any3d,Nt(i,"leaflet-container"+(Bt.touch?" leaflet-touch":"")+(Bt.retina?" leaflet-retina":"")+(Bt.ielt9?" leaflet-oldie":"")+(Bt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var a=Ct(i,"position");a!=="absolute"&&a!=="relative"&&a!=="fixed"&&a!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ue(this._mapPane,new K(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Nt(i.markerPane,"leaflet-zoom-hide"),Nt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,a,h){Ue(this._mapPane,new K(0,0));var m=!this._loaded;this._loaded=!0,a=this._limitZoom(a),this.fire("viewprereset");var x=this._zoom!==a;this._moveStart(x,h)._move(i,a)._moveEnd(x),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,a){return i&&this.fire("zoomstart"),a||this.fire("movestart"),this},_move:function(i,a,h,m){a===void 0&&(a=this._zoom);var x=this._zoom!==a;return this._zoom=a,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?h&&h.pinch&&this.fire("zoom",h):((x||h&&h.pinch)&&this.fire("zoom",h),this.fire("move",h)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return q(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Ue(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[u(this._container)]=this;var a=i?Oe:ie;a(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&a(window,"resize",this._onResize,this),Bt.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){q(this._resizeRequest),this._resizeRequest=F(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,a){for(var h=[],m,x=a==="mouseout"||a==="mouseover",T=i.target||i.srcElement,O=!1;T;){if(m=this._targets[u(T)],m&&(a==="click"||a==="preclick")&&this._draggableMoved(m)){O=!0;break}if(m&&m.listens(a,!0)&&(x&&!wc(T,i)||(h.push(m),x))||T===this._container)break;T=T.parentNode}return!h.length&&!O&&!x&&this.listens(a,!0)&&(h=[this]),h},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var a=i.target||i.srcElement;if(!(!this._loaded||a._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(a))){var h=i.type;h==="mousedown"&&yc(a),this._fireDOMEvent(i,h)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,a,h){if(i.type==="click"){var m=r({},i);m.type="preclick",this._fireDOMEvent(m,m.type,h)}var x=this._findEventTargets(i,a);if(h){for(var T=[],O=0;O<h.length;O++)h[O].listens(a,!0)&&T.push(h[O]);x=T.concat(x)}if(x.length){a==="contextmenu"&&fn(i);var W=x[0],J={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var ht=W.getLatLng&&(!W._radius||W._radius<=10);J.containerPoint=ht?this.latLngToContainerPoint(W.getLatLng()):this.mouseEventToContainerPoint(i),J.layerPoint=this.containerPointToLayerPoint(J.containerPoint),J.latlng=ht?W.getLatLng():this.layerPointToLatLng(J.layerPoint)}for(O=0;O<x.length;O++)if(x[O].fire(a,J,!0),J.originalEvent._stopped||x[O].options.bubblingMouseEvents===!1&&C(this._mouseEvents,a)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,a=this._handlers.length;i<a;i++)this._handlers[i].disable()},whenReady:function(i,a){return this._loaded?i.call(a||this,{target:this}):this.on("load",i,a),this},_getMapPanePos:function(){return xe(this._mapPane)||new K(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,a){var h=i&&a!==void 0?this._getNewPixelOrigin(i,a):this.getPixelOrigin();return h.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,a){var h=this.getSize()._divideBy(2);return this.project(i,a)._subtract(h)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,a,h){var m=this._getNewPixelOrigin(h,a);return this.project(i,a)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,a,h){var m=this._getNewPixelOrigin(h,a);return Wt([this.project(i.getSouthWest(),a)._subtract(m),this.project(i.getNorthWest(),a)._subtract(m),this.project(i.getSouthEast(),a)._subtract(m),this.project(i.getNorthEast(),a)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,a,h){if(!h)return i;var m=this.project(i,a),x=this.getSize().divideBy(2),T=new dt(m.subtract(x),m.add(x)),O=this._getBoundsOffset(T,h,a);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?i:this.unproject(m.add(O),a)},_limitOffset:function(i,a){if(!a)return i;var h=this.getPixelBounds(),m=new dt(h.min.add(i),h.max.add(i));return i.add(this._getBoundsOffset(m,a))},_getBoundsOffset:function(i,a,h){var m=Wt(this.project(a.getNorthEast(),h),this.project(a.getSouthWest(),h)),x=m.min.subtract(i.min),T=m.max.subtract(i.max),O=this._rebound(x.x,-T.x),W=this._rebound(x.y,-T.y);return new K(O,W)},_rebound:function(i,a){return i+a>0?Math.round(i-a)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(a))},_limitZoom:function(i){var a=this.getMinZoom(),h=this.getMaxZoom(),m=Bt.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(a,Math.min(h,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Zt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,a){var h=this._getCenterOffset(i)._trunc();return(a&&a.animate)!==!0&&!this.getSize().contains(h)?!1:(this.panBy(h,a),!0)},_createAnimProxy:function(){var i=this._proxy=pt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(a){var h=G,m=this._proxy.style[h];Ge(this._proxy,this.project(a.center,a.zoom),this.getZoomScale(a.zoom,1)),m===this._proxy.style[h]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){wt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),a=this.getZoom();Ge(this._proxy,this.project(i,a),this.getZoomScale(a,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,a,h){if(this._animatingZoom)return!0;if(h=h||{},!this._zoomAnimated||h.animate===!1||this._nothingToAnimate()||Math.abs(a-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(a),x=this._getCenterOffset(i)._divideBy(1-1/m);return h.animate!==!0&&!this.getSize().contains(x)?!1:(F(function(){this._moveStart(!0,h.noMoveStart||!1)._animateZoom(i,a,!0)},this),!0)},_animateZoom:function(i,a,h,m){this._mapPane&&(h&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=a,Nt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:a,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Zt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function V_(i,a){return new ye(i,a)}var oi=rt.extend({options:{position:"topright"},initialize:function(i){S(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var a=this._map;return a&&a.removeControl(this),this.options.position=i,a&&a.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var a=this._container=this.onAdd(i),h=this.getPosition(),m=i._controlCorners[h];return Nt(a,"leaflet-control"),h.indexOf("bottom")!==-1?m.insertBefore(a,m.firstChild):m.appendChild(a),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(wt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Vo=function(i){return new oi(i)};ye.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},a="leaflet-",h=this._controlContainer=pt("div",a+"control-container",this._container);function m(x,T){var O=a+x+" "+a+T;i[x+T]=pt("div",O,h)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)wt(this._controlCorners[i]);wt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Tf=oi.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,a,h,m){return h<m?-1:m<h?1:0}},initialize:function(i,a,h){S(this,h),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in a)this._addLayer(a[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return oi.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,a){return this._addLayer(i,a),this._map?this._update():this},addOverlay:function(i,a){return this._addLayer(i,a,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var a=this._getLayer(u(i));return a&&this._layers.splice(this._layers.indexOf(a),1),this._map?this._update():this},expand:function(){Nt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Nt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Zt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Zt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",a=this._container=pt("div",i),h=this.options.collapsed;a.setAttribute("aria-haspopup",!0),zo(a),Ec(a);var m=this._section=pt("section",i+"-list");h&&(this._map.on("click",this.collapse,this),ie(a,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var x=this._layersLink=pt("a",i+"-toggle",a);x.href="#",x.title="Layers",x.setAttribute("role","button"),ie(x,{keydown:function(T){T.keyCode===13&&this._expandSafely()},click:function(T){fn(T),this._expandSafely()}},this),h||this.expand(),this._baseLayersList=pt("div",i+"-base",m),this._separator=pt("div",i+"-separator",m),this._overlaysList=pt("div",i+"-overlays",m),a.appendChild(m)},_getLayer:function(i){for(var a=0;a<this._layers.length;a++)if(this._layers[a]&&u(this._layers[a].layer)===i)return this._layers[a]},_addLayer:function(i,a,h){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:a,overlay:h}),this.options.sortLayers&&this._layers.sort(l(function(m,x){return this.options.sortFunction(m.layer,x.layer,m.name,x.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;kt(this._baseLayersList),kt(this._overlaysList),this._layerControlInputs=[];var i,a,h,m,x=0;for(h=0;h<this._layers.length;h++)m=this._layers[h],this._addItem(m),a=a||m.overlay,i=i||!m.overlay,x+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&x>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=a&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var a=this._getLayer(u(i.target)),h=a.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;h&&this._map.fire(h,a)},_createRadioElement:function(i,a){var h='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(a?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=h,m.firstChild},_addItem:function(i){var a=document.createElement("label"),h=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=h):m=this._createRadioElement("leaflet-base-layers_"+u(this),h),this._layerControlInputs.push(m),m.layerId=u(i.layer),ie(m,"click",this._onInputClick,this);var x=document.createElement("span");x.innerHTML=" "+i.name;var T=document.createElement("span");a.appendChild(T),T.appendChild(m),T.appendChild(x);var O=i.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(a),this._checkDisabledLayers(),a},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,a,h,m=[],x=[];this._handlingClick=!0;for(var T=i.length-1;T>=0;T--)a=i[T],h=this._getLayer(a.layerId).layer,a.checked?m.push(h):a.checked||x.push(h);for(T=0;T<x.length;T++)this._map.hasLayer(x[T])&&this._map.removeLayer(x[T]);for(T=0;T<m.length;T++)this._map.hasLayer(m[T])||this._map.addLayer(m[T]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,a,h,m=this._map.getZoom(),x=i.length-1;x>=0;x--)a=i[x],h=this._getLayer(a.layerId).layer,a.disabled=h.options.minZoom!==void 0&&m<h.options.minZoom||h.options.maxZoom!==void 0&&m>h.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,ie(i,"click",fn),this.expand();var a=this;setTimeout(function(){Oe(i,"click",fn),a._preventClick=!1})}}),H_=function(i,a,h){return new Tf(i,a,h)},Ac=oi.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var a="leaflet-control-zoom",h=pt("div",a+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,a+"-in",h,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,a+"-out",h,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),h},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,a,h,m,x){var T=pt("a",h,m);return T.innerHTML=i,T.href="#",T.title=a,T.setAttribute("role","button"),T.setAttribute("aria-label",a),zo(T),ie(T,"click",Js),ie(T,"click",x,this),ie(T,"click",this._refocusOnMap,this),T},_updateDisabled:function(){var i=this._map,a="leaflet-disabled";Zt(this._zoomInButton,a),Zt(this._zoomOutButton,a),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Nt(this._zoomOutButton,a),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Nt(this._zoomInButton,a),this._zoomInButton.setAttribute("aria-disabled","true"))}});ye.mergeOptions({zoomControl:!0}),ye.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ac,this.addControl(this.zoomControl))});var G_=function(i){return new Ac(i)},Ef=oi.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var a="leaflet-control-scale",h=pt("div",a),m=this.options;return this._addScales(m,a+"-line",h),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),h},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,a,h){i.metric&&(this._mScale=pt("div",a,h)),i.imperial&&(this._iScale=pt("div",a,h))},_update:function(){var i=this._map,a=i.getSize().y/2,h=i.distance(i.containerPointToLatLng([0,a]),i.containerPointToLatLng([this.options.maxWidth,a]));this._updateScales(h)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var a=this._getRoundNum(i),h=a<1e3?a+" m":a/1e3+" km";this._updateScale(this._mScale,h,a/i)},_updateImperial:function(i){var a=i*3.2808399,h,m,x;a>5280?(h=a/5280,m=this._getRoundNum(h),this._updateScale(this._iScale,m+" mi",m/h)):(x=this._getRoundNum(a),this._updateScale(this._iScale,x+" ft",x/a))},_updateScale:function(i,a,h){i.style.width=Math.round(this.options.maxWidth*h)+"px",i.innerHTML=a},_getRoundNum:function(i){var a=Math.pow(10,(Math.floor(i)+"").length-1),h=i/a;return h=h>=10?10:h>=5?5:h>=3?3:h>=2?2:1,a*h}}),W_=function(i){return new Ef(i)},X_='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Rc=oi.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Bt.inlineSvg?X_+" ":"")+"Leaflet</a>"},initialize:function(i){S(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=pt("div","leaflet-control-attribution"),zo(this._container);for(var a in i._layers)i._layers[a].getAttribution&&this.addAttribution(i._layers[a].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var a in this._attributions)this._attributions[a]&&i.push(a);var h=[];this.options.prefix&&h.push(this.options.prefix),i.length&&h.push(i.join(", ")),this._container.innerHTML=h.join(' <span aria-hidden="true">|</span> ')}}});ye.mergeOptions({attributionControl:!0}),ye.addInitHook(function(){this.options.attributionControl&&new Rc().addTo(this)});var Z_=function(i){return new Rc(i)};oi.Layers=Tf,oi.Zoom=Ac,oi.Scale=Ef,oi.Attribution=Rc,Vo.layers=H_,Vo.zoom=G_,Vo.scale=W_,Vo.attribution=Z_;var Ti=rt.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ti.addTo=function(i,a){return i.addHandler(a,this),this};var q_={Events:et},wf=Bt.touch?"touchstart mousedown":"mousedown",Es=j.extend({options:{clickTolerance:3},initialize:function(i,a,h,m){S(this,m),this._element=i,this._dragStartTarget=a||i,this._preventOutline=h},enable:function(){this._enabled||(ie(this._dragStartTarget,wf,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Es._dragging===this&&this.finishDrag(!0),Oe(this._dragStartTarget,wf,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Ne(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Es._dragging===this&&this.finishDrag();return}if(!(Es._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Es._dragging=this,this._preventOutline&&yc(this._element),js(),Xe(),!this._moving)){this.fire("down");var a=i.touches?i.touches[0]:i,h=vf(this._element);this._startPoint=new K(a.clientX,a.clientY),this._startPos=xe(this._element),this._parentScale=Mc(h);var m=i.type==="mousedown";ie(document,m?"mousemove":"touchmove",this._onMove,this),ie(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var a=i.touches&&i.touches.length===1?i.touches[0]:i,h=new K(a.clientX,a.clientY)._subtract(this._startPoint);!h.x&&!h.y||Math.abs(h.x)+Math.abs(h.y)<this.options.clickTolerance||(h.x/=this._parentScale.x,h.y/=this._parentScale.y,fn(i),this._moved||(this.fire("dragstart"),this._moved=!0,Nt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Nt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(h),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Ue(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Zt(document.body,"leaflet-dragging"),this._lastTarget&&(Zt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Oe(document,"mousemove touchmove",this._onMove,this),Oe(document,"mouseup touchend touchcancel",this._onUp,this),ri(),on();var a=this._moved&&this._moving;this._moving=!1,Es._dragging=!1,a&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function Af(i,a,h){var m,x=[1,4,2,8],T,O,W,J,ht,Rt,qt,he;for(T=0,Rt=i.length;T<Rt;T++)i[T]._code=$s(i[T],a);for(W=0;W<4;W++){for(qt=x[W],m=[],T=0,Rt=i.length,O=Rt-1;T<Rt;O=T++)J=i[T],ht=i[O],J._code&qt?ht._code&qt||(he=Ga(ht,J,qt,a,h),he._code=$s(he,a),m.push(he)):(ht._code&qt&&(he=Ga(ht,J,qt,a,h),he._code=$s(he,a),m.push(he)),m.push(J));i=m}return i}function Rf(i,a){var h,m,x,T,O,W,J,ht,Rt;if(!i||i.length===0)throw new Error("latlngs not passed");Gn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var qt=Z([0,0]),he=Qt(i),yn=he.getNorthWest().distanceTo(he.getSouthWest())*he.getNorthEast().distanceTo(he.getNorthWest());yn<1700&&(qt=Pc(i));var an=i.length,Wn=[];for(h=0;h<an;h++){var Rn=Z(i[h]);Wn.push(a.project(Z([Rn.lat-qt.lat,Rn.lng-qt.lng])))}for(W=J=ht=0,h=0,m=an-1;h<an;m=h++)x=Wn[h],T=Wn[m],O=x.y*T.x-T.y*x.x,J+=(x.x+T.x)*O,ht+=(x.y+T.y)*O,W+=O*3;W===0?Rt=Wn[0]:Rt=[J/W,ht/W];var Ur=a.unproject(st(Rt));return Z([Ur.lat+qt.lat,Ur.lng+qt.lng])}function Pc(i){for(var a=0,h=0,m=0,x=0;x<i.length;x++){var T=Z(i[x]);a+=T.lat,h+=T.lng,m++}return Z([a/m,h/m])}var Y_={__proto__:null,clipPolygon:Af,polygonCenter:Rf,centroid:Pc};function Pf(i,a){if(!a||!i.length)return i.slice();var h=a*a;return i=J_(i,h),i=K_(i,h),i}function Cf(i,a,h){return Math.sqrt(Ho(i,a,h,!0))}function j_(i,a,h){return Ho(i,a,h)}function K_(i,a){var h=i.length,m=typeof Uint8Array<"u"?Uint8Array:Array,x=new m(h);x[0]=x[h-1]=1,Cc(i,x,a,0,h-1);var T,O=[];for(T=0;T<h;T++)x[T]&&O.push(i[T]);return O}function Cc(i,a,h,m,x){var T=0,O,W,J;for(W=m+1;W<=x-1;W++)J=Ho(i[W],i[m],i[x],!0),J>T&&(O=W,T=J);T>h&&(a[O]=1,Cc(i,a,h,m,O),Cc(i,a,h,O,x))}function J_(i,a){for(var h=[i[0]],m=1,x=0,T=i.length;m<T;m++)$_(i[m],i[x])>a&&(h.push(i[m]),x=m);return x<T-1&&h.push(i[T-1]),h}var Lf;function If(i,a,h,m,x){var T=m?Lf:$s(i,h),O=$s(a,h),W,J,ht;for(Lf=O;;){if(!(T|O))return[i,a];if(T&O)return!1;W=T||O,J=Ga(i,a,W,h,x),ht=$s(J,h),W===T?(i=J,T=ht):(a=J,O=ht)}}function Ga(i,a,h,m,x){var T=a.x-i.x,O=a.y-i.y,W=m.min,J=m.max,ht,Rt;return h&8?(ht=i.x+T*(J.y-i.y)/O,Rt=J.y):h&4?(ht=i.x+T*(W.y-i.y)/O,Rt=W.y):h&2?(ht=J.x,Rt=i.y+O*(J.x-i.x)/T):h&1&&(ht=W.x,Rt=i.y+O*(W.x-i.x)/T),new K(ht,Rt,x)}function $s(i,a){var h=0;return i.x<a.min.x?h|=1:i.x>a.max.x&&(h|=2),i.y<a.min.y?h|=4:i.y>a.max.y&&(h|=8),h}function $_(i,a){var h=a.x-i.x,m=a.y-i.y;return h*h+m*m}function Ho(i,a,h,m){var x=a.x,T=a.y,O=h.x-x,W=h.y-T,J=O*O+W*W,ht;return J>0&&(ht=((i.x-x)*O+(i.y-T)*W)/J,ht>1?(x=h.x,T=h.y):ht>0&&(x+=O*ht,T+=W*ht)),O=i.x-x,W=i.y-T,m?O*O+W*W:new K(x,T)}function Gn(i){return!A(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Df(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Gn(i)}function Nf(i,a){var h,m,x,T,O,W,J,ht;if(!i||i.length===0)throw new Error("latlngs not passed");Gn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Rt=Z([0,0]),qt=Qt(i),he=qt.getNorthWest().distanceTo(qt.getSouthWest())*qt.getNorthEast().distanceTo(qt.getNorthWest());he<1700&&(Rt=Pc(i));var yn=i.length,an=[];for(h=0;h<yn;h++){var Wn=Z(i[h]);an.push(a.project(Z([Wn.lat-Rt.lat,Wn.lng-Rt.lng])))}for(h=0,m=0;h<yn-1;h++)m+=an[h].distanceTo(an[h+1])/2;if(m===0)ht=an[0];else for(h=0,T=0;h<yn-1;h++)if(O=an[h],W=an[h+1],x=O.distanceTo(W),T+=x,T>m){J=(T-m)/x,ht=[W.x-J*(W.x-O.x),W.y-J*(W.y-O.y)];break}var Rn=a.unproject(st(ht));return Z([Rn.lat+Rt.lat,Rn.lng+Rt.lng])}var Q_={__proto__:null,simplify:Pf,pointToSegmentDistance:Cf,closestPointOnSegment:j_,clipSegment:If,_getEdgeIntersection:Ga,_getBitCode:$s,_sqClosestPointOnSegment:Ho,isFlat:Gn,_flat:Df,polylineCenter:Nf},Lc={project:function(i){return new K(i.lng,i.lat)},unproject:function(i){return new Gt(i.y,i.x)},bounds:new dt([-180,-90],[180,90])},Ic={R:6378137,R_MINOR:6356752314245179e-9,bounds:new dt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var a=Math.PI/180,h=this.R,m=i.lat*a,x=this.R_MINOR/h,T=Math.sqrt(1-x*x),O=T*Math.sin(m),W=Math.tan(Math.PI/4-m/2)/Math.pow((1-O)/(1+O),T/2);return m=-h*Math.log(Math.max(W,1e-10)),new K(i.lng*a*h,m)},unproject:function(i){for(var a=180/Math.PI,h=this.R,m=this.R_MINOR/h,x=Math.sqrt(1-m*m),T=Math.exp(-i.y/h),O=Math.PI/2-2*Math.atan(T),W=0,J=.1,ht;W<15&&Math.abs(J)>1e-7;W++)ht=x*Math.sin(O),ht=Math.pow((1-ht)/(1+ht),x/2),J=Math.PI/2-2*Math.atan(T*ht)-O,O+=J;return new Gt(O*a,i.x*a/h)}},tg={__proto__:null,LonLat:Lc,Mercator:Ic,SphericalMercator:It},eg=r({},Et,{code:"EPSG:3395",projection:Ic,transformation:(function(){var i=.5/(Math.PI*Ic.R);return ke(i,.5,-i,.5)})()}),Uf=r({},Et,{code:"EPSG:4326",projection:Lc,transformation:ke(1/180,1,-1/180,.5)}),ng=r({},lt,{projection:Lc,transformation:ke(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,a){var h=a.lng-i.lng,m=a.lat-i.lat;return Math.sqrt(h*h+m*m)},infinite:!0});lt.Earth=Et,lt.EPSG3395=eg,lt.EPSG3857=fe,lt.EPSG900913=be,lt.EPSG4326=Uf,lt.Simple=ng;var ai=j.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[u(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[u(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var a=i.target;if(a.hasLayer(this)){if(this._map=a,this._zoomAnimated=a._zoomAnimated,this.getEvents){var h=this.getEvents();a.on(h,this),this.once("remove",function(){a.off(h,this)},this)}this.onAdd(a),this.fire("add"),a.fire("layeradd",{layer:this})}}});ye.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var a=u(i);return this._layers[a]?this:(this._layers[a]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var a=u(i);return this._layers[a]?(this._loaded&&i.onRemove(this),delete this._layers[a],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return u(i)in this._layers},eachLayer:function(i,a){for(var h in this._layers)i.call(a,this._layers[h]);return this},_addLayers:function(i){i=i?A(i)?i:[i]:[];for(var a=0,h=i.length;a<h;a++)this.addLayer(i[a])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[u(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var a=u(i);this._zoomBoundLayers[a]&&(delete this._zoomBoundLayers[a],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,a=-1/0,h=this._getZoomSpan();for(var m in this._zoomBoundLayers){var x=this._zoomBoundLayers[m].options;i=x.minZoom===void 0?i:Math.min(i,x.minZoom),a=x.maxZoom===void 0?a:Math.max(a,x.maxZoom)}this._layersMaxZoom=a===-1/0?void 0:a,this._layersMinZoom=i===1/0?void 0:i,h!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Cr=ai.extend({initialize:function(i,a){S(this,a),this._layers={};var h,m;if(i)for(h=0,m=i.length;h<m;h++)this.addLayer(i[h])},addLayer:function(i){var a=this.getLayerId(i);return this._layers[a]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var a=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[a]&&this._map.removeLayer(this._layers[a]),delete this._layers[a],this},hasLayer:function(i){var a=typeof i=="number"?i:this.getLayerId(i);return a in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var a=Array.prototype.slice.call(arguments,1),h,m;for(h in this._layers)m=this._layers[h],m[i]&&m[i].apply(m,a);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,a){for(var h in this._layers)i.call(a,this._layers[h]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return u(i)}}),ig=function(i,a){return new Cr(i,a)},$i=Cr.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Cr.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Cr.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new Ht;for(var a in this._layers){var h=this._layers[a];i.extend(h.getBounds?h.getBounds():h.getLatLng())}return i}}),sg=function(i,a){return new $i(i,a)},Lr=rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){S(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,a){var h=this._getIconUrl(i);if(!h){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(h,a&&a.tagName==="IMG"?a:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,a){var h=this.options,m=h[a+"Size"];typeof m=="number"&&(m=[m,m]);var x=st(m),T=st(a==="shadow"&&h.shadowAnchor||h.iconAnchor||x&&x.divideBy(2,!0));i.className="leaflet-marker-"+a+" "+(h.className||""),T&&(i.style.marginLeft=-T.x+"px",i.style.marginTop=-T.y+"px"),x&&(i.style.width=x.x+"px",i.style.height=x.y+"px")},_createImg:function(i,a){return a=a||document.createElement("img"),a.src=i,a},_getIconUrl:function(i){return Bt.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function rg(i){return new Lr(i)}var Go=Lr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Go.imagePath!="string"&&(Go.imagePath=this._detectIconPath()),(this.options.imagePath||Go.imagePath)+Lr.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var a=function(h,m,x){var T=m.exec(h);return T&&T[x]};return i=a(i,/^url\((['"])?(.+)\1\)$/,2),i&&a(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=pt("div","leaflet-default-icon-path",document.body),a=Ct(i,"background-image")||Ct(i,"backgroundImage");if(document.body.removeChild(i),a=this._stripUrl(a),a)return a;var h=document.querySelector('link[href$="leaflet.css"]');return h?h.href.substring(0,h.href.length-11-1):""}}),Of=Ti.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Es(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Nt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Zt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var a=this._marker,h=a._map,m=this._marker.options.autoPanSpeed,x=this._marker.options.autoPanPadding,T=xe(a._icon),O=h.getPixelBounds(),W=h.getPixelOrigin(),J=Wt(O.min._subtract(W).add(x),O.max._subtract(W).subtract(x));if(!J.contains(T)){var ht=st((Math.max(J.max.x,T.x)-J.max.x)/(O.max.x-J.max.x)-(Math.min(J.min.x,T.x)-J.min.x)/(O.min.x-J.min.x),(Math.max(J.max.y,T.y)-J.max.y)/(O.max.y-J.max.y)-(Math.min(J.min.y,T.y)-J.min.y)/(O.min.y-J.min.y)).multiplyBy(m);h.panBy(ht,{animate:!1}),this._draggable._newPos._add(ht),this._draggable._startPos._add(ht),Ue(a._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=F(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(q(this._panRequest),this._panRequest=F(this._adjustPan.bind(this,i)))},_onDrag:function(i){var a=this._marker,h=a._shadow,m=xe(a._icon),x=a._map.layerPointToLatLng(m);h&&Ue(h,m),a._latlng=x,i.latlng=x,i.oldLatLng=this._oldLatLng,a.fire("move",i).fire("drag",i)},_onDragEnd:function(i){q(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Wa=ai.extend({options:{icon:new Go,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,a){S(this,a),this._latlng=Z(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var a=this._latlng;return this._latlng=Z(i),this.update(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,a="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),h=i.icon.createIcon(this._icon),m=!1;h!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(h.title=i.title),h.tagName==="IMG"&&(h.alt=i.alt||"")),Nt(h,a),i.keyboard&&(h.tabIndex="0",h.setAttribute("role","button")),this._icon=h,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ie(h,"focus",this._panOnFocus,this);var x=i.icon.createShadow(this._shadow),T=!1;x!==this._shadow&&(this._removeShadow(),T=!0),x&&(Nt(x,a),x.alt=""),this._shadow=x,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),x&&T&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Oe(this._icon,"focus",this._panOnFocus,this),wt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&wt(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Ue(this._icon,i),this._shadow&&Ue(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(a)},_initInteraction:function(){if(this.options.interactive&&(Nt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Of)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Of(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&Jt(this._icon,i),this._shadow&&Jt(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var a=this.options.icon.options,h=a.iconSize?st(a.iconSize):st(0,0),m=a.iconAnchor?st(a.iconAnchor):st(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:h.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function og(i,a){return new Wa(i,a)}var ws=ai.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return S(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Xa=ws.extend({options:{fill:!0,radius:10},initialize:function(i,a){S(this,a),this._latlng=Z(i),this._radius=this.options.radius},setLatLng:function(i){var a=this._latlng;return this._latlng=Z(i),this.redraw(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var a=i&&i.radius||this._radius;return ws.prototype.setStyle.call(this,i),this.setRadius(a),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,a=this._radiusY||i,h=this._clickTolerance(),m=[i+h,a+h];this._pxBounds=new dt(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ag(i,a){return new Xa(i,a)}var Dc=Xa.extend({initialize:function(i,a,h){if(typeof a=="number"&&(a=r({},h,{radius:a})),S(this,a),this._latlng=Z(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new Ht(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:ws.prototype.setStyle,_project:function(){var i=this._latlng.lng,a=this._latlng.lat,h=this._map,m=h.options.crs;if(m.distance===Et.distance){var x=Math.PI/180,T=this._mRadius/Et.R/x,O=h.project([a+T,i]),W=h.project([a-T,i]),J=O.add(W).divideBy(2),ht=h.unproject(J).lat,Rt=Math.acos((Math.cos(T*x)-Math.sin(a*x)*Math.sin(ht*x))/(Math.cos(a*x)*Math.cos(ht*x)))/x;(isNaN(Rt)||Rt===0)&&(Rt=T/Math.cos(Math.PI/180*a)),this._point=J.subtract(h.getPixelOrigin()),this._radius=isNaN(Rt)?0:J.x-h.project([ht,i-Rt]).x,this._radiusY=J.y-O.y}else{var qt=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=h.latLngToLayerPoint(this._latlng),this._radius=this._point.x-h.latLngToLayerPoint(qt).x}this._updateBounds()}});function lg(i,a,h){return new Dc(i,a,h)}var Qi=ws.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,a){S(this,a),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var a=1/0,h=null,m=Ho,x,T,O=0,W=this._parts.length;O<W;O++)for(var J=this._parts[O],ht=1,Rt=J.length;ht<Rt;ht++){x=J[ht-1],T=J[ht];var qt=m(i,x,T,!0);qt<a&&(a=qt,h=m(i,x,T))}return h&&(h.distance=Math.sqrt(a)),h},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Nf(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,a){return a=a||this._defaultShape(),i=Z(i),a.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new Ht,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Gn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var a=[],h=Gn(i),m=0,x=i.length;m<x;m++)h?(a[m]=Z(i[m]),this._bounds.extend(a[m])):a[m]=this._convertLatLngs(i[m]);return a},_project:function(){var i=new dt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),a=new K(i,i);this._rawPxBounds&&(this._pxBounds=new dt([this._rawPxBounds.min.subtract(a),this._rawPxBounds.max.add(a)]))},_projectLatlngs:function(i,a,h){var m=i[0]instanceof Gt,x=i.length,T,O;if(m){for(O=[],T=0;T<x;T++)O[T]=this._map.latLngToLayerPoint(i[T]),h.extend(O[T]);a.push(O)}else for(T=0;T<x;T++)this._projectLatlngs(i[T],a,h)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var a=this._parts,h,m,x,T,O,W,J;for(h=0,x=0,T=this._rings.length;h<T;h++)for(J=this._rings[h],m=0,O=J.length;m<O-1;m++)W=If(J[m],J[m+1],i,m,!0),W&&(a[x]=a[x]||[],a[x].push(W[0]),(W[1]!==J[m+1]||m===O-2)&&(a[x].push(W[1]),x++))}},_simplifyPoints:function(){for(var i=this._parts,a=this.options.smoothFactor,h=0,m=i.length;h<m;h++)i[h]=Pf(i[h],a)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,a){var h,m,x,T,O,W,J=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(h=0,T=this._parts.length;h<T;h++)for(W=this._parts[h],m=0,O=W.length,x=O-1;m<O;x=m++)if(!(!a&&m===0)&&Cf(i,W[x],W[m])<=J)return!0;return!1}});function cg(i,a){return new Qi(i,a)}Qi._flat=Df;var Ir=Qi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Rf(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var a=Qi.prototype._convertLatLngs.call(this,i),h=a.length;return h>=2&&a[0]instanceof Gt&&a[0].equals(a[h-1])&&a.pop(),a},_setLatLngs:function(i){Qi.prototype._setLatLngs.call(this,i),Gn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Gn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,a=this.options.weight,h=new K(a,a);if(i=new dt(i.min.subtract(h),i.max.add(h)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,x=this._rings.length,T;m<x;m++)T=Af(this._rings[m],i,!0),T.length&&this._parts.push(T)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var a=!1,h,m,x,T,O,W,J,ht;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(T=0,J=this._parts.length;T<J;T++)for(h=this._parts[T],O=0,ht=h.length,W=ht-1;O<ht;W=O++)m=h[O],x=h[W],m.y>i.y!=x.y>i.y&&i.x<(x.x-m.x)*(i.y-m.y)/(x.y-m.y)+m.x&&(a=!a);return a||Qi.prototype._containsPoint.call(this,i,!0)}});function hg(i,a){return new Ir(i,a)}var ts=$i.extend({initialize:function(i,a){S(this,a),this._layers={},i&&this.addData(i)},addData:function(i){var a=A(i)?i:i.features,h,m,x;if(a){for(h=0,m=a.length;h<m;h++)x=a[h],(x.geometries||x.geometry||x.features||x.coordinates)&&this.addData(x);return this}var T=this.options;if(T.filter&&!T.filter(i))return this;var O=Za(i,T);return O?(O.feature=ja(i),O.defaultOptions=O.options,this.resetStyle(O),T.onEachFeature&&T.onEachFeature(i,O),this.addLayer(O)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=r({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(a){this._setLayerStyle(a,i)},this)},_setLayerStyle:function(i,a){i.setStyle&&(typeof a=="function"&&(a=a(i.feature)),i.setStyle(a))}});function Za(i,a){var h=i.type==="Feature"?i.geometry:i,m=h?h.coordinates:null,x=[],T=a&&a.pointToLayer,O=a&&a.coordsToLatLng||Nc,W,J,ht,Rt;if(!m&&!h)return null;switch(h.type){case"Point":return W=O(m),Ff(T,i,W,a);case"MultiPoint":for(ht=0,Rt=m.length;ht<Rt;ht++)W=O(m[ht]),x.push(Ff(T,i,W,a));return new $i(x);case"LineString":case"MultiLineString":return J=qa(m,h.type==="LineString"?0:1,O),new Qi(J,a);case"Polygon":case"MultiPolygon":return J=qa(m,h.type==="Polygon"?1:2,O),new Ir(J,a);case"GeometryCollection":for(ht=0,Rt=h.geometries.length;ht<Rt;ht++){var qt=Za({geometry:h.geometries[ht],type:"Feature",properties:i.properties},a);qt&&x.push(qt)}return new $i(x);case"FeatureCollection":for(ht=0,Rt=h.features.length;ht<Rt;ht++){var he=Za(h.features[ht],a);he&&x.push(he)}return new $i(x);default:throw new Error("Invalid GeoJSON object.")}}function Ff(i,a,h,m){return i?i(a,h):new Wa(h,m&&m.markersInheritOptions&&m)}function Nc(i){return new Gt(i[1],i[0],i[2])}function qa(i,a,h){for(var m=[],x=0,T=i.length,O;x<T;x++)O=a?qa(i[x],a-1,h):(h||Nc)(i[x]),m.push(O);return m}function Uc(i,a){return i=Z(i),i.alt!==void 0?[_(i.lng,a),_(i.lat,a),_(i.alt,a)]:[_(i.lng,a),_(i.lat,a)]}function Ya(i,a,h,m){for(var x=[],T=0,O=i.length;T<O;T++)x.push(a?Ya(i[T],Gn(i[T])?0:a-1,h,m):Uc(i[T],m));return!a&&h&&x.length>0&&x.push(x[0].slice()),x}function Dr(i,a){return i.feature?r({},i.feature,{geometry:a}):ja(a)}function ja(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Oc={toGeoJSON:function(i){return Dr(this,{type:"Point",coordinates:Uc(this.getLatLng(),i)})}};Wa.include(Oc),Dc.include(Oc),Xa.include(Oc),Qi.include({toGeoJSON:function(i){var a=!Gn(this._latlngs),h=Ya(this._latlngs,a?1:0,!1,i);return Dr(this,{type:(a?"Multi":"")+"LineString",coordinates:h})}}),Ir.include({toGeoJSON:function(i){var a=!Gn(this._latlngs),h=a&&!Gn(this._latlngs[0]),m=Ya(this._latlngs,h?2:a?1:0,!0,i);return a||(m=[m]),Dr(this,{type:(h?"Multi":"")+"Polygon",coordinates:m})}}),Cr.include({toMultiPoint:function(i){var a=[];return this.eachLayer(function(h){a.push(h.toGeoJSON(i).geometry.coordinates)}),Dr(this,{type:"MultiPoint",coordinates:a})},toGeoJSON:function(i){var a=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(a==="MultiPoint")return this.toMultiPoint(i);var h=a==="GeometryCollection",m=[];return this.eachLayer(function(x){if(x.toGeoJSON){var T=x.toGeoJSON(i);if(h)m.push(T.geometry);else{var O=ja(T);O.type==="FeatureCollection"?m.push.apply(m,O.features):m.push(O)}}}),h?Dr(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Bf(i,a){return new ts(i,a)}var ug=Bf,Ka=ai.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,a,h){this._url=i,this._bounds=Qt(a),S(this,h)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Nt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){wt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Kt(this._image),this},bringToBack:function(){return this._map&&_e(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Qt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",a=this._image=i?this._url:pt("img");if(Nt(a,"leaflet-image-layer"),this._zoomAnimated&&Nt(a,"leaflet-zoom-animated"),this.options.className&&Nt(a,this.options.className),a.onselectstart=d,a.onmousemove=d,a.onload=l(this.fire,this,"load"),a.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=a.src;return}a.src=this._url,a.alt=this.options.alt},_animateZoom:function(i){var a=this._map.getZoomScale(i.zoom),h=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Ge(this._image,h,a)},_reset:function(){var i=this._image,a=new dt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),h=a.getSize();Ue(i,a.min),i.style.width=h.x+"px",i.style.height=h.y+"px"},_updateOpacity:function(){Jt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),fg=function(i,a,h){return new Ka(i,a,h)},kf=Ka.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",a=this._image=i?this._url:pt("video");if(Nt(a,"leaflet-image-layer"),this._zoomAnimated&&Nt(a,"leaflet-zoom-animated"),this.options.className&&Nt(a,this.options.className),a.onselectstart=d,a.onmousemove=d,a.onloadeddata=l(this.fire,this,"load"),i){for(var h=a.getElementsByTagName("source"),m=[],x=0;x<h.length;x++)m.push(h[x].src);this._url=h.length>0?m:[a.src];return}A(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(a.style,"objectFit")&&(a.style.objectFit="fill"),a.autoplay=!!this.options.autoplay,a.loop=!!this.options.loop,a.muted=!!this.options.muted,a.playsInline=!!this.options.playsInline;for(var T=0;T<this._url.length;T++){var O=pt("source");O.src=this._url[T],a.appendChild(O)}}});function dg(i,a,h){return new kf(i,a,h)}var zf=Ka.extend({_initImage:function(){var i=this._image=this._url;Nt(i,"leaflet-image-layer"),this._zoomAnimated&&Nt(i,"leaflet-zoom-animated"),this.options.className&&Nt(i,this.options.className),i.onselectstart=d,i.onmousemove=d}});function pg(i,a,h){return new zf(i,a,h)}var Ei=ai.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,a){i&&(i instanceof Gt||A(i))?(this._latlng=Z(i),S(this,a)):(S(this,i),this._source=a),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&Jt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&Jt(this._container,1),this.bringToFront(),this.options.interactive&&(Nt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(Jt(this._container,0),this._removeTimeout=setTimeout(l(wt,void 0,this._container),200)):wt(this._container),this.options.interactive&&(Zt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=Z(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Kt(this._container),this},bringToBack:function(){return this._map&&_e(this._container),this},_prepareOpen:function(i){var a=this._source;if(!a._map)return!1;if(a instanceof $i){a=null;var h=this._source._layers;for(var m in h)if(h[m]._map){a=h[m];break}if(!a)return!1;this._source=a}if(!i)if(a.getCenter)i=a.getCenter();else if(a.getLatLng)i=a.getLatLng();else if(a.getBounds)i=a.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,a=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof a=="string")i.innerHTML=a;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(a)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),a=st(this.options.offset),h=this._getAnchor();this._zoomAnimated?Ue(this._container,i.add(h)):a=a.add(i).add(h);var m=this._containerBottom=-a.y,x=this._containerLeft=-Math.round(this._containerWidth/2)+a.x;this._container.style.bottom=m+"px",this._container.style.left=x+"px"}},_getAnchor:function(){return[0,0]}});ye.include({_initOverlay:function(i,a,h,m){var x=a;return x instanceof i||(x=new i(m).setContent(a)),h&&x.setLatLng(h),x}}),ai.include({_initOverlay:function(i,a,h,m){var x=h;return x instanceof i?(S(x,m),x._source=this):(x=a&&!m?a:new i(m,this),x.setContent(h)),x}});var Ja=Ei.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Ei.prototype.openOn.call(this,i)},onAdd:function(i){Ei.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ws||this._source.on("preclick",Ks))},onRemove:function(i){Ei.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ws||this._source.off("preclick",Ks))},getEvents:function(){var i=Ei.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",a=this._container=pt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),h=this._wrapper=pt("div",i+"-content-wrapper",a);if(this._contentNode=pt("div",i+"-content",h),zo(a),Ec(this._contentNode),ie(a,"contextmenu",Ks),this._tipContainer=pt("div",i+"-tip-container",a),this._tip=pt("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=pt("a",i+"-close-button",a);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',ie(m,"click",function(x){fn(x),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,a=i.style;a.width="",a.whiteSpace="nowrap";var h=i.offsetWidth;h=Math.min(h,this.options.maxWidth),h=Math.max(h,this.options.minWidth),a.width=h+1+"px",a.whiteSpace="",a.height="";var m=i.offsetHeight,x=this.options.maxHeight,T="leaflet-popup-scrolled";x&&m>x?(a.height=x+"px",Nt(i,T)):Zt(i,T),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),h=this._getAnchor();Ue(this._container,a.add(h))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,a=parseInt(Ct(this._container,"marginBottom"),10)||0,h=this._container.offsetHeight+a,m=this._containerWidth,x=new K(this._containerLeft,-h-this._containerBottom);x._add(xe(this._container));var T=i.layerPointToContainerPoint(x),O=st(this.options.autoPanPadding),W=st(this.options.autoPanPaddingTopLeft||O),J=st(this.options.autoPanPaddingBottomRight||O),ht=i.getSize(),Rt=0,qt=0;T.x+m+J.x>ht.x&&(Rt=T.x+m-ht.x+J.x),T.x-Rt-W.x<0&&(Rt=T.x-W.x),T.y+h+J.y>ht.y&&(qt=T.y+h-ht.y+J.y),T.y-qt-W.y<0&&(qt=T.y-W.y),(Rt||qt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Rt,qt]))}},_getAnchor:function(){return st(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),mg=function(i,a){return new Ja(i,a)};ye.mergeOptions({closePopupOnClick:!0}),ye.include({openPopup:function(i,a,h){return this._initOverlay(Ja,i,a,h).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),ai.include({bindPopup:function(i,a){return this._popup=this._initOverlay(Ja,this._popup,i,a),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof $i||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){Js(i);var a=i.layer||i.target;if(this._popup._source===a&&!(a instanceof ws)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=a,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var $a=Ei.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Ei.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Ei.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Ei.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",a=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=pt("div",a),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+u(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var a,h,m=this._map,x=this._container,T=m.latLngToContainerPoint(m.getCenter()),O=m.layerPointToContainerPoint(i),W=this.options.direction,J=x.offsetWidth,ht=x.offsetHeight,Rt=st(this.options.offset),qt=this._getAnchor();W==="top"?(a=J/2,h=ht):W==="bottom"?(a=J/2,h=0):W==="center"?(a=J/2,h=ht/2):W==="right"?(a=0,h=ht/2):W==="left"?(a=J,h=ht/2):O.x<T.x?(W="right",a=0,h=ht/2):(W="left",a=J+(Rt.x+qt.x)*2,h=ht/2),i=i.subtract(st(a,h,!0)).add(Rt).add(qt),Zt(x,"leaflet-tooltip-right"),Zt(x,"leaflet-tooltip-left"),Zt(x,"leaflet-tooltip-top"),Zt(x,"leaflet-tooltip-bottom"),Nt(x,"leaflet-tooltip-"+W),Ue(x,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&Jt(this._container,i)},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(a)},_getAnchor:function(){return st(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),_g=function(i,a){return new $a(i,a)};ye.include({openTooltip:function(i,a,h){return this._initOverlay($a,i,a,h).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),ai.include({bindTooltip:function(i,a){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay($a,this._tooltip,i,a),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var a=i?"off":"on",h={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?h.add=this._openTooltip:(h.mouseover=this._openTooltip,h.mouseout=this.closeTooltip,h.click=this._openTooltip,this._map?this._addFocusListeners():h.add=this._addFocusListeners),this._tooltip.options.sticky&&(h.mousemove=this._moveTooltip),this[a](h),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof $i||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var a=typeof i.getElement=="function"&&i.getElement();a&&(ie(a,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),ie(a,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var a=typeof i.getElement=="function"&&i.getElement();a&&a.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var a=this;this._map.once("moveend",function(){a._openOnceFlag=!1,a._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var a=i.latlng,h,m;this._tooltip.options.sticky&&i.originalEvent&&(h=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(h),a=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(a)}});var Vf=Lr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var a=i&&i.tagName==="DIV"?i:document.createElement("div"),h=this.options;if(h.html instanceof Element?(kt(a),a.appendChild(h.html)):a.innerHTML=h.html!==!1?h.html:"",h.bgPos){var m=st(h.bgPos);a.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});function gg(i){return new Vf(i)}Lr.Default=Go;var Wo=ai.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Bt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){S(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),wt(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Kt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_e(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof K?i:new K(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var a=this.getPane().children,h=-i(-1/0,1/0),m=0,x=a.length,T;m<x;m++)T=a[m].style.zIndex,a[m]!==this._container&&T&&(h=i(h,+T));isFinite(h)&&(this.options.zIndex=h+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Bt.ielt9){Jt(this._container,this.options.opacity);var i=+new Date,a=!1,h=!1;for(var m in this._tiles){var x=this._tiles[m];if(!(!x.current||!x.loaded)){var T=Math.min(1,(i-x.loaded)/200);Jt(x.el,T),T<1?a=!0:(x.active?h=!0:this._onOpaqueTile(x),x.active=!0)}}h&&!this._noPrune&&this._pruneTiles(),a&&(q(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this))}},_onOpaqueTile:d,_initContainer:function(){this._container||(this._container=pt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,a=this.options.maxZoom;if(i!==void 0){for(var h in this._levels)h=Number(h),this._levels[h].el.children.length||h===i?(this._levels[h].el.style.zIndex=a-Math.abs(i-h),this._onUpdateLevel(h)):(wt(this._levels[h].el),this._removeTilesAtZoom(h),this._onRemoveLevel(h),delete this._levels[h]);var m=this._levels[i],x=this._map;return m||(m=this._levels[i]={},m.el=pt("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=a,m.origin=x.project(x.unproject(x.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,x.getCenter(),x.getZoom()),d(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:d,_onRemoveLevel:d,_onCreateLevel:d,_pruneTiles:function(){if(this._map){var i,a,h=this._map.getZoom();if(h>this.options.maxZoom||h<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)a=this._tiles[i],a.retain=a.current;for(i in this._tiles)if(a=this._tiles[i],a.current&&!a.active){var m=a.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var a in this._tiles)this._tiles[a].coords.z===i&&this._removeTile(a)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)wt(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,a,h,m){var x=Math.floor(i/2),T=Math.floor(a/2),O=h-1,W=new K(+x,+T);W.z=+O;var J=this._tileCoordsToKey(W),ht=this._tiles[J];return ht&&ht.active?(ht.retain=!0,!0):(ht&&ht.loaded&&(ht.retain=!0),O>m?this._retainParent(x,T,O,m):!1)},_retainChildren:function(i,a,h,m){for(var x=2*i;x<2*i+2;x++)for(var T=2*a;T<2*a+2;T++){var O=new K(x,T);O.z=h+1;var W=this._tileCoordsToKey(O),J=this._tiles[W];if(J&&J.active){J.retain=!0;continue}else J&&J.loaded&&(J.retain=!0);h+1<m&&this._retainChildren(x,T,h+1,m)}},_resetView:function(i){var a=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),a,a)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var a=this.options;return a.minNativeZoom!==void 0&&i<a.minNativeZoom?a.minNativeZoom:a.maxNativeZoom!==void 0&&a.maxNativeZoom<i?a.maxNativeZoom:i},_setView:function(i,a,h,m){var x=Math.round(a);this.options.maxZoom!==void 0&&x>this.options.maxZoom||this.options.minZoom!==void 0&&x<this.options.minZoom?x=void 0:x=this._clampZoom(x);var T=this.options.updateWhenZooming&&x!==this._tileZoom;(!m||T)&&(this._tileZoom=x,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),x!==void 0&&this._update(i),h||this._pruneTiles(),this._noPrune=!!h),this._setZoomTransforms(i,a)},_setZoomTransforms:function(i,a){for(var h in this._levels)this._setZoomTransform(this._levels[h],i,a)},_setZoomTransform:function(i,a,h){var m=this._map.getZoomScale(h,i.zoom),x=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(a,h)).round();Bt.any3d?Ge(i.el,x,m):Ue(i.el,x)},_resetGrid:function(){var i=this._map,a=i.options.crs,h=this._tileSize=this.getTileSize(),m=this._tileZoom,x=this._map.getPixelWorldBounds(this._tileZoom);x&&(this._globalTileRange=this._pxBoundsToTileRange(x)),this._wrapX=a.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,a.wrapLng[0]],m).x/h.x),Math.ceil(i.project([0,a.wrapLng[1]],m).x/h.y)],this._wrapY=a.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([a.wrapLat[0],0],m).y/h.x),Math.ceil(i.project([a.wrapLat[1],0],m).y/h.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var a=this._map,h=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),m=a.getZoomScale(h,this._tileZoom),x=a.project(i,this._tileZoom).floor(),T=a.getSize().divideBy(m*2);return new dt(x.subtract(T),x.add(T))},_update:function(i){var a=this._map;if(a){var h=this._clampZoom(a.getZoom());if(i===void 0&&(i=a.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),x=this._pxBoundsToTileRange(m),T=x.getCenter(),O=[],W=this.options.keepBuffer,J=new dt(x.getBottomLeft().subtract([W,-W]),x.getTopRight().add([W,-W]));if(!(isFinite(x.min.x)&&isFinite(x.min.y)&&isFinite(x.max.x)&&isFinite(x.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ht in this._tiles){var Rt=this._tiles[ht].coords;(Rt.z!==this._tileZoom||!J.contains(new K(Rt.x,Rt.y)))&&(this._tiles[ht].current=!1)}if(Math.abs(h-this._tileZoom)>1){this._setView(i,h);return}for(var qt=x.min.y;qt<=x.max.y;qt++)for(var he=x.min.x;he<=x.max.x;he++){var yn=new K(he,qt);if(yn.z=this._tileZoom,!!this._isValidTile(yn)){var an=this._tiles[this._tileCoordsToKey(yn)];an?an.current=!0:O.push(yn)}}if(O.sort(function(Rn,Ur){return Rn.distanceTo(T)-Ur.distanceTo(T)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Wn=document.createDocumentFragment();for(he=0;he<O.length;he++)this._addTile(O[he],Wn);this._level.el.appendChild(Wn)}}}},_isValidTile:function(i){var a=this._map.options.crs;if(!a.infinite){var h=this._globalTileRange;if(!a.wrapLng&&(i.x<h.min.x||i.x>h.max.x)||!a.wrapLat&&(i.y<h.min.y||i.y>h.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return Qt(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var a=this._map,h=this.getTileSize(),m=i.scaleBy(h),x=m.add(h),T=a.unproject(m,i.z),O=a.unproject(x,i.z);return[T,O]},_tileCoordsToBounds:function(i){var a=this._tileCoordsToNwSe(i),h=new Ht(a[0],a[1]);return this.options.noWrap||(h=this._map.wrapLatLngBounds(h)),h},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var a=i.split(":"),h=new K(+a[0],+a[1]);return h.z=+a[2],h},_removeTile:function(i){var a=this._tiles[i];a&&(wt(a.el),delete this._tiles[i],this.fire("tileunload",{tile:a.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Nt(i,"leaflet-tile");var a=this.getTileSize();i.style.width=a.x+"px",i.style.height=a.y+"px",i.onselectstart=d,i.onmousemove=d,Bt.ielt9&&this.options.opacity<1&&Jt(i,this.options.opacity)},_addTile:function(i,a){var h=this._getTilePos(i),m=this._tileCoordsToKey(i),x=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(x),this.createTile.length<2&&F(l(this._tileReady,this,i,null,x)),Ue(x,h),this._tiles[m]={el:x,coords:i,current:!0},a.appendChild(x),this.fire("tileloadstart",{tile:x,coords:i})},_tileReady:function(i,a,h){a&&this.fire("tileerror",{error:a,tile:h,coords:i});var m=this._tileCoordsToKey(i);h=this._tiles[m],h&&(h.loaded=+new Date,this._map._fadeAnimated?(Jt(h.el,0),q(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this)):(h.active=!0,this._pruneTiles()),a||(Nt(h.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:h.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Bt.ielt9||!this._map._fadeAnimated?F(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var a=new K(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return a.z=i.z,a},_pxBoundsToTileRange:function(i){var a=this.getTileSize();return new dt(i.min.unscaleBy(a).floor(),i.max.unscaleBy(a).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function vg(i){return new Wo(i)}var Nr=Wo.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,a){this._url=i,a=S(this,a),a.detectRetina&&Bt.retina&&a.maxZoom>0?(a.tileSize=Math.floor(a.tileSize/2),a.zoomReverse?(a.zoomOffset--,a.minZoom=Math.min(a.maxZoom,a.minZoom+1)):(a.zoomOffset++,a.maxZoom=Math.max(a.minZoom,a.maxZoom-1)),a.minZoom=Math.max(0,a.minZoom)):a.zoomReverse?a.minZoom=Math.min(a.maxZoom,a.minZoom):a.maxZoom=Math.max(a.minZoom,a.maxZoom),typeof a.subdomains=="string"&&(a.subdomains=a.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,a){return this._url===i&&a===void 0&&(a=!0),this._url=i,a||this.redraw(),this},createTile:function(i,a){var h=document.createElement("img");return ie(h,"load",l(this._tileOnLoad,this,a,h)),ie(h,"error",l(this._tileOnError,this,a,h)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(h.referrerPolicy=this.options.referrerPolicy),h.alt="",h.src=this.getTileUrl(i),h},getTileUrl:function(i){var a={r:Bt.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var h=this._globalTileRange.max.y-i.y;this.options.tms&&(a.y=h),a["-y"]=h}return P(this._url,r(a,this.options))},_tileOnLoad:function(i,a){Bt.ielt9?setTimeout(l(i,this,null,a),0):i(null,a)},_tileOnError:function(i,a,h){var m=this.options.errorTileUrl;m&&a.getAttribute("src")!==m&&(a.src=m),i(h,a)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,a=this.options.maxZoom,h=this.options.zoomReverse,m=this.options.zoomOffset;return h&&(i=a-i),i+m},_getSubdomain:function(i){var a=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[a]},_abortLoading:function(){var i,a;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(a=this._tiles[i].el,a.onload=d,a.onerror=d,!a.complete)){a.src=D;var h=this._tiles[i].coords;wt(a),delete this._tiles[i],this.fire("tileabort",{tile:a,coords:h})}},_removeTile:function(i){var a=this._tiles[i];if(a)return a.el.setAttribute("src",D),Wo.prototype._removeTile.call(this,i)},_tileReady:function(i,a,h){if(!(!this._map||h&&h.getAttribute("src")===D))return Wo.prototype._tileReady.call(this,i,a,h)}});function Hf(i,a){return new Nr(i,a)}var Gf=Nr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,a){this._url=i;var h=r({},this.defaultWmsParams);for(var m in a)m in this.options||(h[m]=a[m]);a=S(this,a);var x=a.detectRetina&&Bt.retina?2:1,T=this.getTileSize();h.width=T.x*x,h.height=T.y*x,this.wmsParams=h},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var a=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[a]=this._crs.code,Nr.prototype.onAdd.call(this,i)},getTileUrl:function(i){var a=this._tileCoordsToNwSe(i),h=this._crs,m=Wt(h.project(a[0]),h.project(a[1])),x=m.min,T=m.max,O=(this._wmsVersion>=1.3&&this._crs===Uf?[x.y,x.x,T.y,T.x]:[x.x,x.y,T.x,T.y]).join(","),W=Nr.prototype.getTileUrl.call(this,i);return W+y(this.wmsParams,W,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(i,a){return r(this.wmsParams,i),a||this.redraw(),this}});function xg(i,a){return new Gf(i,a)}Nr.WMS=Gf,Hf.wms=xg;var es=ai.extend({options:{padding:.1},initialize:function(i){S(this,i),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Nt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,a){var h=this._map.getZoomScale(a,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),x=this._map.project(this._center,a),T=m.multiplyBy(-h).add(x).subtract(this._map._getNewPixelOrigin(i,a));Bt.any3d?Ge(this._container,T,h):Ue(this._container,T)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,a=this._map.getSize(),h=this._map.containerPointToLayerPoint(a.multiplyBy(-i)).round();this._bounds=new dt(h,h.add(a.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Wf=es.extend({options:{tolerance:0},getEvents:function(){var i=es.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){es.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");ie(i,"mousemove",this._onMouseMove,this),ie(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ie(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){q(this._redrawRequest),delete this._ctx,wt(this._container),Oe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var a in this._layers)i=this._layers[a],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){es.prototype._update.call(this);var i=this._bounds,a=this._container,h=i.getSize(),m=Bt.retina?2:1;Ue(a,i.min),a.width=m*h.x,a.height=m*h.y,a.style.width=h.x+"px",a.style.height=h.y+"px",Bt.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){es.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[u(i)]=i;var a=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=a),this._drawLast=a,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var a=i._order,h=a.next,m=a.prev;h?h.prev=m:this._drawLast=m,m?m.next=h:this._drawFirst=h,delete i._order,delete this._layers[u(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var a=i.options.dashArray.split(/[, ]+/),h=[],m,x;for(x=0;x<a.length;x++){if(m=Number(a[x]),isNaN(m))return;h.push(m)}i.options._dashArray=h}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||F(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var a=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new dt,this._redrawBounds.extend(i._pxBounds.min.subtract([a,a])),this._redrawBounds.extend(i._pxBounds.max.add([a,a]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var a=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,a.x,a.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,a=this._redrawBounds;if(this._ctx.save(),a){var h=a.getSize();this._ctx.beginPath(),this._ctx.rect(a.min.x,a.min.y,h.x,h.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!a||i._pxBounds&&i._pxBounds.intersects(a))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,a){if(this._drawing){var h,m,x,T,O=i._parts,W=O.length,J=this._ctx;if(W){for(J.beginPath(),h=0;h<W;h++){for(m=0,x=O[h].length;m<x;m++)T=O[h][m],J[m?"lineTo":"moveTo"](T.x,T.y);a&&J.closePath()}this._fillStroke(J,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var a=i._point,h=this._ctx,m=Math.max(Math.round(i._radius),1),x=(Math.max(Math.round(i._radiusY),1)||m)/m;x!==1&&(h.save(),h.scale(1,x)),h.beginPath(),h.arc(a.x,a.y/x,m,0,Math.PI*2,!1),x!==1&&h.restore(),this._fillStroke(h,i)}},_fillStroke:function(i,a){var h=a.options;h.fill&&(i.globalAlpha=h.fillOpacity,i.fillStyle=h.fillColor||h.color,i.fill(h.fillRule||"evenodd")),h.stroke&&h.weight!==0&&(i.setLineDash&&i.setLineDash(a.options&&a.options._dashArray||[]),i.globalAlpha=h.opacity,i.lineWidth=h.weight,i.strokeStyle=h.color,i.lineCap=h.lineCap,i.lineJoin=h.lineJoin,i.stroke())},_onClick:function(i){for(var a=this._map.mouseEventToLayerPoint(i),h,m,x=this._drawFirst;x;x=x.next)h=x.layer,h.options.interactive&&h._containsPoint(a)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(h))&&(m=h);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var a=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,a)}},_handleMouseOut:function(i){var a=this._hoveredLayer;a&&(Zt(this._container,"leaflet-interactive"),this._fireEvent([a],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,a){if(!this._mouseHoverThrottled){for(var h,m,x=this._drawFirst;x;x=x.next)h=x.layer,h.options.interactive&&h._containsPoint(a)&&(m=h);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(Nt(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,a,h){this._map._fireDOMEvent(a,h||a.type,i)},_bringToFront:function(i){var a=i._order;if(a){var h=a.next,m=a.prev;if(h)h.prev=m;else return;m?m.next=h:h&&(this._drawFirst=h),a.prev=this._drawLast,this._drawLast.next=a,a.next=null,this._drawLast=a,this._requestRedraw(i)}},_bringToBack:function(i){var a=i._order;if(a){var h=a.next,m=a.prev;if(m)m.next=h;else return;h?h.prev=m:m&&(this._drawLast=m),a.prev=null,a.next=this._drawFirst,this._drawFirst.prev=a,this._drawFirst=a,this._requestRedraw(i)}}});function Xf(i){return Bt.canvas?new Wf(i):null}var Xo=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),yg={_initContainer:function(){this._container=pt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(es.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var a=i._container=Xo("shape");Nt(a,"leaflet-vml-shape "+(this.options.className||"")),a.coordsize="1 1",i._path=Xo("path"),a.appendChild(i._path),this._updateStyle(i),this._layers[u(i)]=i},_addPath:function(i){var a=i._container;this._container.appendChild(a),i.options.interactive&&i.addInteractiveTarget(a)},_removePath:function(i){var a=i._container;wt(a),i.removeInteractiveTarget(a),delete this._layers[u(i)]},_updateStyle:function(i){var a=i._stroke,h=i._fill,m=i.options,x=i._container;x.stroked=!!m.stroke,x.filled=!!m.fill,m.stroke?(a||(a=i._stroke=Xo("stroke")),x.appendChild(a),a.weight=m.weight+"px",a.color=m.color,a.opacity=m.opacity,m.dashArray?a.dashStyle=A(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):a.dashStyle="",a.endcap=m.lineCap.replace("butt","flat"),a.joinstyle=m.lineJoin):a&&(x.removeChild(a),i._stroke=null),m.fill?(h||(h=i._fill=Xo("fill")),x.appendChild(h),h.color=m.fillColor||m.color,h.opacity=m.fillOpacity):h&&(x.removeChild(h),i._fill=null)},_updateCircle:function(i){var a=i._point.round(),h=Math.round(i._radius),m=Math.round(i._radiusY||h);this._setPath(i,i._empty()?"M0 0":"AL "+a.x+","+a.y+" "+h+","+m+" 0,"+65535*360)},_setPath:function(i,a){i._path.v=a},_bringToFront:function(i){Kt(i._container)},_bringToBack:function(i){_e(i._container)}},Qa=Bt.vml?Xo:we,Zo=es.extend({_initContainer:function(){this._container=Qa("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qa("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){wt(this._container),Oe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){es.prototype._update.call(this);var i=this._bounds,a=i.getSize(),h=this._container;(!this._svgSize||!this._svgSize.equals(a))&&(this._svgSize=a,h.setAttribute("width",a.x),h.setAttribute("height",a.y)),Ue(h,i.min),h.setAttribute("viewBox",[i.min.x,i.min.y,a.x,a.y].join(" ")),this.fire("update")}},_initPath:function(i){var a=i._path=Qa("path");i.options.className&&Nt(a,i.options.className),i.options.interactive&&Nt(a,"leaflet-interactive"),this._updateStyle(i),this._layers[u(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){wt(i._path),i.removeInteractiveTarget(i._path),delete this._layers[u(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var a=i._path,h=i.options;a&&(h.stroke?(a.setAttribute("stroke",h.color),a.setAttribute("stroke-opacity",h.opacity),a.setAttribute("stroke-width",h.weight),a.setAttribute("stroke-linecap",h.lineCap),a.setAttribute("stroke-linejoin",h.lineJoin),h.dashArray?a.setAttribute("stroke-dasharray",h.dashArray):a.removeAttribute("stroke-dasharray"),h.dashOffset?a.setAttribute("stroke-dashoffset",h.dashOffset):a.removeAttribute("stroke-dashoffset")):a.setAttribute("stroke","none"),h.fill?(a.setAttribute("fill",h.fillColor||h.color),a.setAttribute("fill-opacity",h.fillOpacity),a.setAttribute("fill-rule",h.fillRule||"evenodd")):a.setAttribute("fill","none"))},_updatePoly:function(i,a){this._setPath(i,ne(i._parts,a))},_updateCircle:function(i){var a=i._point,h=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||h,x="a"+h+","+m+" 0 1,0 ",T=i._empty()?"M0 0":"M"+(a.x-h)+","+a.y+x+h*2+",0 "+x+-h*2+",0 ";this._setPath(i,T)},_setPath:function(i,a){i._path.setAttribute("d",a)},_bringToFront:function(i){Kt(i._path)},_bringToBack:function(i){_e(i._path)}});Bt.vml&&Zo.include(yg);function Zf(i){return Bt.svg||Bt.vml?new Zo(i):null}ye.include({getRenderer:function(i){var a=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return a||(a=this._renderer=this._createRenderer()),this.hasLayer(a)||this.addLayer(a),a},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var a=this._paneRenderers[i];return a===void 0&&(a=this._createRenderer({pane:i}),this._paneRenderers[i]=a),a},_createRenderer:function(i){return this.options.preferCanvas&&Xf(i)||Zf(i)}});var qf=Ir.extend({initialize:function(i,a){Ir.prototype.initialize.call(this,this._boundsToLatLngs(i),a)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Qt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Mg(i,a){return new qf(i,a)}Zo.create=Qa,Zo.pointsToPath=ne,ts.geometryToLayer=Za,ts.coordsToLatLng=Nc,ts.coordsToLatLngs=qa,ts.latLngToCoords=Uc,ts.latLngsToCoords=Ya,ts.getFeature=Dr,ts.asFeature=ja,ye.mergeOptions({boxZoom:!0});var Yf=Ti.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){ie(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Oe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){wt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Xe(),js(),this._startPoint=this._map.mouseEventToContainerPoint(i),ie(document,{contextmenu:Js,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=pt("div","leaflet-zoom-box",this._container),Nt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var a=new dt(this._point,this._startPoint),h=a.getSize();Ue(this._box,a.min),this._box.style.width=h.x+"px",this._box.style.height=h.y+"px"},_finish:function(){this._moved&&(wt(this._box),Zt(this._container,"leaflet-crosshair")),on(),ri(),Oe(document,{contextmenu:Js,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var a=new Ht(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(a).fire("boxzoomend",{boxZoomBounds:a})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ye.addInitHook("addHandler","boxZoom",Yf),ye.mergeOptions({doubleClickZoom:!0});var jf=Ti.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var a=this._map,h=a.getZoom(),m=a.options.zoomDelta,x=i.originalEvent.shiftKey?h-m:h+m;a.options.doubleClickZoom==="center"?a.setZoom(x):a.setZoomAround(i.containerPoint,x)}});ye.addInitHook("addHandler","doubleClickZoom",jf),ye.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Kf=Ti.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Es(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Nt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Zt(this._map._container,"leaflet-grab"),Zt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var a=Qt(this._map.options.maxBounds);this._offsetLimit=Wt(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var a=this._lastTime=+new Date,h=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(h),this._times.push(a),this._prunePositions(a)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),a=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=a.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,a){return i-(i-a)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),a=this._offsetLimit;i.x<a.min.x&&(i.x=this._viscousLimit(i.x,a.min.x)),i.y<a.min.y&&(i.y=this._viscousLimit(i.y,a.min.y)),i.x>a.max.x&&(i.x=this._viscousLimit(i.x,a.max.x)),i.y>a.max.y&&(i.y=this._viscousLimit(i.y,a.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,a=Math.round(i/2),h=this._initialWorldOffset,m=this._draggable._newPos.x,x=(m-a+h)%i+a-h,T=(m+a+h)%i-a-h,O=Math.abs(x+h)<Math.abs(T+h)?x:T;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(i){var a=this._map,h=a.options,m=!h.inertia||i.noInertia||this._times.length<2;if(a.fire("dragend",i),m)a.fire("moveend");else{this._prunePositions(+new Date);var x=this._lastPos.subtract(this._positions[0]),T=(this._lastTime-this._times[0])/1e3,O=h.easeLinearity,W=x.multiplyBy(O/T),J=W.distanceTo([0,0]),ht=Math.min(h.inertiaMaxSpeed,J),Rt=W.multiplyBy(ht/J),qt=ht/(h.inertiaDeceleration*O),he=Rt.multiplyBy(-qt/2).round();!he.x&&!he.y?a.fire("moveend"):(he=a._limitOffset(he,a.options.maxBounds),F(function(){a.panBy(he,{duration:qt,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});ye.addInitHook("addHandler","dragging",Kf),ye.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Jf=Ti.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),ie(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Oe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,a=document.documentElement,h=i.scrollTop||a.scrollTop,m=i.scrollLeft||a.scrollLeft;this._map._container.focus(),window.scrollTo(m,h)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var a=this._panKeys={},h=this.keyCodes,m,x;for(m=0,x=h.left.length;m<x;m++)a[h.left[m]]=[-1*i,0];for(m=0,x=h.right.length;m<x;m++)a[h.right[m]]=[i,0];for(m=0,x=h.down.length;m<x;m++)a[h.down[m]]=[0,i];for(m=0,x=h.up.length;m<x;m++)a[h.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var a=this._zoomKeys={},h=this.keyCodes,m,x;for(m=0,x=h.zoomIn.length;m<x;m++)a[h.zoomIn[m]]=i;for(m=0,x=h.zoomOut.length;m<x;m++)a[h.zoomOut[m]]=-i},_addHooks:function(){ie(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Oe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var a=i.keyCode,h=this._map,m;if(a in this._panKeys){if(!h._panAnim||!h._panAnim._inProgress)if(m=this._panKeys[a],i.shiftKey&&(m=st(m).multiplyBy(3)),h.options.maxBounds&&(m=h._limitOffset(st(m),h.options.maxBounds)),h.options.worldCopyJump){var x=h.wrapLatLng(h.unproject(h.project(h.getCenter()).add(m)));h.panTo(x)}else h.panBy(m)}else if(a in this._zoomKeys)h.setZoom(h.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[a]);else if(a===27&&h._popup&&h._popup.options.closeOnEscapeKey)h.closePopup();else return;Js(i)}}});ye.addInitHook("addHandler","keyboard",Jf),ye.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var $f=Ti.extend({addHooks:function(){ie(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Oe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var a=Sf(i),h=this._map.options.wheelDebounceTime;this._delta+=a,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(h-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),m),Js(i)},_performZoom:function(){var i=this._map,a=i.getZoom(),h=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),x=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,T=h?Math.ceil(x/h)*h:x,O=i._limitZoom(a+(this._delta>0?T:-T))-a;this._delta=0,this._startTime=null,O&&(i.options.scrollWheelZoom==="center"?i.setZoom(a+O):i.setZoomAround(this._lastMousePos,a+O))}});ye.addInitHook("addHandler","scrollWheelZoom",$f);var Sg=600;ye.mergeOptions({tapHold:Bt.touchNative&&Bt.safari&&Bt.mobile,tapTolerance:15});var Qf=Ti.extend({addHooks:function(){ie(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Oe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var a=i.touches[0];this._startPos=this._newPos=new K(a.clientX,a.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(ie(document,"touchend",fn),ie(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",a))},this),Sg),ie(document,"touchend touchcancel contextmenu",this._cancel,this),ie(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Oe(document,"touchend",fn),Oe(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Oe(document,"touchend touchcancel contextmenu",this._cancel,this),Oe(document,"touchmove",this._onMove,this)},_onMove:function(i){var a=i.touches[0];this._newPos=new K(a.clientX,a.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,a){var h=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY});h._simulated=!0,a.target.dispatchEvent(h)}});ye.addInitHook("addHandler","tapHold",Qf),ye.mergeOptions({touchZoom:Bt.touch,bounceAtZoomLimits:!0});var td=Ti.extend({addHooks:function(){Nt(this._map._container,"leaflet-touch-zoom"),ie(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Zt(this._map._container,"leaflet-touch-zoom"),Oe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var a=this._map;if(!(!i.touches||i.touches.length!==2||a._animatingZoom||this._zooming)){var h=a.mouseEventToContainerPoint(i.touches[0]),m=a.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=a.getSize()._divideBy(2),this._startLatLng=a.containerPointToLatLng(this._centerPoint),a.options.touchZoom!=="center"&&(this._pinchStartLatLng=a.containerPointToLatLng(h.add(m)._divideBy(2))),this._startDist=h.distanceTo(m),this._startZoom=a.getZoom(),this._moved=!1,this._zooming=!0,a._stop(),ie(document,"touchmove",this._onTouchMove,this),ie(document,"touchend touchcancel",this._onTouchEnd,this),fn(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var a=this._map,h=a.mouseEventToContainerPoint(i.touches[0]),m=a.mouseEventToContainerPoint(i.touches[1]),x=h.distanceTo(m)/this._startDist;if(this._zoom=a.getScaleZoom(x,this._startZoom),!a.options.bounceAtZoomLimits&&(this._zoom<a.getMinZoom()&&x<1||this._zoom>a.getMaxZoom()&&x>1)&&(this._zoom=a._limitZoom(this._zoom)),a.options.touchZoom==="center"){if(this._center=this._startLatLng,x===1)return}else{var T=h._add(m)._divideBy(2)._subtract(this._centerPoint);if(x===1&&T.x===0&&T.y===0)return;this._center=a.unproject(a.project(this._pinchStartLatLng,this._zoom).subtract(T),this._zoom)}this._moved||(a._moveStart(!0,!1),this._moved=!0),q(this._animRequest);var O=l(a._move,a,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=F(O,this,!0),fn(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,q(this._animRequest),Oe(document,"touchmove",this._onTouchMove,this),Oe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ye.addInitHook("addHandler","touchZoom",td),ye.BoxZoom=Yf,ye.DoubleClickZoom=jf,ye.Drag=Kf,ye.Keyboard=Jf,ye.ScrollWheelZoom=$f,ye.TapHold=Qf,ye.TouchZoom=td,e.Bounds=dt,e.Browser=Bt,e.CRS=lt,e.Canvas=Wf,e.Circle=Dc,e.CircleMarker=Xa,e.Class=rt,e.Control=oi,e.DivIcon=Vf,e.DivOverlay=Ei,e.DomEvent=z_,e.DomUtil=B_,e.Draggable=Es,e.Evented=j,e.FeatureGroup=$i,e.GeoJSON=ts,e.GridLayer=Wo,e.Handler=Ti,e.Icon=Lr,e.ImageOverlay=Ka,e.LatLng=Gt,e.LatLngBounds=Ht,e.Layer=ai,e.LayerGroup=Cr,e.LineUtil=Q_,e.Map=ye,e.Marker=Wa,e.Mixin=q_,e.Path=ws,e.Point=K,e.PolyUtil=Y_,e.Polygon=Ir,e.Polyline=Qi,e.Popup=Ja,e.PosAnimation=bf,e.Projection=tg,e.Rectangle=qf,e.Renderer=es,e.SVG=Zo,e.SVGOverlay=zf,e.TileLayer=Nr,e.Tooltip=$a,e.Transformation=pe,e.Util=Q,e.VideoOverlay=kf,e.bind=l,e.bounds=Wt,e.canvas=Xf,e.circle=lg,e.circleMarker=ag,e.control=Vo,e.divIcon=gg,e.extend=r,e.featureGroup=sg,e.geoJSON=Bf,e.geoJson=ug,e.gridLayer=vg,e.icon=rg,e.imageOverlay=fg,e.latLng=Z,e.latLngBounds=Qt,e.layerGroup=ig,e.map=V_,e.marker=og,e.point=st,e.polygon=hg,e.polyline=cg,e.popup=mg,e.rectangle=Mg,e.setOptions=S,e.stamp=u,e.svg=Zf,e.svgOverlay=pg,e.tileLayer=Hf,e.tooltip=_g,e.transformation=ke,e.version=n,e.videoOverlay=dg;var bg=window.L;e.noConflict=function(){return window.L=bg,this},window.L=e}))})(aa,aa.exports)),aa.exports}var fw=uw();const zp=cw(fw);var dw=Zs('<div class="keymap-container svelte-bmmrwh"></div>');function U_(s,t){if(new.target)return ic({component:U_,...s});Pa(t,!1);let e=$v(t,"step",12,0),n=Mr(),r;const o=[{bounds:[[-13.5,12],[5.5,31]],zoom:5},{bounds:[[-4.5,27.5],[-1.5,29.8]],zoom:8},{bounds:[[-2.3,28.9],[-1.9,29.2]],zoom:10},{bounds:[[-2.2,29],[-2.1,29.1]],zoom:12}];let l=e();Zv(()=>{r&&e()!==l&&(c(e()),l=e())}),zm(async()=>{await Tv(),r=zp.map(De(n),{zoomControl:!1,scrollWheelZoom:!1,dragging:!1}),zp.tileLayer("https://alessandromusetta.com/geo/tiles/keymapidjwi/{z}/{x}/{y}.png",{maxZoom:13}).addTo(r),await new Promise(p=>{const d=()=>{const _=De(n).getBoundingClientRect();_.width>0&&_.height>0?p():requestAnimationFrame(d)};d()}),r.invalidateSize(),setTimeout(()=>c(e()),50)});function c(p){const d=o[p];r.fitBounds(d.bounds,{animate:!0,duration:1.6,easeLinearity:.25,maxZoom:d.zoom})}var u={get step(){return e()},set step(p){e(p),Wu()},$set:oc,$on:(p,d)=>rc(t,p,d)};sc();var f=dw();return Hm(f,p=>je(n,p),()=>De(n)),Gs(s,f),Ca(u)}var pw=Zs(`<div class="keymapsteps-layout svelte-sibpqi"><div class="keymapsteps-story svelte-sibpqi"><section class="svelte-sibpqi"><p style="padding: 20px;">La Réserve Forestière de Nyamusisi est située à l’est de la
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
                grande échelle, ont déjà été menées avec succès.</p></section> <section class="svelte-sibpqi">Province du Sud-Kivu</section> <section class="svelte-sibpqi">Île d'Idjwi<br/><br/><img height="400px" alt="Idjwi"/> <p style="font-size:x-small; text-align:left; margin-block-start: 0em;margin-block-end: 0em;">Diego Tirira, Creative Commons Attribution-Share Alike 2.0
                Generic</p></section> <section class="svelte-sibpqi">Réserve Naturelle d'Idjwi-Nyamusisi<br/><br/><img height="400px" alt="Idjwi-reserve"/> <p style="font-size:x-small; text-align:left; margin-block-start: 0em;margin-block-end: 0em;">© Réserve Naturelle d’Idjwi-Nyamusisi</p></section></div> <div class="keymapsteps-map svelte-sibpqi"><!></div></div>`);function O_(s,t){if(new.target)return ic({component:O_,...s});Pa(t,!1);let e=Mr(0);var n={$set:oc,$on:(M,S)=>rc(t,M,S)};sc();var r=pw(),o=mi(r),l=mi(o),c=Kn(l,2),u=Kn(c,2),f=Kn(mi(u),3);Vl(2),pi(u);var p=Kn(u,2),d=Kn(mi(p),3);Vl(2),pi(p),pi(o);var _=Kn(o,2),g=mi(_);return U_(g,{get step(){return De(e)}}),pi(_),pi(r),Cm(()=>{kh(f,"src","/nyamusisi/image/CD_Idjwi.jpg"),kh(d,"src","/nyamusisi/image/Idjwi_reserve.jpg")}),hr("mouseenter",l,()=>je(e,0)),hr("mouseenter",c,()=>je(e,1)),hr("mouseenter",u,()=>je(e,2)),hr("mouseenter",p,()=>je(e,3)),Gs(s,r),Ca(n)}var mw=Zs('<div class="overlay svelte-1n46o8q"><!></div>'),_w=Zs('<div class="three-wrapper svelte-1n46o8q"><div class="model-preview svelte-1n46o8q"><img height="500px" alt="Aperçu du modèle" class="svelte-1n46o8q"/> <button class="svelte-1n46o8q">Explorer le modèle</button></div></div>'),gw=Zs(`<div class="layout svelte-1n46o8q"><div class="header svelte-1n46o8q"><p style="color:#5d5769;" class="svelte-1n46o8q">Rapport narratif rédigé par le Comité de Gestion de la Réserve Naturelle
      d'Idjwi-Nyamusisi</p></div> <div class="story svelte-1n46o8q"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q">De réserve défunte à paysage vivant</h1> <h2 class="svelte-1n46o8q">Restauration et gestion communautaire de la Réserve forestière de
          Nyamusisi</h2></div> <p style="color:#5d5769;padding-left:1em;padding-right:1em;font-size:0.95; border-bottom:1px solid #0085ca; margin-block-start: 0em;margin-block-end: 0em;" class="svelte-1n46o8q">La présente publication du rapport narratif a pour objectif de favoriser
        l’établissement de partenariats régionaux et internationaux, ainsi que
        de mobiliser des ressources financières en vue de la mise en œuvre du
        Plan Opérationnel Triennal du Comité de Gestion de la Réserve Naturelle
        d’Idjwi-Nyamusisi. Le plan opérationnel triennal a été élaboré et
        approuvé avec le soutien technique et financier de la GIZ, en
        collaboration avec les autorités publiques (Ministère de
        l'Environnement, ICCN, PNKB), les autorités traditionnelles, les
        associations, les villages, les organisations de la société civile, les
        populations autochtones et les groupes sociaux vulnérables.</p></section></div> <div class="map-wrapper svelte-1n46o8q" style="margin-top: 1em;"><!></div> <!> <div class="story svelte-1n46o8q"><section><div class="title svelte-1n46o8q"><h1 class="svelte-1n46o8q">Comment une réserve devient «défunte»</h1> <h2 class="svelte-1n46o8q">L'histoire de la Réserve forestière de Nyamusisi</h2></div> <p class="svelte-1n46o8q">La déforestation de la Réserve Forestière de Nyamusisi n’est ni soudaine
        ni accidentelle. Elle résulte d’un processus long, cumulatif, inscrit
        dans les transformations régionales. La réserve a progressivement perdu
        ses fonctions écologiques (régulation hydrique, habitat de la faune,
        protection des sols) sous l’effet de pressions multiples.</p></section></div></div>`);function F_(s,t){if(new.target)return ic({component:F_,...s});Pa(t,!1);let e=Mr(!1);var n={$set:oc,$on:(p,d)=>rc(t,p,d)};sc();var r=gw(),o=Kn(mi(r),4),l=mi(o);O_(l,{}),pi(o);var c=Kn(o,2);{var u=p=>{var d=mw(),_=mi(d);N_(_,{$$events:{close:()=>je(e,!1)}}),pi(d),Gs(p,d)},f=p=>{var d=_w(),_=mi(d),g=mi(_),M=Kn(g,2);pi(_),pi(d),Cm(()=>kh(g,"src","/nyamusisi/image/model.png")),hr("click",M,()=>je(e,!0)),Gs(p,d)};Bh(c,p=>{De(e)?p(u):p(f,!1)})}return Vl(2),pi(r),Gs(s,r),Ca(n)}new F_({target:document.getElementById("app")});
