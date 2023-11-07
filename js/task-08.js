const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    const { email, password } = event.currentTarget.elements
    const loginData = {
        email,
        password
    };
    
    event.preventDefault();

    if (email.value.length === 0 || password.value.length === 0) {
        alert('Please, fill all the fields!')
    } else {
        loginData.email = email.value
        loginData.password = password.value
        console.log(loginData)
        form.reset()
    }
}