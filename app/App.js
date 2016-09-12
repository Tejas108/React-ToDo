/**
 * Created by Tejas on 8/24/16.
 */
import React from 'react';
import List from './List';
import EmptyList from './EmptyList';
import {Link} from 'react-router';
import uuid from 'uuid';
import Styles from './styles';


let listArray = [];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: listArray}
  }

  handleAddItem = (e) => {
    e.preventDefault();
    let newValue = this.refs.inputValue.value.trim();

    listArray.push({id: uuid.v4(), value: newValue, isDone: false});
    this.setState({data: listArray});
    this.refs.inputValue.value = "";
  }

  handleDeleteAll = () => {
    listArray = [];
    this.setState({data: listArray});
  }

  handleDeleteDone = () => {
    var i;
    for (i = listArray.length - 1; i >= 0; i -= 1) {
      if (listArray[i].isDone === true) {
        listArray.splice(i, 1);
      }
    }
    this.setState({data: listArray});
  }

  render() {
    const data = this.state.data;

    return (
      <div style={ Styles.app }>
        <h1 className="text-center">Tasker</h1>
        <form onSubmit={ this.handleAddItem }>
          <input type="text" placeholder="Enter Task" ref="inputValue" required/>
          <div className="button-group stacked-for-small">
            <button type="submit" className="button success">Add New Task</button>
            { this.state.data.length ?
              <button className="button warning" onClick={ this.handleDeleteDone }>Delete Completed
                Tasks</button> : ''  }
            { this.state.data.length ?
              <button className="button alert" onClick={ this.handleDeleteAll }>Delete All Tasks</button> : '' }
          </div>
        </form>
        { this.state.data.length ? <List list={ data }/> : <EmptyList /> }
        <Link to={ '/about/' } activeClassName={ "active" }>About</Link>
      </div>
    )
  }
}

List.propTypes = {
  list: React.PropTypes.array.isRequired
}
