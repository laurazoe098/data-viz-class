var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['California', 'Michigan', 'New York', 'Massachusetts', 'New Jersey'],
        datasets: [{
            label: 'Total Offenders',
            data: [27598, 8840, 8417, 6258, 6074],
            backgroundColor: [
                '#8B008B'
            ]
        },
        {
            label: 'Total Victims',
            data: [28089, 7985, 7354, 7272, 8931],
            backgroundColor: [
                '#0000FF'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top 5 States With Most Hate Crime (2000-2020)',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'California had almost triple the amount of hate crime offenders from 2000-2020 compared to the other top 5 states.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});