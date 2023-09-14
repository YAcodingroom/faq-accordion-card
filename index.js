$(".collapse-title").on("click", function () {
    if (!$(this).children().last().hasClass("rotate")) {
        $(this).children().last().addClass("rotate").removeClass("anticlock-rotate");
        $(this).toggleClass("active");
    }
    else if ($(this).children().last().hasClass("rotate")) {
        $(this).children().last().addClass("anticlock-rotate").removeClass("rotate");
        $(this).toggleClass("active");
    }
});