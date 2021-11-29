"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[804],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"WEBMIDI.js v3 is available now!",description:"Version 3 of WEBMIDI.js, the library that lets you interact with your MIDI instruments and devices, is now available. It features Node.js and TypeScript support, various new objects (Message, Note, etc.) and a completely rewritten engine.",authors:[{name:"Jean-Philippe C\xf4t\xe9",title:"Creator of WEBMIDI.js",url:"/about",image_url:"/img/blog/jean-philippe_cote.jpg"}],hide_table_of_contents:!1,keywords:["web midi api","music","instrument","midi","javascript"],image:"/img/blog/2021-12-01/webmidijs-is-out.png"},p=void 0,l={permalink:"/blog/2021/12/01/version-3-has-been-released",source:"@site/blog/2021-12-01/version-3-has-been-released.md",title:"WEBMIDI.js v3 is available now!",description:"Version 3 of WEBMIDI.js, the library that lets you interact with your MIDI instruments and devices, is now available. It features Node.js and TypeScript support, various new objects (Message, Note, etc.) and a completely rewritten engine.",date:"2021-12-01T00:00:00.000Z",formattedDate:"December 1, 2021",tags:[],readingTime:2.365,truncated:!0,authors:[{name:"Jean-Philippe C\xf4t\xe9",title:"Creator of WEBMIDI.js",url:"/about",image_url:"/img/blog/jean-philippe_cote.jpg",imageURL:"/img/blog/jean-philippe_cote.jpg"}]},u={authorsImageUrls:[void 0]},m=[{value:"About WEBMIDI.js",id:"about-webmidijs",children:[],level:3},{value:"About the New Version 3",id:"about-the-new-version-3",children:[],level:3},{value:"Try it out!",id:"try-it-out",children:[],level:3}],c={toc:m};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After a lot of work and testing, I am happy to announce today that version 3 of the go-to MIDI\nlibrary for JavaScript has been released! You can ",(0,o.kt)("a",{parentName:"p",href:"https://webmidijs.org/docs"},"try it out")," right\nnow!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3422).Z})),(0,o.kt)("h3",{id:"about-webmidijs"},"About WEBMIDI.js"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webmidijs.org"},(0,o.kt)("strong",{parentName:"a"},"WEBMIDI.js"))," exists to make it easier for developers to use the\n",(0,o.kt)("a",{parentName:"p",href:"https://webaudio.github.io/web-midi-api/"},"Web MIDI API"),". The Web MIDI API is a really exciting\naddition to the web platform allowing a web page to interact directly with MIDI musical instruments\nand devices."),(0,o.kt)("p",null,"While great, many developers will find the API to be too low-level for their needs. Having to\nperform binary arithmetic or needing to constantly refer to the 300-page MIDI spec is no fun (trust\nme on this!). So, the goal for ",(0,o.kt)("a",{parentName:"p",href:"https://webmidijs.org"},(0,o.kt)("strong",{parentName:"a"},"WEBMIDI.js"))," is to get developers and\nmusicians started with their web-based MIDI projects as efficiently as possible."),(0,o.kt)("p",null,"As of today, ",(0,o.kt)("a",{parentName:"p",href:"https://webmidijs.org"},(0,o.kt)("strong",{parentName:"a"},"WEBMIDI.js"))," generates over ",(0,o.kt)("strong",{parentName:"p"},"744K hits a month on\n",(0,o.kt)("a",{parentName:"strong",href:"https://www.jsdelivr.com/package/npm/webmidi"},"jsDelivr")),". It is ",(0,o.kt)("strong",{parentName:"p"},"downloaded over 4.4K times a\nmonth on ",(0,o.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/webmidi"},"NPM"))," and has been ",(0,o.kt)("strong",{parentName:"p"},"starred by over\n",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/djipco/webmidi/stargazers"},"1000 developers"))," on GitHub. Not too bad for a niche\nlibrary that grew out of a personal passion project. \ud83d\ude00"),(0,o.kt)("h3",{id:"about-the-new-version-3"},"About the New Version 3"),(0,o.kt)("p",null,"Version 3 has been rewritten from scratch to make it both future-proof and backwards-compatible. It\nuses a modern development paradigm and now has its own dedicated website at\n",(0,o.kt)("a",{parentName:"p",href:"https://webmidijs.org"},(0,o.kt)("strong",{parentName:"a"},"webmidijs.org")),". The library offers numerous new features such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Long-awaited ",(0,o.kt)("strong",{parentName:"p"},"support for Node.js")," (thanks to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jzz"},"jzz"),"\nmodule by Jazz-Soft). The exact same code can be used in supported browsers and in Node.js.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Distribution in ",(0,o.kt)("strong",{parentName:"p"},"3 flavours"),": ",(0,o.kt)("strong",{parentName:"p"},"ESM")," (ECMAScript module for modern browsers), ",(0,o.kt)("strong",{parentName:"p"},"CJS")," (CommonJS\nmodule for Node.js) and ",(0,o.kt)("strong",{parentName:"p"},"IIFE")," (Immediately Invoked Function Expression for legacy browsers and\n",(0,o.kt)("em",{parentName:"p"},"ad hoc")," usage).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"TypeScript Support"),". Every new release includes a TypeScript definition file for CJS and ESM in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"New ",(0,o.kt)("inlineCode",{parentName:"strong"},"InputChannel")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"OutputChannel"))," objects. You can now work with a single MIDI channel if\nthat's appropriate for your needs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"New ",(0,o.kt)("inlineCode",{parentName:"strong"},"Note")," object"),". Makes it easier to work with notes and pass them around from one method to\nthe next.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"New ",(0,o.kt)("inlineCode",{parentName:"strong"},"Message")," object")," that allows easier routing of MIDI messages, including the ability to\nautomatically ",(0,o.kt)("strong",{parentName:"p"},"forward inbound MIDI messages")," to one, or more, outputs (much like the good ol'\nphysical THRU port).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Improved support for ",(0,o.kt)("strong",{parentName:"p"},"system exclusive")," (sysex) messages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Support for promises")," while preserving legacy callback support.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Improved ",(0,o.kt)("strong",{parentName:"p"},"support for RPN/NRPN messages"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Addition of ",(0,o.kt)("strong",{parentName:"p"},"hundreds of unit tests")," to make sure the library remains stable at all times.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"and lots more..."))),(0,o.kt)("h3",{id:"try-it-out"},"Try it out!"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://webmidijs.org/docs"},"documentation section")," of the new website has all the information\nto get you started. If you need help, you can exchange with fellow users and myself using the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/djipco/webmidi/discussions"},"GitHub Discussions")," platform."),(0,o.kt)("p",null,"If you use the library and find it useful, please think about\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/djipco"},"sponsoring")," \ud83d\udc9c the project."),(0,o.kt)("p",null,"Cheers!"),(0,o.kt)("p",null,"Jean-Philippe"))}d.isMDXComponent=!0},3422:function(e,t,n){t.Z=n.p+"assets/images/webmidi.js-is-available-now-0cf305766346f90680e0eb13da7df2b1.png"}}]);