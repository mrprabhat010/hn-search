import{r as l,u as d,j as t,L as h}from"./index-Ct48gvXi.js";import{u as m,m as u}from"./motion-lPwiD4iH.js";import{u as p}from"./searchStore-DxnXCWYF.js";const j=(e,s)=>{const[r,a]=l.useState(e);return l.useEffect(()=>{const n=setTimeout(()=>{a(e)},s);return()=>{clearTimeout(n)}},[e,s]),r},_=async e=>{const s=await fetch(`http://hn.algolia.com/api/v1/search?query=${e}`);if(!s.ok)throw new Error("Network response was not ok");return s.json()},f=()=>{const[e,s]=d(),{query:r,setQuery:a}=p(),[n]=j(r,500);return l.useEffect(()=>{const c=e.get("query");c!==null&&c!==r&&a(c)},[e,a,r]),l.useEffect(()=>{r!==e.get("query")&&s({query:r})},[r,e,s]),m({queryKey:["searchResults",n],queryFn:()=>_(n),enabled:!!n,staleTime:1*60*1e3})},y="_resultsContainer_1puje_1",x="_select_1puje_8",v="_list_1puje_26",S="_loaderContainer_1puje_72",g="_loader_1puje_72",o={resultsContainer:y,select:x,list:v,loaderContainer:S,loader:g,"l-1":"_l-1_1puje_1","l-2":"_l-2_1puje_1"},C=(e,s)=>{switch(s){case"date":return e.sort((r,a)=>new Date(a.created_at).getTime()-new Date(r.created_at).getTime());case"relevance":default:return e}},D=()=>{const{data:e,error:s,isLoading:r}=f(),[a,n]=l.useState("relevance");if(r)return t.jsx("div",{className:o.loaderContainer,children:t.jsx("div",{className:"loader"})});if(s)return t.jsx("div",{children:"Error loading results"});if(!e||!e.hits)return t.jsx("div",{children:"No results found"});const c=C([...e.hits],a);return t.jsxs(u.div,{className:o.resultsContainer,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[t.jsxs("select",{onChange:i=>n(i.target.value),value:a,className:o.select,children:[t.jsx("option",{value:"relevance",children:"Relevance"}),t.jsx("option",{value:"date",children:"Date"})]}),t.jsx("div",{className:o.list,children:t.jsx("ul",{className:o.list,children:c.map(i=>t.jsx(u.li,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:o.listItem,children:t.jsx("span",{children:t.jsx(h,{to:`/post/${i.objectID}`,children:i.title})})},i.objectID))})})]})};export{D as default};