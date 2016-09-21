/**
 * Created by Tejas on 8/24/16.
 */
import React from 'react';
import List from './List';
import EmptyList from './EmptyList';
import {Link} from 'react-router';
import uuid from 'uuid';
import Styles from '../styles';

let listArray = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    const request = axios
      .get("tasks.json")
      .then(res => {
        listArray = res.data.tasks;
        this.updateData(listArray)
      })
      .catch(res => {
        if (res instanceof Error) {
          console.log(res.message);
        } else {
          console.log(res.data);
        }
      });
  }

  componentWillUnmount = () => {
    request.abort();
  }

    updateData = (data) => {
      this.setState({
        data
      });
    }

    handleAddItem = (e) => {
      e.preventDefault();
      let newValue = this.refs.inputValue.value.trim();
      let itemId = uuid.v4();
      listArray.push({id: itemId, value: newValue, isDone: false});

      axios.post('savedata.php', {
      id: 232323,
      value: "lalala",
      isDone: false
    })
      .then(function (response) {
      console.log(response);
    })
      .catch(function (response) {
        console.log(response);
      });
    this.updateData(listArray);
    this.refs.inputValue.value = "";
  }

  handleDeleteAll = () => {
    listArray = [];
    this.updateData(listArray);
  }

  handleDeleteDone = () => {
    let i;
    for (i = listArray.length - 1; i >= 0; i -= 1) {
      if (listArray[i].isDone === true) {
        listArray.splice(i, 1);
      }
    }
    this.updateData(listArray);
  }

  handleRemoveListItem = (id) => {
    let i;
    for (i = listArray.length - 1; i >= 0; i -= 1) {
      if (listArray[i].id === id) {
        listArray.splice(i, 1);
      }
    }
    this.updateData(listArray);
  }

  render() {
    return (
      <div style={ Styles.app }>
        <h1 className="text-center">Tasker</h1>
        <form>
          <input type="text" placeholder="Enter Task" ref="inputValue" required/>
          <div className="button-group stacked-for-small">
            <button className="button success" onClick={ this.handleAddItem }>Add New Task</button>
            { this.state.data.length ?
              <button className="button warning" onClick={ this.handleDeleteDone }>Delete Completed
                Tasks</button> : ''  }
            { this.state.data.length ?
              <button className="button alert" onClick={ this.handleDeleteAll }>Delete All Tasks</button> : '' }
          </div>
        </form>
        { this.state.data.length ? <List list={ this.state.data } delete={this.handleRemoveListItem}/> : <EmptyList /> }
      </div>
    )
  }
}

List.propTypes = {
  list: React.PropTypes.array.isRequired,
  delete: React.PropTypes.func.isRequired,
  activeClassName: React.PropTypes.string
}
