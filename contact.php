<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}


$name = stripslashes($name);

$name = htmlspecialchars($name);

$phone = stripslashes($phone);

$phone = htmlspecialchars($phone);


$email = stripslashes($email);

$message = stripslashes($message);


$email = htmlspecialchars($email);

$message = htmlspecialchars($message);






$address = "wlad2806@mail.com"; // ВАШ АДРЕС

$message = "Имя: ".$name."\nМой контактный e-mail: ".$email."\nТелефон: ".$phone."\nСообщение: ".$message."";

$verify = mail($address,$subject,$message,"Content-type:text/plain; Charset=utf-8\r\n");

?>