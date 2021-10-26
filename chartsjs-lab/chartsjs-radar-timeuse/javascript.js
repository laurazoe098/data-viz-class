var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
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