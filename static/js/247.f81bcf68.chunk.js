"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{348:function(t,e,r){r.d(e,{Hg:function(){return i},M1:function(){return p},TP:function(){return s},UN:function(){return h},tx:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243),o="api_key=6dc3c680a14b9efb7e9b9a5d6fd3dce3",i=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},247:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(689),i=r(791),s=r(348),p=r(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,o.UO)().MovieID;(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.M1)(f);case 3:e=t.sent,c(e.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}f&&function(){t.apply(this,arguments)}()}),[f]);return(0,p.jsx)("ul",{children:r.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200"+t.profile_path:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:200,height:300,alt:"actor poster"}),(0,p.jsx)("span",{children:t.name}),(0,p.jsx)("span",{children:t.character})]},t.id)}))})}}}]);
//# sourceMappingURL=247.f81bcf68.chunk.js.map