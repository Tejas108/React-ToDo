/**
 * Created by Tejas on 8/24/16.
 */
import React from 'react';
import List from './List';
import EmptyList from './EmptyList';
import Alert from './Alert';
import {Link} from 'react-router';
import uuid from 'uuid';
import Styles from '../styles';

let listArray = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isModalOpen: false,
      alertMsg: ''
    }
  }

  componentDidMount = () => {
    const request = axios
      .get("tasks.json")
      .then(res => {
        listArray = res.data;
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

  updateData = (data) => {
    this.setState({
      data
    });
  }

  saveJson = () => {
    axios.post('write.php', {
      data: this.state.data
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleAlert = (val) => {
    let msg = '';
    if(val) {
      msg = "Oops, you forgot to enter a task!";
    }
    this.setState({
      isModalOpen: val,
      alertMsg: msg
    });
  }

  handleAddItem = (e) => {
    e.preventDefault();
    let newValue = this.refs.inputValue.value.trim();
    if(newValue === '' || undefined){
      this.handleAlert(true);
    }else {
      this.handleAlert(false);
      let itemId = uuid.v4();
      listArray.push({id: itemId, value: newValue, isDone: false});
      this.updateData(listArray);
      this.saveJson();

      this.refs.inputValue.value = "";
    }

  }

  handleDeleteAll = () => {
    listArray = [];
    this.updateData(listArray);
    axios.post('write.php', {
      data: []
    });
  }

  handleDeleteDone = () => {
    let i;
    for (i = listArray.length - 1; i >= 0; i -= 1) {
      if (listArray[i].isDone === true) {
        listArray.splice(i, 1);
      }
    }
    this.updateData(listArray);
    this.saveJson();
  }

  handleRemoveListItem = (id) => {
    let i;
    for (i = listArray.length - 1; i >= 0; i -= 1) {
      if (listArray[i].id === id) {
        listArray.splice(i, 1);
      }
    }
    this.updateData(listArray);
    this.saveJson();

  }

  handleAlertClose = () => {
    this.setState({
      isModalOpen: false,
      alertMsg: ''
    })
  }

  render() {
    return (
      <div style={ Styles } className="small-12 columns">
        <Alert show={this.state.isModalOpen} msg={this.state.alertMsg} closeAlert={this.handleAlertClose}/>
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
