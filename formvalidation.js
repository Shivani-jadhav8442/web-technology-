function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === "") {
        document.getElementById('name-error').textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById('email-error').textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value.trim();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Minimum 8 characters, at least one letter and one number
    if (password === "") {
        document.getElementById('password-error').textContent = "Password is required.";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = "Password must be at least 8 characters long and include at least one letter and one number.";
        isValid = false;
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('gender-error').textContent = "Please select a gender.";
        isValid = false;
    }

    // Validate Cast
    const cast = document.querySelectorAll('input[name="cast"]:checked');
    if (cast.length === 0) {
        document.getElementById('cast-error').textContent = "Please select at least one cast.";
        isValid = false;
    }

    // Validate Course
    const course = document.getElementById('course').value;
    if (course === "") {
        document.getElementById('course-error').textContent = "Please select a course.";
        isValid = false;
    }

    // Validate College Name
    const collegeName = document.getElementById('college-name').value.trim();
    if (collegeName === "") {
        document.getElementById('college-error').textContent = "College name is required.";
        isValid = false;
    }

    return isValid;
}
