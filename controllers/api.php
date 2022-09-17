<?php
require_once '../models/Api.php';

$accion =  (isset($_POST['accion'])) ?  trim($_POST['accion'])  :  "";
$user =  new  User();

switch ($accion){
    case 'getUserList':
           $rps = $user->getUserList();
           echo $rps;
        break;
}