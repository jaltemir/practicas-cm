/**
 * Created by boyander on 11/10/16.
 */
$(document).ready(function(){

    $('.img-rounded').mouseenter(function() {
        $(this).parent().addClass("selected");
    });
    $('.img-rounded').mouseout(function() {
        $(this).parent().removeClass("selected");
    });
});
