const ctx = document.getElementById('sales-graph');
        const ctx02 = document.getElementById('album-graph');
        const ctx03 = document.getElementById('period-graph');
        const salesLabels = ['Melon', 'Genie', 'Bugs', 'Flo', 'Vibe'];
        const albumLabels = ['허공에 묻는다', 'Insane', '엊그제', 'Own Star', '모래성'];
        const periodLabels = ['23-05', '23-06', '23-07', '23-08', '23-09']
        const chartOption = {
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
              y: {
                beginAtZero: true
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
        //mobile
        $(document).ready(function() {
            $('.mb-btn').click(function() {
                $('nav').toggle('slide', { direction: 'right' }, 200);
            });
        });
        new Chart(ctx, { //판매사별 판매현황
          type: 'bar',
          data: {
            labels: salesLabels,
            datasets: [{
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCD56', '#FF9F40']
            }]
          },
          options: chartOption
        });
        new Chart(ctx02, { //앨범별 누계현황
          type: 'bar',
          data: {
            labels: albumLabels,
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCD56', '#FF9F40']
            }]
          },
          options: chartOption
        });
        new Chart(ctx03, { //기간별 판매현황
          type: 'bar',
          data: {
            labels: periodLabels,
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0', '#FFCD56', '#FF9F40']
            }]
          },
          options: chartOption
        });