const ctx = document.getElementById('seller');
        const ctx02 = document.getElementById('album');
        const ctx03 = document.getElementById('date');
        const ctx04 = document.getElementById('tb-date');
        const sellerLabel = ['Melon', 'Genie', 'Bugs', 'Vibe', 'Flo'];
        const albumLabel = ['허공에 묻는다', 'Insane', '엊그제', 'Own Star'];
        const dateLabel = ['23-05', '23-06', '23-07', '23-08', '23-09'];
        const pieOption = {
            responsive: false,
            // maintainAspectRatio: false,
            // maintainAspectRatio : true,
            // aspectRatio: 1,
            plugins:{
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 10
                    }
                },
            }
        }
        //nav 스크립트
        $('.nav-ai').on('click', function() {
            $('.nav-depth').slideToggle(200);
        });
        $('.nav-depth-list').on('mouseover mouseleave', function() {
            $('.nav-depth-list').removeClass('nav-depth-list-selected');
            $(this).toggleClass('nav-depth-list-selected');
        });
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: sellerLabel,
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
                labels: albumLabel,
                datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
            }
        });
        new Chart(ctx03, {
            type: 'bar',
            data: {
                labels: dateLabel,
                datasets: [{
                label: '# of Votes',
                data: [154, 324, 178, 45, 27, 24],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
        new Chart(ctx04, {
            type: 'bar',
            data: {
                labels: dateLabel,
                datasets: [{
                label: '# of Votes',
                data: [154, 324, 178, 45, 27, 24],
                borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                y: {
                        beginAtZero: true
                    }
                }
            }
        });
        //mobile
        $(document).ready(function() {
            $('.mb-btn').click(function() {
                $('nav').toggle('slide', { direction: 'right' }, 200);
            });
        });