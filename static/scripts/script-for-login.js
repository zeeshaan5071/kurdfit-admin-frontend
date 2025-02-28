const password = document.getElementById('password');
        const passwordClosedEye = document.querySelector('.password-closed-eye');
        passwordClosedEye.addEventListener('click', () => {
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        });

        function validation(){
            let form = document.querySelector('.form-container')
            let email = document.querySelector('#email').value
            let message = document.querySelector('#email-message')
            let email_input_container = document.querySelector(".email-icon-and-input-container");
            let green_tick = document.querySelector(".green-tick-icon")
            let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (email.match(pattern)){
               email_input_container.style.border = "none"
               message.innerHTML = ""
                green_tick.style.visibility = "visible"; // Show the tick
            }
            else{
                message.innerHTML = "Incorrect email, Please try again."
                message.style.color = "#DC1F1F"
                email_input_container.style.border = "1px solid #DC1F1F"
                green_tick.style.visibility = "hidden"
            }
        }


        // document.addEventListener("DOMContentLoaded", function () {
        //     const emailInput = document.querySelector(".form-inputs");
        //     const container = document.querySelector(".emial-icon-and-input-container");
        
        //     // Error message add karna
        //     let errorMessage = document.createElement("div");
        //     errorMessage.classList.add("error-message");
        //     errorMessage.textContent = "Incorrect Email";
        //     container.appendChild(errorMessage);
        
        //     emailInput.addEventListener("input", function () {
        //         const emailValue = emailInput.value;
        //         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        
        //         if (!emailPattern.test(emailValue)) {
        //             emailInput.classList.add("error-border");
        //             errorMessage.style.display = "block";
        //         } else {
        //             emailInput.classList.remove("error-border");
        //             errorMessage.style.display = "none";
        //         }
        //     });
        // });
        