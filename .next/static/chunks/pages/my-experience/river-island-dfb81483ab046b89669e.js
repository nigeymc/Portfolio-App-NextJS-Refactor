_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"7xGa":function(e,a,t){"use strict";var n,s=t("wx14"),r=t("zLVn"),c=t("TSYQ"),i=t.n(c),l=t("q1tI"),o=t.n(l),d=t("dRu9"),u=t("wsUu"),j=t("z+q/"),b=((n={})[d.b]="show",n[d.a]="show",n),m=o.a.forwardRef((function(e,a){var t=e.className,n=e.children,c=Object(r.a)(e,["className","children"]),m=Object(l.useCallback)((function(e){Object(j.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return o.a.createElement(d.e,Object(s.a)({ref:a,addEndListener:u.a},c,{onEnter:m}),(function(e,a){return o.a.cloneElement(n,Object(s.a)({},a,{className:i()("fade",t,n.props.className,b[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",a.a=m},D9KS:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("nKUr"),s=t("q1tI"),r=function(){return Object(n.jsx)(s.Fragment,{children:Object(n.jsx)("div",{className:"loader",children:"Loading..."})})}},JI6e:function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),c=t.n(r),i=t("q1tI"),l=t.n(i),o=t("vUet"),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,j=Object(s.a)(e,["bsPrefix","className","as"]),b=Object(o.a)(t,"col"),m=[],f=[];return d.forEach((function(e){var a,t,n,s=j[e];if(delete j[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,n=s.order}else a=s;var c="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+b+c:""+b+c+"-"+a),null!=n&&f.push("order"+c+"-"+n),null!=t&&f.push("offset"+c+"-"+t)})),m.length||m.push(b),l.a.createElement(u,Object(n.a)({},j,{ref:a,className:c.a.apply(void 0,[r].concat(m,f))}))}));u.displayName="Col",a.a=u},TUci:function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),c=t.n(r),i=t("q1tI"),l=t.n(i),o=t("y8DL"),d=t("ZCiN"),u=t("vUet"),j=t("7xGa"),b=t("XQC9"),m=t("U1MP"),f=t("YdCC"),p=t("dbZe"),h=Object(m.a)("h4");h.displayName="DivStyledAsH4";var x=Object(f.a)("alert-heading",{Component:h}),O=Object(f.a)("alert-link",{Component:p.a}),N={show:!0,transition:j.a,closeLabel:"Close alert"},v=l.a.forwardRef((function(e,a){var t=Object(o.a)(e,{show:"onClose"}),r=t.bsPrefix,i=t.show,m=t.closeLabel,f=t.className,p=t.children,h=t.variant,x=t.onClose,O=t.dismissible,N=t.transition,v=Object(s.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),w=Object(u.a)(r,"alert"),g=Object(d.a)((function(e){x&&x(!1,e)})),E=!0===N?j.a:N,y=l.a.createElement("div",Object(n.a)({role:"alert"},E?void 0:v,{ref:a,className:c()(f,w,h&&w+"-"+h,O&&w+"-dismissible")}),O&&l.a.createElement(b.a,{onClick:g,label:m}),p);return E?l.a.createElement(E,Object(n.a)({unmountOnExit:!0},v,{ref:void 0,in:i}),y):i?y:null}));v.displayName="Alert",v.defaultProps=N,v.Link=O,v.Heading=x,a.a=v},U1MP:function(e,a,t){"use strict";var n=t("wx14"),s=t("q1tI"),r=t.n(s),c=t("TSYQ"),i=t.n(c);a.a=function(e){return r.a.forwardRef((function(a,t){return r.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},XQC9:function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("17x9"),c=t.n(r),i=t("q1tI"),l=t.n(i),o=t("TSYQ"),d=t.n(o),u={label:c.a.string.isRequired,onClick:c.a.func},j=l.a.forwardRef((function(e,a){var t=e.label,r=e.onClick,c=e.className,i=Object(s.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(n.a)({ref:a,type:"button",className:d()("close",c),onClick:r},i),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},t))}));j.displayName="CloseButton",j.propTypes=u,j.defaultProps={label:"Close"},a.a=j},"dF0+":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-experience/river-island",function(){return t("jkKj")}])},iNpN:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("nKUr"),s=function(e){return Object(n.jsxs)("div",{className:"job",children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("img",{src:"/images/briefcase.svg",width:"25",alt:"briefcase icon"})," "," \xb7 ",e.jobTitle]}),Object(n.jsxs)("h4",{children:[Object(n.jsx)("img",{src:"/images/calendar.svg",width:"25",alt:"calendar icon"})," "," \xb7 ",e.dates]}),Object(n.jsxs)("h4",{children:[Object(n.jsx)("img",{src:"/images/laptop.svg",width:"25",alt:"laptop icon"})," "," \xb7 ",Object(n.jsxs)("a",{href:"https://".concat(e.website),target:"_blank",children:[e.website," ",Object(n.jsx)("sup",{className:"job__icon",children:Object(n.jsx)("i",{className:"fas fa-external-link-alt"})})]})]}),Object(n.jsxs)("h4",{children:[Object(n.jsx)("img",{src:"/images/locationpin.svg",width:"17",alt:"location pin icon"})," \xb7 ",e.location]}),e.summary]})}},jkKj:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return h})),t.d(a,"default",(function(){return p}));var n=t("nKUr"),s=t("q1tI"),r=t("YFqc"),c=t.n(r),i=t("TUci"),l=t("7vrA"),o=t("JI6e"),d=t("5Yp1"),u=t("lXAN"),j=t("iNpN"),b=t("D9KS"),m="River",f="Island",p=function(e){var a=e.riverIsland,t=e.riSummary,r=e.error,p=e.loading;return Object(n.jsx)(d.a,{content:Object(n.jsxs)(s.Fragment,{children:[r&&Object(n.jsx)(i.a,{className:"alert__error--fetch",variant:"info",children:"Error fetching page content"}),p?Object(n.jsx)(b.a,{}):Object(n.jsx)(l.a,{fluid:!0,className:"p-0",children:Object(n.jsxs)("section",{className:"general-section general-section",id:"experience",children:[Object(n.jsx)(u.a,{firstWord:m,secondWord:f}),Object(n.jsx)("div",{className:"general-section__content",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(j.a,{jobTitle:a.jobTitle,dates:a.dates,website:a.website,location:a.location,summary:t.map((function(e,a){return Object(n.jsx)("p",{children:e},a)}))}),Object(n.jsx)(c.a,{href:"/my-experience",children:Object(n.jsx)("a",{className:"btn btn-primary",variant:"primary",children:"Back to My Experience"})})]})})]})})]})})},h=!0},lXAN:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("nKUr"),s=function(e){return Object(n.jsxs)("h1",{className:"mb-0",children:[e.firstWord,Object(n.jsx)("span",{className:"text-primary",children:e.secondWord}),e.thirdWord,Object(n.jsx)("span",{className:"text-primary",children:e.fourthWord})]})}}},[["dF0+",0,2,1,3]]]);