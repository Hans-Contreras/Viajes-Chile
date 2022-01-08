//Cambio de color del navbar al bajar en la página//
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

// Smooth scroll//
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

