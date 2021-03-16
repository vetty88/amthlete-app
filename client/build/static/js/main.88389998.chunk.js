(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n(77)},37:function(e,t,n){},56:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),o=n(8),i=n(1),u=n(19),s=n(11);n(37);var m=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var E=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},d=n(12),f=n.n(d),v=function(){return f.a.get("/api/competitions")},p=function(e){return f.a.get("/api/competitions/"+e)},h=function(e){return f.a.delete("/api/competitions/"+e)},b=function(e){return f.a.post("/api/competitions",e)};function g(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function N(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function j(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(56);function O(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function C(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function T(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var k=n(29),x=[{value:"dressage",label:"Dressage"},{value:"showJumping",label:"Show Jumping"},{value:"showing",label:"Showing"},{value:"horseTrials",label:"Horse Trials"},{value:"combinedTraining",label:"Combined Training"}];var S=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)({}),i=Object(s.a)(c,2),d=i[0],f=i[1];function p(){v().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}function S(e){var t=e.target,n=t.name,a=t.value;f(Object(u.a)(Object(u.a)({},d),{},{[n]:a}))}return Object(a.useEffect)((function(){p()}),[]),r.a.createElement(g,{fluid:!0},r.a.createElement(N,null,r.a.createElement(j,{size:"md-6"},r.a.createElement(E,null,r.a.createElement("h1",null,"What Competitions Should I Enter?")),r.a.createElement("form",null,r.a.createElement(C,{onChange:S,name:"eventName",placeholder:"EventName (required)"}),r.a.createElement(C,{onChange:S,name:"horse",placeholder:"Horse (required)"}),r.a.createElement(k.a,{onClick:S,name:"eventType",placeholder:"EventType (required)",options:x}),r.a.createElement(w,{onChange:S,name:"resultNotes",placeholder:"Result Notes (Optional)"}),r.a.createElement(T,{disabled:!(d.horse&&d.eventName),onClick:function(e){e.preventDefault(),d.eventName&&d.horse&&b({eventName:d.eventName,horse:d.horse,eventType:d.eventType,resultNotes:d.resultNotes}).then((function(e){return p()})).catch((function(e){return console.log(e)}))}},"Submit Competition"))),r.a.createElement(j,{size:"md-6 sm-12"},r.a.createElement(E,null,r.a.createElement("h1",null,"Competitions On My List")),n.length?r.a.createElement(O,null,n.map((function(e){return r.a.createElement(y,{key:e._id},r.a.createElement(o.b,{to:"/competitions/"+e._id},r.a.createElement("strong",null,e.eventName," with ",e.horse)),r.a.createElement(m,{onClick:function(){return t=e._id,void h(t).then((function(e){return p()})).catch((function(e){return console.log(e)}));var t}}))}))):r.a.createElement("h3",null,"No Results to Display"))))};var z=function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),l=n[0],c=n[1],u=Object(i.f)().id;return Object(a.useEffect)((function(){p(u).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(g,{fluid:!0},r.a.createElement(N,null,r.a.createElement(j,{size:"md-12"},r.a.createElement(E,null,r.a.createElement("h1",null,l.eventName," with ",l.horse)))),r.a.createElement(N,null,r.a.createElement(j,{size:"md-10 md-offset-1"},r.a.createElement("article",null,"Event:",r.a.createElement("p",null,l.eventType),"Results:",r.a.createElement("p",null,l.resultNotes)))),r.a.createElement(N,null,r.a.createElement(j,{size:"md-2"},r.a.createElement(o.b,{to:"/"},"\u2190 Back to Horses"))))};var q=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Equestrian Competitions"))};var R=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Equestrian Competitions"))};var J=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/competitions"]},r.a.createElement(S,null)),r.a.createElement(i.a,{exact:!0,path:"/competitions/:id"},r.a.createElement(z,null)),r.a.createElement(i.a,null,r.a.createElement(q,null)))))};c.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.88389998.chunk.js.map