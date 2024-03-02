<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Σύνδεση στη βάση δεδομένων MySQL
    $servername = "localhost";
    $username = "your_username"; // Θέστε το όνομα χρήστη της βάσης δεδομένων
    $password = "your_password"; // Θέστε τον κωδικό πρόσβασης της βάσης δεδομένων
    $dbname = "your_database"; // Θέστε το όνομα της βάσης δεδομένων

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Έλεγχος σύνδεσης
    if ($conn->connect_error) {
        die("Αποτυχία σύνδεσης στη βάση δεδομένων: " . $conn->connect_error);
    }

    // Αποθηκεύουμε τα δεδομένα από τη φόρμα σε μεταβλητές
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Εκτελούμε την εισαγωγή των δεδομένων στη βάση δεδομένων
    $sql = "INSERT INTO contact_form (fullname, email, phone, message)
            VALUES ('$fullname', '$email', '$phone', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Το μήνυμα απεστάλη με επιτυχία.";
        
        // Αποστολή email ειδοποίησης
        $to = "your@example.com"; // Θέστε το email σας εδώ
        $subject = "Νέο μήνυμα από φόρμα επικοινωνίας";
        $message = "Ονοματεπώνυμο: $fullname\n";
        $message .= "Email: $email\n";
        $message .= "Τηλέφωνο: $phone\n";
        $message .= "Μήνυμα: $message\n";

        mail($to, $subject, $message);
    } else {
        echo "Σφάλμα κατά την αποστολή του μηνύματος: " . $conn->error;
    }

    $conn->close(); // Κλείσιμο σύνδεσης με τη βάση δεδομένων
}
?>
