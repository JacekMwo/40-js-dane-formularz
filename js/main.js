function displayData() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;

    document.getElementById("nameOutput").innerHTML = "Imię: " + name;
    document.getElementById("surnameOutput").innerHTML = "Nazwisko: " + surname;
    document.getElementById("phoneOutput").innerHTML = "Numer telefonu: " + phone;
}