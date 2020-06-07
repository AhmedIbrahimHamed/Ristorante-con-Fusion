(this["webpackJsonpstarting-package"]=this["webpackJsonpstarting-package"]||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=(t(99),t(100),t(101),t(102),t(20)),o=t(21),m=t(23),i=t(22),u=(t(103),t(152)),d=t(153),E=t(154),f=t(155),h=t(156),p=t(157),g=t(10),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},N="https://ahmed-json-server.herokuapp.com/";function v(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(E.a,null,r.a.createElement(f.a,null,a.name))))}var y=function(e){if(e.dishes.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null)));if(e.dishes.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess))));if(e.dishes.dishes){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(v,{dish:e}))}));return r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))}},O=t(19),M=t(158),w=t(159),L=t(160),k=t(161),j=t(162),S=t(163),C=t(164),D=t(165),F=t(179),x=t(166),A=t(167),I=t(168),T=t(169),R=t(170),_=t(171),P=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleLogin=n.handleLogin.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{onClick:this.toggleNav}),r.a.createElement(L.a,{href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(k.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(j.a,{navbar:!0},r.a.createElement(S.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(S.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(S.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(S.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(j.a,{className:"ml-auto",navbar:!0},r.a.createElement(S.a,null,r.a.createElement(C.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(D.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(F.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(x.a,{toggle:this.toggleModal},"Login"),r.a.createElement(A.a,null,r.a.createElement(I.a,{onSubmit:this.handleLogin},r.a.createElement(T.a,null,r.a.createElement(R.a,{htmlFor:"username"},"Username"),r.a.createElement(_.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(T.a,null,r.a.createElement(R.a,{htmlFor:"password"},"Password"),r.a.createElement(_.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(T.a,{check:!0},r.a.createElement(R.a,{check:!0},r.a.createElement(_.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(C.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var q=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 Ristorante Con Fusion")))))},H=t(172),G=t(173),Y=t(174),U=t(28);function W(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):null!=a?r.a.createElement(U.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:N+a.image,alt:a.name}),r.a.createElement(H.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(G.a,null,a.designation):null,r.a.createElement(Y.a,null,a.description)))):void 0}var B=function(e){return r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(W,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},K=t(175),z=t(176),J=t(9),Z=function(e){return function(a){return!a||a.length<=e}};function $(e){var a=e.dish;return r.a.createElement(u.a,null,r.a.createElement(U.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{top:!0,src:N+a.image,alt:a.name}),r.a.createElement(H.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(Y.a,null,a.description)))))}function Q(e){var a=e.comments,t=e.postComment,n=e.dishId,l=r.a.createElement("h3",null,"Comments");if(a.length){var s=a.map((function(e){var a=new Date(e.date).toDateString();return r.a.createElement(U.Fade,{in:!0,key:e.id},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,e.comment),r.a.createElement("li",null,"-- ",e.author," ,",a)))}));l=r.a.createElement("div",null,r.a.createElement("h3",null,"Comments"),r.a.createElement(U.Stagger,{in:!0},s))}return r.a.createElement("div",null,l,r.a.createElement(V,{dishId:n,postComment:t}))}var V=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleCommentSumbit=n.handleCommentSumbit.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleCommentSumbit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment),this.toggleModal()}},{key:"render",value:function(){var e,a=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-edit fa-lg"})," Submit Comment"),r.a.createElement("div",{className:"col-md-9 mb-3"},r.a.createElement(F.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(x.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(A.a,null,r.a.createElement(J.LocalForm,{onSubmit:function(e){return a.handleCommentSumbit(e)}},r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"rating",md:3},"Rating"),r.a.createElement(z.a,{xs:12},r.a.createElement(J.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"author",md:3},"Your Name"),r.a.createElement(z.a,{xs:12},r.a.createElement(J.Control.text,{model:".author",id:"author",name:"author",className:"form-control",validators:{minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:Z(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"comment",md:3},"Comment"),r.a.createElement(z.a,{xs:12},r.a.createElement(J.Control.textarea,{model:".comment",id:"comment",name:"comment",className:"form-control",rows:6}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(z.a,{md:10},r.a.createElement(C.a,{type:"submit",color:"primary"},"Submit"))))))))}}]),t}(n.Component),X=function(e){return e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement($,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(Q,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null)))},ee=t(11),ae=function(e){return e&&e.length},te=function(e){return function(a){return!a||a.length<=e}},ne=function(e){return function(a){return a&&a.length>=e}},re=function(e){return!isNaN(Number(e))},le=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},se=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){var a={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};console.log("Current State is: "+a),this.props.postFeedback(a),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"skype"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(J.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ae,minLength:ne(3),maxLength:te(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ae,minLength:ne(3),maxLength:te(15)}}),r.a.createElement(J.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:ae,minLength:ne(3),maxLength:te(15),isNumber:re}}),r.a.createElement(J.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ae,validEmail:le}}),r.a.createElement(J.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(z.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(R.a,{check:!0},r.a.createElement(J.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(z.a,{md:{size:3,offset:1}},r.a.createElement(J.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(z.a,{md:10},r.a.createElement(J.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(K.a,{className:"form-group"},r.a.createElement(z.a,{md:{size:10,offset:2}},r.a.createElement(C.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ce=t(177),oe=t(178);function me(e){var a=e.leader;return r.a.createElement(ce.a,{className:"mt-5"},r.a.createElement(ce.a,{left:!0,className:"mr-5"},r.a.createElement(ce.a,{className:"leader-image",object:!0,src:N+a.image,alt:a.name})),r.a.createElement(ce.a,{body:!0},r.a.createElement(ce.a,{heading:!0},a.name),r.a.createElement(ce.a,{className:"mt-2"},a.designation),r.a.createElement("p",{className:"mt-3"},a.description)))}var ie=function(e){var a=e.leaders,t=e.isLoading,n=e.errMess,l=null;return t?l=r.a.createElement("div",null,r.a.createElement(b,null)):n?l=r.a.createElement("h4",null,n):null!=a&&(l=r.a.createElement(ce.a,{list:!0},r.a.createElement(U.Stagger,{in:!0},a.map((function(e){return r.a.createElement(U.Fade,{key:e.id},r.a.createElement(me,{leader:e}))}))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.a,null,r.a.createElement(oe.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(H.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.a,null,r.a.createElement(H.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-8"},l)))},ue=t(26),de=function(){return{type:"DISHES_LOADING"}},Ee=function(e){return{type:"ADD_DISHES",payload:e}},fe=function(e){return{type:"DISHES_FAILED",payload:e}},he=function(e){return{type:"COMMENTS_FAILED",payload:e}},pe=function(e){return{type:"ADD_COMMENTS",payload:e}},ge=function(e){return{type:"ADD_COMMENT",payload:e}},be=function(){return{type:"PROMOS_LOADING"}},Ne=function(e){return{type:"PROMOS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOS",payload:e}},ye=function(){return{type:"LEADERS-LOADING"}},Oe=function(e){return{type:"LEADERS_FAILED",payload:e}},Me=function(e){return{type:"ADD_LEADERS",payload:e}},we=t(56),Le=t(88),ke=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(we.a,null,r.a.createElement(Le.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ee.d,null,r.a.createElement(ee.b,{path:"/home",component:function(){return r.a.createElement(B,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ee.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(ie,{leaders:e.props.leaders.leaders,isLoading:e.props.leaders.isLoading,errMess:e.props.leaders.errMess})}}),r.a.createElement(ee.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(ee.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(X,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ee.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(se,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ee.a,{to:"/home"})))),r.a.createElement(q,null))}}]),t}(n.Component),je=Object(ee.g)(Object(ue.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(ge(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(de(!0)),fetch(N+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ee(a))})).catch((function(a){return e(fe(a.message))}))}))},resetFeedbackForm:function(){e(J.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(he(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(be()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(ye()),fetch(N+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error"+e.status+":"+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Me(a))})).catch((function(a){return e(Oe(a))}))}))},postFeedback:function(a){return e(function(e){return function(a){var t={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message};return t.date=(new Date).toISOString(),fetch(N+"feedback",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){alert("Your feedback has been Posted Successfully :"+JSON.stringify(e))})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a))}}}))(ke)),Se=t(7),Ce=t(27),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DISHES_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload,dishes:[]});case"ADD_DISHES":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Se.a)(Object(Se.a)({},e),{},{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(Se.a)(Object(Se.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS-LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Ie=t(91),Te=t(92),Re=t.n(Te),_e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Pe=Object(Ce.createStore)(Object(Ce.combineReducers)(Object(Se.a)({dishes:De,comments:Fe,leaders:Ae,promotions:xe},Object(J.createForms)({feedback:_e}))),Object(Ce.applyMiddleware)(Ie.a,Re.a)),qe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.Provider,{store:Pe},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(je,null))))}}]),t}(n.Component);s.a.render(r.a.createElement(qe,null),document.getElementById("root"))},94:function(e,a,t){e.exports=t(151)}},[[94,1,2]]]);
//# sourceMappingURL=main.5fa67781.chunk.js.map