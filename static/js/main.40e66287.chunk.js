(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{12:function(e,t,n){e.exports={item:"TodoItem_item__3WNrC",checkbox:"TodoItem_checkbox__2vmIs",textInput:"TodoItem_textInput__175Kr"}},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(1),a=n.n(o),i=n(19),s=n.n(i),r=n(17),l=n(18),u=n(7),d=function(){return Object(c.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(c.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#eee",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},j=n(11),b=function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.trim()?(e.addTodoProps(a),i("")):alert("Please Write Item")},className:"form-container",children:[Object(c.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:a,name:"title",onChange:function(e){i(e.target.value)}}),Object(c.jsx)("button",{className:"input-submit",children:Object(c.jsx)(j.a,{})})]})},h=n(12),p=n.n(h),x=function(e){var t=Object(o.useState)(!1),n=Object(u.a)(t,2),a=n[0],i=n[1];var s=e.todo,r=s.completed,l=s.title,d=s.id,b={},h={};return a?b.display="none":h.display="none",Object(o.useEffect)((function(){return function(){console.log("Cleaning Up..........")}}),[]),Object(c.jsxs)("li",{className:p.a.item,children:[Object(c.jsxs)("div",{onDoubleClick:function(){i(!0)},style:b,children:[Object(c.jsx)("input",{type:"checkbox",className:p.a.checkbox,checked:r,onChange:function(){return e.handleChangeProps(d)}}),Object(c.jsx)("button",{onClick:function(){return e.deleteTodoProps(d)},children:Object(c.jsx)(j.b,{})}),Object(c.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(c.jsx)("input",{type:"text",style:h,className:p.a.textInput,value:l,onChange:function(t){e.setUpdate(t.target.value,d)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},O=function(e){return Object(c.jsx)("ul",{children:e.todos.map((function(t){return Object(c.jsx)(x,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},m=n(3),f=n(6),g=function(){var e=Object(m.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Shreyas, a self-taught web developer and a technical writer. "}].find((function(t){return t.slug===e})),n=t.title,o=t.description;return Object(c.jsxs)("div",{className:"main__content",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("h2",{children:o})]})},v=function(){var e=Object(m.g)(),t=e.url,n=e.path;return Object(c.jsxs)("div",{className:"about__content",children:[Object(c.jsxs)("ul",{className:"about__list",children:[Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"".concat(t,"/about-app"),children:"About App"})}),Object(c.jsx)("li",{children:Object(c.jsx)(f.b,{to:"".concat(t,"/about-author"),children:"About Author"})})]}),Object(c.jsx)(m.a,{path:"".concat(n,"/:slug"),children:Object(c.jsx)(g,{})})]})},y=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h3",{children:"No match for this page"})})},N=n(22),k=n(23),_=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("nav",{className:"navBar",children:[Object(c.jsx)("button",{onClick:function(){a(!n)},children:n?Object(c.jsx)(N.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(c.jsx)(k.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(c.jsx)("ul",{className:"menuNav ".concat(n?"showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(f.c,{to:e.path,activeClassName:"active-link",onClick:function(){a(!1)},exact:!0,children:e.text})},e.id)}))})]})},C=n(40),S=function(){var e=Object(o.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{exact:!0,path:"/",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)(d,{}),Object(c.jsx)(b,{addTodoProps:function(e){var t={id:Object(C.a)(),title:e,completed:!1};a([].concat(Object(r.a)(n),[t]))}}),Object(c.jsx)(O,{todos:n,handleChangeProps:function(e){a((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){a(Object(r.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){a(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(c.jsx)(m.a,{path:"/about",children:Object(c.jsx)(v,{})}),Object(c.jsx)(m.a,{path:"*",children:Object(c.jsx)(y,{})})]})]})};n(37);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)(S,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.40e66287.chunk.js.map