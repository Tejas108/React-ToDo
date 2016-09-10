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
    this.state = { data: listArray }
  }

  handleAddItem = (e) => {
    e.preventDefault();
    if(this.refs.inputValue.value) {
      let newValue = this.refs.inputValue.value.trim();

      listArray.push({ id: uuid.v4(), value: newValue, isDone: false });
      this.setState({ data: listArray });
      this.refs.inputValue.value = "";
    } else {
      alert("Oops, you forgot to enter something");
    }
  }

  render() {
    const data = this.state.data;

    return (
      <div style={ Styles.app }>
        <h1 className="text-center">Tasker</h1>
        <form>
          <input type='text' defaultValue="" ref="inputValue"/>
          <button type="submit" onClick={ this.handleAddItem } className="button success expanded">Submit</button>
        </form>
        <br/>
        <List list={ data }/>
        <Link to={ '/about/' } activeClassName={ "active" }>About</Link>
      </div>
    )
  }
}

List.propTypes = {
  list: React.PropTypes.array.isRequired,

}
