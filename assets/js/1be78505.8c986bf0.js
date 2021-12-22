"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9514,4608],{5642:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),l=a(3905),o=a(6291),r=a(146),c=a(6010),i=a(6681),s=a(3783),d=a(8487),u=a(3117);var m=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=a(5999),p=a(102),h=a(9960),f=a(3919),v=a(541),E="menuLinkText_1J2g",g="hasHref_2fq0",k=a(2389),_=["items"],C=["item"],N=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],S=(0,n.memo)((function(e){var t=e.items,a=(0,p.Z)(e,_);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,u.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,p.Z)(e,C);return"category"===t.type?0===t.items.length?null:n.createElement(T,(0,u.Z)({item:t},a)):n.createElement(M,(0,u.Z)({item:t},a))}function T(e){var t,a=e.item,l=e.onItemClick,o=e.activePath,r=e.level,s=(0,p.Z)(e,N),d=a.items,m=a.label,f=a.collapsible,v=a.className,_=a.href,C=function(e){var t=(0,k.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(a),Z=(0,i._F)(a,o),I=(0,i.uR)({initialState:function(){return!!f&&(!Z&&a.collapsed)}}),T=I.collapsed,M=I.setCollapsed,y=I.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,o=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:Z,collapsed:T,setCollapsed:M}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":T},v)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(h.Z,(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":f&&!_,"menu__link--active":Z},t[E]=!f,t[g]=!!C,t)),onClick:f?function(e){null==l||l(a),_?M(!1):(e.preventDefault(),y())}:function(){null==l||l(a)},href:f?null!=C?C:"#":C},s),m),_&&f&&n.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),y()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},n.createElement(S,{items:d,tabIndex:T?-1:0,onItemClick:l,activePath:o,level:r+1})))}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,r=(0,p.Z)(e,Z),s=t.href,d=t.label,m=t.className,b=(0,i._F)(t,l);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},n.createElement(h.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},r),(0,f.Z)(s)?d:n.createElement("span",null,d,n.createElement(v.Z,null))))}var y="sidebar_15mo",A="sidebarWithHideableNavbar_267A",F="sidebarHidden_2kNb",L="sidebarLogo_3h0W",w="menu_Bmed",B="menuWithAnnouncementBar_2WvA",P="collapseSidebarButton_1CGd",x="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",P),onClick:t},n.createElement(m,{className:x}))}function H(e){var t,a,l=e.path,o=e.sidebar,r=e.onCollapse,s=e.isHidden,u=function(){var e=(0,i.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,i.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),m=(0,i.LU)(),b=m.navbar.hideOnScroll,p=m.hideableSidebar;return n.createElement("div",{className:(0,c.Z)(y,(t={},t[A]=b,t[F]=s,t))},b&&n.createElement(d.Z,{tabIndex:-1,className:L}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",w,(a={},a[B]=u,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:o,activePath:l,level:1}))),p&&n.createElement(R,{onClick:r}))}var D=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(S,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return n.createElement(i.Cv,{component:D,props:e})}var q=n.memo(H),z=n.memo(W);function Y(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(q,e),l&&n.createElement(z,e))}var J=a(7707),K=a(4608),U="backToTopButton_35hR",G="backToTopButtonShow_18ls";function O(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Q=function(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],o=(0,n.useRef)(!1),r=O(),s=r.smoothScrollTop,d=r.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(o.current)o.current=!1;else{var r=a<n;if(r||d(),a<300)l(!1);else if(r){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&l(!0)}else l(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,U,(e={},e[G]=a,e)),type:"button",onClick:function(){return s()}})},V=a(6775),X={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},j=a(5742);function $(e){var t,a,o,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,p=e.sidebarName,h=(0,i.Vq)(),f=d.pluginId,v=d.version,E=(0,n.useState)(!1),g=E[0],k=E[1],_=(0,n.useState)(!1),C=_[0],N=_[1],Z=(0,n.useCallback)((function(){C&&N(!1),k((function(e){return!e}))}),[C]);return n.createElement(r.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,i.os)(f,v)}},n.createElement("div",{className:X.docPage},n.createElement(Q,null),h&&n.createElement("aside",{className:(0,c.Z)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&g&&N(!0)}},n.createElement(Y,{key:p,sidebar:h,path:s.path,onCollapse:Z,isHidden:C}),C&&n.createElement("div",{className:X.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},n.createElement(m,{className:X.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(X.docMainContainer,(a={},a[X.docMainContainerEnhanced]=g||!h,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(o={},o[X.docItemWrapperEnhanced]=g,o))},n.createElement(l.Zo,{components:J.Z},u)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,r=t.find((function(e){return(0,V.LX)(l.pathname,e)}));if(!r)return n.createElement(K.default,null);var c=r.sidebar,s=c?a.docsSidebars[c]:null;return n.createElement(n.Fragment,null,n.createElement(j.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement($,{currentDocRoute:r,versionMetadata:a,sidebarName:c},(0,o.Z)(t,{versionMetadata:a})))))}},4608:function(e,t,a){a.r(t);var n=a(7294),l=a(146),o=a(5999);t.default=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);