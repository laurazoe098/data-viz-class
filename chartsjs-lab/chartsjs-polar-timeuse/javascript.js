var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Paid Work',
              'Education',
              'Housework',
              'Shopping',
              'Eating and Drinking',
              'Unpaid Work',
              'Sports'
            ],
            datasets: [{
              label: 'US Timeuse',
              data: [251, 31, 100, 22, 63, 65, 18],
              backgroundColor: [
                '#177E89',
                '#084C61',
                '#72434B',
                '#DB3A34',
                '#FFC857',
                '#997C44',
                '#323031'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'How Americans use their waking hours'
              },
            subtitle: {
                display: true,
                text: 'Paid work and housework are among the tasks that take up most of our time in a day.'
            }
            }
          }
        });
