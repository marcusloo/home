(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{100:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(85),r=n.n(i),c=n(23),s=n(24),l=n(36),u=n(26),m=n(25),p=(n(94),n(95),n(86)),h=n.n(p),v=n(37),d=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){if(this.props.type_animation){var e={strings:["Hello!^500 I am <strong>Marcus Loo</strong>. ^500I am currently a Machine Learning Grad Student at Georgia Tech."],typeSpeed:40,onComplete:this.props.stopAnimation};this.typed=new h.a(this.intro,e)}}},{key:"componentWillMount",value:function(){this.typed&&this.typed.destroy()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"homeMain"},o.a.createElement("div",{className:"intro"},o.a.createElement("span",{ref:function(t){e.intro=t}})),o.a.createElement(v.b,{className:this.props.type_animation?"nothing":"aboutMe",to:"/about"},"more info"))}}]),n}(o.a.Component),b=(n(100),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"summary"},"This does work")}}]),n}(o.a.Component)),f=n(6),y=n(88),E=n.n(y);var j=function(){return o.a.createElement(E.a,{params:{background:{color:{value:"#282c34"}},particles:{number:{value:50},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}}}}})},k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).stopAnimation=a.stopAnimation.bind(Object(l.a)(a)),a.state={type_animation:!0},a}return Object(s.a)(n,[{key:"stopAnimation",value:function(){this.setState({type_animation:!1})}},{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("div",{className:"home"},o.a.createElement(j,null),o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"/about"},o.a.createElement(b,null)),o.a.createElement(f.a,{path:"/"},o.a.createElement(d,{type_animation:this.state.type_animation,stopAnimation:this.stopAnimation})))))}}]),n}(o.a.Component);n(312),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){e.exports=n(313)},94:function(e,t,n){},95:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.e6a2a6c1.chunk.js.map