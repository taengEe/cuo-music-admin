//nav 스크립트
$('.nav-ai').on('click', function() {
    $('.nav-depth').slideToggle(200);
});
$('.nav-depth-list').on('mouseover mouseleave', function() {
    $('.nav-depth-list').removeClass('nav-depth-list-selected');
    $(this).toggleClass('nav-depth-list-selected');
});
//mobile
$(document).ready(function() {
    $('.mb-btn').click(function() {
        $('nav').toggle('slide', { direction: 'right' }, 200);
    });
});