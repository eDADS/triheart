$(function () {
    $('h1').on('click', function (event) {
        event.preventDefault();
        var accordion = $(this);
        var accordionContent = accordion.next('.contentBlockWrapper');
        accordion.toggleClass("open");
        accordionContent.slideToggle(350);
    });

    $('#collapseall').on('click', function (event) {
        
        var accordion = $('h1');
        var accordionContent = accordion.next('.contentBlockWrapper');
        accordionContent.slideUp(350);
    });

    $('#expandall').on('click', function (event) {
       
        var accordion = $('h1');
        var accordionContent = accordion.next('.contentBlockWrapper');
        accordionContent.slideDown(350);
    });

    $('.nav3 > a').on('click', function (event) {
        ref = $(this).attr("href");
        var accordion = $(ref).closest('.chapter').find('h1');
        var accordionContent = accordion.next('.contentBlockWrapper');
        accordionContent.slideDown(0);
        location.href = ref;
    });
});

