import{_ as v,a as _,O as f}from"./SelectFilter.vue_vue_type_script_setup_true_lang-cu7SSNT9.js";import{d as b,r as o,w as g,q,i as s,c as D,a as m,j as w,t as V,k as r,F as x,o as F}from"./index-C2TS4kpu.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},k={class:"bg-neutral-100 p-2"},O=b({__name:"FullInventory",setup(I){const l=o("All Suppliers"),n=o(""),u=o([]),c=o(0),i=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0];async function y(){let t=0,e=[];for(;;){const{data:a,error:p}=await s.from("sqdc_inventory_daily").select().gt("quantity",0).gte("date",i).range(t,t+999);if(p){console.error(p);return}if(a){if(e=e.concat(a),a.length<1e3)break;t+=1e3}}return{data:e}}async function d(){if(l.value===""||n.value==="")return;const t=s.from("sqdc_inventory_daily").select("brand, name, sku, price, store, location:store_name, type:product_type, date, quantity, value").gt("quantity",0).eq("supplier",l.value).eq("date",n.value),{data:e}=await t;u.value=e||[]}return g([l,n],()=>{d()}),q(async()=>{const{count:t,error:e}=await s.from("sqdc_inventory_daily").select("*",{count:"exact",head:!0}).gte("date",i);e&&console.error(e),t&&(c.value=t),d()}),(t,e)=>(F(),D(x,null,[m("h1",h,[w(" Full Inventory ("+V(c.value)+" items) ",1),r(v,{query:y(),dlFileName:"Full Inventory.csv"},null,8,["query"])]),m("div",k,[r(_,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),r(_,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),r(f,{tableData:u.value},null,8,["tableData"])])],64))}});export{O as default};
