import{O as u,L as i}from"./LoadingAnimation-DJ6XtrPr.js";import{d as p,r as o,j as b,c as n,a,k as r,l as m,i as _,o as c}from"./index-7Jfqou5p.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f=a("h1",{class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},"Dashboard",-1),h={class:"bg-neutral-100"},x=a("h2",{class:"text-xl font-bold text-neutral-900 md:p-2"},"Supplier Leaderboard",-1),g=a("p",{class:"text-lg text-neutral-900 md:p-2"},"Québec 7-day trailing sales by supplier",-1),v={key:0,class:"inline-block w-5"},w=p({__name:"DashboardView",setup(y){const t=o([]),e=o(!1);async function d(){e.value=!0;const s=_.from("supplier_leaderboard").select(),{data:l}=await s;t.value=l||[],e.value=!1}return b(()=>{d()}),(s,l)=>(c(),n("main",null,[f,a("div",h,[x,g,e.value?(c(),n("span",v,[r(i)])):m("",!0),r(u,{class:"md:p-2",tableData:t.value,tableConfig:{columnFormatters:{value:"dollars"}}},null,8,["tableData"])])]))}});export{w as default};
