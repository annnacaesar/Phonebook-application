"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[136],{4136:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t=r(1413),a=r(2791),i=r(3044),o=r(3736),c=r(4708),s=r(8787),u=r(533),p=r(2982),l=r(4942),d=r(3366),m=r(7462),f=r(8182),g=r(1184),v=r(8519),h=r(4419),x=r(6934),w=r(1402),b=r(3967);var Z=a.createContext(),k=r(1217);function S(n){return(0,k.Z)("MuiGrid",n)}var j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],W=(0,r(5878).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,p.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,p.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,p.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,p.Z)(j.map((function(n){return"grid-xs-".concat(n)}))),(0,p.Z)(j.map((function(n){return"grid-sm-".concat(n)}))),(0,p.Z)(j.map((function(n){return"grid-md-".concat(n)}))),(0,p.Z)(j.map((function(n){return"grid-lg-".concat(n)}))),(0,p.Z)(j.map((function(n){return"grid-xl-".concat(n)}))))),y=r(184),M=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function N(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function z(n){var e=n.breakpoints,r=n.values,t="";Object.keys(r).forEach((function(n){""===t&&0!==r[n]&&(t=n)}));var a=Object.keys(e).sort((function(n,r){return e[n]-e[r]}));return a.slice(0,a.indexOf(t))}var _=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState,t=r.container,a=r.direction,i=r.item,o=r.spacing,c=r.wrap,s=r.zeroMinWidth,u=r.breakpoints,l=[];t&&(l=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r["spacing-xs-".concat(String(n))]];var t=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&t.push(r["spacing-".concat(e,"-").concat(String(a))])})),t}(o,u,e));var d=[];return u.forEach((function(n){var t=r[n];t&&d.push(e["grid-".concat(n,"-").concat(String(t))])})),[e.root,t&&e.container,i&&e.item,s&&e.zeroMinWidth].concat((0,p.Z)(l),["row"!==a&&e["direction-xs-".concat(String(a))],"wrap"!==c&&e["wrap-xs-".concat(String(c))]],d)}})((function(n){var e=n.ownerState;return(0,m.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,r=n.ownerState,t=(0,g.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,g.k9)({theme:e},t,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(W.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.rowSpacing,i={};if(t&&0!==a){var o,c=(0,g.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=z({breakpoints:e.breakpoints.values,values:c})),i=(0,g.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,l.Z)({marginTop:"-".concat(N(a))},"& > .".concat(W.item),{paddingTop:N(a)}):null!=(t=o)&&t.includes(r)?{}:(0,l.Z)({marginTop:0},"& > .".concat(W.item),{paddingTop:0})}))}return i}),(function(n){var e=n.theme,r=n.ownerState,t=r.container,a=r.columnSpacing,i={};if(t&&0!==a){var o,c=(0,g.P$)({values:a,breakpoints:e.breakpoints.values});"object"===typeof c&&(o=z({breakpoints:e.breakpoints.values,values:c})),i=(0,g.k9)({theme:e},c,(function(n,r){var t,a=e.spacing(n);return"0px"!==a?(0,l.Z)({width:"calc(100% + ".concat(N(a),")"),marginLeft:"-".concat(N(a))},"& > .".concat(W.item),{paddingLeft:N(a)}):null!=(t=o)&&t.includes(r)?{}:(0,l.Z)({width:"100%",marginLeft:0},"& > .".concat(W.item),{paddingLeft:0})}))}return i}),(function(n){var e,r=n.theme,t=n.ownerState;return r.breakpoints.keys.reduce((function(n,a){var i={};if(t[a]&&(e=t[a]),!e)return n;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,g.P$)({values:t.columns,breakpoints:r.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var p=r.spacing(t.columnSpacing);if("0px"!==p){var l="calc(".concat(s," + ").concat(N(p),")");u={flexBasis:l,maxWidth:l}}}i=(0,m.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===r.breakpoints.values[a]?Object.assign(n,i):n[r.breakpoints.up(a)]=i,n}),{})}));var C=function(n){var e=n.classes,r=n.container,t=n.direction,a=n.item,i=n.spacing,o=n.wrap,c=n.zeroMinWidth,s=n.breakpoints,u=[];r&&(u=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var r=[];return e.forEach((function(e){var t=n[e];if(Number(t)>0){var a="spacing-".concat(e,"-").concat(String(t));r.push(a)}})),r}(i,s));var l=[];s.forEach((function(e){var r=n[e];r&&l.push("grid-".concat(e,"-").concat(String(r)))}));var d={root:["root",r&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,p.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],l)};return(0,h.Z)(d,S,e)},P=a.forwardRef((function(n,e){var r=(0,w.Z)({props:n,name:"MuiGrid"}),t=(0,b.Z)().breakpoints,i=(0,v.Z)(r),o=i.className,c=i.columns,s=i.columnSpacing,u=i.component,p=void 0===u?"div":u,l=i.container,g=void 0!==l&&l,h=i.direction,x=void 0===h?"row":h,k=i.item,S=void 0!==k&&k,j=i.rowSpacing,W=i.spacing,N=void 0===W?0:W,z=i.wrap,P=void 0===z?"wrap":z,E=i.zeroMinWidth,G=void 0!==E&&E,T=(0,d.Z)(i,M),D=j||N,O=s||N,B=a.useContext(Z),F=g?c||12:B,L={},$=(0,m.Z)({},T);t.keys.forEach((function(n){null!=T[n]&&(L[n]=T[n],delete $[n])}));var q=(0,m.Z)({},i,{columns:F,container:g,direction:x,item:S,rowSpacing:D,columnSpacing:O,wrap:P,zeroMinWidth:G,spacing:N},L,{breakpoints:t.keys}),R=C(q);return(0,y.jsx)(Z.Provider,{value:F,children:(0,y.jsx)(_,(0,m.Z)({ownerState:q,className:(0,f.Z)(R.root,o),as:p,ref:e},$))})})),E=P,G=r(4554),T=r(403),D=r(890),O=r(1614),B=r(7107),F=r(7012),L=r(9434),$=r(5719);function q(n){return(0,y.jsxs)(D.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center"},n),{},{children:["Copyright \xa9 ",(0,y.jsx)(u.Z,{color:"inherit",href:"https://www.linkedin.com/in/anna-tsisar",target:"_blank",children:"Anna Tsisar"})," ",(new Date).getFullYear(),"."]}))}var R=(0,B.Z)();function A(){var n=(0,L.I0)();return(0,y.jsx)(F.Z,{theme:R,children:(0,y.jsxs)(O.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsx)(c.ZP,{}),(0,y.jsxs)(G.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,y.jsx)(T.Z,{})}),(0,y.jsx)(D.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,y.jsxs)(G.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var r=new FormData(e.currentTarget);console.log({name:r.get("name"),email:r.get("email"),password:r.get("password")}),n((0,$.z2)({name:r.get("name"),email:r.get("email"),password:r.get("password")}))},sx:{mt:3},children:[(0,y.jsxs)(E,{container:!0,spacing:2,children:[(0,y.jsx)(E,{item:!0,xs:12,children:(0,y.jsx)(s.Z,{autoComplete:"name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),(0,y.jsx)(E,{item:!0,xs:12,children:(0,y.jsx)(s.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,y.jsx)(E,{item:!0,xs:12,children:(0,y.jsx)(s.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,y.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"})]})]}),(0,y.jsx)(q,{sx:{mt:5}})]})})}}}]);
//# sourceMappingURL=136.729308a5.chunk.js.map