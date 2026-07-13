/**
 * logout.js
 * Handles logout from dynamically created navbar.
 */


document.addEventListener("click", function(event) {


    // Check logout button click

    if (event.target && event.target.id === "logout-button") {


        // Remove login data

        sessionStorage.clear();



        alert("Logged out successfully.");



        // Redirect to login page

        window.location.href = "login.html";


    }


});