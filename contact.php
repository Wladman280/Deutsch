<?php
//  Предполагаемый код для файла contact.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    $name = stripslashes($name);
    $name = htmlspecialchars($name);

    $phone = stripslashes($phone);
    $phone = htmlspecialchars($phone);

    $email = stripslashes($email);
    $email = htmlspecialchars($email);

    $message = stripslashes($message);
    $message = htmlspecialchars($message);

    $address = "wlad2806@mail.com"; // ВАШ АДРЕС
    $subject = "Сообщение с сайта"; // Тема письма

    $full_message = "Имя: " . $name . "\n";
    $full_message .= "Email: " . $email . "\n";
    $full_message .= "Телефон: " . $phone . "\n";
    $full_message .= "Сообщение: " . $message . "\n";

    //  Дополнительные заголовки для корректной отправки
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    $verify = mail($address, $subject, $full_message, $headers);

    if ($verify) {
        echo "ok"; //  Возвращаем 'ok' для успешной обработки в AJAX
    } else {
        echo "error"; // Возвращаем 'error' для обработки ошибки в AJAX
    }
} else {
    //  Если обращение к файлу не через POST запрос
    echo "error";
}
?>
