(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{10045:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(94602);t(12697),t(64687),t(34155),t(34155),t(88795);var i=t(17064),u=function(e){var n=new i({max:parseInt(e.uniqueTokenPerInterval||500,10),ttl:parseInt(e.interval||6e4,10)});return{check:function(e,t,r){return new Promise(function(i,u){var a=n.get(r)||[0];0===a[0]&&n.set(r,a),a[0]+=1;var o=a[0],c=o>=parseInt(t,10);return e&&(e.setHeader("X-RateLimit-Limit",t),e.setHeader("X-RateLimit-Remaining",c?0:t-o)),c?u():i()})}}};u({interval:6e4,uniqueTokenPerInterval:1e3}),u({interval:36e5,uniqueTokenPerInterval:1e4});var a=r.Z},75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(10045)}])}},function(e){e.O(0,[774,970,838,738,317,365,251,660,817,845,265,665,509,653,714,909,961,219,835,473,670,273,37,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);