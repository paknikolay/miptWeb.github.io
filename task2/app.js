$(function(){
				$("#root").append('<ul>');
       	       var element = $('<li> <span></span> <button id="main"> Удалить </button> </li>');
          $('span', element).text("Сделать задание #3 по web-программированию");
          $("ul").append(element);
       $("#main").click(function(){
        	$(this).parent().remove()
        });
})
