(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(66),l=a.n(o),c=(a(74),a(76),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),d=(a(78),a(79),a(143)),h=a(147),p=a(140),f=a(136),b=a(38);a(135);b.initializeApp({apiKey:"AIzaSyAP57iTRsF7dIrIdFGGsexSkWoJkU_MiCA",authDomain:"ronitboard.firebaseapp.com",databaseURL:"https://ronitboard.firebaseio.com",projectId:"ronitboard",storageBucket:"ronitboard.appspot.com",messagingSenderId:"992311449166"}),b.firestore().settings({});var E=b,v=new function e(){Object(c.a)(this,e),this.boardCollection=E.firestore().collection("boards"),this.authentication=E.auth()},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.description,o=t.author;v.boardCollection.doc(a.state.id).set({title:n,description:r,author:o}).then(function(e){a.setState({title:"",description:"",author:"",id:""}),a.props.history.push("/boards")}).catch(function(e){console.error("Error adding document: ",e)})},a.state={title:"",description:"",author:"",id:e.match.params.id},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchBoard",value:function(e){var t=this;v.boardCollection.doc(e).get().then(function(e){if(e.exists){var a=e.data();t.setState({title:a.title,description:a.description,author:a.author})}else console.log("No such document!"),t.setState({info:{}})})}},{key:"componentDidMount",value:function(){this.fetchBoard(this.state.id)}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.author;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Edit Board")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("input",{type:"text",className:"form-control col-md-4",name:"title",value:t,onChange:this.onChange,placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Description:"),r.a.createElement("textarea",{className:"form-control col-md-4",name:"description",value:a,onChange:this.onChange,placeholder:"Description",cols:"80",rows:"3"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Author:"),r.a.createElement("input",{type:"text",className:"form-control col-md-4",name:"author",value:n,onChange:this.onChange,placeholder:"Author"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit"))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,r.a.createElement(f.a,{to:"/boards"},"Board list")))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.description,o=t.author;a.ref.add({title:n,description:r,author:o}).then(function(e){a.setState({title:"",description:"",author:""}),a.props.history.push("/boards")}).catch(function(e){console.error("Error adding document: ",e)})},a.ref=v.boardCollection,a.state={title:"",description:"",author:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.author;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Add Board")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"title"},"Title:"),r.a.createElement("input",{type:"text",className:"form-control col-md-4",name:"title",value:t,onChange:this.onChange,placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Description:"),r.a.createElement("textarea",{className:"form-control col-md-4",name:"description",value:a,onChange:this.onChange,placeholder:"Description",cols:"80",rows:"3"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Author:"),r.a.createElement("input",{type:"text",className:"form-control col-md-4",name:"author",value:n,onChange:this.onChange,placeholder:"Author"})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit"))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,r.a.createElement(f.a,{to:"/boards"},"Board list")))))}}]),t}(n.Component),y=a(146),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onCollectionUpdate=function(e){var t=[];e.forEach(function(e){var a=e.data(),n=a.title,r=a.description,o=a.author;t.push({key:e.id,doc:e,title:n,description:r,author:o})}),a.setState({boards:t})},a.ref=v.boardCollection,a.unsubscribe=null,a.state={boards:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Board List")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("h4",null,r.a.createElement(f.a,{to:"/create"},"Add Board")),r.a.createElement("table",{className:"table table-stripe"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Description"),r.a.createElement("td",null,"Author"))),r.a.createElement("tbody",null,this.state.boards.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(f.a,{to:"/info/".concat(e.key)},e.title)),r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.author))}))))))}}]),t}(n.Component),j=Object(y.a)(O),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).ref=v.boardCollection,a.state={info:{},boardId:e.match.params.id},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchBoard",value:function(e){var t=this;this.ref.doc(e).get().then(function(e){e.exists?t.setState({info:e.data()}):(console.log("No such document!"),t.setState({info:{}}))})}},{key:"deleteBoard",value:function(e){var t=this;this.ref.doc(e).delete().then(function(){console.log("Document successfully deleted!"),t.props.history.push("/boards")}).catch(function(e){console.error("Error removing document: ",e)})}},{key:"componentDidMount",value:function(){this.fetchBoard(this.state.boardId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},this.state.info.title)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("dl",null,r.a.createElement("dt",null,"Description:"),r.a.createElement("dd",null,this.state.info.description),r.a.createElement("dt",null,"Author:"),r.a.createElement("dd",null,this.state.info.author)),r.a.createElement(f.a,{to:"/edit/".concat(this.state.boardId),className:"btn btn-success"},"Edit"),"\xa0",r.a.createElement("button",{onClick:this.deleteBoard.bind(this,this.state.boardId),className:"btn btn-danger"},"Delete"))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,r.a.createElement(f.a,{to:"/boards"},"Board list"))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"https://cdn-images-1.medium.com/max/2600/1*h-xRzZOCHk8jTlEa8M42GA.png",width:"100%",height:"350",alt:""}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("h3",null,"This is react firebase demo boards app.")))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=(t.username,t.email),r=t.password;a.firebaseauth.createUserWithEmailAndPassword(n,r).then(function(e){a.props.history.push("/")}).catch(function(e){a.setState({error:e})})},a.firebaseauth=v.authentication,a.state={username:"",email:"",password:"",confirmpassword:"",error:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password,o=e.confirmpassword,l=e.error,c=n!==o||""===n||""===a||""===t;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Register")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"title"},"Full Name:"),r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name",className:"form-control col-md-4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Email:"),r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"form-control col-md-4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Password:"),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password",className:"form-control col-md-4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Confirm Password:"),r.a.createElement("input",{name:"confirmpassword",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password",className:"form-control col-md-4"})),r.a.createElement("button",{type:"submit",disabled:c,className:"btn btn-success"},"Register"),l&&r.a.createElement("p",null,l.message))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,"Already a member?\xa0",r.a.createElement(f.a,{to:"/login"},"LogIn")),r.a.createElement("h4",null,"Forgot Password?\xa0",r.a.createElement(f.a,{to:"/forgotpassword"},"Forgot Password")))))}}]),t}(n.Component),k=Object(y.a)(S),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.firebaseauth.signInWithEmailAndPassword(n,r).then(function(e){a.props.history.push("/")}).catch(function(e){a.setState({error:e})})},a.firebaseauth=v.authentication,a.state={email:"",password:"",error:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"LogIn")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Email:"),r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"form-control col-md-4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Password:"),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password",className:"form-control col-md-4"})),r.a.createElement("button",{type:"submit",disabled:o,className:"btn btn-success"},"LogIn"),n&&r.a.createElement("p",null,n.message))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,"Don't have an account?\xa0",r.a.createElement(f.a,{to:"/register"},"Register")),r.a.createElement("h4",null,"Forgot Password?\xa0",r.a.createElement(f.a,{to:"/forgotpassword"},"Forgot Password")))))}}]),t}(n.Component),P=Object(y.a)(D),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onLogout=function(e){a.firebaseauth.signOut()},a.firebaseauth=v.authentication,a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(d.a,{className:"nav-link",to:"#",onClick:this.onLogout},"LogOut")}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state.email;a.firebaseauth.sendPasswordResetEmail(t).then(function(e){a.props.history.push("/")}).catch(function(e){a.setState({error:e})})},a.firebaseauth=v.authentication,a.state={email:"",error:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Forgot Password")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"Email:"),r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"form-control col-md-4"})),r.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-success"},"Submit"),a&&r.a.createElement("p",null,a.message))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,"Don't have an account?\xa0",r.a.createElement(f.a,{to:"/register"},"Register")),r.a.createElement("h4",null,"Already Member?\xa0",r.a.createElement(f.a,{to:"/login"},"Login")))))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state.password;a.firebaseauth.currentUser.updatePassword(t).then(function(e){a.props.history.push("/")}).catch(function(e){a.setState({error:e})})},a.firebaseauth=v.authentication,a.state={password:"",confirmpassword:"",error:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.confirmpassword,a=e.password,n=e.error,o=a!==t||""===a;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Change Password")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"description"},"New Password:"),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"New Password",className:"form-control col-md-4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"author"},"Confirm Password:"),r.a.createElement("input",{name:"confirmpassword",value:t,onChange:this.onChange,type:"password",placeholder:"Confirm New Password",className:"form-control col-md-4"})),r.a.createElement("button",{type:"submit",disabled:o,className:"btn btn-success"},"Submit"),n&&r.a.createElement("p",null,n.message))),r.a.createElement("div",{className:"panel-footer"},r.a.createElement("h4",null,"\xa0"))))}}]),t}(n.Component),I=Object(y.a)(B),M=a(68),F=a(145),L=function(e){var t=e.component,a=e.authenticated,n=Object(M.a)(e,["component","authenticated"]);return r.a.createElement(p.a,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(F.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},R=function(){return r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/changepassword"},"Change Password")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(A,null)))},T=function(){return r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/register"},"Register")))},U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-sm bg-light"},r.a.createElement("div",{class:"navbar-header"},r.a.createElement(d.a,{className:"navbar-brand",to:"/"},"React Firestore Boards")),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/boards"},"Boards"))),this.props.authenticated?r.a.createElement(R,null):r.a.createElement(T,null)),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:C}),r.a.createElement(p.a,{path:"/register",component:k}),r.a.createElement(p.a,{path:"/login",authenticated:this.props.authenticated,component:P}),r.a.createElement(p.a,{path:"/forgotpassword",component:x}),r.a.createElement(L,{authenticated:this.props.authenticated,path:"/changepassword",component:I}),r.a.createElement(L,{authenticated:this.props.authenticated,path:"/boards",component:j}),r.a.createElement(L,{authenticated:this.props.authenticated,path:"/edit/:id",component:g}),r.a.createElement(L,{authenticated:this.props.authenticated,path:"/create",component:N}),r.a.createElement(L,{authenticated:this.props.authenticated,path:"/info/:id",component:w})))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).firebaseauth=v.authentication,a.state={authenticated:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.firebaseauth.onAuthStateChanged(function(t){t?e.setState(function(){return{authenticated:!0}}):e.setState(function(){return{authenticated:!1}})})}},{key:"render",value:function(){return r.a.createElement(U,{authenticated:this.state.authenticated})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(144);l.a.render(r.a.createElement(z.a,{basename:"/boards-app"},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a(141)},76:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,a){}},[[69,2,1]]]);
//# sourceMappingURL=main.61b57a7f.chunk.js.map