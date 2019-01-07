function roll(dien) {
    scrollPos = window.scrollY;
    result = Math.floor(Math.random() * dien + 1);
    $("<div class='historicalRoll d" + dien + "HistoricalRoll'>" + result + "</div>").prependTo("#d" + dien + "history");
    $(".d" + dien + "HistoricalRoll").animate({ "left": "+=2em" }, 100);
    maxHistory = Math.ceil(($('#headerContainer').width() - 250) / 100);
    $('#d' + dien + 'history div:gt(' + maxHistory + ')').remove();
    $(".d" + dien + "HistoricalRoll").slice(maxHistory).animate({ "opacity": "-=0.75" }, 0);
    window.scroll(0, scrollPos);
}

$(function () {
    $('#rolld4 > .dieImage').on('click', function () {
        roll(4);
    });
    $('#rolld6 > .dieImage').on('click', function () {
        roll(6);
    });
    $('#rolld8 > .dieImage').on('click', function () {
        roll(8);
    });
    $('#rolld10 > .dieImage').on('click', function () {
        roll(10);
    });
    $('#rolld12 > .dieImage').on('click', function () {
        roll(12);
    });
    $('#rolld20 > .dieImage').on('click', function () {
        roll(20);
    });

    $(window).resize(function(){
        maxHistory = Math.ceil(($('#headerContainer').width() - 250) / 100);
        $('#d4 div:gt(' + (maxHistory + 1) + ')').remove();
        $('#d6 div:gt(' + (maxHistory + 1) + ')').remove();
        $('#d8 div:gt(' + (maxHistory + 1) + ')').remove();
        $('#d10 div:gt(' + (maxHistory + 1) + ')').remove();
        $('#d12 div:gt(' + (maxHistory + 1) + ')').remove();
        $('#d20 div:gt(' + (maxHistory + 1) + ')').remove();
      });
});
