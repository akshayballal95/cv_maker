import{o as Ce,t as se}from"../chunks/index.cdffb5f6.js";import{S as Ke,a as ze,I as q,g as qe,f as Fe,b as ge,c as ce,s as M,i as ye,d as Q,e as K,P as Me,h as We}from"../chunks/singletons.690b15c1.js";function Xe(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Ze(n){return n.split("%25").map(decodeURI).join("%25")}function Qe(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,o){const f=new URL(n);for(const c of et){let d=f[c];Object.defineProperty(f,c,{get(){return o(),d},enumerable:!0,configurable:!0})}return nt(f),f}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function Be(n){try{return JSON.parse(sessionStorage[n])}catch{}}function He(n,o){const f=JSON.stringify(o);try{sessionStorage[n]=f}catch{}}function ot(...n){let o=5381;for(const f of n)if(typeof f=="string"){let c=f.length;for(;c;)o=o*33^f.charCodeAt(--c)}else if(ArrayBuffer.isView(f)){const c=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let d=c.length;for(;d;)o=o*33^c[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const le=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(ve(n)),le(n,o));const te=new Map;function it(n,o){const f=ve(n,o),c=document.querySelector(f);if(c!=null&&c.textContent){const{body:d,...h}=JSON.parse(c.textContent),L=c.getAttribute("data-ttl");return L&&te.set(f,{body:d,init:h,ttl:1e3*Number(L)}),Promise.resolve(new Response(d,h))}return le(n,o)}function st(n,o,f){if(te.size>0){const c=ve(n,f),d=te.get(c);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(f==null?void 0:f.cache))return new Response(d.body,d.init);te.delete(c)}}return le(o,f)}function ve(n,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),c+=`[data-hash="${ot(...d)}"]`}return c}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(c=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const h=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(h)return o.push({name:h[1],matcher:h[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const L=c.split(/\[(.+?)\](?!\])/);return"/"+L.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return we(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return we(String.fromCharCode(...w.slice(2).split("-").map(A=>parseInt(A,16))));const p=ct.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,O,E,P]=p;return o.push({name:E,matcher:P,optional:!!x,rest:!!O,chained:O?y===1&&L[0]==="":!1}),O?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return we(w)}).join("")}).join("")}/?$`),params:o}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,o,f){const c={},d=n.slice(1);let h=0;for(let L=0;L<o.length;L+=1){const l=o[L],w=d[L-h];if(l.chained&&l.rest&&h){c[l.name]=d.slice(L-h,L+1).filter(y=>y).join("/"),h=0;continue}if(w===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||f[l.matcher](w)){c[l.name]=w;const y=o[L+1],p=d[L+1];y&&!y.rest&&y.optional&&p&&(h=0);continue}if(l.optional&&l.chained){h++;continue}return}if(!h)return c}function we(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:o,dictionary:f,matchers:c}){const d=new Set(o);return Object.entries(f).map(([l,[w,y,p]])=>{const{pattern:x,params:O}=lt(l),E={id:l,exec:P=>{const A=x.exec(P);if(A)return dt(A,O,c)},errors:[1,...p||[]].map(P=>n[P]),layouts:[0,...y||[]].map(L),leaf:h(w)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function h(l){const w=l<0;return w&&(l=~l),[w,n[l]]}function L(l){return l===void 0?l:[d.has(l),n[l]]}}let ee=class{constructor(o,f){this.status=o,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},Ve=class{constructor(o,f){this.status=o,this.location=f}};async function pt(n){var o;for(const f in n)if(typeof((o=n[f])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,d])=>[c,await d])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const mt=-1,gt=-2,yt=-3,wt=-4,_t=-5,bt=-6;function vt(n,o){if(typeof n=="number")return d(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const f=n,c=Array(f.length);function d(h,L=!1){if(h===mt)return;if(h===yt)return NaN;if(h===wt)return 1/0;if(h===_t)return-1/0;if(h===bt)return-0;if(L)throw new Error("Invalid input");if(h in c)return c[h];const l=f[h];if(!l||typeof l!="object")c[h]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],y=o==null?void 0:o[w];if(y)return c[h]=y(d(l[1]));switch(w){case"Date":c[h]=new Date(l[1]);break;case"Set":const p=new Set;c[h]=p;for(let E=1;E<l.length;E+=1)p.add(d(l[E]));break;case"Map":const x=new Map;c[h]=x;for(let E=1;E<l.length;E+=2)x.set(d(l[E]),d(l[E+1]));break;case"RegExp":c[h]=new RegExp(l[1],l[2]);break;case"Object":c[h]=Object(l[1]);break;case"BigInt":c[h]=BigInt(l[1]);break;case"null":const O=Object.create(null);c[h]=O;for(let E=1;E<l.length;E+=2)O[l[E]]=d(l[E+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);c[h]=w;for(let y=0;y<l.length;y+=1){const p=l[y];p!==gt&&(w[y]=d(p))}}else{const w={};c[h]=w;for(const y in l){const p=l[y];w[y]=d(p)}}return c[h]}return d(0)}function Et(n){return n.filter(o=>o!=null)}const z=Be(Ke)??{},Z=Be(ze)??{};function _e(n){z[n]=Q()}function kt(n,o){var xe;const f=ht(n),c=n.nodes[0],d=n.nodes[1];c(),d();const h=document.documentElement,L=[],l=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},x=!1,O=!1,E=!0,P=!1,A=!1,G=!1,H=!1,F,N=(xe=history.state)==null?void 0:xe[q];N||(N=Date.now(),history.replaceState({...history.state,[q]:N},"",location.href));const fe=z[N];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,Ee,ne;async function ke(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=W(t,!0);w=null,await Ae(e,t,[])}function Se(t){l.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=l.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function Re(t){var e;(e=Z[t])==null||e.forEach((r,a)=>{var s,i;(i=(s=l[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Le(){_e(N),He(Ke,z),Se(N),He(ze,Z)}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},m,u){return typeof t=="string"&&(t=new URL(t,qe(document))),ie({url:t,scroll:e?Q():null,keepfocus:a,redirect_chain:m,details:{state:s,replaceState:r},nav_token:u,accepted:()=>{i&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ie(t){return w={id:t.id,promise:Ue(t).then(e=>(e.type==="loaded"&&e.state.error&&(w=null),e))},w.promise}async function ae(...t){const r=f.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function Ae(t,e,r,a,s,i={},m){var b,g,R;Ee=i;let u=t&&await Ue(t);if(!u){if(ye(e,K))return await B(e);u=await $e(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(t==null?void 0:t.url)||e,Ee!==i)return!1;if(u.type==="redirect")if(r.length>10||r.includes(e.pathname))u=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(u.location,e).href,{},[...r,e.pathname],i),!1;else((b=u.props.page)==null?void 0:b.status)>=400&&await M.updated.check()&&await B(e);if(L.length=0,H=!1,P=!0,a&&(_e(a),Se(a)),(g=u.props.page)!=null&&g.url&&u.props.page.url.pathname!==e.pathname&&(e.pathname=(R=u.props.page)==null?void 0:R.url.pathname),s&&s.details){const{details:v}=s,I=v.replaceState?0:1;if(v.state[q]=N+=I,history[v.replaceState?"replaceState":"pushState"](v.state,"",e),!v.replaceState){let S=N+1;for(;Z[S]||z[S];)delete Z[S],delete z[S],S+=1}}if(w=null,O?(p=u.state,u.props.page&&(u.props.page.url=e),F.$set(u.props)):Oe(u),s){const{scroll:v,keepfocus:I}=s,{activeElement:S}=document;if(await se(),E){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));v?scrollTo(v.x,v.y):U?U.scrollIntoView():scrollTo(0,0)}const _=document.activeElement!==S&&document.activeElement!==document.body;!I&&!_&&await be()}else await se();E=!0,u.props.page&&(V=u.props.page),m&&m(),P=!1}function Oe(t){var a;p=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=t.props.page,F=new n.root({target:o,props:{...t.props,stores:M,components:l},hydrate:!0}),Re(N);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(s=>s(r)),O=!0}async function Y({url:t,params:e,branch:r,status:a,error:s,route:i,form:m}){let u="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(u=S.slash);t.pathname=Xe(t.pathname,u),t.search=t.search;const b={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:i},props:{constructors:Et(r).map(S=>S.node.component)}};m!==void 0&&(b.props.form=m);let g={},R=!V,v=0;for(let S=0;S<Math.max(r.length,p.branch.length);S+=1){const _=r[S],U=p.branch[S];(_==null?void 0:_.data)!==(U==null?void 0:U.data)&&(R=!0),_&&(g={...g,..._.data},R&&(b.props[`data_${v}`]=g),v+=1)}return(!p.url||t.href!==p.url.href||p.error!==s||m!==void 0&&m!==V.form||R)&&(b.props.page={error:s,params:e,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(t),form:m??null,data:R?g:V.data}),b}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:i}){var g,R,v;let m=null;const u={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await t();if((g=b.universal)!=null&&g.load){let I=function(..._){for(const U of _){const{href:D}=new URL(U,r);u.dependencies.add(D)}};const S={route:{get id(){return u.route=!0,s.id}},params:new Proxy(a,{get:(_,U)=>(u.params.add(U),_[U])}),data:(i==null?void 0:i.data)??null,url:tt(r,()=>{u.url=!0}),async fetch(_,U){let D;_ instanceof Request?(D=_.url,U={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...U}):D=_;const C=new URL(D,r);return I(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),O?st(D,C.href,U):it(D,U)},setHeaders:()=>{},depends:I,parent(){return u.parent=!0,e()}};m=await b.universal.load.call(null,S)??null,m=m?await pt(m):null}return{node:b,loader:t,server:i,universal:(R=b.universal)!=null&&R.load?{type:"data",data:m,uses:u}:null,data:m??(i==null?void 0:i.data)??null,slash:((v=b.universal)==null?void 0:v.trailingSlash)??(i==null?void 0:i.slash)}}function Pe(t,e,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(L.some(m=>m(new URL(i))))return!0;return!1}function he(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Ue({id:t,invalidating:e,url:r,params:a,route:s}){if((w==null?void 0:w.id)===t)return w.promise;const{errors:i,layouts:m,leaf:u}=s,b=[...m,u];i.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let g=null;const R=p.url?t!==p.url.pathname+p.url.search:!1,v=p.route?s.id!==p.route.id:!1;let I=!1;const S=b.map((k,T)=>{var J;const j=p.branch[T],$=!!(k!=null&&k[0])&&((j==null?void 0:j.loader)!==k[1]||Pe(I,v,R,(J=j.server)==null?void 0:J.uses,a));return $&&(I=!0),$});if(S.some(Boolean)){try{g=await Je(r,S)}catch(k){return re({status:k instanceof ee?k.status:500,error:await X(k,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let U=!1;const D=b.map(async(k,T)=>{var pe;if(!k)return;const j=p.branch[T],$=_==null?void 0:_[T];if((!$||$.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Pe(U,v,R,(pe=j.universal)==null?void 0:pe.uses,a))return j;if(U=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:k[1],url:r,params:a,route:s,parent:async()=>{var De;const Te={};for(let me=0;me<T;me+=1)Object.assign(Te,(De=await D[me])==null?void 0:De.data);return Te},server_data_node:he($===void 0&&k[0]?{type:"skip"}:$??null,k[0]?j==null?void 0:j.server:void 0)})});for(const k of D)k.catch(()=>{});const C=[];for(let k=0;k<b.length;k+=1)if(b[k])try{C.push(await D[k])}catch(T){if(T instanceof Ve)return{type:"redirect",location:T.location};let j=500,$;if(_!=null&&_.includes(T))j=T.status??j,$=T.error;else if(T instanceof ee)j=T.status,$=T.body;else{if(await M.updated.check())return await B(r);$=await X(T,{params:a,url:r,route:{id:s.id}})}const J=await je(k,C,i);return J?await Y({url:r,params:a,branch:C.slice(0,J.idx).concat(J.node),status:j,error:$,route:s}):await $e(r,{id:s.id},$,j)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function je(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let i=null;if(n.server_loads[0]===0)try{const g=await Je(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||x)&&await B(r)}const u=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:he(i)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[u,b],status:t,error:e,route:null})}function W(t,e){if(ye(t,K))return;const r=oe(t);for(const a of f){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:Qe(s),url:t}}}function oe(t){return Ze(t.pathname.slice(K.length)||"/")}function Ne({url:t,type:e,intent:r,delta:a}){var u,b;let s=!1;const i={from:{params:p.params,route:{id:((u=p.route)==null?void 0:u.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((b=r==null?void 0:r.route)==null?void 0:b.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(i.delta=a);const m={...i,cancel:()=>{s=!0}};return A||y.before_navigate.forEach(g=>g(m)),s?null:i}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:i,delta:m,nav_token:u,accepted:b,blocked:g}){const R=W(t,!1),v=Ne({url:t,type:i,delta:m,intent:R});if(!v){g();return}const I=N;b(),A=!0,O&&M.navigating.set(v),await Ae(R,t,a,I,{scroll:e,keepfocus:r,details:s},u,()=>{A=!1,y.after_navigate.forEach(S=>S(v)),M.navigating.set(null)})}async function $e(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!x?await re({status:a,error:r,url:t,route:e}):await B(t)}function B(t){return location.href=t.href,new Promise(()=>{})}function Ye(){let t;h.addEventListener("mousemove",i=>{const m=i.target;clearTimeout(t),t=setTimeout(()=>{a(m,2)},20)});function e(i){a(i.composedPath()[0],1)}h.addEventListener("mousedown",e),h.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(i=>{for(const m of i)m.isIntersecting&&(ae(oe(new URL(m.target.href))),r.unobserve(m.target))},{threshold:0});function a(i,m){const u=Fe(i,h);if(!u)return;const{url:b,external:g,download:R}=ge(u,K);if(g||R)return;const v=ce(u);if(!v.reload)if(m<=v.preload_data){const I=W(b,!1);I&&Ie(I)}else m<=v.preload_code&&ae(oe(b))}function s(){r.disconnect();for(const i of h.querySelectorAll("a")){const{url:m,external:u,download:b}=ge(i,K);if(u||b)continue;const g=ce(i);g.reload||(g.preload_code===Me.viewport&&r.observe(i),g.preload_code===Me.eager&&ae(oe(m)))}}y.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Ce(()=>(y.after_navigate.push(t),()=>{const e=y.after_navigate.indexOf(t);y.after_navigate.splice(e,1)}))},before_navigate:t=>{Ce(()=>(y.before_navigate.push(t),()=>{const e=y.before_navigate.indexOf(t);y.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(P||!O)&&(E=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")L.push(t);else{const{href:e}=new URL(t,location.href);L.push(r=>r.href===e)}return ke()},invalidateAll:()=>(H=!0,ke()),preload_data:async t=>{const e=new URL(t,qe(document)),r=W(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Ie(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await je(p.branch.length,r,a.errors);if(s){const i=await Y({url:e,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});p=i.state,F.$set(i.props),se().then(be)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&be())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(Le(),!A){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(i=>i(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(t=navigator.connection)!=null&&t.saveData||Ye(),h.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Fe(e.composedPath()[0],h);if(!r)return;const{url:a,external:s,target:i,download:m}=ge(r,K);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const u=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||m)return;if(s||u.reload){Ne({url:a,type:"link"})?A=!0:e.preventDefault();return}const[g,R]=a.href.split("#");if(R!==void 0&&g===location.href.split("#")[0]){G=!0,_e(N),p.url=a,M.page.set({...V,url:a}),M.page.notify();return}ie({url:a,scroll:u.noscroll?Q():null,keepfocus:u.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:u.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),h.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(i,K))return;const m=e.target,{keep_focus:u,noscroll:b,reload:g,replace_state:R}=ce(m);if(g)return;e.preventDefault(),e.stopPropagation();const v=new FormData(m),I=a==null?void 0:a.getAttribute("name");I&&v.append(I,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(v).toString(),ie({url:i,scroll:b?Q():null,keepfocus:u??!1,redirect_chain:[],details:{state:{},replaceState:R??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===N)return;const a=z[e.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[N]=Q(),N=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-N;let i=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=e.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Re(N)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[q]:++N},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&M.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:i,form:m})=>{x=!0;const u=new URL(location.href);({params:a={},route:s={id:null}}=W(u,!1)||{});let b;try{const g=r.map(async(R,v)=>{const I=i[v];return I!=null&&I.uses&&(I.uses=Ge(I.uses)),de({loader:n.nodes[R],url:u,params:a,route:s,parent:async()=>{const S={};for(let _=0;_<v;_+=1)Object.assign(S,(await g[_]).data);return S},server_data_node:he(I)})});b=await Y({url:u,params:a,branch:await Promise.all(g),status:t,error:e,form:m,route:f.find(({id:R})=>R===s.id)??null})}catch(g){if(g instanceof Ve){await B(new URL(g.location,location.href));return}b=await re({status:g instanceof ee?g.status:500,error:await X(g,{url:u,params:a,route:s}),url:u,route:s})}Oe(b)}}}async function Je(n,o){const f=new URL(n);f.pathname=rt(n.pathname),f.searchParams.append("x-sveltekit-invalidated",o.map(d=>d?"1":"").join("_"));const c=await le(f.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async d=>{var p;const h=new Map,L=c.body.getReader(),l=new TextDecoder;function w(x){return vt(x,{Promise:O=>new Promise((E,P)=>{h.set(O,{fulfil:E,reject:P})})})}let y="";for(;;){const{done:x,value:O}=await L.read();if(x&&!y)break;for(y+=!O&&y?`
`:l.decode(O);;){const E=y.indexOf(`
`);if(E===-1)break;const P=JSON.parse(y.slice(0,E));if(y=y.slice(E+1),P.type==="redirect")return d(P);if(P.type==="data")(p=P.nodes)==null||p.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Ge(A.uses),A.data=w(A.data))}),d(P);else if(P.type==="chunk"){const{id:A,data:G,error:H}=P,F=h.get(A);h.delete(A),H?F.reject(w(H)):F.fulfil(w(G))}}}})}function Ge(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function be(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,f=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),f!==null?o.setAttribute("tabindex",f):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var d;c((d=getSelection())==null?void 0:d.removeAllRanges())})})}}async function At(n,o,f){const c=kt(n,o);We({client:c}),f?await c._hydrate(f):c.goto(location.href,{replaceState:!0}),c._start_router()}export{At as start};
