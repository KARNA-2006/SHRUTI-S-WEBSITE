document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
  
    // Simple form submission simulation (Replace this with an actual API call if needed)
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    alert("Thank you for your message!");
  
    // Clear form after submission
    document.getElementById("contactForm").reset();
  });