var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Aisa', 'Sub-Subharan Africa'],
        datasets: [{
            label: 'Average of GDP per Capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#ff0800'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP Per Capita By Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'America, Europe & Central Asia had the highest GDPs'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});