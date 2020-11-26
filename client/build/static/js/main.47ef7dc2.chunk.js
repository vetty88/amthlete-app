(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{32:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c(25),i=c.n(r),j=c(10),a=c(2),l=c(8),o=c(12);c(32);var d=function(e){return Object(n.jsx)("span",Object(l.a)(Object(l.a)({className:"delete-btn"},e),{},{role:"button",tabIndex:"0",children:"\u2717"}))};var b=function({children:e}){return Object(n.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:e})},h=c(13),u=c.n(h),O=function(){return u.a.get("/api/competitions")},x=function(e){return u.a.get("/api/competitions/"+e)},m=function(e){return u.a.delete("/api/competitions/"+e)},f=function(e){return u.a.post("/api/competitions",e)};function p({fluid:e,children:t}){return Object(n.jsx)("div",{className:"container".concat(e?"-fluid":""),children:t})}function v({fluid:e,children:t}){return Object(n.jsx)("div",{className:"row".concat(e?"-fluid":""),children:t})}function N({size:e,children:t}){return Object(n.jsx)("div",{className:e.split(" ").map((e=>"col-"+e)).join(" "),children:t})}c(51);function g({children:e}){return Object(n.jsx)("div",{className:"list-overflow-container",children:Object(n.jsx)("ul",{className:"list-group",children:e})})}function y({children:e}){return Object(n.jsx)("li",{className:"list-group-item",children:e})}function C(e){return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",Object(l.a)({className:"form-control"},e))})}function E(e){return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",Object(l.a)({className:"form-control",rows:"20"},e))})}function z(e){return Object(n.jsx)("button",Object(l.a)(Object(l.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}var k=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)({}),a=Object(o.a)(i,2),h=a[0],u=a[1];function x(){O().then((e=>r(e.data))).catch((e=>console.log(e)))}function k(e){var t=e.target,c=t.name,n=t.value;u(Object(l.a)(Object(l.a)({},h),{},{[c]:n}))}return Object(s.useEffect)((()=>{x()}),[]),Object(n.jsx)(p,{fluid:!0,children:Object(n.jsxs)(v,{children:[Object(n.jsxs)(N,{size:"md-6",children:[Object(n.jsx)(b,{children:Object(n.jsx)("h1",{children:"What Competitions Should I Enter?"})}),Object(n.jsxs)("form",{children:[Object(n.jsx)(C,{onChange:k,name:"eventName",placeholder:"EventName (required)"}),Object(n.jsx)(C,{onChange:k,name:"horse",placeholder:"Horse (required)"}),Object(n.jsx)(E,{onChange:k,name:"resultNotes",placeholder:"ResultNotes (Optional)"}),Object(n.jsx)(z,{disabled:!(h.horse&&h.eventName),onClick:function(e){e.preventDefault(),h.eventName&&h.horse&&f({eventName:h.eventName,horse:h.horse,resultNotes:h.resultNotes}).then((e=>x())).catch((e=>console.log(e)))},children:"Submit Competition"})]})]}),Object(n.jsxs)(N,{size:"md-6 sm-12",children:[Object(n.jsx)(b,{children:Object(n.jsx)("h1",{children:"Competitions On My List"})}),c.length?Object(n.jsx)(g,{children:c.map((e=>Object(n.jsxs)(y,{children:[Object(n.jsx)(j.b,{to:"/competitions/"+e._id,children:Object(n.jsxs)("strong",{children:[e.eventName," by ",e.horse]})}),Object(n.jsx)(d,{onClick:()=>{return t=e._id,void m(t).then((e=>x())).catch((e=>console.log(e)));var t}})]},e._id)))}):Object(n.jsx)("h3",{children:"No Results to Display"})]})]})})};var w=function(e){var t=Object(s.useState)({}),c=Object(o.a)(t,2),r=c[0],i=c[1],l=Object(a.f)().id;return Object(s.useEffect)((()=>{x(l).then((e=>i(e.data))).catch((e=>console.log(e)))}),[]),Object(n.jsxs)(p,{fluid:!0,children:[Object(n.jsx)(v,{children:Object(n.jsx)(N,{size:"md-12",children:Object(n.jsx)(b,{children:Object(n.jsxs)("h1",{children:[r.eventName," by ",r.horse]})})})}),Object(n.jsx)(v,{children:Object(n.jsx)(N,{size:"md-10 md-offset-1",children:Object(n.jsxs)("article",{children:[Object(n.jsx)("h1",{children:"ResultNotes"}),Object(n.jsx)("p",{children:r.resultNotes})]})})}),Object(n.jsx)(v,{children:Object(n.jsx)(N,{size:"md-2",children:Object(n.jsx)(j.b,{to:"/",children:"\u2190 Back to Horses"})})})]})};var R=function(){return Object(n.jsx)(p,{fluid:!0,children:Object(n.jsx)(v,{children:Object(n.jsx)(N,{size:"md-12",children:Object(n.jsxs)(b,{children:[Object(n.jsx)("h1",{children:"404 Page Not Found"}),Object(n.jsx)("h1",{children:Object(n.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};var S=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:"React Equestrian Competition List"})})};var q=function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{}),Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{exact:!0,path:["/","/competitions"],children:Object(n.jsx)(k,{})}),Object(n.jsx)(a.a,{exact:!0,path:"/competitions/:id",children:Object(n.jsx)(w,{})}),Object(n.jsx)(a.a,{children:Object(n.jsx)(R,{})})]})]})})};i.a.render(Object(n.jsx)(q,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.47ef7dc2.chunk.js.map