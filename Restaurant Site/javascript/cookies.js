// Συνάρτηση που εμφανίζει το modal και τα κουμπιά
function showCookieModal() {
    document.getElementById("cookieModal").style.visibility = "visible";
    document.getElementById("cookieButton").style.visibility = "visible";
}

// Έλεγχος εάν το modal έχει ήδη εμφανιστεί
if (!localStorage.getItem("modalDisplayed")) {
    // Εμφάνιση του modal με καθυστέρηση 3 δευτερολέπτων
    setTimeout(showCookieModal, 3000);
    // Καταχώρηση σήματος ότι το modal εμφανίστηκε
    localStorage.setItem("modalDisplayed", "true");
}

// Κώδικας για την αποθήκευση της αποδοχής των cookies και απόκριση του modal
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    hideCookieModal();
}

// Κώδικας για την αποθήκευση της απόρριψης των cookies και απόκριση του modal
function rejectCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    hideCookieModal();
}

// Κώδικας για την απόκρυψη του modal και των κουμπιών
function hideCookieModal() {
    document.getElementById("cookieModal").style.visibility = "hidden";
    document.getElementById("cookieButton").style.visibility = "hidden";
}

// Καλούμε τις συναρτήσεις αποδοχής και απόρριψης των cookies όταν ο χρήστης πατάει τα αντίστοιχα κουμπιά
document.getElementById("acceptButton").addEventListener("click", function () {
    acceptCookies();
});

document.getElementById("rejectButton").addEventListener("click", function () {
    rejectCookies();
});
