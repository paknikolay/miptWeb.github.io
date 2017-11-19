$(function(){
				$("#root").append('<ul></ul>');
        $("ul").append('<li></li>');
        $("li").append('<span> Сделать задание #3 по web-программированию </span>');
        $("li").append($('<input id = "main" type="button" value="Удалить"/>'));
        $("#main").click(function(){
        	$(this).parent().remove()
        });

       $("li").append('<input id="add_task_input"> <button id="add_task"> Добавить </button>');
       $("#add_task").click(function(){
          var element = $('<li> <span></span> <button class="removing"> Удалить </button> </li>');
          $('span', element).text( $("#add_task_input").val());
          $("ul").append(element);
          $(".removing").click(function(){
        	$(this).parent().remove()
          });
        });
})
