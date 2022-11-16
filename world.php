<?php
header('Access-Control-Allow-Origin: *');

$host = 'localhost:8888';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
 

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);


if ($_SERVER['REQUEST_METHOD'] == 'GET'){

  
  if (isset($_GET['country']) && isset($_GET['context']) && !empty($_GET['country'])){
  
    $country= ucwords(trim(filter_input($_GET['country'], FILTER_SANITIZE_STRING))) ;
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'"); 
    ?>

    <table>
      <tr>
        <th> Country Name </th>
        <th> Continent </th>
        <th> Independence </th>
        <th> Head of State </th>
      </tr>
      <tbody>
        <?php foreach ($results as $row): ?>
          <tr>
            <td><?= $row['name']?></td>
            <td><?= $row['continent']?></td>
            <td><?= $row['independence_year']?></td>
            <td><?= $row['head_of_state']?></td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>

     
  <?php}

}

?>

