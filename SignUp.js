function validfname() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var ht = document.getElementById("town").value;
    var pro = document.getElementById("Profession").value;

for (var i = 0; i <64; i++){
    if (isNaN(validfname())) {
        document.getElementById("output").textContent = "Input is valid";
    } else {
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc.";
    }
}

function validEmail(inputText){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputText.value.match(mailformat))
        {
            alert("Valid email address!");
            document.form.email.focus();
            return true;
        }
        else
        {
            alert("You have entered an invalid email address!");
            document.form.email.focus();
            return false;
    }
}


}

    function cancel(){

    }
