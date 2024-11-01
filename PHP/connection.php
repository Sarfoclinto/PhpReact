<?php 

// Connect to database
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'reactdb';

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>
