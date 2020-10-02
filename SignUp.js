function validfname() {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var ht = document.getElementById("town").value;
    var pro = document.getElementById("Profession").value;
    var email = document.getElementById("email").value;

    if (fn && ln && ht && pro !== String)
        document.getElementById("output").textContent = "Input is not valid. Only text is allowed. Any other characters are invalid, such as numbers and '+*/!@#$%^&*(), etc.";
}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
