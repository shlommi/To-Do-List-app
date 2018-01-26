// checkoff specific todos by clicking 
$("ul").on("click", "li", function(){
   $(this).toggleClass("complited");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(enter){
        if(enter.which === 13){
            //getting new todo text form user input into varible
            var todoText = $(this).val();
            // creat with var new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
            //clean the input text into empty line
            $(this).val("");  
        }
})

$("#glila").click(function(){
    
    $("input[type='text']").fadeToggle();
});