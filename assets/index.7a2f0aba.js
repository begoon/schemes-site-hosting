(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();function b(){}function ge(t){return t&&typeof t=="object"&&typeof t.then=="function"}function de(t){return t()}function x(){return Object.create(null)}function I(t){t.forEach(de)}function pe(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ye(t){return Object.keys(t).length===0}function be(t){return t==null?"":t}function v(t,e){t.appendChild(e)}function p(t,e,l){t.insertBefore(e,l||null)}function d(t){t.parentNode.removeChild(t)}function me(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function m(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function q(){return y(" ")}function X(){return y("")}function J(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function k(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function ke(t){return Array.from(t.childNodes)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function ee(t,e,l){t.classList[l?"add":"remove"](e)}function we(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,l,n,e),s}let z;function L(t){z=t}function ve(){if(!z)throw new Error("Function called outside component initialization");return z}function he(){const t=ve();return(e,l,{cancelable:n=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=we(e,l,{cancelable:n});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}const N=[],te=[],R=[],ne=[],$e=Promise.resolve();let K=!1;function Ee(){K||(K=!0,$e.then(Y))}function W(t){R.push(t)}const H=new Set;let T=0;function Y(){const t=z;do{for(;T<N.length;){const e=N[T];T++,L(e),Ce(e.$$)}for(L(null),N.length=0,T=0;te.length;)te.pop()();for(let e=0;e<R.length;e+=1){const l=R[e];H.has(l)||(H.add(l),l())}R.length=0}while(N.length);for(;ne.length;)ne.pop()();K=!1,H.clear(),L(t)}function Ce(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const V=new Set;let j;function Q(){j={r:0,c:[],p:j}}function U(){j.r||I(j.c),j=j.p}function $(t,e){t&&t.i&&(V.delete(t),t.i(e))}function C(t,e,l,n){if(t&&t.o){if(V.has(t))return;V.add(t),j.c.push(()=>{V.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function qe(t,e){const l=e.token={};function n(s,o,r,c){if(e.token!==l)return;e.resolved=c;let u=e.ctx;r!==void 0&&(u=u.slice(),u[r]=c);const i=s&&(e.current=s)(u);let f=!1;e.block&&(e.blocks?e.blocks.forEach((_,a)=>{a!==o&&_&&(Q(),C(_,1,1,()=>{e.blocks[a]===_&&(e.blocks[a]=null)}),U())}):e.block.d(1),i.c(),$(i,1),i.m(e.mount(),e.anchor),f=!0),e.block=i,e.blocks&&(e.blocks[o]=i),f&&Y()}if(ge(t)){const s=ve();if(t.then(o=>{L(s),n(e.then,1,e.value,o),L(null)},o=>{if(L(s),n(e.catch,2,e.error,o),L(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function Se(t,e,l){const n=e.slice(),{resolved:s}=t;t.current===t.then&&(n[t.value]=s),t.current===t.catch&&(n[t.error]=s),t.block.p(n,l)}function G(t){t&&t.c()}function D(t,e,l,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,l),n||W(()=>{const r=t.$$.on_mount.map(de).filter(pe);t.$$.on_destroy?t.$$.on_destroy.push(...r):I(r),t.$$.on_mount=[]}),o.forEach(W)}function F(t,e){const l=t.$$;l.fragment!==null&&(I(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Le(t,e){t.$$.dirty[0]===-1&&(N.push(t),Ee(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,l,n,s,o,r,c=[-1]){const u=z;L(t);const i=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:s,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};r&&r(i.root);let f=!1;if(i.ctx=l?l(t,e.props||{},(_,a,...h)=>{const w=h.length?h[0]:a;return i.ctx&&s(i.ctx[_],i.ctx[_]=w)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](w),f&&Le(t,_)),a}):[],i.update(),f=!0,I(i.before_update),i.fragment=n?n(i.ctx):!1,e.target){if(e.hydrate){const _=ke(e.target);i.fragment&&i.fragment.l(_),_.forEach(d)}else i.fragment&&i.fragment.c();e.intro&&$(t.$$.fragment),D(t,e.target,e.anchor,e.customElement),Y()}L(u)}class B{$destroy(){F(this,1),this.$destroy=b}$on(e,l){if(!pe(l))return b;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ae=(t,e)=>{if(t[0]==="#"&&(t=t.slice(1)),t.length===3){let n="";t.split("").forEach(s=>{n+=s,n+=s}),t=n}return`rgba(${(t.match(/.{2}/g)||[]).map(n=>parseInt(n,16)).join(", ")}, ${e})`},le=(t,e=0)=>[...Array(t).keys()].map(l=>l+e);function se(t,e,l){const n=t.slice();return n[6]=e[l],n}function oe(t){let e;return{c(){e=m("div"),k(e,"class","lines small-lines "+t[6]+" svelte-bnawe9"),A(e,"--color",t[0]),A(e,"--duration",t[2]),ee(e,"pause-animation",t[4])},m(l,n){p(l,e,n)},p(l,n){n&1&&A(e,"--color",l[0]),n&4&&A(e,"--duration",l[2]),n&16&&ee(e,"pause-animation",l[4])},d(l){l&&d(e)}}}function Pe(t){let e,l=le(2,1),n=[];for(let s=0;s<l.length;s+=1)n[s]=oe(se(t,l,s));return{c(){e=m("div");for(let s=0;s<n.length;s+=1)n[s].c();k(e,"class","wrapper svelte-bnawe9"),A(e,"--size",t[3]+t[1]),A(e,"--rgba",t[5])},m(s,o){p(s,e,o);for(let r=0;r<n.length;r+=1)n[r].m(e,null)},p(s,[o]){if(o&21){l=le(2,1);let r;for(r=0;r<l.length;r+=1){const c=se(s,l,r);n[r]?n[r].p(c,o):(n[r]=oe(c),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=l.length}o&10&&A(e,"--size",s[3]+s[1]),o&32&&A(e,"--rgba",s[5])},i:b,o:b,d(s){s&&d(e),me(n,s)}}}function je(t,e,l){let{color:n="#FF3E00"}=e,{unit:s="px"}=e,{duration:o="2.1s"}=e,{size:r="60"}=e,{pause:c=!1}=e,u;return t.$$set=i=>{"color"in i&&l(0,n=i.color),"unit"in i&&l(1,s=i.unit),"duration"in i&&l(2,o=i.duration),"size"in i&&l(3,r=i.size),"pause"in i&&l(4,c=i.pause)},t.$$.update=()=>{t.$$.dirty&1&&l(5,u=Ae(n,.2))},[n,s,o,r,c,u]}class Oe extends B{constructor(e){super(),M(this,e,je,Pe,P,{color:0,unit:1,duration:2,size:3,pause:4})}}const Ne={VITE_SITE:"http://127.0.0.1:9000/traps/questions",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_API||"https://human-api.deta.dev",ze=async()=>{const t=Ne+"/sections";console.log(`loading from ${t}...`);const e=await(await fetch(t,{redirect:"follow"})).json();return console.log("loaded",e),e};function re(t){let e,l,n,s,o,r;return{c(){e=m("button"),l=y("\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C: "),n=y(t[2]),s=y("%"),k(e,"class","bg-gray-200")},m(c,u){p(c,e,u),v(e,l),v(e,n),v(e,s),o||(r=J(e,"click",t[3]),o=!0)},p(c,u){u&4&&O(n,c[2])},d(c){c&&d(e),o=!1,r()}}}function Ie(t){let e,l,n=t[0].text+"",s,o,r,c,u,i,f=t[1],_,a,h=re(t);return{c(){e=m("div"),l=m("div"),s=y(n),o=q(),r=m("div"),c=m("input"),u=q(),i=m("div"),h.c(),k(l,"class",be(De)+" svelte-1dnwh2u"),k(c,"class","slider my-4 svelte-1dnwh2u"),k(c,"type","range"),k(c,"min","0"),k(c,"max","4"),c.value=t[1],k(r,"class","slidecontainer svelte-1dnwh2u")},m(w,E){p(w,e,E),v(e,l),v(l,s),v(e,o),v(e,r),v(r,c),v(e,u),v(e,i),h.m(i,null),_||(a=J(c,"input",t[4]),_=!0)},p(w,[E]){E&1&&n!==(n=w[0].text+"")&&O(s,n),E&2&&(c.value=w[1]),E&2&&P(f,f=w[1])?(h.d(1),h=re(w),h.c(),h.m(i,null)):h.p(w,E)},i:b,o:b,d(w){w&&d(e),h.d(w),_=!1,a()}}}const De="p-2 m-1 text-white bg-slate-500 hover:bg-slate-800";function Fe(t,e,l){let n,{question:s}=e;const o=he(),r=()=>{o("answer",c)};let c=2;const u=i=>l(1,c=i.target.value);return t.$$set=i=>{"question"in i&&l(0,s=i.question)},t.$$.update=()=>{t.$$.dirty&2&&l(2,n=c*100/4)},[s,c,n,r,u]}class Me extends B{constructor(e){super(),M(this,e,Fe,Ie,P,{question:0})}}function Be(t){let e,l,n,s,o=t[2].length+"",r,c,u,i,f=t[1].length+1+"",_,a,h=t[2].length+"",w,E;return e=new Me({props:{question:t[0].questions[t[1].length]}}),e.$on("answer",t[4]),{c(){G(e.$$.fragment),l=q(),n=m("div"),s=m("progress"),r=y(o),u=q(),i=m("div"),_=y(f),a=y("/"),w=y(h),k(s,"class","my-4 w-full bg-grey-800 border-4 text-red"),s.value=c=t[1].length,k(s,"max",t[2].length),k(n,"class","container")},m(g,S){D(e,g,S),p(g,l,S),p(g,n,S),v(n,s),v(s,r),p(g,u,S),p(g,i,S),v(i,_),v(i,a),v(i,w),E=!0},p(g,S){const Z={};S&3&&(Z.question=g[0].questions[g[1].length]),e.$set(Z),(!E||S&2&&c!==(c=g[1].length))&&(s.value=c),(!E||S&2)&&f!==(f=g[1].length+1+"")&&O(_,f)},i(g){E||($(e.$$.fragment,g),E=!0)},o(g){C(e.$$.fragment,g),E=!1},d(g){F(e,g),g&&d(l),g&&d(n),g&&d(u),g&&d(i)}}}function ie(t){let e=!t[3](),l,n,s=e&&Be(t);return{c(){s&&s.c(),l=X()},m(o,r){s&&s.m(o,r),p(o,l,r),n=!0},p(o,r){e&&s.p(o,r)},i(o){n||($(s),n=!0)},o(o){C(s),n=!1},d(o){s&&s.d(o),o&&d(l)}}}function Te(t){let e,l=t[1],n,s=ie(t);return{c(){e=m("main"),s.c()},m(o,r){p(o,e,r),s.m(e,null),n=!0},p(o,[r]){r&2&&P(l,l=o[1])?(Q(),C(s,1,1,b),U(),s=ie(o),s.c(),$(s,1),s.m(e,null)):s.p(o,r)},i(o){n||($(s),n=!0)},o(o){C(s),n=!1},d(o){o&&d(e),s.d(o)}}}function Re(t){for(var e=t.length-1;e>0;e--){var l=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[l],t[l]=n}}function Ve(t,e,l){let{section:n}=e;const s=he();let o=n.questions;Re(o);let r=[];const c=()=>r.length==n.questions.length,u=({detail:i})=>{l(1,r=[...r,{answer:i,question:n.questions[r.length]}]),c()&&s("complete",r)};return t.$$set=i=>{"section"in i&&l(0,n=i.section)},[n,r,o,c,u]}class Je extends B{constructor(e){super(),M(this,e,Ve,Te,P,{section:0})}}function ce(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function Qe(t){const e=t.slice(),l=e[8]().meta.description;return e[9]=l,e}function Ue(t){let e,l,n,s;return n=new Je({props:{section:t[8]()}}),n.$on("complete",t[5]),{c(){e=m("div"),e.textContent=`${t[8]().meta.title}`,l=q(),G(n.$$.fragment),k(e,"class","fixed top-0 left-0 right-0 bg-blue-500 text-white")},m(o,r){p(o,e,r),p(o,l,r),D(n,o,r),s=!0},p:b,i(o){s||($(n.$$.fragment,o),s=!0)},o(o){C(n.$$.fragment,o),s=!1},d(o){o&&d(e),o&&d(l),F(n,o)}}}function Ge(t){let e,l,n;function s(c,u){return u&1&&(e=null),e==null&&(e=c[7]()<c[0].length),e?We:Ke}let o=s(t,-1),r=o(t);return{c(){r.c(),l=q(),n=m("p"),n.innerHTML='<a href="/">\u041D\u0430\u0447\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430</a>'},m(c,u){r.m(c,u),p(c,l,u),p(c,n,u)},p(c,u){o===(o=s(c,u))&&r?r.p(c,u):(r.d(1),r=o(c),r&&(r.c(),r.m(l.parentNode,l)))},i:b,o:b,d(c){r.d(c),c&&d(l),c&&d(n)}}}function He(t){let e,l,n,s,o,r,c,u=t[9]&&Xe(t);return{c(){e=m("div"),e.textContent=`${t[8]().meta.title}`,l=q(),u&&u.c(),n=q(),s=m("p"),o=m("button"),o.textContent="\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C",k(e,"class","fixed top-0 left-0 right-0 bg-blue-500 text-white"),k(o,"class","svelte-1rs5qb4")},m(i,f){p(i,e,f),p(i,l,f),u&&u.m(i,f),p(i,n,f),p(i,s,f),v(s,o),r||(c=J(o,"click",t[4]),r=!0)},p(i,f){i[9]&&u.p(i,f)},i:b,o:b,d(i){i&&d(e),i&&d(l),u&&u.d(i),i&&d(n),i&&d(s),r=!1,c()}}}function Ke(t){let e,l,n,s,o,r=t[1],c=[];for(let u=0;u<r.length;u+=1)c[u]=ue(ce(t,r,u));return{c(){e=m("h1"),e.textContent="\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043E",l=q(),n=m("div"),s=y(`\u041E\u0442\u0432\u0435\u0442\u044B \u043F\u043E \u0432\u0441\u0435\u043C \u0441\u0435\u043A\u0446\u0438\u044F\u043C:
                    `),o=m("ul");for(let u=0;u<c.length;u+=1)c[u].c()},m(u,i){p(u,e,i),p(u,l,i),p(u,n,i),v(n,s),v(n,o);for(let f=0;f<c.length;f+=1)c[f].m(o,null)},p(u,i){if(i&3){r=u[1];let f;for(f=0;f<r.length;f+=1){const _=ce(u,r,f);c[f]?c[f].p(_,i):(c[f]=ue(_),c[f].c(),c[f].m(o,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=r.length}},d(u){u&&d(e),u&&d(l),u&&d(n),me(c,u)}}}function We(t){let e,l,n,s,o=t[1][t[1].length-1].map(_e).join(", ")+"",r,c,u,i,f,_;return{c(){e=m("h2"),e.textContent="\u0421\u0435\u043A\u0446\u0438\u044F \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u0430",l=q(),n=m("div"),s=y("\u041E\u0442\u0432\u0435\u0442\u044B: "),r=y(o),c=q(),u=m("p"),i=m("button"),i.textContent="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B",k(i,"class","svelte-1rs5qb4")},m(a,h){p(a,e,h),p(a,l,h),p(a,n,h),v(n,s),v(n,r),p(a,c,h),p(a,u,h),v(u,i),f||(_=J(i,"click",t[6]),f=!0)},p(a,h){h&2&&o!==(o=a[1][a[1].length-1].map(_e).join(", ")+"")&&O(r,o)},d(a){a&&d(e),a&&d(l),a&&d(n),a&&d(c),a&&d(u),f=!1,_()}}}function ue(t){let e,l=t[12]+1+"",n,s,o=t[0][t[12]].meta.title+"",r,c,u=t[10].map(ae).join(", ")+"",i,f;return{c(){e=m("li"),n=y(l),s=y(": "),r=y(o),c=y(`:
                                `),i=y(u),f=q()},m(_,a){p(_,e,a),v(e,n),v(e,s),v(e,r),v(e,c),v(e,i),v(e,f)},p(_,a){a&1&&o!==(o=_[0][_[12]].meta.title+"")&&O(r,o),a&2&&u!==(u=_[10].map(ae).join(", ")+"")&&O(i,u)},d(_){_&&d(e)}}}function Xe(t){let e,l=t[9]+"",n;return{c(){e=m("h3"),n=y(l),k(e,"class","rounded-lg p-4 w-80 bg-blue-200 text-black")},m(s,o){p(s,e,o),v(e,n)},p:b,d(s){s&&d(e)}}}function fe(t){let e,l,n,s;const o=[He,Ge,Ue],r=[];function c(i,f){return i[2]==i[3].description?0:i[2]==i[3].sectionCompleted?1:2}function u(i,f){return f===0?Qe(i):i}return e=c(t),l=r[e]=o[e](u(t,e)),{c(){l.c(),n=X()},m(i,f){r[e].m(i,f),p(i,n,f),s=!0},p(i,f){let _=e;e=c(i),e===_?r[e].p(u(i,e),f):(Q(),C(r[_],1,1,()=>{r[_]=null}),U(),l=r[e],l?l.p(u(i,e),f):(l=r[e]=o[e](u(i,e)),l.c()),$(l,1),l.m(n.parentNode,n))},i(i){s||($(l),s=!0)},o(i){C(l),s=!1},d(i){r[e].d(i),i&&d(n)}}}function Ye(t){let e,l=t[2],n,s=fe(t);return{c(){e=m("main"),s.c()},m(o,r){p(o,e,r),s.m(e,null),n=!0},p(o,[r]){r&4&&P(l,l=o[2])?(Q(),C(s,1,1,b),U(),s=fe(o),s.c(),$(s,1),s.m(e,null)):s.p(o,r)},i(o){n||($(s),n=!0)},o(o){C(s),n=!1},d(o){o&&d(e),s.d(o)}}}const _e=t=>t.answer,ae=t=>t.answer;function Ze(t,e,l){let{sections:n}=e,s=[];const o={description:"description",running:"running",sectionCompleted:"sectionCompleted"};let r=o.description;const c=()=>{l(2,r=o.running)},u=({detail:a})=>{l(1,s=[...s,a]),l(2,r=o.sectionCompleted)},i=()=>{l(2,r=o.description)},f=()=>s.length,_=()=>n[f()];return t.$$set=a=>{"sections"in a&&l(0,n=a.sections)},[n,s,r,o,c,u,i,f,_]}class xe extends B{constructor(e){super(),M(this,e,Ze,Ye,P,{sections:0})}}function et(t){let e;return{c(){e=m("p"),e.textContent="\u041E\u0448\u0438\u0431\u043A\u0430!"},m(l,n){p(l,e,n)},p:b,i:b,o:b,d(l){l&&d(e)}}}function tt(t){let e,l;return e=new xe({props:{sections:t[0]}}),{c(){G(e.$$.fragment)},m(n,s){D(e,n,s),l=!0},p(n,s){const o={};s&1&&(o.sections=n[0]),e.$set(o)},i(n){l||($(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function nt(t){let e,l,n;return l=new Oe({props:{size:"100",color:"#FF3E00",unit:"px",duration:"1s"}}),{c(){e=m("div"),G(l.$$.fragment)},m(s,o){p(s,e,o),D(l,e,null),n=!0},p:b,i(s){n||($(l.$$.fragment,s),n=!0)},o(s){C(l.$$.fragment,s),n=!1},d(s){s&&d(e),F(l)}}}function lt(t){let e,l,n={ctx:t,current:null,token:null,hasCatch:!0,pending:nt,then:tt,catch:et,value:2,error:3,blocks:[,,,]};return qe(t[1],n),{c(){e=X(),n.block.c()},m(s,o){p(s,e,o),n.block.m(s,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(s,[o]){t=s,Se(n,t,o)},i(s){l||($(n.block),l=!0)},o(s){for(let o=0;o<3;o+=1){const r=n.blocks[o];C(r)}l=!1},d(s){s&&d(e),n.block.d(s),n.token=null,n=null}}}function st(t,e,l){let n=[];const s=(async()=>{l(0,n=await ze())})();return[n,s]}class ot extends B{constructor(e){super(),M(this,e,st,lt,P,{})}}new ot({target:document.getElementById("app")});
