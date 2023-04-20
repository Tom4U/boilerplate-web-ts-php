<?php
try {
    include_once('config.php');

    foreach ($whitelistOrigins as $key => $whitelistOrigin) {
        if (array_key_exists('HTTP_ORIGIN', $_SERVER)) {
            $origin = $_SERVER['HTTP_ORIGIN'];

            if (strpos($origin, $whitelistOrigin) !== false) {
                header("Access-Control-Allow-Origin: $origin");
            }
        }
    }

    header('Content-Type: application/json');
} catch (\Throwable $th) {
    http_response_code(500);
}