const password = document.getElementById('password');
        const passwordClosedEye = document.querySelector('.password-closed-eye');
        passwordClosedEye.addEventListener('click', () => {
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        });


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
        