import{O as V,L as w}from"./LoadingAnimation-CavWK4St.js";import{_ as D,a as m,r as k}from"./SelectFilter.vue_vue_type_script_setup_true_lang-BswfvY6y.js";import{d as C,r as a,w as T,c as p,a as u,p as S,t as h,k as t,n as j,e as q,F as N,h as O,i as B,o as i}from"./index-Dzk4JAJ_.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},P={class:"bg-neutral-100"},U={class:"flex w-screen flex-wrap p-2 md:w-full"},A={key:1,class:"inline-block w-5"},E=C({__name:"StoresPerformanceType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(y){const _=y,v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],b=a(""),s=a(""),o=a(v),n=a(v),r=a([]),d=a(!1),g=O(),c=a(!0);T([b,o,n,g,s],()=>{c.value=!0});async function x(){d.value=!0;const f=B.rpc("stores_performance_single_type",{_type:s.value,_start_date:o.value,_end_date:n.value}),{data:e}=await f;r.value=e||[],d.value=!1,c.value=!1}return(f,e)=>(i(),p(N,null,[u("h1",F,[S(h(_.name)+" ",1),t(D,{tableData:r.value},null,8,["tableData"])]),u("div",P,[u("div",U,[u("span",{class:j([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(i(),p("button",{key:0,class:"inline-block w-5 underline",onClick:x},[t(q(k))])):(i(),p("span",A,[t(w)]))],2),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),table:"sqdc_product_types",name_col:"type",value_col:"type",defaultName:"All Types",defaultValue:null},null,8,["modelValue"]),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:r.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{E as default};
