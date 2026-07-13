/**
 * auth.js
 * Protects pages that require login.
 */


document.addEventListener("DOMContentLoaded", () => {


    const isLoggedIn = sessionStorage.getItem("isLoggedIn");


    // If user is not logged in
    if (isLoggedIn !== "true") {


        alert("Please login before accessing this page.");


        window.location.href = "login.html";


        return;

    }


});