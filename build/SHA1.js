!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.HashDog=e():r.HashDog=e()}(this,function(){return function(r){function e(t){if(n[t])return n[t].exports;var o=n[t]={exports:{},id:t,loaded:!1};return r[t].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=r,e.c=n,e.p="",e(0)}({0:function(r,e,n){r.exports=n(19)},19:function(r,e){"use strict";function n(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function r(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}}();e.SHA1=function(){function r(){n(this,r)}return t(r,null,[{key:"hash",value:function(e){return r.stringToHex(r.arrayToString(r.run(r.stringToArray(e),8*e.length)))}},{key:"run",value:function(e,n){var t=(n+64>>9<<4)+15,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],a=0,u=1732584193,f=-271733879,i=-1732584194,c=271733878,l=-1009589776,d=u,s=f,y=i,v=c,h=l;for(e[n>>5]|=128<<24-n%32,e[t]=n;t>a;a+=16){u=d,f=s,i=y,c=v,l=h;for(var p=0,g=null;80>p;p+=1)16>p?o[p]=e[a+p]:o[p]=r.rotl(o[p-3]^o[p-8]^o[p-14]^o[p-16],1),g=r.add(r.add(r.rotl(d,5),r.chMajPty(p,s,y,v)),r.add(r.add(h,o[p]),r.cnst(p))),h=v,v=y,y=r.rotl(s,30),s=d,d=g;d=r.add(d,u),s=r.add(s,f),y=r.add(y,i),v=r.add(v,c),h=r.add(h,l)}return[d,s,y,v,h]}},{key:"arrayToString",value:function(r){for(var e=32*r.length,n=0,t="";e>n;n+=8)t+=String.fromCharCode(r[n>>5]>>>24-n%32&255);return t}},{key:"stringToArray",value:function(r){var e=8*r.length,n=Array(r.length>>2),t=n.length,o=0;for(o=0;t>o;o+=1)n[o]=0;for(o=0;e>o;o+=8)n[o>>5]|=(255&r.charCodeAt(o/8))<<24-o%32;return n}},{key:"stringToHex",value:function(r){for(var e="0123456789abcdef",n=r.length,t="",o=0,a=0;n>a;a+=1)o=r.charCodeAt(a),t+=e.charAt(o>>>4&15)+e.charAt(15&o);return t}},{key:"chMajPty",value:function(r,e,n,t){return 20>r?e&n|~e&t:40>r?e^n^t:60>r?e&n|e&t|n&t:e^n^t}},{key:"cnst",value:function(r){return 20>r?1518500249:40>r?1859775393:60>r?-1894007588:-899497514}},{key:"rotl",value:function(r,e){return r<<e|r>>>32-e}},{key:"add",value:function(r,e){var n=(65535&r)+(65535&e),t=(r>>16)+(e>>16)+(n>>16);return t<<16|65535&n}}]),r}()}})});
//# sourceMappingURL=SHA1.js.map