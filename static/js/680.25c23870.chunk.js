"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{348:function(t,e,r){r.d(e,{Hg:function(){return o},M1:function(){return p},TP:function(){return u},UN:function(){return f},tx:function(){return d}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i="api_key=6dc3c680a14b9efb7e9b9a5d6fd3dce3",o=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},89:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(643),a="Loader_loader__+lRPl",c=r(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.iT,{height:80,width:80,color:"#3f72b5",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#3f72b5",strokeWidth:5,strokeWidthSecondary:5})})}},219:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(689),a=r(87),c={trend__list:"MovieList_trend__list__QtXiS",trend__item:"MovieList_trend__item__+kGQl",trend__poster:"MovieList_trend__poster__0wK+5",trend__name:"MovieList_trend__name__Spp7Y"},s=r(184),i=function(t){var e=t.value,r=(0,n.TH)();return(0,s.jsx)("ul",{className:c.trend__list,children:e.map((function(t){return(0,s.jsx)(a.rU,{className:c.trend__link,to:"/movies/".concat(t.id),state:{from:r},children:(0,s.jsxs)("li",{className:c.trend__item,children:[(0,s.jsx)("img",{className:c.trend__poster,src:t.poster_path?"https://image.tmdb.org/t/p/w300"+t.poster_path:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"poster"}),(0,s.jsx)("p",{className:c.trend__name,children:t.title})]})},t.id)}))})}},680:function(t,e,r){r.r(e),r.d(e,{default:function(){return _}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(348),u=r(89),p=r(219),d=r(184),f=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,i.useState)(!1),l=(0,a.Z)(f,2),_=l[0],v=l[1];return(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Hg)();case 3:e=t.sent,c(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))).apply(this,arguments)}v(!0),function(){t.apply(this,arguments)}()}),[]),(0,d.jsxs)("div",{children:[_&&(0,d.jsx)(u.Z,{}),(0,d.jsx)(p.Z,{value:r})]})},l="HomePage_home__section__l9dkr",_=function(){return(0,d.jsx)("section",{className:l,children:(0,d.jsx)(f,{})})}}}]);
//# sourceMappingURL=680.25c23870.chunk.js.map