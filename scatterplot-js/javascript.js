var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#ff0000",
                backgroundColor: "rgb(255,0,0,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#ff7f00",
                backgroundColor: "rgb(255,127,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffff00",
                backgroundColor:"rgb(255,255,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#00ff00",
                backgroundColor:"rgb(0,255,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#0000ff",
                backgroundColor:"rgb(0,0,255,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#2e2b5f",
                backgroundColor:"rgb(46,43,95,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#8b00ff",
                backgroundColor:"rgb(139,0,255,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#4b0082",
                backgroundColor:"rgb(75,0,130,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#9400d3",
                backgroundColor:"rgb(148,0,211,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Life Expectancy and GDP',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Countries with higher GDPs have higher life expectancy'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy Age'
                  }
              }
            }
          }
        });