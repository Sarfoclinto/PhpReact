<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json');


$fullname = $username = $password =  "";

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


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $jsonData = json_decode(file_get_contents('php://input'), true);

    $fullname = $jsonData['fullname'];
    $username = $jsonData['username'];
    $password = $jsonData['password'];

    // Validate input
    if (empty($fullname) || empty($username) || empty($password)) {
        echo json_encode(['error' => 'Please fill all fields']);
        exit;
    }

    // Hash password
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into database
    $query = "INSERT INTO users (fullname, username, password) VALUES ('$fullname', '$username', '$passwordHash')";
    $results = mysqli_query($conn,$query);

    if (isset($results)) {
        
        echo json_encode(['success' => 'User created successfully']);
    } else {

        echo json_encode(['error' => 'Error creating user']);
    }
}

$conn->close();
?>
