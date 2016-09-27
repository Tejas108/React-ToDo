/**
 * Created by Tejas on 9/24/16.
 */
import React from 'react';
import Styles from '../styles';

const Alert = (props) => {

  return (
    <div className={props.show ? 'data-alert ' : 'data-alert hide'} style={Styles.alertWarning}>
      {props.msg}
      <button tabindex="0" aria-label="Close Alert" style={Styles.alertClose} onClick={props.closeAlert}>×</button>
    </div>
  )

}

export default Alert;