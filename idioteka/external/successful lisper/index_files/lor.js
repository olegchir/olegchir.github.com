function initTopTagSelection(){$(function(){function a(){var b=$("#tags");
var c=b.val();
if(c!=""){c+=","
}b.val(c+$(this).text())
}$("a[data-toptag]").click(a)
})
}function initNextPrevKeys(){$(function(){function a(b){if(b&&b.href){document.location=b.href
}}if(typeof jQuery.hotkeys!=="undefined"){$(document).bind("keydown",{combi:"Ctrl+left",disableInInput:true},function(){a(document.getElementById("PrevLink"))
});
$(document).bind("keydown",{combi:"Ctrl+right",disableInInput:true},function(){a(document.getElementById("NextLink"))
})
}})
}function initStarPopovers(){$(function(){$("#favs_button").click(function(a){a.preventDefault();
a.stopPropagation();
$("#memories_button").popover("hide");
$("#favs_button").popover("show")
});
$("#favs_button").popover({content:"Для добавления в избранное надо залогиниться!",autoReposition:false,trigger:"manual"});
$("#memories_button").click(function(a){a.preventDefault();
a.stopPropagation();
$("#favs_button").popover("hide");
$("#memories_button").popover("show")
});
$("#memories_button").popover({content:"Для добавления в отслеживаемое надо залогиниться!",autoReposition:false,trigger:"manual"})
})
}function init_interpage_adv(a){$(function(){var d=a[Math.floor(Math.random()*a.length)];
if(d.type=="flash"){$script("/js/jquery.swfobject.1-1-1.min.js",function(){$("#interpage-adv").flash({swf:d.src,width:728,height:90})
})
}if(d.type=="img"){var c=$("<a>");
c.attr("href",d.href);
c.attr("target","_blank");
var b=$("<img>");
b.attr("src",d.src);
if("width" in d){b.attr("width",d.width)
}else{b.attr("width",728)
}if("height" in d){b.attr("height",d.height)
}else{b.attr("height",90)
}c.append(b);
$("#interpage-adv").append(c)
}})
}function topic_memories_form_setup(c,g,e,d){function a(h){h.preventDefault();
$.ajax({url:"/memories.jsp",type:"POST",data:{msgid:e,add:"add",watch:h.data.watch,csrf:d}}).done(function(i){b(i.id,h.data.watch);
if(h.data.watch){$("#memories_count").text(i.count)
}else{$("#favs_count").text(i.count)
}})
}function f(h){h.preventDefault();
$.ajax({url:"/memories.jsp",type:"POST",data:{id:h.data.id,remove:"remove",csrf:d}}).done(function(i){b(0,h.data.watch);
if(i>=0){if(h.data.watch){$("#memories_count").text(i)
}else{$("#favs_count").text(i)
}}})
}function b(h,j){var i;
if(j){i=$("#memories_button")
}else{i=$("#favs_button")
}if(h==0){i.removeClass("selected");
i.attr("title",j?"Отслеживать":"В избранное");
i.unbind("click",f);
i.bind("click",{watch:j},a)
}else{i.addClass("selected");
i.attr("title",j?"Не отслеживать":"Удалить из избранного");
i.unbind("click",a);
i.bind("click",{watch:j,id:h},f)
}}$().ready(function(){b(c,g)
})
}$(document).ready(function(){function c(){var g={type:"post",dataType:"json",xhrFields:{withCredentials:true},success:function(i,h){if(i.loggedIn){window.location.reload()
}else{alert("Ошибка авторизации. Неправильное имя пользователя, e-mail или пароль.");
window.location="/login.jsp"
}},error:function(i,h){alert("Ошибка авторизации. Неправильное имя пользователя, e-mail или пароль.");
window.location="/login.jsp"
}};
$("#regform").ajaxForm(g);
if(location.protocol==="https:"||jQuery.support.cors){$("#loginbutton").bind("click",function(h){$("#regmenu").fadeOut("fast",function(){$("#regform").fadeIn("fast",function(){$("#regform input[name='nick']").focus()
})
});
return false
});
$("#hide_loginbutton").bind("click",function(h){$("#regform").fadeOut("fast",function(){$("#regmenu").fadeIn("fast")
});
return false
})
}}function e(){function g(i,h){if(((i.keyCode==13)||(i.keyCode==10))&&(i.ctrlKey)){window.onbeforeunload=null;
$(h).submit();
return false
}}$("textarea").bind("keypress",function(h){g(h,h.target.form)
})
}function d(){$("#commentForm").validate({messages:{msg:"Введите сообщение",title:"Введите заголовок"}})
}function f(){$("article.msg .title a[data-samepage]").click(function(g){g.preventDefault();
location.hash="comment-"+this.search.substr(5)
})
}function b(){var g=$('<button id="ft-back-button">');
g.text("Вверх");
g.click(function(){$("html, body").animate({scrollTop:0})
});
$("#ft").prepend(g)
}function a(){function g(){$.ajax({url:"/notifications-count",cache:false}).success(function(i){var h=i==0?"":("("+i+")");
$("#main_events_count").text(h)
})
}$(function(){if($("#main_events_count").length>0){g()
}})
}c();
e();
d();
a();
$(".none").remove();
f();
b()
});