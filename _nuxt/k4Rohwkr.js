import{_ as B,a as k,c as G,b as j}from"./CeNBskj-.js";import{_ as z}from"./BNj_PrxZ.js";import{_ as S,r as T,A as F,W as H,X as _,Y as D,B as O,Z as R,o as C,c as f,a as m,b as o,w as a,d as u,$,a0 as Z,a1 as q,C as N,F as x,e as I,z as P,D as E,m as b,E as A,t as L,J as U}from"./B3BwD-6y.js";import{_ as Y,a as J}from"./DATZ75gy.js";import{_ as X}from"./BbeB9pMO.js";const K={setup(i,{expose:t}){const n=T(null),p=T(0);let s=null,d=!1;const l=()=>{n.value&&(p.value=n.value.offsetHeight)},c=(e,r)=>{let v;return(...W)=>{clearTimeout(v),v=setTimeout(()=>e(...W),r)}},g=()=>{const e=document.body.scrollHeight;if(s&&!d){d=!0,s.scrollTo(e,{duration:1,easing:v=>v*v});const r=()=>{d=!1,s.off("scroll",r)};s.on("scroll",r),setTimeout(r,1e3)}},h=()=>{_.scrollerProxy(document.body,{getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),_.create({start:0,end:()=>document.documentElement.scrollHeight-window.innerHeight,onUpdate:e=>{n.value&&(H.killTweensOf(n.value),H.to(n.value,{y:e.direction===1?"-100%":"0%",ease:"power2.out",duration:.3,overwrite:"auto"}))}}),_.refresh()},V=()=>{_.getAll().forEach(e=>e.kill())},y=()=>{l(),h(),_.refresh()},M=()=>{document.querySelectorAll("svg").forEach(r=>{r.addEventListener("load",y)})},w=c(()=>{h(),_.refresh()},200);return F(()=>{H.registerPlugin(_),s=new D({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))}),s.on("scroll",_.update);const e=r=>{s==null||s.raf(r),requestAnimationFrame(e)};requestAnimationFrame(e),l(),window.addEventListener("resize",w),window.addEventListener("load",y),M()}),O(()=>{window.removeEventListener("resize",w),window.removeEventListener("load",y),V()}),R(()=>{V(),h(),l()}),t({scrollToContact:g}),{navElement:n,spacerHeight:p,scrollToContact:g}}},Q={ref:"navElement",class:"flex justify-between items-center fixed top-0 w-full z-40 gap-4"};function t1(i,t,n,p,s,d){const l=B,c=z;return C(),f(x,null,[m("nav",Q,[o(c,{class:$(["transition-opacity duration-200 ease-in-out hover:cursor-pointer",(i._.provides[Z]||i.$route).path==="/"?"opacity-100":"opacity-50 hover:opacity-100"]),to:"/"},{default:a(()=>[o(l,null,{default:a(()=>t[0]||(t[0]=[u("index")])),_:1})]),_:1},8,["class"]),o(c,{class:$(["transition-opacity duration-200 ease-in-out hover:cursor-pointer",(i._.provides[Z]||i.$route).path.startsWith("/projects")?"opacity-100":"opacity-50 hover:opacity-100"]),to:"/projects"},{default:a(()=>[o(l,null,{default:a(()=>t[1]||(t[1]=[u("projects")])),_:1})]),_:1},8,["class"]),o(c,{class:$(["transition-opacity duration-200 ease-in-out hover:cursor-pointer",(i._.provides[Z]||i.$route).path.startsWith("/about")?"opacity-100":"opacity-50 hover:opacity-100"]),to:"/about"},{default:a(()=>[o(l,null,{default:a(()=>t[2]||(t[2]=[u("about")])),_:1})]),_:1},8,["class"]),o(c,{class:"opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out hover:cursor-pointer",onClick:q(p.scrollToContact,["prevent"])},{default:a(()=>[o(l,null,{default:a(()=>t[3]||(t[3]=[u("say hi")])),_:1})]),_:1},8,["onClick"])],512),m("div",{style:N({height:`${p.spacerHeight}px`})},null,4)],64)}const o1=S(K,[["render",t1]]),e1={},a1={width:"1800",viewBox:"0 0 1800 252",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"group"};function n1(i,t){return C(),f("svg",a1,t[0]||(t[0]=[I('<path d="M26.729 191.91H0.208984L68.849 3.92999H97.189L166.089 191.91H139.309L122.409 145.11H43.369L26.729 191.91ZM79.769 44.49L51.169 123.01H114.869L86.009 44.49C84.709 40.85 83.409 36.43 82.889 33.57C82.369 36.17 81.069 40.59 79.769 44.49Z" fill="currentColor"></path><path d="M222.653 195.03C185.733 195.03 163.373 167.47 163.373 128.73C163.373 89.73 185.993 61.13 223.693 61.13C243.193 61.13 259.573 69.71 268.153 85.31V0.549988H292.333V191.91H270.493L268.413 168.77C260.093 186.19 242.933 195.03 222.653 195.03ZM227.593 172.93C252.553 172.93 267.893 154.47 267.893 127.95C267.893 101.95 252.553 83.23 227.593 83.23C202.633 83.23 188.073 101.95 188.073 127.95C188.073 154.21 202.633 172.93 227.593 172.93Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-75"></path><path d="M329.152 34.61C320.312 34.61 313.032 27.33 313.032 18.49C313.032 9.39 320.312 2.37 329.152 2.37C337.992 2.37 345.272 9.39 345.272 18.49C345.272 27.33 337.992 34.61 329.152 34.61ZM317.192 191.91V64.77H341.632V191.91H317.192Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-100"></path><path d="M402.594 191.91H378.154V85.31H353.194V64.77H378.154V24.99H402.594V64.77H427.553V85.31H402.594V191.91Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-150"></path><path d="M451.047 34.61C442.207 34.61 434.927 27.33 434.927 18.49C434.927 9.39 442.207 2.37 451.047 2.37C459.887 2.37 467.167 9.39 467.167 18.49C467.167 27.33 459.887 34.61 451.047 34.61ZM439.087 191.91V64.77H463.527V191.91H439.087Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-200"></path><path d="M476.389 248.85V228.83H492.769C504.469 228.83 513.829 227.01 519.809 210.89L524.229 198.67L473.009 64.77H498.749L535.669 167.21L573.369 64.77H598.589L538.529 220.51C529.949 242.35 517.209 251.45 497.709 251.45C489.649 251.45 482.889 250.41 476.389 248.85Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-300"></path><path d="M639.041 195.03C611.741 195.03 595.621 179.69 595.621 156.55C595.621 133.15 613.041 118.59 642.941 116.25L682.981 113.13V109.49C682.981 88.17 670.241 80.63 653.081 80.63C632.541 80.63 620.841 89.73 620.841 105.07H599.521C599.521 78.55 621.361 61.13 654.121 61.13C685.581 61.13 706.901 77.77 706.901 112.09V191.91H686.101L683.501 171.37C677.001 185.93 659.581 195.03 639.041 195.03ZM646.061 176.05C669.201 176.05 683.241 160.97 683.241 137.05V130.29L650.741 132.89C629.161 134.97 620.321 143.29 620.321 155.77C620.321 169.29 630.201 176.05 646.061 176.05Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-500"></path><path d="M820.682 191.91H795.202V3.92999H866.182C906.482 3.92999 930.402 25.25 930.402 60.35C930.402 86.35 917.402 105.07 894.002 112.61L932.222 191.91H903.882L868.782 117.55H820.682V191.91ZM820.682 26.81V94.93H866.442C890.102 94.93 903.622 82.19 903.622 60.61C903.622 38.77 889.582 26.81 866.182 26.81H820.682Z" fill="currentColor"></path><path d="M982.861 195.03C955.561 195.03 939.441 179.69 939.441 156.55C939.441 133.15 956.861 118.59 986.761 116.25L1026.8 113.13V109.49C1026.8 88.17 1014.06 80.63 996.901 80.63C976.361 80.63 964.661 89.73 964.661 105.07H943.341C943.341 78.55 965.181 61.13 997.941 61.13C1029.4 61.13 1050.72 77.77 1050.72 112.09V191.91H1029.92L1027.32 171.37C1020.82 185.93 1003.4 195.03 982.861 195.03ZM989.881 176.05C1013.02 176.05 1027.06 160.97 1027.06 137.05V130.29L994.561 132.89C972.981 134.97 964.141 143.29 964.141 155.77C964.141 169.29 974.021 176.05 989.881 176.05Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-75"></path><path d="M1065.85 128.47C1065.85 88.69 1091.07 61.13 1128.25 61.13C1160.23 61.13 1182.59 79.33 1187.01 107.67H1162.57C1158.41 91.55 1145.41 82.97 1129.03 82.97C1105.89 82.97 1090.03 100.65 1090.03 128.21C1090.03 155.51 1104.85 173.19 1127.99 173.19C1145.41 173.19 1158.41 164.09 1162.83 149.01H1187.27C1182.33 176.57 1158.67 195.03 1127.99 195.03C1090.55 195.03 1065.85 168.51 1065.85 128.47Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-100"></path><path d="M1227.09 191.65H1202.65V0.549988H1227.09V84.27C1235.15 70.49 1250.49 61.13 1270.25 61.13C1302.75 61.13 1318.35 81.67 1318.35 114.17V191.91H1293.91V119.63C1293.91 93.89 1281.69 83.49 1263.49 83.49C1239.83 83.49 1227.09 100.65 1227.09 122.49V191.65Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-150"></path><path d="M1366.24 191.91H1341.8V64.77H1363.64L1365.98 81.41C1372.48 69.45 1386 61.13 1403.94 61.13C1423.7 61.13 1437.74 71.01 1444.24 86.87C1450.22 71.01 1465.56 61.13 1485.32 61.13C1514.44 61.13 1532.12 79.33 1532.12 108.71V191.91H1508.2V114.69C1508.2 94.67 1497.02 83.23 1479.86 83.23C1461.4 83.23 1449.18 96.23 1449.18 116.51V191.91H1425V114.43C1425 94.41 1414.08 83.49 1396.92 83.49C1378.46 83.49 1366.24 96.23 1366.24 116.51V191.91Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-200"></path><path d="M1592.78 195.03C1565.48 195.03 1549.36 179.69 1549.36 156.55C1549.36 133.15 1566.78 118.59 1596.68 116.25L1636.72 113.13V109.49C1636.72 88.17 1623.98 80.63 1606.82 80.63C1586.28 80.63 1574.58 89.73 1574.58 105.07H1553.26C1553.26 78.55 1575.1 61.13 1607.86 61.13C1639.32 61.13 1660.64 77.77 1660.64 112.09V191.91H1639.84L1637.24 171.37C1630.74 185.93 1613.32 195.03 1592.78 195.03ZM1599.8 176.05C1622.94 176.05 1636.98 160.97 1636.98 137.05V130.29L1604.48 132.89C1582.9 134.97 1574.06 143.29 1574.06 155.77C1574.06 169.29 1583.94 176.05 1599.8 176.05Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-300"></path><path d="M1708.53 191.91H1684.09V64.77H1706.19L1708.79 84.27C1716.85 69.71 1732.97 61.13 1750.91 61.13C1784.45 61.13 1799.79 81.67 1799.79 114.17V191.91H1775.35V119.63C1775.35 93.89 1763.39 83.49 1744.67 83.49C1721.79 83.49 1708.53 99.87 1708.53 124.57V191.91Z" fill="currentColor" class="opacity-5 group-hover:opacity-100 transition-opacity ease-linear duration-500"></path>',14)]))}const r1=S(e1,[["render",n1]]),i1=window.setInterval,s1={class:"flex flex-col gap-dt"},l1={class:"grid grid-cols-2 gap-12"},c1={class:"flex flex-wrap lg:flex-col lg:items-end gap-4 md:gap-6 lg:gap-8"},p1=P({__name:"Footer",setup(i){const t=T(""),n={timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit"},p=()=>{const s=new Date;t.value=s.toLocaleTimeString("en-GB",n)};return F(()=>{p(),i1(p,6e4)}),(s,d)=>{const l=Y,c=B,g=G,h=J,V=X,y=z,M=j,w=r1;return C(),f(x,null,[o(l),m("footer",s1,[o(M,null,{default:a(()=>[m("div",l1,[(C(!0),f(x,null,E(b(k).contacts,(e,r)=>(C(),A(h,{key:r,class:"gap-4"},{default:a(()=>[o(c,null,{default:a(()=>[u(L(e.title),1)]),_:2},1024),o(g,{class:"opacity-50"},{default:a(()=>[u(L(e.content),1)]),_:2},1024)]),_:2},1024))),128)),o(h,{class:"gap-4"},{default:a(()=>[o(c,null,{default:a(()=>d[0]||(d[0]=[u(" Local Time ")])),_:1}),o(g,{class:"opacity-50"},{default:a(()=>[u(L(t.value)+" (GMT+7) ",1)]),_:1})]),_:1})]),m("div",c1,[(C(!0),f(x,null,E(b(k).socials,(e,r)=>(C(),A(y,{key:r,to:e.link,target:"_blank",style:N({"--hover-color":e.color}),class:"hover:text-[var(--hover-color)]"},{default:a(()=>[o(c,{class:"inline-flex items-center gap-4"},{default:a(()=>[u(L(e.name)+" ",1),o(V)]),_:2},1024)]),_:2},1032,["to","style"]))),128))])]),_:1}),o(w,{class:"w-full"})])],64)}}}),u1={mounted(){this.$router.beforeEach((i,t,n)=>{this.handleRouteChange(i,n)})},methods:{handleRouteChange(i,t){const n=this.$refs.mainContent;if(!n){t();return}H.to(n,{opacity:0,duration:.5,ease:"power2.inOut",onComplete:()=>{t(),this.$nextTick(()=>{H.to(n,{opacity:1,duration:.5,ease:"power2.inOut"})})}})}}},d1={class:"grid gap-8 md:gap-10 lg:gap-12"},_1={ref:"mainContent"};function C1(i,t,n,p,s,d){const l=o1,c=p1;return C(),f("div",d1,[o(l),m("main",_1,[U(i.$slots,"default")],512),o(c)])}const v1=S(u1,[["render",C1]]);export{v1 as default};
