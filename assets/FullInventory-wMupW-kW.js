import{_ as v,a as _,O as f}from"./SelectFilter.vue_vue_type_script_setup_true_lang-Cx0kJF_Q.js";import{d as b,r as n,w as g,x as q,i as s,c as D,a as m,j as w,t as V,k as r,F as x,o as F}from"./index-KXFw0TfI.js";import"./_commonjsHelpers-Cpj98o6Y.js";const h={class:"bg-neutral-700 p-4 text-2xl font-bold text-neutral-300"},k={class:"bg-neutral-100 p-2"},O=b({__name:"FullInventory",setup(I){const l=n("All Suppliers"),o=n(""),u=n([]),c=n(0),i=new Date(Date.now()-30*24*60*60*1e3).toISOString().split("T")[0];async function y(){let a=0,e=[];for(;;){const{data:t,error:p}=await s.from("sqdc_inventory_daily").select().gt("quantity",0).gte("date",i).range(a,a+999);if(p){console.error(p);return}if(t){if(e=e.concat(t),t.length<1e3)break;a+=1e3}}return{data:e}}async function d(){if(l.value===""||o.value==="")return;const a=s.from("sqdc_inventory_daily").select("brand, name, sku, price, store, location:store_name, type:product_type, date, quantity, value").gt("quantity",0).eq("supplier",l.value).eq("date",o.value),{data:e}=await a;u.value=e||[]}return g([l,o],()=>{d()}),q(async()=>{const{count:a,error:e}=await s.from("sqdc_inventory_daily").select("*",{count:"exact",head:!0}).gte("date",i);e&&console.error(e),a&&(c.value=a),d()}),(a,e)=>(F(),D(x,null,[m("h1",h,[w(" Full Inventory ("+V(c.value)+" items) ",1),r(v,{query:y(),dlFileName:"Full Inventory.csv"},null,8,["query"])]),m("div",k,[r(_,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),table:"sqdc_suppliers",name_col:"supplier",value_col:"supplier"},null,8,["modelValue"]),r(_,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),table:"sqdc_inventory_daily_dates",name_col:"date",value_col:"date"},null,8,["modelValue"]),r(f,{tableData:u.value,tableConfig:{columnFormatters:{value:"dollars",price:"dollars"}}},null,8,["tableData"])])],64))}});export{O as default};
