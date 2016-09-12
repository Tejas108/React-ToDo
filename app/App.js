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
    let newValue = this.refs.inputValue.value.trim();

    listArray.push({ id: uuid.v4(), value: newValue, isDone: false });
    this.setState({ data: listArray });
    this.refs.inputValue.value = "";
  }

  handleDeleteAll = () => {
    this.setState({ ata: [] });
  }

  handleDeleteDone = () => {
    const items = this.state.data.filter(el => !el.isDone);
    this.setState({ data: items });
  }

  render() {
    const data = this.state.data;

    return (
      <div style={ Styles.app }>
        <h1 className="text-center">Tasker</h1>
        <form onSubmit={ this.handleAddItem }>
          <input type="text" placeholder="Enter Task" ref="inputValue" required />
          <div className="button-group expanded">
            <button type="submit" className="button success expanded">Add New Task</button>
            <button className="button warning" onClick={ this.handleDeleteDone }>Delete Completed Tasks</button>
            <button className="button alert" onClick={ this.handleDeleteAll }>Delete All Tasks</button>
          </div>
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
