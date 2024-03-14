import{O as V,L as D}from"./LoadingAnimation-DDCrwLln.js";import{_ as k,a as c,r as C}from"./SelectFilter.vue_vue_type_script_setup_true_lang-C5bwMD6J.js";import{d as S,r as a,w as T,c as i,a as n,p as h,t as j,k as t,n as q,e as O,F as B,h as F,i as N,o as p}from"./index-B2rorKrT.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},U={class:"bg-neutral-100"},L={class:"flex w-screen flex-wrap p-2 md:w-full"},Q={key:1,class:"inline-block w-5"},I=S({__name:"SuppliersPerformanceStore",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const _=f,v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],r=a(""),y=a(""),g=a(""),s=a(v),o=a(v),u=a([]),d=a(!1),x=F(),m=a(!0);T([y,s,o,x,g],()=>{m.value=!0});async function w(){d.value=!0;const b=N.rpc("suppliers_performance_single_dimension",{_dimension:"store",_value:r.value,_start_date:s.value,_end_date:o.value}),{data:e}=await b;u.value=e||[],d.value=!1,m.value=!1}return(b,e)=>(p(),i(B,null,[n("h1",P,[h(j(_.name)+" ",1),t(k,{tableData:u.value},null,8,["tableData"])]),n("div",U,[n("div",L,[n("span",{class:q([m.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(p(),i("button",{key:0,class:"inline-block w-5 underline",onClick:w},[t(O(C))])):(p(),i("span",Q,[t(D)]))],2),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),table:"sqdc_stores_latest",orderCol:"name",name_col:"name",value_col:"number"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:u.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{I as default};
