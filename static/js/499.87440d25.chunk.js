"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{4377:function(t,n,e){e.d(n,{BG:function(){return h},Bt:function(){return Z},I2:function(){return p},kK:function(){return d},wr:function(){return i}});var r=e(5861),a=e(4687),u=e.n(a),c=e(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="b1182fc6a17a9d116199a570dc720d86";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/all/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},8499:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r,a,u,c,s=e(9439),i=e(2791),o=e(7689),p=e(4377),f=e(168),h=e(7402),l=h.Z.ul(r||(r=(0,f.Z)(["\nlist-style: none;\n    padding: 15px;"]))),d=h.Z.li(a||(a=(0,f.Z)([""]))),v=h.Z.h3(u||(u=(0,f.Z)([""]))),Z=h.Z.p(c||(c=(0,f.Z)([""]))),y=e(184);function k(){var t=(0,o.UO)().movieId,n=(0,i.useState)([]),e=(0,s.Z)(n,2),r=e[0],a=e[1];return(0,i.useEffect)((function(){(0,p.Bt)(t).then(a)}),[t]),r.length?(0,y.jsx)(l,{children:r.map((function(t){return(0,y.jsxs)(d,{children:[(0,y.jsx)(v,{children:t.author}),(0,y.jsx)(Z,{children:t.content})]},t.id)}))}):(0,y.jsx)(Z,{children:"There are no reviews yet."})}}}]);
//# sourceMappingURL=499.87440d25.chunk.js.map