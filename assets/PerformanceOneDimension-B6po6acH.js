import{_ as T,O as U}from"./SizeWarning.vue_vue_type_script_setup_true_lang-C-rLuxr7.js";import{_ as i,r as h,L as R}from"./shared-Bg1sLdOl.js";import{o,c as b,a as _,d as F,u as N,s as O,r as n,w as q,q as $,t as j,k as u,y as A,e as s,n as H,p as v,z as m,l as P,F as z,h as L,g as Q,i as Z,A as E}from"./index-B01UkyJR.js";import"./_commonjsHelpers-Cpj98o6Y.js";function I(g,D){return o(),b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"fill-rule":"evenodd",d:"M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})])}const M={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},G={class:"bg-neutral-100"},J={class:"flex w-screen flex-wrap p-2 md:w-full"},K={key:1,class:"inline-block w-5"},ae=F({__name:"PerformanceOneDimension",props:{objectTableProps:{type:Object,default:()=>({})},name:{type:String,required:!0},dbFunction:{type:null,required:!0},dimension:{type:String,required:!0},value:{type:String,required:!1},startDate:{type:String,required:!1},endDate:{type:String,required:!1}},setup(g){const D=N(),{preferences:p}=O(D),l=g,x=new Date(Date.now()-24*60*60*1e3).toISOString().split("T")[0],e=l.value?n(l.value):n(""),r=l.startDate?n(l.startDate):n(x),d=l.endDate?n(l.endDate):n(x),y=n([]),f=n(!1),k=L(),w=Q(),V=n(!0);q([e,r,d,k],()=>{V.value=!0}),q([p,k],()=>{if(!k.params.value)switch(l.dimension){case"brand":e.value=p.value.defaultBrand||"";break;case"sku":e.value=p.value.defaultSku||"";break;case"store":e.value=p.value.defaultStore||"";break;case"supplier":e.value=p.value.defaultSupplier||"";break;case"type":e.value=p.value.defaultType||"";break}},{immediate:!0});const S=()=>{const c=w.currentRoute.value.name,a=c==null?void 0:c.split(" By ");return`${a[1]}s By ${a[0].slice(0,-1)}`};async function C(){w.push({params:{dimension:l.dimension,value:e.value,startDate:r.value,endDate:d.value}}),f.value=!0;const c=Z.rpc(l.dbFunction,{_dimension:l.dimension,_value:e.value,_start_date:r.value,_end_date:d.value}),{data:a}=await c;y.value=a||[],f.value=!1,V.value=!1}return(c,a)=>{const B=E("router-link");return o(),b(z,null,[_("h1",M,[$(j(l.name)+" ",1),u(T,{tableData:y.value},null,8,["tableData"]),u(B,{class:"inline-block w-5",to:{name:S(),params:{startDate:s(r),endDate:s(d)}}},{default:A(()=>[u(s(I))]),_:1},8,["to"])]),_("div",G,[_("div",J,[_("span",{class:H([V.value?"bg-yellow-200 hover:bg-yellow-300":"","m-1 flex rounded-sm px-2 py-1"])},[f.value===!1?(o(),b("button",{key:0,class:"inline-block w-5 underline",onClick:C},[u(s(h))])):(o(),b("span",K,[u(R)]))],2),l.dimension==="brand"?(o(),v(i,{key:0,class:"m-1 rounded-sm px-2 py-1",modelValue:s(e),"onUpdate:modelValue":a[0]||(a[0]=t=>m(e)?e.value=t:null),table:"sqdc_brands",name_col:"brand",value_col:"brand"},null,8,["modelValue"])):l.dimension==="sku"?(o(),v(i,{key:1,class:"m-1 rounded-sm px-2 py-1",modelValue:s(e),"onUpdate:modelValue":a[1]||(a[1]=t=>m(e)?e.value=t:null),table:"sqdc_skus",name_col:"slug",value_col:"sku"},null,8,["modelValue"])):l.dimension==="store"?(o(),v(i,{key:2,class:"m-1 rounded-sm px-2 py-1",modelValue:s(e),"onUpdate:modelValue":a[2]||(a[2]=t=>m(e)?e.value=t:null),table:"sqdc_stores_latest",order_col:"name",name_col:"name",value_col:"number"},null,8,["modelValue"])):l.dimension==="supplier"?(o(),v(i,{key:3,class:"m-1 rounded-sm px-2 py-1",modelValue:s(e),"onUpdate:modelValue":a[3]||(a[3]=t=>m(e)?e.value=t:null),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"])):l.dimension==="type"?(o(),v(i,{key:4,class:"m-1 rounded-sm px-2 py-1",modelValue:s(e),"onUpdate:modelValue":a[4]||(a[4]=t=>m(e)?e.value=t:null),table:"sqdc_product_types",name_col:"type",value_col:"type"},null,8,["modelValue"])):P("",!0),u(i,{class:"m-1 rounded-sm px-2 py-1",modelValue:s(r),"onUpdate:modelValue":a[5]||(a[5]=t=>m(r)?r.value=t:null),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),u(i,{class:"m-1 rounded-sm px-2 py-1",modelValue:s(d),"onUpdate:modelValue":a[6]||(a[6]=t=>m(d)?d.value=t:null),table:"sqdc_inventory_movements_dates",name_col:"date",value_col:"date"},null,8,["modelValue"])]),u(U,{class:"md:p-2",tableData:y.value,tableConfig:{columnFormatters:{market_share:"percent",value_out:"dollars",value_in:"dollars",total_out:"dollars"},omitColumns:l.objectTableProps.omitCols||[]}},null,8,["tableData","tableConfig"])])],64)}}});export{ae as default};
