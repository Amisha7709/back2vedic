<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$response = []; // Create an empty associative array to store the response data

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $email = $_POST["email"];
        $mobileNo = $_POST["mobileNo"];
        $message = $_POST["message"];

        if (empty($firstName) || empty($lastName) || empty($email) || empty($mobileNo) || empty($message)) {
            $response["message"] = "Please fill all the fields"; // Set the error message in the response
        }else{
            $response["data"] = [
                "name" => "$firstName $lastName",
                "email" => $email,
                "mobile" => $mobileNo,
                "message" => $message,
                "address" => $address
            ];

            // Handle the form submission
            $to = "amisha.satpaise@labhi.in";
            $subject = "Form Submission";
            
            $headers = "From: $email";
            
            if (isset($selectedPayment["selectedPayment"])) {

                $address = $_POST["address"];
                $totalPrice = $_POST["totalPrice"];
                $quantity = $_POST["quantity"];
                $selectedPayment = $_POST["selectedPayment"];

                $boundary = md5(time());
                $headers .= "\r\nMIME-Version: 1.0\r\n";
                $headers .= "Content-Type: application/mixed; boundary=\"$boundary\"\r\n";

                $message_body = "--$boundary\r\n";

                $message_body .= "Name: $firstName $lastName\r\n";
                $message_body .= "Email: $email\r\n";
                $message_body .= "Mobile: $mobileNo\r\n";
                $message_body .= "Quantity: $quantity\r\n";
                $message_body .= "TotalPrice:\r\n$totalPrice\r\n";
                $message_body .= "Address:\r\n$address\r\n";
                $message_body .= "SelectedPayment:\r\n$selectedPayment\r\n";
                $message_body .= "\r\n";

            } else {
                // contact page
                $message_body = "Name: $firstName $lastName\r\nEmail: $email\r\nMobile: $mobileNo\r\nMessage:\r\n$message\r\n";
            }

            if (mail($to, $subject, $message_body, $headers)) {
                $response["message"] = "Form submit successfully!";
            } else {
                $response["message"] = "Form submit failed.";
            }
        }
    } else {
        $response["message"] = "Invalid request method. Only POST requests are allowed.";
    }
} catch (Exception $e) {
    $response["message"] = 'Caught exception: ' . $e->getMessage();
}

echo json_encode($response); // Convert the response array to JSON and echo it
?>
