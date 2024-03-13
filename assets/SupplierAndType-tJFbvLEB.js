import{O as w,L as D}from"./LoadingAnimation-CXz40Gg1.js";import{_ as k,a as r,r as C}from"./SelectFilter.vue_vue_type_script_setup_true_lang-DZU8QDJz.js";import{d as T,r as a,w as S,c as i,a as d,p as q,t as N,k as l,n as j,e as A,F as O,h as U,i as B,o as _}from"./index-BaeLAkom.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},h={class:"bg-neutral-100"},L={class:"flex w-screen flex-wrap p-2 md:w-full"},P={key:1,class:"inline-block w-5"},I=T({__name:"SupplierAndType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const v=f,y=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],V=a(""),s=a(""),o=a(""),n=a(y),u=a(y),p=a([]),m=a(!1),x=U(),c=a(!0);S([s,n,u,x,o,V],()=>{c.value=!0});async function g(){m.value=!0;const b=B.rpc("supplier_performance_per_store_by_type",{_supplier:s.value,_type:o.value,_start_date:n.value,_end_date:u.value}),{data:e}=await b;p.value=e||[],m.value=!1,c.value=!1}return(b,e)=>(_(),i(O,null,[d("h1",F,[q(N(v.name)+" ",1),l(k,{tableData:p.value},null,8,["tableData"])]),d("div",h,[d("div",L,[d("span",{class:j([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[m.value===!1?(_(),i("button",{key:0,class:"inline-block w-5 underline",onClick:g},[l(A(C))])):(_(),i("span",P,[l(D)]))],2),l(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier",defaultName:"All Suppliers",defaultValue:null},null,8,["modelValue"]),l(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),table:"sqdc_product_types",name_col:"type",value_col:"type",defaultName:"All Types",defaultValue:null},null,8,["modelValue"]),l(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),l(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=t=>u.value=t),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),l(w,{class:"md:p-2",tableData:p.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:v.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{I as default};
