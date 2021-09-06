const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("emailLogin");
const newEmail = document.getElementById("email");
const password = document.getElementById("passwordLogin");
const newPassword = document.getElementById("password");
let isValid;

document.getElementById("noAccount").addEventListener("click", e =>{
    e.preventDefault();
    document.getElementById("formLogin").classList.add("formHidden");
    document.querySelector("h2").innerText = "Create Account";
    document.getElementById("formRegister").classList.remove("formHidden");
    emptyFields();
    
});

document.getElementById("haveAccount").addEventListener("click", e =>{
    e.preventDefault();
    document.getElementById("formRegister").classList.add("formHidden");
    document.querySelector("h2").innerText = "Login";
    document.getElementById("formLogin").classList.remove("formHidden");
    emptyFields();
});

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputsLogin();
    if(isValid === 2)
    {
        document.getElementById("container").style.display = "none";
        document.getElementById("successMessage").innerText = "You have successfully logged in!"
        document.getElementById("successMessage").style.display = "block";
    }
    
});

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputsRegister();
    if(isValid === 4)
    {
        document.getElementById("container").style.display = "none";
        document.getElementById("successMessage").innerText = "You have successfully created account!"
        document.getElementById("successMessage").style.display = "block";
    }
    
});

function checkInputsLogin(){
    isValid = 0;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ""){
        errorInput(email, "Email cannot be empty!");
        isValid = 0;
    }
    else if(!isEmail(emailValue)){
        errorInput(email, "Email is not valid");
        isValid = 0;
    }
    else{
        successInput(email);
        isValid += 1;
        
    }

    if(passwordValue === ""){
        errorInput(password, "Password cannot be empty!");
        isValid = 0;
    }
    else{
        successInput(password);
        isValid +=1;
        
    }
}

function checkInputsRegister(){
    isValid = 0;
    const firstnameValue = firstName.value.trim();
    const lastnameValue = lastName.value.trim();
    const newemailValue = newEmail.value.trim();
    const newpasswordValue = newPassword.value.trim();

    if(firstnameValue === ""){
        errorInput(firstName, "First Name cannot be empty!");
        isValid = 0;
    }
    else{
        successInput(firstName);
        isValid += 1;
    }

    if(lastnameValue === ""){
        errorInput(lastName, "Last Name cannot be empty!");
        isValid = 0;
    }
    else{
        successInput(lastName);
        isValid += 1;
    }

    if(newemailValue === ""){
        errorInput(newEmail, "Email cannot be empty!");
        isValid = 0;        
    }
    else if(!isEmail(newemailValue)){
        errorInput(newEmail, "Email is not valid");
        isValid = 0;
    }
    else{
        successInput(newEmail);
        isValid += 1;
    }

    if(newpasswordValue === ""){
        errorInput(newPassword, "Password cannot be empty!");
        isValid = 0;
    }
    else{
        successInput(newPassword);
        isValid += 1;
    }
}

function emptyFields(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    newEmail.value = "";
    password.value = "";
    newPassword.value = "";

    const x = document.getElementsByTagName("small");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";   
    }
}

function errorInput(input, message){
    const formField = input.parentElement;
    const errorMessage = formField.querySelector("small");
    errorMessage.innerText = message;
    errorMessage.style.display = "inline-block";
    formField.className = "formField error";
}

function successInput(input){
    const formField = input.parentElement;
    formField.className = "formField success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
