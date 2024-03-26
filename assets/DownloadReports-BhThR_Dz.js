import{d as v,r as h,j as b,c as r,a as e,F as l,x as d,i,o as n,t as u}from"./index-BbjobM8G.js";const y=e("h1",{class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},"Download Reports",-1),f={class:"p-5"},w=e("h2",{class:"text-xl"},"Daily Reports",-1),k=e("p",null,"These reports include data up to the previous day and go as far back as 1 month",-1),x={class:"float"},C=["onClick"],F={class:"inline-block shrink-0 px-3 text-neutral-400"},D={class:"mt-8"},B=e("h2",{class:"text-xl"},"WeedCrawler Archives",-1),R=e("p",null,"These reports were produced by WeedCrawler",-1),S={class:"float"},W=["onClick"],L=v({__name:"DownloadReports",setup(j){const _=h([]),c=h({}),m=async()=>{const{data:a,error:o}=await i.storage.from("sqdc_reports").list("regular");if(o){console.error(o);return}a&&(_.value=a)},g=async()=>{const a=["2023","2022","2021","2020"];for(const o of a){const{data:t,error:s}=await i.storage.from("weedcrawler").list(o);s&&console.error(s),t&&(c.value[o]=t)}},p=async a=>{const{data:o,error:t}=await i.storage.from("sqdc_reports").createSignedUrl("regular/"+a.name,60);if(t){console.error(t);return}if(o){const s=document.createElement("a");s.href=o.signedUrl,s.download=a.name,s.click(),s.remove()}};return b(async()=>{await m(),await g()}),(a,o)=>(n(),r(l,null,[y,e("main",f,[e("div",null,[w,k,e("ul",null,[(n(!0),r(l,null,d(_.value,t=>(n(),r("li",{class:"my-1",key:t.id},[e("div",x,[e("button",{class:"rounded-sm bg-blue-300 px-3 py-1 hover:bg-blue-500",onClick:s=>p(t)},u(t.name),9,C),e("div",F," updated at "+u(new Date(t.updated_at).toLocaleString()),1)])]))),128))])]),e("div",D,[B,R,(n(!0),r(l,null,d(Object.keys(c.value).sort().reverse(),t=>(n(),r("ul",{key:t},[(n(!0),r(l,null,d(c.value[t],s=>(n(),r("li",{class:"my-1",key:s.id},[e("div",S,[e("button",{class:"rounded-sm bg-blue-300 px-3 py-1 hover:bg-blue-500",onClick:q=>p(s)},u(s.name),9,W)])]))),128))]))),128))])])],64))}});export{L as default};
