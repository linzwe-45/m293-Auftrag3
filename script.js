
function loginRedirect() {
    const uName = document.querySelector('input[placeholder="Benutzername"]');
    const uPass = document.querySelector('input[placeholder="Passwort"]');

    if (!uName.value || !uPass.value) {
        alert("Bitte geben Sie Benutzername und Passwort ein.");
        return;
    }
    localStorage.setItem("user", uName.value);
    window.location.href = "terminMA.html";
}
function homeRedirect() {
    window.location.href = "startseite.html";
}



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            sidebar.classList.toggle("show");
        });
    }

    // Optional: Sidebar schließen, wenn man außerhalb klickt (UX-Bonus)
    document.addEventListener("click", function(event) {
        const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside && sidebar.classList.contains("show")) {
            sidebar.classList.remove("show");
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const savedEmail = localStorage.getItem("userEmail");
    const savedUname = localStorage.getItem("user");
    if (savedEmail) {
        document.getElementById("display-email").textContent = savedEmail;
    }
    if (savedUname) {
        document.getElementById("display-user").textContent = savedUname;
    }
    localStorage.clear();
});