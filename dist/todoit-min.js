!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";var n=function(e){var t=document.getElementById(e),n=document.createElement("form"),r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","TODO...");var o=document.createElement("button");o.onclick=function(e){e.preventDefault();var n=document.createElement("p"),o=document.createTextNode(r.value);n.appendChild(o),n.onclick=function(e){e.preventDefault(),"line-through"===this.style.getPropertyValue("text-decoration")?this.style.setProperty("text-decoration","none"):this.style.setProperty("text-decoration","line-through")},t.appendChild(n),r.value=""};var d=document.createTextNode("Add TODO");o.appendChild(d),n.appendChild(r),n.appendChild(o),t.appendChild(n)};window.TODOit=n}]);