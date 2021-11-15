"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9364],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2067:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l={unversionedId:"development/price-oracle",id:"development/price-oracle",isDocsHomePage:!1,title:"Price oracle",description:"At its core, Lido for Solana (\u201cSolido\u201d for short) enables converting SOL into",source:"@site/docs/development/price-oracle.md",sourceDirName:"development",slug:"/development/price-oracle",permalink:"/development/price-oracle",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Integrating with Lido",permalink:"/development/frontend-integration"},next:{title:"Reproducibility",permalink:"/development/reproducibility"}},c=[{value:"On-chain",id:"on-chain",children:[]},{value:"HTTP API",id:"http-api",children:[]},{value:"Prometheus",id:"prometheus",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At its core, Lido for Solana (\u201cSolido\u201d for short) enables converting SOL into\nstSOL and back. This conversion involves an exchange rate. The exchange rate\nused by Solido is stored on-chain in the Solido instance itself. This page\nexplains how to access it. To understand how the exchange rate is set, see ",(0,a.kt)("a",{parentName:"p",href:"../internals/exchange-rate"},"the\ninternals page about the exchange rate"),"."),(0,a.kt)("h2",{id:"on-chain"},"On-chain"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The details in this section are based on v0.4.0 of the Solido program. Please\nconfirm that this information is still up to date before building on it. The\nsource code is always the source of truth. For v0.4.0, the relevant field\nis ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/v0.4.0/program/src/state.rs#L191"},(0,a.kt)("inlineCode",{parentName:"a"},"Lido::exchange_rate")),"."))),(0,a.kt)("p",null,"Solido stores two values that together determine the exchange rate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The amount of stSOL in existence, ",(0,a.kt)("inlineCode",{parentName:"li"},"st_sol_supply"),"."),(0,a.kt)("li",{parentName:"ul"},"The amount of SOL managed, ",(0,a.kt)("inlineCode",{parentName:"li"},"sol_balance"),".")),(0,a.kt)("p",null,"Both are represented as a little-endian ",(0,a.kt)("inlineCode",{parentName:"p"},"u64")," that holds the number of lamports.\n",(0,a.kt)("inlineCode",{parentName:"p"},"st_sol_supply")," is stored in in the Solido account data at byte 73..81,\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"sol_balance")," is stored at byte 81..89. The address of the official Solido\ninstance is listed ",(0,a.kt)("a",{parentName:"p",href:"../deployments"},"on the deployments page"),"."),(0,a.kt)("p",null,"Byte 0 of the Solido account data is a version byte. If we make changes to the\ndata layout of the Solido account, we will bump the value of this byte. You can\nuse this to block transactions after we update Solido, to prevent reading\ngarbage data."),(0,a.kt)("p",null,"At the moment we do not offer any libraries for extracting the on-chain data,\nbut we might support one if there is demand for it. Feel free to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/issues/new"},"open an issue")," if you are interested."),(0,a.kt)("h2",{id:"http-api"},"HTTP API"),(0,a.kt)("p",null,"At the moment we do not expose a stable http API for requesting the current\nexchange rate, but we might support one if there is demand for it. Feel free\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/issues/new"},"open an issue")," if you are interested."),(0,a.kt)("h2",{id:"prometheus"},"Prometheus"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../operation/maintenance"},"maintenance daemon")," exposes details about the\nSolido instance at a Prometheus ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. These metrics include\nSolido\u2019s current exchange rate. You will need to run an instance of the\nmaintenance daemon yourself to access these metrics; the endpoint is not\nintended to be exposed to the public internet."))}d.isMDXComponent=!0}}]);