(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{15:function(n,e,t){n.exports=t(24)},20:function(n,e,t){},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=(t(20),t(8)),l=t(4),u=t(1),s=t(2);function d(){var n=Object(u.a)(["\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px 10px 0 0;\n  padding: 15px 20px;\n  position: absolute;\n  bottom: -50px;\n  transition: transform 0.3s ease-in-out;\n  p {\n   margin: 0;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  background: #31E0C4;\n  h2 {\n    color: #393F45;\n  }\n  border-radius: 5px;\n  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  button {\n    cursor: pointer;\n    background-color: #F4F6FE;\n    color: #31E0C4;\n    border: 0;\n    margin-top: 20px;\n    padding: 12px 20px;\n    font-size: 16px;\n  }\n  button:active {\n    transform: scale(0.98);\n  }\n  button:focus {\n    outline: 0;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(u.a)(["\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: none;\n  align-items: center;\n  justify-content: center;\n"]);return p=function(){return n},n}function m(){var n=Object(u.a)(["\n  border-bottom: 3px solid #31E0C4;\n  display: inline-flex;\n  font-size: 30px;\n  align-items: center;\n  justify-content: center;\n  margin: 0 3px;\n  height: 50px;\n  width: 20px;\n  color: #393F45;\n"]);return m=function(){return n},n}function x(){var n=Object(u.a)(["\n  display: flex;\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return x=function(){return n},n}function b(){var n=Object(u.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  text-align: right;\n  color: #41444A;\n  p {\n    margin: 0 0 5px;\n  }\n  span {\n    font-size: 24px;\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(u.a)(["\n  fill: transparent;\n  stroke: #41444A;\n  stroke-width: 4px;\n  stroke-linecap: round;\n"]);return g=function(){return n},n}function h(){var n=Object(u.a)(["\n  h1 {\n    color: #222931;\n  }\n  color: #393F45;\n"]);return h=function(){return n},n}function v(){var n=Object(u.a)(["\n  padding: 20px 30px;\n  position: relative;\n  margin: auto;\n  height: 350px;\n  width: 450px;\n"]);return v=function(){return n},n}function E(){var n=Object(u.a)(["\n  width: 100%;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]);return E=function(){return n},n}function y(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  text-align: center;\n"]);return y=function(){return n},n}var w=s.a.div(y()),j=s.a.div(E()),O=s.a.div(v()),k=s.a.div(h()),L=s.a.svg(g()),F=s.a.div(b()),C=s.a.div(x()),N=s.a.span(m()),A=s.a.div(p()),M=s.a.div(f()),S=s.a.div(d()),W=function(){return a.a.createElement(k,null,a.a.createElement("h1",null,"Hangman"),a.a.createElement("p",null,"Find the hidden word - Enter a letter"))};var z=function(n){var e=n.wrongLetters.length;return a.a.createElement(L,{height:"250",width:"200"},a.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),a.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),a.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),a.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),e>0&&a.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),e>1&&a.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),e>2&&a.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),e>3&&a.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),e>4&&a.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),e>5&&a.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))};var P=function(n){var e=n.wrongLetters;return a.a.createElement(F,null,a.a.createElement("div",null,e.length>0&&a.a.createElement("p",null,"Wrong "),e.map((function(n,e){return a.a.createElement("span",{key:e},n)})).reduce((function(n,e){return null===n?[e]:[n,", ",e]}),null)))};var I=function(n){var e=n.selectedWord,t=n.correctLetters;return a.a.createElement(C,{className:"word"},e.split("").map((function(n,e){return a.a.createElement(N,{className:"letter",key:e},t.includes(n)?n:"")})))};var J=function(n){var e=n.showNotification;return a.a.createElement(S,{className:"notification-container ".concat(e?"show":"")},a.a.createElement("p",null,"You have already entered this letter"))};function T(n){n(!0),setTimeout((function(){n(!1)}),2e3)}function B(n,e,t){var r="win";return t.split("").forEach((function(e){n.includes(e)||(r="")})),6===e.length&&(r="lose"),r}var H=function(n){var e=n.correctLetters,t=n.wrongLetters,o=n.selectedWord,c=n.setPlayable,i=n.playAgain,l="",u="",s=!0;return"win"===B(e,t,o)?(l="Nice, you win, oh well...",s=!1):"lose"===B(e,t,o)&&(l="I feel bad for you brain cells",u='The word was "'.concat(o,'", even a 9 year old can win this'),s=!1),Object(r.useEffect)((function(){return c(s)})),a.a.createElement(A,{style:""!==l?{display:"flex"}:{}},a.a.createElement(M,null,a.a.createElement("h2",null,l),a.a.createElement("h3",null,u),a.a.createElement("button",{onClick:i},"Play Again")))},X=(t(23),["application","programming","interface","wizard","bata"]),Y=X[Math.floor(Math.random()*X.length)];var q=function(){var n=Object(r.useState)(!0),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)([]),u=Object(l.a)(c,2),s=u[0],d=u[1],f=Object(r.useState)([]),p=Object(l.a)(f,2),m=p[0],x=p[1],b=Object(r.useState)(!1),g=Object(l.a)(b,2),h=g[0],v=g[1];return Object(r.useEffect)((function(){var n=function(n){var e=n.key,r=n.keyCode;if(t&&r>=65&&r<=90){var a=e.toLowerCase();Y.includes(a)?s.includes(a)?T(v):d((function(n){return[].concat(Object(i.a)(n),[a])})):m.includes(a)?T(v):x((function(n){return[].concat(Object(i.a)(n),[a])}))}};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[s,m,t]),a.a.createElement(w,null,a.a.createElement(j,null,a.a.createElement(W,null),a.a.createElement(O,null,a.a.createElement(z,{wrongLetters:m}),a.a.createElement(P,{wrongLetters:m}),a.a.createElement(I,{selectedWord:Y,correctLetters:s})),a.a.createElement(H,{correctLetters:s,wrongLetters:m,selectedWord:Y,setPlayable:o,playAgain:function(){o(!0),d([]),x([]);var n=Math.floor(Math.random()*X.length);Y=X[n]}}),a.a.createElement(J,{showNotification:h})))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1abd7a7f.chunk.js.map