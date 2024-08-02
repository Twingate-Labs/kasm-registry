(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return s(5790)}])},5790:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return m},default:function(){return p}});var a=s(5893),l=s(9008),r=s.n(l),n=s(7294),i=s(3162),o=s(8813),c=s(3157),d=s(1163),u=JSON.parse('{"wZ":[{"description":"Google Chrome with Twingate Zero-Trust Network Access.","docker_registry":"https://europe-west2-docker.pkg.dev/twingate-labs/tg-agentless-images/","image_src":"twingate-chrome.svg","name":"europe-west2-docker.pkg.dev/twingate-labs/tg-agentless-images/tg-chrome:dev","run_config":{"cap_add":["NET_ADMIN"],"devices":["/dev/net/tun:/dev/net/tun:rwm"],"hostname":"kasm"},"exec_config":{"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"},"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Twingate Chrome","architecture":["amd64"],"compatibility":["1.13.x","1.14.x","1.15.x"],"uncompressed_size_mb":2170,"notes":"For setup instructions please refer to Twingate documentation at https://[TODO]","sha":"7a24963a1cdf6c22927e0397fc0fd2cef61944a2"},{"description":"Ubuntu Desktop with Twingate Zero-Trust Network Access.","docker_registry":"https://europe-west2-docker.pkg.dev/twingate-labs/tg-agentless-images/","image_src":"twingate-desktop.svg","name":"europe-west2-docker.pkg.dev/twingate-labs/tg-agentless-images/tg-desktop:dev","run_config":{"cap_add":["NET_ADMIN"],"devices":["/dev/net/tun:/dev/net/tun:rwm"],"hostname":"kasm"},"exec_config":{"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"},"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"}},"categories":["Desktop","Development","Devops"],"friendly_name":"Twingate Desktop","architecture":["amd64"],"compatibility":["1.13.x","1.14.x","1.15.x"],"uncompressed_size_mb":7660,"notes":"For setup instructions please refer to Twingate documentation at https://[TODO]","sha":"9ac849516df67b27af065ffda954f4e19687cf51"}]}'),m=!0;function p(e){let{workspace:t}=e,l=(0,n.useRef)(null),m=(0,n.useRef)(null),p=(0,n.useRef)(null),[h,g]=(0,n.useState)(null),[b,x]=(0,n.useState)(null),[v,w]=(0,n.useState)(null),[_,j]=(0,n.useState)("png"),[y,N]=(0,n.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,n.useState)(k);(0,d.useRouter)(),(0,n.useEffect)(()=>{if(null===t)p.current.value="",l.current.value="",m.current.value="",g(null),x(null),w(null),S(k);else if(t&&t[0]){let e=u.wZ.find(e=>e.name===atob(t[0]));if(delete e.sha,p.current.value=e.description,l.current.value=e.name,m.current.value=e.friendly_name,e.categories){let s=[];e.categories.map(e=>s.push({label:e,value:e})),g(s)}if(e.architecture){let a=[];e.architecture.map(e=>a.push({label:e,value:e})),x(a)}N("../../icons/"+e.image_src),S({...C,...e})}},[t]);let T={control:(e,t)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,t){let{data:s}=t;return{...e,backgroundColor:"#dde6f1"}}};(0,n.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=O(e.friendly_name)+"."+_,S(e)}},[_]);let D=e=>{let t={...C};t.categories=e.map(e=>e.value),S(t);let s=[];t.categories.map(e=>s.push({label:e,value:e})),g(s)},A=e=>{let t={...C};t.architecture=e.map(e=>e.value),S(t);let s=[];t.architecture.map(e=>s.push({label:e,value:e})),x(s)};function O(e){var t=e.toString().toLowerCase();return(t=(t=(t=t.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let R=()=>{var e=s(5733);let t=new e,a=t.folder(C.friendly_name);if(a.file("workspace.json",JSON.stringify(C,null,2)),v)a.file(C.image_src,v.file);else if(y){let l=fetch(y).then(e=>e.blob());a.file(C.image_src,l)}t.generateAsync({type:"blob"}).then(function(e){(0,i.saveAs)(e,O(C.friendly_name)+".zip")})},I=e=>{let t={...C};t[e.target.name]=e.target.value,"icon"===e.target.name&&(delete t.icon,w({value:e.target.value,file:e.target.files[0]}),j(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),t.friendly_name&&(t.image_src=O(t.friendly_name)+"."+_),S(t)};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Kasm Workspaces"}),(0,a.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,a.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,a.jsx)("input",{type:"file",name:"icon",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,a.jsx)("input",{ref:m,name:"friendly_name",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,a.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:D,styles:T,value:h}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,a.jsx)("input",{ref:p,name:"description",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,a.jsx)("input",{ref:l,name:"name",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,a.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,a.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,a.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,a.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:A,styles:T,value:b}),(0,a.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,a.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,a.jsx)(f,{workspace:C,icon:v,inlineImage:y}),(0,a.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,a.jsx)("button",{onClick:R,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function f(e){let{workspace:t,icon:s,inlineImage:l}=e,[r,i]=(0,n.useState)(!1),o=null;if(s){let c=new Blob([s.file]);o=URL.createObjectURL(c),t.image_src=o}return(0,a.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,a.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,a.jsxs)("div",{onClick:()=>i(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,a.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:t.image_src,onError(e){null!==l&&(e.target.src=l)},alt:t.friendly_name}),(0,a.jsxs)("div",{className:"flex-col pl-28",children:[(0,a.jsx)("div",{className:"font-bold",children:t.friendly_name||"Friendly Name"}),(0,a.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Twingate Inc."," ",(0,a.jsx)("span",{children:void 0})]}),(0,a.jsx)("div",{className:" h-8"})]}),(0,a.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[t.architecture&&t.architecture.map((e,t)=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+t)),t.categories.map((e,t)=>(0,a.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+t))]}),!1]}),(0,a.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,a.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>i(!1),children:(0,a.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,a.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,a.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,a.jsx)("div",{className:"font-bold",children:t.friendly_name})," ",t.description]}),(0,a.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,a.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,a.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);