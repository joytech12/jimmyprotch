const signInBtnLink = document.querySelector('.signInBtn-Link');
const signupBtnLink = document.querySelector('.signupBtn-Link');
const wrapper = document.querySelector('.wrapper');

signupBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active');

});

signInBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active');

});

