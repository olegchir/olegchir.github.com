/*!
 * jQuery Form Plugin
 * version: 3.35.0-2013.05.23
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
(function(f){var c={};
c.fileapi=f("<input type='file'/>").get(0).files!==undefined;
c.formdata=window.FormData!==undefined;
var e=!!f.fn.prop;
f.fn.attr2=function(){if(!e){return this.attr.apply(this,arguments)
}var g=this.prop.apply(this,arguments);
if((g&&g.jquery)||typeof g==="string"){return g
}return this.attr.apply(this,arguments)
};
f.fn.ajaxSubmit=function(j){if(!this.length){d("ajaxSubmit: skipping submit process - no element selected");
return this
}var i,C,m,o=this;
if(typeof j=="function"){j={success:j}
}i=j.type||this.attr2("method");
C=j.url||this.attr2("action");
m=(typeof C==="string")?f.trim(C):"";
m=m||window.location.href||"";
if(m){m=(m.match(/^([^#]+)/)||[])[1]
}j=f.extend(true,{url:m,success:f.ajaxSettings.success,type:i||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},j);
var u={};
this.trigger("form-pre-serialize",[this,j,u]);
if(u.veto){d("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
return this
}if(j.beforeSerialize&&j.beforeSerialize(this,j)===false){d("ajaxSubmit: submit aborted via beforeSerialize callback");
return this
}var n=j.traditional;
if(n===undefined){n=f.ajaxSettings.traditional
}var s=[];
var E,F=this.formToArray(j.semantic,s);
if(j.data){j.extraData=j.data;
E=f.param(j.data,n)
}if(j.beforeSubmit&&j.beforeSubmit(F,this,j)===false){d("ajaxSubmit: submit aborted via beforeSubmit callback");
return this
}this.trigger("form-submit-validate",[F,this,j,u]);
if(u.veto){d("ajaxSubmit: submit vetoed via form-submit-validate trigger");
return this
}var y=f.param(F,n);
if(E){y=(y?(y+"&"+E):E)
}if(j.type.toUpperCase()=="GET"){j.url+=(j.url.indexOf("?")>=0?"&":"?")+y;
j.data=null
}else{j.data=y
}var H=[];
if(j.resetForm){H.push(function(){o.resetForm()
})
}if(j.clearForm){H.push(function(){o.clearForm(j.includeHidden)
})
}if(!j.dataType&&j.target){var l=j.success||function(){};
H.push(function(q){var k=j.replaceTarget?"replaceWith":"html";
f(j.target)[k](q).each(l,arguments)
})
}else{if(j.success){H.push(j.success)
}}j.success=function(K,q,L){var J=j.context||this;
for(var I=0,k=H.length;
I<k;
I++){H[I].apply(J,[K,q,L||o,o])
}};
if(j.error){var z=j.error;
j.error=function(J,k,q){var I=j.context||this;
z.apply(I,[J,k,q,o])
}
}if(j.complete){var h=j.complete;
j.complete=function(I,k){var q=j.context||this;
h.apply(q,[I,k,o])
}
}var D=f('input[type=file]:enabled[value!=""]',this);
var p=D.length>0;
var B="multipart/form-data";
var x=(o.attr("enctype")==B||o.attr("encoding")==B);
var w=c.fileapi&&c.formdata;
d("fileAPI :"+w);
var r=(p||x)&&!w;
var v;
if(j.iframe!==false&&(j.iframe||r)){if(j.closeKeepAlive){f.get(j.closeKeepAlive,function(){v=G(F)
})
}else{v=G(F)
}}else{if((p||x)&&w){v=t(F)
}else{v=f.ajax(j)
}}o.removeData("jqxhr").data("jqxhr",v);
for(var A=0;
A<s.length;
A++){s[A]=null
}this.trigger("form-submit-notify",[this,j]);
return this;
function g(K){var L=f.param(K,j.traditional).split("&");
var q=L.length;
var k=[];
var J,I;
for(J=0;
J<q;
J++){L[J]=L[J].replace(/\+/g," ");
I=L[J].split("=");
k.push([decodeURIComponent(I[0]),decodeURIComponent(I[1])])
}return k
}function t(q){var k=new FormData();
for(var I=0;
I<q.length;
I++){k.append(q[I].name,q[I].value)
}if(j.extraData){var L=g(j.extraData);
for(I=0;
I<L.length;
I++){if(L[I]){k.append(L[I][0],L[I][1])
}}}j.data=null;
var K=f.extend(true,{},f.ajaxSettings,j,{contentType:false,processData:false,cache:false,type:i||"POST"});
if(j.uploadProgress){K.xhr=function(){var M=jQuery.ajaxSettings.xhr();
if(M.upload){M.upload.addEventListener("progress",function(Q){var P=0;
var N=Q.loaded||Q.position;
var O=Q.total;
if(Q.lengthComputable){P=Math.ceil(N/O*100)
}j.uploadProgress(Q,N,O,P)
},false)
}return M
}
}K.data=null;
var J=K.beforeSend;
K.beforeSend=function(N,M){M.data=k;
if(J){J.call(this,N,M)
}};
return f.ajax(K)
}function G(af){var L=o[0],K,ab,V,ad,Y,N,Q,O,P,Z,ac,T;
var ai=f.Deferred();
if(af){for(ab=0;
ab<s.length;
ab++){K=f(s[ab]);
if(e){K.prop("disabled",false)
}else{K.removeAttr("disabled")
}}}V=f.extend(true,{},f.ajaxSettings,j);
V.context=V.context||V;
Y="jqFormIO"+(new Date().getTime());
if(V.iframeTarget){N=f(V.iframeTarget);
Z=N.attr2("name");
if(!Z){N.attr2("name",Y)
}else{Y=Z
}}else{N=f('<iframe name="'+Y+'" src="'+V.iframeSrc+'" />');
N.css({position:"absolute",top:"-1000px",left:"-1000px"})
}Q=N[0];
O={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(aj){var ak=(aj==="timeout"?"timeout":"aborted");
d("aborting upload... "+ak);
this.aborted=1;
try{if(Q.contentWindow.document.execCommand){Q.contentWindow.document.execCommand("Stop")
}}catch(al){}N.attr("src",V.iframeSrc);
O.error=ak;
if(V.error){V.error.call(V.context,O,ak,aj)
}if(ad){f.event.trigger("ajaxError",[O,V,ak])
}if(V.complete){V.complete.call(V.context,O,ak)
}}};
ad=V.global;
if(ad&&0===f.active++){f.event.trigger("ajaxStart")
}if(ad){f.event.trigger("ajaxSend",[O,V])
}if(V.beforeSend&&V.beforeSend.call(V.context,O,V)===false){if(V.global){f.active--
}ai.reject();
return ai
}if(O.aborted){ai.reject();
return ai
}P=L.clk;
if(P){Z=P.name;
if(Z&&!P.disabled){V.extraData=V.extraData||{};
V.extraData[Z]=P.value;
if(P.type=="image"){V.extraData[Z+".x"]=L.clk_x;
V.extraData[Z+".y"]=L.clk_y
}}}var U=1;
var R=2;
function S(al){var ak=null;
try{if(al.contentWindow){ak=al.contentWindow.document
}}catch(aj){d("cannot get iframe.contentWindow document: "+aj)
}if(ak){return ak
}try{ak=al.contentDocument?al.contentDocument:al.document
}catch(aj){d("cannot get iframe.contentDocument: "+aj);
ak=al.document
}return ak
}var J=f("meta[name=csrf-token]").attr("content");
var I=f("meta[name=csrf-param]").attr("content");
if(I&&J){V.extraData=V.extraData||{};
V.extraData[I]=J
}function aa(){var al=o.attr2("target"),aj=o.attr2("action");
L.setAttribute("target",Y);
if(!i){L.setAttribute("method","POST")
}if(aj!=V.url){L.setAttribute("action",V.url)
}if(!V.skipEncodingOverride&&(!i||/post/i.test(i))){o.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})
}if(V.timeout){T=setTimeout(function(){ac=true;
X(U)
},V.timeout)
}function am(){try{var aq=S(Q).readyState;
d("state = "+aq);
if(aq&&aq.toLowerCase()=="uninitialized"){setTimeout(am,50)
}}catch(ar){d("Server abort: ",ar," (",ar.name,")");
X(R);
if(T){clearTimeout(T)
}T=undefined
}}var ak=[];
try{if(V.extraData){for(var ap in V.extraData){if(V.extraData.hasOwnProperty(ap)){if(f.isPlainObject(V.extraData[ap])&&V.extraData[ap].hasOwnProperty("name")&&V.extraData[ap].hasOwnProperty("value")){ak.push(f('<input type="hidden" name="'+V.extraData[ap].name+'">').val(V.extraData[ap].value).appendTo(L)[0])
}else{ak.push(f('<input type="hidden" name="'+ap+'">').val(V.extraData[ap]).appendTo(L)[0])
}}}}if(!V.iframeTarget){N.appendTo("body");
if(Q.attachEvent){Q.attachEvent("onload",X)
}else{Q.addEventListener("load",X,false)
}}setTimeout(am,15);
try{L.submit()
}catch(an){var ao=document.createElement("form").submit;
ao.apply(L)
}}finally{L.setAttribute("action",aj);
if(al){L.setAttribute("target",al)
}else{o.removeAttr("target")
}f(ak).remove()
}}if(V.forceSync){aa()
}else{setTimeout(aa,10)
}var ag,ah,ae=50,M;
function X(ap){if(O.aborted||M){return
}ah=S(Q);
if(!ah){d("cannot access response document");
ap=R
}if(ap===U&&O){O.abort("timeout");
ai.reject(O,"timeout");
return
}else{if(ap==R&&O){O.abort("server abort");
ai.reject(O,"error","server abort");
return
}}if(!ah||ah.location.href==V.iframeSrc){if(!ac){return
}}if(Q.detachEvent){Q.detachEvent("onload",X)
}else{Q.removeEventListener("load",X,false)
}var an="success",ar;
try{if(ac){throw"timeout"
}var am=V.dataType=="xml"||ah.XMLDocument||f.isXMLDoc(ah);
d("isXml="+am);
if(!am&&window.opera&&(ah.body===null||!ah.body.innerHTML)){if(--ae){d("requeing onLoad callback, DOM not available");
setTimeout(X,250);
return
}}var at=ah.body?ah.body:ah.documentElement;
O.responseText=at?at.innerHTML:null;
O.responseXML=ah.XMLDocument?ah.XMLDocument:ah;
if(am){V.dataType="xml"
}O.getResponseHeader=function(aw){var av={"content-type":V.dataType};
return av[aw]
};
if(at){O.status=Number(at.getAttribute("status"))||O.status;
O.statusText=at.getAttribute("statusText")||O.statusText
}var aj=(V.dataType||"").toLowerCase();
var aq=/(json|script|text)/.test(aj);
if(aq||V.textarea){var ao=ah.getElementsByTagName("textarea")[0];
if(ao){O.responseText=ao.value;
O.status=Number(ao.getAttribute("status"))||O.status;
O.statusText=ao.getAttribute("statusText")||O.statusText
}else{if(aq){var ak=ah.getElementsByTagName("pre")[0];
var au=ah.getElementsByTagName("body")[0];
if(ak){O.responseText=ak.textContent?ak.textContent:ak.innerText
}else{if(au){O.responseText=au.textContent?au.textContent:au.innerText
}}}}}else{if(aj=="xml"&&!O.responseXML&&O.responseText){O.responseXML=W(O.responseText)
}}try{ag=k(O,aj,V)
}catch(al){an="parsererror";
O.error=ar=(al||an)
}}catch(al){d("error caught: ",al);
an="error";
O.error=ar=(al||an)
}if(O.aborted){d("upload aborted");
an=null
}if(O.status){an=(O.status>=200&&O.status<300||O.status===304)?"success":"error"
}if(an==="success"){if(V.success){V.success.call(V.context,ag,"success",O)
}ai.resolve(O.responseText,"success",O);
if(ad){f.event.trigger("ajaxSuccess",[O,V])
}}else{if(an){if(ar===undefined){ar=O.statusText
}if(V.error){V.error.call(V.context,O,an,ar)
}ai.reject(O,"error",ar);
if(ad){f.event.trigger("ajaxError",[O,V,ar])
}}}if(ad){f.event.trigger("ajaxComplete",[O,V])
}if(ad&&!--f.active){f.event.trigger("ajaxStop")
}if(V.complete){V.complete.call(V.context,O,an)
}M=true;
if(V.timeout){clearTimeout(T)
}setTimeout(function(){if(!V.iframeTarget){N.remove()
}O.responseXML=null
},100)
}var W=f.parseXML||function(aj,ak){if(window.ActiveXObject){ak=new ActiveXObject("Microsoft.XMLDOM");
ak.async="false";
ak.loadXML(aj)
}else{ak=(new DOMParser()).parseFromString(aj,"text/xml")
}return(ak&&ak.documentElement&&ak.documentElement.nodeName!="parsererror")?ak:null
};
var q=f.parseJSON||function(aj){return window["eval"]("("+aj+")")
};
var k=function(ao,am,al){var ak=ao.getResponseHeader("content-type")||"",aj=am==="xml"||!am&&ak.indexOf("xml")>=0,an=aj?ao.responseXML:ao.responseText;
if(aj&&an.documentElement.nodeName==="parsererror"){if(f.error){f.error("parsererror")
}}if(al&&al.dataFilter){an=al.dataFilter(an,am)
}if(typeof an==="string"){if(am==="json"||!am&&ak.indexOf("json")>=0){an=q(an)
}else{if(am==="script"||!am&&ak.indexOf("javascript")>=0){f.globalEval(an)
}}}return an
};
return ai
}};
f.fn.ajaxForm=function(g){g=g||{};
g.delegation=g.delegation&&f.isFunction(f.fn.on);
if(!g.delegation&&this.length===0){var h={s:this.selector,c:this.context};
if(!f.isReady&&h.s){d("DOM not ready, queuing ajaxForm");
f(function(){f(h.s,h.c).ajaxForm(g)
});
return this
}d("terminating; zero elements found by selector"+(f.isReady?"":" (DOM not ready)"));
return this
}if(g.delegation){f(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,a).on("submit.form-plugin",this.selector,g,b).on("click.form-plugin",this.selector,g,a);
return this
}return this.ajaxFormUnbind().bind("submit.form-plugin",g,b).bind("click.form-plugin",g,a)
};
function b(h){var g=h.data;
if(!h.isDefaultPrevented()){h.preventDefault();
f(this).ajaxSubmit(g)
}}function a(k){var j=k.target;
var h=f(j);
if(!(h.is("[type=submit],[type=image]"))){var g=h.closest("[type=submit]");
if(g.length===0){return
}j=g[0]
}var i=this;
i.clk=j;
if(j.type=="image"){if(k.offsetX!==undefined){i.clk_x=k.offsetX;
i.clk_y=k.offsetY
}else{if(typeof f.fn.offset=="function"){var l=h.offset();
i.clk_x=k.pageX-l.left;
i.clk_y=k.pageY-l.top
}else{i.clk_x=k.pageX-j.offsetLeft;
i.clk_y=k.pageY-j.offsetTop
}}}setTimeout(function(){i.clk=i.clk_x=i.clk_y=null
},100)
}f.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")
};
f.fn.formToArray=function(x,g){var w=[];
if(this.length===0){return w
}var l=this[0];
var p=x?l.getElementsByTagName("*"):l.elements;
if(!p){return w
}var r,q,o,y,m,t,k;
for(r=0,t=p.length;
r<t;
r++){m=p[r];
o=m.name;
if(!o||m.disabled){continue
}if(x&&l.clk&&m.type=="image"){if(l.clk==m){w.push({name:o,value:f(m).val(),type:m.type});
w.push({name:o+".x",value:l.clk_x},{name:o+".y",value:l.clk_y})
}continue
}y=f.fieldValue(m,true);
if(y&&y.constructor==Array){if(g){g.push(m)
}for(q=0,k=y.length;
q<k;
q++){w.push({name:o,value:y[q]})
}}else{if(c.fileapi&&m.type=="file"){if(g){g.push(m)
}var h=m.files;
if(h.length){for(q=0;
q<h.length;
q++){w.push({name:o,value:h[q],type:m.type})
}}else{w.push({name:o,value:"",type:m.type})
}}else{if(y!==null&&typeof y!="undefined"){if(g){g.push(m)
}w.push({name:o,value:y,type:m.type,required:m.required})
}}}}if(!x&&l.clk){var s=f(l.clk),u=s[0];
o=u.name;
if(o&&!u.disabled&&u.type=="image"){w.push({name:o,value:s.val()});
w.push({name:o+".x",value:l.clk_x},{name:o+".y",value:l.clk_y})
}}return w
};
f.fn.formSerialize=function(g){return f.param(this.formToArray(g))
};
f.fn.fieldSerialize=function(h){var g=[];
this.each(function(){var m=this.name;
if(!m){return
}var k=f.fieldValue(this,h);
if(k&&k.constructor==Array){for(var l=0,j=k.length;
l<j;
l++){g.push({name:m,value:k[l]})
}}else{if(k!==null&&typeof k!="undefined"){g.push({name:this.name,value:k})
}}});
return f.param(g)
};
f.fn.fieldValue=function(m){for(var l=[],j=0,g=this.length;
j<g;
j++){var k=this[j];
var h=f.fieldValue(k,m);
if(h===null||typeof h=="undefined"||(h.constructor==Array&&!h.length)){continue
}if(h.constructor==Array){f.merge(l,h)
}else{l.push(h)
}}return l
};
f.fieldValue=function(g,o){var j=g.name,u=g.type,w=g.tagName.toLowerCase();
if(o===undefined){o=true
}if(o&&(!j||g.disabled||u=="reset"||u=="button"||(u=="checkbox"||u=="radio")&&!g.checked||(u=="submit"||u=="image")&&g.form&&g.form.clk!=g||w=="select"&&g.selectedIndex==-1)){return null
}if(w=="select"){var p=g.selectedIndex;
if(p<0){return null
}var r=[],h=g.options;
var l=(u=="select-one");
var q=(l?p+1:h.length);
for(var k=(l?p:0);
k<q;
k++){var m=h[k];
if(m.selected){var s=m.value;
if(!s){s=(m.attributes&&m.attributes.value&&!(m.attributes.value.specified))?m.text:m.value
}if(l){return s
}r.push(s)
}}return r
}return f(g).val()
};
f.fn.clearForm=function(g){return this.each(function(){f("input,select,textarea",this).clearFields(g)
})
};
f.fn.clearFields=f.fn.clearInputs=function(g){var h=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){var j=this.type,i=this.tagName.toLowerCase();
if(h.test(j)||i=="textarea"){this.value=""
}else{if(j=="checkbox"||j=="radio"){this.checked=false
}else{if(i=="select"){this.selectedIndex=-1
}else{if(j=="file"){if(/MSIE/.test(navigator.userAgent)){f(this).replaceWith(f(this).clone(true))
}else{f(this).val("")
}}else{if(g){if((g===true&&/hidden/.test(j))||(typeof g=="string"&&f(this).is(g))){this.value=""
}}}}}}})
};
f.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()
}})
};
f.fn.enable=function(g){if(g===undefined){g=true
}return this.each(function(){this.disabled=!g
})
};
f.fn.selected=function(g){if(g===undefined){g=true
}return this.each(function(){var h=this.type;
if(h=="checkbox"||h=="radio"){this.checked=g
}else{if(this.tagName.toLowerCase()=="option"){var i=f(this).parent("select");
if(g&&i[0]&&i[0].type=="select-one"){i.find("option").selected(false)
}this.selected=g
}}})
};
f.fn.ajaxSubmit.debug=false;
function d(){if(!f.fn.ajaxSubmit.debug){return
}var g="[jquery.form] "+Array.prototype.join.call(arguments,"");
if(window.console&&window.console.log){window.console.log(g)
}else{if(window.opera&&window.opera.postError){window.opera.postError(g)
}}}})(jQuery);
(function(f){f.hotkeys={version:"0.1",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",91:"command",93:"command",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};
var d,b=[];
function e(j){if(typeof j.data==="string"){j.data={combi:j.data,disableInInput:true}
}if(typeof j.data!=="object"||j.data===null||typeof j.data.combi!=="string"){return
}var i=j.handler,l=j.data.combi.toLowerCase().split(" "),h=j.data.disableInInput;
var k=false,m=[];
f.each(l,function(){if(/;/.test(this)){m.push(this.split(";"))
}});
j.handler=function(n){if(h&&this!==n.target&&(/textarea|select/i.test(n.target.nodeName)||/text|password|search|tel|url|email|number/.test(n.target.type))){return
}var u=n.type!=="keypress"&&f.hotkeys.specialKeys[n.which],s=String.fromCharCode(n.which).toLowerCase(),w,p="",q={};
if(n.altKey&&u!=="alt"){p+="alt+"
}if(n.ctrlKey&&u!=="ctrl"){p+="ctrl+"
}var t=navigator.platform.toLowerCase().indexOf("mac")>-1;
if(u==="meta"&&t){u="command"
}if(f.hotkeys.specialKeys[n.which]==="command"||(f.hotkeys.specialKeys[n.which]==="meta"&&t)){k=true
}if(n.metaKey&&!n.ctrlKey&&u!=="meta"&&u!=="command"){if(k){p+="command+"
}else{p+="meta+"
}}if(n.shiftKey&&u!=="shift"){p+="shift+"
}if(u){q[p+u]=true
}else{q[p+s]=true;
q[p+f.hotkeys.shiftNums[s]]=true;
if(p==="shift+"){q[f.hotkeys.shiftNums[s]]=true
}}for(var r=0,o=l.length;
r<o;
r++){for(var v=0;
v<m.length;
v++){if(m[v][b.length]&&q[m[v][b.length]]&&(b.length==0||c(b,m[v]))){b.push(m[v][b.length]);
clearTimeout(d);
d=window.setTimeout(function(){a()
},1000)
}k=false;
if(b&&g(b,m[v])){a();
return i.apply(this,arguments)
}}if(d==null&&q[l[r]]){return i.apply(this,arguments)
}}}
}function a(){window.setTimeout(function(){clearTimeout(d);
d=null;
b=[]
},50)
}function c(k,m){for(var j=0,h=k.length;
j<h;
j++){if(k[j]!==m[j]){return false
}}return true
}function g(m,j){if(!m||!j||m.length!=j.length){return false
}for(var k=0,h=j.length;
k<h;
k++){if(m[k]!==j[k]){return false
}}return true
}f.each(["keydown","keyup","keypress"],function(){f.event.special[this]={add:e}
})
})(jQuery);
(function(a){a.extend(a.fn,{validate:function(d){if(this.length){var c=a.data(this[0],"validator");
if(c){return c
}this.attr("novalidate","novalidate");
c=new a.validator(d,this[0]);
a.data(this[0],"validator",c);
if(c.settings.onsubmit){d=this.find("input, button");
d.filter(".cancel").click(function(){c.cancelSubmit=true
});
c.settings.submitHandler&&d.filter(":submit").click(function(){c.submitButton=this
});
this.submit(function(f){function b(){if(c.settings.submitHandler){if(c.submitButton){var e=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)
}c.settings.submitHandler.call(c,c.currentForm);
c.submitButton&&e.remove();
return false
}return true
}c.settings.debug&&f.preventDefault();
if(c.cancelSubmit){c.cancelSubmit=false;
return b()
}if(c.form()){if(c.pendingRequest){c.formSubmitted=true;
return false
}return b()
}else{c.focusInvalid();
return false
}})
}return c
}else{d&&d.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")
}},valid:function(){if(a(this[0]).is("form")){return this.validate().form()
}else{var d=true,c=a(this[0].form).validate();
this.each(function(){d&=c.element(this)
});
return d
}},removeAttrs:function(e){var c={},f=this;
a.each(e.split(/\s/),function(d,b){c[b]=f.attr(b);
f.removeAttr(b)
});
return c
},rules:function(i,c){var n=this[0];
if(i){var m=a.data(n.form,"validator").settings,l=m.rules,k=a.validator.staticRules(n);
switch(i){case"add":a.extend(k,a.validator.normalizeRule(c));
l[n.name]=k;
if(c.messages){m.messages[n.name]=a.extend(m.messages[n.name],c.messages)
}break;
case"remove":if(!c){delete l[n.name];
return k
}var j={};
a.each(c.split(/\s/),function(b,d){j[d]=k[d];
delete k[d]
});
return j
}}n=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(n),a.validator.classRules(n),a.validator.attributeRules(n),a.validator.staticRules(n)),n);
if(n.required){m=n.required;
delete n.required;
n=a.extend({required:m},n)
}return n
}});
a.extend(a.expr[":"],{blank:function(b){return !a.trim(""+b.value)
},filled:function(b){return !!a.trim(""+b.value)
},unchecked:function(b){return !b.checked
}});
a.validator=function(d,c){this.settings=a.extend(true,{},a.validator.defaults,d);
this.currentForm=c;
this.init()
};
a.validator.format=function(d,c){if(arguments.length==1){return function(){var b=a.makeArray(arguments);
b.unshift(d);
return a.validator.format.apply(this,b)
}
}if(arguments.length>2&&c.constructor!=Array){c=a.makeArray(arguments).slice(1)
}if(c.constructor!=Array){c=[c]
}a.each(c,function(f,b){d=d.replace(RegExp("\\{"+f+"\\}","g"),b)
});
return d
};
a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(b){this.lastActive=b;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass);
this.addWrapper(this.errorsFor(b)).hide()
}},onfocusout:function(b){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)
}},onkeyup:function(b){if(b.name in this.submitted||b==this.lastElement){this.element(b)
}},onclick:function(b){if(b.name in this.submitted){this.element(b)
}else{b.parentNode.name in this.submitted&&this.element(b.parentNode)
}},highlight:function(e,c,f){e.type==="radio"?this.findByName(e.name).addClass(c).removeClass(f):a(e).addClass(c).removeClass(f)
},unhighlight:function(e,c,f){e.type==="radio"?this.findByName(e.name).removeClass(c).addClass(f):a(e).removeClass(c).addClass(f)
}},setDefaults:function(b){a.extend(a.validator.defaults,b)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function e(h){var d=a.data(this[0].form,"validator"),b="on"+h.type.replace(/^validate/,"");
d.settings[b]&&d.settings[b].call(d,this[0],h)
}this.labelContainer=a(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);
this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var c=this.groups={};
a.each(this.settings.groups,function(d,b){a.each(b.split(/\s/),function(j,i){c[i]=d
})
});
var f=this.settings.rules;
a.each(f,function(d,b){f[d]=a.validator.normalizeRule(b)
});
a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e);
this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
},form:function(){this.checkForm();
a.extend(this.submitted,this.errorMap);
this.invalid=a.extend({},this.errorMap);
this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]);
this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var d=0,c=this.currentElements=this.elements();
c[d];
d++){this.check(c[d])
}return this.valid()
},element:function(d){this.lastElement=d=this.validationTargetFor(this.clean(d));
this.prepareElement(d);
this.currentElements=a(d);
var c=this.check(d);
if(c){delete this.invalid[d.name]
}else{this.invalid[d.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return c
},showErrors:function(d){if(d){a.extend(this.errorMap,d);
this.errorList=[];
for(var c in d){this.errorList.push({message:d[c],element:this.findByName(c)[0]})
}this.successList=a.grep(this.successList,function(b){return !(b.name in d)
})
}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm();
this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass)
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(e){var c=0,f;
for(f in e){c++
}return c
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()==0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(b){}}},findLastActive:function(){var b=this.lastActive;
return b&&a.grep(this.errorList,function(c){return c.element.name==b.name
}).length==1&&b
},elements:function(){var d=this,c={};
return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&d.settings.debug&&window.console&&console.error("%o has no name assigned",this);
if(this.name in c||!d.objectLength(a(this).rules())){return false
}return c[this.name]=true
})
},clean:function(b){return a(b)[0]
},errors:function(){return a(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=a([]);
this.toHide=a([]);
this.currentElements=a([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset();
this.toHide=this.errorsFor(b)
},check:function(i){i=this.validationTargetFor(this.clean(i));
var c=a(i).rules(),n=false,m;
for(m in c){var l={method:m,parameters:c[m]};
try{var k=a.validator.methods[m].call(this,i.value.replace(/\r/g,""),i,l.parameters);
if(k=="dependency-mismatch"){n=true
}else{n=false;
if(k=="pending"){this.toHide=this.toHide.not(this.errorsFor(i));
return
}if(!k){this.formatAndAdd(i,l);
return false
}}}catch(j){this.settings.debug&&window.console&&console.log("exception occured when checking element "+i.id+", check the '"+l.method+"' method",j);
throw j
}}if(!n){this.objectLength(c)&&this.successList.push(i);
return true
}},customMetaMessage:function(e,c){if(a.metadata){var f=this.settings.meta?a(e).metadata()[this.settings.meta]:a(e).metadata();
return f&&f.messages&&f.messages[c]
}},customMessage:function(e,c){var f=this.settings.messages[e];
return f&&(f.constructor==String?f:f[c])
},findDefined:function(){for(var b=0;
b<arguments.length;
b++){if(arguments[b]!==undefined){return arguments[b]
}}},defaultMessage:function(d,c){return this.findDefined(this.customMessage(d.name,c),this.customMetaMessage(d,c),!this.settings.ignoreTitle&&d.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+d.name+"</strong>")
},formatAndAdd:function(f,c){var h=this.defaultMessage(f,c.method),g=/\$?\{(\d+)\}/g;
if(typeof h=="function"){h=h.call(this,c.parameters,f)
}else{if(g.test(h)){h=jQuery.format(h.replace(g,"{$1}"),c.parameters)
}}this.errorList.push({message:h,element:f});
this.errorMap[f.name]=h;
this.submitted[f.name]=h
},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))
}return b
},defaultShowErrors:function(){for(var d=0;
this.errorList[d];
d++){var c=this.errorList[d];
this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass);
this.showLabel(c.element,c.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(d=0;
this.successList[d];
d++){this.showLabel(this.successList[d])
}}if(this.settings.unhighlight){d=0;
for(c=this.validElements();
c[d];
d++){this.settings.unhighlight.call(this,c[d],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return a(this.errorList).map(function(){return this.element
})
},showLabel:function(e,c){var f=this.errorsFor(e);
if(f.length){f.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
f.attr("generated")&&f.html(c)
}else{f=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(e),generated:true}).addClass(this.settings.errorClass).html(c||"");
if(this.settings.wrapper){f=f.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}this.labelContainer.append(f).length||(this.settings.errorPlacement?this.settings.errorPlacement(f,a(e)):f.insertAfter(e))
}if(!c&&this.settings.success){f.text("");
typeof this.settings.success=="string"?f.addClass(this.settings.success):this.settings.success(f)
}this.toShow=this.toShow.add(f)
},errorsFor:function(d){var c=this.idOrName(d);
return this.errors().filter(function(){return a(this).attr("for")==c
})
},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)
},validationTargetFor:function(b){if(this.checkable(b)){b=this.findByName(b.name).not(this.settings.ignore)[0]
}return b
},checkable:function(b){return/radio|checkbox/i.test(b.type)
},findByName:function(d){var c=this.currentForm;
return a(document.getElementsByName(d)).map(function(f,b){return b.form==c&&b.name==d&&b||null
})
},getLength:function(d,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;
case"input":if(this.checkable(c)){return this.findByName(c.name).filter(":checked").length
}}return d.length
},depend:function(d,c){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,c):true
},dependTypes:{"boolean":function(b){return b
},string:function(d,c){return !!a(d,c.form).length
},"function":function(d,c){return d(c)
}},optional:function(b){return !a.validator.methods.required.call(this,a.trim(b.value),b)&&"dependency-mismatch"
},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;
this.pending[b.name]=true
}},stopRequest:function(d,c){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[d.name];
if(c&&this.pendingRequest==0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();
this.formSubmitted=false
}else{if(!c&&this.pendingRequest==0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(d,c){d.constructor==String?this.classRuleSettings[d]=c:a.extend(this.classRuleSettings,d)
},classRules:function(d){var c={};
(d=a(d).attr("class"))&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])
});
return c
},attributeRules:function(f){var c={};
f=a(f);
for(var h in a.validator.methods){var g;
if(g=h==="required"&&typeof a.fn.prop==="function"?f.prop(h):f.attr(h)){c[h]=g
}else{if(f[0].getAttribute("type")===h){c[h]=true
}}}c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength;
return c
},metadataRules:function(d){if(!a.metadata){return{}
}var c=a.data(d.form,"validator").settings.meta;
return c?a(d).metadata()[c]:a(d).metadata()
},staticRules:function(e){var c={},f=a.data(e.form,"validator");
if(f.settings.rules){c=a.validator.normalizeRule(f.settings.rules[e.name])||{}
}return c
},normalizeRules:function(d,c){a.each(d,function(h,g){if(g===false){delete d[h]
}else{if(g.param||g.depends){var b=true;
switch(typeof g.depends){case"string":b=!!a(g.depends,c.form).length;
break;
case"function":b=g.depends.call(c,c)
}if(b){d[h]=g.param!==undefined?g.param:true
}else{delete d[h]
}}}});
a.each(d,function(f,b){d[f]=a.isFunction(b)?b(c):b
});
a.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])
}});
a.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]
}});
if(a.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];
delete d.min;
delete d.max
}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];
delete d.minlength;
delete d.maxlength
}}d.messages&&delete d.messages;
return d
},normalizeRule:function(d){if(typeof d=="string"){var c={};
a.each(d.split(/\s/),function(){c[this]=true
});
d=c
}return d
},addMethod:function(e,c,f){a.validator.methods[e]=c;
a.validator.messages[e]=f!=undefined?f:a.validator.messages[e];
c.length<3&&a.validator.addClassRules(e,a.validator.normalizeRule(e))
},methods:{required:function(e,c,f){if(!this.depend(f,c)){return"dependency-mismatch"
}switch(c.nodeName.toLowerCase()){case"select":return(e=a(c).val())&&e.length>0;
case"input":if(this.checkable(c)){return this.getLength(e,c)>0
}default:return a.trim(e).length>0
}},remote:function(h,c,l){if(this.optional(c)){return"dependency-mismatch"
}var k=this.previousValue(c);
this.settings.messages[c.name]||(this.settings.messages[c.name]={});
k.originalMessage=this.settings.messages[c.name].remote;
this.settings.messages[c.name].remote=k.message;
l=typeof l=="string"&&{url:l}||l;
if(this.pending[c.name]){return"pending"
}if(k.old===h){return k.valid
}k.old=h;
var j=this;
this.startRequest(c);
var i={};
i[c.name]=h;
a.ajax(a.extend(true,{url:l,mode:"abort",port:"validate"+c.name,dataType:"json",data:i,success:function(e){j.settings.messages[c.name].remote=k.originalMessage;
var b=e===true;
if(b){var d=j.formSubmitted;
j.prepareElement(c);
j.formSubmitted=d;
j.successList.push(c);
j.showErrors()
}else{d={};
e=e||j.defaultMessage(c,"remote");
d[c.name]=k.message=a.isFunction(e)?e(h):e;
j.showErrors(d)
}k.valid=b;
j.stopRequest(c,b)
}},l));
return"pending"
},minlength:function(e,c,f){return this.optional(c)||this.getLength(a.trim(e),c)>=f
},maxlength:function(e,c,f){return this.optional(c)||this.getLength(a.trim(e),c)<=f
},rangelength:function(e,c,f){e=this.getLength(a.trim(e),c);
return this.optional(c)||e>=f[0]&&e<=f[1]
},min:function(e,c,f){return this.optional(c)||e>=f
},max:function(e,c,f){return this.optional(c)||e<=f
},range:function(e,c,f){return this.optional(c)||e>=f[0]&&e<=f[1]
},email:function(d,c){return this.optional(c)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
},url:function(d,c){return this.optional(c)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,c){return this.optional(c)||!/Invalid|NaN/.test(new Date(d))
},dateISO:function(d,c){return this.optional(c)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(d)
},number:function(d,c){return this.optional(c)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(d)
},digits:function(d,c){return this.optional(c)||/^\d+$/.test(d)
},creditcard:function(h,c){if(this.optional(c)){return"dependency-mismatch"
}if(/[^0-9 -]+/.test(h)){return false
}var l=0,k=0,j=false;
h=h.replace(/\D/g,"");
for(var i=h.length-1;
i>=0;
i--){k=h.charAt(i);
k=parseInt(k,10);
if(j){if((k*=2)>9){k-=9
}}l+=k;
j=!j
}return l%10==0
},accept:function(e,c,f){f=typeof f=="string"?f.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(c)||e.match(RegExp(".("+f+")$","i"))
},equalTo:function(e,c,f){f=a(f).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()
});
return e==f.val()
}}});
a.format=a.validator.format
})(jQuery);
(function(f){var e={};
if(f.ajaxPrefilter){f.ajaxPrefilter(function(c,b,a){b=c.port;
if(c.mode=="abort"){e[b]&&e[b].abort();
e[b]=a
}})
}else{var d=f.ajax;
f.ajax=function(b){var a=("port" in b?b:f.ajaxSettings).port;
if(("mode" in b?b:f.ajaxSettings).mode=="abort"){e[a]&&e[a].abort();
return e[a]=d.apply(this,arguments)
}return d.apply(this,arguments)
}
}})(jQuery);
(function(a){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&a.each({focus:"focusin",blur:"focusout"},function(e,c){function f(b){b=a.event.fix(b);
b.type=c;
return a.event.handle.call(this,b)
}a.event.special[c]={setup:function(){this.addEventListener(e,f,true)
},teardown:function(){this.removeEventListener(e,f,true)
},handler:function(b){arguments[0]=a.event.fix(b);
arguments[0].type=c;
return a.event.handle.apply(this,arguments)
}}
});
a.extend(a.fn,{validateDelegate:function(e,c,f){return this.bind(c,function(d){var b=a(d.target);
if(b.is(e)){return f.apply(b,arguments)
}})
}})
})(jQuery);
jQuery.extend(jQuery.validator.messages,{required:"Это поле необходимо заполнить",remote:"Исправьте это поле чтобы продолжить",email:"Введите правильный email адрес.",url:"Введите верный URL.",date:"Введите правильную дату.",dateISO:"Введите правильную дату (ISO).",number:"Введите число.",digits:"Введите только цифры.",creditcard:"Введите правильный номер вашей кредитной карты.",equalTo:"Введенные значения не совпадают",accept:"Пожалуйста, введите значение с правильным расширением.",maxlength:jQuery.format("Нельзя вводить более {0} символов."),minlength:jQuery.format("Должно быть не менее {0} символов."),rangelength:jQuery.format("Введите от {0} до {1} символов."),range:jQuery.format("Введите число от {0} до {1}."),max:jQuery.format("Введите число меньше или равное {0}."),min:jQuery.format("Введите число больше или равное {0}.")});
(function(d){var e={verticalOffset:10,horizontalOffset:10,title:false,content:false,url:false,classes:"",position:"auto",fadeSpeed:160,trigger:"click",preventDefault:true,stopChildrenPropagation:true,hideOnHTMLClick:true,animateChange:true,autoReposition:true,anchor:false};
var c=[];
var b={calc_position:function(j,i){var h=j.popover("getData");
var n=h.options;
var m=n.anchor?d(n.anchor):j;
var g=h.popover;
var l=m.offset();
var k,f;
if(i=="top"){k=l.top-g.outerHeight();
f=l.left-g.outerWidth()/2+m.outerWidth()/2
}else{if(i=="right"){k=l.top+m.outerHeight()/2-g.outerHeight()/2;
f=l.left+m.outerWidth()
}else{if(i=="left"){k=l.top+m.outerHeight()/2-g.outerHeight()/2;
f=l.left-g.outerWidth()
}else{k=l.top+m.outerHeight();
f=l.left-g.outerWidth()/2+m.outerWidth()/2
}}}x2=f+g.outerWidth();
y2=k+g.outerHeight();
ret={x1:f,x2:x2,y1:k,y2:y2};
return ret
},pop_position_class:function(j,g){var f="popover-top popover-right popover-left";
var i="top-arrow";
var h="right-arrow bottom-arrow left-arrow";
if(g=="top"){f="popover-right popover-bottom popover-left";
i="bottom-arrow";
h="top-arrow right-arrow left-arrow"
}else{if(g=="right"){f="popover-yop popover-bottom popover-left";
i="left-arrow";
h="top-arrow right-arrow bottom-arrow"
}else{if(g=="left"){f="popover-top popover-right popover-bottom";
i="right-arrow";
h="top-arrow bottom-arrow left-arrow"
}}}j.removeClass(f).addClass("popover-"+g).find(".arrow").removeClass(h).addClass(i)
}};
var a={init:function(f){return this.each(function(){var h=d.extend({},e,f);
var l=d(this);
var j=l.popover("getData");
if(!j){var i=d('<div class="popover" />').addClass(h.classes).append('<div class="arrow" />').append('<div class="wrap"></div>').appendTo("body").hide();
if(h.stopChildrenPropagation){i.children().bind("click.popover",function(m){m.stopPropagation()
})
}if(h.anchor){if(!h.anchor instanceof jQuery){h.anchor=d(h.anchor)
}}var j={target:l,popover:i,options:h};
if(h.title){d('<div class="title" />').html(h.title instanceof jQuery?h.title.html():h.title).appendTo(i.find(".wrap"))
}if(h.content){d('<div class="content" />').html(h.content instanceof jQuery?h.content.html():h.content).appendTo(i.find(".wrap"))
}l.data("popover",j);
c.push(l);
if(h.url){l.popover("ajax",h.url)
}l.popover("reposition");
l.popover("setTrigger",h.trigger);
if(h.hideOnHTMLClick){var k="click.popover";
if("ontouchstart" in document.documentElement){k="touchstart.popover"
}d("html").unbind(k).bind(k,function(m){d("html").popover("fadeOutAll")
})
}if(h.autoReposition){var g=function(m){l.popover("reposition")
};
d(window).unbind("resize.popover").bind("resize.popover",g).unbind("scroll.popover").bind("scroll.popover",g)
}}})
},reposition:function(){return this.each(function(){var m=d(this);
var w=m.popover("getData");
if(w){var l=w.popover;
var j=w.options;
var q=j.anchor?d(j.anchor):m;
var i=q.offset();
var v=j.position;
if(!(v=="top"||v=="right"||v=="left"||v=="auto")){v="bottom"
}var f;
if(v=="auto"){var n=["bottom","left","top","right"];
var g=d(window).scrollTop();
var s=d(window).scrollLeft();
var o=d(window).outerHeight();
var u=d(window).outerWidth();
d.each(n,function(A,C){f=b.calc_position(m,C);
var y=f.x1-s;
var x=f.x2-s+j.horizontalOffset;
var B=f.y1-g;
var z=f.y2-g+j.verticalOffset;
if(y<0||x<0||B<0||z<0){return true
}if(z>o){return true
}if(x>u){return true
}v=C;
return false
});
if(v=="auto"){return
}}f=b.calc_position(m,v);
var r=f.top;
var k=f.left;
b.pop_position_class(l,v);
var h=0;
var t=0;
if(v=="bottom"){h=j.verticalOffset
}if(v=="top"){h=-j.verticalOffset
}if(v=="right"){t=j.horizontalOffset
}if(v=="left"){t=-j.horizontalOffset
}var p={left:f.x1,top:f.y1,marginTop:h,marginLeft:t};
if(w.initd&&j.animateChange){l.css(p)
}else{w.initd=true;
l.css(p)
}m.data("popover",w)
}})
},destroy:function(){return this.each(function(){var g=d(this);
var f=g.popover("getData");
g.unbind(".popover");
d(window).unbind(".popover");
f.popover.remove();
g.removeData("popover")
})
},show:function(){return this.each(function(){var h=d(this);
var g=h.popover("getData");
if(g){var f=g.popover;
h.popover("reposition");
f.clearQueue().css({zIndex:950}).show()
}})
},hide:function(){return this.each(function(){var g=d(this);
var f=g.popover("getData");
if(f){f.popover.hide().css({zIndex:949})
}})
},fadeOut:function(f){return this.each(function(){var j=d(this);
var i=j.popover("getData");
if(i){var h=i.popover;
var g=i.options;
h.delay(100).css({zIndex:949}).fadeOut(f?f:g.fadeSpeed)
}})
},hideAll:function(){return d.each(c,function(g,f){var k=d(this);
var j=k.popover("getData");
if(j){var h=j.popover;
h.hide()
}})
},fadeOutAll:function(f){return d.each(c,function(j,g){var m=d(this);
var l=m.popover("getData");
if(l){var k=l.popover;
var h=l.options;
k.css({zIndex:949}).fadeOut(f?f:h.fadeSpeed)
}})
},setTrigger:function(f){return this.each(function(){var k=d(this);
var j=k.popover("getData");
if(j){var i=j.popover;
var g=j.options;
var h=g.anchor?d(g.anchor):k;
if(f==="click"){h.unbind("click.popover").bind("click.popover",function(l){if(g.preventDefault){l.preventDefault()
}l.stopPropagation();
k.popover("show")
});
i.unbind("click.popover").bind("click.popover",function(l){l.stopPropagation()
})
}else{h.unbind("click.popover");
i.unbind("click.popover")
}if(f==="hover"){h.add(i).bind("mousemove.popover",function(l){k.popover("show")
});
h.add(i).bind("mouseleave.popover",function(l){k.popover("fadeOut")
})
}else{h.add(i).unbind("mousemove.popover").unbind("mouseleave.popover")
}if(f==="focus"){h.add(i).bind("focus.popover",function(l){k.popover("show")
});
h.add(i).bind("blur.popover",function(l){k.popover("fadeOut")
});
h.bind("click.popover",function(l){l.stopPropagation()
})
}else{h.add(i).unbind("focus.popover").unbind("blur.popover").unbind("click.popover")
}}})
},title:function(f){return this.each(function(){var i=d(this);
var h=i.popover("getData");
if(h){var j=h.popover.find(".title");
var g=h.popover.find(".wrap");
if(j.length===0){j=d('<div class="title" />').appendTo(g)
}j.html(f)
}})
},content:function(f){return this.each(function(){var j=d(this);
var i=j.popover("getData");
if(i){var h=i.popover.find(".content");
var g=i.popover.find(".wrap");
if(h.length===0){h=d('<div class="content" />').appendTo(g)
}h.html(f)
}})
},ajax:function(g,f){return this.each(function(){var k=d(this);
var j=k.popover("getData");
if(j){var i={url:g,success:function(l){var n=j.popover.find(".content");
var m=j.popover.find(".wrap");
if(n.length===0){n=d('<div class="content" />').appendTo(m)
}n.html(l)
}};
var h=d.extend({},i,f);
d.ajax(h)
}})
},setOption:function(f,g){return this.each(function(){var i=d(this);
var h=i.popover("getData");
if(h){h.options[f]=g;
i.data("popover",h)
}})
},getData:function(){var f=[];
this.each(function(){var h=d(this);
var g=h.data("popover");
if(g){f.push(g)
}});
if(f.length==0){return
}if(f.length==1){f=f[0]
}return f
}};
d.fn.popover=function(f){if(a[f]){return a[f].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof f==="object"||!f){return a.init.apply(this,arguments)
}else{d.error("Method "+f+" does not exist on jQuery.popover")
}}}
})(jQuery);
