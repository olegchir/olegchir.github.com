var hljs=new function(){function q(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")
}function A(a){for(var b=a.firstChild;
b;
b=b.nextSibling){if(b.nodeName=="CODE"){return b
}if(!(b.nodeType==3&&b.nodeValue.match(/\s+/))){break
}}}function u(a,b){return Array.prototype.map.call(a.childNodes,function(c){if(c.nodeType==3){return b?c.nodeValue.replace(/\n/g,""):c.nodeValue
}if(c.nodeName=="BR"){return"\n"
}return u(c,b)
}).join("")
}function B(a){var b=(a.className+" "+a.parentNode.className).split(/\s+/);
b=b.map(function(d){return d.replace(/^language-/,"")
});
for(var c=0;
c<b.length;
c++){if(x[b[c]]||b[c]=="no-highlight"){return b[c]
}}}function z(a){var c=[];
(function b(f,e){for(var d=f.firstChild;
d;
d=d.nextSibling){if(d.nodeType==3){e+=d.nodeValue.length
}else{if(d.nodeName=="BR"){e+=1
}else{if(d.nodeType==1){c.push({event:"start",offset:e,node:d});
e=b(d,e);
c.push({event:"stop",offset:e,node:d})
}}}}return e
})(a,0);
return c
}function s(f,h,g){var c=0;
var e="";
var a=[];
function j(){if(f.length&&h.length){if(f[0].offset!=h[0].offset){return(f[0].offset<h[0].offset)?f:h
}else{return h[0].event=="start"?f:h
}}else{return f.length?f:h
}}function k(l){function m(n){return" "+n.nodeName+'="'+q(n.value)+'"'
}return"<"+l.nodeName+Array.prototype.map.call(l.attributes,m).join("")+">"
}while(f.length||h.length){var i=j().splice(0,1)[0];
e+=q(g.substr(c,i.offset-c));
c=i.offset;
if(i.event=="start"){e+=k(i.node);
a.push(i.node)
}else{if(i.event=="stop"){var d,b=a.length;
do{b--;
d=a[b];
e+=("</"+d.nodeName.toLowerCase()+">")
}while(d!=i.node);
a.splice(b,1);
while(b<a.length){e+=k(a[b]);
b++
}}}}return e+q(g.substr(c))
}function w(a){function c(d,e){return RegExp(d,"m"+(a.cI?"i":"")+(e?"g":""))
}function b(k,e){if(k.compiled){return
}k.compiled=true;
var h=[];
if(k.k){var i={};
function j(l,m){m.split(" ").forEach(function(D){var n=D.split("|");
i[n[0]]=[l,n[1]?Number(n[1]):1];
h.push(n[0])
})
}k.lR=c(k.l||hljs.IR,true);
if(typeof k.k=="string"){j("keyword",k.k)
}else{for(var d in k.k){if(!k.k.hasOwnProperty(d)){continue
}j(d,k.k[d])
}}k.k=i
}if(e){if(k.bWK){k.b="\\b("+h.join("|")+")\\s"
}k.bR=c(k.b?k.b:"\\B|\\b");
if(!k.e&&!k.eW){k.e="\\B|\\b"
}if(k.e){k.eR=c(k.e)
}k.tE=k.e||"";
if(k.eW&&e.tE){k.tE+=(k.e?"|":"")+e.tE
}}if(k.i){k.iR=c(k.i)
}if(k.r===undefined){k.r=1
}if(!k.c){k.c=[]
}for(var f=0;
f<k.c.length;
f++){if(k.c[f]=="self"){k.c[f]=k
}b(k.c[f],k)
}if(k.starts){b(k.starts,e)
}var g=[];
for(var f=0;
f<k.c.length;
f++){g.push(k.c[f].b)
}if(k.tE){g.push(k.tE)
}if(k.i){g.push(k.i)
}k.t=g.length?c(g.join("|"),true):{exec:function(l){return null
}}
}b(a)
}function y(K,l){function Q(E,F){for(var C=0;
C<F.c.length;
C++){var D=F.c[C].bR.exec(E);
if(D&&D.index==0){return F.c[C]
}}}function n(C,D){if(C.e&&C.eR.test(D)){return C
}if(C.eW){return n(C.parent,D)
}}function m(D,C){return C.i&&C.iR.test(D)
}function c(C,E){var D=k.cI?E[0].toLowerCase():E[0];
return C.k.hasOwnProperty(D)&&C.k[D]
}function h(){var D=q(g);
if(!P.k){return D
}var E="";
var F=0;
P.lR.lastIndex=0;
var C=P.lR.exec(D);
while(C){E+=D.substr(F,C.index-F);
var G=c(P,C);
if(G){i+=G[1];
E+='<span class="'+G[0]+'">'+C[0]+"</span>"
}else{E+=C[0]
}F=P.lR.lastIndex;
C=P.lR.exec(D)
}return E+D.substr(F)
}function a(){if(P.sL&&!x[P.sL]){return q(g)
}var C=P.sL?y(P.sL,g):v(g);
if(P.r>0){i+=C.keyword_count;
N+=C.r
}return'<span class="'+C.language+'">'+C.value+"</span>"
}function b(){return P.sL!==undefined?a():h()
}function d(C,E){var D=C.cN?'<span class="'+C.cN+'">':"";
if(C.rB){e+=D;
g=""
}else{if(C.eB){e+=q(E)+D;
g=""
}else{e+=D;
g=E
}}P=Object.create(C,{parent:{value:P}});
N+=C.r
}function L(D,E){g+=D;
if(E===undefined){e+=b();
return 0
}var C=Q(E,P);
if(C){e+=b();
d(C,E);
return C.rB?0:E.length
}var F=n(P,E);
if(F){if(!(F.rE||F.eE)){g+=E
}e+=b();
do{if(P.cN){e+="</span>"
}P=P.parent
}while(P!=F.parent);
if(F.eE){e+=q(E)
}g="";
if(F.starts){d(F.starts,"")
}return F.rE?0:E.length
}if(m(E,P)){throw"Illegal"
}g+=E;
return E.length||1
}var k=x[K];
w(k);
var P=k;
var g="";
var N=0;
var i=0;
var e="";
try{var j,M,O=0;
while(true){P.t.lastIndex=O;
j=P.t.exec(l);
if(!j){break
}M=L(l.substr(O,j.index-O),j[0]);
O=j.index+M
}L(l.substr(O));
return{r:N,keyword_count:i,value:e,language:K}
}catch(f){if(f=="Illegal"){return{r:0,keyword_count:0,value:q(l)}
}else{throw f
}}}function v(a){var e={keyword_count:0,r:0,value:q(a)};
var c=e;
for(var d in x){if(!x.hasOwnProperty(d)){continue
}var b=y(d,a);
b.language=d;
if(b.keyword_count+b.r>c.keyword_count+c.r){c=b
}if(b.keyword_count+b.r>e.keyword_count+e.r){c=e;
e=b
}}if(c.language){e.second_best=c
}return e
}function t(a,b,c){if(b){a=a.replace(/^((<[^>]+>|\t)+)/gm,function(g,d,e,f){return d.replace(/\t/g,b)
})
}if(c){a=a.replace(/\n/g,"<br>")
}return a
}function p(a,g,c){var f=u(a,c);
var h=B(a);
if(h=="no-highlight"){return
}var e=h?y(h,f):v(f);
h=e.language;
var d=z(a);
if(d.length){var b=document.createElement("pre");
b.innerHTML=e.value;
e.value=s(d,z(b),f)
}e.value=t(e.value,g,c);
var i=a.className;
if(!i.match("(\\s|^)(language-)?"+h+"(\\s|$)")){i=i?(i+" "+h):h
}a.innerHTML=e.value;
a.className=i;
a.result={language:h,kw:e.keyword_count,re:e.r};
if(e.second_best){a.second_best={language:e.second_best.language,kw:e.second_best.keyword_count,re:e.second_best.r}
}}function o(){if(o.called){return
}o.called=true;
Array.prototype.map.call(document.getElementsByTagName("pre"),A).filter(Boolean).forEach(function(a){p(a,hljs.tabReplace)
})
}function r(){window.addEventListener("DOMContentLoaded",o,false);
window.addEventListener("load",o,false)
}var x={};
this.LANGUAGES=x;
this.highlight=y;
this.highlightAuto=v;
this.fixMarkup=t;
this.highlightBlock=p;
this.initHighlighting=o;
this.initHighlightingOnLoad=r;
this.IR="[a-zA-Z][a-zA-Z0-9_]*";
this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";
this.NR="\\b\\d+(\\.\\d+)?";
this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
this.BNR="\\b(0b[01]+)";
this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
this.BE={b:"\\\\[\\s\\S]",r:0};
this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};
this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};
this.CLCM={cN:"comment",b:"//",e:"$"};
this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};
this.HCM={cN:"comment",b:"#",e:"$"};
this.NM={cN:"number",b:this.NR,r:0};
this.CNM={cN:"number",b:this.CNR,r:0};
this.BNM={cN:"number",b:this.BNR,r:0};
this.inherit=function(b,a){var d={};
for(var c in b){d[c]=b[c]
}if(a){for(var c in a){d[c]=a[c]
}}return d
}
}();
hljs.LANGUAGES.bash=function(j){var l="true false";
var n="if then else elif fi for break continue while in do done echo exit return set declare";
var p={cN:"variable",b:"\\$[a-zA-Z0-9_#]+"};
var i={cN:"variable",b:"\\${([^}]|\\\\})+}"};
var k={cN:"string",b:'"',e:'"',i:"\\n",c:[j.BE,p,i],r:0};
var o={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};
var m={cN:"test_condition",b:"",e:"",c:[k,o,p,i],k:{literal:l},r:0};
return{k:{keyword:n,literal:l},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},p,i,j.HCM,k,o,j.inherit(m,{b:"\\[ ",e:" \\]",r:0}),j.inherit(m,{b:"\\[\\[ ",e:" \\]\\]"})]}
}(hljs);
hljs.LANGUAGES.erlang=function(v){var B="[a-z'][a-zA-Z0-9_']*";
var p="("+B+":"+B+"|"+B+")";
var y={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun let not of orelse|10 query receive rem try when xor",literal:"false true"};
var s={cN:"comment",b:"%",e:"$",r:0};
var z={cN:"number",b:"\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",r:0};
var x={b:"fun\\s+"+B+"/\\d+"};
var q={b:p+"\\(",e:"\\)",rB:true,r:0,c:[{cN:"function_name",b:p,r:0},{b:"\\(",e:"\\)",eW:true,rE:true,r:0}]};
var w={cN:"tuple",b:"{",e:"}",r:0};
var D={cN:"variable",b:"\\b_([A-Z][A-Za-z0-9_]*)?",r:0};
var r={cN:"variable",b:"[A-Z][a-zA-Z0-9_]*",r:0};
var C={b:"#",e:"}",i:".",r:0,rB:true,c:[{cN:"record_name",b:"#"+v.UIR,r:0},{b:"{",eW:true,r:0}]};
var t={k:y,b:"(fun|receive|if|try|case)",e:"end"};
t.c=[s,x,v.inherit(v.ASM,{cN:""}),t,q,v.QSM,z,w,D,r,C];
var u=[s,x,t,q,v.QSM,z,w,D,r,C];
q.c[1].c=u;
w.c=u;
C.c[1].c=u;
var A={cN:"params",b:"\\(",e:"\\)",c:u};
return{k:y,i:"(</|\\*=|\\+=|-=|/=|/\\*|\\*/|\\(\\*|\\*\\))",c:[{cN:"function",b:"^"+B+"\\s*\\(",e:"->",rB:true,i:"\\(|#|//|/\\*|\\\\|:",c:[A,{cN:"title",b:B}],starts:{e:";|\\.",k:y,c:u}},s,{cN:"pp",b:"^-",e:"\\.",r:0,eE:true,rB:true,l:"-"+v.IR,k:"-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior",c:[A]},z,v.QSM,C,D,r,w]}
}(hljs);
hljs.LANGUAGES.cs=function(b){return{k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},b.CLCM,b.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},b.ASM,b.QSM,b.CNM]}
}(hljs);
hljs.LANGUAGES.ruby=function(r){var v="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";
var m="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
var p={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};
var t={cN:"yardoctag",b:"@[A-Za-z]+"};
var l=[{cN:"comment",b:"#",e:"$",c:[t]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[t],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];
var s={cN:"subst",b:"#\\{",e:"}",l:v,k:p};
var n=[r.BE,s];
var u=[{cN:"string",b:"'",e:"'",c:n,r:0},{cN:"string",b:'"',e:'"',c:n,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:n},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:n},{cN:"string",b:"%[qw]?{",e:"}",c:n},{cN:"string",b:"%[qw]?<",e:">",c:n,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:n,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:n,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:n,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:n,r:10}];
var o={cN:"function",bWK:true,e:" |$|;",k:"def",c:[{cN:"title",b:m,l:v,k:p},{cN:"params",b:"\\(",e:"\\)",l:v,k:p}].concat(l)};
var q=l.concat(u.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+r.IR+"::)?"+r.IR}]}].concat(l)},o,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:u.concat([{b:m}]),r:0},{cN:"symbol",b:v+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+r.RSR+")\\s*",c:l.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[r.BE,s]}]),r:0}]));
s.c=q;
o.c[1].c=q;
return{l:v,k:p,c:q}
}(hljs);
hljs.LANGUAGES.diff=function(b){return{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}
}(hljs);
hljs.LANGUAGES.javascript=function(b){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[b.ASM,b.QSM,b.CLCM,b.CBLCLM,b.CNM,{b:"("+b.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[b.CLCM,b.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",i:"\\n",c:[{b:"\\\\/"}]},{b:"<",e:">;",sL:"xml"}],r:0},{cN:"function",bWK:true,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[b.CLCM,b.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}
}(hljs);
hljs.LANGUAGES.lua=function(f){var g="\\[=*\\[";
var h="\\]=*\\]";
var j={b:g,e:h,c:["self"]};
var i=[{cN:"comment",b:"--(?!"+g+")",e:"$"},{cN:"comment",b:"--"+g,e:h,c:[j],r:10}];
return{l:f.UIR,k:{keyword:"and break do else elseif end false for if in local nil not or repeat return then true until while",built_in:"_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"},c:i.concat([{cN:"function",bWK:true,e:"\\)",k:"function",c:[{cN:"title",b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"},{cN:"params",b:"\\(",eW:true,c:i}].concat(i)},f.CNM,f.ASM,f.QSM,{cN:"string",b:g,e:h,c:[j],r:10}])}
}(hljs);
hljs.LANGUAGES.css=function(d){var c={cN:"function",b:d.IR+"\\(",e:"\\)",c:[d.NM,d.ASM,d.QSM]};
return{cI:true,i:"[=/|']",c:[d.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:"import page media charset",c:[c,d.ASM,d.QSM,d.NM]},{cN:"tag",b:d.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[d.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[c,d.NM,d.QSM,d.ASM,d.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}
}(hljs);
hljs.LANGUAGES.xml=function(e){var f="[A-Za-z0-9\\._:-]+";
var d={eW:true,c:[{cN:"attribute",b:f,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};
return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[d],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[d],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},d]}]}
}(hljs);
hljs.LANGUAGES.lisp=function(t){var r="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*";
var q="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";
var B={cN:"literal",b:"\\b(t{1}|nil)\\b"};
var y=[{cN:"number",b:q},{cN:"number",b:"#b[0-1]+(/[0-1]+)?"},{cN:"number",b:"#o[0-7]+(/[0-7]+)?"},{cN:"number",b:"#x[0-9a-f]+(/[0-9a-f]+)?"},{cN:"number",b:"#c\\("+q+" +"+q,e:"\\)"}];
var u={cN:"string",b:'"',e:'"',c:[t.BE],r:0};
var p={cN:"comment",b:";",e:"$"};
var v={cN:"variable",b:"\\*",e:"\\*"};
var o={cN:"keyword",b:"[:&]"+r};
var A={b:"\\(",e:"\\)",c:["self",B,u].concat(y)};
var x={cN:"quoted",b:"['`]\\(",e:"\\)",c:y.concat([u,v,o,A])};
var z={cN:"quoted",b:"\\(quote ",e:"\\)",k:{title:"quote"},c:y.concat([u,v,o,A])};
var s={cN:"list",b:"\\(",e:"\\)"};
var w={cN:"body",eW:true,eE:true};
s.c=[{cN:"title",b:r},w];
w.c=[x,z,s,B].concat(y).concat([u,p,v,o]);
return{i:"[^\\s]",c:y.concat([B,u,p,x,z,s])}
}(hljs);
hljs.LANGUAGES.java=function(b){return{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},b.CLCM,b.CBLCLM,b.ASM,b.QSM,{cN:"class",bWK:true,e:"{",k:"class interface",i:":",c:[{bWK:true,k:"extends implements",r:10},{cN:"title",b:b.UIR}]},b.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}
}(hljs);
hljs.LANGUAGES.php=function(g){var h={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};
var f=[g.inherit(g.ASM,{i:null}),g.inherit(g.QSM,{i:null}),{cN:"string",b:'b"',e:'"',c:[g.BE]},{cN:"string",b:"b'",e:"'",c:[g.BE]}];
var j=[g.BNM,g.CNM];
var i={cN:"title",b:g.UIR};
return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",c:[g.CLCM,g.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"}]},{cN:"comment",eB:true,b:"__halt_compiler.+?;",eW:true},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[g.BE]},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"},h,{cN:"function",bWK:true,e:"{",k:"function",i:"\\$|\\[|%",c:[i,{cN:"params",b:"\\(",e:"\\)",c:["self",h,g.CBLCLM].concat(f).concat(j)}]},{cN:"class",bWK:true,e:"{",k:"class",i:"[:\\(\\$]",c:[{bWK:true,eW:true,k:"extends",c:[i]},i]},{b:"=>"}].concat(f).concat(j)}
}(hljs);
hljs.LANGUAGES.haskell=function(f){var g={cN:"type",b:"\\b[A-Z][\\w']*",r:0};
var h={cN:"container",b:"\\(",e:"\\)",c:[{cN:"type",b:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},{cN:"title",b:"[_a-z][\\w']*"}]};
var e={cN:"container",b:"{",e:"}",c:h.c};
return{k:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance not as foreign ccall safe unsafe",c:[{cN:"comment",b:"--",e:"$"},{cN:"preprocessor",b:"{-#",e:"#-}"},{cN:"comment",c:["self"],b:"{-",e:"-}"},{cN:"string",b:"\\s+'",e:"'",c:[f.BE],r:0},f.QSM,{cN:"import",b:"\\bimport",e:"$",k:"import qualified as hiding",c:[h],i:"\\W\\.|;"},{cN:"module",b:"\\bmodule",e:"where",k:"module where",c:[h],i:"\\W\\.|;"},{cN:"class",b:"\\b(class|instance)",e:"where",k:"class where instance",c:[g]},{cN:"typedef",b:"\\b(data|(new)?type)",e:"$",k:"data type newtype deriving",c:[g,h,e]},f.CNM,{cN:"shebang",b:"#!\\/usr\\/bin\\/env runhaskell",e:"$"},g,{cN:"title",b:"^[_a-z][\\w']*"}]}
}(hljs);
hljs.LANGUAGES.python=function(h){var i={cN:"prompt",b:"^(>>>|\\.\\.\\.) "};
var l=[{cN:"string",b:"(u|b)?r?'''",e:"'''",c:[i],r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',c:[i],r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[h.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[h.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[h.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[h.BE]}].concat([h.ASM,h.QSM]);
var j={cN:"title",b:h.UIR};
var k={cN:"params",b:"\\(",e:"\\)",c:["self",h.CNM,i].concat(l)};
var g={bWK:true,e:":",i:"[${=;\\n]",c:[j,k],r:10};
return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:l.concat([i,h.HCM,h.inherit(g,{cN:"function",k:"def"}),h.inherit(g,{cN:"class",k:"class"}),h.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}
}(hljs);
hljs.LANGUAGES.tex=function(f){var g={cN:"command",b:"\\\\[a-zA-Zа-яА-я]+[\\*]?"};
var h={cN:"command",b:"\\\\[^a-zA-Zа-яА-я0-9]"};
var e={cN:"special",b:"[{}\\[\\]\\&#~]",r:0};
return{c:[{b:"\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",rB:true,c:[g,h,{cN:"number",b:" *=",e:"-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",eB:true}],r:10},g,h,e,{cN:"formula",b:"\\$\\$",e:"\\$\\$",c:[g,h,e],r:0},{cN:"formula",b:"\\$",e:"\\$",c:[g,h,e],r:0},{cN:"comment",b:"%",e:"$",r:0}]}
}(hljs);
hljs.LANGUAGES.sql=function(b){return{cI:true,c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[b.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[b.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[b.BE]},b.CNM]},b.CBLCLM,{cN:"comment",b:"--",e:"$"}]}
}(hljs);
hljs.LANGUAGES.vala=function(b){return{k:{keyword:"char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",built_in:"DBus GLib CCode Gee Object",literal:"false true null"},c:[{cN:"class",bWK:true,e:"{",k:"class interface delegate namespace",c:[{bWK:true,k:"extends implements"},{cN:"title",b:b.UIR}]},b.CLCM,b.CBLCLM,{cN:"string",b:'"""',e:'"""',r:5},b.ASM,b.QSM,b.CNM,{cN:"preprocessor",b:"^#",e:"$",r:2},{cN:"constant",b:" [A-Z_]+ ",r:0}]}
}(hljs);
hljs.LANGUAGES.ini=function(b){return{cI:true,i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[b.QSM,b.NM]}]}]}
}(hljs);
hljs.LANGUAGES.perl=function(n){var r="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
var o={cN:"subst",b:"[$@]\\{",e:"\\}",k:r,r:10};
var q={cN:"variable",b:"\\$\\d"};
var j={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};
var m=[n.BE,o,q,j];
var k={b:"->",c:[{b:n.IR},{b:"{",e:"}"}]};
var l={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};
var p=[q,j,n.HCM,l,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},k,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:m,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:m,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:m,r:5},{cN:"string",b:"'",e:"'",c:[n.BE],r:0},{cN:"string",b:'"',e:'"',c:m,r:0},{cN:"string",b:"`",e:"`",c:[n.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+n.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[n.HCM,l,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[n.BE],r:0}]},{cN:"sub",bWK:true,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];
o.c=p;
k.c[1].c=p;
return{k:r,c:p}
}(hljs);
hljs.LANGUAGES.scala=function(e){var f={cN:"annotation",b:"@[A-Za-z]+"};
var d={cN:"string",b:'u?r?"""',e:'"""',r:10};
return{k:"type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},e.CLCM,e.CBLCLM,e.ASM,e.QSM,d,{cN:"class",b:"((case )?class |object |trait )",e:"({|$)",i:":",k:"case class trait object",c:[{bWK:true,k:"extends with",r:10},{cN:"title",b:e.UIR},{cN:"params",b:"\\(",e:"\\)",c:[e.ASM,e.QSM,d,f]}]},e.CNM,f]}
}(hljs);
hljs.LANGUAGES.cmake=function(b){return{cI:true,k:"add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file",c:[{cN:"envvar",b:"\\${",e:"}"},b.HCM,b.QSM,b.NM]}
}(hljs);
hljs.LANGUAGES.objectivec=function(d){var c={keyword:"int float while private char catch export sizeof typedef const struct for union unsigned long volatile static protected bool mutable if public do return goto void enum else break extern class asm case short default double throw register explicit signed typename try this switch continue wchar_t inline readonly assign property protocol self synchronized end synthesize id optional required implementation nonatomic interface super unichar finally dynamic IBOutlet IBAction selector strong weak readonly",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection class UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};
return{k:c,i:"</",c:[d.CLCM,d.CBLCLM,d.CNM,d.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",bWK:true,e:"({|$)",k:"interface class protocol implementation",c:[{cN:"id",b:d.UIR}]},{cN:"variable",b:"\\."+d.UIR}]}
}(hljs);
hljs.LANGUAGES.coffeescript=function(j){var f={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off ",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf"};
var g="[A-Za-z$_][0-9A-Za-z$_]*";
var h={cN:"title",b:g};
var i={cN:"subst",b:"#\\{",e:"}",k:f,c:[j.BNM,j.CNM]};
return{k:f,c:[j.BNM,j.CNM,j.ASM,{cN:"string",b:'"""',e:'"""',c:[j.BE,i]},{cN:"string",b:'"',e:'"',c:[j.BE,i],r:0},{cN:"comment",b:"###",e:"###"},j.HCM,{cN:"regexp",b:"///",e:"///",c:[j.HCM]},{cN:"regexp",b:"//[gim]*"},{cN:"regexp",b:"/\\S(\\\\.|[^\\n])*/[gim]*"},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"},{cN:"function",b:g+"\\s*=\\s*(\\(.+\\))?\\s*[-=]>",rB:true,c:[h,{cN:"params",b:"\\(",e:"\\)"}]},{cN:"class",bWK:true,k:"class",e:"$",i:":",c:[{bWK:true,k:"extends",eW:true,i:":",c:[h]},h]},{cN:"property",b:"@"+g}]}
}(hljs);
hljs.LANGUAGES.nginx=function(d){var f=[{cN:"variable",b:"\\$\\d+"},{cN:"variable",b:"\\${",e:"}"},{cN:"variable",b:"[\\$\\@]"+d.UIR}];
var e={eW:true,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[d.HCM,{cN:"string",b:'"',e:'"',c:[d.BE].concat(f),r:0},{cN:"string",b:"'",e:"'",c:[d.BE].concat(f),r:0},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:true,eE:true},{cN:"regexp",b:"\\s\\^",e:"\\s|{|;",rE:true,c:[d.BE].concat(f)},{cN:"regexp",b:"~\\*?\\s+",e:"\\s|{|;",rE:true,c:[d.BE].concat(f)},{cN:"regexp",b:"\\*(\\.[a-z\\-]+)+",c:[d.BE].concat(f)},{cN:"regexp",b:"([a-z\\-]+\\.)+\\*",c:[d.BE].concat(f)},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0}].concat(f)};
return{c:[d.HCM,{b:d.UIR+"\\s",e:";|{",rB:true,c:[{cN:"title",b:d.UIR,starts:e}]}],i:"[^\\s\\}]"}
}(hljs);
hljs.LANGUAGES.django=function(l){function j(a,b){return(b==undefined||(!a.cN&&b.cN=="tag")||a.cN=="value")
}function i(b,c){var f={};
for(var d in b){if(d!="contains"){f[d]=b[d]
}var a=[];
for(var e=0;
b.c&&e<b.c.length;
e++){a.push(i(b.c[e],b))
}if(j(b,c)){a=g.concat(a)
}if(a.length){f.c=a
}}return f
}var k={cN:"filter",b:"\\|[A-Za-z]+\\:?",eE:true,k:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",c:[{cN:"argument",b:'"',e:'"'}]};
var g=[{cN:"template_comment",b:"{%\\s*comment\\s*%}",e:"{%\\s*endcomment\\s*%}"},{cN:"template_comment",b:"{#",e:"#}"},{cN:"template_tag",b:"{%",e:"%}",k:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone",c:[k]},{cN:"variable",b:"{{",e:"}}",c:[k]}];
var h=i(l.LANGUAGES.xml);
h.cI=true;
return h
}(hljs);
hljs.LANGUAGES.delphi=function(i){var m="and safecall cdecl then string exports library not pascal set virtual file in array label packed end. index while const raise for to implementation with except overload destructor downto finally program exit unit inherited override if type until function do begin repeat goto nil far initialization object else var uses external resourcestring interface end finalization class asm mod case on shr shl of register xorwrite threadvar try record near stored constructor stdcall inline div out or procedure";
var n="safecall stdcall pascal stored const implementation finalization except to finally program inherited override then exports string read not mod shr try div shl set library message packed index for near overload label downto exit public goto interface asm on of constructor or private array unit raise destructor var type until function else external with case default record while protected property procedure published and cdecl do threadvar file in if end virtual write far out begin repeat nil initialization object uses resourcestring class register xorwrite inline static";
var j={cN:"comment",b:"{",e:"}",r:0};
var l={cN:"comment",b:"\\(\\*",e:"\\*\\)",r:10};
var p={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};
var o={cN:"string",b:"(#\\d+)+"};
var k={cN:"function",bWK:true,e:"[:;]",k:"function constructor|10 destructor|10 procedure|10",c:[{cN:"title",b:i.IR},{cN:"params",b:"\\(",e:"\\)",k:m,c:[p,o]},j,l]};
return{cI:true,k:m,i:'("|\\$[G-Zg-z]|\\/\\*|</)',c:[j,l,i.CLCM,p,o,i.NM,k,{cN:"class",b:"=\\bclass\\b",e:"end;",k:n,c:[p,o,j,l,i.CLCM,k]}]}
}(hljs);
hljs.LANGUAGES.apache=function(d){var c={cN:"number",b:"[\\$%]\\d+"};
return{cI:true,k:{keyword:"acceptfilter acceptmutex acceptpathinfo accessfilename action addalt addaltbyencoding addaltbytype addcharset adddefaultcharset adddescription addencoding addhandler addicon addiconbyencoding addiconbytype addinputfilter addlanguage addmoduleinfo addoutputfilter addoutputfilterbytype addtype alias aliasmatch allow allowconnect allowencodedslashes allowoverride anonymous anonymous_logemail anonymous_mustgiveemail anonymous_nouserid anonymous_verifyemail authbasicauthoritative authbasicprovider authdbduserpwquery authdbduserrealmquery authdbmgroupfile authdbmtype authdbmuserfile authdefaultauthoritative authdigestalgorithm authdigestdomain authdigestnccheck authdigestnonceformat authdigestnoncelifetime authdigestprovider authdigestqop authdigestshmemsize authgroupfile authldapbinddn authldapbindpassword authldapcharsetconfig authldapcomparednonserver authldapdereferencealiases authldapgroupattribute authldapgroupattributeisdn authldapremoteuserattribute authldapremoteuserisdn authldapurl authname authnprovideralias authtype authuserfile authzdbmauthoritative authzdbmtype authzdefaultauthoritative authzgroupfileauthoritative authzldapauthoritative authzownerauthoritative authzuserauthoritative balancermember browsermatch browsermatchnocase bufferedlogs cachedefaultexpire cachedirlength cachedirlevels cachedisable cacheenable cachefile cacheignorecachecontrol cacheignoreheaders cacheignorenolastmod cacheignorequerystring cachelastmodifiedfactor cachemaxexpire cachemaxfilesize cacheminfilesize cachenegotiateddocs cacheroot cachestorenostore cachestoreprivate cgimapextension charsetdefault charsetoptions charsetsourceenc checkcaseonly checkspelling chrootdir contentdigest cookiedomain cookieexpires cookielog cookiename cookiestyle cookietracking coredumpdirectory customlog dav davdepthinfinity davgenericlockdb davlockdb davmintimeout dbdexptime dbdkeep dbdmax dbdmin dbdparams dbdpersist dbdpreparesql dbdriver defaulticon defaultlanguage defaulttype deflatebuffersize deflatecompressionlevel deflatefilternote deflatememlevel deflatewindowsize deny directoryindex directorymatch directoryslash documentroot dumpioinput dumpiologlevel dumpiooutput enableexceptionhook enablemmap enablesendfile errordocument errorlog example expiresactive expiresbytype expiresdefault extendedstatus extfilterdefine extfilteroptions fileetag filterchain filterdeclare filterprotocol filterprovider filtertrace forcelanguagepriority forcetype forensiclog gracefulshutdowntimeout group header headername hostnamelookups identitycheck identitychecktimeout imapbase imapdefault imapmenu include indexheadinsert indexignore indexoptions indexorderdefault indexstylesheet isapiappendlogtoerrors isapiappendlogtoquery isapicachefile isapifakeasync isapilognotsupported isapireadaheadbuffer keepalive keepalivetimeout languagepriority ldapcacheentries ldapcachettl ldapconnectiontimeout ldapopcacheentries ldapopcachettl ldapsharedcachefile ldapsharedcachesize ldaptrustedclientcert ldaptrustedglobalcert ldaptrustedmode ldapverifyservercert limitinternalrecursion limitrequestbody limitrequestfields limitrequestfieldsize limitrequestline limitxmlrequestbody listen listenbacklog loadfile loadmodule lockfile logformat loglevel maxclients maxkeepaliverequests maxmemfree maxrequestsperchild maxrequestsperthread maxspareservers maxsparethreads maxthreads mcachemaxobjectcount mcachemaxobjectsize mcachemaxstreamingbuffer mcacheminobjectsize mcacheremovalalgorithm mcachesize metadir metafiles metasuffix mimemagicfile minspareservers minsparethreads mmapfile mod_gzip_on mod_gzip_add_header_count mod_gzip_keep_workfiles mod_gzip_dechunk mod_gzip_min_http mod_gzip_minimum_file_size mod_gzip_maximum_file_size mod_gzip_maximum_inmem_size mod_gzip_temp_dir mod_gzip_item_include mod_gzip_item_exclude mod_gzip_command_version mod_gzip_can_negotiate mod_gzip_handle_methods mod_gzip_static_suffix mod_gzip_send_vary mod_gzip_update_static modmimeusepathinfo multiviewsmatch namevirtualhost noproxy nwssltrustedcerts nwsslupgradeable options order passenv pidfile protocolecho proxybadheader proxyblock proxydomain proxyerroroverride proxyftpdircharset proxyiobuffersize proxymaxforwards proxypass proxypassinterpolateenv proxypassmatch proxypassreverse proxypassreversecookiedomain proxypassreversecookiepath proxypreservehost proxyreceivebuffersize proxyremote proxyremotematch proxyrequests proxyset proxystatus proxytimeout proxyvia readmename receivebuffersize redirect redirectmatch redirectpermanent redirecttemp removecharset removeencoding removehandler removeinputfilter removelanguage removeoutputfilter removetype requestheader require rewritebase rewritecond rewriteengine rewritelock rewritelog rewriteloglevel rewritemap rewriteoptions rewriterule rlimitcpu rlimitmem rlimitnproc satisfy scoreboardfile script scriptalias scriptaliasmatch scriptinterpretersource scriptlog scriptlogbuffer scriptloglength scriptsock securelisten seerequesttail sendbuffersize serveradmin serveralias serverlimit servername serverpath serverroot serversignature servertokens setenv setenvif setenvifnocase sethandler setinputfilter setoutputfilter ssienableaccess ssiendtag ssierrormsg ssistarttag ssitimeformat ssiundefinedecho sslcacertificatefile sslcacertificatepath sslcadnrequestfile sslcadnrequestpath sslcarevocationfile sslcarevocationpath sslcertificatechainfile sslcertificatefile sslcertificatekeyfile sslciphersuite sslcryptodevice sslengine sslhonorciperorder sslmutex ssloptions sslpassphrasedialog sslprotocol sslproxycacertificatefile sslproxycacertificatepath sslproxycarevocationfile sslproxycarevocationpath sslproxyciphersuite sslproxyengine sslproxymachinecertificatefile sslproxymachinecertificatepath sslproxyprotocol sslproxyverify sslproxyverifydepth sslrandomseed sslrequire sslrequiressl sslsessioncache sslsessioncachetimeout sslusername sslverifyclient sslverifydepth startservers startthreads substitute suexecusergroup threadlimit threadsperchild threadstacksize timeout traceenable transferlog typesconfig unsetenv usecanonicalname usecanonicalphysicalport user userdir virtualdocumentroot virtualdocumentrootip virtualscriptalias virtualscriptaliasip win32disableacceptex xbithack",literal:"on off"},c:[d.HCM,{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",c]},c,{cN:"tag",b:"</?",e:">"},d.QSM]}
}(hljs);
hljs.LANGUAGES.cpp=function(d){var c={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};
return{k:c,i:"</",c:[d.CLCM,d.CBLCLM,d.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},d.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:c,r:10,c:["self"]}]}
}(hljs);
hljs.LANGUAGES.go=function(d){var c={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",constant:"true false iota nil",typename:"bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};
return{k:c,i:"</",c:[d.CLCM,d.CBLCLM,d.QSM,{cN:"string",b:"'",e:"[^\\\\]'",r:0},{cN:"string",b:"`",e:"`"},{cN:"number",b:"[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",r:0},d.CNM]}
}(hljs);