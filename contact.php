<?php 

if (isset($_POST['name'])) {
    $name = stripslashes(htmlspecialchars($_POST['name']));
} else {
    $name = '';
}

if (isset($_POST['phone'])) {
    $phone = stripslashes(htmlspecialchars($_POST['phone']));
} else {
    $phone = '';
}

if (isset($_POST['email'])) {
    $email = stripslashes(htmlspecialchars($_POST['email']));
} else {
    $email = '';
}

if (isset($_POST['message'])) {
    $message = stripslashes(htmlspecialchars($_POST['message']));
} else {
    $message = '';
}

// Ваш адрес
$address = "wlad2806@mail.com"; 

// Тема письма
$subject = "Новое сообщение с сайта"; 

// Формат сообщения
$body = "Имя: ".$name."\nМой контактный e-mail: ".$email."\nТелефон: ".$phone."\nСообщение: ".$message;

// Отправка почты
$verify = mail($address, $subject, $body, "Content-type:text/plain; Charset=utf-8\r\n");

// Проверка успешности отправки
if ($verify) {
    echo "Сообщение успешно отправлено!";
} else {
    echo "Ошибка при отправке сообщения.";
}

?>
