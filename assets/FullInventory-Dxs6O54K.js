import{_ as y,O as x,r as k,L as q}from"./SelectFilter.vue_vue_type_script_setup_true_lang-8sdsFfTT.js";import{d as D,r as e,w as V,c,a as o,t as C,n as h,k as t,e as j,F as O,h as S,i as F,o as d}from"./index-nGNKtJAK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},A={class:"bg-neutral-100"},B={class:"flex w-screen flex-wrap p-2 md:w-full"},I={key:1,class:"inline-block w-5"},Q=D({__name:"FullInventory",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(_){const i=_,l=e("All Suppliers"),p=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],v=e(p),f=e(p),s=e(""),m=e([]),n=e(!1),g=S(),r=e(!0);V([l,s,v,f,g],()=>{r.value=!0});async function w(){n.value=!0;const b=F.from("sqdc_inventory_daily").select("brand, name, sku, price, store, location:store_name, type:product_type, date, quantity, value").gt("quantity",0).eq("supplier",l.value).eq("date",s.value),{data:a}=await b;m.value=a||[],n.value=!1,r.value=!1}return(b,a)=>(d(),c(O,null,[o("h1",T,C(i.name),1),o("div",A,[o("div",B,[o("span",{class:h([r.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[n.value===!1?(d(),c("button",{key:0,class:"inline-block w-5 underline",onClick:w},[t(j(k))])):(d(),c("span",I,[t(q)]))],2),t(y,{class:"m-1 rounded-sm px-2 py-1",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value=u),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),t(y,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=u=>s.value=u),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(x,{class:"md:p-2",tableData:m.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:i.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{Q as default};
