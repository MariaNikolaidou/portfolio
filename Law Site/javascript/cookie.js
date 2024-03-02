// Συνάρτηση που εμφανίζει το modal και τα κουμπιά
function showCookieModal() {
    document.getElementById("cookieModal").style.visibility = "visible";
    document.getElementById("cookieButton").style.visibility = "visible";
}

// Καλώ τη συνάρτηση για να εμφανίσω το modal με καθυστέρηση 3 δευτερολέπτων
setTimeout(showCookieModal, 3000);

// Συνάρτηση για αποδοχή cookies
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    let modal = document.getElementById("cookieModal");
    modal.style.visibility = "hidden";
}

// Συνάρτηση για απόρριψη cookies
function rejectCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    let modal = document.getElementById("cookieModal");
    modal.style.visibility = "hidden";
}
// Κώδικας για να εξαφανίζει το modal μετά το κλικ στο κουμπί
document.getElementById("cookieButton").addEventListener("click", function () {
    let modal = document.getElementById("cookieModal");
    modal.style.visibility = "hidden";
    document.getElementById("cookieButton").style.visibility = "hidden";
});


