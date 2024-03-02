<!DOCTYPE html>
<html>
    <body>
    <?php
     htmlspecialchars($_SERVER["PHP_SELF"]);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Λήψη των δεδομένων από τη φόρμα
    $name = $_POST["fname"];
    $email = $_POST["email"];
    $phone = $_POST["tel"];
    $subject = $_POST["theme"];
    $message = $_POST["message"];

    // Επεξεργασία των δεδομένων, εδώ μπορείς να προσθέσεις την αποστολή email ή την αποθήκευση σε βάση δεδομένων
?>
    <h2>Έχετε λάβει ένα νέο μήνυμα</h2>
    <p><b>Όνομα:</b> <?php echo $name; ?></p>
    <p><b>Email:</b> <?php echo $email; ?></p>
    <p><b>Τηλέφωνο:</b> <?php echo $phone; ?></p>
    <p><b>Θέμα:</b> <?php echo $subject; ?></p>
    <p><b>Μήνυμα:</b> <?php echo $message; ?></p>
<?php
}
?>


</body>
</html>