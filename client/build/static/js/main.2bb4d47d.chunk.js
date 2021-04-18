(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,a){e.exports=a(149)},136:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(55),l=a.n(o),c=(a(135),a(136),a(58)),i=a(48),u=a(42),s=a(127),m=a(128),d=a(63),b=a(35),g=a.n(b),v=a(50),k=a(23),p=a(151),f=a(152),E=a(157),h=a(116),O=a(153),j=a(154),w=a(161),I=a(110),y=a(111),S=a(87),x=a.n(S),B=new(function(){function e(){Object(I.a)(this,e)}return Object(y.a)(e,[{key:"getProfile",value:function(){return x()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return x()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),T=a(44),C=a(18);function $(){var e=Object(T.a)(["\nmutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n            _id\n            username\n            email\n            savedBooks {\n                bookId\n                description\n                authors\n                title\n                image\n                link\n            }\n        }\n    }\n"]);return $=function(){return e},e}function _(){var e=Object(T.a)(["\nmutation saveBook($bookId: String!) {\n    saveBook(bookId: $bookText) {\n            _id\n            bookId\n            image\n            link\n            title\n            author {\n                authorTitle\n            }\n        }\n    }\n"]);return _=function(){return e},e}function L(){var e=Object(T.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!) {\n        addUser(username: $username, email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]);return L=function(){return e},e}function N(){var e=Object(T.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n                username\n            }\n        }\n    }\n"]);return N=function(){return e},e}var F=Object(C.a)(N()),D=(Object(C.a)(L()),Object(C.a)(_())),q=Object(C.a)($()),P=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),c=Object(k.a)(l,2),i=c[0],s=c[1],b=Object(n.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),I=Object(k.a)(b,2),y=I[0],S=I[1],x=Object(u.useMutation)(D),T=Object(k.a)(x,2),C=T[0];T[1].error;Object(n.useEffect)((function(){return function(){var e;(e=y).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var $=function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n,r,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(i));case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,a.json();case 11:n=e.sent,r=n.items,l=r.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),o(l),s(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.find((function(e){return e.bookId===t})),B.loggedIn()?B.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,C({variables:{bookData:Object(d.a)({},n)}});case 7:r=e.sent,r.data,S([].concat(Object(m.a)(y),[n.bookId])),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{fluid:!0,className:"text-light bg-dark"},r.a.createElement(f.a,null,r.a.createElement("h1",null,"Search for Books!"),r.a.createElement(E.a,{onSubmit:$},r.a.createElement(E.a.Row,null,r.a.createElement(h.a,{xs:12,md:8},r.a.createElement(E.a.Control,{name:"searchInput",value:i,onChange:function(e){return s(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),r.a.createElement(h.a,{xs:12,md:4},r.a.createElement(O.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),r.a.createElement(f.a,null,r.a.createElement("h2",null,a.length?"Viewing ".concat(a.length," results:"):"Search for a book to begin"),r.a.createElement(j.a,null,a.map((function(e){return r.a.createElement(w.a,{key:e.bookId,border:"dark"},e.image?r.a.createElement(w.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,e.title),r.a.createElement("p",{className:"small"},"Authors: ",e.authors),r.a.createElement(w.a.Text,null,e.description),B.loggedIn()&&r.a.createElement(O.a,{disabled:null===y||void 0===y?void 0:y.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return _(e.bookId)}},(null===y||void 0===y?void 0:y.some((function(t){return t===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))};function A(){var e=Object(T.a)(["\n{\n    me {\n        _id\n        username\n        email\n        savedBooks{\n            authors\n            description\n            bookID\n            title\n            image\n            link\n        }\n    }\n}"]);return A=function(){return e},e}function K(){var e=Object(T.a)(["\n    query user($username: String!) {\n        user(username: $username) {\n            _id\n            username\n            email\n            savedBooks\n        }\n    }\n"]);return K=function(){return e},e}function M(){var e=Object(T.a)(["\n    query book($id: ID!) {\n        book(_id: $id) {\n            _id\n            username\n            author {\n                authorTitle\n            }\n        }\n    }\n"]);return M=function(){return e},e}Object(C.a)(M()),Object(C.a)(K());var V=Object(C.a)(A()),z=function(){var e=Object(u.useQuery)(V),t=(e.loading,e.data),a=(null===t||void 0===t?void 0:t.me)||{},n=Object(u.useMutation)(q),o=Object(k.a)(n,2),l=o[0],c=(o[1].error,Object.keys(a).length),i=function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.loggedIn()?B.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,l({variables:{bookId:t}});case 6:a=e.sent,a.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return c?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{fluid:!0,className:"text-light bg-dark"},r.a.createElement(f.a,null,r.a.createElement("h1",null,"Viewing saved books!"))),r.a.createElement(f.a,null,r.a.createElement("h2",null,a.savedBooks.length?"Viewing ".concat(a.savedBooks.length," saved ").concat(1===a.savedBooks.length?"book":"books",":"):"You have no saved books!"),r.a.createElement(j.a,null,a.savedBooks.map((function(e){return r.a.createElement(w.a,{key:e.bookId,border:"dark"},e.image?r.a.createElement(w.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,null,e.title),r.a.createElement("p",{className:"small"},"Authors: ",e.authors),r.a.createElement(w.a.Text,null,e.description),r.a.createElement(O.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)}},"Delete this Book!")))}))))):r.a.createElement("h2",null,"LOADING...")},G=a(159),J=a(158),U=a(156),Y=a(160),H=a(72),Q=a(155),R=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(k.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(k.a)(l,1)[0],i=Object(n.useState)(!1),s=Object(k.a)(i,2),m=s[0],b=s[1],p=Object(u.useMutation)(F),f=Object(k.a)(p,2),h=f[0],j=(f[1].error,function(e){var t=e.target,n=t.name,r=t.value;o(Object(d.a)({},a,Object(H.a)({},n,r)))}),w=function(){var e=Object(v.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,h({variables:Object(d.a)({},a)});case 6:n=e.sent,r=n.data,B.login(r.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),b(!0);case 15:o({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{noValidate:!0,validated:c,onSubmit:w},r.a.createElement(Q.a,{dismissible:!0,onClose:function(){return b(!1)},show:m,variant:"danger"},"Something went wrong with your login credentials!"),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:j,value:a.email,required:!0}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(E.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:j,value:a.password,required:!0}),r.a.createElement(E.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(O.a,{disabled:!(a.email&&a.password),type:"submit",variant:"success"},"Submit")))},W=function(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(f.a,{fluid:!0},r.a.createElement(G.a.Brand,{as:c.b,to:"/"},"Google Books Search"),r.a.createElement(G.a.Toggle,{"aria-controls":"navbar"}),r.a.createElement(G.a.Collapse,{id:"navbar"},r.a.createElement(J.a,{className:"ml-auto"},r.a.createElement(J.a.Link,{as:c.b,to:"/"},"Search For Books"),B.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a.Link,{as:c.b,to:"/saved"},"See Your Books"),r.a.createElement(J.a.Link,{onClick:B.logout},"Logout")):r.a.createElement(J.a.Link,{onClick:function(){return o(!0)}},"Login/Sign Up"))))),r.a.createElement(U.a,{size:"lg",show:a,onHide:function(){return o(!1)},"aria-labelledby":"signup-modal"},r.a.createElement(Y.a.Container,{defaultActiveKey:"login"},r.a.createElement(U.a.Header,{closeButton:!0},r.a.createElement(U.a.Title,{id:"signup-modal"},r.a.createElement(J.a,{variant:"pills"},r.a.createElement(J.a.Item,null,r.a.createElement(J.a.Link,{eventKey:"login"},"Login")),r.a.createElement(J.a.Item,null,r.a.createElement(J.a.Link,{eventKey:"signup"},"Sign Up"))))),r.a.createElement(U.a.Body,null,r.a.createElement(Y.a.Content,null,r.a.createElement(Y.a.Pane,{eventKey:"login"},r.a.createElement(R,{handleModalClose:function(){return o(!1)}})),r.a.createElement(Y.a.Pane,{eventKey:"signup"}))))))},X=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var Z=function(){return r.a.createElement(u.ApolloProvider,{client:X},r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:z}),r.a.createElement(i.a,{render:function(){return r.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.2bb4d47d.chunk.js.map