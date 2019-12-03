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
				
                }
            ]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart'
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
							labelString: 'Month'
						}
					},
					y: {display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
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
		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
		var colorNames = Object.keys(window.chartColors);
	
		
