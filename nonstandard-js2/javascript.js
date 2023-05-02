var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Church/Synagogue/Temple/Mosque',
              'Commercial/Office Building',
              'Convenience Store',
              'Highway/Road/Alley/Street/Sidewalk',
              'Parking/Drop Lot/Garage',
              'Residence/Home',
              'Restaurant',
              'School-Elementary/Secondary'
            ],
            datasets: [{
              label: 'Anti-American Indian or Alaska Native',
              data: [16, 41, 37, 392, 157, 711, 24, 18],
              fill: true,
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'rgba(255, 0, 0, 1)',
                pointBackgroundColor: 'rgba(255, 0, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 0, 0, 1)'
            },
            {
              label: 'Anti-Arab',
              data: [8, 20, 81, 156, 60, 189, 47, 14],
              fill: true,
              backgroundColor: 'rgba(255, 127, 0, 0.2)',
                borderColor: 'rgba(255, 127, 0, 1)',
                pointBackgroundColor: 'rgba(255, 127, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 127, 0, 1)'
            },
            {
              label: 'Anti-Asian',
              data: [46, 77, 83, 688, 246, 1139, 199, 45],
              fill: true,
              backgroundColor: 'rgba(255, 255, 0, 0.2)',
                borderColor: 'rgba(255, 255, 0, 1)',
                pointBackgroundColor: 'rgba(255, 255, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 255, 0, 1)'
            },
            {
              label: 'Anti-Black or African American',
              data: [532, 1036, 613, 9702, 3225, 16072, 1007, 997],
              fill: true,
              backgroundColor: 'rgba(0, 255, 0, 0.2)',
                borderColor: 'rgba(0, 255, 0, 1)',
                pointBackgroundColor: 'rgba(0, 255, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 255, 0, 1)'
            },
            {
              label: 'Anti-Hispanic or Latino',
              data: [52, 208, 175, 2387, 820, 3121, 354, 129],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
  borderColor: 'rgb(255, 99, 132)',
  pointBackgroundColor: 'rgb(255, 99, 132)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            {
              label: 'Anti-Jewish',
              data: [1501, 469, 48, 1477, 500, 5182, 155, 412],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
  borderColor: 'rgb(54, 162, 235)',
  pointBackgroundColor: 'rgb(54, 162, 235)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
            {
              label: 'Anti-LGBT',
              data: [114, 121, 48, 1246, 403, 1699, 116, 90],
              fill: true,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderColor: 'rgb(75, 192, 192)',
  pointBackgroundColor: 'rgb(75, 192, 192)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(75, 192, 192)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'The Most Common Places Minority Groups Experience Hate Crimes'
            },
          subtitle: {
              display: true,
              text: 'Anti-Black or African American, Anti-Jewish and Anti-Hispanic or Latino hate crimes mostly happened in a home or residence.'
          },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          }
        }
        });