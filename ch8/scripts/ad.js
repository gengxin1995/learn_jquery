$(function () {
    var $imgrolls = $('#jnImageroll div a');
    $imgrolls.css("opacity","0.7");
    var index = 0;
    var adTimer = null;
    var len = $imgrolls.length;

    $imgrolls.mouseover(function () {
        index = $imgrolls.index(this);
        showImage(index);
    }).eq(0).mouseover();

    $('#jnImageroll').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            showImage(index);
            index++;
            if(index==len){index=0;}
        }, 5000);
    }).trigger("mouseleave");
});

function showImage(index) {
    var $rollobj = $('#jnImageroll');
    var $rolllist = $rollobj.find('div a');
    var newhref = $rolllist.eq(index).attr('href');
    $('#JS_imgWrap').attr('href', newhref)
        .find('img').eq(index).stop(true, true).fadeIn()
        .siblings().fadeOut();
    $rolllist.removeClass('chos').css('opacity', 0.7)
        .eq(index).addClass('chos').css('opacity', 1);
}