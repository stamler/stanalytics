import{_ as f,a as m,O as y}from"./SelectFilter.vue_vue_type_script_setup_true_lang-cu7SSNT9.js";import{d as g,r as s,w as b,q,i as r,c as h,a as p,j as D,t as w,k as o,F as V,o as x}from"./index-C2TS4kpu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},k={class:"bg-neutral-100 p-2"},O=g({__name:"SummaryUnits",setup(U){const l=s(""),n=s(""),u=s([]),c=s(0),i=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0];async function v(){let a=0,e=[];for(;;){const{data:t,error:_}=await r.from("sqdc_inventory_changes").select().gte("date",i).range(a,a+999);if(_){console.error(_);return}if(t){if(e=e.concat(t),t.length<1e3)break;a+=1e3}}return{data:e}}async function d(){if(l.value===""||n.value==="")return;const a=r.from("sqdc_inventory_changes_allstores").select("brand, name, sku, price, type:product_type, date, sales:quantity_change_negative, value:value_out").gt("quantity_change_negative",0).eq("supplier",l.value).eq("date",n.value),{data:e}=await a;u.value=e||[]}return b([l,n],()=>{d()}),q(async()=>{const{count:a,error:e}=await r.from("sqdc_inventory_changes_allstores").select("*",{count:"exact",head:!0}).gte("date",i);e&&console.error(e),a&&(c.value=a),d()}),(a,e)=>(x(),h(V,null,[p("h1",S,[D(" Summary Units ("+w(c.value)+" items) ",1),o(f,{query:v(),dlFileName:"Summary Units.csv"},null,8,["query"])]),p("div",k,[o(m,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),o(m,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),table:"sqdc_inventory_changes_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),o(y,{tableData:u.value},null,8,["tableData"])])],64))}});export{O as default};
