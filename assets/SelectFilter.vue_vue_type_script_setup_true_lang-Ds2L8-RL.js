import{o,c as r,a as d,d as i,q as m,n as f,r as p,k as c,e as _,l as h,F as v,x as g,j as x,i as w,b,y,z as V,t as M}from"./index-BnoQqGOU.js";function D(l,e){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"fill-rule":"evenodd",d:"M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z","clip-rule":"evenodd"})])}function C(l,e){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z","clip-rule":"evenodd"})])}const S={class:"m-2 mx-auto w-full p-4 text-white md:m-auto md:w-1/2"},k=d("h2",{class:"text-xl"},"Large Result Set",-1),q=d("p",null," This query has a result set with over 1000 records. Only the first 1000 records are shown. You can see a complete result set by downloading the report related to this data. ",-1),B=i({__name:"LargeResultsModal",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(l){const e=m(l,"modelValue");return(n,a)=>(o(),r("div",{class:f([e.value?"fixed left-0 top-0":"hidden","justify-content inset-x-0 flex h-screen w-screen flex-1 flex-col bg-black bg-opacity-90 text-base font-normal"])},[d("div",S,[k,q,d("button",{class:"mt-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",onClick:a[0]||(a[0]=u=>e.value=!1)}," OK ")])],2))}}),z=i({__name:"SizeWarning",props:{tableData:{type:Array,required:!0}},setup(l){const e=p(!1),n=l,a=()=>{e.value=!e.value};return(u,s)=>(o(),r(v,null,[c(B,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value=t)},null,8,["modelValue"]),n.tableData.length>=1e3?(o(),r("span",{key:0,class:"inline-block",onClick:a},[c(_(C),{class:"h-6 w-6 rounded-full bg-white text-red-700"})])):h("",!0)],64))}}),Z=["value"],F=i({__name:"SelectFilter",props:g({table:{type:String,required:!0},orderCol:{type:String||null,default:null},name_col:{type:String,required:!0},value_col:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=l,n=m(l,"modelValue"),a=p([]);return x(async()=>{var t;let u=w.from(e.table).select();e.orderCol&&(u=u.order(e.orderCol));const{data:s}=await u;a.value=s||void 0,n.value=((t=a.value)==null?void 0:t[0][e.value_col])||""}),(u,s)=>b((o(),r("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t)},[(o(!0),r(v,null,V(a.value,t=>(o(),r("option",{key:t[e.value_col]||void 0,value:t[e.value_col]},M(t[e.name_col]),9,Z))),128))],512)),[[y,n.value]])}});export{z as _,F as a,D as r};
