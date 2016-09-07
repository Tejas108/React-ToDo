/**
 * Created by Tejas on 8/27/16.
 */
import React from 'react';

const About = (props) => {
  let name = props.params.username;
  let msg = '';
  name == 'tejas' ? msg = 'Good to see you' : '';
  return (
    <div>
      <h1 className={name == 'tejas' ? 'purple' : 'green'}>About Page for {props.params.username}</h1>
      <p>{msg}</p>
    </div>
  )
}

export default About;