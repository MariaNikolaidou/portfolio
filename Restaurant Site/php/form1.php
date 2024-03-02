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
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $date = $_POST['date'];
    $num_people = $_POST['num_people'];
    $time = $_POST['time'];

    // Εκτελούμε την εισαγωγή των δεδομένων στη βάση δεδομένων
    $sql = "INSERT INTO reservations (name, phone, email, date, num_people, time)
            VALUES ('$name', '$phone', '$email', '$date', '$num_people', '$time')";

    if ($conn->query($sql) === TRUE) {
        echo "Η κράτηση πραγματοποιήθηκε με επιτυχία.";

        // Αποστολή email
        $to = "your@example.com"; // Θέστε το email σας εδώ
        $subject = "Νέα κράτηση";
        $message = "Κράτηση από: $name\n";
        $message .= "Τηλέφωνο: $phone\n";
        $message .= "Email: $email\n";
        $message .= "Ημερομηνία: $date\n";
        $message .= "Αριθμός ατόμων: $num_people\n";
        $message .= "Ώρα: $time\n";

        mail($to, $subject, $message);
    } else {
        echo "Σφάλμα κατά την κράτηση: " . $conn->error;
    }

    $conn->close(); // Κλείσιμο σύνδεσης με τη βάση δεδομένων
}
?>
