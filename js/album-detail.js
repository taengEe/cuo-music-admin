
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
        $('#today').val(new Date().toISOString().substring(0,10)); //input date 오늘 날짜

        const ctx = document.getElementById('day');
        const ctx02 = document.getElementById('month');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
            labels: ['Melon', 'Genie', 'Bugs', 'Vibe', 'Flo'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                borderWidth: 1
            }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
            }
        });
        new Chart(ctx02, {
            type: 'doughnut',
            data: {
            labels: ['Melon', 'Genie', 'Bugs', 'Vibe', 'Flo'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
            }
        });