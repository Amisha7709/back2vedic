<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $formData = json_decode(file_get_contents("php://input"), true);

    // Validate and sanitize the common data
    $firstName = isset($formData['firstName']) ? trim($formData['firstName']) : '';
    $lastName = isset($formData['lastName']) ? trim($formData['lastName']) : '';
    $email = isset($formData['email']) ? trim($formData['email']) : '';
    $mobileNo = isset($formData['mobileNo']) ? trim($formData['mobileNo']) : '';


    if (isset($formData['message'])) {
        $message = isset($formData['message']) ? trim($formData['message']) : '';

        if (empty($firstName) || empty($lastName) || empty($email) || empty($mobileNo) || empty($message)) {
            $response = array("message" => "Please fill all the fields");
        } else {

      // Handle the form submission - Send email
        $to = "amisha.satpaise@labhi.in";
        $subject = "Form Submission";
        $headers = "From: $email";

        $emailBody = "Name: $firstName $lastName\n";
        $emailBody .= "Email: $email\n";
        $emailBody .= "Mobile Number: $mobileNo\n";
        $emailBody .= "Message: $message\n";

        mail($to, $subject, $emailBody, $headers);
        $response = array("message" => "Form submitted successfully!");

        }
    } else {
        $selectedProduct = isset($formData['selectedProduct']) ? trim($formData['selectedProduct']) : '';
        $quantity = isset($formData['quantity']) ? intval($formData['quantity']) : 0;
        $totalPrice = isset($formData['totalPrice']) ? floatval($formData['totalPrice']) : 0.0;
        $address = isset($formData['address']) ? trim($formData['address']) : '';
        $selectedPayment = isset($formData['selectedPayment']) ? trim($formData['selectedPayment']) : '';

        if (empty($firstName) || empty($lastName) || empty($email) || empty($mobileNo) || empty($quantity) || $quantity <= 0 || empty($totalPrice) || $totalPrice <= 0 || empty($address) || empty($selectedPayment)) {
            $response = array("message" => "Invalid data received");
        } else {

            $to = "amisha.satpaise@labhi.in";
            $subject = "Order Confirmation";
            $headers = "From: $email";

            $emailBody = "Product: $selectedProduct\n";
            $emailBody .= "Name: $firstName $lastName\n";
            $emailBody .= "Email: $email\n";
            $emailBody .= "Mobile Number: $mobileNo\n";
            $emailBody .= "Quantity: $quantity\n";
            $emailBody .= "Total Price: $totalPrice\n";
            $emailBody .= "Address: $address\n";
            $emailBody .= "Payment Method: $selectedPayment\n";

            // Send the email
           mail($to, $subject, $emailBody, $headers);
           $response = array("message" => "Order confirmed successfully!");

        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    $response = array("message" => "Invalid request method");
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
