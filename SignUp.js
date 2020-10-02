function validfname() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var ht = document.getElementById("town").value;
    var pro = document.getElementById("Profession").value;


    if (typeof fn !== String) {
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc.";
    }

    if (typeof ln !== String) {
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc.";
    }

    if (typeof ht !== String) {
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc.";
    }

    if (typeof pro !== String) {
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc.";
    }
}

function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");

    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email";
        text.style.color = "00ff00";

    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "00ff00";
    }

    function cancel(){

    }



}
