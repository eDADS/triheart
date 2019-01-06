if (JSON.parse(localStorage.getItem("darkMode")) == true) {
    makeDark();
} else {
    makeLight();
}

function checkDark() {
    if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        makeDark();
    } else {
        makeLight();
    }
}

$(function () {
    if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        makeDark();
    } else {
        makeLight();
    }

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

    $('#darkmodeButton').on('click', function () {
        if ($(this).html() == "Dark") {
            makeDark();
        } else {
            makeLight();
        }
    });
});

function makeDark() {
    $(".lightmodeImage").addClass("hidden-content");
    $(".darkmodeImage").removeClass("hidden-content");
    $("body").addClass("darkmode");
    $('#darkmodeButton').text('Light');
    localStorage.setItem("darkMode", JSON.stringify(true));
}

function makeLight() {
    $(".darkmodeImage").addClass("hidden-content");
    $(".lightmodeImage").removeClass("hidden-content");
    $("body").removeClass("darkmode");
    $('#darkmodeButton').text('Dark');
    localStorage.setItem("darkMode", JSON.stringify(false));
}