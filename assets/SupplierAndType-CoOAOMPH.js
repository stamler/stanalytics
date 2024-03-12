import{_ as r,O as w,r as k,L as D}from"./SelectFilter.vue_vue_type_script_setup_true_lang-8sdsFfTT.js";import{d as C,r as l,w as S,c,a as d,t as T,n as q,k as t,e as j,F as A,h as N,i as O,o as i}from"./index-nGNKtJAK.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},B={class:"bg-neutral-100"},F={class:"flex w-screen flex-wrap p-2 md:w-full"},h={key:1,class:"inline-block w-5"},z=C({__name:"SupplierAndType",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0}},setup(f){const _=f,v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],V=l(""),s=l(""),o=l(""),n=l(v),u=l(v),y=l([]),p=l(!1),g=N(),m=l(!0);S([s,n,u,g,o,V],()=>{m.value=!0});async function x(){p.value=!0;const b=O.rpc("supplier_performance_per_store_by_type",{_supplier:s.value,_type:o.value,_start_date:n.value,_end_date:u.value}),{data:e}=await b;y.value=e||[],p.value=!1,m.value=!1}return(b,e)=>(i(),c(A,null,[d("h1",U,T(_.name),1),d("div",B,[d("div",F,[d("span",{class:q([m.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[p.value===!1?(i(),c("button",{key:0,class:"inline-block w-5 underline",onClick:x},[t(j(k))])):(i(),c("span",h,[t(D)]))],2),t(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value=a),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier",defaultName:"All Suppliers",defaultValue:null},null,8,["modelValue"]),t(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value=a),table:"sqdc_product_types",name_col:"type",value_col:"type",defaultName:"All Types",defaultValue:null},null,8,["modelValue"]),t(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=a=>n.value=a),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(r,{class:"m-1 rounded-sm px-2 py-1",modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=a=>u.value=a),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(w,{class:"md:p-2",tableData:y.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out_of_type:"dollars"},omitColumns:_.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{z as default};
