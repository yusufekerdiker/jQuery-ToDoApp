$(document).ready(function() {

    $(".theme_icon").on('click', function() {

        $(".theme_icon").toggleClass("fa-moon");
        $(".theme_icon").toggleClass("fa-sun");

        let current_theme = $("html").attr("data-theme");

        if (current_theme == "dark") {
            $("html").attr("data-theme", "light");
        }
        else if (current_theme == "light") {
            $("html").attr("data-theme", "dark");           
        }
    });

});