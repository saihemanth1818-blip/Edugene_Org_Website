document.addEventListener("DOMContentLoaded", () => {


    const contactForm = document.getElementById("contactForm");


    if (!contactForm) {

        console.error("Contact form not found.");

        return;

    }



    // Check login status

    const isLoggedIn = sessionStorage.getItem("isLoggedIn");



    if (isLoggedIn !== "true") {


        alert("Please login before filling the form.");


        window.location.href = "login.html";


        return;

    }

    // If the user is logged in, show the form
    contactForm.style.display = "block";





    // User is logged in, allow form submission

    contactForm.addEventListener("submit", async function (event) {


        event.preventDefault();



        const contact = {


            name: document.querySelector("[name='name']").value.trim(),


            email: document.querySelector("[name='email']").value.trim(),


            phone: document.querySelector("[name='phone']").value.trim(),


            message: document.querySelector("[name='message']").value.trim()


        };



        console.log("Sending:", contact);



        try {



            const response = await fetch(
                "http://localhost:8080/contacts",
                {

                    method: "POST",


                    headers: {

                        "Content-Type": "application/json"

                    },


                    body: JSON.stringify(contact)


                }
            );




            if (response.ok) {


                alert("Message Sent Successfully");


                contactForm.reset();


            }
            else {


                const error = await response.text();


                console.error(error);


                alert("Error while saving data.");


            }



        }
        catch(error) {


            console.error("Fetch Error:", error);


            alert("Cannot connect to Spring Boot Server.");


        }



    });



});