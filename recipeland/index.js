document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const dateTimeDisplay = document.getElementById("current-date-time");
        const now = new Date();

        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: false 
        };
        const formattedDateTime = now.toLocaleString('en-US', options);

        dateTimeDisplay.textContent = formattedDateTime;
    }


    updateDateTime();

    setInterval(updateDateTime, 1000);
});

// Popup form logic for feedback form (show/hide)
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup-form');
    const openPopupBtn = document.querySelector('.open-popup');
    const closePopupBtn = document.querySelector('.close-popup');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });


    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});


document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 10px";
        } else {
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
                item.style.padding = "0 10px";
            });

            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "10px";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.querySelector(".open-popup");
    const popupForm = document.querySelector(".popup-form");
    const closePopupButton = document.querySelector(".close-popup");
    const form = popupForm.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector("textarea");

    openPopupButton.addEventListener("click", function() {
        popupForm.style.display = "block";
    });

    closePopupButton.addEventListener("click", function() {
        popupForm.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popupForm) {
            popupForm.style.display = "none";
        }
    });

    // Form validation
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (emailInput.value.trim() === "") {
            alert("Please enter your email address.");
            return; 
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter your message.");
            return; 
        }

        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return; 
        }

        alert("Thank you for your feedback!");
        form.submit();
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Star Rating Logic
    const stars = document.querySelectorAll('.star'); // Select all star elements
    const ratingMessage = document.getElementById('rating-message'); // Select the message element

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const selectedRating = this.getAttribute('data-value'); // Get the value of the clicked star

            // Update the color of the stars based on the selected rating
            stars.forEach(s => {
                s.style.color = s.getAttribute('data-value') <= selectedRating ? 'gold' : 'grey';
            });

            // Update the message displayed on the page
            ratingMessage.textContent = `You rated ${selectedRating} star${selectedRating > 1 ? 's' : ''}.`;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");

    // Check localStorage for saved theme preference
    if (localStorage.getItem("theme") === "night") {
        document.body.classList.add("night");
        themeSwitch.checked = true; // Set toggle to checked if night theme is active
    }

    themeSwitch.addEventListener("change", function() {
        if (this.checked) {
            // Switch to Night theme
            document.body.classList.add("night");
            localStorage.setItem("theme", "night"); // Save theme preference
        } else {
            // Switch to Day theme
            document.body.classList.remove("night");
            localStorage.setItem("theme", "day"); // Save theme preference
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreContent = document.getElementById("more-content");

    readMoreBtn.addEventListener("click", function() {
        if (moreContent.style.display === "none") {
            moreContent.style.display = "inline";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});

// Select the reset button
const resetBtn = document.getElementById('reset-btn');

// Add event listener to reset button to clear form inputs
resetBtn.addEventListener('click', function() {
    document.querySelectorAll('.popup-form input, .popup-form textarea').forEach(input => {
        input.value = '';
    });
});

// Select all nav links in the navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Variable to track the currently focused link
let currentFocusedIndex = 0;

// Set initial focus to the first link
navLinks[currentFocusedIndex].focus();

// Event listener for keydown on the document
document.addEventListener('keydown', function(event) {
    // Check if the left or right arrow key is pressed
    if (event.key === 'ArrowRight') {
        // Move focus to the next link
        currentFocusedIndex = (currentFocusedIndex + 1) % navLinks.length;
        navLinks[currentFocusedIndex].focus();
        event.preventDefault(); // Prevent default scrolling behavior
    } else if (event.key === 'ArrowLeft') {
        // Move focus to the previous link
        currentFocusedIndex = (currentFocusedIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[currentFocusedIndex].focus();
        event.preventDefault(); // Prevent default scrolling behavior
    }
});

// JavaScript to handle multi-step form navigation
const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');

// Callback function to update the form steps based on user actions
function updateFormStep(step) {
    steps.forEach((formStep, index) => {
        formStep.style.display = index === step ? 'block' : 'none';
    });
    
    // Update button visibility
    prevBtn.style.display = step > 0 ? 'inline' : 'none';
    nextBtn.style.display = step < steps.length - 1 ? 'inline' : 'none';
    submitBtn.style.display = step === steps.length - 1 ? 'inline' : 'none';
}

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        if (currentStep === steps.length - 1) {
            // Display confirmation data on the last step
            document.getElementById('confirmName').textContent = document.getElementById('recipeName').value;
            document.getElementById('confirmCategory').textContent = document.getElementById('category').value;
            document.getElementById('confirmIngredients').textContent = document.getElementById('ingredients').value;
            document.getElementById('confirmInstructions').textContent = document.getElementById('instructions').value;
        }
        updateFormStep(currentStep);
    }
});

// Event listener for "Back" button
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateFormStep(currentStep);
    }
});

// Initial form step display
updateFormStep(currentStep);

// Handle form submission
document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Handle form submission logic here, e.g., save data or display a success message
    alert('Recipe submitted successfully!');
    
    // Optionally reset the form and return to the first step
    this.reset();
    currentStep = 0;
    updateFormStep(currentStep);
});

// Recipe data with ingredients
const recipes = [
    {
        title: 'Spaghetti Carbonara',
        image: 'spaghetti-carbonara.jpg',
        description: 'A creamy Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper']
    },
    {
        title: 'Chicken Tikka Masala',
        image: 'Chicken-Tikka-Masala .jpeg',
        description: 'Marinated chicken cooked in a spiced curry sauce, served with rice or naan.',
        ingredients: ['Chicken', 'Yogurt', 'Tomato Puree', 'Garam Masala', 'Cream']
    },
    {
        title: 'Beef Stroganoff',
        image: 'beefstroganoff.jpg',
        description: 'Tender strips of beef cooked in a creamy sauce with mushrooms and onions.',
        ingredients: ['Beef', 'Mushrooms', 'Onions', 'Sour Cream', 'Garlic']
    },
    {
        title: 'Caprese Salad',
        image: 'Caprese-Salad-main-1.jpg.webp',
        description: 'A fresh Italian salad made with mozzarella, tomatoes, basil, olive oil, and balsamic vinegar.',
        ingredients: ['Mozzarella Cheese', 'Tomatoes', 'Fresh Basil', 'Olive Oil', 'Balsamic Vinegar']
    },
    {
        title: 'Shakshuka',
        image: 'shakshuka.webp',
        description: 'A North African dish of poached eggs in a spicy tomato and bell pepper sauce, often served with bread.',
        ingredients: ['Eggs', 'Tomatoes', 'Bell Peppers', 'Onions', 'Spices']
    },
    {
        title: 'Teriyaki Salmon',
        image: 'teriyaki-salmon-recipe.jpeg',
        description: 'Grilled salmon fillet glazed with a sweet and savory teriyaki sauce, served with rice and vegetables.',
        ingredients: ['Salmon Fillet', 'Teriyaki Sauce', 'Rice', 'Vegetables', 'Sesame Seeds']
    },
    {
        title: 'Tacos al Pastor',
        image: 'tacos.jpeg',
        description: 'Mexican tacos made with marinated pork, pineapple, onions, and cilantro.',
        ingredients: ['Pork', 'Pineapple', 'Onions', 'Cilantro', 'Corn Tortillas']
    },
    {
        title: 'Pad Thai',
        image: 'pad-thai.webp',
        description: 'A popular Thai stir-fried noodle dish made with rice noodles, shrimp or chicken, peanuts, and bean sprouts.',
        ingredients: ['Rice Noodles', 'Shrimp or Chicken', 'Eggs', 'Peanuts', 'Bean Sprouts']
    },
    {
        title: 'Moussaka',
        image: 'Moussaka.jpeg',
        description: 'A Greek baked dish made with layers of eggplant, ground meat, and béchamel sauce.',
        ingredients: ['Eggplant', 'Ground Meat', 'Potatoes', 'Tomato Sauce', 'Béchamel Sauce']
    }
];


// Function to display recipes with ingredient toggle functionality
function displayRecipes() {
    const recipeContainer = document.querySelector('.card-group');
    recipeContainer.innerHTML = ''; // Clear existing cards

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('card', 'col-lg-4', 'col-md-6', 'mb-4');
        recipeCard.style.width = '18rem';
        
        recipeCard.innerHTML = `
            <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.description}</p>
                <a href="#" class="btn btn-primary view-recipe" data-index="${index}">View Recipe</a>
                <ul class="ingredient-list" style="display: none;"></ul>
            </div>
        `;
        
        recipeContainer.appendChild(recipeCard);
    });

    // Add event listeners for "View Recipe" buttons
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const recipeIndex = event.target.getAttribute('data-index');
            toggleIngredients(recipeIndex);
        });
    });
}

// Function to toggle ingredients display
function toggleIngredients(index) {
    const recipe = recipes[index];
    const ingredientList = document.querySelectorAll('.ingredient-list')[index];
    
    if (ingredientList.style.display === 'none') {
        ingredientList.style.display = 'block';
        ingredientList.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
    } else {
        ingredientList.style.display = 'none';
    }
}

// Initialize recipes on page load
document.addEventListener('DOMContentLoaded', displayRecipes);


document.addEventListener("DOMContentLoaded", function() {
    // Load the sound
    const notificationSound = new Audio('sounds/notification.mp3');

    // Function to play sound
    function playSound() {
        notificationSound.currentTime = 0; // Reset the sound to the start
        notificationSound.play();
    }

    // Attach click event listeners to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('button-animated'); // Add animation class
        button.addEventListener('click', playSound);
    });

    function updateDateTime() {
        const dateTimeDisplay = document.getElementById("current-date-time");
        const now = new Date();

        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: false 
        };
        const formattedDateTime = now.toLocaleString('en-US', options);

        dateTimeDisplay.textContent = formattedDateTime;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});

// Popup form logic for feedback form (show/hide)
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup-form');
    const openPopupBtn = document.querySelector('.open-popup');
    const closePopupBtn = document.querySelector('.close-popup');

    openPopupBtn.addEventListener('click', () => {
        popup.classList.add('show'); // Add show class for animation
        playSound(); // Play sound when popup opens
    });

    closePopupBtn.addEventListener('click', () => {
        popup.classList.remove('show'); // Remove show class for animation
        playSound(); // Play sound when popup closes
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show'); // Remove show class for animation
            playSound(); // Play sound when clicking outside the popup
        }
    });
});

// ... (rest of your existing code remains unchanged)

// Ensure to add playSound() in their respective event listeners for form validation and other button interactions.


