import{_ as q,O as V}from"./SizeWarning.vue_vue_type_script_setup_true_lang-Bkb3yN13.js";import{_,r as S,L as h}from"./shared-46pOYsA-.js";import{d as C,u as T,s as j,r as e,w as v,c as d,a as o,q as O,t as A,k as t,n as B,e as F,F as N,h as I,i as L,o as i}from"./index-DwBCL-VZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},Q={class:"bg-neutral-100"},R={class:"flex w-screen flex-wrap p-2 md:w-full"},U={key:1,class:"inline-block w-5"},H=C({__name:"SummaryInventory",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(y){const g=T(),{preferences:p}=j(g),m=y,l=e("All Suppliers"),b=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],w=e(b),x=e(b),s=e(""),n=e([]),r=e(!1),D=I(),u=e(!0);v([l,s,w,x,D],()=>{u.value=!0}),v(p,()=>{l.value=p.value.defaultSupplier||""},{immediate:!0});async function k(){r.value=!0;const f=L.from("sqdc_inventory_daily_allstores").select("brand, name, sku, price, type:product_type, date, quantity, value").eq("supplier",l.value).eq("date",s.value),{data:a}=await f;n.value=a||[],r.value=!1,u.value=!1}return(f,a)=>(i(),d(N,null,[o("h1",P,[O(A(m.name)+" ",1),t(q,{tableData:n.value},null,8,["tableData"])]),o("div",Q,[o("div",R,[o("span",{class:B([u.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[r.value===!1?(i(),d("button",{key:0,class:"inline-block w-5 underline",onClick:k},[t(F(S))])):(i(),d("span",U,[t(h)]))],2),t(_,{class:"m-1 rounded-sm px-2 py-1",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),t(_,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=c=>s.value=c),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:n.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:m.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{H as default};
