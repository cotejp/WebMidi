"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9663],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(t),d=o,g=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return t?n.createElement(g,a(a({ref:r},p),{},{components:t})):n.createElement(g,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3418:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:3,title:"Forwarding"},u="Forwarding Messages",c={unversionedId:"going-further/forwarding",id:"going-further/forwarding",title:"Forwarding",description:"Starting with version 3, it is now possible to forward messages from an",source:"@site/docs/going-further/forwarding.md",sourceDirName:"going-further",slug:"/going-further/forwarding",permalink:"/docs/going-further/forwarding",editUrl:"https://github.com/djipco/webmidi/edit/master/website/docs/going-further/forwarding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Forwarding"},sidebar:"tutorialSidebar",previous:{title:"Performance",permalink:"/docs/going-further/performance"},next:{title:"Sysex",permalink:"/docs/going-further/sysex"}},p=[],f={toc:p};function l(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"forwarding-messages"},"Forwarding Messages"),(0,i.kt)("p",null,"Starting with version 3, it is now possible to forward messages from an\n",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/Input"},(0,i.kt)("inlineCode",{parentName:"a"},"Input"))," to an ",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/Output"},(0,i.kt)("inlineCode",{parentName:"a"},"Output")),". This is done by using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"forward")," method of the ",(0,i.kt)("a",{parentName:"p",href:"../../api/classes/Input"},(0,i.kt)("inlineCode",{parentName:"a"},"Input"))," object."))}l.isMDXComponent=!0}}]);