/**
 * Created by Tejas on 8/24/16.
 */
import React from 'react';
import List from './List';
import {Link} from 'react-router';
import uuid from 'uuid';
import Styles from './styles';


const listArray = [];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Banana',
      data: listArray
    }
  }

  handleAddItem = (e) => {
    e.preventDefault();
    if(this.refs.inputValue.value) {
      let newValue = this.refs.inputValue.value.trim();

      this.setState({
        name: newValue
      });
      listArray.push({id: uuid.v4(), value: newValue, isDone: false});
      this.setState({data: listArray});
      this.refs.inputValue.value = "";
    } else {
      alert("Oops, you forgot to enter something");
    }
  }

  render() {
    const data = this.state.data;
    let username = this.state.name;

    return (
      <div style={Styles.app}>
        <h1>Hellloooooo, { this.state.name}!</h1>
        <form>
          <input type='text' defaultValue="" ref="inputValue"/>
          <button type="submit" onClick={this.handleAddItem} className="button success expanded">Submit</button>
        </form>
        <br/>
        <List list={data}/>
        <Link to={'/about/' + username} activeClassName={"active"}>About</Link>
      </div>
    )
  }
}

List.propTypes = {
  list: React.PropTypes.array.isRequired,
}
