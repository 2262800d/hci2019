var MONTHS = ['2000','2005','2010','2012','2015','2020','2025'];
var config = {
    type: 'line',
    data: {
        labels: ['2000','2005','2010','2012','2015','2020','2025'],
        datasets: [{
            label: 'Male',
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                
            ],
            fill: false,
        
        },
        {
            label: 'Female',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                
            ],
            fill: false,
        
        },
        {
            label: 'Death rate',
            backgroundColor: window.chartColors.black,
            borderColor: window.chartColors.black,
            data: [
                
            ],
            fill: false,
        
        }
    ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Tobacco use'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            },
            y: {display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage'
                }
            },
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }]
        }
    }
};
var config2 = {
    type: 'line',
    data: {
        labels: ['2008','2010','2012','2014'],
        datasets: [{
            label: 'Cigarette Prices in $US(2008-2010)',
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: [
                
            ],
            fill: false,
        
        },
    ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Cigarette Prices in $US(2008-2010)'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            },
            y: {display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Price($US)'
                }
            },
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 20
                }
            }]
        }
    }
};
window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
    
    var ctx2 = document.getElementById('canvas2').getContext('2d');
    window.myLine2 = new Chart(ctx2, config2);
};
var colorNames = Object.keys(window.chartColors);
	
		
