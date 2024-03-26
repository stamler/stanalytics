import{o as r,c as l,a as g,d as c,C as b,r as v,B as d,j as h,i as p,b as S,D as k,F as B,x as f,t as y,_ as N,E as W}from"./index-Cz5cT892.js";function q(e,a){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[g("path",{"fill-rule":"evenodd",d:"M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z","clip-rule":"evenodd"})])}const _={key:0},x=["value"],D=c({__name:"SelectFilter",props:b({table:{type:String,required:!0},order_col:{type:String||null,default:null},ascending:{type:Boolean,default:!1},name_col:{type:String,required:!0},value_col:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,u=v(!1),i=d(e,"modelValue"),n=v([]);return h(async()=>{var t;u.value=!0;let s=p.from(a.table).select();a.order_col&&(s=s.order(a.order_col,{ascending:a.ascending}));const{data:o}=await s;n.value=o||void 0,i.value=i.value||((t=n.value)==null?void 0:t[0][a.value_col]),u.value=!1}),(s,o)=>u.value?(r(),l("span",_,"Loading...")):S((r(),l("select",{key:1,"onUpdate:modelValue":o[0]||(o[0]=t=>i.value=t)},[(r(!0),l(B,null,f(n.value,t=>(r(),l("option",{key:t[a.value_col]||void 0,value:t[a.value_col]},y(t[a.name_col]),9,x))),128))],512)),[[k,i.value]])}}),w={},C={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},M=W('<rect width="7.33" height="7.33" x="1" y="1" fill="currentColor"><animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"></animate><animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"></animate><animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor"><animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor"><animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"></animate><animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"></animate><animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"></animate><animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"></animate></rect>',9),V=[M];function F(e,a){return r(),l("svg",C,V)}const L=N(w,[["render",F]]),m=function(e,a){const u=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],i=new RegExp("\\.0+$|(?<=\\.[0-9]*[1-9])0+$"),n=u.slice().reverse().find(s=>e>=s.value);return n?(e/n.value).toFixed(a).replace(i,"").concat(n.symbol):"0"},E=function(e){return typeof e!="number"?e:"$"+m(e,1)},A=function(e){return typeof e!="number"?e:e.toFixed(2)+"%"},P=function(e){return typeof e!="number"?e:m(e,1)};export{L,D as _,P as a,A as b,E as f,q as r};
