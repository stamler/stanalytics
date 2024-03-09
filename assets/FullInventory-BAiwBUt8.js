import{_ as m,O as f}from"./SelectFilter.vue_vue_type_script_setup_true_lang-B2YU4hxa.js";import{_ as v}from"./DownloadData.vue_vue_type_script_setup_true_lang-BXSweP4a.js";import{d as b,r as n,w as g,x as q,i as s,c as D,a as _,j as w,t as V,k as r,F as x,o as F}from"./index-410hekcC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},k={class:"bg-neutral-100 p-2"},T=b({__name:"FullInventory",setup(I){const l=n("All Suppliers"),o=n(""),u=n([]),c=n(0),i=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0];async function y(){let t=0,e=[];for(;;){const{data:a,error:p}=await s.from("sqdc_inventory_daily").select().gt("quantity",0).gte("date",i).range(t,t+999);if(p){console.error(p);return}if(a){if(e=e.concat(a),a.length<1e3)break;t+=1e3}}return{data:e}}async function d(){if(l.value===""||o.value==="")return;const t=s.from("sqdc_inventory_daily").select("brand, name, sku, price, store, location:store_name, type:product_type, date, quantity, value").gt("quantity",0).eq("supplier",l.value).eq("date",o.value),{data:e}=await t;u.value=e||[]}return g([l,o],()=>{d()}),q(async()=>{const{count:t,error:e}=await s.from("sqdc_inventory_daily").select("*",{count:"exact",head:!0}).gte("date",i);e&&console.error(e),t&&(c.value=t),d()}),(t,e)=>(F(),D(x,null,[_("h1",h,[w(" Full Inventory ("+V(c.value)+" items) ",1),r(v,{query:y(),dlFileName:"Full Inventory.csv"},null,8,["query"])]),_("div",k,[r(m,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),r(m,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value=a),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),r(f,{tableData:u.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"}}},null,8,["tableData"])])],64))}});export{T as default};
