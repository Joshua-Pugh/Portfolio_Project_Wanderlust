/*
 * This script manages the slideshow, testimonial display functionality, active link highlighting, and weather data fetching for the Wanderlust Travel website.
 * 
 * Functions:
 * - showSlides: Automatically cycles through the slideshow images, displaying each image for 5 seconds.
 * - plusSlides: Advances the slideshow by a specified number of slides.
 * - currentSlide: Displays a specific slide based on the provided index.
 * - showTestimonials: Automatically cycles through the testimonials, displaying each testimonial for 5 seconds.
 * - Highlight active link: Highlights the active navigation link based on the current URL.
 * - Fetch and display weather data: Fetches weather data from the Open-Meteo API and displays it in the sidebar.
 * 
 * The script uses the 'mySlides' class for slideshow images and the 'dot' class for navigation dots.
 * The 'testimonial-slide' class is used for testimonials.
 */

let slideIndex = 0;

showSlides();

/**
* Automatically cycles through the slideshow images, displaying each image for 5 seconds.
*/
function showSlides() {			
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if (slides.length === 0) {
		console.log("No slides found.");
		return;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 5000); // Change image every 5 seconds
}
/**
* Advances the slideshow by a specified number of slides.
* @param {number} n - The number of slides to advance.
*/
function plusSlides(n) {
	showSlides(slideIndex += n);
}
		
/**
* Displays a specific slide based on the provided index.
* @param {number} n - The index of the slide to display.
*/
function currentSlide(n) {
	showSlides(slideIndex = n);
}

let testimonialIndex = 0;
showTestimonials();

/**
* Automatically cycles through the testimonials, displaying each testimonial for 5 seconds.
*/
function showTestimonials() {
	let i;
	let testimonials = document.getElementsByClassName("testimonial-slide");

	if (testimonials.length === 0) {
		console.log("No testimonials found.");
		return;
	}

	for (i = 0; i < testimonials.length; i++) {
		testimonials[i].style.display = "none";  
	}
	testimonialIndex++;
	if (testimonialIndex > testimonials.length) {testimonialIndex = 1}    
	testimonials[testimonialIndex-1].style.display = "block";  
	setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
}

/**
* Highlights the active navigation link based on the current URL.
*/
document.addEventListener('DOMContentLoaded', function() {
	var currentPath = window.location.pathname.split('/').pop();
	if (currentPath === "") {
		currentPath = "index.html"; // Default to index.html if currentPath is empty
	}
	console.log("Current Path:", currentPath);

	var navLinks = document.querySelectorAll("nav ul li a");

	navLinks.forEach(function(link) {
		console.log("Checking link:", link.getAttribute('href'));
		if (link.getAttribute('href') === currentPath) {
			link.parentElement.classList.add("active");
			console.log("Active link found:", link.getAttribute('href'));
		}
	});
});

/**
 * Fetches weather data from the Open-Meteo API and displays it in the News sidebar.
 */
document.addEventListener('DOMContentLoaded', function() {
    const locations = [
        { name: 'Maldives', lat: 3.2028, lon: 73.2207, id: 'weather-maldives' },
        { name: 'Bora Bora', lat: -16.5004, lon: -151.7415, id: 'weather-borabora' },
        { name: 'Hawaii', lat: 19.8968, lon: -155.5828, id: 'weather-hawaii' },
        { name: 'Bahamas', lat: 25.0343, lon: -77.3963, id: 'weather-bahamas' },
        { name: 'Fiji', lat: -17.7134, lon: 178.0650, id: 'weather-fiji' },
        { name: 'Santorini', lat: 36.3932, lon: 25.4615, id: 'weather-santorini' }
    ];

	if (locations.length === 0) {
		console.log("No locations found.");
		return;
	}

    const weatherCodeMapping = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Drizzle: Light',
        53: 'Drizzle: Moderate',
        55: 'Drizzle: Dense intensity',
        56: 'Freezing Drizzle: Light',
        57: 'Freezing Drizzle: Dense intensity',
        61: 'Rain: Slight',
        63: 'Rain: Moderate',
        65: 'Rain: Heavy intensity',
        66: 'Freezing Rain: Light',
        67: 'Freezing Rain: Heavy intensity',
        71: 'Snow fall: Slight',
        73: 'Snow fall: Moderate',
        75: 'Snow fall: Heavy intensity',
        77: 'Snow grains',
        80: 'Rain showers: Slight',
        81: 'Rain showers: Moderate',
        82: 'Rain showers: Violent',
        85: 'Snow showers: Slight',
        86: 'Snow showers: Heavy',
        95: 'Thunderstorm: Slight or moderate',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };

    locations.forEach(location => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`)
            .then(response => response.json())
            .then(data => {
                const weatherElement = document.getElementById(location.id);
                if (!weatherElement) {
                    console.log("No locations found to display weather data.");
                    return;
                }
                if (!data || !data.current_weather) {
                    weatherElement.innerHTML = `${location.name}: Weather data not available`;
                    return;
                }
                const weather = data.current_weather;
                const weatherDescription = weatherCodeMapping[weather.weathercode] || 'Unknown weather';
                const temperatureF = (weather.temperature * 9/5) + 32; // Convert Celsius to Fahrenheit
                weatherElement.innerHTML = `${location.name}: ${temperatureF.toFixed(1)}°F, ${weatherDescription}`;
            })
            .catch(error => {
                const weatherElement = document.getElementById(location.id);
                if (weatherElement) {
                    weatherElement.innerHTML = `${location.name}: Weather data not available`;
                }
                console.error('Error fetching weather data:', error);
            });
    });
});