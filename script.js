const links = document.querySelectorAll(".link");
const forms = document.querySelector(".forms");
const showHide = document.querySelectorAll(".hide-show");
const passwordFields = document.querySelectorAll(".field input[type='password']");

showHide.forEach(showicon=>{
    showicon.addEventListener("click", ()=>{
        const passwordField = showicon.parentNode.querySelector("input[type='password']");
        if(passwordField.type === 'password'){
            passwordField.type = 'text';
            showicon.classList.replace("bx-hide", "bx-show");
        } else {
            passwordField.type = 'password';
            showicon.classList.replace("bx-show", "bx-hide");
        }
    })
})

links.forEach(link =>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        forms.classList.toggle("Show-Signup");
        const currentForm = link.parentNode.querySelector(".form");
        const otherForm = currentForm.classList.contains("login") ? forms.querySelector(".form.signup") : forms.querySelector(".form.login");
        currentForm.classList.toggle("hidden");
        otherForm.classList.toggle("hidden");
    })
})