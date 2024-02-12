document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('exampleInputPassword1');
    const passwordToggle = document.getElementById('password-toggle');

    passwordToggle.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.innerHTML = '<i class="fa-solid fa-eye"></i>';
        } else {
            passwordInput.type = 'password';
            passwordToggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        }
    });
});