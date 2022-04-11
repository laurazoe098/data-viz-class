var ctx = document.getElementById('polarChartUS').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
                'Paid Work', 
                'Educaiton',
                'Care for household members',
                'Housework',
                'Shopping',
                'Other unpaid work & volunteering',
                'Eating and drinking'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [251, 31, 31, 100, 22, 65, 63],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(153, 153, 255)',
                'rgb(0, 255, 255)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
              title: {
                display: true,
                text: 'How Americans use their waking hours'
              }
            }
          }
        });


        var ctx = document.getElementById('polarChartChina').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: [
                  'Paid Work', 
                  'Educaiton',
                  'Care for household members',
                  'Housework',
                  'Shopping',
                  'Other unpaid work & volunteering',
                  'Eating and drinking'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [315, 25, 23, 103, 20, 33, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(201, 203, 207)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 153, 255)',
                  'rgb(0, 255, 255)'
                ]
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'false',
                },
                title: {
                  display: true,
                  text: 'How the Chinese use their waking hours'
                }
              }
            }
          });
  