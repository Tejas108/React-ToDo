<?php
/**
 * Created by PhpStorm.
 * User: Tejas
 * Date: 9/22/16
 * Time: 9:53 PM
 */

if (file_exists('tasks.json')) {

  $data = json_decode(file_get_contents('php://input'));
  $json = json_decode(file_get_contents('tasks.json'), true);

  if ($data->action) {
    $action = $data->action;
  }else {
    echo 'No action specified';
  }

  switch ($action) {
    case 'save':
      echo 'save called';
      $inputData = array(
        'id' => $data->id,
        'value' => $data->value,
        'isDone' => false
      );
      $json[] = $inputData;
      if (file_put_contents('tasks.json', json_encode($json))) {
        echo 'Data successfully saved';
      } else {
        echo 'There was an error saving data';
      }
      break;
    case 'delete':
      echo "delete called";
      foreach ($json as $key => $item) {
        if ($item['id'] == $data->id) {
          unset($json[$key]);
        }
      }
      if (file_put_contents('tasks.json', json_encode(array_values($json)))) {
        echo 'Data successfully deleted';
      } else {
        echo 'There was an error deleting data';
      }
      break;
    case 'clearall':
      if ($action === 'clearall') {
        $clear = '';
      }

      if (file_put_contents('tasks.json', $clear)) {
        echo 'Data successfully cleared';
      } else {
        echo 'There was an error clearing data';
      }
      break;
  }


}