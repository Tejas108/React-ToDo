<?php
/**
 * User: Tejas
 * Date: 9/20/16
 * Time: 11:00 AM
 */

if (file_exists('tasks.json')) {

  $data = json_decode(file_get_contents('php://input'));
  $tmpArray = json_decode(file_get_contents('tasks.json'), true);

  $inputData = array(
    'id' => $data->id,
    'value' => $data->value,
    'isDone' => false
  );

  $tmpArray[] = $inputData;

  $data = json_encode($tmpArray);
  if (file_put_contents('tasks.json', $data)) {
    echo 'Data successfully stored';
  } else {
    echo 'There was an error writing data';
  }
};

