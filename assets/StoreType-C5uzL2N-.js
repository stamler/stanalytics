import{_ as c,O as V,r as k,L as D}from"./SelectFilter.vue_vue_type_script_setup_true_lang-8sdsFfTT.js";import{d as C,r as a,w as S,c as m,a as r,t as T,n as h,k as t,e as j,F as q,h as O,i as B,o as p}from"./index-nGNKtJAK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},U={class:"bg-neutral-100"},L={class:"flex w-screen flex-wrap p-2 md:w-full"},N={key:1,class:"inline-block w-5"},A=C({__name:"StoreType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const i=f,_=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],s=a(""),y=a(""),g=a(""),o=a(_),n=a(_),v=a([]),u=a(!1),w=O(),d=a(!0);S([y,o,n,w,g,s],()=>{d.value=!0});async function x(){u.value=!0;const b=B.rpc("store_type_performance",{_store:s.value,_start_date:o.value,_end_date:n.value}),{data:e}=await b;v.value=e||[],u.value=!1,d.value=!1}return(b,e)=>(p(),m(q,null,[r("h1",F,T(i.name),1),r("div",U,[r("div",L,[r("span",{class:h([d.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[u.value===!1?(p(),m("button",{key:0,class:"inline-block w-5 underline",onClick:x},[t(j(k))])):(p(),m("span",N,[t(D)]))],2),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),table:"sqdc_stores_latest",orderCol:"name",name_col:"name",value_col:"number"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:v.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:i.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{A as default};
