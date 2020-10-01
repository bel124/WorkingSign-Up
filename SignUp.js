function validfname() {
    var fn = document.getElementById("fname").value;
    var ln = documnet.getElementById("lname").value;
    var ht = document.getElementById("town").value;
    var pro = document.getElementById("Profession").value;

    if (fn && ln && ht && pro !== String)
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc."
}

function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(SignUp1.email.value))
        {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
}
