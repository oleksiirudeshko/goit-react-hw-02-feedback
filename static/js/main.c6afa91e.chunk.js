(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=(a(13),a(3)),u=a(4),i=a(5),d=a(7),b=a(6);function s(e){var t=e.title,a=e.children;return l.a.createElement("section",null,l.a.createElement("h2",null,t),a)}s.defaultProps={title:""};var m=s,v=function(e){var t=e.onLeaveFeedback;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:t},"good"),l.a.createElement("button",{type:"button",onClick:t},"neutral"),l.a.createElement("button",{type:"button",onClick:t},"bad"))},E=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return l.a.createElement("ul",null,"Statistics",l.a.createElement("li",null,"Good: ",t),l.a.createElement("li",null,"Neutral: ",a),l.a.createElement("li",null,"Bad: ",n),l.a.createElement("li",null,"Total: ",r),l.a.createElement("li",null,"Positive feedback: ",c," %"))},f=function(e){var t=e.message;return l.a.createElement("p",null,t)},p=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0},e.hendleFeedback=function(t){var a=t.target.textContent;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=t+a+n,c=Math.round(t/r*100),o=0===r;return l.a.createElement("div",null,l.a.createElement(m,{title:"Please leave feedback"},l.a.createElement(v,{onLeaveFeedback:this.hendleFeedback})),l.a.createElement(m,null,r>0&&l.a.createElement(E,{good:t,neutral:a,bad:n,total:r,positivePercentage:c}),o&&l.a.createElement(f,{message:"No feedback given"})))}}]),a}(n.Component);c.a.render(l.a.createElement(p,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c6afa91e.chunk.js.map