import{O as V,L as C}from"./LoadingAnimation-DldCfnIr.js";import{_ as h,a as b,r as O}from"./SelectFilter.vue_vue_type_script_setup_true_lang-DsS2iLpG.js";import{d as T,r as e,w as j,c as i,a as o,p as q,t as S,k as t,n as B,e as F,F as N,h as P,i as L,o as m}from"./index-lsmdiJYh.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Q={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},U={class:"bg-neutral-100"},$={class:"flex w-screen flex-wrap p-2 md:w-full"},z={key:1,class:"inline-block w-5"},G=T({__name:"OverviewPerformance",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},db_function:{type:null,required:!0}},setup(v){const n=v,p=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],f=e(""),y=e(""),g=e(""),w=e(""),x=e(""),l=e(p),s=e(p),r=e([]),u=e(!1),D=P(),c=e(!0);j([f,y,g,w,x,l,s,D],()=>{c.value=!0});async function k(){u.value=!0;const _=L.rpc(n.db_function,{_start_date:l.value,_end_date:s.value}),{data:a}=await _;r.value=a||[],u.value=!1,c.value=!1}return(_,a)=>(m(),i(N,null,[o("h1",Q,[q(S(n.name)+" ",1),t(h,{tableData:r.value},null,8,["tableData"])]),o("div",U,[o("div",$,[o("span",{class:B([c.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[u.value===!1?(m(),i("button",{key:0,class:"inline-block w-5 underline",onClick:k},[t(F(O))])):(m(),i("span",z,[t(C)]))],2),t(b,{class:"m-1 rounded-sm px-2 py-1",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=d=>l.value=d),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),t(b,{class:"m-1 rounded-sm px-2 py-1",modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=d=>s.value=d),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),t(V,{class:"md:p-2",tableData:r.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:n.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{G as default};
