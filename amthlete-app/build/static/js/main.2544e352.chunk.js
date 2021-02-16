(this["webpackJsonpamthlete-app"]=this["webpackJsonpamthlete-app"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},68:function(e,t,n){},84:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(13),s=n.n(r),a=n(11),o=(n(47),n(36)),l=n(37),j=n(41),d=n(40),h=n(42),b=n(4),u=n(17),O=n(9),m=n(15),x=(n(48),n(1));var p=function(e){return Object(x.jsx)("span",Object(O.a)(Object(O.a)({className:"delete-btn"},e),{},{role:"button",tabIndex:"0",children:"\u2717"}))};var f=function(e){var t=e.children;return Object(x.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:t})},v=n(16),g=n.n(v),N=function(){return g.a.get("/api/competitions")},w=function(e){return g.a.get("/api/competitions/"+e)},y=function(e){return g.a.delete("/api/competitions/"+e)},C=function(e){return g.a.post("/api/competitions",e)};function T(e){var t=e.fluid,n=e.children;return Object(x.jsx)("div",{className:"container".concat(t?"-fluid":""),children:n})}function k(e){var t=e.fluid,n=e.children;return Object(x.jsx)("div",{className:"row".concat(t?"-fluid":""),children:n})}function E(e){var t=e.size,n=e.children;return Object(x.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:n})}n(68);function z(e){var t=e.children;return Object(x.jsx)("div",{className:"list-overflow-container",children:Object(x.jsx)("ul",{className:"list-group",children:t})})}function S(e){var t=e.children;return Object(x.jsx)("li",{className:"list-group-item",children:t})}function q(e){return Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",Object(O.a)({className:"form-control"},e))})}function R(e){return Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("textarea",Object(O.a)({className:"form-control",rows:"20"},e))})}function W(e){return Object(x.jsx)("button",Object(O.a)(Object(O.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}var B=n(39),J=[{value:"dressage",label:"Dressage"},{value:"showJumping",label:"Show Jumping"},{value:"showing",label:"Showing"},{value:"horseTrials",label:"Horse Trials"},{value:"combinedTraining",label:"Combined Training"}];var D=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)({}),s=Object(m.a)(r,2),o=s[0],l=s[1];function j(){N().then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}function d(e){var t=e.target,n=t.name,c=t.value;l(Object(O.a)(Object(O.a)({},o),{},Object(u.a)({},n,c)))}return Object(c.useEffect)((function(){j()}),[]),Object(x.jsx)(T,{fluid:!0,children:Object(x.jsxs)(k,{children:[Object(x.jsxs)(E,{size:"md-6",children:[Object(x.jsx)(f,{children:Object(x.jsx)("h1",{children:"What Competitions Should I Enter?"})}),Object(x.jsxs)("form",{children:[Object(x.jsx)(q,{onChange:d,name:"eventName",placeholder:"EventName (required)"}),"Event Type:",Object(x.jsx)(B.a,{onClick:d,name:"eventType",placeholder:"EventType (required)",options:J}),Object(x.jsx)(q,{onChange:d,name:"horse",placeholder:"Horse (required)"}),Object(x.jsx)(R,{onChange:d,name:"resultNotes",placeholder:"ResultNotes (Optional)"}),Object(x.jsx)(W,{disabled:!(o.eventName&&o.horse),onClick:function(e){e.preventDefault(),o.eventName&&o.horse&&C({eventName:o.eventName,eventType:o.eventType,horse:o.horse,disciplines:o.disciplines,penalties:o.penalties,place:o.place,images:o.images,resultNotes:o.resultNotes,date:o.date}).then((function(e){return j()})).catch((function(e){return console.log(e)}))},children:"Submit Competition"})]})]}),Object(x.jsxs)(E,{size:"md-6 sm-12",children:[Object(x.jsx)(f,{children:Object(x.jsx)("h1",{children:"Competitions On My List"})}),n.length?Object(x.jsx)(z,{children:n.map((function(e){return Object(x.jsxs)(S,{children:[Object(x.jsx)(a.b,{to:"/competitions/"+e._id,children:Object(x.jsxs)("strong",{children:[e.eventName," with ",e.horse]})}),Object(x.jsx)(p,{onClick:function(){return t=e._id,void y(t).then((function(e){return j()})).catch((function(e){return console.log(e)}));var t}})]},e._id)}))}):Object(x.jsx)("h3",{children:"No Results to Display"})]})]})})};var F=function(e){var t=Object(c.useState)({}),n=Object(m.a)(t,2),i=n[0],r=n[1],s=Object(b.g)().id;return Object(c.useEffect)((function(){w(s).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[s]),Object(x.jsxs)(T,{fluid:!0,children:[Object(x.jsx)(k,{children:Object(x.jsx)(E,{size:"md-12",children:Object(x.jsx)(f,{children:Object(x.jsxs)("h1",{children:[i.eventName," with ",i.horse]})})})}),Object(x.jsx)(k,{children:Object(x.jsx)(E,{size:"md-10 md-offset-1",children:Object(x.jsxs)("article",{children:[Object(x.jsx)("h1",{children:"ResultNotes"}),Object(x.jsx)("p",{children:i.eventName}),Object(x.jsx)("p",{children:i.eventType}),Object(x.jsx)("p",{children:i.horse}),Object(x.jsx)("p",{children:i.penalties}),Object(x.jsx)("p",{children:i.place}),Object(x.jsx)("p",{children:i.images}),Object(x.jsx)("p",{children:i.resultNotes})]})})}),Object(x.jsx)(k,{children:Object(x.jsx)(E,{size:"md-2",children:Object(x.jsx)(a.b,{to:"/",children:"\u2190 Back to Horses"})})})]})};var H=function(){return Object(x.jsx)(T,{fluid:!0,children:Object(x.jsx)(k,{children:Object(x.jsx)(E,{size:"md-12",children:Object(x.jsxs)(f,{children:[Object(x.jsx)("h1",{children:"404 Page Not Found"}),Object(x.jsx)("h1",{children:Object(x.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};var I=function(){return Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(x.jsx)("a",{className:"navbar-brand",href:"/",children:"React Equestrian Competition List"})})},_=(n(84),function(){return Object(x.jsx)("footer",{className:"page-footer",children:Object(x.jsx)("div",{className:"container-fluid text-center",children:Object(x.jsx)("p",{children:"Equestrian Competition Tracker - Y Waller"})})})}),L=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(i.a.Fragment,{children:[Object(x.jsx)(h.a,{}),Object(x.jsxs)("section",{className:"hero-is-fullheight",children:[Object(x.jsx)("div",{className:"head-head",children:Object(x.jsx)(I,{})}),Object(x.jsx)("div",{className:"head-body",children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/competitions",component:D}),Object(x.jsx)(b.b,{path:"/detail",component:F}),Object(x.jsx)(b.b,{path:"/nomatch",component:H}),Object(x.jsx)(b.a,{from:"/",exact:!0,to:"/competitions"}),Object(x.jsx)(b.a,{to:"/nomatch"})]})}),Object(x.jsx)("div",{className:"head-foot",children:Object(x.jsx)(_,{})})]})]})}}]),n}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(a.a,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[89,1,2]]]);
//# sourceMappingURL=main.2544e352.chunk.js.map