import{r as u,j as e,a as p}from"./index-Ct48gvXi.js";import{u as x,m as j}from"./motion-lPwiD4iH.js";const f=async s=>{const n=await fetch(`http://hn.algolia.com/api/v1/items/${s}`);if(!n.ok)throw new Error("Network response was not ok");return n.json()},v=s=>x({queryKey:["postDetails",s],queryFn:()=>f(s),enabled:!!s,staleTime:1*60*1e3}),g="_comment_17jnp_1",N="_circle_17jnp_9",y="_content_17jnp_22",$="_author_17jnp_27",w="_createdAt_17jnp_32",M="_text_17jnp_38",C="_readMore_17jnp_42",i={comment:g,circle:N,content:y,author:$,createdAt:w,text:M,readMore:C},q=s=>{const n=new Date,a=new Date(s),m=n.getTime()-a.getTime(),c=Math.floor(m/1e3),r=Math.floor(c/60),t=Math.floor(r/60),l=Math.floor(t/24),d=Math.floor(l/30),h=Math.floor(d/12);return h>0?`${h} year${h===1?"":"s"} ago`:d>0?`${d} month${d===1?"":"s"} ago`:l>0?`${l} day${l===1?"":"s"} ago`:t>0?`${t} hour${t===1?"":"s"} ago`:r>0?`${r} minute${r===1?"":"s"} ago`:"Just now"},T=({author:s,createdAt:n,text:a})=>{const m=h=>{const _=h.match(/\b\w/g)||[];return(_.shift()||"").toUpperCase()+(_.pop()||"").toUpperCase()},[c,r]=u.useState(!1),t=()=>{r(!c)},l=()=>a.length>200&&!c?e.jsxs(e.Fragment,{children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:a}}),e.jsx("span",{className:i.readMore,onClick:t,children:"Read more"})]}):e.jsx("p",{dangerouslySetInnerHTML:{__html:a}}),d=q(n);return e.jsxs(j.div,{className:i.comment,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsx("div",{className:i.circle,children:m(s)}),e.jsxs("div",{className:i.content,children:[e.jsx("div",{className:i.author,children:s}),e.jsx("div",{className:i.createdAt,children:d}),e.jsx("div",{className:i.text,children:l()})]})]})},D="_container_18vfq_1",P="_title_18vfq_13",A="_points_18vfq_18",E="_comments_18vfq_23",F="_comment_18vfq_23",S="_loaderContainer_18vfq_38",k="_loader_18vfq_38",I="_l4_18vfq_1",o={container:D,title:P,points:A,comments:E,comment:F,loaderContainer:S,loader:k,l4:I},H=()=>{const{id:s}=p(),{data:n,error:a,isLoading:m}=v(s);if(m)return e.jsx("div",{className:o.loaderContainer,children:e.jsx("div",{className:o.loader})});if(a)return e.jsx("div",{children:"Error loading post details"});const c=r=>r.map(t=>e.jsxs("div",{children:[e.jsx(T,{author:t.author,createdAt:t.created_at,text:t.text}),t.children&&e.jsx("div",{className:o.comments,children:c(t.children)})]},t.id));return e.jsxs("div",{className:o.container,children:[e.jsxs("div",{className:o.header,children:[e.jsx("h1",{className:o.title,children:n.title}),e.jsxs("p",{className:o.points,children:["Points: ",n.points]}),e.jsx("h2",{children:"Comments"})]}),e.jsx("div",{className:o.comments,children:e.jsx("div",{className:o.comment,children:c(n.children)})})]})};export{H as default};