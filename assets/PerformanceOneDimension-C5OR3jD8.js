import{O as x,L as g}from"./LoadingAnimation-D5CaCZcz.js";import{_ as w,a as s,r as D}from"./SelectFilter.vue_vue_type_script_setup_true_lang-rZ_DoOmW.js";import{d as q,r as n,w as C,c as v,a as i,p as U,t as O,k as u,n as S,e as T,m as d,l as j,F as B,h as N,i as F,o as t}from"./index-DBQlEOgW.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},L={class:"bg-neutral-100"},Q={class:"flex w-screen flex-wrap p-2 md:w-full"},$={key:1,class:"inline-block w-5"},R=q({__name:"PerformanceOneDimension",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},db_function:{type:null,required:!0},dimension:{type:String,required:!0}},setup(f){const o=f,b=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],a=n(""),r=n(b),m=n(b),p=n([]),c=n(!1),V=N(),_=n(!0);C([a,r,m,V],()=>{_.value=!0});async function k(){c.value=!0,console.log(o.dimension);const y=F.rpc(o.db_function,{_dimension:o.dimension,_value:a.value,_start_date:r.value,_end_date:m.value}),{data:e}=await y;p.value=e||[],c.value=!1,_.value=!1}return(y,e)=>(t(),v(B,null,[i("h1",P,[U(O(o.name)+" ",1),u(w,{tableData:p.value},null,8,["tableData"])]),i("div",L,[i("div",Q,[i("span",{class:S([_.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[c.value===!1?(t(),v("button",{key:0,class:"inline-block w-5 underline",onClick:k},[u(T(D))])):(t(),v("span",$,[u(g)]))],2),o.dimension==="brand"?(t(),d(s,{key:0,class:"m-1 rounded-sm px-2 py-1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),table:"sqdc_brands",name_col:"brand",value_col:"brand"},null,8,["modelValue"])):o.dimension==="sku"?(t(),d(s,{key:1,class:"m-1 rounded-sm px-2 py-1",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),table:"sqdc_skus",name_col:"slug",value_col:"sku"},null,8,["modelValue"])):o.dimension==="store"?(t(),d(s,{key:2,class:"m-1 rounded-sm px-2 py-1",modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l),table:"sqdc_stores_latest",orderCol:"name",name_col:"name",value_col:"number"},null,8,["modelValue"])):o.dimension==="supplier"?(t(),d(s,{key:3,class:"m-1 rounded-sm px-2 py-1",modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value=l),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"])):o.dimension==="type"?(t(),d(s,{key:4,class:"m-1 rounded-sm px-2 py-1",modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value=l),table:"sqdc_product_types",name_col:"type",value_col:"type"},null,8,["modelValue"])):j("",!0),u(s,{class:"m-1 rounded-sm px-2 py-1",modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=l=>r.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),u(s,{class:"m-1 rounded-sm px-2 py-1",modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=l=>m.value=l),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),u(x,{class:"md:p-2",tableData:p.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:o.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64))}});export{R as default};
