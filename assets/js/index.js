// longer method present at junk-js.js

// check off specific todo  by clicking 
$("ul").on("click","li",function (){
    $(this).toggleClass("completed");
});

// click on x to delete the item on the list
$("ul").on("click","span",function(event){
    // this target the parent part 
    $(this).parent().fadeOut(500,function(){
        // this removes te parent as it made to
        // act on parent 
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which===13) {
        // grabbing the new todo text from input
        var todotext = $(this).val();
        $(this).val("");
        // creating a new li and add in the ul 
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todotext+"</li>");
    }
});
$(".fa-plus-square").click(500,function (){
    $("input[type='text']").fadeToggle();
});