<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $to = "sma@arhtc.ru"; // Замени на нужный email
    $subject = "Новое сообщение с сайта";
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
    $headers = "From: $email";
    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка отправки сообщения.";
    }
} else {
    echo "Некорректный метод отправки данных.";
}
?>