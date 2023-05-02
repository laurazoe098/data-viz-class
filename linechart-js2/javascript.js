var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Anti-American Indian or Alaska Native',
            data: [65, 99, 72, 77, 102, 97, 73, 75, 65, 90, 47, 73, 119, 116, 156, 141, 173, 313, 201, 107, 130],
            fill: false,
            borderColor: 'hotpink',
            backgroundColor: 'rgba(255, 105, 180, 0.5)',
            tension: 0.1},
        {
            label: 'Anti-Arab',
            data: [50, 303, 93, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 52, 58, 133, 94, 128, 95],
            fill: false,
            borderColor: 'purple',
            backgroundColor: 'rgba(128, 0, 128, 0.5)',
            tension: 0.1},

        {
            label: 'Anti-Asian',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            fill: false,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            tension: 0.1},
        
        {
            label: 'Anti-LGBTQ',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: false,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            tension: 0.1},

        {
            label: 'Anti-Jewish',
            data: [1285, 1208, 1091, 1030, 1089, 1064, 1132, 1129, 1172, 1136, 1040, 934, 1045, 742, 649, 736, 866, 1034, 935, 1132, 1000],
            fill: false,
            borderColor: 'yellow',
            backgroundColor: 'rgba(255, 255, 0, 0.5)',
            tension: 0.1},
            
        {
            label: 'Anti-Hispanic or Latino',
            data: [782, 821, 640, 604, 653, 739, 834, 828, 806, 693, 747, 531, 569, 442, 401, 394, 489, 558, 673, 784, 795],
            fill: false,
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 127, 0, 0.5)',
            tension: 0.1} ,
            
        {
            label: 'Anti-Black or African American',
            data: [3613, 3745, 3102, 3176, 3499, 3365, 3311, 3458, 3688, 2919, 2766, 2647, 2588, 2440, 2053, 2228, 2256, 2497, 2417, 2641, 4469],
            fill: false,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
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
                text: 'Hate Crime Against Minority Groups From 2000 - 2020',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Anti-African American hate crimes skyrocketed in 2020.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});