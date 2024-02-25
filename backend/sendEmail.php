<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Configuração do PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com';  // Troque para o servidor SMTP do seu provedor de e-mail
    $mail->SMTPAuth   = true;
    $mail->Username   = 'seu-email@example.com';
    $mail->Password   = 'sua-senha';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Configuração dos parâmetros do e-mail
    $mail->setFrom('gabriel.jtoledouv@gmail.com', 'Gabriel');
    // $mail->addAddress('destinatario@example.com', 'Nome do Destinatário');
    $mail->Subject = 'Novo contato do formulário';
    $mail->Body    = "Nome: {$_POST['nome']}\nE-mail: {$_POST['email']}\nTelefone: {$_POST['telefone']}\nMensagem: {$_POST['mensagem']}";

    $mail->send();
    echo 'E-mail enviado com sucesso!';
} catch (Exception $e) {
    echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
}
