import{O as x,L as D}from"./LoadingAnimation-DldCfnIr.js";import{_ as k,a as _,r as q}from"./SelectFilter.vue_vue_type_script_setup_true_lang-DsS2iLpG.js";import{d as V,r as e,w as C,c as d,a as o,p as h,t as j,k as t,n as O,e as S,F as T,h as F,i as A,o as i}from"./index-lsmdiJYh.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},N={class:"bg-neutral-100"},I={class:"flex w-screen flex-wrap p-2 md:w-full"},L={key:1,class:"inline-block w-5"},z=V({__name:"FullInventory",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(y){const p=y,l=e("All Suppliers"),m=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],f=e(m),v=e(m),s=e(""),n=e([]),r=e(!1),g=F(),u=e(!0);C([l,s,f,v,g],()=>{u.value=!0});async function w(){r.value=!0;const b=A.from("sqdc_inventory_daily").select("brand, name, sku, price, store, location:store_name, type:product_type, date, quantity, value").gt("quantity",0).eq("supplier",l.value).eq("date",s.value),{data:a}=await b;n.value=a||[],r.value=!1,u.value=!1}return(b,a)=>(i(),d(T,null,[o("h1",B,[h(j(p.name)+" ",1),t(k,{tableData:n.value},null,8,["tableData"])]),o("div",N,[o("div",I,[o("span",{class:O([u.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[r.value===!1?(i(),d("button",{key:0,class:"inline-block w-5 underline",onClick:w},[t(S(q))])):(i(),d("span",L,[t(D)]))],2),t(_,{class:"m-1 rounded-sm px-2 py-1",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),t(_,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=c=>s.value=c),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(x,{class:"md:p-2",tableData:n.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:p.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{z as default};
