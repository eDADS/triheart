$(function () {

    $('#cookieCotnainer').remove();

    /*
    if(darkmode cookie){
        $("body").addClass("darkmode");
        $('#darkmodeButton').text('Light');
        $(".lightmodeImage").addClass("hidden-content");
        $(".darkmodeImage").removeClass("hidden-content");
    }
    */

    $.fn.clicktoggle = function (a, b) {
        return this.each(function () {
            var clicked = false;
            $(this).click(function () {
                if (clicked) {
                    clicked = false;
                    return b.apply(this, arguments);
                }
                clicked = true;
                return a.apply(this, arguments);
            });
        });
    };

    $('#burgerContainer').on('click', function () {
        $('#navigationWrapper').toggle();
    });

    $('.nav2').on('click', function () {
        $('#navigationWrapper').toggle();
    });

    $("#accordion").accordion({
        animate: 100,
        heightStyle: "content",
        active: false,
        collapsible: true
    });

    $('#darkmodeButton').clicktoggle(
        function () {
            $(".lightmodeImage").addClass("hidden-content");
            $(".darkmodeImage").removeClass("hidden-content");
            $("body").addClass("darkmode");
            $(this).text('Light');
        },
        function () {
            $(".darkmodeImage").addClass("hidden-content");
            $(".lightmodeImage").removeClass("hidden-content");
            $("body").removeClass("darkmode");
            $(this).text('Dark');
    });

    $('#cookieCotnainer').on('click', function () {
        $(this).remove();
    });
});

