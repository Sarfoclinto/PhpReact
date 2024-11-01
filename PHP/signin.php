<?php 

session_start();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json');


$fullname = $username = $password = $results = $count="";
$data = array();

include("connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $jsonData = json_decode(file_get_contents('php://input'), true);

    $username = $jsonData['username'];
    $password = $jsonData['password'];

    // Validate input
    if (empty($username) || empty($password)) {
        echo json_encode(['error' => 'Please fill all fields']);
        exit;
    }else{
        
    }

    // Hash password
    // $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into database
    $query = "SELECT * FROM users WHERE username = '$username' AND password ='$password'";

    $results = mysqli_query($conn,$query);

    $count = mysqli_num_rows($results);

    
    if ($count != 1) {
        echo json_encode(['error' => 'Invalid Credential','status'=>'401']);
    } else {

        $row = mysqli_fetch_assoc($results);
        
        echo json_encode(['redirect'=>'/home','status'=>'200','data'=>array('fullname'=>$row['fullname'],'username'=>$row['username'])]);
        //echo json_encode(['data'=>array($row)]);
    }
  
}

$conn->close();
?>
