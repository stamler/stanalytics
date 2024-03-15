import{O as w,L as V}from"./LoadingAnimation-CTedVLFC.js";import{_ as D,a as m,r as k}from"./SelectFilter.vue_vue_type_script_setup_true_lang-5pZ2gmJ_.js";import{d as C,r as a,w as j,c as i,a as r,p as q,t as O,k as l,n as S,e as T,F as A,h as U,i as h,o as _}from"./index-CkFsuHah.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},F={class:"bg-neutral-100"},N={class:"flex w-screen flex-wrap p-2 md:w-full"},L={key:1,class:"inline-block w-5"},z=C({__name:"UniversalReport",props:{rpcArgs:{type:Object,required:!1},name:{type:String,required:!0},objectTableProps:{type:Object,default:()=>({})}},setup(f){const u=f,s=a("All Suppliers"),v=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],o=a(v),n=a(v),y=a(""),d=a([]),p=a(!1),g=U(),c=a(!0);j([s,y,o,n,g],()=>{c.value=!0});async function x(){p.value=!0;const b=h.rpc("get_movements",{...u.rpcArgs,_supplier:s.value,_start_date:o.value,_end_date:n.value}),{data:e}=await b;d.value=e||[],p.value=!1,c.value=!1}return(b,e)=>(_(),i(A,null,[r("h1",B,[q(O(u.name)+" ",1),l(D,{tableData:d.value},null,8,["tableData"])]),r("div",F,[r("div",N,[r("span",{class:S([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[p.value===!1?(_(),i("button",{key:0,class:"inline-block w-5 underline",onClick:x},[l(T(k))])):(_(),i("span",L,[l(V)]))],2),l(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),l(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),l(m,{class:"m-1 rounded-sm px-2 py-1",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),l(w,{class:"md:p-2",tableData:d.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"},omitColumns:u.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{z as default};
