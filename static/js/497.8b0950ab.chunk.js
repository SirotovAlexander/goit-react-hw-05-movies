"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[497],{348:function(t,e,n){n.d(e,{Hg:function(){return u},M1:function(){return p},TP:function(){return o},UN:function(){return f},tx:function(){return d}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="api_key=6dc3c680a14b9efb7e9b9a5d6fd3dce3",u=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},497:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(348),o=n(689),p=n(87),d=n(308),f=n(184),_=function(t){var e=t.trends,n=(0,o.TH)();return(0,f.jsx)("ul",{className:d.Z.trend__list,children:e.map((function(t){return(0,f.jsx)(p.rU,{className:d.Z.trend__link,to:"/movies/".concat(t.id),state:{from:n},children:(0,f.jsxs)("li",{className:d.Z.trend__item,children:[(0,f.jsx)("img",{className:d.Z.trend__poster,src:t.poster_path?"https://image.tmdb.org/t/p/w300"+t.poster_path:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster"}),(0,f.jsx)("p",{className:d.Z.trend__name,children:t.title})]})},t.id)}))})},l=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Hg)();case 3:e=t.sent,c(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsx)("div",{children:(0,f.jsx)(_,{trends:n})})},h="HomePage_home__section__l9dkr",m=function(){return(0,f.jsx)("section",{className:h,children:(0,f.jsx)(l,{})})}},308:function(t,e){e.Z={trend__list:"TrendList_trend__list__fi+Yr",trend__item:"TrendList_trend__item__kEUXo",trend__poster:"TrendList_trend__poster__c+hwo",trend__name:"TrendList_trend__name__fBuwM"}}}]);
//# sourceMappingURL=497.8b0950ab.chunk.js.map