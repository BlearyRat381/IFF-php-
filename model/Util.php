<?php
class Util {
    
    public static $servername ="localhost";
    public static $username ="root";
    public static $password ="";
    public static $dbname ="barbearia";

    public static function con(){
        $conn= new mysql(
            self::$servername,
            self::$username,
            self::$password,
            self::$dbname,
        );
        if($conn->connect_error)
         die("conexão não estabelecida");
        return $conn;
    }


    public function SalvarUtil($dados){
    }
    public function ListarUtil(){
    }
    public function UpdateUtil($util){
    }
}

Util::con();

?>