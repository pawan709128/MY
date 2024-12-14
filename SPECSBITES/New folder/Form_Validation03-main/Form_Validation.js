function validateform() {
    let name = document.getElementById('name').value;
    let father_name = document.getElementById('father_name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;



    // Reset error messages
    document.getElementById('name_error').innerHTML = '';
    document.getElementById('father_name_error').innerHTML = '';
    document.getElementById('mobile_error').innerHTML = '';
    document.getElementById('email_error').innerHTML = '';

    if (name == '') {
        document.getElementById('name_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Name';

    }
    if (father_name == '') {
        document.getElementById('father_name_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Father\'s Name';

    }
    if (mobile == '') {
        document.getElementById('mobile_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Mobile';

    }
    if (email == '') {
        document.getElementById('email_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Email';

    }

    if (name != '' && father_name != '' && mobile != '' && email != '') {
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully',
            showConfirmButton: false,
            timer: 1500
        });
        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('father_name').value = '';
        document.getElementById('mobile').value = '';
        document.getElementById('email').value = '';
    }
}
