import{O as V,L as D}from"./LoadingAnimation-CXz40Gg1.js";import{_ as k,a as c,r as C}from"./SelectFilter.vue_vue_type_script_setup_true_lang-DZU8QDJz.js";import{d as T,r as a,w as S,c as p,a as r,p as h,t as j,k as t,n as q,e as O,F as B,h as F,i as N,o as i}from"./index-BaeLAkom.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},L={class:"bg-neutral-100"},P={class:"flex w-screen flex-wrap p-2 md:w-full"},Q={key:1,class:"inline-block w-5"},I=T({__name:"StoreType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const _=f,v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],s=a(""),y=a(""),g=a(""),o=a(v),n=a(v),u=a([]),d=a(!1),x=F(),m=a(!0);S([y,o,n,x,g,s],()=>{m.value=!0});async function w(){d.value=!0;const b=N.rpc("store_type_performance",{_store:s.value,_start_date:o.value,_end_date:n.value}),{data:e}=await b;u.value=e||[],d.value=!1,m.value=!1}return(b,e)=>(i(),p(B,null,[r("h1",U,[h(j(_.name)+" ",1),t(k,{tableData:u.value},null,8,["tableData"])]),r("div",L,[r("div",P,[r("span",{class:q([m.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(i(),p("button",{key:0,class:"inline-block w-5 underline",onClick:w},[t(O(C))])):(i(),p("span",Q,[t(D)]))],2),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),table:"sqdc_stores_latest",orderCol:"name",name_col:"name",value_col:"number"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:u.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{I as default};
