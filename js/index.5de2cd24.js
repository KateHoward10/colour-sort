(function(e){function n(n){for(var o,c,u=n[0],a=n[1],i=n[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(n);while(s.length)s.shift()();return l.push.apply(l,i||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],o=!0,u=1;u<t.length;u++){var a=t[u];0!==r[a]&&(o=!1)}o&&(l.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={index:0},l=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/colour-sort/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var f=a;l.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1086:function(e,n,t){e.exports=t.p+"media/container_filled.1f4a54d0.wav"},1404:function(e,n,t){e.exports=t.p+"media/solved.fb29553b.wav"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),r={class:"wrapper"},l=Object(o["f"])("New game"),c=Object(o["f"])("Restart"),u=Object(o["f"])("Undo"),a=Object(o["f"])("Add container"),i={class:"wrapper"};function f(e,n,t,f,d,s){var b=Object(o["o"])("Controls"),p=Object(o["o"])("Button"),v=Object(o["o"])("Container"),O=Object(o["o"])("theme-provider");return Object(o["k"])(),Object(o["d"])(O,null,{default:Object(o["s"])((function(){return[Object(o["g"])(b,{soundOn:f.soundOn,toggleSound:f.toggleSound,buttonColour:f.colours[3]},null,8,["soundOn","toggleSound","buttonColour"]),Object(o["g"])("p",null,Object(o["p"])(f.hasSolved?"Solved in ".concat(f.totalMoves," moves"):"Total moves: ".concat(f.totalMoves)),1),Object(o["g"])("div",r,[Object(o["t"])(Object(o["g"])("select",{"onUpdate:modelValue":n[1]||(n[1]=function(e){return f.level=e}),disabled:!f.notPlaying},[(Object(o["k"])(),Object(o["d"])(o["a"],null,Object(o["n"])([4,5,6,7,8,9,10],(function(e){return Object(o["g"])("option",{key:e,value:e},Object(o["p"])(e)+" colours ",9,["value"])})),64))],8,["disabled"]),[[o["q"],f.level]]),f.notPlaying?(Object(o["k"])(),Object(o["d"])(p,{key:0,onClick:f.start,large:"",colour:f.colours[0]},{default:Object(o["s"])((function(){return[l]})),_:1},8,["onClick","colour"])):(Object(o["k"])(),Object(o["d"])(p,{key:1,onClick:f.restart,large:"",colour:f.colours[0]},{default:Object(o["s"])((function(){return[c]})),_:1},8,["onClick","colour"])),Object(o["g"])(p,{disabled:!f.moves.length||f.hasSolved,onClick:f.undo,colour:f.colours[1]},{default:Object(o["s"])((function(){return[u]})),_:1},8,["disabled","onClick","colour"]),Object(o["g"])(p,{disabled:f.cannotAddContainer,onClick:f.addContainer,colour:f.colours[2]},{default:Object(o["s"])((function(){return[a]})),_:1},8,["disabled","onClick","colour"])]),Object(o["g"])("div",i,[(Object(o["k"])(!0),Object(o["d"])(o["a"],null,Object(o["n"])(f.containers,(function(e,n){return Object(o["k"])(),Object(o["d"])(v,{key:n,contents:e,onClick:function(){return f.selectContainer(n)},isSelected:f.selected===n},null,8,["contents","onClick","isSelected"])})),128))])]})),_:1})}t("99af"),t("a623"),t("cb29"),t("a630"),t("d81d"),t("fb6a"),t("d3b7"),t("ac1f"),t("25f0"),t("3ca3"),t("5319");var d=t("2909"),s=t("f6f8"),b=Object(o["f"])(" Sound"),p=Object(o["f"])("Close"),v=Object(o["f"])("How to play"),O={key:0},j=Object(o["g"])("p",null,"The aim is to get all balls of each colour in their own container.",-1),g=Object(o["g"])("p",null,"A ball can only be moved into an empty container, or on top of another ball of the same colour.",-1),m=Object(o["g"])("p",null,"To pick up a ball, click on its container, and then click on the container you wish to move it to.",-1);function h(e,n,t,r,l,c){var u=Object(o["o"])("StyledButton"),a=Object(o["o"])("Container");return Object(o["k"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(a,null,{default:Object(o["s"])((function(){return[Object(o["g"])("label",null,[Object(o["g"])("input",{type:"checkbox",checked:t.soundOn,onChange:n[1]||(n[1]=function(){return t.toggleSound&&t.toggleSound.apply(t,arguments)})},null,40,["checked"]),b]),r.open?(Object(o["k"])(),Object(o["d"])(u,{key:0,onClick:n[2]||(n[2]=function(e){return r.open=!1}),colour:t.buttonColour},{default:Object(o["s"])((function(){return[p]})),_:1},8,["colour"])):(Object(o["k"])(),Object(o["d"])(u,{key:1,onClick:n[3]||(n[3]=function(e){return r.open=!0}),colour:t.buttonColour},{default:Object(o["s"])((function(){return[v]})),_:1},8,["colour"]))]})),_:1}),r.open?(Object(o["k"])(),Object(o["d"])("div",O,[j,g,m])):Object(o["e"])("",!0)],64)}var y=t("8785");function x(){var e=Object(y["a"])(["\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  font-size: ","px;\n  font-weight: ",";\n  color: #fff;\n  background-color: #111;\n  border: 2px solid ",";\n  margin: 8px;\n  border-radius: 15px;\n  padding: 2px 10px;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.1);\n  }\n  @media screen and (min-width: 500px) {\n    font-size: ","px;\n    margin: 14px;\n  }  \n"]);return x=function(){return e},e}var k={large:Boolean,colour:String},C=Object(s["b"])("button",k)(x(),(function(e){return e.large?14:12}),(function(e){return e.large?"bold":"normal"}),(function(e){return e.colour||"#fff"}),(function(e){return e.large?18:16})),S=C,w=S;function F(){var e=Object(y["a"])(["\n  margin: 0;\n"]);return F=function(){return e},e}function _(){var e=Object(y["a"])(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return _=function(){return e},e}var A=Object(s["b"])("div")(_()),B=Object(s["b"])(w)(F()),M={name:"Controls",props:{buttonColour:String,soundOn:Boolean,toggleSound:Function},setup:function(){var e=Object(o["m"])(!1);return{open:e}},components:{Container:A,StyledButton:B}};M.render=h;var P=M;function T(e,n,t,r,l,c){var u=Object(o["o"])("Ball"),a=Object(o["o"])("wrapper");return Object(o["k"])(),Object(o["d"])(a,{isFilled:t.isSelected&&4===t.contents.length&&t.contents.every((function(e){return e===t.contents[0]})),onClick:t.onClick},{default:Object(o["s"])((function(){return[(Object(o["k"])(!0),Object(o["d"])(o["a"],null,Object(o["n"])(t.contents,(function(e,n){return Object(o["k"])(),Object(o["d"])(u,{key:n,colour:e,yOffsetMultiplier:t.isSelected&&0===n?5-t.contents.length:0},null,8,["colour","yOffsetMultiplier"])})),128))]})),_:1},8,["isFilled","onClick"])}t("a9e3");function I(){var e=Object(y["a"])(["\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 1px solid #222;\n  background: radial-gradient(circle at 5px 5px, ",", #222);\n  transition: all 0.1s bounce;\n  transform: translateY(-","px);\n  @media screen and (min-width: 500px) {\n    width: 38px;\n    height: 38px;\n    background: radial-gradient(circle at 10px 10px, ",", #222);\n    transform: translateY(-","px);\n  }  \n"]);return I=function(){return e},e}var J={colour:String,yOffsetMultiplier:Number},N=Object(s["b"])("div",J)(I(),(function(e){return e.colour}),(function(e){return 24*e.yOffsetMultiplier}),(function(e){return e.colour}),(function(e){return 40*e.yOffsetMultiplier})),z=N,D=z;function H(){var e=Object(y["a"])(["\n  width: 24px;\n  height: 96px;\n  border: 2px solid #fff;\n  border-top: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin: 20px 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  transform: scale(",");\n  @media screen and (min-width: 500px) {\n    width: 40px;\n    height: 160px;\n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    margin: 30px 20px;\n  }\n"]);return H=function(){return e},e}var U={isFilled:Boolean},Y=Object(s["b"])("div",U)(H(),(function(e){return e.isFilled?1.05:1})),q={name:"Container",props:{contents:Array,onClick:Function,isSelected:Boolean},components:{Wrapper:Y,Ball:D}};q.render=T;var E=q,R=t("1086"),V=t.n(R),W=t("1404"),G=t.n(W),K={name:"App",setup:function(){var e=Object(o["m"])(4),n=Object(o["m"])(JSON.parse(localStorage.getItem("initial"))||[]),t=Object(o["m"])(null),r=Object(o["m"])(!1),l=Object(o["m"])([]),c=Object(o["m"])(0),u=Object(o["m"])(!0),a=new Audio(V.a),i=new Audio(G.a),f=["#00FF00","#FF0000","#3BB9FF","#FFFF00","#6C2DC7","#2B60DE","#F87217","#008000","#F660AB","#808080"],s=Object(o["b"])((function(){return b.value||!n.value.toString().replace(/,/g,"")})),b=Object(o["b"])((function(){return n.value.every((function(e){return!e.length||x(e)}))})),p=Object(o["b"])((function(){return r.value||s.value}));function v(){n.value=[],t.value=null,r.value=!1,l.value=[],c.value=0;for(var o=f.slice(0,e.value),u=o,a=0;a<3;a++)u=[].concat(Object(d["a"])(u),Object(d["a"])(o));var i=u.sort((function(){return Math.random()-.5}));n.value=[].concat(Object(d["a"])(o.map((function(e,n){return i.slice(4*n,4*n+4)}))),Object(d["a"])(Array.from(Array(Math.floor(e.value/5.5)+1)).fill([]))),localStorage.setItem("initial",JSON.stringify(n.value))}function O(){n.value=JSON.parse(localStorage.getItem("initial")),t.value=null,l.value=[],c.value=0}function j(e){if(null===t.value)n.value[e].length&&(t.value=e);else{if(y(e)){var o=t.value,r=n.value[o].shift();n.value[e]=[r].concat(Object(d["a"])(n.value[e])),l.value.push({from:o,to:e}),c.value++,t.value=e}if(setTimeout((function(){return t.value=null}),100),u.value)if(b.value)i.play();else if(x(n.value[e]))if(a.currentTime>0&&!a.ended){var f=new Audio(V.a);f.play()}else a.play()}}function g(){var e=l.value[l.value.length-1],o=e.from,r=e.to,u=n.value[r].shift();n.value[o]=[u].concat(Object(d["a"])(n.value[o])),t.value=null,l.value.pop(),c.value++}function m(){n.value.push([]),r.value=!0}function h(){u.value=!u.value}function y(e){return e!==t.value&&n.value[e].length<4&&(!n.value[e].length||n.value[e][0]===n.value[t.value][0])}function x(e){return 4===e.length&&e.every((function(n){return n===e[0]}))}return Object(o["j"])((function(){localStorage.getItem("level")&&(e.value=+localStorage.getItem("level")),v()})),Object(o["r"])(e,(function(e,n){e!==n&&localStorage.setItem("level",e)})),{level:e,colours:f,containers:n,selected:t,moves:l,totalMoves:c,soundOn:u,notPlaying:s,hasSolved:b,cannotAddContainer:p,start:v,restart:O,selectContainer:j,undo:g,addContainer:m,toggleSound:h}},components:{Controls:P,Container:E,Button:w,ThemeProvider:s["a"]}};K.render=f;var L=K;Object(o["c"])(L).mount("#app")}});
//# sourceMappingURL=index.5de2cd24.js.map