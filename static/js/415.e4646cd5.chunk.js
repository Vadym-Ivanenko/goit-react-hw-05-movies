"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{130:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(689),a=e(87),u=e(184),c=function(t){var n=t.movies,e=(0,r.TH)();return(0,u.jsx)("section",{children:(0,u.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.title,c=t.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:e},children:r||c})},n)}))})})}},415:function(t,n,e){e.r(n);var r=e(439),a=e(130),u=e(791),c=e(409),o=e(184);n.default=function(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1];return(0,u.useEffect)((function(){(0,c.Df)().then((function(t){i(t)})).catch(console.log)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(a.O,{movies:e})]})}},409:function(t,n,e){e.d(n,{Df:function(){return i},M1:function(){return h},TP:function(){return p},V0:function(){return s},tx:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(243),o="045729310d7d979f0a4752594b43807c",i=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(n,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.e4646cd5.chunk.js.map