<?php
    include_once("database.php");

    $mysqli = new mysqli($db["host"], $db["user"], $db["password"], $db["database"]);
    if ($mysqli->connect_errno) {
        header('HTTP/1.1 500 Internal Server Error');
        exit();
    }
    if ($result = $mysqli->query("SELECT name, score FROM `webAdvanced_Game_Scores` ORDER BY score DESC LIMIT 5")) {
        $res = array();
        while ($row = $result->fetch_assoc())
            $res[] = $row;
        $result->close();
        header("Content-Type: application/json");
        echo json_encode($res);
    }
    $mysqli->close();
?>