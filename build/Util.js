!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.HashDog=t():e.HashDog=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(12)},12:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Util=function(){function e(){n(this,e)}return r(e,null,[{key:"numberWithCommas",value:function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}},{key:"replaceCharAtIndex",value:function(e,t,n){return t>e.length-1?e:e.substr(0,t)+n+e.substr(t+1)}},{key:"cls",value:function(){process.stdout.write("[2J[0;0f")}}]),e}()}})});
//# sourceMappingURL=Util.js.map