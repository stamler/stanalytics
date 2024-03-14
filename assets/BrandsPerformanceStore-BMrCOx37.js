import{O as k,L as C}from"./LoadingAnimation-CG8stJOO.js";import{_ as S,a as c,r as T}from"./SelectFilter.vue_vue_type_script_setup_true_lang-C2dfTlUF.js";import{d as h,r as e,w as j,c as i,a as r,p as q,t as B,k as t,n as O,e as F,F as N,h as P,i as U,o as p}from"./index-DomZWskE.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},Q={class:"bg-neutral-100"},$={class:"flex w-screen flex-wrap p-2 md:w-full"},z={key:1,class:"inline-block w-5"},G=h({__name:"BrandsPerformanceStore",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const _=f,v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],s=e(""),y=e(""),g=e(""),x=e(""),w=e(""),o=e(v),n=e(v),u=e([]),d=e(!1),V=P(),m=e(!0);j([s,y,g,x,w,o,n,V],()=>{m.value=!0});async function D(){d.value=!0;const b=U.rpc("brands_performance_single_dimension",{_dimension:"store",_value:s.value,_start_date:o.value,_end_date:n.value}),{data:a}=await b;u.value=a||[],d.value=!1,m.value=!1}return(b,a)=>(p(),i(N,null,[r("h1",L,[q(B(_.name)+" ",1),t(S,{tableData:u.value},null,8,["tableData"])]),r("div",Q,[r("div",$,[r("span",{class:O([m.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(p(),i("button",{key:0,class:"inline-block w-5 underline",onClick:D},[t(F(T))])):(p(),i("span",z,[t(C)]))],2),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),table:"sqdc_stores_latest",orderCol:"name",name_col:"name",value_col:"number"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(c,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":a[2]||(a[2]=l=>n.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(k,{class:"md:p-2",tableData:u.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{G as default};
