(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(11),i=n.n(a),s=(n(16),n(3)),u=n(9),l=n(2),o=n(0);var j=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)("p",{className:"site-title",children:"React Component Exercises"}),Object(o.jsx)("div",{className:"horizontal-line",children:Object(o.jsx)("div",{className:"line"})})]})})};n(18);var d=function(e){var t=e.ChangeThemeCallBack,n=Object(c.useState)("theme-toggler"),r=Object(s.a)(n,2),a=r[0],i=r[1],u=Object(c.useState)(!1),l=Object(s.a)(u,2),j=l[0],d=l[1];return Object(c.useEffect)((function(){i(j?function(e){return"theme-toggler theme-toggler-selected"}:function(e){return"theme-toggler"}),t(j)}),[j,t]),Object(o.jsx)("span",{onClick:function(e){d((function(e){return!j}))},className:a,children:Object(o.jsx)("span",{})})};function b(e){var t=e.width,n=e.height,c=e.progress,r=function(){return 2*n*8/10+2*t*8/10},a={fill:"transparent",stroke:"var(--mainColor2)",strokeWidth:"10",opacity:"0.5",strokeDasharray:r()+"px",strokeDashoffset:r()-r()*c/100+"px"};return Object(o.jsx)("svg",{width:t,height:n,children:Object(o.jsx)("rect",{x:t/10,y:n/10,rx:n/20,ry:n/20,width:8*t/10,height:8*n/10,style:a})})}n(19);function h(){var e=Object(c.useState)(new Date),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=setInterval((function(){r((function(){return new Date}))}),1e3);return function(){return clearInterval(e)}}),[]);var a=function(e){return e<10?"0"+e:e};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"clock",children:[Object(o.jsx)(b,{width:100,height:50,progress:n.getSeconds()/60*100}),Object(o.jsx)("div",{className:"time",children:a(n.getHours())+":"+a(n.getMinutes())})]})})}var O=function(e){var t=e.ChangeThemeCallBack;return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"center",children:[Object(o.jsx)(h,{}),Object(o.jsx)("label",{children:Object(o.jsx)(d,{ChangeThemeCallBack:t})})]})})};function f(e){var t=e.theme,n=e.ChangeThemeCallBack;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:t,children:[Object(o.jsx)(j,{}),Object(o.jsxs)("div",{className:"main-content center",children:[Object(o.jsx)("div",{className:"component-selection",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(m,{text:"Tic Tac Toe",to:"/",cName:"navigation-link navigation-link-height"})}),Object(o.jsx)("li",{children:Object(o.jsx)(m,{text:"Table Exercise",to:"tableExercise",cName:"navigation-link navigation-link-height"})}),Object(o.jsx)("li",{children:Object(o.jsx)(m,{text:"Hangman Game",to:"hangman",cName:"navigation-link navigation-link-height"})}),Object(o.jsx)("li",{children:Object(o.jsx)(m,{text:"GMT Game",to:"numberguess",cName:"navigation-link navigation-link-height"})})]})})})}),Object(o.jsx)("div",{className:"component-display",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(l.a,{})})})]}),Object(o.jsx)(O,{ChangeThemeCallBack:n})]})})}function m(e){var t=e.to,n=e.text,c=e.cName;return Object(o.jsx)(u.b,{to:t,children:Object(o.jsx)("div",{className:c,children:Object(o.jsx)("p",{children:n})})})}var x=n(8),g=n(4);var v=function(e){var t=e.min,n=e.max,r=Object(c.useState)((function(){return{randomNumber:void 0,userInput:void 0,gameOver:!1,wrongGuesses:[],feedBack:"",guessButtonEnabled:!1}})),a=Object(s.a)(r,2),i=a[0],u=a[1];Object(c.useEffect)((function(){u((function(e){return Object(g.a)(Object(g.a)({},e),{},{randomNumber:e.randomNumber=l(t,n),feedBack:e.feedBack="New game started!"})}))}),[t,n]);var l=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},j=function(e){for(var t=0;t<i.wrongGuesses.length;t++)if(i.wrongGuesses[t]===e)return!0;return!1},d=Object(o.jsx)("button",{onClick:function(){var e,t=i.userInput;t!==i.randomNumber?(e=t>i.randomNumber?"Guess went over.":"Guess went under.",u((function(n){return Object(g.a)(Object(g.a)({},n),{},{wrongGuesses:[].concat(Object(x.a)(n.wrongGuesses),[t]),feedBack:n.feedBack=e,guessButtonEnabled:n.guessButtonEnabled=!1})}))):u((function(e){return Object(g.a)(Object(g.a)({},e),{},{gameOver:e.gameOver=!0,feedBack:e.feedBack="Correct!",guessButtonEnabled:e.guessButtonEnabled=!1})}))},disabled:!i.guessButtonEnabled,children:"Make Guess"}),b=Object(o.jsx)("button",{onClick:function(){u({randomNumber:l(t,n),userInput:void 0,gameOver:!1,wrongGuesses:[],feedBack:"New game started!",guessButtonEnabled:!1})},children:"New Game"});return Object(o.jsxs)("div",{className:"GuessTheNumber",children:[Object(o.jsxs)("h1",{children:["Guess a number beetween ",t,"-",n]}),Object(o.jsx)("p",{children:"Take a guess:"}),Object(o.jsx)("input",{onChange:function(e){if(!i.gameOver){var c=Number(e.target.value);!function(e){return!Number.isNaN(e)&&!(e<t||e>n)&&!j(e)}(c)?u((function(e){return Object(g.a)(Object(g.a)({},e),{},{guessButtonEnabled:e.guessButtonEnabled=!1})})):u((function(e){return Object(g.a)(Object(g.a)({},e),{},{userInput:e.userInput=c,feedBack:e.feedBack=Object(o.jsx)("br",{}),guessButtonEnabled:e.guessButtonEnabled=!0})}))}},type:"number",min:t,max:n}),i.gameOver?b:d,Object(o.jsx)("p",{children:i.feedBack}),Object(o.jsx)("p",{children:i.wrongGuesses.length>0?"Previous guesses:":""}),Object(o.jsx)("p",{children:i.wrongGuesses.toString()})]})};var p=function(e){var t=e.imageIndex;return Object(o.jsx)("div",{className:"ShowDrawing",children:Object(o.jsx)("img",{src:"/react-app/hangman_images/hangman_"+t+".png",alt:"hangmanImage"})})};var k=function(e){var t=e.toGuessChars,n=e.guessedChars,c=e.gameWonCallBack,r=!0;return Object(o.jsx)("div",{className:"ShowWord",children:Object(o.jsx)("h2",{children:function(){var e="",a=!1;return t.forEach((function(t){n.forEach((function(n){if(t===n)return e+=n,void(a=!0)})),a?a=!1:(e+="*",r=!1)})),r&&c(),e}()})})};var C=function(e){var t=e.MainCharacterPressed,n=function(e){t(e.target.id.split("-")[1])};return Object(o.jsx)("div",{className:"Keyboard",children:"abcdefghijklmnopqrstuvwxyz\xe4\xf6".split("").map((function(e){return Object(o.jsx)("button",{id:"button-"+e,onClick:n,children:e})}))})};n(20);var w=function(){var e="hattivatti",t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],i=!1,u=Object(c.useState)(0),l=Object(s.a)(u,2),j=l[0],d=l[1],b=Object(c.useState)([]),h=Object(s.a)(b,2),O=h[0],f=h[1],m=Object(c.useState)([]),x=Object(s.a)(m,2),g=x[0],v=x[1],w=Object(c.useState)("game-over-invisible"),N=Object(s.a)(w,2),B=N[0],y=N[1],S=Object(c.useState)("game-won-invisible"),E=Object(s.a)(S,2),G=E[0],I=E[1];Object(c.useEffect)((function(){T(g,O),_()}));var T=function(e,t){for(var n=0;n<e.length;n++)document.getElementById("button-"+e[n]).style.backgroundColor="green";for(var c=0;c<t.length;c++)document.getElementById("button-"+t[c]).style.backgroundColor="red"},_=function(){i&&I("game-won-visible"),r&&y("game-over-visible")},F=function(){j>=9&&a(!0)},M=function(t){q(t)||(e.includes(t)?v((function(e){return e.concat([t])})):j<9&&(d(++j),f((function(e){return e.concat([t])}))))},q=function(e){for(var t=0;t<g.length;t++)if(g[t]===e)return!0;return!1};return Object(o.jsxs)("div",{className:"Hangman",children:[Object(o.jsx)("h1",{children:"Hangman"}),Object(o.jsx)(p,{imageIndex:j+1}),Object(o.jsx)(k,{toGuessChars:e.split(""),guessedChars:g,gameWonCallBack:function(){i=!0}}),Object(o.jsx)(C,{MainCharacterPressed:function(e){i||r||(M(e),F())}}),Object(o.jsx)("div",{id:"GameWon",className:G,children:Object(o.jsx)("p",{children:"Game Won!"})}),Object(o.jsx)("div",{id:"GameOver",className:B,children:Object(o.jsx)("p",{children:"Game Over!"})})]})};n(21);function N(e){var t=e.headerKeys,n=e.id,c=e.sorting,r=e.HeaderClickedCallBack;return Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:t.map((function(e,t){return Object(o.jsx)("th",{id:n+"-h"+t,onClick:function(){return r(e)},children:Object(o.jsxs)("div",{className:"header-content",children:[Object(o.jsx)("div",{className:"title-center",children:Object(o.jsx)("div",{children:e})}),e===c.key&&Object(o.jsx)(B,{sortAscending:c.ascending})]})},n+"-h"+t)}))})})}function B(e){var t=e.sortAscending,n={fill:"var(--mainColor2)",opacity:"1"};return Object(o.jsxs)("svg",{className:"sort-icon",viewBox:"0 0 100 100",children:[Object(o.jsx)("rect",{x:"3",y:"3",rx:"20",ry:"20",width:"94",height:"94",style:{fill:"var(--mainColor3)",stroke:"var(--mainColor3)",strokeWidth:"5",opacity:"1"}}),t?Object(o.jsx)("path",{d:"M20 80 L50 20 L80 80 Z",style:n}):Object(o.jsx)("path",{d:"M20 20 L50 80 L80 20 Z",style:n})]})}function y(e){var t=e.properties,n=e.CellClickedCallBack,c=e.CancelEditCallBack,r=e.UpdateCellCallBack,a=t.headerKeys,i=t.rowData,s=t.id,u=t.editState,l=function(e,t){return!0===u.isEdited&&u.rowIndex===e&&u.key===t},j=function(e,t,n){return l(t,n)?Object(o.jsx)(E,{value:e,UpdateCellCallBack:r,CancelEditCallBack:c}):e},d=function(e,t){if(!l(e,t))return function(){return n(e,t)}};return Object(o.jsx)("tbody",{children:i.map((function(e,t){return Object(o.jsx)("tr",{children:a.map((function(n,c){return Object(o.jsx)("td",{className:(r=t,a=n,l(r,a)?"selected":""),onClick:d(t,n),children:j(e[n],t,n)},s+"-d"+c);var r,a}))},s+"-r"+t)}))})}function S(e){var t=e.keys,n=e.data,r=e.id,a=Object(c.useState)(t),i=Object(s.a)(a,1)[0],u=Object(c.useState)(n),l=Object(s.a)(u,2),j=l[0],d=l[1],b=Object(c.useState)({key:i[0],ascending:!0}),h=Object(s.a)(b,2),O=h[0],f=h[1],m=Object(c.useState)({rowIndex:0,key:"",value:"",isEdited:!1}),v=Object(s.a)(m,2),p=v[0],k=v[1];Object(c.useEffect)((function(){!function(e){d((function(t){return Object(x.a)(t).sort((function(t,n){var c=t[e.key].toString().toUpperCase(),r=n[e.key].toString().toUpperCase();return Number(c)&&Number(r)&&(c=Number(c),r=Number(r)),c===r?0:c>r?e.ascending?1:-1:e.ascending?-1:1}))}))}(O)}),[O,i]);var C=function(){k((function(e){return Object(g.a)(Object(g.a)({},e),{},{isEdited:!1})}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{id:r,children:[Object(o.jsx)(N,{headerKeys:i,id:r,sorting:O,HeaderClickedCallBack:function(e){f((function(t){return Object(g.a)(Object(g.a)({},t),{},{key:e,ascending:!t.ascending})}))}}),Object(o.jsx)(y,{properties:{headerKeys:i,rowData:j,id:r,editState:p},CellClickedCallBack:function(e,t){k((function(n){return Object(g.a)(Object(g.a)({},n),{},{rowIndex:e,key:t,isEdited:!0})}))},CancelEditCallBack:C,UpdateCellCallBack:function(e){d((function(t){var n=Object(x.a)(t);return n[p.rowIndex][p.key]=e,n})),C()}})]})})}function E(e){var t=e.value,n=e.UpdateCellCallBack,r=e.CancelEditCallBack,a=Object(c.useState)(t),i=Object(s.a)(a,2),u=i[0],l=i[1];Object(c.useEffect)((function(){l(t)}),[t]);return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(u)},children:[Object(o.jsx)("label",{children:Object(o.jsx)("input",{className:"cell-edit-field",type:"text",value:u,onChange:function(e){return l(e.target.value)}})}),Object(o.jsx)("input",{value:"Save",type:"submit",className:"save-input"}),Object(o.jsx)("button",{className:"cancel-input",onClick:function(){return r()},children:"Cancel"})]})}var G=function(e){return Object(o.jsxs)("div",{id:"table-exercise",children:[Object(o.jsx)(S,{keys:["model","year","color","registration"],data:[{model:"Tesla",year:2022,color:"White",registration:"ABC-123"},{model:"Ferrari",year:2022,color:"Black",registration:"EFG-123"},{model:"Opel",year:1999,color:"Blue",registration:"VVX-111"},{model:"Citroen",year:2002,color:"White",registration:"HHJ-223"},{model:"Toyota",year:1990,color:"Grey",registration:"YYJ-990"}],id:"tb1"}),Object(o.jsxs)("ul",{className:"notes",children:[Object(o.jsx)("li",{children:"* Click row headers to sort table."}),Object(o.jsx)("li",{children:"* Click cells to alter their value."})]})]})};n(22);function I(e){var t=e.boardState,n=e.gameState,c=e.CellClickedCallBack,r=function(e){switch(e){case 1:return Object(o.jsx)("svg",{width:"80%",height:"80%",children:Object(o.jsx)("circle",{cx:"50%",cy:"50%",r:"35%",stroke:"white",strokeWidth:"5",fill:"transparent"})});case 2:return Object(o.jsx)("svg",{width:"80%",height:"80%",viewBox:"0 0 1024 1024",children:Object(o.jsx)("path",{stroke:"white",fill:"white",d:"M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"})});default:return Object(o.jsx)(o.Fragment,{})}},a=function(e){switch(e){case 1:return"cell-p1-selected";case 2:return"cell-p2-selected";default:if("p1_turn"===n)return"cell-unselected-p1-turn";if("p2_turn"===n)return"cell-unselected-p2-turn"}};return Object(o.jsx)("div",{className:"board",children:t.map((function(e,t){return e.map((function(e,n){return Object(o.jsx)("div",{className:a(e),onClick:function(){return c(t,n)},children:r(e)},t+n)}))}))})}function T(e){return function(e){switch(e){case"p1_turn":return Object(o.jsx)("div",{className:"turn-indicator turn-indicator-p1",children:Object(o.jsx)("div",{children:"1st player's turn!"})});case"p2_turn":return Object(o.jsx)("div",{className:"turn-indicator turn-indicator-p2",children:Object(o.jsx)("div",{children:"2nd player's turn!"})});case"p1_won":return Object(o.jsx)("div",{className:"turn-indicator turn-indicator-p1",children:Object(o.jsx)("div",{children:"1st player has won!"})});case"p2_won":return Object(o.jsx)("div",{className:"turn-indicator turn-indicator-p2",children:Object(o.jsx)("div",{children:"2nd player has won!"})});case"draw":return Object(o.jsx)("div",{className:"turn-indicator turn-indicator-draw",children:Object(o.jsx)("div",{children:"Game ended in draw!"})});default:return Object(o.jsx)(o.Fragment,{})}}(e.gameState)}function _(e){return function(e,t){switch(e){case"p1_won":case"p2_won":case"draw":return Object(o.jsx)("div",{className:"button-new-game",onClick:t,children:"New Game!"});default:return Object(o.jsx)(o.Fragment,{})}}(e.gameState,e.ResetCallBack)}var F=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(s.a)(a,2),u=i[0],l=i[1],j=Object(c.useState)(),d=Object(s.a)(j,2),b=d[0],h=d[1];Object(c.useEffect)((function(){r((function(){return[[0,0,0],[0,0,0],[0,0,0]]})),l((function(){return"p1_turn"})),h((function(){return!1}))}),[b]),Object(c.useEffect)((function(){var e=function(){for(var e=0;e<n.length;e++)for(var t=0;t<n[e].length;t++)if(0===n[e][t])return!1;return!0},t=function(e){for(var t=0;t<n.length;t++)if(a(e,t))return!0;for(var i=0;i<n[0].length;i++)if(r(e,i))return!0;if(c(e))return!0},c=function(e){return n[0][0]===e&&n[1][1]===e&&n[2][2]===e||(n[0][2]===e&&n[1][1]===e&&n[2][0]===e||void 0)},r=function(e,t){if(n[0][t]===e&&n[1][t]===e&&n[2][t]===e)return!0},a=function(e,t){if(n[t][0]===e&&n[t][1]===e&&n[t][2]===e)return!0};3===n.length&&(t(1)?l((function(){return"p1_won"})):t(2)?l((function(){return"p2_won"})):e()&&l((function(){return"draw"})))}),[n]);var O=function(e,t){return 0!==n[e][t]},f=function(e,t,n){r((function(c){return c.map((function(c,r){return c.map((function(c,a){return r===e&&a===t?n:c}))}))}))};return Object(o.jsxs)("div",{id:"tic-tac-toe",children:[Object(o.jsx)(T,{gameState:u}),Object(o.jsx)(I,{boardState:n,gameState:u,CellClickedCallBack:function(e,t){if(!O(e,t))switch(u){case"p1_turn":f(e,t,1),l((function(){return"p2_turn"}));break;case"p2_turn":f(e,t,2),l((function(){return"p1_turn"}))}}}),Object(o.jsx)(_,{gameState:u,ResetCallBack:function(){h((function(){return!0}))}})]})};n(23);var M=function(){var e=Object(c.useState)("App theme-dark"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(o.jsx)(u.a,{children:Object(o.jsx)(l.d,{children:Object(o.jsxs)(l.b,{path:"/",element:Object(o.jsx)(f,{theme:n,ChangeThemeCallBack:function(e){r(e?"App":"App theme-dark")}}),children:[Object(o.jsx)(l.b,{index:!0,element:Object(o.jsx)(F,{})}),Object(o.jsx)(l.b,{path:"tableExercise",element:Object(o.jsx)(G,{rowCount:5,columnCount:4})}),Object(o.jsx)(l.b,{path:"hangman",element:Object(o.jsx)(w,{})}),Object(o.jsx)(l.b,{path:"numberguess",element:Object(o.jsx)(v,{min:1,max:10})}),Object(o.jsx)(l.b,{path:"*",element:Object(o.jsx)(v,{min:1,max:10})})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),q()}],[[24,1,2]]]);
//# sourceMappingURL=main.2d2863d2.chunk.js.map