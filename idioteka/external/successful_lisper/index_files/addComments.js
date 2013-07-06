var element="";
var csrf="";
function sh(a,b){if(csrf.length>0){$("input[name='csrf']").attr("value",csrf)
}if(a==1){reply_to=$("input[name='replyto']",element);
if(reply_to.attr("value")!=b){element.hide()
}if(element.is(":hidden")){reply=$("div.reply",$("div.msg_body",$("#comment-"+b)));
reply.append(element);
reply_to.attr("value",b);
element.slideDown("slow",function(){$("#msg").focus()
})
}else{element.slideUp("slow")
}}else{if(a==0){topic_id=$("input[name='topic']",element).attr("value");
reply_to=$("input[name='replyto']",element);
if(reply_to.attr("value")!=0){element.hide()
}if(element.is(":hidden")){reply=$("div.reply",$("div.msg_body",$("#topic-"+topic_id)));
reply.append(element);
reply_to.attr("value","0");
element.slideDown("slow",function(){$("#msg").focus()
})
}else{element.slideUp("slow")
}}}}$(document).ready(function(){element=$("#commentForm").parent();
if(document.cookie.match(/CSRF_TOKEN\=(\w+)\;?/)){csrf=document.cookie.match(/CSRF_TOKEN\=(\w+)\;?/);
csrf=csrf[1]
}$("div.reply").each(function(){$('a[href^="comment-message.jsp"]',this).bind("click",function(){sh(0,0);
return false
});
var c=$('a[href^="add_comment.jsp"]',this);
if(c.length>0){var b=c.attr("href").match(/\d+/g);
var a=b[1];
c.bind("click",function(){sh(1,a);
return false
})
}});
window.onbeforeunload=function(){if($("#msg").val()!=""&&!$("#commentForm").parent().is(":hidden")){return"Вы что-то напечатали в форме. Все введенные данные будут потеряны при закрытии страницы."
}};
$("#commentForm").bind("submit",function(){window.onbeforeunload=null
});
$("#commentForm").bind("reset",function(){element.slideUp("slow")
})
});