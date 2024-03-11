import{d as b,r as d,u as g,s as y,w as _,c as x,a as e,b as c,v as p,e as f,t as m,f as P,g as V,o as j,i as B}from"./index-Cs6w6jFr.js";const C={class:"flex flex-col items-center justify-center md:h-screen lg:py-0"},D=e("h1",null,"Change Password",-1),R={class:"flex flex-col"},S={class:"flex items-center justify-between"},U=["disabled"],k={class:"mt-4"},q={class:"text-red-500"},M=b({__name:"PasswordResetView",setup(A){const r=d(""),n=d(""),h=g(),{isAuthenticated:v,loading:l}=y(h),u=V(),a=d("");_(v,t=>{t===!1&&(console.log("Not authenticated, redirecting..."),u.push({name:"Login"}))},{immediate:!0});const w=async function(t,s){if(t!==s){a.value="Passwords do not match";return}const{data:o,error:i}=await B.auth.updateUser({password:t});if(i!==null){a.value=i.message;return}a.value="",u.push({name:"Dashboard"})};return(t,s)=>(j(),x("div",C,[e("form",{class:"mx-auto flex flex-col items-center justify-center rounded-md bg-white p-4",onSubmit:s[2]||(s[2]=P(o=>w(r.value,n.value),["prevent"]))},[e("div",null,[D,e("div",R,[c(e("input",{class:"my-2 rounded-md border border-gray-200 p-2",required:"",type:"password",placeholder:"password","onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o)},null,512),[[p,r.value]]),c(e("input",{class:"my-2 rounded-md border border-gray-200 p-2",required:"",type:"password",placeholder:"verify password","onUpdate:modelValue":s[1]||(s[1]=o=>n.value=o)},null,512),[[p,n.value]])]),e("div",S,[e("button",{class:"focus:shadow-outline my-2 rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none",type:"submit",disabled:f(l)},m(f(l)?"Loading":"Change Password"),9,U)]),e("div",k,[e("span",q,m(a.value),1)])])],32)]))}});export{M as default};
