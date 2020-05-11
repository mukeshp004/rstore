<?php 

function show($data, $flag, $comment = '') {
    echo "<pre> ================ $comment ================== \n";
    if(is_array($data) === true || is_object($data) === true) {
        var_dump($data); 
    } else { 
        echo $data;
    }
    

    echo "\n\n ================ $comment ================== </pre>";

    if($flag === true) {
        die();
    }

}

?>