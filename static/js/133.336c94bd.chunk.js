(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[133],{348:function(e,t,r){"use strict";r.d(t,{Hg:function(){return i},M1:function(){return p},TP:function(){return s},UN:function(){return h},tx:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243),o="api_key=6dc3c680a14b9efb7e9b9a5d6fd3dce3",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},133:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(87),i=r(791),s=r(348),p=r(7),f=r.n(p),h=r(689),l=r(184);console.propTypes={query:f().arrayOf(f().shape({original_title:f().string.isRequired}))};var v=function(e){var t=e.query,r=(0,h.TH)();return(0,l.jsx)("ul",{children:t.map((function(e){return(0,l.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:r},children:(0,l.jsx)("li",{children:(0,l.jsx)("p",{children:e.original_title})})},e.id)}))})},d=function(){var e=(0,i.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],p=(0,o.lr)(),f=(0,a.Z)(p,2),h=f[0],d=f[1];return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.UN)(h.get("query"));case 3:t=e.sent,c(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}h.get("query")&&function(){e.apply(this,arguments)}()}),[h]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.query;d({query:t.value}),t.value=""},children:[(0,l.jsx)("input",{type:"text",name:"query",autoComplete:"off"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),r.length>0&&(0,l.jsx)(v,{query:r})]})}},888:function(e,t,r){"use strict";var n=r(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,c,u){if(u!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=133.336c94bd.chunk.js.map