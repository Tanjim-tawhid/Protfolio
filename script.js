
var ctx = document.getElementById('myDoughnutChart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['HTML', 'CSS3', 'JavaScript', 'Tailwind Css', 'Others'],
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
                    color: 'black'
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
//silder animation

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
///responsive
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    mobileMenu.innerHTML = '&#9776;'; // Hamburger menu icon
    nav.appendChild(mobileMenu);

    mobileMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
