import{O as V,L as D}from"./LoadingAnimation-DS6M7DOn.js";import{_ as k,a as m,r as C}from"./SelectFilter.vue_vue_type_script_setup_true_lang-BaQTEKoX.js";import{d as S,r as a,w as T,c as i,a as n,p as h,t as j,k as t,n as q,e as B,F as O,h as F,i as N,o as p}from"./index-CUMdyM9w.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},U={class:"bg-neutral-100"},L={class:"flex w-screen flex-wrap p-2 md:w-full"},Q={key:1,class:"inline-block w-5"},I=S({__name:"StoresPerformanceBrand",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const _=f,b=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],y=a(""),r=a(""),g=a(""),s=a(b),o=a(b),u=a([]),d=a(!1),x=F(),c=a(!0);T([y,s,o,x,g],()=>{c.value=!0});async function w(){d.value=!0;const v=N.rpc("stores_performance_single_dimension",{_dimension:"brand",_value:r.value,_start_date:s.value,_end_date:o.value}),{data:e}=await v;u.value=e||[],d.value=!1,c.value=!1}return(v,e)=>(p(),i(O,null,[n("h1",P,[h(j(_.name)+" ",1),t(k,{tableData:u.value},null,8,["tableData"])]),n("div",U,[n("div",L,[n("span",{class:q([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(p(),i("button",{key:0,class:"inline-block w-5 underline",onClick:w},[t(B(C))])):(p(),i("span",Q,[t(D)]))],2),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),table:"sqdc_brands",name_col:"brand",value_col:"brand"},null,8,["modelValue"]),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:u.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{I as default};
