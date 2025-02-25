var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950', '1975', '2000', '2021'],
        datasets: [{
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            fill: false,
            borderColor: 'rgba(255, 0, 0, 1)',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
            fill: false,
            borderColor: 'rgba(255, 127, 0, 1)',
            backgroundColor: 'rgba(255, 127, 0, 0.5)',
            tension: 0.1},

        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            fill: false,
            borderColor: 'rgba(255, 255, 0, 1)',
            backgroundColor: 'rgba(255, 255, 0, 0.5)',
            tension: 0.1},
        
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: false,
            borderColor: 'rgba(0, 255, 0, 1)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            tension: 0.1},

        {
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 76.33],
            fill: false,
            borderColor: 'rgba(0, 0, 255, 1)',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            tension: 0.1}    
        ]
    },
    options: {
        responsive: true,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            title: {
                display: true,
                text: 'Life Expectancy in the Top 5 Most Populous Countries is the World',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Life expectancy has risen steadily in the last century'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});