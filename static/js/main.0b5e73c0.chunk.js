(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(15),r=n(1),s=n(12),a=n.n(s),i=(n(21),n(22),n(5)),u=n.n(i),l=n(9),o=n(8),b=n(4),d=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],j=function(e){return Math.floor(Math.random()*e)},m=function(e){return Array.from({length:e},(function(){return function(){for(var e=new Set;e.size<7;)e.add(j(39));return Array.from(e)}()}))},h=function(e){for(var t=[],n=0;n<=e;n++)t.push(n);return t},O=function(e,t){for(var n=0,c=0;c<e.length;c++)for(var r=0;r<t.length;r++)if(e[c]==t[r]&&7==(n+=1))return!0;return!1},f=function(e,t){for(var n=0;n<e.length;n++)if(O(e[n],t))return{ticketWin:e[n],izvucenaKuglica:t.length,isWinner:!0};return{ticketWin:{},izvucenaKuglica:{},isWinner:!1}},x=(n(24),n(0)),k=function(e){var t=e.className,n=e.onClick,c=e.buttonText,r=e.disabled;return Object(x.jsx)("button",{disabled:r,className:t+" button",onClick:n,children:c})},v=(n(26),function(e){var t=e.generatedTickets,n=e.tickets,c=e.startRound,r=e.maxBalls,s=e.izvucenBroj;return Object(x.jsxs)("div",{className:"drum-holder",children:[Object(x.jsxs)("div",{className:"drum-balls",children:[Object(x.jsx)("div",{className:0==n.length?"":"circle"}),Object(x.jsx)("div",{className:0==n.length?"":"circle"}),Object(x.jsx)("div",{className:0==n.length?"":"circle"}),Object(x.jsx)("span",{className:"balls",children:s})]}),Object(x.jsx)("p",{children:"Bingo 7/39"}),Object(x.jsx)(k,{disabled:0==n.length&&0==t.length,className:"button-start",buttonText:"Start round",onClick:function(){return c(r)}})]})}),p=(n(27),function(e){var t=e.generatedTickets,n=e.generateMultipleTicketsForRound,c=e.izvucenBroj,r=e.startedGame,s=[];s.push(c);var a=function(e){var t=e.numbers;return Object(x.jsxs)("div",{className:"ticket",children:[Object(x.jsx)("div",{className:"ticket-name",children:Object(x.jsxs)("span",{children:["Ticket id: #",t]})}),Object(x.jsx)("div",{className:"ticket-number",children:t.sort((function(e,t){return e-t})).map((function(e){return Object(x.jsx)("span",{className:s[0].includes(e)?"numbers-generated-red":"numbers-generated",children:e},e)}))})]})};return Object(x.jsxs)("div",{className:"tickets-overview",children:[Object(x.jsx)(k,{disabled:!!r,className:"button-start",buttonText:"Generate tickets",onClick:function(){return n(5)}}),Object(x.jsx)("div",{className:"tickets-holder",children:t.map((function(e){return Object(x.jsx)(a,{numbers:e},e)}))})]})}),N=(n(28),function(e){var t=e.allNumbers,n=e.izvucenBroj,c=[];return c.push(n),Object(x.jsx)("div",{className:"numbers-holder",children:Object(x.jsx)("div",{className:"numbers-balls",children:t.map((function(e){return Object(x.jsx)("span",{className:c[0].includes(e)?"numbers-red":"numbers",children:e},e)}))})})}),g=(n(29),function(e){var t=e.show,n=e.close,c=e.text,r=e.title,s=e.imgSmiley,a=e.resetGame;return Object(x.jsx)("div",{className:"modal-intro",style:{display:t?"block":"none"},children:Object(x.jsxs)("div",{className:"modal-wrapper",style:{transform:t?"translateY(0vh)":"translateY(-100vh)",display:t?"block":"none"},children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("h2",{children:r}),Object(x.jsx)("span",{className:"close-modal-btn",onClick:n,children:"\xd7"})]}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsx)("p",{children:c}),Object(x.jsx)("img",{src:s})]}),Object(x.jsx)(k,{className:"button-start",buttonText:"Reset Game",onClick:a})]})})}),w=n.p+"static/media/sad.01d26206.png",T=n.p+"static/media/happy.1a0f27a4.png",y=(n(30),n(31),n(6)),S=n(3),z=Object(y.b)("ticketsStore")(Object(S.c)((function(e){var t=e.setTickets,n=(e.tickets,e.startedGame),c=e.allNumbers,s=e.show,a=e.close,i=e.setAddTicketModal,u=e.addTicketModal,o=e.title,d=e.getActiveTickets,j=e.ticketsStore;[].push(c);var m=Object(r.useState)([]),h=Object(b.a)(m,2),O=h[0],f=h[1],v=function(e){var t=e.number;return Object(x.jsx)("div",{className:O.includes(t)?"numbers-list-red":"numbers-list",onClick:function(){return function(e){O.includes(e)?alert("Number already exist on ticket"):O.length<=6?f([].concat(Object(l.a)(O),[Number(e)])):alert("Maximum number on ticket exceeded")}(Number(t))},children:Object(x.jsx)("span",{children:t})})};return Object(x.jsx)("div",{className:"modal-add",style:{display:s?"block":"none"},children:Object(x.jsxs)("div",{className:"modal-wrapper",style:{transform:s?"translateY(0vh)":"translateY(-100vh)",display:s?"block":"none"},children:[Object(x.jsxs)("div",{className:"modal-header",children:[Object(x.jsx)("h2",{children:o}),Object(x.jsx)("span",{className:"close-modal-btn",onClick:a,children:"\xd7"})]}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("p",{className:"added-numbers",children:[Object(x.jsx)("span",{children:"Choosen numbers:"}),O.join(", ")]}),Object(x.jsx)("div",{className:"choose-numbers",children:c.map((function(e){return Object(x.jsx)(v,{number:e},e)}))}),Object(x.jsx)("br",{}),Object(x.jsx)(k,{disabled:!!n,className:"button-start",buttonText:"Confirm Ticket",onClick:function(){if(7!=O.length)alert("Minumum numbers per ticket is 7");else{t((function(e){return[].concat(Object(l.a)(e),[O])}));var e={id:Date.now(),numbers:O};j.addNewTicket(e),i(!u),f([]),d()}}})]})]})})}))),B=Object(y.b)("ticketsStore")(Object(S.c)((function(e){var t=e.startedGame,n=e.setTickets,c=e.tickets,s=e.allNumbers,a=e.ticketsStore,i=e.izvucenBroj,l=[];l.push(i);var d=Object(r.useState)(!1),j=Object(b.a)(d,2),m=j[0],h=j[1],O=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getAllTickets();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){O()}));var f=a.ticket,v=function(e){var t=e.ticket;return Object(x.jsxs)("div",{className:"ticket",children:[Object(x.jsx)("div",{className:"ticket-name",children:Object(x.jsxs)("span",{children:["Ticket id: #",t.id]})}),Object(x.jsx)("div",{className:"ticket-number",children:t.numbers.sort((function(e,t){return e-t})).map((function(e){return Object(x.jsx)("span",{className:l[0].includes(e)?"numbers-generated-red":"numbers-generated",children:e},e)}))})]})};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"tickets-overview",children:[Object(x.jsx)(k,{disabled:!!t,className:"button-start",buttonText:"Add New Ticket",onClick:function(){return h(!0)}}),Object(x.jsx)("div",{className:"tickets-holder",children:f.map((function(e){return Object(x.jsx)(v,{ticket:e})}))})]}),Object(x.jsx)(z,{show:m,title:"Add new ticket",close:function(){h(!m)},allNumbers:s,getActiveTickets:O,setAddTicketModal:h,addTicketModal:m,tickets:c,setTickets:n})]})}))),C=Object(y.b)("ticketsStore")(Object(S.c)((function(e){var t=e.ticketsStore,n=Object(r.useState)([]),c=Object(b.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)([]),O=Object(b.a)(i,2),k=O[0],y=O[1],S=Object(r.useState)("--"),z=Object(b.a)(S,2),C=z[0],A=z[1],G=Object(r.useState)([]),M=Object(b.a)(G,2),W=M[0],R=M[1],Y=Object(r.useState)(!1),E=Object(b.a)(Y,2),F=E[0],K=E[1],J=Object(r.useState)(!1),D=Object(b.a)(J,2),I=D[0],P=D[1],q=Object(r.useState)(!1),H=Object(b.a)(q,2),L=H[0],Q=H[1],U=Object(r.useState)(!1),V=Object(b.a)(U,2),X=V[0],Z=V[1],$=function(){K(!F)},_=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n,c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],k.forEach((function(e){return t.push(e)})),s.forEach((function(e){return t.push(e)})),t,n=[],c=h(49),r=!1,a=u.a.mark((function e(){var s,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=j(c.length),e.next=3,ee(1e3);case 3:if(A(c[s]),R((function(e){return[].concat(Object(l.a)(e),[c[s]])})),Z(!0),n.push(c[s]),c.splice(s,1),a=f(t,n),i=a.ticketWin,a.izvucenaKuglica,!a.isWinner){e.next=15;break}return Q(i),e.next=13,ee(1500);case 13:$(),r=!0;case 15:case"end":return e.stop()}}),e)}));case 8:if(!(c.length>5)||r){e.next=12;break}return e.delegateYield(a(),"t0",10);case 10:e.next=8;break;case 12:if(r){e.next=17;break}return P(!0),e.next=16,ee(1500);case 16:$();case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ee(e){return new Promise((function(t){return setTimeout(t,e)}))}var te=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(m(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"drum-and-numbers",children:[Object(x.jsx)(v,{startRound:_,maxBalls:49,izvucenBroj:C,tickets:s,generatedTickets:k}),Object(x.jsx)(N,{allNumbers:d,izvucenBroj:W})]}),Object(x.jsxs)("div",{className:"generated-tickets",children:[Object(x.jsx)(p,{generateMultipleTicketsForRound:te,generatedTickets:k,izvucenBroj:W,startedGame:X}),Object(x.jsx)(B,{allNumbers:d,izvucenBroj:W,startedGame:X,tickets:s,setTickets:a})]}),Object(x.jsx)(g,{className:"modal",show:F,close:function(){K(!F)},text:I?"We dont have winner in this round!":"We have a winner: ".concat(L),title:I?"Bad luck!":"Congratulations!!!",imgSmiley:I?w:T,resetGame:function(){a([]),y([]),A("--"),K(!F),Z(!1),R([]),t.resetGame()}})]})})));var A,G,M,W,R,Y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"bingo-holder",children:Object(x.jsx)(C,{})})})},E=n(10),F=n(16),K=n(11),J=(n(33),n(2)),D={ticketsStore:new(A=function e(){Object(F.a)(this,e),Object(E.a)(this,"ticket",G,this),Object(E.a)(this,"addNewTicket",M,this),Object(E.a)(this,"getAllTickets",W,this),Object(E.a)(this,"resetGame",R,this)},G=Object(K.a)(A.prototype,"ticket",[J.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=Object(K.a)(A.prototype,"addNewTicket",[J.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.ticket.push(t)}}}),W=Object(K.a)(A.prototype,"getAllTickets",[J.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.ticket}}}),R=Object(K.a)(A.prototype,"resetGame",[J.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){return e.ticket=[]}}}),A)};a.a.render(Object(x.jsx)(y.a,Object(c.a)(Object(c.a)({},D),{},{children:Object(x.jsx)(Y,{})})),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0b5e73c0.chunk.js.map