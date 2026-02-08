function submitForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    alert("Application submitted successfully!");
    return true;
}
