let toLogin = document.getElementById('js-move-signin');
toLogin.addEventListener('click', toLoginBox);
const msg = document.querySelector(".fa-envelope");
function toLoginBox() {
  let loginForm = document.getElementById('signin-form');
  let signupForm = document.getElementById('signup-form');
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  }
}