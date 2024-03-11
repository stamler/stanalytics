import{d as y,r as n,u as _,s as k,w as L,c as P,a as s,b as c,v as m,e as f,t as p,f as v,n as V,g as j,h as A,o as B,i as C}from"./index-B53qDEAa.js";const E={class:"flex flex-col text-lg md:h-screen md:items-center md:justify-center"},F={class:"w-full"},R=s("h1",{class:"my-2"},"Log In",-1),S={class:"flex flex-col"},q={class:"flex items-center justify-between"},D=["disabled"],I={class:"mt-4"},U=y({__name:"LoginView",setup(M){const a=n(""),d=n(""),i=_(),{isAuthenticated:b,loading:u}=k(i),g=j(),h=A(),r=n(""),l=n(!1);L(b,t=>{var e;t===!0&&(console.log("Already authenticated, redirecting..."),g.push(((e=h.redirectedFrom)==null?void 0:e.path)||"/"))},{immediate:!0});const w=async function(){const{error:t}=await C.auth.resetPasswordForEmail(a.value);if(t!==null){r.value=t.message,l.value=!0;return}l.value=!1,r.value="Password reset email sent"},x=async function(t,e){const{error:o}=await i.login(t,e);if(o!==null){r.value=o.message,l.value=!0;return}};return(t,e)=>(B(),P("div",E,[s("form",{class:"flex flex-col p-4 md:min-w-96 md:items-center md:justify-center md:rounded-md md:border md:border-gray-300",onSubmit:e[2]||(e[2]=v(o=>x(a.value,d.value),["prevent"]))},[s("div",F,[R,s("div",S,[c(s("input",{class:"my-2 h-12 rounded-md border border-gray-200 p-2",required:"",type:"email",placeholder:"email","onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o)},null,512),[[m,a.value]]),c(s("input",{class:"my-2 h-12 rounded-md border border-gray-200 p-2",required:"",type:"password",placeholder:"password","onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o)},null,512),[[m,d.value]])]),s("div",q,[s("button",{class:"focus:shadow-outline my-2 rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none",type:"submit",disabled:f(u)},p(f(u)?"Loading":"Login"),9,D),s("button",{class:"inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800",onClick:v(w,["prevent"])}," Forgot Password? ")]),s("div",I,[s("span",{class:V(l.value?"text-red-500":"text-neutral-700")},p(r.value),3)])])],32)]))}});export{U as default};
