<?php
if (isset($_POST['name']) && isset($_POST['email'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $to = 'crhaag@threethousandthirty.com';
  $subject = "New message from 3030 Forex";
  $body = '<html>
            <body>
              <h2>Feedback- 3030Forex.com</h2>
              <hr>
              <p>Name:<br>'.$name.'</p>
              <p>Email:<br>'.$email.'</p>
            </body>
          </html>';
//headers
$headers = "From: ".$name." <".$email.">\r\n";
$headers = "Reply-To: ".$email."\r\n";
$headers = "MIME-Version: 1.0\r\n";
$headers = "Content-type: text/html; charset=utf-8";
//send
$send = mail($to, $subject, $body, $headers);
if ($send) {
  echo '<br>';
  echo "Thanks for reaching out.  We will respond promptly.";
} else {
  echo 'error';
}
}
?>

<!DOCTYPE html>

<html lang="en">
<head>
  <title>3030 Forex</title>
  <link rel="shortcut icon" type="image/x-icon" href="resources/favicon.ico" />
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- load MUI -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <div class = "col">
      </div>
      <div class = "col-10" id = 'navDiv'>
        <nav id = "navBar" class="nav nav-pills nav-justified"></nav>
      </div>
      <div class = "col">
      </div>
    </div>
  </div>

  <div id = 'navDivider'>
  </div>

  <div id = 'headerDiv'>
    <header>
        <h1>International currency transfers</h1>
        <h2>World class service.  Better rates.</h2>
        <h2>Fast and simple.</h2>
    </header>
  </div>

  <div class = "container-fluid" id = "wrapper">
    <div class='row'>
      <div class='col'>
        <h2>Have a question?  Get in touch</h2>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
        <form action="" method="post">
          <input type="text" name="name" placeholder="Your name">
          <br>
          <input type="text" name="email" placeholder="Your email">
          <br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>

  <script src="pageStructure.js"></script>
</body>
</html>
