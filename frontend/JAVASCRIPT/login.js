document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("Login form not found");
        return;
    }

    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please enter email and password.");
            return;
        }

        try {

            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Invalid Email or Password");
                return;
            }

            if (data.message === "Login Successful") {

                // Store login information
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("userEmail", email);

                alert("Login Successful");

                window.location.href = "student-details.html";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);
            alert("Unable to connect to the server.");

        }

    });

});