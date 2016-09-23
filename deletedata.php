<?php
/**
 * User: Tejas
 * Date: 9/20/16
 * Time: 11:00 AM
 */

if (file_exists('tasks.json')) {

  $data = file_get_contents('php://input');
  $tmpJson = json_decode(file_get_contents('tasks.json'),true);

  foreach ($tmpJson as $key => $item) {
    if ($item['id'] == $data) {
      unset($tmpJson[$key]);
    }
  }

  if(file_put_contents('tasks.json', json_encode(array_values($tmpJson)))) {
    echo 'Data success';
  } else {
    echo 'There was an error writing data';
  }
};
