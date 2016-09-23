<?php
/**
 * Created by PhpStorm.
 * User: Tejas
 * Date: 9/22/16
 * Time: 9:53 PM
 */

if(file_exists('tasks.json')){

  $data = json_decode(file_get_contents('php://input'),true);
  $json = json_encode($data['data']);

  if (file_put_contents('tasks.json', $json)) {
    echo 'Data successfully saved';
  } else {
    echo 'There was an error saving data';
  }

}else {
  echo "Can't find tasks.json";
}

