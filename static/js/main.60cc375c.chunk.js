(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=a(3),u=a(4),i=a(5),m=a(8),s=a(6),d=a(9),g=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.getTotal,c=e.getPercentage;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Good: ",t),l.a.createElement("p",null,"Neutral: ",a),l.a.createElement("p",null,"Bad: ",n),l.a.createElement("p",null,"TOTAL: ",r()),l.a.createElement("p",null,"Percentage: ",c(),"%"))},b=function(e){var t=e.onHandleClick;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:t,type:"button",name:"good"},"GOOD"),l.a.createElement("br",null),l.a.createElement("button",{onClick:t,type:"button",name:"neutral"},"NEUTRAL"),l.a.createElement("br",null),l.a.createElement("button",{onClick:t,type:"button",name:"bad"},"BAD"),l.a.createElement("br",null))},E=function(e){var t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,t),a)};E.defaultProps={title:"default title"};var f=E,p=function(e){var t=e.message;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,t))};p.defaultProps={message:"No feedback"};var h=p,k=a(7),v=a.n(k),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0,getTotal:function(){var e=a.state;return e.good+e.neutral+e.bad},getPercentage:function(){return Math.round(a.state.good/a.state.getTotal()*100)}},a.onHandleClick=function(e){var t=e.target.name;a.setState(Object(o.a)({},t,a.state[t]+1))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:v.a.container},l.a.createElement(f,{title:"Please leave feedback"},l.a.createElement(b,{onHandleClick:this.onHandleClick})),0===this.state.getTotal()?l.a.createElement(h,{message:"No feedback given"}):l.a.createElement(f,{title:"STATISTIC"},l.a.createElement(g,this.state)))}}]),t}(n.Component);c.a.render(l.a.createElement(C,null),document.getElementById("root"))},7:function(e,t,a){e.exports={container:"Container_container__2OX7R"}}},[[10,1,2]]]);
//# sourceMappingURL=main.60cc375c.chunk.js.map