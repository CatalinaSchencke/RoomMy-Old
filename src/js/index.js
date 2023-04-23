const back2Top = $('#back2Top');

$(window).on('scroll', function () {
    if ($(window).scrollTop()>100){
        back2Top.addClass('active');
    } else {
        back2Top.removeClass('active');
    }
});
back2Top.on('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});