$(function(){
				$("#root").append('<ul>');
        $("ul").append('<li>');
        $("li").append('<span>Сделать задание #3 по web-программированию</span>');
	      var r= $('<input id = "main" type="button" value="Удалить"/>');
        $("li").append(r);
        $("#main").click(function(){
        	$(this).parent().remove()
        });

              });
})
