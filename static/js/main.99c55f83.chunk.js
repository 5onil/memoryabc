(this["webpackJsonpmemory-spel"]=this["webpackJsonpmemory-spel"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(5),r=t.n(s),i=(t(10),t(3)),o=t(2),d=(t(11),t.p+"static/media/cover2.92a6c618.png"),l=t.p+"static/media/Card-flip-sound-effect.affcda3a.mp3",u=t(0);function j(e){var c=e.card,t=e.handleChoice,n=e.flipped,a=e.disabled,s=e.num,r=new Audio({flipSfx:l});return Object(u.jsx)("div",{className:"card card-".concat(s),children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:c.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:d,onClick:function(){a||(r.play(),t(c))},alt:"card back"})]})})}t(13);var m=[{src:"./img/a.png",matched:!1},{src:"./img/b.png",matched:!1},{src:"./img/c.png",matched:!1},{src:"./img/d.png",matched:!1},{src:"./img/e.png",matched:!1},{src:"./img/f.png",matched:!1}];var b=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(0),r=Object(o.a)(s,2),d=r[0],l=r[1],b=Object(n.useState)(null),f=Object(o.a)(b,2),p=f[0],h=f[1],O=Object(n.useState)(null),w=Object(o.a)(O,2),x=w[0],v=w[1],g=Object(n.useState)(!1),k=Object(o.a)(g,2),N=k[0],y=k[1],S=new Audio("./sound/mixkit-cartoon-positive-sound-2255.wav"),C=function(){var e=[].concat(m,m).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));h(null),v(null),a(e),l(0)},M=function(e){p?v(e):h(e)};Object(n.useEffect)((function(){var e=new Audio("./sound/Game-show-winner-bell-sound-effect.mp3");p&&x&&(y(!0),p.src===x.src?(a((function(c){return c.map((function(c){return c.src===p.src?(e.play(),Object(i.a)(Object(i.a)({},c),{},{matched:!0})):c}))})),A()):setTimeout((function(){return A()}),1e3))}),[p,x]);var A=function(){h(null),v(null),l((function(e){return e+1})),y(!1)};return Object(n.useEffect)((function(){C()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory ABC"}),Object(u.jsx)("button",{className:"new-btn",onClick:function(){S.play(),C()},children:Object(u.jsx)("span",{className:"btn-front",children:"\ud83c\udfc6 Nytt Spel"})}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(e,c){return Object(u.jsx)(j,{num:c,card:e,handleChoice:M,flipped:e===p||e===x||e.matched,disabled:N},e.id)}))}),Object(u.jsxs)("p",{className:"turns-box",children:[Object(u.jsx)("span",{children:"\ud83d\ude05\ud83d\udd56\ud83d\udc74"})," f\xf6rs\xf6k: ",Object(u.jsx)("span",{className:"turns",children:d})]}),Object(u.jsxs)("div",{className:"credit",children:[Object(u.jsx)("a",{href:"https://www.freepik.com/vectors/school",children:"School vector created by pikisuperstar - www.freepik.com"}),Object(u.jsxs)("div",{children:["Icons made by"," ",Object(u.jsx)("a",{href:"https://www.flaticon.com/authors/vectors-market",title:"Vectors Market",children:"Vectors Market"})," ","from"," ",Object(u.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.99c55f83.chunk.js.map