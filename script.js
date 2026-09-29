let yes = document.getElementById("yes");
let no = document.getElementById("no");
let invitation = document.getElementById("invitation");
let planner = document.getElementById("planner");
let dateNext = document.getElementById("date-next");
let plannerBox = document.getElementById("planner-box");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step3b = document.getElementById("step3b");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let step6 = document.getElementById("step6");
let step7 = document.getElementById("step7");
let foodButtons = document.querySelectorAll(".food-option");
let otherFood = document.getElementById("other-food");
let otherFoodText = document.getElementById("other-food-text");
let foodNext = document.getElementById("food-next");
let movieButtons = document.querySelectorAll(".movie-option");
let otherMovie = document.getElementById("other-movie");
let otherMovieText = document.getElementById("other-movie-text");
let movieNext = document.getElementById("movie-next");
let progress = document.getElementById("progress");
let activityButtons = document.querySelectorAll(".activity-option");
let otherActivity = document.getElementById("other-activity");
let otherActivityText = document.getElementById("other-activity-text");
let activityNext = document.getElementById("activity-next");
let dessertButtons = document.querySelectorAll(".dessert-option");
let otherDessert = document.getElementById("other-dessert");
let otherDessertText = document.getElementById("other-dessert-text");
let dessertNext = document.getElementById("dessert-next");
let recipeButtons = document.querySelectorAll(".recipe-option");
let otherRecipe = document.getElementById("other-recipe");
let otherRecipeText = document.getElementById("other-recipe-text");
let recipeNext = document.getElementById("recipe-next");
let sexYes = document.getElementById("sex-yes");
let sexNo = document.getElementById("sex-no");
let noSex = 0;
let date = document.getElementById("date");
let time = document.getElementById("time");
let music = document.getElementById("music");
let smsButton = document.getElementById("sms-button");


let selectedFood = "";
let selectedRestaurant = "";
let selectedMovie = "";
let selectedActivity = "";
let selectedDessert = "";
let bakingRequest = "";
let selectedRecipe = "";

yes.addEventListener("click", function() {
    music.play()
    invitation.style.display = "none";
    planner.style.display = "block";
});

dateNext.addEventListener("click", function() {
    if (date.value === "" || time.value === "") {
        alert("Pick a date and time for our date!💕");
    } else {
        step1.style.display = "none";
        step2.style.display = "block";
        progress.style.width = "20%";
    }
});

foodButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        if (event.target.classList.contains("restaurant-input")) {
            return;
        }

        foodButtons.forEach(function(btn) {
            btn.classList.remove("selected");

            const input = btn.querySelector(".restaurant-input");
            input.value = "";
        });

        button.classList.add("selected");

        otherFood.checked = false;
        otherFoodText.disabled = true;
        otherFoodText.value = "";

        selectedFood = button.dataset.food;
        selectedRestaurant = "";
    });

});

foodButtons.forEach(function(button) {

    const restaurantInput = button.querySelector(".restaurant-input");

    restaurantInput.addEventListener("input", function() {
        if (button.classList.contains("selected")) {
            selectedRestaurant = restaurantInput.value;
        }
    });

});

otherFood.addEventListener("change", function() {
    if (otherFood.checked) {
        foodButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        otherFoodText.disabled = false;
        selectedFood = "";
    } else {
        otherFoodText.disabled = true;
        otherFoodText.value = "";
    }
});

otherFoodText.addEventListener("input", function() {
    if(otherFood.checked){
        selectedFood = otherFoodText.value;
    }
});

foodNext.addEventListener("click", function() {
    if (selectedFood === "") {
        alert("Please select a food option or enter something else.");
    } else {
        console.log(selectedFood);
        step2.style.display = "none";
        step3.style.display = "block";
        progress.style.width = "40%";
    }

});


activityButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        activityButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        otherActivity.checked = false;
        otherActivityText.disabled = true;
        otherActivityText.value = "";

        selectedActivity = button.dataset.activity;
    });
});

otherActivity.addEventListener("change", function() {
    if (otherActivity.checked) {
        activityButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        otherActivityText.disabled = false;
        selectedActivity = "";
    } else {
        otherActivityText.disabled = true;
        otherActivityText.value = "";
    }
});

otherActivityText.addEventListener("input", function() {
    if(otherActivity.checked){
        selectedActivity = otherActivityText.value;
    }
});

activityNext.addEventListener("click", function() {
    if (selectedActivity === "") {
        alert("Please select an activity option or enter something else.");
    } else {
        if (selectedActivity === "Baking") {
            step3.style.display = "none";
            step3b.style.display = "block";
        } else {
            step3.style.display = "none";
            step4.style.display = "block";
        }
    }
    progress.style.width = "60%";

});






recipeButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        recipeButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        otherRecipe.checked = false;
        otherRecipeText.disabled = true;
        otherRecipeText.value = "";

        selectedRecipe = button.dataset.recipe;
    });
});

otherRecipe.addEventListener("change", function() {
    if (otherRecipe.checked) {
        recipeButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        otherRecipeText.disabled = false;
        selectedRecipe = "";
    } else {
        otherRecipeText.disabled = true;
        otherRecipeText.value = "";
    }
});

otherRecipeText.addEventListener("input", function() {
    if(otherRecipe.checked){
        selectedRecipe = otherRecipeText.value;
    }
});

recipeNext.addEventListener("click", function() {
    if (selectedRecipe === "") {
        alert("Please select a recipe option or enter something else.");
    } else {
        console.log(selectedRecipe);
        step3b.style.display = "none";
        step5.style.display = "block";
        progress.style.width = "80%";
    }
});





dessertButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {

        if (event.target.classList.contains("surprise-input")) {
            return;
        }

        dessertButtons.forEach(function(btn) {
            btn.classList.remove("selected");

            const input = btn.querySelector(".surprise-input");
            if (input) {
                input.value = "";
            }
        });

        button.classList.add("selected");
        otherDessert.checked = false;
        otherDessertText.disabled = true;
        otherDessertText.value = "";

        selectedDessert = button.dataset.dessert;
        bakingRequest = "";
    });
});

const surpriseInput = document.querySelector(".surprise-input");

surpriseInput.addEventListener("input", function() {
    if (selectedDessert === "Surprise Baking") {
        bakingRequest = surpriseInput.value;
    }
});

otherDessert.addEventListener("change", function() {
    if (otherDessert.checked) {
        dessertButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        otherDessertText.disabled = false;
        selectedDessert = "";
    } else {
        otherDessertText.disabled = true;
        otherDessertText.value = "";
    }
});

otherDessertText.addEventListener("input", function() {
    if(otherDessert.checked){
        selectedDessert = otherDessertText.value;
    }
});

dessertNext.addEventListener("click", function() {
    if (selectedDessert === "") {
        alert("Please select an dessert option or enter something else.");
    } else {
        console.log(selectedDessert);
        step4.style.display = "none";
        step5.style.display = "block";
        progress.style.width = "80%";
    }

});






movieButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        movieButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        otherMovie.checked = false;
        otherMovieText.disabled = true;
        otherMovieText.value = "";

        selectedMovie = button.dataset.movie;
    });
});

otherMovie.addEventListener("change", function() {
    if (otherMovie.checked) {
        movieButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        otherMovieText.disabled = false;
        selectedMovie = "";
    } else {
        otherMovieText.disabled = true;
        otherMovieText.value = "";
    }
});

otherMovieText.addEventListener("input", function() {
    if(otherMovie.checked){
        selectedMovie = otherMovieText.value;
    }
});

movieNext.addEventListener("click", function() {
    if (selectedMovie === "") {
        alert("Please select a movie option or enter something else.");
    } else {
        console.log(selectedMovie);
        step5.style.display = "none";
        step6.style.display = "block";
        progress.style.width = "100%";
    }

});

sexNo.addEventListener("click", function() {
    if(noSex === 0){
        sexNo.textContent = "I'm gay😌";
        noSex++;
    }else{
        alert("🎊 You're gay! 🎊")
    }
});

sexYes.addEventListener("click", function() {
    alert("Official date approved!💖");

    document.getElementById("summary-date").textContent = date.value;
    let timeParts = time.value.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = timeParts[1];

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    let formattedTime = hours + ":" + minutes + " " + ampm;

    document.getElementById("summary-time").textContent = formattedTime;



    document.getElementById("summary-food").textContent =
        selectedRestaurant.trim() !== ""
            ? selectedFood + " - " + selectedRestaurant
            : selectedFood;
    document.getElementById("summary-activity").textContent = selectedActivity;
    if(selectedActivity === "Baking"){
        document.getElementById("summary-dessert").textContent = selectedRecipe;
    }else{
        document.getElementById("summary-dessert").textContent =
            bakingRequest.trim() !== ""
                ? selectedDessert + " - " + bakingRequest
                : selectedDessert;
    }
    document.getElementById("summary-movie").textContent = selectedMovie;
    step6.style.display = "none";
    step7.style.display = "block";
});

smsButton.addEventListener("click", function() {

    // Convert time to 12-hour format
    let timeParts = time.value.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = timeParts[1];

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    let formattedTime = hours + ":" + minutes + " " + ampm;

    // Build the message
    let message =
        "💕 Our Date Itinerary 💕\n\n" +
        "📅 Date: " + date.value + "\n" +
        "⏰ Time: " + formattedTime + "\n" +
        "🍽️ Food: " + selectedFood;

    if (selectedRestaurant.trim() !== "") {
        message += " - " + selectedRestaurant;
    }

    message += "\n" +
        "🎯 Activity: " + selectedActivity;

    if (selectedActivity === "Baking") {
        message += "\n🍫 Sweet Treat: " + selectedRecipe;
    } else {
        message += "\n🍫 Sweet Treat: " + selectedDessert;

        if (bakingRequest.trim() !== "") {
            message += " - " + bakingRequest;
        }
    }

    message += "\n🎬 Movie: " + selectedMovie;

    window.location.href =
        "sms:?body=" + encodeURIComponent(message);
});