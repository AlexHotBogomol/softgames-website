<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json">
    <title>Barebones WordPress Theme</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600|Roboto:300i,400,400i,500&display=swap" rel="stylesheet" />

</head>
    <body>
        <div id="root"></div>
    </body>
</html>
