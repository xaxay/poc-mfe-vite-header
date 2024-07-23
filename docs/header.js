import{components as E}from"vuetify";import{defineComponent as S,ref as i,computed as p,onMounted as D,onUnmounted as R,openBlock as m,createBlock as C,withCtx as e,createVNode as t,createElementVNode as n,toDisplayString as _,createElementBlock as F,Fragment as N,createTextVNode as l,createCommentVNode as x,unref as L,pushScopeId as T,popScopeId as M,onMounted as onM, onUnmounted as onU}from"vue";import{useCounterStore as y}from"@browser-module/stores/counter";import{onRouterLoaded as Z,getRouter as A,navigateTo as P,getCurrentRoute as U,getDefaultPath as O}from"@browser-module/api/nav";import{getUserLogin as j,isLogined as q,getExpiredInSeconds as k,logout as z}from"@browser-module/api/user";const G="data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M261.126%20140.65L164.624%20307.732L256.001%20466L377.028%20256.5L498.001%2047H315.192L261.126%20140.65Z'%20fill='%231697F6'/%3e%3cpath%20d='M135.027%20256.5L141.365%20267.518L231.64%20111.178L268.731%2047H256H14L135.027%20256.5Z'%20fill='%23AEDDFF'/%3e%3cpath%20d='M315.191%2047C360.935%20197.446%20256%20466%20256%20466L164.624%20307.732L315.191%2047Z'%20fill='%231867C0'/%3e%3cpath%20d='M268.731%2047C76.0026%2047%20141.366%20267.518%20141.366%20267.518L268.731%2047Z'%20fill='%237BC6FF'/%3e%3c/svg%3e",{VImg:J,VToolbarTitle:K,VIcon:v,VTooltip:f,VBtn:g,VBadge:Q,VAvatar:W,VAppBar:X}=E,c=a=>(T("data-v-0ac9e986"),a=a(),M(),a),Y={class:"title"},$=c(()=>n("b",null,"Dashboard",-1)),ee=c(()=>n("br",null,null,-1)),te=c(()=>n("b",null,"Notifications",-1)),oe=c(()=>n("br",null,null,-1)),ne=c(()=>n("br",null,null,-1)),ae=c(()=>n("br",null,null,-1)),le=S({__name:"Header",setup(a){let sE;onM(()=>{sE=document.createElement('style');sE.textContent=`.logo[data-v-0ac9e986]{max-width:2rem}.title[data-v-0ac9e986]{font-size:1.5rem}
`;document.head.appendChild(sE);});onU(()=>{if(sE){document.head.removeChild(sE);}});console.log("[Header.vue] setup started");const r=y(),s=i("mdi-account"),u=i(!1),d=i(""),I=p(()=>r.counter),V=p(()=>j()),w=p(()=>q()),h=i(k()),H=()=>{h.value=k()},B=()=>{P("/dashboard")},b=()=>{const o=U();u.value=o.path===O(),d.value=o.meta.title||"",console.log("[Header.vue] updateRouteInfo.",o.path,"currentRoute:",o)};return Z(o=>{b(),A().afterEach(()=>{console.log("[Header.vue] router afterEach"),b()})}),D(()=>{console.log("[Header.vue] mounted");const o=setInterval(H,1e3);R(()=>{clearInterval(o)})}),console.log("[Header.vue] setup ended"),(o,re)=>(m(),C(X,{app:""},{default:e(()=>[t(J,{src:G,alt:"Logo",class:"logo","max-width":"5rem"}),t(K,null,{default:e(()=>[n("span",Y,_(d.value),1)]),_:1}),w.value?(m(),F(N,{key:0},[u.value?x("",!0):(m(),C(g,{key:0,icon:"",onClick:B},{default:e(()=>[t(v,null,{default:e(()=>[l("mdi-view-dashboard")]),_:1}),t(f,{activator:"parent",location:"bottom"},{default:e(()=>[$,ee,l("Click to open ")]),_:1})]),_:1})),t(g,{icon:"",onClick:L(r).resetCounter},{default:e(()=>[t(Q,{content:I.value,color:"red","offset-x":"-5",max:"99"},{default:e(()=>[t(v,null,{default:e(()=>[l("mdi-bell")]),_:1})]),_:1},8,["content"]),t(f,{activator:"parent",location:"bottom"},{default:e(()=>[te,oe,l("Click to reset ")]),_:1})]),_:1},8,["onClick"]),t(g,{icon:"",onClick:L(z),class:"mx-4"},{default:e(()=>[t(W,null,{default:e(()=>[t(v,null,{default:e(()=>[l(_(s.value),1)]),_:1}),t(f,{activator:"parent",location:"bottom"},{default:e(()=>[n("b",null,_(V.value),1),ne,l("Expired in: "+_(h.value)+" seconds. ",1),ae,l("Click to logout ")]),_:1})]),_:1})]),_:1},8,["onClick"])],64)):x("",!0)]),_:1}))}}),ce=(a,r)=>{const s=a.__vccOpts||a;for(const[u,d]of r)s[u]=d;return s},pe=ce(le,[["__scopeId","data-v-0ac9e986"]]);export{pe as default};