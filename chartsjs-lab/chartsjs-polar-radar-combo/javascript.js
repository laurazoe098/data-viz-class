//POLAR CHART SCRIPT

var ctxPolar = document.getElementById('myPolarChart').getContext('2d');
      var myChart = new Chart(ctxPolar, {
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


//RADAR CHART SCRIPT

        var ctxRadar = document.getElementById('myRadarChart').getContext('2d');
        var myChart = new Chart(ctxRadar, {
            type: 'radar',
            data: {
              labels: [
                'Education',
                'Housework',
                'Shopping',
                'Eating and Drinking',
                'Unpaid Work',
                'Sports',
                'Seeing Friends',
                'Personal Care'
              ],
              datasets: [{
                label: 'US',
                data: [31, 100, 22, 63, 65, 18, 44, 57],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
              },
              {
                label: 'China',
                data: [25, 103, 20, 100, 33, 23, 23, 52],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
              }]
            },
            options: {
              responsive: true,
              plugins: {
              title: {
                display: true,
                text: 'How people in the U.S. and China use their lesure time'
              },
            subtitle: {
                display: true,
                text: 'While people in the U.S. tend to spend more time seeing friends, those in China spend more time dining. Time spent on housework and shopping is about the same.'
            },
              elements: {
                line: {
                  borderWidth: 3
                }
              }
            }
          }
          });