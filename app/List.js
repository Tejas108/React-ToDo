/**
 * Created by Tejas on 8/25/16.
 */
import React from 'react';
import Styles from './styles';
import FilterButtons from './FilterButtons';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: '' }
  }

  handleRemoveItem = (e, index) => {
    let updatedArray = this.props.list.splice(index, 1);
    this.setState({data: updatedArray});
  }

  handleToggleComplete = (index) => {
    let items = this.props.list;
    items[index].isDone = !items[index].isDone;
    this.setState({status: 'all'});
  }

  handleShowCompleted = () => {
    this.setState({ status: true });
  }

  handleShowAll = () => {
    this.setState({ status: 'all' });
  }

  handleShowIncomplete = () => {
    this.setState({ status: false });
  }

  render() {
    let items = this.props.list;
    let status = this.state.status;
    let itemCount = this.props.list.length;
    let doneCount = this.props.list.filter(item => item.isDone).length;
    let notDoneCount = this.props.list.filter(item => !item.isDone).length;

    switch (status) {
      case false:
        items = items.filter(el => !el.isDone);
        notDoneCount = items.length;
        break;
      case true:
        items = items.filter(el => el.isDone);
        break;
      case 'all':
        items = items.filter(el => el);
        itemCount = items.length;
        break;
    }

    let listItems = items.map((item, index) => {
      return (
        <li style={ Styles.list.item} className={ items[index].isDone ? "isDone" : "notDone" } key={ index }>
          <form style={ Styles.list.form }>
            <input type="checkbox" onChange={ e=>this.handleToggleComplete(index) } checked={items[index].isDone ? "checked" : ""}/>
          </form>
          <span className="float-left">{item.value}</span>
          <button className="button alert float-right" onClick={ e=>this.handleRemoveItem(e, index) }>X</button>
        </li>
      )
    }, this);
    return (
      <div>
        <FilterButtons
          showCompleted = { this.handleShowCompleted }
          showIncomplete = { this.handleShowIncomplete }
          showAll = { this.handleShowAll }
          count = { itemCount }
          notDoneCount = { notDoneCount }
          countDone = { doneCount }
        />
        <ul style={ Styles.list.parent }>
          { listItems }
        </ul>
      </div>
    )
  }

}
List.propTypes = {
  list: React.PropTypes.array
}


export default List;