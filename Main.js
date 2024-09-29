function validateForm(event){
    event.preventDefault()

    let contactForm = document.getElementById("contact_form");
    let Name = document.getElementById("name");
    let Email = document.getElementById("email");
    let PhoneNumber = document.getElementById("phonenumber");
    let Message = document.getElementById("message");
    let emailOption = document.getElementById("Email");
    let phoneOption = document.getElementById("Phonenumber");
    let error = document.getElementById("error");

    error.innerHTML = "";

    // if(Name.value.length < 3){
    //     error.innerHTML = "Name must be at least 3 characters!"
    //     alert("Name must be at least 3 characters!")
    // }
    // else if(!Email.value.endsWith("@gmail.com")){
    //     error.innerHTML = "Email must ended with '@gmail.com'!"
    //     alert("Email must ended with '@gmail.com'!")
    // }
    // else if(PhoneNumber.value.length < 12){
    //     error.innerHTML = "Phone Number must be atleast 12 Numbers!"
    //     alert("Phone Number must be atleast 12 Numbers!")
    // }
    // else if(Message.value == null){
    //     error.innerHTML = "Message cannot be empty!"
    //     alert("Message cannot be empty!")
    // }
    // else if(!(email.checked || phonenumber.checked)){
    //     error.innerHTML = "You must picked either one!"
    //     alert("You must picked either one!")
    // }
    // else{
    //     innerHTML = ""
    //     alert("Successful!")
    //     contactForm.submit()
    // }

    if (Name.value.length < 3) {
        error.innerHTML = "Name must be at least 3 characters!";
        return;
    }

    if (!Email.value.endsWith("@gmail.com")) {
        error.innerHTML = "Email must end with '@gmail.com'!";
        return;
    }

    if (PhoneNumber.value.length < 12 || isNaN(PhoneNumber.value)) {
        error.innerHTML = "Phone number must be at least 12 digits!";
        return;
    }

    if (Message.value.trim() === "") {
        error.innerHTML = "Message cannot be empty!";
        return;
    }

    if (!(emailOption.checked || phoneOption.checked)) {
        error.innerHTML = "You must choose either Email or Phone Number as your contact method!";
        return;
    }

    // Successful validation
    alert("Form submitted successfully!");
    contactForm.submit();
}