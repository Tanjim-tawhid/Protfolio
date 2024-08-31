
var ctx = document.getElementById('myDoughnutChart').getContext('2d');  
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS3', 'JavaScript',  'Tailwind Css', 'Others'],
        datasets: [{
            label: 'Skill Set',
            data: [90, 80, 95, 15, 5],
            backgroundColor: [
                'rgba(255, 0, 0, 0.83)',
                'rgba(7, 120, 244, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(0 , 178 , 255 , 1)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white' 
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                titleColor: 'white', 
                bodyColor: 'white' 
            }
        }
    }
});
