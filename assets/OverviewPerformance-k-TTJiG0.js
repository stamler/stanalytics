import{O as V,L as C}from"./LoadingAnimation-CajDf0rP.js";import{_ as h,a as b,r as O}from"./SelectFilter.vue_vue_type_script_setup_true_lang-D3xAdHou.js";import{d as S,r as e,w as T,c as m,a as r,p as j,t as q,k as t,n as B,e as F,F as N,h as P,i as L,o as p}from"./index-C8eIwmOK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Q={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},U={class:"bg-neutral-100"},$={class:"flex w-screen flex-wrap p-2 md:w-full"},z={key:1,class:"inline-block w-5"},G=S({__name:"OverviewPerformance",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},db_function:{type:null,required:!0},stride:{type:String}},setup(v){const l=v,_=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],f=e(""),y=e(""),g=e(""),w=e(""),x=e(""),o=e(_),n=e(_),u=e([]),d=e(!1),D=P(),c=e(!0);T([f,y,g,w,x,o,n,D],()=>{c.value=!0});async function k(){d.value=!0;const i={_start_date:o.value,_end_date:n.value};l.stride&&(i._stride=l.stride);const a=L.rpc(l.db_function,i),{data:s}=await a;u.value=s||[],d.value=!1,c.value=!1}return(i,a)=>(p(),m(N,null,[r("h1",Q,[j(q(l.name)+" ",1),t(h,{tableData:u.value},null,8,["tableData"])]),r("div",U,[r("div",$,[r("span",{class:B([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[d.value===!1?(p(),m("button",{key:0,class:"inline-block w-5 underline",onClick:k},[t(F(O))])):(p(),m("span",z,[t(C)]))],2),t(b,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(b,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=s=>n.value=s),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:u.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:l.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{G as default};
