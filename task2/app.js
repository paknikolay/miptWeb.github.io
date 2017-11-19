$(function(){
				$("#root").append('<ul>');
       	       var element = $('<li> <span></span> <button id="main"> Удалить </button> </li>');
          $('span', element).text("Сделать задание #3 по web-программированию");
          $("ul").append(element);
       $("#main").click(function(){
        	$(this).parent().remove()
        });

       $("#root").append('<input id="add_task_input"> <button id="add_task"> Добавить </button>');
       $("#add_task").click(function(){
          var element = $('<li> <span></span> <button class="removing"> Удалить </button> </li>');
          $('span', element).text( $("#add_task_input").val());
          $("ul").append(element);
          $(".removing").click(function(){
        	$(this).parent().remove()
        });


        });
})
