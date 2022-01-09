//Cambia de color del navbar al bajar al fondo de la página//
window.onscroll = function (e) {  
    var element = document.getElementById("menu");
    if(scrollY >= 400){
        element.classList.remove("bg-transparent");
        element.classList.add("bg-dark");
    } else {
        element.classList.remove("bg-dark");
        element.classList.add("bg-transparent");
    }
    } 

//Smooth scroll//
    $(function(){
        $("a").click(function(event){
          if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
              scrollTop: $(gato).offset().top
            }, 700, function(){
              window.location.hash = gato;
            });
          }
        });
        $('[data-toggle="popover"]').popover();
        });

//Ocultar el texto informativo de todas las card al hacer click en cualquier titulo de las mismas//
$(function() {
    $("[data-toggle='tooltip']").tooltip(); 
    $(".card-title").click(function() { 
        $(".card-text").fadeToggle();
    });

//Cambiar el color de fondo de la sección "Quienes somos" al hacer click en el título//
    $(".color-qs").on("click", function() { 
        $("#quienes-somos").css("background-color", "#0600CA");
    }, );
    });
