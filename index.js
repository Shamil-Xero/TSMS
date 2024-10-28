const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');

const SignInBtn = document.getElementById('Sign-In');

SignInBtn.addEventListener('click', () => {
    window.location.href = 'home.html';
});

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});