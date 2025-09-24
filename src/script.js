document.addEventListener('DOMContentLoaded', () => {
    // Handle Login/Sign Up Form Submission
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you'd send data to a server for authentication.
            // For this example, we'll just redirect to the dashboard.
            alert('Login successful! Redirecting to dashboard.');
            window.location.href = 'dashboard.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // In a real application, you'd send data to a server to create a new user.
            alert('Sign up successful! Please log in.');
            // You might redirect the user back to the login page after a successful signup.
        });
    }

    // Handle Refinancing Form Submission
    const refinancingForm = document.getElementById('refinancingForm');
    const refinancingResultDiv = document.getElementById('refinancingResult');
    const resultText = document.getElementById('resultText');

    if (refinancingForm) {
        refinancingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const existingLoan = parseFloat(document.getElementById('existingLoan').value);
            const annualIncome = parseFloat(document.getElementById('annualIncome').value);

            // Simple example calculation: If the existing loan is less than 50% of annual income, it's a good candidate for refinancing.
            if (existingLoan < (annualIncome * 0.5)) {
                resultText.textContent = "Your loan is a good candidate for refinancing. Contact us to learn more!";
                refinancingResultDiv.className = 'mt-4 p-3 border rounded text-center bg-off-white d-block';
            } else {
                resultText.textContent = "Refinancing might not be the best option for your current situation. We can still help you explore alternatives.";
                refinancingResultDiv.className = 'mt-4 p-3 border rounded text-center bg-off-white d-block';
            }
        });
    }
});