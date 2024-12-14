function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('name_error').innerText = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('name_error').innerText = '';
    }

    // Father's Name validation
    const fatherName = document.getElementById('father_name').value;
    if (fatherName === '') {
        document.getElementById('father_name_error').innerText = 'Father\'s Name is required';
        isValid = false;
    } else {
        document.getElementById('father_name_error').innerText = '';
    }

    // Mobile validation
    const mobile = document.getElementById('mobile').value;
    if (mobile === '' || !/^\d{10}$/.test(mobile)) {
        document.getElementById('mobile_error').innerText = 'Valid mobile number is required';
        isValid = false;
    } else {
        document.getElementById('mobile_error').innerText = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email_error').innerText = 'Valid email is required';
        isValid = false;
    } else {
        document.getElementById('email_error').innerText = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    if (password === '') {
        document.getElementById('password_error').innerText = 'Password is required';
        isValid = false;
    } else {
        document.getElementById('password_error').innerText = '';
    }
    if (confirmPassword === '' || password !== confirmPassword) {
        document.getElementById('confirm_password_error').innerText = 'Passwords must match';
        isValid = false;
    } else {
        document.getElementById('confirm_password_error').innerText = '';
    }

    if (isValid) {
        Swal.fire('Good job!', 'Form submitted successfully!', 'success');
    }
}

function togglePasswordVisibility(id, element) {
    const input = document.getElementById(id);
    const icon = element.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}
