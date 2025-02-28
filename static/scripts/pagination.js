// start logic for pagination
document.addEventListener("DOMContentLoaded", function () {
    const numberSpans = document.querySelectorAll(".counting-number-container span");
    numberSpans[0].classList.add("active");

    numberSpans.forEach(span => {
        span.addEventListener("click", function () {
            // Sab spans se active class hatao
            numberSpans.forEach(s => s.classList.remove("active"));

            // Jo click hua hai usko active banao
            this.classList.add("active");
        });
    });
});

// end of logic for pagination