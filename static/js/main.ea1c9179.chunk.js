(this.webpackJsonpsecundomer=this.webpackJsonpsecundomer||[]).push([[0],{19:function(e,t,c){e.exports={timeWrapper:"App_timeWrapper__234aV",buttonWrapper:"App_buttonWrapper__1PohD",button:"App_button__3m37m"}},44:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),s=c(35),a=c.n(s),i=c(15),o=c(47),b=c(37),u=c(48),j=c(51),p=c(50),l=c(49),O=c(33),d=(c(42),c(19)),h=c.n(d),f=c(4),m=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),a=Object(i.a)(s,2),d=a[0],m=a[1];Object(n.useEffect)((function(){var e=Object(o.a)(1e3).pipe(Object(u.a)(c),Object(j.a)((function(e){return e+1e3})),Object(p.a)()).subscribe((function(e){d&&r(e)}));return function(){return e.unsubscribe()}}),[c,d]);return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:h.a.timeWrapper,children:[Object(f.jsxs)("span",{children:[("0"+Math.floor(c/36e5%60)).slice(-2),": "]}),Object(f.jsxs)("span",{children:[("0"+Math.floor(c/6e4%60)).slice(-2),": "]}),Object(f.jsx)("span",{children:("0"+Math.floor(c/1e3%60)).slice(-2)})]}),Object(f.jsxs)("div",{className:h.a.buttonWrapper,children:[Object(f.jsx)(O.a,{onClick:function(){m(!d),d&&r(0)},className:h.a.button,children:d?"Stop":"Start"}),Object(f.jsx)(O.a,{onDoubleClick:function(){Object(b.a)(300).pipe(Object(l.a)()).subscribe((function(){m(!1)}))},className:h.a.button,children:"Wait"}),Object(f.jsx)(O.a,{onClick:function(){return r(0)},className:h.a.button,children:"Reset"})]})]})};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ea1c9179.chunk.js.map