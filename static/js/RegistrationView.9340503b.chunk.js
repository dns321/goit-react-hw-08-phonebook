(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[3],{111:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t(23),r=t(24),i=t(26),l=t(25),o=t(0),c=(t(111),t(14)),h=t(27),m=t(1),b=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,r=t.value;e.setState(Object(n.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Registration page"}),Object(m.jsx)("h2",{children:"Please enter Login and Password"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",className:"registration-form",children:[Object(m.jsxs)("label",{className:"registration-label",children:["Name",Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:a,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"registration-label",children:["Email",Object(m.jsx)("input",{type:"email",name:"email",placeholder:"example@gmail.com",value:t,onChange:this.handleChange})]}),Object(m.jsxs)("label",{className:"registration-label",children:["Password",Object(m.jsx)("input",{type:"password",name:"password",placeholder:"Enter minimum 7 characters",value:n,onChange:this.handleChange})]}),Object(m.jsx)("button",{type:"submit",children:"Registration"})]})]})}}]),t}(o.Component),p={onRegister:h.a.register};a.default=Object(c.b)(null,p)(b)}}]);
//# sourceMappingURL=RegistrationView.9340503b.chunk.js.map