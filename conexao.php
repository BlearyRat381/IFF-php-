
<?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "barbearia"; //  <---- nome da base de dados aqui
    
                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
                }
    
                $conn->close();
                ?> 
                
            