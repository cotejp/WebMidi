"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7008:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="About",p={type:"mdx",permalink:"/about/",source:"@site/src/pages/about/index.md",title:"About",description:"Who created this?",frontMatter:{}},c=[{value:"Who created this?",id:"who-created-this",level:2},{value:"Sponsoring the project",id:"sponsoring-the-project",level:2},{value:"Licensing",id:"licensing",level:2}],s={toc:c};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about"},"About"),(0,i.kt)("h2",{id:"who-created-this"},"Who created this?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WEBMIDI.js")," is a passion project of mine. I am Jean-Philippe C\xf4t\xe9 (a.k.a.\n",(0,i.kt)("a",{parentName:"p",href:"https://djip.co"},"djip.co"),"), an\n",(0,i.kt)("a",{parentName:"p",href:"https://www.cegepmontpetit.ca/cegep/recherche/professeurs-chercheurs/jean-philippe-cote"},"academic"),"\nand artist with particular interests in creative coding, interactive arts and music technology. You\ncan reach out to me in different ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Twitter: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://twitter.com/djipco"},"@djipco"))," or ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://twitter.com/webmidijs"},"@webmidijs"))),(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://djip.co"},"https://djip.co/"))),(0,i.kt)("li",{parentName:"ul"},"GitHub: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/djipco"},"https://github.com/djipco/")))),(0,i.kt)("p",null,"One of my students, ",(0,i.kt)("strong",{parentName:"p"},"Jean-Marie Gari\xe9py")," has also been helping out in various capacities with the\ncreation of this website. Let's all thank him for his contribution! \ud83d\udc4f"),(0,i.kt)("h2",{id:"sponsoring-the-project"},"Sponsoring the project"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sponsors/djipco/"},"sponsor the project")," by becoming a GitHub sponsor. All\nyou need is a GitHub account. If you see value in this library, please consider a contribution. \ud83d\ude4f\ud83c\udffb"),(0,i.kt)("h2",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"Starting with version 3.0.0, this library is licensed under the ",(0,i.kt)("strong",{parentName:"p"},"Apache License, Version 2.0"),". You\nmay not use this library except in compliance with this license. You may obtain a copy at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.apache.org/licenses/LICENSE-2.0"},"http://www.apache.org/licenses/LICENSE-2.0"))),(0,i.kt)("p",null,'Unless required by applicable law or agreed to in writing, software distributed under this license\nis distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\nimplied. See the above license for the specific language governing permissions and limitations.'),(0,i.kt)("p",null,"\xa9 2015-2023, Jean-Philippe C\xf4t\xe9."))}l.isMDXComponent=!0}}]);