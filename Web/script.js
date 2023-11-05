function slideTo(name){
    if(window.location.href.indexOf("home.html") == -1)
    {
        console.log("aa");

        // $('body').animate({
        //     scrollTop: $(window.location.hash).offset().top
        // }, 1500);
    }
    else
    {
        document.getElementById(name).scrollIntoView();
    }
}