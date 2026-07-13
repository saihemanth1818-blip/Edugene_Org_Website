/**
 * registration.js
 * Handles user registration and sends data to Spring Boot backend.
 */

document.addEventListener("DOMContentLoaded", () => {

    const registrationForm = document.getElementById("registrationForm");


    if (!registrationForm) {
        console.error("Registration form not found");
        return;
    }


    registrationForm.addEventListener("submit", async (event) => {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();



        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }



        const user = {

            name: name,

            email: email,

            password: password,

            role: "STUDENT"

        };



        try {


            const response = await fetch(
                "http://localhost:8080/auth/register",
                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(user)

                }
            );



            if (!response.ok) {


                const errorMessage = await response.text();

                alert("Registration failed: " + errorMessage);

                return;

            }



            const data = await response.json();



            console.log("Registered User:", data);



            alert("Registration successful! Please login.");



            window.location.href = "login.html";



        } catch (error) {


            console.error("Registration Error:", error);


            alert("Cannot connect to Spring Boot server.");

        }


    });


});