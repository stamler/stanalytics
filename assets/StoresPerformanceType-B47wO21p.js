import{_ as V,a as m,O as w,r as D,L as k}from"./SelectFilter.vue_vue_type_script_setup_true_lang-Buaiv95o.js";import{d as C,r as a,w as T,c as p,a as u,j,t as S,k as t,n as h,e as q,F as N,h as O,i as B,o as i}from"./index-C8-cMdNt.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},P={class:"bg-neutral-100"},U={class:"flex w-screen flex-wrap p-2 md:w-full"},A={key:1,class:"inline-block w-5"},z=C({__name:"StoresPerformanceType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(b){const _=b,v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],f=a(""),s=a(""),o=a(v),n=a(v),r=a([]),d=a(!1),g=O(),c=a(!0);T([f,o,n,g,s],()=>{c.value=!0});async function x(){d.value=!0;const y=B.rpc("stores_performance_single_type",{_type:s.value,_start_date:o.value,_end_date:n.value}),{data:e}=await y;r.value=e||[],d.value=!1,c.value=!1}return(y,e)=>(i(),p(N,null,[u("h1",F,[j(S(_.name)+" ",1),t(V,{tableData:r.value},null,8,["tableData"])]),u("div",P,[u("div",U,[u("span",{class:h([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(i(),p("button",{key:0,class:"inline-block w-5 underline",onClick:x},[t(q(D))])):(i(),p("span",A,[t(k)]))],2),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),table:"sqdc_product_types",name_col:"type",value_col:"type",defaultName:"All Types",defaultValue:null},null,8,["modelValue"]),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(w,{class:"md:p-2",tableData:r.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{z as default};
