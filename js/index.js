function ativaScrollSuave(selector){
        $(selector).click(function(event){
            event.preventDefault();
            var target = $(this).attr('href');

            $('html,body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-produtos]');
ativaScrollSuave('a[href*=panel-form]');

/*serve para animar o effeito da página 
para ocorrer transição suave*/