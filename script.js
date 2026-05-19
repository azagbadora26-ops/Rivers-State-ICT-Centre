// Form Validation

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    if(name === "" || email === "" || phone === "" || course === ""){
        alert("Please fill all fields.");
    }
    else{
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }

});


// Image Slider

let slides = document.querySelectorAll(".slide");

let index = 0;

function showSlides(){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    index++;

    if(index > slides.length){
        index = 1;
    }

    slides[index - 1].classList.add("active");

}

setInterval(showSlides, 3000);