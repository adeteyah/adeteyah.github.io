import{_ as x}from"./6etjpa20.js";import{_ as c,P as u,o as f,c as d,a as v,b as o,w as l,d as a,J as i,K as m}from"./BPgmMDcl.js";const _={computed:{isActive(){return(r,t=!1)=>{const n=(this._.provides[u]||this.$route).path;return t?n===r:n===r||n.startsWith(r+"/")}}}},b={class:"dt-horizontal-wrapper lg:flex dt-gap"},A={class:"flex flex-1 flex-col gap-2 items-start"},k={key:0,class:"flex flex-1 flex-col gap-2 items-start"},g={key:1,class:"flex flex-1 flex-col gap-2 items-start"};function w(r,t,n,p,C,e){const s=x;return f(),d("nav",b,[v("div",A,[o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/work")||e.isActive("/")}]),to:"/"},{default:l(()=>t[0]||(t[0]=[a(" Work ")])),_:1},8,["class"]),o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/information")}]),to:"/information"},{default:l(()=>t[1]||(t[1]=[a(" Information ")])),_:1},8,["class"])]),e.isActive("/")||e.isActive("/work")?(f(),d("div",k,[o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/",!0)}]),to:"/"},{default:l(()=>t[2]||(t[2]=[a(" All ")])),_:1},8,["class"]),o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/work/tag/uiux")}]),to:"/work/tag/uiux"},{default:l(()=>t[3]||(t[3]=[a(" UI/UX Design ")])),_:1},8,["class"]),o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/work/tag/website")}]),to:"/work/tag/website"},{default:l(()=>t[4]||(t[4]=[a(" Website ")])),_:1},8,["class"]),o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/work/tag/mobile")}]),to:"/work/tag/mobile"},{default:l(()=>t[5]||(t[5]=[a(" Mobile App ")])),_:1},8,["class"])])):m("",!0),e.isActive("/information")?(f(),d("div",g,[o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/information",!0)}]),to:"/information"},{default:l(()=>t[6]||(t[6]=[a(" About ")])),_:1},8,["class"]),o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/information")}]),to:"/information#clients"},{default:l(()=>t[7]||(t[7]=[a(" Clients ")])),_:1},8,["class"]),o(s,{class:i(["text-sm dt-text-hover",{"font-bold":e.isActive("/information")}]),to:"/information#contact"},{default:l(()=>t[8]||(t[8]=[a(" Contact ")])),_:1},8,["class"])])):m("",!0)])}const y=c(_,[["render",w]]);export{y as _};
