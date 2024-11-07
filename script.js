document.querySelectorAll(".styled-button").forEach(button => {
    button.addEventListener("click", (e) => {
        const input = document.getElementById("display");

        // Check which button was clicked and perform the appropriate action
        if (e.target.textContent === "C") {
            input.value = ""; // Clear the display
        } else if (e.target.textContent === "x") {
            input.value = input.value.slice(0, -1); // Remove the last character
        } else if (e.target.textContent === "=") {
            try {
                input.value = eval(input.value) || ""; // Evaluate expression
            } catch {
                input.value = "Error"; // Handle errors
            }
        } else {
            input.value += e.target.textContent; // Add button text to display
        }

        // Scroll the display to the right to show the latest input character
        input.scrollLeft = input.scrollWidth;
    });
});
